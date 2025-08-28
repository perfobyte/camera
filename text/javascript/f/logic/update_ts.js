import {cm_ts} from '../../elems.js';
import {media_time} from '../media/i.js';
import {ts} from '../../state/i.js';

export default (
    (e) => {
        return (
            cm_ts.textContent = (
                media_time(++ts[0])
            )
        );
    }
);
