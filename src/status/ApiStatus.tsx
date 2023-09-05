type Args = {
    status: "idle" | "success" | "error" | "loading"
};

const ApiStatus = ({status}: Args)=>{
    switch(status){
        case "error":
            return <div></div>
        case "success":
            return <div></div>
        case "idle":
            return <div></div>
        case "loading":
            return <div>Loading...</div>
        default:
            throw Error("Unknown API response")
    }
}

export default ApiStatus