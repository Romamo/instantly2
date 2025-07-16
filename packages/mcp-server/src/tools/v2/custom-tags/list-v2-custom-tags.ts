// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { maybeFilter } from 'instantly2-mcp/filtering';
import { Metadata, asTextContentResult } from 'instantly2-mcp/tools/types';

import { Tool } from '@modelcontextprotocol/sdk/types.js';
import Instantly2 from 'instantly2';

export const metadata: Metadata = {
  resource: 'v2.custom_tags',
  operation: 'read',
  tags: [],
  httpMethod: 'get',
  httpPath: '/api/v2/custom-tags',
  operationId: 'listCustomTag',
};

export const tool: Tool = {
  name: 'list_v2_custom_tags',
  description:
    "When using this tool, always use the `jq_filter` parameter to reduce the response size and improve performance.\n\nOnly omit if you're sure you don't need the data.\n\nRequires one of the following scopes: `custom_tags:read`, `custom_tags:all`, `all:read`, `all:all`\n\n# Response Schema\n```json\n{\n  type: 'object',\n  properties: {\n    items: {\n      type: 'array',\n      items: {\n        $ref: '#/$defs/custom_tag'\n      }\n    },\n    next_starting_after: {\n      type: 'string',\n      description: 'The filter for getting the next items after this one, this could either be a UUID, a MongoDB ID, a timestamp, on an email depending on the specific API'\n    }\n  },\n  required: [    'items'\n  ],\n  $defs: {\n    custom_tag: {\n      type: 'object',\n      title: 'Custom Tag',\n      description: 'A custom tag for organizing and categorizing accounts and campaigns. You can use them as filters in apis that list accounts and campaigns.',\n      properties: {\n        id: {\n          type: 'string',\n          description: 'Unique identifier for the custom tag'\n        },\n        label: {\n          type: 'string',\n          description: 'Display label for the custom tag'\n        },\n        organization_id: {\n          type: 'string',\n          description: 'Organization ID that owns this custom tag'\n        },\n        timestamp_created: {\n          type: 'string',\n          description: 'Timestamp when the custom tag was created',\n          format: 'date-time'\n        },\n        timestamp_updated: {\n          type: 'string',\n          description: 'Timestamp when the custom tag was last updated',\n          format: 'date-time'\n        },\n        description: {\n          type: 'string',\n          description: 'Detailed description of the custom tag purpose'\n        }\n      },\n      required: [        'id',\n        'label',\n        'organization_id',\n        'timestamp_created',\n        'timestamp_updated'\n      ]\n    }\n  }\n}\n```",
  inputSchema: {
    type: 'object',
    properties: {
      limit: {
        type: 'integer',
        description: 'The number of items to return',
      },
      resource_ids: {
        type: 'string',
      },
      search: {
        type: 'string',
      },
      starting_after: {
        type: 'string',
        description:
          'The ID of the last item in the previous page - used for pagination. You can use the value of the `next_starting_after` field from the previous response.',
      },
      tag_ids: {
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
  return asTextContentResult(await maybeFilter(args, await client.v2.customTags.list(body)));
};

export default { metadata, tool, handler };
