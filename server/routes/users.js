var express = require('express');
var router = express.Router();

/* GET users listing. */
router.get('/', function(req, res, next) {
	if (req.body === 5) {
		res.send('respond with a resource');
	} else {
		res.status(500).send('Something broke');
	}
});

router.get('/test', function(req, res, next) {
  res.send('test');
});

//Respond to a PUT request to the /user route:
router.put('/put', (req, res) => res.send('Got a PUT request at /user'));

//Respond to a DELETE request to the /user route:
router.delete('/del', (req, res) => res.send('Got a DELETE request at /user'));


module.exports = router;
