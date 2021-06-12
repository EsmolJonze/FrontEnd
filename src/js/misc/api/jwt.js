import { request } from './utils';
import { sha512 } from 'js-sha512';
import { ApiHosts } from './ApiHosts';

const jwtRequest = props =>
  request({ host: ApiHosts.jwtService.host(), includeAuth: false, ...props });
const loginRequest = (email, password) =>
  jwtRequest({
    url: '/service/jwt',
    method: 'POST',
    body: {
      email,
      password,
      claimerSystem: 'web_App',
    },
  });
export const JwtApi = {
  service: {
    login: (email, password) =>
      loginRequest(email, sha512(password))
        .then(response => response)
        .catch(error => {
          if (error.response.status >= 400) {
            return loginRequest(email, password);
          }
          return error;
        }),
    externalAction: {
      validateEmail: ({ token }) =>
        jwtRequest({
          url: '/service/externalAction/validateEmail',
          method: 'POST',
          body: { token },
        }),
      signAs: ({ token }) =>
        jwtRequest({
          url: '/service/externalAction/signAs',
          method: 'POST',
          body: { token, requesterSystem: 'web_App' },
        }),
      requestRecoverPassword: ({ email }) =>
        jwtRequest({
          url: '/service/externalAction/requestRecoverPassword',
          method: 'POST',
          body: { email },
        }),
      recoverPassword: ({ token, hashedPassword }) =>
        jwtRequest({
          url: '/service/externalAction/recoverPassword',
          method: 'POST',
          body: { token, password: hashedPassword },
        }),
      logout: ({ token }) =>
        jwtRequest({
          url: '/service/externalAction/logout',
          method: 'POST',
          body: { token },
        }),
    },
  },
};
