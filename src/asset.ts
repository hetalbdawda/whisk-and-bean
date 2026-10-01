// Resolve a public-folder asset path against Vite's base URL so it works
// both locally (base "/") and on GitHub Pages (base "/whisk-and-bean/").
export const asset = (path: string) =>
  `${import.meta.env.BASE_URL}${path.replace(/^\//, '')}`
