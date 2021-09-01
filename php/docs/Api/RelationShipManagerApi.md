# OpenAPI\Client\RelationShipManagerApi

All URIs are relative to http://localhost.

Method | HTTP request | Description
------------- | ------------- | -------------
[**apiV2RelationshipManagerAnalyticsAllocationsByAssetRetrieve()**](RelationShipManagerApi.md#apiV2RelationshipManagerAnalyticsAllocationsByAssetRetrieve) | **GET** /api/v2/relationship-manager/{relationship_manager_uuid}/analytics/allocations-by-asset/ | 
[**apiV2RelationshipManagerAnalyticsAssetConcentrationRiskRetrieve()**](RelationShipManagerApi.md#apiV2RelationshipManagerAnalyticsAssetConcentrationRiskRetrieve) | **GET** /api/v2/relationship-manager/{relationship_manager_uuid}/analytics/asset-concentration-risk/ | 
[**apiV2RelationshipManagerAnalyticsAumEvolutionRetrieve()**](RelationShipManagerApi.md#apiV2RelationshipManagerAnalyticsAumEvolutionRetrieve) | **GET** /api/v2/relationship-manager/{relationship_manager_uuid}/analytics/aum-evolution/ | 
[**apiV2RelationshipManagerAnalyticsAumPortfolioRiskRetrieve()**](RelationShipManagerApi.md#apiV2RelationshipManagerAnalyticsAumPortfolioRiskRetrieve) | **GET** /api/v2/relationship-manager/{relationship_manager_uuid}/analytics/aum-portfolio-risk/ | 
[**apiV2RelationshipManagerAnalyticsAumRetrieve()**](RelationShipManagerApi.md#apiV2RelationshipManagerAnalyticsAumRetrieve) | **GET** /api/v2/relationship-manager/{relationship_manager_uuid}/analytics/aum/ | 
[**apiV2RelationshipManagerAnalyticsClientByRiskRetrieve()**](RelationShipManagerApi.md#apiV2RelationshipManagerAnalyticsClientByRiskRetrieve) | **GET** /api/v2/relationship-manager/{relationship_manager_uuid}/analytics/client-by-risk/ | 
[**apiV2RelationshipManagerAnalyticsClientByStatusRetrieve()**](RelationShipManagerApi.md#apiV2RelationshipManagerAnalyticsClientByStatusRetrieve) | **GET** /api/v2/relationship-manager/{relationship_manager_uuid}/analytics/client-by-status/ | 
[**apiV2RelationshipManagerAnalyticsClientRankingRetrieve()**](RelationShipManagerApi.md#apiV2RelationshipManagerAnalyticsClientRankingRetrieve) | **GET** /api/v2/relationship-manager/{relationship_manager_uuid}/analytics/client-ranking/ | 
[**apiV2RelationshipManagerAnalyticsInflowsOutflowsRetrieve()**](RelationShipManagerApi.md#apiV2RelationshipManagerAnalyticsInflowsOutflowsRetrieve) | **GET** /api/v2/relationship-manager/{relationship_manager_uuid}/analytics/inflows-outflows/ | 
[**apiV2RelationshipManagerAnalyticsPortfolioRiskPerformanceRetrieve()**](RelationShipManagerApi.md#apiV2RelationshipManagerAnalyticsPortfolioRiskPerformanceRetrieve) | **GET** /api/v2/relationship-manager/{relationship_manager_uuid}/analytics/portfolio-risk-performance/ | 
[**apiV2RelationshipManagerAnalyticsTotalActiveClientsRetrieve()**](RelationShipManagerApi.md#apiV2RelationshipManagerAnalyticsTotalActiveClientsRetrieve) | **GET** /api/v2/relationship-manager/{relationship_manager_uuid}/analytics/total-active-clients/ | 
[**apiV2RelationshipManagerMeRetrieve()**](RelationShipManagerApi.md#apiV2RelationshipManagerMeRetrieve) | **GET** /api/v2/relationship-manager/me/ | 
[**apiV2RelationshipManagerRetrieve()**](RelationShipManagerApi.md#apiV2RelationshipManagerRetrieve) | **GET** /api/v2/relationship-manager/{uuid}/ | 


## `apiV2RelationshipManagerAnalyticsAllocationsByAssetRetrieve()`

```php
apiV2RelationshipManagerAnalyticsAllocationsByAssetRetrieve($relationship_manager_uuid): \OpenAPI\Client\Model\AllocationByAsset
```



### Example

```php
<?php
require_once(__DIR__ . '/vendor/autoload.php');


// Configure API key authorization: cookieAuth
$config = OpenAPI\Client\Configuration::getDefaultConfiguration()->setApiKey('Session', 'YOUR_API_KEY');
// Uncomment below to setup prefix (e.g. Bearer) for API key, if needed
// $config = OpenAPI\Client\Configuration::getDefaultConfiguration()->setApiKeyPrefix('Session', 'Bearer');

// Configure Bearer (JWT) authorization: jwtAuth
$config = OpenAPI\Client\Configuration::getDefaultConfiguration()->setAccessToken('YOUR_ACCESS_TOKEN');

// Configure API key authorization: tokenAuth
$config = OpenAPI\Client\Configuration::getDefaultConfiguration()->setApiKey('Authorization', 'YOUR_API_KEY');
// Uncomment below to setup prefix (e.g. Bearer) for API key, if needed
// $config = OpenAPI\Client\Configuration::getDefaultConfiguration()->setApiKeyPrefix('Authorization', 'Bearer');


$apiInstance = new OpenAPI\Client\Api\RelationShipManagerApi(
    // If you want use custom http client, pass your client which implements `GuzzleHttp\ClientInterface`.
    // This is optional, `GuzzleHttp\Client` will be used as default.
    new GuzzleHttp\Client(),
    $config
);
$relationship_manager_uuid = 'relationship_manager_uuid_example'; // string

try {
    $result = $apiInstance->apiV2RelationshipManagerAnalyticsAllocationsByAssetRetrieve($relationship_manager_uuid);
    print_r($result);
} catch (Exception $e) {
    echo 'Exception when calling RelationShipManagerApi->apiV2RelationshipManagerAnalyticsAllocationsByAssetRetrieve: ', $e->getMessage(), PHP_EOL;
}
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **relationship_manager_uuid** | [**string**](../Model/.md)|  |

### Return type

[**\OpenAPI\Client\Model\AllocationByAsset**](../Model/AllocationByAsset.md)

### Authorization

[cookieAuth](../../README.md#cookieAuth), [jwtAuth](../../README.md#jwtAuth), [tokenAuth](../../README.md#tokenAuth)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: `application/json`

[[Back to top]](#) [[Back to API list]](../../README.md#endpoints)
[[Back to Model list]](../../README.md#models)
[[Back to README]](../../README.md)

## `apiV2RelationshipManagerAnalyticsAssetConcentrationRiskRetrieve()`

```php
apiV2RelationshipManagerAnalyticsAssetConcentrationRiskRetrieve($relationship_manager_uuid): \OpenAPI\Client\Model\AssetConcentrationRisk
```



### Example

```php
<?php
require_once(__DIR__ . '/vendor/autoload.php');


// Configure API key authorization: cookieAuth
$config = OpenAPI\Client\Configuration::getDefaultConfiguration()->setApiKey('Session', 'YOUR_API_KEY');
// Uncomment below to setup prefix (e.g. Bearer) for API key, if needed
// $config = OpenAPI\Client\Configuration::getDefaultConfiguration()->setApiKeyPrefix('Session', 'Bearer');

// Configure Bearer (JWT) authorization: jwtAuth
$config = OpenAPI\Client\Configuration::getDefaultConfiguration()->setAccessToken('YOUR_ACCESS_TOKEN');

// Configure API key authorization: tokenAuth
$config = OpenAPI\Client\Configuration::getDefaultConfiguration()->setApiKey('Authorization', 'YOUR_API_KEY');
// Uncomment below to setup prefix (e.g. Bearer) for API key, if needed
// $config = OpenAPI\Client\Configuration::getDefaultConfiguration()->setApiKeyPrefix('Authorization', 'Bearer');


$apiInstance = new OpenAPI\Client\Api\RelationShipManagerApi(
    // If you want use custom http client, pass your client which implements `GuzzleHttp\ClientInterface`.
    // This is optional, `GuzzleHttp\Client` will be used as default.
    new GuzzleHttp\Client(),
    $config
);
$relationship_manager_uuid = 'relationship_manager_uuid_example'; // string

try {
    $result = $apiInstance->apiV2RelationshipManagerAnalyticsAssetConcentrationRiskRetrieve($relationship_manager_uuid);
    print_r($result);
} catch (Exception $e) {
    echo 'Exception when calling RelationShipManagerApi->apiV2RelationshipManagerAnalyticsAssetConcentrationRiskRetrieve: ', $e->getMessage(), PHP_EOL;
}
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **relationship_manager_uuid** | [**string**](../Model/.md)|  |

### Return type

[**\OpenAPI\Client\Model\AssetConcentrationRisk**](../Model/AssetConcentrationRisk.md)

### Authorization

[cookieAuth](../../README.md#cookieAuth), [jwtAuth](../../README.md#jwtAuth), [tokenAuth](../../README.md#tokenAuth)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: `application/json`

[[Back to top]](#) [[Back to API list]](../../README.md#endpoints)
[[Back to Model list]](../../README.md#models)
[[Back to README]](../../README.md)

## `apiV2RelationshipManagerAnalyticsAumEvolutionRetrieve()`

```php
apiV2RelationshipManagerAnalyticsAumEvolutionRetrieve($relationship_manager_uuid): \OpenAPI\Client\Model\AUMEvoluation
```



### Example

```php
<?php
require_once(__DIR__ . '/vendor/autoload.php');


// Configure API key authorization: cookieAuth
$config = OpenAPI\Client\Configuration::getDefaultConfiguration()->setApiKey('Session', 'YOUR_API_KEY');
// Uncomment below to setup prefix (e.g. Bearer) for API key, if needed
// $config = OpenAPI\Client\Configuration::getDefaultConfiguration()->setApiKeyPrefix('Session', 'Bearer');

// Configure Bearer (JWT) authorization: jwtAuth
$config = OpenAPI\Client\Configuration::getDefaultConfiguration()->setAccessToken('YOUR_ACCESS_TOKEN');

// Configure API key authorization: tokenAuth
$config = OpenAPI\Client\Configuration::getDefaultConfiguration()->setApiKey('Authorization', 'YOUR_API_KEY');
// Uncomment below to setup prefix (e.g. Bearer) for API key, if needed
// $config = OpenAPI\Client\Configuration::getDefaultConfiguration()->setApiKeyPrefix('Authorization', 'Bearer');


$apiInstance = new OpenAPI\Client\Api\RelationShipManagerApi(
    // If you want use custom http client, pass your client which implements `GuzzleHttp\ClientInterface`.
    // This is optional, `GuzzleHttp\Client` will be used as default.
    new GuzzleHttp\Client(),
    $config
);
$relationship_manager_uuid = 'relationship_manager_uuid_example'; // string

try {
    $result = $apiInstance->apiV2RelationshipManagerAnalyticsAumEvolutionRetrieve($relationship_manager_uuid);
    print_r($result);
} catch (Exception $e) {
    echo 'Exception when calling RelationShipManagerApi->apiV2RelationshipManagerAnalyticsAumEvolutionRetrieve: ', $e->getMessage(), PHP_EOL;
}
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **relationship_manager_uuid** | [**string**](../Model/.md)|  |

### Return type

[**\OpenAPI\Client\Model\AUMEvoluation**](../Model/AUMEvoluation.md)

### Authorization

[cookieAuth](../../README.md#cookieAuth), [jwtAuth](../../README.md#jwtAuth), [tokenAuth](../../README.md#tokenAuth)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: `application/json`

[[Back to top]](#) [[Back to API list]](../../README.md#endpoints)
[[Back to Model list]](../../README.md#models)
[[Back to README]](../../README.md)

## `apiV2RelationshipManagerAnalyticsAumPortfolioRiskRetrieve()`

```php
apiV2RelationshipManagerAnalyticsAumPortfolioRiskRetrieve($relationship_manager_uuid): \OpenAPI\Client\Model\AUMPortfolioRisk
```



### Example

```php
<?php
require_once(__DIR__ . '/vendor/autoload.php');


// Configure API key authorization: cookieAuth
$config = OpenAPI\Client\Configuration::getDefaultConfiguration()->setApiKey('Session', 'YOUR_API_KEY');
// Uncomment below to setup prefix (e.g. Bearer) for API key, if needed
// $config = OpenAPI\Client\Configuration::getDefaultConfiguration()->setApiKeyPrefix('Session', 'Bearer');

// Configure Bearer (JWT) authorization: jwtAuth
$config = OpenAPI\Client\Configuration::getDefaultConfiguration()->setAccessToken('YOUR_ACCESS_TOKEN');

// Configure API key authorization: tokenAuth
$config = OpenAPI\Client\Configuration::getDefaultConfiguration()->setApiKey('Authorization', 'YOUR_API_KEY');
// Uncomment below to setup prefix (e.g. Bearer) for API key, if needed
// $config = OpenAPI\Client\Configuration::getDefaultConfiguration()->setApiKeyPrefix('Authorization', 'Bearer');


$apiInstance = new OpenAPI\Client\Api\RelationShipManagerApi(
    // If you want use custom http client, pass your client which implements `GuzzleHttp\ClientInterface`.
    // This is optional, `GuzzleHttp\Client` will be used as default.
    new GuzzleHttp\Client(),
    $config
);
$relationship_manager_uuid = 'relationship_manager_uuid_example'; // string

try {
    $result = $apiInstance->apiV2RelationshipManagerAnalyticsAumPortfolioRiskRetrieve($relationship_manager_uuid);
    print_r($result);
} catch (Exception $e) {
    echo 'Exception when calling RelationShipManagerApi->apiV2RelationshipManagerAnalyticsAumPortfolioRiskRetrieve: ', $e->getMessage(), PHP_EOL;
}
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **relationship_manager_uuid** | [**string**](../Model/.md)|  |

### Return type

[**\OpenAPI\Client\Model\AUMPortfolioRisk**](../Model/AUMPortfolioRisk.md)

### Authorization

[cookieAuth](../../README.md#cookieAuth), [jwtAuth](../../README.md#jwtAuth), [tokenAuth](../../README.md#tokenAuth)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: `application/json`

[[Back to top]](#) [[Back to API list]](../../README.md#endpoints)
[[Back to Model list]](../../README.md#models)
[[Back to README]](../../README.md)

## `apiV2RelationshipManagerAnalyticsAumRetrieve()`

```php
apiV2RelationshipManagerAnalyticsAumRetrieve($relationship_manager_uuid): \OpenAPI\Client\Model\RelationshipManager
```



### Example

```php
<?php
require_once(__DIR__ . '/vendor/autoload.php');


// Configure API key authorization: cookieAuth
$config = OpenAPI\Client\Configuration::getDefaultConfiguration()->setApiKey('Session', 'YOUR_API_KEY');
// Uncomment below to setup prefix (e.g. Bearer) for API key, if needed
// $config = OpenAPI\Client\Configuration::getDefaultConfiguration()->setApiKeyPrefix('Session', 'Bearer');

// Configure Bearer (JWT) authorization: jwtAuth
$config = OpenAPI\Client\Configuration::getDefaultConfiguration()->setAccessToken('YOUR_ACCESS_TOKEN');

// Configure API key authorization: tokenAuth
$config = OpenAPI\Client\Configuration::getDefaultConfiguration()->setApiKey('Authorization', 'YOUR_API_KEY');
// Uncomment below to setup prefix (e.g. Bearer) for API key, if needed
// $config = OpenAPI\Client\Configuration::getDefaultConfiguration()->setApiKeyPrefix('Authorization', 'Bearer');


$apiInstance = new OpenAPI\Client\Api\RelationShipManagerApi(
    // If you want use custom http client, pass your client which implements `GuzzleHttp\ClientInterface`.
    // This is optional, `GuzzleHttp\Client` will be used as default.
    new GuzzleHttp\Client(),
    $config
);
$relationship_manager_uuid = 'relationship_manager_uuid_example'; // string

try {
    $result = $apiInstance->apiV2RelationshipManagerAnalyticsAumRetrieve($relationship_manager_uuid);
    print_r($result);
} catch (Exception $e) {
    echo 'Exception when calling RelationShipManagerApi->apiV2RelationshipManagerAnalyticsAumRetrieve: ', $e->getMessage(), PHP_EOL;
}
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **relationship_manager_uuid** | [**string**](../Model/.md)|  |

### Return type

[**\OpenAPI\Client\Model\RelationshipManager**](../Model/RelationshipManager.md)

### Authorization

[cookieAuth](../../README.md#cookieAuth), [jwtAuth](../../README.md#jwtAuth), [tokenAuth](../../README.md#tokenAuth)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: `application/json`

[[Back to top]](#) [[Back to API list]](../../README.md#endpoints)
[[Back to Model list]](../../README.md#models)
[[Back to README]](../../README.md)

## `apiV2RelationshipManagerAnalyticsClientByRiskRetrieve()`

```php
apiV2RelationshipManagerAnalyticsClientByRiskRetrieve($relationship_manager_uuid): \OpenAPI\Client\Model\RelationshipManager
```



### Example

```php
<?php
require_once(__DIR__ . '/vendor/autoload.php');


// Configure API key authorization: cookieAuth
$config = OpenAPI\Client\Configuration::getDefaultConfiguration()->setApiKey('Session', 'YOUR_API_KEY');
// Uncomment below to setup prefix (e.g. Bearer) for API key, if needed
// $config = OpenAPI\Client\Configuration::getDefaultConfiguration()->setApiKeyPrefix('Session', 'Bearer');

// Configure Bearer (JWT) authorization: jwtAuth
$config = OpenAPI\Client\Configuration::getDefaultConfiguration()->setAccessToken('YOUR_ACCESS_TOKEN');

// Configure API key authorization: tokenAuth
$config = OpenAPI\Client\Configuration::getDefaultConfiguration()->setApiKey('Authorization', 'YOUR_API_KEY');
// Uncomment below to setup prefix (e.g. Bearer) for API key, if needed
// $config = OpenAPI\Client\Configuration::getDefaultConfiguration()->setApiKeyPrefix('Authorization', 'Bearer');


$apiInstance = new OpenAPI\Client\Api\RelationShipManagerApi(
    // If you want use custom http client, pass your client which implements `GuzzleHttp\ClientInterface`.
    // This is optional, `GuzzleHttp\Client` will be used as default.
    new GuzzleHttp\Client(),
    $config
);
$relationship_manager_uuid = 'relationship_manager_uuid_example'; // string

try {
    $result = $apiInstance->apiV2RelationshipManagerAnalyticsClientByRiskRetrieve($relationship_manager_uuid);
    print_r($result);
} catch (Exception $e) {
    echo 'Exception when calling RelationShipManagerApi->apiV2RelationshipManagerAnalyticsClientByRiskRetrieve: ', $e->getMessage(), PHP_EOL;
}
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **relationship_manager_uuid** | [**string**](../Model/.md)|  |

### Return type

[**\OpenAPI\Client\Model\RelationshipManager**](../Model/RelationshipManager.md)

### Authorization

[cookieAuth](../../README.md#cookieAuth), [jwtAuth](../../README.md#jwtAuth), [tokenAuth](../../README.md#tokenAuth)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: `application/json`

[[Back to top]](#) [[Back to API list]](../../README.md#endpoints)
[[Back to Model list]](../../README.md#models)
[[Back to README]](../../README.md)

## `apiV2RelationshipManagerAnalyticsClientByStatusRetrieve()`

```php
apiV2RelationshipManagerAnalyticsClientByStatusRetrieve($relationship_manager_uuid): \OpenAPI\Client\Model\RelationshipManager
```



### Example

```php
<?php
require_once(__DIR__ . '/vendor/autoload.php');


// Configure API key authorization: cookieAuth
$config = OpenAPI\Client\Configuration::getDefaultConfiguration()->setApiKey('Session', 'YOUR_API_KEY');
// Uncomment below to setup prefix (e.g. Bearer) for API key, if needed
// $config = OpenAPI\Client\Configuration::getDefaultConfiguration()->setApiKeyPrefix('Session', 'Bearer');

// Configure Bearer (JWT) authorization: jwtAuth
$config = OpenAPI\Client\Configuration::getDefaultConfiguration()->setAccessToken('YOUR_ACCESS_TOKEN');

// Configure API key authorization: tokenAuth
$config = OpenAPI\Client\Configuration::getDefaultConfiguration()->setApiKey('Authorization', 'YOUR_API_KEY');
// Uncomment below to setup prefix (e.g. Bearer) for API key, if needed
// $config = OpenAPI\Client\Configuration::getDefaultConfiguration()->setApiKeyPrefix('Authorization', 'Bearer');


$apiInstance = new OpenAPI\Client\Api\RelationShipManagerApi(
    // If you want use custom http client, pass your client which implements `GuzzleHttp\ClientInterface`.
    // This is optional, `GuzzleHttp\Client` will be used as default.
    new GuzzleHttp\Client(),
    $config
);
$relationship_manager_uuid = 'relationship_manager_uuid_example'; // string

try {
    $result = $apiInstance->apiV2RelationshipManagerAnalyticsClientByStatusRetrieve($relationship_manager_uuid);
    print_r($result);
} catch (Exception $e) {
    echo 'Exception when calling RelationShipManagerApi->apiV2RelationshipManagerAnalyticsClientByStatusRetrieve: ', $e->getMessage(), PHP_EOL;
}
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **relationship_manager_uuid** | [**string**](../Model/.md)|  |

### Return type

[**\OpenAPI\Client\Model\RelationshipManager**](../Model/RelationshipManager.md)

### Authorization

[cookieAuth](../../README.md#cookieAuth), [jwtAuth](../../README.md#jwtAuth), [tokenAuth](../../README.md#tokenAuth)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: `application/json`

[[Back to top]](#) [[Back to API list]](../../README.md#endpoints)
[[Back to Model list]](../../README.md#models)
[[Back to README]](../../README.md)

## `apiV2RelationshipManagerAnalyticsClientRankingRetrieve()`

```php
apiV2RelationshipManagerAnalyticsClientRankingRetrieve($relationship_manager_uuid): \OpenAPI\Client\Model\ClientRanking
```



### Example

```php
<?php
require_once(__DIR__ . '/vendor/autoload.php');


// Configure API key authorization: cookieAuth
$config = OpenAPI\Client\Configuration::getDefaultConfiguration()->setApiKey('Session', 'YOUR_API_KEY');
// Uncomment below to setup prefix (e.g. Bearer) for API key, if needed
// $config = OpenAPI\Client\Configuration::getDefaultConfiguration()->setApiKeyPrefix('Session', 'Bearer');

// Configure Bearer (JWT) authorization: jwtAuth
$config = OpenAPI\Client\Configuration::getDefaultConfiguration()->setAccessToken('YOUR_ACCESS_TOKEN');

// Configure API key authorization: tokenAuth
$config = OpenAPI\Client\Configuration::getDefaultConfiguration()->setApiKey('Authorization', 'YOUR_API_KEY');
// Uncomment below to setup prefix (e.g. Bearer) for API key, if needed
// $config = OpenAPI\Client\Configuration::getDefaultConfiguration()->setApiKeyPrefix('Authorization', 'Bearer');


$apiInstance = new OpenAPI\Client\Api\RelationShipManagerApi(
    // If you want use custom http client, pass your client which implements `GuzzleHttp\ClientInterface`.
    // This is optional, `GuzzleHttp\Client` will be used as default.
    new GuzzleHttp\Client(),
    $config
);
$relationship_manager_uuid = 'relationship_manager_uuid_example'; // string

try {
    $result = $apiInstance->apiV2RelationshipManagerAnalyticsClientRankingRetrieve($relationship_manager_uuid);
    print_r($result);
} catch (Exception $e) {
    echo 'Exception when calling RelationShipManagerApi->apiV2RelationshipManagerAnalyticsClientRankingRetrieve: ', $e->getMessage(), PHP_EOL;
}
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **relationship_manager_uuid** | [**string**](../Model/.md)|  |

### Return type

[**\OpenAPI\Client\Model\ClientRanking**](../Model/ClientRanking.md)

### Authorization

[cookieAuth](../../README.md#cookieAuth), [jwtAuth](../../README.md#jwtAuth), [tokenAuth](../../README.md#tokenAuth)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: `application/json`

[[Back to top]](#) [[Back to API list]](../../README.md#endpoints)
[[Back to Model list]](../../README.md#models)
[[Back to README]](../../README.md)

## `apiV2RelationshipManagerAnalyticsInflowsOutflowsRetrieve()`

```php
apiV2RelationshipManagerAnalyticsInflowsOutflowsRetrieve($relationship_manager_uuid): \OpenAPI\Client\Model\RelationshipManager
```



### Example

```php
<?php
require_once(__DIR__ . '/vendor/autoload.php');


// Configure API key authorization: cookieAuth
$config = OpenAPI\Client\Configuration::getDefaultConfiguration()->setApiKey('Session', 'YOUR_API_KEY');
// Uncomment below to setup prefix (e.g. Bearer) for API key, if needed
// $config = OpenAPI\Client\Configuration::getDefaultConfiguration()->setApiKeyPrefix('Session', 'Bearer');

// Configure Bearer (JWT) authorization: jwtAuth
$config = OpenAPI\Client\Configuration::getDefaultConfiguration()->setAccessToken('YOUR_ACCESS_TOKEN');

// Configure API key authorization: tokenAuth
$config = OpenAPI\Client\Configuration::getDefaultConfiguration()->setApiKey('Authorization', 'YOUR_API_KEY');
// Uncomment below to setup prefix (e.g. Bearer) for API key, if needed
// $config = OpenAPI\Client\Configuration::getDefaultConfiguration()->setApiKeyPrefix('Authorization', 'Bearer');


$apiInstance = new OpenAPI\Client\Api\RelationShipManagerApi(
    // If you want use custom http client, pass your client which implements `GuzzleHttp\ClientInterface`.
    // This is optional, `GuzzleHttp\Client` will be used as default.
    new GuzzleHttp\Client(),
    $config
);
$relationship_manager_uuid = 'relationship_manager_uuid_example'; // string

try {
    $result = $apiInstance->apiV2RelationshipManagerAnalyticsInflowsOutflowsRetrieve($relationship_manager_uuid);
    print_r($result);
} catch (Exception $e) {
    echo 'Exception when calling RelationShipManagerApi->apiV2RelationshipManagerAnalyticsInflowsOutflowsRetrieve: ', $e->getMessage(), PHP_EOL;
}
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **relationship_manager_uuid** | [**string**](../Model/.md)|  |

### Return type

[**\OpenAPI\Client\Model\RelationshipManager**](../Model/RelationshipManager.md)

### Authorization

[cookieAuth](../../README.md#cookieAuth), [jwtAuth](../../README.md#jwtAuth), [tokenAuth](../../README.md#tokenAuth)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: `application/json`

[[Back to top]](#) [[Back to API list]](../../README.md#endpoints)
[[Back to Model list]](../../README.md#models)
[[Back to README]](../../README.md)

## `apiV2RelationshipManagerAnalyticsPortfolioRiskPerformanceRetrieve()`

```php
apiV2RelationshipManagerAnalyticsPortfolioRiskPerformanceRetrieve($relationship_manager_uuid): \OpenAPI\Client\Model\RelationshipManager
```



### Example

```php
<?php
require_once(__DIR__ . '/vendor/autoload.php');


// Configure API key authorization: cookieAuth
$config = OpenAPI\Client\Configuration::getDefaultConfiguration()->setApiKey('Session', 'YOUR_API_KEY');
// Uncomment below to setup prefix (e.g. Bearer) for API key, if needed
// $config = OpenAPI\Client\Configuration::getDefaultConfiguration()->setApiKeyPrefix('Session', 'Bearer');

// Configure Bearer (JWT) authorization: jwtAuth
$config = OpenAPI\Client\Configuration::getDefaultConfiguration()->setAccessToken('YOUR_ACCESS_TOKEN');

// Configure API key authorization: tokenAuth
$config = OpenAPI\Client\Configuration::getDefaultConfiguration()->setApiKey('Authorization', 'YOUR_API_KEY');
// Uncomment below to setup prefix (e.g. Bearer) for API key, if needed
// $config = OpenAPI\Client\Configuration::getDefaultConfiguration()->setApiKeyPrefix('Authorization', 'Bearer');


$apiInstance = new OpenAPI\Client\Api\RelationShipManagerApi(
    // If you want use custom http client, pass your client which implements `GuzzleHttp\ClientInterface`.
    // This is optional, `GuzzleHttp\Client` will be used as default.
    new GuzzleHttp\Client(),
    $config
);
$relationship_manager_uuid = 'relationship_manager_uuid_example'; // string

try {
    $result = $apiInstance->apiV2RelationshipManagerAnalyticsPortfolioRiskPerformanceRetrieve($relationship_manager_uuid);
    print_r($result);
} catch (Exception $e) {
    echo 'Exception when calling RelationShipManagerApi->apiV2RelationshipManagerAnalyticsPortfolioRiskPerformanceRetrieve: ', $e->getMessage(), PHP_EOL;
}
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **relationship_manager_uuid** | [**string**](../Model/.md)|  |

### Return type

[**\OpenAPI\Client\Model\RelationshipManager**](../Model/RelationshipManager.md)

### Authorization

[cookieAuth](../../README.md#cookieAuth), [jwtAuth](../../README.md#jwtAuth), [tokenAuth](../../README.md#tokenAuth)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: `application/json`

[[Back to top]](#) [[Back to API list]](../../README.md#endpoints)
[[Back to Model list]](../../README.md#models)
[[Back to README]](../../README.md)

## `apiV2RelationshipManagerAnalyticsTotalActiveClientsRetrieve()`

```php
apiV2RelationshipManagerAnalyticsTotalActiveClientsRetrieve($relationship_manager_uuid): \OpenAPI\Client\Model\RelationshipManager
```



### Example

```php
<?php
require_once(__DIR__ . '/vendor/autoload.php');


// Configure API key authorization: cookieAuth
$config = OpenAPI\Client\Configuration::getDefaultConfiguration()->setApiKey('Session', 'YOUR_API_KEY');
// Uncomment below to setup prefix (e.g. Bearer) for API key, if needed
// $config = OpenAPI\Client\Configuration::getDefaultConfiguration()->setApiKeyPrefix('Session', 'Bearer');

// Configure Bearer (JWT) authorization: jwtAuth
$config = OpenAPI\Client\Configuration::getDefaultConfiguration()->setAccessToken('YOUR_ACCESS_TOKEN');

// Configure API key authorization: tokenAuth
$config = OpenAPI\Client\Configuration::getDefaultConfiguration()->setApiKey('Authorization', 'YOUR_API_KEY');
// Uncomment below to setup prefix (e.g. Bearer) for API key, if needed
// $config = OpenAPI\Client\Configuration::getDefaultConfiguration()->setApiKeyPrefix('Authorization', 'Bearer');


$apiInstance = new OpenAPI\Client\Api\RelationShipManagerApi(
    // If you want use custom http client, pass your client which implements `GuzzleHttp\ClientInterface`.
    // This is optional, `GuzzleHttp\Client` will be used as default.
    new GuzzleHttp\Client(),
    $config
);
$relationship_manager_uuid = 'relationship_manager_uuid_example'; // string

try {
    $result = $apiInstance->apiV2RelationshipManagerAnalyticsTotalActiveClientsRetrieve($relationship_manager_uuid);
    print_r($result);
} catch (Exception $e) {
    echo 'Exception when calling RelationShipManagerApi->apiV2RelationshipManagerAnalyticsTotalActiveClientsRetrieve: ', $e->getMessage(), PHP_EOL;
}
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **relationship_manager_uuid** | [**string**](../Model/.md)|  |

### Return type

[**\OpenAPI\Client\Model\RelationshipManager**](../Model/RelationshipManager.md)

### Authorization

[cookieAuth](../../README.md#cookieAuth), [jwtAuth](../../README.md#jwtAuth), [tokenAuth](../../README.md#tokenAuth)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: `application/json`

[[Back to top]](#) [[Back to API list]](../../README.md#endpoints)
[[Back to Model list]](../../README.md#models)
[[Back to README]](../../README.md)

## `apiV2RelationshipManagerMeRetrieve()`

```php
apiV2RelationshipManagerMeRetrieve(): \OpenAPI\Client\Model\RelationshipManager
```



### Example

```php
<?php
require_once(__DIR__ . '/vendor/autoload.php');


// Configure API key authorization: cookieAuth
$config = OpenAPI\Client\Configuration::getDefaultConfiguration()->setApiKey('Session', 'YOUR_API_KEY');
// Uncomment below to setup prefix (e.g. Bearer) for API key, if needed
// $config = OpenAPI\Client\Configuration::getDefaultConfiguration()->setApiKeyPrefix('Session', 'Bearer');

// Configure Bearer (JWT) authorization: jwtAuth
$config = OpenAPI\Client\Configuration::getDefaultConfiguration()->setAccessToken('YOUR_ACCESS_TOKEN');

// Configure API key authorization: tokenAuth
$config = OpenAPI\Client\Configuration::getDefaultConfiguration()->setApiKey('Authorization', 'YOUR_API_KEY');
// Uncomment below to setup prefix (e.g. Bearer) for API key, if needed
// $config = OpenAPI\Client\Configuration::getDefaultConfiguration()->setApiKeyPrefix('Authorization', 'Bearer');


$apiInstance = new OpenAPI\Client\Api\RelationShipManagerApi(
    // If you want use custom http client, pass your client which implements `GuzzleHttp\ClientInterface`.
    // This is optional, `GuzzleHttp\Client` will be used as default.
    new GuzzleHttp\Client(),
    $config
);

try {
    $result = $apiInstance->apiV2RelationshipManagerMeRetrieve();
    print_r($result);
} catch (Exception $e) {
    echo 'Exception when calling RelationShipManagerApi->apiV2RelationshipManagerMeRetrieve: ', $e->getMessage(), PHP_EOL;
}
```

### Parameters

This endpoint does not need any parameter.

### Return type

[**\OpenAPI\Client\Model\RelationshipManager**](../Model/RelationshipManager.md)

### Authorization

[cookieAuth](../../README.md#cookieAuth), [jwtAuth](../../README.md#jwtAuth), [tokenAuth](../../README.md#tokenAuth)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: `application/json`

[[Back to top]](#) [[Back to API list]](../../README.md#endpoints)
[[Back to Model list]](../../README.md#models)
[[Back to README]](../../README.md)

## `apiV2RelationshipManagerRetrieve()`

```php
apiV2RelationshipManagerRetrieve($uuid): \OpenAPI\Client\Model\RelationshipManager
```



### Example

```php
<?php
require_once(__DIR__ . '/vendor/autoload.php');


// Configure API key authorization: cookieAuth
$config = OpenAPI\Client\Configuration::getDefaultConfiguration()->setApiKey('Session', 'YOUR_API_KEY');
// Uncomment below to setup prefix (e.g. Bearer) for API key, if needed
// $config = OpenAPI\Client\Configuration::getDefaultConfiguration()->setApiKeyPrefix('Session', 'Bearer');

// Configure Bearer (JWT) authorization: jwtAuth
$config = OpenAPI\Client\Configuration::getDefaultConfiguration()->setAccessToken('YOUR_ACCESS_TOKEN');

// Configure API key authorization: tokenAuth
$config = OpenAPI\Client\Configuration::getDefaultConfiguration()->setApiKey('Authorization', 'YOUR_API_KEY');
// Uncomment below to setup prefix (e.g. Bearer) for API key, if needed
// $config = OpenAPI\Client\Configuration::getDefaultConfiguration()->setApiKeyPrefix('Authorization', 'Bearer');


$apiInstance = new OpenAPI\Client\Api\RelationShipManagerApi(
    // If you want use custom http client, pass your client which implements `GuzzleHttp\ClientInterface`.
    // This is optional, `GuzzleHttp\Client` will be used as default.
    new GuzzleHttp\Client(),
    $config
);
$uuid = 'uuid_example'; // string

try {
    $result = $apiInstance->apiV2RelationshipManagerRetrieve($uuid);
    print_r($result);
} catch (Exception $e) {
    echo 'Exception when calling RelationShipManagerApi->apiV2RelationshipManagerRetrieve: ', $e->getMessage(), PHP_EOL;
}
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **uuid** | [**string**](../Model/.md)|  |

### Return type

[**\OpenAPI\Client\Model\RelationshipManager**](../Model/RelationshipManager.md)

### Authorization

[cookieAuth](../../README.md#cookieAuth), [jwtAuth](../../README.md#jwtAuth), [tokenAuth](../../README.md#tokenAuth)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: `application/json`

[[Back to top]](#) [[Back to API list]](../../README.md#endpoints)
[[Back to Model list]](../../README.md#models)
[[Back to README]](../../README.md)
