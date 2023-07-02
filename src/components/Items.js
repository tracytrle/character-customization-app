export const allParts = [];

export const total = {
  Body: 17,
  Eyes: 24,
  Hair: 73,
  Mouth: 24,
  Eyebrows: 15,
  Hat: 28,
  Eyebrows: 15,
  Glasses: 17,
  Earrings: 32,
  Noses: 1,
  Neckwear: 18,
  Layer_1: 5,
  Layer_2: 5,
  Layer_3: 9,
};

export function getAllPart() {
  for (const part in total) {
    let origin = "";
    let size = 0;
    const png = ".png";
    if (part === "Body") {
      origin = "character/body/";
      size = 17;
    } else if (part === "Eyes") {
      origin = "character/eyes/";
      size = 24;
    } else if (part === "Hair") {
      origin = "character/hair/";
      size = 73;
    } else if (part === "Mouth") {
      origin = "character/mouths/";
      size = 24;
    } else if (part === "noses") {
      origin = "character/noses/";
      size = 1;
    } else if (part === "facial_hair") {
      origin = "character/facial_hair/";
      size = 17;
    } else if (part === "eyebrows") {
      origin = "character/eyebrows/";
      size = 15;
    } else if (part === "Hat") {
      origin = "character/accessories/hats/";
      size = 28;
    } else if (part === "Glasses") {
      origin = "character/accessories/glasses/";
      size = 17;
    } else if (part === "Neckwear") {
      origin = "character/accessories/neckwear/";
      size = 18;
    } else if (part === "Layer_1") {
      origin = "character/clothes/layer_1";
      size = 5;
    } else if (part === "Layer_2") {
      origin = "character/clothes/layer_2/";
      size = 5;
    } else if (part === "Layer_3") {
      origin = "character/clothes/layer_3";
      size = 9;
    }

    for (let index = 0; index < total[part].length; index++) {
      let key = `${part}${index + 1}`;
      let link = `${origin}${index + 1}${png}`;
      allParts.add(key, link);
    }
  }
  // setPartItems(newPartItem);
  // console.log("print partItems: ", partItems);
}
