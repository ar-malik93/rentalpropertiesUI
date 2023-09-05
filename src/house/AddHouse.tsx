import { useAddHouse } from "../hooks/HouseHook";
import { House } from "../types/house";
import HouseForm from "./HouseForm";

const AddHouse = ()=>{

    const addHouseMutation = useAddHouse();

    const house: House = {
        address:"",
        country:"",
        description:"",
        price:0,
        id:0,
        photo:""
    };

    return(
        
        <HouseForm house={house} submitted={(h)=> addHouseMutation.mutate(h)} />
    )
}

export default AddHouse;