# Lab #5 - RiverMeadow Migration Utility Deployment

In this exercise you’ll walk through automatically installing the RiverMeadow agent on one of the source servers that will
be migrated.

**Lab Steps**

1. Click on **Manage** in the left navigation menu of the RiverMeadow platform to expand the manage section.
2. Click **Source Inventory** under the **Manage** section in the left navigation menu.
3. Click the **Add Source button** from the top menu bar.
4. Enter the private IP address of the source server in the **Source IP** text box. The private IP Address for your source
instance is available in the workshop welcome email.
5. Enter ubuntu for the username of the administrator user account in the **Username** text box.
6. Check the Use SSH private key checkbox to enable SSH key authentication.
7. Paste the SSH private key of the administrator user account in the private key text box. The private key can be found
at the back of this guide by clicking the following link: (Linux SSH Private Key)
8. Add a tag that corresponds to your student identifier (rm-student##) in the **Add RiverMeadow Tags (optional)** text
box to tag your source server.
9. Select the move group that you created in the previous exercise (rm-student##) from the **Application or Move
Group Name (optional)** select list.
10. Click the **Add Source** button to add the source server to the RiverMeadow inventory.