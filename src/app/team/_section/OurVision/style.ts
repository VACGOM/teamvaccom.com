import styled from '@emotion/styled';

export const Container = styled.main`
  gap: 80px;
  padding: 40px;
  & > img {
    width: 100%;
  }
  & > .visionSection {
    display: flex;
    padding: 140px 102px;

    & > .textWrap {
      height: 100%;
      display: flex;
      //width: 100%;
      flex-direction: column;
      justify-content: center;
      align-items: flex-start;
      gap: 30px;
      & > .title {
        color: #191f28;
        font-family: Pretendard;
        font-size: 42px;
        font-style: normal;
        font-weight: 700;
        line-height: 130%;
      }
      & > .text {
        display: flex;
        gap: 20px;
        flex-direction: column;
        & > .tap {
          color: var(--Gray-Gray-600, #6b7684);
          font-family: Pretendard;
          font-size: 18px;
          font-style: normal;
          font-weight: 400;
          line-height: 32px;
        }
      }
    }
  }

  @media (max-width: 991px) {
    padding: 10px;
      & > .visionSection {
          padding: 100px 30px;

      }
`;
