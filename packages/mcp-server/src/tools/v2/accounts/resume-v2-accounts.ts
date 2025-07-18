// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { maybeFilter } from 'instantly2-mcp/filtering';
import { Metadata, asTextContentResult } from 'instantly2-mcp/tools/types';

import { Tool } from '@modelcontextprotocol/sdk/types.js';
import Instantly2 from 'instantly2';

export const metadata: Metadata = {
  resource: 'v2.accounts',
  operation: 'write',
  tags: [],
  httpMethod: 'post',
  httpPath: '/api/v2/accounts/{email}/resume',
  operationId: 'resumeAccount',
};

export const tool: Tool = {
  name: 'resume_v2_accounts',
  description:
    "When using this tool, always use the `jq_filter` parameter to reduce the response size and improve performance.\n\nOnly omit if you're sure you don't need the data.\n\nRequires one of the following scopes: `accounts:update`, `accounts:all`, `all:update`, `all:all`\n\n# Response Schema\n```json\n{\n  $ref: '#/$defs/email_account',\n  $defs: {\n    email_account: {\n      type: 'object',\n      title: 'Account',\n      description: 'An email account that can be used to send campaigns',\n      properties: {\n        email: {\n          type: 'string',\n          description: 'Email address of the account'\n        },\n        first_name: {\n          type: 'string',\n          description: 'First name associated with the account'\n        },\n        is_managed_account: {\n          type: 'boolean',\n          description: 'Whether this is a managed account'\n        },\n        last_name: {\n          type: 'string',\n          description: 'Last name associated with the account'\n        },\n        organization: {\n          type: 'string',\n          description: 'Organization ID that owns this account'\n        },\n        provider_code: {\n          type: 'string',\n          description: 'Provider code for the account. Please make sure to specify the right provider code, otherwise your account will not work.',\n          enum: [            1,\n            2,\n            3,\n            4\n          ]\n        },\n        setup_pending: {\n          type: 'boolean',\n          description: 'Whether account setup is pending'\n        },\n        timestamp_created: {\n          type: 'string',\n          description: 'Timestamp when the account was created',\n          format: 'date-time'\n        },\n        timestamp_updated: {\n          type: 'string',\n          description: 'Timestamp when the account was last updated',\n          format: 'date-time'\n        },\n        warmup_status: {\n          type: 'string',\n          description: 'Current warmup status of the account',\n          enum: [            0,\n            1,\n            -1,\n            -2,\n            -3\n          ]\n        },\n        added_by: {\n          type: 'string',\n          description: 'User ID who added the account'\n        },\n        daily_limit: {\n          type: 'number',\n          description: 'Daily email sending limit'\n        },\n        dfy_password_changed: {\n          type: 'boolean',\n          description: 'Whether DFY password has been changed'\n        },\n        enable_slow_ramp: {\n          type: 'boolean',\n          description: 'Whether to enable slow ramp up for sending limits'\n        },\n        inbox_placement_test_limit: {\n          type: 'boolean',\n          description: 'Whether inbox placement test limit is enabled'\n        },\n        modified_by: {\n          type: 'string',\n          description: 'User ID who last modified the account'\n        },\n        sending_gap: {\n          type: 'number',\n          description: 'The gap between emails sent from this account in minutes (minimum wait time when used with multiple campaigns)'\n        },\n        stat_warmup_score: {\n          type: 'number',\n          description: 'Warmup score for the account'\n        },\n        status: {\n          type: 'string',\n          description: 'Current status of the account',\n          enum: [            1,\n            2,\n            -1,\n            -2,\n            -3\n          ]\n        },\n        status_message: {\n          type: 'string',\n          description: 'Status message for the account'\n        },\n        timestamp_last_used: {\n          type: 'string',\n          description: 'Timestamp when the account was last used',\n          format: 'date-time'\n        },\n        timestamp_warmup_start: {\n          type: 'string',\n          description: 'Timestamp when warmup was started',\n          format: 'date-time'\n        },\n        tracking_domain_name: {\n          type: 'string',\n          description: 'Tracking domain'\n        },\n        tracking_domain_status: {\n          type: 'string',\n          description: 'Tracking domain status'\n        },\n        warmup: {\n          type: 'object',\n          description: 'Warmup configuration for the account',\n          properties: {\n            advanced: {\n              type: 'object',\n              description: 'Advanced settings for the account',\n              properties: {\n                important_rate: {\n                  type: 'number',\n                  description: 'Important email rate for the account'\n                },\n                open_rate: {\n                  type: 'number',\n                  description: 'Email open rate for the account'\n                },\n                read_emulation: {\n                  type: 'boolean',\n                  description: 'Whether read emulation is enabled'\n                },\n                spam_save_rate: {\n                  type: 'number',\n                  description: 'Spam save rate for the account'\n                },\n                warm_ctd: {\n                  type: 'boolean',\n                  description: 'Whether the account is in warm CTD mode'\n                },\n                weekday_only: {\n                  type: 'boolean',\n                  description: 'Whether to send emails only on weekdays'\n                }\n              }\n            },\n            increment: {\n              type: 'string',\n              description: 'Daily increment for email sending limits',\n              enum: [                'disabled',\n                '0',\n                '1',\n                '2',\n                '3',\n                '4'\n              ]\n            },\n            limit: {\n              type: 'number',\n              description: 'Email sending limit for the account'\n            },\n            reply_rate: {\n              type: 'number',\n              description: 'Reply rate for the account'\n            },\n            warmup_custom_ftag: {\n              type: 'string',\n              description: 'Custom tag for the account'\n            }\n          }\n        },\n        warmup_pool_id: {\n          type: 'string',\n          description: 'ID of the warmup pool this account belongs to'\n        }\n      },\n      required: [        'email',\n        'first_name',\n        'is_managed_account',\n        'last_name',\n        'organization',\n        'provider_code',\n        'setup_pending',\n        'timestamp_created',\n        'timestamp_updated',\n        'warmup_status'\n      ]\n    }\n  }\n}\n```",
  inputSchema: {
    type: 'object',
    properties: {
      email: {
        type: 'string',
      },
      jq_filter: {
        type: 'string',
        title: 'jq Filter',
        description:
          'A jq filter to apply to the response to include certain fields. Consult the output schema in the tool description to see the fields that are available.\n\nFor example: to include only the `name` field in every object of a results array, you can provide ".results[].name".\n\nFor more information, see the [jq documentation](https://jqlang.org/manual/).',
      },
    },
    required: ['email'],
  },
};

export const handler = async (client: Instantly2, args: Record<string, unknown> | undefined) => {
  const { email, ...body } = args as any;
  return asTextContentResult(await maybeFilter(args, await client.v2.accounts.resume(email)));
};

export default { metadata, tool, handler };
