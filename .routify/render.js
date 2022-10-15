
        import * as module from '../src/App.svelte'
        import { renderModule } from '@roxi/routify/tools'

        export const render = url => renderModule(module, url)

import '@roxi/routify/lib/buildtime/plugins/devHelper/runtime.js'