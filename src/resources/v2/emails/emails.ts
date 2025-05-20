// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../../core/resource';
import * as ThreadsAPI from './threads';
import { ThreadMarkAsReadResponse, Threads } from './threads';
import * as UnreadAPI from './unread';
import { Unread, UnreadCountResponse } from './unread';
import { APIPromise } from '../../../core/api-promise';
import { RequestOptions } from '../../../internal/request-options';
import { path } from '../../../internal/utils/path';

export class Emails extends APIResource {
  threads: ThreadsAPI.Threads = new ThreadsAPI.Threads(this._client);
  unread: UnreadAPI.Unread = new UnreadAPI.Unread(this._client);

  /**
   * Requires one of the following scopes: `emails:read`, `emails:all`, `all:read`,
   * `all:all`
   *
   * @example
   * ```ts
   * const campaignEmail = await client.v2.emails.retrieve(
   *   '0196ed60-9e16-7656-8d21-fae3141d222c',
   * );
   * ```
   */
  retrieve(id: string, options?: RequestOptions): APIPromise<CampaignEmail> {
    return this._client.get(path`/api/v2/emails/${id}`, options);
  }

  /**
   * Requires one of the following scopes: `emails:update`, `emails:all`,
   * `all:update`, `all:all`
   *
   * @example
   * ```ts
   * const campaignEmail = await client.v2.emails.update(
   *   '0196ed60-9e16-7656-8d21-fae413cdad11',
   * );
   * ```
   */
  update(
    id: string,
    body: EmailUpdateParams | null | undefined = {},
    options?: RequestOptions,
  ): APIPromise<CampaignEmail> {
    return this._client.patch(path`/api/v2/emails/${id}`, { body, ...options });
  }

  /**
   * Requires one of the following scopes: `emails:read`, `emails:all`, `all:read`,
   * `all:all`
   *
   * @example
   * ```ts
   * const emails = await client.v2.emails.list();
   * ```
   */
  list(
    query: EmailListParams | null | undefined = {},
    options?: RequestOptions,
  ): APIPromise<EmailListResponse> {
    return this._client.get('/api/v2/emails', { query, ...options });
  }

  /**
   * Requires one of the following scopes: `emails:delete`, `emails:all`,
   * `all:delete`, `all:all`
   *
   * @example
   * ```ts
   * const campaignEmail = await client.v2.emails.delete(
   *   '0196ed60-9e17-78f5-8714-d72cbf883338',
   * );
   * ```
   */
  delete(
    id: string,
    params: EmailDeleteParams | null | undefined = undefined,
    options?: RequestOptions,
  ): APIPromise<CampaignEmail> {
    const { body } = params ?? {};
    return this._client.delete(path`/api/v2/emails/${id}`, { body: body, ...options });
  }

  /**
   * Send a reply to an email. This endpoint can be used to send an email only as a
   * reply to an existing email. In order to reply to an email, please specify the
   * `reyply_to_uuid` field, and your email will be sent as a reply to that email.
   * The `reyply_to_uuid` field represents the `id` field of an existing email, which
   * is being returned to you in all the `/email` endpoints
   *
   * Requires one of the following scopes: `emails:create`, `emails:all`,
   * `all:create`, `all:all`
   *
   * @example
   * ```ts
   * const campaignEmail = await client.v2.emails.reply({
   *   body: {},
   *   eaccount: 'jondoe@example.com',
   *   reply_to_uuid: '123e4567-e89b-12d3-a456-426614174000',
   *   subject: 'Re: Your inquiry',
   * });
   * ```
   */
  reply(body: EmailReplyParams, options?: RequestOptions): APIPromise<CampaignEmail> {
    return this._client.post('/api/v2/emails/reply', { body, ...options });
  }
}

/**
 * A campaign email, a reply, a manually sent email, or any other email that's
 * visible in the Unibox
 */
export interface CampaignEmail {
  /**
   * A Unique identifier
   */
  id: string;

  /**
   * An object containing the email body in HTML and text format
   */
  body: CampaignEmail.Body;

  /**
   * The email account that was used to send the email. This needs to be validated to
   * make sure it exists in the user workspace
   */
  eaccount: string;

  /**
   * Unique email ID from the email server
   */
  message_id: string;

  /**
   * The workspace ID
   */
  organization_id: string;

  /**
   * Subject line of the email message
   */
  subject: string;

  /**
   * Timestamp when the email was added to our database. This is not the timestamp of
   * the email itself, since the email could have been sent at a different time.
   * Please check the `timestamp_email` field for the timestamp of the email.
   */
  timestamp_created: string;

  /**
   * The timestamp of the email, as provided by the email server. Please note that
   * the timestamp is not always accurate, as it can be manipulated by the sender or
   * the email server.
   */
  timestamp_email: string;

  /**
   * Comma-separated list of recipient email addresses
   */
  to_address_email_list: string;

  /**
   * Indicates if AI assistance was used
   */
  ai_assisted?: number;

  /**
   * AI interest value
   */
  ai_interest_value?: number;

  /**
   * Comma-separated list of BCC email addresses
   */
  bcc_address_email_list?: string;

