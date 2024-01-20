mongodump --uri="mongodb://admin:admin123@localhost:27017/?authMechanism=SCRAM-SHA-256&authSource=admin" --db=Skill-Catalyst --out=/data/db/backup

echo -e "\nExport completed."