import React from "react";
import PropTypes from "prop-types";
import defaultimage from "somewhere";

const Product = ({ image, names, price }) => {
  const url = image && image.url;
  return (
    <article className="product">
      {/* //if image is not there then only url is checked or default image used */}
      <img src={url || defaultimage} alt={names} />
      <h3>{names} </h3>
      <h3>${price} </h3>
    </article>
  );
};

Product.propTypes = {
  image: PropTypes.object.isRequired,
  names: PropTypes.string.isRequired,
  price: PropTypes.number.isRequired,
};
Product.defaultProps = {
  name: "default name",
  price: 3.99,
  image: defaultimage,
};

export default Product;
