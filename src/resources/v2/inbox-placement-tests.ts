// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../core/resource';
import { APIPromise } from '../../core/api-promise';
import { RequestOptions } from '../../internal/request-options';
import { path } from '../../internal/utils/path';

export class InboxPlacementTests extends APIResource {
  /**
   * Requires one of the following scopes: `inbox_placement_tests:create`,
   * `inbox_placement_tests:all`, `all:create`, `all:all`
   *
   * @example
   * ```ts
   * const placementTest =
   *   await client.v2.inboxPlacementTests.create({
   *     name: 'My Inbox Placement Test',
   *     type: 1,
   *   });
   * ```
   */
  create(body: InboxPlacementTestCreateParams, options?: RequestOptions): APIPromise<PlacementTest> {
    return this._client.post('/api/v2/inbox-placement-tests', { body, ...options });
  }

  /**
   * Requires one of the following scopes: `inbox_placement_tests:read`,
   * `inbox_placement_tests:all`, `all:read`, `all:all`
   *
   * @example
   * ```ts
   * const inboxPlacementTest =
   *   await client.v2.inboxPlacementTests.retrieve(
   *     '0196ed60-9e27-71ca-b8e5-080c6100dbb8',
   *   );
   * ```
   */
  retrieve(
    id: string,
    query: InboxPlacementTestRetrieveParams | null | undefined = {},
    options?: RequestOptions,
  ): APIPromise<InboxPlacementTestRetrieveResponse> {
    return this._client.get(path`/api/v2/inbox-placement-tests/${id}`, { query, ...options });
  }

  /**
   * Requires one of the following scopes: `inbox_placement_tests:update`,
   * `inbox_placement_tests:all`, `all:update`, `all:all`
   *
   * @example
   * ```ts
   * const placementTest =
   *   await client.v2.inboxPlacementTests.update(
   *     '0196ed60-9e28-7569-8928-99648e3cbcf2',
   *   );
   * ```
   */
  update(
    id: string,
    body: InboxPlacementTestUpdateParams | null | undefined = {},
    options?: RequestOptions,
  ): APIPromise<PlacementTest> {
    return this._client.patch(path`/api/v2/inbox-placement-tests/${id}`, { body, ...options });
  }

  /**
   * Requires one of the following scopes: `inbox_placement_tests:read`,
   * `inbox_placement_tests:all`, `all:read`, `all:all`
   *
   * @example
   * ```ts
   * const inboxPlacementTests =
   *   await client.v2.inboxPlacementTests.list();
   * ```
   */
  list(
    query: InboxPlacementTestListParams | null | undefined = {},
    options?: RequestOptions,
  ): APIPromise<InboxPlacementTestListResponse> {
    return this._client.get('/api/v2/inbox-placement-tests', { query, ...options });
  }

  /**
   * Requires one of the following scopes: `inbox_placement_tests:delete`,
   * `inbox_placement_tests:all`, `all:delete`, `all:all`
   *
   * @example
   * ```ts
   * const placementTest =
   *   await client.v2.inboxPlacementTests.delete(
   *     '0196ed60-9e28-7569-8928-996332f3db99',
   *   );
   * ```
   */
  delete(
    id: string,
    params: InboxPlacementTestDeleteParams | null | undefined = undefined,
    options?: RequestOptions,
  ): APIPromise<PlacementTest> {
    const { body } = params ?? {};
    return this._client.delete(path`/api/v2/inbox-placement-tests/${id}`, { body: body, ...options });
  }

  /**
   * Provides a list of available email service providers for inbox placement tests.
   *
   * @example
   * ```ts
   * const response =
   *   await client.v2.inboxPlacementTests.getEspOptions();
   * ```
   */
  getEspOptions(options?: RequestOptions): APIPromise<InboxPlacementTestGetEspOptionsResponse> {
    return this._client.get('/api/v2/inbox-placement-tests/email-service-provider-options', options);
  }
}

/**
 * An inbox placement test
 */
export interface PlacementTest {
  /**
   * Unique identifier for the inbox placement test
   */
  id: string;

  /**
   * Name of the inbox placement test
   */
  name: string;

  /**
   * Organization ID
   */
  organization_id: string;

  recipients: Array<string>;

  /**
   * Timestamp when the inbox placement test was created
   */
  timestamp_created: string;

  /**
   * Whether the inbox placement test is a one-time test or an automated test
   */
  type: 1 | 2;

  /**
   * Optional automations to trigger based on conditions
   */
  automations?: Array<PlacementTest.Automation> | null;

  /**
   * Campaign ID
   */
  campaign_id?: string | null;

