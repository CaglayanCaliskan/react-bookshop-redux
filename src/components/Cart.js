import React from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import { sepettenCikar } from '../actions/removeCart';

const Cart = (props) => {
  const totalPrice = props.cart.reduce(
    (total, item) => (total += item.price),
    0
  );
  return (
    <div>
      <h2>
        <Link to='/'> Back Book List</Link>{' '}
        <span>Your Cart {props.cart.length} items</span>
      </h2>

      <h3>Total Price: &#8378; {totalPrice.toFixed(2)} </h3>
      {props.cart.map((book) => (
        <div key={book.id} className='book'>
          <img src={book.image} alt='Simyacı' />
          <div>
            <h4>{book.name} </h4>
            <p>Yazar: {book.author}</p>
            <p>Fiyat: &#8378; {book.price} </p>
            <button>-</button>
            <button>Sepetten Çıkar</button>
            <button>+</button>
          </div>
        </div>
      ))}
    </div>
  );
};
const mapStateToProps = (state) => {
  return {
    booklist: state.booklist,
    cart: state.cart,
    ahmet: [],
  };
};

export default connect(mapStateToProps, { sepettenCikar })(Cart);
