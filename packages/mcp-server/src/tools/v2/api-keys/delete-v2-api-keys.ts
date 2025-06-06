// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { asTextContentResult } from 'instantly2-mcp/tools/types';

import { Tool } from '@modelcontextprotocol/sdk/types.js';
import type { Metadata } from '../../';
import Instantly2 from 'instantly2';

export const metadata: Metadata = {
  resource: 'v2.api_keys',
  operation: 'write',
  tags: [],
  httpMethod: 'delete',
  httpPath: '/api/v2/api-keys/{id}',
  operationId: 'deleteAPIKey',
};

export const tool: Tool = {
  name: 'delete_v2_api_keys',
  description:
    'Requires one of the following scopes: `api_keys:delete`, `api_keys:all`, `all:delete`, `all:all`',
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

export const handler = async (client: Instantly2, args: Record<string, unknown> | undefined) => {
  const { id, ...body } = args as any;
  return asTextContentResult(await client.v2.apiKeys.delete(id, body));
};

export default { metadata, tool, handler };
