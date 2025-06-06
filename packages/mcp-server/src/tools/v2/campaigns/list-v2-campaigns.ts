// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { asTextContentResult } from 'instantly2-mcp/tools/types';

import { Tool } from '@modelcontextprotocol/sdk/types.js';
import type { Metadata } from '../../';
import Instantly2 from 'instantly2';

export const metadata: Metadata = {
  resource: 'v2.campaigns',
  operation: 'read',
  tags: [],
  httpMethod: 'get',
  httpPath: '/api/v2/campaigns',
  operationId: 'listCampaign',
};

export const tool: Tool = {
  name: 'list_v2_campaigns',
  description:
    'Requires one of the following scopes: `campaigns:read`, `campaigns:all`, `all:read`, `all:all`',
  inputSchema: {
    type: 'object',
    properties: {
      limit: {
        type: 'integer',
        description: 'The number of items to return',
      },
      search: {
        type: 'string',
        description: 'Search by campaign name',
      },
      starting_after: {
        type: 'string',
        description:
          'The ID of the last item in the previous page - used for pagination. You can use the value of the `next_starting_after` field from the previous response.',
      },
      tag_ids: {
        type: 'string',
        description:
          'Filter campaigns by tag ids. Returns campaigns that have any of the specified tags assigned. You can specify multiple tag ids by separating them with a comma.',
      },
    },
  },
};

export const handler = async (client: Instantly2, args: Record<string, unknown> | undefined) => {
  const body = args as any;
  return asTextContentResult(await client.v2.campaigns.list(body));
};

export default { metadata, tool, handler };
