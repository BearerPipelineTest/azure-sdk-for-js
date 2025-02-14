/*
 * Copyright (c) Microsoft Corporation.
 * Licensed under the MIT License.
 *
 * Code generated by Microsoft (R) AutoRest Code Generator.
 * Changes may cause incorrect behavior and will be lost if the code is regenerated.
 */

import { PagedAsyncIterableIterator } from "@azure/core-paging";
import { FarmBeatsModels } from "../operationsInterfaces";
import * as coreClient from "@azure/core-client";
import * as Mappers from "../models/mappers";
import * as Parameters from "../models/parameters";
import { AgriFoodMgmtClient } from "../agriFoodMgmtClient";
import { PollerLike, PollOperationState, LroEngine } from "@azure/core-lro";
import { LroImpl } from "../lroImpl";
import {
  FarmBeats,
  FarmBeatsModelsListBySubscriptionNextOptionalParams,
  FarmBeatsModelsListBySubscriptionOptionalParams,
  FarmBeatsModelsListByResourceGroupNextOptionalParams,
  FarmBeatsModelsListByResourceGroupOptionalParams,
  FarmBeatsModelsGetOptionalParams,
  FarmBeatsModelsGetResponse,
  FarmBeatsModelsCreateOrUpdateOptionalParams,
  FarmBeatsModelsCreateOrUpdateResponse,
  FarmBeatsUpdateRequestModel,
  FarmBeatsModelsUpdateOptionalParams,
  FarmBeatsModelsUpdateResponse,
  FarmBeatsModelsDeleteOptionalParams,
  FarmBeatsModelsListBySubscriptionResponse,
  FarmBeatsModelsListByResourceGroupResponse,
  FarmBeatsModelsGetOperationResultOptionalParams,
  FarmBeatsModelsGetOperationResultResponse,
  FarmBeatsModelsListBySubscriptionNextResponse,
  FarmBeatsModelsListByResourceGroupNextResponse
} from "../models";

/// <reference lib="esnext.asynciterable" />
/** Class containing FarmBeatsModels operations. */
export class FarmBeatsModelsImpl implements FarmBeatsModels {
  private readonly client: AgriFoodMgmtClient;

  /**
   * Initialize a new instance of the class FarmBeatsModels class.
   * @param client Reference to the service client
   */
  constructor(client: AgriFoodMgmtClient) {
    this.client = client;
  }

  /**
   * Lists the FarmBeats instances for a subscription.
   * @param options The options parameters.
   */
  public listBySubscription(
    options?: FarmBeatsModelsListBySubscriptionOptionalParams
  ): PagedAsyncIterableIterator<FarmBeats> {
    const iter = this.listBySubscriptionPagingAll(options);
    return {
      next() {
        return iter.next();
      },
      [Symbol.asyncIterator]() {
        return this;
      },
      byPage: () => {
        return this.listBySubscriptionPagingPage(options);
      }
    };
  }

  private async *listBySubscriptionPagingPage(
    options?: FarmBeatsModelsListBySubscriptionOptionalParams
  ): AsyncIterableIterator<FarmBeats[]> {
    let result = await this._listBySubscription(options);
    yield result.value || [];
    let continuationToken = result.nextLink;
    while (continuationToken) {
      result = await this._listBySubscriptionNext(continuationToken, options);
      continuationToken = result.nextLink;
      yield result.value || [];
    }
  }

  private async *listBySubscriptionPagingAll(
    options?: FarmBeatsModelsListBySubscriptionOptionalParams
  ): AsyncIterableIterator<FarmBeats> {
    for await (const page of this.listBySubscriptionPagingPage(options)) {
      yield* page;
    }
  }

  /**
   * Lists the FarmBeats instances for a resource group.
   * @param resourceGroupName The name of the resource group. The name is case insensitive.
   * @param options The options parameters.
   */
  public listByResourceGroup(
    resourceGroupName: string,
    options?: FarmBeatsModelsListByResourceGroupOptionalParams
  ): PagedAsyncIterableIterator<FarmBeats> {
    const iter = this.listByResourceGroupPagingAll(resourceGroupName, options);
    return {
      next() {
        return iter.next();
      },
      [Symbol.asyncIterator]() {
        return this;
      },
      byPage: () => {
        return this.listByResourceGroupPagingPage(resourceGroupName, options);
      }
    };
  }

  private async *listByResourceGroupPagingPage(
    resourceGroupName: string,
    options?: FarmBeatsModelsListByResourceGroupOptionalParams
  ): AsyncIterableIterator<FarmBeats[]> {
    let result = await this._listByResourceGroup(resourceGroupName, options);
    yield result.value || [];
    let continuationToken = result.nextLink;
    while (continuationToken) {
      result = await this._listByResourceGroupNext(
        resourceGroupName,
        continuationToken,
        options
      );
      continuationToken = result.nextLink;
      yield result.value || [];
    }
  }

