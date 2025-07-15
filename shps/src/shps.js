// Simple frontend framework: shps
export function createElement(tag, props = {}, children = []) {
  const el = document.createElement(tag);

  for (const [key, value] of Object.entries(props)) {
    if (key.startsWith("on")) {
      el.addEventListener(key.slice(2).toLowerCase(), value);
    } else {
      el.setAttribute(key, value);
    }
  }

  children.forEach(child => {
    el.append(typeof child === "string" ? document.createTextNode(child) : child);
  });

  return el;
}

export function render(target, element) {
  target.appendChild(element);
}
