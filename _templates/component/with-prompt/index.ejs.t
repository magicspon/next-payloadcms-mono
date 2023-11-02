---
to: <%= path %>/<%= h.changeCase.pascalCase(name) %>/index.ts
---

// export { default } from './<%= h.changeCase.pascalCase(name) %>'
export * from './<%= h.changeCase.pascalCase(name) %>'
