// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { maybeFilter } from 'instantly2-mcp/filtering';
import { asTextContentResult } from 'instantly2-mcp/tools/types';

import { Tool } from '@modelcontextprotocol/sdk/types.js';
import type { Metadata } from '../../../';
import Instantly2 from 'instantly2';

export const metadata: Metadata = {
  resource: 'v2.campaigns.analytics',
  operation: 'read',
  tags: [],
  httpMethod: 'get',
  httpPath: '/api/v2/campaigns/analytics',
  operationId: 'getCampaignAnalytics',
};

export const tool: Tool = {
  name: 'retrieve_campaigns_v2_analytics',
  description:
    "When using this tool, always use the `jq_filter` parameter to reduce the response size and improve performance.\n\nOnly omit if you're sure you don't need the data.\n\nGet analytics for one or multiple campaigns. Specify the `id` field to get the analytics for a single campaign, or leave it empty to get the analytics for all campaigns\n\n# Response Schema\n```json\n{\n  type: 'array',\n  items: {\n    type: 'object',\n    properties: {\n      bounced_count: {\n        type: 'integer',\n        description: 'The number of bounced leads'\n      },\n      campaign_id: {\n        type: 'string',\n        description: 'The ID of the campaign'\n      },\n      campaign_is_evergreen: {\n        type: 'boolean',\n        description: 'Whether the campaign is evergreen'\n      },\n      campaign_name: {\n        type: 'string',\n        description: 'The name of the campaign'\n      },\n      campaign_status: {\n        type: 'number',\n        description: 'The campaign status'\n      },\n      completed_count: {\n        type: 'integer',\n        description: 'The number of leads that the campaign was completed for'\n      },\n      contacted_count: {\n        type: 'integer',\n        description: 'Number of leads for whom the sequence has started'\n      },\n      emails_sent_count: {\n        type: 'integer',\n        description: 'The total number of sent emails'\n      },\n      leads_count: {\n        type: 'integer',\n        description: 'The total number of leads'\n      },\n      link_click_count: {\n        type: 'integer',\n        description: 'The number of links that got clicked'\n      },\n      new_leads_contacted_count: {\n        type: 'integer',\n        description: 'The total number of new leads contacted'\n      },\n      open_count: {\n        type: 'integer',\n        description: 'The number of leads that opened at least one email'\n      },\n      reply_count: {\n        type: 'integer',\n        description: 'The number of leads that replied to at least one email'\n      },\n      total_opportunities: {\n        type: 'integer',\n        description: 'The total number of unique opportunities created'\n      },\n      total_opportunity_value: {\n        type: 'number',\n        description: 'The total value of opportunities created'\n      },\n      unsubscribed_count: {\n        type: 'integer',\n        description: 'The number of unsubscribed leads'\n      }\n    },\n    required: [      'bounced_count',\n      'campaign_id',\n      'campaign_is_evergreen',\n      'campaign_name',\n      'campaign_status',\n      'completed_count',\n      'contacted_count',\n      'emails_sent_count',\n      'leads_count',\n      'link_click_count',\n      'new_leads_contacted_count',\n      'open_count',\n      'reply_count',\n      'total_opportunities',\n      'total_opportunity_value',\n      'unsubscribed_count'\n    ]\n  }\n}\n```",
  inputSchema: {
    type: 'object',
    properties: {
      id: {
        type: 'string',
        description:
          'A campaign ID to get the analytics for. Leave this field empty to get the analytics for all campaigns',
      },
      end_date: {
        type: 'string',
        description: 'End date',
      },
      exclude_total_leads_count: {
        type: 'boolean',
        description:
          'Exclude the total leads from the result. Setting this to true will considerably decrease the response time',
      },
      ids: {
        type: 'array',
        items: {
          type: 'string',
          description:
            'A list of campaign IDs to get the analytics for. Leave this field empty to get the analytics for all campaigns. You can specify multiple IDs by adding the same parameter multiple times, for instance: `/campaigns/analytics?ids=123&ids=456`',
        },
      },
      start_date: {
        type: 'string',
        description: 'Start date',
      },
      jq_filter: {
        type: 'string',
        title: 'jq Filter',
        description:
          'A jq filter to apply to the response to include certain fields. Consult the output schema in the tool description to see the fields that are available.\n\nFor example: to include only the `name` field in every object of a results array, you can provide ".results[].name".\n\nFor more information, see the [jq documentation](https://jqlang.org/manual/).',
      },
    },
  },
};

export const handler = async (client: Instantly2, args: Record<string, unknown> | undefined) => {
  const body = args as any;
  return asTextContentResult(await maybeFilter(args, await client.v2.campaigns.analytics.retrieve(body)));
};

export default { metadata, tool, handler };
