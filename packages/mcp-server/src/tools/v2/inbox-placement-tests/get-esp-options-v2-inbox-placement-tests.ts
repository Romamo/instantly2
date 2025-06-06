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
  httpPath: '/api/v2/inbox-placement-tests/email-service-provider-options',
  operationId: 'getInboxPlacementTestESPOptions',
};

export const tool: Tool = {
  name: 'get_esp_options_v2_inbox_placement_tests',
  description: 'Provides a list of available email service providers for inbox placement tests.',
  inputSchema: {
    type: 'object',
    properties: {},
  },
};

export const handler = async (client: Instantly2, args: Record<string, unknown> | undefined) => {
  return asTextContentResult(await client.v2.inboxPlacementTests.getEspOptions());
};

export default { metadata, tool, handler };
