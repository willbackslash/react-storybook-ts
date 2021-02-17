import styled, { css } from "styled-components";
import { ButtonProps } from './types';

export const CustomButton = styled.button<ButtonProps>`
  border-radius: 3.9px;
  height: 42px;
  font-size: 18px;
  font-weight: normal;
  font-stretch: normal;
  font-style: normal;
  line-height: normal;
  letter-spacing: 0.64px;
  text-align: center;
  margin: 5px;
  margin-top: 10px;
  color: #fafafa;
  border: solid 1.2px #154734;
  background-color: #154734;
  ${(props) =>
    props.outline &&
    css`
      color: #154734;
      border: solid 1.5px #154734;
      background-color: #ffffff;
    `}
  ${(props) =>
    props.disabled &&
    css`
      color: #828282;
      border: solid 1.5px #e0e0e0;
      background-color: #e0e0e0;
      cursor: not-allowed;
    `}
`;
