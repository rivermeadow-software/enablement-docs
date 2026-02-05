# Migration Appliance
---

The RiverMeadow migration appliance is bundled as a QCOW2 image files that is deployed onto an HPE VM Essentials cluster running in the target environment. The appliance is running a hardened version of Oracle Enterprise Linux (OEL) 9.

The RiverMeadow migration appliance is manually deployed on the target hypervisor.

## Multiple Clusters
A single VM Essentials manager appliance can support managing multiple clusters (i.e. - dev, prod, etc.). A single migration 

## Hardware Requirements

| | |
|--|--|
| CPU | 4 Cores |
| Memory | 16 GB |
| Disk Space | 32 GB |

**CPU:** 4 Cores

**Memory:** 16 GB

**Disk Space:** 32 GB


## Virtual Image

**Cypher Secret**

The credentials for interacting with the Morpheus REST API enable privileged access to the platform and should be securely handled to avoid exposure. The credentials can be securely stored in the native secrets management solution (Cypher) to avoid the credentials being exposed in plain text in the user interface.