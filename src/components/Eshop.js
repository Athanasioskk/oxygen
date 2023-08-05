import "./styles/Eshop.css";
import React, { useState, useEffect } from "react";
import { doc, getDoc } from "firebase/firestore";
import { db } from "../firebase";
import { storage } from "../firebase";
import { getDownloadURL, ref, listAll, getStorage } from "firebase/storage";

function Eshop() {
  const [creatineData, setCreatineData] = useState([]);
  const [aminoAcidsData, setAminoAcidsData] = useState([]);
  const [preWorkoutsData, setPreWorkoutsData] = useState([]);
  const [vitaminsData, setVitaminsData] = useState([]);
  const [otherData, setOtherData] = useState([]);
  const [snacksData, setSnacksData] = useState([]);
  const [proteinData, setProteinData] = useState([]);

  const [proteinUrls, setProteinUrls] = useState("");
  const [creatineUrls, setCreatineUrls] = useState("");
  const [aminoAcidsUrls, setAminoAcidsUrls] = useState("");
  const [vitaminsUrls, setVitaminsUrls] = useState("");
  const [otherUrls, setOtherUrls] = useState("");
  const [snacksUrls, setSnacksUrls] = useState("");
  const [preWorkoutsUrls, setPreWorkoutsUrls] = useState("");

  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchImages = async (Name, stateSetter) => {
      try {
        const imagesRef = ref(storage, `product_images/${Name}`);
        const imageList = await listAll(imagesRef);

        const urls = await Promise.all(
          imageList.items.map(async (imageRef) => {
            const url = await getDownloadURL(imageRef);
            return url;
          })
        );

        const mappedUrls = urls.map((url) => ({ img: url }));
        stateSetter(mappedUrls);
      } catch (error) {
        console.log(`Error fetching ${Name} images:`, error);
      }
    };

    // Fetch images for each category
    fetchImages("protein", setProteinUrls);
    fetchImages("creatine", setCreatineUrls);
    fetchImages("aminoacids", setAminoAcidsUrls);
    fetchImages("vitamins", setVitaminsUrls);
    fetchImages("other", setOtherUrls);
    fetchImages("snacks", setSnacksUrls);
    fetchImages("preworkout", setPreWorkoutsUrls);

    setLoading(false);
  }, []);

  useEffect(() => {
    async function fetchData() {
      const docRef = doc(db, "products", "P2VKQYB2z6YIM2khjaWN");
      const docSnap = await getDoc(docRef);
      if (docSnap.exists()) {
        const updatedProteinData = docSnap.data().protein.map((item, index) => {
          return {
            ...item,
            img: proteinUrls[index]?.img,
          };
        });
        const updatedCreatineData = docSnap
          .data()
          .creatine.map((item, index) => {
            return {
              ...item,
              img: creatineUrls[index]?.img,
            };
          });
        const updatedAminoAcidsData = docSnap
          .data()
          .aminoAcids.map((item, index) => {
            return {
              ...item,
              img: aminoAcidsUrls[index]?.img,
            };
          });
        const updatedVitaminsData = docSnap
          .data()
          .vitamins.map((item, index) => {
            return {
              ...item,
              img: vitaminsUrls[index]?.img,
            };
          });
        const updatedOtherData = docSnap.data().other.map((item, index) => {
          return {
            ...item,
            img: otherUrls[index]?.img,
          };
        });
        const updatedSnacksData = docSnap.data().snacks.map((item, index) => {
          return {
            ...item,
            img: snacksUrls[index]?.img,
          };
        });
        const updatedPreWorkoutsData = docSnap
          .data()
          .preWorkouts.map((item, index) => {
            return {
              ...item,
              img: preWorkoutsUrls[index]?.img,
            };
          });
        setProteinData(updatedProteinData);
        setCreatineData(updatedCreatineData);
        setAminoAcidsData(updatedAminoAcidsData);
        setOtherData(updatedOtherData);
        setVitaminsData(updatedVitaminsData);
        setPreWorkoutsData(updatedPreWorkoutsData);
        setSnacksData(updatedSnacksData);

        console.log(preWorkoutsData);
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
            ></img>
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
      {loading ? <div>Loading...</div> : null}
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
