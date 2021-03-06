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


import org.openapitools.client.model.AddressCreate;
import org.openapitools.client.model.AddressList;
import org.openapitools.client.model.AddressUpdate;
import org.openapitools.client.model.PaginatedAddressListList;
import org.openapitools.client.model.PatchedAddressUpdate;
import java.util.UUID;

import java.lang.reflect.Type;
import java.util.ArrayList;
import java.util.HashMap;
import java.util.List;
import java.util.Map;

public class AddressApi {
    private ApiClient localVarApiClient;

    public AddressApi() {
        this(Configuration.getDefaultApiClient());
    }

    public AddressApi(ApiClient apiClient) {
        this.localVarApiClient = apiClient;
    }

    public ApiClient getApiClient() {
        return localVarApiClient;
    }

    public void setApiClient(ApiClient apiClient) {
        this.localVarApiClient = apiClient;
    }

    /**
     * Build call for clientAddressCreate
     * @param clientUuid  (required)
     * @param addressCreate  (required)
     * @param _callback Callback for upload/download progress
     * @return Call to execute
     * @throws ApiException If fail to serialize the request body object
     * @http.response.details
     <table summary="Response Details" border="1">
        <tr><td> Status Code </td><td> Description </td><td> Response Headers </td></tr>
        <tr><td> 201 </td><td>  </td><td>  -  </td></tr>
     </table>
     */
    public okhttp3.Call clientAddressCreateCall(UUID clientUuid, AddressCreate addressCreate, final ApiCallback _callback) throws ApiException {
        Object localVarPostBody = addressCreate;

        // create path and map variables
        String localVarPath = "/api/v2/clients/{client_uuid}/addresses/"
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
    private okhttp3.Call clientAddressCreateValidateBeforeCall(UUID clientUuid, AddressCreate addressCreate, final ApiCallback _callback) throws ApiException {
        
        // verify the required parameter 'clientUuid' is set
        if (clientUuid == null) {
            throw new ApiException("Missing the required parameter 'clientUuid' when calling clientAddressCreate(Async)");
        }
        
        // verify the required parameter 'addressCreate' is set
        if (addressCreate == null) {
            throw new ApiException("Missing the required parameter 'addressCreate' when calling clientAddressCreate(Async)");
        }
        

        okhttp3.Call localVarCall = clientAddressCreateCall(clientUuid, addressCreate, _callback);
        return localVarCall;

    }

    /**
     * 
     * Create an address for a client
     * @param clientUuid  (required)
     * @param addressCreate  (required)
     * @return AddressCreate
     * @throws ApiException If fail to call the API, e.g. server error or cannot deserialize the response body
     * @http.response.details
     <table summary="Response Details" border="1">
        <tr><td> Status Code </td><td> Description </td><td> Response Headers </td></tr>
        <tr><td> 201 </td><td>  </td><td>  -  </td></tr>
     </table>
     */
    public AddressCreate clientAddressCreate(UUID clientUuid, AddressCreate addressCreate) throws ApiException {
        ApiResponse<AddressCreate> localVarResp = clientAddressCreateWithHttpInfo(clientUuid, addressCreate);
        return localVarResp.getData();
    }

    /**
     * 
     * Create an address for a client
     * @param clientUuid  (required)
     * @param addressCreate  (required)
     * @return ApiResponse&lt;AddressCreate&gt;
     * @throws ApiException If fail to call the API, e.g. server error or cannot deserialize the response body
     * @http.response.details
     <table summary="Response Details" border="1">
        <tr><td> Status Code </td><td> Description </td><td> Response Headers </td></tr>
        <tr><td> 201 </td><td>  </td><td>  -  </td></tr>
     </table>
     */
    public ApiResponse<AddressCreate> clientAddressCreateWithHttpInfo(UUID clientUuid, AddressCreate addressCreate) throws ApiException {
        okhttp3.Call localVarCall = clientAddressCreateValidateBeforeCall(clientUuid, addressCreate, null);
        Type localVarReturnType = new TypeToken<AddressCreate>(){}.getType();
        return localVarApiClient.execute(localVarCall, localVarReturnType);
    }

    /**
     *  (asynchronously)
     * Create an address for a client
     * @param clientUuid  (required)
     * @param addressCreate  (required)
     * @param _callback The callback to be executed when the API call finishes
     * @return The request call
     * @throws ApiException If fail to process the API call, e.g. serializing the request body object
     * @http.response.details
     <table summary="Response Details" border="1">
        <tr><td> Status Code </td><td> Description </td><td> Response Headers </td></tr>
        <tr><td> 201 </td><td>  </td><td>  -  </td></tr>
     </table>
     */
    public okhttp3.Call clientAddressCreateAsync(UUID clientUuid, AddressCreate addressCreate, final ApiCallback<AddressCreate> _callback) throws ApiException {

        okhttp3.Call localVarCall = clientAddressCreateValidateBeforeCall(clientUuid, addressCreate, _callback);
        Type localVarReturnType = new TypeToken<AddressCreate>(){}.getType();
        localVarApiClient.executeAsync(localVarCall, localVarReturnType, _callback);
        return localVarCall;
    }
    /**
     * Build call for clientAddressDelete
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
    public okhttp3.Call clientAddressDeleteCall(UUID clientUuid, UUID uuid, final ApiCallback _callback) throws ApiException {
        Object localVarPostBody = null;

        // create path and map variables
        String localVarPath = "/api/v2/clients/{client_uuid}/addresses/{uuid}/"
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
    private okhttp3.Call clientAddressDeleteValidateBeforeCall(UUID clientUuid, UUID uuid, final ApiCallback _callback) throws ApiException {
        
        // verify the required parameter 'clientUuid' is set
        if (clientUuid == null) {
            throw new ApiException("Missing the required parameter 'clientUuid' when calling clientAddressDelete(Async)");
        }
        
        // verify the required parameter 'uuid' is set
        if (uuid == null) {
            throw new ApiException("Missing the required parameter 'uuid' when calling clientAddressDelete(Async)");
        }
        

        okhttp3.Call localVarCall = clientAddressDeleteCall(clientUuid, uuid, _callback);
        return localVarCall;

    }

    /**
     * 
     * Delete a client address
     * @param clientUuid  (required)
     * @param uuid  (required)
     * @throws ApiException If fail to call the API, e.g. server error or cannot deserialize the response body
     * @http.response.details
     <table summary="Response Details" border="1">
        <tr><td> Status Code </td><td> Description </td><td> Response Headers </td></tr>
        <tr><td> 204 </td><td> No response body </td><td>  -  </td></tr>
     </table>
     */
    public void clientAddressDelete(UUID clientUuid, UUID uuid) throws ApiException {
        clientAddressDeleteWithHttpInfo(clientUuid, uuid);
    }

    /**
     * 
     * Delete a client address
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
    public ApiResponse<Void> clientAddressDeleteWithHttpInfo(UUID clientUuid, UUID uuid) throws ApiException {
        okhttp3.Call localVarCall = clientAddressDeleteValidateBeforeCall(clientUuid, uuid, null);
        return localVarApiClient.execute(localVarCall);
    }

    /**
     *  (asynchronously)
     * Delete a client address
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
    public okhttp3.Call clientAddressDeleteAsync(UUID clientUuid, UUID uuid, final ApiCallback<Void> _callback) throws ApiException {

        okhttp3.Call localVarCall = clientAddressDeleteValidateBeforeCall(clientUuid, uuid, _callback);
        localVarApiClient.executeAsync(localVarCall, _callback);
        return localVarCall;
    }
    /**
     * Build call for clientAddressPartialUpdate
     * @param clientUuid  (required)
     * @param uuid  (required)
     * @param patchedAddressUpdate  (optional)
     * @param _callback Callback for upload/download progress
     * @return Call to execute
     * @throws ApiException If fail to serialize the request body object
     * @http.response.details
     <table summary="Response Details" border="1">
        <tr><td> Status Code </td><td> Description </td><td> Response Headers </td></tr>
        <tr><td> 200 </td><td>  </td><td>  -  </td></tr>
     </table>
     */
    public okhttp3.Call clientAddressPartialUpdateCall(UUID clientUuid, UUID uuid, PatchedAddressUpdate patchedAddressUpdate, final ApiCallback _callback) throws ApiException {
        Object localVarPostBody = patchedAddressUpdate;

        // create path and map variables
        String localVarPath = "/api/v2/clients/{client_uuid}/addresses/{uuid}/"
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
    private okhttp3.Call clientAddressPartialUpdateValidateBeforeCall(UUID clientUuid, UUID uuid, PatchedAddressUpdate patchedAddressUpdate, final ApiCallback _callback) throws ApiException {
        
        // verify the required parameter 'clientUuid' is set
        if (clientUuid == null) {
            throw new ApiException("Missing the required parameter 'clientUuid' when calling clientAddressPartialUpdate(Async)");
        }
        
        // verify the required parameter 'uuid' is set
        if (uuid == null) {
            throw new ApiException("Missing the required parameter 'uuid' when calling clientAddressPartialUpdate(Async)");
        }
        

        okhttp3.Call localVarCall = clientAddressPartialUpdateCall(clientUuid, uuid, patchedAddressUpdate, _callback);
        return localVarCall;

    }

    /**
     * 
     * Partial Update a client address
     * @param clientUuid  (required)
     * @param uuid  (required)
     * @param patchedAddressUpdate  (optional)
     * @return AddressUpdate
     * @throws ApiException If fail to call the API, e.g. server error or cannot deserialize the response body
     * @http.response.details
     <table summary="Response Details" border="1">
        <tr><td> Status Code </td><td> Description </td><td> Response Headers </td></tr>
        <tr><td> 200 </td><td>  </td><td>  -  </td></tr>
     </table>
     */
    public AddressUpdate clientAddressPartialUpdate(UUID clientUuid, UUID uuid, PatchedAddressUpdate patchedAddressUpdate) throws ApiException {
        ApiResponse<AddressUpdate> localVarResp = clientAddressPartialUpdateWithHttpInfo(clientUuid, uuid, patchedAddressUpdate);
        return localVarResp.getData();
    }

    /**
     * 
     * Partial Update a client address
     * @param clientUuid  (required)
     * @param uuid  (required)
     * @param patchedAddressUpdate  (optional)
     * @return ApiResponse&lt;AddressUpdate&gt;
     * @throws ApiException If fail to call the API, e.g. server error or cannot deserialize the response body
     * @http.response.details
     <table summary="Response Details" border="1">
        <tr><td> Status Code </td><td> Description </td><td> Response Headers </td></tr>
        <tr><td> 200 </td><td>  </td><td>  -  </td></tr>
     </table>
     */
    public ApiResponse<AddressUpdate> clientAddressPartialUpdateWithHttpInfo(UUID clientUuid, UUID uuid, PatchedAddressUpdate patchedAddressUpdate) throws ApiException {
        okhttp3.Call localVarCall = clientAddressPartialUpdateValidateBeforeCall(clientUuid, uuid, patchedAddressUpdate, null);
        Type localVarReturnType = new TypeToken<AddressUpdate>(){}.getType();
        return localVarApiClient.execute(localVarCall, localVarReturnType);
    }

    /**
     *  (asynchronously)
     * Partial Update a client address
     * @param clientUuid  (required)
     * @param uuid  (required)
     * @param patchedAddressUpdate  (optional)
     * @param _callback The callback to be executed when the API call finishes
     * @return The request call
     * @throws ApiException If fail to process the API call, e.g. serializing the request body object
     * @http.response.details
     <table summary="Response Details" border="1">
        <tr><td> Status Code </td><td> Description </td><td> Response Headers </td></tr>
        <tr><td> 200 </td><td>  </td><td>  -  </td></tr>
     </table>
     */
    public okhttp3.Call clientAddressPartialUpdateAsync(UUID clientUuid, UUID uuid, PatchedAddressUpdate patchedAddressUpdate, final ApiCallback<AddressUpdate> _callback) throws ApiException {

        okhttp3.Call localVarCall = clientAddressPartialUpdateValidateBeforeCall(clientUuid, uuid, patchedAddressUpdate, _callback);
        Type localVarReturnType = new TypeToken<AddressUpdate>(){}.getType();
        localVarApiClient.executeAsync(localVarCall, localVarReturnType, _callback);
        return localVarCall;
    }
    /**
     * Build call for clientAddressRetrieve
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
    public okhttp3.Call clientAddressRetrieveCall(UUID clientUuid, UUID uuid, final ApiCallback _callback) throws ApiException {
        Object localVarPostBody = null;

        // create path and map variables
        String localVarPath = "/api/v2/clients/{client_uuid}/addresses/{uuid}/"
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
    private okhttp3.Call clientAddressRetrieveValidateBeforeCall(UUID clientUuid, UUID uuid, final ApiCallback _callback) throws ApiException {
        
        // verify the required parameter 'clientUuid' is set
        if (clientUuid == null) {
            throw new ApiException("Missing the required parameter 'clientUuid' when calling clientAddressRetrieve(Async)");
        }
        
        // verify the required parameter 'uuid' is set
        if (uuid == null) {
            throw new ApiException("Missing the required parameter 'uuid' when calling clientAddressRetrieve(Async)");
        }
        

        okhttp3.Call localVarCall = clientAddressRetrieveCall(clientUuid, uuid, _callback);
        return localVarCall;

    }

    /**
     * 
     * Retrieve a client address
     * @param clientUuid  (required)
     * @param uuid  (required)
     * @return AddressList
     * @throws ApiException If fail to call the API, e.g. server error or cannot deserialize the response body
     * @http.response.details
     <table summary="Response Details" border="1">
        <tr><td> Status Code </td><td> Description </td><td> Response Headers </td></tr>
        <tr><td> 200 </td><td>  </td><td>  -  </td></tr>
     </table>
     */
    public AddressList clientAddressRetrieve(UUID clientUuid, UUID uuid) throws ApiException {
        ApiResponse<AddressList> localVarResp = clientAddressRetrieveWithHttpInfo(clientUuid, uuid);
        return localVarResp.getData();
    }

    /**
     * 
     * Retrieve a client address
     * @param clientUuid  (required)
     * @param uuid  (required)
     * @return ApiResponse&lt;AddressList&gt;
     * @throws ApiException If fail to call the API, e.g. server error or cannot deserialize the response body
     * @http.response.details
     <table summary="Response Details" border="1">
        <tr><td> Status Code </td><td> Description </td><td> Response Headers </td></tr>
        <tr><td> 200 </td><td>  </td><td>  -  </td></tr>
     </table>
     */
    public ApiResponse<AddressList> clientAddressRetrieveWithHttpInfo(UUID clientUuid, UUID uuid) throws ApiException {
        okhttp3.Call localVarCall = clientAddressRetrieveValidateBeforeCall(clientUuid, uuid, null);
        Type localVarReturnType = new TypeToken<AddressList>(){}.getType();
        return localVarApiClient.execute(localVarCall, localVarReturnType);
    }

    /**
     *  (asynchronously)
     * Retrieve a client address
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
    public okhttp3.Call clientAddressRetrieveAsync(UUID clientUuid, UUID uuid, final ApiCallback<AddressList> _callback) throws ApiException {

        okhttp3.Call localVarCall = clientAddressRetrieveValidateBeforeCall(clientUuid, uuid, _callback);
        Type localVarReturnType = new TypeToken<AddressList>(){}.getType();
        localVarApiClient.executeAsync(localVarCall, localVarReturnType, _callback);
        return localVarCall;
    }
    /**
     * Build call for clientAddressUpdate
     * @param clientUuid  (required)
     * @param uuid  (required)
     * @param addressUpdate  (required)
     * @param _callback Callback for upload/download progress
     * @return Call to execute
     * @throws ApiException If fail to serialize the request body object
     * @http.response.details
     <table summary="Response Details" border="1">
        <tr><td> Status Code </td><td> Description </td><td> Response Headers </td></tr>
        <tr><td> 200 </td><td>  </td><td>  -  </td></tr>
     </table>
     */
    public okhttp3.Call clientAddressUpdateCall(UUID clientUuid, UUID uuid, AddressUpdate addressUpdate, final ApiCallback _callback) throws ApiException {
        Object localVarPostBody = addressUpdate;

        // create path and map variables
        String localVarPath = "/api/v2/clients/{client_uuid}/addresses/{uuid}/"
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
        return localVarApiClient.buildCall(localVarPath, "PUT", localVarQueryParams, localVarCollectionQueryParams, localVarPostBody, localVarHeaderParams, localVarCookieParams, localVarFormParams, localVarAuthNames, _callback);
    }

    @SuppressWarnings("rawtypes")
    private okhttp3.Call clientAddressUpdateValidateBeforeCall(UUID clientUuid, UUID uuid, AddressUpdate addressUpdate, final ApiCallback _callback) throws ApiException {
        
        // verify the required parameter 'clientUuid' is set
        if (clientUuid == null) {
            throw new ApiException("Missing the required parameter 'clientUuid' when calling clientAddressUpdate(Async)");
        }
        
        // verify the required parameter 'uuid' is set
        if (uuid == null) {
            throw new ApiException("Missing the required parameter 'uuid' when calling clientAddressUpdate(Async)");
        }
        
        // verify the required parameter 'addressUpdate' is set
        if (addressUpdate == null) {
            throw new ApiException("Missing the required parameter 'addressUpdate' when calling clientAddressUpdate(Async)");
        }
        

        okhttp3.Call localVarCall = clientAddressUpdateCall(clientUuid, uuid, addressUpdate, _callback);
        return localVarCall;

    }

    /**
     * 
     * Update a client address
     * @param clientUuid  (required)
     * @param uuid  (required)
     * @param addressUpdate  (required)
     * @return AddressUpdate
     * @throws ApiException If fail to call the API, e.g. server error or cannot deserialize the response body
     * @http.response.details
     <table summary="Response Details" border="1">
        <tr><td> Status Code </td><td> Description </td><td> Response Headers </td></tr>
        <tr><td> 200 </td><td>  </td><td>  -  </td></tr>
     </table>
     */
    public AddressUpdate clientAddressUpdate(UUID clientUuid, UUID uuid, AddressUpdate addressUpdate) throws ApiException {
        ApiResponse<AddressUpdate> localVarResp = clientAddressUpdateWithHttpInfo(clientUuid, uuid, addressUpdate);
        return localVarResp.getData();
    }

    /**
     * 
     * Update a client address
     * @param clientUuid  (required)
     * @param uuid  (required)
     * @param addressUpdate  (required)
     * @return ApiResponse&lt;AddressUpdate&gt;
     * @throws ApiException If fail to call the API, e.g. server error or cannot deserialize the response body
     * @http.response.details
     <table summary="Response Details" border="1">
        <tr><td> Status Code </td><td> Description </td><td> Response Headers </td></tr>
        <tr><td> 200 </td><td>  </td><td>  -  </td></tr>
     </table>
     */
    public ApiResponse<AddressUpdate> clientAddressUpdateWithHttpInfo(UUID clientUuid, UUID uuid, AddressUpdate addressUpdate) throws ApiException {
        okhttp3.Call localVarCall = clientAddressUpdateValidateBeforeCall(clientUuid, uuid, addressUpdate, null);
        Type localVarReturnType = new TypeToken<AddressUpdate>(){}.getType();
        return localVarApiClient.execute(localVarCall, localVarReturnType);
    }

    /**
     *  (asynchronously)
     * Update a client address
     * @param clientUuid  (required)
     * @param uuid  (required)
     * @param addressUpdate  (required)
     * @param _callback The callback to be executed when the API call finishes
     * @return The request call
     * @throws ApiException If fail to process the API call, e.g. serializing the request body object
     * @http.response.details
     <table summary="Response Details" border="1">
        <tr><td> Status Code </td><td> Description </td><td> Response Headers </td></tr>
        <tr><td> 200 </td><td>  </td><td>  -  </td></tr>
     </table>
     */
    public okhttp3.Call clientAddressUpdateAsync(UUID clientUuid, UUID uuid, AddressUpdate addressUpdate, final ApiCallback<AddressUpdate> _callback) throws ApiException {

        okhttp3.Call localVarCall = clientAddressUpdateValidateBeforeCall(clientUuid, uuid, addressUpdate, _callback);
        Type localVarReturnType = new TypeToken<AddressUpdate>(){}.getType();
        localVarApiClient.executeAsync(localVarCall, localVarReturnType, _callback);
        return localVarCall;
    }
    /**
     * Build call for clientAddressesList
     * @param clientUuid  (required)
     * @param limit Number of results to return per page. (optional)
     * @param offset The initial index from which to return the results. (optional)
     * @param _callback Callback for upload/download progress
     * @return Call to execute
     * @throws ApiException If fail to serialize the request body object
     * @http.response.details
     <table summary="Response Details" border="1">
        <tr><td> Status Code </td><td> Description </td><td> Response Headers </td></tr>
        <tr><td> 200 </td><td>  </td><td>  -  </td></tr>
     </table>
     */
    public okhttp3.Call clientAddressesListCall(UUID clientUuid, Integer limit, Integer offset, final ApiCallback _callback) throws ApiException {
        Object localVarPostBody = null;

        // create path and map variables
        String localVarPath = "/api/v2/clients/{client_uuid}/addresses/"
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
    private okhttp3.Call clientAddressesListValidateBeforeCall(UUID clientUuid, Integer limit, Integer offset, final ApiCallback _callback) throws ApiException {
        
        // verify the required parameter 'clientUuid' is set
        if (clientUuid == null) {
            throw new ApiException("Missing the required parameter 'clientUuid' when calling clientAddressesList(Async)");
        }
        

        okhttp3.Call localVarCall = clientAddressesListCall(clientUuid, limit, offset, _callback);
        return localVarCall;

    }

    /**
     * 
     * List address for a client
     * @param clientUuid  (required)
     * @param limit Number of results to return per page. (optional)
     * @param offset The initial index from which to return the results. (optional)
     * @return PaginatedAddressListList
     * @throws ApiException If fail to call the API, e.g. server error or cannot deserialize the response body
     * @http.response.details
     <table summary="Response Details" border="1">
        <tr><td> Status Code </td><td> Description </td><td> Response Headers </td></tr>
        <tr><td> 200 </td><td>  </td><td>  -  </td></tr>
     </table>
     */
    public PaginatedAddressListList clientAddressesList(UUID clientUuid, Integer limit, Integer offset) throws ApiException {
        ApiResponse<PaginatedAddressListList> localVarResp = clientAddressesListWithHttpInfo(clientUuid, limit, offset);
        return localVarResp.getData();
    }

    /**
     * 
     * List address for a client
     * @param clientUuid  (required)
     * @param limit Number of results to return per page. (optional)
     * @param offset The initial index from which to return the results. (optional)
     * @return ApiResponse&lt;PaginatedAddressListList&gt;
     * @throws ApiException If fail to call the API, e.g. server error or cannot deserialize the response body
     * @http.response.details
     <table summary="Response Details" border="1">
        <tr><td> Status Code </td><td> Description </td><td> Response Headers </td></tr>
        <tr><td> 200 </td><td>  </td><td>  -  </td></tr>
     </table>
     */
    public ApiResponse<PaginatedAddressListList> clientAddressesListWithHttpInfo(UUID clientUuid, Integer limit, Integer offset) throws ApiException {
        okhttp3.Call localVarCall = clientAddressesListValidateBeforeCall(clientUuid, limit, offset, null);
        Type localVarReturnType = new TypeToken<PaginatedAddressListList>(){}.getType();
        return localVarApiClient.execute(localVarCall, localVarReturnType);
    }

    /**
     *  (asynchronously)
     * List address for a client
     * @param clientUuid  (required)
     * @param limit Number of results to return per page. (optional)
     * @param offset The initial index from which to return the results. (optional)
     * @param _callback The callback to be executed when the API call finishes
     * @return The request call
     * @throws ApiException If fail to process the API call, e.g. serializing the request body object
     * @http.response.details
     <table summary="Response Details" border="1">
        <tr><td> Status Code </td><td> Description </td><td> Response Headers </td></tr>
        <tr><td> 200 </td><td>  </td><td>  -  </td></tr>
     </table>
     */
    public okhttp3.Call clientAddressesListAsync(UUID clientUuid, Integer limit, Integer offset, final ApiCallback<PaginatedAddressListList> _callback) throws ApiException {

        okhttp3.Call localVarCall = clientAddressesListValidateBeforeCall(clientUuid, limit, offset, _callback);
        Type localVarReturnType = new TypeToken<PaginatedAddressListList>(){}.getType();
        localVarApiClient.executeAsync(localVarCall, localVarReturnType, _callback);
        return localVarCall;
    }
}
