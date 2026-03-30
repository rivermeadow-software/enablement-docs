# Lab #6 - Migration Profile

In this exercise you’ll walk through creating the migration profile that defines how the source servers will be migrated into the target AWS environment.

**Lab Steps**

1. Click **Migrate** from the left navigation menu of the RiverMeadow platform to expand the migrate section.
2. Click on **Start Migration** under the **Migrate** section in the left navigation menu.
3. Click the Inspect & Migrate button, the cloud button under the Actions section next to the source server
4. Select the workshopappliance target cloud from the Select Target Cloud select list to migrate the source server to.
5. Click the Check Migration Readiness button to start the pre-migration readiness checks.
6. Once the migration readiness checks have completed, click on the Create Migration Profile button to start creating
the migration profile that defines how the server will be migrated.
7. Scroll down to the Detailed Settings section to begin defining the workload migration.
8. In the text box directly below the Target Clone header change the name of the instance from the default format
ip-#-#-#-# to the following naming convention: rm-student## (i.e. student02 = rm-student02)
9. Select the Mexico (Central) | mx-central-1 region from the Target Region select list if it isn’t already selected.
10. Select t3.small instance type from the Instance Type select list.
11. Select the Target VPC from the VPC select list.
12. Select the Target Subnet from the Subnet select list.
13. Click the **Continue** button to start the migration preflight process.
14. Click the **Start Migration** buton to start the workload migration.
