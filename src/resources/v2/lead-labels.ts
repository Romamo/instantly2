// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../core/resource';
import { APIPromise } from '../../core/api-promise';
import { RequestOptions } from '../../internal/request-options';
import { path } from '../../internal/utils/path';

export class LeadLabels extends APIResource {
  /**
   * Requires one of the following scopes: `lead-labels:create`, `lead-labels:all`,
   * `all:create`, `all:all`
   *
   * @example
   * ```ts
   * const leadLabel = await client.v2.leadLabels.create({
   *   interest_status_label: 'positive',
   *   label: 'Hot Lead',
   * });
   * ```
   */
  create(body: LeadLabelCreateParams, options?: RequestOptions): APIPromise<LeadLabel> {
    return this._client.post('/api/v2/lead-labels', { body, ...options });
  }

  /**
   * Requires one of the following scopes: `lead-labels:read`, `lead-labels:all`,
   * `all:read`, `all:all`
   *
   * @example
   * ```ts
   * const leadLabel = await client.v2.leadLabels.retrieve(
   *   '0196ed60-9e2d-73bf-93be-e284491fe8e3',
   * );
   * ```
   */
  retrieve(id: string, options?: RequestOptions): APIPromise<LeadLabel> {
    return this._client.get(path`/api/v2/lead-labels/${id}`, options);
  }

  /**
   * Requires one of the following scopes: `lead-labels:update`, `lead-labels:all`,
   * `all:update`, `all:all`
   *
   * @example
   * ```ts
   * const leadLabel = await client.v2.leadLabels.update(
   *   '0196ed60-9e2d-73bf-93be-e285a15ac5ce',
   * );
   * ```
   */
  update(
    id: string,
    body: LeadLabelUpdateParams | null | undefined = {},
    options?: RequestOptions,
  ): APIPromise<LeadLabel> {
    return this._client.patch(path`/api/v2/lead-labels/${id}`, { body, ...options });
  }

  /**
   * Requires one of the following scopes: `lead-labels:read`, `lead-labels:all`,
   * `all:read`, `all:all`
   *
   * @example
   * ```ts
   * const leadLabels = await client.v2.leadLabels.list();
   * ```
   */
  list(
    query: LeadLabelListParams | null | undefined = {},
    options?: RequestOptions,
  ): APIPromise<LeadLabelListResponse> {
    return this._client.get('/api/v2/lead-labels', { query, ...options });
  }

  /**
   * Requires one of the following scopes: `lead-labels:delete`, `lead-labels:all`,
   * `all:delete`, `all:all`
   *
   * @example
   * ```ts
   * const leadLabel = await client.v2.leadLabels.delete(
   *   '0196ed60-9e2d-73bf-93be-e286ba5f4b3c',
   * );
   * ```
   */
  delete(
    id: string,
    body: LeadLabelDeleteParams | null | undefined = {},
    options?: RequestOptions,
  ): APIPromise<LeadLabel> {
    return this._client.delete(path`/api/v2/lead-labels/${id}`, { body, ...options });
  }
}

/**
 * A custom label for categorizing and managing leads
 */
export interface LeadLabel {
  /**
   * Unique identifier for the custom lead label
   */
  id: string;

  /**
   * User ID of the creator of this label
   */
  created_by: string;

  /**
   * Interest status associated with this label. This is generated automatically by
   * us.
   */
  interest_status: number;

  /**
   * Interest status label associated with this label
   */
  interest_status_label: 'positive' | 'negative' | 'neutral';

  /**
   * Display label for the custom lead label
   */
  label: string;

  /**
   * Organization ID that owns this custom lead label
   */
  organization_id: string;

  /**
   * Timestamp when the custom lead label was created
   */
  timestamp_created: string;

  /**
   * Detailed description of the custom lead label purpose
   */
  description?: string;

  /**
   * Whether this label should be used with AI features
   */
  use_with_ai?: boolean;
}

export interface LeadLabelListResponse {
  items: Array<LeadLabel>;

  /**
   * The filter for getting the next items after this one, this could either be a
   * UUID, a MongoDB ID, a timestamp, on an email depending on the specific API
   */
  next_starting_after?: string;
}

export interface LeadLabelCreateParams {
  /**
   * Interest status label associated with this label
   */
  interest_status_label: 'positive' | 'negative' | 'neutral';

  /**
   * Display label for the custom lead label
   */
  label: string;

  /**
   * Detailed description of the custom lead label purpose
   */
  description?: string;

  /**
   * Whether this label should be used with AI features
   */
  use_with_ai?: boolean;
}

export interface LeadLabelUpdateParams {
  /**
   * Detailed description of the custom lead label purpose
   */
  description?: string;

  /**
   * Interest status label associated with this label
   */
  interest_status_label?: 'positive' | 'negative' | 'neutral';

  /**
   * Display label for the custom lead label
   */
  label?: string;

  /**
   * Whether this label should be used with AI features
   */
  use_with_ai?: boolean;
}

export interface LeadLabelListParams {
  interest_status?: 'positive' | 'neutral' | 'negative';

  /**
   * The number of items to return
   */
  limit?: number;

  search?: string;

  starting_after?: string;
}

export interface LeadLabelDeleteParams {
  reassigned_status?: number;
}

export declare namespace LeadLabels {
  export {
    type LeadLabel as LeadLabel,
    type LeadLabelListResponse as LeadLabelListResponse,
    type LeadLabelCreateParams as LeadLabelCreateParams,
    type LeadLabelUpdateParams as LeadLabelUpdateParams,
    type LeadLabelListParams as LeadLabelListParams,
    type LeadLabelDeleteParams as LeadLabelDeleteParams,
  };
}
