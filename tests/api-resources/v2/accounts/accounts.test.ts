// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import Instantly2 from 'instantly2';

const client = new Instantly2({
  apiKey: 'My API Key',
  baseURL: process.env['TEST_API_BASE_URL'] ?? 'http://127.0.0.1:4010',
});

describe('resource accounts', () => {
  // skipped: tests are disabled for the time being
  test.skip('create: only required params', async () => {
    const responsePromise = client.v2.accounts.create({
      email: 'user@example.com',
      first_name: 'John',
      imap_host: 'imap.gmail.com',
      imap_password: 'password',
      imap_port: 993,
      imap_username: 'username',
      last_name: 'Doe',
      provider_code: 2,
      smtp_host: 'smtp.gmail.com',
      smtp_password: 'password',
      smtp_port: 587,
      smtp_username: 'username',
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
    const response = await client.v2.accounts.create({
      email: 'user@example.com',
      first_name: 'John',
      imap_host: 'imap.gmail.com',
      imap_password: 'password',
      imap_port: 993,
      imap_username: 'username',
      last_name: 'Doe',
      provider_code: 2,
      smtp_host: 'smtp.gmail.com',
      smtp_password: 'password',
      smtp_port: 587,
      smtp_username: 'username',
      daily_limit: 100,
      enable_slow_ramp: false,
      inbox_placement_test_limit: false,
      reply_to: 'reply@example.com',
      sending_gap: 10,
      skip_cname_check: false,
      tracking_domain_name: 'example.com',
      tracking_domain_status: 'active',
      warmup: {
        advanced: {
          important_rate: 0.8,
          open_rate: 0.95,
          read_emulation: true,
          spam_save_rate: 0.02,
          warm_ctd: false,
          weekday_only: true,
        },
        increment: 'disabled',
        limit: 100,
        reply_rate: 0.1,
        warmup_custom_ftag: 'warmup',
      },
      warmup_custom_ftag: 'warmup',
    });
  });

  // skipped: tests are disabled for the time being
  test.skip('retrieve', async () => {
    const responsePromise = client.v2.accounts.retrieve('jon@doe.com');
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
    const responsePromise = client.v2.accounts.update('jon@doe.com');
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
      client.v2.accounts.update(
        'jon@doe.com',
        {
          daily_limit: 100,
          enable_slow_ramp: false,
          first_name: 'John',
          inbox_placement_test_limit: false,
          last_name: 'Doe',
          remove_tracking_domain: false,
          sending_gap: 10,
          skip_cname_check: false,
          tracking_domain_name: 'example.com',
          tracking_domain_status: 'active',
          warmup: {
            advanced: {
              important_rate: 0.8,
              open_rate: 0.95,
              read_emulation: true,
              spam_save_rate: 0.02,
              warm_ctd: false,
              weekday_only: true,
            },
            increment: 'disabled',
            limit: 100,
            reply_rate: 0.1,
            warmup_custom_ftag: 'warmup',
          },
        },
        { path: '/_stainless_unknown_path' },
      ),
    ).rejects.toThrow(Instantly2.NotFoundError);
  });

  // skipped: tests are disabled for the time being
  test.skip('list', async () => {
    const responsePromise = client.v2.accounts.list();
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
      client.v2.accounts.list(
        {
          limit: 10,
          provider_code: 2,
          search: 'gmail.com',
          starting_after: '2025-03-07T00:00:00.000Z',
          status: 1,
          tag_ids: '0196ed60-9dba-75cc-a094-4127d8ef298a, 0196ed60-9dba-75cc-a094-4128ad99e469',
        },
        { path: '/_stainless_unknown_path' },
      ),
    ).rejects.toThrow(Instantly2.NotFoundError);
  });

  // skipped: tests are disabled for the time being
  test.skip('delete', async () => {
    const responsePromise = client.v2.accounts.delete('jon@doe.com');
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
      client.v2.accounts.delete('jon@doe.com', { body: null }, { path: '/_stainless_unknown_path' }),
    ).rejects.toThrow(Instantly2.NotFoundError);
  });

  // skipped: tests are disabled for the time being
  test.skip('markFixed', async () => {
    const responsePromise = client.v2.accounts.markFixed('user@example.com');
    const rawResponse = await responsePromise.asResponse();
    expect(rawResponse).toBeInstanceOf(Response);
    const response = await responsePromise;
    expect(response).not.toBeInstanceOf(Response);
    const dataAndResponse = await responsePromise.withResponse();
    expect(dataAndResponse.data).toBe(response);
    expect(dataAndResponse.response).toBe(rawResponse);
  });

  // skipped: tests are disabled for the time being
  test.skip('pause', async () => {
    const responsePromise = client.v2.accounts.pause('user@example.com');
    const rawResponse = await responsePromise.asResponse();
    expect(rawResponse).toBeInstanceOf(Response);
    const response = await responsePromise;
    expect(response).not.toBeInstanceOf(Response);
    const dataAndResponse = await responsePromise.withResponse();
    expect(dataAndResponse.data).toBe(response);
    expect(dataAndResponse.response).toBe(rawResponse);
  });

  // skipped: tests are disabled for the time being
  test.skip('resume', async () => {
    const responsePromise = client.v2.accounts.resume('user@example.com');
    const rawResponse = await responsePromise.asResponse();
    expect(rawResponse).toBeInstanceOf(Response);
    const response = await responsePromise;
    expect(response).not.toBeInstanceOf(Response);
    const dataAndResponse = await responsePromise.withResponse();
    expect(dataAndResponse.data).toBe(response);
    expect(dataAndResponse.response).toBe(rawResponse);
  });

  // skipped: tests are disabled for the time being
  test.skip('warmupAnalytics: only required params', async () => {
    const responsePromise = client.v2.accounts.warmupAnalytics({ emails: ['user@example.com'] });
    const rawResponse = await responsePromise.asResponse();
    expect(rawResponse).toBeInstanceOf(Response);
    const response = await responsePromise;
    expect(response).not.toBeInstanceOf(Response);
    const dataAndResponse = await responsePromise.withResponse();
    expect(dataAndResponse.data).toBe(response);
    expect(dataAndResponse.response).toBe(rawResponse);
  });

  // skipped: tests are disabled for the time being
  test.skip('warmupAnalytics: required and optional params', async () => {
    const response = await client.v2.accounts.warmupAnalytics({ emails: ['user@example.com'] });
  });
});
