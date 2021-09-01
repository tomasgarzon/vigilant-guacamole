# \AnalyticsApi

All URIs are relative to *http://localhost*

Method | HTTP request | Description
------------- | ------------- | -------------
[**ApiV2RelationshipManagerAnalyticsAllocationsByAssetRetrieve**](AnalyticsApi.md#ApiV2RelationshipManagerAnalyticsAllocationsByAssetRetrieve) | **Get** /api/v2/relationship-manager/{relationship_manager_uuid}/analytics/allocations-by-asset/ | 
[**ApiV2RelationshipManagerAnalyticsAssetConcentrationRiskRetrieve**](AnalyticsApi.md#ApiV2RelationshipManagerAnalyticsAssetConcentrationRiskRetrieve) | **Get** /api/v2/relationship-manager/{relationship_manager_uuid}/analytics/asset-concentration-risk/ | 
[**ApiV2RelationshipManagerAnalyticsAumEvolutionRetrieve**](AnalyticsApi.md#ApiV2RelationshipManagerAnalyticsAumEvolutionRetrieve) | **Get** /api/v2/relationship-manager/{relationship_manager_uuid}/analytics/aum-evolution/ | 
[**ApiV2RelationshipManagerAnalyticsAumPortfolioRiskRetrieve**](AnalyticsApi.md#ApiV2RelationshipManagerAnalyticsAumPortfolioRiskRetrieve) | **Get** /api/v2/relationship-manager/{relationship_manager_uuid}/analytics/aum-portfolio-risk/ | 
[**ApiV2RelationshipManagerAnalyticsAumRetrieve**](AnalyticsApi.md#ApiV2RelationshipManagerAnalyticsAumRetrieve) | **Get** /api/v2/relationship-manager/{relationship_manager_uuid}/analytics/aum/ | 
[**ApiV2RelationshipManagerAnalyticsClientByRiskRetrieve**](AnalyticsApi.md#ApiV2RelationshipManagerAnalyticsClientByRiskRetrieve) | **Get** /api/v2/relationship-manager/{relationship_manager_uuid}/analytics/client-by-risk/ | 
[**ApiV2RelationshipManagerAnalyticsClientByStatusRetrieve**](AnalyticsApi.md#ApiV2RelationshipManagerAnalyticsClientByStatusRetrieve) | **Get** /api/v2/relationship-manager/{relationship_manager_uuid}/analytics/client-by-status/ | 
[**ApiV2RelationshipManagerAnalyticsClientRankingRetrieve**](AnalyticsApi.md#ApiV2RelationshipManagerAnalyticsClientRankingRetrieve) | **Get** /api/v2/relationship-manager/{relationship_manager_uuid}/analytics/client-ranking/ | 
[**ApiV2RelationshipManagerAnalyticsInflowsOutflowsRetrieve**](AnalyticsApi.md#ApiV2RelationshipManagerAnalyticsInflowsOutflowsRetrieve) | **Get** /api/v2/relationship-manager/{relationship_manager_uuid}/analytics/inflows-outflows/ | 
[**ApiV2RelationshipManagerAnalyticsPortfolioRiskPerformanceRetrieve**](AnalyticsApi.md#ApiV2RelationshipManagerAnalyticsPortfolioRiskPerformanceRetrieve) | **Get** /api/v2/relationship-manager/{relationship_manager_uuid}/analytics/portfolio-risk-performance/ | 
[**ApiV2RelationshipManagerAnalyticsTotalActiveClientsRetrieve**](AnalyticsApi.md#ApiV2RelationshipManagerAnalyticsTotalActiveClientsRetrieve) | **Get** /api/v2/relationship-manager/{relationship_manager_uuid}/analytics/total-active-clients/ | 



## ApiV2RelationshipManagerAnalyticsAllocationsByAssetRetrieve

> AllocationByAsset ApiV2RelationshipManagerAnalyticsAllocationsByAssetRetrieve(ctx, relationshipManagerUuid).Execute()



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
    relationshipManagerUuid := TODO // string | 

    configuration := openapiclient.NewConfiguration()
    api_client := openapiclient.NewAPIClient(configuration)
    resp, r, err := api_client.AnalyticsApi.ApiV2RelationshipManagerAnalyticsAllocationsByAssetRetrieve(context.Background(), relationshipManagerUuid).Execute()
    if err != nil {
        fmt.Fprintf(os.Stderr, "Error when calling `AnalyticsApi.ApiV2RelationshipManagerAnalyticsAllocationsByAssetRetrieve``: %v\n", err)
        fmt.Fprintf(os.Stderr, "Full HTTP response: %v\n", r)
    }
    // response from `ApiV2RelationshipManagerAnalyticsAllocationsByAssetRetrieve`: AllocationByAsset
    fmt.Fprintf(os.Stdout, "Response from `AnalyticsApi.ApiV2RelationshipManagerAnalyticsAllocationsByAssetRetrieve`: %v\n", resp)
}
```

### Path Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
**ctx** | **context.Context** | context for authentication, logging, cancellation, deadlines, tracing, etc.
**relationshipManagerUuid** | [**string**](.md) |  | 

### Other Parameters

Other parameters are passed through a pointer to a apiApiV2RelationshipManagerAnalyticsAllocationsByAssetRetrieveRequest struct via the builder pattern


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------


### Return type

[**AllocationByAsset**](AllocationByAsset.md)

### Authorization

[cookieAuth](../README.md#cookieAuth), [jwtAuth](../README.md#jwtAuth), [tokenAuth](../README.md#tokenAuth)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints)
[[Back to Model list]](../README.md#documentation-for-models)
[[Back to README]](../README.md)


## ApiV2RelationshipManagerAnalyticsAssetConcentrationRiskRetrieve

> AssetConcentrationRisk ApiV2RelationshipManagerAnalyticsAssetConcentrationRiskRetrieve(ctx, relationshipManagerUuid).Execute()



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
    relationshipManagerUuid := TODO // string | 

    configuration := openapiclient.NewConfiguration()
    api_client := openapiclient.NewAPIClient(configuration)
    resp, r, err := api_client.AnalyticsApi.ApiV2RelationshipManagerAnalyticsAssetConcentrationRiskRetrieve(context.Background(), relationshipManagerUuid).Execute()
    if err != nil {
        fmt.Fprintf(os.Stderr, "Error when calling `AnalyticsApi.ApiV2RelationshipManagerAnalyticsAssetConcentrationRiskRetrieve``: %v\n", err)
        fmt.Fprintf(os.Stderr, "Full HTTP response: %v\n", r)
    }
    // response from `ApiV2RelationshipManagerAnalyticsAssetConcentrationRiskRetrieve`: AssetConcentrationRisk
    fmt.Fprintf(os.Stdout, "Response from `AnalyticsApi.ApiV2RelationshipManagerAnalyticsAssetConcentrationRiskRetrieve`: %v\n", resp)
}
```

### Path Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
**ctx** | **context.Context** | context for authentication, logging, cancellation, deadlines, tracing, etc.
**relationshipManagerUuid** | [**string**](.md) |  | 

### Other Parameters

Other parameters are passed through a pointer to a apiApiV2RelationshipManagerAnalyticsAssetConcentrationRiskRetrieveRequest struct via the builder pattern


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------


### Return type

[**AssetConcentrationRisk**](AssetConcentrationRisk.md)

### Authorization

[cookieAuth](../README.md#cookieAuth), [jwtAuth](../README.md#jwtAuth), [tokenAuth](../README.md#tokenAuth)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints)
[[Back to Model list]](../README.md#documentation-for-models)
[[Back to README]](../README.md)


## ApiV2RelationshipManagerAnalyticsAumEvolutionRetrieve

> AUMEvoluation ApiV2RelationshipManagerAnalyticsAumEvolutionRetrieve(ctx, relationshipManagerUuid).Execute()



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
    relationshipManagerUuid := TODO // string | 

    configuration := openapiclient.NewConfiguration()
    api_client := openapiclient.NewAPIClient(configuration)
    resp, r, err := api_client.AnalyticsApi.ApiV2RelationshipManagerAnalyticsAumEvolutionRetrieve(context.Background(), relationshipManagerUuid).Execute()
    if err != nil {
        fmt.Fprintf(os.Stderr, "Error when calling `AnalyticsApi.ApiV2RelationshipManagerAnalyticsAumEvolutionRetrieve``: %v\n", err)
        fmt.Fprintf(os.Stderr, "Full HTTP response: %v\n", r)
    }
    // response from `ApiV2RelationshipManagerAnalyticsAumEvolutionRetrieve`: AUMEvoluation
    fmt.Fprintf(os.Stdout, "Response from `AnalyticsApi.ApiV2RelationshipManagerAnalyticsAumEvolutionRetrieve`: %v\n", resp)
}
```

### Path Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
**ctx** | **context.Context** | context for authentication, logging, cancellation, deadlines, tracing, etc.
**relationshipManagerUuid** | [**string**](.md) |  | 

### Other Parameters

Other parameters are passed through a pointer to a apiApiV2RelationshipManagerAnalyticsAumEvolutionRetrieveRequest struct via the builder pattern


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------


### Return type

[**AUMEvoluation**](AUMEvoluation.md)

### Authorization

[cookieAuth](../README.md#cookieAuth), [jwtAuth](../README.md#jwtAuth), [tokenAuth](../README.md#tokenAuth)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints)
[[Back to Model list]](../README.md#documentation-for-models)
[[Back to README]](../README.md)


## ApiV2RelationshipManagerAnalyticsAumPortfolioRiskRetrieve

> AUMPortfolioRisk ApiV2RelationshipManagerAnalyticsAumPortfolioRiskRetrieve(ctx, relationshipManagerUuid).Execute()



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
    relationshipManagerUuid := TODO // string | 

    configuration := openapiclient.NewConfiguration()
    api_client := openapiclient.NewAPIClient(configuration)
    resp, r, err := api_client.AnalyticsApi.ApiV2RelationshipManagerAnalyticsAumPortfolioRiskRetrieve(context.Background(), relationshipManagerUuid).Execute()
    if err != nil {
        fmt.Fprintf(os.Stderr, "Error when calling `AnalyticsApi.ApiV2RelationshipManagerAnalyticsAumPortfolioRiskRetrieve``: %v\n", err)
        fmt.Fprintf(os.Stderr, "Full HTTP response: %v\n", r)
    }
    // response from `ApiV2RelationshipManagerAnalyticsAumPortfolioRiskRetrieve`: AUMPortfolioRisk
    fmt.Fprintf(os.Stdout, "Response from `AnalyticsApi.ApiV2RelationshipManagerAnalyticsAumPortfolioRiskRetrieve`: %v\n", resp)
}
```

### Path Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
**ctx** | **context.Context** | context for authentication, logging, cancellation, deadlines, tracing, etc.
**relationshipManagerUuid** | [**string**](.md) |  | 

### Other Parameters

Other parameters are passed through a pointer to a apiApiV2RelationshipManagerAnalyticsAumPortfolioRiskRetrieveRequest struct via the builder pattern


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------


### Return type

[**AUMPortfolioRisk**](AUMPortfolioRisk.md)

### Authorization

[cookieAuth](../README.md#cookieAuth), [jwtAuth](../README.md#jwtAuth), [tokenAuth](../README.md#tokenAuth)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints)
[[Back to Model list]](../README.md#documentation-for-models)
[[Back to README]](../README.md)


## ApiV2RelationshipManagerAnalyticsAumRetrieve

> RelationshipManager ApiV2RelationshipManagerAnalyticsAumRetrieve(ctx, relationshipManagerUuid).Execute()



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
    relationshipManagerUuid := TODO // string | 

    configuration := openapiclient.NewConfiguration()
    api_client := openapiclient.NewAPIClient(configuration)
    resp, r, err := api_client.AnalyticsApi.ApiV2RelationshipManagerAnalyticsAumRetrieve(context.Background(), relationshipManagerUuid).Execute()
    if err != nil {
        fmt.Fprintf(os.Stderr, "Error when calling `AnalyticsApi.ApiV2RelationshipManagerAnalyticsAumRetrieve``: %v\n", err)
        fmt.Fprintf(os.Stderr, "Full HTTP response: %v\n", r)
    }
    // response from `ApiV2RelationshipManagerAnalyticsAumRetrieve`: RelationshipManager
    fmt.Fprintf(os.Stdout, "Response from `AnalyticsApi.ApiV2RelationshipManagerAnalyticsAumRetrieve`: %v\n", resp)
}
```

### Path Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
**ctx** | **context.Context** | context for authentication, logging, cancellation, deadlines, tracing, etc.
**relationshipManagerUuid** | [**string**](.md) |  | 

### Other Parameters

Other parameters are passed through a pointer to a apiApiV2RelationshipManagerAnalyticsAumRetrieveRequest struct via the builder pattern


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------


### Return type

[**RelationshipManager**](RelationshipManager.md)

### Authorization

[cookieAuth](../README.md#cookieAuth), [jwtAuth](../README.md#jwtAuth), [tokenAuth](../README.md#tokenAuth)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints)
[[Back to Model list]](../README.md#documentation-for-models)
[[Back to README]](../README.md)


## ApiV2RelationshipManagerAnalyticsClientByRiskRetrieve

> RelationshipManager ApiV2RelationshipManagerAnalyticsClientByRiskRetrieve(ctx, relationshipManagerUuid).Execute()



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
    relationshipManagerUuid := TODO // string | 

    configuration := openapiclient.NewConfiguration()
    api_client := openapiclient.NewAPIClient(configuration)
    resp, r, err := api_client.AnalyticsApi.ApiV2RelationshipManagerAnalyticsClientByRiskRetrieve(context.Background(), relationshipManagerUuid).Execute()
    if err != nil {
        fmt.Fprintf(os.Stderr, "Error when calling `AnalyticsApi.ApiV2RelationshipManagerAnalyticsClientByRiskRetrieve``: %v\n", err)
        fmt.Fprintf(os.Stderr, "Full HTTP response: %v\n", r)
    }
    // response from `ApiV2RelationshipManagerAnalyticsClientByRiskRetrieve`: RelationshipManager
    fmt.Fprintf(os.Stdout, "Response from `AnalyticsApi.ApiV2RelationshipManagerAnalyticsClientByRiskRetrieve`: %v\n", resp)
}
```

### Path Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
**ctx** | **context.Context** | context for authentication, logging, cancellation, deadlines, tracing, etc.
**relationshipManagerUuid** | [**string**](.md) |  | 

### Other Parameters

Other parameters are passed through a pointer to a apiApiV2RelationshipManagerAnalyticsClientByRiskRetrieveRequest struct via the builder pattern


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------


### Return type

[**RelationshipManager**](RelationshipManager.md)

### Authorization

[cookieAuth](../README.md#cookieAuth), [jwtAuth](../README.md#jwtAuth), [tokenAuth](../README.md#tokenAuth)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints)
[[Back to Model list]](../README.md#documentation-for-models)
[[Back to README]](../README.md)


## ApiV2RelationshipManagerAnalyticsClientByStatusRetrieve

> RelationshipManager ApiV2RelationshipManagerAnalyticsClientByStatusRetrieve(ctx, relationshipManagerUuid).Execute()



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
    relationshipManagerUuid := TODO // string | 

    configuration := openapiclient.NewConfiguration()
    api_client := openapiclient.NewAPIClient(configuration)
    resp, r, err := api_client.AnalyticsApi.ApiV2RelationshipManagerAnalyticsClientByStatusRetrieve(context.Background(), relationshipManagerUuid).Execute()
    if err != nil {
        fmt.Fprintf(os.Stderr, "Error when calling `AnalyticsApi.ApiV2RelationshipManagerAnalyticsClientByStatusRetrieve``: %v\n", err)
        fmt.Fprintf(os.Stderr, "Full HTTP response: %v\n", r)
    }
    // response from `ApiV2RelationshipManagerAnalyticsClientByStatusRetrieve`: RelationshipManager
    fmt.Fprintf(os.Stdout, "Response from `AnalyticsApi.ApiV2RelationshipManagerAnalyticsClientByStatusRetrieve`: %v\n", resp)
}
```

### Path Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
**ctx** | **context.Context** | context for authentication, logging, cancellation, deadlines, tracing, etc.
**relationshipManagerUuid** | [**string**](.md) |  | 

### Other Parameters

Other parameters are passed through a pointer to a apiApiV2RelationshipManagerAnalyticsClientByStatusRetrieveRequest struct via the builder pattern


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------


### Return type

[**RelationshipManager**](RelationshipManager.md)

### Authorization

[cookieAuth](../README.md#cookieAuth), [jwtAuth](../README.md#jwtAuth), [tokenAuth](../README.md#tokenAuth)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints)
[[Back to Model list]](../README.md#documentation-for-models)
[[Back to README]](../README.md)


## ApiV2RelationshipManagerAnalyticsClientRankingRetrieve

> ClientRanking ApiV2RelationshipManagerAnalyticsClientRankingRetrieve(ctx, relationshipManagerUuid).Execute()



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
    relationshipManagerUuid := TODO // string | 

    configuration := openapiclient.NewConfiguration()
    api_client := openapiclient.NewAPIClient(configuration)
    resp, r, err := api_client.AnalyticsApi.ApiV2RelationshipManagerAnalyticsClientRankingRetrieve(context.Background(), relationshipManagerUuid).Execute()
    if err != nil {
        fmt.Fprintf(os.Stderr, "Error when calling `AnalyticsApi.ApiV2RelationshipManagerAnalyticsClientRankingRetrieve``: %v\n", err)
        fmt.Fprintf(os.Stderr, "Full HTTP response: %v\n", r)
    }
    // response from `ApiV2RelationshipManagerAnalyticsClientRankingRetrieve`: ClientRanking
    fmt.Fprintf(os.Stdout, "Response from `AnalyticsApi.ApiV2RelationshipManagerAnalyticsClientRankingRetrieve`: %v\n", resp)
}
```

### Path Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
**ctx** | **context.Context** | context for authentication, logging, cancellation, deadlines, tracing, etc.
**relationshipManagerUuid** | [**string**](.md) |  | 

### Other Parameters

Other parameters are passed through a pointer to a apiApiV2RelationshipManagerAnalyticsClientRankingRetrieveRequest struct via the builder pattern


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------


### Return type

[**ClientRanking**](ClientRanking.md)

### Authorization

[cookieAuth](../README.md#cookieAuth), [jwtAuth](../README.md#jwtAuth), [tokenAuth](../README.md#tokenAuth)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints)
[[Back to Model list]](../README.md#documentation-for-models)
[[Back to README]](../README.md)


## ApiV2RelationshipManagerAnalyticsInflowsOutflowsRetrieve

> RelationshipManager ApiV2RelationshipManagerAnalyticsInflowsOutflowsRetrieve(ctx, relationshipManagerUuid).Execute()



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
    relationshipManagerUuid := TODO // string | 

    configuration := openapiclient.NewConfiguration()
    api_client := openapiclient.NewAPIClient(configuration)
    resp, r, err := api_client.AnalyticsApi.ApiV2RelationshipManagerAnalyticsInflowsOutflowsRetrieve(context.Background(), relationshipManagerUuid).Execute()
    if err != nil {
        fmt.Fprintf(os.Stderr, "Error when calling `AnalyticsApi.ApiV2RelationshipManagerAnalyticsInflowsOutflowsRetrieve``: %v\n", err)
        fmt.Fprintf(os.Stderr, "Full HTTP response: %v\n", r)
    }
    // response from `ApiV2RelationshipManagerAnalyticsInflowsOutflowsRetrieve`: RelationshipManager
    fmt.Fprintf(os.Stdout, "Response from `AnalyticsApi.ApiV2RelationshipManagerAnalyticsInflowsOutflowsRetrieve`: %v\n", resp)
}
```

### Path Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
**ctx** | **context.Context** | context for authentication, logging, cancellation, deadlines, tracing, etc.
**relationshipManagerUuid** | [**string**](.md) |  | 

### Other Parameters

Other parameters are passed through a pointer to a apiApiV2RelationshipManagerAnalyticsInflowsOutflowsRetrieveRequest struct via the builder pattern


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------


### Return type

[**RelationshipManager**](RelationshipManager.md)

### Authorization

[cookieAuth](../README.md#cookieAuth), [jwtAuth](../README.md#jwtAuth), [tokenAuth](../README.md#tokenAuth)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints)
[[Back to Model list]](../README.md#documentation-for-models)
[[Back to README]](../README.md)


## ApiV2RelationshipManagerAnalyticsPortfolioRiskPerformanceRetrieve

> RelationshipManager ApiV2RelationshipManagerAnalyticsPortfolioRiskPerformanceRetrieve(ctx, relationshipManagerUuid).Execute()



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
    relationshipManagerUuid := TODO // string | 

    configuration := openapiclient.NewConfiguration()
    api_client := openapiclient.NewAPIClient(configuration)
    resp, r, err := api_client.AnalyticsApi.ApiV2RelationshipManagerAnalyticsPortfolioRiskPerformanceRetrieve(context.Background(), relationshipManagerUuid).Execute()
    if err != nil {
        fmt.Fprintf(os.Stderr, "Error when calling `AnalyticsApi.ApiV2RelationshipManagerAnalyticsPortfolioRiskPerformanceRetrieve``: %v\n", err)
        fmt.Fprintf(os.Stderr, "Full HTTP response: %v\n", r)
    }
    // response from `ApiV2RelationshipManagerAnalyticsPortfolioRiskPerformanceRetrieve`: RelationshipManager
    fmt.Fprintf(os.Stdout, "Response from `AnalyticsApi.ApiV2RelationshipManagerAnalyticsPortfolioRiskPerformanceRetrieve`: %v\n", resp)
}
```

### Path Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
**ctx** | **context.Context** | context for authentication, logging, cancellation, deadlines, tracing, etc.
**relationshipManagerUuid** | [**string**](.md) |  | 

### Other Parameters

Other parameters are passed through a pointer to a apiApiV2RelationshipManagerAnalyticsPortfolioRiskPerformanceRetrieveRequest struct via the builder pattern


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------


### Return type

[**RelationshipManager**](RelationshipManager.md)

### Authorization

[cookieAuth](../README.md#cookieAuth), [jwtAuth](../README.md#jwtAuth), [tokenAuth](../README.md#tokenAuth)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints)
[[Back to Model list]](../README.md#documentation-for-models)
[[Back to README]](../README.md)


## ApiV2RelationshipManagerAnalyticsTotalActiveClientsRetrieve

> RelationshipManager ApiV2RelationshipManagerAnalyticsTotalActiveClientsRetrieve(ctx, relationshipManagerUuid).Execute()



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
    relationshipManagerUuid := TODO // string | 

    configuration := openapiclient.NewConfiguration()
    api_client := openapiclient.NewAPIClient(configuration)
    resp, r, err := api_client.AnalyticsApi.ApiV2RelationshipManagerAnalyticsTotalActiveClientsRetrieve(context.Background(), relationshipManagerUuid).Execute()
    if err != nil {
        fmt.Fprintf(os.Stderr, "Error when calling `AnalyticsApi.ApiV2RelationshipManagerAnalyticsTotalActiveClientsRetrieve``: %v\n", err)
        fmt.Fprintf(os.Stderr, "Full HTTP response: %v\n", r)
    }
    // response from `ApiV2RelationshipManagerAnalyticsTotalActiveClientsRetrieve`: RelationshipManager
    fmt.Fprintf(os.Stdout, "Response from `AnalyticsApi.ApiV2RelationshipManagerAnalyticsTotalActiveClientsRetrieve`: %v\n", resp)
}
```

### Path Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
**ctx** | **context.Context** | context for authentication, logging, cancellation, deadlines, tracing, etc.
**relationshipManagerUuid** | [**string**](.md) |  | 

### Other Parameters

Other parameters are passed through a pointer to a apiApiV2RelationshipManagerAnalyticsTotalActiveClientsRetrieveRequest struct via the builder pattern


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------


### Return type

[**RelationshipManager**](RelationshipManager.md)

### Authorization

[cookieAuth](../README.md#cookieAuth), [jwtAuth](../README.md#jwtAuth), [tokenAuth](../README.md#tokenAuth)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints)
[[Back to Model list]](../README.md#documentation-for-models)
[[Back to README]](../README.md)

