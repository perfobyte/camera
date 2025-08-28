import {ch,vdcf,} from '../../../conf.js';
import {camera_cl,V,} from "../../../elems.js";
import {cache,ts} from "../../../state/i.js";
import {write,update_ts,push} from '../../../f/i.js';

export default (
    (e) => {
        var rd = cache.rd;
        return (
            (rd === null)
            ? (
                (ch.a = []),
                (cache.paused = false),
                camera_cl.remove("p"),
                (
                    (
                        rd =
                            new MediaRecorder(
                                V.srcObject,
                                vdcf
                            )
                    )
                    .ondataavailable = push
                ),
                (rd.onstop = write),
                camera_cl.add("f"),
                
                (ts[0] = 0),
                (ts[1] = setInterval(update_ts, 1000)),

                (cache.rd = rd)
                .start()
            )
            : rd.stop()
        );
    }
);
