/*
 * Copyright (c) Microsoft Corporation.
 * Licensed under the MIT License.
 *
 * Code generated by Microsoft (R) AutoRest Code Generator.
 * Changes may cause incorrect behavior and will be lost if the code is regenerated.
 */

import * as coreClient from "@azure/core-client";

/** Describes a DNS record set (a collection of DNS records with the same name and type). */
export interface RecordSet {
  /** The ID of the record set. */
  id?: string;
  /** The name of the record set. */
  name?: string;
  /** The type of the record set. */
  type?: string;
  /** The etag of the record set. */
  etag?: string;
  /** The metadata attached to the record set. */
  metadata?: { [propertyName: string]: string };
  /** The TTL (time-to-live) of the records in the record set. */
  ttl?: number;
  /**
   * Fully qualified domain name of the record set.
   * NOTE: This property will not be serialized. It can only be populated by the server.
   */
  readonly fqdn?: string;
  /** The list of A records in the record set. */
  aRecords?: ARecord[];
  /** The list of AAAA records in the record set. */
  aaaaRecords?: AaaaRecord[];
  /** The list of MX records in the record set. */
  mxRecords?: MxRecord[];
  /** The list of NS records in the record set. */
  nsRecords?: NsRecord[];
  /** The list of PTR records in the record set. */
  ptrRecords?: PtrRecord[];
  /** The list of SRV records in the record set. */
  srvRecords?: SrvRecord[];
  /** The list of TXT records in the record set. */
  txtRecords?: TxtRecord[];
  /** The CNAME record in the  record set. */
  cnameRecord?: CnameRecord;
  /** The SOA record in the record set. */
  soaRecord?: SoaRecord;
}

/** An A record. */
export interface ARecord {
  /** The IPv4 address of this A record. */
  ipv4Address?: string;
}

/** An AAAA record. */
export interface AaaaRecord {
  /** The IPv6 address of this AAAA record. */
  ipv6Address?: string;
}

/** An MX record. */
export interface MxRecord {
  /** The preference value for this MX record. */
  preference?: number;
  /** The domain name of the mail host for this MX record. */
  exchange?: string;
}

/** An NS record. */
export interface NsRecord {
  /** The name server name for this NS record. */
  nsdname?: string;
}

/** A PTR record. */
export interface PtrRecord {
  /** The PTR target domain name for this PTR record. */
  ptrdname?: string;
}

/** An SRV record. */
export interface SrvRecord {
  /** The priority value for this SRV record. */
  priority?: number;
  /** The weight value for this SRV record. */
  weight?: number;
  /** The port value for this SRV record. */
  port?: number;
  /** The target domain name for this SRV record. */
  target?: string;
}

/** A TXT record. */
export interface TxtRecord {
  /** The text value of this TXT record. */
  value?: string[];
}

/** A CNAME record. */
export interface CnameRecord {
  /** The canonical name for this CNAME record. */
  cname?: string;
}

/** An SOA record. */
export interface SoaRecord {
  /** The domain name of the authoritative name server for this SOA record. */
  host?: string;
  /** The email contact for this SOA record. */
  email?: string;
  /** The serial number for this SOA record. */
  serialNumber?: number;
  /** The refresh value for this SOA record. */
  refreshTime?: number;
  /** The retry time for this SOA record. */
  retryTime?: number;
  /** The expire time for this SOA record. */
  expireTime?: number;
  /** The minimum value for this SOA record. By convention this is used to determine the negative caching duration. */
  minimumTtl?: number;
}

/** An error response from the service. */
export interface CloudError {
  /** Cloud error body. */
  error?: CloudErrorBody;
}

/** An error response from the service. */
export interface CloudErrorBody {
  /** An identifier for the error. Codes are invariant and are intended to be consumed programmatically. */
  code?: string;
  /** A message describing the error, intended to be suitable for display in a user interface. */
  message?: string;
  /** The target of the particular error. For example, the name of the property in error. */
  target?: string;
  /** A list of additional details about the error. */
  details?: CloudErrorBody[];
}

