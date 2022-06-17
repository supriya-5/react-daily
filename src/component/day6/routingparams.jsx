import { useParams } from "react-router-dom"; 

const RoutingParams = () => {
    const params = useParams();
    console.log(params);


const getDynamicData = () =>{
    const {list} = params;
    //ES6 de-structure (params.list)
    if(list === "Bags") {
        return <h1>latest and fashion {list}, for schools,collegeand tourism</h1>
    } else if(list === "dresses"){
        return<h1>summer is begin come and get new {list} for your choices..</h1>
    } else{
        return <h1>Now : {list}</h1>
    };

}
   return(
    <>
    {getDynamicData()}
    </>
   )

}

export default RoutingParams;