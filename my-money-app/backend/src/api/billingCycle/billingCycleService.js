const BillingCycle = require('./billingCycle')

// metodos a serão usados pelo "node-restful"
BillingCycle.methods(['get', 'post', 'put', 'delete'])
// para RETORNAR OBJ ATUALIZADO e validar no verbo HTTP PUT
BillingCycle.updateOptions({ new: true, runValidators: true })

module.exports = BillingCycle