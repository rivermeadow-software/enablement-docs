# Source Worker Appliance
---

The source worker appliance is an optional component that is deployed for VM based migrations from VMware vSphere source environments. The appliance is deployed to the source VMware vSphere environment from the RiverMeadow migration appliance that is deployed to the target HPE Morpheus VM Esssentials environment.

![](/img/rivermeadow_source_worker_appliance.png)

## Hardware Requirements
The virtual appliance requires the following hardware:

* **CPU:** 4 Cores
* **Memory:** 16 GB
* **Disk Space:** 32 GB

## Configuration Settings

The following settings are required when enabling VM based migrations to HPE Morpheus VM Essentials and are defined in the customization script during the creation of the virtual image for the RiverMeadow migration appliance.

| Name | Details |
|:------:|:------------------:|
| **enable_vm_based_migrations** | Whether to enable VM based migations |
| **vsphere.environment.url** | The URL of the source VMware vCenter server |
| **vsphere.environment.username** | The username of the user account used to authenticate to the source VMware vCenter server | 
| **vsphere.environment.password** | The password of the user account used to authenticate to the source VMware vCenter server |
| **vsphere.source_worker_appliance.vm_name** | The virtual machine name used for the source worker appliance to the source VMware environment |
| **vsphere.source_worker_appliance.datacenter** | The name of the vSphere datacenter where the source worker appliance will be deployed |
| **vsphere.source_worker_appliance.cluster** | The name of the vSphere cluster where the source worker appliance will be deployed |
| **vsphere.source_worker_appliance.datastore** | The name of the vSphere datastore where the source worker appliance will be deployed |
| **vsphere.source_worker_appliance.resource_pool** | The name of the vSphere resource pool where the source worker appliance will be deployed |
| **vsphere.source_worker_appliance.folder** | The name of the vSphere folder where the source worker appliance will be deployed |
| **vsphere.source_worker_appliance.network.name** | The name of the vSphere network where the source worker appliance will be deployed |
| **vsphere.source_worker_appliance.network.ip_type** | The IP addressing method used for the source worker appliance (static or dhcp) |
| **vsphere.source_worker_appliance.network.ip_address** | The IP address assigned to the source worker appliance (static only) |
| **vsphere.source_worker_appliance.network.netmask** | The subnet mask assigned to the source worker appliance (static only) |
| **vsphere.source_worker_appliance.network.default_gateway** | The default gateway assigned to the source worker appliance (static only) |
| **vsphere.source_worker_appliance.network.primary_dns** | The primary DNS server assigned to the source worker appliance (static only) |
| **vsphere.source_worker_appliance.network.secondary_dns** | The secondary DNS server assigned to the source worker appliance (static only) |

## Example Config

The following is an example configuration file for configuring the migration appliance to enable VM based migrations and automate the deployment of the source worker appliance.

```yaml
#cloud-config

...abreviated for clarity...

# Enable VM-based migrations. Replace the value with 'true' if enabled.
enable_vm_based_migrations: 'true'

# vSphere Environment (required if VM-based migrations are enabled)
vsphere.environment.url: 'https://prodvcenter01.rmslab.net'   # vCenter URL using IP Address
vsphere.environment.username: 'administrator@vsphere.local'   # Username or Identity
vsphere.environment.password: 'password'   # Password or Secret Key

# Source Worker Appliance Deployment Configuration
vsphere.source_worker_appliance.vm_name: 'vmesw01'   # Source Worker VM Name
vsphere.source_worker_appliance.datacenter: 'RiverMeadow'   # Datacenter Name
vsphere.source_worker_appliance.cluster: 'RMCluster'   # Cluster Name
vsphere.source_worker_appliance.datastore: 'datastore1'   # Datastore Name
vsphere.source_worker_appliance.resource_pool: ''   # Resource Pool Name (optional)
vsphere.source_worker_appliance.folder: ''   # Folder Name (optional)

# Source Worker Appliance Deployment Network Configuration
vsphere.source_worker_appliance.network.name: 'VM Network'   # destination_network_name
vsphere.source_worker_appliance.network.ip_type: 'static'   # IP Type (dhcp, static)
vsphere.source_worker_appliance.network.ip_address: '192.168.3.21'   # IP Address (static only)
vsphere.source_worker_appliance.network.netmask: '255.255.255.0'   # Netmask (static only)
vsphere.source_worker_appliance.network.default_gateway: '192.168.3.1'   # Default Gateway (static only)
vsphere.source_worker_appliance.network.primary_dns: '192.168.3.3'   # Primary DNS (static only)
vsphere.source_worker_appliance.network.secondary_dns: '4.2.2.2'   # Secondary DNS (optional / static only)
```