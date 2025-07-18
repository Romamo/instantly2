// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { maybeFilter } from 'instantly2-mcp/filtering';
import { Metadata, asTextContentResult } from 'instantly2-mcp/tools/types';

import { Tool } from '@modelcontextprotocol/sdk/types.js';
import Instantly2 from 'instantly2';

export const metadata: Metadata = {
  resource: 'v2.workspace_group_members',
  operation: 'read',
  tags: [],
  httpMethod: 'get',
  httpPath: '/api/v2/workspace-group-members',
  operationId: 'listWorkspaceGroupMember',
};

export const tool: Tool = {
  name: 'list_v2_workspace_group_members',
  description:
    "When using this tool, always use the `jq_filter` parameter to reduce the response size and improve performance.\n\nOnly omit if you're sure you don't need the data.\n\nRequires one of the following scopes: `workspace_group_members:read`, `workspace_group_members:all`, `all:read`, `all:all`\n\n# Response Schema\n```json\n{\n  type: 'object',\n  properties: {\n    items: {\n      type: 'array',\n      items: {\n        $ref: '#/$defs/group_member'\n      }\n    },\n    next_starting_after: {\n      type: 'string',\n      description: 'The filter for getting the next items after this one, this could either be a UUID, a MongoDB ID, a timestamp, on an email depending on the specific API'\n    }\n  },\n  required: [    'items'\n  ],\n  $defs: {\n    group_member: {\n      type: 'object',\n      title: 'Workspace Group Member',\n      description: 'A member of a workspace group. You can use the endpoints within this entity to manage the members of a workspace group.',\n      properties: {\n        id: {\n          type: 'string',\n          description: 'The unique identifier of the workspace group member'\n        },\n        admin_workspace_id: {\n          type: 'string',\n          description: 'The id of the admin workspace'\n        },\n        status: {\n          type: 'string',\n          enum: [            'pending',\n            'accepted',\n            'rejected'\n          ]\n        },\n        sub_workspace_id: {\n          type: 'string',\n          description: 'The id of the sub workspace'\n        },\n        timestamp_created: {\n          type: 'string',\n          format: 'date-time'\n        },\n        timestamp_updated: {\n          type: 'string',\n          format: 'date-time'\n        },\n        admin_workspace_name: {\n          type: 'string',\n          description: 'The name of the admin workspace.'\n        },\n        sub_workspace_name: {\n          type: 'string',\n          description: 'The name of the sub workspace.'\n        }\n      },\n      required: [        'id',\n        'admin_workspace_id',\n        'status',\n        'sub_workspace_id',\n        'timestamp_created',\n        'timestamp_updated'\n      ]\n    }\n  }\n}\n```",
  inputSchema: {
    type: 'object',
    properties: {
      limit: {
        type: 'integer',
        description: 'The number of items to return',
      },
      starting_after: {
        type: 'string',
        description:
          'The ID of the last item in the previous page - used for pagination. You can use the value of the `next_starting_after` field from the previous response.',
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
  return asTextContentResult(await maybeFilter(args, await client.v2.workspaceGroupMembers.list(body)));
};

export default { metadata, tool, handler };
