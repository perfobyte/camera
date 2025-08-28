import {api} from '../elems.js';
import {O} from '../state/i.js';


export default (
    (e) => {
        var
            m = O.m
        ;
        return (
            api[m].click()
        );
    }
);
