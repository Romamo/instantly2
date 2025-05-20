// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import Instantly2 from 'instantly2';

const client = new Instantly2({
  apiKey: 'My API Key',
  baseURL: process.env['TEST_API_BASE_URL'] ?? 'http://127.0.0.1:4010',
});

describe('resource inboxPlacementAnalytics', () => {
  // skipped: tests are disabled for the time being
  test.skip('retrieve', async () => {
    const responsePromise = client.v2.inboxPlacementAnalytics.retrieve(
      '0196ed60-9e1d-7dd8-8a52-347cb4a73599',
    );
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
    const responsePromise = client.v2.inboxPlacementAnalytics.list({
      test_id: '0196ed60-9e1c-7ac7-9f15-6783e633b06f',
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
    const response = await client.v2.inboxPlacementAnalytics.list({
      test_id: '0196ed60-9e1c-7ac7-9f15-6783e633b06f',
      date_from: '2025-05-20T11:07:34.300Z',
      date_to: '2025-05-20T11:07:34.300Z',
      limit: 10,
      recipient_esp: '1,2',
      recipient_geo: '1,2',
      recipient_type: '1,2',
      sender_email: 'john@doe.com',
      starting_after: '01956fbd-0eb1-72db-a565-82977a586084',
    });
  });

  // skipped: tests are disabled for the time being
  test.skip('getDeliverabilityInsights: only required params', async () => {
    const responsePromise = client.v2.inboxPlacementAnalytics.getDeliverabilityInsights({
      test_id: '0196ed60-9e1e-7948-b02d-db80420744b6',
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
  test.skip('getDeliverabilityInsights: required and optional params', async () => {
    const response = await client.v2.inboxPlacementAnalytics.getDeliverabilityInsights({
      test_id: '0196ed60-9e1e-7948-b02d-db80420744b6',
      date_from: '2025-05-20T11:07:34.302Z',
      date_to: '2025-05-20T11:07:34.302Z',
      previous_date_from: '2025-05-20T11:07:34.302Z',
      previous_date_to: '2025-05-20T11:07:34.302Z',
      recipient_esp: [1, 2],
      recipient_geo: [1],
      recipient_type: [1],
      show_previous: true,
    });
  });

  // skipped: tests are disabled for the time being
  test.skip('getStatsByDate: only required params', async () => {
    const responsePromise = client.v2.inboxPlacementAnalytics.getStatsByDate({
      test_id: '0196ed60-9e1e-7948-b02d-db82e2862c87',
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
  test.skip('getStatsByDate: required and optional params', async () => {
    const response = await client.v2.inboxPlacementAnalytics.getStatsByDate({
      test_id: '0196ed60-9e1e-7948-b02d-db82e2862c87',
      date_from: '2025-05-20T11:07:34.302Z',
      date_to: '2025-05-20T11:07:34.302Z',
      recipient_esp: [1, 2],
      recipient_geo: [1],
      recipient_type: [1],
      sender_email: 'john@doe.com',
    });
  });

  // skipped: tests are disabled for the time being
  test.skip('getStatsByTestID: only required params', async () => {
    const responsePromise = client.v2.inboxPlacementAnalytics.getStatsByTestID({ test_ids: ['string'] });
    const rawResponse = await responsePromise.asResponse();
    expect(rawResponse).toBeInstanceOf(Response);
    const response = await responsePromise;
    expect(response).not.toBeInstanceOf(Response);
    const dataAndResponse = await responsePromise.withResponse();
    expect(dataAndResponse.data).toBe(response);
    expect(dataAndResponse.response).toBe(rawResponse);
  });

  // skipped: tests are disabled for the time being
  test.skip('getStatsByTestID: required and optional params', async () => {
    const response = await client.v2.inboxPlacementAnalytics.getStatsByTestID({
      test_ids: ['string'],
      date_from: '2025-05-20T11:07:34.301Z',
      date_to: '2025-05-20T11:07:34.301Z',
      recipient_esp: [1, 2],
      recipient_geo: [1],
      recipient_type: [1],
      sender_email: 'john@doe.com',
    });
  });
});
