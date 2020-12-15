var config = {
  server: "192.168.0.12",
  host: "localhost",
  database: "RA_Educat",

  authentication: {
    type: "default",
    options: {
      userName: "sa",
      password: "RA_Educat@1313",
    },
  },

  options: {
    trustedConnection: true,
    encrypt: true,
    enableArithAbort: true,
    trustServerCertificate: true,
  },
};

module.exports = config;
