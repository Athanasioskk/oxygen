import "./styles/Eshop.css";
import React, { useState, useEffect } from "react";
import { doc, getDoc } from "firebase/firestore";
import { db } from "../firebase";
import { storage } from "../firebase";
import { getDownloadURL, ref, listAll } from "firebase/storage";

function Eshop() {
  const [creatineData, setCreatineData] = useState([]);
  const [aminoAcidsData, setAminoAcidsData] = useState([]);
  const [preWorkoutsData, setPreWorkoutsData] = useState([]);
  const [vitaminsData, setVitaminsData] = useState([]);
  const [otherData, setOtherData] = useState([]);
  const [snacksData, setSnacksData] = useState([]);
  const [proteinData, setProteinData] = useState([]);
  const [proteinImages, setProteinImages] = useState(null);

  // getDownloadURL(proteinRef).then((url) => {
  //   setProteinImages(url);
  //   console.log(proteinImages);
  // });

  const [imageUrls, setImageUrls] = useState([]);

  useEffect(() => {
    const fetchImages = async () => {
      try {
        const imagesRef = ref(storage, "product_images/protein");
        const imageList = await listAll(imagesRef);

        const urls = await Promise.all(
          imageList.items.map(async (imageRef) => {
            const url = await getDownloadURL(imageRef);
            return url;
          })
        );

        setImageUrls(urls);
        console.log(urls);
      } catch (error) {
        console.log("Error fetching images:", error);
      }
    };
    fetchImages();
  }, []);

  async function fetchData() {
    const docRef = doc(db, "products", "P2VKQYB2z6YIM2khjaWN");
    const docSnap = await getDoc(docRef);
    if (docSnap.exists()) {
      setProteinData(docSnap.data().protein);
      setCreatineData(docSnap.data().creatine);
      setAminoAcidsData(docSnap.data().aminoAcids);
      setOtherData(docSnap.data().other);
      setVitaminsData(docSnap.data().vitamins);
      setPreWorkoutsData(docSnap.data().preWorkouts);
      setSnacksData(docSnap.data().snacks);

      const fieldToUpdate = "img";

      docRef
        .doc("protein")
        .update({
          [fieldToUpdate]: imageUrls,
        })
        .then(() => {
          console.log("Document updated successfully!");
        })
        .catch((error) => {
          console.error("Error updating document:", error);
        });
      // setProteinData((previousState) => [...previousState, { img: imageUrls }]);
    } else {
      setProteinData([]);
      setCreatineData([]);
      setOtherData([]);
      setAminoAcidsData([]);
      setVitaminsData([]);
      setPreWorkoutsData([]);
      setSnacksData([]);
    }
  }

  useEffect(() => {
    fetchData();
  }, []);

  const Proteins = () => {
    return (
      <>
        {proteinData.map((protein, index) => (
          <div className="ProductCard" key={index}>
            <label>{protein.label}</label>
            <img
              src={protein.img}
              alt={protein.label}
              className="CardImage"
              id="protimg"
            ></img>
            {/* <Proteinimages /> */}
            <span className="Click">Go to description</span>
          </div>
        ))}
      </>
    );
  };

  const Creatines = () => {
    return (
      <>
        {creatineData.map((creatine, index) => {
          return (
            <div className="ProductCard" key={index}>
              <label>{creatine.label}</label>
              <img
                src={creatine.img}
                alt={creatine.label}
                className="CardImage"
              ></img>
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
          return (
            <div className="ProductCard" key={index}>
              <label>{aminoAcids.label}</label>
              <img
                src={aminoAcids.img}
                alt={aminoAcids.label}
                className="CardImage"
              ></img>
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
          return (
            <div className="ProductCard" key={index}>
              <label>{preWorkouts.label}</label>
              <img
                src={preWorkouts.img}
                alt={preWorkouts.label}
                className="CardImage"
              ></img>
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
          return (
            <div className="ProductCard" key={index}>
              <label>{vitamins.label}</label>
              <img
                src={vitamins.img}
                alt={vitamins.label}
                className="CardImage"
              ></img>
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
          return (
            <div className="ProductCard" key={index}>
              <label>{other.label}</label>
              <img
                src={other.img}
                alt={other.label}
                className="CardImage"
              ></img>
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
          return (
            <div className="ProductCard" key={index}>
              <label>{snacks.label}</label>
              <img
                src={snacks.img}
                alt={snacks.label}
                className="CardImage"
              ></img>
              <span className="Click">Go to description</span>
            </div>
          );
        })}
      </>
    );
  };

  return (
    <div className="Container">
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
