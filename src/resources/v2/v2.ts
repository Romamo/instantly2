// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../core/resource';
import * as APIKeysAPI from './api-keys';
import { APIKey, APIKeyDeleteParams, APIKeys } from './api-keys';
import * as BackgroundJobsAPI from './background-jobs';
import { BackgroundJob, BackgroundJobs } from './background-jobs';
import * as BlockListsEntriesAPI from './block-lists-entries';
import {
  BlockListsEntries,
  BlockListsEntryCreateParams,
  BlockListsEntryDeleteParams,
  BlockListsEntryListParams,
  BlockListsEntryListResponse,
  BlockListsEntryUpdateParams,
  BlockedEntry,
} from './block-lists-entries';
import * as CustomTagsAPI from './custom-tags';
import {
  CustomTag,
  CustomTagCreateParams,
  CustomTagDeleteParams,
  CustomTagListParams,
  CustomTagListResponse,
  CustomTagToggleResourceParams,
  CustomTagToggleResourceResponse,
  CustomTagUpdateParams,
  CustomTags,
} from './custom-tags';
import * as EmailVerificationAPI from './email-verification';
import { EmailVerification, EmailVerificationCreateParams, Verification } from './email-verification';
import * as InboxPlacementAnalyticsAPI from './inbox-placement-analytics';
import {
  Analytics,
  InboxPlacementAnalyticGetDeliverabilityInsightsParams,
  InboxPlacementAnalyticGetDeliverabilityInsightsResponse,
  InboxPlacementAnalyticGetStatsByDateParams,
  InboxPlacementAnalyticGetStatsByDateResponse,
  InboxPlacementAnalyticGetStatsByTestIDParams,
  InboxPlacementAnalyticGetStatsByTestIDResponse,
  InboxPlacementAnalyticListParams,
  InboxPlacementAnalyticListResponse,
  InboxPlacementAnalytics,
} from './inbox-placement-analytics';
import * as InboxPlacementReportsAPI from './inbox-placement-reports';
import {
  InboxPlacementReportListParams,
  InboxPlacementReportListResponse,
  InboxPlacementReports,
  Report,
} from './inbox-placement-reports';
import * as InboxPlacementTestsAPI from './inbox-placement-tests';
import {
  InboxPlacementTestCreateParams,
  InboxPlacementTestDeleteParams,
  InboxPlacementTestGetEspOptionsResponse,
  InboxPlacementTestListParams,
  InboxPlacementTestListResponse,
  InboxPlacementTestRetrieveParams,
  InboxPlacementTestRetrieveResponse,
  InboxPlacementTestUpdateParams,
  InboxPlacementTests,
  PlacementTest,
} from './inbox-placement-tests';
import * as LeadLabelsAPI from './lead-labels';
import {
  LeadLabel,
  LeadLabelCreateParams,
  LeadLabelDeleteParams,
  LeadLabelListParams,
  LeadLabelListResponse,
  LeadLabelUpdateParams,
  LeadLabels,
} from './lead-labels';
import * as LeadListsAPI from './lead-lists';
import {
  LeadList,
  LeadListCreateParams,
  LeadListDeleteParams,
  LeadListListParams,
  LeadListListResponse,
  LeadListUpdateParams,
  LeadLists,
} from './lead-lists';
import * as SubsequencesAPI from './subsequences';
import {
  Subsequence,
  SubsequenceCreateParams,
  SubsequenceDeleteParams,
  SubsequenceDuplicateParams,
  SubsequenceListParams,
  SubsequenceListResponse,
  SubsequenceUpdateParams,
  Subsequences,
} from './subsequences';
import * as WorkspaceGroupMembersAPI from './workspace-group-members';
import {
  GroupMember,
  WorkspaceGroupMemberCreateParams,
  WorkspaceGroupMemberDeleteParams,
  WorkspaceGroupMemberGetAdminResponse,
  WorkspaceGroupMemberListParams,
  WorkspaceGroupMemberListResponse,
  WorkspaceGroupMembers,
} from './workspace-group-members';
import * as WorkspaceMembersAPI from './workspace-members';
import {
  WorkspaceMember,
  WorkspaceMemberCreateParams,
  WorkspaceMemberDeleteParams,
  WorkspaceMemberListParams,
  WorkspaceMemberListResponse,
  WorkspaceMemberUpdateParams,
  WorkspaceMembers,
} from './workspace-members';
import * as AccountsAPI from './accounts/accounts';
import {
  AccountCreateParams,
  AccountDeleteParams,
  AccountListParams,
  AccountListResponse,
  AccountUpdateParams,
  AccountWarmupAnalyticsParams,
  AccountWarmupAnalyticsResponse,
  Accounts,
  EmailAccount,
} from './accounts/accounts';
import * as CampaignsAPI from './campaigns/campaigns';
import {
  Campaign,
  CampaignCreateParams,
  CampaignDeleteParams,
  CampaignListParams,
  CampaignListResponse,
  CampaignShareResponse,
  CampaignUpdateParams,
  Campaigns,
} from './campaigns/campaigns';
import * as EmailsAPI from './emails/emails';
import {
  CampaignEmail,
  EmailDeleteParams,
  EmailListParams,
  EmailListResponse,
  EmailReplyParams,
  EmailUpdateParams,
  Emails,
} from './emails/emails';
import * as LeadsAPI from './leads/leads';
import {
  Lead,
  LeadBulkAssignParams,
  LeadBulkAssignResponse,
  LeadCreateParams,
  LeadDeleteParams,
  LeadExportParams,
  LeadListParams,
  LeadListResponse,
  LeadMergeParams,
  LeadMoveParams,
  LeadUpdateInterestStatusParams,
  LeadUpdateInterestStatusResponse,
  LeadUpdateParams,
  Leads,
} from './leads/leads';
import * as WorkspacesAPI from './workspaces/workspaces';
import { Workspaces } from './workspaces/workspaces';
import { APIPromise } from '../../core/api-promise';
import { RequestOptions } from '../../internal/request-options';
import { path } from '../../internal/utils/path';

