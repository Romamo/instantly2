# V2

Types:

- <code><a href="./src/resources/v2/v2.ts">V2GetAccountCampaignMappingsResponse</a></code>
- <code><a href="./src/resources/v2/v2.ts">V2ListAPIKeysResponse</a></code>
- <code><a href="./src/resources/v2/v2.ts">V2ListAuditLogsResponse</a></code>
- <code><a href="./src/resources/v2/v2.ts">V2ListBackgroundJobsResponse</a></code>

Methods:

- <code title="post /api/v2/api-keys">client.v2.<a href="./src/resources/v2/v2.ts">createAPIKey</a>({ ...params }) -> APIKey</code>
- <code title="get /api/v2/account-campaign-mappings/{email}">client.v2.<a href="./src/resources/v2/v2.ts">getAccountCampaignMappings</a>(email, { ...params }) -> V2GetAccountCampaignMappingsResponse</code>
- <code title="get /api/v2/api-keys">client.v2.<a href="./src/resources/v2/v2.ts">listAPIKeys</a>({ ...params }) -> V2ListAPIKeysResponse</code>
- <code title="get /api/v2/audit-logs">client.v2.<a href="./src/resources/v2/v2.ts">listAuditLogs</a>({ ...params }) -> V2ListAuditLogsResponse</code>
- <code title="get /api/v2/background-jobs">client.v2.<a href="./src/resources/v2/v2.ts">listBackgroundJobs</a>({ ...params }) -> V2ListBackgroundJobsResponse</code>

## Accounts

Types:

- <code><a href="./src/resources/v2/accounts/accounts.ts">EmailAccount</a></code>
- <code><a href="./src/resources/v2/accounts/accounts.ts">AccountListResponse</a></code>
- <code><a href="./src/resources/v2/accounts/accounts.ts">AccountWarmupAnalyticsResponse</a></code>

Methods:

- <code title="post /api/v2/accounts">client.v2.accounts.<a href="./src/resources/v2/accounts/accounts.ts">create</a>({ ...params }) -> EmailAccount</code>
- <code title="get /api/v2/accounts/{email}">client.v2.accounts.<a href="./src/resources/v2/accounts/accounts.ts">retrieve</a>(email) -> EmailAccount</code>
- <code title="patch /api/v2/accounts/{email}">client.v2.accounts.<a href="./src/resources/v2/accounts/accounts.ts">update</a>(email, { ...params }) -> EmailAccount</code>
- <code title="get /api/v2/accounts">client.v2.accounts.<a href="./src/resources/v2/accounts/accounts.ts">list</a>({ ...params }) -> AccountListResponse</code>
- <code title="delete /api/v2/accounts/{email}">client.v2.accounts.<a href="./src/resources/v2/accounts/accounts.ts">delete</a>(email, { ...params }) -> EmailAccount</code>
- <code title="post /api/v2/accounts/{email}/mark-fixed">client.v2.accounts.<a href="./src/resources/v2/accounts/accounts.ts">markFixed</a>(email) -> EmailAccount</code>
- <code title="post /api/v2/accounts/{email}/pause">client.v2.accounts.<a href="./src/resources/v2/accounts/accounts.ts">pause</a>(email) -> EmailAccount</code>
- <code title="post /api/v2/accounts/{email}/resume">client.v2.accounts.<a href="./src/resources/v2/accounts/accounts.ts">resume</a>(email) -> EmailAccount</code>
- <code title="post /api/v2/accounts/warmup-analytics">client.v2.accounts.<a href="./src/resources/v2/accounts/accounts.ts">warmupAnalytics</a>({ ...params }) -> AccountWarmupAnalyticsResponse</code>

### Ctd

Types:

- <code><a href="./src/resources/v2/accounts/ctd.ts">CtdGetStatusResponse</a></code>

Methods:

- <code title="get /api/v2/accounts/ctd/status">client.v2.accounts.ctd.<a href="./src/resources/v2/accounts/ctd.ts">getStatus</a>({ ...params }) -> CtdGetStatusResponse</code>

### Test

Types:

- <code><a href="./src/resources/v2/accounts/test.ts">TestTestVitalsResponse</a></code>

