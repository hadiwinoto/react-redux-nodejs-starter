/* eslint-disable no-unused-vars */

import Put from "./Put";
import Get from "./Get";
import Post from "./Post";



// Database
const getDatabase = (data,header) => Get(`api/database/hotel`,false,true,header,data)

// Export
const API ={
    master :{
      getDatabase,
       
    },
}

export default API;