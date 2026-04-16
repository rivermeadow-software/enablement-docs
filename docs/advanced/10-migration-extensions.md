# Migration Extensions

Migrations commonly involve tasks or operations that need to be completed following the completion of the 

Migration extensions are custom Bash or PowerShell scripts that can be uploaded to the RiverMeadow platform and executed during the different phases of a migration.

The migration extension is fetched from the RiverMeadow platform via the migration appliance and pushed to the target server via the migration utility. The script is then executed on the target server using admin privileges during the configured migration/modernization phase specified.

* Initial migration
* Modernization
* Delta migration