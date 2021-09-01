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
import AUMEvoluation from '../model/AUMEvoluation';
import AUMPortfolioRisk from '../model/AUMPortfolioRisk';
import AllocationByAsset from '../model/AllocationByAsset';
import AssetConcentrationRisk from '../model/AssetConcentrationRisk';
import ClientRanking from '../model/ClientRanking';
import RelationshipManager from '../model/RelationshipManager';

/**
* Analytics service.
* @module api/AnalyticsApi
* @version 4.175.0
*/
export default class AnalyticsApi {

    /**
    * Constructs a new AnalyticsApi. 
    * @alias module:api/AnalyticsApi
    * @class
    * @param {module:ApiClient} [apiClient] Optional API client implementation to use,
    * default to {@link module:ApiClient#instance} if unspecified.
    */
    constructor(apiClient) {
        this.apiClient = apiClient || ApiClient.instance;
    }


    /**
     * Callback function to receive the result of the apiV2RelationshipManagerAnalyticsAllocationsByAssetRetrieve operation.
     * @callback module:api/AnalyticsApi~apiV2RelationshipManagerAnalyticsAllocationsByAssetRetrieveCallback
     * @param {String} error Error message, if any.
     * @param {module:model/AllocationByAsset} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * @param {String} relationshipManagerUuid 
     * @param {module:api/AnalyticsApi~apiV2RelationshipManagerAnalyticsAllocationsByAssetRetrieveCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:model/AllocationByAsset}
     */
    apiV2RelationshipManagerAnalyticsAllocationsByAssetRetrieve(relationshipManagerUuid, callback) {
      let postBody = null;
      // verify the required parameter 'relationshipManagerUuid' is set
      if (relationshipManagerUuid === undefined || relationshipManagerUuid === null) {
        throw new Error("Missing the required parameter 'relationshipManagerUuid' when calling apiV2RelationshipManagerAnalyticsAllocationsByAssetRetrieve");
      }

      let pathParams = {
        'relationship_manager_uuid': relationshipManagerUuid
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
      let returnType = AllocationByAsset;
      return this.apiClient.callApi(
        '/api/v2/relationship-manager/{relationship_manager_uuid}/analytics/allocations-by-asset/', 'GET',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, null, callback
      );
    }

    /**
     * Callback function to receive the result of the apiV2RelationshipManagerAnalyticsAssetConcentrationRiskRetrieve operation.
     * @callback module:api/AnalyticsApi~apiV2RelationshipManagerAnalyticsAssetConcentrationRiskRetrieveCallback
     * @param {String} error Error message, if any.
     * @param {module:model/AssetConcentrationRisk} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * @param {String} relationshipManagerUuid 
     * @param {module:api/AnalyticsApi~apiV2RelationshipManagerAnalyticsAssetConcentrationRiskRetrieveCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:model/AssetConcentrationRisk}
     */
    apiV2RelationshipManagerAnalyticsAssetConcentrationRiskRetrieve(relationshipManagerUuid, callback) {
      let postBody = null;
      // verify the required parameter 'relationshipManagerUuid' is set
      if (relationshipManagerUuid === undefined || relationshipManagerUuid === null) {
        throw new Error("Missing the required parameter 'relationshipManagerUuid' when calling apiV2RelationshipManagerAnalyticsAssetConcentrationRiskRetrieve");
      }

      let pathParams = {
        'relationship_manager_uuid': relationshipManagerUuid
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
      let returnType = AssetConcentrationRisk;
      return this.apiClient.callApi(
        '/api/v2/relationship-manager/{relationship_manager_uuid}/analytics/asset-concentration-risk/', 'GET',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, null, callback
      );
    }

    /**
     * Callback function to receive the result of the apiV2RelationshipManagerAnalyticsAumEvolutionRetrieve operation.
     * @callback module:api/AnalyticsApi~apiV2RelationshipManagerAnalyticsAumEvolutionRetrieveCallback
     * @param {String} error Error message, if any.
     * @param {module:model/AUMEvoluation} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * @param {String} relationshipManagerUuid 
     * @param {module:api/AnalyticsApi~apiV2RelationshipManagerAnalyticsAumEvolutionRetrieveCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:model/AUMEvoluation}
     */
    apiV2RelationshipManagerAnalyticsAumEvolutionRetrieve(relationshipManagerUuid, callback) {
      let postBody = null;
      // verify the required parameter 'relationshipManagerUuid' is set
      if (relationshipManagerUuid === undefined || relationshipManagerUuid === null) {
        throw new Error("Missing the required parameter 'relationshipManagerUuid' when calling apiV2RelationshipManagerAnalyticsAumEvolutionRetrieve");
      }

      let pathParams = {
        'relationship_manager_uuid': relationshipManagerUuid
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
      let returnType = AUMEvoluation;
      return this.apiClient.callApi(
        '/api/v2/relationship-manager/{relationship_manager_uuid}/analytics/aum-evolution/', 'GET',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, null, callback
      );
    }

    /**
     * Callback function to receive the result of the apiV2RelationshipManagerAnalyticsAumPortfolioRiskRetrieve operation.
     * @callback module:api/AnalyticsApi~apiV2RelationshipManagerAnalyticsAumPortfolioRiskRetrieveCallback
     * @param {String} error Error message, if any.
     * @param {module:model/AUMPortfolioRisk} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * @param {String} relationshipManagerUuid 
     * @param {module:api/AnalyticsApi~apiV2RelationshipManagerAnalyticsAumPortfolioRiskRetrieveCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:model/AUMPortfolioRisk}
     */
    apiV2RelationshipManagerAnalyticsAumPortfolioRiskRetrieve(relationshipManagerUuid, callback) {
      let postBody = null;
      // verify the required parameter 'relationshipManagerUuid' is set
      if (relationshipManagerUuid === undefined || relationshipManagerUuid === null) {
        throw new Error("Missing the required parameter 'relationshipManagerUuid' when calling apiV2RelationshipManagerAnalyticsAumPortfolioRiskRetrieve");
      }

      let pathParams = {
        'relationship_manager_uuid': relationshipManagerUuid
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
      let returnType = AUMPortfolioRisk;
      return this.apiClient.callApi(
        '/api/v2/relationship-manager/{relationship_manager_uuid}/analytics/aum-portfolio-risk/', 'GET',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, null, callback
      );
    }

    /**
     * Callback function to receive the result of the apiV2RelationshipManagerAnalyticsAumRetrieve operation.
     * @callback module:api/AnalyticsApi~apiV2RelationshipManagerAnalyticsAumRetrieveCallback
     * @param {String} error Error message, if any.
     * @param {module:model/RelationshipManager} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * @param {String} relationshipManagerUuid 
     * @param {module:api/AnalyticsApi~apiV2RelationshipManagerAnalyticsAumRetrieveCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:model/RelationshipManager}
     */
    apiV2RelationshipManagerAnalyticsAumRetrieve(relationshipManagerUuid, callback) {
      let postBody = null;
      // verify the required parameter 'relationshipManagerUuid' is set
      if (relationshipManagerUuid === undefined || relationshipManagerUuid === null) {
        throw new Error("Missing the required parameter 'relationshipManagerUuid' when calling apiV2RelationshipManagerAnalyticsAumRetrieve");
      }

      let pathParams = {
        'relationship_manager_uuid': relationshipManagerUuid
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
      let returnType = RelationshipManager;
      return this.apiClient.callApi(
        '/api/v2/relationship-manager/{relationship_manager_uuid}/analytics/aum/', 'GET',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, null, callback
      );
    }

    /**
     * Callback function to receive the result of the apiV2RelationshipManagerAnalyticsClientByRiskRetrieve operation.
     * @callback module:api/AnalyticsApi~apiV2RelationshipManagerAnalyticsClientByRiskRetrieveCallback
     * @param {String} error Error message, if any.
     * @param {module:model/RelationshipManager} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * @param {String} relationshipManagerUuid 
     * @param {module:api/AnalyticsApi~apiV2RelationshipManagerAnalyticsClientByRiskRetrieveCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:model/RelationshipManager}
     */
    apiV2RelationshipManagerAnalyticsClientByRiskRetrieve(relationshipManagerUuid, callback) {
      let postBody = null;
      // verify the required parameter 'relationshipManagerUuid' is set
      if (relationshipManagerUuid === undefined || relationshipManagerUuid === null) {
        throw new Error("Missing the required parameter 'relationshipManagerUuid' when calling apiV2RelationshipManagerAnalyticsClientByRiskRetrieve");
      }

      let pathParams = {
        'relationship_manager_uuid': relationshipManagerUuid
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
      let returnType = RelationshipManager;
      return this.apiClient.callApi(
        '/api/v2/relationship-manager/{relationship_manager_uuid}/analytics/client-by-risk/', 'GET',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, null, callback
      );
    }

    /**
     * Callback function to receive the result of the apiV2RelationshipManagerAnalyticsClientByStatusRetrieve operation.
     * @callback module:api/AnalyticsApi~apiV2RelationshipManagerAnalyticsClientByStatusRetrieveCallback
     * @param {String} error Error message, if any.
     * @param {module:model/RelationshipManager} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * @param {String} relationshipManagerUuid 
     * @param {module:api/AnalyticsApi~apiV2RelationshipManagerAnalyticsClientByStatusRetrieveCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:model/RelationshipManager}
     */
    apiV2RelationshipManagerAnalyticsClientByStatusRetrieve(relationshipManagerUuid, callback) {
      let postBody = null;
      // verify the required parameter 'relationshipManagerUuid' is set
      if (relationshipManagerUuid === undefined || relationshipManagerUuid === null) {
        throw new Error("Missing the required parameter 'relationshipManagerUuid' when calling apiV2RelationshipManagerAnalyticsClientByStatusRetrieve");
      }

      let pathParams = {
        'relationship_manager_uuid': relationshipManagerUuid
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
      let returnType = RelationshipManager;
      return this.apiClient.callApi(
        '/api/v2/relationship-manager/{relationship_manager_uuid}/analytics/client-by-status/', 'GET',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, null, callback
      );
    }

    /**
     * Callback function to receive the result of the apiV2RelationshipManagerAnalyticsClientRankingRetrieve operation.
     * @callback module:api/AnalyticsApi~apiV2RelationshipManagerAnalyticsClientRankingRetrieveCallback
     * @param {String} error Error message, if any.
     * @param {module:model/ClientRanking} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * @param {String} relationshipManagerUuid 
     * @param {module:api/AnalyticsApi~apiV2RelationshipManagerAnalyticsClientRankingRetrieveCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:model/ClientRanking}
     */
    apiV2RelationshipManagerAnalyticsClientRankingRetrieve(relationshipManagerUuid, callback) {
      let postBody = null;
      // verify the required parameter 'relationshipManagerUuid' is set
      if (relationshipManagerUuid === undefined || relationshipManagerUuid === null) {
        throw new Error("Missing the required parameter 'relationshipManagerUuid' when calling apiV2RelationshipManagerAnalyticsClientRankingRetrieve");
      }

      let pathParams = {
        'relationship_manager_uuid': relationshipManagerUuid
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
      let returnType = ClientRanking;
      return this.apiClient.callApi(
        '/api/v2/relationship-manager/{relationship_manager_uuid}/analytics/client-ranking/', 'GET',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, null, callback
      );
    }

    /**
     * Callback function to receive the result of the apiV2RelationshipManagerAnalyticsInflowsOutflowsRetrieve operation.
     * @callback module:api/AnalyticsApi~apiV2RelationshipManagerAnalyticsInflowsOutflowsRetrieveCallback
     * @param {String} error Error message, if any.
     * @param {module:model/RelationshipManager} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * @param {String} relationshipManagerUuid 
     * @param {module:api/AnalyticsApi~apiV2RelationshipManagerAnalyticsInflowsOutflowsRetrieveCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:model/RelationshipManager}
     */
    apiV2RelationshipManagerAnalyticsInflowsOutflowsRetrieve(relationshipManagerUuid, callback) {
      let postBody = null;
      // verify the required parameter 'relationshipManagerUuid' is set
      if (relationshipManagerUuid === undefined || relationshipManagerUuid === null) {
        throw new Error("Missing the required parameter 'relationshipManagerUuid' when calling apiV2RelationshipManagerAnalyticsInflowsOutflowsRetrieve");
      }

      let pathParams = {
        'relationship_manager_uuid': relationshipManagerUuid
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
      let returnType = RelationshipManager;
      return this.apiClient.callApi(
        '/api/v2/relationship-manager/{relationship_manager_uuid}/analytics/inflows-outflows/', 'GET',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, null, callback
      );
    }

    /**
     * Callback function to receive the result of the apiV2RelationshipManagerAnalyticsPortfolioRiskPerformanceRetrieve operation.
     * @callback module:api/AnalyticsApi~apiV2RelationshipManagerAnalyticsPortfolioRiskPerformanceRetrieveCallback
     * @param {String} error Error message, if any.
     * @param {module:model/RelationshipManager} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * @param {String} relationshipManagerUuid 
     * @param {module:api/AnalyticsApi~apiV2RelationshipManagerAnalyticsPortfolioRiskPerformanceRetrieveCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:model/RelationshipManager}
     */
    apiV2RelationshipManagerAnalyticsPortfolioRiskPerformanceRetrieve(relationshipManagerUuid, callback) {
      let postBody = null;
      // verify the required parameter 'relationshipManagerUuid' is set
      if (relationshipManagerUuid === undefined || relationshipManagerUuid === null) {
        throw new Error("Missing the required parameter 'relationshipManagerUuid' when calling apiV2RelationshipManagerAnalyticsPortfolioRiskPerformanceRetrieve");
      }

      let pathParams = {
        'relationship_manager_uuid': relationshipManagerUuid
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
      let returnType = RelationshipManager;
      return this.apiClient.callApi(
        '/api/v2/relationship-manager/{relationship_manager_uuid}/analytics/portfolio-risk-performance/', 'GET',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, null, callback
      );
    }

    /**
     * Callback function to receive the result of the apiV2RelationshipManagerAnalyticsTotalActiveClientsRetrieve operation.
     * @callback module:api/AnalyticsApi~apiV2RelationshipManagerAnalyticsTotalActiveClientsRetrieveCallback
     * @param {String} error Error message, if any.
     * @param {module:model/RelationshipManager} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * @param {String} relationshipManagerUuid 
     * @param {module:api/AnalyticsApi~apiV2RelationshipManagerAnalyticsTotalActiveClientsRetrieveCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:model/RelationshipManager}
     */
    apiV2RelationshipManagerAnalyticsTotalActiveClientsRetrieve(relationshipManagerUuid, callback) {
      let postBody = null;
      // verify the required parameter 'relationshipManagerUuid' is set
      if (relationshipManagerUuid === undefined || relationshipManagerUuid === null) {
        throw new Error("Missing the required parameter 'relationshipManagerUuid' when calling apiV2RelationshipManagerAnalyticsTotalActiveClientsRetrieve");
      }

      let pathParams = {
        'relationship_manager_uuid': relationshipManagerUuid
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
      let returnType = RelationshipManager;
      return this.apiClient.callApi(
        '/api/v2/relationship-manager/{relationship_manager_uuid}/analytics/total-active-clients/', 'GET',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, null, callback
      );
    }


}
