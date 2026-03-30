# Solution Architecture
---

![RiverMeadow Solution Architecture](/img/rivermeadow_aws_architecture.png)
<center>**RiverMeadow Platform Architecture**</center>

### HPE Morpheus VM Essentials Manager

The HPE Morpheus VM Essentials manager is a virtual appliance that provides a centralized interface for managing multiple clusters in the HPE Morpheus VM Essentials environment. The RiverMeadow solution integrates with the HPE Morpheus VM Essentials REST API to automate the migration for servers to a managed HVM cluster.

### RiverMeadow Hosted Platform

The RiverMeadow hosted platform is the control plane and is responsible for migration orchestration, logging, and notifications. Interaction with the platform can be performed using the web interface (migrate.rivermeadow.com) or the platform REST API.

### RiverMeadow Migration Appliance

The RiverMeadow migration appliance is a virtual appliance (virtual machine) that is deployed into the target HPE Morpheus VM Esssentials or HPE Morpheus Enterprise on an HVM cluster environment. The appliance is responsible for local migration orchestration operations such as provisioning HVM instances via the Morpheus REST API in tandem with RiverMeadow platform.

### RiverMeadow Source Worker Appliance (VM Based Migrations)

The RiverMeadow source worker appliance is a virtual appliance (virtual machine) that is deployed into the source VMware vSphere deployment. The source worker appliance is responsible for mounting VMware virtual machine snapshots and facilitating the data transfer to target workers running on the HVM hypervisor. The appliance is automatically deployed into the source VMware vSphere environment from the RiverMeadow migration appliance.

### RiverMeadow Migration Utility (OS Based Migrations)

The RiverMeadow migration utility is a lightweight utility (less than 30 MB) that is deployed to the source Windows or Linux server for OS based migrations. The utility is responsible for metadata collection and data transfer to the corresponding target instance. The migration utility also enables the advanced optimization and modernization capabilities of the RiverMeadow platform. The utility does not require a reboot of the source system and can be automatically removed following the completion of the migration or modernization.

### RiverMeadow Target Worker

The RiverMeadow target worker is a minimal operating system image that is mounted on the target instance or virtual machine during the migration process (initial and delta). It is responsible for transferring data from the source server and preparing the migrated server to run on the HVM hypervisor.

