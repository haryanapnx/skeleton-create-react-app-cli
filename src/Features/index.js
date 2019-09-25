import loadable from '@loadable/component'

/* PLOP_INJECT_IMPORT */
const Order = loadable(() => import('./Order'));
const Home = loadable(() => import('./Home'));

export {
  /* PLOP_INJECT_EXPORT */
	Order,
	Home,
}