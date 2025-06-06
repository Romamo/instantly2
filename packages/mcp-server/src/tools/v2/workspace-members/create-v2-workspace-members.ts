// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { asTextContentResult } from 'instantly2-mcp/tools/types';

import { Tool } from '@modelcontextprotocol/sdk/types.js';
import type { Metadata } from '../../';
import Instantly2 from 'instantly2';

export const metadata: Metadata = {
  resource: 'v2.workspace_members',
  operation: 'write',
  tags: [],
  httpMethod: 'post',
  httpPath: '/api/v2/workspace-members',
  operationId: 'createWorkspaceMember',
};

export const tool: Tool = {
  name: 'create_v2_workspace_members',
  description:
    'Requires one of the following scopes: `workspace_members:create`, `workspace_members:all`, `all:create`, `all:all`',
  inputSchema: {
    type: 'object',
    properties: {
      email: {
        type: 'string',
        description: 'Email address of the workspace member',
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

export const handler = async (client: Instantly2, args: Record<string, unknown> | undefined) => {
  const body = args as any;
  return asTextContentResult(await client.v2.workspaceMembers.create(body));
};

export default { metadata, tool, handler };
