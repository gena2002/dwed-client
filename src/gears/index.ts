import React from 'react'

export const Page = React.lazy(() => import('./public/Page'));
export {default as RenderRoutes} from './public/renderRoutes';
export {default as getPages} from './public/getPages';
export {default as App} from './public/App';
export {default as useLocalStorage} from './hooks/useLocalStorage';
export {default as routes_template} from './public/routes_template';
export {default as i18n} from './public/i18n';
export {default as gearStore} from './stores/GearStore';

