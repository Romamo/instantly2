// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { Tool } from '@modelcontextprotocol/sdk/types.js';
import type { Metadata } from '../../';
import Instantly2 from 'instantly2';

export const metadata: Metadata = {
  resource: 'v2.leads',
  operation: 'write',
  tags: [],
  httpMethod: 'post',
  httpPath: '/api/v2/leads/export',
  operationId: 'exportLeads',
};

export const tool: Tool = {
  name: 'export_v2_leads',
  description:
    'Export leads to an external app. This endpoint will return a background job that will process the move. The job will be processed in the background and the leads will be moved to the destination campaign or list. You can use the `/background-jobs/:id` endpoint to check the job status.\n\n\nRequires one of the following scopes: `leads:update`, `leads:all`, `all:update`, `all:all`',
  inputSchema: {
    type: 'object',
    properties: {
      app_connection_id: {
        type: 'string',
      },
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
      excluded_ids: {
        type: 'array',
        description: 'Array of lead IDs to exclude',
        items: {
          type: 'string',
        },
      },
      extra_params: {
        type: 'object',
        properties: {
          campaign_id: {
            type: 'string',
          },
          organization_id: {
            type: 'string',
          },
        },
        required: [],
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
      limit: {
        type: 'number',
      },
      list_id: {
        type: 'string',
        description: 'List ID to filter leads',
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
    },
  },
};

export const handler = (client: Instantly2, args: Record<string, unknown> | undefined) => {
  const body = args as any;
  return client.v2.leads.export(body);
};

export default { metadata, tool, handler };
