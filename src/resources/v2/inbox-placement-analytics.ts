// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../core/resource';
import { APIPromise } from '../../core/api-promise';
import { RequestOptions } from '../../internal/request-options';
import { path } from '../../internal/utils/path';

export class InboxPlacementAnalytics extends APIResource {
  /**
   * Requires one of the following scopes: `inbox_placement_analytics:read`,
   * `inbox_placement_analytics:all`, `all:read`, `all:all`
   *
   * @example
   * ```ts
   * const analytics =
   *   await client.v2.inboxPlacementAnalytics.retrieve(
   *     '0196ed60-9e1d-7dd8-8a52-347cb4a73599',
   *   );
   * ```
   */
  retrieve(id: string, options?: RequestOptions): APIPromise<Analytics> {
    return this._client.get(path`/api/v2/inbox-placement-analytics/${id}`, options);
  }

  /**
   * Requires one of the following scopes: `inbox_placement_analytics:read`,
   * `inbox_placement_analytics:all`, `all:read`, `all:all`
   *
   * @example
   * ```ts
   * const inboxPlacementAnalytics =
   *   await client.v2.inboxPlacementAnalytics.list({
   *     test_id: '0196ed60-9e1c-7ac7-9f15-6783e633b06f',
   *   });
   * ```
   */
  list(
    query: InboxPlacementAnalyticListParams,
    options?: RequestOptions,
  ): APIPromise<InboxPlacementAnalyticListResponse> {
    return this._client.get('/api/v2/inbox-placement-analytics', { query, ...options });
  }

  /**
   * Provides deliverability insights for a specific inbox placement test
   *
   * Requires one of the following scopes: `inbox_placement_analytics:read`,
   * `inbox_placement_analytics:all`, `all:read`, `all:all`
   *
   * @example
   * ```ts
   * const response =
   *   await client.v2.inboxPlacementAnalytics.getDeliverabilityInsights(
   *     { test_id: '0196ed60-9e1e-7948-b02d-db80420744b6' },
   *   );
   * ```
   */
  getDeliverabilityInsights(
    body: InboxPlacementAnalyticGetDeliverabilityInsightsParams,
    options?: RequestOptions,
  ): APIPromise<InboxPlacementAnalyticGetDeliverabilityInsightsResponse> {
    return this._client.post('/api/v2/inbox-placement-analytics/deliverability-insights', {
      body,
      ...options,
    });
  }

  /**
   * Provides a time series representing the distribution of emails sent to inbox,
   * spam, or category folders for scheduled inbox placement tests.
   *
   * Requires one of the following scopes: `inbox_placement_analytics:read`,
   * `inbox_placement_analytics:all`, `all:read`, `all:all`
   *
   * @example
   * ```ts
   * const response =
   *   await client.v2.inboxPlacementAnalytics.getStatsByDate({
   *     test_id: '0196ed60-9e1e-7948-b02d-db82e2862c87',
   *   });
   * ```
   */
  getStatsByDate(
    body: InboxPlacementAnalyticGetStatsByDateParams,
    options?: RequestOptions,
  ): APIPromise<InboxPlacementAnalyticGetStatsByDateResponse> {
    return this._client.post('/api/v2/inbox-placement-analytics/stats-by-date', { body, ...options });
  }

  /**
   * Provides aggregated inbox, spam and category counts for specified test IDs
   *
   * Requires one of the following scopes: `inbox_placement_analytics:read`,
   * `inbox_placement_analytics:all`, `all:read`, `all:all`
   *
   * @example
   * ```ts
   * const response =
   *   await client.v2.inboxPlacementAnalytics.getStatsByTestID({
   *     test_ids: ['string'],
   *   });
   * ```
   */
  getStatsByTestID(
    body: InboxPlacementAnalyticGetStatsByTestIDParams,
    options?: RequestOptions,
  ): APIPromise<InboxPlacementAnalyticGetStatsByTestIDResponse> {
    return this._client.post('/api/v2/inbox-placement-analytics/stats-by-test-id', { body, ...options });
  }
}

/**
 * Analytics data for individual emails in inbox placement tests
 */
export interface Analytics {
  /**
   * Unique identifier for the inbox placement analytics entry
   */
  id: string;

  /**
   * Organization ID
   */
  organization_id: string;

  /**
   * Inbox Placement Test ID
   */
  test_id: string;

  /**
   * Timestamp when the inbox placement analytics was created
   */
  timestamp_created: string;

  /**
   * Date when the inbox placement analytics was created
   */
  timestamp_created_date: string;

  /**
   * Details of authentication failures for SPF, DKIM, and DMARC
   */
  authentication_failure_results?: Analytics.AuthenticationFailureResults;

  /**
   * Indicates if the email passed DKIM validation (1 for pass, 0 otherwise)
   */
  dkim_pass?: number;

  /**
   * Indicates if the email passed DMARC validation (1 for pass, 0 otherwise)
   */
  dmarc_pass?: number;

  /**
   * Indicates if the email was categorized like promotions, social, etc.
   */
  has_category?: number;

  /**
   * Indicates if the email landed in spam (1 for spam, 0 otherwise)
   */
  is_spam?: number;

  /**
   * Email address of the recipient
   */
  recipient_email?: string;

  /**
   * The recipient ESP (Email Service Provider)
   */
  recipient_esp?: 1 | 2 | 12 | 13;

  /**
   * The geographic location of the recipient
   */
  recipient_geo?: 1 | 2 | 3 | 4;

  /**
   * The type of recipient
   */
  recipient_type?: 1 | 2;

  /**
   * Email address of the sender
   */
  sender_email?: string;

  /**
   * The sender ESP (Email Service Provider)
   */
  sender_esp?: 1 | 2 | 12 | 13;

