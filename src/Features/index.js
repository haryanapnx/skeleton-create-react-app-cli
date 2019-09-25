import loadable from '@loadable/component'

/* FEATURES_INJECT_IMPORT */
const Home = loadable(() => import('./Home'));

export {
  /* FEATURES_INJECT_EXPORT */
	Home,
}