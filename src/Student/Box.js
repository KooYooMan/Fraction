import React, { useState } from 'react';
import Progress from './Progress';
import Ending from "./MainScreen/Ending";
import './box.css';

function Frills() {
	return (
		<>
			<div className="bg_cell"></div>
			<div className="bg_color_stuff"></div>
			<div className="bg_stuff"></div>
			<img className="bg_color" src="bg_color.jpg" />
		</>
	);
}

const Box = (Component, total, mainScreen) => 
	function Boxed(props) {
		const [progress, setProgress] = useState(0);

		const success = () => {
			setProgress(progress + 1);
		};

		const fail = () => {
			if (progress > 0) {
				setProgress(progress - 1);
			}
		};

		if (progress >= total) return <Ending />;

		return (
			<>
				<Frills />
				<div className='box'>
					<div className='box__head'>
						<a className='back' onClick={mainScreen}>
							<div className='back__arrow'/>
							<span>Back</span>
						</a>
						<Progress progress={progress} total={total} />
					</div>
					<div className='box__content'>
						<Component success={success}
							fail={fail}
							{...props}
						/>
					</div>
				</div>
			</>
		);
}

export default Box;
