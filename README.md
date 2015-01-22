# apigee-volos-cache-api-proxies
This repo provides an example of an Apigee proxy leveraging Volos Cache running on Apigee and locally.

####Getting started

#####1) Install Packages: 

```bash
$ npm install
```

#####2) Start index.js
```bash
node index.js
```
or

```bash
nodemon index.js
```

#####3) Run a few cURL commands

```
curl http://localhost:3000/pets\?name\=rocky --ipv4
```

#####4) Deploy to Apigee Edge - requires [Apigeetool](https://www.npmjs.com/package/apigeetool)
```bash
$ apigeetool deploynodeapp -n 'pets-memory-cache' -d . -m index.js -b '/pets-memory-cache' -u $ae_username -o testmyapi -e test -p $ae_password -R
```

#####5) Run a few cURL commands
```bash
curl http://testmyapi-test.apigee.net/pets-memory-cache/pets\?name\=rocky
```