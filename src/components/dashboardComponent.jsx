import DashboardHeader from "./dashboardHeader";
import DashboardAlbum from "./dashboardAlbum";

const dashboardComponent = () => {
    return ( 
    <>
    <DashboardHeader/>    
    <DashboardAlbum albumCover = {"https://upload.wikimedia.org/wikipedia/en/d/df/RedHotChiliPeppersCalifornication.jpg"}/>
    </>
     );
}
 
export default dashboardComponent;