// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { maybeFilter } from 'instantly2-mcp/filtering';
import { Metadata, asTextContentResult } from 'instantly2-mcp/tools/types';

import { Tool } from '@modelcontextprotocol/sdk/types.js';
import Instantly2 from 'instantly2';

export const metadata: Metadata = {
  resource: 'v2.lead_lists',
  operation: 'read',
  tags: [],
  httpMethod: 'get',
  httpPath: '/api/v2/lead-lists/{id}',
  operationId: 'getLeadList',
};

export const tool: Tool = {
  name: 'retrieve_v2_lead_lists',
  description:
    "When using this tool, always use the `jq_filter` parameter to reduce the response size and improve performance.\n\nOnly omit if you're sure you don't need the data.\n\nRequires one of the following scopes: `lead_lists:read`, `lead_lists:all`, `all:read`, `all:all`\n\n# Response Schema\n```json\n{\n  $ref: '#/$defs/lead_list',\n  $defs: {\n    lead_list: {\n      type: 'object',\n      title: 'Lead List',\n      description: 'A list used to store leads',\n      properties: {\n        id: {\n          type: 'string',\n          description: 'Unique identifier for the lead list'\n        },\n        name: {\n          type: 'string',\n          description: 'Name of the lead list'\n        },\n        organization_id: {\n          type: 'string',\n          description: 'Organization ID that owns this lead list'\n        },\n        timestamp_created: {\n          type: 'string',\n          description: 'Timestamp when the lead list was created',\n          format: 'date-time'\n        },\n        has_enrichment_task: {\n          type: 'boolean',\n          description: 'Whether this list runs the enrichment process on every added lead or not'\n        },\n        owned_by: {\n          type: 'string',\n          description: 'User ID of the owner of this lead list. Defaults to the user that created the list'\n        }\n      },\n      required: [        'id',\n        'name',\n        'organization_id',\n        'timestamp_created'\n      ]\n    }\n  }\n}\n```",
  inputSchema: {
    type: 'object',
    properties: {
      id: {
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
  const { id, ...body } = args as any;
  return asTextContentResult(await maybeFilter(args, await client.v2.leadLists.retrieve(id)));
};

export default { metadata, tool, handler };
