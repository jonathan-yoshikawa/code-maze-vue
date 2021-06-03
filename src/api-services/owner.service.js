// import Axios from 'axios'

// const RESOURCE_NAME = '/owner'

export default {

  owners: [{ id: 0, name: 'Jonatan', address: 'Rua A', dateOfBirth: '23/08/1986', accounts: 3 }, { id: 1, name: 'Dayana', address: 'Rua B', dateOfBirth: '01/02/1988', accounts: 1 }, { id: 2, name: 'Lindalva', address: 'Rua C', dateOfBirth: '16/12/1964', accounts: 0 }],

  getAll () {
    // return Axios.get(RESOURCE_NAME)
    return this.owners
  },
  get (id) {
    return this.owners.find(o => o.id === id)
    // return Axios.get(`${RESOURCE_NAME}/${id}`)
  },
  create (data) {
    // return Axios.post(RESOURCE_NAME, data)
  },
  update (id, data) {
    // return Axios.put(`${RESOURCE_NAME}/${id}`, data)
  },
  delete (id) {
    // return Axios.delete(`${RESOURCE_NAME}/${id}`)
    if (id === 0) {
      const msgErro = 'Usuário não pode ser deletado'
      throw msgErro
    }

    let owner = this.owners.find(o => o.id === id)
    let index = this.owners.indexOf(owner)
    this.owners.splice(index, 1)
  },
  getAccounts (id) {
    // return Axios.get(`${RESOURCE_NAME}/${id}/account`)
    return this.owners.find(o => o.id === id)
  }
}
