import $ from '../core';

$.prototype.addAtt = function(...attributes) {
    for (let i = 0; i < this.length; i++) {
        this[i].setAttribute(...attributes);
    }
    return this;
};

$.prototype.delAtt = function(...attributes) {
    for (let i = 0; i < this.length; i++) {
        this[i].removeAttribute(...attributes);
    }
    return this;
};