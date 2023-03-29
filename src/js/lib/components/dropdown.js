import $ from "../core";

$.prototype.dropdown = function() {
    for(let i = 0; i < this.length; i++) {
        const idButton = $(this[i]).getAttr('id');

        $(this[i]).click(() => {
            $(`[data-toggle-id="${idButton}"]`).fadeToggle(300);
        });
    }
};

$('.dropdown-toggle').dropdown();