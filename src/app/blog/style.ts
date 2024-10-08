import styled from '@emotion/styled';

export const Main = styled.div`
  display: flex;
  padding-left: 40px;
  padding-right: 40px;
  padding-bottom: 40px;
  flex-direction: column;
  align-items: center;
`;

export const PageTitle = styled.div`
  display: flex;
  width: 100%;
  padding: 20px 40px;
  flex-direction: column;
  align-items: flex-start;
  gap: 20px;
`;

export const PageTitleText = styled.div`
  color: var(--Gray-Gray-900, #191f28);
  font-family: 'Montserrat', sans-serif;
  font-size: 64px;
  font-style: normal;
  font-weight: 600;
`;

export const Gap = styled.div`
  height: 100px;
`;
