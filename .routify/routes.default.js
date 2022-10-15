

export default {
  "meta": {},
  "id": "_default",
  "_regex": {},
  "_paramKeys": {},
  "file": {
    "path": "src/routes/_module.svelte",
    "dir": "src/routes",
    "base": "_module.svelte",
    "ext": ".svelte",
    "name": "_module"
  },
  "asyncModule": () => import('../src/routes/_module.svelte'),
  "rootName": "default",
  "routifyDir": import.meta.url,
  "children": [
    {
      "meta": {},
      "id": "_default_index_svelte",
      "_regex": {},
      "_paramKeys": {},
      "name": "index",
      "file": {
        "path": "src/routes/index.svelte",
        "dir": "src/routes",
        "base": "index.svelte",
        "ext": ".svelte",
        "name": "index"
      },
      "asyncModule": () => import('../src/routes/index.svelte'),
      "children": []
    },
    {
      "meta": {},
      "id": "_default_sample",
      "_regex": {},
      "_paramKeys": {},
      "name": "sample",
      "module": false,
      "file": {
        "path": "src/routes/sample",
        "dir": "src/routes",
        "base": "sample",
        "ext": "",
        "name": "sample"
      },
      "children": [
        {
          "meta": {
            "reset": true
          },
          "id": "_default_sample_ignore_svelte",
          "_regex": {},
          "_paramKeys": {},
          "name": "ignore",
          "file": {
            "path": "src/routes/sample/ignore.svelte",
            "dir": "src/routes/sample",
            "base": "ignore.svelte",
            "ext": ".svelte",
            "name": "ignore"
          },
          "asyncModule": () => import('../src/routes/sample/ignore.svelte'),
          "children": []
        },
        {
          "meta": {},
          "id": "_default_sample_index_svelte",
          "_regex": {},
          "_paramKeys": {},
          "name": "index",
          "file": {
            "path": "src/routes/sample/index.svelte",
            "dir": "src/routes/sample",
            "base": "index.svelte",
            "ext": ".svelte",
            "name": "index"
          },
          "asyncModule": () => import('../src/routes/sample/index.svelte'),
          "children": []
        }
      ]
    },
    {
      "meta": {
        "dynamic": true,
        "dynamicSpread": true
      },
      "_regex": {},
      "_paramKeys": {},
      "name": "[...404]",
      "file": {
        "path": ".routify/components/[...404].svelte",
        "dir": ".routify/components",
        "base": "[...404].svelte",
        "ext": ".svelte",
        "name": "[...404]"
      },
      "asyncModule": () => import('./components/[...404].svelte'),
      "children": []
    }
  ]
}

import '@roxi/routify/lib/buildtime/plugins/devHelper/runtime.js'