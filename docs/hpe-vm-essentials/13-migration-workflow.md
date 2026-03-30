# Migration Workflow
---
The following steps detail the general migration workflow for migrating workloads using the RiverMeadow platform.

1. **Initial Data Sync:** An initial migration profile is created to define how the source workload(s) will be migrated and what additional RiverMeadow features will be used during the migration.
2. **Incremental Data Syncs (Delta Migration):** Once the initial data sync has been performed, incremental data syncs or delta migrations can be scheduled to keep the source and target workloads as close to in sync as possible leading up to the final cutover event.
3. **User Acceptance Testing (UAT):** Testing of the migrated workloads is performed prior to the final cutover to ensure that applications and services function as expected in the target HPE Morpheus VM Esssentials environment. Workloads are placed into isolation at the network level (i.e. - migration network) to prevent any impact with the source environment.
4. **Stop Source Workload Services:** As part of the final cutover event for the workload, the source system's services are stopped to prevent any data changes and ensure data consistency for the final delta migration.
5. **Delta Migration:** A final delta migration is performed to sync the last bits of data from the source workload to the target instance. The source workload is shutdown following the sync to prevent conflicts.
6. **Post Cutover Events:** Once the last delta migration has been performed then any additional post cutover tasks such as DNS updates, networking changes, and more need to be performed.
7. **Final Validation Testing:** With all of the migration steps completed, perform comprehensive validation testing to ensure that all applications and services are functioning correctly in the target HPE Morpheus VM Esssentials environment. Address any issues identified during testing before declaring the migration complete.