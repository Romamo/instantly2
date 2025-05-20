// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../core/resource';
import { APIPromise } from '../../core/api-promise';
import { RequestOptions } from '../../internal/request-options';
import { path } from '../../internal/utils/path';

export class WorkspaceGroupMembers extends APIResource {
  /**
   * This endpoint allows you to send an invitation for a sub workspace to join the
   * admin workspace. The sub workspace will be added as a sub workspace of the admin
   * workspace only if the sub workspace owner accepts the invitation.
   *
   * Requires one of the following scopes: `workspace_group_members:create`,
   * `workspace_group_members:all`, `all:create`, `all:all`
   *
   * @example
   * ```ts
   * const groupMember =
   *   await client.v2.workspaceGroupMembers.create({
   *     sub_workspace_id:
   *       '0196ed60-7cb1-7701-a3ed-1648d7f91d65',
   *   });
   * ```
   */
  create(body: WorkspaceGroupMemberCreateParams, options?: RequestOptions): APIPromise<GroupMember> {
    return this._client.post('/api/v2/workspace-group-members', { body, ...options });
  }

  /**
   * Requires one of the following scopes: `workspace_group_members:read`,
   * `workspace_group_members:all`, `all:read`, `all:all`
   *
   * @example
   * ```ts
   * const groupMember =
   *   await client.v2.workspaceGroupMembers.retrieve(
   *     '0196ed60-9e6b-7505-bad6-04a5aaaa3edf',
   *   );
   * ```
   */
  retrieve(id: string, options?: RequestOptions): APIPromise<GroupMember> {
    return this._client.get(path`/api/v2/workspace-group-members/${id}`, options);
  }

  /**
   * Requires one of the following scopes: `workspace_group_members:read`,
   * `workspace_group_members:all`, `all:read`, `all:all`
   *
   * @example
   * ```ts
   * const workspaceGroupMembers =
   *   await client.v2.workspaceGroupMembers.list();
   * ```
   */
  list(
    query: WorkspaceGroupMemberListParams | null | undefined = {},
    options?: RequestOptions,
  ): APIPromise<WorkspaceGroupMemberListResponse> {
    return this._client.get('/api/v2/workspace-group-members', { query, ...options });
  }

  /**
   * Requires one of the following scopes: `workspace_group_members:delete`,
   * `workspace_group_members:all`, `all:delete`, `all:all`
   *
   * @example
   * ```ts
   * const groupMember =
   *   await client.v2.workspaceGroupMembers.delete(
   *     '0196ed60-9e6c-7ad4-a4f2-b39484864a3f',
   *   );
   * ```
   */
  delete(
    id: string,
    params: WorkspaceGroupMemberDeleteParams | null | undefined = undefined,
    options?: RequestOptions,
  ): APIPromise<GroupMember> {
    const { body } = params ?? {};
    return this._client.delete(path`/api/v2/workspace-group-members/${id}`, { body: body, ...options });
  }

  /**
   * Get the details of the admin workspace of the current workspace
   *
   * @example
   * ```ts
   * const response =
   *   await client.v2.workspaceGroupMembers.getAdmin();
   * ```
   */
  getAdmin(options?: RequestOptions): APIPromise<WorkspaceGroupMemberGetAdminResponse> {
    return this._client.get('/api/v2/workspace-group-members/admin', options);
  }
}

/**
 * A member of a workspace group. You can use the endpoints within this entity to
 * manage the members of a workspace group.
 */
export interface GroupMember {
  /**
   * The unique identifier of the workspace group member
   */
  id: string;

  /**
   * The id of the admin workspace
   */
  admin_workspace_id: string;

  status: 'pending' | 'accepted' | 'rejected';

  /**
   * The id of the sub workspace
   */
  sub_workspace_id: string;

  timestamp_created: string;

  timestamp_updated: string;

  /**
   * The name of the admin workspace.
   */
  admin_workspace_name?: string;

  /**
   * The name of the sub workspace.
   */
  sub_workspace_name?: string;
}

export interface WorkspaceGroupMemberListResponse {
  items: Array<GroupMember>;

  /**
   * The filter for getting the next items after this one, this could either be a
   * UUID, a MongoDB ID, a timestamp, on an email depending on the specific API
   */
  next_starting_after?: string;
}

export interface WorkspaceGroupMemberGetAdminResponse {
  /**
   * Whether the current workspace has an admin workspace
   */
  has_admin_workspace: boolean;

  /**
   * The workspace name of the admin workspace. When the current workspace has no
   * admin workspace, the workspace name will be "Undefined".
   */
  workspace_name: string;

  /**
   * The id of the workspace group member. You can use it to leave the admin
   * workspace by calling the DELETE /workspace-group-members/:id endpoint
   */
  workspace_group_member_id?: string;
}

export interface WorkspaceGroupMemberCreateParams {
  /**
   * The id of the sub workspace
   */
  sub_workspace_id: string;
}

export interface WorkspaceGroupMemberListParams {
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

export interface WorkspaceGroupMemberDeleteParams {
  body?: null;
}

export declare namespace WorkspaceGroupMembers {
  export {
    type GroupMember as GroupMember,
    type WorkspaceGroupMemberListResponse as WorkspaceGroupMemberListResponse,
    type WorkspaceGroupMemberGetAdminResponse as WorkspaceGroupMemberGetAdminResponse,
    type WorkspaceGroupMemberCreateParams as WorkspaceGroupMemberCreateParams,
    type WorkspaceGroupMemberListParams as WorkspaceGroupMemberListParams,
    type WorkspaceGroupMemberDeleteParams as WorkspaceGroupMemberDeleteParams,
  };
}
