import axios from "axios";

class CategoryService {
  constructor() {
    this.baseUrl = `${process.env.REACT_APP_BASE_ENDPOINT}/categories`;
    this.config = {
      headers: {
        Authorization: localStorage?.getItem("accessToken"),
        Application: "application/json",
      }
    };
  }

  async getAllCategories() {
    return await axios.get(this.baseUrl).then((resp) => resp.data);
  }

  async getOneCategory(id){
    const url = `${this.baseUrl}/${id}`;
    return await axios.get(url).then((resp) => resp.data);
  }

  async deleteOneCategory(id) {
    const url = `${this.baseUrl}/${id}`;
    return await axios.delete(url,this.config)
    .then((resp) => resp)
    .catch(err => err.response.status);
  }

  async postOneCategory(category) {
    return await axios.post(this.baseUrl, category,this.config).then((resp) => resp.data);
  }

  async putOneCategory(id,category){
    const url = `${this.baseUrl}/${id}`;
    console.log(url)
    return await axios.put(url,category,this.config).then(resp => resp.data);
  }

  
}

export default CategoryService;
