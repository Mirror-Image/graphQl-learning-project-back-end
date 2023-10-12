import { RESTDataSource } from 'apollo-datasource-rest'

const BASE_URL = 'https://swapi.dev/api'

export class API extends RESTDataSource {
  constructor() {
    super()
    this.baseURL = BASE_URL
  }

  async getStarships() {
    return this.get('starships')
  }
}
