# Migration Workflow
---
The following steps detail the general migration workflow for migrating servers to AWS using the RiverMeadow platform.

| Step | Action | Details |
|:---------:|:--------:|:---------:|
| 1 | **Initial Migration** | An initial migration profile is created to define how the source server(s) will be migrated, optimized, and/or modernized. The initial migration creates a new EC2 instance in the target AWS account that is network-isolated using security groups. The instance can be used to perform basic testing and validation. |
| 2 | **Delta Migration(s)** | Once the initial data sync has been performed, incremental data syncs or delta migrations can be scheduled to replicate changes from the source server to the target EC2 instance. This reduces the downtime required to perform the final data sync during the cutover window. |
| 3 | **User Acceptance Testing (UAT)** | Testing of the migrated server is performed prior to the final cutover to ensure that applications and services function as expected in AWS. Servers are placed into isolation at the network level (i.e. - security groups) to prevent any impact on the source environment. |
| 4 | **Stop Source Server Services or Shutdown Source VM** | As part of the final cutover event for the server, the source system's services are stopped or the source server shutdown to prevent any data changes and ensure data consistency for the final delta migration. |
| 5 | **Final Delta Migration** | A final delta migration is performed to sync the last bits of data from the source server to the target EC2 instance. The source server is shut down following the sync to prevent conflicts. |
| 6 | **Cutover Events** | Once the last delta migration has been performed then any additional post cutover tasks such as DNS updates, security group changes, and more need to be performed. |
| 7 | **Final Validation Testing** | With all of the migration steps completed, perform comprehensive validation testing to ensure that all applications and services are functioning correctly in AWS. Address any issues identified during testing before declaring the migration complete. |
