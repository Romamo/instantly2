// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../../core/resource';
import * as AnalyticsAPI from './analytics';
import {
  Analytics,
  AnalyticsDailyParams,
  AnalyticsDailyResponse,
  AnalyticsOverviewParams,
  AnalyticsOverviewResponse,
  AnalyticsRetrieveParams,
  AnalyticsRetrieveResponse,
  AnalyticsStepsParams,
  AnalyticsStepsResponse,
} from './analytics';
import { APIPromise } from '../../../core/api-promise';
import { RequestOptions } from '../../../internal/request-options';
import { path } from '../../../internal/utils/path';

export class Campaigns extends APIResource {
  analytics: AnalyticsAPI.Analytics = new AnalyticsAPI.Analytics(this._client);

  /**
   * Requires one of the following scopes: `campaigns:create`, `campaigns:all`,
   * `all:create`, `all:all`
   *
   * @example
   * ```ts
   * const campaign = await client.v2.campaigns.create({
   *   campaign_schedule: {
   *     schedules: [
   *       {
   *         days: {},
   *         name: 'My Schedule',
   *         timezone: 'Etc/GMT+12',
   *         timing: { from: '09:00', to: '17:00' },
   *       },
   *     ],
   *   },
   *   name: 'My First Campaign',
   * });
   * ```
   */
  create(body: CampaignCreateParams, options?: RequestOptions): APIPromise<Campaign> {
    return this._client.post('/api/v2/campaigns', { body, ...options });
  }

  /**
   * Requires one of the following scopes: `campaigns:read`, `campaigns:all`,
   * `all:read`, `all:all`
   *
   * @example
   * ```ts
   * const campaign = await client.v2.campaigns.retrieve(
   *   '0196ed60-9def-737e-a0d1-a3309b44b3bd',
   * );
   * ```
   */
  retrieve(id: string, options?: RequestOptions): APIPromise<Campaign> {
    return this._client.get(path`/api/v2/campaigns/${id}`, options);
  }

  /**
   * Requires one of the following scopes: `campaigns:update`, `campaigns:all`,
   * `all:update`, `all:all`
   *
   * @example
   * ```ts
   * const campaign = await client.v2.campaigns.update(
   *   '0196ed60-9df3-7dbf-86bb-f8ed4feb0573',
   * );
   * ```
   */
  update(
    id: string,
    body: CampaignUpdateParams | null | undefined = {},
    options?: RequestOptions,
  ): APIPromise<Campaign> {
    return this._client.patch(path`/api/v2/campaigns/${id}`, { body, ...options });
  }

  /**
   * Requires one of the following scopes: `campaigns:read`, `campaigns:all`,
   * `all:read`, `all:all`
   *
   * @example
   * ```ts
   * const campaigns = await client.v2.campaigns.list();
   * ```
   */
  list(
    query: CampaignListParams | null | undefined = {},
    options?: RequestOptions,
  ): APIPromise<CampaignListResponse> {
    return this._client.get('/api/v2/campaigns', { query, ...options });
  }

  /**
   * Requires one of the following scopes: `campaigns:delete`, `campaigns:all`,
   * `all:delete`, `all:all`
   *
   * @example
   * ```ts
   * const campaign = await client.v2.campaigns.delete(
   *   '0196ed60-9df4-73c4-ae10-505d46d09529',
   * );
   * ```
   */
  delete(
    id: string,
    params: CampaignDeleteParams | null | undefined = undefined,
    options?: RequestOptions,
  ): APIPromise<Campaign> {
    const { body } = params ?? {};
    return this._client.delete(path`/api/v2/campaigns/${id}`, { body: body, ...options });
  }

  /**
   * Requires one of the following scopes: `campaigns:update`, `campaigns:all`,
   * `all:update`, `all:all`
   *
   * @example
   * ```ts
   * const campaign = await client.v2.campaigns.activate(
   *   '0196ed60-9dee-7ae4-aa01-d80a7e5a21e6',
   * );
   * ```
   */
  activate(id: string, options?: RequestOptions): APIPromise<Campaign> {
    return this._client.post(path`/api/v2/campaigns/${id}/activate`, options);
  }

  /**
   * Requires one of the following scopes: `campaigns:update`, `campaigns:all`,
   * `all:update`, `all:all`
   *
   * @example
   * ```ts
   * const campaign = await client.v2.campaigns.pause(
   *   '0196ed60-9def-737e-a0d1-a32fc47d0488',
   * );
   * ```
   */
  pause(id: string, options?: RequestOptions): APIPromise<Campaign> {
    return this._client.post(path`/api/v2/campaigns/${id}/pause`, options);
  }

