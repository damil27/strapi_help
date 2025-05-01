# 🚀 Getting started with Strapi

# ⚙️ Deployment Guide

## Syncing Data Between Production and Local Environments

Before pushing any changes, **always sync the data** from the production server to your local environment to avoid any discrepancies. Follow the steps below to ensure smooth synchronization:

### Steps to Sync Data:

1. **Run Both Development and Production Applications in Parallel**  
   Ensure that both your **development** and **production** applications are running simultaneously. This will allow data transfer between the two environments.

2. **Generate a Transfer Token from Strapi**

   - Navigate to **Settings** > **Global Settings** > **Transfer Tokens** in your Strapi admin panel.
   - Create a new transfer token for this sync operation.

3. **Open a New Terminal in Your Development Environment**  
   Open a fresh terminal window in your local development environment to run the necessary command.

4. **Run the Transfer Command**  
   In the terminal, execute the following command to initiate the data transfer:

   ```bash
   npm run strapi transfer -- --from https://your-production-url.com/admin
   ```

   This will start the process of transferring the data from the production environment.

5. **Provide the Generated Token**  
   When prompted, **enter the transfer token** that you generated from the production server in step 2. This ensures that the data transfer is secure.

6. **Repeat This Step Before Each Push**  
   Always **sync the data** before making any code changes and pushing them to the repository. This ensures that your local environment is up-to-date with the latest production data.

### Important Notes:

- This sync process is crucial before any **pushes** to the repository, as it ensures you’re working with the most recent data from production.
- If you skip this step, you may encounter issues where your local environment and production environment data are out of sync.

### `develop`

Start your Strapi application with autoReload enabled. [Learn more](https://docs.strapi.io/dev-docs/cli#strapi-develop)

```
npm run develop
# or
yarn develop
```

### `start`

Start your Strapi application with autoReload disabled. [Learn more](https://docs.strapi.io/dev-docs/cli#strapi-start)

```
npm run start
# or
yarn start
```

### `build`

Build your admin panel. [Learn more](https://docs.strapi.io/dev-docs/cli#strapi-build)

```
npm run build
# or
yarn build
```

<sub>🤫 Psst! [Strapi is hiring](https://strapi.io/careers).</sub>
