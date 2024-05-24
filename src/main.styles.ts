import { css } from '@linaria/core';

export const globals = css`
  :global() {
    * {
      margin: 0;
      padding: 0;
      box-sizing: border-box;
      font-family: 'Reddit Mono', monospace;
      font-optical-sizing: auto;
    }

    html,
    body,
    #root {
      width: 100%;
      height: 100%;
    }

    #root {
      display: flex;
      justify-content: center;
      align-items: center;
    }

    body {
      background-color: #ccc;
    }

    button,
    input[type='checkbox'] {
      cursor: pointer;
    }
  }
`;
