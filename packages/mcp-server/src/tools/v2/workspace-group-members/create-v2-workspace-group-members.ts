// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { Tool } from '@modelcontextprotocol/sdk/types.js';
import type { Metadata } from '../../';
import Instantly2 from 'instantly2';

export const metadata: Metadata = {
  resource: 'v2.workspace_group_members',
  operation: 'write',
  tags: [],
  httpMethod: 'post',
  httpPath: '/api/v2/workspace-group-members',
  operationId: 'createWorkspaceGroupMember',
};

export const tool: Tool = {
  name: 'create_v2_workspace_group_members',
  description:
    'This endpoint allows you to send an invitation for a sub workspace to join the admin workspace. The sub workspace will be added as a sub workspace of the admin workspace only if the sub workspace owner accepts the invitation.\n\n\nRequires one of the following scopes: `workspace_group_members:create`, `workspace_group_members:all`, `all:create`, `all:all`',
  inputSchema: {
    type: 'object',
    properties: {
      sub_workspace_id: {
        type: 'string',
        description: 'The id of the sub workspace',
      },
    },
  },
};

export const handler = (client: Instantly2, args: Record<string, unknown> | undefined) => {
  const body = args as any;
  return client.v2.workspaceGroupMembers.create(body);
};

export default { metadata, tool, handler };