Methods:

- <code title="post /api/v2/accounts/test/vitals">client.v2.accounts.test.<a href="./src/resources/v2/accounts/test.ts">testVitals</a>({ ...params }) -> TestTestVitalsResponse</code>

## APIKeys

Types:

- <code><a href="./src/resources/v2/api-keys.ts">APIKey</a></code>

Methods:

- <code title="delete /api/v2/api-keys/{id}">client.v2.apiKeys.<a href="./src/resources/v2/api-keys.ts">delete</a>(id, { ...params }) -> APIKey</code>

## BackgroundJobs

Types:

- <code><a href="./src/resources/v2/background-jobs.ts">BackgroundJob</a></code>

Methods:

- <code title="get /api/v2/background-jobs/{id}">client.v2.backgroundJobs.<a href="./src/resources/v2/background-jobs.ts">retrieve</a>(id) -> BackgroundJob</code>

## BlockListsEntries

Types:

- <code><a href="./src/resources/v2/block-lists-entries.ts">BlockedEntry</a></code>
- <code><a href="./src/resources/v2/block-lists-entries.ts">BlockListsEntryListResponse</a></code>

Methods:

- <code title="post /api/v2/block-lists-entries">client.v2.blockListsEntries.<a href="./src/resources/v2/block-lists-entries.ts">create</a>({ ...params }) -> BlockedEntry</code>
- <code title="get /api/v2/block-lists-entries/{id}">client.v2.blockListsEntries.<a href="./src/resources/v2/block-lists-entries.ts">retrieve</a>(id) -> BlockedEntry</code>
- <code title="patch /api/v2/block-lists-entries/{id}">client.v2.blockListsEntries.<a href="./src/resources/v2/block-lists-entries.ts">update</a>(id, { ...params }) -> BlockedEntry</code>
- <code title="get /api/v2/block-lists-entries">client.v2.blockListsEntries.<a href="./src/resources/v2/block-lists-entries.ts">list</a>({ ...params }) -> BlockListsEntryListResponse</code>
- <code title="delete /api/v2/block-lists-entries/{id}">client.v2.blockListsEntries.<a href="./src/resources/v2/block-lists-entries.ts">delete</a>(id, { ...params }) -> BlockedEntry</code>

## Campaigns

Types:

- <code><a href="./src/resources/v2/campaigns/campaigns.ts">Campaign</a></code>
- <code><a href="./src/resources/v2/campaigns/campaigns.ts">CampaignListResponse</a></code>
- <code><a href="./src/resources/v2/campaigns/campaigns.ts">CampaignShareResponse</a></code>

Methods:

- <code title="post /api/v2/campaigns">client.v2.campaigns.<a href="./src/resources/v2/campaigns/campaigns.ts">create</a>({ ...params }) -> Campaign</code>
- <code title="get /api/v2/campaigns/{id}">client.v2.campaigns.<a href="./src/resources/v2/campaigns/campaigns.ts">retrieve</a>(id) -> Campaign</code>
- <code title="patch /api/v2/campaigns/{id}">client.v2.campaigns.<a href="./src/resources/v2/campaigns/campaigns.ts">update</a>(id, { ...params }) -> Campaign</code>
- <code title="get /api/v2/campaigns">client.v2.campaigns.<a href="./src/resources/v2/campaigns/campaigns.ts">list</a>({ ...params }) -> CampaignListResponse</code>
- <code title="delete /api/v2/campaigns/{id}">client.v2.campaigns.<a href="./src/resources/v2/campaigns/campaigns.ts">delete</a>(id, { ...params }) -> Campaign</code>
- <code title="post /api/v2/campaigns/{id}/activate">client.v2.campaigns.<a href="./src/resources/v2/campaigns/campaigns.ts">activate</a>(id) -> Campaign</code>
- <code title="post /api/v2/campaigns/{id}/pause">client.v2.campaigns.<a href="./src/resources/v2/campaigns/campaigns.ts">pause</a>(id) -> Campaign</code>
- <code title="post /api/v2/campaigns/{id}/share">client.v2.campaigns.<a href="./src/resources/v2/campaigns/campaigns.ts">share</a>(id) -> unknown</code>

