import React from 'react';

import { DatePicker, MuiPickersAdapter } from '@mui/x-date-pickers';

import { FormHelperText } from '@mui/material';
import { FormFieldProps } from '@arandu/laravel-mui-admin/lib/types/form';
import useDateAdapter from '../useDateAdapter';

const DateInputComponent: React.FunctionComponent<FormFieldProps> = ({
    form, field
}) => {

    const {
        name, label,
        // eslint-disable-next-line no-unused-vars
        initialValue, gridItem, type = 'text',
        ...props
    } = field;

    const { inputProps: inputPropsFn, errors } = form;

    const adapter = useDateAdapter();

    const { value, ...inputProps } = inputPropsFn(name, (date) => {
        if (!adapter || !date) {
            return null;
        }
        const jsDate = adapter.toJsDate(date);
        return `${jsDate.getFullYear()}-${jsDate.getMonth() + 1}-${jsDate.getDate()}`;
    });

    const adaptedValue = (value as string) ? adapter?.date(value) : null;

    return (
        <>
            <DatePicker
                sx={{ width: '100%' }}
                slotProps={{
                    textField: {
                        InputLabelProps: {
                            shrink: true
                        },
                        fullWidth: true,
                    }
                }}
                {...props}
                {...inputProps as any}
                label={label || name}
                value={adaptedValue}
            />
            {errors.filter(({ key }) => key === name)
                .map(({ message }, index) => (
                    <FormHelperText key={index} error>{message}</FormHelperText>
                ))}
        </>

    );
};



export default DateInputComponent;
