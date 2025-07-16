// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { maybeFilter } from 'instantly2-mcp/filtering';
import { Metadata, asTextContentResult } from 'instantly2-mcp/tools/types';

import { Tool } from '@modelcontextprotocol/sdk/types.js';
import Instantly2 from 'instantly2';

export const metadata: Metadata = {
  resource: 'v2.inbox_placement_tests',
  operation: 'read',
  tags: [],
  httpMethod: 'get',
  httpPath: '/api/v2/inbox-placement-tests/email-service-provider-options',
  operationId: 'getInboxPlacementTestESPOptions',
};

export const tool: Tool = {
  name: 'get_esp_options_v2_inbox_placement_tests',
  description:
    "When using this tool, always use the `jq_filter` parameter to reduce the response size and improve performance.\n\nOnly omit if you're sure you don't need the data.\n\nProvides a list of available email service providers for inbox placement tests.\n\n# Response Schema\n```json\n{\n  type: 'array',\n  items: {\n    type: 'object',\n    properties: {\n      esp: {\n        type: 'string'\n      },\n      region: {\n        type: 'string'\n      },\n      sub_region: {\n        type: 'string'\n      },\n      type: {\n        type: 'string'\n      }\n    },\n    required: [      'esp',\n      'region',\n      'sub_region',\n      'type'\n    ]\n  }\n}\n```",
  inputSchema: {
    type: 'object',
    properties: {
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
  return asTextContentResult(await maybeFilter(args, await client.v2.inboxPlacementTests.getEspOptions()));
};

export default { metadata, tool, handler };
