// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { asTextContentResult } from 'instantly2-mcp/tools/types';

import { Tool } from '@modelcontextprotocol/sdk/types.js';
import type { Metadata } from '../../';
import Instantly2 from 'instantly2';

export const metadata: Metadata = {
  resource: 'v2.leads',
  operation: 'write',
  tags: [],
  httpMethod: 'post',
  httpPath: '/api/v2/leads/list',
  operationId: 'listLeads',
};

export const tool: Tool = {
  name: 'list_v2_leads',
  description:
    'This endpoint is a POST endpoint, instead of GET - a deviation from the REST APIs standards we’re following because of the complex arguments it accepts, which would be too hard to express through query parameters\n\n\nRequires one of the following scopes: `leads:read`, `leads:all`, `all:read`, `all:all`',
  inputSchema: {
    type: 'object',
    properties: {
      campaign: {
        type: 'string',
        description: 'Campaign ID to filter leads',
      },
      contacts: {
        type: 'array',
        description: 'Array of emails the leads needs to have',
        items: {
          type: 'string',
        },
      },
      distinct_contacts: {
        type: 'boolean',
        description: 'Whether to return distinct contacts',
      },
      enrichment_status: {
        type: 'string',
        description: 'Enrichment status to filter leads',
        enum: [1, -1, 11, -2],
      },
      excluded_ids: {
        type: 'array',
        description: 'Array of lead IDs to exclude',
        items: {
          type: 'string',
        },
      },
      filter: {
        type: 'string',
        description: 'Filter criteria for leads. For custom lead labels, use the `interest_status` field.',
      },
      ids: {
        type: 'array',
        description: 'Array of lead IDs to include',
        items: {
          type: 'string',
        },
      },
      in_campaign: {
        type: 'boolean',
        description: 'Whether the lead is in a campaign',
      },
      in_list: {
        type: 'boolean',
        description: 'Whether the lead is in a list',
      },
      is_website_visitor: {
        type: 'boolean',
        description: 'Whether the lead is a website visitor',
      },
      limit: {
        type: 'integer',
        description: 'The number of items to return',
      },
      list_id: {
        type: 'string',
        description: 'List ID to filter leads',
      },
      organization_user_ids: {
        type: 'array',
        description: 'Array of organization user IDs to filter leads',
        items: {
          type: 'string',
        },
      },
      queries: {
        type: 'array',
        items: {
          type: 'object',
          description: 'Smart view query to filter leads',
          properties: {
            actionType: {
              type: 'string',
              enum: [
                'reply',
                'email-open',
                'last-contacted',
                'link-click',
                'lead-status',
                'lead-status-change',
              ],
            },
            values: {
              type: 'object',
              properties: {
                'lead-status': {
                  type: 'object',
                  properties: {
                    condition: {
                      type: 'string',
                      enum: ['is', 'is-not'],
                    },
                    status: {
                      type: 'number',
                    },
                  },
                  required: [],
                },
                'occurrence-count': {
                  type: 'object',
                  properties: {
                    condition: {
                      type: 'string',
                      enum: ['more', 'less', 'equal'],
                    },
                    count: {
                      type: 'number',
                    },
                  },
                  required: [],
                },
                'occurrence-days': {
                  type: 'number',
                },
              },
              required: [],
            },
          },
          required: ['actionType', 'values'],
        },
      },
      search: {
        type: 'string',
        description: 'A search string to search the leads against - can be First Name, Last Name, or Email',
      },
      smart_view_id: {
        type: 'string',
        description: 'Smart view ID to filter leads',
      },
      starting_after: {
        type: 'string',
        description:
          'The ID of the last item in the previous page - used for pagination. You can use the value of the `next_starting_after` field from the previous response.',
      },
    },
  },
};

export const handler = async (client: Instantly2, args: Record<string, unknown> | undefined) => {
  const body = args as any;
  return asTextContentResult(await client.v2.leads.list(body));
};

export default { metadata, tool, handler };
