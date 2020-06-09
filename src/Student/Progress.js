import React from 'react';

const width = 465;
const ballWidth = 24;
const marginRight = 3;

export default function Progress({ progress = 0, total = 3 }) {
	const offset = width - total * ballWidth - marginRight;
	const beads = [];
	for (let i = 0; i < total; ++i) {
		const style = i < total - progress ? null : { left: offset };
		beads.push(
			<div className='progress__bead'
				style={style}
				key={i}
			/>
		);
	}

	return (
		<div className='progress'>
			{beads}
		</div>
	);
}
