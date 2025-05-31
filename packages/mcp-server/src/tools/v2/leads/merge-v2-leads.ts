// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { Tool } from '@modelcontextprotocol/sdk/types.js';
import type { Metadata } from '../../';
import Instantly2 from 'instantly2';

export const metadata: Metadata = {
  resource: 'v2.leads',
  operation: 'write',
  tags: [],
  httpMethod: 'post',
  httpPath: '/api/v2/leads/merge',
  operationId: 'mergeLeads',
};

export const tool: Tool = {
  name: 'merge_v2_leads',
  description:
    'Merge two leads\n\n\nRequires one of the following scopes: `leads:update`, `leads:all`, `all:update`, `all:all`',
  inputSchema: {
    type: 'object',
    properties: {
      destination_lead_id: {
        type: 'string',
      },
      lead_id: {
        type: 'string',
      },
    },
  },
};

export const handler = (client: Instantly2, args: Record<string, unknown> | undefined) => {
  const body = args as any;
  return client.v2.leads.merge(body);
};

export default { metadata, tool, handler };
