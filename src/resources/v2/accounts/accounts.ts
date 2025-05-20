// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../../core/resource';
import * as CtdAPI from './ctd';
import { Ctd, CtdGetStatusParams, CtdGetStatusResponse } from './ctd';
import * as TestAPI from './test';
import { Test, TestTestVitalsParams, TestTestVitalsResponse } from './test';
import { APIPromise } from '../../../core/api-promise';
import { RequestOptions } from '../../../internal/request-options';
import { path } from '../../../internal/utils/path';

export class Accounts extends APIResource {
  ctd: CtdAPI.Ctd = new CtdAPI.Ctd(this._client);
  test: TestAPI.Test = new TestAPI.Test(this._client);

  /**
   * Requires one of the following scopes: `accounts:create`, `accounts:all`,
   * `all:create`, `all:all`
   *
   * @example
   * ```ts
   * const emailAccount = await client.v2.accounts.create({
   *   email: 'user@example.com',
   *   first_name: 'John',
   *   imap_host: 'imap.gmail.com',
   *   imap_password: 'password',
   *   imap_port: 993,
   *   imap_username: 'username',
   *   last_name: 'Doe',
   *   provider_code: 2,
   *   smtp_host: 'smtp.gmail.com',
   *   smtp_password: 'password',
   *   smtp_port: 587,
   *   smtp_username: 'username',
   * });
   * ```
   */
  create(body: AccountCreateParams, options?: RequestOptions): APIPromise<EmailAccount> {
    return this._client.post('/api/v2/accounts', { body, ...options });
  }

  /**
   * Requires one of the following scopes: `accounts:read`, `accounts:all`,
   * `all:read`, `all:all`
   *
   * @example
   * ```ts
   * const emailAccount = await client.v2.accounts.retrieve(
   *   'jon@doe.com',
   * );
   * ```
   */
  retrieve(email: string, options?: RequestOptions): APIPromise<EmailAccount> {
    return this._client.get(path`/api/v2/accounts/${email}`, options);
  }

  /**
   * Requires one of the following scopes: `accounts:update`, `accounts:all`,
   * `all:update`, `all:all`
   *
   * @example
   * ```ts
   * const emailAccount = await client.v2.accounts.update(
   *   'jon@doe.com',
   * );
   * ```
   */
  update(
    email: string,
    body: AccountUpdateParams | null | undefined = {},
    options?: RequestOptions,
  ): APIPromise<EmailAccount> {
    return this._client.patch(path`/api/v2/accounts/${email}`, { body, ...options });
  }

  /**
   * Requires one of the following scopes: `accounts:read`, `accounts:all`,
   * `all:read`, `all:all`
   *
   * @example
   * ```ts
   * const accounts = await client.v2.accounts.list();
   * ```
   */
  list(
    query: AccountListParams | null | undefined = {},
    options?: RequestOptions,
  ): APIPromise<AccountListResponse> {
    return this._client.get('/api/v2/accounts', { query, ...options });
  }

  /**
   * Requires one of the following scopes: `accounts:delete`, `accounts:all`,
   * `all:delete`, `all:all`
   *
   * @example
   * ```ts
   * const emailAccount = await client.v2.accounts.delete(
   *   'jon@doe.com',
   * );
   * ```
   */
  delete(
    email: string,
    params: AccountDeleteParams | null | undefined = undefined,
    options?: RequestOptions,
  ): APIPromise<EmailAccount> {
    const { body } = params ?? {};
    return this._client.delete(path`/api/v2/accounts/${email}`, { body: body, ...options });
  }

  /**
   * Requires one of the following scopes: `accounts:update`, `accounts:all`,
   * `all:update`, `all:all`
   *
   * @example
   * ```ts
   * const emailAccount = await client.v2.accounts.markFixed(
   *   'user@example.com',
   * );
   * ```
   */
  markFixed(email: string, options?: RequestOptions): APIPromise<EmailAccount> {
    return this._client.post(path`/api/v2/accounts/${email}/mark-fixed`, options);
  }

