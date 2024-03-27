# Decentralized Mail Finance Protocol

This repository contains the source code for the Decentralized Mail Finance Protocol website. The website is built using Svelte and SvelteKit, and it's styled with Tailwind CSS.

## Project Structure

- `src/routes/+page.svelte`: This is the main page of the website. It contains the introduction to the Decentralized Mail Finance Protocol and a link to the whitepaper.
- `src/routes/whitepaper/+page.svelte`: This page contains the whitepaper for the Decentralized Mail Finance Protocol. It outlines the problems that the protocol aims to solve, the solutions it provides, and its architecture.

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

> To deploy your app, you may need to install an [adapter](https://kit.svelte.dev/docs/adapters) for your target environment.
