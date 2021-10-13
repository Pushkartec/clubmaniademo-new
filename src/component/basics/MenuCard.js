import React from 'react'
import './style.css'

const MenuCard = ({menuData}) => {
    return (
        <>
          <section className="main-card--cointainer">
        {
          
            menuData.map((curElem)=> {

                const {id, name, image, category, rating, views, link} = curElem;
                return (
                    <>
                    <div className="card-container" key={id}>
                        
                    <div className="card" >
                       <img src={image} alt="images" className="card-img" />
                        <div className="card-name">{name}</div>
                        <div className="card-rating">
                            <div className="star-rating">⭐ {rating}</div>
                            <div className="views">|{views}</div>
                        </div>
                    </div>
                </div>
                </> 
                )
            })
        }
          </section>  
        </>
    )
}

export default MenuCard
