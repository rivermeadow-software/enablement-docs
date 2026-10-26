// Decision-tree content for the troubleshooting tool.
// This is pure data — extend a category or add a new one by editing this file only.
// Structure: TREE[categoryKey] = { name, blurb, entry, nodes: {...}, resolutions: {...} }
//   nodes[id]       = { kicker, q, options: [{ label, to }] }   // `to` points at a node or resolution id
//   resolutions[id] = { severity: 'low'|'med'|'high', title, desc, steps: [string, ...] }

export const ICONS = {
  connectivity: (
    <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8">
      <path d="M5 12.5a7 7 0 0 1 14 0" />
      <path d="M8.5 15a3.5 3.5 0 0 1 7 0" />
      <circle cx="12" cy="18" r="1.3" fill="currentColor" stroke="none" />
    </svg>
  ),
  performance: (
    <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8">
      <path d="M3 18h3l3-9 4 14 3-11 2 6h3" />
    </svg>
  ),
  auth: (
    <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8">
      <rect x="5" y="10.5" width="14" height="9" rx="1.5" />
      <path d="M8 10.5V7.5a4 4 0 0 1 8 0v3" />
    </svg>
  ),
  data: (
    <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8">
      <ellipse cx="12" cy="6" rx="7" ry="2.6" />
      <path d="M5 6v6c0 1.4 3.1 2.6 7 2.6s7-1.2 7-2.6V6" />
      <path d="M5 12v6c0 1.4 3.1 2.6 7 2.6s7-1.2 7-2.6v-6" />
    </svg>
  ),
  integrations: (
    <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8">
      <rect x="3" y="8" width="7" height="7" rx="1.2" />
      <rect x="14" y="8" width="7" height="7" rx="1.2" />
      <path d="M10 11.5h4" />
    </svg>
  ),
  alerting: (
    <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8">
      <path d="M6 9a6 6 0 0 1 12 0c0 4 1.5 5.5 1.5 5.5H4.5S6 13 6 9z" />
      <path d="M10 18a2 2 0 0 0 4 0" />
    </svg>
  ),
};

