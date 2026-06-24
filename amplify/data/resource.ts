import { type ClientSchema, a, defineData } from '@aws-amplify/backend';

const schema = a.schema({
  Product: a
    .model({
      name: a.string().required(),
      price: a.float().required(),
      imageUrl: a.string().required(),
    })
    .authorization((allow) => [allow.publicApiKey()]), // Keeps it simple for public read/write access
});

export type Schema = ClientSchema<typeof schema>;

export const data = defineData({
  schema,
  authorizationModes: {
    defaultAuthorizationMode: 'apiKey',
    apiKeyAuthorizationStrategy: {
      expiresInDays: 30,
    },
  },
});
