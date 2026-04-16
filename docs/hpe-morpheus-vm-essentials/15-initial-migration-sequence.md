# Initial Migration Sequence
---
The RiverMeadow platform enables the migration of servers from various sources to HPE Morpheus VM Essentials in an automated fashion. The platform orchestrates dozens of steps to coordinate the migration. This section of the course details the high-level steps that are performed during an initial migration or sync to HPE Morpheus VM Essentials.

## OS Based Migrations

The following steps are performed during the initial migration of the server to the HVM hypervisor for OS based migrations.

| Step | Action | Details|
|:---------:|---------|--------|
| **1** | **Create Target Worker Image** | The migration appliance uploads a customized image of the target worker |
| **2** | **Upload Target Worker Image** | The migration appliance uploads the target worker image |
| **3** | **Create Instance** | A new instance is created using the uploaded target worker image based on the instance configuration specific in the migration profile |
| **4** | **Boot Target Worker Image** | The RiverMeadow target worker image is booted and uses the IP address assigned to the target instance from the migration profile to communicate with the source server as well as the migration appliance. |
| **4** | **Replicate Source Data** | The target worker communicates with the source server over 5994/TCP to initiate the data transfer process. The target worker fetches the data from the source server drive-by-drive and writes the data replicated from the source server to the attached disks. |
| **5** | **Prepare Target** | The target worker writes the data replicated from the source server to the attached disks |
| **6** | **Remove Virtualization Tooling** | The target worker writes the data replicated from the source server to the attached disks |
| **7** | **Inject Virtualization Tooling** | The target worker writes the data replicated from the source server to the attached disks |
| **8** | **Detach Target Worker Volume** | Once the initial target preparation process has been successfully, the volume used to boot into the target worker execution environment is detached from the instance  |

## VM Based Migrations

The following steps are performed during the initial migration of the server to the HVM hypervisor for VM based migrations.

| Step | Action | Details|
|:-----:|:---------:|--------|
| **1** | **Enable Change Block Tracking** | Change block tracking is enabled on the source virtual machine if it isn't already enabled. |
| **2** | **Create Source VM Snapshot** | A snapshot of the source VMware virtual machine is taken. |
| **3** | **Create Target Worker Image** | The migration appliance uploads a customized image of the target worker to HPE Morpheus VM Essentials. |
| **4** | **Create Volume Creator Instance** | The migration appliance uploads a customized image of the target worker |
| **5** | **Create Instance** | A new instance is created using the uploaded target worker image based on the instance configuration specific in the migration profile |
| **6** | **Remove Volume Creator Instance** | The temporary volume creator instance is removed from HPE Morpheus VM Essentials. |
| **7** | **Replicate Source Data** | The target worker communicates with the source worker appliance over 5994/TCP to initiate the data transfer process. The source worker initiates an NFC session with the ESXi host where the source VMware VM is running and copies the data from the snapshot disk. The target worker fetches the data from the source worker appliance drive-by-drive and writes the data replicated from the source worker appliance to the attached disks. |
| **8** | **Create VM Essentials Instane Snapshot** | A snapshot is created of the target instance in HPE Morpheus VM Essentials to enable delta migrations or incremental data syncs. |
| **9** | **Remove vSphere VM Snapshot** | The snapshot created on the source VMware virtual machine is removed. |
