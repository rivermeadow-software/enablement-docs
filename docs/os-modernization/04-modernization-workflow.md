# Modernization Workflow
---


## Multi-hop Upgrades

Upgrading from an older version of Windows or Linux can require one or more intermediary upgrades to be performed as part of the process. This results in multiple upgrades being performed to get the server to desired operating system version. When performed manually, this results in delays to the overall process by needing to wait for one upgrade to complete before starting the next manual upgrade. This process is fully automated by the RiverMeadow platform and only the desired operating system version needs to be selected with the RiverMeadow solution seamlessly handling any intermediary upgrades that are needed.

1. **Clone Source VM**
2. **Automate Operating System Upgrade**
3. **Sync


1. Create target virtual machine or instance
2. Replicate source server
3. Automate OS upgrade
4. Replicate data changes


### Full Sync
The initial synchronization is performed using a block-based copy of the source server.

### Incremental Sync (Delta Migration)
Delta migrations enable the changes on the source server to be synced to the "clone" using file-based replication.



### Image Location


The following steps are performed during the initial migration of the server to the HVM hypervisor for OS based migrations.

| Step | Action | Details|
|:---------:|:---------:|:--------:|
| **1** | **Source Server Inspection** | The migration appliance connects to the migration utility running on the source server (5994/TCP) to inspect the source server and collect system attributes. |
| **2** | **Pre-flight Migration Checks** | The source and target are evaluated to determine the modernization readiness based on the RiverMeadow platform's preflight migration checks. |
| **3** | **Migration Profile Creation** | The migration profile that defines how the server is modernized. |
| **4** | **Create Target Instance** | A new target instance or virtual machine is created based on the configuration specification defined in the migration profile including the operating system version. |
| **5** | **Boot to Target Worker** | The target worker volume is attached to the target instance in HPE Morpheus VM Essentials as the boot bolume. |
| **6** | **Replicate Source Data** | The target worker communicates with the source server over 5994/TCP to initiate the data transfer process. The target worker fetches the data from the source server drive-by-drive and writes the data replicated from the source server to the attached disks. |
| **12** | **Prepare Target** | The target worker prepares the guest operating system to boot on the KVM hypervisor. This includes operations such as removing existing virtualization tools, installing virtio drivers, and executing any configured post-migration automation (migration extensions). |
| **13** | **Stop Instance** | Once the initial target preparation process has been completed successfully, it is stopped to update the disk configuration for the instance.|
| **14** | **Detach Target Worker Volume** | The volume used to boot into the target worker execution environment is detached from the instance.|
| **15** | **Delete Target Worker Volume** | The target worker volume that was attached to the instance and used to boot the target worker software is deleted. |
| **16** | **Delete Target Worker Virtual Image** | The virtual image used to create the target worker volume is deleted. |
| **17** | **Start Instance** | The instance is started for a final time and should boot into the clone/replica of the source operating system.|