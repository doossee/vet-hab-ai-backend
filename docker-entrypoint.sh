#!/bin/sh
# Apply pending Prisma migrations, seed once on a fresh DB, then start the app.
# - migrate deploy is idempotent (no-op when already up to date).
# - The seed runs only if the marker in the mounted /app/.state volume is
#   absent, and is fail-soft so a partial/duplicate seed never blocks startup.
set -e

echo "[entrypoint] prisma migrate deploy ..."
npx prisma migrate deploy

if [ ! -f /app/.state/seeded ]; then
  echo "[entrypoint] first boot: seeding database ..."
  npx prisma db seed || echo "[entrypoint] seed failed or partially applied (continuing)"
  mkdir -p /app/.state
  touch /app/.state/seeded
else
  echo "[entrypoint] seed marker present; skipping seed."
fi

echo "[entrypoint] starting: $*"
exec "$@"
