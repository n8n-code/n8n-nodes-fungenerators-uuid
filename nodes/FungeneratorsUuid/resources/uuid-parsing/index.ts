import type { INodeProperties } from 'n8n-workflow';

export const uuidParsingDescription: INodeProperties[] = [
                {
			"displayName": "Operation",
			"name": "operation",
			"type": "options",
			"noDataExpression": true,
			"displayOptions": {
				"show": {
					"resource": [
						"UUID Parsing"
					]
				}
			},
			"options": [
				{
					"name": "POST Uuid",
					"value": "POST Uuid",
					"action": "POST Uuid",
					"description": "Parse a UUID string and return its version and check whether it is valid.",
					"routing": {
						"request": {
							"method": "POST",
							"url": "=/uuid"
						}
					}
				}
			],
			"default": ""
		},
		{
			"displayName": "POST /uuid",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"UUID Parsing"
					],
					"operation": [
						"POST Uuid"
					]
				}
			}
		},
		{
			"displayName": "Uuidstr",
			"name": "uuidstr",
			"required": true,
			"description": "UUID String to parse",
			"default": "",
			"type": "string",
			"routing": {
				"send": {
					"type": "query",
					"property": "uuidstr",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"UUID Parsing"
					],
					"operation": [
						"POST Uuid"
					]
				}
			}
		},
		{
			"displayName": "X Fungenerators API Secret (Header)",
			"name": "security_x_fungenerators_api_secret",
			"type": "string",
			"default": "",
			"description": "API key for X-Fungenerators-Api-Secret (header: X-Fungenerators-Api-Secret)",
			"required": false,
			"routing": {
				"request": {
					"headers": {
						"X-Fungenerators-Api-Secret": "={{ $value }}"
					}
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"UUID Parsing"
					],
					"operation": [
						"POST Uuid"
					]
				}
			}
		},
];