  /**
   * Requires one of the following scopes: `accounts:update`, `accounts:all`,
   * `all:update`, `all:all`
   *
   * @example
   * ```ts
   * const emailAccount = await client.v2.accounts.pause(
   *   'user@example.com',
   * );
   * ```
   */
  pause(email: string, options?: RequestOptions): APIPromise<EmailAccount> {
    return this._client.post(path`/api/v2/accounts/${email}/pause`, options);
  }

  /**
   * Requires one of the following scopes: `accounts:update`, `accounts:all`,
   * `all:update`, `all:all`
   *
   * @example
   * ```ts
   * const emailAccount = await client.v2.accounts.resume(
   *   'user@example.com',
   * );
   * ```
   */
  resume(email: string, options?: RequestOptions): APIPromise<EmailAccount> {
    return this._client.post(path`/api/v2/accounts/${email}/resume`, options);
  }

  /**
   * Requires one of the following scopes: `accounts:read`, `accounts:all`,
   * `all:read`, `all:all`
   *
   * @example
   * ```ts
   * const response = await client.v2.accounts.warmupAnalytics({
   *   emails: ['user@example.com'],
   * });
   * ```
   */
  warmupAnalytics(
    body: AccountWarmupAnalyticsParams,
    options?: RequestOptions,
  ): APIPromise<AccountWarmupAnalyticsResponse> {
    return this._client.post('/api/v2/accounts/warmup-analytics', { body, ...options });
  }
}

/**
 * An email account that can be used to send campaigns
 */
export interface EmailAccount {
  /**
   * Email address of the account
   */
  email: string;

  /**
   * First name associated with the account
   */
  first_name: string;

  /**
   * Whether this is a managed account
   */
  is_managed_account: boolean;

  /**
   * Last name associated with the account
   */
  last_name: string;

  /**
   * Organization ID that owns this account
   */
  organization: string;

  /**
   * Provider code for the account. Please make sure to specify the right provider
   * code, otherwise your account will not work.
   */
  provider_code: 1 | 2 | 3 | 4;

  /**
   * Whether account setup is pending
   */
  setup_pending: boolean;

  /**
   * Timestamp when the account was created
   */
  timestamp_created: string;

  /**
   * Timestamp when the account was last updated
   */
  timestamp_updated: string;

  /**
   * Current warmup status of the account
   */
  warmup_status: 0 | 1 | -1 | -2 | -3;

  /**
   * User ID who added the account
   */
  added_by?: string;

  /**
   * Daily email sending limit
   */
  daily_limit?: number;

  /**
   * Whether DFY password has been changed
   */
  dfy_password_changed?: boolean;

  /**
   * Whether to enable slow ramp up for sending limits
   */
  enable_slow_ramp?: boolean;

  /**
   * Whether inbox placement test limit is enabled
   */
  inbox_placement_test_limit?: boolean;

  /**
   * User ID who last modified the account
   */
  modified_by?: string;

  /**
   * The gap between emails sent from this account in minutes (minimum wait time when
   * used with multiple campaigns)
   */
  sending_gap?: number;

  /**
   * Warmup score for the account
   */
  stat_warmup_score?: number;

  /**
   * Current status of the account
   */
  status?: 1 | 2 | -1 | -2 | -3;

  /**
   * Status message for the account
   */
  status_message?: string;

  /**
   * Timestamp when the account was last used
   */
  timestamp_last_used?: string;

  /**
   * Timestamp when warmup was started
   */
  timestamp_warmup_start?: string;

  /**
   * Tracking domain
   */
  tracking_domain_name?: string;

  /**
   * Tracking domain status
   */
  tracking_domain_status?: string;

  /**
   * Warmup configuration for the account
   */
  warmup?: EmailAccount.Warmup;

  /**
   * ID of the warmup pool this account belongs to
   */
  warmup_pool_id?: string;
}

export namespace EmailAccount {
  /**
   * Warmup configuration for the account
   */
  export interface Warmup {
    /**
     * Advanced settings for the account
     */
    advanced?: Warmup.Advanced;

    /**
     * Daily increment for email sending limits
     */
    increment?: 'disabled' | '0' | '1' | '2' | '3' | '4';

