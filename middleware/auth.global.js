export default defineNuxtRouteMiddleware(async (to, from) => {
  const intendedRoute = useCookie('intended_route');

  if (['login', 'public', 'blank'].includes(to.meta.layout)) return;
});
