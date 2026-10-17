# A Little Universe for Avni

A responsive, eight-scene birthday story built with plain HTML, CSS, JavaScript, and original SVG illustrations. It has no package dependencies or build step and can be hosted as a static GitHub Pages site.

## Run locally

1. Install Node.js 18 or newer.
2. Open this project folder in a terminal.
3. Run `npm start`.
4. While that command is still running, open <http://127.0.0.1:4173>.

That address is local to your computer. It is available only while the server is running; it is not a public website URL. Stop the server with `Ctrl+C`. To use another port, set the `PORT` environment variable before starting the server.

## Upload the files to GitHub

1. On GitHub, create a new empty repository. Do not initialize it with another README if you plan to upload these files through the browser.
2. Unzip `avni-birthday-surprise.zip` on your computer.
3. Open the new repository and choose **Add file → Upload files**.
4. Upload the *contents* of the `avni-birthday-surprise` folder. The repository root should contain `index.html`, `package.json`, `README.md`, `server.mjs`, `assets/`, and `src/`.
5. Commit the upload to the `main` branch.

You can also use Git from the project folder:

```bash
git init
git add .
git commit -m "Add Avni birthday story"
git branch -M main
git remote add origin https://github.com/YOUR-USERNAME/YOUR-REPOSITORY.git
git push -u origin main
```

Replace the remote URL with the one shown by your repository.

## Publish with GitHub Pages

After the files are in the repository:

1. Open **Settings → Pages**.
2. Under **Build and deployment**, choose **Deploy from a branch**.
3. Choose branch `main` and folder `/(root)`, then save.
4. Once GitHub finishes deploying, the Pages address appears in the Pages settings. It will look like `https://YOUR-USERNAME.github.io/YOUR-REPOSITORY/`.

No build command is needed. GitHub Pages serves `index.html` and the local `src/` and `assets/` files directly. The included Node server is only for local preview; GitHub Pages does not run `npm start`.

## Personalize the story

- Recipient name, date, letter, and optional music path: `src/birthday-content.js`
- Colors, layout, and animation styling: `src/styles.css`
- City illustration: `assets/night-city.svg`
- Other scene illustrations: `src/illustrations.js`

There is no music file included by default. The sound control remains available without one. Google Fonts are loaded online with local font fallbacks; the story itself and its illustrations are local files. Fullscreen depends on browser support.
