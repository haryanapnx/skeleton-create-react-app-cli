import loadable from '@loadable/component'

/* PLOP_INJECT_IMPORT */
const ForgotAkun = loadable(() => import('./ForgotAkun'));
const ForgotPassword = loadable(() => import('./ForgotPassword'));
const Order = loadable(() => import('./Order'));
const Home = loadable(() => import('./Home'));

export {
  /* PLOP_INJECT_EXPORT */
	ForgotAkun,
	ForgotPassword,
	Order,
	Home,
}