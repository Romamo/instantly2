// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import Instantly2 from 'instantly2';

const client = new Instantly2({
  apiKey: 'My API Key',
  baseURL: process.env['TEST_API_BASE_URL'] ?? 'http://127.0.0.1:4010',
});

describe('resource campaigns', () => {
  // skipped: tests are disabled for the time being
  test.skip('create: only required params', async () => {
    const responsePromise = client.v2.campaigns.create({
      campaign_schedule: {
        schedules: [
          { days: {}, name: 'My Schedule', timezone: 'Etc/GMT+12', timing: { from: '09:00', to: '17:00' } },
        ],
      },
      name: 'My First Campaign',
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
    const response = await client.v2.campaigns.create({
      campaign_schedule: {
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
      name: 'My First Campaign',
      allow_risky_contacts: false,
      auto_variant_select: { trigger: 'click_rate' },
      bcc_list: ['john@doe.com'],
      cc_list: ['john@doe.com'],
      daily_limit: 100,
      daily_max_leads: 100,
      disable_bounce_protect: false,
      email_gap: 10,
      email_list: ['john@doe.com'],
      email_tag_list: ['0196ed60-7c6b-7da3-ba89-926686b48d83'],
      insert_unsubscribe_header: false,
      is_evergreen: false,
      link_tracking: true,
      match_lead_esp: false,
      open_tracking: true,
      pl_value: 100,
      prioritize_new_leads: false,
      random_wait_max: 10,
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
      stop_for_company: false,
      stop_on_auto_reply: false,
      stop_on_reply: false,
      text_only: false,
    });
  });

  // skipped: tests are disabled for the time being
  test.skip('retrieve', async () => {
    const responsePromise = client.v2.campaigns.retrieve('0196ed60-9def-737e-a0d1-a3309b44b3bd');
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
    const responsePromise = client.v2.campaigns.update('0196ed60-9df3-7dbf-86bb-f8ed4feb0573');
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
      client.v2.campaigns.update(
        '0196ed60-9df3-7dbf-86bb-f8ed4feb0573',
        {
          allow_risky_contacts: false,
          auto_variant_select: { trigger: 'click_rate' },
          bcc_list: ['john@doe.com'],
          campaign_schedule: {
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
          cc_list: ['john@doe.com'],
          daily_limit: 100,
          daily_max_leads: 100,
          disable_bounce_protect: false,
          email_gap: 10,
          email_list: ['john@doe.com'],
          email_tag_list: ['0196ed60-7c6b-7da3-ba89-926686b48d83'],
          insert_unsubscribe_header: false,
          is_evergreen: false,
          link_tracking: true,
          match_lead_esp: false,
          name: 'My First Campaign',
          open_tracking: true,
          pl_value: 100,
          prioritize_new_leads: false,
          random_wait_max: 10,
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
          stop_for_company: false,
          stop_on_auto_reply: false,
          stop_on_reply: false,
          text_only: false,
        },
        { path: '/_stainless_unknown_path' },
      ),
    ).rejects.toThrow(Instantly2.NotFoundError);
  });

  // skipped: tests are disabled for the time being
  test.skip('list', async () => {
    const responsePromise = client.v2.campaigns.list();
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
      client.v2.campaigns.list(
        {
          limit: 10,
          search: 'Summer Sale Campaign',
          starting_after: '01956fbd-0eb1-72db-a565-82977a586084',
          tag_ids: '0196ed60-9df0-7b67-aa0f-a4a642d53c9f,0196ed60-9df0-7b67-aa0f-a4a757e99c1f',
        },
        { path: '/_stainless_unknown_path' },
      ),
    ).rejects.toThrow(Instantly2.NotFoundError);
  });

  // skipped: tests are disabled for the time being
  test.skip('delete', async () => {
    const responsePromise = client.v2.campaigns.delete('0196ed60-9df4-73c4-ae10-505d46d09529');
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
      client.v2.campaigns.delete(
        '0196ed60-9df4-73c4-ae10-505d46d09529',
        { body: null },
        { path: '/_stainless_unknown_path' },
      ),
    ).rejects.toThrow(Instantly2.NotFoundError);
  });

  // skipped: tests are disabled for the time being
  test.skip('activate', async () => {
    const responsePromise = client.v2.campaigns.activate('0196ed60-9dee-7ae4-aa01-d80a7e5a21e6');
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
    const responsePromise = client.v2.campaigns.pause('0196ed60-9def-737e-a0d1-a32fc47d0488');
    const rawResponse = await responsePromise.asResponse();
    expect(rawResponse).toBeInstanceOf(Response);
    const response = await responsePromise;
    expect(response).not.toBeInstanceOf(Response);
    const dataAndResponse = await responsePromise.withResponse();
    expect(dataAndResponse.data).toBe(response);
    expect(dataAndResponse.response).toBe(rawResponse);
  });

  // skipped: tests are disabled for the time being
  test.skip('share', async () => {
    const responsePromise = client.v2.campaigns.share('0196ed60-9df4-73c4-ae10-505e2ddb640a');
    const rawResponse = await responsePromise.asResponse();
    expect(rawResponse).toBeInstanceOf(Response);
    const response = await responsePromise;
    expect(response).not.toBeInstanceOf(Response);
    const dataAndResponse = await responsePromise.withResponse();
    expect(dataAndResponse.data).toBe(response);
    expect(dataAndResponse.response).toBe(rawResponse);
  });
});
