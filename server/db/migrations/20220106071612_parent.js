
exports.up = (knex) => {
  return knex.schema.alterTable('comment', table => {
    table.integer('parent_id');
  })

};

exports.down = (knex) => {
  return knex.schema.alterTable('comment', table => {
    table.dropColumn('parent_id');
  })
};
