#!/bin/bash
set -e

echo "Waiting for PostgreSQL to be ready..."
until psql -U "$POSTGRES_USER" -d "$POSTGRES_DB" -c '\q'; do
  sleep 10
done

echo "Executing SQL files..."
for file in db/migration/*.sql; do
  echo "Running $file..."
  psql -U "$POSTGRES_USER" -d "$POSTGRES_DB" -f "$file"
done

echo "Database setup complete!"
