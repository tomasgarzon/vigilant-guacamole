/*
Nucoro API

No description

API version: 4.175.0
*/

// Code generated by OpenAPI Generator (https://openapi-generator.tech); DO NOT EDIT.

package openapi

import (
	"bytes"
	_context "context"
	_ioutil "io/ioutil"
	_nethttp "net/http"
	_neturl "net/url"
	"strings"
)

// Linger please
var (
	_ _context.Context
)

// NationlityApiService NationlityApi service
type NationlityApiService service

type ApiClientNationalityCreateRequest struct {
	ctx _context.Context
	ApiService *NationlityApiService
	clientUuid string
	nationalityCreate *NationalityCreate
}

func (r ApiClientNationalityCreateRequest) NationalityCreate(nationalityCreate NationalityCreate) ApiClientNationalityCreateRequest {
	r.nationalityCreate = &nationalityCreate
	return r
}

func (r ApiClientNationalityCreateRequest) Execute() (NationalityCreate, *_nethttp.Response, error) {
	return r.ApiService.ClientNationalityCreateExecute(r)
}

/*
ClientNationalityCreate Method for ClientNationalityCreate

Create nationality for a client

 @param ctx _context.Context - for authentication, logging, cancellation, deadlines, tracing, etc. Passed from http.Request or context.Background().
 @param clientUuid
 @return ApiClientNationalityCreateRequest
*/
func (a *NationlityApiService) ClientNationalityCreate(ctx _context.Context, clientUuid string) ApiClientNationalityCreateRequest {
	return ApiClientNationalityCreateRequest{
		ApiService: a,
		ctx: ctx,
		clientUuid: clientUuid,
	}
}

// Execute executes the request
//  @return NationalityCreate
func (a *NationlityApiService) ClientNationalityCreateExecute(r ApiClientNationalityCreateRequest) (NationalityCreate, *_nethttp.Response, error) {
	var (
		localVarHTTPMethod   = _nethttp.MethodPost
		localVarPostBody     interface{}
		localVarFormFileName string
		localVarFileName     string
		localVarFileBytes    []byte
		localVarReturnValue  NationalityCreate
	)

	localBasePath, err := a.client.cfg.ServerURLWithContext(r.ctx, "NationlityApiService.ClientNationalityCreate")
	if err != nil {
		return localVarReturnValue, nil, GenericOpenAPIError{error: err.Error()}
	}

	localVarPath := localBasePath + "/api/v2/clients/{client_uuid}/nationalities/"
	localVarPath = strings.Replace(localVarPath, "{"+"client_uuid"+"}", _neturl.PathEscape(parameterToString(r.clientUuid, "")), -1)

	localVarHeaderParams := make(map[string]string)
	localVarQueryParams := _neturl.Values{}
	localVarFormParams := _neturl.Values{}
	if r.nationalityCreate == nil {
		return localVarReturnValue, nil, reportError("nationalityCreate is required and must be specified")
	}

	// to determine the Content-Type header
	localVarHTTPContentTypes := []string{"application/json", "application/x-www-form-urlencoded", "multipart/form-data"}

	// set Content-Type header
	localVarHTTPContentType := selectHeaderContentType(localVarHTTPContentTypes)
	if localVarHTTPContentType != "" {
		localVarHeaderParams["Content-Type"] = localVarHTTPContentType
	}

	// to determine the Accept header
	localVarHTTPHeaderAccepts := []string{"application/json"}

	// set Accept header
	localVarHTTPHeaderAccept := selectHeaderAccept(localVarHTTPHeaderAccepts)
	if localVarHTTPHeaderAccept != "" {
		localVarHeaderParams["Accept"] = localVarHTTPHeaderAccept
	}
	// body params
	localVarPostBody = r.nationalityCreate
	if r.ctx != nil {
		// API Key Authentication
		if auth, ok := r.ctx.Value(ContextAPIKeys).(map[string]APIKey); ok {
			if apiKey, ok := auth["tokenAuth"]; ok {
				var key string
				if apiKey.Prefix != "" {
					key = apiKey.Prefix + " " + apiKey.Key
				} else {
					key = apiKey.Key
				}
				localVarHeaderParams["Authorization"] = key
			}
		}
	}
	req, err := a.client.prepareRequest(r.ctx, localVarPath, localVarHTTPMethod, localVarPostBody, localVarHeaderParams, localVarQueryParams, localVarFormParams, localVarFormFileName, localVarFileName, localVarFileBytes)
	if err != nil {
		return localVarReturnValue, nil, err
	}

	localVarHTTPResponse, err := a.client.callAPI(req)
	if err != nil || localVarHTTPResponse == nil {
		return localVarReturnValue, localVarHTTPResponse, err
	}

	localVarBody, err := _ioutil.ReadAll(localVarHTTPResponse.Body)
	localVarHTTPResponse.Body.Close()
	localVarHTTPResponse.Body = _ioutil.NopCloser(bytes.NewBuffer(localVarBody))
	if err != nil {
		return localVarReturnValue, localVarHTTPResponse, err
	}

	if localVarHTTPResponse.StatusCode >= 300 {
		newErr := GenericOpenAPIError{
			body:  localVarBody,
			error: localVarHTTPResponse.Status,
		}
		return localVarReturnValue, localVarHTTPResponse, newErr
	}

	err = a.client.decode(&localVarReturnValue, localVarBody, localVarHTTPResponse.Header.Get("Content-Type"))
	if err != nil {
		newErr := GenericOpenAPIError{
			body:  localVarBody,
			error: err.Error(),
		}
		return localVarReturnValue, localVarHTTPResponse, newErr
	}

	return localVarReturnValue, localVarHTTPResponse, nil
}

