var addMockRequests = function(requests) {
  return fetch(`http://localhost:8099/_create`, {
    method: 'post',
    body: JSON.stringify(requests),
    headers: {
      'Content-Type': 'application/json'
    }
  });
};

module.exports = {
  addMockRequests: addMockRequests
};
