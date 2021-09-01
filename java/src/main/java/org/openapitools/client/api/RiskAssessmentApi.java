/*
 * Nucoro API
 * No description
 *
 * The version of the OpenAPI document: 4.175.0
 * 
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */


package org.openapitools.client.api;

import org.openapitools.client.ApiCallback;
import org.openapitools.client.ApiClient;
import org.openapitools.client.ApiException;
import org.openapitools.client.ApiResponse;
import org.openapitools.client.Configuration;
import org.openapitools.client.Pair;
import org.openapitools.client.ProgressRequestBody;
import org.openapitools.client.ProgressResponseBody;

import com.google.gson.reflect.TypeToken;

import java.io.IOException;


import org.openapitools.client.model.Assessment;
import org.openapitools.client.model.PaginatedAssessmentList;
import org.openapitools.client.model.PatchedAssessment;
import java.util.UUID;

import java.lang.reflect.Type;
import java.util.ArrayList;
import java.util.HashMap;
import java.util.List;
import java.util.Map;

public class RiskAssessmentApi {
    private ApiClient localVarApiClient;

    public RiskAssessmentApi() {
        this(Configuration.getDefaultApiClient());
    }

    public RiskAssessmentApi(ApiClient apiClient) {
        this.localVarApiClient = apiClient;
    }

    public ApiClient getApiClient() {
        return localVarApiClient;
    }

    public void setApiClient(ApiClient apiClient) {
        this.localVarApiClient = apiClient;
    }

    /**
     * Build call for clientRiskAssessmentCreate
     * @param clientUuid  (required)
     * @param assessment  (required)
     * @param _callback Callback for upload/download progress
     * @return Call to execute
     * @throws ApiException If fail to serialize the request body object
     * @http.response.details
     <table summary="Response Details" border="1">
        <tr><td> Status Code </td><td> Description </td><td> Response Headers </td></tr>
        <tr><td> 201 </td><td>  </td><td>  -  </td></tr>
     </table>
     */
    public okhttp3.Call clientRiskAssessmentCreateCall(UUID clientUuid, Assessment assessment, final ApiCallback _callback) throws ApiException {
        Object localVarPostBody = assessment;

        // create path and map variables
        String localVarPath = "/api/v2/clients/{client_uuid}/risk-assessments/"
            .replaceAll("\\{" + "client_uuid" + "\\}", localVarApiClient.escapeString(clientUuid.toString()));

        List<Pair> localVarQueryParams = new ArrayList<Pair>();
        List<Pair> localVarCollectionQueryParams = new ArrayList<Pair>();
        Map<String, String> localVarHeaderParams = new HashMap<String, String>();
        Map<String, String> localVarCookieParams = new HashMap<String, String>();
        Map<String, Object> localVarFormParams = new HashMap<String, Object>();

        final String[] localVarAccepts = {
            "application/json"
        };
        final String localVarAccept = localVarApiClient.selectHeaderAccept(localVarAccepts);
        if (localVarAccept != null) {
            localVarHeaderParams.put("Accept", localVarAccept);
        }

        final String[] localVarContentTypes = {
            "application/json", "application/x-www-form-urlencoded", "multipart/form-data"
        };
        final String localVarContentType = localVarApiClient.selectHeaderContentType(localVarContentTypes);
        localVarHeaderParams.put("Content-Type", localVarContentType);

        String[] localVarAuthNames = new String[] { "cookieAuth", "jwtAuth", "tokenAuth" };
        return localVarApiClient.buildCall(localVarPath, "POST", localVarQueryParams, localVarCollectionQueryParams, localVarPostBody, localVarHeaderParams, localVarCookieParams, localVarFormParams, localVarAuthNames, _callback);
    }

