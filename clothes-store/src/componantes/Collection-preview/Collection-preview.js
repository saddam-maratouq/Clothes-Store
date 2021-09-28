import React from 'react' 
import PreviewItem from '../Preview-item/Preview-item' 

import './Collection-preview.styles.scss'

const  CollectionPreview = ({title,items})  => (

        <div className='collection-preview'>

            

            <h2 className='title'  > {title.toUpperCase()} </h2> 
            <div className='preview'  > 

                {items.filter((item,idx) => idx<4)  /// beacause items  Array and I want to acces the name I have to make a map methode 
                
                .map(({id,...otherItemprops}) => (

                      <PreviewItem  key={id} {...otherItemprops}/> 
                ))}

             </div>
        </div>

)
    
    export default CollectionPreview ; 



 



