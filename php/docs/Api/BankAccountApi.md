# OpenAPI\Client\BankAccountApi

All URIs are relative to http://localhost.

Method | HTTP request | Description
------------- | ------------- | -------------
[**clientBankAccountCreate()**](BankAccountApi.md#clientBankAccountCreate) | **POST** /api/v2/clients/{client_uuid}/bank-accounts/ | 
[**clientBankAccountDelete()**](BankAccountApi.md#clientBankAccountDelete) | **DELETE** /api/v2/clients/{client_uuid}/bank-accounts/{uuid}/ | 
[**clientBankAccountPartialUpdate()**](BankAccountApi.md#clientBankAccountPartialUpdate) | **PATCH** /api/v2/clients/{client_uuid}/bank-accounts/{uuid}/ | 
[**clientBankAccountRetrieve()**](BankAccountApi.md#clientBankAccountRetrieve) | **GET** /api/v2/clients/{client_uuid}/bank-accounts/{uuid}/ | 
[**clientBankAccountUpdate()**](BankAccountApi.md#clientBankAccountUpdate) | **PUT** /api/v2/clients/{client_uuid}/bank-accounts/{uuid}/ | 
[**clientBankAccountsList()**](BankAccountApi.md#clientBankAccountsList) | **GET** /api/v2/clients/{client_uuid}/bank-accounts/ | 


## `clientBankAccountCreate()`

```php
clientBankAccountCreate($client_uuid, $bank_account_create_update): \OpenAPI\Client\Model\BankAccountCreateUpdate
```



Create a bank account for a client

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


$apiInstance = new OpenAPI\Client\Api\BankAccountApi(
    // If you want use custom http client, pass your client which implements `GuzzleHttp\ClientInterface`.
    // This is optional, `GuzzleHttp\Client` will be used as default.
    new GuzzleHttp\Client(),
    $config
);
$client_uuid = 'client_uuid_example'; // string
$bank_account_create_update = new \OpenAPI\Client\Model\BankAccountCreateUpdate(); // \OpenAPI\Client\Model\BankAccountCreateUpdate

try {
    $result = $apiInstance->clientBankAccountCreate($client_uuid, $bank_account_create_update);
    print_r($result);
} catch (Exception $e) {
    echo 'Exception when calling BankAccountApi->clientBankAccountCreate: ', $e->getMessage(), PHP_EOL;
}
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **client_uuid** | [**string**](../Model/.md)|  |
 **bank_account_create_update** | [**\OpenAPI\Client\Model\BankAccountCreateUpdate**](../Model/BankAccountCreateUpdate.md)|  | [optional]

### Return type

[**\OpenAPI\Client\Model\BankAccountCreateUpdate**](../Model/BankAccountCreateUpdate.md)

### Authorization

[cookieAuth](../../README.md#cookieAuth), [jwtAuth](../../README.md#jwtAuth), [tokenAuth](../../README.md#tokenAuth)

### HTTP request headers

- **Content-Type**: `application/json`, `application/x-www-form-urlencoded`, `multipart/form-data`
- **Accept**: `application/json`

[[Back to top]](#) [[Back to API list]](../../README.md#endpoints)
[[Back to Model list]](../../README.md#models)
[[Back to README]](../../README.md)

## `clientBankAccountDelete()`

```php
clientBankAccountDelete($client_uuid, $uuid)
```



Delete a client bank account

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


$apiInstance = new OpenAPI\Client\Api\BankAccountApi(
    // If you want use custom http client, pass your client which implements `GuzzleHttp\ClientInterface`.
    // This is optional, `GuzzleHttp\Client` will be used as default.
    new GuzzleHttp\Client(),
    $config
);
$client_uuid = 'client_uuid_example'; // string
$uuid = 'uuid_example'; // string

try {
    $apiInstance->clientBankAccountDelete($client_uuid, $uuid);
} catch (Exception $e) {
    echo 'Exception when calling BankAccountApi->clientBankAccountDelete: ', $e->getMessage(), PHP_EOL;
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

## `clientBankAccountPartialUpdate()`

```php
clientBankAccountPartialUpdate($client_uuid, $uuid, $patched_bank_account_create_update): \OpenAPI\Client\Model\BankAccountCreateUpdate
```



Partial Update a client bank account

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


$apiInstance = new OpenAPI\Client\Api\BankAccountApi(
    // If you want use custom http client, pass your client which implements `GuzzleHttp\ClientInterface`.
    // This is optional, `GuzzleHttp\Client` will be used as default.
    new GuzzleHttp\Client(),
    $config
);
$client_uuid = 'client_uuid_example'; // string
$uuid = 'uuid_example'; // string
$patched_bank_account_create_update = new \OpenAPI\Client\Model\PatchedBankAccountCreateUpdate(); // \OpenAPI\Client\Model\PatchedBankAccountCreateUpdate

try {
    $result = $apiInstance->clientBankAccountPartialUpdate($client_uuid, $uuid, $patched_bank_account_create_update);
    print_r($result);
} catch (Exception $e) {
    echo 'Exception when calling BankAccountApi->clientBankAccountPartialUpdate: ', $e->getMessage(), PHP_EOL;
}
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **client_uuid** | [**string**](../Model/.md)|  |
 **uuid** | [**string**](../Model/.md)|  |
 **patched_bank_account_create_update** | [**\OpenAPI\Client\Model\PatchedBankAccountCreateUpdate**](../Model/PatchedBankAccountCreateUpdate.md)|  | [optional]

### Return type

[**\OpenAPI\Client\Model\BankAccountCreateUpdate**](../Model/BankAccountCreateUpdate.md)

### Authorization

[cookieAuth](../../README.md#cookieAuth), [jwtAuth](../../README.md#jwtAuth), [tokenAuth](../../README.md#tokenAuth)

### HTTP request headers

- **Content-Type**: `application/json`, `application/x-www-form-urlencoded`, `multipart/form-data`
- **Accept**: `application/json`

[[Back to top]](#) [[Back to API list]](../../README.md#endpoints)
[[Back to Model list]](../../README.md#models)
[[Back to README]](../../README.md)

## `clientBankAccountRetrieve()`

```php
clientBankAccountRetrieve($client_uuid, $uuid): \OpenAPI\Client\Model\BankAccountList
```



Retrieve a client bank account

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


$apiInstance = new OpenAPI\Client\Api\BankAccountApi(
    // If you want use custom http client, pass your client which implements `GuzzleHttp\ClientInterface`.
    // This is optional, `GuzzleHttp\Client` will be used as default.
    new GuzzleHttp\Client(),
    $config
);
$client_uuid = 'client_uuid_example'; // string
$uuid = 'uuid_example'; // string

try {
    $result = $apiInstance->clientBankAccountRetrieve($client_uuid, $uuid);
    print_r($result);
} catch (Exception $e) {
    echo 'Exception when calling BankAccountApi->clientBankAccountRetrieve: ', $e->getMessage(), PHP_EOL;
}
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **client_uuid** | [**string**](../Model/.md)|  |
 **uuid** | [**string**](../Model/.md)|  |

### Return type

[**\OpenAPI\Client\Model\BankAccountList**](../Model/BankAccountList.md)

### Authorization

[cookieAuth](../../README.md#cookieAuth), [jwtAuth](../../README.md#jwtAuth), [tokenAuth](../../README.md#tokenAuth)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: `application/json`

[[Back to top]](#) [[Back to API list]](../../README.md#endpoints)
[[Back to Model list]](../../README.md#models)
[[Back to README]](../../README.md)

## `clientBankAccountUpdate()`

```php
clientBankAccountUpdate($client_uuid, $uuid, $bank_account_create_update): \OpenAPI\Client\Model\BankAccountCreateUpdate
```



Update a client bank account

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


$apiInstance = new OpenAPI\Client\Api\BankAccountApi(
    // If you want use custom http client, pass your client which implements `GuzzleHttp\ClientInterface`.
    // This is optional, `GuzzleHttp\Client` will be used as default.
    new GuzzleHttp\Client(),
    $config
);
$client_uuid = 'client_uuid_example'; // string
$uuid = 'uuid_example'; // string
$bank_account_create_update = new \OpenAPI\Client\Model\BankAccountCreateUpdate(); // \OpenAPI\Client\Model\BankAccountCreateUpdate

try {
    $result = $apiInstance->clientBankAccountUpdate($client_uuid, $uuid, $bank_account_create_update);
    print_r($result);
} catch (Exception $e) {
    echo 'Exception when calling BankAccountApi->clientBankAccountUpdate: ', $e->getMessage(), PHP_EOL;
}
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **client_uuid** | [**string**](../Model/.md)|  |
 **uuid** | [**string**](../Model/.md)|  |
 **bank_account_create_update** | [**\OpenAPI\Client\Model\BankAccountCreateUpdate**](../Model/BankAccountCreateUpdate.md)|  | [optional]

### Return type

[**\OpenAPI\Client\Model\BankAccountCreateUpdate**](../Model/BankAccountCreateUpdate.md)

### Authorization

[cookieAuth](../../README.md#cookieAuth), [jwtAuth](../../README.md#jwtAuth), [tokenAuth](../../README.md#tokenAuth)

### HTTP request headers

- **Content-Type**: `application/json`, `application/x-www-form-urlencoded`, `multipart/form-data`
- **Accept**: `application/json`

[[Back to top]](#) [[Back to API list]](../../README.md#endpoints)
[[Back to Model list]](../../README.md#models)
[[Back to README]](../../README.md)

## `clientBankAccountsList()`

```php
clientBankAccountsList($client_uuid, $limit, $offset): \OpenAPI\Client\Model\PaginatedBankAccountListList
```



List Bank Account for a client

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


$apiInstance = new OpenAPI\Client\Api\BankAccountApi(
    // If you want use custom http client, pass your client which implements `GuzzleHttp\ClientInterface`.
    // This is optional, `GuzzleHttp\Client` will be used as default.
    new GuzzleHttp\Client(),
    $config
);
$client_uuid = 'client_uuid_example'; // string
$limit = 56; // int | Number of results to return per page.
$offset = 56; // int | The initial index from which to return the results.

try {
    $result = $apiInstance->clientBankAccountsList($client_uuid, $limit, $offset);
    print_r($result);
} catch (Exception $e) {
    echo 'Exception when calling BankAccountApi->clientBankAccountsList: ', $e->getMessage(), PHP_EOL;
}
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **client_uuid** | [**string**](../Model/.md)|  |
 **limit** | **int**| Number of results to return per page. | [optional]
 **offset** | **int**| The initial index from which to return the results. | [optional]

### Return type

[**\OpenAPI\Client\Model\PaginatedBankAccountListList**](../Model/PaginatedBankAccountListList.md)

### Authorization

[cookieAuth](../../README.md#cookieAuth), [jwtAuth](../../README.md#jwtAuth), [tokenAuth](../../README.md#tokenAuth)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: `application/json`

[[Back to top]](#) [[Back to API list]](../../README.md#endpoints)
[[Back to Model list]](../../README.md#models)
[[Back to README]](../../README.md)
