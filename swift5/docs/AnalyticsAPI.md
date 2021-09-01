# AnalyticsAPI

All URIs are relative to *http://localhost*

Method | HTTP request | Description
------------- | ------------- | -------------
[**apiV2RelationshipManagerAnalyticsAllocationsByAssetRetrieve**](AnalyticsAPI.md#apiv2relationshipmanageranalyticsallocationsbyassetretrieve) | **GET** /api/v2/relationship-manager/{relationship_manager_uuid}/analytics/allocations-by-asset/ | 
[**apiV2RelationshipManagerAnalyticsAssetConcentrationRiskRetrieve**](AnalyticsAPI.md#apiv2relationshipmanageranalyticsassetconcentrationriskretrieve) | **GET** /api/v2/relationship-manager/{relationship_manager_uuid}/analytics/asset-concentration-risk/ | 
[**apiV2RelationshipManagerAnalyticsAumEvolutionRetrieve**](AnalyticsAPI.md#apiv2relationshipmanageranalyticsaumevolutionretrieve) | **GET** /api/v2/relationship-manager/{relationship_manager_uuid}/analytics/aum-evolution/ | 
[**apiV2RelationshipManagerAnalyticsAumPortfolioRiskRetrieve**](AnalyticsAPI.md#apiv2relationshipmanageranalyticsaumportfolioriskretrieve) | **GET** /api/v2/relationship-manager/{relationship_manager_uuid}/analytics/aum-portfolio-risk/ | 
[**apiV2RelationshipManagerAnalyticsAumRetrieve**](AnalyticsAPI.md#apiv2relationshipmanageranalyticsaumretrieve) | **GET** /api/v2/relationship-manager/{relationship_manager_uuid}/analytics/aum/ | 
[**apiV2RelationshipManagerAnalyticsClientByRiskRetrieve**](AnalyticsAPI.md#apiv2relationshipmanageranalyticsclientbyriskretrieve) | **GET** /api/v2/relationship-manager/{relationship_manager_uuid}/analytics/client-by-risk/ | 
[**apiV2RelationshipManagerAnalyticsClientByStatusRetrieve**](AnalyticsAPI.md#apiv2relationshipmanageranalyticsclientbystatusretrieve) | **GET** /api/v2/relationship-manager/{relationship_manager_uuid}/analytics/client-by-status/ | 
[**apiV2RelationshipManagerAnalyticsClientRankingRetrieve**](AnalyticsAPI.md#apiv2relationshipmanageranalyticsclientrankingretrieve) | **GET** /api/v2/relationship-manager/{relationship_manager_uuid}/analytics/client-ranking/ | 
[**apiV2RelationshipManagerAnalyticsInflowsOutflowsRetrieve**](AnalyticsAPI.md#apiv2relationshipmanageranalyticsinflowsoutflowsretrieve) | **GET** /api/v2/relationship-manager/{relationship_manager_uuid}/analytics/inflows-outflows/ | 
[**apiV2RelationshipManagerAnalyticsPortfolioRiskPerformanceRetrieve**](AnalyticsAPI.md#apiv2relationshipmanageranalyticsportfolioriskperformanceretrieve) | **GET** /api/v2/relationship-manager/{relationship_manager_uuid}/analytics/portfolio-risk-performance/ | 
[**apiV2RelationshipManagerAnalyticsTotalActiveClientsRetrieve**](AnalyticsAPI.md#apiv2relationshipmanageranalyticstotalactiveclientsretrieve) | **GET** /api/v2/relationship-manager/{relationship_manager_uuid}/analytics/total-active-clients/ | 


# **apiV2RelationshipManagerAnalyticsAllocationsByAssetRetrieve**
```swift
    open class func apiV2RelationshipManagerAnalyticsAllocationsByAssetRetrieve(relationshipManagerUuid: UUID, completion: @escaping (_ data: AllocationByAsset?, _ error: Error?) -> Void)
```



### Example
```swift
// The following code samples are still beta. For any issue, please report via http://github.com/OpenAPITools/openapi-generator/issues/new
import OpenAPIClient

let relationshipManagerUuid = 987 // UUID | 

AnalyticsAPI.apiV2RelationshipManagerAnalyticsAllocationsByAssetRetrieve(relationshipManagerUuid: relationshipManagerUuid) { (response, error) in
    guard error == nil else {
        print(error)
        return
    }

    if (response) {
        dump(response)
    }
}
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **relationshipManagerUuid** | [**UUID**](.md) |  | 

### Return type

[**AllocationByAsset**](AllocationByAsset.md)

### Authorization

[cookieAuth](../README.md#cookieAuth), [jwtAuth](../README.md#jwtAuth), [tokenAuth](../README.md#tokenAuth)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **apiV2RelationshipManagerAnalyticsAssetConcentrationRiskRetrieve**
```swift
    open class func apiV2RelationshipManagerAnalyticsAssetConcentrationRiskRetrieve(relationshipManagerUuid: UUID, completion: @escaping (_ data: AssetConcentrationRisk?, _ error: Error?) -> Void)
```



### Example
```swift
// The following code samples are still beta. For any issue, please report via http://github.com/OpenAPITools/openapi-generator/issues/new
import OpenAPIClient

let relationshipManagerUuid = 987 // UUID | 

AnalyticsAPI.apiV2RelationshipManagerAnalyticsAssetConcentrationRiskRetrieve(relationshipManagerUuid: relationshipManagerUuid) { (response, error) in
    guard error == nil else {
        print(error)
        return
    }

    if (response) {
        dump(response)
    }
}
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **relationshipManagerUuid** | [**UUID**](.md) |  | 

### Return type

[**AssetConcentrationRisk**](AssetConcentrationRisk.md)

### Authorization

[cookieAuth](../README.md#cookieAuth), [jwtAuth](../README.md#jwtAuth), [tokenAuth](../README.md#tokenAuth)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **apiV2RelationshipManagerAnalyticsAumEvolutionRetrieve**
```swift
    open class func apiV2RelationshipManagerAnalyticsAumEvolutionRetrieve(relationshipManagerUuid: UUID, completion: @escaping (_ data: AUMEvoluation?, _ error: Error?) -> Void)
```



### Example
```swift
// The following code samples are still beta. For any issue, please report via http://github.com/OpenAPITools/openapi-generator/issues/new
import OpenAPIClient

let relationshipManagerUuid = 987 // UUID | 

AnalyticsAPI.apiV2RelationshipManagerAnalyticsAumEvolutionRetrieve(relationshipManagerUuid: relationshipManagerUuid) { (response, error) in
    guard error == nil else {
        print(error)
        return
    }

    if (response) {
        dump(response)
    }
}
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **relationshipManagerUuid** | [**UUID**](.md) |  | 

### Return type

[**AUMEvoluation**](AUMEvoluation.md)

### Authorization

[cookieAuth](../README.md#cookieAuth), [jwtAuth](../README.md#jwtAuth), [tokenAuth](../README.md#tokenAuth)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **apiV2RelationshipManagerAnalyticsAumPortfolioRiskRetrieve**
```swift
    open class func apiV2RelationshipManagerAnalyticsAumPortfolioRiskRetrieve(relationshipManagerUuid: UUID, completion: @escaping (_ data: AUMPortfolioRisk?, _ error: Error?) -> Void)
```



### Example
```swift
// The following code samples are still beta. For any issue, please report via http://github.com/OpenAPITools/openapi-generator/issues/new
import OpenAPIClient

let relationshipManagerUuid = 987 // UUID | 

AnalyticsAPI.apiV2RelationshipManagerAnalyticsAumPortfolioRiskRetrieve(relationshipManagerUuid: relationshipManagerUuid) { (response, error) in
    guard error == nil else {
        print(error)
        return
    }

    if (response) {
        dump(response)
    }
}
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **relationshipManagerUuid** | [**UUID**](.md) |  | 

### Return type

[**AUMPortfolioRisk**](AUMPortfolioRisk.md)

### Authorization

[cookieAuth](../README.md#cookieAuth), [jwtAuth](../README.md#jwtAuth), [tokenAuth](../README.md#tokenAuth)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **apiV2RelationshipManagerAnalyticsAumRetrieve**
```swift
    open class func apiV2RelationshipManagerAnalyticsAumRetrieve(relationshipManagerUuid: UUID, completion: @escaping (_ data: RelationshipManager?, _ error: Error?) -> Void)
```



### Example
```swift
// The following code samples are still beta. For any issue, please report via http://github.com/OpenAPITools/openapi-generator/issues/new
import OpenAPIClient

let relationshipManagerUuid = 987 // UUID | 

AnalyticsAPI.apiV2RelationshipManagerAnalyticsAumRetrieve(relationshipManagerUuid: relationshipManagerUuid) { (response, error) in
    guard error == nil else {
        print(error)
        return
    }

    if (response) {
        dump(response)
    }
}
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **relationshipManagerUuid** | [**UUID**](.md) |  | 

### Return type

[**RelationshipManager**](RelationshipManager.md)

### Authorization

[cookieAuth](../README.md#cookieAuth), [jwtAuth](../README.md#jwtAuth), [tokenAuth](../README.md#tokenAuth)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **apiV2RelationshipManagerAnalyticsClientByRiskRetrieve**
```swift
    open class func apiV2RelationshipManagerAnalyticsClientByRiskRetrieve(relationshipManagerUuid: UUID, completion: @escaping (_ data: RelationshipManager?, _ error: Error?) -> Void)
```



### Example
```swift
// The following code samples are still beta. For any issue, please report via http://github.com/OpenAPITools/openapi-generator/issues/new
import OpenAPIClient

let relationshipManagerUuid = 987 // UUID | 

AnalyticsAPI.apiV2RelationshipManagerAnalyticsClientByRiskRetrieve(relationshipManagerUuid: relationshipManagerUuid) { (response, error) in
    guard error == nil else {
        print(error)
        return
    }

    if (response) {
        dump(response)
    }
}
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **relationshipManagerUuid** | [**UUID**](.md) |  | 

### Return type

[**RelationshipManager**](RelationshipManager.md)

### Authorization

[cookieAuth](../README.md#cookieAuth), [jwtAuth](../README.md#jwtAuth), [tokenAuth](../README.md#tokenAuth)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **apiV2RelationshipManagerAnalyticsClientByStatusRetrieve**
```swift
    open class func apiV2RelationshipManagerAnalyticsClientByStatusRetrieve(relationshipManagerUuid: UUID, completion: @escaping (_ data: RelationshipManager?, _ error: Error?) -> Void)
```



### Example
```swift
// The following code samples are still beta. For any issue, please report via http://github.com/OpenAPITools/openapi-generator/issues/new
import OpenAPIClient

let relationshipManagerUuid = 987 // UUID | 

AnalyticsAPI.apiV2RelationshipManagerAnalyticsClientByStatusRetrieve(relationshipManagerUuid: relationshipManagerUuid) { (response, error) in
    guard error == nil else {
        print(error)
        return
    }

    if (response) {
        dump(response)
    }
}
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **relationshipManagerUuid** | [**UUID**](.md) |  | 

### Return type

[**RelationshipManager**](RelationshipManager.md)

### Authorization

[cookieAuth](../README.md#cookieAuth), [jwtAuth](../README.md#jwtAuth), [tokenAuth](../README.md#tokenAuth)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **apiV2RelationshipManagerAnalyticsClientRankingRetrieve**
```swift
    open class func apiV2RelationshipManagerAnalyticsClientRankingRetrieve(relationshipManagerUuid: UUID, completion: @escaping (_ data: ClientRanking?, _ error: Error?) -> Void)
```



### Example
```swift
// The following code samples are still beta. For any issue, please report via http://github.com/OpenAPITools/openapi-generator/issues/new
import OpenAPIClient

let relationshipManagerUuid = 987 // UUID | 

AnalyticsAPI.apiV2RelationshipManagerAnalyticsClientRankingRetrieve(relationshipManagerUuid: relationshipManagerUuid) { (response, error) in
    guard error == nil else {
        print(error)
        return
    }

    if (response) {
        dump(response)
    }
}
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **relationshipManagerUuid** | [**UUID**](.md) |  | 

### Return type

[**ClientRanking**](ClientRanking.md)

### Authorization

[cookieAuth](../README.md#cookieAuth), [jwtAuth](../README.md#jwtAuth), [tokenAuth](../README.md#tokenAuth)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **apiV2RelationshipManagerAnalyticsInflowsOutflowsRetrieve**
```swift
    open class func apiV2RelationshipManagerAnalyticsInflowsOutflowsRetrieve(relationshipManagerUuid: UUID, completion: @escaping (_ data: RelationshipManager?, _ error: Error?) -> Void)
```



### Example
```swift
// The following code samples are still beta. For any issue, please report via http://github.com/OpenAPITools/openapi-generator/issues/new
import OpenAPIClient

let relationshipManagerUuid = 987 // UUID | 

AnalyticsAPI.apiV2RelationshipManagerAnalyticsInflowsOutflowsRetrieve(relationshipManagerUuid: relationshipManagerUuid) { (response, error) in
    guard error == nil else {
        print(error)
        return
    }

    if (response) {
        dump(response)
    }
}
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **relationshipManagerUuid** | [**UUID**](.md) |  | 

### Return type

[**RelationshipManager**](RelationshipManager.md)

### Authorization

[cookieAuth](../README.md#cookieAuth), [jwtAuth](../README.md#jwtAuth), [tokenAuth](../README.md#tokenAuth)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **apiV2RelationshipManagerAnalyticsPortfolioRiskPerformanceRetrieve**
```swift
    open class func apiV2RelationshipManagerAnalyticsPortfolioRiskPerformanceRetrieve(relationshipManagerUuid: UUID, completion: @escaping (_ data: RelationshipManager?, _ error: Error?) -> Void)
```



### Example
```swift
// The following code samples are still beta. For any issue, please report via http://github.com/OpenAPITools/openapi-generator/issues/new
import OpenAPIClient

let relationshipManagerUuid = 987 // UUID | 

AnalyticsAPI.apiV2RelationshipManagerAnalyticsPortfolioRiskPerformanceRetrieve(relationshipManagerUuid: relationshipManagerUuid) { (response, error) in
    guard error == nil else {
        print(error)
        return
    }

    if (response) {
        dump(response)
    }
}
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **relationshipManagerUuid** | [**UUID**](.md) |  | 

### Return type

[**RelationshipManager**](RelationshipManager.md)

### Authorization

[cookieAuth](../README.md#cookieAuth), [jwtAuth](../README.md#jwtAuth), [tokenAuth](../README.md#tokenAuth)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **apiV2RelationshipManagerAnalyticsTotalActiveClientsRetrieve**
```swift
    open class func apiV2RelationshipManagerAnalyticsTotalActiveClientsRetrieve(relationshipManagerUuid: UUID, completion: @escaping (_ data: RelationshipManager?, _ error: Error?) -> Void)
```



### Example
```swift
// The following code samples are still beta. For any issue, please report via http://github.com/OpenAPITools/openapi-generator/issues/new
import OpenAPIClient

let relationshipManagerUuid = 987 // UUID | 

AnalyticsAPI.apiV2RelationshipManagerAnalyticsTotalActiveClientsRetrieve(relationshipManagerUuid: relationshipManagerUuid) { (response, error) in
    guard error == nil else {
        print(error)
        return
    }

    if (response) {
        dump(response)
    }
}
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **relationshipManagerUuid** | [**UUID**](.md) |  | 

### Return type

[**RelationshipManager**](RelationshipManager.md)

### Authorization

[cookieAuth](../README.md#cookieAuth), [jwtAuth](../README.md#jwtAuth), [tokenAuth](../README.md#tokenAuth)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