/** The response to a record set List operation. */
export interface RecordSetListResult {
  /** Information about the record sets in the response. */
  value?: RecordSet[];
  /** The continuation token for the next page of results. */
  nextLink?: string;
}

/** Common fields that are returned in the response for all Azure Resource Manager resources */
export interface Resource {
  /**
   * Fully qualified resource ID for the resource. Ex - /subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/{resourceProviderNamespace}/{resourceType}/{resourceName}
   * NOTE: This property will not be serialized. It can only be populated by the server.
   */
  readonly id?: string;
  /**
   * The name of the resource
   * NOTE: This property will not be serialized. It can only be populated by the server.
   */
  readonly name?: string;
  /**
   * The type of the resource. E.g. "Microsoft.Compute/virtualMachines" or "Microsoft.Storage/storageAccounts"
   * NOTE: This property will not be serialized. It can only be populated by the server.
   */
  readonly type?: string;
}

/** The response to a Zone Delete operation. */
export interface ZoneDeleteResult {
  /** Users can perform a Get on Azure-AsyncOperation to get the status of their delete Zone operations. */
  azureAsyncOperation?: string;
  status?: OperationStatus;
  statusCode?: HttpStatusCode;
  requestId?: string;
}

/** The response to a Zone List or ListAll operation. */
export interface ZoneListResult {
  /** Information about the DNS zones. */
  value?: Zone[];
  /** The continuation token for the next page of results. */
  nextLink?: string;
}

/** Parameters supplied to update a record set. */
export interface RecordSetUpdateParameters {
  /** Specifies information about the record set being updated. */
  recordSet?: RecordSet;
}

export interface SubResource {
  /** Resource Id. */
  id?: string;
}

/** The resource model definition for an Azure Resource Manager tracked top level resource which has 'tags' and a 'location' */
export type TrackedResource = Resource & {
  /** Resource tags. */
  tags?: { [propertyName: string]: string };
  /** The geo-location where the resource lives */
  location: string;
};

/** Describes a DNS zone. */
export type Zone = TrackedResource & {
  /** The etag of the zone. */
  etag?: string;
  /** The maximum number of record sets that can be created in this DNS zone.  This is a read-only property and any attempt to set this value will be ignored. */
  maxNumberOfRecordSets?: number;
  /**
   * The maximum number of records per record set that can be created in this DNS zone.  This is a read-only property and any attempt to set this value will be ignored.
   * NOTE: This property will not be serialized. It can only be populated by the server.
   */
  readonly maxNumberOfRecordsPerRecordSet?: number;
  /** The current number of record sets in this DNS zone.  This is a read-only property and any attempt to set this value will be ignored. */
  numberOfRecordSets?: number;
  /**
   * The name servers for this DNS zone. This is a read-only property and any attempt to set this value will be ignored.
   * NOTE: This property will not be serialized. It can only be populated by the server.
   */
  readonly nameServers?: string[];
  /** The type of this DNS zone (Public or Private). */
  zoneType?: ZoneType;
};
/** Defines values for RecordType. */
export type RecordType =
  | "A"
  | "AAAA"
  | "CNAME"
  | "MX"
  | "NS"
  | "PTR"
  | "SOA"
  | "SRV"
  | "TXT";
