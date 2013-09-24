var db=require("somedatabase");

app.get("/price", function(req, res) {
	db.openConnection("host", port, function(error, conn) {
		conn.query("SELECT * FROM products WHERE id=?", [ req.param("product")], function(err, results) {
			conn.close();
			res.send(results[0]);
		})
	})
});


