// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import Instantly2 from 'instantly2';
import { Tool } from '@modelcontextprotocol/sdk/types.js';

import create_api_key_v2 from './v2/create-api-key-v2';
import get_account_campaign_mappings_v2 from './v2/get-account-campaign-mappings-v2';
import list_api_keys_v2 from './v2/list-api-keys-v2';
import list_audit_logs_v2 from './v2/list-audit-logs-v2';
import list_background_jobs_v2 from './v2/list-background-jobs-v2';
import create_v2_accounts from './v2/accounts/create-v2-accounts';
import retrieve_v2_accounts from './v2/accounts/retrieve-v2-accounts';
import update_v2_accounts from './v2/accounts/update-v2-accounts';
import list_v2_accounts from './v2/accounts/list-v2-accounts';
import delete_v2_accounts from './v2/accounts/delete-v2-accounts';
import mark_fixed_v2_accounts from './v2/accounts/mark-fixed-v2-accounts';
import pause_v2_accounts from './v2/accounts/pause-v2-accounts';
import resume_v2_accounts from './v2/accounts/resume-v2-accounts';
import warmup_analytics_v2_accounts from './v2/accounts/warmup-analytics-v2-accounts';
import get_status_accounts_v2_ctd from './v2/accounts/ctd/get-status-accounts-v2-ctd';
import test_vitals_accounts_v2_test from './v2/accounts/test/test-vitals-accounts-v2-test';
import delete_v2_api_keys from './v2/api-keys/delete-v2-api-keys';
import retrieve_v2_background_jobs from './v2/background-jobs/retrieve-v2-background-jobs';
import create_v2_block_lists_entries from './v2/block-lists-entries/create-v2-block-lists-entries';
import retrieve_v2_block_lists_entries from './v2/block-lists-entries/retrieve-v2-block-lists-entries';
import update_v2_block_lists_entries from './v2/block-lists-entries/update-v2-block-lists-entries';
import list_v2_block_lists_entries from './v2/block-lists-entries/list-v2-block-lists-entries';
import delete_v2_block_lists_entries from './v2/block-lists-entries/delete-v2-block-lists-entries';
import create_v2_campaigns from './v2/campaigns/create-v2-campaigns';
import retrieve_v2_campaigns from './v2/campaigns/retrieve-v2-campaigns';
import update_v2_campaigns from './v2/campaigns/update-v2-campaigns';
import list_v2_campaigns from './v2/campaigns/list-v2-campaigns';
import delete_v2_campaigns from './v2/campaigns/delete-v2-campaigns';
import activate_v2_campaigns from './v2/campaigns/activate-v2-campaigns';
import pause_v2_campaigns from './v2/campaigns/pause-v2-campaigns';
import share_v2_campaigns from './v2/campaigns/share-v2-campaigns';
import retrieve_campaigns_v2_analytics from './v2/campaigns/analytics/retrieve-campaigns-v2-analytics';
import daily_campaigns_v2_analytics from './v2/campaigns/analytics/daily-campaigns-v2-analytics';
import overview_campaigns_v2_analytics from './v2/campaigns/analytics/overview-campaigns-v2-analytics';
import steps_campaigns_v2_analytics from './v2/campaigns/analytics/steps-campaigns-v2-analytics';
import create_v2_custom_tags from './v2/custom-tags/create-v2-custom-tags';
import retrieve_v2_custom_tags from './v2/custom-tags/retrieve-v2-custom-tags';
import update_v2_custom_tags from './v2/custom-tags/update-v2-custom-tags';
import list_v2_custom_tags from './v2/custom-tags/list-v2-custom-tags';
import delete_v2_custom_tags from './v2/custom-tags/delete-v2-custom-tags';
import toggle_resource_v2_custom_tags from './v2/custom-tags/toggle-resource-v2-custom-tags';
import create_v2_email_verification from './v2/email-verification/create-v2-email-verification';
import check_status_v2_email_verification from './v2/email-verification/check-status-v2-email-verification';
import retrieve_v2_emails from './v2/emails/retrieve-v2-emails';
import update_v2_emails from './v2/emails/update-v2-emails';
import list_v2_emails from './v2/emails/list-v2-emails';
import delete_v2_emails from './v2/emails/delete-v2-emails';
import reply_v2_emails from './v2/emails/reply-v2-emails';
import mark_as_read_emails_v2_threads from './v2/emails/threads/mark-as-read-emails-v2-threads';
import count_emails_v2_unread from './v2/emails/unread/count-emails-v2-unread';
import retrieve_v2_inbox_placement_analytics from './v2/inbox-placement-analytics/retrieve-v2-inbox-placement-analytics';
import list_v2_inbox_placement_analytics from './v2/inbox-placement-analytics/list-v2-inbox-placement-analytics';
import get_deliverability_insights_v2_inbox_placement_analytics from './v2/inbox-placement-analytics/get-deliverability-insights-v2-inbox-placement-analytics';
import get_stats_by_date_v2_inbox_placement_analytics from './v2/inbox-placement-analytics/get-stats-by-date-v2-inbox-placement-analytics';
import get_stats_by_test_id_v2_inbox_placement_analytics from './v2/inbox-placement-analytics/get-stats-by-test-id-v2-inbox-placement-analytics';
import retrieve_v2_inbox_placement_reports from './v2/inbox-placement-reports/retrieve-v2-inbox-placement-reports';
import list_v2_inbox_placement_reports from './v2/inbox-placement-reports/list-v2-inbox-placement-reports';
import create_v2_inbox_placement_tests from './v2/inbox-placement-tests/create-v2-inbox-placement-tests';
import retrieve_v2_inbox_placement_tests from './v2/inbox-placement-tests/retrieve-v2-inbox-placement-tests';
import update_v2_inbox_placement_tests from './v2/inbox-placement-tests/update-v2-inbox-placement-tests';
import list_v2_inbox_placement_tests from './v2/inbox-placement-tests/list-v2-inbox-placement-tests';
import delete_v2_inbox_placement_tests from './v2/inbox-placement-tests/delete-v2-inbox-placement-tests';
import get_esp_options_v2_inbox_placement_tests from './v2/inbox-placement-tests/get-esp-options-v2-inbox-placement-tests';
import create_v2_lead_labels from './v2/lead-labels/create-v2-lead-labels';
import retrieve_v2_lead_labels from './v2/lead-labels/retrieve-v2-lead-labels';
import update_v2_lead_labels from './v2/lead-labels/update-v2-lead-labels';
import list_v2_lead_labels from './v2/lead-labels/list-v2-lead-labels';
import delete_v2_lead_labels from './v2/lead-labels/delete-v2-lead-labels';
import create_v2_lead_lists from './v2/lead-lists/create-v2-lead-lists';
import retrieve_v2_lead_lists from './v2/lead-lists/retrieve-v2-lead-lists';
import update_v2_lead_lists from './v2/lead-lists/update-v2-lead-lists';
import list_v2_lead_lists from './v2/lead-lists/list-v2-lead-lists';
import delete_v2_lead_lists from './v2/lead-lists/delete-v2-lead-lists';
import create_v2_leads from './v2/leads/create-v2-leads';
import retrieve_v2_leads from './v2/leads/retrieve-v2-leads';
import update_v2_leads from './v2/leads/update-v2-leads';
import list_v2_leads from './v2/leads/list-v2-leads';
import delete_v2_leads from './v2/leads/delete-v2-leads';
import bulk_assign_v2_leads from './v2/leads/bulk-assign-v2-leads';
import export_v2_leads from './v2/leads/export-v2-leads';
import merge_v2_leads from './v2/leads/merge-v2-leads';
import move_v2_leads from './v2/leads/move-v2-leads';
import update_interest_status_v2_leads from './v2/leads/update-interest-status-v2-leads';
import move_leads_v2_subsequence from './v2/leads/subsequence/move-leads-v2-subsequence';
import remove_leads_v2_subsequence from './v2/leads/subsequence/remove-leads-v2-subsequence';
import create_v2_subsequences from './v2/subsequences/create-v2-subsequences';
import retrieve_v2_subsequences from './v2/subsequences/retrieve-v2-subsequences';
import update_v2_subsequences from './v2/subsequences/update-v2-subsequences';
import list_v2_subsequences from './v2/subsequences/list-v2-subsequences';
import delete_v2_subsequences from './v2/subsequences/delete-v2-subsequences';
import duplicate_v2_subsequences from './v2/subsequences/duplicate-v2-subsequences';
import pause_v2_subsequences from './v2/subsequences/pause-v2-subsequences';
import resume_v2_subsequences from './v2/subsequences/resume-v2-subsequences';
import create_v2_workspace_group_members from './v2/workspace-group-members/create-v2-workspace-group-members';
import retrieve_v2_workspace_group_members from './v2/workspace-group-members/retrieve-v2-workspace-group-members';
import list_v2_workspace_group_members from './v2/workspace-group-members/list-v2-workspace-group-members';
import delete_v2_workspace_group_members from './v2/workspace-group-members/delete-v2-workspace-group-members';
import get_admin_v2_workspace_group_members from './v2/workspace-group-members/get-admin-v2-workspace-group-members';
import create_v2_workspace_members from './v2/workspace-members/create-v2-workspace-members';
import retrieve_v2_workspace_members from './v2/workspace-members/retrieve-v2-workspace-members';
import update_v2_workspace_members from './v2/workspace-members/update-v2-workspace-members';
import list_v2_workspace_members from './v2/workspace-members/list-v2-workspace-members';
import delete_v2_workspace_members from './v2/workspace-members/delete-v2-workspace-members';
import retrieve_workspaces_v2_current from './v2/workspaces/current/retrieve-workspaces-v2-current';
import update_workspaces_v2_current from './v2/workspaces/current/update-workspaces-v2-current';

