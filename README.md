# jalim-singh.github.io

Personal academic website for Jalim Singh, Ph.D. — plain HTML/CSS/JS, no build step.

## Files
- `index.html` — home / hero
- `research.html` — research projects and publications
- `about.html` — bio, background, interests, CV link
- `contact.html` — contact details
- `style.css` — shared styles
- `nav.js` — mobile nav toggle

## Deploy on GitHub Pages

1. On GitHub, create a new repository named **`directysj.github.io`** (using your GitHub username as the repo name gives you a live site at `https://directysj.github.io/` with no extra config). If you'd rather keep it as a project site under a different name, that works too — the URL will just be `https://directysj.github.io/<repo-name>/`.
2. Upload all the files in this folder to the repository (drag-and-drop via the GitHub web UI under "Add file → Upload files", or via git — see below).
3. Go to the repo's **Settings → Pages**, and under "Build and deployment" set Source to **Deploy from a branch**, branch **main**, folder **/(root)**. Save.
4. GitHub will publish the site within a minute or two at the URL shown on that same Pages settings screen.

### Via git (if you prefer the command line)

```bash
cd jalim-singh-site
git init
git add .
git commit -m "Initial site"
git branch -M main
git remote add origin https://github.com/directysj/directysj.github.io.git
git push -u origin main
```

## Notes / things worth doing next
- The research and profile photos currently hot-link to your old Wix-hosted images (`static.wixstatic.com`). That works today, but if you ever take the Wix site down those images will break. Worth downloading them and adding an `/images` folder to this repo when you have a moment — happy to help with that.
- The "Download CV" link on the About page also still points at the PDF hosted on Wix, for the same reason — consider adding your CV PDF to the repo and pointing the link at it directly.
- Update the email/affiliation on the Contact page if either changes.
- All three accent colors, fonts, and the network-diagram graphic live in `style.css` / `index.html` if you want to adjust the look.
