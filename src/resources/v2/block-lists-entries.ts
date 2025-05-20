// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../core/resource';
import { APIPromise } from '../../core/api-promise';
import { RequestOptions } from '../../internal/request-options';
import { path } from '../../internal/utils/path';

export class BlockListsEntries extends APIResource {
  /**
   * Requires one of the following scopes: `block_list_entries:create`,
   * `block_list_entries:all`, `all:create`, `all:all`
   *
   * @example
   * ```ts
   * const blockedEntry =
   *   await client.v2.blockListsEntries.create({
   *     bl_value: 'example.com',
   *   });
   * ```
   */
  create(body: BlockListsEntryCreateParams, options?: RequestOptions): APIPromise<BlockedEntry> {
    return this._client.post('/api/v2/block-lists-entries', { body, ...options });
  }

  /**
   * Requires one of the following scopes: `block_list_entries:read`,
   * `block_list_entries:all`, `all:read`, `all:all`
   *
   * @example
   * ```ts
   * const blockedEntry =
   *   await client.v2.blockListsEntries.retrieve(
   *     '0196ed60-9de2-7b3a-9021-c96f6aa6ba44',
   *   );
   * ```
   */
  retrieve(id: string, options?: RequestOptions): APIPromise<BlockedEntry> {
    return this._client.get(path`/api/v2/block-lists-entries/${id}`, options);
  }

  /**
   * Requires one of the following scopes: `block_list_entries:update`,
   * `block_list_entries:all`, `all:update`, `all:all`
   *
   * @example
   * ```ts
   * const blockedEntry =
   *   await client.v2.blockListsEntries.update(
   *     '0196ed60-9de5-7eba-9d7a-a91a6970ed19',
   *   );
   * ```
   */
  update(
    id: string,
    body: BlockListsEntryUpdateParams | null | undefined = {},
    options?: RequestOptions,
  ): APIPromise<BlockedEntry> {
    return this._client.patch(path`/api/v2/block-lists-entries/${id}`, { body, ...options });
  }

  /**
   * Requires one of the following scopes: `block_list_entries:read`,
   * `block_list_entries:all`, `all:read`, `all:all`
   *
   * @example
   * ```ts
   * const blockListsEntries =
   *   await client.v2.blockListsEntries.list();
   * ```
   */
  list(
    query: BlockListsEntryListParams | null | undefined = {},
    options?: RequestOptions,
  ): APIPromise<BlockListsEntryListResponse> {
    return this._client.get('/api/v2/block-lists-entries', { query, ...options });
  }

  /**
   * Requires one of the following scopes: `block_list_entries:delete`,
   * `block_list_entries:all`, `all:delete`, `all:all`
   *
   * @example
   * ```ts
   * const blockedEntry =
   *   await client.v2.blockListsEntries.delete(
   *     '0196ed60-9de6-7413-a564-ecc425638b7f',
   *   );
   * ```
   */
  delete(
    id: string,
    params: BlockListsEntryDeleteParams | null | undefined = undefined,
    options?: RequestOptions,
  ): APIPromise<BlockedEntry> {
    const { body } = params ?? {};
    return this._client.delete(path`/api/v2/block-lists-entries/${id}`, { body: body, ...options });
  }
}

/**
 * A blocked email or domain
 */
export interface BlockedEntry {
  /**
   * Unique identifier for the block list entry
   */
  id: string;

  /**
   * The email or domain to block
   */
  bl_value: string;

  /**
   * Whether this entry blocks an entire domain
   */
  is_domain: boolean;

  /**
   * Organization ID that owns this block list entry
   */
  organization_id: string;

  /**
   * Timestamp when the block list entry was created
   */
  timestamp_created: string;
}

export interface BlockListsEntryListResponse {
  items: Array<BlockedEntry>;

  /**
   * The filter for getting the next items after this one, this could either be a
   * UUID, a MongoDB ID, a timestamp, on an email depending on the specific API
   */
  next_starting_after?: string;
}

export interface BlockListsEntryCreateParams {
  /**
   * The email or domain to block
   */
  bl_value: string;
}

export interface BlockListsEntryUpdateParams {
  /**
   * The email or domain to block
   */
  bl_value?: string;
}

export interface BlockListsEntryListParams {
  /**
   * Filter by domain
   */
  domains_only?: boolean;

  /**
   * The number of items to return
   */
  limit?: number;

  /**
   * Search by value
   */
  search?: string;

  /**
   * The ID of the last item in the previous page - used for pagination. You can use
   * the value of the `next_starting_after` field from the previous response.
   */
  starting_after?: string;
}

export interface BlockListsEntryDeleteParams {
  body?: null;
}

export declare namespace BlockListsEntries {
  export {
    type BlockedEntry as BlockedEntry,
    type BlockListsEntryListResponse as BlockListsEntryListResponse,
    type BlockListsEntryCreateParams as BlockListsEntryCreateParams,
    type BlockListsEntryUpdateParams as BlockListsEntryUpdateParams,
    type BlockListsEntryListParams as BlockListsEntryListParams,
    type BlockListsEntryDeleteParams as BlockListsEntryDeleteParams,
  };
}
