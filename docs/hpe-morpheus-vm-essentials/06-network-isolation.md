# Network Isolation
---

The RiverMeadow platform enables accelerated migration testing with no source impact. This is capability requires that the target or clone instance needs to be isolated with limited connectivity to the production network to prevent conflicts with the source server. The migrated target instance or clone must have a routable IP address that is different than the IP address of the source server. This is used by the target instance or clone to communicate with the RiverMeadow migration appliance, source server or RiverMeadow source worker appliance to perform the migration operations.

Network isolation for public clouds is simplified through the use of instance level security groups. This becomes more nuanced for on-premises virtualization solutions like HPE Morpheus VM Essentials. There are a number of ways to address the network isolation requirement enable the rapid migration of servers to HPE Morpheus VM Essentials using the RiverMeadow platform.

### Dedicated Migration Network

A dedicated migration network