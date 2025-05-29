// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { Tool } from '@modelcontextprotocol/sdk/types.js';
import type { Metadata } from '../../../';
import Instantly2 from 'instantly2';

export const metadata: Metadata = {
  resource: 'v2.workspaces.current',
  operation: 'write',
  tags: [],
  httpMethod: 'patch',
  httpPath: '/api/v2/workspaces/current',
  operationId: 'patchWorkspace',
};

export const tool: Tool = {
  name: 'update_workspaces_v2_current',
  description:
    "Update your current workspace details. Note that this endpoint doesn't require any parameters. It will update the workspace based on the API key sent in the headers.\n\n\nRequires one of the following scopes: `workspaces:update`, `workspaces:all`, `all:update`, `all:all`",
  inputSchema: {
    type: 'object',
    properties: {
      name: {
        type: 'string',
        description: 'Name of the workspace',
      },
    },
  },
};

export const handler = (client: Instantly2, args: Record<string, unknown> | undefined) => {
  const body = args as any;
  return client.v2.workspaces.current.update(body);
};

export default { metadata, tool, handler };