type ApiClientNationlitiesListRequest struct {
	ctx _context.Context
	ApiService *NationlityApiService
	clientUuid string
	limit *int32
	offset *int32
}

// Number of results to return per page.
func (r ApiClientNationlitiesListRequest) Limit(limit int32) ApiClientNationlitiesListRequest {
	r.limit = &limit
	return r
}
// The initial index from which to return the results.
func (r ApiClientNationlitiesListRequest) Offset(offset int32) ApiClientNationlitiesListRequest {
	r.offset = &offset
	return r
}

func (r ApiClientNationlitiesListRequest) Execute() (PaginatedNationalityListList, *_nethttp.Response, error) {
	return r.ApiService.ClientNationlitiesListExecute(r)
}

/*
ClientNationlitiesList Method for ClientNationlitiesList

List nationlities for a client

 @param ctx _context.Context - for authentication, logging, cancellation, deadlines, tracing, etc. Passed from http.Request or context.Background().
 @param clientUuid
 @return ApiClientNationlitiesListRequest
*/
func (a *NationlityApiService) ClientNationlitiesList(ctx _context.Context, clientUuid string) ApiClientNationlitiesListRequest {
	return ApiClientNationlitiesListRequest{
		ApiService: a,
		ctx: ctx,
		clientUuid: clientUuid,
	}
}

