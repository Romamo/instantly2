// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../../core/resource';
import * as BackgroundJobsAPI from '../background-jobs';
import * as SubsequenceAPI from './subsequence';
import { Subsequence, SubsequenceMoveParams, SubsequenceRemoveParams } from './subsequence';
import { APIPromise } from '../../../core/api-promise';
import { RequestOptions } from '../../../internal/request-options';
import { path } from '../../../internal/utils/path';

export class Leads extends APIResource {
  subsequence: SubsequenceAPI.Subsequence = new SubsequenceAPI.Subsequence(this._client);

  /**
   * Requires one of the following scopes: `leads:create`, `leads:all`, `all:create`,
   * `all:all`
   *
   * @example
   * ```ts
   * const lead = await client.v2.leads.create();
   * ```
   */
  create(body: LeadCreateParams | null | undefined = {}, options?: RequestOptions): APIPromise<Lead> {
    return this._client.post('/api/v2/leads', { body, ...options });
  }

  /**
   * Requires one of the following scopes: `leads:read`, `leads:all`, `all:read`,
   * `all:all`
   *
   * @example
   * ```ts
   * const lead = await client.v2.leads.retrieve(
   *   '0196ed60-9e3b-7e86-8351-7267b1ecf34d',
   * );
   * ```
   */
  retrieve(id: string, options?: RequestOptions): APIPromise<Lead> {
    return this._client.get(path`/api/v2/leads/${id}`, options);
  }

  /**
   * Requires one of the following scopes: `leads:update`, `leads:all`, `all:update`,
   * `all:all`
   *
   * @example
   * ```ts
   * const lead = await client.v2.leads.update(
   *   '0196ed60-9e3d-73e0-b4d2-0c42e5c900c0',
   * );
   * ```
   */
  update(
    id: string,
    body: LeadUpdateParams | null | undefined = {},
    options?: RequestOptions,
  ): APIPromise<Lead> {
    return this._client.patch(path`/api/v2/leads/${id}`, { body, ...options });
  }

  /**
   * This endpoint is a POST endpoint, instead of GET - a deviation from the REST
   * APIs standards we’re following because of the complex arguments it accepts,
   * which would be too hard to express through query parameters
   *
   * Requires one of the following scopes: `leads:read`, `leads:all`, `all:read`,
   * `all:all`
   *
   * @example
   * ```ts
   * const leads = await client.v2.leads.list();
   * ```
   */
  list(body: LeadListParams | null | undefined = {}, options?: RequestOptions): APIPromise<LeadListResponse> {
    return this._client.post('/api/v2/leads/list', { body, ...options });
  }

  /**
   * Requires one of the following scopes: `leads:delete`, `leads:all`, `all:delete`,
   * `all:all`
   *
   * @example
   * ```ts
   * const lead = await client.v2.leads.delete(
   *   '0196ed60-9e3e-7398-b028-dc714d952ca4',
   * );
   * ```
   */
  delete(
    id: string,
    params: LeadDeleteParams | null | undefined = undefined,
    options?: RequestOptions,
  ): APIPromise<Lead> {
    const { body } = params ?? {};
    return this._client.delete(path`/api/v2/leads/${id}`, { body: body, ...options });
  }

  /**
   * Bulk assign leads to organization users
   *
   * @example
   * ```ts
   * const response = await client.v2.leads.bulkAssign({
   *   organization_user_ids: [
   *     '182bd5e5-6e1a-4fe4-a799-aa6d9a6ab26e',
   *   ],
   * });
   * ```
   */
  bulkAssign(body: LeadBulkAssignParams, options?: RequestOptions): APIPromise<LeadBulkAssignResponse> {
    return this._client.post('/api/v2/leads/bulk-assign', { body, ...options });
  }

