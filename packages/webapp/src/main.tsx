import React from 'react';
import ReactDOM from 'react-dom/client';
import { createGlobalStyle } from 'styled-components';

const GlobalStyle = createGlobalStyle`
  body {
    margin: 0;
    padding: 0;
    background: #eeeeee;
    font-family: sans-serif;
  }

  * {
    box-sizing: border-box;
  }

  ul {
    list-style: none;
    padding: 0;
    margin: 0;
    &.bullet {
      list-style: disc;
      margin-left: 1em;
    }
  }

  h1 {
    margin: 10px 0px 20px;
    font-size: 130%;
    padding-bottom: 3px;
    position: relative;
    &::before {
      content: '';
      position: absolute;
      left: 0;
      bottom: 0;
      width: 50%;
      height: 7px;
      background: linear-gradient(to right, #001284 50%, #ffffff);
    }
    &::after {
      content: '';
      position: absolute;
      left: 0;
      bottom: 0;
      width: 100%;
      height: 2px;
      background: #555555;
    }
  }

  h2 {
    width: 100%;
    display: flex;
    align-items: center;
    margin: 10px auto;
    font-size: 110%;
    gap: 10px;
    &::after {
      content: '';
      flex: 1;
      height: 0px;
      border-bottom: 2px solid silver;
    }
  }

  .material-icons {
    vertical-align: middle;
  }
`;

const main = async () => {
  const root = ReactDOM.createRoot(
    document.getElementById('root') as HTMLElement
  );

  if (typeof import.meta.env.FB_APP_CONFIG === 'undefined') {
    const StartupError = (await import('./StartupError')).default;
    root.render(
      <>
        <GlobalStyle />
        <StartupError undefinedEnvs={['FB_APP_CONFIG']} />
      </>
    );
    return;
  }

  const App = (await import('./App')).default;
  root.render(
    <React.StrictMode>
      <GlobalStyle />
      <App />
    </React.StrictMode>
  );
};

main();
