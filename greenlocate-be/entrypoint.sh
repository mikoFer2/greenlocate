#!/bin/bash
set -e

host="$1"
port="$2"
timeout="${3:-30}"

echo "Esperando hasta que MYSQL -> $host:$port esté disponible..."
while ! nc -z "$host" "$port"; do
  timeout=$((timeout - 1))
  if [ $timeout -eq 0 ]; then
    >&2 echo "Esperando a $host:$port"
    exit 1
  fi
  sleep 1
done

echo "MYSQL -> $host:$port está disponible"

# INSTALL DEPENDENCIES
echo "INSTALL AND RUN"
npm start