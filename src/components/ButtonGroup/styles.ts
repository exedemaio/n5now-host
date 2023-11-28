import { Link } from "react-router-dom";
import styled from "styled-components";

export const ContainerButtons = styled.div`
  display: flex;
  justify-content: center;
  margin-bottom: 4rem;
  gap: 2rem;
`;

export const Button = styled(Link)`
  padding: 8px 16px;
  background-color: #f2f2f2;
  border-radius: 4px;
  text-decoration: none;
  color: #2e2e2e;
  font-size: 2rem;
`;
