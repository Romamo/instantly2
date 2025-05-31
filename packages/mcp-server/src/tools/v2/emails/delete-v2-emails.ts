// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { Tool } from '@modelcontextprotocol/sdk/types.js';
import type { Metadata } from '../../';
import Instantly2 from 'instantly2';

export const metadata: Metadata = {
  resource: 'v2.emails',
  operation: 'write',
  tags: [],
  httpMethod: 'delete',
  httpPath: '/api/v2/emails/{id}',
  operationId: 'deleteEmail',
};

export const tool: Tool = {
  name: 'delete_v2_emails',
  description: 'Requires one of the following scopes: `emails:delete`, `emails:all`, `all:delete`, `all:all`',
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
  return client.v2.emails.delete(id, body);
};

export default { metadata, tool, handler };