    @SuppressWarnings("rawtypes")
    private okhttp3.Call clientRiskAssessmentCreateValidateBeforeCall(UUID clientUuid, Assessment assessment, final ApiCallback _callback) throws ApiException {
        
        // verify the required parameter 'clientUuid' is set
        if (clientUuid == null) {
            throw new ApiException("Missing the required parameter 'clientUuid' when calling clientRiskAssessmentCreate(Async)");
        }
        
        // verify the required parameter 'assessment' is set
        if (assessment == null) {
            throw new ApiException("Missing the required parameter 'assessment' when calling clientRiskAssessmentCreate(Async)");
        }
        

        okhttp3.Call localVarCall = clientRiskAssessmentCreateCall(clientUuid, assessment, _callback);
        return localVarCall;

    }

    /**
     * 
     * Create a risk assessment for a client
     * @param clientUuid  (required)
     * @param assessment  (required)
     * @return Assessment
     * @throws ApiException If fail to call the API, e.g. server error or cannot deserialize the response body
     * @http.response.details
     <table summary="Response Details" border="1">
        <tr><td> Status Code </td><td> Description </td><td> Response Headers </td></tr>
        <tr><td> 201 </td><td>  </td><td>  -  </td></tr>
     </table>
     */
    public Assessment clientRiskAssessmentCreate(UUID clientUuid, Assessment assessment) throws ApiException {
        ApiResponse<Assessment> localVarResp = clientRiskAssessmentCreateWithHttpInfo(clientUuid, assessment);
        return localVarResp.getData();
    }

    /**
     * 
     * Create a risk assessment for a client
     * @param clientUuid  (required)
     * @param assessment  (required)
     * @return ApiResponse&lt;Assessment&gt;
     * @throws ApiException If fail to call the API, e.g. server error or cannot deserialize the response body
     * @http.response.details
     <table summary="Response Details" border="1">
        <tr><td> Status Code </td><td> Description </td><td> Response Headers </td></tr>
        <tr><td> 201 </td><td>  </td><td>  -  </td></tr>
     </table>
     */
    public ApiResponse<Assessment> clientRiskAssessmentCreateWithHttpInfo(UUID clientUuid, Assessment assessment) throws ApiException {
        okhttp3.Call localVarCall = clientRiskAssessmentCreateValidateBeforeCall(clientUuid, assessment, null);
        Type localVarReturnType = new TypeToken<Assessment>(){}.getType();
        return localVarApiClient.execute(localVarCall, localVarReturnType);
    }

    /**
     *  (asynchronously)
     * Create a risk assessment for a client
     * @param clientUuid  (required)
     * @param assessment  (required)
     * @param _callback The callback to be executed when the API call finishes
     * @return The request call
     * @throws ApiException If fail to process the API call, e.g. serializing the request body object
     * @http.response.details
     <table summary="Response Details" border="1">
        <tr><td> Status Code </td><td> Description </td><td> Response Headers </td></tr>
        <tr><td> 201 </td><td>  </td><td>  -  </td></tr>
     </table>
     */
    public okhttp3.Call clientRiskAssessmentCreateAsync(UUID clientUuid, Assessment assessment, final ApiCallback<Assessment> _callback) throws ApiException {

        okhttp3.Call localVarCall = clientRiskAssessmentCreateValidateBeforeCall(clientUuid, assessment, _callback);
        Type localVarReturnType = new TypeToken<Assessment>(){}.getType();
        localVarApiClient.executeAsync(localVarCall, localVarReturnType, _callback);
        return localVarCall;
    }
    /**
     * Build call for clientRiskAssessmentDelete
     * @param clientUuid  (required)
     * @param uuid  (required)
     * @param _callback Callback for upload/download progress
     * @return Call to execute
     * @throws ApiException If fail to serialize the request body object
     * @http.response.details
     <table summary="Response Details" border="1">
        <tr><td> Status Code </td><td> Description </td><td> Response Headers </td></tr>
        <tr><td> 204 </td><td> No response body </td><td>  -  </td></tr>
     </table>
     */
    public okhttp3.Call clientRiskAssessmentDeleteCall(UUID clientUuid, UUID uuid, final ApiCallback _callback) throws ApiException {
        Object localVarPostBody = null;

        // create path and map variables
        String localVarPath = "/api/v2/clients/{client_uuid}/risk-assessments/{uuid}/"
            .replaceAll("\\{" + "client_uuid" + "\\}", localVarApiClient.escapeString(clientUuid.toString()))
            .replaceAll("\\{" + "uuid" + "\\}", localVarApiClient.escapeString(uuid.toString()));

        List<Pair> localVarQueryParams = new ArrayList<Pair>();
        List<Pair> localVarCollectionQueryParams = new ArrayList<Pair>();
        Map<String, String> localVarHeaderParams = new HashMap<String, String>();
        Map<String, String> localVarCookieParams = new HashMap<String, String>();
        Map<String, Object> localVarFormParams = new HashMap<String, Object>();

        final String[] localVarAccepts = {
            
        };
        final String localVarAccept = localVarApiClient.selectHeaderAccept(localVarAccepts);
        if (localVarAccept != null) {
            localVarHeaderParams.put("Accept", localVarAccept);
        }

        final String[] localVarContentTypes = {
            
        };
        final String localVarContentType = localVarApiClient.selectHeaderContentType(localVarContentTypes);
        localVarHeaderParams.put("Content-Type", localVarContentType);

        String[] localVarAuthNames = new String[] { "cookieAuth", "jwtAuth", "tokenAuth" };
        return localVarApiClient.buildCall(localVarPath, "DELETE", localVarQueryParams, localVarCollectionQueryParams, localVarPostBody, localVarHeaderParams, localVarCookieParams, localVarFormParams, localVarAuthNames, _callback);
    }

