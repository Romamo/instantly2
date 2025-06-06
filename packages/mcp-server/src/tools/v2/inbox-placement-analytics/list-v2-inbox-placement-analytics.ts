// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { asTextContentResult } from 'instantly2-mcp/tools/types';

import { Tool } from '@modelcontextprotocol/sdk/types.js';
import type { Metadata } from '../../';
import Instantly2 from 'instantly2';

export const metadata: Metadata = {
  resource: 'v2.inbox_placement_analytics',
  operation: 'read',
  tags: [],
  httpMethod: 'get',
  httpPath: '/api/v2/inbox-placement-analytics',
  operationId: 'listInboxPlacementAnalytics',
};

export const tool: Tool = {
  name: 'list_v2_inbox_placement_analytics',
  description:
    'Requires one of the following scopes: `inbox_placement_analytics:read`, `inbox_placement_analytics:all`, `all:read`, `all:all`',
  inputSchema: {
    type: 'object',
    properties: {
      test_id: {
        type: 'string',
      },
      date_from: {
        type: 'string',
      },
      date_to: {
        type: 'string',
      },
      limit: {
        type: 'integer',
        description: 'The number of items to return',
      },
      recipient_esp: {
        type: 'string',
        description: 'A comma-separated list of recipient ESP values.',
      },
      recipient_geo: {
        type: 'string',
        description: 'A comma-separated list of recipient geo values.',
      },
      recipient_type: {
        type: 'string',
        description: 'A comma-separated list of recipient type values.',
      },
      sender_email: {
        type: 'string',
      },
      starting_after: {
        type: 'string',
        description:
          'The ID of the last item in the previous page - used for pagination. You can use the value of the `next_starting_after` field from the previous response.',
      },
    },
  },
};

export const handler = async (client: Instantly2, args: Record<string, unknown> | undefined) => {
  const body = args as any;
  return asTextContentResult(await client.v2.inboxPlacementAnalytics.list(body));
};

export default { metadata, tool, handler };
