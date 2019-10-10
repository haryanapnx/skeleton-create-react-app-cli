import loadable from '@loadable/component'

/* FEATURES_INJECT_IMPORT */
const Auth = loadable(() => import('./Auth'));
const Home = loadable(() => import('./Home'));

export {
  /* FEATURES_INJECT_EXPORT */
	Auth,
	Home,
}