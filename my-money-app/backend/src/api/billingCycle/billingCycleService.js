const BillingCycle = require('./billingCycle')
const errorHandler = require('../commons/errorHandler')

// metodos a serão usados pelo "node-restful"
BillingCycle.methods(['get', 'post', 'put', 'delete'])
// para RETORNAR OBJ ATUALIZADO e validar no verbo HTTP PUT
BillingCycle.updateOptions({ new: true, runValidators: true })
// aplicando middleware de errorHandler
BillingCycle.after('post', errorHandler)
BillingCycle.after('put', errorHandler)

// nova rota de count, não precisa fazer o 'register', pois já é feito routes.js (http://localhost:3003/api/billingCycles/count)
BillingCycle.route('count', (req, res, next) => {
  BillingCycle.count((error, value) => {
    if (error) {
      res.status(500).json({ errors: [error] })
    } else {
      res.json({ value })
    }
  })
})

// nova rota de summary, não precisa fazer o 'register', pois já é feito routes.js (http://localhost:3003/api/billingCycles/summary)
BillingCycle.route('summary', (req, res, next) => {
  BillingCycle.aggregate(
    {
      $project: { credit: { $sum: "$credits.value" }, debt: { $sum: "$debts.value" } }
    },
    {
      $group: { _id: null, credit: { $sum: "$credit" }, debt: { $sum: "$debt" } }
    },
    {
      $project: { _id: false, credit: true, debt: true }
    },
    (error, result) => {
      if (error) {
        res.status(500).json({ erros: [error] })
      } else {
        res.json(result[0] || { credit: 0, debt: 0 })
      }
    }
  )
})

module.exports = BillingCycle