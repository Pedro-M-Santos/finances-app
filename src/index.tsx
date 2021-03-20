import React from 'react'
import ReactDOM from 'react-dom'
import { App } from './App'
import {createServer, Model} from 'miragejs'

createServer({

  models:{
    transaction: Model
  },

  seeds(server){
    server.db.loadData({
      transactions:[
        {
          id: 1,
          title: 'Freelance de website',
          type: 'deposit',
          category: 'Dev',
          amount: 6000,
          createdAt: new Date('2021-02-12 09:00:00')
        },
        {
          id: 2,
          title: 'Freelance de backend',
          type: 'deposit',
          category: 'Dev',
          amount: 3000,
          createdAt: new Date('2021-02-13 08:00:00')
        }
      ]
    })
  },

  routes(){
    this.namespace = 'api'
    this.timing = 1000
    this.get('/transactions',()=>
      this.schema.all('transaction')
    )
    this.post('/transactions',(schema,request)=>{
      const data = JSON.parse(request.requestBody)
      console.clear()
      console.log(schema)
      console.table(data)
      return schema.create('transaction',data)
    },
    {timing: 2000}
    )
  }
})

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);
