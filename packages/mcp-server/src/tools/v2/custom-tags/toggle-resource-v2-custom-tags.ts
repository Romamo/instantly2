// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { Tool } from '@modelcontextprotocol/sdk/types.js';
import type { Metadata } from '../../';
import Instantly2 from 'instantly2';

export const metadata: Metadata = {
  resource: 'v2.custom_tags',
  operation: 'write',
  tags: [],
  httpMethod: 'post',
  httpPath: '/api/v2/custom-tags/toggle-resource',
  operationId: 'toggleTagResource',
};

export const tool: Tool = {
  name: 'toggle_resource_v2_custom_tags',
  description:
    'This can be used for both accounts and campaigns. Please check the `resource_type` field for more information.',
  inputSchema: {
    type: 'object',
    properties: {
      assign: {
        type: 'boolean',
      },
      resource_ids: {
        type: 'array',
        items: {
          type: 'string',
        },
      },
      resource_type: {
        type: 'string',
        description: 'The resource type to assign or unassign the tags to',
        enum: [1, 2],
      },
      tag_ids: {
        type: 'array',
        items: {
          type: 'string',
        },
      },
      filter: {
        anyOf: [
          {
            type: 'string',
            enum: [
              'ACC_FILTER_PAUSED',
              'ACC_FILTER_ERROR',
              'ACC_FILTER_NO_CTD',
              'ACC_FILTER_PW_ACCOUNTS',
              'ACC_FILTER_DFY',
              'ACC_FILTER_W_ACTIVE',
              'ACC_FILTER_W_PAUSED',
              'ACC_FILTER_W_ERROR',
            ],
          },
          {
            type: 'object',
            properties: {
              search: {
                type: 'string',
              },
              tag_id: {
                type: 'string',
              },
            },
            required: [],
          },
        ],
      },
      selected_all: {
        type: 'boolean',
      },
    },
  },
};

export const handler = (client: Instantly2, args: Record<string, unknown> | undefined) => {
  const body = args as any;
  return client.v2.customTags.toggleResource(body);
};

export default { metadata, tool, handler };
