// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { Tool } from '@modelcontextprotocol/sdk/types.js';
import type { Metadata } from '../../';
import Instantly2 from 'instantly2';

export const metadata: Metadata = {
  resource: 'v2.lead_labels',
  operation: 'write',
  tags: [],
  httpMethod: 'patch',
  httpPath: '/api/v2/lead-labels/{id}',
  operationId: 'patchLeadLabel',
};

export const tool: Tool = {
  name: 'update_v2_lead_labels',
  description:
    'Requires one of the following scopes: `lead-labels:update`, `lead-labels:all`, `all:update`, `all:all`',
  inputSchema: {
    type: 'object',
    properties: {
      id: {
        type: 'string',
      },
      description: {
        type: 'string',
        description: 'Detailed description of the custom lead label purpose',
      },
      interest_status_label: {
        type: 'string',
        description: 'Interest status label associated with this label',
        enum: ['positive', 'negative', 'neutral'],
      },
      label: {
        type: 'string',
        description: 'Display label for the custom lead label',
      },
      use_with_ai: {
        type: 'boolean',
        description: 'Whether this label should be used with AI features',
      },
    },
  },
};

export const handler = (client: Instantly2, args: Record<string, unknown> | undefined) => {
  const { id, ...body } = args as any;
  return client.v2.leadLabels.update(id, body);
};

export default { metadata, tool, handler };
