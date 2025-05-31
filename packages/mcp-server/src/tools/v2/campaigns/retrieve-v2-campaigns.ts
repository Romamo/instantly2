// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { Tool } from '@modelcontextprotocol/sdk/types.js';
import type { Metadata } from '../../';
import Instantly2 from 'instantly2';

export const metadata: Metadata = {
  resource: 'v2.campaigns',
  operation: 'read',
  tags: [],
  httpMethod: 'get',
  httpPath: '/api/v2/campaigns/{id}',
  operationId: 'getCampaign',
};

export const tool: Tool = {
  name: 'retrieve_v2_campaigns',
  description:
    'Requires one of the following scopes: `campaigns:read`, `campaigns:all`, `all:read`, `all:all`',
  inputSchema: {
    type: 'object',
    properties: {
      id: {
        type: 'string',
      },
    },
  },
};

export const handler = (client: Instantly2, args: Record<string, unknown> | undefined) => {
  const { id, ...body } = args as any;
  return client.v2.campaigns.retrieve(id);
};

export default { metadata, tool, handler };
