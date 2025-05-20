// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { Tool } from '@modelcontextprotocol/sdk/types.js';
import type { Metadata } from '../../';
import Instantly2 from 'instantly2';

export const metadata: Metadata = {
  resource: 'v2.subsequences',
  operation: 'write',
  tags: [],
};

export const tool: Tool = {
  name: 'update_v2_subsequences',
  description:
    'Requires one of the following scopes: `subsequences:update`, `subsequences:all`, `all:update`, `all:all`',
  inputSchema: {
    type: 'object',
    properties: {
      id: {
        type: 'string',
      },
      conditions: {
        type: 'object',
        description: 'Conditions that trigger the subsequence',
        properties: {
          crm_status: {
            type: 'array',
            items: {
              type: 'number',
            },
          },
          reply_contains: {
            type: 'string',
          },
        },
        required: [],
      },
      name: {
        type: 'string',
        description: 'Name of the subsequence',
      },
      sequences: {
        type: 'array',
        description:
          'List of sequences (the actual email copy). Even though this field is an array, only the first element is used, so please provide only one array item, and add the steps to that array',
        items: {
          type: 'object',
          properties: {
            steps: {
              type: 'array',
              items: {
                type: 'object',
                properties: {
                  delay: {
                    type: 'number',
                    description: 'The number of days to wait before sending the NEXT email',
                  },
                  type: {
                    type: 'string',
                    description:
                      "Type of step. This has to be 'email' always - it's the only supported type for now",
                    enum: ['email'],
                  },
                  variants: {
                    type: 'array',
                    items: {
                      type: 'object',
                      properties: {
                        body: {
                          type: 'string',
                        },
                        subject: {
                          type: 'string',
                        },
                        v_disabled: {
                          type: 'boolean',
                          description:
                            'Whether this variant is disabled. By default, all the variants are enabled. Please set this to true if you want to disable this variant',
                        },
                      },
                      required: ['body', 'subject'],
                    },
                  },
                },
                required: ['delay', 'type', 'variants'],
              },
            },
          },
          required: ['steps'],
        },
      },
    },
  },
};

export const handler = (client: Instantly2, args: Record<string, unknown> | undefined) => {
  const { id, ...body } = args as any;
  return client.v2.subsequences.update(id, body);
};

export default { metadata, tool, handler };
