import React, { useEffect, useState } from "react";
import "./App.css";

import images from "./data";



function App() {
 

  const [tag, setTag] = useState("تمامی محصولات");
  const [filteredImages, setFilteredImages] = useState([]);

  useEffect(() => {
    tag === "تمامی محصولات"
      ? setFilteredImages(images)
      : setFilteredImages(images.filter((image) => image.tag === tag));
  }, [tag]);

  return (
    <div className="App">
      <div className="tags">
        <TagButton
          name="تمامی محصولات"
          tagActive={tag === "تمامی محصولات" ? true : false}
          handleSetTag={setTag}
        />
        <TagButton
          name="تلفن همراه"
          tagActive={tag === "تلفن همراه" ? true : false}
          handleSetTag={setTag}
        />
        <TagButton
          name="ساعت هوشمند"
          tagActive={tag === "ساعت هوشمند" ? true : false}
          handleSetTag={setTag}
        />
        <TagButton
          name="هدفون"
          tagActive={tag === "هدفون" ? true : false}
          handleSetTag={setTag}
        />
      </div>

      <div className="containerr">	
        {filteredImages.map((image) => (
          <div key={image.id} className="image-card">
            <a href={`/images/${image.imageName}`}>
              <img className="image" src={`/images/${image.imageName}`} alt=""/>
            </a>
          </div>
        ))} 
      </div>
      </div>
  );
}

const TagButton = ({ name, handleSetTag, tagActive }) => {
  return (
    <button
      className={`tag ${tagActive ? "active" : null}`}
      onClick={() => handleSetTag(name)}
    >
      {name.toUpperCase()}
    </button>
  );
};

export default App;
