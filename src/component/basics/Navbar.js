import React, {useState} from 'react'

const Navbar = ({filterItem, menuList } ) => {
    
    const [showMediaIcons, setShowMediaIcons] = useState(false);
    
    return (
        
        <>
           <nav className="navbar">
        <div className= {showMediaIcons ? "btn-group mobile-menu-link": "btn-group" }>
         {
            menuList.map((curElem)=> {

            return (<button className="btn-group__item" onClick={() => filterItem(curElem)}>{curElem}</button>)
                   
     
            })
        }
        </div>
 
     <div className="icon" onClick = { () => setShowMediaIcons(!showMediaIcons)}>
        
        <i class="fa fa-bars"></i>
        </div>

        </nav> 


        </>

    )
}

export default Navbar
