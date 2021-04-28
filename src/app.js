function initVue() {
  new Vue({
    el: "#app",
    data: {
      albums: [],
    },
    methods: {
      saluti: function () {
          console.log('ciao raga');
      }
    }
  }) //fine new Vue
} //fine initVue

initVue();

document.addEventListener("DOMContentLoaded", initVue);

