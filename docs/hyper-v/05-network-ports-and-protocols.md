# Network Ports and Protocols
---

Network communication between the RiverMeadow solution components is critical to enable successful migrations to HPE Morpheus VM Essentials. This section of the course details the network ports and protocols required for the different migration methods (VM based and OS based) available in the RiverMeadow platform.

## Platform Access

The hosted RiverMeadow portal acts as the user interface for managing migrations to HPE Morpheus VM Essentials. The migration appliance is deployed to the HVM cluster in the target HPE Morpheus VM Essentials environment. The migration appliance initiates outbound communication to the RiverMeadow platform over 443/TCP to establish a bi-directional communication channel. This enables commands to be relayed to the migration appliance without the need to open inbound firewall ports in order to allow the RiverMeadow platform to reach the source or target environments.

### External IP Addresses

The hosted RiverMeadow platform utilizes the following IP addresses. The migration appliance must be able to reach them to establish the bi-directional communication channel with the control plane.

* 52.9.247.1
* 52.9.142.11
* 18.218.114.29
* 3.143.57.56

### DNS Domains

The migration appliance must be able to resolve the following domain names to establish the bi-directional communication channel with the control plane.

* rm-files.rivermeadow.com
* rm-logs.rivermeadow.com
* mq-sns.rivermeadow.com
* mq-sqs.rivermeadow.com

## OS Based Migration Ports and Protocols

The following table details the network ports and protocols that must be opened to ensure proper network communication for OS based migrations.

| Source | Target | Port | Protocol | Notes |
|:--------:|:--------:|:-------:|:----------:|:-------:|
| Admin Workstation | RiverMeadow Platform | 443 | TCP | UI and API access for administrator management activities |
| RiverMeadow Migration Appliance | RiverMeadow Platform | 443 | TCP | Control plane communication for migration orchestration |
| RiverMeadow Migration Appliance | HPE Morpheus VM Essentials Manager | 443 | TCP | API access to the VM Essentials Manager for migration automation |
| RiverMeadow Migration Appliance | Source Server (Windows) | 5985 | TCP | Automated migration utility deployment for Windows (WinRM). ***This port is optional if the utility is preinstalled*** |
| RiverMeadow Migration Appliance | Source Server (Windows) | 445 | TCP | Automated migration utility deployment for Windows (SMB). ***This port is optional if the utility is preinstalled*** |
| RiverMeadow Migration Appliance | Source Server (Linux) | 22 | TCP | Automated migration utility deployment for Linux (SSH). ***This port is optional if the utility is preinstalled*** |
| RiverMeadow Migration Appliance | Source Server | 5994 | TCP | Source inspection to collect system metadata |
| RiverMeadow Target Worker | RiverMeadow Migration Appliance | 443 | TCP | Control plane communication for migration orchestration (message bus) |
| RiverMeadow Target Worker | RiverMeadow Migration Appliance | 8888 | TCP | Control plane communication for migration orchestration (api access) |
| RiverMeadow Target Worker | Source Server | 5994 | TCP | Data replication from the source server to target instance |

## VM Based Migration Ports and Protocols

The following table details the network ports and protocols that must be opened to ensure proper network communication for VM based migrations.

| Source | Target | Port | Protocol | Notes |
|:--------:|:--------:|:-------:|:----------:|:-------:|
| Admin Workstation | RiverMeadow Platform | 443 | TCP | UI and API access for administrator management activities |
| RiverMeadow Migration Appliance | RiverMeadow Platform | 443 | TCP | Control plane communication for migration orchestration |
| RiverMeadow Migration Appliance | HPE Morpheus VM Essentials Manager | 443 | TCP | API access to the VM Essentials Manager for migration automation |
| RiverMeadow Migration Appliance | Source VMware vCenter Server | 443 | TCP | API access to the source VMware vCenter Server |
| RiverMeadow Source Worker Appliance | RiverMeadow Migration Appliance | 8888 | TCP | Control plane communication for migration orchestration |
| RiverMeadow Source Worker Appliance | VMware ESXi Hosts | 902 | TCP | ESXi host data transfer (NBDSSL) |
| RiverMeadow Source Worker Appliance | Source VMware vCenter | 443 | TCP | API access to the source VMware vCenter Server |
| RiverMeadow Target Worker | RiverMeadow Migration Appliance | 443 | TCP | Control plane communication for migration orchestration (message bus) |
| RiverMeadow Target Worker | RiverMeadow Migration Appliance | 8888 | TCP | Control plane communication for migration orchestration (api access) |
| RiverMeadow Target Worker | RiverMeadow Source Worker Appliance | 5994 | TCP | Data replication from the source worker appliance to target instance |