export class V2 extends APIResource {
  accounts: AccountsAPI.Accounts = new AccountsAPI.Accounts(this._client);
  apiKeys: APIKeysAPI.APIKeys = new APIKeysAPI.APIKeys(this._client);
  backgroundJobs: BackgroundJobsAPI.BackgroundJobs = new BackgroundJobsAPI.BackgroundJobs(this._client);
  blockListsEntries: BlockListsEntriesAPI.BlockListsEntries = new BlockListsEntriesAPI.BlockListsEntries(
    this._client,
  );
  campaigns: CampaignsAPI.Campaigns = new CampaignsAPI.Campaigns(this._client);
  customTags: CustomTagsAPI.CustomTags = new CustomTagsAPI.CustomTags(this._client);
  emailVerification: EmailVerificationAPI.EmailVerification = new EmailVerificationAPI.EmailVerification(
    this._client,
  );
  emails: EmailsAPI.Emails = new EmailsAPI.Emails(this._client);
  inboxPlacementAnalytics: InboxPlacementAnalyticsAPI.InboxPlacementAnalytics =
    new InboxPlacementAnalyticsAPI.InboxPlacementAnalytics(this._client);
  inboxPlacementReports: InboxPlacementReportsAPI.InboxPlacementReports =
    new InboxPlacementReportsAPI.InboxPlacementReports(this._client);
  inboxPlacementTests: InboxPlacementTestsAPI.InboxPlacementTests =
    new InboxPlacementTestsAPI.InboxPlacementTests(this._client);
  leadLabels: LeadLabelsAPI.LeadLabels = new LeadLabelsAPI.LeadLabels(this._client);
  leadLists: LeadListsAPI.LeadLists = new LeadListsAPI.LeadLists(this._client);
  leads: LeadsAPI.Leads = new LeadsAPI.Leads(this._client);
  subsequences: SubsequencesAPI.Subsequences = new SubsequencesAPI.Subsequences(this._client);
  workspaceGroupMembers: WorkspaceGroupMembersAPI.WorkspaceGroupMembers =
    new WorkspaceGroupMembersAPI.WorkspaceGroupMembers(this._client);
  workspaceMembers: WorkspaceMembersAPI.WorkspaceMembers = new WorkspaceMembersAPI.WorkspaceMembers(
    this._client,
  );
  workspaces: WorkspacesAPI.Workspaces = new WorkspacesAPI.Workspaces(this._client);

