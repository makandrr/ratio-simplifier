import styled from 'styled-components';

export default styled.input`
  font-size: 1rem;
  padding: 0.75rem 1rem;
  border: 1px solid var(--primary-color);
  border-radius: 6px;
  width: 100%;
  outline: none;
  transition: 200ms border-color;
  color: var(--text-color);
  background-color: var(--bg-input);

  &:focus {
    border-color: var(--secondary-color);
  }
`;
