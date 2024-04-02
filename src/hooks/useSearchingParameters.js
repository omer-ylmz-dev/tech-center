import {useSearchParams} from "react-router-dom"
import {useState,useEffect} from "react"
import {useDispatch} from "react-redux"

const useSearchingParameters = () => {
	const dispatch = useDispatch()
	const [search,setSearch] = useSearchParams()
	const [searchTags,setSearchTags] = useState(
		{
			sortingType:search.get("sortingType") || "",
			color:search.get("color") || "all_colors" || ""
		})
	
	const settingTags = (e) => {
		setSearchTags(prev => ({...prev, [e.target.name]:e.target.value}))
	}
	
	
	return {search,setSearch,searchTags,setSearchTags,settingTags}
}

export default useSearchingParameters