  /**
   * Requires one of the following scopes: `api_keys:create`, `api_keys:all`,
   * `all:create`, `all:all`
   *
   * @example
   * ```ts
   * const apiKey = await client.v2.createAPIKey({
   *   name: 'My API Key',
   *   scopes: ['campaigns:create'],
   * });
   * ```
   */
  createAPIKey(body: V2CreateAPIKeyParams, options?: RequestOptions): APIPromise<APIKeysAPI.APIKey> {
    return this._client.post('/api/v2/api-keys', { body, ...options });
  }

  /**
   * Requires one of the following scopes: `account_campaign_mappings:read`,
   * `account_campaign_mappings:all`, `all:read`, `all:all`
   *
   * @example
   * ```ts
   * const response = await client.v2.getAccountCampaignMappings(
   *   'user@example.com',
   * );
   * ```
   */
  getAccountCampaignMappings(
    email: string,
    query: V2GetAccountCampaignMappingsParams | null | undefined = {},
    options?: RequestOptions,
  ): APIPromise<V2GetAccountCampaignMappingsResponse> {
    return this._client.get(path`/api/v2/account-campaign-mappings/${email}`, { query, ...options });
  }

  /**
   * Requires one of the following scopes: `api_keys:read`, `api_keys:all`,
   * `all:read`, `all:all`
   *
   * @example
   * ```ts
   * const response = await client.v2.listAPIKeys();
   * ```
   */
  listAPIKeys(
    query: V2ListAPIKeysParams | null | undefined = {},
    options?: RequestOptions,
  ): APIPromise<V2ListAPIKeysResponse> {
    return this._client.get('/api/v2/api-keys', { query, ...options });
  }

  /**
   * Requires one of the following scopes: `audit_logs:read`, `audit_logs:all`,
   * `all:read`, `all:all`
   *
   * @example
   * ```ts
   * const response = await client.v2.listAuditLogs();
   * ```
   */
  listAuditLogs(
    query: V2ListAuditLogsParams | null | undefined = {},
    options?: RequestOptions,
  ): APIPromise<V2ListAuditLogsResponse> {
    return this._client.get('/api/v2/audit-logs', { query, ...options });
  }

  /**
   * Requires one of the following scopes: `background-jobs:read`,
   * `background-jobs:all`, `all:read`, `all:all`
   *
   * @example
   * ```ts
   * const response = await client.v2.listBackgroundJobs();
   * ```
   */
  listBackgroundJobs(
    query: V2ListBackgroundJobsParams | null | undefined = {},
    options?: RequestOptions,
  ): APIPromise<V2ListBackgroundJobsResponse> {
    return this._client.get('/api/v2/background-jobs', { query, ...options });
  }
}

export interface V2GetAccountCampaignMappingsResponse {
  items: Array<V2GetAccountCampaignMappingsResponse.Item>;

  /**
   * The filter for getting the next items after this one, this could either be a
   * UUID, a MongoDB ID, a timestamp, on an email depending on the specific API
   */
  next_starting_after?: string;
}

export namespace V2GetAccountCampaignMappingsResponse {
  /**
   * Account Campaign Mapping
   */
  export interface Item {
    campaign_id: string;

    campaign_name: string;

    /**
     * Timestamp when the campaign was created
     */
    timestamp_created: string;

    /**
     * Campaign Status
     */
    status?: -99 | -1 | -2 | 0 | 1 | 2 | 3 | 4;
  }
}

export interface V2ListAPIKeysResponse {
  items: Array<APIKeysAPI.APIKey>;

  /**
   * The filter for getting the next items after this one, this could either be a
   * UUID, a MongoDB ID, a timestamp, on an email depending on the specific API
   */
  next_starting_after?: string;
}

export interface V2ListAuditLogsResponse {
  items: Array<V2ListAuditLogsResponse.Item>;

  /**
   * The filter for getting the next items after this one, this could either be a
   * UUID, a MongoDB ID, a timestamp, on an email depending on the specific API
   */
  next_starting_after?: string;
}

export namespace V2ListAuditLogsResponse {
  /**
   * Audit log records for tracking system activities
   */
  export interface Item {
    id: string;

    /**
     * Type of activity performed
     */
    activity_type: 1 | 2 | 3 | 4 | 5 | 6 | 7 | 8 | 9 | 10 | 11 | 12;

