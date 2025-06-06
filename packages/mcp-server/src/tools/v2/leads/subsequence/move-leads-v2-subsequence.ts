// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { asTextContentResult } from 'instantly2-mcp/tools/types';

import { Tool } from '@modelcontextprotocol/sdk/types.js';
import type { Metadata } from '../../../';
import Instantly2 from 'instantly2';

export const metadata: Metadata = {
  resource: 'v2.leads.subsequence',
  operation: 'write',
  tags: [],
  httpMethod: 'post',
  httpPath: '/api/v2/leads/subsequence/move',
  operationId: 'moveLeadToSubsequence',
};

export const tool: Tool = {
  name: 'move_leads_v2_subsequence',
  description:
    'Move a lead to a subsequence\n\n\nRequires one of the following scopes: `leads:update`, `leads:all`, `all:update`, `all:all`',
  inputSchema: {
    type: 'object',
    properties: {
      id: {
        type: 'string',
      },
      subsequence_id: {
        type: 'string',
      },
    },
  },
};

export const handler = async (client: Instantly2, args: Record<string, unknown> | undefined) => {
  const body = args as any;
  return asTextContentResult(await client.v2.leads.subsequence.move(body));
};

export default { metadata, tool, handler };
