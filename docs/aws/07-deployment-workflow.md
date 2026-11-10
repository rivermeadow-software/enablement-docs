# Deployment Workflow
---

The following steps detail the workflow for deploying and configuring the RiverMeadow platform for server migrations to AWS:

| Step | Action         | Details | Migration Method |
|:------:|:------------:|:---------:|:---------------:|
| **1** | **AWS IAM Role Setup** | The configuration of identity access to the target AWS account to enable migration operations. This involves the creation of an AWS IAM role (cross-account role) with the required privileges. | OS and VM|
| **2** | **VMware Service Account Setup** | The configuration of a dedicated VMware vSphere service account with the required permissions used by the platform to enable VM based migrations. This is only required if VM based migrations will be used to migrate to AWS. | VM |
| **3** | **AWS Cloud Integration Setup** | The cloud integration for the target AWS account is configured. This involves adding the IAM role details to grant the RiverMeadow platform access to the target AWS account. | OS and VM |
| **4** | **Migration Appliance Deployment** | The migration appliance is deployed to the target AWS account to enable local migration orchestration. The appliance deployment is automated with API calls from the RiverMeadow platform. | OS and VM |
| **5** | **Source Worker Deployment** | The source worker appliance(s) is an optional component that is deployed to the source VMware vSphere environment to enable VM based migrations. | VM |
| **6** | **Migration Utility Deployment** | The migration utility is an optional component that is deployed to each source server to enable OS based migrations and the advanced optimization and modernization capabilities. | OS |
| **7** | **Source Inventory Population** | The RiverMeadow source inventory is populated with entries of the source servers that will be migrated. The source servers can be grouped into "move groups" to align with waves defined during wave planning. | OS and VM |