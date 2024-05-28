import {createApi, fetchBaseQuery} from "@reduxjs/toolkit/query/react"


const  Plants = createApi({
    reducerPath : "createApi",
    baseQuery : fetchBaseQuery({baseUrl : " http://localhost:3000"}),
    endpoints : (builder) => ({
        getPlants : builder.query({
            query : () => "/product"
        })
    }),
})

export default Plants
export  const {useGetPlantsQuery}  = Plants

