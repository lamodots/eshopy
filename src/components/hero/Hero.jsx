import hero from '../../assets/hero3.png';
import { Link } from 'react-router-dom';
import { TbArrowNarrowRight } from 'react-icons/tb';
import { useEffect, useState } from 'react';
const tags = ['Mobiles', 'Electronics', 'Bags', 'Clothes', 'Jwellery'];

let currentIndex = 0;
const Hero = () => {
	const [tagName, setTagName] = useState('');
	function updateCountdown() {
		const currentItem = tags[currentIndex];
		setTagName(currentItem);
		currentIndex = (currentIndex + 1) % tags.length;
		setTimeout(updateCountdown, 2000);
	}

	useEffect(() => {
		updateCountdown();
	}, []);

	return (
		<>
			<main className='bg-base-100 w-full md:w-9/12 min-h-[92vh] mx-auto flex flex-col items-start justify-center '>
				<div className='container px-6 py-16 mx-auto'>
					<div className='items-center lg:flex'>
						<div className='w-full lg:w-1/2'>
							<div className='lg:max-w-lg'>
								<p className='text-4xl font-bold text-neutral lg:text-4xl'>
									Best place to choose <br /> your{' '}
									<span className='text-blue-500 opacity-100 transition-opacity duration-2000'>
										{tagName}
									</span>
								</p>

								<p className='mt-3 text-gray-600 dark:text-gray-400'>
									Shop from a wide variety of high-quality products at
									unbeatable prices. Fast, easy, and tailored for you!
								</p>

								<Link to='/all'>
									<button className='w-full px-5 py-2 mt-6 text-sm tracking-wider text-white uppercase transition-colors duration-300 transform bg-blue-600 rounded-lg lg:w-auto hover:bg-blue-500 focus:outline-none focus:bg-blue-500'>
										Shop Now
									</button>
								</Link>
							</div>
						</div>

						<div className='flex items-center justify-center w-full mt-6 lg:mt-0 lg:w-1/2'>
							<img
								className='w-full h-full lg:max-w-3xl'
								src='https://merakiui.com/images/components/Catalogue-pana.svg'
								alt='Catalogue-pana.svg'
							/>
						</div>
					</div>
				</div>
			</main>
		</>
	);
};

export default Hero;
