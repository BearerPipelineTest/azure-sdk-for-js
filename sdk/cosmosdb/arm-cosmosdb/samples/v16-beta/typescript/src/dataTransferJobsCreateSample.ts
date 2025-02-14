/*
 * Copyright (c) Microsoft Corporation.
 * Licensed under the MIT License.
 *
 * Code generated by Microsoft (R) AutoRest Code Generator.
 * Changes may cause incorrect behavior and will be lost if the code is regenerated.
 */

// Copyright (c) Microsoft Corporation.
// Licensed under the MIT License.
import {
  CreateJobRequest,
  CosmosDBManagementClient
} from "@azure/arm-cosmosdb";
import { DefaultAzureCredential } from "@azure/identity";

/**
 * This sample demonstrates how to Creates a Data Transfer Job.
 *
 * @summary Creates a Data Transfer Job.
 * x-ms-original-file: specification/cosmos-db/resource-manager/Microsoft.DocumentDB/preview/2022-05-15-preview/examples/data-transfer-service/CosmosDBDataTransferJobCreate.json
 */
async function cosmosDbDataTransferJobCreate() {
  const subscriptionId = "subid";
  const resourceGroupName = "rg1";
  const accountName = "ddb1";
  const jobName = "j1";
  const jobCreateParameters: CreateJobRequest = {
    properties: {
      destination: {
        component: "AzureBlobStorage",
        containerName: "blob_container",
        endpointUrl: "https://blob.windows.net"
      },
      source: {
        component: "CosmosDBCassandra",
        keyspaceName: "keyspace",
        tableName: "table"
      }
    }
  };
  const credential = new DefaultAzureCredential();
  const client = new CosmosDBManagementClient(credential, subscriptionId);
  const result = await client.dataTransferJobs.create(
    resourceGroupName,
    accountName,
    jobName,
    jobCreateParameters
  );
  console.log(result);
}

cosmosDbDataTransferJobCreate().catch(console.error);
