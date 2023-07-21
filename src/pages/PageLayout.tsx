import { css } from "@emotion/react";
import { ReactNode } from "react";
export function PageLayout({ children }: { children: ReactNode }) {
  console.log("pagelayout");
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
      <div
        // TODO: bg 설정하기
        css={css`
          background: #fff;
        `}
      >
        {children}
      </div>
    </div>
  );
}