  /**
   * Share a campaign. This allows other users to create new campaigns based on this
   * campaign. The campaign is being shared for 7 days, after which you'll have to
   * call this endpoint again if you want to enable sharing on the campaign
   *
   * @example
   * ```ts
   * const response = await client.v2.campaigns.share(
   *   '0196ed60-9df4-73c4-ae10-505e2ddb640a',
   * );
   * ```
   */
  share(id: string, options?: RequestOptions): APIPromise<unknown> {
    return this._client.post(path`/api/v2/campaigns/${id}/share`, options);
  }
}

/**
 * A campaign that can be sent to a list of recipients
 */
export interface Campaign {
  /**
   * Unique identifier for the campaign
   */
  id: string;

  /**
   * Campaign schedule
   */
  campaign_schedule: Campaign.CampaignSchedule;

  /**
   * Name of the campaign
   */
  name: string;

  /**
   * Campaign Status
   */
  status: -99 | -1 | -2 | 0 | 1 | 2 | 3 | 4;

  /**
   * Timestamp when the campaign was created
   */
  timestamp_created: string;

  /**
   * Timestamp when the campaign was last updated
   */
  timestamp_updated: string;

  /**
   * Whether to allow risky contacts
   */
  allow_risky_contacts?: boolean;

  /**
   * Auto variant select settings
   */
  auto_variant_select?: Campaign.AutoVariantSelect;

  /**
   * List of accounts to BCC on emails
   */
  bcc_list?: Array<string>;

  /**
   * List of accounts to CC on emails
   */
  cc_list?: Array<string>;

  /**
   * The daily limit for sending emails
   */
  daily_limit?: number;

  /**
   * The daily maximum new leads to contact
   */
  daily_max_leads?: number;

  /**
   * Whether to disable bounce protection
   */
  disable_bounce_protect?: boolean;

  /**
   * The gap between emails in minutes
   */
  email_gap?: number;

  /**
   * List of accounts to use for sending emails
   */
  email_list?: Array<string>;

  /**
   * List of tags to use for sending emails
   */
  email_tag_list?: Array<string>;

  /**
   * Whether to insert an unsubscribe header in emails
   */
  insert_unsubscribe_header?: boolean;

  /**
   * Whether the campaign is evergreen
   */
  is_evergreen?: boolean;

  /**
   * Whether to track links in emails
   */
  link_tracking?: boolean;

  /**
   * Whether to match leads by ESP
   */
  match_lead_esp?: boolean;

  /**
   * Whether to track opens in emails
   */
  open_tracking?: boolean;

  /**
   * Organization ID
   */
  organization?: string;

  /**
   * Value of every positive lead
   */
  pl_value?: number;

  /**
   * Whether to prioritize new leads
   */
  prioritize_new_leads?: boolean;

  /**
   * The maximum random wait time in minutes
   */
  random_wait_max?: number;

  /**
   * List of sequences (the actual email copy). Even though this field is an array,
   * only the first element is used, so please provide only one array item, and add
   * the steps to that array
   */
  sequences?: Array<Campaign.Sequence>;

  /**
   * Whether to stop the campaign for the entire company(domain) when a lead replies
   */
  stop_for_company?: boolean;

  /**
   * Whether to stop the campaign on auto reply
   */
  stop_on_auto_reply?: boolean;

  /**
   * Whether to stop the campaign on reply
   */
  stop_on_reply?: boolean;

  /**
   * Whether the campaign is text only
   */
  text_only?: boolean;
}

export namespace Campaign {
  /**
   * Campaign schedule
   */
  export interface CampaignSchedule {
    schedules: Array<CampaignSchedule.Schedule>;

    end_date?: string;

    start_date?: string;
  }

  export namespace CampaignSchedule {
    export interface Schedule {
      days: Schedule.Days;

      name: string;

      timezone:
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

      timing: Schedule.Timing;
    }

    export namespace Schedule {
      export interface Days {
        '0'?: boolean;

        '1'?: boolean;

        '2'?: boolean;

        '3'?: boolean;

        '4'?: boolean;

        '5'?: boolean;

        '6'?: boolean;
      }

      export interface Timing {
        from: string;

        to: string;
      }
    }
  }

  /**
   * Auto variant select settings
   */
  export interface AutoVariantSelect {
    trigger: 'reply_rate' | 'click_rate' | 'open_rate';
  }

  export interface Sequence {
    steps: Array<Sequence.Step>;
  }

  export namespace Sequence {
    export interface Step {
      /**
       * The number of days to wait before sending the NEXT email
       */
      delay: number;

      /**
       * Type of step. This has to be 'email' always - it's the only supported type for
       * now
       */
      type: 'email';

      variants: Array<Step.Variant>;
    }

    export namespace Step {
      export interface Variant {
        body: string;

        subject: string;

