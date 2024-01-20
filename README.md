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
    docker exec -it database-c /bin/bash -c "cd /data/db/backup && bash export.sh"

Import backed up database:
    docker exec -it database-c /bin/bash -c "cd /data/db/backup && bash import.sh"
---------------------------------

docker-compose up -d --build

docker ps -a

docker logs database-c
docker inspect --format '{{.RestartCount}}' database-c

docker compose down
---------------------------------