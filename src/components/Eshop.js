import "./styles/Eshop.css";
import React, { useState, useEffect } from 'react';
import { getAuth, onAuthStateChanged } from "firebase/auth";


function Eshop() {

    return (
        <div className="Container">
            <div className="LeftContainer">
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
            <div className="RightContainer">
                <div className="Categories" tabindex="-1" id="Protein">
                    <h1>Protein</h1>
                    <div className="Cards">
                        <div className="ProductCard">
                            <label>Anabolic Whey</label>
                            <p>small description of product</p>
                        </div>
                        <div className="ProductCard">
                            <label>True Whey</label>
                            <p>small description of product</p>
                        </div>
                        <div className="ProductCard">
                            <label>Beast Pink</label>
                            <p>small description of product</p>
                        </div>

                    </div>
                </div>
                <div className="Categories" tabindex="-1" id="Creatine">
                    <h1>Creatine</h1>
                    <div className="Cards">
                        <div className="ProductCard">
                            <label>Creatine Monohydrate</label>
                            <p>small description of product</p>
                        </div>
                    </div>
                </div>
                <div className="Categories" tabindex="-1" id="AminoAcids">
                    <h1>Amino Acids</h1>
                    <div className="Cards">
                        <div className="ProductCard">
                            <label>BCAAs</label>
                            <p>small description of product</p>
                        </div>
                    </div>
                </div>
                <div className="Categories" tabindex="-1" id="Pre">
                    <h1>Pre-workouts</h1>
                    <div className="Cards">
                        <div className="ProductCard">
                            <label>Maltodextrine</label>
                            <p>small description of product</p>
                        </div>
                        <div className="ProductCard">
                            <label>Beta Alanine</label>
                            <p>small description of product</p>
                        </div>
                        <div className="ProductCard">
                            <label>MOXY Energy Drink</label>
                            <p>small description of product</p>
                        </div>

                    </div>
                </div>
                <div className="Categories" tabindex="-1" id="Vitamins">
                    <h1>Vitamins</h1>
                    <div className="Cards">
                        <div className="ProductCard">
                            <label>Multi Vitamin</label>
                            <p>small description of product</p>
                        </div>
                    </div>
                </div>
                <div className="Categories" tabindex="-1" id="Other">
                    <h1>Other Supplements</h1>
                    <div className="Cards">
                        <div className="ProductCard">
                            <label>Magnesium Shots</label>
                            <p>small description of product</p>
                        </div>
                        <div className="ProductCard">
                            <label>Omega-3s</label>
                            <p>small description of product</p>
                        </div>

                    </div>
                </div>
                <div className="Categories" tabindex="-1" id="Snacks">
                    <h1>Healthy Snacks & Foods</h1>
                    <div className="Cards">
                        <div className="ProductCard">
                            <label>Peanut Butter</label>
                            <p>small description of product</p>
                        </div>
                        <div className="ProductCard">
                            <label>Praline</label>
                            <p>small description of product</p>
                        </div>
                        <div className="ProductCard">
                            <label>Protein Waffles</label>
                            <p>small description of product</p>
                        </div>

                    </div>
                </div>
            </div>
        </div>
    )
}

export default Eshop;

