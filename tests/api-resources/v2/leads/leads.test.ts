// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import Instantly2 from 'instantly2';

const client = new Instantly2({
  apiKey: 'My API Key',
  baseURL: process.env['TEST_API_BASE_URL'] ?? 'http://127.0.0.1:4010',
});

describe('resource leads', () => {
  // skipped: tests are disabled for the time being
  test.skip('create', async () => {
    const responsePromise = client.v2.leads.create();
    const rawResponse = await responsePromise.asResponse();
    expect(rawResponse).toBeInstanceOf(Response);
    const response = await responsePromise;
    expect(response).not.toBeInstanceOf(Response);
    const dataAndResponse = await responsePromise.withResponse();
    expect(dataAndResponse.data).toBe(response);
    expect(dataAndResponse.response).toBe(rawResponse);
  });

  // skipped: tests are disabled for the time being
  test.skip('create: request options and params are passed correctly', async () => {
    // ensure the request options are being passed correctly by passing an invalid HTTP method in order to cause an error
    await expect(
      client.v2.leads.create(
        {
          assigned_to: '0196ed60-7b24-714d-bff7-cdcdd69f58e7',
          blocklist_id: '0196ed60-9e3a-7522-bbb3-a1edced712a6',
          campaign: '0196ed60-7b24-714d-bff7-cdc6756eb8e9',
          company_name: 'Example Inc.',
          custom_variables: { has_tried_competitors: false, past_customer: true },
          email: 'example@example.com',
          first_name: 'John',
          last_name: 'Doe',
          list_id: '0196ed60-7b24-714d-bff7-cdcb63e14a85',
          lt_interest_status: 1,
          personalization: 'Hello, how are you?',
          phone: '+1234567890',
          pl_value_lead: 'High',
          skip_if_in_campaign: true,
          skip_if_in_list: true,
          skip_if_in_workspace: true,
          verify_leads_for_lead_finder: true,
          verify_leads_on_import: true,
          website: 'https://example.com',
        },
        { path: '/_stainless_unknown_path' },
      ),
    ).rejects.toThrow(Instantly2.NotFoundError);
  });

  // skipped: tests are disabled for the time being
  test.skip('retrieve', async () => {
    const responsePromise = client.v2.leads.retrieve('0196ed60-9e3b-7e86-8351-7267b1ecf34d');
    const rawResponse = await responsePromise.asResponse();
    expect(rawResponse).toBeInstanceOf(Response);
    const response = await responsePromise;
    expect(response).not.toBeInstanceOf(Response);
    const dataAndResponse = await responsePromise.withResponse();
    expect(dataAndResponse.data).toBe(response);
    expect(dataAndResponse.response).toBe(rawResponse);
  });

  // skipped: tests are disabled for the time being
  test.skip('update', async () => {
    const responsePromise = client.v2.leads.update('0196ed60-9e3d-73e0-b4d2-0c42e5c900c0');
    const rawResponse = await responsePromise.asResponse();
    expect(rawResponse).toBeInstanceOf(Response);
    const response = await responsePromise;
    expect(response).not.toBeInstanceOf(Response);
    const dataAndResponse = await responsePromise.withResponse();
    expect(dataAndResponse.data).toBe(response);
    expect(dataAndResponse.response).toBe(rawResponse);
  });

  // skipped: tests are disabled for the time being
  test.skip('update: request options and params are passed correctly', async () => {
    // ensure the request options are being passed correctly by passing an invalid HTTP method in order to cause an error
    await expect(
      client.v2.leads.update(
        '0196ed60-9e3d-73e0-b4d2-0c42e5c900c0',
        {
          assigned_to: '0196ed60-7b24-714d-bff7-cdcdd69f58e7',
          company_name: 'Example Inc.',
          custom_variables: { has_tried_competitors: false, past_customer: true },
          first_name: 'John',
          last_name: 'Doe',
          lt_interest_status: 1,
          personalization: 'Hello, how are you?',
          phone: '+1234567890',
          pl_value_lead: 'High',
          website: 'https://example.com',
        },
        { path: '/_stainless_unknown_path' },
      ),
    ).rejects.toThrow(Instantly2.NotFoundError);
  });

  // skipped: tests are disabled for the time being
  test.skip('list', async () => {
    const responsePromise = client.v2.leads.list();
    const rawResponse = await responsePromise.asResponse();
    expect(rawResponse).toBeInstanceOf(Response);
    const response = await responsePromise;
    expect(response).not.toBeInstanceOf(Response);
    const dataAndResponse = await responsePromise.withResponse();
    expect(dataAndResponse.data).toBe(response);
    expect(dataAndResponse.response).toBe(rawResponse);
  });

  // skipped: tests are disabled for the time being
  test.skip('list: request options and params are passed correctly', async () => {
    // ensure the request options are being passed correctly by passing an invalid HTTP method in order to cause an error
    await expect(
      client.v2.leads.list(
        {
          campaign: '0196ed60-987d-7d39-aac0-1c44aa52b2c3',
          contacts: ['dev@stainless.com'],
          distinct_contacts: true,
          enrichment_status: 1,
          excluded_ids: ['182bd5e5-6e1a-4fe4-a799-aa6d9a6ab26e'],
          filter: 'FILTER_VAL_CONTACTED',
          ids: ['182bd5e5-6e1a-4fe4-a799-aa6d9a6ab26e'],
          in_campaign: true,
          in_list: true,
          is_website_visitor: true,
          limit: 10,
          list_id: '0196ed60-987d-7d39-aac0-1c452eb444bc',
          organization_user_ids: ['182bd5e5-6e1a-4fe4-a799-aa6d9a6ab26e'],
          queries: [
            {
              actionType: 'email-open',
              values: {
                'lead-status': { condition: 'is', status: 1 },
                'occurrence-count': { condition: 'more', count: 1 },
                'occurrence-days': 1,
              },
            },
          ],
          search: 'John Doe',
          smart_view_id: '0196ed60-9e3b-7e86-8351-72656f21159f',
          starting_after: '01956fbd-0eb1-72db-a565-82977a586084',
        },
        { path: '/_stainless_unknown_path' },
      ),
    ).rejects.toThrow(Instantly2.NotFoundError);
  });

  // skipped: tests are disabled for the time being
  test.skip('delete', async () => {
    const responsePromise = client.v2.leads.delete('0196ed60-9e3e-7398-b028-dc714d952ca4');
    const rawResponse = await responsePromise.asResponse();
    expect(rawResponse).toBeInstanceOf(Response);
    const response = await responsePromise;
    expect(response).not.toBeInstanceOf(Response);
    const dataAndResponse = await responsePromise.withResponse();
    expect(dataAndResponse.data).toBe(response);
    expect(dataAndResponse.response).toBe(rawResponse);
  });

  // skipped: tests are disabled for the time being
  test.skip('delete: request options and params are passed correctly', async () => {
    // ensure the request options are being passed correctly by passing an invalid HTTP method in order to cause an error
    await expect(
      client.v2.leads.delete(
        '0196ed60-9e3e-7398-b028-dc714d952ca4',
        { body: null },
        { path: '/_stainless_unknown_path' },
      ),
    ).rejects.toThrow(Instantly2.NotFoundError);
  });

  // skipped: tests are disabled for the time being
  test.skip('bulkAssign: only required params', async () => {
    const responsePromise = client.v2.leads.bulkAssign({
      organization_user_ids: ['182bd5e5-6e1a-4fe4-a799-aa6d9a6ab26e'],
    });
    const rawResponse = await responsePromise.asResponse();
    expect(rawResponse).toBeInstanceOf(Response);
    const response = await responsePromise;
    expect(response).not.toBeInstanceOf(Response);
    const dataAndResponse = await responsePromise.withResponse();
    expect(dataAndResponse.data).toBe(response);
    expect(dataAndResponse.response).toBe(rawResponse);
  });

  // skipped: tests are disabled for the time being
  test.skip('bulkAssign: required and optional params', async () => {
    const response = await client.v2.leads.bulkAssign({
      organization_user_ids: ['182bd5e5-6e1a-4fe4-a799-aa6d9a6ab26e'],
      campaign: '0196ed60-9e3e-7398-b028-dc6df4ddc839',
      filter: 'test',
      ids: ['0196ed60-9e3e-7398-b028-dc70aeb102c3'],
      in_campaign: true,
      in_list: true,
      limit: 10,
      list_id: '0196ed60-9e3e-7398-b028-dc6ec6d8a83d',
      queries: [
        {
          actionType: 'email-open',
          values: {
            'lead-status': { condition: 'is', status: 5 },
            'occurrence-count': { condition: 'more', count: 5 },
            'occurrence-days': 5,
          },
        },
      ],
      search: 'test',
      smart_view_id: '0196ed60-9e3e-7398-b028-dc6f8edb7ed9',
    });
  });

  // skipped: tests are disabled for the time being
  test.skip('export', async () => {
    const responsePromise = client.v2.leads.export();
    const rawResponse = await responsePromise.asResponse();
    expect(rawResponse).toBeInstanceOf(Response);
    const response = await responsePromise;
    expect(response).not.toBeInstanceOf(Response);
    const dataAndResponse = await responsePromise.withResponse();
    expect(dataAndResponse.data).toBe(response);
    expect(dataAndResponse.response).toBe(rawResponse);
  });

  // skipped: tests are disabled for the time being
  test.skip('export: request options and params are passed correctly', async () => {
    // ensure the request options are being passed correctly by passing an invalid HTTP method in order to cause an error
    await expect(
      client.v2.leads.export(
        {
          app_connection_id: '0196ed60-9e3f-742e-9fb0-93757afc023c',
          campaign: '0196ed60-987d-7d39-aac0-1c44aa52b2c3',
          contacts: ['dev@stainless.com'],
          excluded_ids: ['182bd5e5-6e1a-4fe4-a799-aa6d9a6ab26e'],
          extra_params: { campaign_id: '123', organization_id: '123' },
          filter: 'FILTER_VAL_CONTACTED',
          ids: ['182bd5e5-6e1a-4fe4-a799-aa6d9a6ab26e'],
          in_campaign: true,
          in_list: true,
          limit: 10,
          list_id: '0196ed60-987d-7d39-aac0-1c452eb444bc',
          queries: [
            {
              actionType: 'email-open',
              values: {
                'lead-status': { condition: 'is', status: 1 },
                'occurrence-count': { condition: 'more', count: 1 },
                'occurrence-days': 1,
              },
            },
          ],
          search: 'John Doe',
        },
        { path: '/_stainless_unknown_path' },
      ),
    ).rejects.toThrow(Instantly2.NotFoundError);
  });

  // skipped: tests are disabled for the time being
  test.skip('merge: only required params', async () => {
    const responsePromise = client.v2.leads.merge({
      destination_lead_id: '0196ed60-9e3c-7723-8ddb-4bb65fb9628c',
      lead_id: '0196ed60-9e3c-7723-8ddb-4bb5c77c9335',
    });
    const rawResponse = await responsePromise.asResponse();
    expect(rawResponse).toBeInstanceOf(Response);
    const response = await responsePromise;
    expect(response).not.toBeInstanceOf(Response);
    const dataAndResponse = await responsePromise.withResponse();
    expect(dataAndResponse.data).toBe(response);
    expect(dataAndResponse.response).toBe(rawResponse);
  });

  // skipped: tests are disabled for the time being
  test.skip('merge: required and optional params', async () => {
    const response = await client.v2.leads.merge({
      destination_lead_id: '0196ed60-9e3c-7723-8ddb-4bb65fb9628c',
      lead_id: '0196ed60-9e3c-7723-8ddb-4bb5c77c9335',
    });
  });

  // skipped: tests are disabled for the time being
  test.skip('move', async () => {
    const responsePromise = client.v2.leads.move();
    const rawResponse = await responsePromise.asResponse();
    expect(rawResponse).toBeInstanceOf(Response);
    const response = await responsePromise;
    expect(response).not.toBeInstanceOf(Response);
    const dataAndResponse = await responsePromise.withResponse();
    expect(dataAndResponse.data).toBe(response);
    expect(dataAndResponse.response).toBe(rawResponse);
  });

  // skipped: tests are disabled for the time being
  test.skip('move: request options and params are passed correctly', async () => {
    // ensure the request options are being passed correctly by passing an invalid HTTP method in order to cause an error
    await expect(
      client.v2.leads.move(
        {
          assigned_to: '0196ed60-9e3e-7398-b028-dc745c33afa8',
          campaign: '0196ed60-987d-7d39-aac0-1c44aa52b2c3',
          check_duplicates_in_campaigns: true,
          contacts: ['dev@stainless.com'],
          copy_leads: true,
          esp_code: 1,
          excluded_ids: ['182bd5e5-6e1a-4fe4-a799-aa6d9a6ab26e'],
          filter: 'FILTER_VAL_CONTACTED',
          ids: ['182bd5e5-6e1a-4fe4-a799-aa6d9a6ab26e'],
          in_campaign: true,
          in_list: true,
          limit: 10,
          list_id: '0196ed60-987d-7d39-aac0-1c452eb444bc',
          queries: [
            {
              actionType: 'email-open',
              values: {
                'lead-status': { condition: 'is', status: 1 },
                'occurrence-count': { condition: 'more', count: 1 },
                'occurrence-days': 1,
              },
            },
          ],
          search: 'John Doe',
          skip_leads_in_verification: true,
          to_campaign_id: '0196ed60-9e3e-7398-b028-dc72f47632f3',
          to_list_id: '0196ed60-9e3e-7398-b028-dc735050ee8e',
        },
        { path: '/_stainless_unknown_path' },
      ),
    ).rejects.toThrow(Instantly2.NotFoundError);
  });

  // skipped: tests are disabled for the time being
  test.skip('updateInterestStatus: only required params', async () => {
    const responsePromise = client.v2.leads.updateInterestStatus({
      interest_value: 1,
      lead_email: 'test@test.com',
    });
    const rawResponse = await responsePromise.asResponse();
    expect(rawResponse).toBeInstanceOf(Response);
    const response = await responsePromise;
    expect(response).not.toBeInstanceOf(Response);
    const dataAndResponse = await responsePromise.withResponse();
    expect(dataAndResponse.data).toBe(response);
    expect(dataAndResponse.response).toBe(rawResponse);
  });

  // skipped: tests are disabled for the time being
  test.skip('updateInterestStatus: required and optional params', async () => {
    const response = await client.v2.leads.updateInterestStatus({
      interest_value: 1,
      lead_email: 'test@test.com',
      ai_interest_value: 1,
      campaign_id: '0196ed60-9e3d-73e0-b4d2-0c40e58a675c',
      disable_auto_interest: true,
      list_id: '0196ed60-9e3d-73e0-b4d2-0c41d1b758c4',
    });
  });
});
