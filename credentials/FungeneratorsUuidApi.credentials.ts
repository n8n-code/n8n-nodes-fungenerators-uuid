import type {
        IAuthenticateGeneric,
        Icon,
        ICredentialType,
        INodeProperties,
} from 'n8n-workflow';

export class FungeneratorsUuidApi implements ICredentialType {
        name = 'N8nDevFungeneratorsUuidApi';

        displayName = 'Fungenerators Uuid API';

        icon: Icon = { light: 'file:../nodes/FungeneratorsUuid/fungenerators-uuid.svg', dark: 'file:../nodes/FungeneratorsUuid/fungenerators-uuid.dark.svg' };

        documentationUrl = '';

        properties: INodeProperties[] = [
          {
                        displayName: 'Base URL',
                        name: 'url',
                        type: 'string',
                        default: 'https://api.fungenerators.com',
                        required: true,
                        placeholder: 'https://api.fungenerators.com',
                        description: 'The base URL of your Fungenerators Uuid API server',
                },
                {
                        displayName: 'API Key',
                        name: 'apiKey',
                        type: 'string',
                        typeOptions: { password: true },
                        default: '',
                        required: false,
                },
        
        ];

  authenticate: IAuthenticateGeneric = {
                type: 'generic',
                properties: {
                        headers: {
                                'X-Fungenerators-Api-Secret': '={{$credentials.apiKey}}',
                        },
                },
        };


}
