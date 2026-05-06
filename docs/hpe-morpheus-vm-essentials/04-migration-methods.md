# Migration Methods
---
The RiverMeadow platform supports migrating servers to HPE Morpheus VM Essentials utilizing an OS based or VM based migration method. The two migration methods support different capabilities such as the supported sources, optimization features, modernization features, and more.

### OS Based Migration

The OS based migration method utilizes a migration utility deployed to each source server to enable migration, optimization, and modernization.

* **Hypervisor or cloud agnostic:** Migrate servers from any source such as physical servers, virtual machines running on any hypervisors (including VMware), and public cloud instances.
* **Optimization and modernization support:** Enable optimization features such as storage rightsizing and modernization features such as OS modernization, SQL modernization, and Linux OS conversion during the migration process.

### VM Based Migration

The VM based migration method utilizes a hypervisor-level integration with the source VMware vSphere environment to lift and shift virtual machines from VMware to HPE Morpheus VM Essentials.

* **Operating system agnostic:** Migrate servers from any source such as physical servers, virtual machines running on any hypervisors, and public cloud instances. ***The operating system must be supported by HPE Morpheus VM Essentials***

### Comparison Table

The following table details the features that are supported by each migration method:

| Feature | Description | VM Based | OS Based |
|:---------:|:--:|:---:|:---------------------:|
| **Supported Sources** | The environment of the source server being migrated to HPE Morpheus VM Essentials | VMware vSphere | Any (physical or virtual)|
| **Supported Operating Systems** | The supported operating systems for the source server being migrated to HPE Morpheus VM Essentials | Any Operating System | Windows and Linux (x86 and ARM) |
| **Retain source IP Address** | Retain the IP address of the source server during the migration | [^1]  | [^1] |
| **Retain source MAC Address** | Retain the MAC address of the source server during the migration | [^2] | [^2] |
| **Automated VMware Tools Removal** | The automated removal of VMware tools from the cloned instance during the migration process | &#10004; | &#10004; |
| **Automated Virtio Driver Installation** | The automated installation of virtio drivers on the cloned instance during the migration process | &#10004; | &#10004; |
| **Migration Extensions** | Execute custom post-migration automation scripts using Bash or PowerShell  | &#10004; | &#10004; |
| **Compute Righsizing** | CPU and Memory rightsizing recommendations | &#10004; |  |
| **Storage Rightsizing** | Rightsize storage volumes during the server migration | | &#10004; |
| **Operating System Modernization** | Automated OS upgrades for Windows and Linux systems during the server migration | | &#10004; |
| **Microsoft SQL Server Modernization** | Automated Microsoft SQL Server upgrades during the server migration | | &#10004; |
| **Operating System Hardening** | Security hardening for servers running Windows Server or Red Hat Enterprise Linux (RHEL) using CIS Benchmarks | | &#10004; |
| **Linux Operating System Conversion** | Convert between RPM based Linux distributions (i.e. - RHEL, Rocky, Amazon, etc.)  |  | &#10004; |

:::info
The migrated server must be running an operating system supported by the HVM hypervisor. Check the vendor compatiblity guide to determine if the operating system of the source server is supported.
:::

[^1]: Retaining the original IP address of the source server can be accomplished in a seperate process during the migration cutover.
[^2]: HPE Morpheus VM Essentials HVM instances do not natively supported specifying a custom MAC address during provisioning. This limitation prevents the RiverMeadow platform from supporting MAC address retention during the server migration.