  /**
   * Blacklist report for the SMTP IP address
   */
  smtp_ip_blacklist_report?: unknown;

  /**
   * Indicates if the email passed SPF validation (1 for pass, 0 otherwise)
   */
  spf_pass?: number;
}

export namespace Analytics {
  /**
   * Details of authentication failures for SPF, DKIM, and DMARC
   */
  export interface AuthenticationFailureResults {
    /**
     * Authentication results
     */
    authentication_results?: string;

    /**
     * DKIM signature
     */
    dkim_signature?: string;

    /**
     * Received SPF
     */
    received_spf?: string;
  }
}

export interface InboxPlacementAnalyticListResponse {
  items: Array<Analytics>;

  /**
   * The filter for getting the next items after this one, this could either be a
   * UUID, a MongoDB ID, a timestamp, on an email depending on the specific API
   */
  next_starting_after?: string;
}

export type InboxPlacementAnalyticGetDeliverabilityInsightsResponse =
  Array<InboxPlacementAnalyticGetDeliverabilityInsightsResponse.InboxPlacementAnalyticGetDeliverabilityInsightsResponseItem>;

export namespace InboxPlacementAnalyticGetDeliverabilityInsightsResponse {
  export interface InboxPlacementAnalyticGetDeliverabilityInsightsResponseItem {
    category_percentage?: number | null;

    from?: string | null;

    inbox_percentage?: number | null;

    prev_category_percentage?: number | null;

    prev_inbox_percentage?: number | null;

    prev_spam_percentage?: number | null;

    previous_from?: string | null;

    previous_to?: string | null;

    recipient_esp?: 1 | 2 | 12 | 13;

    sender_esp?: 1 | 2 | 12 | 13;

    spam_percentage?: number | null;

    test_id?: string;

    to?: string | null;
  }
}

export type InboxPlacementAnalyticGetStatsByDateResponse =
  Array<InboxPlacementAnalyticGetStatsByDateResponse.InboxPlacementAnalyticGetStatsByDateResponseItem>;

export namespace InboxPlacementAnalyticGetStatsByDateResponse {
  export interface InboxPlacementAnalyticGetStatsByDateResponseItem {
    category_count: number;

    inbox_count: number;

    spam_count: number;

    timestamp_created_date: string;
  }
}

export type InboxPlacementAnalyticGetStatsByTestIDResponse =
  Array<InboxPlacementAnalyticGetStatsByTestIDResponse.InboxPlacementAnalyticGetStatsByTestIDResponseItem>;

export namespace InboxPlacementAnalyticGetStatsByTestIDResponse {
  export interface InboxPlacementAnalyticGetStatsByTestIDResponseItem {
    category_count: number;

    category_percent: number;

    count: number;

    inbox_count: number;

    inbox_percent: number;

    spam_count: number;

    spam_percent: number;

    test_id: string;
  }
}

export interface InboxPlacementAnalyticListParams {
  test_id: string;

  date_from?: string;

  date_to?: string;

  /**
   * The number of items to return
   */
  limit?: number;

  /**
   * A comma-separated list of recipient ESP values.
   */
  recipient_esp?: string;

  /**
   * A comma-separated list of recipient geo values.
   */
  recipient_geo?: string;

  /**
   * A comma-separated list of recipient type values.
   */
  recipient_type?: string;

  sender_email?: string;

  /**
   * The ID of the last item in the previous page - used for pagination. You can use
   * the value of the `next_starting_after` field from the previous response.
   */
  starting_after?: string;
}

export interface InboxPlacementAnalyticGetDeliverabilityInsightsParams {
  test_id: string;

  date_from?: string;

  date_to?: string;

  previous_date_from?: string;

  previous_date_to?: string;

  recipient_esp?: Array<1 | 2 | 12 | 13>;

  recipient_geo?: Array<1 | 2 | 3 | 4>;

  recipient_type?: Array<1 | 2>;

  show_previous?: boolean;
}

export interface InboxPlacementAnalyticGetStatsByDateParams {
  test_id: string;

  date_from?: string;

  date_to?: string;

  recipient_esp?: Array<1 | 2 | 12 | 13>;

  recipient_geo?: Array<1 | 2 | 3 | 4>;

  recipient_type?: Array<1 | 2>;

  sender_email?: string;
}

export interface InboxPlacementAnalyticGetStatsByTestIDParams {
  test_ids: Array<string>;

  date_from?: string;

  date_to?: string;

  recipient_esp?: Array<1 | 2 | 12 | 13>;

  recipient_geo?: Array<1 | 2 | 3 | 4>;

  recipient_type?: Array<1 | 2>;

  sender_email?: string;
}

export declare namespace InboxPlacementAnalytics {
  export {
    type Analytics as Analytics,
    type InboxPlacementAnalyticListResponse as InboxPlacementAnalyticListResponse,
    type InboxPlacementAnalyticGetDeliverabilityInsightsResponse as InboxPlacementAnalyticGetDeliverabilityInsightsResponse,
    type InboxPlacementAnalyticGetStatsByDateResponse as InboxPlacementAnalyticGetStatsByDateResponse,
    type InboxPlacementAnalyticGetStatsByTestIDResponse as InboxPlacementAnalyticGetStatsByTestIDResponse,
    type InboxPlacementAnalyticListParams as InboxPlacementAnalyticListParams,
    type InboxPlacementAnalyticGetDeliverabilityInsightsParams as InboxPlacementAnalyticGetDeliverabilityInsightsParams,
    type InboxPlacementAnalyticGetStatsByDateParams as InboxPlacementAnalyticGetStatsByDateParams,
    type InboxPlacementAnalyticGetStatsByTestIDParams as InboxPlacementAnalyticGetStatsByTestIDParams,
  };
}
