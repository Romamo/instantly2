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
  httpPath: '/api/v2/leads/bulk-assign',
  operationId: 'bulkAssignLeads',
};

export const tool: Tool = {
  name: 'bulk_assign_v2_leads',
  description: 'Bulk assign leads to organization users',
  inputSchema: {
    type: 'object',
    properties: {
      organization_user_ids: {
        type: 'array',
        items: {
          type: 'string',
        },
      },
      campaign: {
        type: 'string',
      },
      filter: {
        type: 'string',
      },
      ids: {
        type: 'array',
        items: {
          type: 'string',
        },
      },
      in_campaign: {
        type: 'boolean',
      },
      in_list: {
        type: 'boolean',
      },
      limit: {
        type: 'integer',
      },
      list_id: {
        type: 'string',
      },
      queries: {
        type: 'array',
        items: {
          type: 'object',
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
      },
      smart_view_id: {
        type: 'string',
      },
    },
  },
};

export const handler = async (client: Instantly2, args: Record<string, unknown> | undefined) => {
  const body = args as any;
  return asTextContentResult(await client.v2.leads.bulkAssign(body));
};

export default { metadata, tool, handler };
