import React from 'react';

import { DateTimePicker } from '@mui/x-date-pickers';

import FormHelperText from '@mui/material/FormHelperText';
import { FormFieldProps } from '@arandu/laravel-mui-admin/lib/types/form';

import useDateAdapter from '../useDateAdapter';

const DateTimeInputComponent: React.FunctionComponent<FormFieldProps> = ({
    form, field
}) => {

    const { inputProps: inputPropsFn, errors } = form;

    const {
        name, label,
        // eslint-disable-next-line no-unused-vars
        initialValue, gridItem, type = 'text',
        inputProps: fieldProps = {},
        ...props
    } = field;

    const { minDate = undefined, maxDate = undefined } = fieldProps;

    const {
        adapter,
        mountDateLimiters
    } = useDateAdapter();

    const dateLimiters = mountDateLimiters(minDate, maxDate);

    const { value, ...inputProps } = inputPropsFn(name, (date) => {
        if (!adapter || !date) {
            return null;
        }
        return adapter.toISO(date);
    });

    const adaptedValue = (value as string) ? adapter?.date(value) : null;

    return (
        <>
            <DateTimePicker
                sx={{ width: '100%' }}
                slotProps={{
                    textField: {
                        InputLabelProps: {
                            shrink: true
                        },
                        fullWidth: true
                    }
                }}
                {...dateLimiters}
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



export default DateTimeInputComponent;
