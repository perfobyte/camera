import {V,camera_cl,camera,cm_ts} from '../../../elems.js';
import {ch} from '../../../conf.js';
import {cache} from '../../../state/i.js';
import {fix,pause,play} from "../../../f/i.js";



export default (
    (e) => {
        return (
            (ch.a = null),
            camera.removeEventListener("click",fix),
            V.removeEventListener("pause",pause),
            V.removeEventListener("play",play),
            
            URL.revokeObjectURL(V.src),
            (V.src = ""),

            (V.srcObject = cache.stream),
            (cm_ts.textContent = "0:00"),
            V.play(),
            camera_cl.remove("c")
        );
    }    
);
