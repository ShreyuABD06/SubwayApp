import product1 from "../../images/Ham3.jpg";
import product2 from "../../images/Ham4.jpg";
import product3 from "../../images/Ham5.jpg";
import sweet1 from "../../images/sweet-1.jpg";
import sweet2 from "../../images/sweet-2.jpg";
import sweet3 from "../../images/sweet-3.jpg";
import sweet4 from "../../images/sweet-4.jpg";
import sweet5 from "../../images/sweet-5.jpg";
import sweet6 from "../../images/sweet-6.jpg";
import sweet7 from "../../images/sweet-7.jpg";
import sweet8 from "../../images/sweet-8.jpg";
import sweet9 from "../../images/sweet-9.jpg";
import sweet10 from "../../images/sweet-10.jpg";

export const options = {
  cheese: [
    {
      id: "ch1",
      name: "Wrap Without Cheese",
      selected: true
    },
    {
      id: "ch2",
      name: "Wrap With Cheese Slice",
      selected: false
    },
    {
      id: "ch3",
      name: "Paneer",
      selected: false
    }
  ],
  chips: [
    {
      id: "cp1",
      name: "American Style Cream & Onion Lays",
      selected: true
    },
    {
      id: "cp2",
      name: "Classic Salt Lays",
      selected: false
    }
  ],
  sauce: [
    {
      id: "s1",
      name: "Mayonnaise",
      price: 0
    },
    {
      id: "s2",
      name: "Marinara",
      price: 0
    },
    {
      id: "s3",
      name: "Barbeque",
      price: 0
    },
    {
      id: "s4",
      name: "Sweet Onion",
      price: 0
    },
    {
      id: "s5",
      name: "Tomato Chilly",
      price: 0
    }
  ],
  vegetables: [
    {
      id: "v1",
      name: "Carrot",
      selected: true
    },
    {
      id: "v2",
      name: "Cucumber",
      selected: false
    },
    {
      id: "v3",
      name: "Tomato",
      selected: false
    }
  ],
  addons: [
    {
      id: "add1",
      name: "Cheese Slice",
      price: 50
    },
    {
      id: "add2",
      name: "Mozarella Cheese",
      price: 24
    },
    {
      id: "add3",
      name: "Coco Cheese",
      price: 54
    },
    {
      id: "add4",
      name: "Lime Coke",
      price: 36
    },
    {
      id: "add5",
      name: "Coco Latte",
      price: 65
    },
    {
      id: "add6",
      name: "Butter Vannila",
      price: 30
    }
  ]
};
export const productData = [
  {
    id: "p1",
    img: sweet4,
    alt: "Vegie",
    name: "Roasted Bread almonds",
    desc: "Delicious combination of garden almonds, cake fruit.",
    price: "100",
    button: "Add to cart",
    options: options
  },
  {
    id: "p2",
    img: sweet5,
    alt: "Choco",
    name: "Cherry topped Chocolate",
    desc: "Cherry topped nutritious,cookie prepared with almonds",
    price: "200",
    button: "Add to cart",
    options: options
  },
  {
    id: "p3",
    img: sweet6,
    alt: "Choco",
    name: "Dark Chocolate Cookie",
    desc: "Dark chocolate baked hot cookies with hot chocolate",
    price: "150",
    button: "Add to cart",
    options: options
  }
];

export const productDataTwo = [
  {
    id: "p4",
    img: sweet8,
    alt: "Sweet",
    name: "Lettuce Wrapped Ham",
    desc:
      "Served on a freshly baked bread, with an abundance of Lettuce and onions.",
    price: "180",
    button: "Add to cart",
    options: options
  },
  {
    id: "p5",
    img: sweet7,
    alt: "Sweet2",
    name: "Spinach Potatoes Ham",
    desc:
      "Served on a freshly baked bread, spinach base with an abundance of exotic Indian spice mix.",
    price: "200",
    button: "Add to cart",
    options: options
  },
  {
    id: "p6",
    img: sweet9,
    alt: "Ham",
    name: "Chatpata veg Channa Mix",
    desc:
      "97% Fat Free -A chunky, tangy mix of chickpea, bengal gram with aromatic Indian spices",
    price: "120",
    button: "Add to cart",
    options: options
  },
  {
    id: "p7",
    img: product1,
    alt: "Ham",
    name: "Spinach top Cake",
    desc:
      "Soft diced tofu cubes made of bean, spices & condiments, cooked in an oven to give a smoky effect.",
    price: "160",
    button: "Add to cart",
    options: options
  },
  {
    id: "p8",
    img: product2,
    alt: "Ham",
    name: "Vegan Mix roast",
    desc:
      "Soft diced tofu cubes made of bean, spices & condiments, cooked in an oven to give a smoky effect.",
    price: "150",
    button: "Add to cart",
    options: options
  },
  {
    id: "p9",
    img: product3,
    alt: "Choco",
    name: "Chocolate fruit Cake",
    desc:
      "Indian fruit topped with aromatic Mexican seasoning, roman grapes to chocolate  up your palate.",
    price: "250",
    button: "Add to cart",
    options: options
  },
  {
    id: "p10",
    img: sweet3,
    alt: "Ham",
    name: "Apple Fruit Icecream",
    desc:
      "Marinara Sauce,basil,italian sausage, roma tomatoes, olives, and pesto",
    price: "110",
    button: "Add to cart",
    options: options
  },
  {
    id: "p11",
    img: sweet10,
    alt: "Ham",
    name: "Egg Topped Noodles",
    desc:
      "Served on a freshly boiled egg,with an abundance of exotic Indian spice mix",
    price: "230",
    button: "Add to cart",
    options: options
  },
  {
    id: "p12",
    img: sweet1,
    alt: "Choco",
    name: "Choco Ice Shake",
    desc: "Hot chocolate cake served as cold icecream with almonds and badam",
    price: "280",
    button: "Add to cart",
    options: options
  }
];
