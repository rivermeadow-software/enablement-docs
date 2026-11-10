# Migration Utility Deployment
---

The RiverMeadow migration utility is a lightweight utility (less than 30 MB) that is deployed to each Windows or Linux source server that is migrated using OS based migrations. The migration utility enables advanced optimization and modernization functionality during the workload migration. The migration utility can be deployed in several different ways including manually or automated.

## Integrated Deployment
The migration utility can be automatically pushed from the migration appliance deployed into the target AWS account. The migration appliance uses standard remote management protocols (SSH, WinRM, SMB) to connect to the source server and perform the utility deployment. Administrative credentials to the source server must be provided to perform the migration utility deployment.

The source server IP address and credentials are provided when adding the source server to the RiverMeadow source inventory. The migration utility deployment is performed during the initial source inspection process.

![](./aws_add_source.png)

## Manual or External Deployment
The migration utility artifacts (Windows and Linux) can be downloaded from the migration appliance to deploy the utility manually or using tools like Group Policy, Ansible, Puppet, or others.

### Utility Download
The RiverMeadow migration utility artifacts can be downloaded from the migration appliance deployed into the target AWS account. The agent downloads page is accessible at the following URL: https://rms_migration_appliance_ip_address:8888/agent.

![](/img/rms_agent_page.png)

## Deployment Verification

The successful deployment and configuration of the migration utility can be verified by ensuring that the package has been installed and that the associated service has started.

### Windows Operating System
The migration utility is installed using an MSI file for Windows operating systems. The application is listed as **RMS Agent** under the operating system's installed programs.

![](./windows_migration_utility_install.png)

The deployment of the migration utility will also configure a Windows service named **RMS Migration Service** that will automatically start following the successful deployment and listen on TCP port 5994.

![](./windows_migration_service.png)

### Linux Operating System
The migration utility is installed using a distribution specific package for Linux operating systems (i.e. - .deb, .rpm, etc.). The application is listed as **rmsagent** under the operating system's installed packages.

![](./linux_migration_utility_install.png)

The deployment of the migration utility will also configure a Linux service named **RMSAgent** that will automatically start following the successful deployment and listen on TCP port 5994.

![](./linux_migration_utility_service.png)
