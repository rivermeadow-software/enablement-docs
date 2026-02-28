# Migration Methods
---
The RiverMeadow platform supports the migration of servers using OS based or VM based migrations. Different features are supported by the different migration methods. 

### Feature Comparison Table

The following table details the features that are supported by each migration method:

| Feature | Description | VM Based | OS Based |
|---------|--|:---:|:---------------------:|
| **Supported Sources** | Where the source systems can be migrated from | VMware vSphere | Any (physical or virtual)|
| **Supported Operating Systems** | The supported operating systems for the source systems | Any Operating System | Windows and Linux (x86 and ARM) |
| **Retain source IP and MAC address** | Keep the IP and MAC address of the source workload | &#10004; |  |
| **Compute Righsizing** | CPU and Memory rightsizing recommendations | &#10004; |  |
| **Storage Rightsizing** | Rightsize storage volumes during the workload migration | | &#10004; |
| **Migration Extensions** | Execute post-migration automation scripts using Bash or PowerShell  |  | &#10004; |
| **Operating System Modernization** | Automated OS upgrades for Windows and Linux systems during the workload migration | | &#10004; |
| **Microsoft SQL Server Modernization** | Automated Microsoft SQL Server upgrades during the workload migration | | &#10004; |
| **Operating System Hardening** | Security hardening for servers running Windows Server or Red Hat Enterprise Linux (RHEL) using CIS Benchmarks | | &#10004; |
| **Linux Operating System Conversion** | Convert between Linux distributions that are derivaties of the same base operating system  |  | &#10004; |


:::info
The migrated server must be running an operating system supported by the HVM hypervisor. Check the vendor compatiblity guide to determine if the operating system of the source server is supported.
:::
