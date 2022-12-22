import classes from "./PantryAutoComplete.module.css";
import { Plus } from "react-feather";

// DUMMY AUTO_COMPLETE SEARCH
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
const PantryAutoComplete = (props) => {
  if (!props.data) return;
  return (
    <ul className={classes['auto-box']}>
      {props.data.map((ing) => {
        return (
          <li key={ing.id}>
            <Plus className={classes.chevron} />
            {ing.name}
          </li>
        );
      })}
    </ul>
  );
};

export default PantryAutoComplete;
