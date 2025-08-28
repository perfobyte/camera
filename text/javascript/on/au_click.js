import {O,cache} from '../state/i.js';
import {o,mdi} from '../conf.js';
import {audio_change,} from '../f/i.js';

export default (
    function() {
        return (
            (cache.T = this.classList),
            localStorage.setItem("4", (O.md = mdi.exact = this.getAttribute("data-a"))),

            navigator
            .mediaDevices
            .getUserMedia(o)
            .then(audio_change)
            .catch(console.error)
        );
    }
);
