import Axios from 'axios'

const RESOURCE_NAME = '/owner'
export default {
  getAll () {
    // return Axios.get(RESOURCE_NAME)
    return [{ id: 0, name: 'Jonatan', address: 'Rua A', dateOfBirth: '23/08/1986' }, { id: 1, name: 'Dayana', address: 'Rua B', dateOfBirth: '01/02/1988' }, { id: 2, name: 'Lindalva', address: 'Rua C', dateOfBirth: '16/12/1964' }
    ]
  },
  get (id) {
    return Axios.get(`${RESOURCE_NAME}/${id}`)
  },
  create (data) {
    return Axios.post(RESOURCE_NAME, data)
  },
  update (id, data) {
    return Axios.put(`${RESOURCE_NAME}/${id}`, data)
  },
  delete (id) {
    return Axios.delete(`${RESOURCE_NAME}/${id}`)
  }
}
