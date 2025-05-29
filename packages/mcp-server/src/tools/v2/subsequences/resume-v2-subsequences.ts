// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { Tool } from '@modelcontextprotocol/sdk/types.js';
import type { Metadata } from '../../';
import Instantly2 from 'instantly2';

export const metadata: Metadata = {
  resource: 'v2.subsequences',
  operation: 'write',
  tags: [],
  httpMethod: 'post',
  httpPath: '/api/v2/subsequences/{id}/resume',
  operationId: 'resumeSubsequence',
};

export const tool: Tool = {
  name: 'resume_v2_subsequences',
  description:
    'Resume a paused subsequence\n\n\nRequires one of the following scopes: `subsequences:update`, `subsequences:all`, `all:update`, `all:all`',
  inputSchema: {
    type: 'object',
    properties: {
      id: {
        type: 'string',
      },
    },
  },
};

export const handler = (client: Instantly2, args: Record<string, unknown> | undefined) => {
  const { id, ...body } = args as any;
  return client.v2.subsequences.resume(id);
};

export default { metadata, tool, handler };