export const TREE = {
  connectivity: {
    name: 'Connectivity',
    blurb: "Agents unreachable, dropped collector connections, timeouts between services.",
    entry: 'conn_1',
    nodes: {
      conn_1: { kicker: 'connectivity · step 1', q: 'Where does the connection break down?', options: [
        { label: "Agent or collector can't reach the platform", to: 'conn_agent' },
        { label: "Users can't reach the web console / API", to: 'conn_console' },
        { label: 'One integration or downstream service is unreachable', to: 'conn_integ' },
      ]},
      conn_agent: { kicker: 'connectivity · step 2', q: 'Is this affecting a single host, or every agent in an environment?', options: [
        { label: 'Single host', to: 'res_conn_singlehost' },
        { label: 'Every agent behind one network boundary (VPC, site, proxy)', to: 'res_conn_network_boundary' },
        { label: 'Intermittent, across many unrelated hosts', to: 'conn_agent_intermittent' },
      ]},
      conn_agent_intermittent: { kicker: 'connectivity · step 3', q: 'Does the drop correlate with a specific time window or platform-side event?', options: [
        { label: 'Yes — clusters around a specific time', to: 'res_conn_platform_side' },
        { label: 'No visible pattern', to: 'res_conn_agent_config' },
      ]},
      conn_console: { kicker: 'connectivity · step 2', q: 'Can you reach the console from a different network (e.g. mobile hotspot)?', options: [
        { label: 'Yes, works from elsewhere', to: 'res_conn_local_network' },
        { label: 'No, fails everywhere', to: 'res_conn_platform_outage' },
      ]},
      conn_integ: { kicker: 'connectivity · step 2', q: 'Did this integration work before, or is it a new setup?', options: [
        { label: 'Worked before, broke recently', to: 'res_conn_integ_regression' },
        { label: 'New setup, never connected', to: 'res_conn_integ_new' },
      ]},
    },
    resolutions: {
      res_conn_singlehost: { severity: 'low', title: 'Host-local connectivity issue', desc: "The break is isolated to one host, which points at local network, DNS, or certificate state rather than the platform.", steps: [
        "Confirm outbound HTTPS (443) to the platform endpoint isn't blocked by a local firewall or endpoint agent.",
        'Check the host can resolve the collector hostname: <code>nslookup collector.yourplatform.io</code>.',
        "Verify the system clock is within 5 minutes of actual time — TLS handshakes fail silently on drift.",
        'Restart the local agent service and re-check the connection status within 60 seconds.',
      ]},
      res_conn_network_boundary: { severity: 'med', title: 'Network boundary is blocking egress', desc: 'Every agent behind the same boundary is affected, which points at a shared proxy, firewall rule, or routing change rather than individual hosts.', steps: [
        'Check with network/infra for recent firewall, proxy, or routing changes at that boundary.',
        "Confirm the platform's current IP allowlist ranges are still whitelisted — these rotate periodically.",
        "If a forward proxy is in use, verify the agent's proxy configuration matches the current proxy address and auth.",
        'Test raw connectivity from a host in that boundary with <code>curl -v https://collector.yourplatform.io/health</code>.',
      ]},
      res_conn_platform_side: { severity: 'med', title: 'Likely platform-side event during that window', desc: 'A pattern tied to a specific window usually means a deploy, scaling event, or brief regional issue on the platform side rather than something in your environment.', steps: [
        'Check the platform status page for incidents matching that time window.',
        'Compare the drop times against your own deploy or maintenance windows to rule out a self-inflicted cause.',
        'If no incident is listed but the pattern repeats, escalate with the exact timestamps — this speeds up correlation.',
      ]},
      res_conn_agent_config: { severity: 'med', title: 'Inconsistent agent configuration', desc: 'Random drops across unrelated hosts with no time pattern usually trace back to inconsistent agent versions or config drift rather than network conditions.', steps: [
        'Compare agent versions across affected hosts — mixed versions are the most common cause here.',
        'Check for local retry/backoff settings that may be too aggressive under transient latency.',
        'Standardize on the current recommended agent version and redeploy config from your source of truth.',
      ]},
      res_conn_local_network: { severity: 'low', title: 'Local network or DNS resolution issue', desc: 'Since another network reaches the console fine, the problem is local — most often DNS, a captive portal, or a corporate proxy.', steps: [
        'Flush local DNS cache and retry.',
        'Check whether your corporate proxy or VPN is intercepting TLS for this domain.',
        "Try the platform's direct IP (from your admin settings) to isolate DNS from routing.",
      ]},
      res_conn_platform_outage: { severity: 'high', title: 'Platform-wide access issue', desc: 'Failing from every network points away from your environment and toward a platform-side outage or a account/region-level access issue.', steps: [
        'Check the platform status page immediately.',
        "Confirm your account/org hasn't hit a billing or access suspension state.",
        "If status shows all-clear and it's just your org, escalate as high severity — this is likely account-specific.",
      ]},
      res_conn_integ_regression: { severity: 'med', title: 'Integration credential or endpoint change', desc: 'A previously working integration that suddenly breaks is almost always a token expiry, rotated secret, or an endpoint change on the other side.', steps: [
        "Check the integration's credential expiry date in its settings panel.",
        "Look at the downstream service's changelog for recent API or auth changes.",
        're-authenticate the integration and confirm the token scope still covers the actions in use.',
      ]},
      res_conn_integ_new: { severity: 'low', title: 'New integration setup issue', desc: 'New integrations that never connect are usually a scope, URL, or firewall issue in initial setup rather than a platform bug.', steps: [
        "Double check the endpoint URL against the target service's current API docs.",
        'Confirm the auth token or API key has the specific scopes this integration requires.',
        "If the target service is self-hosted, confirm it allows inbound calls from the platform's published IP ranges.",
      ]},
    },
  },

  performance: {
    name: 'Performance',
    blurb: 'Slow dashboards, delayed alerting, query timeouts, high ingestion lag.',
    entry: 'perf_1',
    nodes: {
      perf_1: { kicker: 'performance · step 1', q: "What's actually slow?", options: [
        { label: 'Dashboards / queries in the console', to: 'perf_query' },
        { label: 'Time from event to alert firing', to: 'perf_alert_lag' },
        { label: 'Data ingestion — events arriving late', to: 'perf_ingest' },
      ]},
      perf_query: { kicker: 'performance · step 2', q: 'Is it every dashboard, or specific ones?', options: [
        { label: 'Every dashboard, org-wide', to: 'res_perf_platform' },
        { label: 'Specific dashboards only', to: 'perf_query_specific' },
      ]},
      perf_query_specific: { kicker: 'performance · step 3', q: 'Do the slow dashboards share a wide time range or a high cardinality query?', options: [
        { label: 'Yes — long range or high-cardinality filters', to: 'res_perf_query_shape' },
        { label: 'No, they look like simple queries', to: 'res_perf_query_index' },
      ]},
      perf_alert_lag: { kicker: 'performance · step 2', q: 'Is the lag constant, or growing over time?', options: [
        { label: 'Constant, roughly the same delay each time', to: 'res_perf_alert_constant' },
        { label: 'Growing — getting worse over hours/days', to: 'res_perf_alert_growing' },
      ]},
      perf_ingest: { kicker: 'performance · step 2', q: 'Is the lag isolated to one data source/integration, or everything?', options: [
        { label: 'One source only', to: 'res_perf_ingest_source' },
        { label: 'Everything, org-wide', to: 'res_perf_ingest_wide' },
      ]},
    },
    resolutions: {
      res_perf_platform: { severity: 'high', title: 'Org-wide platform slowness', desc: "When every dashboard is slow regardless of content, this is almost never query-specific — it points at platform-side capacity or a regional issue.", steps: [
        'Check the platform status page for an active performance incident.',
        'Confirm this is reproducible from a second network/device to rule out a local bottleneck.',
        'Escalate as high severity with a timestamp — org-wide slowness affects SLAs and gets prioritized.',
      ]},
      res_perf_query_shape: { severity: 'low', title: 'Query shape is the bottleneck', desc: "Wide time ranges and high-cardinality filters (like grouping by a raw user ID) are the most common self-inflicted cause of slow specific dashboards.", steps: [
        'Narrow the default time range on the dashboard, or add a rollup/aggregation step before high-cardinality grouping.',
        "Replace unbounded 'group by' fields with a bucketed or pre-aggregated field where available.",
        'Add explicit filters to reduce the scanned dataset before the expensive step in the query.',
      ]},
      res_perf_query_index: { severity: 'med', title: 'Missing or stale index on the underlying field', desc: "Simple-looking queries that are still slow usually mean the field being filtered or sorted on isn't indexed as expected.", steps: [
        'Check the field\'s indexing status in the data model / schema settings.',
        'If it\'s a recently added field, confirm the backfill or reindex job has completed.',
        'If indexing looks correct, escalate with the query — this may need platform-side investigation.',
      ]},
      res_perf_alert_constant: { severity: 'low', title: 'Expected pipeline latency', desc: 'A steady, unchanging delay is usually the normal evaluation interval of the alert rule rather than a fault.', steps: [
        "Check the alert rule's evaluation interval — this sets a floor on detection time.",
        'If the delay exceeds the configured interval by a lot, check for a batching or aggregation window upstream.',
        'Lower the evaluation interval if faster detection is required and your plan tier supports it.',
      ]},
      res_perf_alert_growing: { severity: 'high', title: 'Backlog building in the alerting pipeline', desc: 'A delay that keeps growing points at a queue backing up somewhere in the pipeline rather than a fixed setting.', steps: [
        'Check for a recent spike in alert rule volume or event volume that could be overwhelming evaluation capacity.',
        'Look for one especially expensive alert rule (broad scope, complex condition) that may be starving others.',
        'If volume looks normal, escalate immediately — a growing backlog usually needs platform-side intervention.',
      ]},
      res_perf_ingest_source: { severity: 'med', title: 'Source-specific ingestion bottleneck', desc: 'One lagging source usually means a problem with that specific collector, agent, or upstream rate limit.', steps: [
        'Check that source\'s agent/collector logs for retry or rate-limit warnings.',
        "Confirm the source isn't hitting an API rate limit on the sending side.",
        'Restart the specific collector for that source and monitor the lag over the next ingestion cycle.',
      ]},
      res_perf_ingest_wide: { severity: 'high', title: 'Org-wide ingestion delay', desc: 'Lag across every source at once points at the shared ingestion pipeline rather than any single integration.', steps: [
        'Check the platform status page for an ingestion-related incident.',
        "Confirm you haven't hit an org-level ingestion volume cap for your plan.",
        'Escalate as high severity — this affects every downstream alert and dashboard.',
      ]},
    },
  },

  auth: {
    name: 'Auth & access',
    blurb: 'SSO failures, permission errors, API tokens rejected, MFA loops.',
    entry: 'auth_1',
    nodes: {
      auth_1: { kicker: 'auth · step 1', q: "What kind of access is failing?", options: [
        { label: 'Human user login (SSO / password / MFA)', to: 'auth_user' },
        { label: 'API token or service account', to: 'auth_api' },
        { label: 'User is logged in but missing permissions', to: 'auth_perm' },
      ]},
      auth_user: { kicker: 'auth · step 2', q: 'Does this affect one user or everyone using SSO?', options: [
        { label: 'One user only', to: 'res_auth_single_user' },
        { label: 'Everyone using SSO', to: 'res_auth_sso_wide' },
      ]},
      auth_api: { kicker: 'auth · step 2', q: 'Did this token work before?', options: [
        { label: 'Worked before, now rejected', to: 'res_auth_token_expired' },
        { label: 'Brand new token, never worked', to: 'res_auth_token_new' },
      ]},
      auth_perm: { kicker: 'auth · step 2', q: "Was this user's role or group recently changed?", options: [
        { label: 'Yes, recently changed', to: 'res_auth_role_change' },
        { label: 'No changes that we know of', to: 'res_auth_perm_stale' },
      ]},
    },
    resolutions: {
      res_auth_single_user: { severity: 'low', title: 'Single-user account state issue', desc: "When only one person is affected, it's almost always account-specific — a lockout, expired credential, or stale session, not a platform config problem.", steps: [
        'Check whether the account is locked out from repeated failed attempts.',
        "Confirm the user's identity provider account is active and not disabled on the IdP side.",
        'Have the user clear cookies for the console domain and retry in a private window.',
      ]},
      res_auth_sso_wide: { severity: 'high', title: 'SSO configuration or IdP-side break', desc: 'Everyone failing SSO at once means the trust relationship between your identity provider and the platform is broken, not individual accounts.', steps: [
        'Check whether the SSO certificate on either side has expired — this is the single most common cause.',
        "Confirm the IdP's metadata URL or entity ID hasn't changed since the last sync.",
        "If self-serve fixes don't resolve it, escalate immediately — this blocks every user in the org.",
      ]},
      res_auth_token_expired: { severity: 'low', title: 'Expired or rotated credential', desc: "A token that used to work and now doesn't has almost always hit its expiry or been rotated/revoked.", steps: [
        "Check the token's expiry date and rotation policy in the API settings panel.",
        "Confirm it wasn't manually revoked by another admin — check the audit log.",
        'Issue a new token and update it in the service using the old one.',
      ]},
      res_auth_token_new: { severity: 'low', title: 'Token scope or format issue', desc: 'A brand new token that never worked is usually a scope mismatch or a formatting mistake in how it\'s sent, not an expired credential.', steps: [
        'Confirm the token was copied in full — truncation is a common copy/paste error.',
        'Check the token has the specific scopes the calling service requires.',
        'Verify the auth header format matches the current API docs (e.g. Bearer vs. custom header).',
      ]},
      res_auth_role_change: { severity: 'low', title: 'Recent role change removed needed permission', desc: 'A recent role or group change is the most likely cause when access disappears right after it.', steps: [
        "Review what changed in the user's role or group assignment.",
        'Compare against the specific permission the failing action requires.',
        'Add the missing permission via the correct role rather than a one-off grant, so it survives future audits.',
      ]},
      res_auth_perm_stale: { severity: 'med', title: 'Stale permission cache or indirect group issue', desc: "With no known change, the next most common cause is a cached permission set or an indirect group membership that isn't propagating.", steps: [
        'Have the user log out and back in to force a fresh permission fetch.',
        "Check for nested/indirect group memberships that may not be resolving as expected.",
        "If it persists after refresh, escalate with the user's ID and the specific action that's failing.",
      ]},
    },
  },

  data: {
    name: 'Data & sync',
    blurb: 'Missing records, stale sync state, duplicate events, mismatched counts.',
    entry: 'data_1',
    nodes: {
      data_1: { kicker: 'data & sync · step 1', q: "What are you seeing?", options: [
        { label: 'Data is missing entirely', to: 'data_missing' },
        { label: 'Data is duplicated', to: 'data_dupe' },
        { label: 'Two systems show different values for the same thing', to: 'data_mismatch' },
      ]},
      data_missing: { kicker: 'data & sync · step 2', q: 'Was this data ever present, or has it never synced?', options: [
        { label: 'Was present, now gone', to: 'res_data_disappeared' },
        { label: 'Never synced from the start', to: 'res_data_never_synced' },
      ]},
      data_dupe: { kicker: 'data & sync · step 2', q: 'Did anything change recently — a retry, a re-import, a new integration?', options: [
        { label: 'Yes, a retry or re-import happened', to: 'res_data_dupe_retry' },
        { label: 'No known change', to: 'res_data_dupe_unknown' },
      ]},
      data_mismatch: { kicker: 'data & sync · step 2', q: 'Is the gap constant, or growing over time?', options: [
        { label: 'Constant gap', to: 'res_data_mismatch_constant' },
        { label: 'Growing gap', to: 'res_data_mismatch_growing' },
      ]},
    },
    resolutions: {
      res_data_disappeared: { severity: 'high', title: 'Retention policy or accidental deletion', desc: 'Data that was there and is now gone points at a retention rule kicking in, a filter/exclusion rule, or a deletion — worth ruling out quickly since it may be recoverable.', steps: [
        'Check the data retention policy for that data type — it may have simply aged out.',
        'Review recent changes to exclusion or filtering rules that could route it out before storage.',
        'Check the audit log for a manual or scripted deletion around the time it disappeared.',
      ]},
      res_data_never_synced: { severity: 'med', title: 'Sync was never established for this source', desc: 'Data that never arrived usually means the sync job for that specific source or entity type was never actually enabled or completed setup.', steps: [
        'Confirm the sync connector for this data type shows as active, not just configured.',
        'Check for an initial backfill step that may still be pending or stuck.',
        'Trigger a manual sync and watch the sync log for errors on this specific entity type.',
      ]},
      res_data_dupe_retry: { severity: 'low', title: 'Retry created duplicate records', desc: 'A retry or re-import without idempotency protection is the most common cause of clean, explainable duplicates.', steps: [
        "Check whether the integration uses idempotency keys — if not, this will recur on any retry.",
        "De-duplicate using the record's unique source ID, not just a timestamp match.",
        'If available, enable idempotent writes on the integration to prevent recurrence.',
      ]},
      res_data_dupe_unknown: { severity: 'med', title: 'Overlapping sync windows or double-connected source', desc: 'Duplicates with no known trigger often mean two sync jobs are pulling the same data, or a sync window overlap is double-counting records.', steps: [
        'Check whether the same source is connected via more than one integration or path.',
        'Review the sync schedule for overlapping windows that could double-process the same batch.',
        'If everything looks singly-connected, escalate with a sample of duplicate record IDs.',
      ]},
      res_data_mismatch_constant: { severity: 'low', title: 'Fixed offset, likely a definitional difference', desc: "A gap that stays constant usually isn't a sync failure — it's the two systems counting slightly different things (e.g. one includes archived records, one doesn't).", steps: [
        'Compare the exact filter/scope definitions each system uses for this count.',
        'Check if one system includes soft-deleted or archived records and the other excludes them.',
        'Document the expected offset if it\'s definitional rather than a bug.',
      ]},
      res_data_mismatch_growing: { severity: 'high', title: 'Sync is falling behind or silently failing on some records', desc: 'A growing gap points at an active sync problem — either falling behind on volume or silently dropping certain records.', steps: [
        "Check the sync job's error rate and recent failure logs for this data type.",
        'Look for a specific record shape (e.g. a new required field) that could be failing validation silently.',
        'If the sync log looks clean but the gap keeps growing, escalate — this needs platform-side tracing.',
      ]},
    },
  },

  integrations: {
    name: 'Integrations & API',
    blurb: 'Webhooks not firing, third-party connectors failing, API errors.',
    entry: 'int_1',
    nodes: {
      int_1: { kicker: 'integrations · step 1', q: "What's failing?", options: [
        { label: "Outbound webhook isn't firing", to: 'int_webhook' },
        { label: 'API call returns an error', to: 'int_api_error' },
        { label: 'A pre-built connector (Slack, Jira, etc.) stopped working', to: 'int_connector' },
      ]},
      int_webhook: { kicker: 'integrations · step 2', q: 'Does the platform show the webhook as attempted?', options: [
        { label: 'Yes, shows as attempted / failed', to: 'res_int_webhook_failed' },
        { label: 'No record of it being attempted at all', to: 'res_int_webhook_not_triggered' },
      ]},
      int_api_error: { kicker: 'integrations · step 2', q: "What's the response status code range?", options: [
        { label: '4xx (client-side)', to: 'res_int_4xx' },
        { label: '5xx (server-side)', to: 'res_int_5xx' },
        { label: '429 specifically (rate limited)', to: 'res_int_429' },
      ]},
      int_connector: { kicker: 'integrations · step 2', q: 'Did the connected third-party app change anything recently (re-auth, permissions, plan)?', options: [
        { label: "Yes, something changed on their end", to: 'res_int_connector_thirdparty' },
        { label: "Not that we're aware of", to: 'res_int_connector_reauth' },
      ]},
    },
    resolutions: {
      res_int_webhook_failed: { severity: 'med', title: 'Receiving endpoint is rejecting or timing out', desc: 'An attempted-but-failed webhook means the platform is sending correctly — the problem is on the receiving end.', steps: [
        'Check the failure reason logged against the delivery attempt (timeout, non-2xx, connection refused).',
        "Confirm the receiving endpoint is up and responds within the platform's timeout window.",
        'If the endpoint expects a signature header, verify the signing secret matches on both sides.',
      ]},
      res_int_webhook_not_triggered: { severity: 'med', title: "Trigger condition isn't being met", desc: "If there's no attempt logged at all, the event that should trigger the webhook isn't firing — this is a configuration issue, not a delivery issue.", steps: [
        're-check the trigger condition (event type, filter) configured on the webhook.',
        'Confirm the webhook is enabled, not just configured — these are separate states in most setups.',
        'Manually fire a test event if the platform supports it, to isolate config from real-world triggering.',
      ]},
      res_int_4xx: { severity: 'low', title: 'Request formation issue', desc: 'HTTP 4xx responses mean the platform is rejecting the request as sent — almost always a payload, auth, or endpoint issue on the calling side.', steps: [
        'Check the exact status: 401/403 means auth, 404 means wrong endpoint, 400/422 means payload validation.',
        'Compare the request payload against the current API schema for that endpoint.',
        "Confirm you're calling the current API version — deprecated versions may reject previously-valid payloads.",
      ]},
      res_int_5xx: { severity: 'high', title: 'Platform-side processing error', desc: 'HTTP 5xx responses mean the request reached the platform but failed while processing — this needs platform-side investigation.', steps: [
        'Check the platform status page for related incidents.',
        'Capture the request ID from the response headers — this is required for platform-side tracing.',
        'Escalate with the request ID and exact timestamp rather than retrying repeatedly.',
      ]},
      res_int_429: { severity: 'low', title: 'Rate limit exceeded', desc: "HTTP 429s are the platform telling you the current request rate exceeds your plan's limit — this is expected behavior under load, not a fault.", steps: [
        'Check the current rate limit for your plan tier and your recent request volume.',
        'Implement exponential backoff using the Retry-After header if not already in place.',
        'If sustained volume genuinely requires a higher limit, request a limit increase rather than working around it.',
      ]},
      res_int_connector_thirdparty: { severity: 'low', title: 'Change on the third-party side broke the connection', desc: 'When the third-party app changed something, the fix is almost always re-establishing the connection to match their new state.', steps: [
        'Check that app\'s changelog or status page for the change that coincided with the break.',
        're-authenticate the connector to pick up any new permission or token requirements.',
        "Confirm the connector's configured scopes still match what that app now requires.",
      ]},
      res_int_connector_reauth: { severity: 'med', title: 'Silent token expiry on the connector', desc: 'With no known external change, the most common cause is a connector token that expired quietly without a visible error until now.', steps: [
        "Check the connector's authentication status in its settings panel.",
        're-authenticate the connector even if it doesn\'t show an obvious error state.',
        "If reauth doesn't hold or fails outright, escalate with the connector name and the exact failure message.",
      ]},
    },
  },

  alerting: {
    name: 'Alerting',
    blurb: 'Alerts not firing, false positives, notification delivery failures.',
    entry: 'alert_1',
    nodes: {
      alert_1: { kicker: 'alerting · step 1', q: "What's the problem with alerting?", options: [
        { label: "Alert should have fired and didn't", to: 'alert_missed' },
        { label: 'Alert fired but the notification never arrived', to: 'alert_notif' },
        { label: "Getting alerts that shouldn't be firing", to: 'alert_false' },
      ]},
      alert_missed: { kicker: 'alerting · step 2', q: 'Does the underlying data show the condition was actually met?', options: [
        { label: 'Yes, the data clearly crossed the threshold', to: 'alert_missed_data_ok' },
        { label: 'Not sure / data looks borderline', to: 'res_alert_borderline' },
      ]},
      alert_missed_data_ok: { kicker: 'alerting · step 3', q: 'Is the alert rule enabled and not muted?', options: [
        { label: 'Confirmed enabled, not muted', to: 'res_alert_rule_logic' },
        { label: 'Actually — it was muted or disabled', to: 'res_alert_was_muted' },
      ]},
      alert_notif: { kicker: 'alerting · step 2', q: 'Which channel — email, Slack/chat, SMS, or webhook?', options: [
        { label: 'Email', to: 'res_alert_notif_email' },
        { label: 'Slack / chat integration', to: 'res_alert_notif_chat' },
        { label: 'SMS / phone', to: 'res_alert_notif_sms' },
      ]},
      alert_false: { kicker: 'alerting · step 2', q: 'Did this start after a recent change to the rule or the monitored system?', options: [
        { label: 'Yes, right after a change', to: 'res_alert_false_recent' },
        { label: "No, it's been intermittent for a while", to: 'res_alert_false_flapping' },
      ]},
    },
    resolutions: {
      res_alert_borderline: { severity: 'low', title: "Condition didn't actually cross the threshold", desc: 'When the data is borderline, the alert usually behaved correctly — it just didn\'t clear the configured threshold.', steps: [
        'Overlay the exact threshold value against the raw data for that time window.',
        "Check whether the rule uses a sustained-duration condition (e.g. 'for 5 minutes') that a brief spike wouldn't satisfy.",
        'Adjust the threshold or duration if the intent was to catch this specific pattern.',
      ]},
      res_alert_rule_logic: { severity: 'med', title: 'Rule logic issue despite correct data and enabled state', desc: 'With the data confirmed and the rule confirmed active, the remaining cause is usually a logic error in how the condition is constructed.', steps: [
        're-read the rule\'s condition for an operator or scope mistake (e.g. AND where OR was intended).',
        "Check the rule's evaluation scope isn't unintentionally excluding the resource that triggered it.",
        'If logic looks correct, escalate with the rule ID and the specific data window — may need platform-side trace.',
      ]},
      res_alert_was_muted: { severity: 'low', title: 'Alert was muted or disabled', desc: "This is the direct cause — the alert didn't fire because it was intentionally or accidentally silenced.", steps: [
        'Check the audit log for who muted it and when, to understand if it was intentional.',
        'Re-enable the rule if the mute is no longer needed.',
        "Consider adding an expiry to future mutes so they don't silently outlast their purpose.",
      ]},
      res_alert_notif_email: { severity: 'low', title: 'Email delivery issue', desc: 'Fired-but-not-received over email is most often a deliverability problem rather than a platform fault.', steps: [
        'Check spam/junk and any organization-level mail filtering rules.',
        "Confirm the platform's sending domain is allow-listed by your mail provider.",
        'Verify the notification recipient address on the alert rule is current.',
      ]},
      res_alert_notif_chat: { severity: 'low', title: 'Chat integration token or channel issue', desc: 'Chat notification failures are usually a broken connector token or a channel that no longer exists/permits the bot.', steps: [
        "Check the chat integration's connection status in settings — tokens can expire silently.",
        'Confirm the target channel still exists and the integration bot is still a member.',
        're-authenticate the chat connector if the status looks stale.',
      ]},
      res_alert_notif_sms: { severity: 'med', title: 'SMS delivery or carrier filtering issue', desc: 'SMS failures are frequently carrier-side filtering or an outdated number rather than a platform bug.', steps: [
        'Confirm the phone number on the alert rule is current and correctly formatted with country code.',
        'Check the SMS delivery log if available — carrier rejection reasons are usually logged there.',
        'If undelivered with no clear reason, escalate — this may need provider-side investigation.',
      ]},
      res_alert_false_recent: { severity: 'low', title: 'Recent change introduced the false positives', desc: 'A recent change to the rule or the monitored system is the most likely direct cause when false alerts start right after it.', steps: [
        'Review exactly what changed — threshold, scope, or the monitored system\'s normal baseline.',
        "If the monitored system's normal range shifted, recalibrate the threshold to the new baseline.",
        'Roll back the specific change if it was a rule edit and the old behavior was correct.',
      ]},
      res_alert_false_flapping: { severity: 'med', title: 'Threshold too tight for natural variance', desc: "Long-running intermittent false positives usually mean the threshold sits inside the metric's normal noise band.", steps: [
        "Plot the metric's normal variance over a representative period to see how close the threshold sits to typical noise.",
        "Add a sustained-duration requirement so brief noise spikes don't trigger the alert.",
        'Consider switching to an anomaly-based condition instead of a fixed threshold if variance is naturally high.',
      ]},
    },
  },
};
