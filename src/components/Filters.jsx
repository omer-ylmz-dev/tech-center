function Filters({settingTags,sortingTag,colorTag}){
	return(
		<>
			<select 
			name="sortingType" 
			className="filter" 
			defaultValue={sortingTag ? sortingTag : ""} 
			onChange={(e) => settingTags(e)}
			>
				<option value="" className="disabledOption">Sort</option>
				<option value="price_asc">Price (Ascending)</option>
				<option value="price_desc">Price (Descending)</option>
				<option value="rate_asc">Rating (Ascending)</option>
				<option value="rate_desc">Rating (Descending)</option>
			</select>
			
			<select 
			name="color" 
			className="filter" 
			defaultValue={colorTag ? colorTag : "all_colors"} 
			onChange={(e) => settingTags(e)}
			>
				<option className="disabledOption">Color</option>
				<option value="all_colors">All</option>
				<option value="Gray">Gray</option>
				<option value="Silver">Silver</option>
				<option value="Black">Black</option>
				<option value="Blue">Blue</option>
				<option value="Green">Green</option>
				<option value="Yellow">Yellow</option>
				<option value="Transparent">Transparent</option>
				<option value="Red">Red</option>
			</select>
		</>
	)
}

export default Filters
