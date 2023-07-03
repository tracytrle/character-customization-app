import React, { useEffect, useState, useCallback } from "react";
import Images from "./Images.js";
import { total, allParts, getAllPart } from "./Items.js";

function Game() {
  const [activeLink, setActiveLink] = useState("");
  const [buttons, setButtons] = useState([]);
  const [imageParts, setImageParts] = useState([]);
  const [showPart, setShowPart] = useState("");
  const [partItems, setPartItems] = useState(allParts);
  const [items, setItems] = useState(total);
  const [showingParts, setShowingParts] = useState([]);

  useEffect(() => {
    getAllPart();
    randomize();
    showPartListsDefault("Body");
  }, []);

  function randomize() {
    setShowingParts([]);
    let noses = 1;
    let body = Math.floor(Math.random() * items.Body) + 1;
    let eyes = Math.floor(Math.random() * items.Eyes) + 1;
    let mouth = Math.floor(Math.random() * items.Mouths) + 1;
    let eyebrows = Math.floor(Math.random() * items.Eyebrows) + 1;
    let clothes = Math.floor(Math.random() * items.Layer_1) + 1;
    let hair = Math.floor(Math.random() * items.Hair);
    let glasses = Math.floor(Math.random() * items.Glasses);
    // let hat = Math.floor(Math.random() * items.Hat);

    let origin = "character/";
    let png = ".png";
    let link = "";
    let key = "";
    let zIndex = "";
    console.log("print body src: ", `${origin}body/${body}${png}`);

    const parts = [
      {
        classify: "Body",
        key: `Body_${body}`,
        link: `${origin}body/${body}${png}`,
        zIndex: "0",
      },
      {
        classify: "Eyes",
        key: `Eyes_${eyes}`,
        link: `${origin}eyes/${eyes}${png}`,
        zIndex: "4",
      },
      {
        classify: "Noses",
        key: `Noses_${noses}`,
        link: `${origin}noses/${noses}${png}`,
        zIndex: "4",
      },
      {
        classify: "Mouths",
        key: `Mouths_${mouth}`,
        link: `${origin}mouths/${mouth}${png}`,
        zIndex: "4",
      },
      {
        classify: "Eyebrows",
        key: `Eyebrows_${eyebrows}`,
        link: `${origin}eyebrows/${eyebrows}${png}`,
        zIndex: "4",
      },
      {
        classify: "Hair",
        key: `Hair_${hair}`,
        link: `${origin}hair/${hair}${png}`,
        zIndex: "6",
      },
      {
        classify: "Clothes",
        key: `Layer_1_${clothes}`,
        link: `${origin}clothes/layer_1/${clothes}${png}`,
        zIndex: "2",
      },
      {
        classify: "Glasses",
        key: `Glasses_${glasses}`,
        link: `${origin}accessories/glasses/${glasses}${png}`,
        zIndex: "5",
      },
    ];
    parts.map((part) => {
      setShowingParts((states) => [...states, part]);
    });
  }

  function handleNavClick(link) {
    setActiveLink(link);
    let newButtons = [];
    if (link === "Face") {
      newButtons = ["Mouths", "Noses", "Eyes", "Facial_hair", "Eyebrows"];
      showPartListsDefault("Face");
    } else if (link === "Hairs") {
      newButtons = ["Hair_1", "Hair_2", "Hair_3", "Hair_4"];
      showPartListsDefault("Hairs");
    } else if (link === "Clothes") {
      newButtons = ["Layer_1", "Layer_2", "Layer_3"];
      showPartListsDefault("Clothes");
    } else if (link === "Accessories") {
      newButtons = [
        "Earrings_1",
        "Earrings_2",
        "Glasses",
        "Hats_1",
        "Hats_2",
        "Neckwear",
      ];
      showPartListsDefault("Accessories");
    } else if (link === "Body") {
      newButtons = ["Body"];
      showPartListsDefault("Body");
    }
    setButtons(newButtons);
  }

  function showPartListsDefault(button) {
    setShowPart(button);
    setImageParts([]);

    const newImageParts = [];
    let start = 0;
    let size = 0;
    let origin = "";
    const png = ".png";
    let partName = `${button}_`;
    let link = "";
    let key = "";
    let z_idx = 0;

    if (button === "Body") {
      size = 17;
      // origin = "character/body/";
      z_idx = 0;
    } else if (button === "Hairs") {
      size = 20;
      partName = "Hair_";
      // origin = "character/hair/";
      z_idx = 6;
    } else if (button === "Clothes") {
      // origin = "character/clothes/layer_1";
      size = 5;
      z_idx = 2;
      partName = "Layer_1_";
    } else if (button === "Accessories") {
      z_idx = 5;
      size = 17;
      partName = "Glasses_";
      // origin = "character/accessories/glasses/";
    } else if (button === "Face") {
      z_idx = 4;
      // origin = "character/mouths/";
      size = 24;
      partName = "Mouths_";
    }
    for (let index = start; index < size + start; index++) {
      key = `${partName}${index + 1}`;
      // link = `${origin}${index + 1}${png}`;
      // const data = partItems.find((item) => item.key === key);
      // console.log("print data: ", data);
      partItems.forEach((obj) => {
        if (obj.key === key) {
          console.log("print obj key: ", obj.key);

          console.log("print key: ", key);
          console.log("print obj link: ", obj.link);
          link = obj.link;
        }
      });
      let part = { key, link };
      newImageParts.push(part);
    }
    setImageParts(newImageParts);
  }

  function handlePartList(button) {
    setShowPart(button);
    setImageParts([]);

    const newImageParts = [];
    let start = 0;
    let size = 0;
    let origin = "";
    const png = ".png";
    let partName = `${button}_`;
    let link = "";
    let key = "";
    let z_idx = 0;

    if (activeLink === "Body" && button === "Body") {
      size = 17;
      // origin = "character/body/";
      z_idx = 0;
    } else if (activeLink === "Hairs") {
      size = 20;
      // origin = "character/hair/";
      z_idx = 6;
      partName = "Hair_";
      if (button === "Hair_1") {
        start = 0;
      } else if (button === "Hair_2") {
        start = 20;
      } else if (button === "Hair_3") {
        start = 40;
      } else if (button === "Hair_4") {
        start = 60;
        size = 14;
      }
    } else if (activeLink === "Clothes") {
      // origin = "character/clothes/";
      size = button === "layer_3" ? 9 : 5;
      origin = `${origin}${button}/`;
      z_idx = 2;
    } else if (activeLink === "Accessories") {
      z_idx = 5;
      if (button === "Earrings_1" || button === "Earrings_2") {
        partName = "Earrings_";
        size = 16;
        // origin = "character/accessories/earrings/";
        start = button === "Earrings_1" ? 0 : 16;
      } else if (button === "Glasses") {
        size = 17;
        // origin = "character/accessories/glasses/";
      } else if (button === "Hats_1" || button === "Hats_2") {
        partName = "Hat_";
        size = 14;
        // origin = "character/accessories/hats/";
        start = button === "Hats_1" ? 0 : 14;
      } else if (button === "Neckwear") {
        size = 18;
        // origin = "character/accessories/neckwear/";
      }
    } else if (activeLink === "Face") {
      z_idx = 4;
      if (button === "Mouths") {
        // origin = "character/mouths/";
        size = 24;
      } else if (button === "Noses") {
        // origin = "character/noses/";
        size = 1;
      } else if (button === "Eyes") {
        // origin = "character/eyes/";
        size = 24;
      } else if (button === "Facial_hair") {
        // origin = "character/facial_hair/";
        size = 17;
      } else if (button === "Eyebrows") {
        // origin = "character/eyebrows/";
        size = 15;
      }
    }
    // console.log("print size: ", size);
    for (let index = start; index < size + start; index++) {
      key = `${partName}${index + 1}`;
      // link = `${origin}${index + 1}${png}`;
      // const data = partItems.find((item) => item.key === key);
      // console.log("print data: ", data);
      partItems.forEach((obj) => {
        if (obj.key === key) {
          // console.log("print obj key: ", obj.key);

          // console.log("print key: ", key);
          // console.log("print obj link: ", obj.link);
          link = obj.link;
        }
      });
      let part = { key, link };
      newImageParts.push(part);
    }
    setImageParts(newImageParts);
  }

  function applyToAvatar(key) {
    console.log("print apply to ava given key: ", key);
    let link = "";
    let zIndex = 0;
    let classify = "";
    partItems.some((obj) => {
      if (obj.key === key) {
        console.log("print obj key: ", obj.key);

        console.log("print key: ", key);
        console.log("print obj link: ", obj.link);
        console.log("print obj zindex: ", obj.z_index);
        link = obj.link;
        zIndex = obj.z_index;
        classify = obj.classify;

        let part = { classify, key, link, zIndex };
        const updatedState = showingParts.filter(
          (item) => item.classify !== classify
        );
        setShowingParts(updatedState);
        setShowingParts((states) => [...states, part]);

        console.log("print showingParts: ", showingParts);
        return true;
      }
    });
  }

  return (
    <div className="App">
      <div className="nav-link">
        <ul>
          <li
            className={activeLink === "Body" ? "active" : ""}
            onClick={() => handleNavClick("Body")}
          >
            Body
          </li>
          <li
            className={activeLink === "Face" ? "active" : ""}
            onClick={() => handleNavClick("Face")}
          >
            Face
          </li>
          <li
            className={activeLink === "Hairs" ? "active" : ""}
            onClick={() => handleNavClick("Hairs")}
          >
            Hairs
          </li>
          <li
            className={activeLink === "Clothes" ? "active" : ""}
            onClick={() => handleNavClick("Clothes")}
          >
            Clothes
          </li>
          <li
            className={activeLink === "Accessories" ? "active" : ""}
            onClick={() => handleNavClick("Accessories")}
          >
            Accessories
          </li>
        </ul>
      </div>
      <div className="avatar-group">
        <div className="showing-avatar">
          <div className="avatar-wrapper">
            <div className="avatar">
              {showingParts.map((item) => (
                <img
                  src={item.link}
                  alt=""
                  width={270}
                  style={{
                    zIndex: `${item.zIndex}`,
                    position: "absolute",
                    left: 0,
                    top: 0,
                  }}
                />
              ))}
            </div>
            <div className="text-center">
              <button
                className="button"
                onClick={() => {
                  randomize();
                }}
              >
                Randomize!
              </button>
            </div>
          </div>
        </div>
        <div className="showing-categories">
          <div className="display-categories">
            <h2>{showPart}</h2>
            <div id="list">
              {imageParts.map((partList) => (
                <div
                  key={partList.key}
                  className="clickable item "
                  onClick={() => {
                    applyToAvatar(partList.key);
                  }}
                >
                  <Images key={partList.key} image={partList.link} />
                </div>
              ))}
            </div>
            <div className="categories">
              {buttons.map((button, index) => (
                <button
                  key={index}
                  className="categories-btn"
                  onClick={(e) => handlePartList(button)}
                >
                  {button}
                </button>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Game;
