
exports.up = function(knex) {
  return knex.schema
    .createTable('tasks', tbl => {
      tbl.increments()
      tbl.text('description')
        .notNullable()
      tbl.text('notes')
      tbl.boolean('completed')
        .defaultTo(false)
      tbl.integer('project_id')
        .unsigned()
        .notNullable()
        .references('id')
        .inTable('projects')
        .onUpdate('CASCADE')
        .onDelete('CASCADE');
    })
};

exports.down = function(knex) {
  return knex.schema
    .dropTableIfExists('tasks');
};
