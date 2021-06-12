import { Commons } from '@bloobirds-it/bloobirds-platform-js-api-library';

export const servicesEnv = (() => {
  if (
    window.location.hostname === 'app.bloobirds.com' ||
    window.location.hostname === 'beta.bloobirds.com'
  ) {
    return 'production';
  }
  if (
    window.location.hostname.indexOf('staging') > -1 ||
    window.location.hostname.indexOf('app.bloobirds.es') > -1
  ) {
    return 'staging';
  }
  if (window.location.hostname === 'app.dev-bloobirds.com') {
    return 'development';
  }
  return 'local';
})();

export const ApiHosts = (env => {
  if (env === 'staging') {
    return {
      jwtService: {
        host: () => 'https://jwt-api.staging-bloobirds.com',
      },
      restService: {
        host: () => 'https://rest-api.staging-bloobirds.com',
      },
      webService: {
        host: () => 'https://web-api.staging-bloobirds.com',
      },
      scheduleTaskService: {
        host: () => 'https://scheduler-create-task.staging-bloobirds.com',
      },
      bobjectService: {
        host: () => 'https://bobject-api.staging-bloobirds.com',
      },
      callService: {
        host: () => 'https://call-api.staging-bloobirds.com',
      },
      websocket: {
        host: () => 'wss://jdnj0r8oqb.execute-api.eu-central-1.amazonaws.com/staging',
      },
    };
  }
  if (env === 'production') {
    return {
      jwtService: {
        host: () => 'https://jwt-api.bloobirds.com',
      },
      restService: {
        host: () => 'https://rest-api.bloobirds.com',
      },
      webService: {
        host: () => 'https://web-api.bloobirds.com',
      },
      scheduleTaskService: {
        host: () => 'https://scheduler-create-task.bloobirds.com',
      },
      bobjectService: {
        host: () => 'https://bobject-api.bloobirds.com',
      },
      callService: {
        host: () => 'https://call-api.bloobirds.com',
      },
      websocket: {
        host: () => 'wss://frontend-ws.bloobirds.com/',
      },
    };
  }
  if (env === 'development') {
    return {
      jwtService: {
        host: () => 'https://jwt-api.dev-bloobirds.com',
      },
      restService: {
        host: () => 'https://rest-api.dev-bloobirds.com',
      },
      webService: {
        host: () => 'https://web-api.dev-bloobirds.com',
      },
      scheduleTaskService: {
        host: () => 'https://scheduler-create-task.dev-bloobirds.com',
      },
      bobjectService: {
        host: () => 'https://bobject-api.dev-bloobirds.com',
      },
      callService: {
        host: () => 'https://call-api.dev-bloobirds.com',
      },
      websocket: {
        host: () => 'wss://frontend-ws.dev-bloobirds.com/',
      },
    };
  }
  return {
    jwtService: {
      host: () => `http://${window.location.hostname}:8082`,
    },
    restService: {
      host: () => `http://${window.location.hostname}:8080`,
    },
    webService: {
      host: () => `http://${window.location.hostname}:8081`,
    },
    scheduleTaskService: {
      host: () => `http://${window.location.hostname}:8083`,
    },
    bobjectService: {
      host: () => `http://${window.location.hostname}:8084`,
    },
    callService: {
      host: () => `http://${window.location.hostname}:8086`,
    },
    websocket: {
      host: () => 'ws://localhost:7070/ws',
    },
  };
})(process.env.ENV || servicesEnv);

export const getAppEnvironment = () => {
  if (process.env.ENV) {
    return Commons.Environment[process.env.ENV.toUpperCase()];
  }

  if (
    window.location.hostname === 'app.bloobirds.com' ||
    window.location.hostname === 'beta.bloobirds.com'
  ) {
    return Commons.Environment.PRODUCTION;
  }
  if (
    window.location.hostname.indexOf('staging') > -1 ||
    window.location.hostname.indexOf('app.bloobirds.es') > -1
  ) {
    return Commons.Environment.STAGING;
  }
  if (window.location.hostname === 'app.dev-bloobirds.com') {
    return Commons.Environment.DEVELOPMENT;
  }
  return Commons.Environment.LOCAL;
};
