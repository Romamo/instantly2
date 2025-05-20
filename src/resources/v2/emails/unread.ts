// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../../core/resource';
import { APIPromise } from '../../../core/api-promise';
import { RequestOptions } from '../../../internal/request-options';

export class Unread extends APIResource {
  /**
   * Requires one of the following scopes: `emails:read`, `emails:all`, `all:read`,
   * `all:all`
   *
   * @example
   * ```ts
   * const response = await client.v2.emails.unread.count();
   * ```
   */
  count(options?: RequestOptions): APIPromise<UnreadCountResponse> {
    return this._client.get('/api/v2/emails/unread/count', options);
  }
}

export interface UnreadCountResponse {
  count?: number;
}

export declare namespace Unread {
  export { type UnreadCountResponse as UnreadCountResponse };
}
