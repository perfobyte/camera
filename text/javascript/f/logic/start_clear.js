import {stop} from '../clear/i.js';

export default (
    (s) => (
        s
        .getTracks()
        .reduce(stop,s),

        navigator
        .mediaDevices
        .enumerateDevices()
    )
);
