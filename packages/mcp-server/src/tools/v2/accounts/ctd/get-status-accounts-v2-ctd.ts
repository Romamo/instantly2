// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { maybeFilter } from 'instantly2-mcp/filtering';
import { asTextContentResult } from 'instantly2-mcp/tools/types';

import { Tool } from '@modelcontextprotocol/sdk/types.js';
import type { Metadata } from '../../../';
import Instantly2 from 'instantly2';

export const metadata: Metadata = {
  resource: 'v2.accounts.ctd',
  operation: 'read',
  tags: [],
  httpMethod: 'get',
  httpPath: '/api/v2/accounts/ctd/status',
  operationId: 'getCtdStatus',
};

export const tool: Tool = {
  name: 'get_status_accounts_v2_ctd',
  description:
    "When using this tool, always use the `jq_filter` parameter to reduce the response size and improve performance.\n\nOnly omit if you're sure you don't need the data.\n\nRequires one of the following scopes: `accounts:read`, `accounts:all`, `all:read`, `all:all`\n\n# Response Schema\n```json\n{\n  type: 'object',\n  properties: {\n    cname: {\n      type: 'boolean'\n    },\n    host: {\n      type: 'string'\n    },\n    ssl: {\n      type: 'boolean'\n    },\n    success: {\n      type: 'boolean'\n    }\n  },\n  required: []\n}\n```",
  inputSchema: {
    type: 'object',
    properties: {
      host: {
        type: 'string',
        description: 'Custom tracking domain host',
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
  return asTextContentResult(await maybeFilter(args, await client.v2.accounts.ctd.getStatus(body)));
};

export default { metadata, tool, handler };
