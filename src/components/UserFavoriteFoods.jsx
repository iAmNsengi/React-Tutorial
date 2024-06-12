import { createElement } from "react";
import styles from "./users.module.scss";
export function UserFavoriteFoods() {
  return createElement(
    "div",
    null,
    <div>
      <span className={styles.foodsTitle}>User Favorite Foods, ok</span>
    </div>,
    <ul>
      <li>Sushi</li>
      <li>Pizza</li>
      <li>Mediteraneean Food</li>
    </ul>
  );
}
