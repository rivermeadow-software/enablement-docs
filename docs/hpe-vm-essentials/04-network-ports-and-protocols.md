# Networking Ports and Protocols
---

## General Ports and Protocols
The following table details the network ports and protocols that are required for all migrations:

|     Name                             |     Description                                                                                     |     Source                 |     Target                 |     Port/Protocol    |
|-------------------|-----------------------------------|:----------------------------:|:----------------------------:|:----------------------:|
| **RiverMeadow Platform Access**    | UI and API access to the RiverMeadow platform |     Admin Workstation      |     RiverMeadow SaaS Platform | 443/TCP |
| **Migration Appliance Orchestration** | Control plane communication between the migration appliance and SaaS platform |     Migration Appliance    |     RiverMeadow SaaS Platform | 443/TCP |
| **Target Worker Orchestration** | Control plane communication between target workers and the associated migration appliance |  Target Worker | Migration Appliance | 443/TCP |
| **Migration Appliance API Access** | API communication between the target workers and the associated migration appliance|  Target Worker | Migration Appliance | 8888/TCP |

## OS Based Migration Ports and Protocols
The following table details the network ports and protocols that are required for OS based migrations in addition to the general platform network ports and protocols:

| Name                            | Description          | Source                     | Target                           | Port/Protocol   |
|---------------------------------|----------------------|:----------------------------:|:-------------------------:|:-----------------:|
|  **Migration Data Transfer** | Data transfer from the source server to the "clone" on the HVM hypervisor |      Target Worker      |     Source Server              |     5994/TCP    |
|  **Windows Utility Installation (OPTIONAL)**  | Windows SMB access to automatically deploy the migration utility to the source Windows server |     Migration Appliance    |     Source Server (Windows)    |     445/TCP     |
|  **Windows Utility Installation (OPTIONAL)**  | Windows WinRM access to automatically deploy the migration utility to the source Windows server |     Migration Appliance    |     Source Server (Windows)    |     5985/TCP     |
|  **Linux Utility Installation (OPTIONAL)**    | SSH access to automatically deploy the migration utility to the source Linux server  |     Migration Appliance    |     Source Server (Linux)      |     22/TCP      |


## VM Based Migration Ports and Protocols
The following table details the network ports and protocols that are required for VM based migrations in addition to the general platform network ports and protocols:

|     Name                   |     Description      |     Source                      |     Target                     |     Port/Protocol    |
|----------------------------|----------------------|---------------------------------|--------------------------------|----------------------|
| **vCenter API Access**         |     API Access             |      Migration Appliance     |     VMware vCenter Server      |     443/TCP          |
|  **Data Transfer** |     Data Transfer    |      Migration Appliance     |      Source Worker Appliance |     5994/TCP         |
|  **Data Transfer** |     Data Transfer    |      Target Worker           |      Source Worker Appliance|     5994/TCP         |
| **Orchestration** |     Orchestration    |      Target Worker           |      Migration Appliance  |     443/TCP         |
|  **API Communication** |API communication|  Target Worker |      Migration Appliance    |     8888/TCP         |
|  **Log Aggregation** |API communication|  Target Worker |      Migration Appliance    |     8080/TCP         |
|  **API Communication** |API communication|  Source Worker Appliance |      Migration Appliance    |     8888/TCP         |
| **vCenter API Access** |     API Access             |      Source Worker Appliance |     VMware vCenter Server      |     443/TCP          |
| **VMware Network Copy** |     NBDSSL Transport |      Source Worker Appliance |     VMware ESXi Hosts          |     902/TCP          |