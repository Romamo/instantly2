// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { Tool } from '@modelcontextprotocol/sdk/types.js';
import type { Metadata } from '../../';
import Instantly2 from 'instantly2';

export const metadata: Metadata = {
  resource: 'v2.subsequences',
  operation: 'write',
  tags: [],
};

export const tool: Tool = {
  name: 'duplicate_v2_subsequences',
  description:
    'Duplicate a subsequence with the same trigger conditions\n\n\nRequires one of the following scopes: `subsequences:create`, `subsequences:all`, `all:create`, `all:all`',
  inputSchema: {
    type: 'object',
    properties: {
      id: {
        type: 'string',
      },
      name: {
        type: 'string',
      },
      parent_campaign: {
        type: 'string',
      },
    },
  },
};

export const handler = (client: Instantly2, args: Record<string, unknown> | undefined) => {
  const { id, ...body } = args as any;
  return client.v2.subsequences.duplicate(id, body);
};

export default { metadata, tool, handler };
