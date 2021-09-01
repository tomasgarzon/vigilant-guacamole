# vigilant-guacamole

 docker pull openapitools/openapi-generator-online
 
 docker run -d -e GENERATOR_HOST=http://12.34.56.78 -p 80:8080 openapitools/openapi-generator-online
 
 Run locally as a client:
 
* docker run --rm -v "${PWD}:/local" openapitools/openapi-generator-cli generate     -i https://raw.githubusercontent.com/tomasgarzon/vigilant-guacamole/main/schema_application.yml --additional-properties=packageVersion=0.1.0,packageName=nucoro_api    -g python     -o /local/out/python
* docker run --rm -v "${PWD}:/local" openapitools/openapi-generator-cli generate     -i https://raw.githubusercontent.com/tomasgarzon/vigilant-guacamole/main/schema_application.yml --additional-properties=packageVersion=0.1.0    -g kotlin     -o /local/out/kotlin
* docker run --rm -v "${PWD}:/local" openapitools/openapi-generator-cli generate     -i https://raw.githubusercontent.com/tomasgarzon/vigilant-guacamole/main/schema_application.yml --additional-properties=packageVersion=0.1.0    -g swift5     -o /local/out/swift5

