// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../core/resource';
import { APIPromise } from '../../core/api-promise';
import { RequestOptions } from '../../internal/request-options';
import { path } from '../../internal/utils/path';

export class InboxPlacementReports extends APIResource {
  /**
   * Requires one of the following scopes: `inbox_placement_reports:read`,
   * `inbox_placement_reports:all`, `all:read`, `all:all`
   *
   * @example
   * ```ts
   * const report =
   *   await client.v2.inboxPlacementReports.retrieve(
   *     '0196ed60-9e22-739d-b744-cd556f89315a',
   *   );
   * ```
   */
  retrieve(id: string, options?: RequestOptions): APIPromise<Report> {
    return this._client.get(path`/api/v2/inbox-placement-reports/${id}`, options);
  }

  /**
   * Requires one of the following scopes: `inbox_placement_reports:read`,
   * `inbox_placement_reports:all`, `all:read`, `all:all`
   *
   * @example
   * ```ts
   * const inboxPlacementReports =
   *   await client.v2.inboxPlacementReports.list({
   *     test_id: 'd290f1ee-6c54-4b01-90e6-d701748f0851',
   *   });
   * ```
   */
  list(
    query: InboxPlacementReportListParams,
    options?: RequestOptions,
  ): APIPromise<InboxPlacementReportListResponse> {
    return this._client.get('/api/v2/inbox-placement-reports', { query, ...options });
  }
}

/**
 * Report data for an inbox placement test
 */
export interface Report {
  /**
   * Unique identifier for the inbox placement report entry
   */
  id: string;

  /**
   * Domain of the inbox placement report
   */
  domain: string;

  /**
   * IP address of the domain
   */
  domain_ip: string;

  /**
   * Organization ID
   */
  organization_id: string;

  /**
   * SpamAssassin score for the email, indicating spam likelihood
   */
  spam_assassin_score: number;

  /**
   * Inbox Placement Test ID
   */
  test_id: string;

  /**
   * Timestamp when the inbox placement report was created
   */
  timestamp_created: string;

  /**
   * Date when the inbox placement report was created
   */
  timestamp_created_date: string;

  /**
   * Detailed blacklist report for the domain or IP
   */
  blacklist_report?: Report.BlacklistReport;

  /**
   * Count of blacklists the domain is listed on
   */
  domain_blacklist_count?: number;

  /**
   * Count of blacklists the domain IP is listed on
   */
  domain_ip_blacklist_count?: number;

  /**
   * Detailed SpamAssassin analysis report
   */
  spam_assassin_report?: Report.SpamAssassinReport;
}

export namespace Report {
  /**
   * Detailed blacklist report for the domain or IP
   */
  export interface BlacklistReport {
    /**
     * The address or domain associated with the report
     */
    address?: string;

    /**
     * The count of blacklists the address is listed on
     */
    blacklisted_count?: number;

    /**
     * List of individual blacklist details
     */
    details?: Array<BlacklistReport.Detail>;

    /**
     * The IP address associated with the blacklist check
     */
    ip?: string;

    /**
     * Overall status indicating if the address is blacklisted
     */
    is_blacklisted?: boolean;

    /**
     * Whether the address is a domain
     */
    is_domain?: boolean;
  }

  export namespace BlacklistReport {
    export interface Detail {
      /**
       * The name of the blacklist
       */
      blacklist?: string;

      /**
       * Whether the address is listed on this blacklist
       */
      is_listed?: boolean;

      /**
       * The type of test
       */
      test_type?: string;
    }
  }

  /**
   * Detailed SpamAssassin analysis report
   */
  export interface SpamAssassinReport {
    /**
     * Indicates if the message is classified as spam by SpamAssassin
     */
    is_spam?: boolean;

    /**
     * List of individual SpamAssassin rule evaluations
     */
    report?: Array<SpamAssassinReport.Report>;

    /**
     * Overall spam score assigned to the message by SpamAssassin
     */
    spam_score?: number;
  }

  export namespace SpamAssassinReport {
    export interface Report {
      /**
       * The section or type of the rule triggered
       */
      description: string;

      /**
       * The name of the SpamAssassin rule
       */
      name: string;

      /**
       * The score assigned to this rule evaluation
       */
      score: string;
    }
  }
}

export interface InboxPlacementReportListResponse {
  items: Array<Report>;

  /**
   * The filter for getting the next items after this one, this could either be a
   * UUID, a MongoDB ID, a timestamp, on an email depending on the specific API
   */
  next_starting_after?: string;
}

export interface InboxPlacementReportListParams {
  test_id: string;

  date_from?: string;

  date_to?: string;

  /**
   * The number of items to return
   */
  limit?: number;

  /**
   * Flag to skip including blacklist_report JSON
   */
  skip_blacklist_report?: boolean;

  /**
   * Flag to skip including spam_assassin_report JSON
   */
  skip_spam_assassin_report?: boolean;

  /**
   * The ID of the last item in the previous page - used for pagination. You can use
   * the value of the `next_starting_after` field from the previous response.
   */
  starting_after?: string;
}

export declare namespace InboxPlacementReports {
  export {
    type Report as Report,
    type InboxPlacementReportListResponse as InboxPlacementReportListResponse,
    type InboxPlacementReportListParams as InboxPlacementReportListParams,
  };
}
