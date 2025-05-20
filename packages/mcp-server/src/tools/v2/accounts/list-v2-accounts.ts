// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { Tool } from '@modelcontextprotocol/sdk/types.js';
import type { Metadata } from '../../';
import Instantly2 from 'instantly2';

export const metadata: Metadata = {
  resource: 'v2.accounts',
  operation: 'read',
  tags: [],
};

export const tool: Tool = {
  name: 'list_v2_accounts',
  description: 'Requires one of the following scopes: `accounts:read`, `accounts:all`, `all:read`, `all:all`',
  inputSchema: {
    type: 'object',
    properties: {
      limit: {
        type: 'integer',
        description: 'The number of items to return',
      },
      provider_code: {
        type: 'string',
        enum: [1, 2, 3, 4],
      },
      search: {
        type: 'string',
      },
      starting_after: {
        type: 'string',
      },
      status: {
        type: 'string',
        enum: [1, 2, -1, -2, -3],
      },
      tag_ids: {
        type: 'string',
        description:
          'Filter accounts by tag ids. Returns accounts that have any of the specified tags assigned. You can specify multiple tag ids by separating them with a comma.',
      },
    },
  },
};

export const handler = (client: Instantly2, args: Record<string, unknown> | undefined) => {
  const body = args as any;
  return client.v2.accounts.list(body);
};

export default { metadata, tool, handler };