// Execute executes the request
//  @return PaginatedNationalityListList
func (a *NationlityApiService) ClientNationlitiesListExecute(r ApiClientNationlitiesListRequest) (PaginatedNationalityListList, *_nethttp.Response, error) {
	var (
		localVarHTTPMethod   = _nethttp.MethodGet
		localVarPostBody     interface{}
		localVarFormFileName string
		localVarFileName     string
		localVarFileBytes    []byte
		localVarReturnValue  PaginatedNationalityListList
	)

	localBasePath, err := a.client.cfg.ServerURLWithContext(r.ctx, "NationlityApiService.ClientNationlitiesList")
	if err != nil {
		return localVarReturnValue, nil, GenericOpenAPIError{error: err.Error()}
	}

	localVarPath := localBasePath + "/api/v2/clients/{client_uuid}/nationalities/"
	localVarPath = strings.Replace(localVarPath, "{"+"client_uuid"+"}", _neturl.PathEscape(parameterToString(r.clientUuid, "")), -1)

	localVarHeaderParams := make(map[string]string)
	localVarQueryParams := _neturl.Values{}
	localVarFormParams := _neturl.Values{}

	if r.limit != nil {
		localVarQueryParams.Add("limit", parameterToString(*r.limit, ""))
	}
	if r.offset != nil {
		localVarQueryParams.Add("offset", parameterToString(*r.offset, ""))
	}
	// to determine the Content-Type header
	localVarHTTPContentTypes := []string{}

	// set Content-Type header
	localVarHTTPContentType := selectHeaderContentType(localVarHTTPContentTypes)
	if localVarHTTPContentType != "" {
		localVarHeaderParams["Content-Type"] = localVarHTTPContentType
	}

	// to determine the Accept header
	localVarHTTPHeaderAccepts := []string{"application/json"}

	// set Accept header
	localVarHTTPHeaderAccept := selectHeaderAccept(localVarHTTPHeaderAccepts)
	if localVarHTTPHeaderAccept != "" {
		localVarHeaderParams["Accept"] = localVarHTTPHeaderAccept
	}
	if r.ctx != nil {
		// API Key Authentication
		if auth, ok := r.ctx.Value(ContextAPIKeys).(map[string]APIKey); ok {
			if apiKey, ok := auth["tokenAuth"]; ok {
				var key string
				if apiKey.Prefix != "" {
					key = apiKey.Prefix + " " + apiKey.Key
				} else {
					key = apiKey.Key
				}
				localVarHeaderParams["Authorization"] = key
			}
		}
	}
	req, err := a.client.prepareRequest(r.ctx, localVarPath, localVarHTTPMethod, localVarPostBody, localVarHeaderParams, localVarQueryParams, localVarFormParams, localVarFormFileName, localVarFileName, localVarFileBytes)
	if err != nil {
		return localVarReturnValue, nil, err
	}

	localVarHTTPResponse, err := a.client.callAPI(req)
	if err != nil || localVarHTTPResponse == nil {
		return localVarReturnValue, localVarHTTPResponse, err
	}

	localVarBody, err := _ioutil.ReadAll(localVarHTTPResponse.Body)
	localVarHTTPResponse.Body.Close()
	localVarHTTPResponse.Body = _ioutil.NopCloser(bytes.NewBuffer(localVarBody))
	if err != nil {
		return localVarReturnValue, localVarHTTPResponse, err
	}

	if localVarHTTPResponse.StatusCode >= 300 {
		newErr := GenericOpenAPIError{
			body:  localVarBody,
			error: localVarHTTPResponse.Status,
		}
		return localVarReturnValue, localVarHTTPResponse, newErr
	}

	err = a.client.decode(&localVarReturnValue, localVarBody, localVarHTTPResponse.Header.Get("Content-Type"))
	if err != nil {
		newErr := GenericOpenAPIError{
			body:  localVarBody,
			error: err.Error(),
		}
		return localVarReturnValue, localVarHTTPResponse, newErr
	}

	return localVarReturnValue, localVarHTTPResponse, nil
}

type ApiClientNationlityDeleteRequest struct {
	ctx _context.Context
	ApiService *NationlityApiService
	clientUuid string
	uuid string
}


func (r ApiClientNationlityDeleteRequest) Execute() (*_nethttp.Response, error) {
	return r.ApiService.ClientNationlityDeleteExecute(r)
}

/*
ClientNationlityDelete Method for ClientNationlityDelete

Delete a client nationality

 @param ctx _context.Context - for authentication, logging, cancellation, deadlines, tracing, etc. Passed from http.Request or context.Background().
 @param clientUuid
 @param uuid
 @return ApiClientNationlityDeleteRequest
*/
func (a *NationlityApiService) ClientNationlityDelete(ctx _context.Context, clientUuid string, uuid string) ApiClientNationlityDeleteRequest {
	return ApiClientNationlityDeleteRequest{
		ApiService: a,
		ctx: ctx,
		clientUuid: clientUuid,
		uuid: uuid,
	}
}

