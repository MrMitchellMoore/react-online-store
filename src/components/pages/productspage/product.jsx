import React, {useState, useContext} from 'react';
import cartContext from '../../../app/cart-context';

export default function Product({id, name, imageUrl, price, tags, colors}) {
  const [hover, setHover] = useState (false);
  const {addToCart} = useContext (cartContext);
  return (
    <div
      className={`product ${hover && 'hover'}`}
      onMouseEnter={() => setHover (true)}
      onMouseLeave={() => setHover (false)}
    >
      <div className="card">
        {hover &&
          <div className="card-title">
            <div
              className="add-to-cart"
              onClick={() =>
                addToCart ({
                  id,
                  name,
                  price,
                })}
            >
              + Add to Cart
            </div>
          </div>}
        <img src={imageUrl} alt={name} />
        <div className="name">{name}</div>
        <div className="price">Price: ${price}</div>
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
