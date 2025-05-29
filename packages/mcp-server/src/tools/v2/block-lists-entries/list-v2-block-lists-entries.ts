// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { Tool } from '@modelcontextprotocol/sdk/types.js';
import type { Metadata } from '../../';
import Instantly2 from 'instantly2';

export const metadata: Metadata = {
  resource: 'v2.block_lists_entries',
  operation: 'read',
  tags: [],
  httpMethod: 'get',
  httpPath: '/api/v2/block-lists-entries',
  operationId: 'listBlockListEntry',
};

export const tool: Tool = {
  name: 'list_v2_block_lists_entries',
  description:
    'Requires one of the following scopes: `block_list_entries:read`, `block_list_entries:all`, `all:read`, `all:all`',
  inputSchema: {
    type: 'object',
    properties: {
      domains_only: {
        type: 'boolean',
        description: 'Filter by domain',
      },
      limit: {
        type: 'integer',
        description: 'The number of items to return',
      },
      search: {
        type: 'string',
        description: 'Search by value',
      },
      starting_after: {
        type: 'string',
        description:
          'The ID of the last item in the previous page - used for pagination. You can use the value of the `next_starting_after` field from the previous response.',
      },
    },
  },
};

export const handler = (client: Instantly2, args: Record<string, unknown> | undefined) => {
  const body = args as any;
  return client.v2.blockListsEntries.list(body);
};

export default { metadata, tool, handler };
