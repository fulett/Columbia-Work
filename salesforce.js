const nforce = require('nforce');

const salesForceConnection = nforce.createConnection({
    clientId: '3MVG9nthuDc9owbfrApV3rOs9BjW9UqOcP58rsLcfEk2eNsFM4hoJzLKX.mr9Yiz1Xp5I6qCTW._d5pkhx0o4',
    clientSecret: '8236272859127458682',
    redirectUri: 'https://login.salesforce.com/services/oauth2/success',
    mode: 'single',
    autoRefresh: true
})

const salesForceLoginInfo = {
    username: 'sstud@salesforcetrilogyclass.edu',
    password: 'student1t4knpcaLF3q8PSgzx7p5hGf9'
}

const salesForceQueryFunction = (conn, loginInfo) => async (query) =>{
    // Determine if the application is connected to the
    // salesForce server, if not, login and wait for
    // the connection to succeed
    if (!conn.oauth) {
        await conn.authenticate(loginInfo);
    }

    // Once the connection has succeeded, run the query and
    // return the results
    return conn.query({ query });
}


const createKudos = (conn, loginInfo) => async (insertObj) => {
  // Determine if the application is connected to the
  // salesForce server, if not, login and wait for
  // the connection to succeed
  if (!conn.oauth) {
    await conn.authenticate(loginInfo);
  }

  const newKudos = nforce.createSObject('Kudos__c');
  newKudos.set('Comment__c', insertObj.Comment__c);
  newKudos.set('Name', insertObj.Name);
  newKudos.set('Receiver__c', insertObj.Receiver__c);
  newKudos.set('Sender__c', insertObj.Sender__c);

  return conn.insert({ sobject: newKudos });
}

module.exports = {
    query: salesForceQueryFunction(salesForceConnection, salesForceLoginInfo),
    createKudos: createKudos(salesForceConnection, salesForceLoginInfo)
};

