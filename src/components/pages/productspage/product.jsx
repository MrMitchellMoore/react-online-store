import React, {useState} from 'react';

export default function Product({name, imageUrl, price, tags, colors}) {
  const [hover, setHover] = useState (false);
  return (
    <div
      className={`product ${hover && 'hover'}`}
      onMouseEnter={() => setHover (true)}
      onMouseLeave={() => setHover (false)}
    >
      <div className="card">
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
          {colors.map (color => (
            <span className="tag" key={color}>{color}</span>
          ))}
        </div>
      </div>
    </div>
  );
}
