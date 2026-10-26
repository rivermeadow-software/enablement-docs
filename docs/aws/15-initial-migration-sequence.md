# Initial Migration Sequence
---
The RiverMeadow platform enables the migration of servers from various sources to HPE Morpheus VM Essentials in an automated fashion. The platform orchestrates dozens of steps to coordinate the migration. This section of the course details the high-level steps that are performed during an initial migration or sync to HPE Morpheus VM Essentials.

## OS Based Migrations

The following steps are performed during the initial migration of the server to the HVM hypervisor for OS based migrations.

| Step | Action | Details|
|:---------:|:---------:|:--------:|
| **1** | **Source Server Inspection** | The migration appliance connects to the migration utility running on the source server (5994/TCP) to inspect the source server and collect system attributes. |
| **2** | **Pre-flight Migration Checks** | The source and target are evaluated to determine the migration readiness based on the RiverMeadow platform's preflight migration checks. |
| **3** | **Migration Profile Creation** | The migration profile that defines how the server is migrated to HPE Morpheus VM Essentials is created. |
| **4** | **Create VM Essentials Instance** | A new HPE Morpheus VM Essentials instance is created based on the instance configuration specification defined in the migration profile. |
| **5** | **Create and Upload Target Worker Image** | The migration appliance creates a new HPE Morpheus VM Essentials virtual image and uploads the target worker image to associate with the virtual image. |
| **6** | **Create Volume Creator Instance** | A temporary instance is created in HPE Morpheus VM Essentials to enable the creation of a boot volume for the RiverMeadow target worker image. |
| **7** | **Detach Volume from Volume Creator Instance** | The target worker volume is detached from the temporary volume creator instance. |
| **8** | **Attach Volume to Instance** | The target worker volume is attached to the target instance in HPE Morpheus VM Essentials as the boot bolume. |
| **9** | **Remove Volume Creator Instance** | The temporary volume creator instance is removed from HPE Morpheus VM Essentials. |
| **10** | **Start Instance** | The target instance is started and boots into the RiverMeadow target worker image. The image uses the IP address assigned to the target instance from the migration profile to communicate with the source server as well as the migration appliance.|
| **11** | **Replicate Source Data** | The target worker communicates with the source server over 5994/TCP to initiate the data transfer process. The target worker fetches the data from the source server drive-by-drive and writes the data replicated from the source server to the attached disks. |
| **12** | **Prepare Target** | The target worker prepares the guest operating system to boot on the KVM hypervisor. This includes operations such as removing existing virtualization tools, installing virtio drivers, and executing any configured post-migration automation (migration extensions). |
| **13** | **Stop Instance** | Once the initial target preparation process has been completed successfully, it is stopped to update the disk configuration for the instance.|
| **14** | **Detach Target Worker Volume** | The volume used to boot into the target worker execution environment is detached from the instance.|
| **15** | **Delete Target Worker Volume** | The target worker volume that was attached to the instance and used to boot the target worker software is deleted. |
| **16** | **Delete Target Worker Virtual Image** | The virtual image used to create the target worker volume is deleted. |
| **17** | **Start Instance** | The instance is started for a final time and should boot into the clone/replica of the source operating system.|

## VM Based Migrations

The following steps are performed during the initial migration of the server to the HVM hypervisor for VM based migrations.

| Step | Action | Details|
|:---------:|:-----------------:|:--------:|
| **1** | **Source VM Inspection** | The migration appliance connects to the source vCenter server REST API to collect the source virtual machine attributes. |
| **2** | **Pre-flight Migration Checks** | The source and target are evaluated to determine the migration readiness based on the RiverMeadow platform's preflight migration checks. |
| **3** | **Migration Profile Creation** | The migration profile that defines how the server is migrated to HPE Morpheus VM Essentials is created. |
| **4** | **Enable Change Block Tracking** | Change block tracking (CBT) is enabled on the source VMware virtual machine if it is not enabled. |
| **5** | **Create Source VM Snapshot** | The migration appliance connects to the source vCenter server REST API and triggers the creation of a snapshot of the source VMware virtual machine. |
| **6** | **Create VM Essentials Instance** | A new HPE Morpheus VM Essentials instance is created based on the instance configuration specification defined in the migration profile. |
| **7** | **Create and Upload Target Worker Image** | The migration appliance creates a new HPE Morpheus VM Essentials virtual image and uploads the target worker image to associate with the virtual image. |
| **8** | **Create Volume Creator Instance** | A temporary instance is created in HPE Morpheus VM Essentials to enable the creation of a boot volume for the RiverMeadow target worker image. |
| **9** | **Detach Volume from Volume Creator Instance** | The target worker volume is detached from the temporary volume creator instance. |
| **10** | **Attach Volume to Instance** | The target worker volume is attached to the target instance in HPE Morpheus VM Essentials as the boot bolume. |
| **11** | **Remove Volume Creator Instance** | The temporary volume creator instance is removed from HPE Morpheus VM Essentials. |
| **12** | **Start Instance** | The target instance is started and boots into the RiverMeadow target worker image. The image uses the IP address assigned to the target instance from the migration profile to communicate with the source worker appliance as well as the migration appliance.|
| **13** | **Replicate Source Data** | The target worker communicates with the source worker appliance over 5994/TCP to initiate the data transfer process. The source worker initiates an NFC session with the ESXi host where the source VMware VM is running and copies the data from the snapshot disk. The target worker fetches the data from the source worker appliance drive-by-drive and writes the data replicated from the source worker appliance to the attached disks. |
| **14** | **Prepare Target** | The target worker prepares the guest operating system to boot on the KVM hypervisor. This includes operations such as removing existing virtualization tools, installing virtio drivers, and executing any configured post-migration automation (migration extensions). |
| **15** | **Stop Instance** | Once the instance has been prepared, it is stopped to update the disk configuration for the instance.|
| **16** | **Detach Target Worker Volume** | Once the initial target preparation process has been completed successfully, the volume used to boot into the target worker execution environment is detached from the instance.|
| **17** | **Create VM Essentials Instance Snapshot** | A snapshot is created of the target instance in HPE Morpheus VM Essentials to enable delta migrations or incremental data syncs. |
| **18** | **Delete Target Worker Volume** | The volume attached to the instance that was used to boot the target worker is deleted. |
| **19** | **Delete Target Worker Virtual Image** | The virtual image used to create the target worker volume is deleted. |
| **20** | **Start Instance** | The instance is started for a final time and should boot into the clone of the source operating system.|
| **21** | **Remove vSphere Source VM Snapshot** | The snapshot created on the source VMware virtual machine is removed. |