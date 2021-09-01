# \AddressApi

All URIs are relative to *http://localhost*

Method | HTTP request | Description
------------- | ------------- | -------------
[**ClientAddressCreate**](AddressApi.md#ClientAddressCreate) | **Post** /api/v2/clients/{client_uuid}/addresses/ | 
[**ClientAddressDelete**](AddressApi.md#ClientAddressDelete) | **Delete** /api/v2/clients/{client_uuid}/addresses/{uuid}/ | 
[**ClientAddressPartialUpdate**](AddressApi.md#ClientAddressPartialUpdate) | **Patch** /api/v2/clients/{client_uuid}/addresses/{uuid}/ | 
[**ClientAddressRetrieve**](AddressApi.md#ClientAddressRetrieve) | **Get** /api/v2/clients/{client_uuid}/addresses/{uuid}/ | 
[**ClientAddressUpdate**](AddressApi.md#ClientAddressUpdate) | **Put** /api/v2/clients/{client_uuid}/addresses/{uuid}/ | 
[**ClientAddressesList**](AddressApi.md#ClientAddressesList) | **Get** /api/v2/clients/{client_uuid}/addresses/ | 



## ClientAddressCreate

> AddressCreate ClientAddressCreate(ctx, clientUuid).AddressCreate(addressCreate).Execute()





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
    addressCreate := *openapiclient.NewAddressCreate("Uuid_example", "Line1_example", "Postcode_example", "Locality_example", "Country_example") // AddressCreate | 

    configuration := openapiclient.NewConfiguration()
    api_client := openapiclient.NewAPIClient(configuration)
    resp, r, err := api_client.AddressApi.ClientAddressCreate(context.Background(), clientUuid).AddressCreate(addressCreate).Execute()
    if err != nil {
        fmt.Fprintf(os.Stderr, "Error when calling `AddressApi.ClientAddressCreate``: %v\n", err)
        fmt.Fprintf(os.Stderr, "Full HTTP response: %v\n", r)
    }
    // response from `ClientAddressCreate`: AddressCreate
    fmt.Fprintf(os.Stdout, "Response from `AddressApi.ClientAddressCreate`: %v\n", resp)
}
```

### Path Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
**ctx** | **context.Context** | context for authentication, logging, cancellation, deadlines, tracing, etc.
**clientUuid** | [**string**](.md) |  | 

### Other Parameters

Other parameters are passed through a pointer to a apiClientAddressCreateRequest struct via the builder pattern


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------

 **addressCreate** | [**AddressCreate**](AddressCreate.md) |  | 

### Return type

[**AddressCreate**](AddressCreate.md)

### Authorization

[cookieAuth](../README.md#cookieAuth), [jwtAuth](../README.md#jwtAuth), [tokenAuth](../README.md#tokenAuth)

### HTTP request headers

- **Content-Type**: application/json, application/x-www-form-urlencoded, multipart/form-data
- **Accept**: application/json

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints)
[[Back to Model list]](../README.md#documentation-for-models)
[[Back to README]](../README.md)


## ClientAddressDelete

> ClientAddressDelete(ctx, clientUuid, uuid).Execute()





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
    resp, r, err := api_client.AddressApi.ClientAddressDelete(context.Background(), clientUuid, uuid).Execute()
    if err != nil {
        fmt.Fprintf(os.Stderr, "Error when calling `AddressApi.ClientAddressDelete``: %v\n", err)
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

Other parameters are passed through a pointer to a apiClientAddressDeleteRequest struct via the builder pattern


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


## ClientAddressPartialUpdate

> AddressUpdate ClientAddressPartialUpdate(ctx, clientUuid, uuid).PatchedAddressUpdate(patchedAddressUpdate).Execute()





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
    patchedAddressUpdate := *openapiclient.NewPatchedAddressUpdate() // PatchedAddressUpdate |  (optional)

    configuration := openapiclient.NewConfiguration()
    api_client := openapiclient.NewAPIClient(configuration)
    resp, r, err := api_client.AddressApi.ClientAddressPartialUpdate(context.Background(), clientUuid, uuid).PatchedAddressUpdate(patchedAddressUpdate).Execute()
    if err != nil {
        fmt.Fprintf(os.Stderr, "Error when calling `AddressApi.ClientAddressPartialUpdate``: %v\n", err)
        fmt.Fprintf(os.Stderr, "Full HTTP response: %v\n", r)
    }
    // response from `ClientAddressPartialUpdate`: AddressUpdate
    fmt.Fprintf(os.Stdout, "Response from `AddressApi.ClientAddressPartialUpdate`: %v\n", resp)
}
```

### Path Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
**ctx** | **context.Context** | context for authentication, logging, cancellation, deadlines, tracing, etc.
**clientUuid** | [**string**](.md) |  | 
**uuid** | [**string**](.md) |  | 

### Other Parameters

Other parameters are passed through a pointer to a apiClientAddressPartialUpdateRequest struct via the builder pattern


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------


 **patchedAddressUpdate** | [**PatchedAddressUpdate**](PatchedAddressUpdate.md) |  | 

### Return type

[**AddressUpdate**](AddressUpdate.md)

### Authorization

[cookieAuth](../README.md#cookieAuth), [jwtAuth](../README.md#jwtAuth), [tokenAuth](../README.md#tokenAuth)

### HTTP request headers

- **Content-Type**: application/json, application/x-www-form-urlencoded, multipart/form-data
- **Accept**: application/json

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints)
[[Back to Model list]](../README.md#documentation-for-models)
[[Back to README]](../README.md)


## ClientAddressRetrieve

> AddressList ClientAddressRetrieve(ctx, clientUuid, uuid).Execute()





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
    resp, r, err := api_client.AddressApi.ClientAddressRetrieve(context.Background(), clientUuid, uuid).Execute()
    if err != nil {
        fmt.Fprintf(os.Stderr, "Error when calling `AddressApi.ClientAddressRetrieve``: %v\n", err)
        fmt.Fprintf(os.Stderr, "Full HTTP response: %v\n", r)
    }
    // response from `ClientAddressRetrieve`: AddressList
    fmt.Fprintf(os.Stdout, "Response from `AddressApi.ClientAddressRetrieve`: %v\n", resp)
}
```

### Path Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
**ctx** | **context.Context** | context for authentication, logging, cancellation, deadlines, tracing, etc.
**clientUuid** | [**string**](.md) |  | 
**uuid** | [**string**](.md) |  | 

### Other Parameters

Other parameters are passed through a pointer to a apiClientAddressRetrieveRequest struct via the builder pattern


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------



### Return type

[**AddressList**](AddressList.md)

### Authorization

[cookieAuth](../README.md#cookieAuth), [jwtAuth](../README.md#jwtAuth), [tokenAuth](../README.md#tokenAuth)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints)
[[Back to Model list]](../README.md#documentation-for-models)
[[Back to README]](../README.md)


## ClientAddressUpdate

> AddressUpdate ClientAddressUpdate(ctx, clientUuid, uuid).AddressUpdate(addressUpdate).Execute()





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
    addressUpdate := *openapiclient.NewAddressUpdate("Uuid_example", "Line1_example", "Postcode_example", "Locality_example", "Country_example") // AddressUpdate | 

    configuration := openapiclient.NewConfiguration()
    api_client := openapiclient.NewAPIClient(configuration)
    resp, r, err := api_client.AddressApi.ClientAddressUpdate(context.Background(), clientUuid, uuid).AddressUpdate(addressUpdate).Execute()
    if err != nil {
        fmt.Fprintf(os.Stderr, "Error when calling `AddressApi.ClientAddressUpdate``: %v\n", err)
        fmt.Fprintf(os.Stderr, "Full HTTP response: %v\n", r)
    }
    // response from `ClientAddressUpdate`: AddressUpdate
    fmt.Fprintf(os.Stdout, "Response from `AddressApi.ClientAddressUpdate`: %v\n", resp)
}
```

### Path Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
**ctx** | **context.Context** | context for authentication, logging, cancellation, deadlines, tracing, etc.
**clientUuid** | [**string**](.md) |  | 
**uuid** | [**string**](.md) |  | 

### Other Parameters

Other parameters are passed through a pointer to a apiClientAddressUpdateRequest struct via the builder pattern


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------


 **addressUpdate** | [**AddressUpdate**](AddressUpdate.md) |  | 

### Return type

[**AddressUpdate**](AddressUpdate.md)

### Authorization

[cookieAuth](../README.md#cookieAuth), [jwtAuth](../README.md#jwtAuth), [tokenAuth](../README.md#tokenAuth)

### HTTP request headers

- **Content-Type**: application/json, application/x-www-form-urlencoded, multipart/form-data
- **Accept**: application/json

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints)
[[Back to Model list]](../README.md#documentation-for-models)
[[Back to README]](../README.md)


## ClientAddressesList

> PaginatedAddressListList ClientAddressesList(ctx, clientUuid).Limit(limit).Offset(offset).Execute()





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
    resp, r, err := api_client.AddressApi.ClientAddressesList(context.Background(), clientUuid).Limit(limit).Offset(offset).Execute()
    if err != nil {
        fmt.Fprintf(os.Stderr, "Error when calling `AddressApi.ClientAddressesList``: %v\n", err)
        fmt.Fprintf(os.Stderr, "Full HTTP response: %v\n", r)
    }
    // response from `ClientAddressesList`: PaginatedAddressListList
    fmt.Fprintf(os.Stdout, "Response from `AddressApi.ClientAddressesList`: %v\n", resp)
}
```

### Path Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
**ctx** | **context.Context** | context for authentication, logging, cancellation, deadlines, tracing, etc.
**clientUuid** | [**string**](.md) |  | 

### Other Parameters

Other parameters are passed through a pointer to a apiClientAddressesListRequest struct via the builder pattern


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------

 **limit** | **int32** | Number of results to return per page. | 
 **offset** | **int32** | The initial index from which to return the results. | 

### Return type

[**PaginatedAddressListList**](PaginatedAddressListList.md)

### Authorization

[cookieAuth](../README.md#cookieAuth), [jwtAuth](../README.md#jwtAuth), [tokenAuth](../README.md#tokenAuth)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints)
[[Back to Model list]](../README.md#documentation-for-models)
[[Back to README]](../README.md)

