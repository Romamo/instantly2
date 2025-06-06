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
  httpPath: '/api/v2/campaigns/analytics',
  operationId: 'getCampaignAnalytics',
};

export const tool: Tool = {
  name: 'retrieve_campaigns_v2_analytics',
  description:
    'Get analytics for one or multiple campaigns. Specify the `id` field to get the analytics for a single campaign, or leave it empty to get the analytics for all campaigns',
  inputSchema: {
    type: 'object',
    properties: {
      id: {
        type: 'string',
        description:
          'A campaign ID to get the analytics for. Leave this field empty to get the analytics for all campaigns',
      },
      end_date: {
        type: 'string',
        description: 'End date',
      },
      exclude_total_leads_count: {
        type: 'boolean',
        description:
          'Exclude the total leads from the result. Setting this to true will considerably decrease the response time',
      },
      ids: {
        type: 'array',
        items: {
          type: 'string',
          description:
            'A list of campaign IDs to get the analytics for. Leave this field empty to get the analytics for all campaigns. You can specify multiple IDs by adding the same parameter multiple times, for instance: `/campaigns/analytics?ids=123&ids=456`',
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
  return asTextContentResult(await client.v2.campaigns.analytics.retrieve(body));
};

export default { metadata, tool, handler };
