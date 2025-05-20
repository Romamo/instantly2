// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { Tool } from '@modelcontextprotocol/sdk/types.js';
import type { Metadata } from '../../../';
import Instantly2 from 'instantly2';

export const metadata: Metadata = {
  resource: 'v2.workspaces.current',
  operation: 'read',
  tags: [],
};

export const tool: Tool = {
  name: 'retrieve_workspaces_v2_current',
  description:
    "Get your current workspace details. Note that this endpoint doesn't require any parameters. It will return the workspace based on the API key sent in the headers.\n\n\nRequires one of the following scopes: `workspaces:read`, `workspaces:all`, `all:read`, `all:all`",
  inputSchema: {
    type: 'object',
    properties: {},
  },
};

export const handler = (client: Instantly2, args: Record<string, unknown> | undefined) => {
  return client.v2.workspaces.current.retrieve();
};

export default { metadata, tool, handler };
