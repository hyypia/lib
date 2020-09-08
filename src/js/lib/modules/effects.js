import $ from '../core';

$.prototype.animateOverTime = function(duration, callback, final) {
    let start;

    function _animateOverTime(time) {
        if (!start) { start = time; }

        let progress = time - start;
        let complection = Math.min(progress / duration, 1);

        callback(complection);

        if (progress < duration) {
            requestAnimationFrame(_animateOverTime);
        } else {
            if (typeof final === 'function') {
                final();
            }
        }
    }
    return _animateOverTime;
};

$.prototype.fadeIn = function(duration, display, final) {
    for (let i = 0; i < this.length; i++) {
        this[i].style.display = display || 'block';

        const _fadeIn = (complection) => {
            this[i].style.opacity = complection;
        };

        const ani = this.animateOverTime(duration, _fadeIn, final);
        requestAnimationFrame(ani);
    }
    return this;
};

$.prototype.fadeOut = function(duration, final) {
    for (let i = 0; i < this.length; i++) {


        const _fadeOut = (complection) => {
            this[i].style.opacity = 1 - complection;
            if (complection == 1) {
                this[i].style.display = 'none';
            }
        };

        const ani = this.animateOverTime(duration, _fadeOut, final);
        requestAnimationFrame(ani);
    }
    return this;
};