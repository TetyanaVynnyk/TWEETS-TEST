import { lazy, Suspense } from 'react';
import { Routes, Route, Outlet } from 'react-router-dom';

import Loader from '../src/components/Loader/Loader';

const HomePage = lazy(() => import('./pages/Homepage'));
const TweetsPage = lazy(() => import('./pages/TweetsPage'));

export const App = () => {
  return (
    <Suspense fallback={<Loader />}>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/users" element={<TweetsPage />} />
        <Route path="*" redirectTo="/" element={<HomePage />} />
      </Routes>
      <Outlet />
    </Suspense>
  );
};
