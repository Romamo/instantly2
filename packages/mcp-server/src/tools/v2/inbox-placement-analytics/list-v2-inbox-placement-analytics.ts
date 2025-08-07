// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { maybeFilter } from 'instantly2-mcp/filtering';
import { Metadata, asTextContentResult } from 'instantly2-mcp/tools/types';

import { Tool } from '@modelcontextprotocol/sdk/types.js';
import Instantly2 from 'instantly2';

export const metadata: Metadata = {
  resource: 'v2.inbox_placement_analytics',
  operation: 'read',
  tags: [],
  httpMethod: 'get',
  httpPath: '/api/v2/inbox-placement-analytics',
  operationId: 'listInboxPlacementAnalytics',
};

export const tool: Tool = {
  name: 'list_v2_inbox_placement_analytics',
  description:
    "When using this tool, always use the `jq_filter` parameter to reduce the response size and improve performance.\n\nOnly omit if you're sure you don't need the data.\n\nRequires one of the following scopes: `inbox_placement_analytics:read`, `inbox_placement_analytics:all`, `all:read`, `all:all`\n\n# Response Schema\n```json\n{\n  type: 'object',\n  properties: {\n    items: {\n      type: 'array',\n      items: {\n        $ref: '#/$defs/analytics'\n      }\n    },\n    next_starting_after: {\n      type: 'string',\n      description: 'The filter for getting the next items after this one, this could either be a UUID, a MongoDB ID, a timestamp, on an email depending on the specific API'\n    }\n  },\n  required: [    'items'\n  ],\n  $defs: {\n    analytics: {\n      type: 'object',\n      title: 'Inbox Placement Analytics',\n      description: 'Analytics data for individual emails in inbox placement tests',\n      properties: {\n        id: {\n          type: 'string',\n          description: 'Unique identifier for the inbox placement analytics entry'\n        },\n        organization_id: {\n          type: 'string',\n          description: 'Organization ID'\n        },\n        test_id: {\n          type: 'string',\n          description: 'Inbox Placement Test ID'\n        },\n        timestamp_created: {\n          type: 'string',\n          description: 'Timestamp when the inbox placement analytics was created'\n        },\n        timestamp_created_date: {\n          type: 'string',\n          description: 'Date when the inbox placement analytics was created'\n        },\n        authentication_failure_results: {\n          type: 'object',\n          description: 'Details of authentication failures for SPF, DKIM, and DMARC',\n          properties: {\n            authentication_results: {\n              type: 'string',\n              description: 'Authentication results'\n            },\n            dkim_signature: {\n              type: 'string',\n              description: 'DKIM signature'\n            },\n            received_spf: {\n              type: 'string',\n              description: 'Received SPF'\n            }\n          }\n        },\n        dkim_pass: {\n          type: 'number',\n          description: 'Indicates if the email passed DKIM validation (1 for pass, 0 otherwise)'\n        },\n        dmarc_pass: {\n          type: 'number',\n          description: 'Indicates if the email passed DMARC validation (1 for pass, 0 otherwise)'\n        },\n        has_category: {\n          type: 'number',\n          description: 'Indicates if the email was categorized like promotions, social, etc.'\n        },\n        is_spam: {\n          type: 'number',\n          description: 'Indicates if the email landed in spam (1 for spam, 0 otherwise)'\n        },\n        recipient_email: {\n          type: 'string',\n          description: 'Email address of the recipient'\n        },\n        recipient_esp: {\n          type: 'string',\n          description: 'The recipient ESP (Email Service Provider)',\n          enum: [            1,\n            2,\n            12,\n            13\n          ]\n        },\n        recipient_geo: {\n          type: 'string',\n          description: 'The geographic location of the recipient',\n          enum: [            1,\n            2,\n            3,\n            4\n          ]\n        },\n        recipient_type: {\n          type: 'string',\n          description: 'The type of recipient',\n          enum: [            1,\n            2\n          ]\n        },\n        sender_email: {\n          type: 'string',\n          description: 'Email address of the sender'\n        },\n        sender_esp: {\n          type: 'string',\n          description: 'The sender ESP (Email Service Provider)',\n          enum: [            1,\n            2,\n            12,\n            13\n          ]\n        },\n        smtp_ip_blacklist_report: {\n          type: 'object',\n          description: 'Blacklist report for the SMTP IP address'\n        },\n        spf_pass: {\n          type: 'number',\n          description: 'Indicates if the email passed SPF validation (1 for pass, 0 otherwise)'\n        }\n      },\n      required: [        'id',\n        'organization_id',\n        'test_id',\n        'timestamp_created',\n        'timestamp_created_date'\n      ]\n    }\n  }\n}\n```",
  inputSchema: {
    type: 'object',
    properties: {
      test_id: {
        type: 'string',
      },
      date_from: {
        type: 'string',
      },
      date_to: {
        type: 'string',
      },
      limit: {
        type: 'integer',
        description: 'The number of items to return',
      },
      recipient_esp: {
        type: 'string',
        description: 'A comma-separated list of recipient ESP values.',
      },
      recipient_geo: {
        type: 'string',
        description: 'A comma-separated list of recipient geo values.',
      },
      recipient_type: {
        type: 'string',
        description: 'A comma-separated list of recipient type values.',
      },
      sender_email: {
        type: 'string',
      },
      starting_after: {
        type: 'string',
        description:
          'The ID of the last item in the previous page - used for pagination. You can use the value of the `next_starting_after` field from the previous response.',
      },
      jq_filter: {
        type: 'string',
        title: 'jq Filter',
        description:
          'A jq filter to apply to the response to include certain fields. Consult the output schema in the tool description to see the fields that are available.\n\nFor example: to include only the `name` field in every object of a results array, you can provide ".results[].name".\n\nFor more information, see the [jq documentation](https://jqlang.org/manual/).',
      },
    },
    required: ['test_id'],
  },
  annotations: {
    readOnlyHint: true,
  },
};

export const handler = async (client: Instantly2, args: Record<string, unknown> | undefined) => {
  const { jq_filter, ...body } = args as any;
  return asTextContentResult(
    await maybeFilter(jq_filter, await client.v2.inboxPlacementAnalytics.list(body)),
  );
};

export default { metadata, tool, handler };
