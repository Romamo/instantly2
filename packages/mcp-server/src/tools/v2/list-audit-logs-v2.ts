// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

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
    'Requires one of the following scopes: `audit_logs:read`, `audit_logs:all`, `all:read`, `all:all`',
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
    },
  },
};

export const handler = (client: Instantly2, args: Record<string, unknown> | undefined) => {
  const body = args as any;
  return client.v2.listAuditLogs(body);
};

export default { metadata, tool, handler };
