import { LaravelMuiAdminPlugin } from '@arandu/laravel-mui-admin/lib/types/plugin';

import { addFilter, addAction } from '@arandu/laravel-mui-admin';

const BoilerplatePlugin: LaravelMuiAdminPlugin = {

    macros: () => {
        console.log(
            'The boilerplate plugin is loaded.'
            + ' Start developing your plugin by editing src/BoilerplatePlugin.ts'
        );

    },

}



export default BoilerplatePlugin;
