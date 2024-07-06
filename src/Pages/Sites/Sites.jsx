import React from "react";
import Header from "../../Composants/Header/Header";
import Window from "../../Composants/Window/Window";
import DescriptionSites from "../../Composants/DescriptionSites/DescriptionSites";
import ConstructionSites from "../../Composants/ConstructionSItes/ConstructionSItes";
import "../Sites/Sites.scss";

function Sites(){
    return(
        <>
        <Header />
        <ConstructionSites />
        <DescriptionSites />
        <Window />
        </>
    )
}

export default Sites;