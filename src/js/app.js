document.addEventListener('DOMContentLoaded', function () {
    var collapsibleBtn = document.querySelector('.collapsible-btn');
    var collapsibleBox = document.querySelector('.collapsible-box');

    collapsibleBtn.addEventListener('click', function () {
        if (collapsibleBox.style.maxHeight) {
            collapsibleBox.style.maxHeight = null;
        } else {
            collapsibleBox.style.maxHeight = collapsibleBox.scrollHeight + "px";
        }
    });
});


