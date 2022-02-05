import React from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import { sepeteEkle } from '../actions/addCart';

const Products = (props) => {
  return (
    <div>
      <h2>
        <span>Book List</span>
        <Link to='/cart'>Cart: {props.cart.length} </Link>
      </h2>
      {props.booklist.map((book) => (
        <div key={book.id} className='book'>
          <img src={book.image} alt='Simyaci' />
          <div>
            <h4>{book.name}</h4>
            <p>Yazar: {book.author} </p>
            <p>Fiyat: &#8378; {book.price} </p>
            <button onClick={() => props.sepeteEkle(book)}>Sepete Ekle</button>
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
  };
};

export default connect(mapStateToProps, { sepeteEkle })(Products);
