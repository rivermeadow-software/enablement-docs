# Solution Architecture
---

![RiverMeadow Solution Architecture](/img/rivermeadow_aws_architecture.png)
<center>**RiverMeadow Platform Architecture**</center>

## Solution Components

The RiverMeadow solution architecture includes the following components:

### SaaS Platform

The RiverMeadow SaaS platform is responsible for migration orchestration, logging, and notifications. Web UI (migrate.rivermeadow.com) and REST API for interacting with the RiverMeadow platform.

### Migration Appliance

A virtual appliance (virtual machine) that is deployed into the target AWS environment. The appliance brokers source and target instance configuration metadata used for orchestration.

### Source Worker Appliance

A virtual appliance (virtual machine) that is deployed into the source VMware vSphere cluster. Mounts virtual machine snapshots and facilitates data transfer to target workers.

### OS Agent

A lightweight agent (less than 25 MB) that is installed on Windows or Linux systems that are migrated using OS based migrations. Facilitates data transfer to the target worker and enables optimization and modernization capabilities.


### Target Worker

A minimal image that is mounted on the target instance or virtual machine during the migration process (initial and delta). Responsible for transferring data from the source workload and preparing the system for the target cloud or hypervisor.