    /**
     * Whether the activity was performed via API
     */
    from_api: boolean;

    /**
     * IP address from which the activity was performed
     */
    ip_address: string;

    /**
     * Organization ID associated with the activity
     */
    organization_id: string;

    /**
     * When the activity occurred
     */
    timestamp: string;

    /**
     * Number of items affected by the activity
     */
    affected_count?: number;

    /**
     * Metadata about the audit log
     */
    audit_metadata?: Record<string, unknown>;

    /**
     * Associated campaign ID if applicable
     */
    campaign_id?: string;

    /**
     * Associated list ID if applicable
     */
    list_id?: string;

    /**
     * Associated subsequence ID if applicable
     */
    subsequence_id?: string;

    /**
     * User agent of the client that performed the activity
     */
    user_agent?: string;

    /**
     * ID of the user who performed the activity
     */
    user_id?: string;

    /**
     * Name of the user who performed the activity
     */
    user_name?: string;
  }
}

export interface V2ListBackgroundJobsResponse {
  items: Array<BackgroundJobsAPI.BackgroundJob>;

  /**
   * The filter for getting the next items after this one, this could either be a
   * UUID, a MongoDB ID, a timestamp, on an email depending on the specific API
   */
  next_starting_after?: string;
}

export interface V2CreateAPIKeyParams {
  name: string;

  scopes: Array<
    | 'all:all'
    | 'all:create'
    | 'all:read'
    | 'all:update'
    | 'all:delete'
    | 'ai_agents:all'
    | 'ai_agents:create'
    | 'ai_agents:read'
    | 'ai_agents:update'
    | 'ai_agents:delete'
    | 'api_keys:all'
    | 'api_keys:create'
    | 'api_keys:read'
    | 'api_keys:update'
    | 'api_keys:delete'
    | 'audit_logs:all'
    | 'audit_logs:create'
    | 'audit_logs:read'
    | 'audit_logs:update'
    | 'audit_logs:delete'
    | 'account_campaign_mappings:all'
    | 'account_campaign_mappings:create'
    | 'account_campaign_mappings:read'
    | 'account_campaign_mappings:update'
    | 'account_campaign_mappings:delete'
    | 'campaigns:all'
    | 'campaigns:create'
    | 'campaigns:read'
    | 'campaigns:update'
    | 'campaigns:delete'
    | 'inbox_placement_tests:all'
    | 'inbox_placement_tests:create'
    | 'inbox_placement_tests:read'
    | 'inbox_placement_tests:update'
    | 'inbox_placement_tests:delete'
    | 'inbox_placement_analytics:all'
    | 'inbox_placement_analytics:create'
    | 'inbox_placement_analytics:read'
    | 'inbox_placement_analytics:update'
    | 'inbox_placement_analytics:delete'
    | 'inbox_placement_reports:all'
    | 'inbox_placement_reports:create'
    | 'inbox_placement_reports:read'
    | 'inbox_placement_reports:update'
    | 'inbox_placement_reports:delete'
    | 'lead_lists:all'
    | 'lead_lists:create'
    | 'lead_lists:read'
    | 'lead_lists:update'
    | 'lead_lists:delete'
    | 'leads:all'
    | 'leads:create'
    | 'leads:read'
    | 'leads:update'
    | 'leads:delete'
    | 'background-jobs:all'
    | 'background-jobs:create'
    | 'background-jobs:read'
    | 'background-jobs:update'
    | 'background-jobs:delete'
    | 'custom_tags:all'
    | 'custom_tags:create'
    | 'custom_tags:read'
    | 'custom_tags:update'
    | 'custom_tags:delete'
    | 'accounts:all'
    | 'accounts:create'
    | 'accounts:read'
    | 'accounts:update'
    | 'accounts:delete'
    | 'block_list_entries:all'
    | 'block_list_entries:create'
    | 'block_list_entries:read'
    | 'block_list_entries:update'
    | 'block_list_entries:delete'
    | 'lead-labels:all'
    | 'lead-labels:create'
    | 'lead-labels:read'
    | 'lead-labels:update'
    | 'lead-labels:delete'
    | 'email_verifications:all'
    | 'email_verifications:create'
    | 'email_verifications:read'
    | 'emails:all'
    | 'emails:create'
    | 'emails:read'
    | 'emails:update'
    | 'emails:delete'
    | 'workspaces:all'
    | 'workspaces:create'
    | 'workspaces:read'
    | 'workspaces:update'
    | 'workspaces:delete'
    | 'workspace_group_members:all'
    | 'workspace_group_members:create'
    | 'workspace_group_members:read'
    | 'workspace_group_members:update'
    | 'workspace_group_members:delete'
    | 'workspace_members:all'
    | 'workspace_members:create'
    | 'workspace_members:read'
    | 'workspace_members:update'
    | 'workspace_members:delete'
    | 'subsequences:all'
    | 'subsequences:create'
    | 'subsequences:read'
    | 'subsequences:update'
    | 'subsequences:delete'
    | 'security_tokens:all'
    | 'security_tokens:create'
    | 'security_tokens:read'
    | 'security_tokens:update'
    | 'security_tokens:delete'
  >;
}

