// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { maybeFilter } from 'instantly2-mcp/filtering';
import { asTextContentResult } from 'instantly2-mcp/tools/types';

import { Tool } from '@modelcontextprotocol/sdk/types.js';
import type { Metadata } from '../../';
import Instantly2 from 'instantly2';

export const metadata: Metadata = {
  resource: 'v2.inbox_placement_analytics',
  operation: 'write',
  tags: [],
  httpMethod: 'post',
  httpPath: '/api/v2/inbox-placement-analytics/deliverability-insights',
  operationId: 'getInboxPlacementAnalyticsDeliverabilityInsights',
};

export const tool: Tool = {
  name: 'get_deliverability_insights_v2_inbox_placement_analytics',
  description:
    "When using this tool, always use the `jq_filter` parameter to reduce the response size and improve performance.\n\nOnly omit if you're sure you don't need the data.\n\nProvides deliverability insights for a specific inbox placement test\n\n\nRequires one of the following scopes: `inbox_placement_analytics:read`, `inbox_placement_analytics:all`, `all:read`, `all:all`\n\n# Response Schema\n```json\n{\n  type: 'array',\n  items: {\n    type: 'object',\n    properties: {\n      category_percentage: {\n        type: 'number'\n      },\n      from: {\n        type: 'string'\n      },\n      inbox_percentage: {\n        type: 'number'\n      },\n      prev_category_percentage: {\n        type: 'number'\n      },\n      prev_inbox_percentage: {\n        type: 'number'\n      },\n      prev_spam_percentage: {\n        type: 'number'\n      },\n      previous_from: {\n        type: 'string'\n      },\n      previous_to: {\n        type: 'string'\n      },\n      recipient_esp: {\n        type: 'string',\n        enum: [          1,\n          2,\n          12,\n          13\n        ]\n      },\n      sender_esp: {\n        type: 'string',\n        enum: [          1,\n          2,\n          12,\n          13\n        ]\n      },\n      spam_percentage: {\n        type: 'number'\n      },\n      test_id: {\n        type: 'string'\n      },\n      to: {\n        type: 'string'\n      }\n    },\n    required: []\n  }\n}\n```",
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
      previous_date_from: {
        type: 'string',
      },
      previous_date_to: {
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
      show_previous: {
        type: 'boolean',
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
    await maybeFilter(args, await client.v2.inboxPlacementAnalytics.getDeliverabilityInsights(body)),
  );
};

export default { metadata, tool, handler };
