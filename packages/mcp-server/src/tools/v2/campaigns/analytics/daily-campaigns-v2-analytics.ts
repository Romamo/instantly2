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
  httpPath: '/api/v2/campaigns/analytics/daily',
  operationId: 'getDailyCampaignAnalytics',
};

export const tool: Tool = {
  name: 'daily_campaigns_v2_analytics',
  description: 'Get campaign daily analytics',
  inputSchema: {
    type: 'object',
    properties: {
      campaign_id: {
        type: 'string',
        description: 'Campaign ID (optional). Leave this field empty to get the analytics for all campaigns',
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
      start_date: {
        type: 'string',
        description: 'Start date',
      },
    },
  },
};

export const handler = async (client: Instantly2, args: Record<string, unknown> | undefined) => {
  const body = args as any;
  return asTextContentResult(await client.v2.campaigns.analytics.daily(body));
};

export default { metadata, tool, handler };