        /**
         * Whether this variant is disabled. By default, all the variants are enabled.
         * Please set this to true if you want to disable this variant
         */
        v_disabled?: boolean;
      }
    }
  }
}

export interface CampaignListResponse {
  items: Array<Campaign>;

  /**
   * The filter for getting the next items after this one, this could either be a
   * UUID, a MongoDB ID, a timestamp, on an email depending on the specific API
   */
  next_starting_after?: string;
}

export type CampaignShareResponse = unknown;

export interface CampaignCreateParams {
  /**
   * Campaign schedule
   */
  campaign_schedule: CampaignCreateParams.CampaignSchedule;

  /**
   * Name of the campaign
   */
  name: string;

  /**
   * Whether to allow risky contacts
   */
  allow_risky_contacts?: boolean;

  /**
   * Auto variant select settings
   */
  auto_variant_select?: CampaignCreateParams.AutoVariantSelect;

  /**
   * List of accounts to BCC on emails
   */
  bcc_list?: Array<string>;

  /**
   * List of accounts to CC on emails
   */
  cc_list?: Array<string>;

  /**
   * The daily limit for sending emails
   */
  daily_limit?: number;

  /**
   * The daily maximum new leads to contact
   */
  daily_max_leads?: number;

  /**
   * Whether to disable bounce protection
   */
  disable_bounce_protect?: boolean;

  /**
   * The gap between emails in minutes
   */
  email_gap?: number;

  /**
   * List of accounts to use for sending emails
   */
  email_list?: Array<string>;

  /**
   * List of tags to use for sending emails
   */
  email_tag_list?: Array<string>;

  /**
   * Whether to insert an unsubscribe header in emails
   */
  insert_unsubscribe_header?: boolean;

  /**
   * Whether the campaign is evergreen
   */
  is_evergreen?: boolean;

  /**
   * Whether to track links in emails
   */
  link_tracking?: boolean;

  /**
   * Whether to match leads by ESP
   */
  match_lead_esp?: boolean;

  /**
   * Whether to track opens in emails
   */
  open_tracking?: boolean;

  /**
   * Value of every positive lead
   */
  pl_value?: number;

  /**
   * Whether to prioritize new leads
   */
  prioritize_new_leads?: boolean;

  /**
   * The maximum random wait time in minutes
   */
  random_wait_max?: number;

  /**
   * List of sequences (the actual email copy). Even though this field is an array,
   * only the first element is used, so please provide only one array item, and add
   * the steps to that array
   */
  sequences?: Array<CampaignCreateParams.Sequence>;

  /**
   * Whether to stop the campaign for the entire company(domain) when a lead replies
   */
  stop_for_company?: boolean;

  /**
   * Whether to stop the campaign on auto reply
   */
  stop_on_auto_reply?: boolean;

  /**
   * Whether to stop the campaign on reply
   */
  stop_on_reply?: boolean;

  /**
   * Whether the campaign is text only
   */
  text_only?: boolean;
}

export namespace CampaignCreateParams {
  /**
   * Campaign schedule
   */
  export interface CampaignSchedule {
    schedules: Array<CampaignSchedule.Schedule>;

    end_date?: string;

    start_date?: string;
  }

  export namespace CampaignSchedule {
    export interface Schedule {
      days: Schedule.Days;

      name: string;

      timezone:
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

      timing: Schedule.Timing;
    }

    export namespace Schedule {
      export interface Days {
        '0'?: boolean;

        '1'?: boolean;

        '2'?: boolean;

        '3'?: boolean;

        '4'?: boolean;

        '5'?: boolean;

        '6'?: boolean;
      }

      export interface Timing {
        from: string;

        to: string;
      }
    }
  }

  /**
   * Auto variant select settings
   */
  export interface AutoVariantSelect {
    trigger: 'reply_rate' | 'click_rate' | 'open_rate';
  }

  export interface Sequence {
    steps: Array<Sequence.Step>;
  }

  export namespace Sequence {
    export interface Step {
      /**
       * The number of days to wait before sending the NEXT email
       */
      delay: number;

      /**
       * Type of step. This has to be 'email' always - it's the only supported type for
       * now
       */
      type: 'email';

      variants: Array<Step.Variant>;
    }

    export namespace Step {
      export interface Variant {
        body: string;

        subject: string;

        /**
         * Whether this variant is disabled. By default, all the variants are enabled.
         * Please set this to true if you want to disable this variant
         */
        v_disabled?: boolean;
      }
    }
  }
}

export interface CampaignUpdateParams {
  /**
   * Whether to allow risky contacts
   */
  allow_risky_contacts?: boolean;

  /**
   * Auto variant select settings
   */
  auto_variant_select?: CampaignUpdateParams.AutoVariantSelect;

  /**
   * List of accounts to BCC on emails
   */
  bcc_list?: Array<string>;

