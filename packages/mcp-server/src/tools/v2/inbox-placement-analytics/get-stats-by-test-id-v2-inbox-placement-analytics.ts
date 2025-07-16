// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { maybeFilter } from 'instantly2-mcp/filtering';
import { Metadata, asTextContentResult } from 'instantly2-mcp/tools/types';

import { Tool } from '@modelcontextprotocol/sdk/types.js';
import Instantly2 from 'instantly2';

export const metadata: Metadata = {
  resource: 'v2.inbox_placement_analytics',
  operation: 'write',
  tags: [],
  httpMethod: 'post',
  httpPath: '/api/v2/inbox-placement-analytics/stats-by-test-id',
  operationId: 'getInboxPlacementAnalyticsStatsByTestId',
};

export const tool: Tool = {
  name: 'get_stats_by_test_id_v2_inbox_placement_analytics',
  description:
    "When using this tool, always use the `jq_filter` parameter to reduce the response size and improve performance.\n\nOnly omit if you're sure you don't need the data.\n\nProvides aggregated inbox, spam and category counts for specified test IDs\n\n\nRequires one of the following scopes: `inbox_placement_analytics:read`, `inbox_placement_analytics:all`, `all:read`, `all:all`\n\n# Response Schema\n```json\n{\n  type: 'array',\n  items: {\n    type: 'object',\n    properties: {\n      category_count: {\n        type: 'number'\n      },\n      category_percent: {\n        type: 'number'\n      },\n      count: {\n        type: 'number'\n      },\n      inbox_count: {\n        type: 'number'\n      },\n      inbox_percent: {\n        type: 'number'\n      },\n      spam_count: {\n        type: 'number'\n      },\n      spam_percent: {\n        type: 'number'\n      },\n      test_id: {\n        type: 'string'\n      }\n    },\n    required: [      'category_count',\n      'category_percent',\n      'count',\n      'inbox_count',\n      'inbox_percent',\n      'spam_count',\n      'spam_percent',\n      'test_id'\n    ]\n  }\n}\n```",
  inputSchema: {
    type: 'object',
    properties: {
      test_ids: {
        type: 'array',
        items: {
          type: 'string',
        },
      },
      date_from: {
        type: 'string',
      },
      date_to: {
        type: 'string',
      },
      recipient_esp: {
        type: 'array',
        items: {
          type: 'string',
          enum: [1, 2, 12, 13],
        },
      },
      recipient_geo: {
        type: 'array',
        items: {
          type: 'string',
          enum: [1, 2, 3, 4],
        },
      },
      recipient_type: {
        type: 'array',
        items: {
          type: 'string',
          enum: [1, 2],
        },
      },
      sender_email: {
        type: 'string',
      },
      jq_filter: {
        type: 'string',
        title: 'jq Filter',
        description:
          'A jq filter to apply to the response to include certain fields. Consult the output schema in the tool description to see the fields that are available.\n\nFor example: to include only the `name` field in every object of a results array, you can provide ".results[].name".\n\nFor more information, see the [jq documentation](https://jqlang.org/manual/).',
      },
    },
  },
};

export const handler = async (client: Instantly2, args: Record<string, unknown> | undefined) => {
  const body = args as any;
  return asTextContentResult(
    await maybeFilter(args, await client.v2.inboxPlacementAnalytics.getStatsByTestID(body)),
  );
};

export default { metadata, tool, handler };
