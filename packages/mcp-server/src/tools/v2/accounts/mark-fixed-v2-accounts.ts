// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { asTextContentResult } from 'instantly2-mcp/tools/types';

import { Tool } from '@modelcontextprotocol/sdk/types.js';
import type { Metadata } from '../../';
import Instantly2 from 'instantly2';

export const metadata: Metadata = {
  resource: 'v2.accounts',
  operation: 'write',
  tags: [],
  httpMethod: 'post',
  httpPath: '/api/v2/accounts/{email}/mark-fixed',
  operationId: 'markAccountFixed',
};

export const tool: Tool = {
  name: 'mark_fixed_v2_accounts',
  description:
    'Requires one of the following scopes: `accounts:update`, `accounts:all`, `all:update`, `all:all`',
  inputSchema: {
    type: 'object',
    properties: {
      email: {
        type: 'string',
      },
    },
  },
};

export const handler = async (client: Instantly2, args: Record<string, unknown> | undefined) => {
  const { email, ...body } = args as any;
  return asTextContentResult(await client.v2.accounts.markFixed(email));
};

export default { metadata, tool, handler };
