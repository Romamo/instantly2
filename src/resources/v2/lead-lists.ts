// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../core/resource';
import { APIPromise } from '../../core/api-promise';
import { RequestOptions } from '../../internal/request-options';
import { path } from '../../internal/utils/path';

export class LeadLists extends APIResource {
  /**
   * Requires one of the following scopes: `lead_lists:create`, `lead_lists:all`,
   * `all:create`, `all:all`
   *
   * @example
   * ```ts
   * const leadList = await client.v2.leadLists.create({
   *   name: 'My Lead List',
   * });
   * ```
   */
  create(body: LeadListCreateParams, options?: RequestOptions): APIPromise<LeadList> {
    return this._client.post('/api/v2/lead-lists', { body, ...options });
  }

  /**
   * Requires one of the following scopes: `lead_lists:read`, `lead_lists:all`,
   * `all:read`, `all:all`
   *
   * @example
   * ```ts
   * const leadList = await client.v2.leadLists.retrieve(
   *   '0196ed60-9e31-7495-8af3-b31c81a26ffa',
   * );
   * ```
   */
  retrieve(id: string, options?: RequestOptions): APIPromise<LeadList> {
    return this._client.get(path`/api/v2/lead-lists/${id}`, options);
  }

  /**
   * Requires one of the following scopes: `lead_lists:update`, `lead_lists:all`,
   * `all:update`, `all:all`
   *
   * @example
   * ```ts
   * const leadList = await client.v2.leadLists.update(
   *   '0196ed60-9e31-7495-8af3-b31d1948a0e0',
   * );
   * ```
   */
  update(
    id: string,
    body: LeadListUpdateParams | null | undefined = {},
    options?: RequestOptions,
  ): APIPromise<LeadList> {
    return this._client.patch(path`/api/v2/lead-lists/${id}`, { body, ...options });
  }

  /**
   * Requires one of the following scopes: `lead_lists:read`, `lead_lists:all`,
   * `all:read`, `all:all`
   *
   * @example
   * ```ts
   * const leadLists = await client.v2.leadLists.list();
   * ```
   */
  list(
    query: LeadListListParams | null | undefined = {},
    options?: RequestOptions,
  ): APIPromise<LeadListListResponse> {
    return this._client.get('/api/v2/lead-lists', { query, ...options });
  }

  /**
   * Requires one of the following scopes: `lead_lists:delete`, `lead_lists:all`,
   * `all:delete`, `all:all`
   *
   * @example
   * ```ts
   * const leadList = await client.v2.leadLists.delete(
   *   '0196ed60-9e32-78fa-97e5-5b3bf3730248',
   * );
   * ```
   */
  delete(
    id: string,
    params: LeadListDeleteParams | null | undefined = undefined,
    options?: RequestOptions,
  ): APIPromise<LeadList> {
    const { body } = params ?? {};
    return this._client.delete(path`/api/v2/lead-lists/${id}`, { body: body, ...options });
  }
}

/**
 * A list used to store leads
 */
export interface LeadList {
  /**
   * Unique identifier for the lead list
   */
  id: string;

  /**
   * Name of the lead list
   */
  name: string;

  /**
   * Organization ID that owns this lead list
   */
  organization_id: string;

  /**
   * Timestamp when the lead list was created
   */
  timestamp_created: string;

  /**
   * Whether this list runs the enrichment process on every added lead or not
   */
  has_enrichment_task?: boolean;

  /**
   * User ID of the owner of this lead list. Defaults to the user that created the
   * list
   */
  owned_by?: string;
}

export interface LeadListListResponse {
  items: Array<LeadList>;

  /**
   * The filter for getting the next items after this one, this could either be a
   * UUID, a MongoDB ID, a timestamp, on an email depending on the specific API
   */
  next_starting_after?: string;
}

export interface LeadListCreateParams {
  /**
   * Name of the lead list
   */
  name: string;

  /**
   * Whether this list runs the enrichment process on every added lead or not
   */
  has_enrichment_task?: boolean;

  /**
   * User ID of the owner of this lead list. Defaults to the user that created the
   * list
   */
  owned_by?: string;
}

export interface LeadListUpdateParams {
  /**
   * Whether this list runs the enrichment process on every added lead or not
   */
  has_enrichment_task?: boolean;

  /**
   * Name of the lead list
   */
  name?: string;

  /**
   * User ID of the owner of this lead list. Defaults to the user that created the
   * list
   */
  owned_by?: string;
}

export interface LeadListListParams {
  has_enrichment_task?: boolean;

  /**
   * The number of items to return
   */
  limit?: number;

  /**
   * Search by list name
   */
  search?: string;

  starting_after?: string;
}

export interface LeadListDeleteParams {
  body?: null;
}

export declare namespace LeadLists {
  export {
    type LeadList as LeadList,
    type LeadListListResponse as LeadListListResponse,
    type LeadListCreateParams as LeadListCreateParams,
    type LeadListUpdateParams as LeadListUpdateParams,
    type LeadListListParams as LeadListListParams,
    type LeadListDeleteParams as LeadListDeleteParams,
  };
}
