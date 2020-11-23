import React from 'react';

export default function Product({id, name, imageUrl, price, tags, colors}) {
  return (
    <div className="product" key={id}>
      <img src={imageUrl} alt={name} />
      <div className="name">{name}</div>
      <div className="price">Price: {price}</div>
      <div className="tags">
        Tags:
        {' '}
        {tags.map (tag => <span className="tag" key={tag}>{tag}</span>)}
      </div>
      <div className="tags">
        Available in:
        {' '}
        {colors.map (color => <span className="tag" key={color}>{color}</span>)}
      </div>
    </div>
  );
}
