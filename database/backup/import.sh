mongorestore --uri="mongodb://admin:admin123@localhost:27017/?authMechanism=SCRAM-SHA-256&authSource=admin" --db=Skill-Catalyst /data/db/backup/Skill-Catalyst

echo -e "\nImport completed."