  /**
   * Whether to send emails one by one or all together
   */
  delivery_mode?: 1 | 2 | null;

  /**
   * Description of the inbox placement test
   */
  description?: string;

  /**
   * Email body of the inbox placement test
   */
  email_body?: string;

  /**
   * Email subject of the inbox placement test
   */
  email_subject?: string;

  /**
   * Emails to send the inbox placement test to
   */
  emails?: Array<string>;

  /**
   * Why the inbox placement test is currently not sending. It will be an empty
   * string if there are no issues.
   */
  not_sending_status?: 'daily_limits_hit' | 'other';

  /**
   * A list of email providers and their corresponding types to which emails will be
   * sent. To retrieve the available options, use the
   * `GET: /inbox-placement-tests/email-service-provider-options` endpoint
   */
  recipients_labels?: Array<PlacementTest.RecipientsLabel>;

  /**
   * Specifies the date and time when the automated inbox placement tests will be
   * sent.
   */
  schedule?: PlacementTest.Schedule;

  /**
   * Whether the inbox placement test will be sent from Instantly or from outside
   * Instantly
   */
  sending_method?: 1 | 2;

  /**
   * Status of the inbox placement test
   */
  status?: 1 | 2 | 3;

  /**
   * List of tag IDs to use for sending emails
   */
  tags?: Array<string>;

  /**
   * Code for identifying the inbox placement tests in the email body from outside
   * Instantly
   */
  test_code?: string;

  /**
   * Disables open tracking
   */
  text_only?: boolean;

  /**
   * Timestamp when the inbox placement test will run next
   */
  timestamp_next_run?: string;
}

export namespace PlacementTest {
  export interface Automation {
    /**
     * Actions to take when condition is met
     */
    then: Automation.Then;

    when: Automation.When;
  }

  export namespace Automation {
    /**
     * Actions to take when condition is met
     */
    export interface Then {
      add_tags?: Array<string>;

      disable_slow_ramp?: boolean;

      enable_slow_ramp?: boolean;

      pause?: boolean;

      /**
       * Number of days to pause sending campaigns for
       */
      pause_sending_campaigns_for?: number;

      remove_tags?: Array<string>;

      webhook_url?: string;
    }

    export interface When {
      /**
       * Condition for automation trigger
       */
      condition:
        | 'placement_goes_below'
        | 'placement_goes_above'
        | 'added_to_blacklists'
        | 'removed_from_blacklists';

      /**
       * Value for condition, if applicable
       */
      condition_value?: number | null;
    }
  }

  export interface RecipientsLabel {
    /**
     * The Email Service Provider (ESP) to send emails to
     */
    esp: string;

    /**
     * The region to send emails to
     */
    region: string;

    /**
     * The sub-region to send emails to
     */
    sub_region: string;

    /**
     * The type of email to send
     */
    type: string;
  }

  /**
   * Specifies the date and time when the automated inbox placement tests will be
   * sent.
   */
  export interface Schedule {
    /**
     * Days of the week when the test will run, where keys are integers (0-6, 0 =
     * Sunday) and values are booleans indicating active days.
     */
    days?: { [key: string]: boolean };

