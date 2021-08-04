import * as axios from 'axios';

const instance = axios.create({
  baseURL: 'http://localhost:3004/'
})


export const usersAPI = {

  async getUsers() {
    return await instance.get(`users`).then((r) => r.data);
  },

  async deleteUser(userId) {
    return await instance.delete(`users/${userId}`);
  },

  async editUser(userId, userData) {
    return await instance.put(`users/${userId}`, userData);
  },

  async addUser(userData) {
    return await instance.post(`users`, userData);
  },

  async addContact(userId, userData) {
    return await instance.patch(`users/${userId}`, userData);
  },

  async deleteContact(userId, userData) {
    return await instance.patch(`users/${userId}`, userData);
  },

  async editContact(userId, userData) {
    return await instance.patch(`users/${userId}`, userData);
  }
}