### Analytics

Types:

- <code><a href="./src/resources/v2/campaigns/analytics.ts">AnalyticsRetrieveResponse</a></code>
- <code><a href="./src/resources/v2/campaigns/analytics.ts">AnalyticsDailyResponse</a></code>
- <code><a href="./src/resources/v2/campaigns/analytics.ts">AnalyticsOverviewResponse</a></code>
- <code><a href="./src/resources/v2/campaigns/analytics.ts">AnalyticsStepsResponse</a></code>

Methods:

- <code title="get /api/v2/campaigns/analytics">client.v2.campaigns.analytics.<a href="./src/resources/v2/campaigns/analytics.ts">retrieve</a>({ ...params }) -> AnalyticsRetrieveResponse</code>
- <code title="get /api/v2/campaigns/analytics/daily">client.v2.campaigns.analytics.<a href="./src/resources/v2/campaigns/analytics.ts">daily</a>({ ...params }) -> AnalyticsDailyResponse</code>
- <code title="get /api/v2/campaigns/analytics/overview">client.v2.campaigns.analytics.<a href="./src/resources/v2/campaigns/analytics.ts">overview</a>({ ...params }) -> AnalyticsOverviewResponse</code>
- <code title="get /api/v2/campaigns/analytics/steps">client.v2.campaigns.analytics.<a href="./src/resources/v2/campaigns/analytics.ts">steps</a>({ ...params }) -> AnalyticsStepsResponse</code>

## CustomTags

Types:

- <code><a href="./src/resources/v2/custom-tags.ts">CustomTag</a></code>
- <code><a href="./src/resources/v2/custom-tags.ts">CustomTagListResponse</a></code>
- <code><a href="./src/resources/v2/custom-tags.ts">CustomTagToggleResourceResponse</a></code>

Methods:

- <code title="post /api/v2/custom-tags">client.v2.customTags.<a href="./src/resources/v2/custom-tags.ts">create</a>({ ...params }) -> CustomTag</code>
- <code title="get /api/v2/custom-tags/{id}">client.v2.customTags.<a href="./src/resources/v2/custom-tags.ts">retrieve</a>(id) -> CustomTag</code>
- <code title="patch /api/v2/custom-tags/{id}">client.v2.customTags.<a href="./src/resources/v2/custom-tags.ts">update</a>(id, { ...params }) -> CustomTag</code>
- <code title="get /api/v2/custom-tags">client.v2.customTags.<a href="./src/resources/v2/custom-tags.ts">list</a>({ ...params }) -> CustomTagListResponse</code>
- <code title="delete /api/v2/custom-tags/{id}">client.v2.customTags.<a href="./src/resources/v2/custom-tags.ts">delete</a>(id, { ...params }) -> CustomTag</code>
- <code title="post /api/v2/custom-tags/toggle-resource">client.v2.customTags.<a href="./src/resources/v2/custom-tags.ts">toggleResource</a>({ ...params }) -> CustomTagToggleResourceResponse</code>

## EmailVerification

Types:

- <code><a href="./src/resources/v2/email-verification.ts">Verification</a></code>

Methods:

- <code title="post /api/v2/email-verification">client.v2.emailVerification.<a href="./src/resources/v2/email-verification.ts">create</a>({ ...params }) -> Verification</code>
- <code title="get /api/v2/email-verification/{email}">client.v2.emailVerification.<a href="./src/resources/v2/email-verification.ts">checkStatus</a>(email) -> Verification</code>

## Emails

Types:

- <code><a href="./src/resources/v2/emails/emails.ts">CampaignEmail</a></code>
- <code><a href="./src/resources/v2/emails/emails.ts">EmailListResponse</a></code>

Methods:

