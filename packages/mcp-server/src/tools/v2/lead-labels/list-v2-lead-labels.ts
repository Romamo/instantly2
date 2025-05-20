// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { Tool } from '@modelcontextprotocol/sdk/types.js';
import type { Metadata } from '../../';
import Instantly2 from 'instantly2';

export const metadata: Metadata = {
  resource: 'v2.lead_labels',
  operation: 'read',
  tags: [],
};

export const tool: Tool = {
  name: 'list_v2_lead_labels',
  description:
    'Requires one of the following scopes: `lead-labels:read`, `lead-labels:all`, `all:read`, `all:all`',
  inputSchema: {
    type: 'object',
    properties: {
      interest_status: {
        type: 'string',
        enum: ['positive', 'neutral', 'negative'],
      },
      limit: {
        type: 'integer',
        description: 'The number of items to return',
      },
      search: {
        type: 'string',
      },
      starting_after: {
        type: 'string',
      },
    },
  },
};

export const handler = (client: Instantly2, args: Record<string, unknown> | undefined) => {
  const body = args as any;
  return client.v2.leadLabels.list(body);
};

export default { metadata, tool, handler };
