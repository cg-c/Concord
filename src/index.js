import React from 'react';
import App from './App';
import SignInRoute from './login';
import { ThemeProvider } from 'styled-components';
import { BrowserRouter as Router } from 'react-router-dom';
import reportWebVitals from './reportWebVitals';
import { createRoot } from 'react-dom/client';

const container = document.getElementById('root');
const root = createRoot(container);

// theme elements to be accessed via any Styled-Component's props
const theme = {
  primary: "#3d3b40",
  secondary: "#cbd2d0",
  text: "#eaf5f1", 
  headingFont: "'Nunito', sans-serif"
};

root.render(
  <React.StrictMode>
    <ThemeProvider theme={theme}>
      <Router>
        <SignInRoute />
      </Router>
    </ThemeProvider>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals


//reportWebVitals();
