// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import Instantly2 from 'instantly2';

const client = new Instantly2({
  apiKey: 'My API Key',
  baseURL: process.env['TEST_API_BASE_URL'] ?? 'http://127.0.0.1:4010',
});

describe('resource emails', () => {
  // skipped: tests are disabled for the time being
  test.skip('retrieve', async () => {
    const responsePromise = client.v2.emails.retrieve('0196ed60-9e16-7656-8d21-fae3141d222c');
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
    const responsePromise = client.v2.emails.update('0196ed60-9e16-7656-8d21-fae413cdad11');
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
      client.v2.emails.update(
        '0196ed60-9e16-7656-8d21-fae413cdad11',
        { is_unread: true, reminder_ts: '2025-05-20T11:07:25.718Z' },
        { path: '/_stainless_unknown_path' },
      ),
    ).rejects.toThrow(Instantly2.NotFoundError);
  });

  // skipped: tests are disabled for the time being
  test.skip('list', async () => {
    const responsePromise = client.v2.emails.list();
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
      client.v2.emails.list(
        {
          assigned_to: '123e4567-e89b-12d3-a456-426614174000',
          campaign_id: '123e4567-e89b-12d3-a456-426614174000',
          company_domain: 'example.com',
          eaccount: 'jon@example.com',
          email_type: 'received',
          has_reminder: true,
          i_status: 1,
          is_unread: true,
          lead: 'jondoe@example.com',
          limit: 10,
          marked_as_done: true,
          mode: 'emode_focused',
          preview_only: true,
          scheduled_only: true,
          search: 'search term',
          sort_order: 'asc',
          starting_after: '0196ed60-9e15-7d34-9d72-b774abc8cd7a',
        },
        { path: '/_stainless_unknown_path' },
      ),
    ).rejects.toThrow(Instantly2.NotFoundError);
  });

  // skipped: tests are disabled for the time being
  test.skip('delete', async () => {
    const responsePromise = client.v2.emails.delete('0196ed60-9e17-78f5-8714-d72cbf883338');
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
      client.v2.emails.delete(
        '0196ed60-9e17-78f5-8714-d72cbf883338',
        { body: null },
        { path: '/_stainless_unknown_path' },
      ),
    ).rejects.toThrow(Instantly2.NotFoundError);
  });

  // skipped: tests are disabled for the time being
  test.skip('reply: only required params', async () => {
    const responsePromise = client.v2.emails.reply({
      body: {},
      eaccount: 'jondoe@example.com',
      reply_to_uuid: '123e4567-e89b-12d3-a456-426614174000',
      subject: 'Re: Your inquiry',
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
  test.skip('reply: required and optional params', async () => {
    const response = await client.v2.emails.reply({
      body: { html: '<p>Hello, how are you?</p>', text: 'Hello, how are you?' },
      eaccount: 'jondoe@example.com',
      reply_to_uuid: '123e4567-e89b-12d3-a456-426614174000',
      subject: 'Re: Your inquiry',
      assigned_to: '0196ed60-9e15-7d34-9d72-b773103878bb',
      bcc_address_email_list: 'bcc@example.com',
      cc_address_email_list: 'cc@example.com',
      reminder_ts: '2025-05-20T11:07:34.293Z',
    });
  });
});
