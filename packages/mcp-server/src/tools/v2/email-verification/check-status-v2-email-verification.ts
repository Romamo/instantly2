// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { asTextContentResult } from 'instantly2-mcp/tools/types';

import { Tool } from '@modelcontextprotocol/sdk/types.js';
import type { Metadata } from '../../';
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
    'Requires one of the following scopes: `email_verifications:read`, `email_verifications:all`, `all:read`, `all:all`',
  inputSchema: {
    type: 'object',
    properties: {
      email: {
        type: 'string',
      },
    },
  },
};

export const handler = async (client: Instantly2, args: Record<string, unknown> | undefined) => {
  const { email, ...body } = args as any;
  return asTextContentResult(await client.v2.emailVerification.checkStatus(email));
};

export default { metadata, tool, handler };
