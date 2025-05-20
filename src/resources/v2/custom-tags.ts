// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../core/resource';
import { APIPromise } from '../../core/api-promise';
import { RequestOptions } from '../../internal/request-options';
import { path } from '../../internal/utils/path';

export class CustomTags extends APIResource {
  /**
   * Requires one of the following scopes: `custom_tags:create`, `custom_tags:all`,
   * `all:create`, `all:all`
   *
   * @example
   * ```ts
   * const customTag = await client.v2.customTags.create({
   *   label: 'Important',
   * });
   * ```
   */
  create(body: CustomTagCreateParams, options?: RequestOptions): APIPromise<CustomTag> {
    return this._client.post('/api/v2/custom-tags', { body, ...options });
  }

  /**
   * Requires one of the following scopes: `custom_tags:read`, `custom_tags:all`,
   * `all:read`, `all:all`
   *
   * @example
   * ```ts
   * const customTag = await client.v2.customTags.retrieve(
   *   '0196ed60-9e0c-77bf-94be-6def0605ea90',
   * );
   * ```
   */
  retrieve(id: string, options?: RequestOptions): APIPromise<CustomTag> {
    return this._client.get(path`/api/v2/custom-tags/${id}`, options);
  }

  /**
   * Requires one of the following scopes: `custom_tags:update`, `custom_tags:all`,
   * `all:update`, `all:all`
   *
   * @example
   * ```ts
   * const customTag = await client.v2.customTags.update(
   *   '0196ed60-9e0d-7ccf-bfdb-f37e7b212adc',
   * );
   * ```
   */
  update(
    id: string,
    body: CustomTagUpdateParams | null | undefined = {},
    options?: RequestOptions,
  ): APIPromise<CustomTag> {
    return this._client.patch(path`/api/v2/custom-tags/${id}`, { body, ...options });
  }

  /**
   * Requires one of the following scopes: `custom_tags:read`, `custom_tags:all`,
   * `all:read`, `all:all`
   *
   * @example
   * ```ts
   * const customTags = await client.v2.customTags.list();
   * ```
   */
  list(
    query: CustomTagListParams | null | undefined = {},
    options?: RequestOptions,
  ): APIPromise<CustomTagListResponse> {
    return this._client.get('/api/v2/custom-tags', { query, ...options });
  }

  /**
   * Requires one of the following scopes: `custom_tags:delete`, `custom_tags:all`,
   * `all:delete`, `all:all`
   *
   * @example
   * ```ts
   * const customTag = await client.v2.customTags.delete(
   *   '0196ed60-9e0f-7e4f-8e3f-6a32b93099f7',
   * );
   * ```
   */
  delete(
    id: string,
    params: CustomTagDeleteParams | null | undefined = undefined,
    options?: RequestOptions,
  ): APIPromise<CustomTag> {
    const { body } = params ?? {};
    return this._client.delete(path`/api/v2/custom-tags/${id}`, { body: body, ...options });
  }

  /**
   * This can be used for both accounts and campaigns. Please check the
   * `resource_type` field for more information.
   *
   * @example
   * ```ts
   * const response = await client.v2.customTags.toggleResource({
   *   assign: true,
   *   resource_ids: ['resource-1', 'resource-2'],
   *   resource_type: 1,
   *   tag_ids: ['0196ed60-9e0d-7ccf-bfdb-f37f58d2b62a'],
   * });
   * ```
   */
  toggleResource(
    body: CustomTagToggleResourceParams,
    options?: RequestOptions,
  ): APIPromise<CustomTagToggleResourceResponse> {
    return this._client.post('/api/v2/custom-tags/toggle-resource', { body, ...options });
  }
}

/**
 * A custom tag for organizing and categorizing accounts and campaigns. You can use
 * them as filters in apis that list accounts and campaigns.
 */
export interface CustomTag {
  /**
   * Unique identifier for the custom tag
   */
  id: string;

  /**
   * Display label for the custom tag
   */
  label: string;

  /**
   * Organization ID that owns this custom tag
   */
  organization_id: string;

  /**
   * Timestamp when the custom tag was created
   */
  timestamp_created: string;

  /**
   * Timestamp when the custom tag was last updated
   */
  timestamp_updated: string;

  /**
   * Detailed description of the custom tag purpose
   */
  description?: string;
}

export interface CustomTagListResponse {
  items: Array<CustomTag>;

  /**
   * The filter for getting the next items after this one, this could either be a
   * UUID, a MongoDB ID, a timestamp, on an email depending on the specific API
   */
  next_starting_after?: string;
}

export interface CustomTagToggleResourceResponse {
  success?: boolean;
}

export interface CustomTagCreateParams {
  /**
   * Display label for the custom tag
   */
  label: string;

  /**
   * Detailed description of the custom tag purpose
   */
  description?: string;
}

export interface CustomTagUpdateParams {
  /**
   * Detailed description of the custom tag purpose
   */
  description?: string;

  /**
   * Display label for the custom tag
   */
  label?: string;
}

export interface CustomTagListParams {
  /**
   * The number of items to return
   */
  limit?: number;

  resource_ids?: string;

  search?: string;

  /**
   * The ID of the last item in the previous page - used for pagination. You can use
   * the value of the `next_starting_after` field from the previous response.
   */
  starting_after?: string;

  tag_ids?: string;
}

export interface CustomTagDeleteParams {
  body?: null;
}

export interface CustomTagToggleResourceParams {
  assign: boolean;

  resource_ids: Array<string>;

  /**
   * The resource type to assign or unassign the tags to
   */
  resource_type: 1 | 2;

  tag_ids: Array<string>;

  filter?:
    | 'ACC_FILTER_PAUSED'
    | 'ACC_FILTER_ERROR'
    | 'ACC_FILTER_NO_CTD'
    | 'ACC_FILTER_PW_ACCOUNTS'
    | 'ACC_FILTER_DFY'
    | 'ACC_FILTER_W_ACTIVE'
    | 'ACC_FILTER_W_PAUSED'
    | 'ACC_FILTER_W_ERROR'
    | CustomTagToggleResourceParams.UnionMember1;

  selected_all?: boolean;
}

export namespace CustomTagToggleResourceParams {
  export interface UnionMember1 {
    search?: string;

    tag_id?: string;
  }
}

export declare namespace CustomTags {
  export {
    type CustomTag as CustomTag,
    type CustomTagListResponse as CustomTagListResponse,
    type CustomTagToggleResourceResponse as CustomTagToggleResourceResponse,
    type CustomTagCreateParams as CustomTagCreateParams,
    type CustomTagUpdateParams as CustomTagUpdateParams,
    type CustomTagListParams as CustomTagListParams,
    type CustomTagDeleteParams as CustomTagDeleteParams,
    type CustomTagToggleResourceParams as CustomTagToggleResourceParams,
  };
}
