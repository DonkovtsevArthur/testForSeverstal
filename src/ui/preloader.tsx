import React from "react";

import styled from "styled-components";

const PreloaderStyled = styled.div`
  background-position: center center;
  background-repeat: no-repeat;
  background-size: 30px;
  display: block;
  width: 15px;
  height: 15px;
  margin: 0 5px;
  svg {
    circle {
      animation: 4s a infinite linear, 3s o infinite linear;
      stroke: ${({ theme }) => theme.colors.blueLight};
    }
    @keyframes a {
      from {
        stroke-dasharray: 100 0;
      }
      50% {
        stroke-dasharray: 0 100;
      }
      to {
        stroke-dasharray: 100 0;
      }
    }
    @keyframes o {
      from {
        stroke-dashoffset: 75;
      }
      to {
        stroke-dashoffset: 375;
      }
    }
  }
`;

export const Preloader = () => {
  return (
    <PreloaderStyled>
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="-20 -20 40 40">
        <circle r="15.9154943092" fill="none" strokeWidth="5" />
      </svg>
    </PreloaderStyled>
  );
};
