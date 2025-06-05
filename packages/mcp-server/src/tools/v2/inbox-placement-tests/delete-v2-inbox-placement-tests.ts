// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { Tool } from '@modelcontextprotocol/sdk/types.js';
import type { Metadata } from '../../';
import Instantly2 from 'instantly2';

export const metadata: Metadata = {
  resource: 'v2.inbox_placement_tests',
  operation: 'write',
  tags: [],
  httpMethod: 'delete',
  httpPath: '/api/v2/inbox-placement-tests/{id}',
  operationId: 'deleteInboxPlacementTest',
};

export const tool: Tool = {
  name: 'delete_v2_inbox_placement_tests',
  description:
    'Requires one of the following scopes: `inbox_placement_tests:delete`, `inbox_placement_tests:all`, `all:delete`, `all:all`',
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

export const handler = (client: Instantly2, args: Record<string, unknown> | undefined) => {
  const { id, ...body } = args as any;
  return client.v2.inboxPlacementTests.delete(id, body);
};

export default { metadata, tool, handler };
