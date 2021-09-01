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
import AddressCreate from '../model/AddressCreate';
import AddressList from '../model/AddressList';
import AddressUpdate from '../model/AddressUpdate';
import PaginatedAddressListList from '../model/PaginatedAddressListList';
import PatchedAddressUpdate from '../model/PatchedAddressUpdate';

/**
* Address service.
* @module api/AddressApi
* @version 4.175.0
*/
export default class AddressApi {

    /**
    * Constructs a new AddressApi. 
    * @alias module:api/AddressApi
    * @class
    * @param {module:ApiClient} [apiClient] Optional API client implementation to use,
    * default to {@link module:ApiClient#instance} if unspecified.
    */
    constructor(apiClient) {
        this.apiClient = apiClient || ApiClient.instance;
    }


    /**
     * Callback function to receive the result of the clientAddressCreate operation.
     * @callback module:api/AddressApi~clientAddressCreateCallback
     * @param {String} error Error message, if any.
     * @param {module:model/AddressCreate} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Create an address for a client
     * @param {String} clientUuid 
     * @param {module:model/AddressCreate} addressCreate 
     * @param {module:api/AddressApi~clientAddressCreateCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:model/AddressCreate}
     */
    clientAddressCreate(clientUuid, addressCreate, callback) {
      let postBody = addressCreate;
      // verify the required parameter 'clientUuid' is set
      if (clientUuid === undefined || clientUuid === null) {
        throw new Error("Missing the required parameter 'clientUuid' when calling clientAddressCreate");
      }
      // verify the required parameter 'addressCreate' is set
      if (addressCreate === undefined || addressCreate === null) {
        throw new Error("Missing the required parameter 'addressCreate' when calling clientAddressCreate");
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
      let returnType = AddressCreate;
      return this.apiClient.callApi(
        '/api/v2/clients/{client_uuid}/addresses/', 'POST',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, null, callback
      );
    }

    /**
     * Callback function to receive the result of the clientAddressDelete operation.
     * @callback module:api/AddressApi~clientAddressDeleteCallback
     * @param {String} error Error message, if any.
     * @param data This operation does not return a value.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Delete a client address
     * @param {String} clientUuid 
     * @param {String} uuid 
     * @param {module:api/AddressApi~clientAddressDeleteCallback} callback The callback function, accepting three arguments: error, data, response
     */
    clientAddressDelete(clientUuid, uuid, callback) {
      let postBody = null;
      // verify the required parameter 'clientUuid' is set
      if (clientUuid === undefined || clientUuid === null) {
        throw new Error("Missing the required parameter 'clientUuid' when calling clientAddressDelete");
      }
      // verify the required parameter 'uuid' is set
      if (uuid === undefined || uuid === null) {
        throw new Error("Missing the required parameter 'uuid' when calling clientAddressDelete");
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
        '/api/v2/clients/{client_uuid}/addresses/{uuid}/', 'DELETE',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, null, callback
      );
    }

    /**
     * Callback function to receive the result of the clientAddressPartialUpdate operation.
     * @callback module:api/AddressApi~clientAddressPartialUpdateCallback
     * @param {String} error Error message, if any.
     * @param {module:model/AddressUpdate} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Partial Update a client address
     * @param {String} clientUuid 
     * @param {String} uuid 
     * @param {Object} opts Optional parameters
     * @param {module:model/PatchedAddressUpdate} opts.patchedAddressUpdate 
     * @param {module:api/AddressApi~clientAddressPartialUpdateCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:model/AddressUpdate}
     */
    clientAddressPartialUpdate(clientUuid, uuid, opts, callback) {
      opts = opts || {};
      let postBody = opts['patchedAddressUpdate'];
      // verify the required parameter 'clientUuid' is set
      if (clientUuid === undefined || clientUuid === null) {
        throw new Error("Missing the required parameter 'clientUuid' when calling clientAddressPartialUpdate");
      }
      // verify the required parameter 'uuid' is set
      if (uuid === undefined || uuid === null) {
        throw new Error("Missing the required parameter 'uuid' when calling clientAddressPartialUpdate");
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
      let returnType = AddressUpdate;
      return this.apiClient.callApi(
        '/api/v2/clients/{client_uuid}/addresses/{uuid}/', 'PATCH',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, null, callback
      );
    }

    /**
     * Callback function to receive the result of the clientAddressRetrieve operation.
     * @callback module:api/AddressApi~clientAddressRetrieveCallback
     * @param {String} error Error message, if any.
     * @param {module:model/AddressList} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Retrieve a client address
     * @param {String} clientUuid 
     * @param {String} uuid 
     * @param {module:api/AddressApi~clientAddressRetrieveCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:model/AddressList}
     */
    clientAddressRetrieve(clientUuid, uuid, callback) {
      let postBody = null;
      // verify the required parameter 'clientUuid' is set
      if (clientUuid === undefined || clientUuid === null) {
        throw new Error("Missing the required parameter 'clientUuid' when calling clientAddressRetrieve");
      }
      // verify the required parameter 'uuid' is set
      if (uuid === undefined || uuid === null) {
        throw new Error("Missing the required parameter 'uuid' when calling clientAddressRetrieve");
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
      let returnType = AddressList;
      return this.apiClient.callApi(
        '/api/v2/clients/{client_uuid}/addresses/{uuid}/', 'GET',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, null, callback
      );
    }

    /**
     * Callback function to receive the result of the clientAddressUpdate operation.
     * @callback module:api/AddressApi~clientAddressUpdateCallback
     * @param {String} error Error message, if any.
     * @param {module:model/AddressUpdate} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Update a client address
     * @param {String} clientUuid 
     * @param {String} uuid 
     * @param {module:model/AddressUpdate} addressUpdate 
     * @param {module:api/AddressApi~clientAddressUpdateCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:model/AddressUpdate}
     */
    clientAddressUpdate(clientUuid, uuid, addressUpdate, callback) {
      let postBody = addressUpdate;
      // verify the required parameter 'clientUuid' is set
      if (clientUuid === undefined || clientUuid === null) {
        throw new Error("Missing the required parameter 'clientUuid' when calling clientAddressUpdate");
      }
      // verify the required parameter 'uuid' is set
      if (uuid === undefined || uuid === null) {
        throw new Error("Missing the required parameter 'uuid' when calling clientAddressUpdate");
      }
      // verify the required parameter 'addressUpdate' is set
      if (addressUpdate === undefined || addressUpdate === null) {
        throw new Error("Missing the required parameter 'addressUpdate' when calling clientAddressUpdate");
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
      let returnType = AddressUpdate;
      return this.apiClient.callApi(
        '/api/v2/clients/{client_uuid}/addresses/{uuid}/', 'PUT',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, null, callback
      );
    }

    /**
     * Callback function to receive the result of the clientAddressesList operation.
     * @callback module:api/AddressApi~clientAddressesListCallback
     * @param {String} error Error message, if any.
     * @param {module:model/PaginatedAddressListList} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * List address for a client
     * @param {String} clientUuid 
     * @param {Object} opts Optional parameters
     * @param {Number} opts.limit Number of results to return per page.
     * @param {Number} opts.offset The initial index from which to return the results.
     * @param {module:api/AddressApi~clientAddressesListCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:model/PaginatedAddressListList}
     */
    clientAddressesList(clientUuid, opts, callback) {
      opts = opts || {};
      let postBody = null;
      // verify the required parameter 'clientUuid' is set
      if (clientUuid === undefined || clientUuid === null) {
        throw new Error("Missing the required parameter 'clientUuid' when calling clientAddressesList");
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
      let returnType = PaginatedAddressListList;
      return this.apiClient.callApi(
        '/api/v2/clients/{client_uuid}/addresses/', 'GET',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, null, callback
      );
    }


}
