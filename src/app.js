function initVue() {
  new Vue({
    el: "#app",

    data: {
      lis: [
        //home
        {
          name: "Home",
          items: [
            "Main Home",
            "Italian Restaurant",
            "Pizzeria Home",
            "Pizza Light",
            "Pizza Dark",
            "Fast Food Home",
          ],
        },
        //pages
        {
          name: "Pages",
          items: [
            "About Us",
            "Our Services",
            "Our Team",
            "Our History",
            "Reservation",
            "Contact Us",
          ],
        },
        //menu
        {
          name: "Menu",
          items: [
            //List Types
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
          ],
        },
      ],

      menu: [
        
        {
          name: "Product Types",
          types: ["Standard", "Grouped", "Variable", "New", "On Sale"],
        },
        {
          name: "Shop Pages",
          types: ["My Account", "Cart", "Checkout"],
        },
      ], //fine menu

      events: ["Event List", "Event Single"],

      blog: [
        "Right Sidebar",
        "Left Sidebar",
        "Without Sidebar",
        {
          name: "Post Types",
          types: [
            "Standard",
            "Gallery",
            "Quote",
            "Link",
            "Audio",
            "Video",
            "No Sidebar",
          ],
        },
      ], //fine blog
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
