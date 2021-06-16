---
sidebar_position: 2
---

# Install on Ubuntu

:::note

While the following guide will show you how to install _HuddleUp_ on a single server running Ubuntu, it is not required to do so exactly. There are different ways to install and serve _HuddleUp_. However, we will currently only document this approach.

:::

This guide will show you how to install _HuddleUp_ on a single server running Ubuntu. We will use [PM2](https://pm2.keymetrics.io) for keeping our backend running and running the build process for the frontend.

## Preparations

- Make sure you have shell access to the server and your user has sudo rights
- You need two domains pointing to the IP of the server, these can also be subdomains
  - One for the frontend (we'll use `huddle.huddle-up.org`)
  - One for the backend (we'll use `api.hudde.huddle-up.org`)

## Install requirements

First, make sure all package mirrors and installed packages are up to date.

```bash
sudo apt update
sudo apt upgrade -y
```

Now, let's install the dependencies.

```bash
curl -fsSL https://deb.nodesource.com/setup_14.x | sudo bash -

sudo apt install -y nginx postgresql postgresql-contrib nodejs certbot python3-certbot-nginx

sudo npm install -g pm2@latest yarn
```

## Configure PostgreSQL

Next, we will create a PostgreSQL admin user and another user for _HuddleUp_. We will use `admin` as the username for the administrator and `huddleup` for the application user. You can of course choose different ones, if you want to.

First switch to the PostgreSQL system user.

```bash
sudo -i -u postgres
```

Next, create the admin user. When prompted, choose the following answers:

- Name of role: `admin`
- Password: Choose a strong password and save it somewhere safe!
- Superuser? `y`

```bash
createuser --interactive -P
```

Repeat the process for the application user. When prompted, choose the following answers:

- Name of role: `huddleup`
- Password: Choose a strong password (not the same as `admin`) and save it somewhere safe!
- Superuser? `n`
- Allow to create databases? `y`
- Allow to create roles? `n`

We will finalize the database setup in a further step.

We're done with Postgres for now, so we will switch back to your main user.

```bash
exit
```

## Create a system user

Next we will create a system group and user for _HuddleUp_.

First, create the system user group:

```bash
sudo addgroup huddleup
```

Next, create the system user. The following command will create a user named `huddleup`, with `huddleup` as its primary group, add it to the `www-data` group, create a home directory for it and set its default shell to bash.

```bash
sudo useradd -g huddleup -G www-data -m -s /usr/bin/bash huddleup
```

If you want to be able to login as the system user, set its password with the following command. Again, use a _unique_, strong password and store it somewhere safe.

```bash
sudo passwd huddleup
```

## Setup the database

Now, we'll finish the database setup. The next two commands will create a database called `huddleup` and then enable the `uuid` extension, which is required by _HuddleUp_.

```bash
sudo -u huddleup createdb huddleup
# When prompted for a password, use the one assigned to the database admin user
psql -h localhost -d huddleup -U admin -W -c 'CREATE EXTENSION IF NOT EXISTS "uuid-ossp";'
```

## Download the application

Now it's time to download _HuddleUp_ and prepare its environment.

First create a folder in `/var` to install the application in it and set `huddleup` as the owner of it.

```bash
sudo mkdir /var/huddleup && sudo chown huddleup:huddleup /var/huddleup/
```

Now, switch to the `huddleup` user and clone the _HuddleUp_ repository.

```bash
sudo -i -u huddleup
cd /var/huddleup
git clone --depth 1 --branch v1.0 https://github.com/huddle-up/huddle-up.git
```

Next, we will install the package dependencies.

```bash
cd huddle-up
yarn && yarn bootstrap
```

## Configure HuddleUp

Now it's time to configure _HuddleUp_. We'll just put some examples here, for more information on the configuration of _HuddleUp_, see [here](configuration.md).

All configuration files are located in the `config/` folder of the application. For this example, we'll use the public Jitsi Meet instance.

:::note
The domain and the OpenID Connect provider in this example do not exist. You will have to replace them with your own specific values.
:::

### Client

Create a `.env` file in the `config/client` folder of the application. You can duplicate the `.env.example` in that folder, or create new one.

```sh title="/var/huddleup/huddle-up/config/client/.env"
# == BASE ==
REACT_APP_HOST=https://huddle.huddle-up.org
REACT_APP_API_URI=https://api.huddle.huddle-up.org

# == i18n ==
REACT_APP_I18N_DEFAULT_LOCALE=de
REACT_APP_I18N_AVAILABLE_LOCALES="en,de"

# == AUTH ==
REACT_APP_HOST=https://huddle.huddle-up.org
REACT_APP_API_URI=https://api.huddle.huddle-up.org
REACT_APP_I18N_DEFAULT_LOCALE=en
REACT_APP_OIDC_CLIENT_ID=someclientidprovidedbytheprovider
REACT_APP_OIDC_CLIENT_SECRET=someclientsecretprovidedbytheprovider
REACT_APP_OIDC_ISSUER=some.openidconnectprovider.test
REACT_APP_OIDC_REDIRECT_URI=https://huddle.huddle-up.org/login/callback
REACT_APP_OIDC_PROVIDER_NAME=Email
REACT_APP_OIDC_PROVIDER_ICON=email
```

### Backend

Create a `.env` file in the `config/client` folder of the application. You can duplicate the `.env.example` in that folder, or create new one. Treat the `HU_AUTH_SECRET` like a password and make sure it is strong enough.

```sh title="/var/huddleup/huddle-up/config/api/.env"
# == BASE ==
HU_PORT=4000
HU_HOST=https://api.huddle.huddle-up.org

# == DATABASE ==
HU_DB_USERNAME=huddleup
HU_DB_PASSWORD=huddleupdbuserpassword
HU_DB_DATABASE=huddleup
HU_DB_HOST=localhost
HU_DB_PORT=5432

# == INTERNAL AUTH ==
HU_AUTH_SECRET=JaqYL5rvacnpNy9uDV8muubcGE4pQNUS

# == EXTERNAL AUTH (OIDC) ==
HU_AUTH_OIDC_ISSUER_DOMAIN=some.openidconnectprovider.test
# This is identical to your client id used in the frontend
HU_AUTH_OIDC_AUDIENCE=someclientidprovidedbytheprovider

# == JITSI ==
HU_JITSI_HOST=https://meet.jit.si
```

## Building the Application

After having written the configuration, we can build the application.

:::note
This process can take a while for the first time.
:::

```bash title="Folder: /var/huddleup/huddle-up"
yarn build
```

### Running migrations

Before we can start the backend for the first time, we have to create the database schema.

```bash title="Folder: /var/huddleup/huddle-up"
yarn migrate
```

## Setup PM2

To keep the backend running, and start it up automatically if you reboot the system we will be using [PM2](https://pm2.keymetrics.io). We have already installed it in the first step, so we only have to set it up.

We will use the [ecosystem file](https://pm2.keymetrics.io/docs/usage/application-declaration/) feature of PM2 to declare the task in a easy to manage file. To do this, create a file in the parent directory of the application.

```yaml title="/var/huddleup/pm2.config.yaml"
apps:
  - script: /var/huddleup/huddle-up/apps/api/dist/main.js
    name: 'api'
    watch: true
```

Now we can start the backend for the first time!

```bash
pm2 start pm2.config.yaml
```

You can check for the status of the process with `pm2 status` and the `huddle-up/logs` logs folder for errors.

## Setup Nginx

First, if you're still in the `huddleup` user session, exit it.

```bash
exit
```

For serving the client and forwarding requests to the backend, we will use Nginx. In a first step, we will setup the hosts for the two applications. Once these are set up, we'll setup HTTPS with Let's Encrypt.

### Basic Configuration

#### Client Host

Create a new Nginx configuration for the frontend at `/etc/nginx/sites-available/000-stage.huddle-up.org.conf` with following content:

```nginx title="/etc/nginx/sites-available/000-stage.huddle-up.org.conf"
server {
    listen 80;
    listen [::]:80;
    root /var/huddleup/huddle-up/apps/client/build;
    index index.html;
    server_name huddle.huddle-up.org;
    location / {
        try_files $uri $uri/ /index.html =404;
  }
}
```

Enable it by linking it into the `sites-enabled` folder and reloading nginx.

```bash
sudo ln -s /etc/nginx/sites-available/000-stage.huddle-up.org.conf /etc/nginx/sites-enabled/000-stage.huddle-up.org.conf
service nginx restart
```

#### Backend Host

We'll do the same for the backend at `

```nginx title="/etc/nginx/sites-available/000-api.stage.huddle-up.org.conf"
upstream api_upstream {
  server 127.0.0.1:4000;
  keepalive 64;
}

server {
  listen 80;
  listen [::]:80;

  server_name api.huddle.huddle-up.org;

  location / {
    proxy_set_header X-Forwarded-For $proxy_add_x_forwarded_for;
    proxy_set_header X-Real-IP $remote_addr;
    proxy_set_header Host $http_host; 
    proxy_http_version 1.1;
    proxy_set_header Upgrade $http_upgrade;
    proxy_set_header Connection "upgrade";  
    proxy_pass http://api_upstream/;
    proxy_redirect off;
    proxy_read_timeout 240s;
  }
}
```

Enable it by linking it into the `sites-enabled` folder and reloading nginx.

```bash
sudo ln -s /etc/nginx/sites-available/000-api.stage.huddle-up.org.conf /etc/nginx/sites-enabled/000-api.stage.huddle-up.org.conf
sudo service nginx restart

```

### Lets Encrypt

To use HTTPS for connecting to the applications, we'll setup SSL certificates with Let's encrypt. We can let `certbot` do the nginx configuration for us. When asked whether to always redirect, choose 'Yes'.

```bash
sudo certbot --nginx -d huddle.huddle-up.org
sudo certbot --nginx -d api.huddle.huddle-up.org
```

Finally, restart nginx for applying the changes.

```bash
sudo service nginx restart
```

And you're done! You should be able to use your _HuddleUp_ installation now.
