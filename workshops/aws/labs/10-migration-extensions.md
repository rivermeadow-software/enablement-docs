# Lab #8 - Migration Extensions
In this exercise you’ll walk through using a migration extension (post migration automation script) to configure the system
to align with the new environment once the server has been completely migrated.

**Lab Steps**

1. Click **Migrate** from the left navigation menu of the RiverMeadow platform to expand the migrate section.
2. Click **View Migrations** under the **Migrate** section on the left navigation menu.
3. Find the initial migration that corresponds with your server and click the **Start Workload Delta Migration** button that looks like a circle composed of two arrowed lines in the actions section of the table.
4. Check the **Shutdown Source** checkbox to shutdown the source server at the conclusion of the delta migration.
5. Select **Workshop Script** from the **Migration Extensions** select list to execute the post migration script.
6. Check the **Remove RMS Agent Post Migration** checkbox to automatically remove the RiverMeadow migration utility from the migrated server once the delta migration has completed.
7. Click the **Confirm & Initiate Migration** button to start the migration readiness check for the delta migration.
8. Click the **Migrate Selected Configurations** button to start the delta migration.
