# OpenAPI\Client\NationlityApi

All URIs are relative to http://localhost.

Method | HTTP request | Description
------------- | ------------- | -------------
[**clientNationalityCreate()**](NationlityApi.md#clientNationalityCreate) | **POST** /api/v2/clients/{client_uuid}/nationalities/ | 
[**clientNationlitiesList()**](NationlityApi.md#clientNationlitiesList) | **GET** /api/v2/clients/{client_uuid}/nationalities/ | 
[**clientNationlityDelete()**](NationlityApi.md#clientNationlityDelete) | **DELETE** /api/v2/clients/{client_uuid}/nationalities/{uuid}/ | 
[**clientNationlityPartialUpdate()**](NationlityApi.md#clientNationlityPartialUpdate) | **PATCH** /api/v2/clients/{client_uuid}/nationalities/{uuid}/ | 
[**clientNationlityRetrieve()**](NationlityApi.md#clientNationlityRetrieve) | **GET** /api/v2/clients/{client_uuid}/nationalities/{uuid}/ | 
[**clientNationlityUpdate()**](NationlityApi.md#clientNationlityUpdate) | **PUT** /api/v2/clients/{client_uuid}/nationalities/{uuid}/ | 


## `clientNationalityCreate()`

```php
clientNationalityCreate($client_uuid, $nationality_create): \OpenAPI\Client\Model\NationalityCreate
```



Create nationality for a client

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


$apiInstance = new OpenAPI\Client\Api\NationlityApi(
    // If you want use custom http client, pass your client which implements `GuzzleHttp\ClientInterface`.
    // This is optional, `GuzzleHttp\Client` will be used as default.
    new GuzzleHttp\Client(),
    $config
);
$client_uuid = 'client_uuid_example'; // string
$nationality_create = new \OpenAPI\Client\Model\NationalityCreate(); // \OpenAPI\Client\Model\NationalityCreate

try {
    $result = $apiInstance->clientNationalityCreate($client_uuid, $nationality_create);
    print_r($result);
} catch (Exception $e) {
    echo 'Exception when calling NationlityApi->clientNationalityCreate: ', $e->getMessage(), PHP_EOL;
}
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **client_uuid** | [**string**](../Model/.md)|  |
 **nationality_create** | [**\OpenAPI\Client\Model\NationalityCreate**](../Model/NationalityCreate.md)|  |

### Return type

[**\OpenAPI\Client\Model\NationalityCreate**](../Model/NationalityCreate.md)

### Authorization

[cookieAuth](../../README.md#cookieAuth), [jwtAuth](../../README.md#jwtAuth), [tokenAuth](../../README.md#tokenAuth)

### HTTP request headers

- **Content-Type**: `application/json`, `application/x-www-form-urlencoded`, `multipart/form-data`
- **Accept**: `application/json`

[[Back to top]](#) [[Back to API list]](../../README.md#endpoints)
[[Back to Model list]](../../README.md#models)
[[Back to README]](../../README.md)

## `clientNationlitiesList()`

```php
clientNationlitiesList($client_uuid, $limit, $offset): \OpenAPI\Client\Model\PaginatedNationalityListList
```



List nationlities for a client

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


$apiInstance = new OpenAPI\Client\Api\NationlityApi(
    // If you want use custom http client, pass your client which implements `GuzzleHttp\ClientInterface`.
    // This is optional, `GuzzleHttp\Client` will be used as default.
    new GuzzleHttp\Client(),
    $config
);
$client_uuid = 'client_uuid_example'; // string
$limit = 56; // int | Number of results to return per page.
$offset = 56; // int | The initial index from which to return the results.

try {
    $result = $apiInstance->clientNationlitiesList($client_uuid, $limit, $offset);
    print_r($result);
} catch (Exception $e) {
    echo 'Exception when calling NationlityApi->clientNationlitiesList: ', $e->getMessage(), PHP_EOL;
}
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **client_uuid** | [**string**](../Model/.md)|  |
 **limit** | **int**| Number of results to return per page. | [optional]
 **offset** | **int**| The initial index from which to return the results. | [optional]

### Return type

[**\OpenAPI\Client\Model\PaginatedNationalityListList**](../Model/PaginatedNationalityListList.md)

### Authorization

[cookieAuth](../../README.md#cookieAuth), [jwtAuth](../../README.md#jwtAuth), [tokenAuth](../../README.md#tokenAuth)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: `application/json`

[[Back to top]](#) [[Back to API list]](../../README.md#endpoints)
[[Back to Model list]](../../README.md#models)
[[Back to README]](../../README.md)

## `clientNationlityDelete()`

```php
clientNationlityDelete($client_uuid, $uuid)
```



Delete a client nationality

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


$apiInstance = new OpenAPI\Client\Api\NationlityApi(
    // If you want use custom http client, pass your client which implements `GuzzleHttp\ClientInterface`.
    // This is optional, `GuzzleHttp\Client` will be used as default.
    new GuzzleHttp\Client(),
    $config
);
$client_uuid = 'client_uuid_example'; // string
$uuid = 'uuid_example'; // string

try {
    $apiInstance->clientNationlityDelete($client_uuid, $uuid);
} catch (Exception $e) {
    echo 'Exception when calling NationlityApi->clientNationlityDelete: ', $e->getMessage(), PHP_EOL;
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

## `clientNationlityPartialUpdate()`

```php
clientNationlityPartialUpdate($client_uuid, $uuid, $patched_nationality_update): \OpenAPI\Client\Model\NationalityUpdate
```



Partial Update a client nationality

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


$apiInstance = new OpenAPI\Client\Api\NationlityApi(
    // If you want use custom http client, pass your client which implements `GuzzleHttp\ClientInterface`.
    // This is optional, `GuzzleHttp\Client` will be used as default.
    new GuzzleHttp\Client(),
    $config
);
$client_uuid = 'client_uuid_example'; // string
$uuid = 'uuid_example'; // string
$patched_nationality_update = new \OpenAPI\Client\Model\PatchedNationalityUpdate(); // \OpenAPI\Client\Model\PatchedNationalityUpdate

try {
    $result = $apiInstance->clientNationlityPartialUpdate($client_uuid, $uuid, $patched_nationality_update);
    print_r($result);
} catch (Exception $e) {
    echo 'Exception when calling NationlityApi->clientNationlityPartialUpdate: ', $e->getMessage(), PHP_EOL;
}
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **client_uuid** | [**string**](../Model/.md)|  |
 **uuid** | [**string**](../Model/.md)|  |
 **patched_nationality_update** | [**\OpenAPI\Client\Model\PatchedNationalityUpdate**](../Model/PatchedNationalityUpdate.md)|  | [optional]

### Return type

[**\OpenAPI\Client\Model\NationalityUpdate**](../Model/NationalityUpdate.md)

### Authorization

[cookieAuth](../../README.md#cookieAuth), [jwtAuth](../../README.md#jwtAuth), [tokenAuth](../../README.md#tokenAuth)

### HTTP request headers

- **Content-Type**: `application/json`, `application/x-www-form-urlencoded`, `multipart/form-data`
- **Accept**: `application/json`

[[Back to top]](#) [[Back to API list]](../../README.md#endpoints)
[[Back to Model list]](../../README.md#models)
[[Back to README]](../../README.md)

## `clientNationlityRetrieve()`

```php
clientNationlityRetrieve($client_uuid, $uuid): \OpenAPI\Client\Model\NationalityList
```



Retrieve a client nationality

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


$apiInstance = new OpenAPI\Client\Api\NationlityApi(
    // If you want use custom http client, pass your client which implements `GuzzleHttp\ClientInterface`.
    // This is optional, `GuzzleHttp\Client` will be used as default.
    new GuzzleHttp\Client(),
    $config
);
$client_uuid = 'client_uuid_example'; // string
$uuid = 'uuid_example'; // string

try {
    $result = $apiInstance->clientNationlityRetrieve($client_uuid, $uuid);
    print_r($result);
} catch (Exception $e) {
    echo 'Exception when calling NationlityApi->clientNationlityRetrieve: ', $e->getMessage(), PHP_EOL;
}
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **client_uuid** | [**string**](../Model/.md)|  |
 **uuid** | [**string**](../Model/.md)|  |

### Return type

[**\OpenAPI\Client\Model\NationalityList**](../Model/NationalityList.md)

### Authorization

[cookieAuth](../../README.md#cookieAuth), [jwtAuth](../../README.md#jwtAuth), [tokenAuth](../../README.md#tokenAuth)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: `application/json`

[[Back to top]](#) [[Back to API list]](../../README.md#endpoints)
[[Back to Model list]](../../README.md#models)
[[Back to README]](../../README.md)

## `clientNationlityUpdate()`

```php
clientNationlityUpdate($client_uuid, $uuid, $nationality_update): \OpenAPI\Client\Model\NationalityUpdate
```



Update a client nationality

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


$apiInstance = new OpenAPI\Client\Api\NationlityApi(
    // If you want use custom http client, pass your client which implements `GuzzleHttp\ClientInterface`.
    // This is optional, `GuzzleHttp\Client` will be used as default.
    new GuzzleHttp\Client(),
    $config
);
$client_uuid = 'client_uuid_example'; // string
$uuid = 'uuid_example'; // string
$nationality_update = new \OpenAPI\Client\Model\NationalityUpdate(); // \OpenAPI\Client\Model\NationalityUpdate

try {
    $result = $apiInstance->clientNationlityUpdate($client_uuid, $uuid, $nationality_update);
    print_r($result);
} catch (Exception $e) {
    echo 'Exception when calling NationlityApi->clientNationlityUpdate: ', $e->getMessage(), PHP_EOL;
}
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **client_uuid** | [**string**](../Model/.md)|  |
 **uuid** | [**string**](../Model/.md)|  |
 **nationality_update** | [**\OpenAPI\Client\Model\NationalityUpdate**](../Model/NationalityUpdate.md)|  |

### Return type

[**\OpenAPI\Client\Model\NationalityUpdate**](../Model/NationalityUpdate.md)

### Authorization

[cookieAuth](../../README.md#cookieAuth), [jwtAuth](../../README.md#jwtAuth), [tokenAuth](../../README.md#tokenAuth)

### HTTP request headers

- **Content-Type**: `application/json`, `application/x-www-form-urlencoded`, `multipart/form-data`
- **Accept**: `application/json`

[[Back to top]](#) [[Back to API list]](../../README.md#endpoints)
[[Back to Model list]](../../README.md#models)
[[Back to README]](../../README.md)
