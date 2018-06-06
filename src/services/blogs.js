import axios from 'axios'
const baseUrl = '/api/blogs'

let token = null

const setToken = (newToken) => {
  console.log("setting token...", newToken)
  token = `bearer ${newToken}`;
  console.log("token set: ", token)
}
const getAll = () => {
  const request = axios.get(baseUrl)
  return request.then(response => response.data)
}

const createBlogPost = async (blogPost) => {
  console.log("creating...", token)
  const config = {
    headers: {'authorization': token}
  }

  console.log("config: ", config)
  const response = await axios.post(baseUrl, blogPost, config)
  return response.data
}

export default { getAll, setToken, createBlogPost }