

import {baseURL} from "../constants";
import axios from "axios";

const apiService= axios.create({baseURL})

apiService.interceptors.request.use((request)=> {
    request.headers['Authorization'] = 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJlNThjY2JjYmFhZmIzMzExMmU0NzI0MWZlZjc5OTkzNSIsInN1YiI6IjY1ZGIwNTEwZTljMGRjMDE4NmMxYmZjZCIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.jr00Y_vZ0aw7RFbHgF2LXdcG0lPDufLGiL8myNBFG08'
    return request
})


export {apiService}