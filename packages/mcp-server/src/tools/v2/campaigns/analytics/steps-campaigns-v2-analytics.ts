// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { maybeFilter } from 'instantly2-mcp/filtering';
import { Metadata, asTextContentResult } from 'instantly2-mcp/tools/types';

import { Tool } from '@modelcontextprotocol/sdk/types.js';
import Instantly2 from 'instantly2';

export const metadata: Metadata = {
  resource: 'v2.campaigns.analytics',
  operation: 'read',
  tags: [],
  httpMethod: 'get',
  httpPath: '/api/v2/campaigns/analytics/steps',
  operationId: 'getCampaignStepsAnalytics',
};

export const tool: Tool = {
  name: 'steps_campaigns_v2_analytics',
  description:
    "When using this tool, always use the `jq_filter` parameter to reduce the response size and improve performance.\n\nOnly omit if you're sure you don't need the data.\n\nGet campaign steps analytics\n\n# Response Schema\n```json\n{\n  type: 'array',\n  items: {\n    type: 'object',\n    properties: {\n      clicks: {\n        type: 'integer',\n        description: 'The total number of links clicked'\n      },\n      opened: {\n        type: 'integer',\n        description: 'The total number of opened emails'\n      },\n      replies: {\n        type: 'integer',\n        description: 'The total number of replies'\n      },\n      sent: {\n        type: 'integer',\n        description: 'The total number of sent emails'\n      },\n      step: {\n        type: 'string',\n        description: 'The step number'\n      },\n      unique_clicks: {\n        type: 'integer',\n        description: 'The total number of unique links clicked. Unique meaning from unique leads, not unique links. For instance, if a lead clicked a link 3 times, it will be counted as 1 unique click. If a lead clicked 3 different links, it will still be counted as 1 unique click'\n      },\n      unique_opened: {\n        type: 'integer',\n        description: 'The total number of opened emails'\n      },\n      unique_replies: {\n        type: 'integer',\n        description: 'The total number of replies'\n      },\n      variant: {\n        type: 'string',\n        description: 'The variant number, starting from 0. 0 = A, 1 = B, 2 = C, etc.'\n      }\n    }\n  }\n}\n```",
  inputSchema: {
    type: 'object',
    properties: {
      campaign_id: {
        type: 'string',
        description: 'Campaign ID (optional). Leave this field empty to get the analytics for all campaigns',
      },
      end_date: {
        type: 'string',
        description: 'End date',
      },
      start_date: {
        type: 'string',
        description: 'Start date',
      },
      jq_filter: {
        type: 'string',
        title: 'jq Filter',
        description:
          'A jq filter to apply to the response to include certain fields. Consult the output schema in the tool description to see the fields that are available.\n\nFor example: to include only the `name` field in every object of a results array, you can provide ".results[].name".\n\nFor more information, see the [jq documentation](https://jqlang.org/manual/).',
      },
    },
    required: [],
  },
};

export const handler = async (client: Instantly2, args: Record<string, unknown> | undefined) => {
  const body = args as any;
  return asTextContentResult(await maybeFilter(args, await client.v2.campaigns.analytics.steps(body)));
};

export default { metadata, tool, handler };
