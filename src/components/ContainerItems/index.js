import React from "react";
import { ItemsContainer as Items} from "../ContainerItems/styles";

function ItemsContainer({children, isBlur}){

    return <Items isBlur={isBlur}>{children}</Items>
}

export default ItemsContainer