// Execute executes the request
func (a *NationlityApiService) ClientNationlityDeleteExecute(r ApiClientNationlityDeleteRequest) (*_nethttp.Response, error) {
	var (
		localVarHTTPMethod   = _nethttp.MethodDelete
		localVarPostBody     interface{}
		localVarFormFileName string
		localVarFileName     string
		localVarFileBytes    []byte
	)

	localBasePath, err := a.client.cfg.ServerURLWithContext(r.ctx, "NationlityApiService.ClientNationlityDelete")
	if err != nil {
		return nil, GenericOpenAPIError{error: err.Error()}
	}

	localVarPath := localBasePath + "/api/v2/clients/{client_uuid}/nationalities/{uuid}/"
	localVarPath = strings.Replace(localVarPath, "{"+"client_uuid"+"}", _neturl.PathEscape(parameterToString(r.clientUuid, "")), -1)
	localVarPath = strings.Replace(localVarPath, "{"+"uuid"+"}", _neturl.PathEscape(parameterToString(r.uuid, "")), -1)

	localVarHeaderParams := make(map[string]string)
	localVarQueryParams := _neturl.Values{}
	localVarFormParams := _neturl.Values{}

	// to determine the Content-Type header
	localVarHTTPContentTypes := []string{}

	// set Content-Type header
	localVarHTTPContentType := selectHeaderContentType(localVarHTTPContentTypes)
	if localVarHTTPContentType != "" {
		localVarHeaderParams["Content-Type"] = localVarHTTPContentType
	}

	// to determine the Accept header
	localVarHTTPHeaderAccepts := []string{}

	// set Accept header
	localVarHTTPHeaderAccept := selectHeaderAccept(localVarHTTPHeaderAccepts)
	if localVarHTTPHeaderAccept != "" {
		localVarHeaderParams["Accept"] = localVarHTTPHeaderAccept
	}
	if r.ctx != nil {
		// API Key Authentication
		if auth, ok := r.ctx.Value(ContextAPIKeys).(map[string]APIKey); ok {
			if apiKey, ok := auth["tokenAuth"]; ok {
				var key string
				if apiKey.Prefix != "" {
					key = apiKey.Prefix + " " + apiKey.Key
				} else {
					key = apiKey.Key
				}
				localVarHeaderParams["Authorization"] = key
			}
		}
	}
	req, err := a.client.prepareRequest(r.ctx, localVarPath, localVarHTTPMethod, localVarPostBody, localVarHeaderParams, localVarQueryParams, localVarFormParams, localVarFormFileName, localVarFileName, localVarFileBytes)
	if err != nil {
		return nil, err
	}

	localVarHTTPResponse, err := a.client.callAPI(req)
	if err != nil || localVarHTTPResponse == nil {
		return localVarHTTPResponse, err
	}

	localVarBody, err := _ioutil.ReadAll(localVarHTTPResponse.Body)
	localVarHTTPResponse.Body.Close()
	localVarHTTPResponse.Body = _ioutil.NopCloser(bytes.NewBuffer(localVarBody))
	if err != nil {
		return localVarHTTPResponse, err
	}

	if localVarHTTPResponse.StatusCode >= 300 {
		newErr := GenericOpenAPIError{
			body:  localVarBody,
			error: localVarHTTPResponse.Status,
		}
		return localVarHTTPResponse, newErr
	}

	return localVarHTTPResponse, nil
}

type ApiClientNationlityPartialUpdateRequest struct {
	ctx _context.Context
	ApiService *NationlityApiService
	clientUuid string
	uuid string
	patchedNationalityUpdate *PatchedNationalityUpdate
}

