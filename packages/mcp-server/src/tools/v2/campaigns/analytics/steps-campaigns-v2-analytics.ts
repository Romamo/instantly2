// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { Tool } from '@modelcontextprotocol/sdk/types.js';
import type { Metadata } from '../../../';
import Instantly2 from 'instantly2';

export const metadata: Metadata = {
  resource: 'v2.campaigns.analytics',
  operation: 'read',
  tags: [],
};

export const tool: Tool = {
  name: 'steps_campaigns_v2_analytics',
  description: 'Get campaign steps analytics',
  inputSchema: {
    type: 'object',
    properties: {
      campaign_id: {
        type: 'string',
        description: 'Campaign ID (optional). Leave this field empty to get the analytics for all campaigns',
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

export const handler = (client: Instantly2, args: Record<string, unknown> | undefined) => {
  const body = args as any;
  return client.v2.campaigns.analytics.steps(body);
};

export default { metadata, tool, handler };
