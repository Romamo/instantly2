// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { Tool } from '@modelcontextprotocol/sdk/types.js';
import type { Metadata } from '../../';
import Instantly2 from 'instantly2';

export const metadata: Metadata = {
  resource: 'v2.accounts',
  operation: 'write',
  tags: [],
  httpMethod: 'patch',
  httpPath: '/api/v2/accounts/{email}',
  operationId: 'patchAccount',
};

export const tool: Tool = {
  name: 'update_v2_accounts',
  description:
    'Requires one of the following scopes: `accounts:update`, `accounts:all`, `all:update`, `all:all`',
  inputSchema: {
    type: 'object',
    properties: {
      email: {
        type: 'string',
      },
      daily_limit: {
        type: 'number',
        description: 'Daily email sending limit',
      },
      enable_slow_ramp: {
        type: 'boolean',
        description: 'Whether to enable slow ramp up for sending limits',
      },
      first_name: {
        type: 'string',
        description: 'First name associated with the account',
      },
      inbox_placement_test_limit: {
        type: 'boolean',
        description: 'Whether inbox placement test limit is enabled',
      },
      last_name: {
        type: 'string',
        description: 'Last name associated with the account',
      },
      remove_tracking_domain: {
        type: 'boolean',
      },
      sending_gap: {
        type: 'number',
        description:
          'The gap between emails sent from this account in minutes (minimum wait time when used with multiple campaigns)',
      },
      skip_cname_check: {
        type: 'boolean',
      },
      tracking_domain_name: {
        type: 'string',
        description: 'Tracking domain',
      },
      tracking_domain_status: {
        type: 'string',
        description: 'Tracking domain status',
      },
      warmup: {
        type: 'object',
        description: 'Warmup configuration for the account',
        properties: {
          advanced: {
            type: 'object',
            description: 'Advanced settings for the account',
            properties: {
              important_rate: {
                type: 'number',
                description: 'Important email rate for the account',
              },
              open_rate: {
                type: 'number',
                description: 'Email open rate for the account',
              },
              read_emulation: {
                type: 'boolean',
                description: 'Whether read emulation is enabled',
              },
              spam_save_rate: {
                type: 'number',
                description: 'Spam save rate for the account',
              },
              warm_ctd: {
                type: 'boolean',
                description: 'Whether the account is in warm CTD mode',
              },
              weekday_only: {
                type: 'boolean',
                description: 'Whether to send emails only on weekdays',
              },
            },
            required: [],
          },
          increment: {
            type: 'string',
            description: 'Daily increment for email sending limits',
            enum: ['disabled', '0', '1', '2', '3', '4'],
          },
          limit: {
            type: 'number',
            description: 'Email sending limit for the account',
          },
          reply_rate: {
            type: 'number',
            description: 'Reply rate for the account',
          },
          warmup_custom_ftag: {
            type: 'string',
            description: 'Custom tag for the account',
          },
        },
        required: [],
      },
    },
  },
};

export const handler = (client: Instantly2, args: Record<string, unknown> | undefined) => {
  const { email, ...body } = args as any;
  return client.v2.accounts.update(email, body);
};

export default { metadata, tool, handler };
