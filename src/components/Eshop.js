import "./styles/Eshop.css";
import React, { useState, useEffect } from "react";
import { doc, getDoc } from "firebase/firestore";
import { db } from "../firebase";
import { Link } from "react-router-dom";
import { getDownloadURL, ref, listAll, getStorage } from "firebase/storage";

function Eshop() {
  const [creatineData, setCreatineData] = useState([]);
  const [aminoAcidsData, setAminoAcidsData] = useState([]);
  const [preWorkoutsData, setPreWorkoutsData] = useState([]);
  const [vitaminsData, setVitaminsData] = useState([]);
  const [otherData, setOtherData] = useState([]);
  const [snacksData, setSnacksData] = useState([]);
  const [proteinData, setProteinData] = useState([]);

  // const [loading, setLoading] = useState(true);

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
      const urlMapping = {
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
    console.log();
  }, []);


  const Proteins = () => {
    return (
      <>
        {proteinData.map((protein, index) => {
          return (
            <div className="ProductCard" key={index}>
              <label>{protein.label}</label>
              {/* Create a link to the product details page */}
              <Link to={`/Supplements/${encodeURIComponent(protein.label)}`}>
                <img
                  src={protein.img}
                  alt={protein.label}
                  className="CardImage"
                />
              </Link>
              <span className="Click">Go to description</span>
            </div>
          );
        })}
      </>
    );
  };
  const Creatines = () => {
    return (
      <>
        {creatineData.map((creatine, index) => {
          return creatine.volume >= 1 ? (
            <div className="ProductCard" key={index}>
              <label>{creatine.label}</label>
              <Link to={`/Supplements/${encodeURIComponent(creatine.label)}`}>
                <img
                  src={creatine.img}
                  alt={creatine.label}
                  className="CardImage"
                />
              </Link>
              <span className="Click">Go to description</span>
            </div>
          ) : (
            <div className="ProductCard" key={index}>
              <label>{creatine.label}</label>
              <div>Out of stock!</div>
              <span className="Click">Go to description</span>
            </div>
          );
        })}
      </>
    );
  };

  const AminoAcids = () => {
    return (
      <>
        {aminoAcidsData.map((aminoAcids, index) => {
          return aminoAcids.volume >= 1 ? (
            <div className="ProductCard" key={index}>
              <label>{aminoAcids.label}</label>
              <Link to={`/Supplements/${encodeURIComponent(aminoAcids.label)}`}>
                <img
                  src={aminoAcids.img}
                  alt={aminoAcids.label}
                  className="CardImage"
                />
              </Link>
              <span className="Click">Go to description</span>
            </div>
          ) : (
            <div className="ProductCard" key={index}>
              <label>{aminoAcids.label}</label>
              <div>Out of stock!</div>
              <span className="Click">Go to description</span>
            </div>
          );
        })}
      </>
    );
  };

  const PreWorkouts = () => {
    return (
      <>
        {preWorkoutsData.map((preWorkouts, index) => {
          return preWorkouts.volume >= 1 ? (
            <div className="ProductCard" key={index}>
              <label>{preWorkouts.label}</label>
              <Link to={`/Supplements/${encodeURIComponent(preWorkouts.label)}`}>
                <img
                  src={preWorkouts.img}
                  alt={preWorkouts.label}
                  className="CardImage"
                />
              </Link>
              <span className="Click">Go to description</span>
            </div>
          ) : (
            <div className="ProductCard" key={index}>
              <label>{preWorkouts.label}</label>
              <div>Out of stock!</div>
              <span className="Click">Go to description</span>
            </div>
          );
        })}
      </>
    );
  };

  const Vitamins = () => {
    return (
      <>
        {vitaminsData.map((vitamins, index) => {
          return vitamins.volume >= 1 ? (
            <div className="ProductCard" key={index}>
              <label>{vitamins.label}</label>
              <Link to={`/Supplements/${encodeURIComponent(vitamins.label)}`}>
                <img
                  src={vitamins.img}
                  alt={vitamins.label}
                  className="CardImage"
                />
              </Link>
              <span className="Click">Go to description</span>
            </div>
          ) : (
            <div className="ProductCard" key={index}>
              <label>{vitamins.label}</label>
              <div>Out of stock!</div>
              <span className="Click">Go to description</span>
            </div>
          );
        })}
      </>
    );
  };

  const Other = () => {
    return (
      <>
        {otherData.map((other, index) => {
          return other.volume >= 1 ? (
            <div className="ProductCard" key={index}>
              <label>{other.label}</label>
              <Link to={`/Supplements/${encodeURIComponent(other.label)}`}>
                <img
                  src={other.img}
                  alt={other.label}
                  className="CardImage"
                />
              </Link>
              <span className="Click">Go to description</span>
            </div>
          ) : (
            <div className="ProductCard" key={index}>
              <label>{other.label}</label>
              <div>Out of stock!</div>
              <span className="Click">Go to description</span>
            </div>
          );
        })}
      </>
    );
  };

  const Snacks = () => {
    return (
      <>
        {snacksData.map((snacks, index) => {
          return snacks.volume >= 1 ? (
            <div className="ProductCard" key={index}>
              <label>{snacks.label}</label>
              <Link to={`/Supplements/${encodeURIComponent(snacks.label)}`}>
                <img
                  src={snacks.img}
                  alt={snacks.label}
                  className="CardImage"
                />
              </Link>
              <span className="Click">Go to description</span>
            </div>
          ) : (
            <div className="ProductCard" key={index}>
              <label>{snacks.label}</label>
              <div>Out of stock!</div>
              <span className="Click">Go to description</span>
            </div>
          );
        })}
      </>
    );
  };
  return (
    <div className="Container">
      {/* {loading ? <div>Loading...</div> : null} */}
      <div className="LeftContainer2">
        <div className="Menu">
          <h2>Menu</h2>
          <ul>
            <h1>Protein</h1>
            <a href="#Protein">Anabolic Whey</a>
            <a href="#Protein">True whey</a>
            <a href="#Protein">Beast Pink Whey</a>
          </ul>
          <ul>
            <h1>Creatine</h1>
            <a href="#Creatine">Creatine Monohydrate</a>
          </ul>
          <ul>
            <h1>Amino Acids</h1>
            <a href="#AminoAcids">BCAAs</a>
          </ul>
          <ul>
            <h1>Pre-workouts</h1>
            <a href="#Pre">Maltodextrine</a>
            <a href="#Pre">Beta Alanine</a>
            <a href="#Pre">MOXY Energy Drink</a>
          </ul>
          <ul>
            <h1>Vitamins</h1>
            <a href="#Vitamins">Multi-Vitamin</a>
          </ul>
          <ul>
            <h1>Other Supplements</h1>
            <a href="#Other">Magnesium Shots</a>
            <a href="#Other">Omega-3s</a>
          </ul>
          <ul>
            <h1>Healthy Snacks & Foods</h1>
            <a href="#Snacks">Peanut Butter</a>
            <a href="#Snacks">Praline</a>
            <a href="#Snacks">Protein Waffles</a>
          </ul>
        </div>
      </div>
      <div className="RightContainer2">
        <div className="Categories" tabIndex="-1" id="Protein">
          <h1>Protein</h1>
          <div className="Cards">
            <Proteins />
          </div>
        </div>
        <div className="Categories" tabIndex="-1" id="Creatine">
          <h1>Creatine</h1>
          <div className="Cards">
            <Creatines />
          </div>
        </div>
        <div className="Categories" tabIndex="-1" id="AminoAcids">
          <h1>Amino Acids</h1>
          <div className="Cards">
            <AminoAcids />
          </div>
        </div>
        <div className="Categories" tabIndex="-1" id="Pre">
          <h1>Pre-workouts</h1>
          <div className="Cards">
            <PreWorkouts />
          </div>
        </div>
        <div className="Categories" tabIndex="-1" id="Vitamins">
          <h1>Vitamins</h1>
          <div className="Cards">
            <Vitamins />
          </div>
        </div>
        <div className="Categories" tabIndex="-1" id="Other">
          <h1>Other Supplements</h1>
          <div className="Cards">
            <Other />
          </div>
        </div>
        <div className="Categories" tabIndex="-1" id="Snacks">
          <h1>Healthy Snacks & Foods</h1>
          <div className="Cards">
            <Snacks />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Eshop;