    @SuppressWarnings("rawtypes")
    private okhttp3.Call clientRiskAssessmentDeleteValidateBeforeCall(UUID clientUuid, UUID uuid, final ApiCallback _callback) throws ApiException {
        
        // verify the required parameter 'clientUuid' is set
        if (clientUuid == null) {
            throw new ApiException("Missing the required parameter 'clientUuid' when calling clientRiskAssessmentDelete(Async)");
        }
        
        // verify the required parameter 'uuid' is set
        if (uuid == null) {
            throw new ApiException("Missing the required parameter 'uuid' when calling clientRiskAssessmentDelete(Async)");
        }
        

        okhttp3.Call localVarCall = clientRiskAssessmentDeleteCall(clientUuid, uuid, _callback);
        return localVarCall;

    }

    /**
     * 
     * Delete a client risk assessment
     * @param clientUuid  (required)
     * @param uuid  (required)
     * @throws ApiException If fail to call the API, e.g. server error or cannot deserialize the response body
     * @http.response.details
     <table summary="Response Details" border="1">
        <tr><td> Status Code </td><td> Description </td><td> Response Headers </td></tr>
        <tr><td> 204 </td><td> No response body </td><td>  -  </td></tr>
     </table>
     */
    public void clientRiskAssessmentDelete(UUID clientUuid, UUID uuid) throws ApiException {
        clientRiskAssessmentDeleteWithHttpInfo(clientUuid, uuid);
    }

    /**
     * 
     * Delete a client risk assessment
     * @param clientUuid  (required)
     * @param uuid  (required)
     * @return ApiResponse&lt;Void&gt;
     * @throws ApiException If fail to call the API, e.g. server error or cannot deserialize the response body
     * @http.response.details
     <table summary="Response Details" border="1">
        <tr><td> Status Code </td><td> Description </td><td> Response Headers </td></tr>
        <tr><td> 204 </td><td> No response body </td><td>  -  </td></tr>
     </table>
     */
    public ApiResponse<Void> clientRiskAssessmentDeleteWithHttpInfo(UUID clientUuid, UUID uuid) throws ApiException {
        okhttp3.Call localVarCall = clientRiskAssessmentDeleteValidateBeforeCall(clientUuid, uuid, null);
        return localVarApiClient.execute(localVarCall);
    }

