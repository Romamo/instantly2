// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { asTextContentResult } from 'instantly2-mcp/tools/types';

import { Tool } from '@modelcontextprotocol/sdk/types.js';
import type { Metadata } from '../../';
import Instantly2 from 'instantly2';

export const metadata: Metadata = {
  resource: 'v2.workspace_members',
  operation: 'write',
  tags: [],
  httpMethod: 'delete',
  httpPath: '/api/v2/workspace-members/{id}',
  operationId: 'deleteWorkspaceMember',
};

export const tool: Tool = {
  name: 'delete_v2_workspace_members',
  description:
    'Requires one of the following scopes: `workspace_members:delete`, `workspace_members:all`, `all:delete`, `all:all`',
  inputSchema: {
    type: 'object',
    properties: {
      id: {
        type: 'string',
      },
      body: {
        type: 'null',
      },
    },
  },
};

export const handler = async (client: Instantly2, args: Record<string, unknown> | undefined) => {
  const { id, ...body } = args as any;
  return asTextContentResult(await client.v2.workspaceMembers.delete(id, body));
};

export default { metadata, tool, handler };
