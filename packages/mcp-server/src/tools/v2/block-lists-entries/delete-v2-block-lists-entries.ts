// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { Tool } from '@modelcontextprotocol/sdk/types.js';
import type { Metadata } from '../../';
import Instantly2 from 'instantly2';

export const metadata: Metadata = {
  resource: 'v2.block_lists_entries',
  operation: 'write',
  tags: [],
  httpMethod: 'delete',
  httpPath: '/api/v2/block-lists-entries/{id}',
  operationId: 'deleteBlockListEntry',
};

export const tool: Tool = {
  name: 'delete_v2_block_lists_entries',
  description:
    'Requires one of the following scopes: `block_list_entries:delete`, `block_list_entries:all`, `all:delete`, `all:all`',
  inputSchema: {
    type: 'object',
    properties: {
      id: {
        type: 'string',
      },
      body: {
        type: 'null',
      },
    },
  },
};

export const handler = (client: Instantly2, args: Record<string, unknown> | undefined) => {
  const { id, ...body } = args as any;
  return client.v2.blockListsEntries.delete(id, body);
};

export default { metadata, tool, handler };
