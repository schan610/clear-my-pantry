import classes from "./Pantry.module.css";
import PantryForm from "./PantryForm";
import PantryList from "./PantryList";

// DUMMY AUTOCOMPLETE SEARCH

const DUMMY_AUTO = [
  {
    name: "apple",
    image: "apple.jpg",
    id: 9003,
    aisle: "Produce",
    possibleUnits: [
      "small",
      "large",
      "piece",
      "slice",
      "g",
      "extra small",
      "medium",
      "oz",
      "cup slice",
      "cup",
      "serving",
    ],
  },
  {
    name: "applesauce",
    image: "applesauce.png",
    id: 9019,
    aisle: "Canned and Jarred",
    possibleUnits: ["g", "oz", "cup", "serving", "tablespoon"],
  },
  {
    name: "apple juice",
    image: "apple-juice.jpg",
    id: 9016,
    aisle: "Beverages",
    possibleUnits: [
      "g",
      "drink box",
      "fl oz",
      "oz",
      "teaspoon",
      "cup",
      "serving",
      "tablespoon",
    ],
  },
  {
    name: "apple cider",
    image: "apple-cider.jpg",
    id: 1009016,
    aisle: "Beverages",
    possibleUnits: [
      "g",
      "drink box",
      "fl oz",
      "oz",
      "teaspoon",
      "bottle NFS",
      "cup",
      "serving",
      "tablespoon",
    ],
  },
  {
    name: "apple jelly",
    image: "apple-jelly.jpg",
    id: 10019297,
    aisle: "Nut butters, Jams, and Honey",
    possibleUnits: [
      "g",
      "oz",
      "packet",
      "teaspoon",
      "cup",
      "serving",
      "tablespoon",
    ],
  },
];

const Pantry = () => {
  return (
    <div className={classes.pantry}>
      <div className={classes.header}>
        <h1>Your Ingredients</h1>
        <PantryForm />
      </div>

      <PantryList />

      <div className={classes["btn-wrapper"]}>
        <button className={classes.btn}>Generate Recipes</button>
      </div>
    </div>
  );
};

export default Pantry;
