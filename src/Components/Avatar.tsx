export default function Avatar() {
	return (
		<>
			{/* LABELS ARE BAD */}
			{/* Less borders */}
			{/* Whitespace is your friend */}
			{/* Create a heirachy */}

			<div className='avatar__container'>
				<div className='avatar__image-container'>
					<img src='./giraffe.jpeg' alt='giraffe' />
				</div>
				<div className='avatar__content-container'>
					<ul>
						<li>
							<span>Name:</span> Sally the Giraffe
						</li>
						<li>
							<span>Job Title:</span> Project Manager
						</li>
						<li>
							<span>Email:</span> sallytheskux@hotmail.com
						</li>
						<li>
							<span>Ph:</span> 021123456
						</li>
					</ul>
				</div>
			</div>
		</>
	);
}
