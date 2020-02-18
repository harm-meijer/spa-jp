export default {
  ct: {
    auth: {
      host: 'https://auth.europe-west1.gcp.commercetools.com',
      projectKey: 'harm-sandbox-3',
      credentials: {
        clientId: 'tf9yTOHqKOWre2IPKu6pSFy2',
        clientSecret: 'H2Lh98vHFj302357STXQjhATBHWIHaKr',
      },
      // eslint-disable-next-line max-len
      scopes: ['manage_my_shopping_lists:harm-sandbox-3 manage_my_profile:harm-sandbox-3 manage_my_payments:harm-sandbox-3 create_anonymous_token:harm-sandbox-3 manage_my_orders:harm-sandbox-3 view_products:harm-sandbox-3 view_published_products:harm-sandbox-3'],
    },
    api: 'https://api.europe-west1.gcp.commercetools.com',
  },
  languages: {
    en: 'English',
    de: 'Deutsch',
    jp: '日本語',
  },
  countries: {
    DE: 'Deutschland',
    US: 'United States',
  },
  formats: {
    number: {
      DE: {
        currency: {
          style: 'currency',
          currency: 'EUR',
          currencyDisplay: 'symbol',
        },
      },
      US: {
        currency: {
          style: 'currency',
          currency: 'USD',
        },
      },
    },
    datetime: {
      US: {
        short: {
          year: 'numeric',
          month: 'short',
          day: 'numeric',
        },
      },
      DE: {
        short: {
          year: 'numeric',
          month: 'short',
          day: 'numeric',
        },
      },
    },
  },
  categories: {
    salesExternalId: '6',
  },
};