    /**
     * Email sending limit for the account
     */
    limit?: number;

    /**
     * Reply rate for the account
     */
    reply_rate?: number;

    /**
     * Custom tag for the account
     */
    warmup_custom_ftag?: string;
  }

  export namespace Warmup {
    /**
     * Advanced settings for the account
     */
    export interface Advanced {
      /**
       * Important email rate for the account
       */
      important_rate?: number;

      /**
       * Email open rate for the account
       */
      open_rate?: number;

      /**
       * Whether read emulation is enabled
       */
      read_emulation?: boolean;

      /**
       * Spam save rate for the account
       */
      spam_save_rate?: number;

      /**
       * Whether the account is in warm CTD mode
       */
      warm_ctd?: boolean;

      /**
       * Whether to send emails only on weekdays
       */
      weekday_only?: boolean;
    }
  }
}

export interface AccountListResponse {
  items: Array<EmailAccount>;

  /**
   * The filter for getting the next items after this one, this could either be a
   * UUID, a MongoDB ID, a timestamp, on an email depending on the specific API
   */
  next_starting_after?: string;
}

export interface AccountWarmupAnalyticsResponse {
  aggregate_data?: Record<string, AccountWarmupAnalyticsResponse.AggregateData>;

  email_date_data?: Record<
    string,
    Record<string, AccountWarmupAnalyticsResponse.unnamed_schema_with_map_parent_0>
  >;
}

export namespace AccountWarmupAnalyticsResponse {
  export interface AggregateData {
    health_score?: number;

    health_score_label?: string;

    landed_inbox?: number;

    landed_spam?: number;

    received?: number;

    sent?: number;
  }

  export interface unnamed_schema_with_map_parent_0 {
    landed_inbox?: number;

    landed_spam?: number;

    received?: number;

    sent?: number;
  }
}

export interface AccountCreateParams {
  /**
   * Email address of the account
   */
  email: string;

  /**
   * First name associated with the account
   */
  first_name: string;

  imap_host: string;

  imap_password: string;

  imap_port: number;

  imap_username: string;

  /**
   * Last name associated with the account
   */
  last_name: string;

  /**
   * Provider code for the account. Please make sure to specify the right provider
   * code, otherwise your account will not work.
   */
  provider_code: 1 | 2 | 3 | 4;

  smtp_host: string;

  smtp_password: string;

  smtp_port: number;

  smtp_username: string;

  /**
   * Daily email sending limit
   */
  daily_limit?: number;

  /**
   * Whether to enable slow ramp up for sending limits
   */
  enable_slow_ramp?: boolean;

  /**
   * Whether inbox placement test limit is enabled
   */
  inbox_placement_test_limit?: boolean;

  reply_to?: string;

  /**
   * The gap between emails sent from this account in minutes (minimum wait time when
   * used with multiple campaigns)
   */
  sending_gap?: number;

  skip_cname_check?: boolean;

  /**
   * Tracking domain
   */
  tracking_domain_name?: string;

  /**
   * Tracking domain status
   */
  tracking_domain_status?: string;

  /**
   * Warmup configuration for the account
   */
  warmup?: AccountCreateParams.Warmup;

  warmup_custom_ftag?: string;
}

export namespace AccountCreateParams {
  /**
   * Warmup configuration for the account
   */
  export interface Warmup {
    /**
     * Advanced settings for the account
     */
    advanced?: Warmup.Advanced;

    /**
     * Daily increment for email sending limits
     */
    increment?: 'disabled' | '0' | '1' | '2' | '3' | '4';

    /**
     * Email sending limit for the account
     */
    limit?: number;

    /**
     * Reply rate for the account
     */
    reply_rate?: number;

    /**
     * Custom tag for the account
     */
    warmup_custom_ftag?: string;
  }

  export namespace Warmup {
    /**
     * Advanced settings for the account
     */
    export interface Advanced {
      /**
       * Important email rate for the account
       */
      important_rate?: number;

      /**
       * Email open rate for the account
       */
      open_rate?: number;

      /**
       * Whether read emulation is enabled
       */
      read_emulation?: boolean;

