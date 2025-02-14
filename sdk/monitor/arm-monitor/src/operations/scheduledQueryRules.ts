/*
 * Copyright (c) Microsoft Corporation.
 * Licensed under the MIT License.
 *
 * Code generated by Microsoft (R) AutoRest Code Generator.
 * Changes may cause incorrect behavior and will be lost if the code is regenerated.
 */

import { PagedAsyncIterableIterator } from "@azure/core-paging";
import { ScheduledQueryRules } from "../operationsInterfaces";
import * as coreClient from "@azure/core-client";
import * as Mappers from "../models/mappers";
import * as Parameters from "../models/parameters";
import { MonitorClient } from "../monitorClient";
import {
  LogSearchRuleResource,
  ScheduledQueryRulesListBySubscriptionOptionalParams,
  ScheduledQueryRulesListByResourceGroupOptionalParams,
  ScheduledQueryRulesCreateOrUpdateOptionalParams,
  ScheduledQueryRulesCreateOrUpdateResponse,
  ScheduledQueryRulesGetOptionalParams,
  ScheduledQueryRulesGetResponse,
  LogSearchRuleResourcePatch,
  ScheduledQueryRulesUpdateOptionalParams,
  ScheduledQueryRulesUpdateResponse,
  ScheduledQueryRulesDeleteOptionalParams,
  ScheduledQueryRulesListBySubscriptionResponse,
  ScheduledQueryRulesListByResourceGroupResponse
} from "../models";

/// <reference lib="esnext.asynciterable" />
/** Class containing ScheduledQueryRules operations. */
export class ScheduledQueryRulesImpl implements ScheduledQueryRules {
  private readonly client: MonitorClient;

  /**
   * Initialize a new instance of the class ScheduledQueryRules class.
   * @param client Reference to the service client
   */
  constructor(client: MonitorClient) {
    this.client = client;
  }

  /**
   * List the Log Search rules within a subscription group.
   * @param options The options parameters.
   */
  public listBySubscription(
    options?: ScheduledQueryRulesListBySubscriptionOptionalParams
  ): PagedAsyncIterableIterator<LogSearchRuleResource> {
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
    options?: ScheduledQueryRulesListBySubscriptionOptionalParams
  ): AsyncIterableIterator<LogSearchRuleResource[]> {
    let result = await this._listBySubscription(options);
    yield result.value || [];
  }

  private async *listBySubscriptionPagingAll(
    options?: ScheduledQueryRulesListBySubscriptionOptionalParams
  ): AsyncIterableIterator<LogSearchRuleResource> {
    for await (const page of this.listBySubscriptionPagingPage(options)) {
      yield* page;
    }
  }

  /**
   * List the Log Search rules within a resource group.
   * @param resourceGroupName The name of the resource group. The name is case insensitive.
   * @param options The options parameters.
   */
  public listByResourceGroup(
    resourceGroupName: string,
    options?: ScheduledQueryRulesListByResourceGroupOptionalParams
  ): PagedAsyncIterableIterator<LogSearchRuleResource> {
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
    options?: ScheduledQueryRulesListByResourceGroupOptionalParams
  ): AsyncIterableIterator<LogSearchRuleResource[]> {
    let result = await this._listByResourceGroup(resourceGroupName, options);
    yield result.value || [];
  }

  private async *listByResourceGroupPagingAll(
    resourceGroupName: string,
    options?: ScheduledQueryRulesListByResourceGroupOptionalParams
  ): AsyncIterableIterator<LogSearchRuleResource> {
    for await (const page of this.listByResourceGroupPagingPage(
      resourceGroupName,
      options
    )) {
      yield* page;
    }
  }

  /**
   * Creates or updates an log search rule.
   * @param resourceGroupName The name of the resource group. The name is case insensitive.
   * @param ruleName The name of the rule.
   * @param parameters The parameters of the rule to create or update.
   * @param options The options parameters.
   */
  createOrUpdate(
    resourceGroupName: string,
    ruleName: string,
    parameters: LogSearchRuleResource,
    options?: ScheduledQueryRulesCreateOrUpdateOptionalParams
  ): Promise<ScheduledQueryRulesCreateOrUpdateResponse> {
    return this.client.sendOperationRequest(
      { resourceGroupName, ruleName, parameters, options },
      createOrUpdateOperationSpec
    );
  }

  /**
   * Gets an Log Search rule
   * @param resourceGroupName The name of the resource group. The name is case insensitive.
   * @param ruleName The name of the rule.
   * @param options The options parameters.
   */
  get(
    resourceGroupName: string,
    ruleName: string,
    options?: ScheduledQueryRulesGetOptionalParams
  ): Promise<ScheduledQueryRulesGetResponse> {
    return this.client.sendOperationRequest(
      { resourceGroupName, ruleName, options },
      getOperationSpec
    );
  }

  /**
   * Update log search Rule.
   * @param resourceGroupName The name of the resource group. The name is case insensitive.
   * @param ruleName The name of the rule.
   * @param parameters The parameters of the rule to update.
   * @param options The options parameters.
   */
  update(
    resourceGroupName: string,
    ruleName: string,
    parameters: LogSearchRuleResourcePatch,
    options?: ScheduledQueryRulesUpdateOptionalParams
  ): Promise<ScheduledQueryRulesUpdateResponse> {
    return this.client.sendOperationRequest(
      { resourceGroupName, ruleName, parameters, options },
      updateOperationSpec
    );
  }

