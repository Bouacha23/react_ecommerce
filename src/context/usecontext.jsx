import { createContext } from "react"
const DataContext = createContext();

export function DataProv ({children}) {

    const TeamMember = [ 
    {id:1 ,img: " https://th.bing.com/th/id/OIP.AldmboOfYm4Q1tboP3LrdgHaHa?pid=ImgDet&w=161&h=161&c=7 "  , name:"andrea smith "  , job : "co-fonder , office manager"} , 
    {id:3 ,img: " https://th.bing.com/th/id/OIP.AldmboOfYm4Q1tboP3LrdgHaHa?pid=ImgDet&w=161&h=161&c=7 "  , name:"andrea smith "  , job : "co-fonder , office manager"} ,
    {id:4 ,img: " https://th.bing.com/th/id/OIP.AldmboOfYm4Q1tboP3LrdgHaHa?pid=ImgDet&w=161&h=161&c=7 "  , name:"andrea smith "  , job : "co-fonder , office manager"}, 
    {id:5 ,img: " https://th.bing.com/th/id/OIP.AldmboOfYm4Q1tboP3LrdgHaHa?pid=ImgDet&w=161&h=161&c=7 "  , name:"andrea smith "  , job : "co-fonder , office manager"}, ]
    
    const comment = [
        {id :3  , name : "dwayne bender ", img: " https://th.bing.com/th/id/OIP.AldmboOfYm4Q1tboP3LrdgHaHa?pid=ImgDet&w=161&h=161&c=7 "  , job : "Connect with a live host to explore a variety of topics or browse our entire demo library. an experienced developer, we have an option for you." , time : 2 } ,
        {id :3  , name : "dwayne bender ", img: " https://th.bing.com/th/id/OIP.AldmboOfYm4Q1tboP3LrdgHaHa?pid=ImgDet&w=161&h=161&c=7 "  , job : "Connect with a live host to explore a variety of topics or browse our entire demo library. an experienced developer, we have an option for you." , time : 2 } ,
        {id :3  , name : "dwayne bender ", img: " https://th.bing.com/th/id/OIP.AldmboOfYm4Q1tboP3LrdgHaHa?pid=ImgDet&w=161&h=161&c=7 "  , job : "Connect with a live host to explore a variety of topics or browse our entire demo library. an experienced developer, we have an option for you." , time : 2 } ]
    return (
    <DataContext.Provider value={{TeamMember , comment}}>
                {children}
    </DataContext.Provider>
    )
}
export default DataContext