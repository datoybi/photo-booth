import { css } from '@emotion/react';
import { ReactNode } from 'react';
import styled from '@emotion/styled';

export function PageLayout({ children }: { children: ReactNode }) {
  return (
    <div
      css={css`
        max-width: 100%;
        width: 100%;
        padding: 0;
        margin: 0;
        height: auto;
      `}
    >
      <Header>
        <h1>Photo Booth</h1>
      </Header>
      {/* <div
        // TODO: bg 설정하기
        css={css`
          background: #fff;
        `}
      > */}
      {children}
      {/* </div> */}
      <footer>footer</footer>
    </div>
  );
}

const Header = styled.div`
  height: 200px;
  display: flex;
  justify-content: center;
  align-items: center;
  /* border: 1px solid tomato; */

  & > h1 {
    font-size: 2rem;
    font-weight: bold;
  }
`;
