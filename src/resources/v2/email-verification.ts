// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../core/resource';
import { APIPromise } from '../../core/api-promise';
import { RequestOptions } from '../../internal/request-options';
import { path } from '../../internal/utils/path';

export class EmailVerification extends APIResource {
  /**
   * If an email takes longer than 10 seconds to verify, the endpoint will return the
   * status as `pending`. In that case, you may use the `/email-verification/:email`
   * endpoint to check the status of the verification job.
   *
   * Alternatively, you can send a `webhook_url` to receive the results instead of
   * polling the status endpoint.
   *
   * Requires one of the following scopes: `email_verifications:create`
   *
   * Requires one of the following scopes: `email_verifications:create`,
   * `email_verifications:all`, `all:create`, `all:all`
   *
   * @example
   * ```ts
   * const verification =
   *   await client.v2.emailVerification.create({
   *     email: 'example@example.com',
   *   });
   * ```
   */
  create(body: EmailVerificationCreateParams, options?: RequestOptions): APIPromise<Verification> {
    return this._client.post('/api/v2/email-verification', { body, ...options });
  }

  /**
   * Requires one of the following scopes: `email_verifications:read`,
   * `email_verifications:all`, `all:read`, `all:all`
   *
   * @example
   * ```ts
   * const verification =
   *   await client.v2.emailVerification.checkStatus(
   *     'user@example.com',
   *   );
   * ```
   */
  checkStatus(email: string, options?: RequestOptions): APIPromise<Verification> {
    return this._client.get(path`/api/v2/email-verification/${email}`, options);
  }
}

/**
 * A single email verification
 */
export interface Verification {
  /**
   * The email address to verify
   */
  email: string;

  /**
   * The verification status.
   */
  verification_status: 'pending' | 'verified' | 'invalid';

  catch_all?: unknown;

  /**
   * The number of verification credits available after the verification
   */
  credits?: number;

  /**
   * The number of verification credits used
   */
  credits_used?: number;

  /**
   * The request status. Do not use this field to determine the verification status.
   * Please use `verification_status` instead to check the verification status
   */
  status?: 'success' | 'error';
}

export interface EmailVerificationCreateParams {
  /**
   * The email address to verify
   */
  email: string;

  /**
   * A webhook URL to receive the verification results. If the email verification
   * takes more than 10 seconds we will send the results to this URL.
   */
  webhook_url?: string;
}

export declare namespace EmailVerification {
  export {
    type Verification as Verification,
    type EmailVerificationCreateParams as EmailVerificationCreateParams,
  };
}
