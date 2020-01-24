
exports.up = function(knex) {
  return knex.schema
    .createTable('projects', tbl => {
      tbl.increments();
      tbl.text('name', 50)
        .notNullable()
      tbl.text('description')
      tbl.boolean('completed')
        .notNullable()
        .defaultTo(false);
    })
};

exports.down = function(knex) {
  return knex.schema
    .dropTableIfExists('projects');
};
