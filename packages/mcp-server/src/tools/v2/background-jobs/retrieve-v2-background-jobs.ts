// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { Tool } from '@modelcontextprotocol/sdk/types.js';
import type { Metadata } from '../../';
import Instantly2 from 'instantly2';

export const metadata: Metadata = {
  resource: 'v2.background_jobs',
  operation: 'read',
  tags: [],
};

export const tool: Tool = {
  name: 'retrieve_v2_background_jobs',
  description:
    'Requires one of the following scopes: `background-jobs:read`, `background-jobs:all`, `all:read`, `all:all`',
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
  return client.v2.backgroundJobs.retrieve(id);
};

export default { metadata, tool, handler };
