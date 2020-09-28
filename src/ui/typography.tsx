import styled from "styled-components";
import { device } from "theme/respond";

export const H2 = styled.h2`
  font-style: normal;
  font-weight: 500;
  font-size: 20px;
  color: ${({ theme }) => theme.colors.blueStroke};
`;

export const H3 = styled.h3`
  font-weight: 500;
  font-size: 18px;
  color: ${({ theme }) => theme.colors.lavender};
  margin-bottom: 5px;
  word-break: break-word;
`;

export const P = styled.p.attrs((props) => props)<{ italic?: boolean }>`
  color: ${({ theme }) => theme.colors.blueLight};
  font-family: ${({ theme }) => theme.fonts.RobotoItalic};
  font-style: ${({ italic }) => (italic ? "italic" : "normal")};
  font-weight: 400;
  font-size: 14px;
  line-height: 18px;

  @media ${device.tablet} {
    font-size: 14px;
    line-height: 18px;
  }
`;

export const textSm = styled(P)`
  font-weight: normal;
  font-size: 12px;
  line-height: 15px;
  color: ${({ theme }) => theme.colors.blue};
  word-break: break-word;
`;
