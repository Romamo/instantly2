// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { Tool } from '@modelcontextprotocol/sdk/types.js';
import type { Metadata } from '../../../';
import Instantly2 from 'instantly2';

export const metadata: Metadata = {
  resource: 'v2.accounts.ctd',
  operation: 'read',
  tags: [],
  httpMethod: 'get',
  httpPath: '/api/v2/accounts/ctd/status',
  operationId: 'getCtdStatus',
};

export const tool: Tool = {
  name: 'get_status_accounts_v2_ctd',
  description: 'Requires one of the following scopes: `accounts:read`, `accounts:all`, `all:read`, `all:all`',
  inputSchema: {
    type: 'object',
    properties: {
      host: {
        type: 'string',
        description: 'Custom tracking domain host',
      },
    },
  },
};

export const handler = (client: Instantly2, args: Record<string, unknown> | undefined) => {
  const body = args as any;
  return client.v2.accounts.ctd.getStatus(body);
};

export default { metadata, tool, handler };
