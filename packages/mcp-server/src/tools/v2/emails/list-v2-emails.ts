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
  httpPath: '/api/v2/emails',
  operationId: 'listEmail',
};

export const tool: Tool = {
  name: 'list_v2_emails',
  description: 'Requires one of the following scopes: `emails:read`, `emails:all`, `all:read`, `all:all`',
  inputSchema: {
    type: 'object',
    properties: {
      assigned_to: {
        type: 'string',
      },
      campaign_id: {
        type: 'string',
      },
      company_domain: {
        type: 'string',
      },
      eaccount: {
        type: 'string',
        description: 'The email account that was used to send this email',
      },
      email_type: {
        type: 'string',
        enum: ['received', 'sent', 'manual'],
      },
      has_reminder: {
        type: 'boolean',
      },
      i_status: {
        type: 'number',
      },
      is_unread: {
        type: 'boolean',
      },
      lead: {
        type: 'string',
      },
      limit: {
        type: 'integer',
        description: 'The number of items to return',
      },
      marked_as_done: {
        type: 'boolean',
      },
      mode: {
        type: 'string',
        enum: ['emode_focused', 'emode_others', 'emode_all'],
      },
      preview_only: {
        type: 'boolean',
      },
      scheduled_only: {
        type: 'boolean',
      },
      search: {
        type: 'string',
      },
      sort_order: {
        type: 'string',
        enum: ['asc', 'desc'],
      },
      starting_after: {
        type: 'string',
        description:
          'The id of the email to start the list from (use the "next_starting_after" field you got in a previous request to paginate)',
      },
    },
  },
};

export const handler = async (client: Instantly2, args: Record<string, unknown> | undefined) => {
  const body = args as any;
  return asTextContentResult(await client.v2.emails.list(body));
};

export default { metadata, tool, handler };
