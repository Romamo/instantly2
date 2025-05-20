// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { Tool } from '@modelcontextprotocol/sdk/types.js';
import type { Metadata } from '../../';
import Instantly2 from 'instantly2';

export const metadata: Metadata = {
  resource: 'v2.emails',
  operation: 'write',
  tags: [],
};

export const tool: Tool = {
  name: 'update_v2_emails',
  description: 'Requires one of the following scopes: `emails:update`, `emails:all`, `all:update`, `all:all`',
  inputSchema: {
    type: 'object',
    properties: {
      id: {
        type: 'string',
      },
      is_unread: {
        type: 'boolean',
        description: 'Indicates if the email is unread',
      },
      reminder_ts: {
        type: 'string',
        description: 'Timestamp for the reminder.',
        format: 'date-time',
      },
    },
  },
};

export const handler = (client: Instantly2, args: Record<string, unknown> | undefined) => {
  const { id, ...body } = args as any;
  return client.v2.emails.update(id, body);
};

export default { metadata, tool, handler };
