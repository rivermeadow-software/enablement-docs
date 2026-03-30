# Migration Profiles
---
The migration profile defines the plan or configuration for migrating a workload from the source environment to the target environment.

### Placement Settings

| Name | Description |
|------|-------------|
| **Group**| The VM Essentials group where the migrated server will be created. |
| **Cloud**| The VM Essentials cloud where the migrated server will be created. |
| **Cluster**| The VM Essentials cluster where the migrated server will be created. |
| **Host (Optional)**| The VM Essentials cluster host where the migrated server will be created. |
| **Datastore**| The VM Essentials cluster datastore where the migrated server disk(s) will be created. |
| **Layout**| The VM Essentials layout the migrated server will be created with. |
| **Resource Pool**| The VM Essentials resource pool where the migrated server will be created. |
| **Plan**| The VM Essentials instance plan the migrated server will be created with. |

### Optimization

Workloads being migrated using the OS based migration methodology can also be optimized during the migration process.

| Name | Description |
|------|-------------|
| **NetBIOS Name (Windows Only)**| The new NetBIOS name for the migrated Windows workload  |
| **Sysprep (Windows Only)** | Whether to sysprep the Windows system during the migration  |
| **Storage Rightsizing** | Whether to adjust the storage allocated to the target instance volumes  |
| **Migration Extension** | The migration extension to associate with the instance to perform post-migration automation using an uploaded Bash or PowerShell script |

### Modernization Settings

| Name | Description |
|------|-------------|
| **OS Modernization**| The operating system version to upgrade the target system to during the migration or the Linux distribution to convert the target system to during the migration |
| **SQL Modernization (Windows Only)** | The Microsoft SQL Server version to upgrade the SQL Server to during the workload migration  |

### Security Settings

| Name | Description |
|------|-------------|
| **Enable Disk Encryption**| Whether to enable EBS volume encryption |
| **Security Groups** | The AWS security groups to associate with the target EC2 instance|
| **IAM Role** | The AWS IAM role to associate with the target EC2 instance |
| **Enable OS Hardening** | Whether to harden the operating system of the target EC2 instance using CIS benchmarks |

## CSV

## REST API

The migration 