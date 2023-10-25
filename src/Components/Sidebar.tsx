import { useState } from 'react';
import { IconContext } from 'react-icons';
import { SlMenu } from 'react-icons/sl';
import { TfiClose } from 'react-icons/tfi';

export default function Sidebar() {
	const [open, setOpen] = useState(false);

	const handleSidebar = () => {
		setOpen((prev) => !prev);
	};

	return (
		<div className={open ? 'sidebar sidebar--open' : 'sidebar'}>
			<IconContext.Provider
				value={{ style: { fontSize: '1.7rem' }, color: '#072ac8' }}
			>
				<button
					className='sidebar__btn'
					onClick={() => handleSidebar()}
				>
					{open ? <TfiClose /> : <SlMenu />}
				</button>

				<ul className='sidebar__navigation'>
					<li
						className={
							open
								? 'sidebar__nav-link sidebar__nav-link--visible'
								: 'sidebar__nav-link'
						}
					>
						<a>Home</a>
					</li>

					<li
						className={
							open
								? 'sidebar__nav-link sidebar__nav-link--visible'
								: 'sidebar__nav-link'
						}
					>
						<a>Portfolio</a>
					</li>
					<li
						className={
							open
								? 'sidebar__nav-link sidebar__nav-link--visible'
								: 'sidebar__nav-link'
						}
					>
						<a>Contact</a>
					</li>
				</ul>
			</IconContext.Provider>
		</div>
	);
}
