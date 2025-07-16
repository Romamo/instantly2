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
  httpPath: '/api/v2/workspace-group-members/admin',
  operationId: 'getAdminWorkspaceGroupMember',
};

export const tool: Tool = {
  name: 'get_admin_v2_workspace_group_members',
  description:
    "When using this tool, always use the `jq_filter` parameter to reduce the response size and improve performance.\n\nOnly omit if you're sure you don't need the data.\n\nGet the details of the admin workspace of the current workspace\n\n# Response Schema\n```json\n{\n  type: 'object',\n  properties: {\n    has_admin_workspace: {\n      type: 'boolean',\n      description: 'Whether the current workspace has an admin workspace'\n    },\n    workspace_name: {\n      type: 'string',\n      description: 'The workspace name of the admin workspace. When the current workspace has no admin workspace, the workspace name will be \"Undefined\".'\n    },\n    workspace_group_member_id: {\n      type: 'string',\n      description: 'The id of the workspace group member. You can use it to leave the admin workspace by calling the DELETE /workspace-group-members/:id endpoint'\n    }\n  },\n  required: [    'has_admin_workspace',\n    'workspace_name'\n  ]\n}\n```",
  inputSchema: {
    type: 'object',
    properties: {
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
  return asTextContentResult(await maybeFilter(args, await client.v2.workspaceGroupMembers.getAdmin()));
};

export default { metadata, tool, handler };
