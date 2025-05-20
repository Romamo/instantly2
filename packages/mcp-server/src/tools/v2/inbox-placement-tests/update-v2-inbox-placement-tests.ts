// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { Tool } from '@modelcontextprotocol/sdk/types.js';
import type { Metadata } from '../../';
import Instantly2 from 'instantly2';

export const metadata: Metadata = {
  resource: 'v2.inbox_placement_tests',
  operation: 'write',
  tags: [],
};

export const tool: Tool = {
  name: 'update_v2_inbox_placement_tests',
  description:
    'Requires one of the following scopes: `inbox_placement_tests:update`, `inbox_placement_tests:all`, `all:update`, `all:all`',
  inputSchema: {
    type: 'object',
    properties: {
      id: {
        type: 'string',
      },
      automations: {
        type: 'array',
        description: 'Optional automations to trigger based on conditions',
        items: {
          type: 'object',
          properties: {
            then: {
              type: 'object',
              description: 'Actions to take when condition is met',
              properties: {
                add_tags: {
                  type: 'array',
                  items: {
                    type: 'string',
                  },
                },
                disable_slow_ramp: {
                  type: 'boolean',
                },
                enable_slow_ramp: {
                  type: 'boolean',
                },
                pause: {
                  type: 'boolean',
                },
                pause_sending_campaigns_for: {
                  type: 'number',
                  description: 'Number of days to pause sending campaigns for',
                },
                remove_tags: {
                  type: 'array',
                  items: {
                    type: 'string',
                  },
                },
                webhook_url: {
                  type: 'string',
                },
              },
              required: [],
            },
            when: {
              type: 'object',
              properties: {
                condition: {
                  type: 'string',
                  description: 'Condition for automation trigger',
                  enum: [
                    'placement_goes_below',
                    'placement_goes_above',
                    'added_to_blacklists',
                    'removed_from_blacklists',
                  ],
                },
                condition_value: {
                  type: 'number',
                  description: 'Value for condition, if applicable',
                },
              },
              required: ['condition'],
            },
          },
          required: ['then', 'when'],
        },
      },
      name: {
        type: 'string',
        description: 'Name of the inbox placement test',
      },
      schedule: {
        type: 'object',
        description: 'Specifies the date and time when the automated inbox placement tests will be sent.',
        properties: {
          days: {
            type: 'object',
            description:
              'Days of the week when the test will run, where keys are integers (0-6, 0 = Sunday) and values are booleans indicating active days.',
          },
          timezone: {
            type: 'string',
            description: 'Timezone in which the schedule is set, in IANA timezone format.',
            enum: [
              'Etc/GMT+12',
              'Etc/GMT+11',
              'Etc/GMT+10',
              'America/Anchorage',
              'America/Dawson',
              'America/Creston',
              'America/Chihuahua',
              'America/Boise',
              'America/Belize',
              'America/Chicago',
              'America/Bahia_Banderas',
              'America/Regina',
              'America/Bogota',
              'America/Detroit',
              'America/Indiana/Marengo',
              'America/Caracas',
              'America/Asuncion',
              'America/Glace_Bay',
              'America/Campo_Grande',
              'America/Anguilla',
              'America/Santiago',
              'America/St_Johns',
              'America/Sao_Paulo',
              'America/Argentina/La_Rioja',
              'America/Araguaina',
              'America/Godthab',
              'America/Montevideo',
              'America/Bahia',
              'America/Noronha',
              'America/Scoresbysund',
              'Atlantic/Cape_Verde',
              'Africa/Casablanca',
              'America/Danmarkshavn',
              'Europe/Isle_of_Man',
              'Atlantic/Canary',
              'Africa/Abidjan',
              'Arctic/Longyearbyen',
              'Europe/Belgrade',
              'Africa/Ceuta',
              'Europe/Sarajevo',
              'Africa/Algiers',
              'Africa/Windhoek',
              'Asia/Nicosia',
              'Asia/Beirut',
              'Africa/Cairo',
              'Asia/Damascus',
              'Europe/Bucharest',
              'Africa/Blantyre',
              'Europe/Helsinki',
              'Europe/Istanbul',
              'Asia/Jerusalem',
              'Africa/Tripoli',
              'Asia/Amman',
              'Asia/Baghdad',
              'Europe/Kaliningrad',
              'Asia/Aden',
              'Africa/Addis_Ababa',
              'Europe/Kirov',
              'Europe/Astrakhan',
              'Asia/Tehran',
              'Asia/Dubai',
              'Asia/Baku',
              'Indian/Mahe',
              'Asia/Tbilisi',
              'Asia/Yerevan',
              'Asia/Kabul',
              'Antarctica/Mawson',
              'Asia/Yekaterinburg',
              'Asia/Karachi',
              'Asia/Kolkata',
              'Asia/Colombo',
              'Asia/Kathmandu',
              'Antarctica/Vostok',
              'Asia/Dhaka',
              'Asia/Rangoon',
              'Antarctica/Davis',
              'Asia/Novokuznetsk',
              'Asia/Hong_Kong',
              'Asia/Krasnoyarsk',
              'Asia/Brunei',
              'Australia/Perth',
              'Asia/Taipei',
              'Asia/Choibalsan',
              'Asia/Irkutsk',
              'Asia/Dili',
              'Asia/Pyongyang',
              'Australia/Adelaide',
              'Australia/Darwin',
              'Australia/Brisbane',
              'Australia/Melbourne',
              'Antarctica/DumontDUrville',
              'Australia/Currie',
              'Asia/Chita',
              'Antarctica/Macquarie',
              'Asia/Sakhalin',
              'Pacific/Auckland',
              'Etc/GMT-12',
              'Pacific/Fiji',
              'Asia/Anadyr',
              'Asia/Kamchatka',
              'Etc/GMT-13',
              'Pacific/Apia',
            ],
          },
          timing: {
            type: 'object',
            description: 'Timing configuration for the scheduled test.',
            properties: {
              from: {
                type: 'string',
                description: 'The time of day when the test will start (24-hour format).',
              },
            },
            required: [],
          },
        },
        required: [],
      },
      status: {
        type: 'string',
        description: 'Status of the inbox placement test',
        enum: [1, 2, 3],
      },
    },
  },
};

export const handler = (client: Instantly2, args: Record<string, unknown> | undefined) => {
  const { id, ...body } = args as any;
  return client.v2.inboxPlacementTests.update(id, body);
};

export default { metadata, tool, handler };
