// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { maybeFilter } from 'instantly2-mcp/filtering';
import { Metadata, asTextContentResult } from 'instantly2-mcp/tools/types';

import { Tool } from '@modelcontextprotocol/sdk/types.js';
import Instantly2 from 'instantly2';

export const metadata: Metadata = {
  resource: 'v2.block_lists_entries',
  operation: 'write',
  tags: [],
  httpMethod: 'patch',
  httpPath: '/api/v2/block-lists-entries/{id}',
  operationId: 'patchBlockListEntry',
};

export const tool: Tool = {
  name: 'update_v2_block_lists_entries',
  description:
    "When using this tool, always use the `jq_filter` parameter to reduce the response size and improve performance.\n\nOnly omit if you're sure you don't need the data.\n\nRequires one of the following scopes: `block_list_entries:update`, `block_list_entries:all`, `all:update`, `all:all`\n\n# Response Schema\n```json\n{\n  $ref: '#/$defs/blocked_entry',\n  $defs: {\n    blocked_entry: {\n      type: 'object',\n      title: 'Block List Entry',\n      description: 'A blocked email or domain',\n      properties: {\n        id: {\n          type: 'string',\n          description: 'Unique identifier for the block list entry'\n        },\n        bl_value: {\n          type: 'string',\n          description: 'The email or domain to block'\n        },\n        is_domain: {\n          type: 'boolean',\n          description: 'Whether this entry blocks an entire domain'\n        },\n        organization_id: {\n          type: 'string',\n          description: 'Organization ID that owns this block list entry'\n        },\n        timestamp_created: {\n          type: 'string',\n          description: 'Timestamp when the block list entry was created',\n          format: 'date-time'\n        }\n      },\n      required: [        'id',\n        'bl_value',\n        'is_domain',\n        'organization_id',\n        'timestamp_created'\n      ]\n    }\n  }\n}\n```",
  inputSchema: {
    type: 'object',
    properties: {
      id: {
        type: 'string',
      },
      bl_value: {
        type: 'string',
        description: 'The email or domain to block',
      },
      jq_filter: {
        type: 'string',
        title: 'jq Filter',
        description:
          'A jq filter to apply to the response to include certain fields. Consult the output schema in the tool description to see the fields that are available.\n\nFor example: to include only the `name` field in every object of a results array, you can provide ".results[].name".\n\nFor more information, see the [jq documentation](https://jqlang.org/manual/).',
      },
    },
    required: ['id'],
  },
};

export const handler = async (client: Instantly2, args: Record<string, unknown> | undefined) => {
  const { id, ...body } = args as any;
  return asTextContentResult(await maybeFilter(args, await client.v2.blockListsEntries.update(id, body)));
};

export default { metadata, tool, handler };
