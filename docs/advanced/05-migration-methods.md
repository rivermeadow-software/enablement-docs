# Migration Methods
---
The RiverMeadow platform supports the migration of workloads using OS and VM based migrations. Different features are supported by the different migration methods. The following table details the features that are supported by each migration method:

| Feature | Description | VM Based | OS Based |
|---------|:--:|:---:|:---------------------:|
| **Supported Sources** | Where the source systems can be migrated from | VMware vSphere | Any (physical or virtual)|
| **Supported Operating Systems** | The supported operating systems for the source systems | Any Supported OS | Windows and Linux (x86 and ARM) |
| **Supported Targets** | The targets supported by the migration method | Any Supported | Any Supported|
| **Retain source IP and MAC address** | Keep the IP and MAC address of the source workload | Yes | No |
| **Compute Righsizing** | Rightsize workload CPU and Memory during the workload migration | Yes | No |
| **Storage Rightsizing** | Rightsize storage volumes during the workload migration | No | Yes |
| **Migration Extensions** | Execute post-migration scripts using Bash or PowerShell  |  No | Yes |
| **OS Modernization** | Automated OS upgrades for Windows and Linux systems during the workload migration | No | Yes |
| **SQL Modernization** | Automated Microsoft SQL Server upgrades during the workload migration | No | Yes |
| **OS Hardening** | Harden Windows Server and RHEL systems using CIS Benchmarks | No | Yes |
| **OS Conversion** | Convert between Linux distributions that are derivaties of the same base operating system  |  No | Yes |


Pros and Cons