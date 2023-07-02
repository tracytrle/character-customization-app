import React, { useState } from "react";
import Images from "./Images.js";

// const ImageParts = {
//   // Define your image paths here
//   body1: "character/body/1.png",
//   body2: "character/body/2.png",
//   head1: "character/head/1.png",
//   head2: "character/head/2.png",
// };

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

  function handleNavClick(link) {
    setActiveLink(link);
    let newButtons = [];
    if (link === "Face") {
      newButtons = ["mouths", "noses", "eyes", "facial_hair", "eyebrows"];
    } else if (link === "Hairs") {
      newButtons = ["Hair_1", "Hair_2", "Hair_3", "Hair_4"];
    } else if (link === "Clothes") {
      newButtons = ["layer_1", "layer_2", "layer_3"];
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
    console.log("print activeLink: ", activeLink);
  }

  function handleOnChange(event) {
    setActiveLink(event.target.value);
  }

  function handlePartList(button) {
    setImageParts([]);
    console.log("print handlePartList button: ", button);
    const newImageParts = [];
    let start = 0;
    let size = 0;
    let origin = "";
    const png = ".png";
    let partName = "";
    let link = "";
    let key = "";
    if (activeLink === "Body") {
      size = 17;
      origin = "character/body/";
    } else if (activeLink === "Hairs") {
      size = 20;
      origin = "character/hair/";
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
      origin = "character/clothes/";
      size = button === "layer_3" ? 8 : 5;
      partName = `_${button}_`;
      origin = `${origin}${button}/`;
    } else if (activeLink === "Accessories") {
      if (button === "Earrings_1" || button === "Earrings_2") {
        partName = "_Earrings";
        size = 16;
        origin = "character/accessories/earrings/";
        start = button === "Earrings_1" ? 0 : 16;
      } else if (button === "Glasses") {
        partName = "_Glasses";
        size = 17;
        origin = "character/accessories/glasses/";
      } else if (button === "Hats_1" || button === "Hats_2") {
        partName = "_Hats";
        size = 14;
        origin = "character/accessories/hats/";
        start = button === "Hats_1" ? 0 : 14;
      } else if (button === "Neckwear") {
        partName = "_Neckwear";
        size = 18;
        origin = "character/accessories/neckwear/";
      }
    } else if (activeLink === "Face") {
      // { Face: ["mouths", "nose", "eyes", "facial_hair", "eyebrows"] },

      if (button === "mouths") {
        origin = "character/mouths/";
        size = 24;
      } else if (button === "noses") {
        origin = "character/noses/";
        size = 1;
      } else if (button === "eyes") {
        origin = "character/eyes/";
        size = 24;
      } else if (button === "facial_hair") {
        origin = "character/facial_hair/";
        size = 17;
      } else if (button === "eyebrows") {
        origin = "character/eyebrows/";
        size = 15;
      }
      partName = `_${button}`;
    }

    console.log("print size: ", size);
    for (let index = start; index < size + start; index++) {
      // part.key = `${activeLink}${index + 1}`;
      key = `${activeLink}${partName}${index + 1}`;
      link = `${origin}${index + 1}${png}`;
      let part = {
        key: link,
      };
      console.log("print key: ", key);
      console.log("print part: ", link);

      newImageParts.push(part);
    }

    setImageParts(newImageParts);
  }

  return (
    <div id="root">
      <div className="container">
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
                <div className="avatar"></div>
                <div className="text-center">
                  <button className="button">Randomize!</button>
                </div>
              </div>
            </div>
            <div className="showing-categories">
              <div className="display-categories">
                <h2>Earrings</h2>
                <div id="list">
                  {imageParts.map((partList, index) => (
                    <div className="clickable item">
                      <Images key={index} image={partList.key} />
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
      </div>
      å
    </div>
  );
}

export default Game;
