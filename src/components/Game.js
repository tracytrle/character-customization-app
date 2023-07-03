import React, { useEffect, useState, useCallback } from "react";
import Images from "./Images.js";
import { total, allParts, getAllPart } from "./Items.js";

// const NavLinks = ["Clothes", "Hair", "Face", "Accessories"];
// const PartList = [
//   { Body: ["Body"] },
//   { Clothes: ["layer_1", "layer_2", "layer_3"] },
//   { Hair: ["Hair1", "Hair2", "Hair3", "Hair4"] },
//   { Face: ["mouths", "nose", "eyes", "facial_hair", "eyebrows"] },
//   { Accessories: ["Earrings", "Glasses", "Hats", "Neckwear"] },
// ];

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
    // console.log("print partItems: ", partItems);
    // console.log("print allpart: ", allParts);
    // console.log("print size allpart: ", Object.keys(partItems));
    // console.log("print total: ", items);
  }, []);

  // const temp = getAllPart();
  // console.log("print partItems: ", partItems);

  function handleNavClick(link) {
    setActiveLink(link);
    let newButtons = [];
    if (link === "Face") {
      newButtons = ["Mouths", "Noses", "Eyes", "Facial_hair", "Eyebrows"];
    } else if (link === "Hairs") {
      newButtons = ["Hair_1", "Hair_2", "Hair_3", "Hair_4"];
    } else if (link === "Clothes") {
      newButtons = ["Layer_1", "Layer_2", "Layer_3"];
    } else if (link === "Accessories") {
      newButtons = [
        "Earrings_1",
        "Earrings_2",
        "Glasses",
        "Hats_1",
        "Hats_2",
        "Neckwear",
      ];
    } else if (link === "Body") {
      newButtons = ["Body"];
    }

    setButtons(newButtons);
    // console.log("print activeLink: ", activeLink);
  }

  function handleOnChange(event) {
    setActiveLink(event.target.value);
  }

  function handlePartList(button) {
    setShowPart(button);
    setImageParts([]);
    // console.log("print handlePartList button: ", button);
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
    // const newList = showingParts.slice();
    console.log("print apply to ava given key: ", key);
    let link = "";
    let zIndex = 0;
    partItems.some((obj) => {
      if (obj.key === key) {
        console.log("print obj key: ", obj.key);

        console.log("print key: ", key);
        console.log("print obj link: ", obj.link);
        console.log("print obj zindex: ", obj.z_index);
        link = obj.link;
        zIndex = obj.z_index;

        let part = { key, link, zIndex };
        showingParts.push(part);
        console.log("print obj newList: ", showingParts);
        setShowingParts(showingParts);
        console.log("print showingParts: ", showingParts);
        return true;
      }
    });

    // let part = { key, link, zIndex };
    // if (!showingParts.some((item) => item.key === key)) {
    //   showingParts.push(part);
    // }
    // showingParts.push(part);
    // console.log("print obj newList: ", showingParts);
    // const updateShowingParts = [...showingParts];
    // updateShowingParts.push(part);
    // showingParts = updateShowingParts;
    // setShowingParts(showingParts);
    // setShowingParts(...showingParts, part);

    //   console.log("print showingParts: ", showingParts);
  }

  return (
    <div className="App">
      <div className="nav-link">
        <ul>
          <li
            onChange={handleOnChange}
            className={activeLink === "Body" ? "active" : ""}
            onClick={() => handleNavClick("Body")}
          >
            Body
          </li>
          <li
            onChange={handleOnChange}
            className={activeLink === "Face" ? "active" : ""}
            onClick={() => handleNavClick("Face")}
          >
            Face
          </li>
          <li
            onChange={handleOnChange}
            className={activeLink === "Hairs" ? "active" : ""}
            onClick={() => handleNavClick("Hairs")}
          >
            Hairs
          </li>
          <li
            onChange={handleOnChange}
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
                  style={{
                    zIndex: `${item.z_index}`,
                  }}
                />
              ))}
            </div>
            <div className="text-center">
              <button className="button">Randomize!</button>
            </div>
          </div>
        </div>
        <div className="showing-categories">
          <div className="display-categories">
            <h2>{showPart}</h2>
            <div id="list">
              {imageParts.map((partList, index) => (
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
