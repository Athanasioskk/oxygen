import "./styles/Navbar.css";
import React, { useState, useEffect } from 'react';
import { Link } from "react-router-dom";

function Navbar() {
    const titles = [
        "Oxygen",
    ];

    const routes = [
        {
            title: 'Oxygen',
            route: 'Home',
            id: 1,
        },
        {
            title: 'QandA',
            route: 'QandA',
            id: 2,
        },
        {
            title: 'Programs',
            route: 'Programs',
            id: 3,
        },
        {
            title: 'Subscriptions',
            route: 'Subscriptions',
            id: 4,
        },
        {
            title: 'Contact',
            route: 'Contact',
            id: 5,
        },
        {
            title: 'Profile',
            route: 'Profile',
            id:6,
        }
    ];

    const Buttons = () => {
        return (
            <>
                {routes.slice(1).map((routes, index) => {
                    return <Link key={index} to={routes.route}>
                        <button>{routes.title}</button>
                    </Link>
                })}
            </>
        )
    }

    const useToggle = (initialState) => {
        const [toggleValue, setToggleValue] = useState(initialState);

        const toggler = () => { setToggleValue(!toggleValue) };
        return [toggleValue, toggler]
    };


    const [toggle, setToggle] = useToggle();


    return (
        <>
            <div className="Bar">
                <div className="Navitems" >
                    <div className="Navitem1">
                        <Link to="/">
                            <button>{titles[0]}</button>
                        </Link>
                    </div>
                    <div className="Navitem2">
                        <Buttons />
                    </div>
                    <div className="Navitem3">
                        <button onClick={setToggle}>
                            <link rel="stylesheet" href="https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:opsz,wght,FILL,GRAD@40,400,1,-25" />
                            <span className="material-symbols-outlined">
                                menu
                            </span>
                        </button>
                    </div>
                </div>
                {toggle && (
                    <div className="List">
                        <div className="Navitems2">
                            <div className="Navitem4">
                                <Buttons />
                            </div>
                        </div>
                    </div>
                )}
            </div>
        </>
    );
}

export default Navbar;