    /**
     * Timezone in which the schedule is set, in IANA timezone format.
     */
    timezone?:
      | 'Etc/GMT+12'
      | 'Etc/GMT+11'
      | 'Etc/GMT+10'
      | 'America/Anchorage'
      | 'America/Dawson'
      | 'America/Creston'
      | 'America/Chihuahua'
      | 'America/Boise'
      | 'America/Belize'
      | 'America/Chicago'
      | 'America/Bahia_Banderas'
      | 'America/Regina'
      | 'America/Bogota'
      | 'America/Detroit'
      | 'America/Indiana/Marengo'
      | 'America/Caracas'
      | 'America/Asuncion'
      | 'America/Glace_Bay'
      | 'America/Campo_Grande'
      | 'America/Anguilla'
      | 'America/Santiago'
      | 'America/St_Johns'
      | 'America/Sao_Paulo'
      | 'America/Argentina/La_Rioja'
      | 'America/Araguaina'
      | 'America/Godthab'
      | 'America/Montevideo'
      | 'America/Bahia'
      | 'America/Noronha'
      | 'America/Scoresbysund'
      | 'Atlantic/Cape_Verde'
      | 'Africa/Casablanca'
      | 'America/Danmarkshavn'
      | 'Europe/Isle_of_Man'
      | 'Atlantic/Canary'
      | 'Africa/Abidjan'
      | 'Arctic/Longyearbyen'
      | 'Europe/Belgrade'
      | 'Africa/Ceuta'
      | 'Europe/Sarajevo'
      | 'Africa/Algiers'
      | 'Africa/Windhoek'
      | 'Asia/Nicosia'
      | 'Asia/Beirut'
      | 'Africa/Cairo'
      | 'Asia/Damascus'
      | 'Europe/Bucharest'
      | 'Africa/Blantyre'
      | 'Europe/Helsinki'
      | 'Europe/Istanbul'
      | 'Asia/Jerusalem'
      | 'Africa/Tripoli'
      | 'Asia/Amman'
      | 'Asia/Baghdad'
      | 'Europe/Kaliningrad'
      | 'Asia/Aden'
      | 'Africa/Addis_Ababa'
      | 'Europe/Kirov'
      | 'Europe/Astrakhan'
      | 'Asia/Tehran'
      | 'Asia/Dubai'
      | 'Asia/Baku'
      | 'Indian/Mahe'
      | 'Asia/Tbilisi'
      | 'Asia/Yerevan'
      | 'Asia/Kabul'
      | 'Antarctica/Mawson'
      | 'Asia/Yekaterinburg'
      | 'Asia/Karachi'
      | 'Asia/Kolkata'
      | 'Asia/Colombo'
      | 'Asia/Kathmandu'
      | 'Antarctica/Vostok'
      | 'Asia/Dhaka'
      | 'Asia/Rangoon'
      | 'Antarctica/Davis'
      | 'Asia/Novokuznetsk'
      | 'Asia/Hong_Kong'
      | 'Asia/Krasnoyarsk'
      | 'Asia/Brunei'
      | 'Australia/Perth'
      | 'Asia/Taipei'
      | 'Asia/Choibalsan'
      | 'Asia/Irkutsk'
      | 'Asia/Dili'
      | 'Asia/Pyongyang'
      | 'Australia/Adelaide'
      | 'Australia/Darwin'
      | 'Australia/Brisbane'
      | 'Australia/Melbourne'
      | 'Antarctica/DumontDUrville'
      | 'Australia/Currie'
      | 'Asia/Chita'
      | 'Antarctica/Macquarie'
      | 'Asia/Sakhalin'
      | 'Pacific/Auckland'
      | 'Etc/GMT-12'
      | 'Pacific/Fiji'
      | 'Asia/Anadyr'
      | 'Asia/Kamchatka'
      | 'Etc/GMT-13'
      | 'Pacific/Apia';

    /**
     * Timing configuration for the scheduled test.
     */
    timing?: Schedule.Timing;
  }

  export namespace Schedule {
    /**
     * Timing configuration for the scheduled test.
     */
    export interface Timing {
      /**
       * The time of day when the test will start (24-hour format).
       */
      from?: string;
    }
  }
}

export interface InboxPlacementTestRetrieveResponse {
  /**
   * Unique identifier for the inbox placement test
   */
  id?: string;

  /**
   * Optional automations to trigger based on conditions
   */
  automations?: Array<InboxPlacementTestRetrieveResponse.Automation> | null;

  /**
   * Campaign ID
   */
  campaign_id?: string | null;

  /**
   * Whether to send emails one by one or all together
   */
  delivery_mode?: 1 | 2 | null;

  /**
   * Description of the inbox placement test
   */
  description?: string;

  /**
   * Email body of the inbox placement test
   */
  email_body?: string;

  /**
   * Email subject of the inbox placement test
   */
  email_subject?: string;

  /**
   * Emails to send the inbox placement test to
   */
  emails?: Array<string>;

  /**
   * Included only when the `with_metadata` parameter is `true`. Contains additional
   * information about the inbox placement test as associated campaign details and
   * tags.
   */
  metadata?: InboxPlacementTestRetrieveResponse.Metadata;

  /**
   * Name of the inbox placement test
   */
  name?: string;

  /**
   * Why the inbox placement test is currently not sending. It will be an empty
   * string if there are no issues.
   */
  not_sending_status?: 'daily_limits_hit' | 'other';

  /**
   * Organization ID
   */
  organization_id?: string;

  recipients?: Array<string>;

  /**
   * A list of email providers and their corresponding types to which emails will be
   * sent. To retrieve the available options, use the
   * `GET: /inbox-placement-tests/email-service-provider-options` endpoint
   */
  recipients_labels?: Array<InboxPlacementTestRetrieveResponse.RecipientsLabel>;

  /**
   * Specifies the date and time when the automated inbox placement tests will be
   * sent.
   */
  schedule?: InboxPlacementTestRetrieveResponse.Schedule;

  /**
   * Whether the inbox placement test will be sent from Instantly or from outside
   * Instantly
   */
  sending_method?: 1 | 2;

