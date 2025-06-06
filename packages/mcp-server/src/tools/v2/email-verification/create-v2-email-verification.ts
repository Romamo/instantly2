// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { asTextContentResult } from 'instantly2-mcp/tools/types';

import { Tool } from '@modelcontextprotocol/sdk/types.js';
import type { Metadata } from '../../';
import Instantly2 from 'instantly2';

export const metadata: Metadata = {
  resource: 'v2.email_verification',
  operation: 'write',
  tags: [],
  httpMethod: 'post',
  httpPath: '/api/v2/email-verification',
  operationId: 'createEmailVerification',
};

export const tool: Tool = {
  name: 'create_v2_email_verification',
  description:
    'If an email takes longer than 10 seconds to verify, the endpoint will return the status as `pending`. In that case, you may use the `/email-verification/:email` endpoint to check the status of the verification job.\n\nAlternatively, you can send a `webhook_url` to receive the results instead of polling the status endpoint.\n\n\nRequires one of the following scopes: `email_verifications:create`\n\n\nRequires one of the following scopes: `email_verifications:create`, `email_verifications:all`, `all:create`, `all:all`',
  inputSchema: {
    type: 'object',
    properties: {
      email: {
        type: 'string',
        description: 'The email address to verify',
      },
      webhook_url: {
        type: 'string',
        description:
          'A webhook URL to receive the verification results. If the email verification takes more than 10 seconds we will send the results to this URL.',
      },
    },
  },
};

export const handler = async (client: Instantly2, args: Record<string, unknown> | undefined) => {
  const body = args as any;
  return asTextContentResult(await client.v2.emailVerification.create(body));
};

export default { metadata, tool, handler };
