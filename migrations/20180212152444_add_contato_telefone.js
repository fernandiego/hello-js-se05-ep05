
exports.up = knex => knex.schema
    .table("contato", tb=> {
        tb.string("telefonecontato")
  
})

exports.down = knex => knex.schema
.table("contato", tb=> {
    tb.dropColumn("telefonecontato")
})
