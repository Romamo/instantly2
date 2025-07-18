// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { maybeFilter } from 'instantly2-mcp/filtering';
import { Metadata, asTextContentResult } from 'instantly2-mcp/tools/types';

import { Tool } from '@modelcontextprotocol/sdk/types.js';
import Instantly2 from 'instantly2';

export const metadata: Metadata = {
  resource: 'v2.inbox_placement_reports',
  operation: 'read',
  tags: [],
  httpMethod: 'get',
  httpPath: '/api/v2/inbox-placement-reports',
  operationId: 'listInboxPlacementBlacklist&SpamAssassinReport',
};

export const tool: Tool = {
  name: 'list_v2_inbox_placement_reports',
  description:
    "When using this tool, always use the `jq_filter` parameter to reduce the response size and improve performance.\n\nOnly omit if you're sure you don't need the data.\n\nRequires one of the following scopes: `inbox_placement_reports:read`, `inbox_placement_reports:all`, `all:read`, `all:all`\n\n# Response Schema\n```json\n{\n  type: 'object',\n  properties: {\n    items: {\n      type: 'array',\n      items: {\n        $ref: '#/$defs/report'\n      }\n    },\n    next_starting_after: {\n      type: 'string',\n      description: 'The filter for getting the next items after this one, this could either be a UUID, a MongoDB ID, a timestamp, on an email depending on the specific API'\n    }\n  },\n  required: [    'items'\n  ],\n  $defs: {\n    report: {\n      type: 'object',\n      title: 'Inbox Placement Blacklist & SpamAssassin Report',\n      description: 'Report data for an inbox placement test',\n      properties: {\n        id: {\n          type: 'string',\n          description: 'Unique identifier for the inbox placement report entry'\n        },\n        domain: {\n          type: 'string',\n          description: 'Domain of the inbox placement report'\n        },\n        domain_ip: {\n          type: 'string',\n          description: 'IP address of the domain'\n        },\n        organization_id: {\n          type: 'string',\n          description: 'Organization ID'\n        },\n        spam_assassin_score: {\n          type: 'number',\n          description: 'SpamAssassin score for the email, indicating spam likelihood'\n        },\n        test_id: {\n          type: 'string',\n          description: 'Inbox Placement Test ID'\n        },\n        timestamp_created: {\n          type: 'string',\n          description: 'Timestamp when the inbox placement report was created'\n        },\n        timestamp_created_date: {\n          type: 'string',\n          description: 'Date when the inbox placement report was created'\n        },\n        blacklist_report: {\n          type: 'object',\n          description: 'Detailed blacklist report for the domain or IP',\n          properties: {\n            address: {\n              type: 'string',\n              description: 'The address or domain associated with the report'\n            },\n            blacklisted_count: {\n              type: 'integer',\n              description: 'The count of blacklists the address is listed on'\n            },\n            details: {\n              type: 'array',\n              description: 'List of individual blacklist details',\n              items: {\n                type: 'object',\n                properties: {\n                  blacklist: {\n                    type: 'string',\n                    description: 'The name of the blacklist'\n                  },\n                  is_listed: {\n                    type: 'boolean',\n                    description: 'Whether the address is listed on this blacklist'\n                  },\n                  test_type: {\n                    type: 'string',\n                    description: 'The type of test'\n                  }\n                }\n              }\n            },\n            ip: {\n              type: 'string',\n              description: 'The IP address associated with the blacklist check'\n            },\n            is_blacklisted: {\n              type: 'boolean',\n              description: 'Overall status indicating if the address is blacklisted'\n            },\n            is_domain: {\n              type: 'boolean',\n              description: 'Whether the address is a domain'\n            }\n          }\n        },\n        domain_blacklist_count: {\n          type: 'number',\n          description: 'Count of blacklists the domain is listed on'\n        },\n        domain_ip_blacklist_count: {\n          type: 'number',\n          description: 'Count of blacklists the domain IP is listed on'\n        },\n        spam_assassin_report: {\n          type: 'object',\n          description: 'Detailed SpamAssassin analysis report',\n          properties: {\n            is_spam: {\n              type: 'boolean',\n              description: 'Indicates if the message is classified as spam by SpamAssassin'\n            },\n            report: {\n              type: 'array',\n              description: 'List of individual SpamAssassin rule evaluations',\n              items: {\n                type: 'object',\n                properties: {\n                  description: {\n                    type: 'string',\n                    description: 'The section or type of the rule triggered'\n                  },\n                  name: {\n                    type: 'string',\n                    description: 'The name of the SpamAssassin rule'\n                  },\n                  score: {\n                    type: 'string',\n                    description: 'The score assigned to this rule evaluation'\n                  }\n                },\n                required: [                  'description',\n                  'name',\n                  'score'\n                ]\n              }\n            },\n            spam_score: {\n              type: 'integer',\n              description: 'Overall spam score assigned to the message by SpamAssassin'\n            }\n          }\n        }\n      },\n      required: [        'id',\n        'domain',\n        'domain_ip',\n        'organization_id',\n        'spam_assassin_score',\n        'test_id',\n        'timestamp_created',\n        'timestamp_created_date'\n      ]\n    }\n  }\n}\n```",
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
      skip_blacklist_report: {
        type: 'boolean',
        description: 'Flag to skip including blacklist_report JSON',
      },
      skip_spam_assassin_report: {
        type: 'boolean',
        description: 'Flag to skip including spam_assassin_report JSON',
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
};

export const handler = async (client: Instantly2, args: Record<string, unknown> | undefined) => {
  const body = args as any;
  return asTextContentResult(await maybeFilter(args, await client.v2.inboxPlacementReports.list(body)));
};

export default { metadata, tool, handler };
