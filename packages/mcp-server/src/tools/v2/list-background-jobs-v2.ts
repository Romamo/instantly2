// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { asTextContentResult } from 'instantly2-mcp/tools/types';

import { Tool } from '@modelcontextprotocol/sdk/types.js';
import type { Metadata } from '../';
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
    'Requires one of the following scopes: `background-jobs:read`, `background-jobs:all`, `all:read`, `all:all`',
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
    },
  },
};

export const handler = async (client: Instantly2, args: Record<string, unknown> | undefined) => {
  const body = args as any;
  return asTextContentResult(await client.v2.listBackgroundJobs(body));
};

export default { metadata, tool, handler };
