import product1 from "../../images/Ham3.jpg";
import product2 from "../../images/Ham4.jpg";
import product3 from "../../images/Ham5.jpg";
import sweet1 from "../../images/sweet-1.jpg";
import sweet2 from "../../images/sweet-2.jpg";
import sweet3 from "../../images/sweet-3.jpg";

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
      price: 20
    },
    {
      id: "add2",
      name: "Mozarella Cheese",
      price: 24
    },
    {
      id: "add3",
      name: "Coco Cheese",
      price: 24
    },
    {
      id: "add4",
      name: "Coco Latte",
      price: 24
    }
  ]
};
export const productData = [
  {
    id: "p1",
    img: product1,
    alt: "Pizza",
    name: "Supreme Pizza",
    desc:
      "Marinara Sauce,basil,italian sausage, roma tomatoes, olives, and pesto",
    price: "300",
    button: "Add to cart",
    options: options
  },
  {
    id: "p2",
    img: product2,
    alt: "Pizza",
    name: "Hawwain Pizza",
    desc:
      "Marinara Sauce,basil,italian sausage, roma tomatoes, olives, and pesto",
    price: "200",
    button: "Add to cart",
    options: options
  },
  {
    id: "p3",
    img: product3,
    alt: "Pizza",
    name: "Veggie Overload",
    desc:
      "Marinara Sauce,basil,italian sausage, roma tomatoes, olives, and pesto",
    price: "150",
    button: "Add to cart",
    options: options
  }
];

export const productDataTwo = [
  {
    id: "p4",
    img: sweet1,
    alt: "Sweet",
    name: "Butter Scotch Cake",
    desc:
      "Marinara Sauce,basil,italian sausage, roma tomatoes, olives, and pesto",
    price: "300",
    button: "Add to cart",
    options: options
  },
  {
    id: "p5",
    img: sweet2,
    alt: "Sweet2",
    name: "Icecream Shake",
    desc:
      "Marinara Sauce,basil,italian sausage, roma tomatoes, olives, and pesto",
    price: "200",
    button: "Add to cart",
    options: options
  },
  {
    id: "p6",
    img: sweet3,
    alt: "Pizza",
    name: "Apple Fruit Cake",
    desc:
      "Marinara Sauce,basil,italian sausage, roma tomatoes, olives, and pesto",
    price: "150",
    button: "Add to cart",
    options: options
  },
  {
    id: "p7",
    img: sweet3,
    alt: "Pizza",
    name: "Apple Fruit Cake",
    desc:
      "Marinara Sauce,basil,italian sausage, roma tomatoes, olives, and pesto",
    price: "150",
    button: "Add to cart",
    options: options
  },
  {
    id: "p8",
    img: sweet3,
    alt: "Pizza",
    name: "Apple Fruit Cake",
    desc:
      "Marinara Sauce,basil,italian sausage, roma tomatoes, olives, and pesto",
    price: "150",
    button: "Add to cart",
    options: options
  },
  {
    id: "p9",
    img: sweet3,
    alt: "Pizza",
    name: "Apple Fruit Cake",
    desc:
      "Marinara Sauce,basil,italian sausage, roma tomatoes, olives, and pesto",
    price: "150",
    button: "Add to cart",
    options: options
  }
];
