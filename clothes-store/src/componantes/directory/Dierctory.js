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
                    // linkUrl: 'shop/hats'
                    linkUrl : 'hats'
                  },
                  {
                    title: 'jackets',
                    imageUrl: 'https://i.ibb.co/px2tCc3/jackets.png',
                    id: 2,
                    // linkUrl: 'shop/jackets'
                    linkUrl :''
                  },
                  {
                    title: 'sneakers',
                    imageUrl: 'https://i.ibb.co/0jqHpnp/sneakers.png',
                    id: 3,
                    // linkUrl: 'shop/sneakers'
                    linkUrl :''

                  },
                  {
                    title: 'womens',
                    imageUrl: 'https://i.ibb.co/GCCdy8t/womens.png',
                    size: 'large',
                    id: 4,
                    // linkUrl: 'shop/womens'
                    linkUrl :''

                  },
                  {
                    title: 'mens',
                    imageUrl: 'https://i.ibb.co/R70vBrQ/men.png',
                    size: 'large',
                    id: 5,
                    // linkUrl: 'shop/mens'
                    linkUrl :''

                  }
             ]
        }
    }
    


    render() {
        return (
            <div className='directory-menu' > 
            
              {this.state.sections.map( ({ id , ...otherSectionProps})  => ( // link with down 

                  <MenuItem  key={id}  {...otherSectionProps}   />  //title={title} imageUrl={imageUrl}  size={size}  change to another way pass props

              ))} 
              
              
            </div> 
        )
    }
}

export default Dierctory;
