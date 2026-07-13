#!/bin/sh
# Apply pending Prisma migrations, then start the app.
# migrate deploy is idempotent: a no-op when the DB is already up to date
# (e.g. restored from a production dump that includes _prisma_migrations), or it
# applies only the migrations the dump predates. No seeding — data comes from
# the restored backup.
set -e

echo "[entrypoint] prisma migrate deploy ..."
npx prisma migrate deploy

echo "[entrypoint] starting: $*"
exec "$@"
