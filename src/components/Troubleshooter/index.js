import React, { useState, useMemo, useRef, useEffect } from 'react';
import clsx from 'clsx';
import { TREE, ICONS } from './data';
import styles from './styles.module.css';

const SEV_CLASS = { low: styles.sevLow, med: styles.sevMed, high: styles.sevHigh };
const SEV_LABEL = { low: 'low impact', med: 'moderate impact', high: 'high impact' };
const SEV_OPT_CLASS = { low: styles.sevOptSelLow, med: styles.sevOptSelMed, high: styles.sevOptSelHigh };

function ChevIcon() {
  return (
    <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
      <path d="M9 6l6 6-6 6" />
    </svg>
  );
}

function SearchIcon() {
  return (
    <svg className={styles.searchIcon} width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
      <circle cx="11" cy="11" r="7" />
      <path d="M21 21l-4.3-4.3" />
    </svg>
  );
}

const EMPTY_STATE = {
  view: 'home',      // 'home' | 'node' | 'resolution' | 'escalate'
  catKey: null,
  nodeId: null,
  path: [],           // [{ label, kind: 'category'|'answer'|'outcome' }]
  escSeverity: 'med',
  ticketOpen: false,
  ticketId: null,
};

export default function Troubleshooter() {
  const [state, setState] = useState(EMPTY_STATE);
  const [query, setQuery] = useState('');

  function appendTrace(prev, label, kind) {
    return [...prev.path, { label, kind }];
  }

  function startCategory(key) {
    setState({
      ...EMPTY_STATE,
      view: 'node',
      catKey: key,
      nodeId: TREE[key].entry,
      path: [{ label: `opened ${TREE[key].name}`, kind: 'category' }],
    });
    setQuery('');
  }

  function goHome() {
    setState(EMPTY_STATE);
    setQuery('');
  }

  function chooseOption(label, to) {
    setState((prev) => {
      const cat = TREE[prev.catKey];
      let path = appendTrace(prev, label, 'answer');
      if (cat.resolutions[to]) {
        path = [...path, { label: cat.resolutions[to].title, kind: 'outcome' }];
        return { ...prev, view: 'resolution', nodeId: to, path };
      }
      return { ...prev, view: 'node', nodeId: to, path };
    });
  }

  function restartCategory() {
    if (state.catKey) startCategory(state.catKey);
  }

  function toggleEscalate() {
    setState((prev) => ({ ...prev, view: prev.view === 'escalate' ? 'resolution' : 'escalate' }));
  }

  function setSeverity(s) {
    setState((prev) => ({ ...prev, escSeverity: s }));
  }

  function submitTicket() {
    setState((prev) => ({
      ...prev,
      ticketOpen: true,
      ticketId: prev.ticketId ?? Math.floor(4000 + Math.random() * 5999),
    }));
  }

  function jumpToResolution(key, rid) {
    const r = TREE[key].resolutions[rid];
    setState({
      ...EMPTY_STATE,
      view: 'resolution',
      catKey: key,
      nodeId: rid,
      path: [
        { label: 'jumped to result via search', kind: 'category' },
        { label: r.title, kind: 'outcome' },
      ],
    });
    setQuery('');
  }

  const searchHits = useMemo(() => {
    if (!query || query.trim().length < 2) return [];
    const q = query.toLowerCase();
    const hits = [];
    Object.entries(TREE).forEach(([key, cat]) => {
      Object.entries(cat.resolutions).forEach(([rid, r]) => {
        const hay = (r.title + ' ' + r.desc + ' ' + r.steps.join(' ')).toLowerCase();
        if (hay.includes(q)) hits.push({ key, rid, title: r.title, catName: cat.name });
      });
    });
    return hits.slice(0, 7);
  }, [query]);

  const traceLogRef = useRef(null);
  useEffect(() => {
    if (traceLogRef.current) traceLogRef.current.scrollTop = traceLogRef.current.scrollHeight;
  }, [state.path]);

  return (
    <div className={styles.app}>
      <Rail state={state} onStartCategory={startCategory} />
      <main className={styles.main}>
        {state.view === 'home' && (
          <Home
            query={query}
            onQueryChange={setQuery}
            hits={searchHits}
            onStartCategory={startCategory}
            onJump={jumpToResolution}
          />
        )}
        {state.view === 'node' && (
          <NodeView state={state} onGoHome={goHome} onChoose={chooseOption} onRestart={restartCategory} />
        )}
        {state.view === 'resolution' && (
          <ResolutionView state={state} onGoHome={goHome} onRestart={restartCategory} onEscalate={toggleEscalate} />
        )}
        {state.view === 'escalate' && (
          <EscalateView
            state={state}
            onGoHome={goHome}
            onBack={toggleEscalate}
            onSetSeverity={setSeverity}
            onSubmit={submitTicket}
          />
        )}
      </main>
      <div className={styles.trace}>
        <div className={styles.traceHead}>
          <span>SESSION TRACE</span>
          <span className={styles.traceLive}>
            <span className={styles.liveDot} /> live
          </span>
        </div>
        <div className={styles.traceLog} ref={traceLogRef}>
          {state.path.length === 0 ? (
            <div className={clsx(styles.traceLine, styles.traceLineEmpty)}>
              Nothing logged yet. Pick a category to start a session.
            </div>
          ) : (
            state.path.map((p, i) => (
              <div className={styles.traceLine} key={i}>
                <span className={styles.traceT}>{String(i + 1).padStart(2, '0')}</span>
                <span className={styles.traceK}>
                  {p.kind === 'answer' ? 'selected' : p.kind === 'category' ? 'category' : 'outcome'}
                </span>{' '}
                — {p.label}
              </div>
            ))
          )}
        </div>
        <div className={styles.traceFoot}>
          {state.path.length > 0
            ? `${state.path.length} step${state.path.length === 1 ? '' : 's'} logged this session. Attached automatically if you escalate.`
            : 'Trace attaches automatically to any ticket you open.'}
        </div>
      </div>
    </div>
  );
}