  /**
   * Status of the inbox placement test
   */
  status?: 1 | 2 | 3;

  /**
   * List of tag IDs to use for sending emails
   */
  tags?: Array<string>;

  /**
   * Code for identifying the inbox placement tests in the email body from outside
   * Instantly
   */
  test_code?: string;

  /**
   * Disables open tracking
   */
  text_only?: boolean;

  /**
   * Timestamp when the inbox placement test was created
   */
  timestamp_created?: string;

  /**
   * Timestamp when the inbox placement test will run next
   */
  timestamp_next_run?: string;

  /**
   * Whether the inbox placement test is a one-time test or an automated test
   */
  type?: 1 | 2;
}

export namespace InboxPlacementTestRetrieveResponse {
  export interface Automation {
    /**
     * Actions to take when condition is met
     */
    then: Automation.Then;

    when: Automation.When;
  }

  export namespace Automation {
    /**
     * Actions to take when condition is met
     */
    export interface Then {
      add_tags?: Array<string>;

      disable_slow_ramp?: boolean;

      enable_slow_ramp?: boolean;

      pause?: boolean;

      /**
       * Number of days to pause sending campaigns for
       */
      pause_sending_campaigns_for?: number;

      remove_tags?: Array<string>;

      webhook_url?: string;
    }

    export interface When {
      /**
       * Condition for automation trigger
       */
      condition:
        | 'placement_goes_below'
        | 'placement_goes_above'
        | 'added_to_blacklists'
        | 'removed_from_blacklists';

      /**
       * Value for condition, if applicable
       */
      condition_value?: number | null;
    }
  }

  /**
   * Included only when the `with_metadata` parameter is `true`. Contains additional
   * information about the inbox placement test as associated campaign details and
   * tags.
   */
  export interface Metadata {
    /**
     * The campaign associated with the inbox placement test
     */
    campaign?: Metadata.Campaign;

    /**
     * The tags associated with the inbox placement test
     */
    tags?: { [key: string]: Metadata.Tags };
  }

  export namespace Metadata {
    /**
     * The campaign associated with the inbox placement test
     */
    export interface Campaign {
      id?: string;

      name?: string;
    }

    export interface Tags {
      id: string;

      label: string;
    }
  }

  export interface RecipientsLabel {
    /**
     * The Email Service Provider (ESP) to send emails to
     */
    esp: string;

    /**
     * The region to send emails to
     */
    region: string;

    /**
     * The sub-region to send emails to
     */
    sub_region: string;

    /**
     * The type of email to send
     */
    type: string;
  }

  /**
   * Specifies the date and time when the automated inbox placement tests will be
   * sent.
   */
  export interface Schedule {
    /**
     * Days of the week when the test will run, where keys are integers (0-6, 0 =
     * Sunday) and values are booleans indicating active days.
     */
    days?: { [key: string]: boolean };

