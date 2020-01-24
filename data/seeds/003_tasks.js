
exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex('tasks').truncate()
    .then(function () {
      // Inserts seed entries
      return knex('tasks').insert([
        {id: 1, description: 'Use Pomodoro for breaks', notes: "It's super important to step away and take a breath", completed: false, project_id: 1},
        {id: 2, description: "Cook the food", notes: "", completed: true, project_id: 2},
        {id: 3, description: "Put away the dishes", notes: "It may be smart to clean them before putting them away", completed: false, project_id: 2},
        {id: 4, description: "Clean up mess", notes: "That includes your face", completed: false, project_id: 2},
      ]);
    });
};
