import { Injectable } from '@angular/core';
import axios from 'axios';

@Injectable({
  providedIn: 'root'
})

export class MapControllerService {
  private baseUrl = 'http://localhost:3000';

  constructor() { }

  async getTables() {
    const response = await axios.get(`${this.baseUrl}/show_tables`);
    return response.data[0];
  }

  async registeUser(dataToSend: any) {
    try
    {
      const response = await axios.post(`${this.baseUrl}/api/register_user`, dataToSend);
      return response.data;
    } catch (error) {
      return {status: 'NOK'}
    }
    
  }

  async getPass(user: string) {
    const response = await axios.post(`${this.baseUrl}/api/get_pass`, { user });
    return response.data[0];
  }

  async getUser(user: string) {
    const response = await axios.post(`${this.baseUrl}/api/get_user`, { user });
    return response.data[0];
  }

  async getTasks() {
    const response = await axios.get(`${this.baseUrl}/show_tables`);
    return response.data;
  }

  async getTest() {
    const response = await axios.get(`${this.baseUrl}`);
    return response.data;
  }

  async addTask(task: string) {
    const response = await axios.post(`${this.baseUrl}/tasks`, { task });
    return response.data;
  }
}