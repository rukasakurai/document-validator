# document-validator

## Installation

To install pnpm, run the following command:

```sh
npm install -g pnpm
```

## Running the Application Locally

To run the application locally, follow these steps:

1. **Install dependencies**:
   ```bash
   pnpm install
   ```

2. **Run the development server**:
   ```bash
   pnpm dev
   ```

3. **Build the application**:
   ```bash
   pnpm build
   ```

4. **Start the production server**:
   ```bash
   pnpm start
   ```

## Deploying to Azure

To deploy the application to Azure, follow these steps:

1. **Create a Resource Group**:
   ```bash
   az group create --name myResourceGroup --location eastus
   ```

2. **Create an App Service Plan**:
   ```bash
   az appservice plan create --name myAppServicePlan --resource-group myResourceGroup --sku B1 --is-linux
   ```

3. **Create a Web App**:
   ```bash
   az webapp create --resource-group myResourceGroup --plan myAppServicePlan --name myWebApp --runtime "NODE|14-lts"
   ```

4. **Deploy the Application**:
   ```bash
   az webapp deployment source config-local-git --name myWebApp --resource-group myResourceGroup
   ```

5. **Push Code to Azure**:
   ```bash
   git remote add azure <deploymentLocalGitUrl>
   git push azure master
   ```

### Bicep Code

Here is the Bicep code to deploy the application to Azure:

```bicep
resource myAppServicePlan 'Microsoft.Web/serverfarms@2021-02-01' = {
  name: 'myAppServicePlan'
  location: 'eastus'
  sku: {
    name: 'B1'
    tier: 'Basic'
  }
  kind: 'linux'
}

resource myWebApp 'Microsoft.Web/sites@2021-02-01' = {
  name: 'myWebApp'
  location: 'eastus'
  serverFarmId: myAppServicePlan.id
  siteConfig: {
    linuxFxVersion: 'NODE|14-lts'
  }
}
```
