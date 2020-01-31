import React from "react";

export function DogPhoto({dogPhotos}) {
    return (
        
        <div className="dog-holder">
            {dogPhotos.map(item => (
                <img className="dog-photo" src={item} alt="dog"/>
            ))}
        </div>
        
    );
}