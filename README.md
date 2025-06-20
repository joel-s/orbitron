# Orbitron

## To run dev server

```bash
bun run dev
```

## To do: Fixes

- [x] Double or halve distances
- [x] Remove extra circle
- [ ] In auto mode, recalc on count changing to/from 0

## To do: Joel's improvement ideas

- [x] Support color numbers
- [x] Size and Color properties for 0
- [x] Improve layout using flex
- [x] Support a variable number of levels
- [x] Support "presets"
  - [x] Saving presets
  - [x] Support Joel's
  - [ ] Support browser-local
- [x] Synchronize animations
- [x] Switches
  - [x] Orbit paths as circles (retro9)
  - [x] Orbit spokes
  - [ ] Vary colors
- [ ] Transition on some properties?
- [ ] Support negative speeds (etc.)?

- [ ] Makrina: Add screenshot(s) to blog
- [ ] Ben: Opacity on colors
- [ ] Ben: Different color schemes
- [ ] Ben: Diffused/fading circles

# sv

Everything you need to build a Svelte project, powered by [`sv`](https://github.com/sveltejs/cli).

## Creating a project

If you're seeing this, you've probably already done this step. Congrats!

```bash
# create a new project in the current directory
npx sv create

# create a new project in my-app
npx sv create my-app
```

## Developing

Once you've created a project and installed dependencies with `npm install` (or `pnpm install` or `yarn`), start a development server:

```bash
npm run dev

# or start the server and open the app in a new browser tab
npm run dev -- --open
```

## Building

To create a production version of your app:

```bash
npm run build
```

You can preview the production build with `npm run preview`.

> To deploy your app, you may need to install an [adapter](https://svelte.dev/docs/kit/adapters) for your target environment.
