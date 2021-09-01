# OpenAPI\Client\TaxInformationApi

All URIs are relative to http://localhost.

Method | HTTP request | Description
------------- | ------------- | -------------
[**clientTaxInformationCreate()**](TaxInformationApi.md#clientTaxInformationCreate) | **POST** /api/v2/clients/{client_uuid}/tax-informations/ | 
[**clientTaxInformationDelete()**](TaxInformationApi.md#clientTaxInformationDelete) | **DELETE** /api/v2/clients/{client_uuid}/tax-informations/{uuid}/ | 
[**clientTaxInformationList()**](TaxInformationApi.md#clientTaxInformationList) | **GET** /api/v2/clients/{client_uuid}/tax-informations/ | 
[**clientTaxInformationPartialUpdate()**](TaxInformationApi.md#clientTaxInformationPartialUpdate) | **PATCH** /api/v2/clients/{client_uuid}/tax-informations/{uuid}/ | 
[**clientTaxInformationRetrieve()**](TaxInformationApi.md#clientTaxInformationRetrieve) | **GET** /api/v2/clients/{client_uuid}/tax-informations/{uuid}/ | 
[**clientTaxInformationUpdate()**](TaxInformationApi.md#clientTaxInformationUpdate) | **PUT** /api/v2/clients/{client_uuid}/tax-informations/{uuid}/ | 


## `clientTaxInformationCreate()`

```php
clientTaxInformationCreate($client_uuid, $tax_information_create_update): \OpenAPI\Client\Model\TaxInformationCreateUpdate
```



Create a tax inforation for a client

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


$apiInstance = new OpenAPI\Client\Api\TaxInformationApi(
    // If you want use custom http client, pass your client which implements `GuzzleHttp\ClientInterface`.
    // This is optional, `GuzzleHttp\Client` will be used as default.
    new GuzzleHttp\Client(),
    $config
);
$client_uuid = 'client_uuid_example'; // string
$tax_information_create_update = new \OpenAPI\Client\Model\TaxInformationCreateUpdate(); // \OpenAPI\Client\Model\TaxInformationCreateUpdate

try {
    $result = $apiInstance->clientTaxInformationCreate($client_uuid, $tax_information_create_update);
    print_r($result);
} catch (Exception $e) {
    echo 'Exception when calling TaxInformationApi->clientTaxInformationCreate: ', $e->getMessage(), PHP_EOL;
}
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **client_uuid** | [**string**](../Model/.md)|  |
 **tax_information_create_update** | [**\OpenAPI\Client\Model\TaxInformationCreateUpdate**](../Model/TaxInformationCreateUpdate.md)|  |

### Return type

[**\OpenAPI\Client\Model\TaxInformationCreateUpdate**](../Model/TaxInformationCreateUpdate.md)

### Authorization

[cookieAuth](../../README.md#cookieAuth), [jwtAuth](../../README.md#jwtAuth), [tokenAuth](../../README.md#tokenAuth)

### HTTP request headers

- **Content-Type**: `application/json`, `application/x-www-form-urlencoded`, `multipart/form-data`
- **Accept**: `application/json`

[[Back to top]](#) [[Back to API list]](../../README.md#endpoints)
[[Back to Model list]](../../README.md#models)
[[Back to README]](../../README.md)

## `clientTaxInformationDelete()`

```php
clientTaxInformationDelete($client_uuid, $uuid)
```



Delete a client tax inforation

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


$apiInstance = new OpenAPI\Client\Api\TaxInformationApi(
    // If you want use custom http client, pass your client which implements `GuzzleHttp\ClientInterface`.
    // This is optional, `GuzzleHttp\Client` will be used as default.
    new GuzzleHttp\Client(),
    $config
);
$client_uuid = 'client_uuid_example'; // string
$uuid = 'uuid_example'; // string

try {
    $apiInstance->clientTaxInformationDelete($client_uuid, $uuid);
} catch (Exception $e) {
    echo 'Exception when calling TaxInformationApi->clientTaxInformationDelete: ', $e->getMessage(), PHP_EOL;
}
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **client_uuid** | [**string**](../Model/.md)|  |
 **uuid** | [**string**](../Model/.md)|  |

### Return type

void (empty response body)

### Authorization

[cookieAuth](../../README.md#cookieAuth), [jwtAuth](../../README.md#jwtAuth), [tokenAuth](../../README.md#tokenAuth)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: Not defined

[[Back to top]](#) [[Back to API list]](../../README.md#endpoints)
[[Back to Model list]](../../README.md#models)
[[Back to README]](../../README.md)

## `clientTaxInformationList()`

```php
clientTaxInformationList($client_uuid, $limit, $offset): \OpenAPI\Client\Model\PaginatedTaxInformationListList
```



List tax information for a client

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


$apiInstance = new OpenAPI\Client\Api\TaxInformationApi(
    // If you want use custom http client, pass your client which implements `GuzzleHttp\ClientInterface`.
    // This is optional, `GuzzleHttp\Client` will be used as default.
    new GuzzleHttp\Client(),
    $config
);
$client_uuid = 'client_uuid_example'; // string
$limit = 56; // int | Number of results to return per page.
$offset = 56; // int | The initial index from which to return the results.

try {
    $result = $apiInstance->clientTaxInformationList($client_uuid, $limit, $offset);
    print_r($result);
} catch (Exception $e) {
    echo 'Exception when calling TaxInformationApi->clientTaxInformationList: ', $e->getMessage(), PHP_EOL;
}
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **client_uuid** | [**string**](../Model/.md)|  |
 **limit** | **int**| Number of results to return per page. | [optional]
 **offset** | **int**| The initial index from which to return the results. | [optional]

### Return type

[**\OpenAPI\Client\Model\PaginatedTaxInformationListList**](../Model/PaginatedTaxInformationListList.md)

### Authorization

[cookieAuth](../../README.md#cookieAuth), [jwtAuth](../../README.md#jwtAuth), [tokenAuth](../../README.md#tokenAuth)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: `application/json`

[[Back to top]](#) [[Back to API list]](../../README.md#endpoints)
[[Back to Model list]](../../README.md#models)
[[Back to README]](../../README.md)

## `clientTaxInformationPartialUpdate()`

```php
clientTaxInformationPartialUpdate($client_uuid, $uuid, $patched_tax_information_create_update): \OpenAPI\Client\Model\TaxInformationCreateUpdate
```



Partial Update a client tax inforation

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


$apiInstance = new OpenAPI\Client\Api\TaxInformationApi(
    // If you want use custom http client, pass your client which implements `GuzzleHttp\ClientInterface`.
    // This is optional, `GuzzleHttp\Client` will be used as default.
    new GuzzleHttp\Client(),
    $config
);
$client_uuid = 'client_uuid_example'; // string
$uuid = 'uuid_example'; // string
$patched_tax_information_create_update = new \OpenAPI\Client\Model\PatchedTaxInformationCreateUpdate(); // \OpenAPI\Client\Model\PatchedTaxInformationCreateUpdate

try {
    $result = $apiInstance->clientTaxInformationPartialUpdate($client_uuid, $uuid, $patched_tax_information_create_update);
    print_r($result);
} catch (Exception $e) {
    echo 'Exception when calling TaxInformationApi->clientTaxInformationPartialUpdate: ', $e->getMessage(), PHP_EOL;
}
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **client_uuid** | [**string**](../Model/.md)|  |
 **uuid** | [**string**](../Model/.md)|  |
 **patched_tax_information_create_update** | [**\OpenAPI\Client\Model\PatchedTaxInformationCreateUpdate**](../Model/PatchedTaxInformationCreateUpdate.md)|  | [optional]

### Return type

[**\OpenAPI\Client\Model\TaxInformationCreateUpdate**](../Model/TaxInformationCreateUpdate.md)

### Authorization

[cookieAuth](../../README.md#cookieAuth), [jwtAuth](../../README.md#jwtAuth), [tokenAuth](../../README.md#tokenAuth)

### HTTP request headers

- **Content-Type**: `application/json`, `application/x-www-form-urlencoded`, `multipart/form-data`
- **Accept**: `application/json`

[[Back to top]](#) [[Back to API list]](../../README.md#endpoints)
[[Back to Model list]](../../README.md#models)
[[Back to README]](../../README.md)

## `clientTaxInformationRetrieve()`

```php
clientTaxInformationRetrieve($client_uuid, $uuid): \OpenAPI\Client\Model\TaxInformationList
```



Retrieve a client tax inforation

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


$apiInstance = new OpenAPI\Client\Api\TaxInformationApi(
    // If you want use custom http client, pass your client which implements `GuzzleHttp\ClientInterface`.
    // This is optional, `GuzzleHttp\Client` will be used as default.
    new GuzzleHttp\Client(),
    $config
);
$client_uuid = 'client_uuid_example'; // string
$uuid = 'uuid_example'; // string

try {
    $result = $apiInstance->clientTaxInformationRetrieve($client_uuid, $uuid);
    print_r($result);
} catch (Exception $e) {
    echo 'Exception when calling TaxInformationApi->clientTaxInformationRetrieve: ', $e->getMessage(), PHP_EOL;
}
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **client_uuid** | [**string**](../Model/.md)|  |
 **uuid** | [**string**](../Model/.md)|  |

### Return type

[**\OpenAPI\Client\Model\TaxInformationList**](../Model/TaxInformationList.md)

### Authorization

[cookieAuth](../../README.md#cookieAuth), [jwtAuth](../../README.md#jwtAuth), [tokenAuth](../../README.md#tokenAuth)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: `application/json`

[[Back to top]](#) [[Back to API list]](../../README.md#endpoints)
[[Back to Model list]](../../README.md#models)
[[Back to README]](../../README.md)

## `clientTaxInformationUpdate()`

```php
clientTaxInformationUpdate($client_uuid, $uuid, $tax_information_create_update): \OpenAPI\Client\Model\TaxInformationCreateUpdate
```



Update a client tax inforation

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


$apiInstance = new OpenAPI\Client\Api\TaxInformationApi(
    // If you want use custom http client, pass your client which implements `GuzzleHttp\ClientInterface`.
    // This is optional, `GuzzleHttp\Client` will be used as default.
    new GuzzleHttp\Client(),
    $config
);
$client_uuid = 'client_uuid_example'; // string
$uuid = 'uuid_example'; // string
$tax_information_create_update = new \OpenAPI\Client\Model\TaxInformationCreateUpdate(); // \OpenAPI\Client\Model\TaxInformationCreateUpdate

try {
    $result = $apiInstance->clientTaxInformationUpdate($client_uuid, $uuid, $tax_information_create_update);
    print_r($result);
} catch (Exception $e) {
    echo 'Exception when calling TaxInformationApi->clientTaxInformationUpdate: ', $e->getMessage(), PHP_EOL;
}
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **client_uuid** | [**string**](../Model/.md)|  |
 **uuid** | [**string**](../Model/.md)|  |
 **tax_information_create_update** | [**\OpenAPI\Client\Model\TaxInformationCreateUpdate**](../Model/TaxInformationCreateUpdate.md)|  |

### Return type

[**\OpenAPI\Client\Model\TaxInformationCreateUpdate**](../Model/TaxInformationCreateUpdate.md)

### Authorization

[cookieAuth](../../README.md#cookieAuth), [jwtAuth](../../README.md#jwtAuth), [tokenAuth](../../README.md#tokenAuth)

### HTTP request headers

- **Content-Type**: `application/json`, `application/x-www-form-urlencoded`, `multipart/form-data`
- **Accept**: `application/json`

[[Back to top]](#) [[Back to API list]](../../README.md#endpoints)
[[Back to Model list]](../../README.md#models)
[[Back to README]](../../README.md)
