// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { asTextContentResult } from 'instantly2-mcp/tools/types';

import { Tool } from '@modelcontextprotocol/sdk/types.js';
import type { Metadata } from '../../';
import Instantly2 from 'instantly2';

export const metadata: Metadata = {
  resource: 'v2.block_lists_entries',
  operation: 'write',
  tags: [],
  httpMethod: 'patch',
  httpPath: '/api/v2/block-lists-entries/{id}',
  operationId: 'patchBlockListEntry',
};

export const tool: Tool = {
  name: 'update_v2_block_lists_entries',
  description:
    'Requires one of the following scopes: `block_list_entries:update`, `block_list_entries:all`, `all:update`, `all:all`',
  inputSchema: {
    type: 'object',
    properties: {
      id: {
        type: 'string',
      },
      bl_value: {
        type: 'string',
        description: 'The email or domain to block',
      },
    },
  },
};

export const handler = async (client: Instantly2, args: Record<string, unknown> | undefined) => {
  const { id, ...body } = args as any;
  return asTextContentResult(await client.v2.blockListsEntries.update(id, body));
};

export default { metadata, tool, handler };
