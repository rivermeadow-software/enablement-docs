# Deployment Workflow
---
The following steps detail the workflow for deploying and configuring the RiverMeadow platform for HPE Morpheus VM Essentials server migrations:

1. **Target Environment IAM Setup:** A dedicated role and service account should be created to allow the migration appliance to interact with the HPE Morpheus VM Essentials REST API.
2. **Migration Appliance Deployment:** The RiverMeadow migration appliance is deployed into the target HPE Morpheus VM Esssentials environment to enable local migration orchestration and migration log collection.
3. **Source Worker Appliance Deployment (Optional):** For VM based or agentless migrations the RiverMeadow source worker appliance is deployed into the source VMware vSphere environment to enable snapshot based data replication to the target environment.
4. **Migration Utility Deployment (Optional):** For OS based migrations the RiverMeadow agent is installed on the source Windows and Linux systems that will be migrated to enable data replication and advanced optimization and modernization capabilities.
5. **Source Onboarding:** The RiverMeadow source inventory is populated with entries of the source workloads that will be migrated. The source workloads can be grouped into "move groups" to align with waves defined during wave planning.