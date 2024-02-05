import React, { FC, Suspense } from 'react';
import './App.css';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { createBrowserRouter, RouterProvider } from "react-router-dom";

const queryClient = new QueryClient();

const LazyCharacterList = React.lazy(() => import('./pages/CharacterList'));
const LazyCharacterDetails = React.lazy(() => import('./pages/CharacterDetails'));

const router = createBrowserRouter([
  {
    path: "/",
    element: <LazyCharacterList />
  },
  {
    path: "/characters/:characterId",
    element: <LazyCharacterDetails />
  },
]);

const MainApp: FC = () => (
  <div>
    <QueryClientProvider client={queryClient}>
      <RouterProvider router={router} />
    </QueryClientProvider>
  </div>
);

const App: FC = () => (
  <Suspense fallback={<div>Loading...</div>}>
    <MainApp />
  </Suspense>
);

export default App;
