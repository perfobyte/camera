import {O} from "../state/i.js";
import {rechange} from '../f/i.js';
import {start_cb} from './mode/i.js';


export default (
    (e) => {
        var
            t = e.currentTarget,
            I = (t.getAttribute("data-a")),
            m = O.m
        ;
        return (
            (I === m)
            ||
            (
                localStorage.setItem("3",(O.m=I).toString()),
                start_cb[rechange(I,m)](t)
            )
        )
    }
);