function Rail({ state, onStartCategory }) {
  return (
    <div className={styles.rail}>
      <div className={styles.brand}>
        <span className={styles.brandDot} />
        <span className={styles.brandName}>Troubleshooter</span>
      </div>
      <div className={styles.brandSub}>guided diagnostics</div>
      <div>
        <div className={styles.railLabel}>Issue category</div>
        <div className={styles.catList}>
          {Object.entries(TREE).map(([key, cat]) => {
            const n = Object.keys(cat.nodes).length + Object.keys(cat.resolutions).length;
            return (
              <button
                key={key}
                className={clsx(styles.catBtn, state.catKey === key && styles.catBtnActive)}
                onClick={() => onStartCategory(key)}
              >
                <span className={styles.catIcon}>{ICONS[key]}</span>
                <span>{cat.name}</span>
                <span className={styles.catCount}>{n}</span>
              </button>
            );
          })}
        </div>
      </div>
      <div className={styles.railFoot}>
        Guided paths, current build only. For anything unresolved, escalate from the result screen — it opens with
        your full trace attached.
      </div>
    </div>
  );
}

function Home({ query, onQueryChange, hits, onStartCategory, onJump }) {
  return (
    <>
      <div className={styles.breadcrumb}>
        <span className={styles.breadcrumbCur}>All categories</span>
      </div>
      <h1 className={styles.pageTitle}>What are you seeing?</h1>
      <p className={styles.pageSub}>
        Pick where the problem shows up. Each path ends in a specific cause, fix steps, and — if that doesn't clear
        it — an escalation with your trace attached.
      </p>

      <div className={styles.searchWrap}>
        <SearchIcon />
        <input
          className={styles.searchInput}
          placeholder="Search across all issues — e.g. 'token', '429', 'SSO'"
          value={query}
          onChange={(e) => onQueryChange(e.target.value)}
        />
        {query.trim().length >= 2 && (
          <div className={styles.searchResults}>
            {hits.length > 0 ? (
              hits.map((h) => (
                <button key={h.key + h.rid} className={styles.searchHit} onClick={() => onJump(h.key, h.rid)}>
                  <span>{h.title}</span>
                  <span className={styles.searchHitCat}>{h.catName}</span>
                </button>
              ))
            ) : (
              <div className={styles.searchHit}>No matches. Try a shorter term.</div>
            )}
          </div>
        )}
      </div>

      <div className={styles.homeGrid}>
        {Object.entries(TREE).map(([key, cat]) => (
          <button key={key} className={styles.homeCard} onClick={() => onStartCategory(key)}>
            <div className={styles.homeCardTop}>
              <h3>{cat.name}</h3>
              <span className={styles.homeCardN}>{Object.keys(cat.resolutions).length} paths</span>
            </div>
            <p>{cat.blurb}</p>
          </button>
        ))}
      </div>
    </>
  );
}

function Breadcrumb({ catName, onGoHome }) {
  return (
    <div className={styles.breadcrumb}>
      <button className={styles.breadcrumbSeg} onClick={onGoHome}>
        All categories
      </button>
      <span>/</span>
      <span className={styles.breadcrumbCur}>{catName}</span>
    </div>
  );
}

