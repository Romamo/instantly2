// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { maybeFilter } from 'instantly2-mcp/filtering';
import { Metadata, asTextContentResult } from 'instantly2-mcp/tools/types';

import { Tool } from '@modelcontextprotocol/sdk/types.js';
import Instantly2 from 'instantly2';

export const metadata: Metadata = {
  resource: 'v2.emails',
  operation: 'write',
  tags: [],
  httpMethod: 'delete',
  httpPath: '/api/v2/emails/{id}',
  operationId: 'deleteEmail',
};

export const tool: Tool = {
  name: 'delete_v2_emails',
  description:
    "When using this tool, always use the `jq_filter` parameter to reduce the response size and improve performance.\n\nOnly omit if you're sure you don't need the data.\n\nRequires one of the following scopes: `emails:delete`, `emails:all`, `all:delete`, `all:all`\n\n# Response Schema\n```json\n{\n  $ref: '#/$defs/campaign_email',\n  $defs: {\n    campaign_email: {\n      type: 'object',\n      title: 'Email',\n      description: 'A campaign email, a reply, a manually sent email, or any other email that\\'s visible in the Unibox',\n      properties: {\n        id: {\n          type: 'string',\n          description: 'A Unique identifier'\n        },\n        body: {\n          type: 'object',\n          description: 'An object containing the email body in HTML and text format',\n          properties: {\n            html: {\n              type: 'string',\n              description: 'HTML content of the email'\n            },\n            text: {\n              type: 'string',\n              description: 'Text content of the email'\n            }\n          }\n        },\n        eaccount: {\n          type: 'string',\n          description: 'The email account that was used to send the email. This needs to be validated to make sure it exists in the user workspace'\n        },\n        message_id: {\n          type: 'string',\n          description: 'Unique email ID from the email server'\n        },\n        organization_id: {\n          type: 'string',\n          description: 'The workspace ID'\n        },\n        subject: {\n          type: 'string',\n          description: 'Subject line of the email message'\n        },\n        timestamp_created: {\n          type: 'string',\n          description: 'Timestamp when the email was added to our database. This is not the timestamp of the email itself, since the email could have been sent at a different time. Please check the `timestamp_email` field for the timestamp of the email.',\n          format: 'date-time'\n        },\n        timestamp_email: {\n          type: 'string',\n          description: 'The timestamp of the email, as provided by the email server. Please note that the timestamp is not always accurate, as it can be manipulated by the sender or the email server.',\n          format: 'date-time'\n        },\n        to_address_email_list: {\n          type: 'string',\n          description: 'Comma-separated list of recipient email addresses'\n        },\n        ai_assisted: {\n          type: 'number',\n          description: 'Indicates if AI assistance was used'\n        },\n        ai_interest_value: {\n          type: 'number',\n          description: 'AI interest value'\n        },\n        bcc_address_email_list: {\n          type: 'string',\n          description: 'Comma-separated list of BCC email addresses'\n        },\n        campaign_id: {\n          type: 'string',\n          description: 'The id of the campaign that the email is associated with (it can be null for manually sent emails)'\n        },\n        cc_address_email_list: {\n          type: 'string',\n          description: 'Comma-separated list of CC email addresses'\n        },\n        cc_address_json: {\n          type: 'array',\n          description: 'List of CC address details',\n          items: {\n            type: 'object'\n          }\n        },\n        content_preview: {\n          type: 'string',\n          description: 'A short preview of the email content (usually the first few lines of the email)'\n        },\n        from_address_email: {\n          type: 'string',\n          description: 'The sender email address, populated based on the eaccount'\n        },\n        from_address_json: {\n          type: 'array',\n          description: 'List of from address details',\n          items: {\n            type: 'object'\n          }\n        },\n        i_status: {\n          type: 'number',\n          description: 'Indicates the interest status of the email'\n        },\n        is_auto_reply: {\n          type: 'boolean',\n          description: 'Indicates if the email is an auto-reply'\n        },\n        is_focused: {\n          type: 'number',\n          description: 'Indicates if the email is focused (is in the primary tab in the Unibox)'\n        },\n        is_unread: {\n          type: 'boolean',\n          description: 'Indicates if the email is unread'\n        },\n        lead: {\n          type: 'string',\n          description: 'The email address of the lead that the email is associated with'\n        },\n        lead_id: {\n          type: 'string',\n          description: 'The lead id (if any)'\n        },\n        list_id: {\n          type: 'string',\n          description: 'The id of the list (if the lead is part of a list)'\n        },\n        reminder_ts: {\n          type: 'string',\n          description: 'Timestamp for the reminder.',\n          format: 'date-time'\n        },\n        reply_to: {\n          type: 'string',\n          description: 'Reply-to email address'\n        },\n        step: {\n          type: 'string',\n          description: 'The campaign step that the email is associated with'\n        },\n        subsequence_id: {\n          type: 'string',\n          description: 'The id of the campaign subsequence that the email is associated with (it can be null for manually sent emails)'\n        },\n        thread_id: {\n          type: 'string',\n          description: 'Identifier for the email thread. All the emails in the same thread have the same thread ID'\n        },\n        to_address_json: {\n          type: 'array',\n          description: 'List of to address details',\n          items: {\n            type: 'object'\n          }\n        },\n        ue_type: {\n          type: 'string',\n          description: 'Email type based on the life cycle of the email',\n          enum: [            1,\n            2,\n            3,\n            4\n          ]\n        }\n      },\n      required: [        'id',\n        'body',\n        'eaccount',\n        'message_id',\n        'organization_id',\n        'subject',\n        'timestamp_created',\n        'timestamp_email',\n        'to_address_email_list'\n      ]\n    }\n  }\n}\n```",
  inputSchema: {
    type: 'object',
    properties: {
      id: {
        type: 'string',
      },
      body: {
        type: 'null',
      },
      jq_filter: {
        type: 'string',
        title: 'jq Filter',
        description:
          'A jq filter to apply to the response to include certain fields. Consult the output schema in the tool description to see the fields that are available.\n\nFor example: to include only the `name` field in every object of a results array, you can provide ".results[].name".\n\nFor more information, see the [jq documentation](https://jqlang.org/manual/).',
      },
    },
    required: ['id'],
  },
  annotations: {
    idempotentHint: true,
  },
};

export const handler = async (client: Instantly2, args: Record<string, unknown> | undefined) => {
  const { id, jq_filter, ...body } = args as any;
  return asTextContentResult(await maybeFilter(jq_filter, await client.v2.emails.delete(id, body)));
};

export default { metadata, tool, handler };