  /**
   * Campaign schedule
   */
  campaign_schedule?: CampaignUpdateParams.CampaignSchedule;

  /**
   * List of accounts to CC on emails
   */
  cc_list?: Array<string>;

  /**
   * The daily limit for sending emails
   */
  daily_limit?: number;

  /**
   * The daily maximum new leads to contact
   */
  daily_max_leads?: number;

  /**
   * Whether to disable bounce protection
   */
  disable_bounce_protect?: boolean;

  /**
   * The gap between emails in minutes
   */
  email_gap?: number;

  /**
   * List of accounts to use for sending emails
   */
  email_list?: Array<string>;

  /**
   * List of tags to use for sending emails
   */
  email_tag_list?: Array<string>;

  /**
   * Whether to insert an unsubscribe header in emails
   */
  insert_unsubscribe_header?: boolean;

  /**
   * Whether the campaign is evergreen
   */
  is_evergreen?: boolean;

  /**
   * Whether to track links in emails
   */
  link_tracking?: boolean;

  /**
   * Whether to match leads by ESP
   */
  match_lead_esp?: boolean;

  /**
   * Name of the campaign
   */
  name?: string;

  /**
   * Whether to track opens in emails
   */
  open_tracking?: boolean;

  /**
   * Value of every positive lead
   */
  pl_value?: number;

  /**
   * Whether to prioritize new leads
   */
  prioritize_new_leads?: boolean;

  /**
   * The maximum random wait time in minutes
   */
  random_wait_max?: number;

  /**
   * List of sequences (the actual email copy). Even though this field is an array,
   * only the first element is used, so please provide only one array item, and add
   * the steps to that array
   */
  sequences?: Array<CampaignUpdateParams.Sequence>;

  /**
   * Whether to stop the campaign for the entire company(domain) when a lead replies
   */
  stop_for_company?: boolean;

  /**
   * Whether to stop the campaign on auto reply
   */
  stop_on_auto_reply?: boolean;

  /**
   * Whether to stop the campaign on reply
   */
  stop_on_reply?: boolean;

  /**
   * Whether the campaign is text only
   */
  text_only?: boolean;
}

export namespace CampaignUpdateParams {
  /**
   * Auto variant select settings
   */
  export interface AutoVariantSelect {
    trigger: 'reply_rate' | 'click_rate' | 'open_rate';
  }

  /**
   * Campaign schedule
   */
  export interface CampaignSchedule {
    schedules: Array<CampaignSchedule.Schedule>;

    end_date?: string;

    start_date?: string;
  }

  export namespace CampaignSchedule {
    export interface Schedule {
      days: Schedule.Days;

      name: string;

      timezone:
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

      timing: Schedule.Timing;
    }

    export namespace Schedule {
      export interface Days {
        '0'?: boolean;

        '1'?: boolean;

        '2'?: boolean;

        '3'?: boolean;

        '4'?: boolean;

        '5'?: boolean;

        '6'?: boolean;
      }

      export interface Timing {
        from: string;

        to: string;
      }
    }
  }

  export interface Sequence {
    steps: Array<Sequence.Step>;
  }

  export namespace Sequence {
    export interface Step {
      /**
       * The number of days to wait before sending the NEXT email
       */
      delay: number;

      /**
       * Type of step. This has to be 'email' always - it's the only supported type for
       * now
       */
      type: 'email';

      variants: Array<Step.Variant>;
    }

    export namespace Step {
      export interface Variant {
        body: string;

        subject: string;

        /**
         * Whether this variant is disabled. By default, all the variants are enabled.
         * Please set this to true if you want to disable this variant
         */
        v_disabled?: boolean;
      }
    }
  }
}

export interface CampaignListParams {
  /**
   * The number of items to return
   */
  limit?: number;

  /**
   * Search by campaign name
   */
  search?: string;

  /**
   * The ID of the last item in the previous page - used for pagination. You can use
   * the value of the `next_starting_after` field from the previous response.
   */
  starting_after?: string;

  /**
   * Filter campaigns by tag ids. Returns campaigns that have any of the specified
   * tags assigned. You can specify multiple tag ids by separating them with a comma.
   */
  tag_ids?: string;
}

export interface CampaignDeleteParams {
  body?: null;
}

Campaigns.Analytics = Analytics;

export declare namespace Campaigns {
  export {
    type Campaign as Campaign,
    type CampaignListResponse as CampaignListResponse,
    type CampaignShareResponse as CampaignShareResponse,
    type CampaignCreateParams as CampaignCreateParams,
    type CampaignUpdateParams as CampaignUpdateParams,
    type CampaignListParams as CampaignListParams,
    type CampaignDeleteParams as CampaignDeleteParams,
  };

  export {
    Analytics as Analytics,
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
