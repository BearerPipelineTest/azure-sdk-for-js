## API Report File for "@azure/arm-deploymentmanager"

> Do not edit this file. It is a report generated by [API Extractor](https://api-extractor.com/).

```ts

import * as coreAuth from '@azure/core-auth';
import * as coreClient from '@azure/core-client';
import { PollerLike } from '@azure/core-lro';
import { PollOperationState } from '@azure/core-lro';

// @public
export type ApiKeyAuthentication = RestRequestAuthentication & {
    type: "ApiKey";
    name: string;
    in: RestAuthLocation;
    value: string;
};

// @public
export type ArtifactSource = TrackedResource & {
    sourceType?: string;
    artifactRoot?: string;
    authentication?: AuthenticationUnion;
};

// @public
export type ArtifactSourceProperties = ArtifactSourcePropertiesAutoGenerated & {};

// @public
export interface ArtifactSourcePropertiesAutoGenerated {
    artifactRoot?: string;
    authentication: AuthenticationUnion;
    sourceType: string;
}

// @public
export interface ArtifactSources {
    createOrUpdate(resourceGroupName: string, artifactSourceName: string, options?: ArtifactSourcesCreateOrUpdateOptionalParams): Promise<ArtifactSourcesCreateOrUpdateResponse>;
    delete(resourceGroupName: string, artifactSourceName: string, options?: ArtifactSourcesDeleteOptionalParams): Promise<void>;
    get(resourceGroupName: string, artifactSourceName: string, options?: ArtifactSourcesGetOptionalParams): Promise<ArtifactSourcesGetResponse>;
    list(resourceGroupName: string, options?: ArtifactSourcesListOptionalParams): Promise<ArtifactSourcesListResponse>;
}

// @public
export interface ArtifactSourcesCreateOrUpdateOptionalParams extends coreClient.OperationOptions {
    artifactSourceInfo?: ArtifactSource;
}

// @public
export type ArtifactSourcesCreateOrUpdateResponse = ArtifactSource;

// @public
export interface ArtifactSourcesDeleteOptionalParams extends coreClient.OperationOptions {
}

// @public
export interface ArtifactSourcesGetOptionalParams extends coreClient.OperationOptions {
}

// @public
export type ArtifactSourcesGetResponse = ArtifactSource;

// @public
export interface ArtifactSourcesListOptionalParams extends coreClient.OperationOptions {
}

// @public
export type ArtifactSourcesListResponse = ArtifactSource[];

// @public
export interface Authentication {
    type: "Sas";
}

// @public (undocumented)
export type AuthenticationUnion = Authentication | SasAuthentication;

// @public (undocumented)
export class AzureDeploymentManager extends coreClient.ServiceClient {
    // (undocumented)
    $host: string;
    constructor(credentials: coreAuth.TokenCredential, subscriptionId: string, options?: AzureDeploymentManagerOptionalParams);
    // (undocumented)
    apiVersion: string;
    // (undocumented)
    artifactSources: ArtifactSources;
    // (undocumented)
    operations: Operations;
    // (undocumented)
    rollouts: Rollouts;
    // (undocumented)
    services: Services;
    // (undocumented)
    serviceTopologies: ServiceTopologies;
    // (undocumented)
    serviceUnits: ServiceUnits;
    // (undocumented)
    steps: Steps;
    // (undocumented)
    subscriptionId: string;
}

// @public
export interface AzureDeploymentManagerOptionalParams extends coreClient.ServiceClientOptions {
    $host?: string;
    apiVersion?: string;
    endpoint?: string;
}

// @public
export interface CloudError {
    error?: CloudErrorBody;
}

// @public
export interface CloudErrorBody {
    readonly code?: string;
    details?: CloudErrorBody[];
    readonly message?: string;
    target?: string;
}

// @public
export type DeploymentMode = "Incremental" | "Complete";

// @public
export interface HealthCheckStepAttributes {
    healthyStateDuration: string;
    maxElasticDuration?: string;
    type: "REST";
    waitDuration?: string;
}

// @public (undocumented)
export type HealthCheckStepAttributesUnion = HealthCheckStepAttributes | RestHealthCheckStepAttributes;

// @public
export type HealthCheckStepProperties = StepProperties & {
    stepType: "HealthCheck";
    attributes: HealthCheckStepAttributesUnion;
};

// @public
export interface Identity {
    identityIds: string[];
    type: string;
}

// @public
export interface Message {
    readonly message?: string;
    readonly timeStamp?: Date;
}

// @public
export interface Operation {
    display?: OperationDetail;
    name?: string;
    origin?: string;
    properties?: Record<string, unknown>;
}

// @public
export interface OperationDetail {
    description?: string;
    operation?: string;
    provider?: string;
    resource?: string;
}

// @public
export interface Operations {
    list(options?: OperationsListOptionalParams): Promise<OperationsListResponse>;
}

// @public
export interface OperationsList {
    value?: Operation;
}

// @public
export interface OperationsListOptionalParams extends coreClient.OperationOptions {
}

// @public
export type OperationsListResponse = OperationsList;

// @public
export interface PrePostStep {
    stepId: string;
}

// @public
export interface Resource {
    readonly id?: string;
    readonly name?: string;
    readonly type?: string;
}

// @public
export interface ResourceOperation {
    readonly operationId?: string;
    readonly provisioningState?: string;
    resourceName?: string;
    resourceType?: string;
    readonly statusCode?: string;
    readonly statusMessage?: string;
}

// @public
export type RestAuthLocation = "Query" | "Header";

// @public
export type RestAuthType = "ApiKey" | "RolloutIdentity";

// @public
export interface RestHealthCheck {
    name: string;
    request: RestRequest;
    response?: RestResponse;
}

// @public
export type RestHealthCheckStepAttributes = HealthCheckStepAttributes & {
    type: "REST";
    healthChecks?: RestHealthCheck[];
};

// @public
export type RestMatchQuantifier = "All" | "Any";

// @public
export interface RestRequest {
    authentication: RestRequestAuthenticationUnion;
    method: RestRequestMethod;
    uri: string;
}

// @public
export interface RestRequestAuthentication {
    type: "RolloutIdentity" | "ApiKey";
}

// @public (undocumented)
export type RestRequestAuthenticationUnion = RestRequestAuthentication | RolloutIdentityAuthentication | ApiKeyAuthentication;

// @public
export type RestRequestMethod = "GET" | "POST";

// @public
export interface RestResponse {
    regex?: RestResponseRegex;
    successStatusCodes?: string[];
}

// @public
export interface RestResponseRegex {
    matches?: string[];
    matchQuantifier?: RestMatchQuantifier;
}

// @public
export type Rollout = TrackedResource & {
    identity?: Identity;
    buildVersion?: string;
    artifactSourceId?: string;
    targetServiceTopologyId?: string;
    stepGroups?: StepGroup[];
    readonly status?: string;
    readonly totalRetryAttempts?: number;
    readonly operationInfo?: RolloutOperationInfo;
    readonly services?: Service[];
};

// @public
export type RolloutIdentityAuthentication = RestRequestAuthentication & {
    type: "RolloutIdentity";
};

// @public
export interface RolloutOperationInfo {
    readonly endTime?: Date;
    readonly error?: CloudErrorBody;
    readonly retryAttempt?: number;
    readonly skipSucceededOnRetry?: boolean;
    readonly startTime?: Date;
}

// @public
export type RolloutProperties = RolloutRequestProperties & RolloutPropertiesAutoGenerated & {};

// @public
export interface RolloutPropertiesAutoGenerated {
    readonly operationInfo?: RolloutOperationInfo;
    readonly services?: Service[];
    readonly status?: string;
    readonly totalRetryAttempts?: number;
}

// @public
export type RolloutRequest = TrackedResource & {
    identity: Identity;
    buildVersion: string;
    artifactSourceId?: string;
    targetServiceTopologyId: string;
    stepGroups: StepGroup[];
};

// @public
export interface RolloutRequestProperties {
    artifactSourceId?: string;
    buildVersion: string;
    stepGroups: StepGroup[];
    targetServiceTopologyId: string;
}

// @public
export interface Rollouts {
    beginCreateOrUpdate(resourceGroupName: string, rolloutName: string, options?: RolloutsCreateOrUpdateOptionalParams): Promise<PollerLike<PollOperationState<RolloutsCreateOrUpdateResponse>, RolloutsCreateOrUpdateResponse>>;
    beginCreateOrUpdateAndWait(resourceGroupName: string, rolloutName: string, options?: RolloutsCreateOrUpdateOptionalParams): Promise<RolloutsCreateOrUpdateResponse>;
    cancel(resourceGroupName: string, rolloutName: string, options?: RolloutsCancelOptionalParams): Promise<RolloutsCancelResponse>;
    delete(resourceGroupName: string, rolloutName: string, options?: RolloutsDeleteOptionalParams): Promise<void>;
    get(resourceGroupName: string, rolloutName: string, options?: RolloutsGetOptionalParams): Promise<RolloutsGetResponse>;
    list(resourceGroupName: string, options?: RolloutsListOptionalParams): Promise<RolloutsListResponse>;
    restart(resourceGroupName: string, rolloutName: string, options?: RolloutsRestartOptionalParams): Promise<RolloutsRestartResponse>;
}

// @public
export interface RolloutsCancelOptionalParams extends coreClient.OperationOptions {
}

// @public
export type RolloutsCancelResponse = Rollout;

// @public
export interface RolloutsCreateOrUpdateHeaders {
    azureAsyncOperation?: string;
}

// @public
export interface RolloutsCreateOrUpdateOptionalParams extends coreClient.OperationOptions {
    resumeFrom?: string;
    rolloutRequest?: RolloutRequest;
    updateIntervalInMs?: number;
}

// @public
export type RolloutsCreateOrUpdateResponse = RolloutsCreateOrUpdateHeaders & RolloutRequest;

// @public
export interface RolloutsDeleteOptionalParams extends coreClient.OperationOptions {
}

// @public
export interface RolloutsGetOptionalParams extends coreClient.OperationOptions {
    retryAttempt?: number;
}

// @public
export type RolloutsGetResponse = Rollout;

// @public
export interface RolloutsListOptionalParams extends coreClient.OperationOptions {
}

// @public
export type RolloutsListResponse = Rollout[];

// @public
export interface RolloutsRestartOptionalParams extends coreClient.OperationOptions {
    skipSucceeded?: boolean;
}

// @public
export type RolloutsRestartResponse = Rollout;

// @public
export interface RolloutStep {
    readonly messages?: Message[];
    name: string;
    readonly operationInfo?: StepOperationInfo;
    readonly resourceOperations?: ResourceOperation[];
    readonly status?: string;
    stepGroup?: string;
}

// @public
export type SasAuthentication = Authentication & {
    type: "Sas";
    sasUri?: string;
};

// @public
export type Service = ServiceProperties & {
    name?: string;
    serviceUnits?: ServiceUnit[];
};

// @public
export interface ServiceProperties {
    targetLocation: string;
    targetSubscriptionId: string;
}

// @public
export type ServiceResource = TrackedResource & {
    targetLocation: string;
    targetSubscriptionId: string;
};

// @public
export type ServiceResourceProperties = ServiceProperties & {};

// @public
export interface Services {
    createOrUpdate(resourceGroupName: string, serviceTopologyName: string, serviceName: string, serviceInfo: ServiceResource, options?: ServicesCreateOrUpdateOptionalParams): Promise<ServicesCreateOrUpdateResponse>;
    delete(resourceGroupName: string, serviceTopologyName: string, serviceName: string, options?: ServicesDeleteOptionalParams): Promise<void>;
    get(resourceGroupName: string, serviceTopologyName: string, serviceName: string, options?: ServicesGetOptionalParams): Promise<ServicesGetResponse>;
    list(resourceGroupName: string, serviceTopologyName: string, options?: ServicesListOptionalParams): Promise<ServicesListResponse>;
}

// @public
export interface ServicesCreateOrUpdateOptionalParams extends coreClient.OperationOptions {
}

// @public
export type ServicesCreateOrUpdateResponse = ServiceResource;

// @public
export interface ServicesDeleteOptionalParams extends coreClient.OperationOptions {
}

// @public
export interface ServicesGetOptionalParams extends coreClient.OperationOptions {
}

// @public
export type ServicesGetResponse = ServiceResource;

// @public
export interface ServicesListOptionalParams extends coreClient.OperationOptions {
}

// @public
export type ServicesListResponse = ServiceResource[];

// @public
export interface ServiceTopologies {
    createOrUpdate(resourceGroupName: string, serviceTopologyName: string, serviceTopologyInfo: ServiceTopologyResource, options?: ServiceTopologiesCreateOrUpdateOptionalParams): Promise<ServiceTopologiesCreateOrUpdateResponse>;
    delete(resourceGroupName: string, serviceTopologyName: string, options?: ServiceTopologiesDeleteOptionalParams): Promise<void>;
    get(resourceGroupName: string, serviceTopologyName: string, options?: ServiceTopologiesGetOptionalParams): Promise<ServiceTopologiesGetResponse>;
    list(resourceGroupName: string, options?: ServiceTopologiesListOptionalParams): Promise<ServiceTopologiesListResponse>;
}

// @public
export interface ServiceTopologiesCreateOrUpdateOptionalParams extends coreClient.OperationOptions {
}

// @public
export type ServiceTopologiesCreateOrUpdateResponse = ServiceTopologyResource;

// @public
export interface ServiceTopologiesDeleteOptionalParams extends coreClient.OperationOptions {
}

// @public
export interface ServiceTopologiesGetOptionalParams extends coreClient.OperationOptions {
}

// @public
export type ServiceTopologiesGetResponse = ServiceTopologyResource;

// @public
export interface ServiceTopologiesListOptionalParams extends coreClient.OperationOptions {
}

// @public
export type ServiceTopologiesListResponse = ServiceTopologyResource[];

// @public
export interface ServiceTopologyProperties {
    artifactSourceId?: string;
}

// @public
export type ServiceTopologyResource = TrackedResource & {
    artifactSourceId?: string;
};

// @public
export type ServiceTopologyResourceProperties = ServiceTopologyProperties & {};

// @public
export type ServiceUnit = ServiceUnitProperties & {
    name?: string;
    steps?: RolloutStep[];
};

// @public
export interface ServiceUnitArtifacts {
    parametersArtifactSourceRelativePath?: string;
    parametersUri?: string;
    templateArtifactSourceRelativePath?: string;
    templateUri?: string;
}

// @public
export interface ServiceUnitProperties {
    artifacts?: ServiceUnitArtifacts;
    deploymentMode: DeploymentMode;
    targetResourceGroup: string;
}

// @public
export type ServiceUnitResource = TrackedResource & {
    targetResourceGroup: string;
    deploymentMode: DeploymentMode;
    artifacts?: ServiceUnitArtifacts;
};

// @public
export type ServiceUnitResourceProperties = ServiceUnitProperties & {};

// @public
export interface ServiceUnits {
    beginCreateOrUpdate(resourceGroupName: string, serviceTopologyName: string, serviceName: string, serviceUnitName: string, serviceUnitInfo: ServiceUnitResource, options?: ServiceUnitsCreateOrUpdateOptionalParams): Promise<PollerLike<PollOperationState<ServiceUnitsCreateOrUpdateResponse>, ServiceUnitsCreateOrUpdateResponse>>;
    beginCreateOrUpdateAndWait(resourceGroupName: string, serviceTopologyName: string, serviceName: string, serviceUnitName: string, serviceUnitInfo: ServiceUnitResource, options?: ServiceUnitsCreateOrUpdateOptionalParams): Promise<ServiceUnitsCreateOrUpdateResponse>;
    delete(resourceGroupName: string, serviceTopologyName: string, serviceName: string, serviceUnitName: string, options?: ServiceUnitsDeleteOptionalParams): Promise<void>;
    get(resourceGroupName: string, serviceTopologyName: string, serviceName: string, serviceUnitName: string, options?: ServiceUnitsGetOptionalParams): Promise<ServiceUnitsGetResponse>;
    list(resourceGroupName: string, serviceTopologyName: string, serviceName: string, options?: ServiceUnitsListOptionalParams): Promise<ServiceUnitsListResponse>;
}

// @public
export interface ServiceUnitsCreateOrUpdateHeaders {
    azureAsyncOperation?: string;
}

// @public
export interface ServiceUnitsCreateOrUpdateOptionalParams extends coreClient.OperationOptions {
    resumeFrom?: string;
    updateIntervalInMs?: number;
}

// @public
export type ServiceUnitsCreateOrUpdateResponse = ServiceUnitsCreateOrUpdateHeaders & ServiceUnitResource;

// @public
export interface ServiceUnitsDeleteOptionalParams extends coreClient.OperationOptions {
}

// @public
export interface ServiceUnitsGetOptionalParams extends coreClient.OperationOptions {
}

// @public
export type ServiceUnitsGetResponse = ServiceUnitResource;

// @public
export interface ServiceUnitsListOptionalParams extends coreClient.OperationOptions {
}

// @public
export type ServiceUnitsListResponse = ServiceUnitResource[];

// @public
export interface StepGroup {
    dependsOnStepGroups?: string[];
    deploymentTargetId: string;
    name: string;
    postDeploymentSteps?: PrePostStep[];
    preDeploymentSteps?: PrePostStep[];
}

// @public
export interface StepOperationInfo {
    readonly correlationId?: string;
    readonly deploymentName?: string;
    readonly endTime?: Date;
    error?: CloudErrorBody;
    readonly lastUpdatedTime?: Date;
    readonly startTime?: Date;
}

// @public
export interface StepProperties {
    stepType: "HealthCheck" | "Wait";
}

// @public (undocumented)
export type StepPropertiesUnion = StepProperties | HealthCheckStepProperties | WaitStepProperties;

// @public
export type StepResource = TrackedResource & {
    properties: StepPropertiesUnion;
};

// @public
export interface Steps {
    createOrUpdate(resourceGroupName: string, stepName: string, options?: StepsCreateOrUpdateOptionalParams): Promise<StepsCreateOrUpdateResponse>;
    delete(resourceGroupName: string, stepName: string, options?: StepsDeleteOptionalParams): Promise<void>;
    get(resourceGroupName: string, stepName: string, options?: StepsGetOptionalParams): Promise<StepsGetResponse>;
    list(resourceGroupName: string, options?: StepsListOptionalParams): Promise<StepsListResponse>;
}

// @public
export interface StepsCreateOrUpdateOptionalParams extends coreClient.OperationOptions {
    stepInfo?: StepResource;
}

// @public
export type StepsCreateOrUpdateResponse = StepResource;

// @public
export interface StepsDeleteOptionalParams extends coreClient.OperationOptions {
}

// @public
export interface StepsGetOptionalParams extends coreClient.OperationOptions {
}

// @public
export type StepsGetResponse = StepResource;

// @public
export interface StepsListOptionalParams extends coreClient.OperationOptions {
}

// @public
export type StepsListResponse = StepResource[];

// @public
export type StepType = "Wait" | "HealthCheck";

// @public
export type TrackedResource = Resource & {
    tags?: {
        [propertyName: string]: string;
    };
    location: string;
};

// @public
export interface WaitStepAttributes {
    duration: string;
}

// @public
export type WaitStepProperties = StepProperties & {
    stepType: "Wait";
    attributes: WaitStepAttributes;
};

// (No @packageDocumentation comment for this package)

```
