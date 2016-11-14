####API (mock.js)
mock.addMockRequests() - allow you to create a mock request(s)
```
  addMockRequests({
    "POST /todo" : { ok: true, message: 'Success' },
    "GET /todos": [{ task: 'Task 1' }, { task: 'Task 2' } ]
  }).then(done);
```

####Endpoints
GET _requests: to view all the available requests
POST _create: create a mock request