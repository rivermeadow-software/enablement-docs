# Migration Profiles
---
The migration profile defines the plan or configuration for migrating a workload from the source environment to the target environment.



### Placement Settings

| Name | Description |
|------|-------------|
| **Cloud**| The target AWS region for the migrated server |
| **Instance Type** | The AWS instance type used for the EC2 instance the source server is migrated to |
| **Tenancy** | The AWS tenancy to assign to the target EC2 instance |
| **Instance Tags** | The instance tags to associate with the target EC2 instance |
| **Volume Type** | The volume type used for the target EC2 instance |
| **VPC** | The VPC where the target EC2 instance will be deployed |
| **Subnet** | The Subnet that the ENI(s) attached to the target EC2 instance will be associated with  |

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