import { useParams } from "react-router-dom";
import { useFetchHouse, useUpdateHouse } from "../hooks/HouseHook";
import ApiStatus from "../status/ApiStatus";
import HouseForm from "./HouseForm";

const EditHouse = () =>{

    const updateHouseMutation = useUpdateHouse();
    const {id} = useParams();
    if(!id)
        throw Error ("Need a house id")
    
    const houseId = parseInt(id);

    const {data, status,isSuccess} = useFetchHouse(houseId);
    if(!isSuccess) 
    return <ApiStatus status={status} />

    

    return(
        <HouseForm house={data} submitted={(h) => updateHouseMutation.mutate(h)} />

    )



    
}

export default EditHouse;