  /**
   * Deletes a Log Search rule
   * @param resourceGroupName The name of the resource group. The name is case insensitive.
   * @param ruleName The name of the rule.
   * @param options The options parameters.
   */
  delete(
    resourceGroupName: string,
    ruleName: string,
    options?: ScheduledQueryRulesDeleteOptionalParams
  ): Promise<void> {
    return this.client.sendOperationRequest(
      { resourceGroupName, ruleName, options },
      deleteOperationSpec
    );
  }

  /**
   * List the Log Search rules within a subscription group.
   * @param options The options parameters.
   */
  private _listBySubscription(
    options?: ScheduledQueryRulesListBySubscriptionOptionalParams
  ): Promise<ScheduledQueryRulesListBySubscriptionResponse> {
    return this.client.sendOperationRequest(
      { options },
      listBySubscriptionOperationSpec
    );
  }

  /**
   * List the Log Search rules within a resource group.
   * @param resourceGroupName The name of the resource group. The name is case insensitive.
   * @param options The options parameters.
   */
  private _listByResourceGroup(
    resourceGroupName: string,
    options?: ScheduledQueryRulesListByResourceGroupOptionalParams
  ): Promise<ScheduledQueryRulesListByResourceGroupResponse> {
    return this.client.sendOperationRequest(
      { resourceGroupName, options },
      listByResourceGroupOperationSpec
    );
  }
}
// Operation Specifications
const serializer = coreClient.createSerializer(Mappers, /* isXml */ false);

const createOrUpdateOperationSpec: coreClient.OperationSpec = {
  path:
    "/subscriptions/{subscriptionId}/resourcegroups/{resourceGroupName}/providers/Microsoft.Insights/scheduledQueryRules/{ruleName}",
  httpMethod: "PUT",
  responses: {
    200: {
      bodyMapper: Mappers.LogSearchRuleResource
    },
    201: {
      bodyMapper: Mappers.LogSearchRuleResource
    },
    default: {
      bodyMapper: Mappers.ErrorContract
    }
  },
  requestBody: Parameters.parameters6,
  queryParameters: [Parameters.apiVersion8],
  urlParameters: [
    Parameters.$host,
    Parameters.resourceGroupName,
    Parameters.subscriptionId,
    Parameters.ruleName
  ],
  headerParameters: [Parameters.accept, Parameters.contentType],
  mediaType: "json",
  serializer
};
const getOperationSpec: coreClient.OperationSpec = {
  path:
    "/subscriptions/{subscriptionId}/resourcegroups/{resourceGroupName}/providers/Microsoft.Insights/scheduledQueryRules/{ruleName}",
  httpMethod: "GET",
  responses: {
    200: {
      bodyMapper: Mappers.LogSearchRuleResource
    },
    default: {
      bodyMapper: Mappers.ErrorContract
    }
  },
  queryParameters: [Parameters.apiVersion8],
  urlParameters: [
    Parameters.$host,
    Parameters.resourceGroupName,
    Parameters.subscriptionId,
    Parameters.ruleName
  ],
  headerParameters: [Parameters.accept],
  serializer
};
const updateOperationSpec: coreClient.OperationSpec = {
  path:
    "/subscriptions/{subscriptionId}/resourcegroups/{resourceGroupName}/providers/Microsoft.Insights/scheduledQueryRules/{ruleName}",
  httpMethod: "PATCH",
  responses: {
    200: {
      bodyMapper: Mappers.LogSearchRuleResource
    },
    default: {
      bodyMapper: Mappers.ErrorContract
    }
  },
  requestBody: Parameters.parameters7,
  queryParameters: [Parameters.apiVersion8],
  urlParameters: [
    Parameters.$host,
    Parameters.resourceGroupName,
    Parameters.subscriptionId,
    Parameters.ruleName
  ],
  headerParameters: [Parameters.accept, Parameters.contentType],
  mediaType: "json",
  serializer
};
const deleteOperationSpec: coreClient.OperationSpec = {
  path:
    "/subscriptions/{subscriptionId}/resourcegroups/{resourceGroupName}/providers/Microsoft.Insights/scheduledQueryRules/{ruleName}",
  httpMethod: "DELETE",
  responses: {
    200: {},
    204: {},
    default: {
      bodyMapper: Mappers.ErrorContract
    }
  },
  queryParameters: [Parameters.apiVersion8],
  urlParameters: [
    Parameters.$host,
    Parameters.resourceGroupName,
    Parameters.subscriptionId,
    Parameters.ruleName
  ],
  headerParameters: [Parameters.accept],
  serializer
};
const listBySubscriptionOperationSpec: coreClient.OperationSpec = {
  path:
    "/subscriptions/{subscriptionId}/providers/Microsoft.Insights/scheduledQueryRules",
  httpMethod: "GET",
  responses: {
    200: {
      bodyMapper: Mappers.LogSearchRuleResourceCollection
    },
    default: {
      bodyMapper: Mappers.ErrorContract
    }
  },
  queryParameters: [Parameters.filter1, Parameters.apiVersion8],
  urlParameters: [Parameters.$host, Parameters.subscriptionId],
  headerParameters: [Parameters.accept],
  serializer
};
const listByResourceGroupOperationSpec: coreClient.OperationSpec = {
  path:
    "/subscriptions/{subscriptionId}/resourcegroups/{resourceGroupName}/providers/Microsoft.Insights/scheduledQueryRules",
  httpMethod: "GET",
  responses: {
    200: {
      bodyMapper: Mappers.LogSearchRuleResourceCollection
    },
    default: {
      bodyMapper: Mappers.ErrorContract
    }
  },
  queryParameters: [Parameters.filter1, Parameters.apiVersion8],
  urlParameters: [
    Parameters.$host,
    Parameters.resourceGroupName,
    Parameters.subscriptionId
  ],
  headerParameters: [Parameters.accept],
  serializer
};
