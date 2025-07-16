// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { maybeFilter } from 'instantly2-mcp/filtering';
import { Metadata, asTextContentResult } from 'instantly2-mcp/tools/types';

import { Tool } from '@modelcontextprotocol/sdk/types.js';
import Instantly2 from 'instantly2';

export const metadata: Metadata = {
  resource: 'v2.email_verification',
  operation: 'read',
  tags: [],
  httpMethod: 'get',
  httpPath: '/api/v2/email-verification/{email}',
  operationId: 'checkVerificationStatus',
};

export const tool: Tool = {
  name: 'check_status_v2_email_verification',
  description:
    "When using this tool, always use the `jq_filter` parameter to reduce the response size and improve performance.\n\nOnly omit if you're sure you don't need the data.\n\nRequires one of the following scopes: `email_verifications:read`, `email_verifications:all`, `all:read`, `all:all`\n\n# Response Schema\n```json\n{\n  $ref: '#/$defs/verification',\n  $defs: {\n    verification: {\n      type: 'object',\n      title: 'Email Verification',\n      description: 'A single email verification',\n      properties: {\n        email: {\n          type: 'string',\n          description: 'The email address to verify'\n        },\n        verification_status: {\n          type: 'string',\n          description: 'The verification status.',\n          enum: [            'pending',\n            'verified',\n            'invalid'\n          ]\n        },\n        catch_all: {\n          type: 'object'\n        },\n        credits: {\n          type: 'number',\n          description: 'The number of verification credits available after the verification'\n        },\n        credits_used: {\n          type: 'number',\n          description: 'The number of verification credits used'\n        },\n        status: {\n          type: 'string',\n          description: 'The request status. Do not use this field to determine the verification status. Please use `verification_status` instead to check the verification status',\n          enum: [            'success',\n            'error'\n          ]\n        }\n      },\n      required: [        'email',\n        'verification_status'\n      ]\n    }\n  }\n}\n```",
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
  },
};

export const handler = async (client: Instantly2, args: Record<string, unknown> | undefined) => {
  const { email, ...body } = args as any;
  return asTextContentResult(await maybeFilter(args, await client.v2.emailVerification.checkStatus(email)));
};

export default { metadata, tool, handler };
