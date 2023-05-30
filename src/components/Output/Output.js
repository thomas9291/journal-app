import React from "react";

import classes from "./Output.module.css";
import Button from "../../UI/Button/Button";

import { ReactComponent as FavoriteFill } from "./favorite_FILL1_wght400_GRAD0_opsz48.svg";
import { ReactComponent as FavoriteNoFill } from "./favorite_FILL0_wght400_GRAD0_opsz48.svg";

export default function Output({ entries, onDelete, onFavoriteToggle }) {
  return (
    <div>
      <h1>The News</h1>
      <Button>Good News</Button>
      <Button>Bad News</Button>

      <ul className={classes.ul}>
        {entries.map((element, index) => {
          return (
            <li key={index} className={classes.li}>
              {element.title}: {element.text}
              <button
                onClick={() => onDelete(element.id)}
                className={classes.btn}
              >
                ❌
              </button>
              <button
                className={classes.favoriteBtn}
                isFavorite={element.isFavorite}
                onClick={() => onFavoriteToggle(element.id)}
              >
                {element.isFavorite ? <FavoriteFill /> : <FavoriteNoFill />}
              </button>
            </li>
          );
        })}
      </ul>
    </div>
  );
}