    /**
     *  (asynchronously)
     * Delete a client risk assessment
     * @param clientUuid  (required)
     * @param uuid  (required)
     * @param _callback The callback to be executed when the API call finishes
     * @return The request call
     * @throws ApiException If fail to process the API call, e.g. serializing the request body object
     * @http.response.details
     <table summary="Response Details" border="1">
        <tr><td> Status Code </td><td> Description </td><td> Response Headers </td></tr>
        <tr><td> 204 </td><td> No response body </td><td>  -  </td></tr>
     </table>
     */
    public okhttp3.Call clientRiskAssessmentDeleteAsync(UUID clientUuid, UUID uuid, final ApiCallback<Void> _callback) throws ApiException {

        okhttp3.Call localVarCall = clientRiskAssessmentDeleteValidateBeforeCall(clientUuid, uuid, _callback);
        localVarApiClient.executeAsync(localVarCall, _callback);
        return localVarCall;
    }
    /**
     * Build call for clientRiskAssessmentList
     * @param clientUuid  (required)
     * @param limit Number of results to return per page. (optional)
     * @param offset The initial index from which to return the results. (optional)
     * @param status  (optional)
     * @param _callback Callback for upload/download progress
     * @return Call to execute
     * @throws ApiException If fail to serialize the request body object
     * @http.response.details
     <table summary="Response Details" border="1">
        <tr><td> Status Code </td><td> Description </td><td> Response Headers </td></tr>
        <tr><td> 200 </td><td>  </td><td>  -  </td></tr>
     </table>
     */
    public okhttp3.Call clientRiskAssessmentListCall(UUID clientUuid, Integer limit, Integer offset, List<String> status, final ApiCallback _callback) throws ApiException {
        Object localVarPostBody = null;

        // create path and map variables
        String localVarPath = "/api/v2/clients/{client_uuid}/risk-assessments/"
            .replaceAll("\\{" + "client_uuid" + "\\}", localVarApiClient.escapeString(clientUuid.toString()));

        List<Pair> localVarQueryParams = new ArrayList<Pair>();
        List<Pair> localVarCollectionQueryParams = new ArrayList<Pair>();
        Map<String, String> localVarHeaderParams = new HashMap<String, String>();
        Map<String, String> localVarCookieParams = new HashMap<String, String>();
        Map<String, Object> localVarFormParams = new HashMap<String, Object>();

        if (limit != null) {
            localVarQueryParams.addAll(localVarApiClient.parameterToPair("limit", limit));
        }

        if (offset != null) {
            localVarQueryParams.addAll(localVarApiClient.parameterToPair("offset", offset));
        }

        if (status != null) {
            localVarCollectionQueryParams.addAll(localVarApiClient.parameterToPairs("multi", "status", status));
        }

        final String[] localVarAccepts = {
            "application/json"
        };
        final String localVarAccept = localVarApiClient.selectHeaderAccept(localVarAccepts);
        if (localVarAccept != null) {
            localVarHeaderParams.put("Accept", localVarAccept);
        }

        final String[] localVarContentTypes = {
            
        };
        final String localVarContentType = localVarApiClient.selectHeaderContentType(localVarContentTypes);
        localVarHeaderParams.put("Content-Type", localVarContentType);

        String[] localVarAuthNames = new String[] { "cookieAuth", "jwtAuth", "tokenAuth" };
        return localVarApiClient.buildCall(localVarPath, "GET", localVarQueryParams, localVarCollectionQueryParams, localVarPostBody, localVarHeaderParams, localVarCookieParams, localVarFormParams, localVarAuthNames, _callback);
    }

    @SuppressWarnings("rawtypes")
    private okhttp3.Call clientRiskAssessmentListValidateBeforeCall(UUID clientUuid, Integer limit, Integer offset, List<String> status, final ApiCallback _callback) throws ApiException {
        
        // verify the required parameter 'clientUuid' is set
        if (clientUuid == null) {
            throw new ApiException("Missing the required parameter 'clientUuid' when calling clientRiskAssessmentList(Async)");
        }
        

        okhttp3.Call localVarCall = clientRiskAssessmentListCall(clientUuid, limit, offset, status, _callback);
        return localVarCall;

    }

