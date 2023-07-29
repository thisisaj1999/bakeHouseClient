import React from "react";
import ItemCards from "./ItemCards";
import "./styles.scss";

const Items = ({ sideBar }) => {
	return (
		<>
    <h2>Items</h2>
			<div className="itemCardMain">
				<div className="itemStyles">
					<ItemCards sideBar={sideBar} />
					<ItemCards sideBar={sideBar} />
					<ItemCards sideBar={sideBar} />
					<ItemCards sideBar={sideBar} />
					<ItemCards sideBar={sideBar} />
				</div>
				<div className="itemStyles">
					<ItemCards sideBar={sideBar} />
					<ItemCards sideBar={sideBar} />
					<ItemCards sideBar={sideBar} />
					<ItemCards sideBar={sideBar} />
					<ItemCards sideBar={sideBar} />
				</div>
			</div>
		</>
	);
};

export default Items;
