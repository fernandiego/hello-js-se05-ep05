
exports.up = knex => knex.schema.createTable("contato", tb => {
    tb.increments("idcontato")
    tb.string("nomecontato").notNullable()
    tb.timestamp("dtcriacaocontato").notNullable().defaultTo(knex.fn.now())
})

exports.down = knex => knex.schema.dropTable("contato")
