exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex('projects').truncate()
    .then(function () {
      // Inserts seed entries
      return knex('projects').insert([
        {id: 1, name: 'Sprint Challenge', description: 'Finish the sprint challenge within 3 hours to get a good score.', completed: false},
        {id: 2, name: 'Make Breakfast', description: 'Starting the day with breakfast is awesome', completed: true},
      ]);
    });
};
