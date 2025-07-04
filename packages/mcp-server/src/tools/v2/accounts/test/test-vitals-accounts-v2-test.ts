// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { asTextContentResult } from 'instantly2-mcp/tools/types';

import { Tool } from '@modelcontextprotocol/sdk/types.js';
import type { Metadata } from '../../../';
import Instantly2 from 'instantly2';

export const metadata: Metadata = {
  resource: 'v2.accounts.test',
  operation: 'write',
  tags: [],
  httpMethod: 'post',
  httpPath: '/api/v2/accounts/test/vitals',
  operationId: 'testAccountVitals',
};

export const tool: Tool = {
  name: 'test_vitals_accounts_v2_test',
  description: 'Requires one of the following scopes: `accounts:read`, `accounts:all`, `all:read`, `all:all`',
  inputSchema: {
    type: 'object',
    properties: {
      accounts: {
        type: 'array',
        items: {
          type: 'string',
        },
      },
    },
  },
};

export const handler = async (client: Instantly2, args: Record<string, unknown> | undefined) => {
  const body = args as any;
  return asTextContentResult(await client.v2.accounts.test.testVitals(body));
};

export default { metadata, tool, handler };
