// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { Metadata, asTextContentResult } from 'instantly2-mcp/tools/types';

import { Tool } from '@modelcontextprotocol/sdk/types.js';
import Instantly2 from 'instantly2';

export const metadata: Metadata = {
  resource: 'v2.subsequences',
  operation: 'read',
  tags: [],
  httpMethod: 'get',
  httpPath: '/api/v2/subsequences',
  operationId: 'listCampaignSubsequence',
};

export const tool: Tool = {
  name: 'list_v2_subsequences',
  description:
    "When using this tool, always use the `jq_filter` parameter to reduce the response size and improve performance.\n\nOnly omit if you're sure you don't need the data.\n\nRequires one of the following scopes: `subsequences:read`, `subsequences:all`, `all:read`, `all:all`",
  inputSchema: {
    type: 'object',
    properties: {
      parent_campaign: {
        type: 'string',
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
        description:
          'The ID of the last item in the previous page - used for pagination. You can use the value of the `next_starting_after` field from the previous response.',
      },
    },
    required: ['parent_campaign'],
  },
};

export const handler = async (client: Instantly2, args: Record<string, unknown> | undefined) => {
  const body = args as any;
  return asTextContentResult(await client.v2.subsequences.list(body));
};

export default { metadata, tool, handler };
