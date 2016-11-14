var requests = {};

module.exports = function(app) {
  var getResponseByRequest = function(req) {
    console.log(req._parsedUrl.pathname);
    return requests[`${req.method} ${req._parsedUrl.pathname}`];
  };

  app.use(function(req, res, next) {
    if (req.method === 'OPTIONS') {
      res.status(200).json({});
      return;
    }
    if (req.url === '/_create' || req.url === '/_requests') {
      return next();
    }
    var resp = getResponseByRequest(req);
    if (resp) {
      res.status(resp.statusCode || 200).json(resp);
    } else {
      res.status(200).json({});
    }
  });

  app.post('/_create', function(req,res) {
    console.log('Create Request', req.body);
    for (var path in req.body) {
      requests[path] = req.body[path];
    }
    res.status(200).json({ ok: true });
  });

  app.get('/_requests', function(req, res) {
    res.status(200).json(requests);
  });
};