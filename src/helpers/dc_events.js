
// DataCube event handlers

import Utils from '../stuff/utils.js'

export default class DCEvents {

    // Called when overalay emits 'custom-event'
    on_custom_event(event, args) {
        console.log(event, args)

        switch(event) {
            case 'register-tool':
                console.log(args)
                break
        }
    }

}
