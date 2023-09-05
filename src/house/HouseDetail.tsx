import { Link, useParams } from "react-router-dom";
import { useFetchHouse } from "../hooks/HouseHook";
import ApiStatus from "../status/ApiStatus";
import { currencyFormatter } from "../config";
import defaultImage from "./defaultPhoto";

const HouseDetail = () => {

    const {id} = useParams();

    if(!id)
        throw Error("No House found with this Id")

    const houseId = parseInt(id)
    const {data, status, isSuccess} = useFetchHouse(houseId);

    if(!isSuccess)
        <ApiStatus status={status} />
    if(!data)
        return <div>No Data Found</div>

    return(
        <div className="row">
        <div className="col-6">
          <div className="row">
            <img
              className="img-fluid"
              src={data.photo ? data.photo : defaultImage}
              alt="House pic"
            />
          </div>
          <Link className="btn btn-primary" to={`/house/update/${data.id}`} > Edit </Link>
        </div>
        <div className="col-6">
          <div className="row mt-2">
            <h5 className="col-12">{data.country}</h5>
          </div>
          <div className="row">
            <h3 className="col-12">{data.address}</h3>
          </div>
          <div className="row">
            <h2 className="themeFontColor col-12">
              {currencyFormatter.format(data.price)}
            </h2>
          </div>
          <div className="row">
            <div className="col-12 mt-3">{data.description}</div>
          </div>          
        </div>

          

      </div>
    )

}


export default HouseDetail

