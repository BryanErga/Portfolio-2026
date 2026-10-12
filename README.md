# Bryan Erga Satria — Portfolio (HTML + CSS only)

Open `index.html` in a browser. No build step, no JavaScript, no external requests (fonts are self-hosted).

```
index.html            Home: hero, about preview, featured works, contact
about.html            Full CV: education, experience, software, personal skills, awards, languages
graphic-design.html   Graphic Design page: one <article class="project"> per project
video-editing.html    Video Editing placeholder (coming soon)
css/base.css          Fonts, design tokens (:root), reset, typography, paper textures
css/components.css    Nav, buttons, stickers, tape, folders, stamp frame, contact, footer
css/pages.css         Section layouts, project showcase, galleries, CV blocks, responsive rules
assets/fonts/         Jersey 10, Inter, Space Mono, Caveat, EB Garamond (woff2)
assets/img/           bryan-profile.*, projects/<project-slug>/*.jpg (+ logo.svg)
```

## Add a Graphic Design project
1. Put web-sized images in `assets/img/projects/<slug>/` (JPG, ~1080–1200 px wide).
2. In `graphic-design.html`, copy a whole `<article class="project">` block (marked by the comment at the top of the page).
3. Change the `id`, title, text, image paths and the three colours on the article:
   `style="--project-a:#...; --project-b:#...; --project-ink:#..."`.
4. Gallery classes: `gallery--lead` (first image 2×2 + 4 portraits), `gallery--3` (3 columns), `gallery--tall` (flyers: 1 column on phones).
5. Optional: add a tag link in the Featured Works folder on `index.html`.

## Add Video Editing projects
1. Put web-sized files in `assets/img/video/<name>/web/`: 16:9 YouTube thumbnails (JPG) and vertical reels (H.264 `.mp4` plus a `.jpg` cover frame).
2. In `video-editing.html`, copy the whole `<article class="project project--video">` block (see the comment above it).
3. Paste each YouTube URL into the `href="#"` of its thumbnail (marked with an `ADD YOUTUBE LINK` comment).
4. Reels are plain `<video muted loop preload="metadata" poster="...">` elements with no player menu. `js/reels-hover.js` (the only JavaScript on the site) plays them muted on hover and rewinds on leave; click toggles sound on desktop, and on touch devices a tap plays or pauses.

## Tune the look
Colours, fonts, max width and radius are CSS variables at the top of `css/base.css`.