- <code title="get /api/v2/emails/{id}">client.v2.emails.<a href="./src/resources/v2/emails/emails.ts">retrieve</a>(id) -> CampaignEmail</code>
- <code title="patch /api/v2/emails/{id}">client.v2.emails.<a href="./src/resources/v2/emails/emails.ts">update</a>(id, { ...params }) -> CampaignEmail</code>
- <code title="get /api/v2/emails">client.v2.emails.<a href="./src/resources/v2/emails/emails.ts">list</a>({ ...params }) -> EmailListResponse</code>
- <code title="delete /api/v2/emails/{id}">client.v2.emails.<a href="./src/resources/v2/emails/emails.ts">delete</a>(id, { ...params }) -> CampaignEmail</code>
- <code title="post /api/v2/emails/reply">client.v2.emails.<a href="./src/resources/v2/emails/emails.ts">reply</a>({ ...params }) -> CampaignEmail</code>

### Threads

Types:

- <code><a href="./src/resources/v2/emails/threads.ts">ThreadMarkAsReadResponse</a></code>

Methods:

- <code title="post /api/v2/emails/threads/{thread_id}/mark-as-read">client.v2.emails.threads.<a href="./src/resources/v2/emails/threads.ts">markAsRead</a>(threadID) -> ThreadMarkAsReadResponse</code>

### Unread

Types:

- <code><a href="./src/resources/v2/emails/unread.ts">UnreadCountResponse</a></code>

Methods:

- <code title="get /api/v2/emails/unread/count">client.v2.emails.unread.<a href="./src/resources/v2/emails/unread.ts">count</a>() -> UnreadCountResponse</code>

## InboxPlacementAnalytics

Types:

- <code><a href="./src/resources/v2/inbox-placement-analytics.ts">Analytics</a></code>
- <code><a href="./src/resources/v2/inbox-placement-analytics.ts">InboxPlacementAnalyticListResponse</a></code>
- <code><a href="./src/resources/v2/inbox-placement-analytics.ts">InboxPlacementAnalyticGetDeliverabilityInsightsResponse</a></code>
- <code><a href="./src/resources/v2/inbox-placement-analytics.ts">InboxPlacementAnalyticGetStatsByDateResponse</a></code>
- <code><a href="./src/resources/v2/inbox-placement-analytics.ts">InboxPlacementAnalyticGetStatsByTestIDResponse</a></code>

Methods:

- <code title="get /api/v2/inbox-placement-analytics/{id}">client.v2.inboxPlacementAnalytics.<a href="./src/resources/v2/inbox-placement-analytics.ts">retrieve</a>(id) -> Analytics</code>
- <code title="get /api/v2/inbox-placement-analytics">client.v2.inboxPlacementAnalytics.<a href="./src/resources/v2/inbox-placement-analytics.ts">list</a>({ ...params }) -> InboxPlacementAnalyticListResponse</code>
- <code title="post /api/v2/inbox-placement-analytics/deliverability-insights">client.v2.inboxPlacementAnalytics.<a href="./src/resources/v2/inbox-placement-analytics.ts">getDeliverabilityInsights</a>({ ...params }) -> InboxPlacementAnalyticGetDeliverabilityInsightsResponse</code>
- <code title="post /api/v2/inbox-placement-analytics/stats-by-date">client.v2.inboxPlacementAnalytics.<a href="./src/resources/v2/inbox-placement-analytics.ts">getStatsByDate</a>({ ...params }) -> InboxPlacementAnalyticGetStatsByDateResponse</code>
- <code title="post /api/v2/inbox-placement-analytics/stats-by-test-id">client.v2.inboxPlacementAnalytics.<a href="./src/resources/v2/inbox-placement-analytics.ts">getStatsByTestID</a>({ ...params }) -> InboxPlacementAnalyticGetStatsByTestIDResponse</code>

## InboxPlacementReports

Types:

- <code><a href="./src/resources/v2/inbox-placement-reports.ts">Report</a></code>
- <code><a href="./src/resources/v2/inbox-placement-reports.ts">InboxPlacementReportListResponse</a></code>

Methods:

- <code title="get /api/v2/inbox-placement-reports/{id}">client.v2.inboxPlacementReports.<a href="./src/resources/v2/inbox-placement-reports.ts">retrieve</a>(id) -> Report</code>
- <code title="get /api/v2/inbox-placement-reports">client.v2.inboxPlacementReports.<a href="./src/resources/v2/inbox-placement-reports.ts">list</a>({ ...params }) -> InboxPlacementReportListResponse</code>

