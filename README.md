# Config
To setup bucket 
* Add CORS - create file some.json
````
[
  {
  "origin": [ "https://fitness-opal.vercel.app/"],
  "method": ["PUT"],
  "responseHeader": ["Content-Type"],
  "maxAgeSeconds": 3600
  }
]
```` 
with command `gsutil cors set some.json gs://fitness-images`
* Setup public ACL `gsutil defacl ch -u AllUsers:R gs://fitness-images`
# microservice-template

Template for creating new microservice in NodeJS. More info in my [article](https://medium.com/@szczerbicki.pawel/master-clean-architecture-in-nodejs-5de7407b3b90)

## How to run
* Run `yarn install`
* Copy `.env.template` to `.env` to use `dotenv`
* Set `DB_URL`
* Run in watch mode with `yarn dev`
* Go to localhost:3000. If everything is ok you should see `"status": "up"`.


## Commands
`yarn dev` to run in watch mode

`yarn build` to build locally to JS

`yarn start` to start version compiled to JS

