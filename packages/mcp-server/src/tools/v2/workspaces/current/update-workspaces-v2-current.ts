// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { maybeFilter } from 'instantly2-mcp/filtering';
import { Metadata, asTextContentResult } from 'instantly2-mcp/tools/types';

import { Tool } from '@modelcontextprotocol/sdk/types.js';
import Instantly2 from 'instantly2';

export const metadata: Metadata = {
  resource: 'v2.workspaces.current',
  operation: 'write',
  tags: [],
  httpMethod: 'patch',
  httpPath: '/api/v2/workspaces/current',
  operationId: 'patchWorkspace',
};

export const tool: Tool = {
  name: 'update_workspaces_v2_current',
  description:
    "When using this tool, always use the `jq_filter` parameter to reduce the response size and improve performance.\n\nOnly omit if you're sure you don't need the data.\n\nUpdate your current workspace details. Note that this endpoint doesn't require any parameters. It will update the workspace based on the API key sent in the headers.\n\n\nRequires one of the following scopes: `workspaces:update`, `workspaces:all`, `all:update`, `all:all`\n\n# Response Schema\n```json\n{\n  $ref: '#/$defs/workspace',\n  $defs: {\n    workspace: {\n      type: 'object',\n      title: 'Workspace',\n      description: 'A workspace entity representing a workspace',\n      properties: {\n        id: {\n          type: 'string',\n          description: 'Unique identifier for the workspace'\n        },\n        name: {\n          type: 'string',\n          description: 'Name of the workspace'\n        },\n        owner: {\n          type: 'string',\n          description: 'User ID of the workspace owner'\n        },\n        timestamp_created: {\n          type: 'string',\n          description: 'Timestamp when the workspace was created',\n          format: 'date-time'\n        },\n        timestamp_updated: {\n          type: 'string',\n          description: 'Timestamp when the workspace was last updated',\n          format: 'date-time'\n        },\n        add_unsub_to_block: {\n          type: 'boolean',\n          description: 'Whether to add unsubscribes to block list'\n        },\n        default_opportunity_value: {\n          type: 'number',\n          description: 'Default value for opportunities'\n        },\n        org_client_domain: {\n          type: 'string',\n          description: 'The domain for the white label agency mode'\n        },\n        org_logo_url: {\n          type: 'string',\n          description: 'URL to workspace logo'\n        },\n        plan_id: {\n          type: 'string',\n          description: 'Plan ID for workspace'\n        },\n        plan_id_crm: {\n          type: 'string',\n          description: 'Plan ID for CRM'\n        },\n        plan_id_inbox_placement: {\n          type: 'string',\n          description: 'Plan ID for inbox placement'\n        },\n        plan_id_leadfinder: {\n          type: 'string',\n          description: 'Plan ID for leadfinder'\n        },\n        plan_id_verification: {\n          type: 'object',\n          description: 'Plan ID for verification service',\n          properties: {\n            product_id: {\n              type: 'string'\n            },\n            quantity: {\n              type: 'number'\n            },\n            timestamp_updated: {\n              type: 'string',\n              format: 'date-time'\n            }\n          }\n        },\n        plan_id_website_visitor: {\n          type: 'string',\n          description: 'Plan ID for website visitor tracking'\n        }\n      },\n      required: [        'id',\n        'name',\n        'owner',\n        'timestamp_created',\n        'timestamp_updated'\n      ]\n    }\n  }\n}\n```",
  inputSchema: {
    type: 'object',
    properties: {
      name: {
        type: 'string',
        description: 'Name of the workspace',
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
  return asTextContentResult(await maybeFilter(args, await client.v2.workspaces.current.update(body)));
};

export default { metadata, tool, handler };