/** Defines values for ZoneType. */
export type ZoneType = "Public" | "Private";
/** Defines values for OperationStatus. */
export type OperationStatus = "InProgress" | "Succeeded" | "Failed";
/** Defines values for HttpStatusCode. */
export type HttpStatusCode =
  | "Continue"
  | "SwitchingProtocols"
  | "OK"
  | "Created"
  | "Accepted"
  | "NonAuthoritativeInformation"
  | "NoContent"
  | "ResetContent"
  | "PartialContent"
  | "MultipleChoices"
  | "Ambiguous"
  | "MovedPermanently"
  | "Moved"
  | "Found"
  | "Redirect"
  | "SeeOther"
  | "RedirectMethod"
  | "NotModified"
  | "UseProxy"
  | "Unused"
  | "TemporaryRedirect"
  | "RedirectKeepVerb"
  | "BadRequest"
  | "Unauthorized"
  | "PaymentRequired"
  | "Forbidden"
  | "NotFound"
  | "MethodNotAllowed"
  | "NotAcceptable"
  | "ProxyAuthenticationRequired"
  | "RequestTimeout"
  | "Conflict"
  | "Gone"
  | "LengthRequired"
  | "PreconditionFailed"
  | "RequestEntityTooLarge"
  | "RequestUriTooLong"
  | "UnsupportedMediaType"
  | "RequestedRangeNotSatisfiable"
  | "ExpectationFailed"
  | "UpgradeRequired"
  | "InternalServerError"
  | "NotImplemented"
  | "BadGateway"
  | "ServiceUnavailable"
  | "GatewayTimeout"
  | "HttpVersionNotSupported";

/** Optional parameters. */
export interface RecordSetsUpdateOptionalParams
  extends coreClient.OperationOptions {
  /** The etag of the record set. Omit this value to always overwrite the current record set. Specify the last-seen etag value to prevent accidentally overwriting concurrent changes. */
  ifMatch?: string;
}

/** Contains response data for the update operation. */
export type RecordSetsUpdateResponse = RecordSet;

/** Optional parameters. */
export interface RecordSetsCreateOrUpdateOptionalParams
  extends coreClient.OperationOptions {
  /** The etag of the record set. Omit this value to always overwrite the current record set. Specify the last-seen etag value to prevent accidentally overwriting any concurrent changes. */
  ifMatch?: string;
  /** Set to '*' to allow a new record set to be created, but to prevent updating an existing record set. Other values will be ignored. */
  ifNoneMatch?: string;
}

/** Contains response data for the createOrUpdate operation. */
export type RecordSetsCreateOrUpdateResponse = RecordSet;

/** Optional parameters. */
export interface RecordSetsDeleteOptionalParams
  extends coreClient.OperationOptions {
  /** The etag of the record set. Omit this value to always delete the current record set. Specify the last-seen etag value to prevent accidentally deleting any concurrent changes. */
  ifMatch?: string;
}

/** Optional parameters. */
export interface RecordSetsGetOptionalParams
  extends coreClient.OperationOptions {}

/** Contains response data for the get operation. */
export type RecordSetsGetResponse = RecordSet;

/** Optional parameters. */
export interface RecordSetsListByTypeOptionalParams
  extends coreClient.OperationOptions {
  /** The maximum number of record sets to return. If not specified, returns up to 100 record sets. */
  top?: number;
  /** The suffix label of the record set name that has to be used to filter the record set enumerations. If this parameter is specified, Enumeration will return only records that end with .<recordSetNameSuffix> */
  recordsetnamesuffix?: string;
}

/** Contains response data for the listByType operation. */
export type RecordSetsListByTypeResponse = RecordSetListResult;

/** Optional parameters. */
export interface RecordSetsListByDnsZoneOptionalParams
  extends coreClient.OperationOptions {
  /** The maximum number of record sets to return. If not specified, returns up to 100 record sets. */
  top?: number;
  /** The suffix label of the record set name that has to be used to filter the record set enumerations. If this parameter is specified, Enumeration will return only records that end with .<recordSetNameSuffix> */
  recordsetnamesuffix?: string;
}

/** Contains response data for the listByDnsZone operation. */
export type RecordSetsListByDnsZoneResponse = RecordSetListResult;

/** Optional parameters. */
export interface RecordSetsListByTypeNextOptionalParams
  extends coreClient.OperationOptions {
  /** The maximum number of record sets to return. If not specified, returns up to 100 record sets. */
  top?: number;
  /** The suffix label of the record set name that has to be used to filter the record set enumerations. If this parameter is specified, Enumeration will return only records that end with .<recordSetNameSuffix> */
  recordsetnamesuffix?: string;
}

