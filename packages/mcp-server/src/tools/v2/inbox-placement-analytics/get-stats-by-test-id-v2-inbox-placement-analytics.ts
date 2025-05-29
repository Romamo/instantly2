// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { Tool } from '@modelcontextprotocol/sdk/types.js';
import type { Metadata } from '../../';
import Instantly2 from 'instantly2';

export const metadata: Metadata = {
  resource: 'v2.inbox_placement_analytics',
  operation: 'write',
  tags: [],
  httpMethod: 'post',
  httpPath: '/api/v2/inbox-placement-analytics/stats-by-test-id',
  operationId: 'getInboxPlacementAnalyticsStatsByTestId',
};

export const tool: Tool = {
  name: 'get_stats_by_test_id_v2_inbox_placement_analytics',
  description:
    'Provides aggregated inbox, spam and category counts for specified test IDs\n\n\nRequires one of the following scopes: `inbox_placement_analytics:read`, `inbox_placement_analytics:all`, `all:read`, `all:all`',
  inputSchema: {
    type: 'object',
    properties: {
      test_ids: {
        type: 'array',
        items: {
          type: 'string',
        },
      },
      date_from: {
        type: 'string',
      },
      date_to: {
        type: 'string',
      },
      recipient_esp: {
        type: 'array',
        items: {
          type: 'string',
          enum: [1, 2, 12, 13],
        },
      },
      recipient_geo: {
        type: 'array',
        items: {
          type: 'string',
          enum: [1, 2, 3, 4],
        },
      },
      recipient_type: {
        type: 'array',
        items: {
          type: 'string',
          enum: [1, 2],
        },
      },
      sender_email: {
        type: 'string',
      },
    },
  },
};

export const handler = (client: Instantly2, args: Record<string, unknown> | undefined) => {
  const body = args as any;
  return client.v2.inboxPlacementAnalytics.getStatsByTestID(body);
};

export default { metadata, tool, handler };
