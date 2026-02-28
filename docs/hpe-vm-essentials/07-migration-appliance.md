# Migration Appliance
---

The RiverMeadow migration appliance is a virtual appliance packaged as a QCOW2 image file that is downloaded via the RiverMeadow platform and is deployed on an HVM cluster in the target environment. The appliance is running a hardened version of Oracle Enterprise Linux (OEL) 9.

## Hardware Requirements

The virtual appliance requires the following hardware:

* **CPU:** 4 Cores
* **Memory:** 16 GB
* **Disk Space:** 32 GB

## Virtual Image

**Cypher Secret**

The credentials for interacting with the Morpheus REST API enable privileged access to the platform and should be securely handled to avoid exposure. The credentials can be securely stored in the native secrets management solution (Cypher) to avoid the credentials being exposed in plain text in the user interface.




## IP Addressing

HPE Morpheus VM Essentials supports assigning IP addresses to provisioned instances using 


### DHCP

The


### Static IP Address

The RiverMeadow migration appliance can be assigned a static IP address during instance provisioning by assigning an IP address to the network interface.


:::warning
The subnet mask, default gateway, and DNS servers must be assigned to the network that the migration appliance is being deployed.
:::

### Native IP Address Pool

HPE Morpheus VM Essentials supports managing IP addresses using native pools that allow administrators to define a range of IP addresses that should be used when provisioning instances.

:::warning
The subnet mask, default gateway, and DNS servers must be assigned to the network that the migration appliance is being deployed.
:::

### 3rd Party IPAM Integration

HPE Morpheus VM Essentials supports integrating with 3rd party IPAM solutions such as BlueCat, InfoBlox, PHPIpam and others to automate the management of IP addresses for provisionined instances.


## Multiple Clusters
A single VM Essentials manager appliance can support managing multiple clusters (i.e. - dev, prod, etc.). A single migration 

# Source Worker Appliance

The source worker appliance is used for VM based or agentless migrations. The appliance is deployed to the source VMware vSphere cluster from the RiverMeadow migration appliance deployed into the target HPE Morpheus VM Esssentials environment.

![](/img/rivermeadow_source_worker_appliance.png)