func (r ApiClientNationlityPartialUpdateRequest) PatchedNationalityUpdate(patchedNationalityUpdate PatchedNationalityUpdate) ApiClientNationlityPartialUpdateRequest {
	r.patchedNationalityUpdate = &patchedNationalityUpdate
	return r
}

func (r ApiClientNationlityPartialUpdateRequest) Execute() (NationalityUpdate, *_nethttp.Response, error) {
	return r.ApiService.ClientNationlityPartialUpdateExecute(r)
}

/*
ClientNationlityPartialUpdate Method for ClientNationlityPartialUpdate

Partial Update a client nationality

 @param ctx _context.Context - for authentication, logging, cancellation, deadlines, tracing, etc. Passed from http.Request or context.Background().
 @param clientUuid
 @param uuid
 @return ApiClientNationlityPartialUpdateRequest
*/
func (a *NationlityApiService) ClientNationlityPartialUpdate(ctx _context.Context, clientUuid string, uuid string) ApiClientNationlityPartialUpdateRequest {
	return ApiClientNationlityPartialUpdateRequest{
		ApiService: a,
		ctx: ctx,
		clientUuid: clientUuid,
		uuid: uuid,
	}
}

// Execute executes the request
//  @return NationalityUpdate
func (a *NationlityApiService) ClientNationlityPartialUpdateExecute(r ApiClientNationlityPartialUpdateRequest) (NationalityUpdate, *_nethttp.Response, error) {
	var (
		localVarHTTPMethod   = _nethttp.MethodPatch
		localVarPostBody     interface{}
		localVarFormFileName string
		localVarFileName     string
		localVarFileBytes    []byte
		localVarReturnValue  NationalityUpdate
	)

	localBasePath, err := a.client.cfg.ServerURLWithContext(r.ctx, "NationlityApiService.ClientNationlityPartialUpdate")
	if err != nil {
		return localVarReturnValue, nil, GenericOpenAPIError{error: err.Error()}
	}

	localVarPath := localBasePath + "/api/v2/clients/{client_uuid}/nationalities/{uuid}/"
	localVarPath = strings.Replace(localVarPath, "{"+"client_uuid"+"}", _neturl.PathEscape(parameterToString(r.clientUuid, "")), -1)
	localVarPath = strings.Replace(localVarPath, "{"+"uuid"+"}", _neturl.PathEscape(parameterToString(r.uuid, "")), -1)

	localVarHeaderParams := make(map[string]string)
	localVarQueryParams := _neturl.Values{}
	localVarFormParams := _neturl.Values{}

	// to determine the Content-Type header
	localVarHTTPContentTypes := []string{"application/json", "application/x-www-form-urlencoded", "multipart/form-data"}

	// set Content-Type header
	localVarHTTPContentType := selectHeaderContentType(localVarHTTPContentTypes)
	if localVarHTTPContentType != "" {
		localVarHeaderParams["Content-Type"] = localVarHTTPContentType
	}

	// to determine the Accept header
	localVarHTTPHeaderAccepts := []string{"application/json"}

	// set Accept header
	localVarHTTPHeaderAccept := selectHeaderAccept(localVarHTTPHeaderAccepts)
	if localVarHTTPHeaderAccept != "" {
		localVarHeaderParams["Accept"] = localVarHTTPHeaderAccept
	}
	// body params
	localVarPostBody = r.patchedNationalityUpdate
	if r.ctx != nil {
		// API Key Authentication
		if auth, ok := r.ctx.Value(ContextAPIKeys).(map[string]APIKey); ok {
			if apiKey, ok := auth["tokenAuth"]; ok {
				var key string
				if apiKey.Prefix != "" {
					key = apiKey.Prefix + " " + apiKey.Key
				} else {
					key = apiKey.Key
				}
				localVarHeaderParams["Authorization"] = key
			}
		}
	}
	req, err := a.client.prepareRequest(r.ctx, localVarPath, localVarHTTPMethod, localVarPostBody, localVarHeaderParams, localVarQueryParams, localVarFormParams, localVarFormFileName, localVarFileName, localVarFileBytes)
	if err != nil {
		return localVarReturnValue, nil, err
	}

	localVarHTTPResponse, err := a.client.callAPI(req)
	if err != nil || localVarHTTPResponse == nil {
		return localVarReturnValue, localVarHTTPResponse, err
	}

	localVarBody, err := _ioutil.ReadAll(localVarHTTPResponse.Body)
	localVarHTTPResponse.Body.Close()
	localVarHTTPResponse.Body = _ioutil.NopCloser(bytes.NewBuffer(localVarBody))
	if err != nil {
		return localVarReturnValue, localVarHTTPResponse, err
	}

	if localVarHTTPResponse.StatusCode >= 300 {
		newErr := GenericOpenAPIError{
			body:  localVarBody,
			error: localVarHTTPResponse.Status,
		}
		return localVarReturnValue, localVarHTTPResponse, newErr
	}

	err = a.client.decode(&localVarReturnValue, localVarBody, localVarHTTPResponse.Header.Get("Content-Type"))
	if err != nil {
		newErr := GenericOpenAPIError{
			body:  localVarBody,
			error: err.Error(),
		}
		return localVarReturnValue, localVarHTTPResponse, newErr
	}

	return localVarReturnValue, localVarHTTPResponse, nil
}

