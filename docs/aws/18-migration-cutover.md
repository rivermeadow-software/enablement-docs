# Migration Cutover
---
The RiverMeadow platform supports warm and cold migrations of servers from any source to AWS EC2. In addition to the process of creating the instance in AWS and replicating the data, there are other steps that are commoly performed during the transition process from the source server to the "clone" or taget running in AWS.

## Common Migration Cutover Tasks
The following steps detail a generic cutover process that includes many of the steps that would need to be performed during the approved change window.

| Step | Action | Details|
|:-----:|:---------:|:--------:|
| **1** | **Pause Source Server Monitoring** | If the source server is integrated with monitoring solutions then any alerts or notifications should be muted or paused to prevent noise during the transition process. |
| **2** | **Stop Source Server Services or Power Off Source VM** | During the change window, the key services should be stopped for OS based migrations or the virtual machine powered off if using VM based migrations to ensure data consistency. This ensures that there is no changing data and that the last copy includes all of the changes. |
| **3** | **Final Data Sync (Delta Migration)** | A final application-consistent data sync should be performed to ensure all changes to the source have been copied to the instance in AWS. |
| **4** | **Shutdown Source Server (OS Based Migration)** | Once the final data sync has been completed, the source server should be powered off to prevent any conflicts within the environment during subsequent cutover steps. |
| **5** | **Disconnect Source Server NIC** | As an additional precautionary measure, the primary network interface for the source server could be disconnected to prevent any production impact in the event the source server were to be accidentally powered on. |
| **6** | **Update Instance Security Groups** | Prior to the cutover the instance is isolated from the production network using security group rules. The RiverMeadow specific security group should be removed and the appropriate security group to allow production traffic is associated with the instance. |
| **8** | **User Acceptance Testing** | Once the server has been brought out of network isolation, final testing needs to be performed by the designated business user(s) to ensure that the migrated server is functioning as expected. |
| **9** | **Update CMDB Entry** | Many organizations utilize a CMDB such as ServiceNow to track all IT assessts. Once the migration to AWS has been completed the existing record for the migrated server may need to be updated to reflect the new hosting platform. |
| **10** | **Update Data Protection** | Update the data protection configuration and documentation for the migrated server to reflect the migration of the server to AWS. |
| **11** | **Update Disaster Recovery** | Update the disaster recovery configuration and documentation for the migrated server to reflect the migration of the server to AWS. |
| **12** | **Unmute Server Monitoring** | Server monitoring should now be unmuted or even potentially updated to reflect the new IP address of the migrated server to AWS.|
| **13** | **Designate Source Server for Removal** | Once the migration has been completed successfully, the source server is typically designated for removal after "x" number of days in alignment with standard decomissioning processes. |