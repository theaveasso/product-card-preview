import React from 'react';
import './styles.css';

// assets
import cart from '../assets/images/icon-cart.svg';
import product from '../assets/images/image-product-desktop.jpg';

const Card = () => {
	return (
		<div className='card'>
			<div className='card__container'>
				<img className='card__product' src={product} alt='product' />
				<div className='card__info'>
					<p className='card__info-product'>perfume</p>
					<h1 className='card__info-title'>
						Gabrielle Essence <br /> Eau De Parfum
					</h1>
					<p className='card__info-desc'>
						A floral, solar and voluptuous interpretation composed
						by Olivier Polge, Perfumer-Creator for the House of
						CHANEL.
					</p>
					<div className='card__info-price'>
						<h2>$149.99</h2>
						<p>$169.99</p>
					</div>
					<div className='card__info-cart'>
						<img src={cart} alt='cart' />
						<button>Add to Cart</button>
					</div>
				</div>
			</div>
		</div>
	);
};

export default Card;
