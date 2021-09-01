# \NationlityApi

All URIs are relative to *http://localhost*

Method | HTTP request | Description
------------- | ------------- | -------------
[**ClientNationalityCreate**](NationlityApi.md#ClientNationalityCreate) | **Post** /api/v2/clients/{client_uuid}/nationalities/ | 
[**ClientNationlitiesList**](NationlityApi.md#ClientNationlitiesList) | **Get** /api/v2/clients/{client_uuid}/nationalities/ | 
[**ClientNationlityDelete**](NationlityApi.md#ClientNationlityDelete) | **Delete** /api/v2/clients/{client_uuid}/nationalities/{uuid}/ | 
[**ClientNationlityPartialUpdate**](NationlityApi.md#ClientNationlityPartialUpdate) | **Patch** /api/v2/clients/{client_uuid}/nationalities/{uuid}/ | 
[**ClientNationlityRetrieve**](NationlityApi.md#ClientNationlityRetrieve) | **Get** /api/v2/clients/{client_uuid}/nationalities/{uuid}/ | 
[**ClientNationlityUpdate**](NationlityApi.md#ClientNationlityUpdate) | **Put** /api/v2/clients/{client_uuid}/nationalities/{uuid}/ | 



## ClientNationalityCreate

> NationalityCreate ClientNationalityCreate(ctx, clientUuid).NationalityCreate(nationalityCreate).Execute()





### Example

```go
package main

import (
    "context"
    "fmt"
    "os"
    openapiclient "./openapi"
)

func main() {
    clientUuid := TODO // string | 
    nationalityCreate := *openapiclient.NewNationalityCreate("Country_example") // NationalityCreate | 

    configuration := openapiclient.NewConfiguration()
    api_client := openapiclient.NewAPIClient(configuration)
    resp, r, err := api_client.NationlityApi.ClientNationalityCreate(context.Background(), clientUuid).NationalityCreate(nationalityCreate).Execute()
    if err != nil {
        fmt.Fprintf(os.Stderr, "Error when calling `NationlityApi.ClientNationalityCreate``: %v\n", err)
        fmt.Fprintf(os.Stderr, "Full HTTP response: %v\n", r)
    }
    // response from `ClientNationalityCreate`: NationalityCreate
    fmt.Fprintf(os.Stdout, "Response from `NationlityApi.ClientNationalityCreate`: %v\n", resp)
}
```

### Path Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
**ctx** | **context.Context** | context for authentication, logging, cancellation, deadlines, tracing, etc.
**clientUuid** | [**string**](.md) |  | 

### Other Parameters

Other parameters are passed through a pointer to a apiClientNationalityCreateRequest struct via the builder pattern


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------

 **nationalityCreate** | [**NationalityCreate**](NationalityCreate.md) |  | 

### Return type

[**NationalityCreate**](NationalityCreate.md)

### Authorization

[cookieAuth](../README.md#cookieAuth), [jwtAuth](../README.md#jwtAuth), [tokenAuth](../README.md#tokenAuth)

### HTTP request headers

- **Content-Type**: application/json, application/x-www-form-urlencoded, multipart/form-data
- **Accept**: application/json

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints)
[[Back to Model list]](../README.md#documentation-for-models)
[[Back to README]](../README.md)


## ClientNationlitiesList

> PaginatedNationalityListList ClientNationlitiesList(ctx, clientUuid).Limit(limit).Offset(offset).Execute()





### Example

```go
package main

import (
    "context"
    "fmt"
    "os"
    openapiclient "./openapi"
)

func main() {
    clientUuid := TODO // string | 
    limit := int32(56) // int32 | Number of results to return per page. (optional)
    offset := int32(56) // int32 | The initial index from which to return the results. (optional)

    configuration := openapiclient.NewConfiguration()
    api_client := openapiclient.NewAPIClient(configuration)
    resp, r, err := api_client.NationlityApi.ClientNationlitiesList(context.Background(), clientUuid).Limit(limit).Offset(offset).Execute()
    if err != nil {
        fmt.Fprintf(os.Stderr, "Error when calling `NationlityApi.ClientNationlitiesList``: %v\n", err)
        fmt.Fprintf(os.Stderr, "Full HTTP response: %v\n", r)
    }
    // response from `ClientNationlitiesList`: PaginatedNationalityListList
    fmt.Fprintf(os.Stdout, "Response from `NationlityApi.ClientNationlitiesList`: %v\n", resp)
}
```

### Path Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
**ctx** | **context.Context** | context for authentication, logging, cancellation, deadlines, tracing, etc.
**clientUuid** | [**string**](.md) |  | 

### Other Parameters

Other parameters are passed through a pointer to a apiClientNationlitiesListRequest struct via the builder pattern


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------

 **limit** | **int32** | Number of results to return per page. | 
 **offset** | **int32** | The initial index from which to return the results. | 

### Return type

[**PaginatedNationalityListList**](PaginatedNationalityListList.md)

### Authorization

[cookieAuth](../README.md#cookieAuth), [jwtAuth](../README.md#jwtAuth), [tokenAuth](../README.md#tokenAuth)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints)
[[Back to Model list]](../README.md#documentation-for-models)
[[Back to README]](../README.md)


## ClientNationlityDelete

> ClientNationlityDelete(ctx, clientUuid, uuid).Execute()





### Example

```go
package main

import (
    "context"
    "fmt"
    "os"
    openapiclient "./openapi"
)

func main() {
    clientUuid := TODO // string | 
    uuid := TODO // string | 

    configuration := openapiclient.NewConfiguration()
    api_client := openapiclient.NewAPIClient(configuration)
    resp, r, err := api_client.NationlityApi.ClientNationlityDelete(context.Background(), clientUuid, uuid).Execute()
    if err != nil {
        fmt.Fprintf(os.Stderr, "Error when calling `NationlityApi.ClientNationlityDelete``: %v\n", err)
        fmt.Fprintf(os.Stderr, "Full HTTP response: %v\n", r)
    }
}
```

### Path Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
**ctx** | **context.Context** | context for authentication, logging, cancellation, deadlines, tracing, etc.
**clientUuid** | [**string**](.md) |  | 
**uuid** | [**string**](.md) |  | 

### Other Parameters

Other parameters are passed through a pointer to a apiClientNationlityDeleteRequest struct via the builder pattern


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------



### Return type

 (empty response body)

### Authorization

[cookieAuth](../README.md#cookieAuth), [jwtAuth](../README.md#jwtAuth), [tokenAuth](../README.md#tokenAuth)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: Not defined

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints)
[[Back to Model list]](../README.md#documentation-for-models)
[[Back to README]](../README.md)


## ClientNationlityPartialUpdate

> NationalityUpdate ClientNationlityPartialUpdate(ctx, clientUuid, uuid).PatchedNationalityUpdate(patchedNationalityUpdate).Execute()





### Example

```go
package main

import (
    "context"
    "fmt"
    "os"
    openapiclient "./openapi"
)

func main() {
    clientUuid := TODO // string | 
    uuid := TODO // string | 
    patchedNationalityUpdate := *openapiclient.NewPatchedNationalityUpdate() // PatchedNationalityUpdate |  (optional)

    configuration := openapiclient.NewConfiguration()
    api_client := openapiclient.NewAPIClient(configuration)
    resp, r, err := api_client.NationlityApi.ClientNationlityPartialUpdate(context.Background(), clientUuid, uuid).PatchedNationalityUpdate(patchedNationalityUpdate).Execute()
    if err != nil {
        fmt.Fprintf(os.Stderr, "Error when calling `NationlityApi.ClientNationlityPartialUpdate``: %v\n", err)
        fmt.Fprintf(os.Stderr, "Full HTTP response: %v\n", r)
    }
    // response from `ClientNationlityPartialUpdate`: NationalityUpdate
    fmt.Fprintf(os.Stdout, "Response from `NationlityApi.ClientNationlityPartialUpdate`: %v\n", resp)
}
```

### Path Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
**ctx** | **context.Context** | context for authentication, logging, cancellation, deadlines, tracing, etc.
**clientUuid** | [**string**](.md) |  | 
**uuid** | [**string**](.md) |  | 

### Other Parameters

Other parameters are passed through a pointer to a apiClientNationlityPartialUpdateRequest struct via the builder pattern


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------


 **patchedNationalityUpdate** | [**PatchedNationalityUpdate**](PatchedNationalityUpdate.md) |  | 

### Return type

[**NationalityUpdate**](NationalityUpdate.md)

### Authorization

[cookieAuth](../README.md#cookieAuth), [jwtAuth](../README.md#jwtAuth), [tokenAuth](../README.md#tokenAuth)

### HTTP request headers

- **Content-Type**: application/json, application/x-www-form-urlencoded, multipart/form-data
- **Accept**: application/json

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints)
[[Back to Model list]](../README.md#documentation-for-models)
[[Back to README]](../README.md)


## ClientNationlityRetrieve

> NationalityList ClientNationlityRetrieve(ctx, clientUuid, uuid).Execute()





### Example

```go
package main

import (
    "context"
    "fmt"
    "os"
    openapiclient "./openapi"
)

func main() {
    clientUuid := TODO // string | 
    uuid := TODO // string | 

    configuration := openapiclient.NewConfiguration()
    api_client := openapiclient.NewAPIClient(configuration)
    resp, r, err := api_client.NationlityApi.ClientNationlityRetrieve(context.Background(), clientUuid, uuid).Execute()
    if err != nil {
        fmt.Fprintf(os.Stderr, "Error when calling `NationlityApi.ClientNationlityRetrieve``: %v\n", err)
        fmt.Fprintf(os.Stderr, "Full HTTP response: %v\n", r)
    }
    // response from `ClientNationlityRetrieve`: NationalityList
    fmt.Fprintf(os.Stdout, "Response from `NationlityApi.ClientNationlityRetrieve`: %v\n", resp)
}
```

### Path Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
**ctx** | **context.Context** | context for authentication, logging, cancellation, deadlines, tracing, etc.
**clientUuid** | [**string**](.md) |  | 
**uuid** | [**string**](.md) |  | 

### Other Parameters

Other parameters are passed through a pointer to a apiClientNationlityRetrieveRequest struct via the builder pattern


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------



### Return type

[**NationalityList**](NationalityList.md)

### Authorization

[cookieAuth](../README.md#cookieAuth), [jwtAuth](../README.md#jwtAuth), [tokenAuth](../README.md#tokenAuth)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints)
[[Back to Model list]](../README.md#documentation-for-models)
[[Back to README]](../README.md)


## ClientNationlityUpdate

> NationalityUpdate ClientNationlityUpdate(ctx, clientUuid, uuid).NationalityUpdate(nationalityUpdate).Execute()





### Example

```go
package main

import (
    "context"
    "fmt"
    "os"
    openapiclient "./openapi"
)

func main() {
    clientUuid := TODO // string | 
    uuid := TODO // string | 
    nationalityUpdate := *openapiclient.NewNationalityUpdate("Country_example") // NationalityUpdate | 

    configuration := openapiclient.NewConfiguration()
    api_client := openapiclient.NewAPIClient(configuration)
    resp, r, err := api_client.NationlityApi.ClientNationlityUpdate(context.Background(), clientUuid, uuid).NationalityUpdate(nationalityUpdate).Execute()
    if err != nil {
        fmt.Fprintf(os.Stderr, "Error when calling `NationlityApi.ClientNationlityUpdate``: %v\n", err)
        fmt.Fprintf(os.Stderr, "Full HTTP response: %v\n", r)
    }
    // response from `ClientNationlityUpdate`: NationalityUpdate
    fmt.Fprintf(os.Stdout, "Response from `NationlityApi.ClientNationlityUpdate`: %v\n", resp)
}
```

### Path Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
**ctx** | **context.Context** | context for authentication, logging, cancellation, deadlines, tracing, etc.
**clientUuid** | [**string**](.md) |  | 
**uuid** | [**string**](.md) |  | 

### Other Parameters

Other parameters are passed through a pointer to a apiClientNationlityUpdateRequest struct via the builder pattern


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------


 **nationalityUpdate** | [**NationalityUpdate**](NationalityUpdate.md) |  | 

### Return type

[**NationalityUpdate**](NationalityUpdate.md)

### Authorization

[cookieAuth](../README.md#cookieAuth), [jwtAuth](../README.md#jwtAuth), [tokenAuth](../README.md#tokenAuth)

### HTTP request headers

- **Content-Type**: application/json, application/x-www-form-urlencoded, multipart/form-data
- **Accept**: application/json

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints)
[[Back to Model list]](../README.md#documentation-for-models)
[[Back to README]](../README.md)

