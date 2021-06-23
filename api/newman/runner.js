const newman = require('newman');
const collection = require('../newman/collections/todoist_actions_test.postman_collection.json');
const environments = require('../newman/environments/todoistNew.postman_environment.json');

newman.run(
  {
    collection: collection,
    environment: environments,
    bail: true,
    envVar: [
      { "key": "todoist_baseUrl", "value": `${process.env.TODOIST_API_BASE_URL}` },
      { "key": "todoist_API_Key", "value": `${process.env.TODOIST_API_KEY}` }
    ],
    reporters: ['cli', 'htmlextra'],
    reporter: {
      htmlextra: {
        export: './reports/html/mcx-html-report.html'
      }
    },
    iterationCount: 1,
  },
  function results(err) {
    if (err) {
      throw err;
    }
  },
);
