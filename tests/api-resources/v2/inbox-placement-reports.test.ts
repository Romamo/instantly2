// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import Instantly2 from 'instantly2';

const client = new Instantly2({
  apiKey: 'My API Key',
  baseURL: process.env['TEST_API_BASE_URL'] ?? 'http://127.0.0.1:4010',
});

describe('resource inboxPlacementReports', () => {
  // skipped: tests are disabled for the time being
  test.skip('retrieve', async () => {
    const responsePromise = client.v2.inboxPlacementReports.retrieve('0196ed60-9e22-739d-b744-cd556f89315a');
    const rawResponse = await responsePromise.asResponse();
    expect(rawResponse).toBeInstanceOf(Response);
    const response = await responsePromise;
    expect(response).not.toBeInstanceOf(Response);
    const dataAndResponse = await responsePromise.withResponse();
    expect(dataAndResponse.data).toBe(response);
    expect(dataAndResponse.response).toBe(rawResponse);
  });

  // skipped: tests are disabled for the time being
  test.skip('list: only required params', async () => {
    const responsePromise = client.v2.inboxPlacementReports.list({
      test_id: 'd290f1ee-6c54-4b01-90e6-d701748f0851',
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
    const response = await client.v2.inboxPlacementReports.list({
      test_id: 'd290f1ee-6c54-4b01-90e6-d701748f0851',
      date_from: '2025-05-20T11:07:34.305Z',
      date_to: '2025-05-20T11:07:34.305Z',
      limit: 10,
      skip_blacklist_report: false,
      skip_spam_assassin_report: false,
      starting_after: '01956fbd-0eb1-72db-a565-82977a586084',
    });
  });
});
