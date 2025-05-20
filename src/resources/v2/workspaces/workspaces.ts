// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../../core/resource';
import * as CurrentAPI from './current';
import { Current, CurrentUpdateParams, Workspace } from './current';

export class Workspaces extends APIResource {
  current: CurrentAPI.Current = new CurrentAPI.Current(this._client);
}

Workspaces.Current = Current;

export declare namespace Workspaces {
  export { Current as Current, type Workspace as Workspace, type CurrentUpdateParams as CurrentUpdateParams };
}
