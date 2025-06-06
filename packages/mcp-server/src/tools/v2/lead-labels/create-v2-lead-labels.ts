// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { asTextContentResult } from 'instantly2-mcp/tools/types';

import { Tool } from '@modelcontextprotocol/sdk/types.js';
import type { Metadata } from '../../';
import Instantly2 from 'instantly2';

export const metadata: Metadata = {
  resource: 'v2.lead_labels',
  operation: 'write',
  tags: [],
  httpMethod: 'post',
  httpPath: '/api/v2/lead-labels',
  operationId: 'createLeadLabel',
};

export const tool: Tool = {
  name: 'create_v2_lead_labels',
  description:
    'Requires one of the following scopes: `lead-labels:create`, `lead-labels:all`, `all:create`, `all:all`',
  inputSchema: {
    type: 'object',
    properties: {
      interest_status_label: {
        type: 'string',
        description: 'Interest status label associated with this label',
        enum: ['positive', 'negative', 'neutral'],
      },
      label: {
        type: 'string',
        description: 'Display label for the custom lead label',
      },
      description: {
        type: 'string',
        description: 'Detailed description of the custom lead label purpose',
      },
      use_with_ai: {
        type: 'boolean',
        description: 'Whether this label should be used with AI features',
      },
    },
  },
};

export const handler = async (client: Instantly2, args: Record<string, unknown> | undefined) => {
  const body = args as any;
  return asTextContentResult(await client.v2.leadLabels.create(body));
};

export default { metadata, tool, handler };
