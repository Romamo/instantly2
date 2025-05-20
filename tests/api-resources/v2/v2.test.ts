// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import Instantly2 from 'instantly2';

const client = new Instantly2({
  apiKey: 'My API Key',
  baseURL: process.env['TEST_API_BASE_URL'] ?? 'http://127.0.0.1:4010',
});

describe('resource v2', () => {
  // skipped: tests are disabled for the time being
  test.skip('createAPIKey: only required params', async () => {
    const responsePromise = client.v2.createAPIKey({ name: 'My API Key', scopes: ['campaigns:create'] });
    const rawResponse = await responsePromise.asResponse();
    expect(rawResponse).toBeInstanceOf(Response);
    const response = await responsePromise;
    expect(response).not.toBeInstanceOf(Response);
    const dataAndResponse = await responsePromise.withResponse();
    expect(dataAndResponse.data).toBe(response);
    expect(dataAndResponse.response).toBe(rawResponse);
  });

  // skipped: tests are disabled for the time being
  test.skip('createAPIKey: required and optional params', async () => {
    const response = await client.v2.createAPIKey({ name: 'My API Key', scopes: ['campaigns:create'] });
  });

  // skipped: tests are disabled for the time being
  test.skip('getAccountCampaignMappings', async () => {
    const responsePromise = client.v2.getAccountCampaignMappings('user@example.com');
    const rawResponse = await responsePromise.asResponse();
    expect(rawResponse).toBeInstanceOf(Response);
    const response = await responsePromise;
    expect(response).not.toBeInstanceOf(Response);
    const dataAndResponse = await responsePromise.withResponse();
    expect(dataAndResponse.data).toBe(response);
    expect(dataAndResponse.response).toBe(rawResponse);
  });

  // skipped: tests are disabled for the time being
  test.skip('getAccountCampaignMappings: request options and params are passed correctly', async () => {
    // ensure the request options are being passed correctly by passing an invalid HTTP method in order to cause an error
    await expect(
      client.v2.getAccountCampaignMappings(
        'user@example.com',
        { limit: 10, starting_after: '2025-03-07T00:00:00.000Z' },
        { path: '/_stainless_unknown_path' },
      ),
    ).rejects.toThrow(Instantly2.NotFoundError);
  });

  // skipped: tests are disabled for the time being
  test.skip('listAPIKeys', async () => {
    const responsePromise = client.v2.listAPIKeys();
    const rawResponse = await responsePromise.asResponse();
    expect(rawResponse).toBeInstanceOf(Response);
    const response = await responsePromise;
    expect(response).not.toBeInstanceOf(Response);
    const dataAndResponse = await responsePromise.withResponse();
    expect(dataAndResponse.data).toBe(response);
    expect(dataAndResponse.response).toBe(rawResponse);
  });

  // skipped: tests are disabled for the time being
  test.skip('listAPIKeys: request options and params are passed correctly', async () => {
    // ensure the request options are being passed correctly by passing an invalid HTTP method in order to cause an error
    await expect(
      client.v2.listAPIKeys(
        { limit: 10, starting_after: '01956fbd-0eb1-72db-a565-82977a586084' },
        { path: '/_stainless_unknown_path' },
      ),
    ).rejects.toThrow(Instantly2.NotFoundError);
  });

  // skipped: tests are disabled for the time being
  test.skip('listAuditLogs', async () => {
    const responsePromise = client.v2.listAuditLogs();
    const rawResponse = await responsePromise.asResponse();
    expect(rawResponse).toBeInstanceOf(Response);
    const response = await responsePromise;
    expect(response).not.toBeInstanceOf(Response);
    const dataAndResponse = await responsePromise.withResponse();
    expect(dataAndResponse.data).toBe(response);
    expect(dataAndResponse.response).toBe(rawResponse);
  });

  // skipped: tests are disabled for the time being
  test.skip('listAuditLogs: request options and params are passed correctly', async () => {
    // ensure the request options are being passed correctly by passing an invalid HTTP method in order to cause an error
    await expect(
      client.v2.listAuditLogs(
        {
          activity_type: 1,
          limit: 10,
          search: 'login',
          starting_after: '01956fbd-0eb1-72db-a565-82977a586084',
        },
        { path: '/_stainless_unknown_path' },
      ),
    ).rejects.toThrow(Instantly2.NotFoundError);
  });

  // skipped: tests are disabled for the time being
  test.skip('listBackgroundJobs', async () => {
    const responsePromise = client.v2.listBackgroundJobs();
    const rawResponse = await responsePromise.asResponse();
    expect(rawResponse).toBeInstanceOf(Response);
    const response = await responsePromise;
    expect(response).not.toBeInstanceOf(Response);
    const dataAndResponse = await responsePromise.withResponse();
    expect(dataAndResponse.data).toBe(response);
    expect(dataAndResponse.response).toBe(rawResponse);
  });

  // skipped: tests are disabled for the time being
  test.skip('listBackgroundJobs: request options and params are passed correctly', async () => {
    // ensure the request options are being passed correctly by passing an invalid HTTP method in order to cause an error
    await expect(
      client.v2.listBackgroundJobs(
        {
          entity_id: '676f3caadedbfe9abea3bab4',
          entity_type: 'list',
          excluded_ids: '676f3caadedbfe9abea3bab4',
          ids: '676f3caadedbfe9abea3bab4',
          included_ids: '676f3caadedbfe9abea3bab4',
          limit: 10,
          sort_column: 'created_at',
          sort_order: 'desc',
          starting_after: '507f1f77bcf86cd799439011',
          status: 'pending,in-progress',
          type: 'move-leads',
        },
        { path: '/_stainless_unknown_path' },
      ),
    ).rejects.toThrow(Instantly2.NotFoundError);
  });
});
