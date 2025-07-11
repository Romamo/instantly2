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
  httpPath: '/api/v2/campaigns/analytics/overview',
  operationId: 'getCampaignAnalyticsOverview',
};

export const tool: Tool = {
  name: 'overview_campaigns_v2_analytics',
  description:
    "When using this tool, always use the `jq_filter` parameter to reduce the response size and improve performance.\n\nOnly omit if you're sure you don't need the data.\n\nGet analytics overview for one or multiple campaigns. Specify the `id` field to get the analytics overview for a single campaign, or leave it empty to get the analytics overview for all campaigns\n\n# Response Schema\n```json\n{\n  type: 'object',\n  properties: {\n    bounced_count: {\n      type: 'integer',\n      description: 'The number of bounced leads'\n    },\n    completed_count: {\n      type: 'integer',\n      description: 'The number of leads that the campaign was completed for'\n    },\n    emails_sent_count: {\n      type: 'integer',\n      description: 'The total number of sent emails'\n    },\n    link_click_count: {\n      type: 'integer',\n      description: 'The number of links that got clicked'\n    },\n    link_click_count_unique: {\n      type: 'integer',\n      description: 'The number of links that got clicked (for the first time)'\n    },\n    link_click_count_unique_by_step: {\n      type: 'integer',\n      description: 'The unique number of links that got clicked, per step (counted once per lead, step, and campaign)'\n    },\n    new_leads_contacted_count: {\n      type: 'integer',\n      description: 'The total number of new leads contacted'\n    },\n    open_count: {\n      type: 'integer',\n      description: 'The total number of times the emails were opened, including duplicates'\n    },\n    open_count_unique: {\n      type: 'integer',\n      description: 'The number of emails that got opened (for the first time only)'\n    },\n    open_count_unique_by_step: {\n      type: 'integer',\n      description: 'The unique number of times the emails were opened (counted once per lead, step, and campaign)'\n    },\n    reply_count: {\n      type: 'integer',\n      description: 'The number of leads that replied to at least one email'\n    },\n    reply_count_unique: {\n      type: 'integer',\n      description: 'The number of leads that replied to at least one email (for the first time only)'\n    },\n    reply_count_unique_by_step: {\n      type: 'integer',\n      description: 'The unique number of leads that replied to at least one email, per step (counted once per lead, step, and campaign)'\n    },\n    total_closed: {\n      type: 'integer',\n      description: 'The total number of closed opportunities created'\n    },\n    total_interested: {\n      type: 'integer',\n      description: 'The total number of interested opportunities created'\n    },\n    total_meeting_booked: {\n      type: 'integer',\n      description: 'The total number of meeting booked opportunities created'\n    },\n    total_meeting_completed: {\n      type: 'integer',\n      description: 'The total number of meeting completed opportunities created'\n    },\n    total_opportunities: {\n      type: 'integer',\n      description: 'The total number of unique opportunities created'\n    },\n    total_opportunity_value: {\n      type: 'number',\n      description: 'The total value of opportunities created'\n    },\n    unsubscribed_count: {\n      type: 'integer',\n      description: 'The number of unsubscribed leads'\n    }\n  },\n  required: []\n}\n```",
  inputSchema: {
    type: 'object',
    properties: {
      id: {
        type: 'string',
        description:
          'A campaign ID to get the analytics overview for. Leave this field empty to get the analytics overview for all campaigns',
      },
      campaign_status: {
        type: 'string',
        description:
          'Filter by campaign status (only the analytics for the campaigns with the specified status will be returned)',
        enum: [-99, -1, -2, 0, 1, 2, 3, 4],
      },
      end_date: {
        type: 'string',
        description: 'End date',
      },
      ids: {
        type: 'array',
        items: {
          type: 'string',
          description:
            'A list of campaign IDs to get the analytics overview for. Leave this field empty to get the analytics overview for all campaigns. You can specify multiple IDs by adding the same parameter multiple times, for instance: `/campaigns/analytics/overview?ids=123&ids=456`',
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
  return asTextContentResult(await maybeFilter(args, await client.v2.campaigns.analytics.overview(body)));
};

export default { metadata, tool, handler };
