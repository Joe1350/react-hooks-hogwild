import React, { useState } from "react";
import Nav from "./Nav";
import FilterAndSort from "./FilterAndSort";
import PigTiles from "./PigTiles";
import Details from "./Details";

import hogs from "../porkers_data";

function App() {
	const [pigs, setPigs] = useState(hogs)
	const [details, setDetails] = useState("");
	const [greasedToggle, setGreasedToggle] = useState(false);
	const [sortBy, setSortBy] = useState('Name');

	// const pigsToDisplay = pigs
	// 	.filter(pig => {
	// 		if (greasedToggle) return pig.greased ? pig : null
	// 		else return pig
	// 	})
	// 	.sort((pig1, pig2) => {
	// 		if (sortBy === "Weight") return pig1.weight - pig2.weight
	// 		else return pig1.name.localeCompare(pig2.name)
	// 	})

	function handleGreasedToggle(value) {
		if (value) {
			const newPigs = pigs.filter((pig) => pig.greased)
			setPigs(newPigs)
		} else {
			setPigs(hogs)
		}
		setGreasedToggle(value)
	}

	function handleSortBy(value) {
		const newPigs = pigs.sort((pig1, pig2) => {
			if (value === "Weight") {
				return pig1.weight - pig2.weight
			} else {
				return pig1.name.localeCompare(pig2.name)
			}
		})
		setPigs(newPigs)
		setSortBy(value)
	}

	function handleDisplayDetails(name) {
		const detailsToDisplay = pigs.find(
			pig => pig.name === name ? pig : null
		)
		setDetails(detailsToDisplay)
	}

	return (
		<div className="App">
			<Nav />
			<div id="flex">
				<div id="pig-tiles">
					<FilterAndSort
						greasedToggle={greasedToggle}
						onGreasedToggle={handleGreasedToggle}
						SortBy={sortBy}
						onSortBy={handleSortBy}
					/>
					<PigTiles
						pigs={pigs}
						onDisplayDetails={handleDisplayDetails}
					/>
				</div>
				<div id="details-container">
					{details ? <Details details={details} /> : null}
				</div>
			</div>
		</div>
	);
}

export default App;
