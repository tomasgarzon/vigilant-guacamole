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
import Assessment from '../model/Assessment';
import PaginatedAssessmentList from '../model/PaginatedAssessmentList';
import PatchedAssessment from '../model/PatchedAssessment';

/**
* RiskAssessment service.
* @module api/RiskAssessmentApi
* @version 4.175.0
*/
export default class RiskAssessmentApi {

    /**
    * Constructs a new RiskAssessmentApi. 
    * @alias module:api/RiskAssessmentApi
    * @class
    * @param {module:ApiClient} [apiClient] Optional API client implementation to use,
    * default to {@link module:ApiClient#instance} if unspecified.
    */
    constructor(apiClient) {
        this.apiClient = apiClient || ApiClient.instance;
    }


    /**
     * Callback function to receive the result of the clientRiskAssessmentCreate operation.
     * @callback module:api/RiskAssessmentApi~clientRiskAssessmentCreateCallback
     * @param {String} error Error message, if any.
     * @param {module:model/Assessment} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Create a risk assessment for a client
     * @param {String} clientUuid 
     * @param {module:model/Assessment} assessment 
     * @param {module:api/RiskAssessmentApi~clientRiskAssessmentCreateCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:model/Assessment}
     */
    clientRiskAssessmentCreate(clientUuid, assessment, callback) {
      let postBody = assessment;
      // verify the required parameter 'clientUuid' is set
      if (clientUuid === undefined || clientUuid === null) {
        throw new Error("Missing the required parameter 'clientUuid' when calling clientRiskAssessmentCreate");
      }
      // verify the required parameter 'assessment' is set
      if (assessment === undefined || assessment === null) {
        throw new Error("Missing the required parameter 'assessment' when calling clientRiskAssessmentCreate");
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
      let returnType = Assessment;
      return this.apiClient.callApi(
        '/api/v2/clients/{client_uuid}/risk-assessments/', 'POST',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, null, callback
      );
    }

    /**
     * Callback function to receive the result of the clientRiskAssessmentDelete operation.
     * @callback module:api/RiskAssessmentApi~clientRiskAssessmentDeleteCallback
     * @param {String} error Error message, if any.
     * @param data This operation does not return a value.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Delete a client risk assessment
     * @param {String} clientUuid 
     * @param {String} uuid 
     * @param {module:api/RiskAssessmentApi~clientRiskAssessmentDeleteCallback} callback The callback function, accepting three arguments: error, data, response
     */
    clientRiskAssessmentDelete(clientUuid, uuid, callback) {
      let postBody = null;
      // verify the required parameter 'clientUuid' is set
      if (clientUuid === undefined || clientUuid === null) {
        throw new Error("Missing the required parameter 'clientUuid' when calling clientRiskAssessmentDelete");
      }
      // verify the required parameter 'uuid' is set
      if (uuid === undefined || uuid === null) {
        throw new Error("Missing the required parameter 'uuid' when calling clientRiskAssessmentDelete");
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
        '/api/v2/clients/{client_uuid}/risk-assessments/{uuid}/', 'DELETE',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, null, callback
      );
    }

    /**
     * Callback function to receive the result of the clientRiskAssessmentList operation.
     * @callback module:api/RiskAssessmentApi~clientRiskAssessmentListCallback
     * @param {String} error Error message, if any.
     * @param {module:model/PaginatedAssessmentList} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * List Risk Assessment for a client
     * @param {String} clientUuid 
     * @param {Object} opts Optional parameters
     * @param {Number} opts.limit Number of results to return per page.
     * @param {Number} opts.offset The initial index from which to return the results.
     * @param {Array.<module:model/String>} opts.status 
     * @param {module:api/RiskAssessmentApi~clientRiskAssessmentListCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:model/PaginatedAssessmentList}
     */
    clientRiskAssessmentList(clientUuid, opts, callback) {
      opts = opts || {};
      let postBody = null;
      // verify the required parameter 'clientUuid' is set
      if (clientUuid === undefined || clientUuid === null) {
        throw new Error("Missing the required parameter 'clientUuid' when calling clientRiskAssessmentList");
      }

      let pathParams = {
        'client_uuid': clientUuid
      };
      let queryParams = {
        'limit': opts['limit'],
        'offset': opts['offset'],
        'status': this.apiClient.buildCollectionParam(opts['status'], 'multi')
      };
      let headerParams = {
      };
      let formParams = {
      };

      let authNames = ['cookieAuth', 'jwtAuth', 'tokenAuth'];
      let contentTypes = [];
      let accepts = ['application/json'];
      let returnType = PaginatedAssessmentList;
      return this.apiClient.callApi(
        '/api/v2/clients/{client_uuid}/risk-assessments/', 'GET',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, null, callback
      );
    }

    /**
     * Callback function to receive the result of the clientRiskAssessmentPartialUpdate operation.
     * @callback module:api/RiskAssessmentApi~clientRiskAssessmentPartialUpdateCallback
     * @param {String} error Error message, if any.
     * @param {module:model/Assessment} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Partial Update a client risk assessment
     * @param {String} clientUuid 
     * @param {String} uuid 
     * @param {Object} opts Optional parameters
     * @param {module:model/PatchedAssessment} opts.patchedAssessment 
     * @param {module:api/RiskAssessmentApi~clientRiskAssessmentPartialUpdateCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:model/Assessment}
     */
    clientRiskAssessmentPartialUpdate(clientUuid, uuid, opts, callback) {
      opts = opts || {};
      let postBody = opts['patchedAssessment'];
      // verify the required parameter 'clientUuid' is set
      if (clientUuid === undefined || clientUuid === null) {
        throw new Error("Missing the required parameter 'clientUuid' when calling clientRiskAssessmentPartialUpdate");
      }
      // verify the required parameter 'uuid' is set
      if (uuid === undefined || uuid === null) {
        throw new Error("Missing the required parameter 'uuid' when calling clientRiskAssessmentPartialUpdate");
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
      let returnType = Assessment;
      return this.apiClient.callApi(
        '/api/v2/clients/{client_uuid}/risk-assessments/{uuid}/', 'PATCH',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, null, callback
      );
    }

    /**
     * Callback function to receive the result of the clientRiskAssessmentRetrieve operation.
     * @callback module:api/RiskAssessmentApi~clientRiskAssessmentRetrieveCallback
     * @param {String} error Error message, if any.
     * @param {module:model/Assessment} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Retrieve a client risk assessment
     * @param {String} clientUuid 
     * @param {String} uuid 
     * @param {module:api/RiskAssessmentApi~clientRiskAssessmentRetrieveCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:model/Assessment}
     */
    clientRiskAssessmentRetrieve(clientUuid, uuid, callback) {
      let postBody = null;
      // verify the required parameter 'clientUuid' is set
      if (clientUuid === undefined || clientUuid === null) {
        throw new Error("Missing the required parameter 'clientUuid' when calling clientRiskAssessmentRetrieve");
      }
      // verify the required parameter 'uuid' is set
      if (uuid === undefined || uuid === null) {
        throw new Error("Missing the required parameter 'uuid' when calling clientRiskAssessmentRetrieve");
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
      let returnType = Assessment;
      return this.apiClient.callApi(
        '/api/v2/clients/{client_uuid}/risk-assessments/{uuid}/', 'GET',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, null, callback
      );
    }


}