export type HandlerFunction = (client: Instantly2, args: Record<string, unknown> | undefined) => Promise<any>;

export type Metadata = {
  resource: string;
  operation: 'read' | 'write';
  tags: string[];
};

export type Endpoint = {
  metadata: Metadata;
  tool: Tool;
  handler: HandlerFunction;
};

export const endpoints: Endpoint[] = [];

function addEndpoint(endpoint: Endpoint) {
  endpoints.push(endpoint);
}

addEndpoint(create_api_key_v2);
addEndpoint(get_account_campaign_mappings_v2);
addEndpoint(list_api_keys_v2);
addEndpoint(list_audit_logs_v2);
addEndpoint(list_background_jobs_v2);
addEndpoint(create_v2_accounts);
addEndpoint(retrieve_v2_accounts);
addEndpoint(update_v2_accounts);
addEndpoint(list_v2_accounts);
addEndpoint(delete_v2_accounts);
addEndpoint(mark_fixed_v2_accounts);
addEndpoint(pause_v2_accounts);
addEndpoint(resume_v2_accounts);
addEndpoint(warmup_analytics_v2_accounts);
addEndpoint(get_status_accounts_v2_ctd);
addEndpoint(test_vitals_accounts_v2_test);
addEndpoint(delete_v2_api_keys);
addEndpoint(retrieve_v2_background_jobs);
addEndpoint(create_v2_block_lists_entries);
addEndpoint(retrieve_v2_block_lists_entries);
addEndpoint(update_v2_block_lists_entries);
addEndpoint(list_v2_block_lists_entries);
addEndpoint(delete_v2_block_lists_entries);
addEndpoint(create_v2_campaigns);
addEndpoint(retrieve_v2_campaigns);
addEndpoint(update_v2_campaigns);
addEndpoint(list_v2_campaigns);
addEndpoint(delete_v2_campaigns);
addEndpoint(activate_v2_campaigns);
addEndpoint(pause_v2_campaigns);
addEndpoint(share_v2_campaigns);
addEndpoint(retrieve_campaigns_v2_analytics);
addEndpoint(daily_campaigns_v2_analytics);
addEndpoint(overview_campaigns_v2_analytics);
addEndpoint(steps_campaigns_v2_analytics);
addEndpoint(create_v2_custom_tags);
addEndpoint(retrieve_v2_custom_tags);
addEndpoint(update_v2_custom_tags);
addEndpoint(list_v2_custom_tags);
addEndpoint(delete_v2_custom_tags);
addEndpoint(toggle_resource_v2_custom_tags);
addEndpoint(create_v2_email_verification);
addEndpoint(check_status_v2_email_verification);
addEndpoint(retrieve_v2_emails);
addEndpoint(update_v2_emails);
addEndpoint(list_v2_emails);
addEndpoint(delete_v2_emails);
addEndpoint(reply_v2_emails);
addEndpoint(mark_as_read_emails_v2_threads);
addEndpoint(count_emails_v2_unread);
addEndpoint(retrieve_v2_inbox_placement_analytics);
addEndpoint(list_v2_inbox_placement_analytics);
addEndpoint(get_deliverability_insights_v2_inbox_placement_analytics);
addEndpoint(get_stats_by_date_v2_inbox_placement_analytics);
addEndpoint(get_stats_by_test_id_v2_inbox_placement_analytics);
addEndpoint(retrieve_v2_inbox_placement_reports);
addEndpoint(list_v2_inbox_placement_reports);
addEndpoint(create_v2_inbox_placement_tests);
addEndpoint(retrieve_v2_inbox_placement_tests);
addEndpoint(update_v2_inbox_placement_tests);
addEndpoint(list_v2_inbox_placement_tests);
addEndpoint(delete_v2_inbox_placement_tests);
addEndpoint(get_esp_options_v2_inbox_placement_tests);
addEndpoint(create_v2_lead_labels);
addEndpoint(retrieve_v2_lead_labels);
addEndpoint(update_v2_lead_labels);
addEndpoint(list_v2_lead_labels);
addEndpoint(delete_v2_lead_labels);
addEndpoint(create_v2_lead_lists);
addEndpoint(retrieve_v2_lead_lists);
addEndpoint(update_v2_lead_lists);
addEndpoint(list_v2_lead_lists);
addEndpoint(delete_v2_lead_lists);
addEndpoint(create_v2_leads);
addEndpoint(retrieve_v2_leads);
addEndpoint(update_v2_leads);
addEndpoint(list_v2_leads);
addEndpoint(delete_v2_leads);
addEndpoint(bulk_assign_v2_leads);
addEndpoint(export_v2_leads);
addEndpoint(merge_v2_leads);
addEndpoint(move_v2_leads);
addEndpoint(update_interest_status_v2_leads);
addEndpoint(move_leads_v2_subsequence);
addEndpoint(remove_leads_v2_subsequence);
addEndpoint(create_v2_subsequences);
addEndpoint(retrieve_v2_subsequences);
addEndpoint(update_v2_subsequences);
addEndpoint(list_v2_subsequences);
addEndpoint(delete_v2_subsequences);
addEndpoint(duplicate_v2_subsequences);
addEndpoint(pause_v2_subsequences);
addEndpoint(resume_v2_subsequences);
addEndpoint(create_v2_workspace_group_members);
addEndpoint(retrieve_v2_workspace_group_members);
addEndpoint(list_v2_workspace_group_members);
addEndpoint(delete_v2_workspace_group_members);
addEndpoint(get_admin_v2_workspace_group_members);
addEndpoint(create_v2_workspace_members);
addEndpoint(retrieve_v2_workspace_members);
addEndpoint(update_v2_workspace_members);
addEndpoint(list_v2_workspace_members);
addEndpoint(delete_v2_workspace_members);
addEndpoint(retrieve_workspaces_v2_current);
addEndpoint(update_workspaces_v2_current);

