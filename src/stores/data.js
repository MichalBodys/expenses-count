
import { defineStore } from 'pinia'

export default defineStore('data',{
  state:() => ({
    cards:[],
    carRate: '0.3',
    dailyRate: '15'

  })
})