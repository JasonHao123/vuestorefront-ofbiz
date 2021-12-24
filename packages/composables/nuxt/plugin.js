import { integrationPlugin } from '@vue-storefront/core';

const moduleOptions = <%= serialize(options) %>;

export default integrationPlugin(({ integration }) => {
  integration.configure('ofbiz', {
    ...moduleOptions
    // other options
  });
});