    /**
     * Timezone in which the schedule is set, in IANA timezone format.
     */
    timezone?:
      | 'Etc/GMT+12'
      | 'Etc/GMT+11'
      | 'Etc/GMT+10'
      | 'America/Anchorage'
      | 'America/Dawson'
      | 'America/Creston'
      | 'America/Chihuahua'
      | 'America/Boise'
      | 'America/Belize'
      | 'America/Chicago'
      | 'America/Bahia_Banderas'
      | 'America/Regina'
      | 'America/Bogota'
      | 'America/Detroit'
      | 'America/Indiana/Marengo'
      | 'America/Caracas'
      | 'America/Asuncion'
      | 'America/Glace_Bay'
      | 'America/Campo_Grande'
      | 'America/Anguilla'
      | 'America/Santiago'
      | 'America/St_Johns'
      | 'America/Sao_Paulo'
      | 'America/Argentina/La_Rioja'
      | 'America/Araguaina'
      | 'America/Godthab'
      | 'America/Montevideo'
      | 'America/Bahia'
      | 'America/Noronha'
      | 'America/Scoresbysund'
      | 'Atlantic/Cape_Verde'
      | 'Africa/Casablanca'
      | 'America/Danmarkshavn'
      | 'Europe/Isle_of_Man'
      | 'Atlantic/Canary'
      | 'Africa/Abidjan'
      | 'Arctic/Longyearbyen'
      | 'Europe/Belgrade'
      | 'Africa/Ceuta'
      | 'Europe/Sarajevo'
      | 'Africa/Algiers'
      | 'Africa/Windhoek'
      | 'Asia/Nicosia'
      | 'Asia/Beirut'
      | 'Africa/Cairo'
      | 'Asia/Damascus'
      | 'Europe/Bucharest'
      | 'Africa/Blantyre'
      | 'Europe/Helsinki'
      | 'Europe/Istanbul'
      | 'Asia/Jerusalem'
      | 'Africa/Tripoli'
      | 'Asia/Amman'
      | 'Asia/Baghdad'
      | 'Europe/Kaliningrad'
      | 'Asia/Aden'
      | 'Africa/Addis_Ababa'
      | 'Europe/Kirov'
      | 'Europe/Astrakhan'
      | 'Asia/Tehran'
      | 'Asia/Dubai'
      | 'Asia/Baku'
      | 'Indian/Mahe'
      | 'Asia/Tbilisi'
      | 'Asia/Yerevan'
      | 'Asia/Kabul'
      | 'Antarctica/Mawson'
      | 'Asia/Yekaterinburg'
      | 'Asia/Karachi'
      | 'Asia/Kolkata'
      | 'Asia/Colombo'
      | 'Asia/Kathmandu'
      | 'Antarctica/Vostok'
      | 'Asia/Dhaka'
      | 'Asia/Rangoon'
      | 'Antarctica/Davis'
      | 'Asia/Novokuznetsk'
      | 'Asia/Hong_Kong'
      | 'Asia/Krasnoyarsk'
      | 'Asia/Brunei'
      | 'Australia/Perth'
      | 'Asia/Taipei'
      | 'Asia/Choibalsan'
      | 'Asia/Irkutsk'
      | 'Asia/Dili'
      | 'Asia/Pyongyang'
      | 'Australia/Adelaide'
      | 'Australia/Darwin'
      | 'Australia/Brisbane'
      | 'Australia/Melbourne'
      | 'Antarctica/DumontDUrville'
      | 'Australia/Currie'
      | 'Asia/Chita'
      | 'Antarctica/Macquarie'
      | 'Asia/Sakhalin'
      | 'Pacific/Auckland'
      | 'Etc/GMT-12'
      | 'Pacific/Fiji'
      | 'Asia/Anadyr'
      | 'Asia/Kamchatka'
      | 'Etc/GMT-13'
      | 'Pacific/Apia';

    /**
     * Timing configuration for the scheduled test.
     */
    timing?: Schedule.Timing;
  }

  export namespace Schedule {
    /**
     * Timing configuration for the scheduled test.
     */
    export interface Timing {
      /**
       * The time of day when the test will start (24-hour format).
       */
      from?: string;
    }
  }
}

export interface InboxPlacementTestListResponse {
  items: Array<PlacementTest>;

  /**
   * The filter for getting the next items after this one, this could either be a
   * UUID, a MongoDB ID, a timestamp, on an email depending on the specific API
   */
  next_starting_after?: string;
}

export type InboxPlacementTestGetEspOptionsResponse =
  Array<InboxPlacementTestGetEspOptionsResponse.InboxPlacementTestGetEspOptionsResponseItem>;

export namespace InboxPlacementTestGetEspOptionsResponse {
  export interface InboxPlacementTestGetEspOptionsResponseItem {
    esp: string;

    region: string;

    sub_region: string;

    type: string;
  }
}

export interface InboxPlacementTestCreateParams {
  /**
   * Name of the inbox placement test
   */
  name: string;

  /**
   * Whether the inbox placement test is a one-time test or an automated test
   */
  type: 1 | 2;

  /**
   * Optional automations to trigger based on conditions
   */
  automations?: Array<InboxPlacementTestCreateParams.Automation> | null;

  /**
   * Campaign ID
   */
  campaign_id?: string | null;

  /**
   * Whether to send emails one by one or all together
   */
  delivery_mode?: 1 | 2 | null;

  /**
   * Description of the inbox placement test
   */
  description?: string;

  /**
   * Email body of the inbox placement test
   */
  email_body?: string;

  /**
   * Email subject of the inbox placement test
   */
  email_subject?: string;

  /**
   * Emails to send the inbox placement test to
   */
  emails?: Array<string>;

  /**
   * Why the inbox placement test is currently not sending. It will be an empty
   * string if there are no issues.
   */
  not_sending_status?: 'daily_limits_hit' | 'other';

  /**
   * A list of email providers and their corresponding types to which emails will be
   * sent. To retrieve the available options, use the
   * `GET: /inbox-placement-tests/email-service-provider-options` endpoint
   */
  recipients_labels?: Array<InboxPlacementTestCreateParams.RecipientsLabel>;

  /**
   * Run the test immediately after creation, as well as on the schedule
   */
  run_immediately?: boolean;

