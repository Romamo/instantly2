// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../../core/resource';
import { APIPromise } from '../../../core/api-promise';
import { RequestOptions } from '../../../internal/request-options';

export class Ctd extends APIResource {
  /**
   * Requires one of the following scopes: `accounts:read`, `accounts:all`,
   * `all:read`, `all:all`
   *
   * @example
   * ```ts
   * const response = await client.v2.accounts.ctd.getStatus({
   *   host: 'example.com',
   * });
   * ```
   */
  getStatus(query: CtdGetStatusParams, options?: RequestOptions): APIPromise<CtdGetStatusResponse> {
    return this._client.get('/api/v2/accounts/ctd/status', { query, ...options });
  }
}

export interface CtdGetStatusResponse {
  cname?: boolean;

  host?: string;

  ssl?: boolean;

  success?: boolean;
}

export interface CtdGetStatusParams {
  /**
   * Custom tracking domain host
   */
  host: string;
}

export declare namespace Ctd {
  export { type CtdGetStatusResponse as CtdGetStatusResponse, type CtdGetStatusParams as CtdGetStatusParams };
}
