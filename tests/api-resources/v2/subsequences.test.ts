// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import Instantly2 from 'instantly2';

const client = new Instantly2({
  apiKey: 'My API Key',
  baseURL: process.env['TEST_API_BASE_URL'] ?? 'http://127.0.0.1:4010',
});

describe('resource subsequences', () => {
  // skipped: tests are disabled for the time being
  test.skip('create: only required params', async () => {
    const responsePromise = client.v2.subsequences.create({
      conditions: {},
      name: 'Follow-up sequence',
      parent_campaign: '0196ed60-7cbf-7a74-8b26-0a9e3d22f713',
      sequences: [
        {
          steps: [
            {
              delay: 2,
              type: 'email',
              variants: [
                { body: 'Hey {{firstName}},\n\nI hope you are doing well.', subject: 'Hello {{firstName}}' },
              ],
            },
          ],
        },
      ],
      subsequence_schedule: {
        schedules: [
          { days: {}, name: 'My Schedule', timezone: 'Etc/GMT+12', timing: { from: '09:00', to: '17:00' } },
        ],
      },
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
    const response = await client.v2.subsequences.create({
      conditions: { crm_status: [1, 2, 3], reply_contains: 'yes' },
      name: 'Follow-up sequence',
      parent_campaign: '0196ed60-7cbf-7a74-8b26-0a9e3d22f713',
      sequences: [
        {
          steps: [
            {
              delay: 2,
              type: 'email',
              variants: [
                {
                  body: 'Hey {{firstName}},\n\nI hope you are doing well.',
                  subject: 'Hello {{firstName}}',
                  v_disabled: true,
                },
              ],
            },
          ],
        },
      ],
      subsequence_schedule: {
        schedules: [
          {
            days: { '0': true, '1': true, '2': true, '3': true, '4': true, '5': false, '6': false },
            name: 'My Schedule',
            timezone: 'Etc/GMT+12',
            timing: { from: '09:00', to: '17:00' },
          },
        ],
        end_date: '2025-05-20T11:07:25.674Z',
        start_date: '2025-05-20T11:07:25.674Z',
      },
    });
  });

  // skipped: tests are disabled for the time being
  test.skip('retrieve', async () => {
    const responsePromise = client.v2.subsequences.retrieve('0196ed60-9e4c-721b-8dc7-bfe3e0083df1');
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
    const responsePromise = client.v2.subsequences.update('0196ed60-9e4d-7089-86d4-8b1c58a0a988');
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
      client.v2.subsequences.update(
        '0196ed60-9e4d-7089-86d4-8b1c58a0a988',
        {
          conditions: { crm_status: [1, 2, 3], reply_contains: 'yes' },
          name: 'Follow-up sequence',
          sequences: [
            {
              steps: [
                {
                  delay: 2,
                  type: 'email',
                  variants: [
                    {
                      body: 'Hey {{firstName}},\n\nI hope you are doing well.',
                      subject: 'Hello {{firstName}}',
                      v_disabled: true,
                    },
                  ],
                },
              ],
            },
          ],
        },
        { path: '/_stainless_unknown_path' },
      ),
    ).rejects.toThrow(Instantly2.NotFoundError);
  });

  // skipped: tests are disabled for the time being
  test.skip('list: only required params', async () => {
    const responsePromise = client.v2.subsequences.list({
      parent_campaign: '123e4567-e89b-12d3-a456-426614174000',
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
  test.skip('list: required and optional params', async () => {
    const response = await client.v2.subsequences.list({
      parent_campaign: '123e4567-e89b-12d3-a456-426614174000',
      limit: 10,
      search: 'test',
      starting_after: '01956fbd-0eb1-72db-a565-82977a586084',
    });
  });

  // skipped: tests are disabled for the time being
  test.skip('delete', async () => {
    const responsePromise = client.v2.subsequences.delete('0196ed60-9e4d-7089-86d4-8b1d1c705a48');
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
      client.v2.subsequences.delete(
        '0196ed60-9e4d-7089-86d4-8b1d1c705a48',
        { body: null },
        { path: '/_stainless_unknown_path' },
      ),
    ).rejects.toThrow(Instantly2.NotFoundError);
  });

  // skipped: tests are disabled for the time being
  test.skip('duplicate: only required params', async () => {
    const responsePromise = client.v2.subsequences.duplicate('123e4567-e89b-12d3-a456-426614174000', {
      name: 'My Duplicate Subsequence',
      parent_campaign: '123e4567-e89b-12d3-a456-426614174000',
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
  test.skip('duplicate: required and optional params', async () => {
    const response = await client.v2.subsequences.duplicate('123e4567-e89b-12d3-a456-426614174000', {
      name: 'My Duplicate Subsequence',
      parent_campaign: '123e4567-e89b-12d3-a456-426614174000',
    });
  });

  // skipped: tests are disabled for the time being
  test.skip('pause', async () => {
    const responsePromise = client.v2.subsequences.pause('123e4567-e89b-12d3-a456-426614174000');
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
    const responsePromise = client.v2.subsequences.resume('123e4567-e89b-12d3-a456-426614174000');
    const rawResponse = await responsePromise.asResponse();
    expect(rawResponse).toBeInstanceOf(Response);
    const response = await responsePromise;
    expect(response).not.toBeInstanceOf(Response);
    const dataAndResponse = await responsePromise.withResponse();
    expect(dataAndResponse.data).toBe(response);
    expect(dataAndResponse.response).toBe(rawResponse);
  });
});
