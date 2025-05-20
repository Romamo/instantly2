// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { Tool } from '@modelcontextprotocol/sdk/types.js';
import type { Metadata } from '../../';
import Instantly2 from 'instantly2';

export const metadata: Metadata = {
  resource: 'v2.leads',
  operation: 'write',
  tags: [],
};

export const tool: Tool = {
  name: 'update_interest_status_v2_leads',
  description: 'Update the interest status of a lead',
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
    },
  },
};

export const handler = (client: Instantly2, args: Record<string, unknown> | undefined) => {
  const body = args as any;
  return client.v2.leads.updateInterestStatus(body);
};

export default { metadata, tool, handler };
