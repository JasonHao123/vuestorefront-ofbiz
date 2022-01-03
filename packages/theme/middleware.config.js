module.exports = {
  integrations: {
    ofbiz: {
      location: '@vue-storefront/ofbiz-api/server',
      configuration: {
        api: {
         url: 'http://localhost:8080' // URL of your eCommerce platform
       }
      }
    }
  }
};
