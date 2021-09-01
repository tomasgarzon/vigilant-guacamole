/**
 * Nucoro API
 * No description
 *
 * The version of the OpenAPI document: 4.175.0
 * 
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 *
 */


import ApiClient from "../ApiClient";
import NationalityCreate from '../model/NationalityCreate';
import NationalityList from '../model/NationalityList';
import NationalityUpdate from '../model/NationalityUpdate';
import PaginatedNationalityListList from '../model/PaginatedNationalityListList';
import PatchedNationalityUpdate from '../model/PatchedNationalityUpdate';

/**
* Nationlity service.
* @module api/NationlityApi
* @version 4.175.0
*/
export default class NationlityApi {

    /**
    * Constructs a new NationlityApi. 
    * @alias module:api/NationlityApi
    * @class
    * @param {module:ApiClient} [apiClient] Optional API client implementation to use,
    * default to {@link module:ApiClient#instance} if unspecified.
    */
    constructor(apiClient) {
        this.apiClient = apiClient || ApiClient.instance;
    }


    /**
     * Callback function to receive the result of the clientNationalityCreate operation.
     * @callback module:api/NationlityApi~clientNationalityCreateCallback
     * @param {String} error Error message, if any.
     * @param {module:model/NationalityCreate} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Create nationality for a client
     * @param {String} clientUuid 
     * @param {module:model/NationalityCreate} nationalityCreate 
     * @param {module:api/NationlityApi~clientNationalityCreateCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:model/NationalityCreate}
     */
    clientNationalityCreate(clientUuid, nationalityCreate, callback) {
      let postBody = nationalityCreate;
      // verify the required parameter 'clientUuid' is set
      if (clientUuid === undefined || clientUuid === null) {
        throw new Error("Missing the required parameter 'clientUuid' when calling clientNationalityCreate");
      }
      // verify the required parameter 'nationalityCreate' is set
      if (nationalityCreate === undefined || nationalityCreate === null) {
        throw new Error("Missing the required parameter 'nationalityCreate' when calling clientNationalityCreate");
      }

      let pathParams = {
        'client_uuid': clientUuid
      };
      let queryParams = {
      };
      let headerParams = {
      };
      let formParams = {
      };

      let authNames = ['cookieAuth', 'jwtAuth', 'tokenAuth'];
      let contentTypes = ['application/json', 'application/x-www-form-urlencoded', 'multipart/form-data'];
      let accepts = ['application/json'];
      let returnType = NationalityCreate;
      return this.apiClient.callApi(
        '/api/v2/clients/{client_uuid}/nationalities/', 'POST',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, null, callback
      );
    }

    /**
     * Callback function to receive the result of the clientNationlitiesList operation.
     * @callback module:api/NationlityApi~clientNationlitiesListCallback
     * @param {String} error Error message, if any.
     * @param {module:model/PaginatedNationalityListList} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * List nationlities for a client
     * @param {String} clientUuid 
     * @param {Object} opts Optional parameters
     * @param {Number} opts.limit Number of results to return per page.
     * @param {Number} opts.offset The initial index from which to return the results.
     * @param {module:api/NationlityApi~clientNationlitiesListCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:model/PaginatedNationalityListList}
     */
    clientNationlitiesList(clientUuid, opts, callback) {
      opts = opts || {};
      let postBody = null;
      // verify the required parameter 'clientUuid' is set
      if (clientUuid === undefined || clientUuid === null) {
        throw new Error("Missing the required parameter 'clientUuid' when calling clientNationlitiesList");
      }

      let pathParams = {
        'client_uuid': clientUuid
      };
      let queryParams = {
        'limit': opts['limit'],
        'offset': opts['offset']
      };
      let headerParams = {
      };
      let formParams = {
      };

      let authNames = ['cookieAuth', 'jwtAuth', 'tokenAuth'];
      let contentTypes = [];
      let accepts = ['application/json'];
      let returnType = PaginatedNationalityListList;
      return this.apiClient.callApi(
        '/api/v2/clients/{client_uuid}/nationalities/', 'GET',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, null, callback
      );
    }

    /**
     * Callback function to receive the result of the clientNationlityDelete operation.
     * @callback module:api/NationlityApi~clientNationlityDeleteCallback
     * @param {String} error Error message, if any.
     * @param data This operation does not return a value.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Delete a client nationality
     * @param {String} clientUuid 
     * @param {String} uuid 
     * @param {module:api/NationlityApi~clientNationlityDeleteCallback} callback The callback function, accepting three arguments: error, data, response
     */
    clientNationlityDelete(clientUuid, uuid, callback) {
      let postBody = null;
      // verify the required parameter 'clientUuid' is set
      if (clientUuid === undefined || clientUuid === null) {
        throw new Error("Missing the required parameter 'clientUuid' when calling clientNationlityDelete");
      }
      // verify the required parameter 'uuid' is set
      if (uuid === undefined || uuid === null) {
        throw new Error("Missing the required parameter 'uuid' when calling clientNationlityDelete");
      }

      let pathParams = {
        'client_uuid': clientUuid,
        'uuid': uuid
      };
      let queryParams = {
      };
      let headerParams = {
      };
      let formParams = {
      };

      let authNames = ['cookieAuth', 'jwtAuth', 'tokenAuth'];
      let contentTypes = [];
      let accepts = [];
      let returnType = null;
      return this.apiClient.callApi(
        '/api/v2/clients/{client_uuid}/nationalities/{uuid}/', 'DELETE',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, null, callback
      );
    }

