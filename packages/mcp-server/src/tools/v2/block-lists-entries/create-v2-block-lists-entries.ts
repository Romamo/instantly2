// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { Tool } from '@modelcontextprotocol/sdk/types.js';
import type { Metadata } from '../../';
import Instantly2 from 'instantly2';

export const metadata: Metadata = {
  resource: 'v2.block_lists_entries',
  operation: 'write',
  tags: [],
  httpMethod: 'post',
  httpPath: '/api/v2/block-lists-entries',
  operationId: 'createBlockListEntry',
};

export const tool: Tool = {
  name: 'create_v2_block_lists_entries',
  description:
    'Requires one of the following scopes: `block_list_entries:create`, `block_list_entries:all`, `all:create`, `all:all`',
  inputSchema: {
    type: 'object',
    properties: {
      bl_value: {
        type: 'string',
        description: 'The email or domain to block',
      },
    },
  },
};

export const handler = (client: Instantly2, args: Record<string, unknown> | undefined) => {
  const body = args as any;
  return client.v2.blockListsEntries.create(body);
};

export default { metadata, tool, handler };
