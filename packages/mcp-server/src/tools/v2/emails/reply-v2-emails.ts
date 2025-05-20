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
  name: 'reply_v2_emails',
  description:
    'Send a reply to an email. This endpoint can be used to send an email only as a reply to an existing email. In order to reply to an email, please specify the `reyply_to_uuid` field, and your email will be sent as a reply to that email. The `reyply_to_uuid` field represents the `id` field of an existing email, which is being returned to you in all the `/email` endpoints\n\n\nRequires one of the following scopes: `emails:create`, `emails:all`, `all:create`, `all:all`',
  inputSchema: {
    type: 'object',
    properties: {
      body: {
        type: 'object',
        description: 'The email body. You can specify either the `html` or the `text` field, or both',
        properties: {
          html: {
            type: 'string',
            description: 'HTML body of the email message',
          },
          text: {
            type: 'string',
            description: 'Text body of the email message',
          },
        },
        required: [],
      },
      eaccount: {
        type: 'string',
        description:
          'The email account that will be used to send this email. It has to be an email account connected to your workspace',
      },
      reply_to_uuid: {
        type: 'string',
        description: 'The id of the email to reply to',
      },
      subject: {
        type: 'string',
        description: 'Subject line of the email message',
      },
      assigned_to: {
        type: 'string',
        description: 'The user id assigned to the lead',
      },
      bcc_address_email_list: {
        type: 'string',
        description: 'Comma-separated list of BCC email addresses',
      },
      cc_address_email_list: {
        type: 'string',
        description: 'Comma-separated list of CC email addresses',
      },
      reminder_ts: {
        type: 'string',
        description:
          'Timestamp for the reminder. If this field is included, then this email will be added to the database, but will be sent at the specified timestamp',
      },
    },
  },
};

export const handler = (client: Instantly2, args: Record<string, unknown> | undefined) => {
  const body = args as any;
  return client.v2.emails.reply(body);
};

export default { metadata, tool, handler };
