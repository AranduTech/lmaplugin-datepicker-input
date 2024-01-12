import { LaravelMuiAdminPlugin } from '@arandu/laravel-mui-admin/lib/types/plugin';

import { addFilter, addAction, config } from '@arandu/laravel-mui-admin';
import DateInputComponent from './components/DateInputComponent';
import DateTimeInputComponent from './components/DateTimeInputComponent';

const MuiDatepickerPlugin: LaravelMuiAdminPlugin = {

    macros: () => {
        
        addFilter('form_field_type_mapping', (mapping: object) => {
            return {
                ...mapping,
                date: DateInputComponent,
                ['datetime-local']: DateTimeInputComponent,
            };
        });

        addFilter('app_create_theme_args', (args: any[]) => [
            ...args,
            config('date.pickerLocale'),
        ]);

    },

}



export default MuiDatepickerPlugin;
