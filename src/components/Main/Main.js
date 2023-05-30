import React from "react";

import Form from "../Form/Form";

import Output from "../Output/Output";

import { uid } from "uid";
import useLocalStorageState from "use-local-storage-state";

export default function Main() {
  /* const initial = [
    { title: "Mars attack", text: "Marsian are coming!!!👽👽", id: 109 },
  ]; */
  const [entries, setEntries] = useLocalStorageState("fake news", {
    defaultValue: [],
  });

  const dataFromForm = (newData) => {
    setEntries([...entries, { ...newData, id: uid() }]);
  };
  const favoriteHandler = (id) => {
    setEntries(
      entries.map((element) =>
        element.id === id
          ? {
              ...element,
              isFavorite: !element.isFavorite,
            }
          : element
      )
    );
  };
  const deleteHandle = (id) => {
    setEntries(entries.filter((element) => element.id !== id));
  };
  console.log(entries);
  return (
    <>
      <Form onformData={dataFromForm} />
      <Output
        entries={entries}
        onDelete={deleteHandle}
        onFavoriteToggle={favoriteHandler}
      />
    </>
  );
}