  /**
   * Export leads to an external app. This endpoint will return a background job that
   * will process the move. The job will be processed in the background and the leads
   * will be moved to the destination campaign or list. You can use the
   * `/background-jobs/:id` endpoint to check the job status.
   *
   * Requires one of the following scopes: `leads:update`, `leads:all`, `all:update`,
   * `all:all`
   *
   * @example
   * ```ts
   * const backgroundJob = await client.v2.leads.export();
   * ```
   */
  export(
    body: LeadExportParams | null | undefined = {},
    options?: RequestOptions,
  ): APIPromise<BackgroundJobsAPI.BackgroundJob> {
    return this._client.post('/api/v2/leads/export', { body, ...options });
  }

  /**
   * Merge two leads
   *
   * Requires one of the following scopes: `leads:update`, `leads:all`, `all:update`,
   * `all:all`
   *
   * @example
   * ```ts
   * const lead = await client.v2.leads.merge({
   *   destination_lead_id:
   *     '0196ed60-9e3c-7723-8ddb-4bb65fb9628c',
   *   lead_id: '0196ed60-9e3c-7723-8ddb-4bb5c77c9335',
   * });
   * ```
   */
  merge(body: LeadMergeParams, options?: RequestOptions): APIPromise<Lead> {
    return this._client.post('/api/v2/leads/merge', { body, ...options });
  }

  /**
   * Move leads to a different campaign or list. This endpoint will return a
   * background job that will process the move. The job will be processed in the
   * background and the leads will be moved to the destination campaign or list. You
   * can use the `/background-jobs/:id` endpoint to check the job status.
   *
   * Requires one of the following scopes: `leads:update`, `leads:all`, `all:update`,
   * `all:all`
   *
   * @example
   * ```ts
   * const backgroundJob = await client.v2.leads.move();
   * ```
   */
  move(
    body: LeadMoveParams | null | undefined = {},
    options?: RequestOptions,
  ): APIPromise<BackgroundJobsAPI.BackgroundJob> {
    return this._client.post('/api/v2/leads/move', { body, ...options });
  }

  /**
   * Update the interest status of a lead
   *
   * @example
   * ```ts
   * const response = await client.v2.leads.updateInterestStatus(
   *   { interest_value: 1, lead_email: 'test@test.com' },
   * );
   * ```
   */
  updateInterestStatus(
    body: LeadUpdateInterestStatusParams,
    options?: RequestOptions,
  ): APIPromise<LeadUpdateInterestStatusResponse> {
    return this._client.post('/api/v2/leads/update-interest-status', { body, ...options });
  }
}

/**
 * A lead entity representing an individual lead
 */
export interface Lead {
  /**
   * Unique identifier for the lead
   */
  id: string;

  /**
   * Company domain of the lead
   */
  company_domain: string;

  /**
   * Number of times the email was clicked
   */
  email_click_count: number;

  /**
   * Number of times the email was opened
   */
  email_open_count: number;

  /**
   * Number of times the email was replied to
   */
  email_reply_count: number;

  /**
   * Organization ID associated with the lead
   */
  organization: string;

  /**
   * Status of the lead
   */
  status: 1 | 2 | 3 | -1 | -2 | -3;

  /**
   * Status summary of the lead
   */
  status_summary: Lead.StatusSummary;

  /**
   * Timestamp when the lead was created
   */
  timestamp_created: string;

  /**
   * Timestamp when the lead was last updated
   */
  timestamp_updated: string;

  /**
   * ID of the user assigned to the lead
   */
  assigned_to?: string;

  /**
   * Campaign ID associated with the lead
   */
  campaign?: string;

  /**
   * Company name of the lead
   */
  company_name?: string;

  /**
   * Email address of the lead
   */
  email?: string;

  /**
   * Last email step the lead has clicked
   */
  email_clicked_step?: number;

  /**
   * Last step variant the lead has clicked
   */
  email_clicked_variant?: number;

  /**
   * Last email step opened by the lead
   */
  email_opened_step?: number;

  /**
   * Last step variant opened by the lead
   */
  email_opened_variant?: number;

