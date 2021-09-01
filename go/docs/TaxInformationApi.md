# \TaxInformationApi

All URIs are relative to *http://localhost*

Method | HTTP request | Description
------------- | ------------- | -------------
[**ClientTaxInformationCreate**](TaxInformationApi.md#ClientTaxInformationCreate) | **Post** /api/v2/clients/{client_uuid}/tax-informations/ | 
[**ClientTaxInformationDelete**](TaxInformationApi.md#ClientTaxInformationDelete) | **Delete** /api/v2/clients/{client_uuid}/tax-informations/{uuid}/ | 
[**ClientTaxInformationList**](TaxInformationApi.md#ClientTaxInformationList) | **Get** /api/v2/clients/{client_uuid}/tax-informations/ | 
[**ClientTaxInformationPartialUpdate**](TaxInformationApi.md#ClientTaxInformationPartialUpdate) | **Patch** /api/v2/clients/{client_uuid}/tax-informations/{uuid}/ | 
[**ClientTaxInformationRetrieve**](TaxInformationApi.md#ClientTaxInformationRetrieve) | **Get** /api/v2/clients/{client_uuid}/tax-informations/{uuid}/ | 
[**ClientTaxInformationUpdate**](TaxInformationApi.md#ClientTaxInformationUpdate) | **Put** /api/v2/clients/{client_uuid}/tax-informations/{uuid}/ | 



## ClientTaxInformationCreate

> TaxInformationCreateUpdate ClientTaxInformationCreate(ctx, clientUuid).TaxInformationCreateUpdate(taxInformationCreateUpdate).Execute()





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
    taxInformationCreateUpdate := *openapiclient.NewTaxInformationCreateUpdate("Uuid_example", "Country_example", "DocumentNumber_example") // TaxInformationCreateUpdate | 

    configuration := openapiclient.NewConfiguration()
    api_client := openapiclient.NewAPIClient(configuration)
    resp, r, err := api_client.TaxInformationApi.ClientTaxInformationCreate(context.Background(), clientUuid).TaxInformationCreateUpdate(taxInformationCreateUpdate).Execute()
    if err != nil {
        fmt.Fprintf(os.Stderr, "Error when calling `TaxInformationApi.ClientTaxInformationCreate``: %v\n", err)
        fmt.Fprintf(os.Stderr, "Full HTTP response: %v\n", r)
    }
    // response from `ClientTaxInformationCreate`: TaxInformationCreateUpdate
    fmt.Fprintf(os.Stdout, "Response from `TaxInformationApi.ClientTaxInformationCreate`: %v\n", resp)
}
```

### Path Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
**ctx** | **context.Context** | context for authentication, logging, cancellation, deadlines, tracing, etc.
**clientUuid** | [**string**](.md) |  | 

### Other Parameters

Other parameters are passed through a pointer to a apiClientTaxInformationCreateRequest struct via the builder pattern


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------

 **taxInformationCreateUpdate** | [**TaxInformationCreateUpdate**](TaxInformationCreateUpdate.md) |  | 

### Return type

[**TaxInformationCreateUpdate**](TaxInformationCreateUpdate.md)

### Authorization

[cookieAuth](../README.md#cookieAuth), [jwtAuth](../README.md#jwtAuth), [tokenAuth](../README.md#tokenAuth)

### HTTP request headers

- **Content-Type**: application/json, application/x-www-form-urlencoded, multipart/form-data
- **Accept**: application/json

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints)
[[Back to Model list]](../README.md#documentation-for-models)
[[Back to README]](../README.md)


## ClientTaxInformationDelete

> ClientTaxInformationDelete(ctx, clientUuid, uuid).Execute()





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
    resp, r, err := api_client.TaxInformationApi.ClientTaxInformationDelete(context.Background(), clientUuid, uuid).Execute()
    if err != nil {
        fmt.Fprintf(os.Stderr, "Error when calling `TaxInformationApi.ClientTaxInformationDelete``: %v\n", err)
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

Other parameters are passed through a pointer to a apiClientTaxInformationDeleteRequest struct via the builder pattern


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


## ClientTaxInformationList

> PaginatedTaxInformationListList ClientTaxInformationList(ctx, clientUuid).Limit(limit).Offset(offset).Execute()





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
    resp, r, err := api_client.TaxInformationApi.ClientTaxInformationList(context.Background(), clientUuid).Limit(limit).Offset(offset).Execute()
    if err != nil {
        fmt.Fprintf(os.Stderr, "Error when calling `TaxInformationApi.ClientTaxInformationList``: %v\n", err)
        fmt.Fprintf(os.Stderr, "Full HTTP response: %v\n", r)
    }
    // response from `ClientTaxInformationList`: PaginatedTaxInformationListList
    fmt.Fprintf(os.Stdout, "Response from `TaxInformationApi.ClientTaxInformationList`: %v\n", resp)
}
```

### Path Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
**ctx** | **context.Context** | context for authentication, logging, cancellation, deadlines, tracing, etc.
**clientUuid** | [**string**](.md) |  | 

### Other Parameters

Other parameters are passed through a pointer to a apiClientTaxInformationListRequest struct via the builder pattern


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------

 **limit** | **int32** | Number of results to return per page. | 
 **offset** | **int32** | The initial index from which to return the results. | 

### Return type

[**PaginatedTaxInformationListList**](PaginatedTaxInformationListList.md)

### Authorization

[cookieAuth](../README.md#cookieAuth), [jwtAuth](../README.md#jwtAuth), [tokenAuth](../README.md#tokenAuth)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints)
[[Back to Model list]](../README.md#documentation-for-models)
[[Back to README]](../README.md)


## ClientTaxInformationPartialUpdate

> TaxInformationCreateUpdate ClientTaxInformationPartialUpdate(ctx, clientUuid, uuid).PatchedTaxInformationCreateUpdate(patchedTaxInformationCreateUpdate).Execute()





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
    patchedTaxInformationCreateUpdate := *openapiclient.NewPatchedTaxInformationCreateUpdate() // PatchedTaxInformationCreateUpdate |  (optional)

    configuration := openapiclient.NewConfiguration()
    api_client := openapiclient.NewAPIClient(configuration)
    resp, r, err := api_client.TaxInformationApi.ClientTaxInformationPartialUpdate(context.Background(), clientUuid, uuid).PatchedTaxInformationCreateUpdate(patchedTaxInformationCreateUpdate).Execute()
    if err != nil {
        fmt.Fprintf(os.Stderr, "Error when calling `TaxInformationApi.ClientTaxInformationPartialUpdate``: %v\n", err)
        fmt.Fprintf(os.Stderr, "Full HTTP response: %v\n", r)
    }
    // response from `ClientTaxInformationPartialUpdate`: TaxInformationCreateUpdate
    fmt.Fprintf(os.Stdout, "Response from `TaxInformationApi.ClientTaxInformationPartialUpdate`: %v\n", resp)
}
```

### Path Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
**ctx** | **context.Context** | context for authentication, logging, cancellation, deadlines, tracing, etc.
**clientUuid** | [**string**](.md) |  | 
**uuid** | [**string**](.md) |  | 

### Other Parameters

Other parameters are passed through a pointer to a apiClientTaxInformationPartialUpdateRequest struct via the builder pattern


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------


 **patchedTaxInformationCreateUpdate** | [**PatchedTaxInformationCreateUpdate**](PatchedTaxInformationCreateUpdate.md) |  | 

### Return type

[**TaxInformationCreateUpdate**](TaxInformationCreateUpdate.md)

### Authorization

[cookieAuth](../README.md#cookieAuth), [jwtAuth](../README.md#jwtAuth), [tokenAuth](../README.md#tokenAuth)

### HTTP request headers

- **Content-Type**: application/json, application/x-www-form-urlencoded, multipart/form-data
- **Accept**: application/json

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints)
[[Back to Model list]](../README.md#documentation-for-models)
[[Back to README]](../README.md)


## ClientTaxInformationRetrieve

> TaxInformationList ClientTaxInformationRetrieve(ctx, clientUuid, uuid).Execute()





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
    resp, r, err := api_client.TaxInformationApi.ClientTaxInformationRetrieve(context.Background(), clientUuid, uuid).Execute()
    if err != nil {
        fmt.Fprintf(os.Stderr, "Error when calling `TaxInformationApi.ClientTaxInformationRetrieve``: %v\n", err)
        fmt.Fprintf(os.Stderr, "Full HTTP response: %v\n", r)
    }
    // response from `ClientTaxInformationRetrieve`: TaxInformationList
    fmt.Fprintf(os.Stdout, "Response from `TaxInformationApi.ClientTaxInformationRetrieve`: %v\n", resp)
}
```

### Path Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
**ctx** | **context.Context** | context for authentication, logging, cancellation, deadlines, tracing, etc.
**clientUuid** | [**string**](.md) |  | 
**uuid** | [**string**](.md) |  | 

### Other Parameters

Other parameters are passed through a pointer to a apiClientTaxInformationRetrieveRequest struct via the builder pattern


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------



### Return type

[**TaxInformationList**](TaxInformationList.md)

### Authorization

[cookieAuth](../README.md#cookieAuth), [jwtAuth](../README.md#jwtAuth), [tokenAuth](../README.md#tokenAuth)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints)
[[Back to Model list]](../README.md#documentation-for-models)
[[Back to README]](../README.md)


## ClientTaxInformationUpdate

> TaxInformationCreateUpdate ClientTaxInformationUpdate(ctx, clientUuid, uuid).TaxInformationCreateUpdate(taxInformationCreateUpdate).Execute()





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
    taxInformationCreateUpdate := *openapiclient.NewTaxInformationCreateUpdate("Uuid_example", "Country_example", "DocumentNumber_example") // TaxInformationCreateUpdate | 

    configuration := openapiclient.NewConfiguration()
    api_client := openapiclient.NewAPIClient(configuration)
    resp, r, err := api_client.TaxInformationApi.ClientTaxInformationUpdate(context.Background(), clientUuid, uuid).TaxInformationCreateUpdate(taxInformationCreateUpdate).Execute()
    if err != nil {
        fmt.Fprintf(os.Stderr, "Error when calling `TaxInformationApi.ClientTaxInformationUpdate``: %v\n", err)
        fmt.Fprintf(os.Stderr, "Full HTTP response: %v\n", r)
    }
    // response from `ClientTaxInformationUpdate`: TaxInformationCreateUpdate
    fmt.Fprintf(os.Stdout, "Response from `TaxInformationApi.ClientTaxInformationUpdate`: %v\n", resp)
}
```

### Path Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
**ctx** | **context.Context** | context for authentication, logging, cancellation, deadlines, tracing, etc.
**clientUuid** | [**string**](.md) |  | 
**uuid** | [**string**](.md) |  | 

### Other Parameters

Other parameters are passed through a pointer to a apiClientTaxInformationUpdateRequest struct via the builder pattern


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------


 **taxInformationCreateUpdate** | [**TaxInformationCreateUpdate**](TaxInformationCreateUpdate.md) |  | 

### Return type

[**TaxInformationCreateUpdate**](TaxInformationCreateUpdate.md)

### Authorization

[cookieAuth](../README.md#cookieAuth), [jwtAuth](../README.md#jwtAuth), [tokenAuth](../README.md#tokenAuth)

### HTTP request headers

- **Content-Type**: application/json, application/x-www-form-urlencoded, multipart/form-data
- **Accept**: application/json

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints)
[[Back to Model list]](../README.md#documentation-for-models)
[[Back to README]](../README.md)

