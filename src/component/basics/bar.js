import React from 'react'
import './style.css';
import Catalogue from './barApi.js';
import MenuCard from './MenuCard'
import Navbar from './Navbar';

const uniqueList = [...new Set(Catalogue.map((curElem) => {
    return curElem.category;
} )), "All"]
console.log(uniqueList)




const Bar = () => {
    const [menuData, setMenuData] = React.useState(Catalogue);
    const[menuList, setMenuList] = React.useState(uniqueList);

    const filterItem = (category) =>{

        if(category === "All"){ 
            setMenuData(Catalogue)
            return
        }


        const updatedList = Catalogue.filter((curElem) => {
                return curElem.category === category;
        })
        setMenuData(updatedList)
    }


    return (
        <>
            <Navbar filterItem = {filterItem } menuList ={menuList} />
          <MenuCard menuData={menuData} />
        </>
    )
}

export default Bar
