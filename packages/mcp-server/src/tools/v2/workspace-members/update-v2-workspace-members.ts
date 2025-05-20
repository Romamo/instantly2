// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { Tool } from '@modelcontextprotocol/sdk/types.js';
import type { Metadata } from '../../';
import Instantly2 from 'instantly2';

export const metadata: Metadata = {
  resource: 'v2.workspace_members',
  operation: 'write',
  tags: [],
};

export const tool: Tool = {
  name: 'update_v2_workspace_members',
  description:
    'Requires one of the following scopes: `workspace_members:update`, `workspace_members:all`, `all:update`, `all:all`',
  inputSchema: {
    type: 'object',
    properties: {
      id: {
        type: 'string',
      },
      role: {
        type: 'string',
        description:
          'THe role of the workspace member defining their access level. While the "owner" role is listed in the enum, it cannot be created via the API, and is only assigned to the user who creates the workspace.',
        enum: ['owner', 'admin', 'editor', 'view', 'client'],
      },
    },
  },
};

export const handler = (client: Instantly2, args: Record<string, unknown> | undefined) => {
  const { id, ...body } = args as any;
  return client.v2.workspaceMembers.update(id, body);
};

export default { metadata, tool, handler };
