// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { maybeFilter } from 'instantly2-mcp/filtering';
import { Metadata, asTextContentResult } from 'instantly2-mcp/tools/types';

import { Tool } from '@modelcontextprotocol/sdk/types.js';
import Instantly2 from 'instantly2';

export const metadata: Metadata = {
  resource: 'v2',
  operation: 'read',
  tags: [],
  httpMethod: 'get',
  httpPath: '/api/v2/background-jobs',
  operationId: 'listBackgroundJob',
};

export const tool: Tool = {
  name: 'list_background_jobs_v2',
  description:
    "When using this tool, always use the `jq_filter` parameter to reduce the response size and improve performance.\n\nOnly omit if you're sure you don't need the data.\n\nRequires one of the following scopes: `background-jobs:read`, `background-jobs:all`, `all:read`, `all:all`\n\n# Response Schema\n```json\n{\n  type: 'object',\n  properties: {\n    items: {\n      type: 'array',\n      items: {\n        $ref: '#/$defs/background_job'\n      }\n    },\n    next_starting_after: {\n      type: 'string',\n      description: 'The filter for getting the next items after this one, this could either be a UUID, a MongoDB ID, a timestamp, on an email depending on the specific API'\n    }\n  },\n  required: [    'items'\n  ],\n  $defs: {\n    background_job: {\n      type: 'object',\n      title: 'Background Job',\n      description: 'A background job that can be used to perform long-running tasks',\n      properties: {\n        id: {\n          type: 'string',\n          description: 'Unique identifier for the background job'\n        },\n        created_at: {\n          type: 'string',\n          description: 'Timestamp when the job was created'\n        },\n        progress: {\n          type: 'number',\n          description: 'Progress of the job as a percentage (from 0 to 100)'\n        },\n        status: {\n          type: 'string',\n          description: 'Job status',\n          enum: [            'pending',\n            'in-progress',\n            'success',\n            'failed'\n          ]\n        },\n        type: {\n          type: 'string',\n          description: 'Type of background job',\n          enum: [            'move-leads',\n            'import-leads',\n            'export-leads'\n          ]\n        },\n        updated_at: {\n          type: 'string',\n          description: 'Timestamp when the job was last updated'\n        },\n        workspace_id: {\n          type: 'string',\n          description: 'Workspace ID'\n        },\n        data: {\n          type: 'object',\n          description: 'Data about the job, used to store any additional information we need to process the job'\n        },\n        entity_id: {\n          type: 'string',\n          description: 'The id of the entity that the job is related to'\n        },\n        entity_type: {\n          type: 'string',\n          description: 'Type of entity',\n          enum: [            'list',\n            'campaign'\n          ]\n        },\n        user_id: {\n          type: 'string',\n          description: 'The id of the user that triggered the action that created the job'\n        }\n      },\n      required: [        'id',\n        'created_at',\n        'progress',\n        'status',\n        'type',\n        'updated_at',\n        'workspace_id'\n      ]\n    }\n  }\n}\n```",
  inputSchema: {
    type: 'object',
    properties: {
      entity_id: {
        type: 'string',
        description: 'The ID of the entity. Multiple IDs can be provided as a comma-separated list',
      },
      entity_type: {
        type: 'string',
        description: 'The type of the entity',
        enum: ['list', 'campaign'],
      },
      excluded_ids: {
        type: 'string',
        description:
          'The ID of the job to be excluded from the response. Multiple IDs can be provided as a comma-separated list',
      },
      ids: {
        type: 'string',
        description: 'The ID of the job. Multiple IDs can be provided as a comma-separated list',
      },
      included_ids: {
        type: 'string',
        description:
          'The ID of the job to be included in the response. Multiple IDs can be provided as a comma-separated list',
      },
      limit: {
        type: 'integer',
        description: 'The number of items to return',
      },
      sort_column: {
        type: 'string',
        description: 'The column to sort the results by',
        enum: ['created_at', 'updated_at'],
      },
      sort_order: {
        type: 'string',
        description: 'The order to sort the results by',
        enum: ['asc', 'desc'],
      },
      starting_after: {
        type: 'string',
      },
      status: {
        type: 'string',
        description:
          'The status of the job. Multiple statuses can be provided as a comma-separated list. Valid statuses are: pending, in-progress, success, failed',
      },
      type: {
        type: 'string',
        description: 'The type of the job',
        enum: ['move-leads', 'import-leads', 'export-leads'],
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
};

export const handler = async (client: Instantly2, args: Record<string, unknown> | undefined) => {
  const body = args as any;
  return asTextContentResult(await maybeFilter(args, await client.v2.listBackgroundJobs(body)));
};

export default { metadata, tool, handler };
