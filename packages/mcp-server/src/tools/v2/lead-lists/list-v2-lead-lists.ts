// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { asTextContentResult } from 'instantly2-mcp/tools/types';

import { Tool } from '@modelcontextprotocol/sdk/types.js';
import type { Metadata } from '../../';
import Instantly2 from 'instantly2';

export const metadata: Metadata = {
  resource: 'v2.lead_lists',
  operation: 'read',
  tags: [],
  httpMethod: 'get',
  httpPath: '/api/v2/lead-lists',
  operationId: 'listLeadList',
};

export const tool: Tool = {
  name: 'list_v2_lead_lists',
  description:
    'Requires one of the following scopes: `lead_lists:read`, `lead_lists:all`, `all:read`, `all:all`',
  inputSchema: {
    type: 'object',
    properties: {
      has_enrichment_task: {
        type: 'boolean',
      },
      limit: {
        type: 'integer',
        description: 'The number of items to return',
      },
      search: {
        type: 'string',
        description: 'Search by list name',
      },
      starting_after: {
        type: 'string',
      },
    },
  },
};

export const handler = async (client: Instantly2, args: Record<string, unknown> | undefined) => {
  const body = args as any;
  return asTextContentResult(await client.v2.leadLists.list(body));
};

export default { metadata, tool, handler };