export type Filter = {
  type: 'resource' | 'operation' | 'tag' | 'tool';
  op: 'include' | 'exclude';
  value: string;
};

export function query(filters: Filter[], endpoints: Endpoint[]): Endpoint[] {
  const allExcludes = filters.length > 0 && filters.every((filter) => filter.op === 'exclude');
  const unmatchedFilters = new Set(filters);

  const filtered = endpoints.filter((endpoint: Endpoint) => {
    let included = false || allExcludes;

    for (const filter of filters) {
      if (match(filter, endpoint)) {
        unmatchedFilters.delete(filter);
        included = filter.op === 'include';
      }
    }

    return included;
  });

  // Check if any filters didn't match
  if (unmatchedFilters.size > 0) {
    throw new Error(
      `The following filters did not match any endpoints: ${[...unmatchedFilters]
        .map((f) => `${f.type}=${f.value}`)
        .join(', ')}`,
    );
  }

  return filtered;
}

function match({ type, value }: Filter, endpoint: Endpoint): boolean {
  switch (type) {
    case 'resource': {
      const regexStr = '^' + normalizeResource(value).replace(/\*/g, '.*') + '$';
      const regex = new RegExp(regexStr);
      return regex.test(normalizeResource(endpoint.metadata.resource));
    }
    case 'operation':
      return endpoint.metadata.operation === value;
    case 'tag':
      return endpoint.metadata.tags.includes(value);
    case 'tool':
      return endpoint.tool.name === value;
  }
}

function normalizeResource(resource: string): string {
  return resource.toLowerCase().replace(/[^a-z.*\-_]*/g, '');
}