    /**
     * Callback function to receive the result of the clientNationlityPartialUpdate operation.
     * @callback module:api/NationlityApi~clientNationlityPartialUpdateCallback
     * @param {String} error Error message, if any.
     * @param {module:model/NationalityUpdate} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Partial Update a client nationality
     * @param {String} clientUuid 
     * @param {String} uuid 
     * @param {Object} opts Optional parameters
     * @param {module:model/PatchedNationalityUpdate} opts.patchedNationalityUpdate 
     * @param {module:api/NationlityApi~clientNationlityPartialUpdateCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:model/NationalityUpdate}
     */
    clientNationlityPartialUpdate(clientUuid, uuid, opts, callback) {
      opts = opts || {};
      let postBody = opts['patchedNationalityUpdate'];
      // verify the required parameter 'clientUuid' is set
      if (clientUuid === undefined || clientUuid === null) {
        throw new Error("Missing the required parameter 'clientUuid' when calling clientNationlityPartialUpdate");
      }
      // verify the required parameter 'uuid' is set
      if (uuid === undefined || uuid === null) {
        throw new Error("Missing the required parameter 'uuid' when calling clientNationlityPartialUpdate");
      }

      let pathParams = {
        'client_uuid': clientUuid,
        'uuid': uuid
      };
      let queryParams = {
      };
      let headerParams = {
      };
      let formParams = {
      };

      let authNames = ['cookieAuth', 'jwtAuth', 'tokenAuth'];
      let contentTypes = ['application/json', 'application/x-www-form-urlencoded', 'multipart/form-data'];
      let accepts = ['application/json'];
      let returnType = NationalityUpdate;
      return this.apiClient.callApi(
        '/api/v2/clients/{client_uuid}/nationalities/{uuid}/', 'PATCH',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, null, callback
      );
    }

    /**
     * Callback function to receive the result of the clientNationlityRetrieve operation.
     * @callback module:api/NationlityApi~clientNationlityRetrieveCallback
     * @param {String} error Error message, if any.
     * @param {module:model/NationalityList} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Retrieve a client nationality
     * @param {String} clientUuid 
     * @param {String} uuid 
     * @param {module:api/NationlityApi~clientNationlityRetrieveCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:model/NationalityList}
     */
    clientNationlityRetrieve(clientUuid, uuid, callback) {
      let postBody = null;
      // verify the required parameter 'clientUuid' is set
      if (clientUuid === undefined || clientUuid === null) {
        throw new Error("Missing the required parameter 'clientUuid' when calling clientNationlityRetrieve");
      }
      // verify the required parameter 'uuid' is set
      if (uuid === undefined || uuid === null) {
        throw new Error("Missing the required parameter 'uuid' when calling clientNationlityRetrieve");
      }

      let pathParams = {
        'client_uuid': clientUuid,
        'uuid': uuid
      };
      let queryParams = {
      };
      let headerParams = {
      };
      let formParams = {
      };

      let authNames = ['cookieAuth', 'jwtAuth', 'tokenAuth'];
      let contentTypes = [];
      let accepts = ['application/json'];
      let returnType = NationalityList;
      return this.apiClient.callApi(
        '/api/v2/clients/{client_uuid}/nationalities/{uuid}/', 'GET',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, null, callback
      );
    }

    /**
     * Callback function to receive the result of the clientNationlityUpdate operation.
     * @callback module:api/NationlityApi~clientNationlityUpdateCallback
     * @param {String} error Error message, if any.
     * @param {module:model/NationalityUpdate} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Update a client nationality
     * @param {String} clientUuid 
     * @param {String} uuid 
     * @param {module:model/NationalityUpdate} nationalityUpdate 
     * @param {module:api/NationlityApi~clientNationlityUpdateCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:model/NationalityUpdate}
     */
    clientNationlityUpdate(clientUuid, uuid, nationalityUpdate, callback) {
      let postBody = nationalityUpdate;
      // verify the required parameter 'clientUuid' is set
      if (clientUuid === undefined || clientUuid === null) {
        throw new Error("Missing the required parameter 'clientUuid' when calling clientNationlityUpdate");
      }
      // verify the required parameter 'uuid' is set
      if (uuid === undefined || uuid === null) {
        throw new Error("Missing the required parameter 'uuid' when calling clientNationlityUpdate");
      }
      // verify the required parameter 'nationalityUpdate' is set
      if (nationalityUpdate === undefined || nationalityUpdate === null) {
        throw new Error("Missing the required parameter 'nationalityUpdate' when calling clientNationlityUpdate");
      }

      let pathParams = {
        'client_uuid': clientUuid,
        'uuid': uuid
      };
      let queryParams = {
      };
      let headerParams = {
      };
      let formParams = {
      };

      let authNames = ['cookieAuth', 'jwtAuth', 'tokenAuth'];
      let contentTypes = ['application/json', 'application/x-www-form-urlencoded', 'multipart/form-data'];
      let accepts = ['application/json'];
      let returnType = NationalityUpdate;
      return this.apiClient.callApi(
        '/api/v2/clients/{client_uuid}/nationalities/{uuid}/', 'PUT',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, null, callback
      );
    }


}