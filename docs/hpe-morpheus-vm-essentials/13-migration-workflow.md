# Migration Workflow (DONE)
---
The following steps detail the general migration workflow for migrating servers using the RiverMeadow platform.

| Step | Action | Details |
|:---------:|:--------:|---------|
| 1 | **Initial Migration** | An initial migration profile is created to define how the source server(s) will be migrated and what additional RiverMeadow features will be used during the migration. The initial migration creates a new instance in HPE Morpheus VM Essentials that is network-isolated. The instance will be powered on by default and can be used to perform basic testing and validation. |
| 2 | **Delta Migration(s)** | Once the initial data sync has been performed, incremental data syncs or delta migrations can be scheduled to replicate changes from the source server to the target instance running in HPE Morpheus VM Essentials. This reduces the downtime required to perform the final data sync during the cutover window. |
| 3 | **User Acceptance Testing (UAT)** | Testing of the migrated server is performed prior to the final cutover to ensure that applications and services function as expected in the target HPE Morpheus VM Esssentials environment. Servers are placed into isolation at the network level (i.e. - migration network) to prevent any impact with the source environment. |
| 4 | **Stop Source Server Services** | As part of the final cutover event for the server, the source system's services are stopped to prevent any data changes and ensure data consistency for the final delta migration. |
| 5 | **Final Delta Migration** | A final delta migration is performed to sync the last bits of data from the source server to the target instance. The source server is shutdown following the sync to prevent conflicts. |
| 6 | **Cutover Events** | Once the last delta migration has been performed then any additional post cutover tasks such as DNS updates, networking changes, and more need to be performed. |
| 7 | **Final Validation Testing** | With all of the migration steps completed, perform comprehensive validation testing to ensure that all applications and services are functioning correctly in the target HPE Morpheus VM Esssentials environment. Address any issues identified during testing before declaring the migration complete. |