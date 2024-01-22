import React from 'react';

import dayjs from 'dayjs';

import { config } from '@arandu/laravel-mui-admin';
import { MuiPickersAdapter } from '@mui/x-date-pickers/models';
import { useThemeProps } from '@mui/material/styles';

export type DateAdapterConstructor = (new (...args: any) => MuiPickersAdapter<unknown, any>);

export interface DateLimiter {
    minDate?: object;
    maxDate?: object;
};

export default function useDateAdapter() {

    const DateAdapter: DateAdapterConstructor | null = React.useMemo(() => config('date.adapter'), []);

    const {
        // dateFormats,
        // dateLibInstance,
        adapterLocale, 
    } = useThemeProps({
        props: { 
            adapterLocale: config('date.locale'),
        },
        name: 'MuiLocalizationProvider',
    });

    const adapter = React.useMemo(() => {
        if (DateAdapter) {
            return new DateAdapter({ adapterLocale });
        }
        return null;
    }, [DateAdapter, adapterLocale]);
    
    // const newValue = React.useMemo(() => {
    //     if (adapter && value) {
    //         return adapter.date(value);
    //     }
    //     return null;
    // }, [adapter, value]);

    const mountDateLimiters = (min: string, max: string) => {

        const minDate = min !== undefined ? dayjs(min) : null;
        const maxDate = max !== undefined ? dayjs(max) : null;
    
        const payload: DateLimiter = {};
    
        if (minDate) {
            payload.minDate = minDate;
        }
        if (maxDate) {
            payload.maxDate = maxDate;
        }
    
        return payload;
    };

    return {
        adapter,
        mountDateLimiters,
    };    
}