# Deployment Workflow
---

The following steps detail the workflow for deploying and configuring the RiverMeadow platform for HPE Morpheus VM Essentials server migrations:

| Step | Action         | Details |
|:------:|:------------:|:---------:|
| **1** | **HPE Morpheus VME Service Account Creation** | A dedicated user role and service account should be created to enable the migration appliance to interact with the HPE Morpheus VM Essentials REST API. |
| **2** | **Source VMware Service Account Creation (Optional)** | A dedicated user role and service account should be created to enable the migration appliance and source worker appliance to interact with the source VMware vSphere REST API. This is only required if VM based migrations will be used to migrate to HPE Morpheus VM Essentials. |
| **3** | **Migration Appliance Deployment** | The RiverMeadow migration appliance is deployed to the target HPE Morpheus VM Esssentials deployment to enable local migration orchestration and log collection. |
| **4** | **Source Worker Appliance Deployment (Optional)** | For VM based migrations the RiverMeadow source worker appliance is deployed to the source VMware vSphere environment to enable snapshot based data replication to the target VM Essentials deployment. |
| **5** | **Migration Utility Deployment (Optional)** | For OS based migrations the RiverMeadow migration utility is deployed to each source Windows and Linux server that will be migrated to enable data replication and advanced optimization and modernization capabilities. |
| **6** | **Source Inventory Population** | The RiverMeadow source inventory is populated with entries of the source servers that will be migrated. The source servers can be grouped into "move groups" to align with waves defined during wave planning. |