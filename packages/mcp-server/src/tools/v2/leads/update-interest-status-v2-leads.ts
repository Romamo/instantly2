// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { maybeFilter } from 'instantly2-mcp/filtering';
import { asTextContentResult } from 'instantly2-mcp/tools/types';

import { Tool } from '@modelcontextprotocol/sdk/types.js';
import type { Metadata } from '../../';
import Instantly2 from 'instantly2';

export const metadata: Metadata = {
  resource: 'v2.leads',
  operation: 'write',
  tags: [],
  httpMethod: 'post',
  httpPath: '/api/v2/leads/update-interest-status',
  operationId: 'updateLeadInterestStatus',
};

export const tool: Tool = {
  name: 'update_interest_status_v2_leads',
  description:
    "When using this tool, always use the `jq_filter` parameter to reduce the response size and improve performance.\n\nOnly omit if you're sure you don't need the data.\n\nUpdate the interest status of a lead\n\n# Response Schema\n```json\n{\n  type: 'object',\n  properties: {\n    message: {\n      type: 'string'\n    }\n  },\n  required: []\n}\n```",
  inputSchema: {
    type: 'object',
    properties: {
      interest_value: {
        type: 'number',
        description:
          'Set this field to "null" to reset the lead value to "Lead". This is the same as moving the lead to the "Lead" status in the web app. Please check the `lt_interest_status` field for the list of possible values.',
      },
      lead_email: {
        type: 'string',
      },
      ai_interest_value: {
        type: 'number',
      },
      campaign_id: {
        type: 'string',
      },
      disable_auto_interest: {
        type: 'boolean',
      },
      list_id: {
        type: 'string',
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
  return asTextContentResult(await maybeFilter(args, await client.v2.leads.updateInterestStatus(body)));
};

export default { metadata, tool, handler };
