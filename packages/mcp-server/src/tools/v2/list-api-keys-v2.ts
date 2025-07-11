// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { maybeFilter } from 'instantly2-mcp/filtering';
import { asTextContentResult } from 'instantly2-mcp/tools/types';

import { Tool } from '@modelcontextprotocol/sdk/types.js';
import type { Metadata } from '../';
import Instantly2 from 'instantly2';

export const metadata: Metadata = {
  resource: 'v2',
  operation: 'read',
  tags: [],
  httpMethod: 'get',
  httpPath: '/api/v2/api-keys',
  operationId: 'listAPIKey',
};

export const tool: Tool = {
  name: 'list_api_keys_v2',
  description:
    "When using this tool, always use the `jq_filter` parameter to reduce the response size and improve performance.\n\nOnly omit if you're sure you don't need the data.\n\nRequires one of the following scopes: `api_keys:read`, `api_keys:all`, `all:read`, `all:all`\n\n# Response Schema\n```json\n{\n  type: 'object',\n  properties: {\n    items: {\n      type: 'array',\n      items: {\n        $ref: '#/$defs/api_key'\n      }\n    },\n    next_starting_after: {\n      type: 'string',\n      description: 'The filter for getting the next items after this one, this could either be a UUID, a MongoDB ID, a timestamp, on an email depending on the specific API'\n    }\n  },\n  required: [    'items'\n  ],\n  $defs: {\n    api_key: {\n      type: 'object',\n      title: 'API Key',\n      description: 'API Key',\n      properties: {\n        id: {\n          type: 'string'\n        },\n        key: {\n          type: 'string'\n        },\n        name: {\n          type: 'string'\n        },\n        organization_id: {\n          type: 'string'\n        },\n        scopes: {\n          type: 'array',\n          items: {\n            type: 'string',\n            enum: [              'all:all',\n              'all:create',\n              'all:read',\n              'all:update',\n              'all:delete',\n              'ai_agents:all',\n              'ai_agents:create',\n              'ai_agents:read',\n              'ai_agents:update',\n              'ai_agents:delete',\n              'api_keys:all',\n              'api_keys:create',\n              'api_keys:read',\n              'api_keys:update',\n              'api_keys:delete',\n              'audit_logs:all',\n              'audit_logs:create',\n              'audit_logs:read',\n              'audit_logs:update',\n              'audit_logs:delete',\n              'account_campaign_mappings:all',\n              'account_campaign_mappings:create',\n              'account_campaign_mappings:read',\n              'account_campaign_mappings:update',\n              'account_campaign_mappings:delete',\n              'campaigns:all',\n              'campaigns:create',\n              'campaigns:read',\n              'campaigns:update',\n              'campaigns:delete',\n              'inbox_placement_tests:all',\n              'inbox_placement_tests:create',\n              'inbox_placement_tests:read',\n              'inbox_placement_tests:update',\n              'inbox_placement_tests:delete',\n              'inbox_placement_analytics:all',\n              'inbox_placement_analytics:create',\n              'inbox_placement_analytics:read',\n              'inbox_placement_analytics:update',\n              'inbox_placement_analytics:delete',\n              'inbox_placement_reports:all',\n              'inbox_placement_reports:create',\n              'inbox_placement_reports:read',\n              'inbox_placement_reports:update',\n              'inbox_placement_reports:delete',\n              'lead_lists:all',\n              'lead_lists:create',\n              'lead_lists:read',\n              'lead_lists:update',\n              'lead_lists:delete',\n              'leads:all',\n              'leads:create',\n              'leads:read',\n              'leads:update',\n              'leads:delete',\n              'background-jobs:all',\n              'background-jobs:create',\n              'background-jobs:read',\n              'background-jobs:update',\n              'background-jobs:delete',\n              'custom_tags:all',\n              'custom_tags:create',\n              'custom_tags:read',\n              'custom_tags:update',\n              'custom_tags:delete',\n              'accounts:all',\n              'accounts:create',\n              'accounts:read',\n              'accounts:update',\n              'accounts:delete',\n              'block_list_entries:all',\n              'block_list_entries:create',\n              'block_list_entries:read',\n              'block_list_entries:update',\n              'block_list_entries:delete',\n              'lead-labels:all',\n              'lead-labels:create',\n              'lead-labels:read',\n              'lead-labels:update',\n              'lead-labels:delete',\n              'email_verifications:all',\n              'email_verifications:create',\n              'email_verifications:read',\n              'emails:all',\n              'emails:create',\n              'emails:read',\n              'emails:update',\n              'emails:delete',\n              'workspaces:all',\n              'workspaces:create',\n              'workspaces:read',\n              'workspaces:update',\n              'workspaces:delete',\n              'workspace_group_members:all',\n              'workspace_group_members:create',\n              'workspace_group_members:read',\n              'workspace_group_members:update',\n              'workspace_group_members:delete',\n              'workspace_members:all',\n              'workspace_members:create',\n              'workspace_members:read',\n              'workspace_members:update',\n              'workspace_members:delete',\n              'subsequences:all',\n              'subsequences:create',\n              'subsequences:read',\n              'subsequences:update',\n              'subsequences:delete',\n              'security_tokens:all',\n              'security_tokens:create',\n              'security_tokens:read',\n              'security_tokens:update',\n              'security_tokens:delete'\n            ]\n          }\n        },\n        timestamp_created: {\n          type: 'string',\n          format: 'date-time'\n        },\n        timestamp_updated: {\n          type: 'string',\n          format: 'date-time'\n        }\n      },\n      required: [        'id',\n        'key',\n        'name',\n        'organization_id',\n        'scopes',\n        'timestamp_created',\n        'timestamp_updated'\n      ]\n    }\n  }\n}\n```",
  inputSchema: {
    type: 'object',
    properties: {
      limit: {
        type: 'integer',
        description: 'The number of items to return',
      },
      starting_after: {
        type: 'string',
        description:
          'The ID of the last item in the previous page - used for pagination. You can use the value of the `next_starting_after` field from the previous response.',
      },
      jq_filter: {
        type: 'string',
        title: 'jq Filter',
        description:
          'A jq filter to apply to the response to include certain fields. Consult the output schema in the tool description to see the fields that are available.\n\nFor example: to include only the `name` field in every object of a results array, you can provide ".results[].name".\n\nFor more information, see the [jq documentation](https://jqlang.org/manual/).',
      },
    },
  },
};

export const handler = async (client: Instantly2, args: Record<string, unknown> | undefined) => {
  const body = args as any;
  return asTextContentResult(await maybeFilter(args, await client.v2.listAPIKeys(body)));
};

export default { metadata, tool, handler };
