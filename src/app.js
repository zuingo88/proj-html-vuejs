function initVue() {
  new Vue({
    el: "#app",

    data: {
      lisLeft: [
        //home
        {
          name: "Home",
          items: [
            {
              name: "Main Home",
              items: "",
            },
            {
              name: "Italian Restaurant",
              items: "",
            },
            {
              name: "Pizzeria Home",
              items: "",
            },
            {
              name: "Pizza Light",
              items: "",
            },
            {
              name: "Pizza Dark",
              items: "",
            },
            {
              name: "Fast Food Home",
              items: "",
            },
          ],
        }, //fine home

        //pages
        {
          name: "Pages",
          items: [
            {
              name: "About Us",
              items: "",
            },
            {
              name: "Our Services",
              items: "",
            },
            {
              name: "Our Team",
              items: "",
            },
            {
              name: "Our History",
              items: "",
            },
            {
              name: "Reservation",
              items: "",
            },
            {
              name: "Contact Us",
              items: "",
            },
          ],
        }, //fine pages

        //menu
        {
          name: "Menu",
          items: [
            //list types
            {
              name: "List Types",
              items: [
                "Don Peppe Menu",
                "Menu Light",
                "Menu Filter Ligth",
                "Menu Dark",
                "Menu Filter Dark",
                "Menu Slider",
                "Restaurant Menu",
              ],
            },
            //list layout
            {
              name: "List Layouts",
              items: [
                "3 Columns",
                "4 Columns",
                "4 Columns Wide",
                "5 Columns",
                "5 Columns Wide",
                "6 Columns Wide",
              ],
            },
            //product types
            {
              name: "Product Types",
              items: ["Standard", "Grouped", "Variable", "New", "On Sale"],
            },
            //shop pages
            {
              name: "Shop Pages",
              items: ["My Account", "Cart", "Checkout"],
            },
          ],
        },
      ], //fine lisLeft

      lisRight: [
        //event
        {
          name: "Event",
          items: ["Event List", "Event Single"],
        },
        //blog
        {
          name: "Blog",
          items: [
            {
              name: "Right Sidebar",
              items: "",
            },
            {
              name: "Left Sidebar",
              items: "",
            },
            {
              name: "Without Sidebar",
              items: "",
            },
            //post types
            {
              name: "Post Types",
              items: [
                "Standard",
                "Gallery",
                "Quote",
                "Link",
                "Audio",
                "Video",
                "No Sidebar",
              ],
            },
          ],
        }, //fine blog
        //landing
        {
          name: "Landing",
          item: "",
        },
      ], //fine lisRight
    }, //fine data

    methods: {
      saluti: function () {
        console.log("ciao a tutti");
      },
    }, //fine methods
  }); //fine new Vue
} //fine initVue

initVue();

document.addEventListener("DOMContentLoaded", initVue);
