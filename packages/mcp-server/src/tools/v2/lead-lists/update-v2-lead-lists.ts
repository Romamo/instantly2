// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { Tool } from '@modelcontextprotocol/sdk/types.js';
import type { Metadata } from '../../';
import Instantly2 from 'instantly2';

export const metadata: Metadata = {
  resource: 'v2.lead_lists',
  operation: 'write',
  tags: [],
};

export const tool: Tool = {
  name: 'update_v2_lead_lists',
  description:
    'Requires one of the following scopes: `lead_lists:update`, `lead_lists:all`, `all:update`, `all:all`',
  inputSchema: {
    type: 'object',
    properties: {
      id: {
        type: 'string',
      },
      has_enrichment_task: {
        type: 'boolean',
        description: 'Whether this list runs the enrichment process on every added lead or not',
      },
      name: {
        type: 'string',
        description: 'Name of the lead list',
      },
      owned_by: {
        type: 'string',
        description: 'User ID of the owner of this lead list. Defaults to the user that created the list',
      },
    },
  },
};

export const handler = (client: Instantly2, args: Record<string, unknown> | undefined) => {
  const { id, ...body } = args as any;
  return client.v2.leadLists.update(id, body);
};

export default { metadata, tool, handler };
