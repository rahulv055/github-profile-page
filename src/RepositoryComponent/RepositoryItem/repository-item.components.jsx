import React from 'react';




const RepositoryItem = ({ items }) => {
    console.log(items);
    return (
        <div className="repository-item">
            <div className="repository-details">
                <div className="rep-heading">{items.name}</div>
                <div>{items.description}</div>
                <div>{items.language}</div>
            </div>
        </div>
    )
}

export default RepositoryItem;