// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { asTextContentResult } from 'instantly2-mcp/tools/types';

import { Tool } from '@modelcontextprotocol/sdk/types.js';
import type { Metadata } from '../../';
import Instantly2 from 'instantly2';

export const metadata: Metadata = {
  resource: 'v2.emails',
  operation: 'read',
  tags: [],
  httpMethod: 'get',
  httpPath: '/api/v2/emails/{id}',
  operationId: 'getEmail',
};

export const tool: Tool = {
  name: 'retrieve_v2_emails',
  description: 'Requires one of the following scopes: `emails:read`, `emails:all`, `all:read`, `all:all`',
  inputSchema: {
    type: 'object',
    properties: {
      id: {
        type: 'string',
      },
    },
  },
};

export const handler = async (client: Instantly2, args: Record<string, unknown> | undefined) => {
  const { id, ...body } = args as any;
  return asTextContentResult(await client.v2.emails.retrieve(id));
};

export default { metadata, tool, handler };
