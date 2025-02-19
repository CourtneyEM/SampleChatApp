import styled from "@emotion/styled";

export const PageContainer = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  bottom: 0;
  right: 0;
  overflow: auto;
  display: flex;
  flex-flow: column;
  scrollbar-width: none;
  justify-content: flex-end;
`;

export const ContentContainer = styled.div`
  width: 100%;
  display: flex;
  position: relative;
  flex-flow: column;
  height: 100%;
  scrollbar-width: none;
`;
