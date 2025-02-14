FROM postgres:15-alpine

WORKDIR /db

COPY . .

RUN chmod +x /docker-entrypoint-initdb.d/init-db.sh
