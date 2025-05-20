# Instantly2 TypeScript MCP Server

It is generated with [Stainless](https://www.stainless.com/).

## Installation

### Building

Because it's not published yet, clone the repo and build it:

```sh
git clone git@github.com:stainless-sdks/instantly2-typescript.git
cd instantly2-typescript
./scripts/bootstrap
./scripts/build
```

### Running

```sh
# set env vars as needed
export INSTANTLY2_API_KEY="My API Key"
node ./packages/mcp-server/dist/index.js
```

> [!NOTE]
> Once this package is [published to npm](https://app.stainless.com/docs/guides/publish), this will become: `npx -y instantly2-mcp`

### Via MCP Client

[Build the project](#building) as mentioned above.

There is a partial list of existing clients at [modelcontextprotocol.io](https://modelcontextprotocol.io/clients). If you already
have a client, consult their documentation to install the MCP server.

For clients with a configuration JSON, it might look something like this:

```json
{
  "mcpServers": {
    "instantly2_api": {
      "command": "node",
      "args": [
        "/path/to/local/instantly2-typescript/packages/mcp-server",
        "--client=claude",
        "--tools=dynamic"
      ],
      "env": {
        "INSTANTLY2_API_KEY": "My API Key"
      }
    }
  }
}
```

## Exposing endpoints to your MCP Client

There are two ways to expose endpoints as tools in the MCP server:

1. Exposing one tool per endpoint, and filtering as necessary
2. Exposing a set of tools to dynamically discover and invoke endpoints from the API

### Filtering endpoints and tools

You can run the package on the command line to discover and filter the set of tools that are exposed by the
MCP Server. This can be helpful for large APIs where including all endpoints at once is too much for your AI's
context window.

You can filter by multiple aspects:

- `--tool` includes a specific tool by name
- `--resource` includes all tools under a specific resource, and can have wildcards, e.g. `my.resource*`
- `--operation` includes just read (get/list) or just write operations

### Dynamic tools

If you specify `--tools=dynamic` to the MCP server, instead of exposing one tool per endpoint in the API, it will
expose the following tools:

1. `list_api_endpoints` - Discovers available endpoints, with optional filtering by search query
2. `get_api_endpoint_schema` - Gets detailed schema information for a specific endpoint
3. `invoke_api_endpoint` - Executes any endpoint with the appropriate parameters

This allows you to have the full set of API endpoints available to your MCP Client, while not requiring that all
of their schemas be loaded into context at once. Instead, the LLM will automatically use these tools together to
search for, look up, and invoke endpoints dynamically. However, due to the indirect nature of the schemas, it
can struggle to provide the correct properties a bit more than when tools are imported explicitly. Therefore,
you can opt-in to explicit tools, the dynamic tools, or both.

See more information with `--help`.

All of these command-line options can be repeated, combined together, and have corresponding exclusion versions (e.g. `--no-tool`).

Use `--list` to see the list of available tools, or see below.

### Specifying the MCP Client

Different clients have varying abilities to handle arbitrary tools and schemas.

You can specify the client you are using with the `--client` argument, and the MCP server will automatically
serve tools and schemas that are more compatible with that client.

- `--client=<type>`: Set all capabilities based on a known MCP client

  - Valid values: `openai-agents`, `claude`, `claude-code`, `cursor`
  - Example: `--client=cursor`

Additionally, if you have a client not on the above list, or the client has gotten better
over time, you can manually enable or disable certain capabilities:

- `--capability=<name>`: Specify individual client capabilities
  - Available capabilities:
    - `top-level-unions`: Enable support for top-level unions in tool schemas
    - `valid-json`: Enable JSON string parsing for arguments
    - `refs`: Enable support for $ref pointers in schemas
    - `unions`: Enable support for union types (anyOf) in schemas
    - `formats`: Enable support for format validations in schemas (e.g. date-time, email)
    - `tool-name-length=N`: Set maximum tool name length to N characters
  - Example: `--capability=top-level-unions --capability=tool-name-length=40`
  - Example: `--capability=top-level-unions,tool-name-length=40`

### Examples

1. Filter for read operations on cards:

```bash
--resource=cards --operation=read
```

2. Exclude specific tools while including others:

```bash
--resource=cards --no-tool=create_cards
```

3. Configure for Cursor client with custom max tool name length:

```bash
--client=cursor --capability=tool-name-length=40
```

4. Complex filtering with multiple criteria:

```bash
--resource=cards,accounts --operation=read --tag=kyc --no-tool=create_cards
```

## Importing the tools and server individually

```js
// Import the server, generated endpoints, or the init function
import { server, endpoints, init } from "instantly2-mcp/server";

// import a specific tool
import createAPIKeyV2 from "instantly2-mcp/tools/v2/create-api-key-v2";

// initialize the server and all endpoints
init({ server, endpoints });

// manually start server
const transport = new StdioServerTransport();
await server.connect(transport);

// or initialize your own server with specific tools
const myServer = new McpServer(...);

// define your own endpoint
const myCustomEndpoint = {
  tool: {
    name: 'my_custom_tool',
    description: 'My custom tool',
    inputSchema: zodToJsonSchema(z.object({ a_property: z.string() })),
  },
  handler: async (client: client, args: any) => {
    return { myResponse: 'Hello world!' };
  })
};

// initialize the server with your custom endpoints
init({ server: myServer, endpoints: [createAPIKeyV2, myCustomEndpoint] });
```

## Available Tools

The following tools are available in this MCP server.

### Resource `v2`:

- `create_api_key_v2` (`write`): Requires one of the following scopes: `api_keys:create`, `api_keys:all`, `all:create`, `all:all`
- `get_account_campaign_mappings_v2` (`read`): Requires one of the following scopes: `account_campaign_mappings:read`, `account_campaign_mappings:all`, `all:read`, `all:all`
- `list_api_keys_v2` (`read`): Requires one of the following scopes: `api_keys:read`, `api_keys:all`, `all:read`, `all:all`
- `list_audit_logs_v2` (`read`): Requires one of the following scopes: `audit_logs:read`, `audit_logs:all`, `all:read`, `all:all`
- `list_background_jobs_v2` (`read`): Requires one of the following scopes: `background-jobs:read`, `background-jobs:all`, `all:read`, `all:all`

### Resource `v2.accounts`:

- `create_v2_accounts` (`write`): Requires one of the following scopes: `accounts:create`, `accounts:all`, `all:create`, `all:all`
- `retrieve_v2_accounts` (`read`): Requires one of the following scopes: `accounts:read`, `accounts:all`, `all:read`, `all:all`
- `update_v2_accounts` (`write`): Requires one of the following scopes: `accounts:update`, `accounts:all`, `all:update`, `all:all`
- `list_v2_accounts` (`read`): Requires one of the following scopes: `accounts:read`, `accounts:all`, `all:read`, `all:all`
- `delete_v2_accounts` (`write`): Requires one of the following scopes: `accounts:delete`, `accounts:all`, `all:delete`, `all:all`
- `mark_fixed_v2_accounts` (`write`): Requires one of the following scopes: `accounts:update`, `accounts:all`, `all:update`, `all:all`
- `pause_v2_accounts` (`write`): Requires one of the following scopes: `accounts:update`, `accounts:all`, `all:update`, `all:all`
- `resume_v2_accounts` (`write`): Requires one of the following scopes: `accounts:update`, `accounts:all`, `all:update`, `all:all`
- `warmup_analytics_v2_accounts` (`write`): Requires one of the following scopes: `accounts:read`, `accounts:all`, `all:read`, `all:all`

### Resource `v2.accounts.ctd`:

- `get_status_accounts_v2_ctd` (`read`): Requires one of the following scopes: `accounts:read`, `accounts:all`, `all:read`, `all:all`

### Resource `v2.accounts.test`:

- `test_vitals_accounts_v2_test` (`write`): Requires one of the following scopes: `accounts:read`, `accounts:all`, `all:read`, `all:all`

### Resource `v2.api_keys`:

- `delete_v2_api_keys` (`write`): Requires one of the following scopes: `api_keys:delete`, `api_keys:all`, `all:delete`, `all:all`

### Resource `v2.background_jobs`:

- `retrieve_v2_background_jobs` (`read`): Requires one of the following scopes: `background-jobs:read`, `background-jobs:all`, `all:read`, `all:all`

### Resource `v2.block_lists_entries`:

- `create_v2_block_lists_entries` (`write`): Requires one of the following scopes: `block_list_entries:create`, `block_list_entries:all`, `all:create`, `all:all`
- `retrieve_v2_block_lists_entries` (`read`): Requires one of the following scopes: `block_list_entries:read`, `block_list_entries:all`, `all:read`, `all:all`
- `update_v2_block_lists_entries` (`write`): Requires one of the following scopes: `block_list_entries:update`, `block_list_entries:all`, `all:update`, `all:all`
- `list_v2_block_lists_entries` (`read`): Requires one of the following scopes: `block_list_entries:read`, `block_list_entries:all`, `all:read`, `all:all`
- `delete_v2_block_lists_entries` (`write`): Requires one of the following scopes: `block_list_entries:delete`, `block_list_entries:all`, `all:delete`, `all:all`

### Resource `v2.campaigns`:

- `create_v2_campaigns` (`write`): Requires one of the following scopes: `campaigns:create`, `campaigns:all`, `all:create`, `all:all`
- `retrieve_v2_campaigns` (`read`): Requires one of the following scopes: `campaigns:read`, `campaigns:all`, `all:read`, `all:all`
- `update_v2_campaigns` (`write`): Requires one of the following scopes: `campaigns:update`, `campaigns:all`, `all:update`, `all:all`
- `list_v2_campaigns` (`read`): Requires one of the following scopes: `campaigns:read`, `campaigns:all`, `all:read`, `all:all`
- `delete_v2_campaigns` (`write`): Requires one of the following scopes: `campaigns:delete`, `campaigns:all`, `all:delete`, `all:all`
- `activate_v2_campaigns` (`write`): Requires one of the following scopes: `campaigns:update`, `campaigns:all`, `all:update`, `all:all`
- `pause_v2_campaigns` (`write`): Requires one of the following scopes: `campaigns:update`, `campaigns:all`, `all:update`, `all:all`
- `share_v2_campaigns` (`write`): Share a campaign. This allows other users to create new campaigns based on this campaign. The campaign is being shared for 7 days, after which you'll have to call this endpoint again if you want to enable sharing on the campaign

### Resource `v2.campaigns.analytics`:

- `retrieve_campaigns_v2_analytics` (`read`): Get analytics for one or multiple campaigns. Specify the `id` field to get the analytics for a single campaign, or leave it empty to get the analytics for all campaigns
- `daily_campaigns_v2_analytics` (`read`): Get campaign daily analytics
- `overview_campaigns_v2_analytics` (`read`): Get analytics overview for one or multiple campaigns. Specify the `id` field to get the analytics overview for a single campaign, or leave it empty to get the analytics overview for all campaigns
- `steps_campaigns_v2_analytics` (`read`): Get campaign steps analytics

### Resource `v2.custom_tags`:

- `create_v2_custom_tags` (`write`): Requires one of the following scopes: `custom_tags:create`, `custom_tags:all`, `all:create`, `all:all`
- `retrieve_v2_custom_tags` (`read`): Requires one of the following scopes: `custom_tags:read`, `custom_tags:all`, `all:read`, `all:all`
- `update_v2_custom_tags` (`write`): Requires one of the following scopes: `custom_tags:update`, `custom_tags:all`, `all:update`, `all:all`
- `list_v2_custom_tags` (`read`): Requires one of the following scopes: `custom_tags:read`, `custom_tags:all`, `all:read`, `all:all`
- `delete_v2_custom_tags` (`write`): Requires one of the following scopes: `custom_tags:delete`, `custom_tags:all`, `all:delete`, `all:all`
- `toggle_resource_v2_custom_tags` (`write`): This can be used for both accounts and campaigns. Please check the `resource_type` field for more information.

### Resource `v2.email_verification`:

- `create_v2_email_verification` (`write`): If an email takes longer than 10 seconds to verify, the endpoint will return the status as `pending`. In that case, you may use the `/email-verification/:email` endpoint to check the status of the verification job.

Alternatively, you can send a `webhook_url` to receive the results instead of polling the status endpoint.

Requires one of the following scopes: `email_verifications:create`

Requires one of the following scopes: `email_verifications:create`, `email_verifications:all`, `all:create`, `all:all`

- `check_status_v2_email_verification` (`read`): Requires one of the following scopes: `email_verifications:read`, `email_verifications:all`, `all:read`, `all:all`

### Resource `v2.emails`:

- `retrieve_v2_emails` (`read`): Requires one of the following scopes: `emails:read`, `emails:all`, `all:read`, `all:all`
- `update_v2_emails` (`write`): Requires one of the following scopes: `emails:update`, `emails:all`, `all:update`, `all:all`
- `list_v2_emails` (`read`): Requires one of the following scopes: `emails:read`, `emails:all`, `all:read`, `all:all`
- `delete_v2_emails` (`write`): Requires one of the following scopes: `emails:delete`, `emails:all`, `all:delete`, `all:all`
- `reply_v2_emails` (`write`): Send a reply to an email. This endpoint can be used to send an email only as a reply to an existing email. In order to reply to an email, please specify the `reyply_to_uuid` field, and your email will be sent as a reply to that email. The `reyply_to_uuid` field represents the `id` field of an existing email, which is being returned to you in all the `/email` endpoints

Requires one of the following scopes: `emails:create`, `emails:all`, `all:create`, `all:all`

### Resource `v2.emails.threads`:

- `mark_as_read_emails_v2_threads` (`write`): Requires one of the following scopes: `emails:update`, `emails:all`, `all:update`, `all:all`

### Resource `v2.emails.unread`:

- `count_emails_v2_unread` (`read`): Requires one of the following scopes: `emails:read`, `emails:all`, `all:read`, `all:all`

### Resource `v2.inbox_placement_analytics`:

- `retrieve_v2_inbox_placement_analytics` (`read`): Requires one of the following scopes: `inbox_placement_analytics:read`, `inbox_placement_analytics:all`, `all:read`, `all:all`
- `list_v2_inbox_placement_analytics` (`read`): Requires one of the following scopes: `inbox_placement_analytics:read`, `inbox_placement_analytics:all`, `all:read`, `all:all`
- `get_deliverability_insights_v2_inbox_placement_analytics` (`write`): Provides deliverability insights for a specific inbox placement test

Requires one of the following scopes: `inbox_placement_analytics:read`, `inbox_placement_analytics:all`, `all:read`, `all:all`

- `get_stats_by_date_v2_inbox_placement_analytics` (`write`): Provides a time series representing the distribution of emails sent to inbox, spam, or category folders for scheduled inbox placement tests.

Requires one of the following scopes: `inbox_placement_analytics:read`, `inbox_placement_analytics:all`, `all:read`, `all:all`

- `get_stats_by_test_id_v2_inbox_placement_analytics` (`write`): Provides aggregated inbox, spam and category counts for specified test IDs

Requires one of the following scopes: `inbox_placement_analytics:read`, `inbox_placement_analytics:all`, `all:read`, `all:all`

### Resource `v2.inbox_placement_reports`:

- `retrieve_v2_inbox_placement_reports` (`read`): Requires one of the following scopes: `inbox_placement_reports:read`, `inbox_placement_reports:all`, `all:read`, `all:all`
- `list_v2_inbox_placement_reports` (`read`): Requires one of the following scopes: `inbox_placement_reports:read`, `inbox_placement_reports:all`, `all:read`, `all:all`

### Resource `v2.inbox_placement_tests`:

- `create_v2_inbox_placement_tests` (`write`): Requires one of the following scopes: `inbox_placement_tests:create`, `inbox_placement_tests:all`, `all:create`, `all:all`
- `retrieve_v2_inbox_placement_tests` (`read`): Requires one of the following scopes: `inbox_placement_tests:read`, `inbox_placement_tests:all`, `all:read`, `all:all`
- `update_v2_inbox_placement_tests` (`write`): Requires one of the following scopes: `inbox_placement_tests:update`, `inbox_placement_tests:all`, `all:update`, `all:all`
- `list_v2_inbox_placement_tests` (`read`): Requires one of the following scopes: `inbox_placement_tests:read`, `inbox_placement_tests:all`, `all:read`, `all:all`
- `delete_v2_inbox_placement_tests` (`write`): Requires one of the following scopes: `inbox_placement_tests:delete`, `inbox_placement_tests:all`, `all:delete`, `all:all`
- `get_esp_options_v2_inbox_placement_tests` (`read`): Provides a list of available email service providers for inbox placement tests.

### Resource `v2.lead_labels`:

- `create_v2_lead_labels` (`write`): Requires one of the following scopes: `lead-labels:create`, `lead-labels:all`, `all:create`, `all:all`
- `retrieve_v2_lead_labels` (`read`): Requires one of the following scopes: `lead-labels:read`, `lead-labels:all`, `all:read`, `all:all`
- `update_v2_lead_labels` (`write`): Requires one of the following scopes: `lead-labels:update`, `lead-labels:all`, `all:update`, `all:all`
- `list_v2_lead_labels` (`read`): Requires one of the following scopes: `lead-labels:read`, `lead-labels:all`, `all:read`, `all:all`
- `delete_v2_lead_labels` (`write`): Requires one of the following scopes: `lead-labels:delete`, `lead-labels:all`, `all:delete`, `all:all`

### Resource `v2.lead_lists`:

- `create_v2_lead_lists` (`write`): Requires one of the following scopes: `lead_lists:create`, `lead_lists:all`, `all:create`, `all:all`
- `retrieve_v2_lead_lists` (`read`): Requires one of the following scopes: `lead_lists:read`, `lead_lists:all`, `all:read`, `all:all`
- `update_v2_lead_lists` (`write`): Requires one of the following scopes: `lead_lists:update`, `lead_lists:all`, `all:update`, `all:all`
- `list_v2_lead_lists` (`read`): Requires one of the following scopes: `lead_lists:read`, `lead_lists:all`, `all:read`, `all:all`
- `delete_v2_lead_lists` (`write`): Requires one of the following scopes: `lead_lists:delete`, `lead_lists:all`, `all:delete`, `all:all`

### Resource `v2.leads`:

- `create_v2_leads` (`write`): Requires one of the following scopes: `leads:create`, `leads:all`, `all:create`, `all:all`
- `retrieve_v2_leads` (`read`): Requires one of the following scopes: `leads:read`, `leads:all`, `all:read`, `all:all`
- `update_v2_leads` (`write`): Requires one of the following scopes: `leads:update`, `leads:all`, `all:update`, `all:all`
- `list_v2_leads` (`write`): This endpoint is a POST endpoint, instead of GET - a deviation from the REST APIs standards we’re following because of the complex arguments it accepts, which would be too hard to express through query parameters

Requires one of the following scopes: `leads:read`, `leads:all`, `all:read`, `all:all`

- `delete_v2_leads` (`write`): Requires one of the following scopes: `leads:delete`, `leads:all`, `all:delete`, `all:all`
- `bulk_assign_v2_leads` (`write`): Bulk assign leads to organization users
- `export_v2_leads` (`write`): Export leads to an external app. This endpoint will return a background job that will process the move. The job will be processed in the background and the leads will be moved to the destination campaign or list. You can use the `/background-jobs/:id` endpoint to check the job status.

Requires one of the following scopes: `leads:update`, `leads:all`, `all:update`, `all:all`

- `merge_v2_leads` (`write`): Merge two leads

Requires one of the following scopes: `leads:update`, `leads:all`, `all:update`, `all:all`

- `move_v2_leads` (`write`): Move leads to a different campaign or list. This endpoint will return a background job that will process the move. The job will be processed in the background and the leads will be moved to the destination campaign or list. You can use the `/background-jobs/:id` endpoint to check the job status.

Requires one of the following scopes: `leads:update`, `leads:all`, `all:update`, `all:all`

- `update_interest_status_v2_leads` (`write`): Update the interest status of a lead

### Resource `v2.leads.subsequence`:

- `move_leads_v2_subsequence` (`write`): Move a lead to a subsequence

Requires one of the following scopes: `leads:update`, `leads:all`, `all:update`, `all:all`

- `remove_leads_v2_subsequence` (`write`): Remove a lead from a subsequence

Requires one of the following scopes: `leads:update`, `leads:all`, `all:update`, `all:all`

### Resource `v2.subsequences`:

- `create_v2_subsequences` (`write`): Requires one of the following scopes: `subsequences:create`, `subsequences:all`, `all:create`, `all:all`
- `retrieve_v2_subsequences` (`read`): Requires one of the following scopes: `subsequences:read`, `subsequences:all`, `all:read`, `all:all`
- `update_v2_subsequences` (`write`): Requires one of the following scopes: `subsequences:update`, `subsequences:all`, `all:update`, `all:all`
- `list_v2_subsequences` (`read`): Requires one of the following scopes: `subsequences:read`, `subsequences:all`, `all:read`, `all:all`
- `delete_v2_subsequences` (`write`): Requires one of the following scopes: `subsequences:delete`, `subsequences:all`, `all:delete`, `all:all`
- `duplicate_v2_subsequences` (`write`): Duplicate a subsequence with the same trigger conditions

Requires one of the following scopes: `subsequences:create`, `subsequences:all`, `all:create`, `all:all`

- `pause_v2_subsequences` (`write`): Pause a subsequence

Requires one of the following scopes: `subsequences:update`, `subsequences:all`, `all:update`, `all:all`

- `resume_v2_subsequences` (`write`): Resume a paused subsequence

Requires one of the following scopes: `subsequences:update`, `subsequences:all`, `all:update`, `all:all`

### Resource `v2.workspace_group_members`:

- `create_v2_workspace_group_members` (`write`): This endpoint allows you to send an invitation for a sub workspace to join the admin workspace. The sub workspace will be added as a sub workspace of the admin workspace only if the sub workspace owner accepts the invitation.

Requires one of the following scopes: `workspace_group_members:create`, `workspace_group_members:all`, `all:create`, `all:all`

- `retrieve_v2_workspace_group_members` (`read`): Requires one of the following scopes: `workspace_group_members:read`, `workspace_group_members:all`, `all:read`, `all:all`
- `list_v2_workspace_group_members` (`read`): Requires one of the following scopes: `workspace_group_members:read`, `workspace_group_members:all`, `all:read`, `all:all`
- `delete_v2_workspace_group_members` (`write`): Requires one of the following scopes: `workspace_group_members:delete`, `workspace_group_members:all`, `all:delete`, `all:all`
- `get_admin_v2_workspace_group_members` (`read`): Get the details of the admin workspace of the current workspace

### Resource `v2.workspace_members`:

- `create_v2_workspace_members` (`write`): Requires one of the following scopes: `workspace_members:create`, `workspace_members:all`, `all:create`, `all:all`
- `retrieve_v2_workspace_members` (`read`): Requires one of the following scopes: `workspace_members:read`, `workspace_members:all`, `all:read`, `all:all`
- `update_v2_workspace_members` (`write`): Requires one of the following scopes: `workspace_members:update`, `workspace_members:all`, `all:update`, `all:all`
- `list_v2_workspace_members` (`read`): Requires one of the following scopes: `workspace_members:read`, `workspace_members:all`, `all:read`, `all:all`
- `delete_v2_workspace_members` (`write`): Requires one of the following scopes: `workspace_members:delete`, `workspace_members:all`, `all:delete`, `all:all`

### Resource `v2.workspaces.current`:

- `retrieve_workspaces_v2_current` (`read`): Get your current workspace details. Note that this endpoint doesn't require any parameters. It will return the workspace based on the API key sent in the headers.

Requires one of the following scopes: `workspaces:read`, `workspaces:all`, `all:read`, `all:all`

- `update_workspaces_v2_current` (`write`): Update your current workspace details. Note that this endpoint doesn't require any parameters. It will update the workspace based on the API key sent in the headers.

Requires one of the following scopes: `workspaces:update`, `workspaces:all`, `all:update`, `all:all`
