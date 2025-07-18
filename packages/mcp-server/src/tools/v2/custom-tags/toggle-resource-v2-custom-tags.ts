// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { maybeFilter } from 'instantly2-mcp/filtering';
import { Metadata, asTextContentResult } from 'instantly2-mcp/tools/types';

import { Tool } from '@modelcontextprotocol/sdk/types.js';
import Instantly2 from 'instantly2';

export const metadata: Metadata = {
  resource: 'v2.custom_tags',
  operation: 'write',
  tags: [],
  httpMethod: 'post',
  httpPath: '/api/v2/custom-tags/toggle-resource',
  operationId: 'toggleTagResource',
};

export const tool: Tool = {
  name: 'toggle_resource_v2_custom_tags',
  description:
    "When using this tool, always use the `jq_filter` parameter to reduce the response size and improve performance.\n\nOnly omit if you're sure you don't need the data.\n\nThis can be used for both accounts and campaigns. Please check the `resource_type` field for more information.\n\n# Response Schema\n```json\n{\n  type: 'object',\n  properties: {\n    success: {\n      type: 'boolean'\n    }\n  }\n}\n```",
  inputSchema: {
    type: 'object',
    properties: {
      assign: {
        type: 'boolean',
      },
      resource_ids: {
        type: 'array',
        items: {
          type: 'string',
        },
      },
      resource_type: {
        type: 'string',
        description: 'The resource type to assign or unassign the tags to',
        enum: [1, 2],
      },
      tag_ids: {
        type: 'array',
        items: {
          type: 'string',
        },
      },
      filter: {
        anyOf: [
          {
            type: 'string',
            enum: [
              'ACC_FILTER_PAUSED',
              'ACC_FILTER_ERROR',
              'ACC_FILTER_NO_CTD',
              'ACC_FILTER_PW_ACCOUNTS',
              'ACC_FILTER_DFY',
              'ACC_FILTER_W_ACTIVE',
              'ACC_FILTER_W_PAUSED',
              'ACC_FILTER_W_ERROR',
            ],
          },
          {
            type: 'object',
            properties: {
              search: {
                type: 'string',
              },
              tag_id: {
                type: 'string',
              },
            },
          },
        ],
      },
      selected_all: {
        type: 'boolean',
      },
      jq_filter: {
        type: 'string',
        title: 'jq Filter',
        description:
          'A jq filter to apply to the response to include certain fields. Consult the output schema in the tool description to see the fields that are available.\n\nFor example: to include only the `name` field in every object of a results array, you can provide ".results[].name".\n\nFor more information, see the [jq documentation](https://jqlang.org/manual/).',
      },
    },
    required: ['assign', 'resource_ids', 'resource_type', 'tag_ids'],
  },
};

export const handler = async (client: Instantly2, args: Record<string, unknown> | undefined) => {
  const body = args as any;
  return asTextContentResult(await maybeFilter(args, await client.v2.customTags.toggleResource(body)));
};

export default { metadata, tool, handler };
