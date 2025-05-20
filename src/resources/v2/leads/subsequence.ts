// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../../core/resource';
import * as LeadsAPI from './leads';
import { APIPromise } from '../../../core/api-promise';
import { RequestOptions } from '../../../internal/request-options';

export class Subsequence extends APIResource {
  /**
   * Move a lead to a subsequence
   *
   * Requires one of the following scopes: `leads:update`, `leads:all`, `all:update`,
   * `all:all`
   *
   * @example
   * ```ts
   * const lead = await client.v2.leads.subsequence.move({
   *   id: '0196ed60-9e40-7820-b611-a3e45dc43c5d',
   *   subsequence_id: '0196ed60-9e3f-742e-9fb0-93776264c979',
   * });
   * ```
   */
  move(body: SubsequenceMoveParams, options?: RequestOptions): APIPromise<LeadsAPI.Lead> {
    return this._client.post('/api/v2/leads/subsequence/move', { body, ...options });
  }

  /**
   * Remove a lead from a subsequence
   *
   * Requires one of the following scopes: `leads:update`, `leads:all`, `all:update`,
   * `all:all`
   *
   * @example
   * ```ts
   * const lead = await client.v2.leads.subsequence.remove({
   *   id: '0196ed60-9e3d-73e0-b4d2-0c43a9ce5536',
   * });
   * ```
   */
  remove(body: SubsequenceRemoveParams, options?: RequestOptions): APIPromise<LeadsAPI.Lead> {
    return this._client.post('/api/v2/leads/subsequence/remove', { body, ...options });
  }
}

export interface SubsequenceMoveParams {
  id: string;

  subsequence_id: string;
}

export interface SubsequenceRemoveParams {
  id: string;
}

export declare namespace Subsequence {
  export {
    type SubsequenceMoveParams as SubsequenceMoveParams,
    type SubsequenceRemoveParams as SubsequenceRemoveParams,
  };
}
