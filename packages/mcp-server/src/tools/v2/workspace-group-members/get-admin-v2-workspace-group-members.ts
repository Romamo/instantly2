// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { Tool } from '@modelcontextprotocol/sdk/types.js';
import type { Metadata } from '../../';
import Instantly2 from 'instantly2';

export const metadata: Metadata = {
  resource: 'v2.workspace_group_members',
  operation: 'read',
  tags: [],
  httpMethod: 'get',
  httpPath: '/api/v2/workspace-group-members/admin',
  operationId: 'getAdminWorkspaceGroupMember',
};

export const tool: Tool = {
  name: 'get_admin_v2_workspace_group_members',
  description: 'Get the details of the admin workspace of the current workspace',
  inputSchema: {
    type: 'object',
    properties: {},
  },
};

export const handler = (client: Instantly2, args: Record<string, unknown> | undefined) => {
  return client.v2.workspaceGroupMembers.getAdmin();
};

export default { metadata, tool, handler };
