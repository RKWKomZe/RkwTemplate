# Upgrade to v9.5
* Before starting to upgrade, execute the following MySQL-Code:
```
START TRANSACTION;
SET autocommit=0;
UPDATE pages SET layout = 50 WHERE layout = 30000;
UPDATE pages SET tx_rkwbasics_fe_layout_next_level = 50 WHERE tx_rkwbasics_fe_layout_next_level = 30000;
COMMIT;
```