## InboxPlacementTests

Types:

- <code><a href="./src/resources/v2/inbox-placement-tests.ts">PlacementTest</a></code>
- <code><a href="./src/resources/v2/inbox-placement-tests.ts">InboxPlacementTestRetrieveResponse</a></code>
- <code><a href="./src/resources/v2/inbox-placement-tests.ts">InboxPlacementTestListResponse</a></code>
- <code><a href="./src/resources/v2/inbox-placement-tests.ts">InboxPlacementTestGetEspOptionsResponse</a></code>

Methods:

- <code title="post /api/v2/inbox-placement-tests">client.v2.inboxPlacementTests.<a href="./src/resources/v2/inbox-placement-tests.ts">create</a>({ ...params }) -> PlacementTest</code>
- <code title="get /api/v2/inbox-placement-tests/{id}">client.v2.inboxPlacementTests.<a href="./src/resources/v2/inbox-placement-tests.ts">retrieve</a>(id, { ...params }) -> InboxPlacementTestRetrieveResponse</code>
- <code title="patch /api/v2/inbox-placement-tests/{id}">client.v2.inboxPlacementTests.<a href="./src/resources/v2/inbox-placement-tests.ts">update</a>(id, { ...params }) -> PlacementTest</code>
- <code title="get /api/v2/inbox-placement-tests">client.v2.inboxPlacementTests.<a href="./src/resources/v2/inbox-placement-tests.ts">list</a>({ ...params }) -> InboxPlacementTestListResponse</code>
- <code title="delete /api/v2/inbox-placement-tests/{id}">client.v2.inboxPlacementTests.<a href="./src/resources/v2/inbox-placement-tests.ts">delete</a>(id, { ...params }) -> PlacementTest</code>
- <code title="get /api/v2/inbox-placement-tests/email-service-provider-options">client.v2.inboxPlacementTests.<a href="./src/resources/v2/inbox-placement-tests.ts">getEspOptions</a>() -> InboxPlacementTestGetEspOptionsResponse</code>

## LeadLabels

Types:

- <code><a href="./src/resources/v2/lead-labels.ts">LeadLabel</a></code>
- <code><a href="./src/resources/v2/lead-labels.ts">LeadLabelListResponse</a></code>

Methods:

- <code title="post /api/v2/lead-labels">client.v2.leadLabels.<a href="./src/resources/v2/lead-labels.ts">create</a>({ ...params }) -> LeadLabel</code>
- <code title="get /api/v2/lead-labels/{id}">client.v2.leadLabels.<a href="./src/resources/v2/lead-labels.ts">retrieve</a>(id) -> LeadLabel</code>
- <code title="patch /api/v2/lead-labels/{id}">client.v2.leadLabels.<a href="./src/resources/v2/lead-labels.ts">update</a>(id, { ...params }) -> LeadLabel</code>
- <code title="get /api/v2/lead-labels">client.v2.leadLabels.<a href="./src/resources/v2/lead-labels.ts">list</a>({ ...params }) -> LeadLabelListResponse</code>
- <code title="delete /api/v2/lead-labels/{id}">client.v2.leadLabels.<a href="./src/resources/v2/lead-labels.ts">delete</a>(id, { ...params }) -> LeadLabel</code>

## LeadLists

Types:

- <code><a href="./src/resources/v2/lead-lists.ts">LeadList</a></code>
- <code><a href="./src/resources/v2/lead-lists.ts">LeadListListResponse</a></code>

Methods:

- <code title="post /api/v2/lead-lists">client.v2.leadLists.<a href="./src/resources/v2/lead-lists.ts">create</a>({ ...params }) -> LeadList</code>
- <code title="get /api/v2/lead-lists/{id}">client.v2.leadLists.<a href="./src/resources/v2/lead-lists.ts">retrieve</a>(id) -> LeadList</code>
- <code title="patch /api/v2/lead-lists/{id}">client.v2.leadLists.<a href="./src/resources/v2/lead-lists.ts">update</a>(id, { ...params }) -> LeadList</code>
- <code title="get /api/v2/lead-lists">client.v2.leadLists.<a href="./src/resources/v2/lead-lists.ts">list</a>({ ...params }) -> LeadListListResponse</code>
- <code title="delete /api/v2/lead-lists/{id}">client.v2.leadLists.<a href="./src/resources/v2/lead-lists.ts">delete</a>(id, { ...params }) -> LeadList</code>