type ApiClientNationlityRetrieveRequest struct {
	ctx _context.Context
	ApiService *NationlityApiService
	clientUuid string
	uuid string
}


func (r ApiClientNationlityRetrieveRequest) Execute() (NationalityList, *_nethttp.Response, error) {
	return r.ApiService.ClientNationlityRetrieveExecute(r)
}

/*
ClientNationlityRetrieve Method for ClientNationlityRetrieve

Retrieve a client nationality

 @param ctx _context.Context - for authentication, logging, cancellation, deadlines, tracing, etc. Passed from http.Request or context.Background().
 @param clientUuid
 @param uuid
 @return ApiClientNationlityRetrieveRequest
*/
func (a *NationlityApiService) ClientNationlityRetrieve(ctx _context.Context, clientUuid string, uuid string) ApiClientNationlityRetrieveRequest {
	return ApiClientNationlityRetrieveRequest{
		ApiService: a,
		ctx: ctx,
		clientUuid: clientUuid,
		uuid: uuid,
	}
}

// Execute executes the request
//  @return NationalityList
func (a *NationlityApiService) ClientNationlityRetrieveExecute(r ApiClientNationlityRetrieveRequest) (NationalityList, *_nethttp.Response, error) {
	var (
		localVarHTTPMethod   = _nethttp.MethodGet
		localVarPostBody     interface{}
		localVarFormFileName string
		localVarFileName     string
		localVarFileBytes    []byte
		localVarReturnValue  NationalityList
	)

	localBasePath, err := a.client.cfg.ServerURLWithContext(r.ctx, "NationlityApiService.ClientNationlityRetrieve")
	if err != nil {
		return localVarReturnValue, nil, GenericOpenAPIError{error: err.Error()}
	}

	localVarPath := localBasePath + "/api/v2/clients/{client_uuid}/nationalities/{uuid}/"
	localVarPath = strings.Replace(localVarPath, "{"+"client_uuid"+"}", _neturl.PathEscape(parameterToString(r.clientUuid, "")), -1)
	localVarPath = strings.Replace(localVarPath, "{"+"uuid"+"}", _neturl.PathEscape(parameterToString(r.uuid, "")), -1)

	localVarHeaderParams := make(map[string]string)
	localVarQueryParams := _neturl.Values{}
	localVarFormParams := _neturl.Values{}

	// to determine the Content-Type header
	localVarHTTPContentTypes := []string{}

	// set Content-Type header
	localVarHTTPContentType := selectHeaderContentType(localVarHTTPContentTypes)
	if localVarHTTPContentType != "" {
		localVarHeaderParams["Content-Type"] = localVarHTTPContentType
	}

	// to determine the Accept header
	localVarHTTPHeaderAccepts := []string{"application/json"}

	// set Accept header
	localVarHTTPHeaderAccept := selectHeaderAccept(localVarHTTPHeaderAccepts)
	if localVarHTTPHeaderAccept != "" {
		localVarHeaderParams["Accept"] = localVarHTTPHeaderAccept
	}
	if r.ctx != nil {
		// API Key Authentication
		if auth, ok := r.ctx.Value(ContextAPIKeys).(map[string]APIKey); ok {
			if apiKey, ok := auth["tokenAuth"]; ok {
				var key string
				if apiKey.Prefix != "" {
					key = apiKey.Prefix + " " + apiKey.Key
				} else {
					key = apiKey.Key
				}
				localVarHeaderParams["Authorization"] = key
			}
		}
	}
	req, err := a.client.prepareRequest(r.ctx, localVarPath, localVarHTTPMethod, localVarPostBody, localVarHeaderParams, localVarQueryParams, localVarFormParams, localVarFormFileName, localVarFileName, localVarFileBytes)
	if err != nil {
		return localVarReturnValue, nil, err
	}

	localVarHTTPResponse, err := a.client.callAPI(req)
	if err != nil || localVarHTTPResponse == nil {
		return localVarReturnValue, localVarHTTPResponse, err
	}

	localVarBody, err := _ioutil.ReadAll(localVarHTTPResponse.Body)
	localVarHTTPResponse.Body.Close()
	localVarHTTPResponse.Body = _ioutil.NopCloser(bytes.NewBuffer(localVarBody))
	if err != nil {
		return localVarReturnValue, localVarHTTPResponse, err
	}

	if localVarHTTPResponse.StatusCode >= 300 {
		newErr := GenericOpenAPIError{
			body:  localVarBody,
			error: localVarHTTPResponse.Status,
		}
		return localVarReturnValue, localVarHTTPResponse, newErr
	}

	err = a.client.decode(&localVarReturnValue, localVarBody, localVarHTTPResponse.Header.Get("Content-Type"))
	if err != nil {
		newErr := GenericOpenAPIError{
			body:  localVarBody,
			error: err.Error(),
		}
		return localVarReturnValue, localVarHTTPResponse, newErr
	}

	return localVarReturnValue, localVarHTTPResponse, nil
}