      /**
       * Spam save rate for the account
       */
      spam_save_rate?: number;

      /**
       * Whether the account is in warm CTD mode
       */
      warm_ctd?: boolean;

      /**
       * Whether to send emails only on weekdays
       */
      weekday_only?: boolean;
    }
  }
}

export interface AccountUpdateParams {
  /**
   * Daily email sending limit
   */
  daily_limit?: number;

  /**
   * Whether to enable slow ramp up for sending limits
   */
  enable_slow_ramp?: boolean;

  /**
   * First name associated with the account
   */
  first_name?: string;

  /**
   * Whether inbox placement test limit is enabled
   */
  inbox_placement_test_limit?: boolean;

  /**
   * Last name associated with the account
   */
  last_name?: string;

  remove_tracking_domain?: boolean;

  /**
   * The gap between emails sent from this account in minutes (minimum wait time when
   * used with multiple campaigns)
   */
  sending_gap?: number;

  skip_cname_check?: boolean;

  /**
   * Tracking domain
   */
  tracking_domain_name?: string;

  /**
   * Tracking domain status
   */
  tracking_domain_status?: string;

  /**
   * Warmup configuration for the account
   */
  warmup?: AccountUpdateParams.Warmup;
}

export namespace AccountUpdateParams {
  /**
   * Warmup configuration for the account
   */
  export interface Warmup {
    /**
     * Advanced settings for the account
     */
    advanced?: Warmup.Advanced;

    /**
     * Daily increment for email sending limits
     */
    increment?: 'disabled' | '0' | '1' | '2' | '3' | '4';

    /**
     * Email sending limit for the account
     */
    limit?: number;

    /**
     * Reply rate for the account
     */
    reply_rate?: number;

    /**
     * Custom tag for the account
     */
    warmup_custom_ftag?: string;
  }

  export namespace Warmup {
    /**
     * Advanced settings for the account
     */
    export interface Advanced {
      /**
       * Important email rate for the account
       */
      important_rate?: number;

      /**
       * Email open rate for the account
       */
      open_rate?: number;

      /**
       * Whether read emulation is enabled
       */
      read_emulation?: boolean;

      /**
       * Spam save rate for the account
       */
      spam_save_rate?: number;

      /**
       * Whether the account is in warm CTD mode
       */
      warm_ctd?: boolean;

      /**
       * Whether to send emails only on weekdays
       */
      weekday_only?: boolean;
    }
  }
}

export interface AccountListParams {
  /**
   * The number of items to return
   */
  limit?: number;

  provider_code?: 1 | 2 | 3 | 4;

  search?: string;

  starting_after?: string;

  status?: 1 | 2 | -1 | -2 | -3;

  /**
   * Filter accounts by tag ids. Returns accounts that have any of the specified tags
   * assigned. You can specify multiple tag ids by separating them with a comma.
   */
  tag_ids?: string;
}

export interface AccountDeleteParams {
  body?: null;
}

export interface AccountWarmupAnalyticsParams {
  /**
   * List of emails to get warmup analytics for. The emails should be attached to
   * accounts in your workspace.
   */
  emails: Array<string>;
}

Accounts.Ctd = Ctd;
Accounts.Test = Test;

export declare namespace Accounts {
  export {
    type EmailAccount as EmailAccount,
    type AccountListResponse as AccountListResponse,
    type AccountWarmupAnalyticsResponse as AccountWarmupAnalyticsResponse,
    type AccountCreateParams as AccountCreateParams,
    type AccountUpdateParams as AccountUpdateParams,
    type AccountListParams as AccountListParams,
    type AccountDeleteParams as AccountDeleteParams,
    type AccountWarmupAnalyticsParams as AccountWarmupAnalyticsParams,
  };

  export {
    Ctd as Ctd,
    type CtdGetStatusResponse as CtdGetStatusResponse,
    type CtdGetStatusParams as CtdGetStatusParams,
  };

  export {
    Test as Test,
    type TestTestVitalsResponse as TestTestVitalsResponse,
    type TestTestVitalsParams as TestTestVitalsParams,
  };
}
