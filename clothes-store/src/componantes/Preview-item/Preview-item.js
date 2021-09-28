import React from 'react' 

import './Preview-item.styles.scss' //

const PreviewItem = ({imageUrl,name,price,id}) => (


    <div className='collection-item'>

        <div className='image' 
        
        style={{
            backgroundImage : `Url(${imageUrl })`
        }}   />  
        
         <div  className='collection-footer'>  

         <span className='name'>   {name}   </span>  

         <span className='price'>  {price}   </span>
       
         </div>   

    </div>
)


export default PreviewItem ; 