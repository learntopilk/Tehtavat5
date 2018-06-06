import axios from 'axios'
const baseUrl = '/api/blogs'

let token = null

const setToken = (token) => {
  token = `bearer ${token}`;
}
const getAll = () => {
  const request = axios.get(baseUrl)
  return request.then(response => response.data)
}

const createBlogPost = (blogPost) => {
  const config = {'Authorization': token}

  const response = axios.post(baseUrl, blogPost, config)
  return response.data
}

export default { getAll, setToken, createBlogPost }