var Connection = require("tedious").Connection;
var config = require("../database");
var Request = require("tedious").Request;
var TYPES = require("tedious").TYPES;

class SaveController {
  async save(req, res) {
    const {
      client_name,
      client_association,
      cel_number,
      teamviewer_id,
      date,
      begin_time,
      end_time,
      problem,
      done,
      status,
      obs,
    } = req.body;

    var connection = new Connection(config);

    connection.connect(function (err) {
      // If no error, then good to proceed.
      console.log(err);
      console.log("Connected");
      var request = new Request(
        "INSERT INTO remote_access (client_name,client_association,cel_number,teamviewer_id,date,begin_time, end_time,problem,done,status,obs) VALUES (@client_name,@client_association,@cel_number,@teamviewer_id,@date,@begin_time,@end_time,@problem,@done,@status,@obs)",

        function (err) {
          if (err) {
            console.log(err);
          }
        }
      );

      request.addParameter("client_name", TYPES.NVarChar, client_name);
      request.addParameter(
        "client_association",
        TYPES.NVarChar,
        client_association
      );
      request.addParameter("cel_number", TYPES.NVarChar, cel_number);
      request.addParameter("teamviewer_id", TYPES.NVarChar, teamviewer_id);
      request.addParameter("date", TYPES.Date, date);
      request.addParameter("begin_time", TYPES.NVarChar, begin_time);
      request.addParameter("end_time", TYPES.NVarChar, end_time);
      request.addParameter("problem", TYPES.NVarChar, problem);
      request.addParameter("done", TYPES.NVarChar, done);
      request.addParameter("status", TYPES.NVarChar, status);
      request.addParameter("obs", TYPES.NVarChar, obs);

      connection.execSql(request); // code where connecting query with req and res obj is written.

      res.send({ success: true });
    });
  }
}

module.exports = new SaveController();
