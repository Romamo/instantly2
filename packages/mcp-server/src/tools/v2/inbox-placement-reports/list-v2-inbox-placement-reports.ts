// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { Tool } from '@modelcontextprotocol/sdk/types.js';
import type { Metadata } from '../../';
import Instantly2 from 'instantly2';

export const metadata: Metadata = {
  resource: 'v2.inbox_placement_reports',
  operation: 'read',
  tags: [],
};

export const tool: Tool = {
  name: 'list_v2_inbox_placement_reports',
  description:
    'Requires one of the following scopes: `inbox_placement_reports:read`, `inbox_placement_reports:all`, `all:read`, `all:all`',
  inputSchema: {
    type: 'object',
    properties: {
      test_id: {
        type: 'string',
      },
      date_from: {
        type: 'string',
      },
      date_to: {
        type: 'string',
      },
      limit: {
        type: 'integer',
        description: 'The number of items to return',
      },
      skip_blacklist_report: {
        type: 'boolean',
        description: 'Flag to skip including blacklist_report JSON',
      },
      skip_spam_assassin_report: {
        type: 'boolean',
        description: 'Flag to skip including spam_assassin_report JSON',
      },
      starting_after: {
        type: 'string',
        description:
          'The ID of the last item in the previous page - used for pagination. You can use the value of the `next_starting_after` field from the previous response.',
      },
    },
  },
};

export const handler = (client: Instantly2, args: Record<string, unknown> | undefined) => {
  const body = args as any;
  return client.v2.inboxPlacementReports.list(body);
};

export default { metadata, tool, handler };
