import React from 'react';

import { LocalizationProvider as MuiLocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { config } from '@arandu/laravel-mui-admin';

type LocalizationProviderProps = {
    children: React.ReactNode;
};

const LocalizationProvider: React.FunctionComponent<LocalizationProviderProps> = ({ children, ...props }) => (
    <MuiLocalizationProvider
        dateAdapter={config('date.adapter')}
        adapterLocale={config('date.locale')}
        {...props}
    >
        {children}
    </MuiLocalizationProvider>
);

export default LocalizationProvider;

