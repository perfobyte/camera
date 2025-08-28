import {rechange, } from './f/i.js';
import {O} from './state/i.js';

import {

    select_mode,

    on_camera_exit,
    cm_click,
    cm_sw_click,

    cm_pa_click,
    cm_fi_click,
    cm_au_bt_click,

    start_cb,
} from './on/i.js'

(
    (D) => {
        var
            m = O.m
        ;
        return (
            (D.getElementById("cm_ca").onclick = on_camera_exit),
            
            (D.getElementById("cm_sw").onclick = cm_sw_click),
            
            (cm_pa.onclick = cm_pa_click),
            
            (D.getElementById("cm_fi").onclick = cm_fi_click),
            (cm_au.onclick = cm_au_bt_click),

            D
            .querySelectorAll("#cm_mo > button")
            .forEach(
                (v) => (v.onclick=select_mode)
            ),
            
            start_cb[rechange(m,-1)](
                D.querySelector(`#cm_mo>:nth-child(${1+m})`)
            ),

            cm_click()
        );
    }
)(
    document,
)