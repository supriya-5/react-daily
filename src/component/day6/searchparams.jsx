
import { useSearchParams } from "react-router-dom";

const SearchParams = () => {
    const searchParams = useSearchParams();
    console.log(searchParams);


  const getData = () => {

    const {data} = searchParams;
    if (data === "brand"){
        return <h1>MobileBrand:{data}</h1>
    }else if (data === "name"){
        return <h1>MobileName:{data}</h1>

    }else{
        return <h1>Now : {data}</h1>
    }
  }


    return (
        <>
      {getData()}
        </>
    )
}

export default SearchParams;