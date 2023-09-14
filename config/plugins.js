module.exports = {
    'qrcode-generator': {
      enabled: true,
      config: {
        contentTypes: [
          {
            uid: 'api::form-data.form-data',
            targetField: 'slug',
            frontend: {
              basePath: '/cartels',
            },
          },
        ],
      },
    },
  };