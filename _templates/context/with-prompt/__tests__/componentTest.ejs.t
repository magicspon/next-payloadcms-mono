---
to: "<%= tests ? `${path}/${h.changeCase.pascalCase(name)}/__tests__/${h.changeCase.pascalCase(name)}.test.tsx` : null %>"
---
import React from 'react';
import { <%= h.changeCase.pascalCase(name) %>Provider, T<%= h.changeCase.pascalCase(name) %>ProviderProps } from '..';
import { render, screen } from '@testing-library/react';

const defaultProps: T<%= h.changeCase.pascalCase(name) %>ProviderProps = {
  children: 'hello world'
};

const setup = (props = defaultProps) => render(<<%= h.changeCase.pascalCase(name) %>Provider {...props} />);

describe('<%= h.changeCase.pascalCase(name) %>', () => {
  it('renders', () => {
    setup({children: 'hello world'});
    expect(screen.getByText('hello world')).toBeInTheDocument();
  });
});
