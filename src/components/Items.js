export const allParts = [];
export const total = {
  Body: 17,
  Eyes: 24,
  Hair: 73,
  Mouths: 24,
  Eyebrows: 15,
  Hat: 28,
  Eyebrows: 15,
  Glasses: 17,
  Earrings: 32,
  Noses: 1,
  Neckwear: 18,
  Facial_hair: 17,
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
    } else if (part === "Mouths") {
      origin = "character/mouths/";
      size = 24;
    } else if (part === "Noses") {
      origin = "character/noses/";
      size = 1;
    } else if (part === "Facial_hair") {
      origin = "character/facial_hair/";
      size = 17;
    } else if (part === "Eyebrows") {
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
      origin = "character/clothes/layer_1/";
      size = 5;
    } else if (part === "Layer_2") {
      origin = "character/clothes/layer_2/";
      size = 5;
    } else if (part === "Layer_3") {
      origin = "character/clothes/layer_3/";
      size = 9;
    } else if (part === "Earrings") {
      origin = "character/accessories/earrings/";
      size = 32;
    }

    for (let index = 0; index < size; index++) {
      let key = `${part}_${index + 1}`;
      let link = `${origin}${index + 1}${png}`;
      allParts.push({ key, link });
    }
  }

  console.log("print partItems inside Items: ", allParts);
}