  private async *listByResourceGroupPagingAll(
    resourceGroupName: string,
    options?: FarmBeatsModelsListByResourceGroupOptionalParams
  ): AsyncIterableIterator<FarmBeats> {
    for await (const page of this.listByResourceGroupPagingPage(
      resourceGroupName,
      options
    )) {
      yield* page;
    }
  }

  /**
   * Get FarmBeats resource.
   * @param resourceGroupName The name of the resource group. The name is case insensitive.
   * @param farmBeatsResourceName FarmBeats resource name.
   * @param options The options parameters.
   */
  get(
    resourceGroupName: string,
    farmBeatsResourceName: string,
    options?: FarmBeatsModelsGetOptionalParams
  ): Promise<FarmBeatsModelsGetResponse> {
    return this.client.sendOperationRequest(
      { resourceGroupName, farmBeatsResourceName, options },
      getOperationSpec
    );
  }

  /**
   * Create or update FarmBeats resource.
   * @param resourceGroupName The name of the resource group. The name is case insensitive.
   * @param farmBeatsResourceName FarmBeats resource name.
   * @param body FarmBeats resource create or update request object.
   * @param options The options parameters.
   */
  createOrUpdate(
    resourceGroupName: string,
    farmBeatsResourceName: string,
    body: FarmBeats,
    options?: FarmBeatsModelsCreateOrUpdateOptionalParams
  ): Promise<FarmBeatsModelsCreateOrUpdateResponse> {
    return this.client.sendOperationRequest(
      { resourceGroupName, farmBeatsResourceName, body, options },
      createOrUpdateOperationSpec
    );
  }

  /**
   * Update a FarmBeats resource.
   * @param resourceGroupName The name of the resource group. The name is case insensitive.
   * @param farmBeatsResourceName FarmBeats resource name.
   * @param body Request object.
   * @param options The options parameters.
   */
  async beginUpdate(
    resourceGroupName: string,
    farmBeatsResourceName: string,
    body: FarmBeatsUpdateRequestModel,
    options?: FarmBeatsModelsUpdateOptionalParams
  ): Promise<
    PollerLike<
      PollOperationState<FarmBeatsModelsUpdateResponse>,
      FarmBeatsModelsUpdateResponse
    >
  > {
    const directSendOperation = async (
      args: coreClient.OperationArguments,
      spec: coreClient.OperationSpec
    ): Promise<FarmBeatsModelsUpdateResponse> => {
      return this.client.sendOperationRequest(args, spec);
    };
    const sendOperation = async (
      args: coreClient.OperationArguments,
      spec: coreClient.OperationSpec
    ) => {
      let currentRawResponse:
        | coreClient.FullOperationResponse
        | undefined = undefined;
      const providedCallback = args.options?.onResponse;
      const callback: coreClient.RawResponseCallback = (
        rawResponse: coreClient.FullOperationResponse,
        flatResponse: unknown
      ) => {
        currentRawResponse = rawResponse;
        providedCallback?.(rawResponse, flatResponse);
      };
      const updatedArgs = {
        ...args,
        options: {
          ...args.options,
          onResponse: callback
        }
      };
      const flatResponse = await directSendOperation(updatedArgs, spec);
      return {
        flatResponse,
        rawResponse: {
          statusCode: currentRawResponse!.status,
          body: currentRawResponse!.parsedBody,
          headers: currentRawResponse!.headers.toJSON()
        }
      };
    };

    const lro = new LroImpl(
      sendOperation,
      { resourceGroupName, farmBeatsResourceName, body, options },
      updateOperationSpec
    );
    const poller = new LroEngine(lro, {
      resumeFrom: options?.resumeFrom,
      intervalInMs: options?.updateIntervalInMs,
      lroResourceLocationConfig: "location"
    });
    await poller.poll();
    return poller;
  }

  /**
   * Update a FarmBeats resource.
   * @param resourceGroupName The name of the resource group. The name is case insensitive.
   * @param farmBeatsResourceName FarmBeats resource name.
   * @param body Request object.
   * @param options The options parameters.
   */
  async beginUpdateAndWait(
    resourceGroupName: string,
    farmBeatsResourceName: string,
    body: FarmBeatsUpdateRequestModel,
    options?: FarmBeatsModelsUpdateOptionalParams
  ): Promise<FarmBeatsModelsUpdateResponse> {
    const poller = await this.beginUpdate(
      resourceGroupName,
      farmBeatsResourceName,
      body,
      options
    );
    return poller.pollUntilDone();
  }

