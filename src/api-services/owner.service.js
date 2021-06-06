// import Axios from 'axios'
// const RESOURCE_NAME = '/owner'

export default {

  owners: [{ id: 0, name: 'Jonathan', address: 'Rua A', dateOfBirth: '23/08/1986', accounts: [{ id: 0, accountType: 'admin', dateCreated: '23/08/2021' }] }, { id: 1, name: 'Dayana', address: 'Rua B', dateOfBirth: '01/02/1988', accounts: [{ id: 1, accountType: 'user', dateCreated: '01/02/2021' }] }, { id: 2, name: 'Lindalva', address: 'Rua C', dateOfBirth: '16/12/1964', accounts: [{ id: 2, accountType: 'guest', dateCreated: '16/12/2021' }] }],

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
    const msgErro = 'Usuário já existe'
    if (data.name === 'Jonathan') {
      throw msgErro
    }
    this.owners.push(data)
  },
  update (id, data) {
    // return Axios.put(`${RESOURCE_NAME}/${id}`, data)
    let owner = this.owners.find(o => o.id === id)
    const msgErro = 'Usuário não pode ser alterado'
    if (owner.name === 'Jonathan') {
      throw msgErro
    }
    owner.name = data.name
    owner.dateOfBirth = data.dateOfBirth
    owner.address = data.address
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
