import {vd_inp_count} from '../media/i.js';
import {o,vdi} from '../../conf.js';
import change from './change.js';
import {cache} from '../../state/i.js';



export default (
    (dv) => {
                    
        var
            l = dv.length,
            pr = null
        ;
        if (dv.reduce(vd_inp_count,0) > 1) {
            
            a: for (
                var
                    _ = null,
                    i = 0,
                    j = 0,
                    id = vdi.exact,
                    I = ""
                ;
                i < l;
                i++
            ) {
                if (
                    id === dv[i].deviceId
                ) {
                    i++;
                    b: {
                        for (
                            var
                                l1 = (l - 1)
                            ;
                            i < l;
                            i++
                        ) {
                            if ((_ = dv[i]).kind === "videoinput") {
                                localStorage.setItem("2", (vdi.exact = _.deviceId));
                                break b;
                            }
                            else {
                                (i===l1) && (i=-1)
                            }
                        };
                    }
                    
                    pr = (
                        navigator
                        .mediaDevices
                        .getUserMedia(cache.o)
                        .then(change)
                        .catch(console.error)
                    );

                    break;
                }
            }
        };
        
        return pr;
    }
);