/** Contains response data for the listByTypeNext operation. */
export type RecordSetsListByTypeNextResponse = RecordSetListResult;

/** Optional parameters. */
export interface RecordSetsListByDnsZoneNextOptionalParams
  extends coreClient.OperationOptions {
  /** The maximum number of record sets to return. If not specified, returns up to 100 record sets. */
  top?: number;
  /** The suffix label of the record set name that has to be used to filter the record set enumerations. If this parameter is specified, Enumeration will return only records that end with .<recordSetNameSuffix> */
  recordsetnamesuffix?: string;
}

/** Contains response data for the listByDnsZoneNext operation. */
export type RecordSetsListByDnsZoneNextResponse = RecordSetListResult;

/** Optional parameters. */
export interface ZonesCreateOrUpdateOptionalParams
  extends coreClient.OperationOptions {
  /** The etag of the DNS zone. Omit this value to always overwrite the current zone. Specify the last-seen etag value to prevent accidentally overwriting any concurrent changes. */
  ifMatch?: string;
  /** Set to '*' to allow a new DNS zone to be created, but to prevent updating an existing zone. Other values will be ignored. */
  ifNoneMatch?: string;
}

/** Contains response data for the createOrUpdate operation. */
export type ZonesCreateOrUpdateResponse = Zone;

/** Optional parameters. */
export interface ZonesDeleteOptionalParams extends coreClient.OperationOptions {
  /** The etag of the DNS zone. Omit this value to always delete the current zone. Specify the last-seen etag value to prevent accidentally deleting any concurrent changes. */
  ifMatch?: string;
  /** Delay to wait until next poll, in milliseconds. */
  updateIntervalInMs?: number;
  /** A serialized poller which can be used to resume an existing paused Long-Running-Operation. */
  resumeFrom?: string;
}

/** Contains response data for the delete operation. */
export type ZonesDeleteResponse = ZoneDeleteResult;

/** Optional parameters. */
export interface ZonesGetOptionalParams extends coreClient.OperationOptions {}

/** Contains response data for the get operation. */
export type ZonesGetResponse = Zone;

/** Optional parameters. */
export interface ZonesListByResourceGroupOptionalParams
  extends coreClient.OperationOptions {
  /** The maximum number of record sets to return. If not specified, returns up to 100 record sets. */
  top?: number;
}

/** Contains response data for the listByResourceGroup operation. */
export type ZonesListByResourceGroupResponse = ZoneListResult;

/** Optional parameters. */
export interface ZonesListOptionalParams extends coreClient.OperationOptions {
  /** The maximum number of DNS zones to return. If not specified, returns up to 100 zones. */
  top?: number;
}

/** Contains response data for the list operation. */
export type ZonesListResponse = ZoneListResult;

/** Optional parameters. */
export interface ZonesListByResourceGroupNextOptionalParams
  extends coreClient.OperationOptions {
  /** The maximum number of record sets to return. If not specified, returns up to 100 record sets. */
  top?: number;
}

/** Contains response data for the listByResourceGroupNext operation. */
export type ZonesListByResourceGroupNextResponse = ZoneListResult;

/** Optional parameters. */
export interface ZonesListNextOptionalParams
  extends coreClient.OperationOptions {
  /** The maximum number of DNS zones to return. If not specified, returns up to 100 zones. */
  top?: number;
}

/** Contains response data for the listNext operation. */
export type ZonesListNextResponse = ZoneListResult;

/** Optional parameters. */
export interface DnsManagementClientOptionalParams
  extends coreClient.ServiceClientOptions {
  /** server parameter */
  $host?: string;
  /** Api Version */
  apiVersion?: string;
  /** Overrides client endpoint. */
  endpoint?: string;
}
