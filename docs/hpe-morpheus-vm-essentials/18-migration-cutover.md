# Migration Cutover
---
The RiverMeadow platform supports warm and cold migrations of servers from any source to HPE Morpheus VM Essentials. In addition to the process of creating the instance in VM Essentials and replicating the data, there are other steps that are commoly performed during the transition process from the source server to the "clone" or taget running HPE Morpheus VM Essentials.

## Common Migration Cutover Tasks
The following steps detail a generic cutover process that includes many of the steps that would need to be performed during the approved change window.

| Step | Action | Details|
|:-----:|:---------:|:--------:|
| **1** | **Pause Source Server Monitoring** | If the source server is integrated with monitoring solutions then any alerts or notifications should be muted or paused to prevent noise during the transition process. |
| **2** | **Stop Source Server Services** | During the change window, the key services should be stopped or the virtual machine powered is using VM based migrations to ensure data consistency. This ensures that there is no changing data and that the last copy includes all of the changes. |
| **3** | **Final Data Sync (Delta Migration)** | A final application-consistent data sync should be performed to ensure all changes to the source have been copied to the instance in HPE Morpheus VM Essentials. |
| **4** | **Shutdown Source Server** | Once the final data sync has been completed, the source server should be powered off to prevent any conflicts within the environment during subsequent cutover steps. |
| **5** | **Disconnect Source Server NIC** | As an additional precautionary measure, the primary network interface for the source server could be disconnected to prevent an impact on the environment if the source server were to be accidentally powered on. |
| **6** | **Modify VM Networks** | Prior to the cutover the instance in HPE Morpheus VM Essentials is likely deployed to an isolated network that is different from the VM Essentials network that the instance will run on following the migration. This step involves changing the network that the instance network interfaces are connected to. |
| **7** | **Update Instance IP Address(es)** | Migrations to HPE Morpheus VM Essentials commonly involve the requirement of retaining the existing IP address of the source server following the migration. The RiverMeadow platform utilizes a routed network to perform the data transfer and requires at least a transient IP address that is used during the migration. This IP address is assigned to the migrated server and will need to be updated post-migration to retain the original IP address of the source server. |
| **8** | **User Acceptance Testing** | Once the server has been brought out of network isolation and the IP address has been updated, final testing needs to be performed by the designated business user to ensure that the migrated server is functioning as expected. |
| **9** | **Update CMDB Entry** | Many organizations utilize a CMDB such as ServiceNow to track all IT assessts. Once the migration to HPE Morpheus VM Essentials has been completed the existing record for the migrated server may need to be updated to reflect the new hosting platform. |
| **10** | **Update Data Protection** | Update the data protection configuration and documentation for the migrated server to reflect the new virtualization platform that the server is now running. |
| **11** | **Update Disaster Recovery** | Update the disaster recovery configuration and documentation for the migrated server to reflect the new virtualization platform that the server is now running. |
| **12** | **Unmute Server Monitoring** | Server monitoring should now be unmuted or even potentially updated to reflect the new virtualization platform that the server is now running on.|
| **13** | **Designate Source Server for Removal** | Once the migration has been completed successfully, the source server is typically designated for removal after "x" number of days in alignment with standard decomissioning processes. |