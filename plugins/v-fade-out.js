import Vue from 'vue'

const topOffest = 110;

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

    const height = window.innerHeight;

    const fadeRate = mapNumber(height, 350, 400, 10, 100);

    let distanceFromTop = el.getBoundingClientRect().top - topOffest;
    let newOpacity = distanceFromTop / fadeRate;

    if (newOpacity > 1) el.style.opacity = 1;
    else if (newOpacity < 0) el.style.opacity = 0;
    else el.style.opacity = newOpacity;
}

function mapNumber(value, low1, high1, low2, high2) {
    return clamp(low2 + (high2 - low2) * (value - low1) / (high1 - low1), low2, high2);
}

function clamp(val, min, max) {
    return val > max ? max : val < min ? min : val;
}