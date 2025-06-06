// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { asTextContentResult } from 'instantly2-mcp/tools/types';

import { Tool } from '@modelcontextprotocol/sdk/types.js';
import type { Metadata } from '../../';
import Instantly2 from 'instantly2';

export const metadata: Metadata = {
  resource: 'v2.lead_labels',
  operation: 'write',
  tags: [],
  httpMethod: 'delete',
  httpPath: '/api/v2/lead-labels/{id}',
  operationId: 'deleteLeadLabel',
};

export const tool: Tool = {
  name: 'delete_v2_lead_labels',
  description:
    'Requires one of the following scopes: `lead-labels:delete`, `lead-labels:all`, `all:delete`, `all:all`',
  inputSchema: {
    type: 'object',
    properties: {
      id: {
        type: 'string',
      },
      reassigned_status: {
        type: 'number',
      },
    },
  },
};

export const handler = async (client: Instantly2, args: Record<string, unknown> | undefined) => {
  const { id, ...body } = args as any;
  return asTextContentResult(await client.v2.leadLabels.delete(id, body));
};

export default { metadata, tool, handler };
