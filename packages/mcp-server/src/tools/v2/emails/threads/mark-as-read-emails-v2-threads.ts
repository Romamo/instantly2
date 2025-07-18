// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { maybeFilter } from 'instantly2-mcp/filtering';
import { Metadata, asTextContentResult } from 'instantly2-mcp/tools/types';

import { Tool } from '@modelcontextprotocol/sdk/types.js';
import Instantly2 from 'instantly2';

export const metadata: Metadata = {
  resource: 'v2.emails.threads',
  operation: 'write',
  tags: [],
  httpMethod: 'post',
  httpPath: '/api/v2/emails/threads/{thread_id}/mark-as-read',
  operationId: 'markThreadAsRead',
};

export const tool: Tool = {
  name: 'mark_as_read_emails_v2_threads',
  description:
    "When using this tool, always use the `jq_filter` parameter to reduce the response size and improve performance.\n\nOnly omit if you're sure you don't need the data.\n\nRequires one of the following scopes: `emails:update`, `emails:all`, `all:update`, `all:all`\n\n# Response Schema\n```json\n{\n  type: 'object',\n  properties: {\n    success: {\n      type: 'boolean'\n    }\n  }\n}\n```",
  inputSchema: {
    type: 'object',
    properties: {
      thread_id: {
        type: 'string',
      },
      jq_filter: {
        type: 'string',
        title: 'jq Filter',
        description:
          'A jq filter to apply to the response to include certain fields. Consult the output schema in the tool description to see the fields that are available.\n\nFor example: to include only the `name` field in every object of a results array, you can provide ".results[].name".\n\nFor more information, see the [jq documentation](https://jqlang.org/manual/).',
      },
    },
    required: ['thread_id'],
  },
};

export const handler = async (client: Instantly2, args: Record<string, unknown> | undefined) => {
  const { thread_id, ...body } = args as any;
  return asTextContentResult(await maybeFilter(args, await client.v2.emails.threads.markAsRead(thread_id)));
};

export default { metadata, tool, handler };
