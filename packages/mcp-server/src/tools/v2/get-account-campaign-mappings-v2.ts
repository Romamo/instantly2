// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { Tool } from '@modelcontextprotocol/sdk/types.js';
import type { Metadata } from '../';
import Instantly2 from 'instantly2';

export const metadata: Metadata = {
  resource: 'v2',
  operation: 'read',
  tags: [],
};

export const tool: Tool = {
  name: 'get_account_campaign_mappings_v2',
  description:
    'Requires one of the following scopes: `account_campaign_mappings:read`, `account_campaign_mappings:all`, `all:read`, `all:all`',
  inputSchema: {
    type: 'object',
    properties: {
      email: {
        type: 'string',
      },
      limit: {
        type: 'number',
      },
      starting_after: {
        type: 'string',
      },
    },
  },
};

export const handler = (client: Instantly2, args: Record<string, unknown> | undefined) => {
  const { email, ...body } = args as any;
  return client.v2.getAccountCampaignMappings(email, body);
};

export default { metadata, tool, handler };
