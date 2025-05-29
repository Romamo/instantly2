// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { Tool } from '@modelcontextprotocol/sdk/types.js';
import type { Metadata } from '../../';
import Instantly2 from 'instantly2';

export const metadata: Metadata = {
  resource: 'v2.accounts',
  operation: 'write',
  tags: [],
  httpMethod: 'post',
  httpPath: '/api/v2/accounts/warmup-analytics',
  operationId: 'getWarmupAnalytics',
};

export const tool: Tool = {
  name: 'warmup_analytics_v2_accounts',
  description: 'Requires one of the following scopes: `accounts:read`, `accounts:all`, `all:read`, `all:all`',
  inputSchema: {
    type: 'object',
    properties: {
      emails: {
        type: 'array',
        description:
          'List of emails to get warmup analytics for. The emails should be attached to accounts in your workspace.',
        items: {
          type: 'string',
        },
      },
    },
  },
};

export const handler = (client: Instantly2, args: Record<string, unknown> | undefined) => {
  const body = args as any;
  return client.v2.accounts.warmupAnalytics(body);
};

export default { metadata, tool, handler };
