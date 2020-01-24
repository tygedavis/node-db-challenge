
exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex('resources').truncate()
    .then(function () {
      // Inserts seed entries
      return knex('resources').insert([
        {id: 1, name: 'Computer', description: '', project_id: 1},
        {id: 2, name: 'Google', description: 'Data giant that knows everything about anything', project_id: 1},
        {id: 3, name: 'Oven', description: "Don't touch it when hot", project_id: 2},
        {id: 4, name: 'Pan', description: 'Will cook food when hot', project_id: 2},
        {id: 5, name: 'Cleaning Supplies', description: 'Used to clean up big messes', project_id: 2},
      ]);
    });
};