    /**
     * 
     * List Risk Assessment for a client
     * @param clientUuid  (required)
     * @param limit Number of results to return per page. (optional)
     * @param offset The initial index from which to return the results. (optional)
     * @param status  (optional)
     * @return PaginatedAssessmentList
     * @throws ApiException If fail to call the API, e.g. server error or cannot deserialize the response body
     * @http.response.details
     <table summary="Response Details" border="1">
        <tr><td> Status Code </td><td> Description </td><td> Response Headers </td></tr>
        <tr><td> 200 </td><td>  </td><td>  -  </td></tr>
     </table>
     */
    public PaginatedAssessmentList clientRiskAssessmentList(UUID clientUuid, Integer limit, Integer offset, List<String> status) throws ApiException {
        ApiResponse<PaginatedAssessmentList> localVarResp = clientRiskAssessmentListWithHttpInfo(clientUuid, limit, offset, status);
        return localVarResp.getData();
    }

    /**
     * 
     * List Risk Assessment for a client
     * @param clientUuid  (required)
     * @param limit Number of results to return per page. (optional)
     * @param offset The initial index from which to return the results. (optional)
     * @param status  (optional)
     * @return ApiResponse&lt;PaginatedAssessmentList&gt;
     * @throws ApiException If fail to call the API, e.g. server error or cannot deserialize the response body
     * @http.response.details
     <table summary="Response Details" border="1">
        <tr><td> Status Code </td><td> Description </td><td> Response Headers </td></tr>
        <tr><td> 200 </td><td>  </td><td>  -  </td></tr>
     </table>
     */
    public ApiResponse<PaginatedAssessmentList> clientRiskAssessmentListWithHttpInfo(UUID clientUuid, Integer limit, Integer offset, List<String> status) throws ApiException {
        okhttp3.Call localVarCall = clientRiskAssessmentListValidateBeforeCall(clientUuid, limit, offset, status, null);
        Type localVarReturnType = new TypeToken<PaginatedAssessmentList>(){}.getType();
        return localVarApiClient.execute(localVarCall, localVarReturnType);
    }

