// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { asTextContentResult } from 'instantly2-mcp/tools/types';

import { Tool } from '@modelcontextprotocol/sdk/types.js';
import type { Metadata } from '../../';
import Instantly2 from 'instantly2';

export const metadata: Metadata = {
  resource: 'v2.inbox_placement_tests',
  operation: 'read',
  tags: [],
  httpMethod: 'get',
  httpPath: '/api/v2/inbox-placement-tests/{id}',
  operationId: 'getInboxPlacementTest',
};

export const tool: Tool = {
  name: 'retrieve_v2_inbox_placement_tests',
  description:
    'Requires one of the following scopes: `inbox_placement_tests:read`, `inbox_placement_tests:all`, `all:read`, `all:all`',
  inputSchema: {
    type: 'object',
    properties: {
      id: {
        type: 'string',
      },
      with_metadata: {
        type: 'boolean',
        description: 'Whether to include additional metadata about the inbox placement test',
      },
    },
  },
};

export const handler = async (client: Instantly2, args: Record<string, unknown> | undefined) => {
  const { id, ...body } = args as any;
  return asTextContentResult(await client.v2.inboxPlacementTests.retrieve(id, body));
};

export default { metadata, tool, handler };