  /**
   * Delete a FarmBeats resource.
   * @param resourceGroupName The name of the resource group. The name is case insensitive.
   * @param farmBeatsResourceName FarmBeats resource name.
   * @param options The options parameters.
   */
  delete(
    resourceGroupName: string,
    farmBeatsResourceName: string,
    options?: FarmBeatsModelsDeleteOptionalParams
  ): Promise<void> {
    return this.client.sendOperationRequest(
      { resourceGroupName, farmBeatsResourceName, options },
      deleteOperationSpec
    );
  }

  /**
   * Lists the FarmBeats instances for a subscription.
   * @param options The options parameters.
   */
  private _listBySubscription(
    options?: FarmBeatsModelsListBySubscriptionOptionalParams
  ): Promise<FarmBeatsModelsListBySubscriptionResponse> {
    return this.client.sendOperationRequest(
      { options },
      listBySubscriptionOperationSpec
    );
  }

  /**
   * Lists the FarmBeats instances for a resource group.
   * @param resourceGroupName The name of the resource group. The name is case insensitive.
   * @param options The options parameters.
   */
  private _listByResourceGroup(
    resourceGroupName: string,
    options?: FarmBeatsModelsListByResourceGroupOptionalParams
  ): Promise<FarmBeatsModelsListByResourceGroupResponse> {
    return this.client.sendOperationRequest(
      { resourceGroupName, options },
      listByResourceGroupOperationSpec
    );
  }

  /**
   * Get operationResults for a FarmBeats resource.
   * @param resourceGroupName The name of the resource group. The name is case insensitive.
   * @param farmBeatsResourceName FarmBeats resource name.
   * @param operationResultsId The operation results id.
   * @param options The options parameters.
   */
  getOperationResult(
    resourceGroupName: string,
    farmBeatsResourceName: string,
    operationResultsId: string,
    options?: FarmBeatsModelsGetOperationResultOptionalParams
  ): Promise<FarmBeatsModelsGetOperationResultResponse> {
    return this.client.sendOperationRequest(
      { resourceGroupName, farmBeatsResourceName, operationResultsId, options },
      getOperationResultOperationSpec
    );
  }

  /**
   * ListBySubscriptionNext
   * @param nextLink The nextLink from the previous successful call to the ListBySubscription method.
   * @param options The options parameters.
   */
  private _listBySubscriptionNext(
    nextLink: string,
    options?: FarmBeatsModelsListBySubscriptionNextOptionalParams
  ): Promise<FarmBeatsModelsListBySubscriptionNextResponse> {
    return this.client.sendOperationRequest(
      { nextLink, options },
      listBySubscriptionNextOperationSpec
    );
  }

  /**
   * ListByResourceGroupNext
   * @param resourceGroupName The name of the resource group. The name is case insensitive.
   * @param nextLink The nextLink from the previous successful call to the ListByResourceGroup method.
   * @param options The options parameters.
   */
  private _listByResourceGroupNext(
    resourceGroupName: string,
    nextLink: string,
    options?: FarmBeatsModelsListByResourceGroupNextOptionalParams
  ): Promise<FarmBeatsModelsListByResourceGroupNextResponse> {
    return this.client.sendOperationRequest(
      { resourceGroupName, nextLink, options },
      listByResourceGroupNextOperationSpec
    );
  }
}
// Operation Specifications
const serializer = coreClient.createSerializer(Mappers, /* isXml */ false);

