export default function ProductCard() {
	return (
		<div className='productCard__container'>
			<div className='productCard__image-container'>
				<img src='./cactus.jpg' alt='cactus' />
			</div>
			<div className='productCard__content'>
				<div className='productCard__content-heading'>
					<h3>Cactus</h3>
					<p>$40</p>
				</div>
				<p className='productCard__description'>
					A beautiful cactus that wont die no matter how hard you try
					to kill it.
				</p>

				<div className='productCard__control'>
					<button className='ghost'>Delete listing</button>
					<button className='secondary'>Edit</button>
					<button className='primary'>Publish</button>
				</div>
			</div>
		</div>
	);
}
