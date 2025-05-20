// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { Tool } from '@modelcontextprotocol/sdk/types.js';
import type { Metadata } from '../../';
import Instantly2 from 'instantly2';

export const metadata: Metadata = {
  resource: 'v2.workspace_group_members',
  operation: 'read',
  tags: [],
};

export const tool: Tool = {
  name: 'list_v2_workspace_group_members',
  description:
    'Requires one of the following scopes: `workspace_group_members:read`, `workspace_group_members:all`, `all:read`, `all:all`',
  inputSchema: {
    type: 'object',
    properties: {
      limit: {
        type: 'integer',
        description: 'The number of items to return',
      },
      starting_after: {
        type: 'string',
        description:
          'The ID of the last item in the previous page - used for pagination. You can use the value of the `next_starting_after` field from the previous response.',
      },
    },
  },
};

export const handler = (client: Instantly2, args: Record<string, unknown> | undefined) => {
  const body = args as any;
  return client.v2.workspaceGroupMembers.list(body);
};

export default { metadata, tool, handler };