function NodeView({ state, onGoHome, onChoose, onRestart }) {
  const cat = TREE[state.catKey];
  const node = cat.nodes[state.nodeId];
  return (
    <>
      <Breadcrumb catName={cat.name} onGoHome={onGoHome} />
      <h1 className={styles.pageTitle}>{cat.name}</h1>
      <p className={styles.pageSub}>{cat.blurb}</p>
      <div className={styles.stepCard}>
        <div className={styles.stepKicker}>{node.kicker}</div>
        <p className={styles.stepQ}>{node.q}</p>
        <div className={styles.optList}>
          {node.options.map((o) => (
            <button key={o.to} className={styles.optBtn} onClick={() => onChoose(o.label, o.to)}>
              <span>{o.label}</span>
              <span className={styles.optChev}>
                <ChevIcon />
              </span>
            </button>
          ))}
        </div>
      </div>
      <div className={styles.restartRow}>
        <button className={styles.linkBtn} onClick={onRestart}>
          Start this category over
        </button>
      </div>
    </>
  );
}

function ResolutionView({ state, onGoHome, onRestart, onEscalate }) {
  const cat = TREE[state.catKey];
  const r = cat.resolutions[state.nodeId];
  return (
    <>
      <Breadcrumb catName={cat.name} onGoHome={onGoHome} />
      <h1 className={styles.pageTitle}>Likely cause identified</h1>
      <p className={styles.pageSub}>Based on the path you took through {cat.name.toLowerCase()}.</p>

      <div className={styles.stepCard}>
        <div className={styles.resultHead}>
          <span className={clsx(styles.sevPill, SEV_CLASS[r.severity])}>{SEV_LABEL[r.severity]}</span>
        </div>
        <h2 className={styles.causeTitle}>{r.title}</h2>
        <p className={styles.causeDesc}>{r.desc}</p>

        <div className={styles.fixSteps}>
          {r.steps.map((s, i) => (
            <div className={styles.fixStep} key={i}>
              <span className={styles.fixNum}>{String(i + 1).padStart(2, '0')}</span>
              {/* Step text can include inline <code> for commands/snippets — content is our own data, not user input */}
              <span className={styles.fixBody} dangerouslySetInnerHTML={{ __html: s }} />
            </div>
          ))}
        </div>

        <div className={styles.resultActions}>
          <button className={clsx(styles.btn, styles.btnPrimary)} onClick={onEscalate}>
            This didn't fix it — escalate
          </button>
          <button className={clsx(styles.btn, styles.btnGhost)} onClick={onRestart}>
            Not the right cause — start over
          </button>
          <button className={clsx(styles.btn, styles.btnGhost)} onClick={onGoHome}>
            Done, back to categories
          </button>
        </div>
      </div>
    </>
  );
}

function EscalateView({ state, onGoHome, onBack, onSetSeverity, onSubmit }) {
  const cat = TREE[state.catKey];
  const r = cat.resolutions[state.nodeId];

  if (state.ticketOpen) {
    return (
      <>
        <Breadcrumb catName={cat.name} onGoHome={onGoHome} />
        <h1 className={styles.pageTitle}>Escalated</h1>
        <p className={styles.pageSub}>Handed off with your full diagnostic trace attached.</p>
        <div className={styles.ticketConf}>
          <span className={styles.ticketId}>TICKET-{state.ticketId}</span>
          <p>
            Routed to on-call for <b>{cat.name}</b>, marked <b>{SEV_LABEL[state.escSeverity].replace(' impact', '')}</b>.
            The {state.path.length}-step trace from this session is attached — no need to re-explain what you
            already tried.
          </p>
        </div>
        <div className={styles.restartRow}>
          <button className={styles.linkBtn} onClick={onGoHome}>
            Back to categories
          </button>
        </div>
      </>
    );
  }

  return (
    <>
      <Breadcrumb catName={cat.name} onGoHome={onGoHome} />
      <h1 className={styles.pageTitle}>Escalate: {r.title}</h1>
      <p className={styles.pageSub}>
        This sends your full trace — every step and answer from this session — so nobody has to ask you to
        reproduce it.
      </p>

      <div className={styles.escForm}>
        <div className={styles.escRow}>
          <label>Severity</label>
          <div className={styles.sevChoice}>
            {['low', 'med', 'high'].map((s) => (
              <button
                key={s}
                className={clsx(styles.sevOpt, state.escSeverity === s && SEV_OPT_CLASS[s])}
                onClick={() => onSetSeverity(s)}
              >
                {s === 'med' ? 'moderate' : s}
              </button>
            ))}
          </div>
        </div>
        <div className={styles.escRow}>
          <label>Anything not covered above</label>
          <textarea className={styles.escTextarea} placeholder="Optional — add context the guided steps didn't ask for." />
        </div>
        <div className={styles.escNote}>
          Suggested cause ({r.title}) and all {state.path.length} logged steps will be included automatically.
        </div>
      </div>

      <div className={styles.resultActions}>
        <button className={clsx(styles.btn, styles.btnPrimary)} onClick={onSubmit}>
          Send to on-call
        </button>
        <button className={clsx(styles.btn, styles.btnGhost)} onClick={onBack}>
          Back to result
        </button>
      </div>
    </>
  );
}
