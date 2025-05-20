// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../core/resource';
import { APIPromise } from '../../core/api-promise';
import { RequestOptions } from '../../internal/request-options';
import { path } from '../../internal/utils/path';

export class Subsequences extends APIResource {
  /**
   * Requires one of the following scopes: `subsequences:create`, `subsequences:all`,
   * `all:create`, `all:all`
   *
   * @example
   * ```ts
   * const subsequence = await client.v2.subsequences.create({
   *   conditions: {},
   *   name: 'Follow-up sequence',
   *   parent_campaign: '0196ed60-7cbf-7a74-8b26-0a9e3d22f713',
   *   sequences: [
   *     {
   *       steps: [
   *         { ... },
   *       ],
   *     },
   *   ],
   *   subsequence_schedule: {
   *     schedules: [
   *       { ... },
   *     ],
   *   },
   * });
   * ```
   */
  create(body: SubsequenceCreateParams, options?: RequestOptions): APIPromise<Subsequence> {
    return this._client.post('/api/v2/subsequences', { body, ...options });
  }

  /**
   * Requires one of the following scopes: `subsequences:read`, `subsequences:all`,
   * `all:read`, `all:all`
   *
   * @example
   * ```ts
   * const subsequence = await client.v2.subsequences.retrieve(
   *   '0196ed60-9e4c-721b-8dc7-bfe3e0083df1',
   * );
   * ```
   */
  retrieve(id: string, options?: RequestOptions): APIPromise<Subsequence> {
    return this._client.get(path`/api/v2/subsequences/${id}`, options);
  }

  /**
   * Requires one of the following scopes: `subsequences:update`, `subsequences:all`,
   * `all:update`, `all:all`
   *
   * @example
   * ```ts
   * const subsequence = await client.v2.subsequences.update(
   *   '0196ed60-9e4d-7089-86d4-8b1c58a0a988',
   * );
   * ```
   */
  update(
    id: string,
    body: SubsequenceUpdateParams | null | undefined = {},
    options?: RequestOptions,
  ): APIPromise<Subsequence> {
    return this._client.patch(path`/api/v2/subsequences/${id}`, { body, ...options });
  }

  /**
   * Requires one of the following scopes: `subsequences:read`, `subsequences:all`,
   * `all:read`, `all:all`
   *
   * @example
   * ```ts
   * const subsequences = await client.v2.subsequences.list({
   *   parent_campaign: '123e4567-e89b-12d3-a456-426614174000',
   * });
   * ```
   */
  list(query: SubsequenceListParams, options?: RequestOptions): APIPromise<SubsequenceListResponse> {
    return this._client.get('/api/v2/subsequences', { query, ...options });
  }

  /**
   * Requires one of the following scopes: `subsequences:delete`, `subsequences:all`,
   * `all:delete`, `all:all`
   *
   * @example
   * ```ts
   * const subsequence = await client.v2.subsequences.delete(
   *   '0196ed60-9e4d-7089-86d4-8b1d1c705a48',
   * );
   * ```
   */
  delete(
    id: string,
    params: SubsequenceDeleteParams | null | undefined = undefined,
    options?: RequestOptions,
  ): APIPromise<Subsequence> {
    const { body } = params ?? {};
    return this._client.delete(path`/api/v2/subsequences/${id}`, { body: body, ...options });
  }

  /**
   * Duplicate a subsequence with the same trigger conditions
   *
   * Requires one of the following scopes: `subsequences:create`, `subsequences:all`,
   * `all:create`, `all:all`
   *
   * @example
   * ```ts
   * const subsequence = await client.v2.subsequences.duplicate(
   *   '123e4567-e89b-12d3-a456-426614174000',
   *   {
   *     name: 'My Duplicate Subsequence',
   *     parent_campaign: '123e4567-e89b-12d3-a456-426614174000',
   *   },
   * );
   * ```
   */
  duplicate(id: string, body: SubsequenceDuplicateParams, options?: RequestOptions): APIPromise<Subsequence> {
    return this._client.post(path`/api/v2/subsequences/${id}/duplicate`, { body, ...options });
  }

  /**
   * Pause a subsequence
   *
   * Requires one of the following scopes: `subsequences:update`, `subsequences:all`,
   * `all:update`, `all:all`
   *
   * @example
   * ```ts
   * const subsequence = await client.v2.subsequences.pause(
   *   '123e4567-e89b-12d3-a456-426614174000',
   * );
   * ```
   */
  pause(id: string, options?: RequestOptions): APIPromise<Subsequence> {
    return this._client.post(path`/api/v2/subsequences/${id}/pause`, options);
  }

