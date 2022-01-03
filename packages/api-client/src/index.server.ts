import { apiClientFactory } from '@vue-storefront/core';
import type { Setttings, Endpoints } from './types';
// import getCategory from './api/getCategory';
// import getStores from './api/getStores';
import { getProduct } from './api/getProduct';

import axios from 'axios';

const onCreate = (settings) => {
  const client = axios.create({
    baseURL: settings.api.url
  });

  return {
    config: settings,
    client
  };
};

const { createApiClient } = apiClientFactory<Setttings, Endpoints>({
  onCreate,
  api: {
    getProduct
  }
});

export {
  createApiClient
};
