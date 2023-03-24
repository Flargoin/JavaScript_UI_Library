import $ from "../core";

$.prototype.addAttr = function(attrName, value) {
    for(let i = 0; i < this.length; i++) {
        if(!this[i].setAttribute) {
            continue;
        }
        this[i].setAttribute(attrName, value);
    }

    return this;
}

$.prototype.removeAttr = function(attrName) {
    for(let i = 0; i < this.length; i++) {
        if(!this[i].setAttribute) {
            continue;
        }
        this[i].removeAttribute(attrName);
    }

    return this;
}

$.prototype.getAttr = function(attrName) {
    for(let i = 0; i < this.length; i++) {
        if(!this[i].setAttribute) {
            continue;
        }
        console.log(this[i].getAttribute(attrName));
    }

    return this;
}

$.prototype.hasAttr = function(attrName) {
    for(let i = 0; i < this.length; i++) {
        if(!this[i].setAttribute) {
            continue;
        }
        console.log(this[i].hasAttribute(attrName));
    }

    return this;
}

