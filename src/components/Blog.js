/*
Author: chankruze (chankruze@gmail.com)
Created: Thu Mar 31 2022 16:07:05 GMT+0530 (India Standard Time)

Copyright (c) geekofia 2022 and beyond
*/

import { useState } from "react";

const Blog = ({ title, description, setNewTitle, setNewDescription }) => {
  //   console.log({ title, description });
  const [titleSate, setTitleState] = useState(title);
  const [descriptionState, setDescriptionState] = useState(description);
  const [isEditing, setIsEditing] = useState(false);

  // handle edit
  const handleEdit = () => {
    setIsEditing(true);
  };

  // handle delete
  const handleDelete = () => {
    setTitleState("");
    setDescriptionState("");
    setNewTitle("");
    setNewDescription("");
  };

  // handle save
  const handleSave = () => {
    setIsEditing(false);
    // set new values
    setNewTitle(titleSate);
    setNewDescription(descriptionState);
  };

  // handle cancel
  const handleCancel = () => {
    setIsEditing(false);
    // set default value
    setTitleState(title);
    setDescriptionState(description);
    setNewTitle(title);
    setNewDescription(description);
  };

  console.log({ titleSate, descriptionState, isEditing, title, description });

  return (
    <div className="card">
      {/* action */}
      <div className="action">
        {/* save and cancel */}
        {isEditing ? (
          <>
            <button onClick={handleSave}>save</button>
            <button onClick={handleCancel}>cancel</button>
          </>
        ) : (
          <>
            <button onClick={handleEdit}>edit</button>
            <button onClick={handleDelete}>delete</button>
          </>
        )}
      </div>
      <div className="body">
        {/* title */}
        <input
          className="title"
          value={titleSate}
          onChange={(e) => setTitleState(e.target.value)}
          //   readOnly={!isEditing}
          disabled={!isEditing}
          autoFocus={isEditing}
        />
        {/* description */}
        <hr />
        <input
          className="description"
          value={descriptionState}
          onChange={(e) => setDescriptionState(e.target.value)}
          //   readOnly={!isEditing}
          autoFocus={isEditing}
          disabled={!isEditing}
        />
      </div>
    </div>
  );
};

export default Blog;
