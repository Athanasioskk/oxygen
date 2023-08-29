import 'firebase/firestore';
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

const storage = firebase.storage();

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

const imagesCollection = firebase.firestore().collection('images');

const imagesData = [
    { label: 'Anabolic_Whey_Choco', imageUrl: 'path_to_image_1.jpg' },
    { label: 'True_Whey', imageUrl: 'path_to_image_2.jpg' },
    { label: 'Beast_Pink', imageUrl: 'path_to_image_2.jpg' },
    { label: 'Creatine_Monohydrate', imageUrl: 'path_to_image_2.jpg' },
    { label: 'BCAAs', imageUrl: 'path_to_image_2.jpg' },
    { label: 'Maltodextrine', imageUrl: 'path_to_image_2.jpg' },
    { label: 'Beta_Alanine', imageUrl: 'path_to_image_2.jpg' },
    { label: 'MOXY', imageUrl: 'path_to_image_2.jpg' },
    { label: 'Multi_Vitamin', imageUrl: 'path_to_image_2.jpg' },
    { label: 'Magnesium_Shot', imageUrl: 'path_to_image_2.jpg' },
    { label: 'Omega_3s', imageUrl: 'path_to_image_2.jpg' },
    { label: 'Carnitine', imageUrl: 'path_to_image_2.jpg' },
    { label: 'Night_Burn', imageUrl: 'path_to_image_2.jpg' },
    { label: 'Peanut_Butter', imageUrl: 'path_to_image_2.jpg' },
    { label: 'Praline', imageUrl: 'path_to_image_2.jpg' },
    { label: 'Protein_Waffle', imageUrl: 'path_to_image_2.jpg' },
];

imagesData.forEach((imageData) => {
    imagesCollection.add(imageData)
        .then((docRef) => {
            console.log('Image reference created:', docRef.id);
        })
        .catch((error) => {
            console.error('Error creating image reference:', error);
        });
});