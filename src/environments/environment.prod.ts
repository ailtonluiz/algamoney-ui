export const environment = {
  production: true,
  apiUrl: 'https://algaworkmoney-api.herokuapp.com',

  tokenAllowedDomains: [ new RegExp('algamoney-api.herokuapp.com') ],
  tokenDisallowedRoutes: [ new RegExp('\/oauth\/token') ]
};
