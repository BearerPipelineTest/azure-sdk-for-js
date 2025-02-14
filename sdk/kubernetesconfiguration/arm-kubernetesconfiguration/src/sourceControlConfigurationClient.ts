/*
 * Copyright (c) Microsoft Corporation.
 * Licensed under the MIT License.
 *
 * Code generated by Microsoft (R) AutoRest Code Generator.
 * Changes may cause incorrect behavior and will be lost if the code is regenerated.
 */

import * as coreClient from "@azure/core-client";
import * as coreAuth from "@azure/core-auth";
import {
  ExtensionsImpl,
  OperationStatusImpl,
  FluxConfigurationsImpl,
  FluxConfigOperationStatusImpl,
  SourceControlConfigurationsImpl,
  OperationsImpl
} from "./operations";
import {
  Extensions,
  OperationStatus,
  FluxConfigurations,
  FluxConfigOperationStatus,
  SourceControlConfigurations,
  Operations
} from "./operationsInterfaces";
import { SourceControlConfigurationClientOptionalParams } from "./models";

export class SourceControlConfigurationClient extends coreClient.ServiceClient {
  $host: string;
  subscriptionId: string;
  apiVersion: string;

  /**
   * Initializes a new instance of the SourceControlConfigurationClient class.
   * @param credentials Subscription credentials which uniquely identify client subscription.
   * @param subscriptionId The ID of the target subscription.
   * @param options The parameter options
   */
  constructor(
    credentials: coreAuth.TokenCredential,
    subscriptionId: string,
    options?: SourceControlConfigurationClientOptionalParams
  ) {
    if (credentials === undefined) {
      throw new Error("'credentials' cannot be null");
    }
    if (subscriptionId === undefined) {
      throw new Error("'subscriptionId' cannot be null");
    }

    // Initializing default values for options
    if (!options) {
      options = {};
    }
    const defaults: SourceControlConfigurationClientOptionalParams = {
      requestContentType: "application/json; charset=utf-8",
      credential: credentials
    };

    const packageDetails = `azsdk-js-arm-kubernetesconfiguration/5.0.1`;
    const userAgentPrefix =
      options.userAgentOptions && options.userAgentOptions.userAgentPrefix
        ? `${options.userAgentOptions.userAgentPrefix} ${packageDetails}`
        : `${packageDetails}`;

    if (!options.credentialScopes) {
      options.credentialScopes = ["https://management.azure.com/.default"];
    }
    const optionsWithDefaults = {
      ...defaults,
      ...options,
      userAgentOptions: {
        userAgentPrefix
      },
      baseUri:
        options.endpoint ?? options.baseUri ?? "https://management.azure.com"
    };
    super(optionsWithDefaults);
    // Parameter assignments
    this.subscriptionId = subscriptionId;

    // Assigning values to Constant parameters
    this.$host = options.$host || "https://management.azure.com";
    this.apiVersion = options.apiVersion || "2022-03-01";
    this.extensions = new ExtensionsImpl(this);
    this.operationStatus = new OperationStatusImpl(this);
    this.fluxConfigurations = new FluxConfigurationsImpl(this);
    this.fluxConfigOperationStatus = new FluxConfigOperationStatusImpl(this);
    this.sourceControlConfigurations = new SourceControlConfigurationsImpl(
      this
    );
    this.operations = new OperationsImpl(this);
  }

  extensions: Extensions;
  operationStatus: OperationStatus;
  fluxConfigurations: FluxConfigurations;
  fluxConfigOperationStatus: FluxConfigOperationStatus;
  sourceControlConfigurations: SourceControlConfigurations;
  operations: Operations;
}