  /**
   * Resume a paused subsequence
   *
   * Requires one of the following scopes: `subsequences:update`, `subsequences:all`,
   * `all:update`, `all:all`
   *
   * @example
   * ```ts
   * const subsequence = await client.v2.subsequences.resume(
   *   '123e4567-e89b-12d3-a456-426614174000',
   * );
   * ```
   */
  resume(id: string, options?: RequestOptions): APIPromise<Subsequence> {
    return this._client.post(path`/api/v2/subsequences/${id}/resume`, options);
  }
}

/**
 * A subsequence entity representing a follow-up sequence
 */
export interface Subsequence {
  /**
   * Unique identifier for the subsequence
   */
  id: string;

  /**
   * Conditions that trigger the subsequence
   */
  conditions: Subsequence.Conditions;

  /**
   * Name of the subsequence
   */
  name: string;

  /**
   * ID of the parent campaign
   */
  parent_campaign: string;

  /**
   * List of sequences (the actual email copy). Even though this field is an array,
   * only the first element is used, so please provide only one array item, and add
   * the steps to that array
   */
  sequences: Array<Subsequence.Sequence>;

  /**
   * Status of the subsequence
   */
  status: -99 | -1 | -2 | 0 | 1 | 2 | 3 | 4;

  /**
   * Schedule configuration for the subsequence
   */
  subsequence_schedule: Subsequence.SubsequenceSchedule;

  /**
   * Timestamp when the subsequence was created
   */
  timestamp_created: string;

  /**
   * Timestamp when the leads were last updated
   */
  timestamp_leads_updated: string;

  /**
   * ID of the workspace this subsequence belongs to
   */
  workspace: string;
}

export namespace Subsequence {
  /**
   * Conditions that trigger the subsequence
   */
  export interface Conditions {
    crm_status?: Array<number>;

    reply_contains?: string;
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

  /**
   * Schedule configuration for the subsequence
   */
  export interface SubsequenceSchedule {
    schedules: Array<SubsequenceSchedule.Schedule>;

    end_date?: string;

    start_date?: string;
  }

  export namespace SubsequenceSchedule {
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
}

export interface SubsequenceListResponse {
  items: Array<Subsequence>;

  /**
   * The filter for getting the next items after this one, this could either be a
   * UUID, a MongoDB ID, a timestamp, on an email depending on the specific API
   */
  next_starting_after?: string;
}

export interface SubsequenceCreateParams {
  /**
   * Conditions that trigger the subsequence
   */
  conditions: SubsequenceCreateParams.Conditions;

  /**
   * Name of the subsequence
   */
  name: string;

  /**
   * ID of the parent campaign
   */
  parent_campaign: string;

  /**
   * List of sequences (the actual email copy). Even though this field is an array,
   * only the first element is used, so please provide only one array item, and add
   * the steps to that array
   */
  sequences: Array<SubsequenceCreateParams.Sequence>;

  /**
   * Schedule configuration for the subsequence
   */
  subsequence_schedule: SubsequenceCreateParams.SubsequenceSchedule;
}

export namespace SubsequenceCreateParams {
  /**
   * Conditions that trigger the subsequence
   */
  export interface Conditions {
    crm_status?: Array<number>;

    reply_contains?: string;
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

  /**
   * Schedule configuration for the subsequence
   */
  export interface SubsequenceSchedule {
    schedules: Array<SubsequenceSchedule.Schedule>;

    end_date?: string;

    start_date?: string;
  }

  export namespace SubsequenceSchedule {
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
}

export interface SubsequenceUpdateParams {
  /**
   * Conditions that trigger the subsequence
   */
  conditions?: SubsequenceUpdateParams.Conditions;

  /**
   * Name of the subsequence
   */
  name?: string;

  /**
   * List of sequences (the actual email copy). Even though this field is an array,
   * only the first element is used, so please provide only one array item, and add
   * the steps to that array
   */
  sequences?: Array<SubsequenceUpdateParams.Sequence>;
}

export namespace SubsequenceUpdateParams {
  /**
   * Conditions that trigger the subsequence
   */
  export interface Conditions {
    crm_status?: Array<number>;

    reply_contains?: string;
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

export interface SubsequenceListParams {
  parent_campaign: string;

  /**
   * The number of items to return
   */
  limit?: number;

  search?: string;

  /**
   * The ID of the last item in the previous page - used for pagination. You can use
   * the value of the `next_starting_after` field from the previous response.
   */
  starting_after?: string;
}

export interface SubsequenceDeleteParams {
  body?: null;
}

export interface SubsequenceDuplicateParams {
  name: string;

  parent_campaign: string;
}

export declare namespace Subsequences {
  export {
    type Subsequence as Subsequence,
    type SubsequenceListResponse as SubsequenceListResponse,
    type SubsequenceCreateParams as SubsequenceCreateParams,
    type SubsequenceUpdateParams as SubsequenceUpdateParams,
    type SubsequenceListParams as SubsequenceListParams,
    type SubsequenceDeleteParams as SubsequenceDeleteParams,
    type SubsequenceDuplicateParams as SubsequenceDuplicateParams,
  };
}
