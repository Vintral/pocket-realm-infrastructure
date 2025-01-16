@echo off
docker-compose run --rm k6 run /scripts/local-websocket.js
@echo on