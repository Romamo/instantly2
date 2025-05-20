// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { Tool } from '@modelcontextprotocol/sdk/types.js';
import type { Metadata } from '../../';
import Instantly2 from 'instantly2';

export const metadata: Metadata = {
  resource: 'v2.custom_tags',
  operation: 'write',
  tags: [],
};

export const tool: Tool = {
  name: 'update_v2_custom_tags',
  description:
    'Requires one of the following scopes: `custom_tags:update`, `custom_tags:all`, `all:update`, `all:all`',
  inputSchema: {
    type: 'object',
    properties: {
      id: {
        type: 'string',
      },
      description: {
        type: 'string',
        description: 'Detailed description of the custom tag purpose',
      },
      label: {
        type: 'string',
        description: 'Display label for the custom tag',
      },
    },
  },
};

export const handler = (client: Instantly2, args: Record<string, unknown> | undefined) => {
  const { id, ...body } = args as any;
  return client.v2.customTags.update(id, body);
};

export default { metadata, tool, handler };
