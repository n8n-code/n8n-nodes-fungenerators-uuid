import type { INodeProperties } from 'n8n-workflow';

export const uuidGenerationDescription: INodeProperties[] = [
                {
			"displayName": "Operation",
			"name": "operation",
			"type": "options",
			"noDataExpression": true,
			"displayOptions": {
				"show": {
					"resource": [
						"UUID Generation"
					]
				}
			},
			"options": [
				{
					"name": "GET Uuid",
					"value": "GET Uuid",
					"action": "GET Uuid",
					"description": "Generate a random UUID (v4).",
					"routing": {
						"request": {
							"method": "GET",
							"url": "=/uuid"
						}
					}
				},
				{
					"name": "GET Uuid Version",
					"value": "GET Uuid Version",
					"action": "GET Uuid Version",
					"description": "Generate a random UUID (v4).",
					"routing": {
						"request": {
							"method": "GET",
							"url": "=/uuid/version/{{$parameter[\"version\"]}}"
						}
					}
				}
			],
			"default": ""
		},
		{
			"displayName": "GET /uuid",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"UUID Generation"
					],
					"operation": [
						"GET Uuid"
					]
				}
			}
		},
		{
			"displayName": "Count",
			"name": "count",
			"description": "Number of UUID's to generate (defaults to 1)",
			"default": 0,
			"type": "number",
			"routing": {
				"send": {
					"type": "query",
					"property": "count",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"UUID Generation"
					],
					"operation": [
						"GET Uuid"
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
						"UUID Generation"
					],
					"operation": [
						"GET Uuid"
					]
				}
			}
		},
		{
			"displayName": "GET /uuid/version/{version}",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"UUID Generation"
					],
					"operation": [
						"GET Uuid Version"
					]
				}
			}
		},
		{
			"displayName": "Count",
			"name": "count",
			"description": "Number of UUID's to generate (defaults to 1)",
			"default": 0,
			"type": "number",
			"routing": {
				"send": {
					"type": "query",
					"property": "count",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"UUID Generation"
					],
					"operation": [
						"GET Uuid Version"
					]
				}
			}
		},
		{
			"displayName": "Version",
			"name": "version",
			"required": true,
			"description": "Version of the UUID spec to use. (0-5), Use '0' for nil (00000000-0000-0000-0000-000000000000) UUID.",
			"default": 0,
			"type": "number",
			"displayOptions": {
				"show": {
					"resource": [
						"UUID Generation"
					],
					"operation": [
						"GET Uuid Version"
					]
				}
			}
		},
		{
			"displayName": "Type",
			"name": "type",
			"description": "For v3 and v5 of UUID Spec you can supply the type (dns/url/oid/x500/nil).",
			"default": "",
			"type": "string",
			"routing": {
				"send": {
					"type": "query",
					"property": "type",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"UUID Generation"
					],
					"operation": [
						"GET Uuid Version"
					]
				}
			}
		},
		{
			"displayName": "Text",
			"name": "text",
			"description": "For v3 and v5 of UUID Spec supply the text value for the type specified dns/url/oid/x500/nil. For example specify a dns/domain string if the type is \"dns\"",
			"default": "",
			"type": "string",
			"routing": {
				"send": {
					"type": "query",
					"property": "text",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"UUID Generation"
					],
					"operation": [
						"GET Uuid Version"
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
						"UUID Generation"
					],
					"operation": [
						"GET Uuid Version"
					]
				}
			}
		},
];
