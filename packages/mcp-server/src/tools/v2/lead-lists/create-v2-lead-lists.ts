// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { asTextContentResult } from 'instantly2-mcp/tools/types';

import { Tool } from '@modelcontextprotocol/sdk/types.js';
import type { Metadata } from '../../';
import Instantly2 from 'instantly2';

export const metadata: Metadata = {
  resource: 'v2.lead_lists',
  operation: 'write',
  tags: [],
  httpMethod: 'post',
  httpPath: '/api/v2/lead-lists',
  operationId: 'createLeadList',
};

export const tool: Tool = {
  name: 'create_v2_lead_lists',
  description:
    'Requires one of the following scopes: `lead_lists:create`, `lead_lists:all`, `all:create`, `all:all`',
  inputSchema: {
    type: 'object',
    properties: {
      name: {
        type: 'string',
        description: 'Name of the lead list',
      },
      has_enrichment_task: {
        type: 'boolean',
        description: 'Whether this list runs the enrichment process on every added lead or not',
      },
      owned_by: {
        type: 'string',
        description: 'User ID of the owner of this lead list. Defaults to the user that created the list',
      },
    },
  },
};

export const handler = async (client: Instantly2, args: Record<string, unknown> | undefined) => {
  const body = args as any;
  return asTextContentResult(await client.v2.leadLists.create(body));
};

export default { metadata, tool, handler };
