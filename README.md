# Pocket Realm Infrastructure

Contains all the backend infrasture used by Pocket Realm app to run and do load testing

## Status

Completed

## Services

* Redis - Used by Pocket Realm application for leaderboards and messaging
* MySQL - Database leveraged by Pocket Realm application
* Grafana - Used for visualization of metrics and traces
* OpenTelemetry - Collector for receiving traces from backend application
* Tempo - Used as a datasource for Grafana
* Prometheus - Used to collect metrics
* K6 - Load testing
* InfluxDB - Database used by K6 service

## Usage

### Start

```run```
This will spin up all the containers used by the backend using Docker

```stop```
Tear down all the running containers in Docker
