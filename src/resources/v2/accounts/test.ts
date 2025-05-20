// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../../core/resource';
import { APIPromise } from '../../../core/api-promise';
import { RequestOptions } from '../../../internal/request-options';

export class Test extends APIResource {
  /**
   * Requires one of the following scopes: `accounts:read`, `accounts:all`,
   * `all:read`, `all:all`
   *
   * @example
   * ```ts
   * const response = await client.v2.accounts.test.testVitals();
   * ```
   */
  testVitals(
    body: TestTestVitalsParams | null | undefined = {},
    options?: RequestOptions,
  ): APIPromise<TestTestVitalsResponse> {
    return this._client.post('/api/v2/accounts/test/vitals', { body, ...options });
  }
}

export interface TestTestVitalsResponse {
  failure_list?: Array<TestTestVitalsResponse.FailureList>;

  status?: string;

  success_list?: Array<TestTestVitalsResponse.SuccessList>;
}

export namespace TestTestVitalsResponse {
  export interface FailureList {
    allPass?: boolean;

    dkim?: boolean;

    dmarc?: boolean;

    domain?: string;

    mx?: boolean;

    spf?: boolean;
  }

  export interface SuccessList {
    allPass?: boolean;

    dkim?: boolean;

    dmarc?: boolean;

    domain?: string;

    mx?: boolean;

    spf?: boolean;
  }
}

export interface TestTestVitalsParams {
  accounts?: Array<string>;
}

export declare namespace Test {
  export {
    type TestTestVitalsResponse as TestTestVitalsResponse,
    type TestTestVitalsParams as TestTestVitalsParams,
  };
}
