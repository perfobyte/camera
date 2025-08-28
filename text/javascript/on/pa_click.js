import {cache, ts} from '../state/i.js';
import {camera_cl,} from '../elems.js';
import {update_ts} from '../f/i.js';

export default (
    () => {
        
        return (
            (cache.paused=!(cache.paused))
            ? (
                cache.rd.pause(),
                clearInterval(ts[1]),
                camera_cl.add("p")
            )
            : (
                cache.rd.resume(),
                (ts[1] = setInterval(update_ts, 1000)),
                camera_cl.remove("p")
            )
        );
    }
);
