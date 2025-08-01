// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { maybeFilter } from 'instantly2-mcp/filtering';
import { Metadata, asTextContentResult } from 'instantly2-mcp/tools/types';

import { Tool } from '@modelcontextprotocol/sdk/types.js';
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
  description:
    "When using this tool, always use the `jq_filter` parameter to reduce the response size and improve performance.\n\nOnly omit if you're sure you don't need the data.\n\nBulk assign leads to organization users\n\n# Response Schema\n```json\n{\n  type: 'object',\n  properties: {\n    message: {\n      type: 'string'\n    },\n    status: {\n      type: 'string'\n    }\n  }\n}\n```",
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
                },
                'occurrence-days': {
                  type: 'number',
                },
              },
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
      jq_filter: {
        type: 'string',
        title: 'jq Filter',
        description:
          'A jq filter to apply to the response to include certain fields. Consult the output schema in the tool description to see the fields that are available.\n\nFor example: to include only the `name` field in every object of a results array, you can provide ".results[].name".\n\nFor more information, see the [jq documentation](https://jqlang.org/manual/).',
      },
    },
    required: ['organization_user_ids'],
  },
  annotations: {},
};

export const handler = async (client: Instantly2, args: Record<string, unknown> | undefined) => {
  const { jq_filter, ...body } = args as any;
  return asTextContentResult(await maybeFilter(jq_filter, await client.v2.leads.bulkAssign(body)));
};

export default { metadata, tool, handler };
