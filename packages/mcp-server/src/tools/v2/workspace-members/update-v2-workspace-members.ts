// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { maybeFilter } from 'instantly2-mcp/filtering';
import { Metadata, asTextContentResult } from 'instantly2-mcp/tools/types';

import { Tool } from '@modelcontextprotocol/sdk/types.js';
import Instantly2 from 'instantly2';

export const metadata: Metadata = {
  resource: 'v2.workspace_members',
  operation: 'write',
  tags: [],
  httpMethod: 'patch',
  httpPath: '/api/v2/workspace-members/{id}',
  operationId: 'patchWorkspaceMember',
};

export const tool: Tool = {
  name: 'update_v2_workspace_members',
  description:
    "When using this tool, always use the `jq_filter` parameter to reduce the response size and improve performance.\n\nOnly omit if you're sure you don't need the data.\n\nRequires one of the following scopes: `workspace_members:update`, `workspace_members:all`, `all:update`, `all:all`\n\n# Response Schema\n```json\n{\n  $ref: '#/$defs/workspace_member',\n  $defs: {\n    workspace_member: {\n      type: 'object',\n      title: 'Workspace Member',\n      description: 'A member of a workspace with associated user details',\n      properties: {\n        id: {\n          type: 'string',\n          description: 'Unique identifier for the workspace member'\n        },\n        accepted: {\n          type: 'boolean',\n          description: 'Whether the member has accepted the workspace invitation'\n        },\n        email: {\n          type: 'string',\n          description: 'Email address of the workspace member'\n        },\n        role: {\n          type: 'string',\n          description: 'THe role of the workspace member defining their access level. While the \"owner\" role is listed in the enum, it cannot be created via the API, and is only assigned to the user who creates the workspace.',\n          enum: [            'owner',\n            'admin',\n            'editor',\n            'view',\n            'client'\n          ]\n        },\n        timestamp_created: {\n          type: 'string',\n          description: 'Timestamp when the workspace member was created',\n          format: 'date-time'\n        },\n        user_id: {\n          type: 'string',\n          description: 'User ID of the workspace member'\n        },\n        workspace_id: {\n          type: 'string',\n          description: 'ID of the workspace this member belongs to'\n        },\n        issuer_id: {\n          type: 'string',\n          description: 'ID of the user who added this member to the workspace'\n        }\n      },\n      required: [        'id',\n        'accepted',\n        'email',\n        'role',\n        'timestamp_created',\n        'user_id',\n        'workspace_id'\n      ]\n    }\n  }\n}\n```",
  inputSchema: {
    type: 'object',
    properties: {
      id: {
        type: 'string',
      },
      role: {
        type: 'string',
        description:
          'THe role of the workspace member defining their access level. While the "owner" role is listed in the enum, it cannot be created via the API, and is only assigned to the user who creates the workspace.',
        enum: ['owner', 'admin', 'editor', 'view', 'client'],
      },
      jq_filter: {
        type: 'string',
        title: 'jq Filter',
        description:
          'A jq filter to apply to the response to include certain fields. Consult the output schema in the tool description to see the fields that are available.\n\nFor example: to include only the `name` field in every object of a results array, you can provide ".results[].name".\n\nFor more information, see the [jq documentation](https://jqlang.org/manual/).',
      },
    },
    required: ['id'],
  },
};

export const handler = async (client: Instantly2, args: Record<string, unknown> | undefined) => {
  const { id, ...body } = args as any;
  return asTextContentResult(await maybeFilter(args, await client.v2.workspaceMembers.update(id, body)));
};

export default { metadata, tool, handler };
