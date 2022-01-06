exports.up = (knex) => {
  return knex.schema.createTable('comment', (table) => {
    table.increments('id');
    table.string('order');
    table.string('date');
    table.string('comment');
  })
};

exports.down = (knex) => {
  return knex.schema.dropTable('comment');
};