export interface V2GetAccountCampaignMappingsParams {
  limit?: number;

  starting_after?: string;
}

export interface V2ListAPIKeysParams {
  /**
   * The number of items to return
   */
  limit?: number;

  /**
   * The ID of the last item in the previous page - used for pagination. You can use
   * the value of the `next_starting_after` field from the previous response.
   */
  starting_after?: string;
}

export interface V2ListAuditLogsParams {
  /**
   * Filter by activity type
   */
  activity_type?: number;

  /**
   * The number of items to return
   */
  limit?: number;

  /**
   * Search term to filter logs
   */
  search?: string;

  /**
   * The ID of the last item in the previous page - used for pagination. You can use
   * the value of the `next_starting_after` field from the previous response.
   */
  starting_after?: string;
}

export interface V2ListBackgroundJobsParams {
  /**
   * The ID of the entity. Multiple IDs can be provided as a comma-separated list
   */
  entity_id?: string;

  /**
   * The type of the entity
   */
  entity_type?: 'list' | 'campaign';

  /**
   * The ID of the job to be excluded from the response. Multiple IDs can be provided
   * as a comma-separated list
   */
  excluded_ids?: string;

  /**
   * The ID of the job. Multiple IDs can be provided as a comma-separated list
   */
  ids?: string;

  /**
   * The ID of the job to be included in the response. Multiple IDs can be provided
   * as a comma-separated list
   */
  included_ids?: string;

  /**
   * The number of items to return
   */
  limit?: number;

  /**
   * The column to sort the results by
   */
  sort_column?: 'created_at' | 'updated_at';

  /**
   * The order to sort the results by
   */
  sort_order?: 'asc' | 'desc';

  starting_after?: string;

  /**
   * The status of the job. Multiple statuses can be provided as a comma-separated
   * list. Valid statuses are: pending, in-progress, success, failed
   */
  status?: string;

  /**
   * The type of the job
   */
  type?: 'move-leads' | 'import-leads' | 'export-leads';
}

V2.Accounts = Accounts;
V2.APIKeys = APIKeys;
V2.BackgroundJobs = BackgroundJobs;
V2.BlockListsEntries = BlockListsEntries;
V2.Campaigns = Campaigns;
V2.CustomTags = CustomTags;
V2.EmailVerification = EmailVerification;
V2.Emails = Emails;
V2.InboxPlacementAnalytics = InboxPlacementAnalytics;
V2.InboxPlacementReports = InboxPlacementReports;
V2.InboxPlacementTests = InboxPlacementTests;
V2.LeadLabels = LeadLabels;
V2.LeadLists = LeadLists;
V2.Leads = Leads;
V2.Subsequences = Subsequences;
V2.WorkspaceGroupMembers = WorkspaceGroupMembers;
V2.WorkspaceMembers = WorkspaceMembers;
V2.Workspaces = Workspaces;

export declare namespace V2 {
  export {
    type V2GetAccountCampaignMappingsResponse as V2GetAccountCampaignMappingsResponse,
    type V2ListAPIKeysResponse as V2ListAPIKeysResponse,
    type V2ListAuditLogsResponse as V2ListAuditLogsResponse,
    type V2ListBackgroundJobsResponse as V2ListBackgroundJobsResponse,
    type V2CreateAPIKeyParams as V2CreateAPIKeyParams,
    type V2GetAccountCampaignMappingsParams as V2GetAccountCampaignMappingsParams,
    type V2ListAPIKeysParams as V2ListAPIKeysParams,
    type V2ListAuditLogsParams as V2ListAuditLogsParams,
    type V2ListBackgroundJobsParams as V2ListBackgroundJobsParams,
  };

