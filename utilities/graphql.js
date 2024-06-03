import axios from "axios"
const endpoint = process.env.NEXT_PUBLIC_GQL_END_POINT||"https://admin.ms-ca.com/graphql";
const headers = {
  "content-type": "application/json",
  "Authorization": "<token>"
};
//demo request
const graphqlQuery = {
  "operationName": "GetPostsEdges",
  "query": `query GetFirstTen {
    posts (first:10){
      edges {
        node {
          id
          title
          date
          content
          slug
        }
      }
    }
  }`,
  "variables": {}
};
const gqlRequest = async (graphqlQuery,controller) => {
  try {
    let response;
    if(controller){
       response = await axios({
        url: endpoint,
        method: 'post',
        headers: headers,
        data: graphqlQuery,
      signal: controller.signal
      });
       
    }
    else{
       response = await axios({
        url: endpoint,
        method: 'post',
        headers: headers,
        data: graphqlQuery,
     
      });
    }
   
    console.log("response of gql", response)
    const { data } = response
    console.log("data of response", data)
    if (data.errors === undefined) {
      return { success: true, data: data.data }
    }
    return { success: false }

  }
  catch (err) {

    console.log("gqlRequest error", err)
    return { success: false }
  }
  finally{
    if(controller){
      controller.abort();
    }
  }


}

export default gqlRequest