## Leads

Types:

- <code><a href="./src/resources/v2/leads/leads.ts">Lead</a></code>
- <code><a href="./src/resources/v2/leads/leads.ts">LeadListResponse</a></code>
- <code><a href="./src/resources/v2/leads/leads.ts">LeadBulkAssignResponse</a></code>
- <code><a href="./src/resources/v2/leads/leads.ts">LeadUpdateInterestStatusResponse</a></code>

Methods:

- <code title="post /api/v2/leads">client.v2.leads.<a href="./src/resources/v2/leads/leads.ts">create</a>({ ...params }) -> Lead</code>
- <code title="get /api/v2/leads/{id}">client.v2.leads.<a href="./src/resources/v2/leads/leads.ts">retrieve</a>(id) -> Lead</code>
- <code title="patch /api/v2/leads/{id}">client.v2.leads.<a href="./src/resources/v2/leads/leads.ts">update</a>(id, { ...params }) -> Lead</code>
- <code title="post /api/v2/leads/list">client.v2.leads.<a href="./src/resources/v2/leads/leads.ts">list</a>({ ...params }) -> LeadListResponse</code>
- <code title="delete /api/v2/leads/{id}">client.v2.leads.<a href="./src/resources/v2/leads/leads.ts">delete</a>(id, { ...params }) -> Lead</code>
- <code title="post /api/v2/leads/bulk-assign">client.v2.leads.<a href="./src/resources/v2/leads/leads.ts">bulkAssign</a>({ ...params }) -> LeadBulkAssignResponse</code>
- <code title="post /api/v2/leads/export">client.v2.leads.<a href="./src/resources/v2/leads/leads.ts">export</a>({ ...params }) -> BackgroundJob</code>
- <code title="post /api/v2/leads/merge">client.v2.leads.<a href="./src/resources/v2/leads/leads.ts">merge</a>({ ...params }) -> Lead</code>
- <code title="post /api/v2/leads/move">client.v2.leads.<a href="./src/resources/v2/leads/leads.ts">move</a>({ ...params }) -> BackgroundJob</code>
- <code title="post /api/v2/leads/update-interest-status">client.v2.leads.<a href="./src/resources/v2/leads/leads.ts">updateInterestStatus</a>({ ...params }) -> LeadUpdateInterestStatusResponse</code>

### Subsequence

Methods:

- <code title="post /api/v2/leads/subsequence/move">client.v2.leads.subsequence.<a href="./src/resources/v2/leads/subsequence.ts">move</a>({ ...params }) -> Lead</code>
- <code title="post /api/v2/leads/subsequence/remove">client.v2.leads.subsequence.<a href="./src/resources/v2/leads/subsequence.ts">remove</a>({ ...params }) -> Lead</code>

## Subsequences

Types:

- <code><a href="./src/resources/v2/subsequences.ts">Subsequence</a></code>
- <code><a href="./src/resources/v2/subsequences.ts">SubsequenceListResponse</a></code>

Methods:

- <code title="post /api/v2/subsequences">client.v2.subsequences.<a href="./src/resources/v2/subsequences.ts">create</a>({ ...params }) -> Subsequence</code>
- <code title="get /api/v2/subsequences/{id}">client.v2.subsequences.<a href="./src/resources/v2/subsequences.ts">retrieve</a>(id) -> Subsequence</code>
- <code title="patch /api/v2/subsequences/{id}">client.v2.subsequences.<a href="./src/resources/v2/subsequences.ts">update</a>(id, { ...params }) -> Subsequence</code>
- <code title="get /api/v2/subsequences">client.v2.subsequences.<a href="./src/resources/v2/subsequences.ts">list</a>({ ...params }) -> SubsequenceListResponse</code>
- <code title="delete /api/v2/subsequences/{id}">client.v2.subsequences.<a href="./src/resources/v2/subsequences.ts">delete</a>(id, { ...params }) -> Subsequence</code>
- <code title="post /api/v2/subsequences/{id}/duplicate">client.v2.subsequences.<a href="./src/resources/v2/subsequences.ts">duplicate</a>(id, { ...params }) -> Subsequence</code>
- <code title="post /api/v2/subsequences/{id}/pause">client.v2.subsequences.<a href="./src/resources/v2/subsequences.ts">pause</a>(id) -> Subsequence</code>
- <code title="post /api/v2/subsequences/{id}/resume">client.v2.subsequences.<a href="./src/resources/v2/subsequences.ts">resume</a>(id) -> Subsequence</code>

