# Delta Migrations
---
Delta or incremental migrations are used to sync data changes between the source and target workloads after the intial migration. Delta migrations are commonly performed multiple days leading up to the cutover event to mimize the delta between the source server and target instance.

## Sync Interval
The replication or sync schedule for the delta migrations can be adjusted to align with the rate of data change on the source server to reduce the amount of time required during the final delta migration which is a factor in the amount of time the server is offline during the change window.

* **Now (Ad-hoc):** Delta migrations can be configured to execute on-demand, this option is used during a change window to force a final sync of changes from the source server to the "clone" or target instance.
* **Later (Scheduled):** Schedule a delta migration or migrations for a date and time in the future. The schedule supports the ability to configure delta migrations on multiple days to support daily or nightly data syncs.
* **Continuous:** Continuously sync changes from the source server to the instance running in HPE Morpheus VM Essentials. The sync interval enables approximately a 5-minute lag between the source server and the instacne in HPE Morpheus VM Essentials.

## Additional Options
Additional options or settings are available during a delta migration to enable additional automation or align with a "final" migration that is performed during the migration cutover.

* **Migration Extension:** Custom post-migration automation can executed during incremental delta migrations or during the final delta migration to prepare the system for the new virtualization platform.
* **Shutdown Source:** The RiverMeadow platform supports the ability automatically poweroff the source server as part of the cutover process.
* **Remove RMS Agent:** The RiverMeadow migration utility can be automatically removed following the completion of the final delta migration in the case of OS based migrations.
* **Finalize VM Migration:** In the case of the "final" delta migration, the target instance in HPE Morpheus VM Essentials can be finalized. The finalization process involves removing snapshots from the instance used during the data replication process.