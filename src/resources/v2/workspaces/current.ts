// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../../core/resource';
import { APIPromise } from '../../../core/api-promise';
import { RequestOptions } from '../../../internal/request-options';

export class Current extends APIResource {
  /**
   * Get your current workspace details. Note that this endpoint doesn't require any
   * parameters. It will return the workspace based on the API key sent in the
   * headers.
   *
   * Requires one of the following scopes: `workspaces:read`, `workspaces:all`,
   * `all:read`, `all:all`
   *
   * @example
   * ```ts
   * const workspace =
   *   await client.v2.workspaces.current.retrieve();
   * ```
   */
  retrieve(options?: RequestOptions): APIPromise<Workspace> {
    return this._client.get('/api/v2/workspaces/current', options);
  }

  /**
   * Update your current workspace details. Note that this endpoint doesn't require
   * any parameters. It will update the workspace based on the API key sent in the
   * headers.
   *
   * Requires one of the following scopes: `workspaces:update`, `workspaces:all`,
   * `all:update`, `all:all`
   *
   * @example
   * ```ts
   * const workspace =
   *   await client.v2.workspaces.current.update();
   * ```
   */
  update(body: CurrentUpdateParams | null | undefined = {}, options?: RequestOptions): APIPromise<Workspace> {
    return this._client.patch('/api/v2/workspaces/current', { body, ...options });
  }
}

/**
 * A workspace entity representing a workspace
 */
export interface Workspace {
  /**
   * Unique identifier for the workspace
   */
  id: string;

  /**
   * Name of the workspace
   */
  name: string;

  /**
   * User ID of the workspace owner
   */
  owner: string;

  /**
   * Timestamp when the workspace was created
   */
  timestamp_created: string;

  /**
   * Timestamp when the workspace was last updated
   */
  timestamp_updated: string;

  /**
   * Whether to add unsubscribes to block list
   */
  add_unsub_to_block?: boolean;

  /**
   * Default value for opportunities
   */
  default_opportunity_value?: number;

  /**
   * The domain for the white label agency mode
   */
  org_client_domain?: string;

  /**
   * URL to workspace logo
   */
  org_logo_url?: string;

  /**
   * Plan ID for workspace
   */
  plan_id?: string;

  /**
   * Plan ID for CRM
   */
  plan_id_crm?: string;

  /**
   * Plan ID for inbox placement
   */
  plan_id_inbox_placement?: string;

  /**
   * Plan ID for leadfinder
   */
  plan_id_leadfinder?: string;

  /**
   * Plan ID for verification service
   */
  plan_id_verification?: Workspace.PlanIDVerification;

  /**
   * Plan ID for website visitor tracking
   */
  plan_id_website_visitor?: string;
}

export namespace Workspace {
  /**
   * Plan ID for verification service
   */
  export interface PlanIDVerification {
    product_id?: string;

    quantity?: number;

    timestamp_updated?: string;
  }
}

export interface CurrentUpdateParams {
  /**
   * Name of the workspace
   */
  name?: string;
}

export declare namespace Current {
  export { type Workspace as Workspace, type CurrentUpdateParams as CurrentUpdateParams };
}
