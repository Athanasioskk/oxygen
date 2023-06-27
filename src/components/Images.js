import "firebase/firestore";
import { ref, uploadBytes } from "firebase/storage";

import anabolic_whey_choco from "../assets/images/anabolic_whey_choco.webp";
import beastpink from "../assets/images/beastpink.webp";
import truewhey from "../assets/images/truewhey.webp";
import creatineMonohydrate from "../assets/images/creatineMonohydrate.jpg";
import bcaas from "../assets/images/bcaas.jpg";
import maltodextrin from "../assets/images/maltodextrin.jpg";
import betaAlanine from "../assets/images/bcaas.jpg";
import moxy from "../assets/images/moxy.webp";
import multiVitamin from "../assets/images/multiVitamin.png";
import magnesiumShot from "../assets/images/magnesiumShot.png";
import omega3s from "../assets/images/omega3s.png";
import carnitine from "../assets/images/carnitine.png";
import nightBurn from "../assets/images/nightBurn.png";
import peanutButter from "../assets/images/peanutButter.webp";
import praline from "../assets/images/praline.png";
import proteinWaffles from "../assets/images/proteinWaffles.png";

const AnabolicWheyChoco = anabolic_whey_choco;
const BeastPink = beastpink;
const TrueWhey = truewhey;
const CreatineMonohydrate = creatineMonohydrate;
const BCAAs = bcaas;
const Maltodextrine = maltodextrin;
const BetaAlanine = betaAlanine;
const MOXY = moxy;
const MultiVitamin = multiVitamin;
const MagnesiumShot = magnesiumShot;
const Omega3s = omega3s;
const Carnitine = carnitine;
const NightBurn = nightBurn;
const PeanutButter = peanutButter;
const Praline = praline;
const ProteinWaffles = proteinWaffles;

const imagesCollection = db.collection("images");

const uploadImages = async () => {
  const imagesData = [
    {
      label: "Anabolic Whey Choco",
      imageName: "anabolic_whey_choco.jpg",
      imagePath: AnabolicWheyChoco,
    },
    {
      label: "True Whey",
      imageName: "true_whey.jpg",
      imagePath: BeastPink,
    },
    {
      label: "Beast Pink",
      imageName: "beast_pink.jpg",
      imagePath: TrueWhey,
    },
    {
      label: "Creatine Monohydrate",
      imageName: "creatine_monohydrate.jpg",
      imagePath: CreatineMonohydrate,
    },
    {
      label: "BCAAs",
      imageName: "bcaas.jpg",
      imagePath: BCAAs,
    },
    {
      label: "Maltodextrine",
      imageName: "maltodextrine.jpg",
      imagePath: Maltodextrine,
    },
    {
      label: "Beta Alanine",
      imageName: "beta_alanine.jpg",
      imagePath: BetaAlanine,
    },
    {
      label: "MOXY",
      imageName: "moxy.jpg",
      imagePath: MOXY,
    },
    {
      label: "Multi Vitamin",
      imageName: "multi_vitamin.jpg",
      imagePath: MultiVitamin,
    },
    {
      label: "Magnesium Shot",
      imageName: "magnesium_shot.jpg",
      imagePath: MagnesiumShot,
    },
    {
      label: "Omega 3s",
      imageName: "omega_3s.jpg",
      imagePath: Omega3s,
    },
    {
      label: "Carnitine",
      imageName: "carnitine.jpg",
      imagePath: Carnitine,
    },
    {
      label: "Night Burn",
      imageName: "nigh_burn.jpg",
      imagePath: NightBurn,
    },
    {
      label: "Peanut Butter",
      imageName: "peanut_butter.jpg",
      imagePath: PeanutButter,
    },
    {
      label: "Praline",
      imageName: "praline.jpg",
      imagePath: Praline,
    },
    {
      label: "Protein Waffle",
      imageName: "protein_waffle.jpg",
      imagePath: ProteinWaffles,
    },
  ];

  try {
    for (const imageData of imagesData) {
      const { imageName, imagePath } = imageData;

      // Upload image to Firebase Storage
      const storageRef = ref(storage, `images/${imageName}`);
      uploadBytes(storageRef, imagePath).then((snapshot) => {
        console.log("Image uploaded successfully:", snapshot.metadata.fullPath);
      });

      // Get the image download URL
      const downloadURL = await snapshot.ref.getDownloadURL();

      // Create a document in the Firestore collection with image data
      const docRef = await imagesCollection.add({
        label: imageData.label,
        imageUrl: downloadURL,
      });

      console.log("Image reference created:", docRef.id);
    }
  } catch (error) {
    console.error("Error uploading image or creating image reference:", error);
  }
};

// Call the uploadImages function to initiate the image upload process
uploadImages();
