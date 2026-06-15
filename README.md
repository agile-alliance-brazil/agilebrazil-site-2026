# Agile Brazil site (frontend)

This repository contains a small Angular frontend scaffolded into the `frontend` folder. The production build is configured to output directly into the repository `_site` directory so the static site is ready to serve.

Quick commands:

- Install and build (from repo root):

```bash
nvm use 24
cd frontend
npm install --force
npm run build --configuration=production
```

The production build will emit static files into `../_site` as configured in `frontend/angular.json`.

Development server:

```bash
nvm use 24
cd frontend
npm install --force
npm start
```

Notes:
- The app is a minimal landing page styled to resemble the Agile Brazil site. Adjust `frontend/src/styles.css` and `frontend/src/app/app.component.html` to change content and layout.
- `frontend/angular.json` has `outputPath` set to `../_site` so builds go into the repo `_site` folder.

Serving the built site:

```bash
# from repo root
npx serve _site
```

This will serve the generated static files on a local port (install `serve` globally if you prefer).
