import Vue from 'vue'

const topOffest = 150;

// let theFunction = undefined;

// This directive will cause memory leaks on multiple page sites
// A new event listner will be created for every compoennet every time it is inserted

// Register a global custom directive called `v-fade-out`
Vue.directive('fade-out', {
    // When the bound element is inserted into the DOM...
    inserted: function (el) {

        // theFunction = () => calculateOpacity(el)

        el.classList.add("fade-out-directive");

        window.addEventListener("scroll", () => calculateOpacity(el), { passive: true });
        window.addEventListener("resize", () => calculateOpacity(el));
    },
    unbind: function (el) {
        // window.removeEventListener("scroll", theFunction);
        // window.removeEventListener("resize", theFunction);
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
