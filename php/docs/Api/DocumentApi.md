# OpenAPI\Client\DocumentApi

All URIs are relative to http://localhost.

Method | HTTP request | Description
------------- | ------------- | -------------
[**clientDocumentCreate()**](DocumentApi.md#clientDocumentCreate) | **POST** /api/v2/clients/{client_uuid}/documents/ | 
[**clientDocumentDelete()**](DocumentApi.md#clientDocumentDelete) | **DELETE** /api/v2/clients/{client_uuid}/documents/{uuid}/ | 
[**clientDocumentList()**](DocumentApi.md#clientDocumentList) | **GET** /api/v2/clients/{client_uuid}/documents/ | 
[**clientDocumentRetrieve()**](DocumentApi.md#clientDocumentRetrieve) | **GET** /api/v2/clients/{client_uuid}/documents/{uuid}/ | 


## `clientDocumentCreate()`

```php
clientDocumentCreate($client_uuid, $uuid, $name, $doc_type, $path, $description): \OpenAPI\Client\Model\Document
```



Create a document for a client

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


$apiInstance = new OpenAPI\Client\Api\DocumentApi(
    // If you want use custom http client, pass your client which implements `GuzzleHttp\ClientInterface`.
    // This is optional, `GuzzleHttp\Client` will be used as default.
    new GuzzleHttp\Client(),
    $config
);
$client_uuid = 'client_uuid_example'; // string
$uuid = 'uuid_example'; // string
$name = 'name_example'; // string
$doc_type = new \OpenAPI\Client\Model\DocTypeEnum(); // \OpenAPI\Client\Model\DocTypeEnum
$path = 'path_example'; // string
$description = 'description_example'; // string

try {
    $result = $apiInstance->clientDocumentCreate($client_uuid, $uuid, $name, $doc_type, $path, $description);
    print_r($result);
} catch (Exception $e) {
    echo 'Exception when calling DocumentApi->clientDocumentCreate: ', $e->getMessage(), PHP_EOL;
}
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **client_uuid** | [**string**](../Model/.md)|  |
 **uuid** | [**string**](../Model/string.md)|  |
 **name** | **string**|  |
 **doc_type** | [**\OpenAPI\Client\Model\DocTypeEnum**](../Model/DocTypeEnum.md)|  |
 **path** | **string**|  |
 **description** | **string**|  | [optional]

### Return type

[**\OpenAPI\Client\Model\Document**](../Model/Document.md)

### Authorization

[cookieAuth](../../README.md#cookieAuth), [jwtAuth](../../README.md#jwtAuth), [tokenAuth](../../README.md#tokenAuth)

### HTTP request headers

- **Content-Type**: `multipart/form-data`
- **Accept**: `application/json`

[[Back to top]](#) [[Back to API list]](../../README.md#endpoints)
[[Back to Model list]](../../README.md#models)
[[Back to README]](../../README.md)

## `clientDocumentDelete()`

```php
clientDocumentDelete($client_uuid, $uuid)
```



Delete a client document

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


$apiInstance = new OpenAPI\Client\Api\DocumentApi(
    // If you want use custom http client, pass your client which implements `GuzzleHttp\ClientInterface`.
    // This is optional, `GuzzleHttp\Client` will be used as default.
    new GuzzleHttp\Client(),
    $config
);
$client_uuid = 'client_uuid_example'; // string
$uuid = 'uuid_example'; // string

try {
    $apiInstance->clientDocumentDelete($client_uuid, $uuid);
} catch (Exception $e) {
    echo 'Exception when calling DocumentApi->clientDocumentDelete: ', $e->getMessage(), PHP_EOL;
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

## `clientDocumentList()`

```php
clientDocumentList($client_uuid, $client, $description, $doc_type, $extra_data, $limit, $name, $offset): \OpenAPI\Client\Model\PaginatedDocumentList
```



List Document for a client

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


$apiInstance = new OpenAPI\Client\Api\DocumentApi(
    // If you want use custom http client, pass your client which implements `GuzzleHttp\ClientInterface`.
    // This is optional, `GuzzleHttp\Client` will be used as default.
    new GuzzleHttp\Client(),
    $config
);
$client_uuid = 'client_uuid_example'; // string
$client = 56; // int
$description = 'description_example'; // string
$doc_type = array('doc_type_example'); // string[]
$extra_data = NULL; // array<string,mixed> | Additional document attributes for the specific portal
$limit = 56; // int | Number of results to return per page.
$name = 'name_example'; // string
$offset = 56; // int | The initial index from which to return the results.

try {
    $result = $apiInstance->clientDocumentList($client_uuid, $client, $description, $doc_type, $extra_data, $limit, $name, $offset);
    print_r($result);
} catch (Exception $e) {
    echo 'Exception when calling DocumentApi->clientDocumentList: ', $e->getMessage(), PHP_EOL;
}
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **client_uuid** | [**string**](../Model/.md)|  |
 **client** | **int**|  | [optional]
 **description** | **string**|  | [optional]
 **doc_type** | [**string[]**](../Model/string.md)|  | [optional]
 **extra_data** | [**array<string,mixed>**](../Model/mixed.md)| Additional document attributes for the specific portal | [optional]
 **limit** | **int**| Number of results to return per page. | [optional]
 **name** | **string**|  | [optional]
 **offset** | **int**| The initial index from which to return the results. | [optional]

### Return type

[**\OpenAPI\Client\Model\PaginatedDocumentList**](../Model/PaginatedDocumentList.md)

### Authorization

[cookieAuth](../../README.md#cookieAuth), [jwtAuth](../../README.md#jwtAuth), [tokenAuth](../../README.md#tokenAuth)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: `application/json`

[[Back to top]](#) [[Back to API list]](../../README.md#endpoints)
[[Back to Model list]](../../README.md#models)
[[Back to README]](../../README.md)

## `clientDocumentRetrieve()`

```php
clientDocumentRetrieve($client_uuid, $uuid): \OpenAPI\Client\Model\Document
```



Retrieve a client document

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


$apiInstance = new OpenAPI\Client\Api\DocumentApi(
    // If you want use custom http client, pass your client which implements `GuzzleHttp\ClientInterface`.
    // This is optional, `GuzzleHttp\Client` will be used as default.
    new GuzzleHttp\Client(),
    $config
);
$client_uuid = 'client_uuid_example'; // string
$uuid = 'uuid_example'; // string

try {
    $result = $apiInstance->clientDocumentRetrieve($client_uuid, $uuid);
    print_r($result);
} catch (Exception $e) {
    echo 'Exception when calling DocumentApi->clientDocumentRetrieve: ', $e->getMessage(), PHP_EOL;
}
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **client_uuid** | [**string**](../Model/.md)|  |
 **uuid** | [**string**](../Model/.md)|  |

### Return type

[**\OpenAPI\Client\Model\Document**](../Model/Document.md)

### Authorization

[cookieAuth](../../README.md#cookieAuth), [jwtAuth](../../README.md#jwtAuth), [tokenAuth](../../README.md#tokenAuth)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: `application/json`

[[Back to top]](#) [[Back to API list]](../../README.md#endpoints)
[[Back to Model list]](../../README.md#models)
[[Back to README]](../../README.md)
