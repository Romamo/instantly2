// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import type { Instantly2 } from '../client';

export abstract class APIResource {
  protected _client: Instantly2;

  constructor(client: Instantly2) {
    this._client = client;
  }
}
