// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { asTextContentResult } from 'instantly2-mcp/tools/types';

import { Tool } from '@modelcontextprotocol/sdk/types.js';
import type { Metadata } from '../../../';
import Instantly2 from 'instantly2';

export const metadata: Metadata = {
  resource: 'v2.emails.threads',
  operation: 'write',
  tags: [],
  httpMethod: 'post',
  httpPath: '/api/v2/emails/threads/{thread_id}/mark-as-read',
  operationId: 'markThreadAsRead',
};

export const tool: Tool = {
  name: 'mark_as_read_emails_v2_threads',
  description: 'Requires one of the following scopes: `emails:update`, `emails:all`, `all:update`, `all:all`',
  inputSchema: {
    type: 'object',
    properties: {
      thread_id: {
        type: 'string',
      },
    },
  },
};

export const handler = async (client: Instantly2, args: Record<string, unknown> | undefined) => {
  const { thread_id, ...body } = args as any;
  return asTextContentResult(await client.v2.emails.threads.markAsRead(thread_id));
};

export default { metadata, tool, handler };
