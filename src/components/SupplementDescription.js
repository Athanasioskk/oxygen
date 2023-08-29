import "./styles/SupplementDescription.css";
import React, { useEffect } from "react";
import { useParams } from "react-router-dom";
import { getDownloadURL, ref, getStorage } from "firebase/storage";
import { useState } from "react";


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
        fetchImages();
    }, [])


    useEffect(() => {
        if (urlMapping[productName]) {
            setProductImage(urlMapping[productName]);
        }
    }, [productName, urlMapping]);

    return (
        <>
            <div className="Background2">
                <div className="Description">
                    <h2>{productName}</h2>
                    {productImage && <img src={productImage} alt={productName} />}
                </div>
            </div>
        </>
    );
};

export default SupplementDescription;