  /**
   * Last email step the lead has replied to
   */
  email_replied_step?: number;

  /**
   * Last step variant the lead has replied to
   */
  email_replied_variant?: number;

  /**
   * Enrichment status of the lead
   */
  enrichment_status?: 1 | -1 | 11 | -2;

  /**
   * ESP code associated with the lead
   */
  esp_code?: 0 | 1 | 2 | 3 | 9 | 10 | 12 | 13 | 999 | 1000;

  /**
   * First name of the lead
   */
  first_name?: string;

  /**
   * Indicates if the lead is a website visitor
   */
  is_website_visitor?: boolean;

  /**
   * Source of the last contact
   */
  last_contacted_from?: string;

  /**
   * Last name of the lead
   */
  last_name?: string;

  /**
   * Source of the last step
   */
  last_step_from?: string;

  /**
   * ID of the last step
   */
  last_step_id?: string;

  /**
   * Timestamp when the last step was executed
   */
  last_step_timestamp_executed?: string;

  /**
   * List ID associated with the lead
   */
  list_id?: string;

  /**
   * Lead interest status. It can be either a static value (check below), or a custom
   * status interest value
   */
  lt_interest_status?: 1 | 2 | 3 | 4 | 0 | -1 | -2 | -3;

  /**
   * Lead custom variables. This object can contain any key, but the values have to
   * be of type string, number, boolean, or null. We do NOT allow objects or arrays
   * as values.
   */
  payload?: Lead.Payload;

  /**
   * Personalization of the lead
   */
  personalization?: string;

  /**
   * Phone number of the lead
   */
  phone?: string;

  /**
   * Potential value of the lead
   */
  pl_value_lead?: string;

  /**
   * Subsequence status summary of the lead
   */
  status_summary_subseq?: Lead.StatusSummarySubseq;

  /**
   * ID of the subsequence
   */
  subsequence_id?: string;

  /**
   * Timestamp when the lead was added to the subsequence
   */
  timestamp_added_subsequence?: string;

  /**
   * Timestamp of the last email click
   */
  timestamp_last_click?: string;

  /**
   * Timestamp of the last contact with the lead
   */
  timestamp_last_contact?: string;

  /**
   * Timestamp of the last interest status change
   */
  timestamp_last_interest_change?: string;

  /**
   * Timestamp of the last email open
   */
  timestamp_last_open?: string;

  /**
   * Timestamp of the last email reply
   */
  timestamp_last_reply?: string;

  /**
   * Timestamp of the last touch with the lead
   */
  timestamp_last_touch?: string;

  /**
   * Method used to upload the lead
   */
  upload_method?: 'manual' | 'api' | 'website-visitor';

  /**
   * ID of the user who uploaded the lead
   */
  uploaded_by_user?: string;

  /**
   * Verification status of the lead
   */
  verification_status?: 1 | -1 | -2 | -3 | -4 | 11 | 12;

  /**
   * Website of the lead
   */
  website?: string;
}

export namespace Lead {
  /**
   * Status summary of the lead
   */
  export interface StatusSummary {
    from?: string;

    stepID?: string;

    timestamp_executed?: string;
  }

  /**
   * Lead custom variables. This object can contain any key, but the values have to
   * be of type string, number, boolean, or null. We do NOT allow objects or arrays
   * as values.
   */
  export interface Payload {
    companyName?: string;

    firstName?: string;

    lastName?: string;

    personalization?: string;

    phone?: string;

    website?: string;

    [k: string]: null | string | number | boolean | unknown | string | undefined;
  }

  /**
   * Subsequence status summary of the lead
   */
  export interface StatusSummarySubseq {
    from?: string;

    stepID?: string;

    timestampExecuted?: string;
  }
}

export interface LeadListResponse {
  items: Array<Lead>;

  /**
   * The filter for getting the next items after this one, this could either be a
   * UUID, a MongoDB ID, a timestamp, on an email depending on the specific API
   */
  next_starting_after?: string;
}

