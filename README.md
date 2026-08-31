# Wisit Prasinthong — Developer Portfolio

Personal portfolio for **Wisit Prasinthong**, a junior full-stack developer based in Bangkok. The site introduces Wisit's background, technical and soft skills, education, Generation Thailand learning journey, and a featured interactive e-commerce project.

[View the live portfolio](https://wisit-prasinthong.buthza741.chatgpt.site)

![Portfolio preview](public/og.png)

## Highlights

- Responsive one-page portfolio with clear section navigation
- About, experience, education, skills, and contact sections
- Interactive **Siam Cheerful** storefront demo
- Project screenshots, walkthrough, source snapshot, and résumé download
- Accessible semantic markup and mobile-friendly layouts
- Social metadata for polished link previews

## Tech stack

- React 19
- TypeScript
- Vinext and Vite
- Modern CSS
- Cloudflare Workers-compatible build

## Run locally

Requires Node.js `22.13.0` or later.

```bash
npm install
npm run dev
```

Open the local URL shown in the terminal.

## Quality checks

```bash
npm run lint
npm test
```

`npm test` builds the project and verifies the rendered portfolio content.

## Project structure

```text
app/
  page.tsx                 Portfolio page and content
  globals.css              Visual system and responsive styling
  SiamCheerfulDemo.tsx     Interactive featured-project demo
public/
  og.png                   Social and README preview image
  siam-cheerful-*.png      Project screenshot
  wisit-prasinthong-resume.pdf
tests/
  rendered-html.test.mjs   Rendered-output checks
```

## Contact

- Repository: [GeorgeBuch/port01](https://github.com/GeorgeBuch/port01)
- GitHub: [GeorgeBuch](https://github.com/GeorgeBuch)
- Portfolio: [wisit-prasinthong.buthza741.chatgpt.site](https://wisit-prasinthong.buthza741.chatgpt.site)

---

Built from Wisit's portfolio profile and tailored for junior full-stack opportunities.
