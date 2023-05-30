import React from "react";

import styled from "styled-components";

export default function Button({ children, onClick, className }) {
  return (
    <ButtonStyled onClick={onClick} className={className}>
      {children}
    </ButtonStyled>
  );
}
const ButtonStyled = styled.button`
  padding: 0.7rem;
  margin: 1rem;
  background-color: green;
  color: white;
  border-radius: 0.7rem;
  &:hover {
    transform: scale(1.3);
  }
`;