type ApiClientNationlityUpdateRequest struct {
	ctx _context.Context
	ApiService *NationlityApiService
	clientUuid string
	uuid string
	nationalityUpdate *NationalityUpdate
}

func (r ApiClientNationlityUpdateRequest) NationalityUpdate(nationalityUpdate NationalityUpdate) ApiClientNationlityUpdateRequest {
	r.nationalityUpdate = &nationalityUpdate
	return r
}

func (r ApiClientNationlityUpdateRequest) Execute() (NationalityUpdate, *_nethttp.Response, error) {
	return r.ApiService.ClientNationlityUpdateExecute(r)
}

/*
ClientNationlityUpdate Method for ClientNationlityUpdate

Update a client nationality

 @param ctx _context.Context - for authentication, logging, cancellation, deadlines, tracing, etc. Passed from http.Request or context.Background().
 @param clientUuid
 @param uuid
 @return ApiClientNationlityUpdateRequest
*/
func (a *NationlityApiService) ClientNationlityUpdate(ctx _context.Context, clientUuid string, uuid string) ApiClientNationlityUpdateRequest {
	return ApiClientNationlityUpdateRequest{
		ApiService: a,
		ctx: ctx,
		clientUuid: clientUuid,
		uuid: uuid,
	}
}

// Execute executes the request
//  @return NationalityUpdate
func (a *NationlityApiService) ClientNationlityUpdateExecute(r ApiClientNationlityUpdateRequest) (NationalityUpdate, *_nethttp.Response, error) {
	var (
		localVarHTTPMethod   = _nethttp.MethodPut
		localVarPostBody     interface{}
		localVarFormFileName string
		localVarFileName     string
		localVarFileBytes    []byte
		localVarReturnValue  NationalityUpdate
	)

	localBasePath, err := a.client.cfg.ServerURLWithContext(r.ctx, "NationlityApiService.ClientNationlityUpdate")
	if err != nil {
		return localVarReturnValue, nil, GenericOpenAPIError{error: err.Error()}
	}

	localVarPath := localBasePath + "/api/v2/clients/{client_uuid}/nationalities/{uuid}/"
	localVarPath = strings.Replace(localVarPath, "{"+"client_uuid"+"}", _neturl.PathEscape(parameterToString(r.clientUuid, "")), -1)
	localVarPath = strings.Replace(localVarPath, "{"+"uuid"+"}", _neturl.PathEscape(parameterToString(r.uuid, "")), -1)

	localVarHeaderParams := make(map[string]string)
	localVarQueryParams := _neturl.Values{}
	localVarFormParams := _neturl.Values{}
	if r.nationalityUpdate == nil {
		return localVarReturnValue, nil, reportError("nationalityUpdate is required and must be specified")
	}

	// to determine the Content-Type header
	localVarHTTPContentTypes := []string{"application/json", "application/x-www-form-urlencoded", "multipart/form-data"}

	// set Content-Type header
	localVarHTTPContentType := selectHeaderContentType(localVarHTTPContentTypes)
	if localVarHTTPContentType != "" {
		localVarHeaderParams["Content-Type"] = localVarHTTPContentType
	}

	// to determine the Accept header
	localVarHTTPHeaderAccepts := []string{"application/json"}

	// set Accept header
	localVarHTTPHeaderAccept := selectHeaderAccept(localVarHTTPHeaderAccepts)
	if localVarHTTPHeaderAccept != "" {
		localVarHeaderParams["Accept"] = localVarHTTPHeaderAccept
	}
	// body params
	localVarPostBody = r.nationalityUpdate
	if r.ctx != nil {
		// API Key Authentication
		if auth, ok := r.ctx.Value(ContextAPIKeys).(map[string]APIKey); ok {
			if apiKey, ok := auth["tokenAuth"]; ok {
				var key string
				if apiKey.Prefix != "" {
					key = apiKey.Prefix + " " + apiKey.Key
				} else {
					key = apiKey.Key
				}
				localVarHeaderParams["Authorization"] = key
			}
		}
	}
	req, err := a.client.prepareRequest(r.ctx, localVarPath, localVarHTTPMethod, localVarPostBody, localVarHeaderParams, localVarQueryParams, localVarFormParams, localVarFormFileName, localVarFileName, localVarFileBytes)
	if err != nil {
		return localVarReturnValue, nil, err
	}

	localVarHTTPResponse, err := a.client.callAPI(req)
	if err != nil || localVarHTTPResponse == nil {
		return localVarReturnValue, localVarHTTPResponse, err
	}

	localVarBody, err := _ioutil.ReadAll(localVarHTTPResponse.Body)
	localVarHTTPResponse.Body.Close()
	localVarHTTPResponse.Body = _ioutil.NopCloser(bytes.NewBuffer(localVarBody))
	if err != nil {
		return localVarReturnValue, localVarHTTPResponse, err
	}

	if localVarHTTPResponse.StatusCode >= 300 {
		newErr := GenericOpenAPIError{
			body:  localVarBody,
			error: localVarHTTPResponse.Status,
		}
		return localVarReturnValue, localVarHTTPResponse, newErr
	}

	err = a.client.decode(&localVarReturnValue, localVarBody, localVarHTTPResponse.Header.Get("Content-Type"))
	if err != nil {
		newErr := GenericOpenAPIError{
			body:  localVarBody,
			error: err.Error(),
		}
		return localVarReturnValue, localVarHTTPResponse, newErr
	}

	return localVarReturnValue, localVarHTTPResponse, nil
}