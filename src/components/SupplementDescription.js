import "./styles/SupplementDescription.css";
import React, { useEffect } from "react";
import { useParams } from "react-router-dom";
import { getDownloadURL, ref, getStorage } from "firebase/storage";
import { useState } from "react";
import { db } from "../firebase";
import { doc, getDoc } from "firebase/firestore";
import { Link } from "react-router-dom";

const SupplementDescription = () => {
  const { productName } = useParams();
  const [productImage, setProductImage] = useState(null);
  const [urlMapping, setUrlMapping] = useState({});

  const [creatineData, setCreatineData] = useState([]);
  const [aminoAcidsData, setAminoAcidsData] = useState([]);
  const [preWorkoutsData, setPreWorkoutsData] = useState([]);
  const [vitaminsData, setVitaminsData] = useState([]);
  const [otherData, setOtherData] = useState([]);
  const [snacksData, setSnacksData] = useState([]);
  const [proteinData, setProteinData] = useState([]);

  const allProductsData = [
    ...proteinData,
    ...creatineData,
    ...aminoAcidsData,
    ...preWorkoutsData,
    ...vitaminsData,
    ...otherData,
    ...snacksData,
  ];

  const Paragraphs = [
    {
      brand: "Anabolic Whey",
      p: "Anabolic Whey is a multicomponent dietary supplement composed of a blend of whey protein concentrate (WPC) and casein, providing a combination of rapidly and slowly absorbed proteins that aid in muscle growth and maintenance. It is also enriched with glutamine peptides and creatine monohydrate, which can improve physical performance during intense workouts.",
    },
    {
      brand: "True Whey",
      p: "True Whey is a whey protein concentrate (WPC), which ranks among the most popular protein supplements. With its high protein content, it contributes to the growth and maintenance of muscle mass. Moreover, it excels in great absorption rate, easy digestibility, and natural abundance of essential amino acids (EAA), including BCAAs. As a result, it is an excellent source of high-quality protein powder that can be taken after a workout or at any other time during the day.",
    },
    {
      brand: "Beast Pink",
      p: "Yum Yum Whey is a unique whey protein concentrate that we specifically designed for all active women. In addition to the delicious taste, you will definitely appreciate that it is enriched with important vitamins, minerals, fat burners and a digestive enzyme. Moreover, due to its high protein content, it contributes to muscle growth, which can result, for example, in a more toned body.",
    },
    {
      brand: "Creatine Monohydrate",
      p: "100 % Creatine Monohydrate is especially popular among strength-training athletes, HIIT fans, and team sports players. However, it can be used by all active individuals who need speed, explosiveness, and maximum strength. Creatine is able to increase performance during short consecutive bursts of intense exercise. In order to enjoy its benefits, you must take at least 3 g of creatine a day. You can easily achieve this with one serving of the product.",
    },
    {
      brand: "BCAA's",
      p: "BCAA 4:1:1 Instant is a powder that dissolves easily and contains branched-chain amino acids in the form of l-leucine, l-isoleucine, and l-valine. These amino acids serve as building blocks that the body uses to form muscle proteins. Furthermore, BCAAs are quickly digested and can also serve as a source of energy, making them a valuable supplement for both strength and endurance athletes.",
    },
    {
      brand: "Maltodextrine",
      p: "Maltodextrin consists of a complex carbohydrates that are rapidly digested in the digestive tract. Therefore it does not cause any digestive problems and is a an ideal source of quick-release energy. It has a high glycemic index and rapidly replenishes the depleted muscle glycogen supplies.",
    },
    {
      brand: "Beta Alanine",
      p: "Beta Alanine is a non-essential amino acid in a crystal clear form without any added substances. It is sought after by athletes during hard workouts. The body uses it to produce carnosine, which can regulate the production of lactic acid. This can help positively influence athletic performance and reduce muscle fatigue.",
    },
    {
      brand: "MOXY energy drink",
      p: "MOXY Power+ Energy Drink is a functional RTD drink in a can that will boost your energy levels before training, but also at any time of the day. Its unique formula contains 2.5 g of BCAA, natural fat burner l-carnitine, taurine, vitamin C, B vitamins and increased caffeine content - 180 mg. It does not contain any carbohydrates, sugar or fats, however, you will fall in love with its great refreshing taste.",
    },
    {
      brand: "Multi Vitamin",
      p: "Multivitamin 100% is a functional complex of vitamins available in an effervescent tablet form. Once dissolved in water, they transform into a delicious drink, allowing the vitamins to be quickly absorbed. This allows you to easily replenish the entire spectrum of beneficial substances that generally play a role in fundamental processes in the body, such as recovery, immune function, and nervous system activity.",
    },
    {
      brand: "Magnesium Shot",
      p: "Magnesium Shot is a practical ampoule with a high content of magnesium and vitamin B6. Both of these substances contribute to reducing fatigue and exhaustion and the proper functioning of muscles and the nervous system.",
    },
    {
      brand: "Omega-3's",
      p: "Omega 3 are capsules that contain healthy fish oil. It is a natural source of healthy fats in the form of eicosapentaenoic acid (EPA) and docosahexaenoic acid (DHA). Together, they support proper heart function, and DHA also helps maintain normal function of the brain and eyesight. However, our body cannot create them on its own, so they need to be supplemented regularly.",
    },
    {
      brand: "Carnitine",
      p: "Carnitine TABS ranks among the most popular weight loss supplements. Its main task lies in the transfer of fat (fatty acids) to the cellular power plants called mitochondria, where it is then burned to generate energy. That said, it works best in combination with physical activity and a properly set up diet.",
    },
    {
      brand: "Night Burn",
      p: "Night Burn is designed for all women who want to burn fat even at night while they sleep. This nighttime fat burner contains a complex of 5 active ingredients, but without caffeine or any other stimulants. This makes it a great dietary supplement when losing weight, which does not affect the quality of sleep.",
    },
    {
      brand: "Peanut Butter",
      p: "Peanut Butter is a delicious natural nut butter made from roasted peanuts. It stands out for its great taste and creamy consistency, thanks to which you can spread it on pastries, add it to the porridge or eat it straight out of a jar. It is an excellent source of not only healthy fats and proteins. Furthermore, it does not contain artificial substances or added sugar, so you can enjoy it in moderation even when losing weight",
    },
    {
      brand: "Praline",
      p: "MoiMüv Protein Spread will delight anyone who likes to snack but is looking for healthier versions of sweets. It is a source of protein and, what's more, it doesn't contain any added sugar. In addition to its nutritional profile, it will also appeal to you with its deliciously sweet taste and creamy consistency. It is thus suitable for pancakes, porridge, toast or just on a spoon.",
    },
    {
      brand: "Protein Waffles",
      p: "MoiMüv Protein Wafer is a crunchy delicacy that boasts a high protein content. As you may know, protein intake is crucial for the growth and maintenance of muscle mass, but also for bone health. In addition, this wafer makes for a great source of fibre and has an irresistible taste that you will fall in love with at the first bite. It will serve perfectly as a quick snack, brunch or a healthier alternative to the traditional sweets and can be enjoyed at any time of the day.",
    },
  ];

  function renderDetails(dataArray, productName) {
    const product = dataArray.find((product) => product.label === productName);

    if (product) {
      return (
        <>
          <sub className="Volume" key={product.label}>
            {product.volume} left in stock
          </sub>
          <sub className="Price" key={product.label}>
            {product.price}€
          </sub>
        </>
      );
    } else {
      return null;
    }
  }

  const matchedParagraph = Paragraphs.find(
    (paragraph) => paragraph.brand === productName
  );

  async function fetchData() {
    try {
      const docRef = doc(db, "products", "P2VKQYB2z6YIM2khjaWN");
      const docSnap = await getDoc(docRef);

      if (docSnap.exists()) {
        const data = docSnap.data();
        setProteinData(data.protein);
        setCreatineData(data.creatine);
        setAminoAcidsData(data.aminoAcids);
        setPreWorkoutsData(data.preWorkouts);
        setVitaminsData(data.vitamins);
        setOtherData(data.other);
        setSnacksData(data.snacks);
      } else {
        console.log("Document does not exist");
      }
    } catch (error) {
      console.error("Error fetching data:", error);
    }
  }

  async function fetchImages() {
    try {
      const storage = getStorage();

      //Refs
      const trueRef = ref(storage, "product_images/protein/True Whey.webp");
      const anabolicRef = ref(
        storage,
        "product_images/protein/Anabolic Whey.webp"
      );
      const beastRef = ref(storage, "product_images/protein/Beast Pink.webp");
      const creatineRef = ref(
        storage,
        "product_images/creatine/Creatine Monohydrate.jpg"
      );
      const omegaRef = ref(storage, "product_images/other/Omega-3's.png");
      const nightRef = ref(storage, "product_images/other/Night Burn.png");
      const carnitineRef = ref(storage, "product_images/other/Carnitine.png");
      const magnesiumRef = ref(
        storage,
        "product_images/other/Magnesium Shot.png"
      );
      const moxyRef = ref(
        storage,
        "product_images/preworkout/MOXY energy drink.webp"
      );
      const betaRef = ref(
        storage,
        "product_images/preworkout/Beta Alanine.jpg"
      );
      const maltodextrineRef = ref(
        storage,
        "product_images/preworkout/Maltodextrine.jpg"
      );
      const bcaasRef = ref(storage, "product_images/aminoacids/BCAA's.jpg");
      const multiRef = ref(
        storage,
        "product_images/vitamins/Multi Vitamin.png"
      );
      const peanutRef = ref(
        storage,
        "product_images/snacks/Peanut Butter.webp"
      );
      const pralineRef = ref(storage, "product_images/snacks/Praline.png");
      const wafflesRef = ref(
        storage,
        "product_images/snacks/Protein Waffles.png"
      );

      //Urls
      const anabolicUrl = await getDownloadURL(anabolicRef);
      const trueUrl = await getDownloadURL(trueRef);
      const beastUrl = await getDownloadURL(beastRef);
      const creatineUrl = await getDownloadURL(creatineRef);
      const omegaUrl = await getDownloadURL(omegaRef);
      const nightUrl = await getDownloadURL(nightRef);
      const carnitineUrl = await getDownloadURL(carnitineRef);
      const magnesiumUrl = await getDownloadURL(magnesiumRef);
      const moxyUrl = await getDownloadURL(moxyRef);
      const betaUrl = await getDownloadURL(betaRef);
      const maltodextrineUrl = await getDownloadURL(maltodextrineRef);
      const bcaasUrl = await getDownloadURL(bcaasRef);
      const multiUrl = await getDownloadURL(multiRef);
      const peanutUrl = await getDownloadURL(peanutRef);
      const pralineUrl = await getDownloadURL(pralineRef);
      const wafflesUrl = await getDownloadURL(wafflesRef);

      //Mapping
      const newUrlMapping = {
        "True Whey": trueUrl,
        "Anabolic Whey": anabolicUrl,
        "Beast Pink": beastUrl,
        "Creatine Monohydrate": creatineUrl,
        "Omega-3's": omegaUrl,
        "Night Burn": nightUrl,
        "Carnitine": carnitineUrl,
        "Magnesium Shot": magnesiumUrl,
        "MOXY energy drink": moxyUrl,
        "Beta Alanine": betaUrl,
        "Maltodextrine": maltodextrineUrl,
        "BCAA's": bcaasUrl,
        "Multi Vitamin": multiUrl,
        "Peanut Butter": peanutUrl,
        "Praline": pralineUrl,
        "Protein Waffles": wafflesUrl,
      };
      setUrlMapping(newUrlMapping);

      //Data
      setProteinData((prevProteinData) =>
        prevProteinData.map((proteinItem) => ({
          ...proteinItem,
          img: urlMapping[proteinItem.label] || proteinItem.img,
        }))
      );
      setCreatineData((prevCreatineData) =>
        prevCreatineData.map((creatineItem) => ({
          ...creatineItem,
          img: urlMapping[creatineItem.label] || creatineItem.img,
        }))
      );
      setOtherData((prevOtherData) =>
        prevOtherData.map((otherItem) => ({
          ...otherItem,
          img: urlMapping[otherItem.label] || otherItem.img,
        }))
      );
      setPreWorkoutsData((prevPreWorkoutsData) =>
        prevPreWorkoutsData.map((preWorkoutsItem) => ({
          ...preWorkoutsItem,
          img: urlMapping[preWorkoutsItem.label] || preWorkoutsItem.img,
        }))
      );
      setAminoAcidsData((prevAminoAcidsData) =>
        prevAminoAcidsData.map((aminoAcidsItem) => ({
          ...aminoAcidsItem,
          img: urlMapping[aminoAcidsItem.label] || aminoAcidsItem.img,
        }))
      );
      setVitaminsData((prevVitaminsData) =>
        prevVitaminsData.map((vitaminsItem) => ({
          ...vitaminsItem,
          img: urlMapping[vitaminsItem.label] || vitaminsItem.img,
        }))
      );
      setSnacksData((prevSnacksData) =>
        prevSnacksData.map((snacksItem) => ({
          ...snacksItem,
          img: urlMapping[snacksItem.label] || snacksItem.img,
        }))
      );
    } catch (error) {
      console.error("Error fetching images:", error);
    }
  }

  useEffect(() => {
    fetchData();
    fetchImages();
  }, []);

  useEffect(() => {
    if (urlMapping[productName]) {
      setProductImage(urlMapping[productName]);
    }
  }, [productName, urlMapping]);

  return (
    <>
      <div className="Background2">
        <div className="Description">
          <div className="RightSide">
            <div className="TitleAndVolume">
              <h2>{productName}</h2>
              <div className="Details">
              {renderDetails(allProductsData, productName)}
              </div>
            </div>
            {matchedParagraph && <p>{matchedParagraph.p}</p>}
            <div className="SubNote">
              <sub>*All purchases and deliveries are made in store.</sub>
              <sub>
                <Link to={`/Contact`}>
                  <span class="material-symbols-outlined">
                    subdirectory_arrow_right
                  </span>
                  Contact us here
                </Link>
              </sub>
            </div>
          </div>
          <div className="LeftSide">
            {productImage && <img src={productImage} alt={productName} />}
          </div>
        </div>
      </div>
    </>
  );
};

export default SupplementDescription;
