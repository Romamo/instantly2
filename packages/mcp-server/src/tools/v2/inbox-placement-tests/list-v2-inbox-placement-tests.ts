// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { Tool } from '@modelcontextprotocol/sdk/types.js';
import type { Metadata } from '../../';
import Instantly2 from 'instantly2';

export const metadata: Metadata = {
  resource: 'v2.inbox_placement_tests',
  operation: 'read',
  tags: [],
};

export const tool: Tool = {
  name: 'list_v2_inbox_placement_tests',
  description:
    'Requires one of the following scopes: `inbox_placement_tests:read`, `inbox_placement_tests:all`, `all:read`, `all:all`',
  inputSchema: {
    type: 'object',
    properties: {
      limit: {
        type: 'integer',
        description: 'The number of items to return',
      },
      search: {
        type: 'string',
      },
      sort_column: {
        type: 'string',
      },
      sort_order: {
        type: 'string',
      },
      starting_after: {
        type: 'string',
        description:
          'The ID of the last item in the previous page - used for pagination. You can use the value of the `next_starting_after` field from the previous response.',
      },
      status: {
        type: 'string',
        enum: [1, 2, 3],
      },
    },
  },
};

export const handler = (client: Instantly2, args: Record<string, unknown> | undefined) => {
  const body = args as any;
  return client.v2.inboxPlacementTests.list(body);
};

export default { metadata, tool, handler };
