import styled from 'styled-components';

export const MapContainer = styled.div`
  width: 100%;
  height: 45rem; 
  overflow: hidden;
  position: relative;

  @media screen and (min-width: 769px) and (max-width: 1279px) {
    height: 30rem; 
    width: 40rem
  }
  @media (max-width: 768px) {
    height: 300px; 
    width: 400px
  }
`;

export const MapFrame = styled.iframe`
  width: 100%;
  height: 100%;
  border: 0;
`;
