import Vue from 'vue'

const topOffest = 150;

// Register a global custom directive called `v-fade-out`
Vue.directive('fade-out', {
    // When the bound element is inserted into the DOM...
    inserted: function (el) {


        el.fadeOutDirectiveEvent = () => calculateOpacity(el);

        el.classList.add("fade-out-directive");

        window.addEventListener("scroll", el.fadeOutDirectiveEvent, { passive: true });
        window.addEventListener("resize", el.fadeOutDirectiveEvent);
    },
    unbind: function (el) {
        window.removeEventListener("scroll", el.fadeOutDirectiveEvent);
        window.removeEventListener("resize", el.fadeOutDirectiveEvent);
    }
})

function calculateOpacity(el) {
    console.log('opacity calc triggered');
    let distanceFromTop = el.getBoundingClientRect().top - topOffest;
    let newOpacity = distanceFromTop / 100;

    if (newOpacity > 1) el.style.opacity = 1;
    else if (newOpacity < 0) el.style.opacity = 0;
    else el.style.opacity = newOpacity;
}
