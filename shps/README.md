# shps

🧱 A minimal frontend UI framework written in vanilla JavaScript.

## Features

- Create elements with props and events
- Render UI with pure JS
- No build tools required

## Example

```js
import { createElement, render } from './shps.js';

const App = createElement("div", {}, [
  createElement("h1", {}, ["Hello"])
]);

render(document.body, App);
