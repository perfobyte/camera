import {stop} from '../clear/i.js';
import {vdi} from '../../conf.js';
import {O} from '../../state/i.js';

export default (
    (s) => (
        s
        .getTracks()
        .reduce(stop,s),
        
        (vdi.exact = O.vd),
        
        navigator
        .mediaDevices
        .enumerateDevices()
    )
);
