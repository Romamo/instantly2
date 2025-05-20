// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../../core/resource';
import { APIPromise } from '../../../core/api-promise';
import { RequestOptions } from '../../../internal/request-options';
import { path } from '../../../internal/utils/path';

export class Threads extends APIResource {
  /**
   * Requires one of the following scopes: `emails:update`, `emails:all`,
   * `all:update`, `all:all`
   *
   * @example
   * ```ts
   * const response = await client.v2.emails.threads.markAsRead(
   *   '123e4567-e89b-12d3-a456-426614174000',
   * );
   * ```
   */
  markAsRead(threadID: string, options?: RequestOptions): APIPromise<ThreadMarkAsReadResponse> {
    return this._client.post(path`/api/v2/emails/threads/${threadID}/mark-as-read`, options);
  }
}

export interface ThreadMarkAsReadResponse {
  success?: boolean;
}

export declare namespace Threads {
  export { type ThreadMarkAsReadResponse as ThreadMarkAsReadResponse };
}
