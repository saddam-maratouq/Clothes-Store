 import React, { Component } from 'react' 
import CollectionPreview from '../../componantes/Collection-preview/Collection-preview.js'
  import shop_Data from './Shop.Data.js'
 
 export class ShopPage extends Component {

    constructor(props) {
        super(props)
    
        this.state = {
             collections : shop_Data
        }
    }
    
     render() { 

        const {collections} = this.state
         return (
             <div  className='shop-page'>
                 
             {collections.map (({id ,...otherCollectionsprops}) => (

                 <CollectionPreview  key={id}  {...otherCollectionsprops} />

             ) )}

             </div>
         )
     }
 }
 
 export default ShopPage;
 