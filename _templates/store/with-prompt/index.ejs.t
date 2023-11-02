---
to: packages/<%= package %>/src/hooks/use<%= h.changeCase.pascalCase(name) %>/index.ts
---

export * from './use<%= h.changeCase.pascalCase(name) %>'