## WorkspaceGroupMembers

Types:

- <code><a href="./src/resources/v2/workspace-group-members.ts">GroupMember</a></code>
- <code><a href="./src/resources/v2/workspace-group-members.ts">WorkspaceGroupMemberListResponse</a></code>
- <code><a href="./src/resources/v2/workspace-group-members.ts">WorkspaceGroupMemberGetAdminResponse</a></code>

Methods:

- <code title="post /api/v2/workspace-group-members">client.v2.workspaceGroupMembers.<a href="./src/resources/v2/workspace-group-members.ts">create</a>({ ...params }) -> GroupMember</code>
- <code title="get /api/v2/workspace-group-members/{id}">client.v2.workspaceGroupMembers.<a href="./src/resources/v2/workspace-group-members.ts">retrieve</a>(id) -> GroupMember</code>
- <code title="get /api/v2/workspace-group-members">client.v2.workspaceGroupMembers.<a href="./src/resources/v2/workspace-group-members.ts">list</a>({ ...params }) -> WorkspaceGroupMemberListResponse</code>
- <code title="delete /api/v2/workspace-group-members/{id}">client.v2.workspaceGroupMembers.<a href="./src/resources/v2/workspace-group-members.ts">delete</a>(id, { ...params }) -> GroupMember</code>
- <code title="get /api/v2/workspace-group-members/admin">client.v2.workspaceGroupMembers.<a href="./src/resources/v2/workspace-group-members.ts">getAdmin</a>() -> WorkspaceGroupMemberGetAdminResponse</code>

## WorkspaceMembers

Types:

- <code><a href="./src/resources/v2/workspace-members.ts">WorkspaceMember</a></code>
- <code><a href="./src/resources/v2/workspace-members.ts">WorkspaceMemberListResponse</a></code>

Methods:

- <code title="post /api/v2/workspace-members">client.v2.workspaceMembers.<a href="./src/resources/v2/workspace-members.ts">create</a>({ ...params }) -> WorkspaceMember</code>
- <code title="get /api/v2/workspace-members/{id}">client.v2.workspaceMembers.<a href="./src/resources/v2/workspace-members.ts">retrieve</a>(id) -> WorkspaceMember</code>
- <code title="patch /api/v2/workspace-members/{id}">client.v2.workspaceMembers.<a href="./src/resources/v2/workspace-members.ts">update</a>(id, { ...params }) -> WorkspaceMember</code>
- <code title="get /api/v2/workspace-members">client.v2.workspaceMembers.<a href="./src/resources/v2/workspace-members.ts">list</a>({ ...params }) -> WorkspaceMemberListResponse</code>
- <code title="delete /api/v2/workspace-members/{id}">client.v2.workspaceMembers.<a href="./src/resources/v2/workspace-members.ts">delete</a>(id, { ...params }) -> WorkspaceMember</code>

## Workspaces

### Current

Types:

- <code><a href="./src/resources/v2/workspaces/current.ts">Workspace</a></code>

Methods:

- <code title="get /api/v2/workspaces/current">client.v2.workspaces.current.<a href="./src/resources/v2/workspaces/current.ts">retrieve</a>() -> Workspace</code>
- <code title="patch /api/v2/workspaces/current">client.v2.workspaces.current.<a href="./src/resources/v2/workspaces/current.ts">update</a>({ ...params }) -> Workspace</code>
