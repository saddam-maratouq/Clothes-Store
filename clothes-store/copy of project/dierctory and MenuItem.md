import React, { Component } from 'react' 
import MenuItem from '../menu-item/MenuItem' 

import './Dierctory.style.scss'

 class Dierctory extends Component {

    constructor(props) {
        super(props)
    
        this.state = {
             sections : [
                {
                    title: 'hats',
                    imageUrl: 'https://i.ibb.co/cvpntL1/hats.png',
                    id: 1,
                    linkUrl: 'shop/hats'
                  },
                  {
                    title: 'jackets',
                    imageUrl: 'https://i.ibb.co/px2tCc3/jackets.png',
                    id: 2,
                    linkUrl: 'shop/jackets'
                  },
                  {
                    title: 'sneakers',
                    imageUrl: 'https://i.ibb.co/0jqHpnp/sneakers.png',
                    id: 3,
                    linkUrl: 'shop/sneakers'
                  },
                  {
                    title: 'womens',
                    imageUrl: 'https://i.ibb.co/GCCdy8t/womens.png',
                    size: 'large',
                    id: 4,
                    linkUrl: 'shop/womens'
                  },
                  {
                    title: 'mens',
                    imageUrl: 'https://i.ibb.co/R70vBrQ/men.png',
                    size: 'large',
                    id: 5,
                    linkUrl: 'shop/mens'
                  }
             ]
        }
    }
    


    render() {
        return (
            <div className='directory-menu' > 
            
              {this.state.sections.map( ({ title,imageUrl,id,size})  => (

                  <MenuItem  key={id} title={title} imageUrl={imageUrl}  size={size}  />

              ))}
              
              
            </div> 
        )
    }
}

export default Dierctory;


/////////////////////////////////////////////// 

import React from 'react' 

import './menu-item.styles.scss' 

const MenuItem = ({title ,imageUrl ,size }) => {
    return (
        <div style={{
            background : `url(${imageUrl})` 

        }} 
        > 
               <div   className={`${size} menu-item`} > 
            <div className='content'  > 
            <h1  className='title' >  {title}  </h1> 
            <span className='subtitle'   >  SHOP NOW   </span>  
            </div>
            </div>
        </div>
    )
}

export default MenuItem; 
 

 //////////////////////////// 


 import React from 'react'  
import Dierctory from '../../componantes/directory/Dierctory';

import  './HomePage.style.scss'  


 const  Homepage = () => {
    return (
        <div className='homepage' >
              <Dierctory/> 
        </div>
    )
    }
 
    export default Homepage;