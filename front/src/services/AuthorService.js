import axios from "axios";

class AuthorService {
  constructor() {
    this.baseUrl = `${process.env.REACT_APP_BASE_ENDPOINT}/authors`;
    this.config = {
      headers: {
        Authorization: localStorage?.getItem("accessToken"),
        Application: "application/json",
      }
    };
  }

  async getAllAuthors() {
    return await axios
      .get(this.baseUrl, this.config)
      .then((resp) => resp.data)
      .catch((err) => console.log(err));
  }

  async getOneAuthor(id) {

    return await axios
      .get(this.baseUrl, this.config)
      .then((resp) => resp.data)
      .catch((err) => console.log(err));
  }

  async postOneAuthor(payload) {
    return await axios
      .post(this.baseUrl, payload, this.config)
      .then((resp) => resp.data)
      .catch((err) => console.log(err));
  }

  async putOneAuthor(id, author) {
    return await axios
      .put(id, author,this.config)
      .then((resp) => resp.data)
      .catch((err) => console.log(err));
  }

  async deleteOneAuthor(id) {
    return await axios
      .delete(id, this.config)
      .then((resp) => resp)
      .catch((err) => console.log(err));
  }
}

export default AuthorService;
