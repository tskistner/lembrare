import axios from 'axios';
class FileService {

  constructor() {
    console.log("Service is constructed");
  }

  uploadFileToServer(data) {
    //returns Promise object
    return this.getRestClient().post('/service', data);
}

  getRestClient() {
    if (!this.serviceInstance) {
      this.serviceInstance = axios.create({
        baseURL: 'http://localhost:8080/',
        timeout: 10000,
        headers: {
            'Content-Type': 'application/json'
          },
      });
    }
    return this.serviceInstance;
  }
}

export default (new FileService());