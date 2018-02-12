
exports.up = knex => knex.schema
.createTable("produto", tb=> {
    tb.string("nomeproduto")
})

exports.down = knex => knex.schema
.dropTable("produto")   
