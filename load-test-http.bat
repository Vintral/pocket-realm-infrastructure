@echo off
docker-compose run --rm k6 run /scripts/local-http.js
@echo on