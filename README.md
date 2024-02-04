# SkillCatalyst

Dependencies:
    Docker
    Docker-compose

---------------------------------

Technologies:
    Mongodb
    Docker
    Docker-compose
    Vue
    Node.js
    Express.js
---------------------------------
Database:

Export current database:
    docker exec -it database-c /bin/bash -c "cd /data/db/backup && mongodump --uri='mongodb://admin:admin123@localhost:27017/?authMechanism=SCRAM-SHA-256&authSource=admin' --db=Skill-Catalyst --out=/data/db/backup"

Import backed up database:
    docker exec -it database-c /bin/bash -c "cd /data/db/backup && mongorestore --uri='mongodb://admin:admin123@localhost:27017/?authMechanism=SCRAM-SHA-256&authSource=admin' --db=Skill-Catalyst /data/db/backup/Skill-Catalyst"

Drop database:
    docker exec -it database-c mongosh --authenticationDatabase admin --username admin --password admin123 --eval "db.getSiblingDB('Skill-Catalyst').dropDatabase();"
    
Check database:
    docker exec -it database-c mongosh --authenticationDatabase admin --username admin --password admin123 --eval "show dbs;"

---------------------------------
docker exec -it database-c /bin/bash
cd /data/db/backup

docker-compose up -d --build

docker ps -a

docker logs database-c
docker inspect --format '{{.RestartCount}}' database-c

docker compose down
---------------------------------