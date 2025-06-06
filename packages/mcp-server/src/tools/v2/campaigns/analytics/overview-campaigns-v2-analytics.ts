// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { asTextContentResult } from 'instantly2-mcp/tools/types';

import { Tool } from '@modelcontextprotocol/sdk/types.js';
import type { Metadata } from '../../../';
import Instantly2 from 'instantly2';

export const metadata: Metadata = {
  resource: 'v2.campaigns.analytics',
  operation: 'read',
  tags: [],
  httpMethod: 'get',
  httpPath: '/api/v2/campaigns/analytics/overview',
  operationId: 'getCampaignAnalyticsOverview',
};

export const tool: Tool = {
  name: 'overview_campaigns_v2_analytics',
  description:
    'Get analytics overview for one or multiple campaigns. Specify the `id` field to get the analytics overview for a single campaign, or leave it empty to get the analytics overview for all campaigns',
  inputSchema: {
    type: 'object',
    properties: {
      id: {
        type: 'string',
        description:
          'A campaign ID to get the analytics overview for. Leave this field empty to get the analytics overview for all campaigns',
      },
      campaign_status: {
        type: 'string',
        description:
          'Filter by campaign status (only the analytics for the campaigns with the specified status will be returned)',
        enum: [-99, -1, -2, 0, 1, 2, 3, 4],
      },
      end_date: {
        type: 'string',
        description: 'End date',
      },
      ids: {
        type: 'array',
        items: {
          type: 'string',
          description:
            'A list of campaign IDs to get the analytics overview for. Leave this field empty to get the analytics overview for all campaigns. You can specify multiple IDs by adding the same parameter multiple times, for instance: `/campaigns/analytics/overview?ids=123&ids=456`',
        },
      },
      start_date: {
        type: 'string',
        description: 'Start date',
      },
    },
  },
};

export const handler = async (client: Instantly2, args: Record<string, unknown> | undefined) => {
  const body = args as any;
  return asTextContentResult(await client.v2.campaigns.analytics.overview(body));
};

export default { metadata, tool, handler };
