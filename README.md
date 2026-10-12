# John Paul Corre — Developer Portfolio

A responsive, single-page portfolio built with **Vue 3** and **custom CSS**. It introduces my background, highlights my web development skills and projects, and provides ways to get in touch. I’m a developer from Manila, Philippines, seeking internship opportunities.

## Live Portfolio

[View the portfolio](https://polszstack.github.io/Portfolio/)

The page takes the form of a developer's field journal: oversized editorial typography, handwritten-style accents, a staggered project gallery, a notebook-style learning timeline, and numbered sections. A floating chapter navigator follows your position as you explore. Dark graphite and mint colors are paired with a persistent light-mode option, subtle motion, and responsive layouts. The animated developer workspace, project filters, categorized technology lists, and contact links remain interactive. Project artwork is an illustrative UI concept rather than a screenshot of the live app.

## Technology

The portfolio uses Vue 3 for interactive elements and custom CSS for layout and styling. There is no build step. Vue and Google Fonts load from their CDNs; icons and project illustrations are local SVG and CSS.

- `index.html` — semantic page structure and Vue templates
- `styles.css` — dark/light themes, responsive layouts, and animations
- `app.js` — profile and project data, filters, theme persistence, terminal animation, and clipboard handling
- `favicon.svg` — portfolio monogram

Animations honor `prefers-reduced-motion`. Navigation supports keyboard focus, the mobile menu closes with Escape, and clipboard failures show an alternative way to get in touch.

Click either profile photo or **Open my portrait** in the About section to view a larger picture in a postcard-style dialog. The viewer supports Escape, its close button, and clicking outside to dismiss; keyboard focus returns to the opener. The native modal keeps background controls inactive, and its entrance animation respects reduced-motion preferences.

## Local preview

From the repository directory, run `python -m http.server 4173` and open `http://localhost:4173`. The static files can also be served directly by GitHub Pages.

The technologies I work with include:

- **Languages:** PHP, JavaScript, TypeScript, Python, HTML, CSS
- **Frameworks and libraries:** Vue.js, Express.js, Next.js, FastAPI
- **Styling:** Tailwind CSS, Bootstrap
- **Tools and database:** Node.js, MySQL, Git

## Featured Projects

| Project | What it does | Technologies | Demo | Source |
| --- | --- | --- | --- | --- |
| Weather Dashboard | Shows weather from an API, using a PHP proxy and CSS animations. | JavaScript, PHP | [Open demo](https://polszstack.github.io/Weather-WebApp/) | [View source](https://github.com/polszstack/Weather-WebApp) |
| Music Player | Plays dynamically loaded tracks with playlist support and audio controls. | JavaScript, HTML, Audio API | [Open demo](https://polszstack.github.io/Music-Player/) | [View source](https://github.com/polszstack/Music-Player) |
| Quiz Bee | A multi-category quiz with dynamically loaded questions and score tracking. | Vue.js, TypeScript | [Open demo](https://polszstack.github.io/Quiz-Bee/) | [View source](https://github.com/polszstack/Quiz-Bee) |
| Photo Booth | A photo booth app for taking, filtering, and sharing pictures. | Vue.js, Express.js, TypeScript | [Open demo](https://photo-booth-clean.vercel.app/) | [View source](https://github.com/polszstack/Photo-Booth) |
| Todo List | A responsive, fully typed task-list app. | Next.js, React, TypeScript | [Open demo](https://todo-list-app-seven-chi-94.vercel.app/) | [View source](https://github.com/polszstack/Todo-List) |

## Contact

- **Email:** [jvanpablo455@gmail.com](mailto:jvanpablo455@gmail.com)
- **GitHub:** [@polszstack](https://github.com/polszstack)
- **LinkedIn:** [John Paul Corre](https://www.linkedin.com/in/john-paul-daiz-corre-504006398/)
- **freeCodeCamp:** [polsz](https://www.freecodecamp.org/polsz)
