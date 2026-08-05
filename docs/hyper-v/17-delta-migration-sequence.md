# Delta Migration Sequence
---
The RiverMeadow platform enables the migration of servers from various sources to HPE Morpheus VM Essentials in an automated fashion. The platform orchestrates dozens of steps to coordinate the migration

## OS Based Migrations

The following steps are performed during the initial migration of the server to the HVM hypervisor for OS based migrations.

| Step | Action | Details|
|:---------:|:---------:|:--------:|
| **1** | **Pre-flight Migration Checks** | The source and target are evaluated to determine the migration readiness based on the RiverMeadow platform's preflight migration checks. |
| **2** | **Power Off Instance** | The target instance in HPE Morpheus VM Essentials is powered off if it is currently running. |
| **3** | **Create and Upload Target Worker Image** |The migration appliance creates a new HPE Morpheus VM Essentials virtual image and uploads the target worker ISO image to associate with the virtual image. |
| **4** | **Create Volume Creator Instance** | A temporary instance is created in HPE Morpheus VM Essentials to enable the the creation of a boot volume for the RiverMeadow target worker image. |
| **5** | **Detach Volume from Creator Instance** | The target worker volume is detached from the temporary volume creator instance. |
| **6** | **Attach Volume to Instance** | The target worker volume is attached to the target instance in HPE Morpheus VM Essentials as the boot volume. |
| **7** | **Remove Volume Creator Instance** | The temporary volume creator instance is removed from HPE Morpheus VM Essentials. |
| **8** | **Start Instance** | The instance is started and boots into the RiverMeadow target worker software image.|
| **9** | **Replicate Source Data** | The target worker communicates with the source server over 5994/TCP to initiate the data transfer process. The target worker fetches the data from the source server drive-by-drive and writes the data replicated from the source server to the attached disks. |
| **10** | **Prepare Target** | The target worker prepares the guest operating system to boot on the KVM hypervisor. This includes operations such as removing existing virtualization tools, installing virtio drivers, and executing any configured post-migration automation (migration extensions). |
| **11** | **Stop Instance** | Once the instance has been prepared, it is stopped to update the disk configuration for the instance.|
| **12** | **Detach Target Worker Volume** | Once the initial target preparation process has been completed successfully, the volume used to boot into the target worker execution environment is detached from the instance.|
| **13** | **Delete Target Worker Volume** | The volume attached to the instance that was used to boot the target worker is deleted. |
| **14** | **Delete Target Worker Virtual Image** | The virtual image used to create the target worker volume is deleted. |
| **15** | **Start Instance** | The instance is started for a final time and should boot into the clone of the source operating system.|

## VM Based Migrations

The following steps are performed during the initial migration of the server to the HVM hypervisor for VM based migrations.

| Step | Action | Details|
|:---------:|:---------:|:--------:|
| **1** | **Pre-flight Migration Checks** | The source and target are evaluated to determine the migration readiness based on the RiverMeadow platform's preflight migration checks. |
| **2** | **Create Source VM Snapshot** | The migration appliance connects to the source vCenter server REST API and triggers the creation of a snapshot of the source VMware virtual machine. |
| **3** | **Power Off Instance** | The target instance in HPE Morpheus VM Essentials is powered off if it is currently running. |
| **4** | **Revert to Snapshot** | The target instance in HPE Morpheus VM Essentials is reverted to the designated snapshot created by the RiverMeadow platform during the initial migration. |
| **5** | **Create and Upload Target Worker Image** | The migration appliance creates a new HPE Morpheus VM Essentials virtual image and uploads the target worker image to associate with the virtual image. |
| **6** | **Create Volume Creator Instance** | A temporary instance is created in HPE Morpheus VM Essentials to enable the the creation of a boot volume for the RiverMeadow target worker image. |
| **7** | **Detach Volume from Creator Instance** | The target worker volume is detached from the temporary volume creator instance. |
| **8** | **Attach Volume to Instance** | The target worker volume is attached to the target instance in HPE Morpheus VM Essentials as the boot volume. |
| **9** | **Remove Volume Creator Instance** | The temporary volume creator instance is removed from HPE Morpheus VM Essentials. |
| **10** | **Start Instance** | The instance is started and boots into the RiverMeadow target worker software image.|
| **10** | **Replicate Source Data** | The target worker communicates with the source worker appliance over 5994/TCP to initiate the data transfer process. The source worker initiates an NFC session with the ESXi host where the source VMware VM is running and copies the data from the snapshot disk. The target worker fetches the data from the source worker appliance drive-by-drive and writes the data replicated from the source worker appliance to the attached disks. |
| **11** | **Prepare Target** | The target worker prepares the guest operating system to boot on the KVM hypervisor. This includes operations such as removing existing virtualization tools, installing virtio drivers, and executing any configured post-migration automation (migration extensions). |
| **12** | **Stop Instance** | Once the instance has been prepared, it is stopped to update the disk configuration for the instance.|
| **13** | **Detach Target Worker Volume** | Once the initial target preparation process has been completed successfully, the volume used to boot into the target worker execution environment is detached from the instance.|
| **14** | **Delete to Snapshot** | The previous snapshot on the target instance in HPE Morpheus VM Essentials is deleted. |
| **15** | **Create VM Essentials Instane Snapshot** | A snapshot is created of the target instance in HPE Morpheus VM Essentials to enable delta migrations or incremental data syncs. |
| **16** | **Delete Target Worker Volume** | The volume attached to the instance that was used to boot the target worker is deleted. |
| **17** | **Delete Target Worker Virtual Image** | The virtual image used to create the target worker volume is deleted. |
| **18** | **Start Instance** | The instance is started for a final time and should boot into the clone of the source operating system.|
| **19** | **Remove vSphere Source VM Snapshot** | The snapshot created on the source VMware virtual machine is removed. |