export interface LeadBulkAssignResponse {
  message?: string;

  status?: string;
}

export interface LeadUpdateInterestStatusResponse {
  message?: string;
}

export interface LeadCreateParams {
  /**
   * ID of the user assigned to the lead
   */
  assigned_to?: string;

  blocklist_id?: string;

  /**
   * Campaign ID associated with the lead
   */
  campaign?: string;

  /**
   * Company name of the lead
   */
  company_name?: string;

  /**
   * Custom variables can include any metadata about the lead that is relevant to the
   * campaign, the campaign will be updated to allow all the other leads in the
   * campaign to have the same custom variables. The custom variables will be added
   * to the lead payload field
   */
  custom_variables?: { [key: string]: string | number | boolean | null };

  /**
   * Email address of the lead
   */
  email?: string;

  /**
   * First name of the lead
   */
  first_name?: string;

  /**
   * Last name of the lead
   */
  last_name?: string;

  /**
   * List ID associated with the lead
   */
  list_id?: string;

  /**
   * Lead interest status. It can be either a static value (check below), or a custom
   * status interest value
   */
  lt_interest_status?: 1 | 2 | 3 | 4 | 0 | -1 | -2 | -3;

  /**
   * Personalization of the lead
   */
  personalization?: string;

  /**
   * Phone number of the lead
   */
  phone?: string;

  /**
   * Potential value of the lead
   */
  pl_value_lead?: string;

  skip_if_in_campaign?: boolean;

  skip_if_in_list?: boolean;

  skip_if_in_workspace?: boolean;

  verify_leads_for_lead_finder?: boolean;

  verify_leads_on_import?: boolean;

  /**
   * Website of the lead
   */
  website?: string;
}

export interface LeadUpdateParams {
  /**
   * ID of the user assigned to the lead
   */
  assigned_to?: string;

  /**
   * Company name of the lead
   */
  company_name?: string;

  /**
   * Custom variables can include any metadata about the lead that is relevant to the
   * campaign, the campaign will be updated to allow all the other leads in the
   * campaign to have the same custom variables. The custom variables will be added
   * to the lead payload field
   */
  custom_variables?: { [key: string]: string | number | boolean | null };

  /**
   * First name of the lead
   */
  first_name?: string;

  /**
   * Last name of the lead
   */
  last_name?: string;

  /**
   * Lead interest status. It can be either a static value (check below), or a custom
   * status interest value
   */
  lt_interest_status?: 1 | 2 | 3 | 4 | 0 | -1 | -2 | -3;

  /**
   * Personalization of the lead
   */
  personalization?: string;

  /**
   * Phone number of the lead
   */
  phone?: string;

  /**
   * Potential value of the lead
   */
  pl_value_lead?: string;

  /**
   * Website of the lead
   */
  website?: string;
}

export interface LeadListParams {
  /**
   * Campaign ID to filter leads
   */
  campaign?: string;

  /**
   * Array of emails the leads needs to have
   */
  contacts?: Array<string>;

  /**
   * Whether to return distinct contacts
   */
  distinct_contacts?: boolean;

  /**
   * Enrichment status to filter leads
   */
  enrichment_status?: 1 | -1 | 11 | -2;

  /**
   * Array of lead IDs to exclude
   */
  excluded_ids?: Array<string>;

  /**
   * Filter criteria for leads. For custom lead labels, use the `interest_status`
   * field.
   */
  filter?: string;

  /**
   * Array of lead IDs to include
   */
  ids?: Array<string>;

  /**
   * Whether the lead is in a campaign
   */
  in_campaign?: boolean;

  /**
   * Whether the lead is in a list
   */
  in_list?: boolean;

  /**
   * Whether the lead is a website visitor
   */
  is_website_visitor?: boolean;

  /**
   * The number of items to return
   */
  limit?: number;

  /**
   * List ID to filter leads
   */
  list_id?: string;

