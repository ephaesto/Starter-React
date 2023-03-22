import { OptionsRoutesPagesType } from 'pages/optionsRoutesPagesTypes';
import OnbordingPage from './OnbordingPage';

export const OnbordingRoutes: OptionsRoutesPagesType = [
  {
    path: 'onbording',
    element: <OnbordingPage />,
    switch: ['auth'],
  },
];
