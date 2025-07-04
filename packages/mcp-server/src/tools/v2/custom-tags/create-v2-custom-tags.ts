// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { asTextContentResult } from 'instantly2-mcp/tools/types';

import { Tool } from '@modelcontextprotocol/sdk/types.js';
import type { Metadata } from '../../';
import Instantly2 from 'instantly2';

export const metadata: Metadata = {
  resource: 'v2.custom_tags',
  operation: 'write',
  tags: [],
  httpMethod: 'post',
  httpPath: '/api/v2/custom-tags',
  operationId: 'createCustomTag',
};

export const tool: Tool = {
  name: 'create_v2_custom_tags',
  description:
    'Requires one of the following scopes: `custom_tags:create`, `custom_tags:all`, `all:create`, `all:all`',
  inputSchema: {
    type: 'object',
    properties: {
      label: {
        type: 'string',
        description: 'Display label for the custom tag',
      },
      description: {
        type: 'string',
        description: 'Detailed description of the custom tag purpose',
      },
    },
  },
};

export const handler = async (client: Instantly2, args: Record<string, unknown> | undefined) => {
  const body = args as any;
  return asTextContentResult(await client.v2.customTags.create(body));
};

export default { metadata, tool, handler };
