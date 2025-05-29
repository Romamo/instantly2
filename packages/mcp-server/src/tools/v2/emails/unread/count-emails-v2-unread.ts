// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { Tool } from '@modelcontextprotocol/sdk/types.js';
import type { Metadata } from '../../../';
import Instantly2 from 'instantly2';

export const metadata: Metadata = {
  resource: 'v2.emails.unread',
  operation: 'read',
  tags: [],
  httpMethod: 'get',
  httpPath: '/api/v2/emails/unread/count',
  operationId: 'countUnreadEmails',
};

export const tool: Tool = {
  name: 'count_emails_v2_unread',
  description: 'Requires one of the following scopes: `emails:read`, `emails:all`, `all:read`, `all:all`',
  inputSchema: {
    type: 'object',
    properties: {},
  },
};

export const handler = (client: Instantly2, args: Record<string, unknown> | undefined) => {
  return client.v2.emails.unread.count();
};

export default { metadata, tool, handler };
