// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import Instantly2 from 'instantly2';

const client = new Instantly2({
  apiKey: 'My API Key',
  baseURL: process.env['TEST_API_BASE_URL'] ?? 'http://127.0.0.1:4010',
});

describe('resource inboxPlacementTests', () => {
  // skipped: tests are disabled for the time being
  test.skip('create: only required params', async () => {
    const responsePromise = client.v2.inboxPlacementTests.create({
      name: 'My Inbox Placement Test',
      type: 1,
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
  test.skip('create: required and optional params', async () => {
    const response = await client.v2.inboxPlacementTests.create({
      name: 'My Inbox Placement Test',
      type: 1,
      automations: [
        {
          then: {
            add_tags: ['0196ed60-7c87-7707-bde8-2c707202042e'],
            disable_slow_ramp: true,
            enable_slow_ramp: true,
            pause: true,
            pause_sending_campaigns_for: 14,
            remove_tags: ['0196ed60-7c87-7707-bde8-2c718cb60fe7'],
            webhook_url: 'https://example.com/webhook',
          },
          when: { condition: 'placement_goes_below', condition_value: 80 },
        },
      ],
      campaign_id: '0196ed60-7c86-725b-8bef-e55b55c4d89b',
      delivery_mode: 1,
      description: 'This is a test description',
      email_body: 'Hi, this is my email body',
      email_subject: 'My Email Subject',
      emails: ['john@doe.com'],
      not_sending_status: 'daily_limits_hit',
      recipients_labels: [{ esp: 'Google', region: 'North America', sub_region: 'US', type: 'Professional' }],
      run_immediately: true,
      schedule: {
        days: { '0': false, '1': false, '2': true, '3': true, '4': false, '5': false, '6': false },
        timezone: 'Etc/GMT+12',
        timing: { from: '02:30' },
      },
      sending_method: 1,
      status: 1,
      tags: ['0196ed60-7c87-7707-bde8-2c6fd1ec7233'],
      test_code: 'ptid_xQy04tXRd7Lc2t3Hikmmv',
      text_only: true,
      timestamp_next_run: '2025-05-20T11:07:25.703Z',
    });
  });

  // skipped: tests are disabled for the time being
  test.skip('retrieve', async () => {
    const responsePromise = client.v2.inboxPlacementTests.retrieve('0196ed60-9e27-71ca-b8e5-080c6100dbb8');
    const rawResponse = await responsePromise.asResponse();
    expect(rawResponse).toBeInstanceOf(Response);
    const response = await responsePromise;
    expect(response).not.toBeInstanceOf(Response);
    const dataAndResponse = await responsePromise.withResponse();
    expect(dataAndResponse.data).toBe(response);
    expect(dataAndResponse.response).toBe(rawResponse);
  });

  // skipped: tests are disabled for the time being
  test.skip('retrieve: request options and params are passed correctly', async () => {
    // ensure the request options are being passed correctly by passing an invalid HTTP method in order to cause an error
    await expect(
      client.v2.inboxPlacementTests.retrieve(
        '0196ed60-9e27-71ca-b8e5-080c6100dbb8',
        { with_metadata: true },
        { path: '/_stainless_unknown_path' },
      ),
    ).rejects.toThrow(Instantly2.NotFoundError);
  });

  // skipped: tests are disabled for the time being
  test.skip('update', async () => {
    const responsePromise = client.v2.inboxPlacementTests.update('0196ed60-9e28-7569-8928-99648e3cbcf2');
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
      client.v2.inboxPlacementTests.update(
        '0196ed60-9e28-7569-8928-99648e3cbcf2',
        {
          automations: [
            {
              then: {
                add_tags: ['0196ed60-7c87-7707-bde8-2c707202042e'],
                disable_slow_ramp: true,
                enable_slow_ramp: true,
                pause: true,
                pause_sending_campaigns_for: 14,
                remove_tags: ['0196ed60-7c87-7707-bde8-2c718cb60fe7'],
                webhook_url: 'https://example.com/webhook',
              },
              when: { condition: 'placement_goes_below', condition_value: 80 },
            },
          ],
          name: 'My Inbox Placement Test',
          schedule: {
            days: { '0': false, '1': false, '2': true, '3': true, '4': false, '5': false, '6': false },
            timezone: 'Etc/GMT+12',
            timing: { from: '02:30' },
          },
          status: 1,
        },
        { path: '/_stainless_unknown_path' },
      ),
    ).rejects.toThrow(Instantly2.NotFoundError);
  });

  // skipped: tests are disabled for the time being
  test.skip('list', async () => {
    const responsePromise = client.v2.inboxPlacementTests.list();
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
      client.v2.inboxPlacementTests.list(
        {
          limit: 10,
          search: 'test',
          sort_column: 'id',
          sort_order: 'desc',
          starting_after: '01956fbd-0eb1-72db-a565-82977a586084',
          status: 1,
        },
        { path: '/_stainless_unknown_path' },
      ),
    ).rejects.toThrow(Instantly2.NotFoundError);
  });

  // skipped: tests are disabled for the time being
  test.skip('delete', async () => {
    const responsePromise = client.v2.inboxPlacementTests.delete('0196ed60-9e28-7569-8928-996332f3db99');
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
      client.v2.inboxPlacementTests.delete(
        '0196ed60-9e28-7569-8928-996332f3db99',
        { body: null },
        { path: '/_stainless_unknown_path' },
      ),
    ).rejects.toThrow(Instantly2.NotFoundError);
  });

  // skipped: tests are disabled for the time being
  test.skip('getEspOptions', async () => {
    const responsePromise = client.v2.inboxPlacementTests.getEspOptions();
    const rawResponse = await responsePromise.asResponse();
    expect(rawResponse).toBeInstanceOf(Response);
    const response = await responsePromise;
    expect(response).not.toBeInstanceOf(Response);
    const dataAndResponse = await responsePromise.withResponse();
    expect(dataAndResponse.data).toBe(response);
    expect(dataAndResponse.response).toBe(rawResponse);
  });
});
