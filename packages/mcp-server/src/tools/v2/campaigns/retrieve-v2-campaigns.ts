// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { Metadata, asTextContentResult } from 'instantly2-mcp/tools/types';

import { Tool } from '@modelcontextprotocol/sdk/types.js';
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
    "When using this tool, always use the `jq_filter` parameter to reduce the response size and improve performance.\n\nOnly omit if you're sure you don't need the data.\n\nRequires one of the following scopes: `campaigns:read`, `campaigns:all`, `all:read`, `all:all`",
  inputSchema: {
    type: 'object',
    properties: {
      id: {
        type: 'string',
      },
    },
  },
};

export const handler = async (client: Instantly2, args: Record<string, unknown> | undefined) => {
  const { id, ...body } = args as any;
  return asTextContentResult(await client.v2.campaigns.retrieve(id));
};

export default { metadata, tool, handler };