    /**
     *  (asynchronously)
     * List Risk Assessment for a client
     * @param clientUuid  (required)
     * @param limit Number of results to return per page. (optional)
     * @param offset The initial index from which to return the results. (optional)
     * @param status  (optional)
     * @param _callback The callback to be executed when the API call finishes
     * @return The request call
     * @throws ApiException If fail to process the API call, e.g. serializing the request body object
     * @http.response.details
     <table summary="Response Details" border="1">
        <tr><td> Status Code </td><td> Description </td><td> Response Headers </td></tr>
        <tr><td> 200 </td><td>  </td><td>  -  </td></tr>
     </table>
     */
    public okhttp3.Call clientRiskAssessmentListAsync(UUID clientUuid, Integer limit, Integer offset, List<String> status, final ApiCallback<PaginatedAssessmentList> _callback) throws ApiException {

        okhttp3.Call localVarCall = clientRiskAssessmentListValidateBeforeCall(clientUuid, limit, offset, status, _callback);
        Type localVarReturnType = new TypeToken<PaginatedAssessmentList>(){}.getType();
        localVarApiClient.executeAsync(localVarCall, localVarReturnType, _callback);
        return localVarCall;
    }
    /**
     * Build call for clientRiskAssessmentPartialUpdate
     * @param clientUuid  (required)
     * @param uuid  (required)
     * @param patchedAssessment  (optional)
     * @param _callback Callback for upload/download progress
     * @return Call to execute
     * @throws ApiException If fail to serialize the request body object
     * @http.response.details
     <table summary="Response Details" border="1">
        <tr><td> Status Code </td><td> Description </td><td> Response Headers </td></tr>
        <tr><td> 200 </td><td>  </td><td>  -  </td></tr>
     </table>
     */
    public okhttp3.Call clientRiskAssessmentPartialUpdateCall(UUID clientUuid, UUID uuid, PatchedAssessment patchedAssessment, final ApiCallback _callback) throws ApiException {
        Object localVarPostBody = patchedAssessment;

        // create path and map variables
        String localVarPath = "/api/v2/clients/{client_uuid}/risk-assessments/{uuid}/"
            .replaceAll("\\{" + "client_uuid" + "\\}", localVarApiClient.escapeString(clientUuid.toString()))
            .replaceAll("\\{" + "uuid" + "\\}", localVarApiClient.escapeString(uuid.toString()));

        List<Pair> localVarQueryParams = new ArrayList<Pair>();
        List<Pair> localVarCollectionQueryParams = new ArrayList<Pair>();
        Map<String, String> localVarHeaderParams = new HashMap<String, String>();
        Map<String, String> localVarCookieParams = new HashMap<String, String>();
        Map<String, Object> localVarFormParams = new HashMap<String, Object>();

        final String[] localVarAccepts = {
            "application/json"
        };
        final String localVarAccept = localVarApiClient.selectHeaderAccept(localVarAccepts);
        if (localVarAccept != null) {
            localVarHeaderParams.put("Accept", localVarAccept);
        }

        final String[] localVarContentTypes = {
            "application/json", "application/x-www-form-urlencoded", "multipart/form-data"
        };
        final String localVarContentType = localVarApiClient.selectHeaderContentType(localVarContentTypes);
        localVarHeaderParams.put("Content-Type", localVarContentType);

        String[] localVarAuthNames = new String[] { "cookieAuth", "jwtAuth", "tokenAuth" };
        return localVarApiClient.buildCall(localVarPath, "PATCH", localVarQueryParams, localVarCollectionQueryParams, localVarPostBody, localVarHeaderParams, localVarCookieParams, localVarFormParams, localVarAuthNames, _callback);
    }

    @SuppressWarnings("rawtypes")
    private okhttp3.Call clientRiskAssessmentPartialUpdateValidateBeforeCall(UUID clientUuid, UUID uuid, PatchedAssessment patchedAssessment, final ApiCallback _callback) throws ApiException {
        
        // verify the required parameter 'clientUuid' is set
        if (clientUuid == null) {
            throw new ApiException("Missing the required parameter 'clientUuid' when calling clientRiskAssessmentPartialUpdate(Async)");
        }
        
        // verify the required parameter 'uuid' is set
        if (uuid == null) {
            throw new ApiException("Missing the required parameter 'uuid' when calling clientRiskAssessmentPartialUpdate(Async)");
        }
        

        okhttp3.Call localVarCall = clientRiskAssessmentPartialUpdateCall(clientUuid, uuid, patchedAssessment, _callback);
        return localVarCall;

    }

    /**
     * 
     * Partial Update a client risk assessment
     * @param clientUuid  (required)
     * @param uuid  (required)
     * @param patchedAssessment  (optional)
     * @return Assessment
     * @throws ApiException If fail to call the API, e.g. server error or cannot deserialize the response body
     * @http.response.details
     <table summary="Response Details" border="1">
        <tr><td> Status Code </td><td> Description </td><td> Response Headers </td></tr>
        <tr><td> 200 </td><td>  </td><td>  -  </td></tr>
     </table>
     */
    public Assessment clientRiskAssessmentPartialUpdate(UUID clientUuid, UUID uuid, PatchedAssessment patchedAssessment) throws ApiException {
        ApiResponse<Assessment> localVarResp = clientRiskAssessmentPartialUpdateWithHttpInfo(clientUuid, uuid, patchedAssessment);
        return localVarResp.getData();
    }

