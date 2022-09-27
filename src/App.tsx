import React from 'react';
import logo from './logo.svg';
import './App.css';
import { MsgBroadcastClient } from '@injectivelabs/sdk-ui-ts';
import { WalletStrategy, Wallet } from '@injectivelabs/wallet-ts';

function App() {
  console.log('MsgBroadcastClient', MsgBroadcastClient);
  console.log('Wallet', Wallet);
  console.log('WalletStrategy', WalletStrategy);
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.tsx</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;