const getOperationSpec: coreClient.OperationSpec = {
  path:
    "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.AgFoodPlatform/farmBeats/{farmBeatsResourceName}",
  httpMethod: "GET",
  responses: {
    200: {
      bodyMapper: Mappers.FarmBeats
    },
    default: {
      bodyMapper: Mappers.ErrorResponse
    }
  },
  queryParameters: [Parameters.apiVersion],
  urlParameters: [
    Parameters.$host,
    Parameters.subscriptionId,
    Parameters.resourceGroupName,
    Parameters.farmBeatsResourceName
  ],
  headerParameters: [Parameters.accept],
  serializer
};
const createOrUpdateOperationSpec: coreClient.OperationSpec = {
  path:
    "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.AgFoodPlatform/farmBeats/{farmBeatsResourceName}",
  httpMethod: "PUT",
  responses: {
    200: {
      bodyMapper: Mappers.FarmBeats
    },
    201: {
      bodyMapper: Mappers.FarmBeats
    },
    default: {
      bodyMapper: Mappers.ErrorResponse
    }
  },
  requestBody: Parameters.body,
  queryParameters: [Parameters.apiVersion],
  urlParameters: [
    Parameters.$host,
    Parameters.subscriptionId,
    Parameters.resourceGroupName,
    Parameters.farmBeatsResourceName
  ],
  headerParameters: [Parameters.accept, Parameters.contentType],
  mediaType: "json",
  serializer
};
const updateOperationSpec: coreClient.OperationSpec = {
  path:
    "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.AgFoodPlatform/farmBeats/{farmBeatsResourceName}",
  httpMethod: "PATCH",
  responses: {
    200: {
      bodyMapper: Mappers.FarmBeats
    },
    201: {
      bodyMapper: Mappers.FarmBeats
    },
    202: {
      bodyMapper: Mappers.FarmBeats
    },
    204: {
      bodyMapper: Mappers.FarmBeats
    },
    default: {
      bodyMapper: Mappers.ErrorResponse
    }
  },
  requestBody: Parameters.body1,
  queryParameters: [Parameters.apiVersion],
  urlParameters: [
    Parameters.$host,
    Parameters.subscriptionId,
    Parameters.resourceGroupName,
    Parameters.farmBeatsResourceName
  ],
  headerParameters: [Parameters.accept, Parameters.contentType],
  mediaType: "json",
  serializer
};
const deleteOperationSpec: coreClient.OperationSpec = {
  path:
    "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.AgFoodPlatform/farmBeats/{farmBeatsResourceName}",
  httpMethod: "DELETE",
  responses: {
    200: {},
    204: {},
    default: {
      bodyMapper: Mappers.ErrorResponse
    }
  },
  queryParameters: [Parameters.apiVersion],
  urlParameters: [
    Parameters.$host,
    Parameters.subscriptionId,
    Parameters.resourceGroupName,
    Parameters.farmBeatsResourceName
  ],
  headerParameters: [Parameters.accept],
  serializer
};
const listBySubscriptionOperationSpec: coreClient.OperationSpec = {
  path:
    "/subscriptions/{subscriptionId}/providers/Microsoft.AgFoodPlatform/farmBeats",
  httpMethod: "GET",
  responses: {
    200: {
      bodyMapper: Mappers.FarmBeatsListResponse
    },
    default: {
      bodyMapper: Mappers.ErrorResponse
    }
  },
  queryParameters: [
    Parameters.apiVersion,
    Parameters.maxPageSize,
    Parameters.skipToken
  ],
  urlParameters: [Parameters.$host, Parameters.subscriptionId],
  headerParameters: [Parameters.accept],
  serializer
};
const listByResourceGroupOperationSpec: coreClient.OperationSpec = {
  path:
    "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.AgFoodPlatform/farmBeats",
  httpMethod: "GET",
  responses: {
    200: {
      bodyMapper: Mappers.FarmBeatsListResponse
    },
    default: {
      bodyMapper: Mappers.ErrorResponse
    }
  },
  queryParameters: [
    Parameters.apiVersion,
    Parameters.maxPageSize,
    Parameters.skipToken
  ],
  urlParameters: [
    Parameters.$host,
    Parameters.subscriptionId,
    Parameters.resourceGroupName
  ],
  headerParameters: [Parameters.accept],
  serializer
};
const getOperationResultOperationSpec: coreClient.OperationSpec = {
  path:
    "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.AgFoodPlatform/farmBeats/{farmBeatsResourceName}/operationResults/{operationResultsId}",
  httpMethod: "GET",
  responses: {
    200: {
      bodyMapper: Mappers.ArmAsyncOperation
    },
    default: {
      bodyMapper: Mappers.ErrorResponse
    }
  },
  queryParameters: [Parameters.apiVersion],
  urlParameters: [
    Parameters.$host,
    Parameters.subscriptionId,
    Parameters.resourceGroupName,
    Parameters.farmBeatsResourceName,
    Parameters.operationResultsId
  ],
  headerParameters: [Parameters.accept],
  serializer
};
const listBySubscriptionNextOperationSpec: coreClient.OperationSpec = {
  path: "{nextLink}",
  httpMethod: "GET",
  responses: {
    200: {
      bodyMapper: Mappers.FarmBeatsListResponse
    },
    default: {
      bodyMapper: Mappers.ErrorResponse
    }
  },
  queryParameters: [
    Parameters.apiVersion,
    Parameters.maxPageSize,
    Parameters.skipToken
  ],
  urlParameters: [
    Parameters.$host,
    Parameters.subscriptionId,
    Parameters.nextLink
  ],
  headerParameters: [Parameters.accept],
  serializer
};
const listByResourceGroupNextOperationSpec: coreClient.OperationSpec = {
  path: "{nextLink}",
  httpMethod: "GET",
  responses: {
    200: {
      bodyMapper: Mappers.FarmBeatsListResponse
    },
    default: {
      bodyMapper: Mappers.ErrorResponse
    }
  },
  queryParameters: [
    Parameters.apiVersion,
    Parameters.maxPageSize,
    Parameters.skipToken
  ],
  urlParameters: [
    Parameters.$host,
    Parameters.subscriptionId,
    Parameters.resourceGroupName,
    Parameters.nextLink
  ],
  headerParameters: [Parameters.accept],
  serializer
};
