import {cache, ts} from '../../state/i.js';
import {camera_cl,V,camera,} from '../../elems.js';

import {fix, pause, play} from './i.js';
import {ch,vd_o} from '../../conf.js';

export default (
    () => {
        var rd = cache.rd;
        return (
            camera_cl.add("c"),
            camera_cl.remove("f"),

            (
                cache.rd =
                rd.onstop =
                rd.ondataavailable = null
            ),

            clearInterval(ts[1]),

            (cache.stream = V.srcObject),
            (V.srcObject = null),

            
            camera.addEventListener("click",fix),
            V.addEventListener("pause",pause),
            V.addEventListener("play",play),

            pause(),
            
            (V.src = URL.createObjectURL(new Blob(ch.a, vd_o))),
            V.pause()
        );
    }
);
