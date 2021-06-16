---
sidebar_position: 1
---

# Hosting HuddleUp

_HuddleUp_ is not meant to be run as a single instance for everyone, but independently by operators. You can install _HuddleUp_ yourself to provide a place for your community to meet online.

## Overview

_HuddleUp_ consists of two main applications: The **client** and the **backend**. The client is a Single Page Application written in [React](https://reactjs.org), the backend is a Node.js application implemented with [NestJS](https://nestjs.com). The two applications interact with each other using [GraphQL](https://graphl.org) and the [PostgreSQL](https://www.postgresql.org) database is used for persistence.

The video conference functionality is not implmenented by _HuddleUp_ itself, but covered through the integration of an external provider. Currently, only an integration for [Jitsi Meet](https://jtsi.org) is available. Read more about the integration of the video conference [here](conference-providers.md).

## Requirements

_HuddleUp_ has the following requirements to install:

- A publicly accessible server (Only [Ubuntu Server 20.04](https://ubuntu.com/download/server) has been tested, but other Linux distributions should work too. No guarantees for Windows.)
- [Git](http://git-scm.com/)
- [Node.js](https://nodejs.org) 14 (LTS) for running the Backend
- A webserver ([NGINX](https://nginx.org) is a good fit)
- [PostgreSQL](https://www.postgresql.org) 11+ with the [UUID extension](https://www.postgresql.org/docs/13/uuid-ossp.html) enabled
- [Yarn](https://classic.yarnpkg.com/) v1.X
