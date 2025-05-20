// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../../core/resource';
import { APIPromise } from '../../../core/api-promise';
import { RequestOptions } from '../../../internal/request-options';

export class Analytics extends APIResource {
  /**
   * Get analytics for one or multiple campaigns. Specify the `id` field to get the
   * analytics for a single campaign, or leave it empty to get the analytics for all
   * campaigns
   *
   * @example
   * ```ts
   * const analytics =
   *   await client.v2.campaigns.analytics.retrieve();
   * ```
   */
  retrieve(
    query: AnalyticsRetrieveParams | null | undefined = {},
    options?: RequestOptions,
  ): APIPromise<AnalyticsRetrieveResponse> {
    return this._client.get('/api/v2/campaigns/analytics', { query, ...options });
  }

  /**
   * Get campaign daily analytics
   *
   * @example
   * ```ts
   * const response =
   *   await client.v2.campaigns.analytics.daily();
   * ```
   */
  daily(
    query: AnalyticsDailyParams | null | undefined = {},
    options?: RequestOptions,
  ): APIPromise<AnalyticsDailyResponse> {
    return this._client.get('/api/v2/campaigns/analytics/daily', { query, ...options });
  }

  /**
   * Get analytics overview for one or multiple campaigns. Specify the `id` field to
   * get the analytics overview for a single campaign, or leave it empty to get the
   * analytics overview for all campaigns
   *
   * @example
   * ```ts
   * const response =
   *   await client.v2.campaigns.analytics.overview();
   * ```
   */
  overview(
    query: AnalyticsOverviewParams | null | undefined = {},
    options?: RequestOptions,
  ): APIPromise<AnalyticsOverviewResponse> {
    return this._client.get('/api/v2/campaigns/analytics/overview', { query, ...options });
  }

  /**
   * Get campaign steps analytics
   *
   * @example
   * ```ts
   * const response =
   *   await client.v2.campaigns.analytics.steps();
   * ```
   */
  steps(
    query: AnalyticsStepsParams | null | undefined = {},
    options?: RequestOptions,
  ): APIPromise<AnalyticsStepsResponse> {
    return this._client.get('/api/v2/campaigns/analytics/steps', { query, ...options });
  }
}

export type AnalyticsRetrieveResponse = Array<AnalyticsRetrieveResponse.AnalyticsRetrieveResponseItem>;

export namespace AnalyticsRetrieveResponse {
  export interface AnalyticsRetrieveResponseItem {
    /**
     * The number of bounced leads
     */
    bounced_count: number;

    /**
     * The ID of the campaign
     */
    campaign_id: string;

    /**
     * Whether the campaign is evergreen
     */
    campaign_is_evergreen: boolean;

    /**
     * The name of the campaign
     */
    campaign_name: string;

    /**
     * The campaign status
     */
    campaign_status: number;

    /**
     * The number of leads that the campaign was completed for
     */
    completed_count: number;

    /**
     * Number of leads for whom the sequence has started
     */
    contacted_count: number;

    /**
     * The total number of sent emails
     */
    emails_sent_count: number;

    /**
     * The total number of leads
     */
    leads_count: number;

    /**
     * The number of links that got clicked
     */
    link_click_count: number;

    /**
     * The total number of new leads contacted
     */
    new_leads_contacted_count: number;

    /**
     * The number of leads that opened at least one email
     */
    open_count: number;

    /**
     * The number of leads that replied to at least one email
     */
    reply_count: number;

    /**
     * The total number of unique opportunities created
     */
    total_opportunities: number;

    /**
     * The total value of opportunities created
     */
    total_opportunity_value: number;

    /**
     * The number of unsubscribed leads
     */
    unsubscribed_count: number;
  }
}

export type AnalyticsDailyResponse = Array<AnalyticsDailyResponse.AnalyticsDailyResponseItem>;

export namespace AnalyticsDailyResponse {
  export interface AnalyticsDailyResponseItem {
    /**
     * The total number of links clicked
     */
    clicks?: number;

    /**
     * The date of the analytics entry, in YYYY-MM-DD format
     */
    date?: string;

    /**
     * The total number of opened emails
     */
    opened?: number;

    /**
     * The total number of replies
     */
    replies?: number;

    /**
     * The total number of sent emails
     */
    sent?: number;

    /**
     * The total number of unique links clicked. Unique meaning from unique leads, not
     * unique links. For instance, if a lead clicked a link 3 times, it will be counted
     * as 1 unique click. If a lead clicked 3 different links, it will still be counted
     * as 1 unique click
     */
    unique_clicks?: number;

    /**
     * The total number of unique opened emails
     */
    unique_opened?: number;

    /**
     * The total number of unique replies
     */
    unique_replies?: number;
  }
}

export interface AnalyticsOverviewResponse {
  /**
   * The number of bounced leads
   */
  bounced_count?: number;

  /**
   * The number of leads that the campaign was completed for
   */
  completed_count?: number;

  /**
   * The total number of sent emails
   */
  emails_sent_count?: number;

  /**
   * The number of links that got clicked
   */
  link_click_count?: number;

