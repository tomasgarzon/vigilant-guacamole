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
import PaginatedTaxInformationListList from '../model/PaginatedTaxInformationListList';
import PatchedTaxInformationCreateUpdate from '../model/PatchedTaxInformationCreateUpdate';
import TaxInformationCreateUpdate from '../model/TaxInformationCreateUpdate';
import TaxInformationList from '../model/TaxInformationList';

/**
* TaxInformation service.
* @module api/TaxInformationApi
* @version 4.175.0
*/
export default class TaxInformationApi {

    /**
    * Constructs a new TaxInformationApi. 
    * @alias module:api/TaxInformationApi
    * @class
    * @param {module:ApiClient} [apiClient] Optional API client implementation to use,
    * default to {@link module:ApiClient#instance} if unspecified.
    */
    constructor(apiClient) {
        this.apiClient = apiClient || ApiClient.instance;
    }


    /**
     * Callback function to receive the result of the clientTaxInformationCreate operation.
     * @callback module:api/TaxInformationApi~clientTaxInformationCreateCallback
     * @param {String} error Error message, if any.
     * @param {module:model/TaxInformationCreateUpdate} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Create a tax inforation for a client
     * @param {String} clientUuid 
     * @param {module:model/TaxInformationCreateUpdate} taxInformationCreateUpdate 
     * @param {module:api/TaxInformationApi~clientTaxInformationCreateCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:model/TaxInformationCreateUpdate}
     */
    clientTaxInformationCreate(clientUuid, taxInformationCreateUpdate, callback) {
      let postBody = taxInformationCreateUpdate;
      // verify the required parameter 'clientUuid' is set
      if (clientUuid === undefined || clientUuid === null) {
        throw new Error("Missing the required parameter 'clientUuid' when calling clientTaxInformationCreate");
      }
      // verify the required parameter 'taxInformationCreateUpdate' is set
      if (taxInformationCreateUpdate === undefined || taxInformationCreateUpdate === null) {
        throw new Error("Missing the required parameter 'taxInformationCreateUpdate' when calling clientTaxInformationCreate");
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
      let returnType = TaxInformationCreateUpdate;
      return this.apiClient.callApi(
        '/api/v2/clients/{client_uuid}/tax-informations/', 'POST',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, null, callback
      );
    }

    /**
     * Callback function to receive the result of the clientTaxInformationDelete operation.
     * @callback module:api/TaxInformationApi~clientTaxInformationDeleteCallback
     * @param {String} error Error message, if any.
     * @param data This operation does not return a value.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Delete a client tax inforation
     * @param {String} clientUuid 
     * @param {String} uuid 
     * @param {module:api/TaxInformationApi~clientTaxInformationDeleteCallback} callback The callback function, accepting three arguments: error, data, response
     */
    clientTaxInformationDelete(clientUuid, uuid, callback) {
      let postBody = null;
      // verify the required parameter 'clientUuid' is set
      if (clientUuid === undefined || clientUuid === null) {
        throw new Error("Missing the required parameter 'clientUuid' when calling clientTaxInformationDelete");
      }
      // verify the required parameter 'uuid' is set
      if (uuid === undefined || uuid === null) {
        throw new Error("Missing the required parameter 'uuid' when calling clientTaxInformationDelete");
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
        '/api/v2/clients/{client_uuid}/tax-informations/{uuid}/', 'DELETE',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, null, callback
      );
    }

    /**
     * Callback function to receive the result of the clientTaxInformationList operation.
     * @callback module:api/TaxInformationApi~clientTaxInformationListCallback
     * @param {String} error Error message, if any.
     * @param {module:model/PaginatedTaxInformationListList} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * List tax information for a client
     * @param {String} clientUuid 
     * @param {Object} opts Optional parameters
     * @param {Number} opts.limit Number of results to return per page.
     * @param {Number} opts.offset The initial index from which to return the results.
     * @param {module:api/TaxInformationApi~clientTaxInformationListCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:model/PaginatedTaxInformationListList}
     */
    clientTaxInformationList(clientUuid, opts, callback) {
      opts = opts || {};
      let postBody = null;
      // verify the required parameter 'clientUuid' is set
      if (clientUuid === undefined || clientUuid === null) {
        throw new Error("Missing the required parameter 'clientUuid' when calling clientTaxInformationList");
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
      let returnType = PaginatedTaxInformationListList;
      return this.apiClient.callApi(
        '/api/v2/clients/{client_uuid}/tax-informations/', 'GET',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, null, callback
      );
    }

    /**
     * Callback function to receive the result of the clientTaxInformationPartialUpdate operation.
     * @callback module:api/TaxInformationApi~clientTaxInformationPartialUpdateCallback
     * @param {String} error Error message, if any.
     * @param {module:model/TaxInformationCreateUpdate} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Partial Update a client tax inforation
     * @param {String} clientUuid 
     * @param {String} uuid 
     * @param {Object} opts Optional parameters
     * @param {module:model/PatchedTaxInformationCreateUpdate} opts.patchedTaxInformationCreateUpdate 
     * @param {module:api/TaxInformationApi~clientTaxInformationPartialUpdateCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:model/TaxInformationCreateUpdate}
     */
    clientTaxInformationPartialUpdate(clientUuid, uuid, opts, callback) {
      opts = opts || {};
      let postBody = opts['patchedTaxInformationCreateUpdate'];
      // verify the required parameter 'clientUuid' is set
      if (clientUuid === undefined || clientUuid === null) {
        throw new Error("Missing the required parameter 'clientUuid' when calling clientTaxInformationPartialUpdate");
      }
      // verify the required parameter 'uuid' is set
      if (uuid === undefined || uuid === null) {
        throw new Error("Missing the required parameter 'uuid' when calling clientTaxInformationPartialUpdate");
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
      let returnType = TaxInformationCreateUpdate;
      return this.apiClient.callApi(
        '/api/v2/clients/{client_uuid}/tax-informations/{uuid}/', 'PATCH',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, null, callback
      );
    }

    /**
     * Callback function to receive the result of the clientTaxInformationRetrieve operation.
     * @callback module:api/TaxInformationApi~clientTaxInformationRetrieveCallback
     * @param {String} error Error message, if any.
     * @param {module:model/TaxInformationList} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Retrieve a client tax inforation
     * @param {String} clientUuid 
     * @param {String} uuid 
     * @param {module:api/TaxInformationApi~clientTaxInformationRetrieveCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:model/TaxInformationList}
     */
    clientTaxInformationRetrieve(clientUuid, uuid, callback) {
      let postBody = null;
      // verify the required parameter 'clientUuid' is set
      if (clientUuid === undefined || clientUuid === null) {
        throw new Error("Missing the required parameter 'clientUuid' when calling clientTaxInformationRetrieve");
      }
      // verify the required parameter 'uuid' is set
      if (uuid === undefined || uuid === null) {
        throw new Error("Missing the required parameter 'uuid' when calling clientTaxInformationRetrieve");
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
      let returnType = TaxInformationList;
      return this.apiClient.callApi(
        '/api/v2/clients/{client_uuid}/tax-informations/{uuid}/', 'GET',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, null, callback
      );
    }

    /**
     * Callback function to receive the result of the clientTaxInformationUpdate operation.
     * @callback module:api/TaxInformationApi~clientTaxInformationUpdateCallback
     * @param {String} error Error message, if any.
     * @param {module:model/TaxInformationCreateUpdate} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Update a client tax inforation
     * @param {String} clientUuid 
     * @param {String} uuid 
     * @param {module:model/TaxInformationCreateUpdate} taxInformationCreateUpdate 
     * @param {module:api/TaxInformationApi~clientTaxInformationUpdateCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:model/TaxInformationCreateUpdate}
     */
    clientTaxInformationUpdate(clientUuid, uuid, taxInformationCreateUpdate, callback) {
      let postBody = taxInformationCreateUpdate;
      // verify the required parameter 'clientUuid' is set
      if (clientUuid === undefined || clientUuid === null) {
        throw new Error("Missing the required parameter 'clientUuid' when calling clientTaxInformationUpdate");
      }
      // verify the required parameter 'uuid' is set
      if (uuid === undefined || uuid === null) {
        throw new Error("Missing the required parameter 'uuid' when calling clientTaxInformationUpdate");
      }
      // verify the required parameter 'taxInformationCreateUpdate' is set
      if (taxInformationCreateUpdate === undefined || taxInformationCreateUpdate === null) {
        throw new Error("Missing the required parameter 'taxInformationCreateUpdate' when calling clientTaxInformationUpdate");
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
      let returnType = TaxInformationCreateUpdate;
      return this.apiClient.callApi(
        '/api/v2/clients/{client_uuid}/tax-informations/{uuid}/', 'PUT',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, null, callback
      );
    }


}