  /**
   * Array of organization user IDs to filter leads
   */
  organization_user_ids?: Array<string>;

  queries?: Array<LeadListParams.Query>;

  /**
   * A search string to search the leads against - can be First Name, Last Name, or
   * Email
   */
  search?: string;

  /**
   * Smart view ID to filter leads
   */
  smart_view_id?: string;

  /**
   * The ID of the last item in the previous page - used for pagination. You can use
   * the value of the `next_starting_after` field from the previous response.
   */
  starting_after?: string;
}

export namespace LeadListParams {
  /**
   * Smart view query to filter leads
   */
  export interface Query {
    actionType:
      | 'reply'
      | 'email-open'
      | 'last-contacted'
      | 'link-click'
      | 'lead-status'
      | 'lead-status-change';

    values: Query.Values;
  }

  export namespace Query {
    export interface Values {
      'lead-status'?: Values.LeadStatus;

      'occurrence-count'?: Values.OccurrenceCount;

      'occurrence-days'?: number;
    }

    export namespace Values {
      export interface LeadStatus {
        condition?: 'is' | 'is-not';

        status?: number;
      }

      export interface OccurrenceCount {
        condition?: 'more' | 'less' | 'equal';

        count?: number;
      }
    }
  }
}

export interface LeadDeleteParams {
  body?: null;
}

export interface LeadBulkAssignParams {
  organization_user_ids: Array<string>;

  campaign?: string;

  filter?: string;

  ids?: Array<string>;

  in_campaign?: boolean;

  in_list?: boolean;

  limit?: number;

  list_id?: string;

  queries?: Array<LeadBulkAssignParams.Query>;

  search?: string;

  smart_view_id?: string;
}

export namespace LeadBulkAssignParams {
  export interface Query {
    actionType:
      | 'reply'
      | 'email-open'
      | 'last-contacted'
      | 'link-click'
      | 'lead-status'
      | 'lead-status-change';

    values: Query.Values;
  }

  export namespace Query {
    export interface Values {
      'lead-status'?: Values.LeadStatus;

      'occurrence-count'?: Values.OccurrenceCount;

      'occurrence-days'?: number;
    }

    export namespace Values {
      export interface LeadStatus {
        condition?: 'is' | 'is-not';

        status?: number;
      }

      export interface OccurrenceCount {
        condition?: 'more' | 'less' | 'equal';

        count?: number;
      }
    }
  }
}

export interface LeadExportParams {
  app_connection_id?: string;

  /**
   * Campaign ID to filter leads
   */
  campaign?: string;

  /**
   * Array of emails the leads needs to have
   */
  contacts?: Array<string>;

  /**
   * Array of lead IDs to exclude
   */
  excluded_ids?: Array<string>;

  extra_params?: LeadExportParams.ExtraParams;

  /**
   * Filter criteria for leads. For custom lead labels, use the `interest_status`
   * field.
   */
  filter?: string;

  /**
   * Array of lead IDs to include
   */
  ids?: Array<string>;

  /**
   * Whether the lead is in a campaign
   */
  in_campaign?: boolean;

  /**
   * Whether the lead is in a list
   */
  in_list?: boolean;

  limit?: number;

  /**
   * List ID to filter leads
   */
  list_id?: string;

  queries?: Array<LeadExportParams.Query>;

  /**
   * A search string to search the leads against - can be First Name, Last Name, or
   * Email
   */
  search?: string;
}

export namespace LeadExportParams {
  export interface ExtraParams {
    campaign_id?: string;

    organization_id?: string;
  }

  /**
   * Smart view query to filter leads
   */
  export interface Query {
    actionType:
      | 'reply'
      | 'email-open'
      | 'last-contacted'
      | 'link-click'
      | 'lead-status'
      | 'lead-status-change';

    values: Query.Values;
  }

  export namespace Query {
    export interface Values {
      'lead-status'?: Values.LeadStatus;

      'occurrence-count'?: Values.OccurrenceCount;