  /**
   * Specifies the date and time when the automated inbox placement tests will be
   * sent.
   */
  schedule?: InboxPlacementTestCreateParams.Schedule;

  /**
   * Whether the inbox placement test will be sent from Instantly or from outside
   * Instantly
   */
  sending_method?: 1 | 2;

  /**
   * Status of the inbox placement test
   */
  status?: 1 | 2 | 3;

  /**
   * List of tag IDs to use for sending emails
   */
  tags?: Array<string>;

  /**
   * Code for identifying the inbox placement tests in the email body from outside
   * Instantly
   */
  test_code?: string;

  /**
   * Disables open tracking
   */
  text_only?: boolean;

  /**
   * Timestamp when the inbox placement test will run next
   */
  timestamp_next_run?: string;
}

export namespace InboxPlacementTestCreateParams {
  export interface Automation {
    /**
     * Actions to take when condition is met
     */
    then: Automation.Then;

    when: Automation.When;
  }

  export namespace Automation {
    /**
     * Actions to take when condition is met
     */
    export interface Then {
      add_tags?: Array<string>;

      disable_slow_ramp?: boolean;

      enable_slow_ramp?: boolean;

      pause?: boolean;

      /**
       * Number of days to pause sending campaigns for
       */
      pause_sending_campaigns_for?: number;

      remove_tags?: Array<string>;

      webhook_url?: string;
    }

    export interface When {
      /**
       * Condition for automation trigger
       */
      condition:
        | 'placement_goes_below'
        | 'placement_goes_above'
        | 'added_to_blacklists'
        | 'removed_from_blacklists';

      /**
       * Value for condition, if applicable
       */
      condition_value?: number | null;
    }
  }

  export interface RecipientsLabel {
    /**
     * The Email Service Provider (ESP) to send emails to
     */
    esp: string;

    /**
     * The region to send emails to
     */
    region: string;

    /**
     * The sub-region to send emails to
     */
    sub_region: string;

    /**
     * The type of email to send
     */
    type: string;
  }

  /**
   * Specifies the date and time when the automated inbox placement tests will be
   * sent.
   */
  export interface Schedule {
    /**
     * Days of the week when the test will run, where keys are integers (0-6, 0 =
     * Sunday) and values are booleans indicating active days.
     */
    days?: { [key: string]: boolean };

    /**
     * Timezone in which the schedule is set, in IANA timezone format.
     */
    timezone?:
      | 'Etc/GMT+12'
      | 'Etc/GMT+11'
      | 'Etc/GMT+10'
      | 'America/Anchorage'
      | 'America/Dawson'
      | 'America/Creston'
      | 'America/Chihuahua'
      | 'America/Boise'
      | 'America/Belize'
      | 'America/Chicago'
      | 'America/Bahia_Banderas'
      | 'America/Regina'
      | 'America/Bogota'
      | 'America/Detroit'
      | 'America/Indiana/Marengo'
      | 'America/Caracas'
      | 'America/Asuncion'
      | 'America/Glace_Bay'
      | 'America/Campo_Grande'
      | 'America/Anguilla'
      | 'America/Santiago'
      | 'America/St_Johns'
      | 'America/Sao_Paulo'
      | 'America/Argentina/La_Rioja'
      | 'America/Araguaina'
      | 'America/Godthab'
      | 'America/Montevideo'
      | 'America/Bahia'
      | 'America/Noronha'
      | 'America/Scoresbysund'
      | 'Atlantic/Cape_Verde'
      | 'Africa/Casablanca'
      | 'America/Danmarkshavn'
      | 'Europe/Isle_of_Man'
      | 'Atlantic/Canary'
      | 'Africa/Abidjan'
      | 'Arctic/Longyearbyen'
      | 'Europe/Belgrade'
      | 'Africa/Ceuta'
      | 'Europe/Sarajevo'
      | 'Africa/Algiers'
      | 'Africa/Windhoek'
      | 'Asia/Nicosia'
      | 'Asia/Beirut'
      | 'Africa/Cairo'
      | 'Asia/Damascus'
      | 'Europe/Bucharest'
      | 'Africa/Blantyre'
      | 'Europe/Helsinki'
      | 'Europe/Istanbul'
      | 'Asia/Jerusalem'
      | 'Africa/Tripoli'
      | 'Asia/Amman'
      | 'Asia/Baghdad'
      | 'Europe/Kaliningrad'
      | 'Asia/Aden'
      | 'Africa/Addis_Ababa'
      | 'Europe/Kirov'
      | 'Europe/Astrakhan'
      | 'Asia/Tehran'
      | 'Asia/Dubai'
      | 'Asia/Baku'
      | 'Indian/Mahe'
      | 'Asia/Tbilisi'
      | 'Asia/Yerevan'
      | 'Asia/Kabul'
      | 'Antarctica/Mawson'
      | 'Asia/Yekaterinburg'
      | 'Asia/Karachi'
      | 'Asia/Kolkata'
      | 'Asia/Colombo'
      | 'Asia/Kathmandu'
      | 'Antarctica/Vostok'
      | 'Asia/Dhaka'
      | 'Asia/Rangoon'
      | 'Antarctica/Davis'
      | 'Asia/Novokuznetsk'
      | 'Asia/Hong_Kong'
      | 'Asia/Krasnoyarsk'
      | 'Asia/Brunei'
      | 'Australia/Perth'
      | 'Asia/Taipei'
      | 'Asia/Choibalsan'
      | 'Asia/Irkutsk'
      | 'Asia/Dili'
      | 'Asia/Pyongyang'
      | 'Australia/Adelaide'
      | 'Australia/Darwin'
      | 'Australia/Brisbane'
      | 'Australia/Melbourne'
      | 'Antarctica/DumontDUrville'
      | 'Australia/Currie'
      | 'Asia/Chita'
      | 'Antarctica/Macquarie'
      | 'Asia/Sakhalin'
      | 'Pacific/Auckland'
      | 'Etc/GMT-12'
      | 'Pacific/Fiji'
      | 'Asia/Anadyr'
      | 'Asia/Kamchatka'
      | 'Etc/GMT-13'
      | 'Pacific/Apia';

