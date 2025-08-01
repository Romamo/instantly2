// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { maybeFilter } from 'instantly2-mcp/filtering';
import { Metadata, asTextContentResult } from 'instantly2-mcp/tools/types';

import { Tool } from '@modelcontextprotocol/sdk/types.js';
import Instantly2 from 'instantly2';

export const metadata: Metadata = {
  resource: 'v2.lead_labels',
  operation: 'write',
  tags: [],
  httpMethod: 'post',
  httpPath: '/api/v2/lead-labels',
  operationId: 'createLeadLabel',
};

export const tool: Tool = {
  name: 'create_v2_lead_labels',
  description:
    "When using this tool, always use the `jq_filter` parameter to reduce the response size and improve performance.\n\nOnly omit if you're sure you don't need the data.\n\nRequires one of the following scopes: `lead-labels:create`, `lead-labels:all`, `all:create`, `all:all`\n\n# Response Schema\n```json\n{\n  $ref: '#/$defs/lead_label',\n  $defs: {\n    lead_label: {\n      type: 'object',\n      title: 'Lead Label',\n      description: 'A custom label for categorizing and managing leads',\n      properties: {\n        id: {\n          type: 'string',\n          description: 'Unique identifier for the custom lead label'\n        },\n        created_by: {\n          type: 'string',\n          description: 'User ID of the creator of this label'\n        },\n        interest_status: {\n          type: 'number',\n          description: 'Interest status associated with this label. This is generated automatically by us.'\n        },\n        interest_status_label: {\n          type: 'string',\n          description: 'Interest status label associated with this label',\n          enum: [            'positive',\n            'negative',\n            'neutral'\n          ]\n        },\n        label: {\n          type: 'string',\n          description: 'Display label for the custom lead label'\n        },\n        organization_id: {\n          type: 'string',\n          description: 'Organization ID that owns this custom lead label'\n        },\n        timestamp_created: {\n          type: 'string',\n          description: 'Timestamp when the custom lead label was created',\n          format: 'date-time'\n        },\n        description: {\n          type: 'string',\n          description: 'Detailed description of the custom lead label purpose'\n        },\n        use_with_ai: {\n          type: 'boolean',\n          description: 'Whether this label should be used with AI features'\n        }\n      },\n      required: [        'id',\n        'created_by',\n        'interest_status',\n        'interest_status_label',\n        'label',\n        'organization_id',\n        'timestamp_created'\n      ]\n    }\n  }\n}\n```",
  inputSchema: {
    type: 'object',
    properties: {
      interest_status_label: {
        type: 'string',
        description: 'Interest status label associated with this label',
        enum: ['positive', 'negative', 'neutral'],
      },
      label: {
        type: 'string',
        description: 'Display label for the custom lead label',
      },
      description: {
        type: 'string',
        description: 'Detailed description of the custom lead label purpose',
      },
      use_with_ai: {
        type: 'boolean',
        description: 'Whether this label should be used with AI features',
      },
      jq_filter: {
        type: 'string',
        title: 'jq Filter',
        description:
          'A jq filter to apply to the response to include certain fields. Consult the output schema in the tool description to see the fields that are available.\n\nFor example: to include only the `name` field in every object of a results array, you can provide ".results[].name".\n\nFor more information, see the [jq documentation](https://jqlang.org/manual/).',
      },
    },
    required: ['interest_status_label', 'label'],
  },
  annotations: {},
};

export const handler = async (client: Instantly2, args: Record<string, unknown> | undefined) => {
  const { jq_filter, ...body } = args as any;
  return asTextContentResult(await maybeFilter(jq_filter, await client.v2.leadLabels.create(body)));
};

export default { metadata, tool, handler };
