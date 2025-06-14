// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { asTextContentResult } from 'instantly2-mcp/tools/types';

import { Tool } from '@modelcontextprotocol/sdk/types.js';
import type { Metadata } from '../../';
import Instantly2 from 'instantly2';

export const metadata: Metadata = {
  resource: 'v2.campaigns',
  operation: 'write',
  tags: [],
  httpMethod: 'post',
  httpPath: '/api/v2/campaigns/{id}/share',
  operationId: 'shareCampaign',
};

export const tool: Tool = {
  name: 'share_v2_campaigns',
  description:
    "Share a campaign. This allows other users to create new campaigns based on this campaign. The campaign is being shared for 7 days, after which you'll have to call this endpoint again if you want to enable sharing on the campaign",
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
  return asTextContentResult((await client.v2.campaigns.share(id)) as object);
};

export default { metadata, tool, handler };
