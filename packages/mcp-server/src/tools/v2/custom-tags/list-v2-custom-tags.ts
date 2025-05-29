// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { Tool } from '@modelcontextprotocol/sdk/types.js';
import type { Metadata } from '../../';
import Instantly2 from 'instantly2';

export const metadata: Metadata = {
  resource: 'v2.custom_tags',
  operation: 'read',
  tags: [],
  httpMethod: 'get',
  httpPath: '/api/v2/custom-tags',
  operationId: 'listCustomTag',
};

export const tool: Tool = {
  name: 'list_v2_custom_tags',
  description:
    'Requires one of the following scopes: `custom_tags:read`, `custom_tags:all`, `all:read`, `all:all`',
  inputSchema: {
    type: 'object',
    properties: {
      limit: {
        type: 'integer',
        description: 'The number of items to return',
      },
      resource_ids: {
        type: 'string',
      },
      search: {
        type: 'string',
      },
      starting_after: {
        type: 'string',
        description:
          'The ID of the last item in the previous page - used for pagination. You can use the value of the `next_starting_after` field from the previous response.',
      },
      tag_ids: {
        type: 'string',
      },
    },
  },
};

export const handler = (client: Instantly2, args: Record<string, unknown> | undefined) => {
  const body = args as any;
  return client.v2.customTags.list(body);
};

export default { metadata, tool, handler };
