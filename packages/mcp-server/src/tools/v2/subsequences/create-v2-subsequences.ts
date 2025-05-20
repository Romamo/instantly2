// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { Tool } from '@modelcontextprotocol/sdk/types.js';
import type { Metadata } from '../../';
import Instantly2 from 'instantly2';

export const metadata: Metadata = {
  resource: 'v2.subsequences',
  operation: 'write',
  tags: [],
};

export const tool: Tool = {
  name: 'create_v2_subsequences',
  description:
    'Requires one of the following scopes: `subsequences:create`, `subsequences:all`, `all:create`, `all:all`',
  inputSchema: {
    type: 'object',
    properties: {
      conditions: {
        type: 'object',
        description: 'Conditions that trigger the subsequence',
        properties: {
          crm_status: {
            type: 'array',
            items: {
              type: 'number',
            },
          },
          reply_contains: {
            type: 'string',
          },
        },
        required: [],
      },
      name: {
        type: 'string',
        description: 'Name of the subsequence',
      },
      parent_campaign: {
        type: 'string',
        description: 'ID of the parent campaign',
      },
      sequences: {
        type: 'array',
        description:
          'List of sequences (the actual email copy). Even though this field is an array, only the first element is used, so please provide only one array item, and add the steps to that array',
        items: {
          type: 'object',
          properties: {
            steps: {
              type: 'array',
              items: {
                type: 'object',
                properties: {
                  delay: {
                    type: 'number',
                    description: 'The number of days to wait before sending the NEXT email',
                  },
                  type: {
                    type: 'string',
                    description:
                      "Type of step. This has to be 'email' always - it's the only supported type for now",
                    enum: ['email'],
                  },
                  variants: {
                    type: 'array',
                    items: {
                      type: 'object',
                      properties: {
                        body: {
                          type: 'string',
                        },
                        subject: {
                          type: 'string',
                        },
                        v_disabled: {
                          type: 'boolean',
                          description:
                            'Whether this variant is disabled. By default, all the variants are enabled. Please set this to true if you want to disable this variant',
                        },
                      },
                      required: ['body', 'subject'],
                    },
                  },
                },
                required: ['delay', 'type', 'variants'],
              },
            },
          },
          required: ['steps'],
        },
      },
      subsequence_schedule: {
        type: 'object',
        description: 'Schedule configuration for the subsequence',
        properties: {
          schedules: {
            type: 'array',
            items: {
              type: 'object',
              properties: {
                days: {
                  type: 'object',
                  properties: {
                    '0': {
                      type: 'boolean',
                    },
                    '1': {
                      type: 'boolean',
                    },
                    '2': {
                      type: 'boolean',
                    },
                    '3': {
                      type: 'boolean',
                    },
                    '4': {
                      type: 'boolean',
                    },
                    '5': {
                      type: 'boolean',
                    },
                    '6': {
                      type: 'boolean',
                    },
                  },
                  required: [],
                },
                name: {
                  type: 'string',
                },
                timezone: {
                  type: 'string',
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
                  properties: {
                    from: {
                      type: 'string',
                    },
                    to: {
                      type: 'string',
                    },
                  },
                  required: ['from', 'to'],
                },
              },
              required: ['days', 'name', 'timezone', 'timing'],
            },
          },
          end_date: {
            type: 'string',
            format: 'date-time',
          },
          start_date: {
            type: 'string',
            format: 'date-time',
          },
        },
        required: ['schedules'],
      },
    },
  },
};

export const handler = (client: Instantly2, args: Record<string, unknown> | undefined) => {
  const body = args as any;
  return client.v2.subsequences.create(body);
};

export default { metadata, tool, handler };
