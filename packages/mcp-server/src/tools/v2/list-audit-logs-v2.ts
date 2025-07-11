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
  httpPath: '/api/v2/audit-logs',
  operationId: 'listAuditLog',
};

export const tool: Tool = {
  name: 'list_audit_logs_v2',
  description:
    "When using this tool, always use the `jq_filter` parameter to reduce the response size and improve performance.\n\nOnly omit if you're sure you don't need the data.\n\nRequires one of the following scopes: `audit_logs:read`, `audit_logs:all`, `all:read`, `all:all`\n\n# Response Schema\n```json\n{\n  type: 'object',\n  properties: {\n    items: {\n      type: 'array',\n      items: {\n        type: 'object',\n        title: 'Audit Log',\n        description: 'Audit log records for tracking system activities',\n        properties: {\n          id: {\n            type: 'string'\n          },\n          activity_type: {\n            type: 'string',\n            description: 'Type of activity performed',\n            enum: [              1,\n              2,\n              3,\n              4,\n              5,\n              6,\n              7,\n              8,\n              9,\n              10,\n              11,\n              12\n            ]\n          },\n          from_api: {\n            type: 'boolean',\n            description: 'Whether the activity was performed via API'\n          },\n          ip_address: {\n            type: 'string',\n            description: 'IP address from which the activity was performed'\n          },\n          organization_id: {\n            type: 'string',\n            description: 'Organization ID associated with the activity'\n          },\n          timestamp: {\n            type: 'string',\n            description: 'When the activity occurred',\n            format: 'date-time'\n          },\n          affected_count: {\n            type: 'number',\n            description: 'Number of items affected by the activity'\n          },\n          audit_metadata: {\n            type: 'object',\n            description: 'Metadata about the audit log'\n          },\n          campaign_id: {\n            type: 'string',\n            description: 'Associated campaign ID if applicable'\n          },\n          list_id: {\n            type: 'string',\n            description: 'Associated list ID if applicable'\n          },\n          subsequence_id: {\n            type: 'string',\n            description: 'Associated subsequence ID if applicable'\n          },\n          user_agent: {\n            type: 'string',\n            description: 'User agent of the client that performed the activity'\n          },\n          user_id: {\n            type: 'string',\n            description: 'ID of the user who performed the activity'\n          },\n          user_name: {\n            type: 'string',\n            description: 'Name of the user who performed the activity'\n          }\n        },\n        required: [          'id',\n          'activity_type',\n          'from_api',\n          'ip_address',\n          'organization_id',\n          'timestamp'\n        ]\n      }\n    },\n    next_starting_after: {\n      type: 'string',\n      description: 'The filter for getting the next items after this one, this could either be a UUID, a MongoDB ID, a timestamp, on an email depending on the specific API'\n    }\n  },\n  required: [    'items'\n  ]\n}\n```",
  inputSchema: {
    type: 'object',
    properties: {
      activity_type: {
        type: 'number',
        description: 'Filter by activity type',
      },
      limit: {
        type: 'integer',
        description: 'The number of items to return',
      },
      search: {
        type: 'string',
        description: 'Search term to filter logs',
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
  return asTextContentResult(await maybeFilter(args, await client.v2.listAuditLogs(body)));
};

export default { metadata, tool, handler };
