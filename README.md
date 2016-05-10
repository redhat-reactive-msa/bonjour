# bonjour microservice

_Bonjour microservice using NodeJS_

This service connects to the Vert.x event bus and listens for messages on the `bonjour` address. Upon messages, it replies to the sender with a _bonjour_ message.

The detailed instructions to run the Red Hat Reactive MSA demo, can be found at the following repository: https://github.com/redhat-reactive-msa/redhat-reactive-msa

## Execute bonjour locally

Open a command prompt and navigate to the root directory of this microservice.
Type this command to install the dependencies

```
npm install
```

Type this command to execute the application:

```
env NODE_ENV=local npm start
```

This executes `bonjour-service.js`.

The `NODE_ENV` configures the environment in which the service runs. The associated configuration is selected and loaded to configure the event bus bridge.
