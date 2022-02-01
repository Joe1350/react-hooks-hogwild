import React from "react";

function FilterAndSort({
    greasedToggle,
    onGreasedToggle,
    sortBy,
    onSortBy
}) {
    function handleGreasedToggleChange() {
		onGreasedToggle(!greasedToggle)
	}

	function handleSortBy(e) {
		onSortBy(e.target.value)
	}

    return (
        <div >	
            <label htmlFor="greased">Show Only Greased</label>
            <input
                id="greased"
                name="greased"
                type="checkbox"
                checked={greasedToggle} 
                onChange={handleGreasedToggleChange}
            />
            <br></br>
            <label htmlFor="sort">Sort By:</label>
            <select
                id="sort"
                name="sort"
                value={sortBy}
                onChange={handleSortBy}
            >
                <option value="Name">Name</option>
                <option value="Weight">Weight</option>
            </select>
        </div>
    )
}

export default FilterAndSort;
