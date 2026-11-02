# Product designer portfolio

A dependency-free, responsive portfolio inspired by the quiet editorial system of the provided reference. It uses Google Fonts' Figtree, a cool gray/ink palette, generous spacing, and restrained interaction.

## Pages

- `index.html` — home and selected work
- `about.html` — profile and working principles
- `resume.html` — experience and capabilities
- `contact.html` — contact details and a demo form interaction
- `projects/ezhire.html` — reusable case-study layout for EZHire

## Preview locally

Run a static server from this directory, for example:

```sh
python3 -m http.server 4173
```

Then open `http://localhost:4173`.

## Customize

Replace `hello@yourportfolio.com`, the placeholder role/company content, and the empty LinkedIn links in the HTML files. Each `.placeholder` block can be replaced with an `<img>` while keeping its surrounding container and layout classes.

To add another case study, duplicate `projects/ezhire.html`. The shared `case-hero`, `case-meta`, `case-section`, `responsive-image`, and `metrics` classes provide the template structure.

## Reusable responsive images

Use the same `responsive-image` component everywhere. Place it outside `.page-shell` for viewport-width media, or inside `.page-shell` for content-width media:

```html
<figure class="responsive-image">
  <img src="image/example.png" alt="Describe the image">
  <figcaption class="responsive-image__caption">Image caption.</figcaption>
</figure>
```