    /**
     * Timing configuration for the scheduled test.
     */
    timing?: Schedule.Timing;
  }

  export namespace Schedule {
    /**
     * Timing configuration for the scheduled test.
     */
    export interface Timing {
      /**
       * The time of day when the test will start (24-hour format).
       */
      from?: string;
    }
  }
}

export interface InboxPlacementTestRetrieveParams {
  /**
   * Whether to include additional metadata about the inbox placement test
   */
  with_metadata?: boolean;
}

export interface InboxPlacementTestUpdateParams {
  /**
   * Optional automations to trigger based on conditions
   */
  automations?: Array<InboxPlacementTestUpdateParams.Automation> | null;

  /**
   * Name of the inbox placement test
   */
  name?: string;

  /**
   * Specifies the date and time when the automated inbox placement tests will be
   * sent.
   */
  schedule?: InboxPlacementTestUpdateParams.Schedule;

  /**
   * Status of the inbox placement test
   */
  status?: 1 | 2 | 3;
}

export namespace InboxPlacementTestUpdateParams {
  export interface Automation {
    /**
     * Actions to take when condition is met
     */
    then: Automation.Then;

    when: Automation.When;
  }

  export namespace Automation {
    /**
     * Actions to take when condition is met
     */
    export interface Then {
      add_tags?: Array<string>;

      disable_slow_ramp?: boolean;

      enable_slow_ramp?: boolean;

      pause?: boolean;

      /**
       * Number of days to pause sending campaigns for
       */
      pause_sending_campaigns_for?: number;

      remove_tags?: Array<string>;

      webhook_url?: string;
    }

    export interface When {
      /**
       * Condition for automation trigger
       */
      condition:
        | 'placement_goes_below'
        | 'placement_goes_above'
        | 'added_to_blacklists'
        | 'removed_from_blacklists';

      /**
       * Value for condition, if applicable
       */
      condition_value?: number | null;
    }
  }

  /**
   * Specifies the date and time when the automated inbox placement tests will be
   * sent.
   */
  export interface Schedule {
    /**
     * Days of the week when the test will run, where keys are integers (0-6, 0 =
     * Sunday) and values are booleans indicating active days.
     */
    days?: { [key: string]: boolean };

