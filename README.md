# lmaplugin-boilerplate

This is a boilerplate for creating a plugin for Laravel Mui Admin.

## Before you start

1. Replace all occurrences of `lmaplugin-boilerplate` with your plugin name.

2. Replace all occurrences of `BoilerplatePlugin` with your plugin class name.

3. Also rename the `src/BoilerplatePlugin.ts` file to your plugin class name.

## Installation

```bash
npm install
npm run build
```

## Usage

Require the plugin in your `resources/src/plugins.js` file, and add it to exported array

```js
import BoilerplatePlugin from 'lmaplugin-boilerplate';

export default [
  // ...
  BoilerplatePlugin,
];
```