  export {
    Accounts as Accounts,
    type EmailAccount as EmailAccount,
    type AccountListResponse as AccountListResponse,
    type AccountWarmupAnalyticsResponse as AccountWarmupAnalyticsResponse,
    type AccountCreateParams as AccountCreateParams,
    type AccountUpdateParams as AccountUpdateParams,
    type AccountListParams as AccountListParams,
    type AccountDeleteParams as AccountDeleteParams,
    type AccountWarmupAnalyticsParams as AccountWarmupAnalyticsParams,
  };

  export { APIKeys as APIKeys, type APIKey as APIKey, type APIKeyDeleteParams as APIKeyDeleteParams };

  export { BackgroundJobs as BackgroundJobs, type BackgroundJob as BackgroundJob };

  export {
    BlockListsEntries as BlockListsEntries,
    type BlockedEntry as BlockedEntry,
    type BlockListsEntryListResponse as BlockListsEntryListResponse,
    type BlockListsEntryCreateParams as BlockListsEntryCreateParams,
    type BlockListsEntryUpdateParams as BlockListsEntryUpdateParams,
    type BlockListsEntryListParams as BlockListsEntryListParams,
    type BlockListsEntryDeleteParams as BlockListsEntryDeleteParams,
  };

  export {
    Campaigns as Campaigns,
    type Campaign as Campaign,
    type CampaignListResponse as CampaignListResponse,
    type CampaignShareResponse as CampaignShareResponse,
    type CampaignCreateParams as CampaignCreateParams,
    type CampaignUpdateParams as CampaignUpdateParams,
    type CampaignListParams as CampaignListParams,
    type CampaignDeleteParams as CampaignDeleteParams,
  };

  export {
    CustomTags as CustomTags,
    type CustomTag as CustomTag,
    type CustomTagListResponse as CustomTagListResponse,
    type CustomTagToggleResourceResponse as CustomTagToggleResourceResponse,
    type CustomTagCreateParams as CustomTagCreateParams,
    type CustomTagUpdateParams as CustomTagUpdateParams,
    type CustomTagListParams as CustomTagListParams,
    type CustomTagDeleteParams as CustomTagDeleteParams,
    type CustomTagToggleResourceParams as CustomTagToggleResourceParams,
  };

  export {
    EmailVerification as EmailVerification,
    type Verification as Verification,
    type EmailVerificationCreateParams as EmailVerificationCreateParams,
  };

  export {
    Emails as Emails,
    type CampaignEmail as CampaignEmail,
    type EmailListResponse as EmailListResponse,
    type EmailUpdateParams as EmailUpdateParams,
    type EmailListParams as EmailListParams,
    type EmailDeleteParams as EmailDeleteParams,
    type EmailReplyParams as EmailReplyParams,
  };

  export {
    InboxPlacementAnalytics as InboxPlacementAnalytics,
    type Analytics as Analytics,
    type InboxPlacementAnalyticListResponse as InboxPlacementAnalyticListResponse,
    type InboxPlacementAnalyticGetDeliverabilityInsightsResponse as InboxPlacementAnalyticGetDeliverabilityInsightsResponse,
    type InboxPlacementAnalyticGetStatsByDateResponse as InboxPlacementAnalyticGetStatsByDateResponse,
    type InboxPlacementAnalyticGetStatsByTestIDResponse as InboxPlacementAnalyticGetStatsByTestIDResponse,
    type InboxPlacementAnalyticListParams as InboxPlacementAnalyticListParams,
    type InboxPlacementAnalyticGetDeliverabilityInsightsParams as InboxPlacementAnalyticGetDeliverabilityInsightsParams,
    type InboxPlacementAnalyticGetStatsByDateParams as InboxPlacementAnalyticGetStatsByDateParams,
    type InboxPlacementAnalyticGetStatsByTestIDParams as InboxPlacementAnalyticGetStatsByTestIDParams,
  };