    /**
     * Timezone in which the schedule is set, in IANA timezone format.
     */
    timezone?:
      | 'Etc/GMT+12'
      | 'Etc/GMT+11'
      | 'Etc/GMT+10'
      | 'America/Anchorage'
      | 'America/Dawson'
      | 'America/Creston'
      | 'America/Chihuahua'
      | 'America/Boise'
      | 'America/Belize'
      | 'America/Chicago'
      | 'America/Bahia_Banderas'
      | 'America/Regina'
      | 'America/Bogota'
      | 'America/Detroit'
      | 'America/Indiana/Marengo'
      | 'America/Caracas'
      | 'America/Asuncion'
      | 'America/Glace_Bay'
      | 'America/Campo_Grande'
      | 'America/Anguilla'
      | 'America/Santiago'
      | 'America/St_Johns'
      | 'America/Sao_Paulo'
      | 'America/Argentina/La_Rioja'
      | 'America/Araguaina'
      | 'America/Godthab'
      | 'America/Montevideo'
      | 'America/Bahia'
      | 'America/Noronha'
      | 'America/Scoresbysund'
      | 'Atlantic/Cape_Verde'
      | 'Africa/Casablanca'
      | 'America/Danmarkshavn'
      | 'Europe/Isle_of_Man'
      | 'Atlantic/Canary'
      | 'Africa/Abidjan'
      | 'Arctic/Longyearbyen'
      | 'Europe/Belgrade'
      | 'Africa/Ceuta'
      | 'Europe/Sarajevo'
      | 'Africa/Algiers'
      | 'Africa/Windhoek'
      | 'Asia/Nicosia'
      | 'Asia/Beirut'
      | 'Africa/Cairo'
      | 'Asia/Damascus'
      | 'Europe/Bucharest'
      | 'Africa/Blantyre'
      | 'Europe/Helsinki'
      | 'Europe/Istanbul'
      | 'Asia/Jerusalem'
      | 'Africa/Tripoli'
      | 'Asia/Amman'
      | 'Asia/Baghdad'
      | 'Europe/Kaliningrad'
      | 'Asia/Aden'
      | 'Africa/Addis_Ababa'
      | 'Europe/Kirov'
      | 'Europe/Astrakhan'
      | 'Asia/Tehran'
      | 'Asia/Dubai'
      | 'Asia/Baku'
      | 'Indian/Mahe'
      | 'Asia/Tbilisi'
      | 'Asia/Yerevan'
      | 'Asia/Kabul'
      | 'Antarctica/Mawson'
      | 'Asia/Yekaterinburg'
      | 'Asia/Karachi'
      | 'Asia/Kolkata'
      | 'Asia/Colombo'
      | 'Asia/Kathmandu'
      | 'Antarctica/Vostok'
      | 'Asia/Dhaka'
      | 'Asia/Rangoon'
      | 'Antarctica/Davis'
      | 'Asia/Novokuznetsk'
      | 'Asia/Hong_Kong'
      | 'Asia/Krasnoyarsk'
      | 'Asia/Brunei'
      | 'Australia/Perth'
      | 'Asia/Taipei'
      | 'Asia/Choibalsan'
      | 'Asia/Irkutsk'
      | 'Asia/Dili'
      | 'Asia/Pyongyang'
      | 'Australia/Adelaide'
      | 'Australia/Darwin'
      | 'Australia/Brisbane'
      | 'Australia/Melbourne'
      | 'Antarctica/DumontDUrville'
      | 'Australia/Currie'
      | 'Asia/Chita'
      | 'Antarctica/Macquarie'
      | 'Asia/Sakhalin'
      | 'Pacific/Auckland'
      | 'Etc/GMT-12'
      | 'Pacific/Fiji'
      | 'Asia/Anadyr'
      | 'Asia/Kamchatka'
      | 'Etc/GMT-13'
      | 'Pacific/Apia';

    /**
     * Timing configuration for the scheduled test.
     */
    timing?: Schedule.Timing;
  }

  export namespace Schedule {
    /**
     * Timing configuration for the scheduled test.
     */
    export interface Timing {
      /**
       * The time of day when the test will start (24-hour format).
       */
      from?: string;
    }
  }
}

export interface InboxPlacementTestListParams {
  /**
   * The number of items to return
   */
  limit?: number;

  search?: string;

  sort_column?: string;

  sort_order?: string;

  /**
   * The ID of the last item in the previous page - used for pagination. You can use
   * the value of the `next_starting_after` field from the previous response.
   */
  starting_after?: string;

  status?: 1 | 2 | 3;
}

export interface InboxPlacementTestDeleteParams {
  body?: null;
}

export declare namespace InboxPlacementTests {
  export {
    type PlacementTest as PlacementTest,
    type InboxPlacementTestRetrieveResponse as InboxPlacementTestRetrieveResponse,
    type InboxPlacementTestListResponse as InboxPlacementTestListResponse,
    type InboxPlacementTestGetEspOptionsResponse as InboxPlacementTestGetEspOptionsResponse,
    type InboxPlacementTestCreateParams as InboxPlacementTestCreateParams,
    type InboxPlacementTestRetrieveParams as InboxPlacementTestRetrieveParams,
    type InboxPlacementTestUpdateParams as InboxPlacementTestUpdateParams,
    type InboxPlacementTestListParams as InboxPlacementTestListParams,
    type InboxPlacementTestDeleteParams as InboxPlacementTestDeleteParams,
  };
}
