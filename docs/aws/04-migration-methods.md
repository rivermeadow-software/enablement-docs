# Migration Methods
---
The RiverMeadow platform supports migrating servers to AWS utilizing an OS based or VM based migration method. The two migration methods support different capabilities such as the supported sources, optimization features, modernization features, and more.

### OS Based Migration

The OS based migration method utilizes a migration utility deployed to each source server operating system to enable migration, optimization, and modernization.

* **Platform agnostic:** Migrate servers from any source such as physical servers, virtual machines running on any hypervisor (including VMware), and public cloud instances.
* **Windows and Linux:** Migrate Windows and Linux servers running on x86 and ARM architectures.
* **Optimization and modernization support:** Enable optimization features such as storage rightsizing and OS hardening as well as modernization features such as OS modernization, SQL modernization, and Linux OS conversion during the migration process.

### VM Based Migration

The VM based migration method utilizes a hypervisor-level integration with the source VMware vSphere environment to migrate virtual machines transparently to the guest operating system.

* **VMware vSphere source only:** VM based migrations are supported for virtual machines running on VMware vSphere.

### Comparison Table

The following table details the features that are supported by each migration method:

| Feature | Description | VM Based | OS Based |
|:---------:|:--:|:---:|:---------------------:|
| **Supported Sources** | The environment of the source server being migrated to AWS | VMware vSphere | Any (physical, virtual, cloud) |
| **Supported Operating Systems** | The supported operating systems for the source server being migrated to AWS | Any - [Supported OS Matrix](https://docs.rivermeadow.com/support-matrix) | Windows and Linux (x86 and ARM) - [Supported OS Matrix](https://docs.rivermeadow.com/support-matrix) |
| **Supported Targets** | The targets the source server can be migrated to | Any supported | Any supported |
| **Compute Rightsizing** | CPU and memory rightsizing recommendations | &#10004; |  |
| **Storage Rightsizing** | Rightsize storage volumes during the server migration | | &#10004; |
| **Migration Extensions** | Execute custom post-migration automation scripts | &#10004; | &#10004; |
| **Microsoft SQL Server Modernization** | Automated Microsoft SQL Server upgrades during the server migration | | &#10004; |
| **Operating System Hardening** | Security hardening for servers running Windows Server or Red Hat Enterprise Linux (RHEL) using CIS Benchmarks | | &#10004; |
| **Operating System Modernization** | Automated OS upgrades for Windows and Linux systems during the server migration | | &#10004; |
| **Linux Operating System Conversion** | Convert between RPM based Linux distributions (i.e. - RHEL, Rocky, Amazon Linux, etc.) |  | &#10004; |

:::info
The migrated server must be running an operating system supported by Amazon EC2. Check the AWS documentation to determine if the operating system of the source server is supported on the desired EC2 instance type.
:::
