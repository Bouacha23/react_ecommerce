
import {createApi, fetchBaseQuery} from "@reduxjs/toolkit/query/react"


const BasketPhSlice = createApi({
    reducerPath : "BasketPhSlice" ,
    baseQuery : fetchBaseQuery({baseUrl : " http://localhost:3000"}) ,
    endpoints : (builder) => (
        {
            getBasket : builder.query({
                query : ()  => "/Bashket"
            })
        }
    )
})



export const {useGetBasketQuery} = BasketPhSlice
export default BasketPhSlice