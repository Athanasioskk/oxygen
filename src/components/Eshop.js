import "./styles/Eshop.css";
import React, { useState, useEffect } from "react";
import { doc, getDoc } from "firebase/firestore";
import { db } from "../firebase";


function Eshop() {

  const [creatineData, setCreatineData] = useState([
    {
      label: "",
      img: "",
    }
  ]);

  const [aminoAcidsData, setAminoAcidsData] = useState([
    {
      label: "",
      img: "",
    }
  ]);

  const [preWorkoutsData, setPreWorkoutsData] = useState([
    {
      label: "",
      img: "",
    },
    {
      label: "",
      img: "",
    },
    {
      label: "",
      img: "",
    },
  ]);

  const [vitaminsData, setVitaminsData] = useState([
    {
      label: "",
      img: "",
    }
  ]);

  const [otherData, setOtherData] = useState([
    {
      label: "",
      img: "",
    },
    {
      label: "",
      img: "",
    },
    {
      label: "",
      img: "",
    },
    {
      label: "",
      img: "",
    }
  ]);

  const [snacksData, setSnacksData] = useState([
    {
      label: "",
      img: "",
    },
    {
      label: "",
      img: "",
    },
    {
      label: "",
      img: "",
    }
  ]);


  const [proteinData, setProteinData] = useState([
    {
      label: "",
      img: "",
    },
    {
      label: "",
      img: "",
    },
    {
      label: "",
      img: "",
    }
  ]);

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
    } else {
      setProteinData([{
        label: "",
        img: "",
      },
      {
        label: "",
        img: "",
      },
      {
        label: "",
        img: "",
      }]);
      setCreatineData([{
        label: "",
        img: "",
      }]);
      setOtherData([{
        label: "",
        img: "",
      },
      {
        label: "",
        img: "",
      },
      {
        label: "",
        img: "",
      },
      {
        label: "",
        img: "",
      }]);
      setAminoAcidsData([{
        label: "",
        img: "",
      }]);
      setVitaminsData([{
        label: "",
        img: "",
      }]);
      setPreWorkoutsData([{
        label: "",
        img: "",
      },
      {
        label: "",
        img: "",
      },
      {
        label: "",
        img: "",
      }]);
      setSnacksData([{
        label: "",
        img: "",
      },
      {
        label: "",
        img: "",
      },
      {
        label: "",
        img: "",
      }])
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
              alt={protein.img}
              className="CardImage">
            </img>
            <span className="Click">Go to description</span>
          </div>
        ))}
      </>
    );
  }

  const Creatines = () => {
    return (
      <>
        {creatineData.map((creatine, index) => {
          return (
            <div className="ProductCard" key={index}>
              <label>{creatine.label}</label>
              <img
                src={creatine.img}
                alt={creatine.img}
                className="CardImage"
              ></img>
              <span className="Click">Go to description</span>
            </div>
          )
        })}
      </>
    )
  }

  const AminoAcids = () => {
    return (
      <>
        {aminoAcidsData.map((aminoAcids, index) => {
          return (
            <div className="ProductCard" key={index}>
              <label>{aminoAcids.label}</label>
              <img
                src={aminoAcids.img}
                alt={aminoAcids.img}
                className="CardImage"
              ></img>
              <span className="Click">Go to description</span>
            </div>
          )
        })}
      </>
    )
  }

  const PreWorkouts = () => {
    return (
      <>
        {preWorkoutsData.map((preWorkouts, index) => {
          return (
            <div className="ProductCard" key={index}>
              <label>{preWorkouts.label}</label>
              <img
                src={preWorkouts.img}
                alt={preWorkouts.img}
                className="CardImage"
              ></img>
              <span className="Click">Go to description</span>
            </div>
          )
        })}
      </>
    )
  }

  const Vitamins = () => {
    return (
      <>
        {vitaminsData.map((vitamins, index) => {
          return (
            <div className="ProductCard" key={index}>
              <label>{vitamins.label}</label>
              <img
                src={vitamins.img}
                alt={vitamins.img}
                className="CardImage"
              ></img>
              <span className="Click">Go to description</span>
            </div>
          )
        })}
      </>
    )
  }

  const Other = () => {
    return (
      <>
        {otherData.map((other, index) => {
          return (
            <div className="ProductCard" key={index}>
              <label>{other.label}</label>
              <img
                src={other.img}
                alt={other.img}
                className="CardImage"
              ></img>
              <span className="Click">Go to description</span>
            </div>
          )
        })}
      </>
    )
  }

  const Snacks = () => {
    return (
      <>
        {snacksData.map((snacks, index) => {
          return (
            <div className="ProductCard" key={index}>
              <label>{snacks.label}</label>
              <img
                src={snacks.img}
                alt={snacks.img}
                className="CardImage"
              ></img>
              <span className="Click">Go to description</span>
            </div>
          )
        })}
      </>
    )
  }




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
