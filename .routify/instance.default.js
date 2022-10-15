import { Router, createRouter } from '@roxi/routify'
import routes from './routes.default.js'

export const router = createRouter({routes})
export { Router, routes }


import '@roxi/routify/lib/buildtime/plugins/devHelper/runtime.js'