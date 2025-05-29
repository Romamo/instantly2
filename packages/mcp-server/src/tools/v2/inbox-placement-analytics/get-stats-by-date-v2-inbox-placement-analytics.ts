// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { Tool } from '@modelcontextprotocol/sdk/types.js';
import type { Metadata } from '../../';
import Instantly2 from 'instantly2';

export const metadata: Metadata = {
  resource: 'v2.inbox_placement_analytics',
  operation: 'write',
  tags: [],
  httpMethod: 'post',
  httpPath: '/api/v2/inbox-placement-analytics/stats-by-date',
  operationId: 'getInboxPlacementAnalyticsStatsByDate',
};

export const tool: Tool = {
  name: 'get_stats_by_date_v2_inbox_placement_analytics',
  description:
    'Provides a time series representing the distribution of emails sent to inbox, spam, or category folders for scheduled inbox placement tests.\n\n\nRequires one of the following scopes: `inbox_placement_analytics:read`, `inbox_placement_analytics:all`, `all:read`, `all:all`',
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
  return client.v2.inboxPlacementAnalytics.getStatsByDate(body);
};

export default { metadata, tool, handler };
