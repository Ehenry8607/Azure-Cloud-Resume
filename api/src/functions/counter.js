const { app } = require('@azure/functions');
const { CosmosClient } = require('@azure/cosmos');

app.http('counter', {
    methods: ['GET'],
    authLevel: 'anonymous',
    handler: async (request, context) => {
        const client = new CosmosClient(process.env.COSMOS_CONNECTION_STRING);
        const container = client.database('ResumeDB').container('Counter');

        const { resource: item } = await container.item('1', '1').read();
        item.count += 1;
        await container.items.upsert(item);

        return {
            headers: { 'Access-Control-Allow-Origin': '*' },
            jsonBody: { count: item.count }
        };
    }
});