    /**
     * 
     * Partial Update a client risk assessment
     * @param clientUuid  (required)
     * @param uuid  (required)
     * @param patchedAssessment  (optional)
     * @return ApiResponse&lt;Assessment&gt;
     * @throws ApiException If fail to call the API, e.g. server error or cannot deserialize the response body
     * @http.response.details
     <table summary="Response Details" border="1">
        <tr><td> Status Code </td><td> Description </td><td> Response Headers </td></tr>
        <tr><td> 200 </td><td>  </td><td>  -  </td></tr>
     </table>
     */
    public ApiResponse<Assessment> clientRiskAssessmentPartialUpdateWithHttpInfo(UUID clientUuid, UUID uuid, PatchedAssessment patchedAssessment) throws ApiException {
        okhttp3.Call localVarCall = clientRiskAssessmentPartialUpdateValidateBeforeCall(clientUuid, uuid, patchedAssessment, null);
        Type localVarReturnType = new TypeToken<Assessment>(){}.getType();
        return localVarApiClient.execute(localVarCall, localVarReturnType);
    }

    /**
     *  (asynchronously)
     * Partial Update a client risk assessment
     * @param clientUuid  (required)
     * @param uuid  (required)
     * @param patchedAssessment  (optional)
     * @param _callback The callback to be executed when the API call finishes
     * @return The request call
     * @throws ApiException If fail to process the API call, e.g. serializing the request body object
     * @http.response.details
     <table summary="Response Details" border="1">
        <tr><td> Status Code </td><td> Description </td><td> Response Headers </td></tr>
        <tr><td> 200 </td><td>  </td><td>  -  </td></tr>
     </table>
     */
    public okhttp3.Call clientRiskAssessmentPartialUpdateAsync(UUID clientUuid, UUID uuid, PatchedAssessment patchedAssessment, final ApiCallback<Assessment> _callback) throws ApiException {

        okhttp3.Call localVarCall = clientRiskAssessmentPartialUpdateValidateBeforeCall(clientUuid, uuid, patchedAssessment, _callback);
        Type localVarReturnType = new TypeToken<Assessment>(){}.getType();
        localVarApiClient.executeAsync(localVarCall, localVarReturnType, _callback);
        return localVarCall;
    }
    /**
     * Build call for clientRiskAssessmentRetrieve
     * @param clientUuid  (required)
     * @param uuid  (required)
     * @param _callback Callback for upload/download progress
     * @return Call to execute
     * @throws ApiException If fail to serialize the request body object
     * @http.response.details
     <table summary="Response Details" border="1">
        <tr><td> Status Code </td><td> Description </td><td> Response Headers </td></tr>
        <tr><td> 200 </td><td>  </td><td>  -  </td></tr>
     </table>
     */
    public okhttp3.Call clientRiskAssessmentRetrieveCall(UUID clientUuid, UUID uuid, final ApiCallback _callback) throws ApiException {
        Object localVarPostBody = null;

        // create path and map variables
        String localVarPath = "/api/v2/clients/{client_uuid}/risk-assessments/{uuid}/"
            .replaceAll("\\{" + "client_uuid" + "\\}", localVarApiClient.escapeString(clientUuid.toString()))
            .replaceAll("\\{" + "uuid" + "\\}", localVarApiClient.escapeString(uuid.toString()));

        List<Pair> localVarQueryParams = new ArrayList<Pair>();
        List<Pair> localVarCollectionQueryParams = new ArrayList<Pair>();
        Map<String, String> localVarHeaderParams = new HashMap<String, String>();
        Map<String, String> localVarCookieParams = new HashMap<String, String>();
        Map<String, Object> localVarFormParams = new HashMap<String, Object>();

        final String[] localVarAccepts = {
            "application/json"
        };
        final String localVarAccept = localVarApiClient.selectHeaderAccept(localVarAccepts);
        if (localVarAccept != null) {
            localVarHeaderParams.put("Accept", localVarAccept);
        }

        final String[] localVarContentTypes = {
            
        };
        final String localVarContentType = localVarApiClient.selectHeaderContentType(localVarContentTypes);
        localVarHeaderParams.put("Content-Type", localVarContentType);

        String[] localVarAuthNames = new String[] { "cookieAuth", "jwtAuth", "tokenAuth" };
        return localVarApiClient.buildCall(localVarPath, "GET", localVarQueryParams, localVarCollectionQueryParams, localVarPostBody, localVarHeaderParams, localVarCookieParams, localVarFormParams, localVarAuthNames, _callback);
    }