  /**
   * The id of the campaign that the email is associated with (it can be null for
   * manually sent emails)
   */
  campaign_id?: string;

  /**
   * Comma-separated list of CC email addresses
   */
  cc_address_email_list?: string;

  /**
   * List of CC address details
   */
  cc_address_json?: Array<unknown>;

  /**
   * A short preview of the email content (usually the first few lines of the email)
   */
  content_preview?: string;

  /**
   * The sender email address, populated based on the eaccount
   */
  from_address_email?: string;

  /**
   * List of from address details
   */
  from_address_json?: Array<unknown>;

  /**
   * Indicates the interest status of the email
   */
  i_status?: number;

  /**
   * Indicates if the email is an auto-reply
   */
  is_auto_reply?: boolean;

  /**
   * Indicates if the email is focused (is in the primary tab in the Unibox)
   */
  is_focused?: number;

  /**
   * Indicates if the email is unread
   */
  is_unread?: boolean;

  /**
   * The email address of the lead that the email is associated with
   */
  lead?: string;

  /**
   * The lead id (if any)
   */
  lead_id?: string;

  /**
   * The id of the list (if the lead is part of a list)
   */
  list_id?: string;

  /**
   * Timestamp for the reminder.
   */
  reminder_ts?: string;

  /**
   * Reply-to email address
   */
  reply_to?: string;

  /**
   * The campaign step that the email is associated with
   */
  step?: string;

  /**
   * The id of the campaign subsequence that the email is associated with (it can be
   * null for manually sent emails)
   */
  subsequence_id?: string;

  /**
   * Identifier for the email thread. All the emails in the same thread have the same
   * thread ID
   */
  thread_id?: string;

  /**
   * List of to address details
   */
  to_address_json?: Array<unknown>;

  /**
   * Email type based on the life cycle of the email
   */
  ue_type?: 1 | 2 | 3 | 4;
}

export namespace CampaignEmail {
  /**
   * An object containing the email body in HTML and text format
   */
  export interface Body {
    /**
     * HTML content of the email
     */
    html?: string;

    /**
     * Text content of the email
     */
    text?: string;
  }
}

export interface EmailListResponse {
  items: Array<CampaignEmail>;

  /**
   * The filter for getting the next items after this one, this could either be a
   * UUID, a MongoDB ID, a timestamp, on an email depending on the specific API
   */
  next_starting_after?: string;
}

export interface EmailUpdateParams {
  /**
   * Indicates if the email is unread
   */
  is_unread?: boolean;

  /**
   * Timestamp for the reminder.
   */
  reminder_ts?: string;
}

export interface EmailListParams {
  assigned_to?: string;

  campaign_id?: string;

  company_domain?: string;

  /**
   * The email account that was used to send this email
   */
  eaccount?: string;

  email_type?: 'received' | 'sent' | 'manual';

  has_reminder?: boolean;

  i_status?: number;

  is_unread?: boolean;

  lead?: string;

  /**
   * The number of items to return
   */
  limit?: number;

  marked_as_done?: boolean;

  mode?: 'emode_focused' | 'emode_others' | 'emode_all';

  preview_only?: boolean;

  scheduled_only?: boolean;

  search?: string;

  sort_order?: 'asc' | 'desc';

  /**
   * The id of the email to start the list from (use the "next_starting_after" field
   * you got in a previous request to paginate)
   */
  starting_after?: string;
}

export interface EmailDeleteParams {
  body?: null;
}

export interface EmailReplyParams {
  /**
   * The email body. You can specify either the `html` or the `text` field, or both
   */
  body: EmailReplyParams.Body;

  /**
   * The email account that will be used to send this email. It has to be an email
   * account connected to your workspace
   */
  eaccount: string;

  /**
   * The id of the email to reply to
   */
  reply_to_uuid: string;

  /**
   * Subject line of the email message
   */
  subject: string;

  /**
   * The user id assigned to the lead
   */
  assigned_to?: string;

  /**
   * Comma-separated list of BCC email addresses
   */
  bcc_address_email_list?: string;

  /**
   * Comma-separated list of CC email addresses
   */
  cc_address_email_list?: string;

  /**
   * Timestamp for the reminder. If this field is included, then this email will be
   * added to the database, but will be sent at the specified timestamp
   */
  reminder_ts?: string;
}

export namespace EmailReplyParams {
  /**
   * The email body. You can specify either the `html` or the `text` field, or both
   */
  export interface Body {
    /**
     * HTML body of the email message
     */
    html?: string;

    /**
     * Text body of the email message
     */
    text?: string;
  }
}

Emails.Threads = Threads;
Emails.Unread = Unread;

export declare namespace Emails {
  export {
    type CampaignEmail as CampaignEmail,
    type EmailListResponse as EmailListResponse,
    type EmailUpdateParams as EmailUpdateParams,
    type EmailListParams as EmailListParams,
    type EmailDeleteParams as EmailDeleteParams,
    type EmailReplyParams as EmailReplyParams,
  };

  export { Threads as Threads, type ThreadMarkAsReadResponse as ThreadMarkAsReadResponse };

  export { Unread as Unread, type UnreadCountResponse as UnreadCountResponse };
}
