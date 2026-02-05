# Service Account Configuration
---
The RiverMeadow platform utilizes the HPE Morpheus VM Essentials REST API to orchestrate the migration of workloads to the HVM hypervisor. The security best practice is to create a dedicated service account that will be used by the RiverMeadow Meadow migration appliance to interact with the REST API. This service account should be granted only the privileges that are required to ensure that it aligns with the security principle of least privilege.

**User Account:** A user account (local or identity provider) should be created in the HPE Morpheus VM Essentials platform with a secure password for use by the RiverMeadow migration appliance.

**User Role:** A user role should also be created to assign the required privileges to the user account. Privileges or permissions within HPE Morpheus VM Essentials and HPE Morpheus Enterprise are associated with a user role for assignment.


### Role Privileges

The following privileges are required by the user role to migrate workloads using the RiverMeadow platform:

| Privilege | Access Level |
|--------------------|--------------------------|
| Backup Settings |	Full |
| Environment Settings | Full |
| Provisioning Settings | Full |
| Roles | Full |
| Service Plans	| Read |
| Clusters | Full |
| Compute | Full |
| Groups | Full |
| Networks | Read |
| Storage | Read |
| Virtual Images | Full |
| Power Control | Full |
| Reconfigure | Full |
| Reconfigure: Change Plan | Full |
| Reconfigure: Disk Add | Full |
| Reconfigure: Disk Change Type	| Full |
| Reconfigure: Disk Modify | Full |
| Reconfigure: Disk Remove | Full |
| Reconfigure: Network Add | Full |
| Reconfigure: Network Modify | Full |
| Reconfigure: Network Remove | Full |
| Retry/Cancel | Full |
| Activity | Read |
| Dashboard | Read |
| Import Image | Full |
| Instances: Add | Full |
| Instances: Clone | Full |
| Instances: Delete | Full |
| Instances: Edit | Full |
| Instances: List | Full |
| Instances: Settings | Full |
| Remote Console | User |
| Snapshots | Full |
| Snapshots: Linked Clone	| Full |



:::tip

The most current version of the required privileges is available in the RiverMeadow documentation: [https://docs.rivermeadow.com/hpe-vme-required-privileges](https://docs.rivermeadow.com/hpe-vme-required-privileges).

:::