    @SuppressWarnings("rawtypes")
    private okhttp3.Call clientRiskAssessmentRetrieveValidateBeforeCall(UUID clientUuid, UUID uuid, final ApiCallback _callback) throws ApiException {
        
        // verify the required parameter 'clientUuid' is set
        if (clientUuid == null) {
            throw new ApiException("Missing the required parameter 'clientUuid' when calling clientRiskAssessmentRetrieve(Async)");
        }
        
        // verify the required parameter 'uuid' is set
        if (uuid == null) {
            throw new ApiException("Missing the required parameter 'uuid' when calling clientRiskAssessmentRetrieve(Async)");
        }
        

        okhttp3.Call localVarCall = clientRiskAssessmentRetrieveCall(clientUuid, uuid, _callback);
        return localVarCall;

    }

    /**
     * 
     * Retrieve a client risk assessment
     * @param clientUuid  (required)
     * @param uuid  (required)
     * @return Assessment
     * @throws ApiException If fail to call the API, e.g. server error or cannot deserialize the response body
     * @http.response.details
     <table summary="Response Details" border="1">
        <tr><td> Status Code </td><td> Description </td><td> Response Headers </td></tr>
        <tr><td> 200 </td><td>  </td><td>  -  </td></tr>
     </table>
     */
    public Assessment clientRiskAssessmentRetrieve(UUID clientUuid, UUID uuid) throws ApiException {
        ApiResponse<Assessment> localVarResp = clientRiskAssessmentRetrieveWithHttpInfo(clientUuid, uuid);
        return localVarResp.getData();
    }

    /**
     * 
     * Retrieve a client risk assessment
     * @param clientUuid  (required)
     * @param uuid  (required)
     * @return ApiResponse&lt;Assessment&gt;
     * @throws ApiException If fail to call the API, e.g. server error or cannot deserialize the response body
     * @http.response.details
     <table summary="Response Details" border="1">
        <tr><td> Status Code </td><td> Description </td><td> Response Headers </td></tr>
        <tr><td> 200 </td><td>  </td><td>  -  </td></tr>
     </table>
     */
    public ApiResponse<Assessment> clientRiskAssessmentRetrieveWithHttpInfo(UUID clientUuid, UUID uuid) throws ApiException {
        okhttp3.Call localVarCall = clientRiskAssessmentRetrieveValidateBeforeCall(clientUuid, uuid, null);
        Type localVarReturnType = new TypeToken<Assessment>(){}.getType();
        return localVarApiClient.execute(localVarCall, localVarReturnType);
    }

    /**
     *  (asynchronously)
     * Retrieve a client risk assessment
     * @param clientUuid  (required)
     * @param uuid  (required)
     * @param _callback The callback to be executed when the API call finishes
     * @return The request call
     * @throws ApiException If fail to process the API call, e.g. serializing the request body object
     * @http.response.details
     <table summary="Response Details" border="1">
        <tr><td> Status Code </td><td> Description </td><td> Response Headers </td></tr>
        <tr><td> 200 </td><td>  </td><td>  -  </td></tr>
     </table>
     */
    public okhttp3.Call clientRiskAssessmentRetrieveAsync(UUID clientUuid, UUID uuid, final ApiCallback<Assessment> _callback) throws ApiException {

        okhttp3.Call localVarCall = clientRiskAssessmentRetrieveValidateBeforeCall(clientUuid, uuid, _callback);
        Type localVarReturnType = new TypeToken<Assessment>(){}.getType();
        localVarApiClient.executeAsync(localVarCall, localVarReturnType, _callback);
        return localVarCall;
    }
}
