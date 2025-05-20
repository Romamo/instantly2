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
  name: 'create_v2_leads',
  description: 'Requires one of the following scopes: `leads:create`, `leads:all`, `all:create`, `all:all`',
  inputSchema: {
    type: 'object',
    properties: {
      assigned_to: {
        type: 'string',
        description: 'ID of the user assigned to the lead',
      },
      blocklist_id: {
        type: 'string',
      },
      campaign: {
        type: 'string',
        description: 'Campaign ID associated with the lead',
      },
      company_name: {
        type: 'string',
        description: 'Company name of the lead',
      },
      custom_variables: {
        type: 'object',
        description:
          'Custom variables can include any metadata about the lead that is relevant to the campaign, the campaign will be updated to allow all the other leads in the campaign to have the same custom variables. The custom variables will be added to the lead payload field',
      },
      email: {
        type: 'string',
        description: 'Email address of the lead',
      },
      first_name: {
        type: 'string',
        description: 'First name of the lead',
      },
      last_name: {
        type: 'string',
        description: 'Last name of the lead',
      },
      list_id: {
        type: 'string',
        description: 'List ID associated with the lead',
      },
      lt_interest_status: {
        type: 'string',
        description:
          'Lead interest status. It can be either a static value (check below), or a custom status interest value',
        enum: [1, 2, 3, 4, 0, -1, -2, -3],
      },
      personalization: {
        type: 'string',
        description: 'Personalization of the lead',
      },
      phone: {
        type: 'string',
        description: 'Phone number of the lead',
      },
      pl_value_lead: {
        type: 'string',
        description: 'Potential value of the lead',
      },
      skip_if_in_campaign: {
        type: 'boolean',
      },
      skip_if_in_list: {
        type: 'boolean',
      },
      skip_if_in_workspace: {
        type: 'boolean',
      },
      verify_leads_for_lead_finder: {
        type: 'boolean',
      },
      verify_leads_on_import: {
        type: 'boolean',
      },
      website: {
        type: 'string',
        description: 'Website of the lead',
      },
    },
  },
};

export const handler = (client: Instantly2, args: Record<string, unknown> | undefined) => {
  const body = args as any;
  return client.v2.leads.create(body);
};

export default { metadata, tool, handler };
