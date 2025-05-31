// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { Tool } from '@modelcontextprotocol/sdk/types.js';
import type { Metadata } from '../../';
import Instantly2 from 'instantly2';

export const metadata: Metadata = {
  resource: 'v2.accounts',
  operation: 'write',
  tags: [],
  httpMethod: 'delete',
  httpPath: '/api/v2/accounts/{email}',
  operationId: 'deleteAccount',
};

export const tool: Tool = {
  name: 'delete_v2_accounts',
  description:
    'Requires one of the following scopes: `accounts:delete`, `accounts:all`, `all:delete`, `all:all`',
  inputSchema: {
    type: 'object',
    properties: {
      email: {
        type: 'string',
      },
      body: {
        type: 'null',
      },
    },
  },
};

export const handler = (client: Instantly2, args: Record<string, unknown> | undefined) => {
  const { email, ...body } = args as any;
  return client.v2.accounts.delete(email, body);
};

export default { metadata, tool, handler };
