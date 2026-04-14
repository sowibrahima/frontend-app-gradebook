import React from 'react';
import { Route, Routes } from 'react-router-dom';

import { AppProvider } from '@edx/frontend-platform/react';

import Header from '@edx/frontend-component-header';

import store from 'data/store';
import GradebookPage from 'containers/GradebookPage';
import './App.scss';
import Head from './head/Head';
import WutiFooter from './components/WutiFooter';

const App = () => (
  <AppProvider store={store}>
    <Head />
    <div className="gradebook-app-shell">
      <Header />
      <main id="main" className="gradebook-app-main">
        <Routes>
          <Route
            path="/:courseId"
            element={<GradebookPage />}
          />
        </Routes>
      </main>
      <WutiFooter />
    </div>
  </AppProvider>
);

export default App;
