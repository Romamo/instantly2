// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { asTextContentResult } from 'instantly2-mcp/tools/types';

import { Tool } from '@modelcontextprotocol/sdk/types.js';
import type { Metadata } from '../../';
import Instantly2 from 'instantly2';

export const metadata: Metadata = {
  resource: 'v2.workspace_group_members',
  operation: 'read',
  tags: [],
  httpMethod: 'get',
  httpPath: '/api/v2/workspace-group-members/{id}',
  operationId: 'getWorkspaceGroupMember',
};

export const tool: Tool = {
  name: 'retrieve_v2_workspace_group_members',
  description:
    'Requires one of the following scopes: `workspace_group_members:read`, `workspace_group_members:all`, `all:read`, `all:all`',
  inputSchema: {
    type: 'object',
    properties: {
      id: {
        type: 'string',
      },
    },
  },
};

export const handler = async (client: Instantly2, args: Record<string, unknown> | undefined) => {
  const { id, ...body } = args as any;
  return asTextContentResult(await client.v2.workspaceGroupMembers.retrieve(id));
};

export default { metadata, tool, handler };
