import "./styles/Eshop.css";
import React, { useState, useEffect } from "react";
import { getAuth, onAuthStateChanged } from "firebase/auth";
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

function Eshop() {

  const protein = [
    {
      label: "Anabolic Whey",
      img: anabolic_whey_choco,
    },
    {
      label: "True Whey",
      img: truewhey,
    },
    {
      label: "Beast Pink",
      img: beastpink,
    }
  ];

  const creatine = [
    {
      label: "Creatine Monohydrate",
      img: creatineMonohydrate,
    }
  ];

  const aminoAcids = [
    {
      label: "BCAAs",
      img: bcaas,
    }
  ];

  const preWorkouts = [
    {
      label: "Maltodextrine",
      img: maltodextrin,
    },
    {
      label: "Beta Alanine",
      img: betaAlanine,
    },
    {
      label: "MOXY Energy Drink",
      img: moxy,
    },
  ];

  const vitamins = [
    {
      label: "Multi Vitamin",
      img: multiVitamin,
    }
  ];

  const other = [
    {
      label: "Magnesium Shots",
      img: magnesiumShot,
    },
    {
      label: "Omega-3s",
      img: omega3s,
    },
    {
      label: "Carnitine",
      img: carnitine,
    },
    {
      label: "Night BURN",
      img: nightBurn,
    }
  ];

  const snacks = [
    {
      label: "Peanut Butter",
      img: peanutButter,
    },
    {
      label: "Praline",
      img: praline,
    },
    {
      label: "Protein Waffle",
      img: proteinWaffles,
    }
  ];



  const Proteins = () => {
    return (
      <>
        {protein.map((protein, index) => {
          return (
            <div className="ProductCard" id="AnabolicWheyChoco">
              <label>{protein.label}</label>
              <img
                src={protein.img}
                alt="..."
                className="CardImage"
              ></img>
              <span className="Click">Go to description</span>
            </div>
          )
        })}
      </>
    )
  }

  const Creatines = () => {
    return (
      <>
        {creatine.map((creatine, index) => {
          return (
            <div className="ProductCard" id="AnabolicWheyChoco">
              <label>{creatine.label}</label>
              <img
                src={creatine.img}
                alt="..."
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
        {aminoAcids.map((aminoAcids, index) => {
          return (
            <div className="ProductCard" id="AnabolicWheyChoco">
              <label>{aminoAcids.label}</label>
              <img
                src={aminoAcids.img}
                alt="..."
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
        {preWorkouts.map((preWorkouts, index) => {
          return (
            <div className="ProductCard" id="AnabolicWheyChoco">
              <label>{preWorkouts.label}</label>
              <img
                src={preWorkouts.img}
                alt="..."
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
        {vitamins.map((vitamins, index) => {
          return (
            <div className="ProductCard" id="AnabolicWheyChoco">
              <label>{vitamins.label}</label>
              <img
                src={vitamins.img}
                alt="..."
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
        {other.map((other, index) => {
          return (
            <div className="ProductCard" id="AnabolicWheyChoco">
              <label>{other.label}</label>
              <img
                src={other.img}
                alt="..."
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
        {snacks.map((snacks, index) => {
          return (
            <div className="ProductCard" id="AnabolicWheyChoco">
              <label>{snacks.label}</label>
              <img
                src={snacks.img}
                alt="..."
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
        <div className="Categories" tabindex="-1" id="Protein">
          <h1>Protein</h1>
          <div className="Cards">
            <Proteins />
          </div>
        </div>
        <div className="Categories" tabindex="-1" id="Creatine">
          <h1>Creatine</h1>
          <div className="Cards">
            <Creatines />
          </div>
        </div>
        <div className="Categories" tabindex="-1" id="AminoAcids">
          <h1>Amino Acids</h1>
          <div className="Cards">
            <AminoAcids />
          </div>
        </div>
        <div className="Categories" tabindex="-1" id="Pre">
          <h1>Pre-workouts</h1>
          <div className="Cards">
            <PreWorkouts />
          </div>
        </div>
        <div className="Categories" tabindex="-1" id="Vitamins">
          <h1>Vitamins</h1>
          <div className="Cards">
            <Vitamins />
          </div>
        </div>
        <div className="Categories" tabindex="-1" id="Other">
          <h1>Other Supplements</h1>
          <div className="Cards">
            <Other />
          </div>
        </div>
        <div className="Categories" tabindex="-1" id="Snacks">
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
