import { createGlobalStyle } from "styled-components";

export default createGlobalStyle`
* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}

html, body, #root {
  min-height: 100vh;
}

.visually-hidden {
  clip: rect(0 0 0 0);
  clip-path: inset(50%);
  height: 1px;
  overflow: hidden;
  position: absolute;
  white-space: nowrap;
  width: 1px;
}

#root {
  display: flex;
  flex-direction: column;
}

:root {
  font-family: Inter, system-ui, Avenir, Helvetica, Arial, sans-serif;
  line-height: 1.5;
  font-weight: 400;
  padding: 0 3rem;
  color: rgba(255, 255, 255, 0.87);

  font-synthesis: none;
  text-rendering: optimizeLegibility;
  -webkit-font-smoothing: antialiased;

  --primary-color: #EC6B1F;
  --secondary-color: #99C2EC;
  --bg-color: #222;
  --bg-input: #333;
  --text-color: #eee;
  --light-color: #555;

  background-color: var(--bg-color);
  color: var(--text-color)

}

@media(prefers-color-scheme: light) {
  :root {
    --bg-color: #ddd;
    --bg-input: #ccc;
    --text-color: #333;
    --secondary-color: #9e4b1c;
    --light-color: #aaa;
  }
}
`