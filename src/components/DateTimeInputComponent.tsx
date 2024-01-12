import React from 'react';

import { DateTimePicker } from '@mui/x-date-pickers';

import { FormHelperText } from '@mui/material';
import { FormFieldProps } from '@arandu/laravel-mui-admin/lib/types/form';

const DateTimeInputComponent: React.FunctionComponent<FormFieldProps> = ({
    form, field
}) => {

    const {
        name, label,
        // eslint-disable-next-line no-unused-vars
        initialValue, gridItem, type = 'text',
        ...props
    } = field;

    const { inputProps: inputPropsFn, errors } = form;

    const { value, ...inputProps } = inputPropsFn(name, (date: any) => date.toISOString());

    return (
        <>
            <DateTimePicker
                {...props}
                {...inputProps as any}
                label={label || name}
                value={value as any || null}
                sx={{ width: '100%' }}
            />
            {errors.filter(({ key }) => key === name)
                .map(({ message }, index) => (
                    <FormHelperText key={index} error>{message}</FormHelperText>
                ))}
        </>
    );
};



export default DateTimeInputComponent;