  export {
    InboxPlacementReports as InboxPlacementReports,
    type Report as Report,
    type InboxPlacementReportListResponse as InboxPlacementReportListResponse,
    type InboxPlacementReportListParams as InboxPlacementReportListParams,
  };

  export {
    InboxPlacementTests as InboxPlacementTests,
    type PlacementTest as PlacementTest,
    type InboxPlacementTestRetrieveResponse as InboxPlacementTestRetrieveResponse,
    type InboxPlacementTestListResponse as InboxPlacementTestListResponse,
    type InboxPlacementTestGetEspOptionsResponse as InboxPlacementTestGetEspOptionsResponse,
    type InboxPlacementTestCreateParams as InboxPlacementTestCreateParams,
    type InboxPlacementTestRetrieveParams as InboxPlacementTestRetrieveParams,
    type InboxPlacementTestUpdateParams as InboxPlacementTestUpdateParams,
    type InboxPlacementTestListParams as InboxPlacementTestListParams,
    type InboxPlacementTestDeleteParams as InboxPlacementTestDeleteParams,
  };

  export {
    LeadLabels as LeadLabels,
    type LeadLabel as LeadLabel,
    type LeadLabelListResponse as LeadLabelListResponse,
    type LeadLabelCreateParams as LeadLabelCreateParams,
    type LeadLabelUpdateParams as LeadLabelUpdateParams,
    type LeadLabelListParams as LeadLabelListParams,
    type LeadLabelDeleteParams as LeadLabelDeleteParams,
  };

  export {
    LeadLists as LeadLists,
    type LeadList as LeadList,
    type LeadListListResponse as LeadListListResponse,
    type LeadListCreateParams as LeadListCreateParams,
    type LeadListUpdateParams as LeadListUpdateParams,
    type LeadListListParams as LeadListListParams,
    type LeadListDeleteParams as LeadListDeleteParams,
  };

  export {
    Leads as Leads,
    type Lead as Lead,
    type LeadListResponse as LeadListResponse,
    type LeadBulkAssignResponse as LeadBulkAssignResponse,
    type LeadUpdateInterestStatusResponse as LeadUpdateInterestStatusResponse,
    type LeadCreateParams as LeadCreateParams,
    type LeadUpdateParams as LeadUpdateParams,
    type LeadListParams as LeadListParams,
    type LeadDeleteParams as LeadDeleteParams,
    type LeadBulkAssignParams as LeadBulkAssignParams,
    type LeadExportParams as LeadExportParams,
    type LeadMergeParams as LeadMergeParams,
    type LeadMoveParams as LeadMoveParams,
    type LeadUpdateInterestStatusParams as LeadUpdateInterestStatusParams,
  };

  export {
    Subsequences as Subsequences,
    type Subsequence as Subsequence,
    type SubsequenceListResponse as SubsequenceListResponse,
    type SubsequenceCreateParams as SubsequenceCreateParams,
    type SubsequenceUpdateParams as SubsequenceUpdateParams,
    type SubsequenceListParams as SubsequenceListParams,
    type SubsequenceDeleteParams as SubsequenceDeleteParams,
    type SubsequenceDuplicateParams as SubsequenceDuplicateParams,
  };

  export {
    WorkspaceGroupMembers as WorkspaceGroupMembers,
    type GroupMember as GroupMember,
    type WorkspaceGroupMemberListResponse as WorkspaceGroupMemberListResponse,
    type WorkspaceGroupMemberGetAdminResponse as WorkspaceGroupMemberGetAdminResponse,
    type WorkspaceGroupMemberCreateParams as WorkspaceGroupMemberCreateParams,
    type WorkspaceGroupMemberListParams as WorkspaceGroupMemberListParams,
    type WorkspaceGroupMemberDeleteParams as WorkspaceGroupMemberDeleteParams,
  };

  export {
    WorkspaceMembers as WorkspaceMembers,
    type WorkspaceMember as WorkspaceMember,
    type WorkspaceMemberListResponse as WorkspaceMemberListResponse,
    type WorkspaceMemberCreateParams as WorkspaceMemberCreateParams,
    type WorkspaceMemberUpdateParams as WorkspaceMemberUpdateParams,
    type WorkspaceMemberListParams as WorkspaceMemberListParams,
    type WorkspaceMemberDeleteParams as WorkspaceMemberDeleteParams,
  };

  export { Workspaces as Workspaces };
}
