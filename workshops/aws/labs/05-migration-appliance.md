# Lab #3 - RiverMeadow Migration Appliance

In this exercise you’ll walk through what deploying the RiverMeadow migration appliance into the target AWS account
would entail.

:::warning
Do not deploy the migration appliance as there is already an existing migration appliance that will be used for
migrations.
:::

**Lab Steps**

1. Click on the **Manage** menu from the left navigation menu of the RiverMeadow platform to expand the manage
section.
2. Click **Migration Appliances** from the **Manage** left navigation menu.
3. Click on the **Redeploy migration appliance** button, the middle button under the **Actions** section next to your cloud
account.
4. Select the **Mexico (Central) | mx-central-1** region from the **Region** select list.
5. Select the **Target VPC** from the **VPC** select list.
6. Select the **Target Subnet** from the **Subnet** select list.
7. Enter a name for the migration appliance in the **Instance Name** field that corresponds to the following name
convention: rm-student##.
8. Check the **Enable VM-based migrations** checkbox and review the required settings for enabling VM based migrations using the RiverMeadow platform.
9. Click the **Cancel** button at the bottom of the Migration appliance setup modal to cancel the migration appliance
deployment.