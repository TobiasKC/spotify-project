import SearchBar from "./searchBar";
import TextButton from "./textButton";

const dashboardHeader = () => {
    return ( 
    <header>
        <h1>Dashboard</h1>
        <SearchBar placeholder = {"Search for Songs..."}/>
        <TextButton class= {"navigation"} text = {"Queue"}/>
        <TextButton class= {"navigation"} text = {"Settings"}/>
    </header>
     );
}
 
export default dashboardHeader;