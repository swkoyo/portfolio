#!/bin/sh
set -e

wait_for()
{
	echo "Waiting $1 seconds for $2:$3"
	timeout $1 sh -c 'until nc -z $0 $1; do sleep 0.1; done' $2 $3 || return 1
	echo "$2:$3 available"
}

pnpm install --frozen-lockfile --reporter=silent

wait_for 10 portfolio_database 5432

npx mikro-orm migration:up

exec "$@"