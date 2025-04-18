export const endpoints = {
  auth: {
    login: '/auth/login',
    register: '/auth/register',
    logout: '/auth/logout',
    me: '/auth/me',
  },
  documents: {
    list: '/documents',
    create: '/documents',
    get: (id: string) => `/documents/${id}`,
    update: (id: string) => `/documents/${id}`,
    delete: (id: string) => `/documents/${id}`,
  },
  services: {
    list: '/services',
    get: (id: string) => `/services/${id}`,
  },
  newsletter: {
    subscribe: '/newsletter/subscribe',
  },
};
