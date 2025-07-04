// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../core/resource';
import { APIPromise } from '../../core/api-promise';
import { RequestOptions } from '../../internal/request-options';
import { path } from '../../internal/utils/path';

export class APIKeys extends APIResource {
  /**
   * Requires one of the following scopes: `api_keys:delete`, `api_keys:all`,
   * `all:delete`, `all:all`
   *
   * @example
   * ```ts
   * const apiKey = await client.v2.apiKeys.delete(
   *   '0196ed60-9dcf-7419-95dc-b52596a5d19d',
   * );
   * ```
   */
  delete(
    id: string,
    params: APIKeyDeleteParams | null | undefined = undefined,
    options?: RequestOptions,
  ): APIPromise<APIKey> {
    const { body } = params ?? {};
    return this._client.delete(path`/api/v2/api-keys/${id}`, { body: body, ...options });
  }
}

/**
 * API Key
 */
export interface APIKey {
  id: string;

  key: string;

  name: string;

  organization_id: string;

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

  timestamp_created: string;

  timestamp_updated: string;
}

export interface APIKeyDeleteParams {
  body?: null;
}

export declare namespace APIKeys {
  export { type APIKey as APIKey, type APIKeyDeleteParams as APIKeyDeleteParams };
}
