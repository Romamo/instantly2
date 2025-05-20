// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { Tool } from '@modelcontextprotocol/sdk/types.js';
import type { Metadata } from '../../';
import Instantly2 from 'instantly2';

export const metadata: Metadata = {
  resource: 'v2.lead_lists',
  operation: 'write',
  tags: [],
};

export const tool: Tool = {
  name: 'delete_v2_lead_lists',
  description:
    'Requires one of the following scopes: `lead_lists:delete`, `lead_lists:all`, `all:delete`, `all:all`',
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
  return client.v2.leadLists.delete(id, body);
};

export default { metadata, tool, handler };
