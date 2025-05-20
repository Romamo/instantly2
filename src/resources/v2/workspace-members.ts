// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../core/resource';
import { APIPromise } from '../../core/api-promise';
import { RequestOptions } from '../../internal/request-options';
import { path } from '../../internal/utils/path';

export class WorkspaceMembers extends APIResource {
  /**
   * Requires one of the following scopes: `workspace_members:create`,
   * `workspace_members:all`, `all:create`, `all:all`
   *
   * @example
   * ```ts
   * const workspaceMember =
   *   await client.v2.workspaceMembers.create({
   *     email: 'user@example.com',
   *     role: 'editor',
   *   });
   * ```
   */
  create(body: WorkspaceMemberCreateParams, options?: RequestOptions): APIPromise<WorkspaceMember> {
    return this._client.post('/api/v2/workspace-members', { body, ...options });
  }

  /**
   * Requires one of the following scopes: `workspace_members:read`,
   * `workspace_members:all`, `all:read`, `all:all`
   *
   * @example
   * ```ts
   * const workspaceMember =
   *   await client.v2.workspaceMembers.retrieve(
   *     '0196ed60-9e70-752f-8d49-fda3eca84c92',
   *   );
   * ```
   */
  retrieve(id: string, options?: RequestOptions): APIPromise<WorkspaceMember> {
    return this._client.get(path`/api/v2/workspace-members/${id}`, options);
  }

  /**
   * Requires one of the following scopes: `workspace_members:update`,
   * `workspace_members:all`, `all:update`, `all:all`
   *
   * @example
   * ```ts
   * const workspaceMember =
   *   await client.v2.workspaceMembers.update(
   *     '0196ed60-9e70-752f-8d49-fda4265bcbda',
   *   );
   * ```
   */
  update(
    id: string,
    body: WorkspaceMemberUpdateParams | null | undefined = {},
    options?: RequestOptions,
  ): APIPromise<WorkspaceMember> {
    return this._client.patch(path`/api/v2/workspace-members/${id}`, { body, ...options });
  }

  /**
   * Requires one of the following scopes: `workspace_members:read`,
   * `workspace_members:all`, `all:read`, `all:all`
   *
   * @example
   * ```ts
   * const workspaceMembers =
   *   await client.v2.workspaceMembers.list();
   * ```
   */
  list(
    query: WorkspaceMemberListParams | null | undefined = {},
    options?: RequestOptions,
  ): APIPromise<WorkspaceMemberListResponse> {
    return this._client.get('/api/v2/workspace-members', { query, ...options });
  }

  /**
   * Requires one of the following scopes: `workspace_members:delete`,
   * `workspace_members:all`, `all:delete`, `all:all`
   *
   * @example
   * ```ts
   * const workspaceMember =
   *   await client.v2.workspaceMembers.delete(
   *     '0196ed60-9e71-7015-9b9e-882d727ac21d',
   *   );
   * ```
   */
  delete(
    id: string,
    params: WorkspaceMemberDeleteParams | null | undefined = undefined,
    options?: RequestOptions,
  ): APIPromise<WorkspaceMember> {
    const { body } = params ?? {};
    return this._client.delete(path`/api/v2/workspace-members/${id}`, { body: body, ...options });
  }
}

/**
 * A member of a workspace with associated user details
 */
export interface WorkspaceMember {
  /**
   * Unique identifier for the workspace member
   */
  id: string;

  /**
   * Whether the member has accepted the workspace invitation
   */
  accepted: boolean;

  /**
   * Email address of the workspace member
   */
  email: string;

  /**
   * THe role of the workspace member defining their access level. While the "owner"
   * role is listed in the enum, it cannot be created via the API, and is only
   * assigned to the user who creates the workspace.
   */
  role: 'owner' | 'admin' | 'editor' | 'view' | 'client';

  /**
   * Timestamp when the workspace member was created
   */
  timestamp_created: string;

  /**
   * User ID of the workspace member
   */
  user_id: string;

  /**
   * ID of the workspace this member belongs to
   */
  workspace_id: string;

  /**
   * ID of the user who added this member to the workspace
   */
  issuer_id?: string;
}

export interface WorkspaceMemberListResponse {
  items: Array<WorkspaceMember>;

  /**
   * The filter for getting the next items after this one, this could either be a
   * UUID, a MongoDB ID, a timestamp, on an email depending on the specific API
   */
  next_starting_after?: string;
}

export interface WorkspaceMemberCreateParams {
  /**
   * Email address of the workspace member
   */
  email: string;

  /**
   * THe role of the workspace member defining their access level. While the "owner"
   * role is listed in the enum, it cannot be created via the API, and is only
   * assigned to the user who creates the workspace.
   */
  role: 'owner' | 'admin' | 'editor' | 'view' | 'client';
}

export interface WorkspaceMemberUpdateParams {
  /**
   * THe role of the workspace member defining their access level. While the "owner"
   * role is listed in the enum, it cannot be created via the API, and is only
   * assigned to the user who creates the workspace.
   */
  role?: 'owner' | 'admin' | 'editor' | 'view' | 'client';
}

export interface WorkspaceMemberListParams {
  /**
   * The number of items to return
   */
  limit?: number;

  /**
   * The ID of the last item in the previous page - used for pagination. You can use
   * the value of the `next_starting_after` field from the previous response.
   */
  starting_after?: string;
}

export interface WorkspaceMemberDeleteParams {
  body?: null;
}

export declare namespace WorkspaceMembers {
  export {
    type WorkspaceMember as WorkspaceMember,
    type WorkspaceMemberListResponse as WorkspaceMemberListResponse,
    type WorkspaceMemberCreateParams as WorkspaceMemberCreateParams,
    type WorkspaceMemberUpdateParams as WorkspaceMemberUpdateParams,
    type WorkspaceMemberListParams as WorkspaceMemberListParams,
    type WorkspaceMemberDeleteParams as WorkspaceMemberDeleteParams,
  };
}
