import { NodeConnectionTypes, type INodeType, type INodeTypeDescription } from 'n8n-workflow';
import { uuidGenerationDescription } from './resources/uuid-generation';
import { uuidParsingDescription } from './resources/uuid-parsing';

export class FungeneratorsUuid implements INodeType {
        description: INodeTypeDescription = {
                displayName: 'Fungenerators Uuid',
                name: 'N8nDevFungeneratorsUuid',
                icon: { light: 'file:./fungenerators-uuid.svg', dark: 'file:./fungenerators-uuid.dark.svg' },
                group: ['input'],
                version: 1,
                subtitle: '={{\$parameter["operation"] + ": " + \$parameter["resource"]}}',
                description: 'REST UUID generator with JSON/XML/JSONP support.',
                defaults: { name: 'Fungenerators Uuid' },
                usableAsTool: true,
                inputs: [NodeConnectionTypes.Main],
                outputs: [NodeConnectionTypes.Main],
                credentials: [
                        {
                                name: 'N8nDevFungeneratorsUuidApi',
                                required: true,
                        },
                ],
                requestDefaults: {
                        baseURL: '={{\$credentials.url}}',
                        headers: {
                                Accept: 'application/json',
                                'Content-Type': 'application/json',
                        },
                },
                properties: [
		{
			"displayName": "Resource",
			"name": "resource",
			"type": "options",
			"noDataExpression": true,
			"options": [
				{
					"name": "UUID Generation",
					"value": "UUID Generation",
					"description": "Generate different versions of UUID easily."
				},
				{
					"name": "UUID Parsing",
					"value": "UUID Parsing",
					"description": "Parse UUID string and check for its validity and return version details"
				}
			],
			"default": ""
		},
		...uuidGenerationDescription,
		...uuidParsingDescription
                ],
        };
}
