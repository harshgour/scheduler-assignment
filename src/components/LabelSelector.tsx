import React, { useContext } from "react";
import GlobalContext from "../context/GlobalContext";

type Props = {};

type LabelType = {
	label: string;
	checked: boolean | undefined;
};

const LabelSelector = (props: Props) => {
	const { labels, updateLabel } = useContext(GlobalContext);

	return (
		<>
			{labels.length > 0 && (
				<div className='border-t p-5'>
					<p className='text-gray-500 font-bold'>Labels</p>
					{labels.map((lbl: LabelType, idx: number) => {
						return (
							<label key={idx} className='block mt-3 items-center'>
								<input
									type='checkbox'
									checked={lbl.checked}
									className={`form-checkbox h-5 w-5 rounded focus:ring-0 cursor-pointer`}
									style={{ color: lbl.label }}
									onChange={() =>
										updateLabel({ label: lbl.label, checked: !lbl.checked })
									}
								/>
								<span className='ml-2 text-gray-700 capitalize'>
									{lbl.label}
								</span>
							</label>
						);
					})}
				</div>
			)}
		</>
	);
};

export default LabelSelector;
