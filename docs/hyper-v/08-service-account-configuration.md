# Service Account Configuration
---

## HPE Morpheus VM Essentials

The RiverMeadow platform utilizes the HPE Morpheus VM Essentials REST API to orchestrate the migration of workloads to the HVM hypervisor. The security best practice is to create a dedicated service account that will be used by the RiverMeadow Meadow migration appliance to interact with the REST API. This service account should be granted only the privileges that are required to ensure that it aligns with the security principle of least privilege.

### User Role

Privileges or permissions within HPE Morpheus VM Essentials are associated with a user role for assignment. This is why a dedicated user role should be created to assign the required privileges to the user account. The required [role privileges](#role-privileges) that need to be granted to the user role can be found below.


### Role Privileges

The following privileges are required by the HPE Morpheus VM Essentials user role to migrate workloads using the RiverMeadow platform:

<details>
  <summary>**HPE Morpheus VM Essentials Role Privileges**</summary>

| Privilege | Access Level |
|:--------------------|:--------------------------:|
| Backup Settings |	Full |
| Environment Settings | Full |
| Provisioning Settings | Full |
| Roles | Full |
| Service Plans	| Read |
| Clusters | Full | Access clust
| Compute | Full |
| Groups | Full |
| Networks | Read |
| Storage | Read |
| Virtual Images | Full |
| Power Control | Full | Manage the power state of an existing instance |
| Reconfigure | Full |
| Reconfigure: Change Plan | Full | Modify the instance service plan (hardware configuration) associated with an existing instance |
| Reconfigure: Disk Add | Full | Add a new disk to an existing instance |
| Reconfigure: Disk Change Type	| Full | Change the disk type of a disk associated with an existing instance |
| Reconfigure: Disk Modify | Full | Modify a disk attached to an existing instance |
| Reconfigure: Disk Remove | Full | Remove or detach a disk from an existing instance |
| Reconfigure: Network Add | Full |  Add or attach a network interface to an existing instance |
| Reconfigure: Network Modify | Full | Modify a network interface attached to an existing instance |
| Reconfigure: Network Remove | Full | Remove a network interface from an existing instance |
| Retry/Cancel | Full | Retry or cancel |
| Activity | Read |
| Dashboard | Read | Read the details from the VM Essentials dashboard |
| Import Image | Full |
| Instances: Add | Full |
| Instances: Clone | Full | Clone an existing instance |
| Instances: Delete | Full | Delete an existing instance |
| Instances: Edit | Full |
| Instances: List | Full | List all existing instances |
| Instances: Settings | Full |
| Remote Console | User |
| Snapshots | Full | Manage instance snapshots (create, delete, etc.) |
| Snapshots: Linked Clone | Full | Manage an instance linked clone |

:::tip

The most current version of the required privileges is available in the RiverMeadow documentation: [https://docs.rivermeadow.com/hpe-vme-required-privileges](https://docs.rivermeadow.com/hpe-vme-required-privileges).

:::
</details>

### User Account

Once the user role has been created, a dedicated user account (local or external identity provider) should be created in the HPE Morpheus VM Essentials platform with a secure password for use by the RiverMeadow migration appliance. The dedicated user role should be assigned to the service account.

## VMware vSphere (VM Based - Optional)

The RiverMeadow platform supports VM based migrations from VMware vSphere to HPE Morpheus VM Essentials using a hypervisor-level integration. A user account with elevated privileges to the source VMware vSphere environment is required for VM based migrations. This service account is used to automate the deployment of the source worker appliance and execute migration related activities such as creating snapshots.


<details>
  <summary>**VMware vSphere Role Privileges**</summary>

  | Group | Privilege |
  |-------|-----------|
  | Datastore | Allocate space  |
  | Datastore | Browse datastore |
  | Datastore | Low level file operations |
  | Datastore | Update virtual machine files |
  | Network | Assign network |
  | Resource | Apply recommendations |
  | Resource | Assign vApp to resource pool |
  | Resource | Create resource pool |
  | Resource | Query vMotion |
  | Storage Views | View |
  | vApp | Add virtual machine |
  | vApp | Assign resource pool |
  | vApp | Assign vApp |
  | vApp | Create |
  | vApp | Import |
  | vApp | Power On |
  | vApp | Rename |
  | vApp | vApp application configuration |
  | vApp | vApp instance configuration |
  | vApp | vApp managedBy configuration | 
  | vApp | vApp resource configuration |
  | vApp | View OVF environment |
  | Virtual Machine | Change Configuration > Acquire disk lease |
  | Virtual Machine | Change Configuration > Acquire disk lease |
  | Virtual Machine | Change Configuration > Add existing disk |
  | Virtual Machine | Change Configuration > Add new disk |
  | Virtual Machine | Change Configuration > Add or remove device |
  | Virtual Machine | Change Configuration > Advanced configuration |
  | Virtual Machine | Change Configuration > Change resource |
  | Virtual Machine | Change Configuration > Configure Raw device |
  | Virtual Machine | Change Configuration > Configure managedBy |
  | Virtual Machine | Change Configuration > Display connection setting |
  | Virtual Machine | Change Configuration > Modify device settings |
  | Virtual Machine | Change Configuration > Reload from path |
  | Virtual Machine | Change Configuration > Remove disk |
  | Virtual Machine | Change Configuration > Rename |
  | Virtual Machine | Change Configuration > Disk change tracking |
  | Virtual Machine | Change Configuration > Reset guest information |
  | Virtual Machine | Change Configuration > Toggle disk change tracking |
  | Virtual Machine | Change Configuration > Unlock virtual machine |
  | Virtual Machine | Guest Operations > Guest operation modifications|
  | Virtual Machine | Guest Operations > Guest operation program execution|
  | Virtual Machine | Guest Operations > Guest operation queries |
  | Virtual Machine | Interaction > Power on |
  | Virtual Machine | Provisioning > Allow disk access |
  | Virtual Machine | Provisioning > Allow read-only disk access |
  | Virtual Machine | Provisioning > Allow virtual machine files upload |
  | Virtual Machine | Provisioning > Modify customization specifications |
  | Virtual Machine | Provisioning > Customize guest |
  | Virtual Machine | Provisioning > Deploy template |
  | Virtual Machine | Provisioning > Modify customization specifications |
  | Virtual Machine | Provisioning > Promote disks |
  | Virtual Machine | Provisioning > Read customization specifications |
  | Virtual Machine | Snapshot Management > Create Snapshot |
  | Virtual Machine | Snapshot Management > Remove Snapshot |
  | Virtual Machine | Snapshot Management > Rename Snapshot |
  | Virtual Machine | Snapshot Management > Revert to Snapshot |

</details>