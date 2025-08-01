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
  httpPath: '/api/v2/leads/export',
  operationId: 'exportLeads',
};

export const tool: Tool = {
  name: 'export_v2_leads',
  description:
    "When using this tool, always use the `jq_filter` parameter to reduce the response size and improve performance.\n\nOnly omit if you're sure you don't need the data.\n\nExport leads to an external app. This endpoint will return a background job that will process the move. The job will be processed in the background and the leads will be moved to the destination campaign or list. You can use the `/background-jobs/:id` endpoint to check the job status.\n\n\nRequires one of the following scopes: `leads:update`, `leads:all`, `all:update`, `all:all`\n\n# Response Schema\n```json\n{\n  $ref: '#/$defs/background_job',\n  $defs: {\n    background_job: {\n      type: 'object',\n      title: 'Background Job',\n      description: 'A background job that can be used to perform long-running tasks',\n      properties: {\n        id: {\n          type: 'string',\n          description: 'Unique identifier for the background job'\n        },\n        created_at: {\n          type: 'string',\n          description: 'Timestamp when the job was created'\n        },\n        progress: {\n          type: 'number',\n          description: 'Progress of the job as a percentage (from 0 to 100)'\n        },\n        status: {\n          type: 'string',\n          description: 'Job status',\n          enum: [            'pending',\n            'in-progress',\n            'success',\n            'failed'\n          ]\n        },\n        type: {\n          type: 'string',\n          description: 'Type of background job',\n          enum: [            'move-leads',\n            'import-leads',\n            'export-leads'\n          ]\n        },\n        updated_at: {\n          type: 'string',\n          description: 'Timestamp when the job was last updated'\n        },\n        workspace_id: {\n          type: 'string',\n          description: 'Workspace ID'\n        },\n        data: {\n          type: 'object',\n          description: 'Data about the job, used to store any additional information we need to process the job'\n        },\n        entity_id: {\n          type: 'string',\n          description: 'The id of the entity that the job is related to'\n        },\n        entity_type: {\n          type: 'string',\n          description: 'Type of entity',\n          enum: [            'list',\n            'campaign'\n          ]\n        },\n        user_id: {\n          type: 'string',\n          description: 'The id of the user that triggered the action that created the job'\n        }\n      },\n      required: [        'id',\n        'created_at',\n        'progress',\n        'status',\n        'type',\n        'updated_at',\n        'workspace_id'\n      ]\n    }\n  }\n}\n```",
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
        description: 'A search string to search the leads against - can be First Name, Last Name, or Email',
      },
      jq_filter: {
        type: 'string',
        title: 'jq Filter',
        description:
          'A jq filter to apply to the response to include certain fields. Consult the output schema in the tool description to see the fields that are available.\n\nFor example: to include only the `name` field in every object of a results array, you can provide ".results[].name".\n\nFor more information, see the [jq documentation](https://jqlang.org/manual/).',
      },
    },
    required: [],
  },
  annotations: {},
};

export const handler = async (client: Instantly2, args: Record<string, unknown> | undefined) => {
  const { jq_filter, ...body } = args as any;
  return asTextContentResult(await maybeFilter(jq_filter, await client.v2.leads.export(body)));
};

export default { metadata, tool, handler };
