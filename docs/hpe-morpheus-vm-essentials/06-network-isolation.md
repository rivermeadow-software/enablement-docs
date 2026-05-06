# Network Isolation
---

The RiverMeadow platform enables accelerated migration testing with no source impact. This is capability requires that the target or clone instance needs to be isolated with limited connectivity to the production network to prevent conflicts with the source server. The migrated target instance or clone must have a routable IP address that is different than the IP address of the source server. This is used by the target instance or clone to communicate with the RiverMeadow migration appliance, source server or RiverMeadow source worker appliance to perform the migration operations.

Network isolation for public clouds is simplified through the use of instance level security groups. This becomes more nuanced for on-premises virtualization solutions like HPE Morpheus VM Essentials. There are a several ways of addressing the network isolation requirement to enable the rapid migration of servers to HPE Morpheus VM Essentials using the RiverMeadow platform.

### Dedicated Migration Network (VLAN)

A dedicated migration network is one of the common method for enabling network traffic to be isolated using a physical network or VLAN that allows the required network connectivity as virtual machines are migrated. The migration network is used temporarily during the migration process and during the cutover the network the instance is connected to is changed to the desired network once the source server has been powered off.

* **Network Routing:** The migration network/VLAN needs to allow the instance in HPE Morpheus VM Essentials to reach the RiverMeadow migration appliance and the source server or the source worker appliance.
* **Restricted Network Access:** The migration network/VLAN should only allow the required network ports and protocols required by the RiverMeadow platform to ensure there is no impact to the production environment. 