      'occurrence-days'?: number;
    }

    export namespace Values {
      export interface LeadStatus {
        condition?: 'is' | 'is-not';

        status?: number;
      }

      export interface OccurrenceCount {
        condition?: 'more' | 'less' | 'equal';

        count?: number;
      }
    }
  }
}

export interface LeadMergeParams {
  destination_lead_id: string;

  lead_id: string;
}

export interface LeadMoveParams {
  assigned_to?: string;

  /**
   * Campaign ID to filter leads
   */
  campaign?: string;

  check_duplicates_in_campaigns?: boolean;

  /**
   * Array of emails the leads needs to have
   */
  contacts?: Array<string>;

  copy_leads?: boolean;

  esp_code?: 0 | 1 | 2 | 3 | 9 | 10 | 12 | 13 | 999 | 1000;

  /**
   * Array of lead IDs to exclude
   */
  excluded_ids?: Array<string>;

  /**
   * Filter criteria for leads. For custom lead labels, use the `interest_status`
   * field.
   */
  filter?: string;

  /**
   * Array of lead IDs to include
   */
  ids?: Array<string>;

  /**
   * Whether the lead is in a campaign
   */
  in_campaign?: boolean;

  /**
   * Whether the lead is in a list
   */
  in_list?: boolean;

  limit?: number;

  /**
   * List ID to filter leads
   */
  list_id?: string;

  queries?: Array<LeadMoveParams.Query>;

  /**
   * A search string to search the leads against - can be First Name, Last Name, or
   * Email
   */
  search?: string;

  skip_leads_in_verification?: boolean;

  to_campaign_id?: string;

  to_list_id?: string;
}

export namespace LeadMoveParams {
  /**
   * Smart view query to filter leads
   */
  export interface Query {
    actionType:
      | 'reply'
      | 'email-open'
      | 'last-contacted'
      | 'link-click'
      | 'lead-status'
      | 'lead-status-change';

    values: Query.Values;
  }

  export namespace Query {
    export interface Values {
      'lead-status'?: Values.LeadStatus;

      'occurrence-count'?: Values.OccurrenceCount;

      'occurrence-days'?: number;
    }

    export namespace Values {
      export interface LeadStatus {
        condition?: 'is' | 'is-not';

        status?: number;
      }

      export interface OccurrenceCount {
        condition?: 'more' | 'less' | 'equal';

        count?: number;
      }
    }
  }
}

export interface LeadUpdateInterestStatusParams {
  /**
   * Set this field to "null" to reset the lead value to "Lead". This is the same as
   * moving the lead to the "Lead" status in the web app. Please check the
   * `lt_interest_status` field for the list of possible values.
   */
  interest_value: number | null;

  lead_email: string;

  ai_interest_value?: number;

  campaign_id?: string;

  disable_auto_interest?: boolean;

  list_id?: string;
}

Leads.Subsequence = Subsequence;

export declare namespace Leads {
  export {
    type Lead as Lead,
    type LeadListResponse as LeadListResponse,
    type LeadBulkAssignResponse as LeadBulkAssignResponse,
    type LeadUpdateInterestStatusResponse as LeadUpdateInterestStatusResponse,
    type LeadCreateParams as LeadCreateParams,
    type LeadUpdateParams as LeadUpdateParams,
    type LeadListParams as LeadListParams,
    type LeadDeleteParams as LeadDeleteParams,
    type LeadBulkAssignParams as LeadBulkAssignParams,
    type LeadExportParams as LeadExportParams,
    type LeadMergeParams as LeadMergeParams,
    type LeadMoveParams as LeadMoveParams,
    type LeadUpdateInterestStatusParams as LeadUpdateInterestStatusParams,
  };

  export {
    Subsequence as Subsequence,
    type SubsequenceMoveParams as SubsequenceMoveParams,
    type SubsequenceRemoveParams as SubsequenceRemoveParams,
  };
}