  /**
   * The number of links that got clicked (for the first time)
   */
  link_click_count_unique?: number;

  /**
   * The unique number of links that got clicked, per step (counted once per lead,
   * step, and campaign)
   */
  link_click_count_unique_by_step?: number;

  /**
   * The total number of new leads contacted
   */
  new_leads_contacted_count?: number;

  /**
   * The total number of times the emails were opened, including duplicates
   */
  open_count?: number;

  /**
   * The number of emails that got opened (for the first time only)
   */
  open_count_unique?: number;

  /**
   * The unique number of times the emails were opened (counted once per lead, step,
   * and campaign)
   */
  open_count_unique_by_step?: number;

  /**
   * The number of leads that replied to at least one email
   */
  reply_count?: number;

  /**
   * The number of leads that replied to at least one email (for the first time only)
   */
  reply_count_unique?: number;

  /**
   * The unique number of leads that replied to at least one email, per step (counted
   * once per lead, step, and campaign)
   */
  reply_count_unique_by_step?: number;

  /**
   * The total number of closed opportunities created
   */
  total_closed?: number;

  /**
   * The total number of interested opportunities created
   */
  total_interested?: number;

  /**
   * The total number of meeting booked opportunities created
   */
  total_meeting_booked?: number;

  /**
   * The total number of meeting completed opportunities created
   */
  total_meeting_completed?: number;

  /**
   * The total number of unique opportunities created
   */
  total_opportunities?: number;

  /**
   * The total value of opportunities created
   */
  total_opportunity_value?: number;

  /**
   * The number of unsubscribed leads
   */
  unsubscribed_count?: number;
}

export type AnalyticsStepsResponse = Array<AnalyticsStepsResponse.AnalyticsStepsResponseItem>;

export namespace AnalyticsStepsResponse {
  export interface AnalyticsStepsResponseItem {
    /**
     * The total number of links clicked
     */
    clicks?: number;

    /**
     * The total number of opened emails
     */
    opened?: number;

    /**
     * The total number of replies
     */
    replies?: number;

    /**
     * The total number of sent emails
     */
    sent?: number;

    /**
     * The step number
     */
    step?: string;

    /**
     * The total number of unique links clicked. Unique meaning from unique leads, not
     * unique links. For instance, if a lead clicked a link 3 times, it will be counted
     * as 1 unique click. If a lead clicked 3 different links, it will still be counted
     * as 1 unique click
     */
    unique_clicks?: number;

    /**
     * The total number of opened emails
     */
    unique_opened?: number;

    /**
     * The total number of replies
     */
    unique_replies?: number;

    /**
     * The variant number, starting from 0. 0 = A, 1 = B, 2 = C, etc.
     */
    variant?: string;
  }
}

export interface AnalyticsRetrieveParams {
  /**
   * A campaign ID to get the analytics for. Leave this field empty to get the
   * analytics for all campaigns
   */
  id?: string;

  /**
   * End date
   */
  end_date?: string;

  /**
   * Exclude the total leads from the result. Setting this to true will considerably
   * decrease the response time
   */
  exclude_total_leads_count?: boolean;

  ids?: Array<string>;

  /**
   * Start date
   */
  start_date?: string;
}

export interface AnalyticsDailyParams {
  /**
   * Campaign ID (optional). Leave this field empty to get the analytics for all
   * campaigns
   */
  campaign_id?: string;

  /**
   * Filter by campaign status (only the analytics for the campaigns with the
   * specified status will be returned)
   */
  campaign_status?: -99 | -1 | -2 | 0 | 1 | 2 | 3 | 4;

  /**
   * End date
   */
  end_date?: string;

  /**
   * Start date
   */
  start_date?: string;
}

export interface AnalyticsOverviewParams {
  /**
   * A campaign ID to get the analytics overview for. Leave this field empty to get
   * the analytics overview for all campaigns
   */
  id?: string;

  /**
   * Filter by campaign status (only the analytics for the campaigns with the
   * specified status will be returned)
   */
  campaign_status?: -99 | -1 | -2 | 0 | 1 | 2 | 3 | 4;

  /**
   * End date
   */
  end_date?: string;

  ids?: Array<string>;

  /**
   * Start date
   */
  start_date?: string;
}

export interface AnalyticsStepsParams {
  /**
   * Campaign ID (optional). Leave this field empty to get the analytics for all
   * campaigns
   */
  campaign_id?: string;

  /**
   * End date
   */
  end_date?: string;

  /**
   * Start date
   */
  start_date?: string;
}

export declare namespace Analytics {
  export {
    type AnalyticsRetrieveResponse as AnalyticsRetrieveResponse,
    type AnalyticsDailyResponse as AnalyticsDailyResponse,
    type AnalyticsOverviewResponse as AnalyticsOverviewResponse,
    type AnalyticsStepsResponse as AnalyticsStepsResponse,
    type AnalyticsRetrieveParams as AnalyticsRetrieveParams,
    type AnalyticsDailyParams as AnalyticsDailyParams,
    type AnalyticsOverviewParams as AnalyticsOverviewParams,
    type AnalyticsStepsParams as AnalyticsStepsParams,
  };
}
