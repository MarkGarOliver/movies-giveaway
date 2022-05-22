// @flow 
import * as React from 'react';
type Props = {
    imgUrl?: string
    title?: string
    desc?: string

};
const cardMovie = (props: Props) => {



    const {imgUrl, title, desc} = props

    // console.log('img ' + imgUrl);
    
    return (
        <div>
                        
            <div className="max-w-sm bg-white rounded-lg border border-gray-200 shadow-md dark:bg-gray-800 dark:border-gray-700">
                
                    <img className="rounded-t-lg w-full h-80" src={imgUrl} alt=""/>
                
                <div className="p-5 text-center">
                
                    <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">{title}</h5>
                    <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">{desc}</p>
      
                </div>
            </div>

        </div>
    );
};

export default cardMovie