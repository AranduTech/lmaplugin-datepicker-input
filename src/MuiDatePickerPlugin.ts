import { LaravelMuiAdminPlugin } from '@arandu/laravel-mui-admin/lib/types/plugin';

import { addFilter, addAction } from '@arandu/laravel-mui-admin';

const MuiDatepickerPlugin: LaravelMuiAdminPlugin = {

    macros: () => {
        console.log(
            'The boilerplate plugin is loaded.'
            + ' Start developing your plugin by editing src/MuiDatepickerPlugin.ts'
        );

    },

}



export default MuiDatepickerPlugin;
