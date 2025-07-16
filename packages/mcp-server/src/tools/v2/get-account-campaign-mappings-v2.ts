// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { maybeFilter } from 'instantly2-mcp/filtering';
import { Metadata, asTextContentResult } from 'instantly2-mcp/tools/types';

import { Tool } from '@modelcontextprotocol/sdk/types.js';
import Instantly2 from 'instantly2';

export const metadata: Metadata = {
  resource: 'v2',
  operation: 'read',
  tags: [],
  httpMethod: 'get',
  httpPath: '/api/v2/account-campaign-mappings/{email}',
  operationId: 'getAccountCampaignMapping',
};

export const tool: Tool = {
  name: 'get_account_campaign_mappings_v2',
  description:
    "When using this tool, always use the `jq_filter` parameter to reduce the response size and improve performance.\n\nOnly omit if you're sure you don't need the data.\n\nRequires one of the following scopes: `account_campaign_mappings:read`, `account_campaign_mappings:all`, `all:read`, `all:all`\n\n# Response Schema\n```json\n{\n  type: 'object',\n  properties: {\n    items: {\n      type: 'array',\n      items: {\n        type: 'object',\n        title: 'Account Campaign Mapping',\n        description: 'Account Campaign Mapping',\n        properties: {\n          campaign_id: {\n            type: 'string'\n          },\n          campaign_name: {\n            type: 'string'\n          },\n          timestamp_created: {\n            type: 'string',\n            description: 'Timestamp when the campaign was created'\n          },\n          status: {\n            type: 'string',\n            description: 'Campaign Status',\n            enum: [              -99,\n              -1,\n              -2,\n              0,\n              1,\n              2,\n              3,\n              4\n            ]\n          }\n        },\n        required: [          'campaign_id',\n          'campaign_name',\n          'timestamp_created'\n        ]\n      }\n    },\n    next_starting_after: {\n      type: 'string',\n      description: 'The filter for getting the next items after this one, this could either be a UUID, a MongoDB ID, a timestamp, on an email depending on the specific API'\n    }\n  },\n  required: [    'items'\n  ]\n}\n```",
  inputSchema: {
    type: 'object',
    properties: {
      email: {
        type: 'string',
      },
      limit: {
        type: 'number',
      },
      starting_after: {
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
  const { email, ...body } = args as any;
  return asTextContentResult(
    await maybeFilter(args, await client.v2.getAccountCampaignMappings(email, body)),
  );
};

export default { metadata, tool, handler };
