# NucoroApi.KYCApi

All URIs are relative to *http://localhost*

Method | HTTP request | Description
------------- | ------------- | -------------
[**clientVerificationCreate**](KYCApi.md#clientVerificationCreate) | **POST** /api/v2/clients/{client_uuid}/verifications/{verify_type_code}/ | 
[**clientVerificationDocumentCreate**](KYCApi.md#clientVerificationDocumentCreate) | **POST** /api/v2/clients/{client_uuid}/verifications/{verify_type_code}/documents/ | 
[**clientVerificationDocumentDelete**](KYCApi.md#clientVerificationDocumentDelete) | **DELETE** /api/v2/clients/{client_uuid}/verifications/{verify_type_code}/documents/{uuid}/ | 
[**clientVerificationDocumentList**](KYCApi.md#clientVerificationDocumentList) | **GET** /api/v2/clients/{client_uuid}/verifications/{verify_type_code}/documents/ | 
[**clientVerificationDocumentPartialUpdate**](KYCApi.md#clientVerificationDocumentPartialUpdate) | **PATCH** /api/v2/clients/{client_uuid}/verifications/{verify_type_code}/documents/{uuid}/ | 
[**clientVerificationDocumentRetrieve**](KYCApi.md#clientVerificationDocumentRetrieve) | **GET** /api/v2/clients/{client_uuid}/verifications/{verify_type_code}/documents/{uuid}/ | 
[**clientVerificationDocumentUpdate**](KYCApi.md#clientVerificationDocumentUpdate) | **PUT** /api/v2/clients/{client_uuid}/verifications/{verify_type_code}/documents/{uuid}/ | 
[**clientVerificationList**](KYCApi.md#clientVerificationList) | **GET** /api/v2/clients/{client_uuid}/verifications/{verify_type_code}/ | 
[**clientVerificationRetrieve**](KYCApi.md#clientVerificationRetrieve) | **GET** /api/v2/clients/{client_uuid}/verifications/{verify_type_code}/{uuid}/ | 



## clientVerificationCreate

> VerificationCreate clientVerificationCreate(clientUuid, verifyTypeCode, verificationCreate)



Create a verification for a client

### Example

```javascript
import NucoroApi from 'nucoro_api';
let defaultClient = NucoroApi.ApiClient.instance;
// Configure API key authorization: cookieAuth
let cookieAuth = defaultClient.authentications['cookieAuth'];
cookieAuth.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//cookieAuth.apiKeyPrefix = 'Token';
// Configure Bearer (JWT) access token for authorization: jwtAuth
let jwtAuth = defaultClient.authentications['jwtAuth'];
jwtAuth.accessToken = "YOUR ACCESS TOKEN"
// Configure API key authorization: tokenAuth
let tokenAuth = defaultClient.authentications['tokenAuth'];
tokenAuth.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//tokenAuth.apiKeyPrefix = 'Token';

let apiInstance = new NucoroApi.KYCApi();
let clientUuid = null; // String | 
let verifyTypeCode = "verifyTypeCode_example"; // String | 
let verificationCreate = new NucoroApi.VerificationCreate(); // VerificationCreate | 
apiInstance.clientVerificationCreate(clientUuid, verifyTypeCode, verificationCreate, (error, data, response) => {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
});
```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **clientUuid** | [**String**](.md)|  | 
 **verifyTypeCode** | **String**|  | 
 **verificationCreate** | [**VerificationCreate**](VerificationCreate.md)|  | 

### Return type

[**VerificationCreate**](VerificationCreate.md)

### Authorization

[cookieAuth](../README.md#cookieAuth), [jwtAuth](../README.md#jwtAuth), [tokenAuth](../README.md#tokenAuth)

### HTTP request headers

- **Content-Type**: application/json, application/x-www-form-urlencoded, multipart/form-data
- **Accept**: application/json


## clientVerificationDocumentCreate

> VerificationWithType clientVerificationDocumentCreate(clientUuid, verifyTypeCode, uuid, verifyType, created, updated, verificationDocuments, opts)



Create a verification Document for a client

### Example

```javascript
import NucoroApi from 'nucoro_api';
let defaultClient = NucoroApi.ApiClient.instance;
// Configure API key authorization: cookieAuth
let cookieAuth = defaultClient.authentications['cookieAuth'];
cookieAuth.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//cookieAuth.apiKeyPrefix = 'Token';
// Configure Bearer (JWT) access token for authorization: jwtAuth
let jwtAuth = defaultClient.authentications['jwtAuth'];
jwtAuth.accessToken = "YOUR ACCESS TOKEN"
// Configure API key authorization: tokenAuth
let tokenAuth = defaultClient.authentications['tokenAuth'];
tokenAuth.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//tokenAuth.apiKeyPrefix = 'Token';

let apiInstance = new NucoroApi.KYCApi();
let clientUuid = null; // String | 
let verifyTypeCode = "verifyTypeCode_example"; // String | 
let uuid = null; // String | 
let verifyType = new NucoroApi.VerifyTypeEnum(); // VerifyTypeEnum | 
let created = new Date("2013-10-20T19:20:30+01:00"); // Date | 
let updated = new Date("2013-10-20T19:20:30+01:00"); // Date | 
let verificationDocuments = new NucoroApi.VerificationDocumentCreate(); // [VerificationDocumentCreate] | 
let opts = {
  'status': new NucoroApi.StatusBd7Enum(), // StatusBd7Enum | 
  'result': new NucoroApi.OneOfResultEnumBlankEnum() // OneOfResultEnumBlankEnum | 
};
apiInstance.clientVerificationDocumentCreate(clientUuid, verifyTypeCode, uuid, verifyType, created, updated, verificationDocuments, opts, (error, data, response) => {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
});
```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **clientUuid** | [**String**](.md)|  | 
 **verifyTypeCode** | **String**|  | 
 **uuid** | [**String**](String.md)|  | 
 **verifyType** | [**VerifyTypeEnum**](VerifyTypeEnum.md)|  | 
 **created** | **Date**|  | 
 **updated** | **Date**|  | 
 **verificationDocuments** | [**[VerificationDocumentCreate]**](VerificationDocumentCreate.md)|  | 
 **status** | [**StatusBd7Enum**](StatusBd7Enum.md)|  | [optional] 
 **result** | [**OneOfResultEnumBlankEnum**](OneOfResultEnumBlankEnum.md)|  | [optional] 

### Return type

[**VerificationWithType**](VerificationWithType.md)

### Authorization

[cookieAuth](../README.md#cookieAuth), [jwtAuth](../README.md#jwtAuth), [tokenAuth](../README.md#tokenAuth)

### HTTP request headers

- **Content-Type**: multipart/form-data, application/x-www-form-urlencoded
- **Accept**: application/json


## clientVerificationDocumentDelete

> clientVerificationDocumentDelete(clientUuid, uuid, verifyTypeCode)



Delete a client verificatoin document

### Example

```javascript
import NucoroApi from 'nucoro_api';
let defaultClient = NucoroApi.ApiClient.instance;
// Configure API key authorization: cookieAuth
let cookieAuth = defaultClient.authentications['cookieAuth'];
cookieAuth.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//cookieAuth.apiKeyPrefix = 'Token';
// Configure Bearer (JWT) access token for authorization: jwtAuth
let jwtAuth = defaultClient.authentications['jwtAuth'];
jwtAuth.accessToken = "YOUR ACCESS TOKEN"
// Configure API key authorization: tokenAuth
let tokenAuth = defaultClient.authentications['tokenAuth'];
tokenAuth.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//tokenAuth.apiKeyPrefix = 'Token';

let apiInstance = new NucoroApi.KYCApi();
let clientUuid = null; // String | 
let uuid = null; // String | 
let verifyTypeCode = "verifyTypeCode_example"; // String | 
apiInstance.clientVerificationDocumentDelete(clientUuid, uuid, verifyTypeCode, (error, data, response) => {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully.');
  }
});
```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **clientUuid** | [**String**](.md)|  | 
 **uuid** | [**String**](.md)|  | 
 **verifyTypeCode** | **String**|  | 

### Return type

null (empty response body)

### Authorization

[cookieAuth](../README.md#cookieAuth), [jwtAuth](../README.md#jwtAuth), [tokenAuth](../README.md#tokenAuth)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: Not defined


## clientVerificationDocumentList

> PaginatedVerificationDocumentList clientVerificationDocumentList(clientUuid, verifyTypeCode, opts)



List Verification Document for a client

### Example

```javascript
import NucoroApi from 'nucoro_api';
let defaultClient = NucoroApi.ApiClient.instance;
// Configure API key authorization: cookieAuth
let cookieAuth = defaultClient.authentications['cookieAuth'];
cookieAuth.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//cookieAuth.apiKeyPrefix = 'Token';
// Configure Bearer (JWT) access token for authorization: jwtAuth
let jwtAuth = defaultClient.authentications['jwtAuth'];
jwtAuth.accessToken = "YOUR ACCESS TOKEN"
// Configure API key authorization: tokenAuth
let tokenAuth = defaultClient.authentications['tokenAuth'];
tokenAuth.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//tokenAuth.apiKeyPrefix = 'Token';

let apiInstance = new NucoroApi.KYCApi();
let clientUuid = null; // String | 
let verifyTypeCode = "verifyTypeCode_example"; // String | 
let opts = {
  'limit': 56, // Number | Number of results to return per page.
  'offset': 56 // Number | The initial index from which to return the results.
};
apiInstance.clientVerificationDocumentList(clientUuid, verifyTypeCode, opts, (error, data, response) => {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
});
```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **clientUuid** | [**String**](.md)|  | 
 **verifyTypeCode** | **String**|  | 
 **limit** | **Number**| Number of results to return per page. | [optional] 
 **offset** | **Number**| The initial index from which to return the results. | [optional] 

### Return type

[**PaginatedVerificationDocumentList**](PaginatedVerificationDocumentList.md)

### Authorization

[cookieAuth](../README.md#cookieAuth), [jwtAuth](../README.md#jwtAuth), [tokenAuth](../README.md#tokenAuth)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## clientVerificationDocumentPartialUpdate

> VerificationDocument clientVerificationDocumentPartialUpdate(clientUuid, uuid, verifyTypeCode, opts)



Partial Update a client verification document

### Example

```javascript
import NucoroApi from 'nucoro_api';
let defaultClient = NucoroApi.ApiClient.instance;
// Configure API key authorization: cookieAuth
let cookieAuth = defaultClient.authentications['cookieAuth'];
cookieAuth.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//cookieAuth.apiKeyPrefix = 'Token';
// Configure Bearer (JWT) access token for authorization: jwtAuth
let jwtAuth = defaultClient.authentications['jwtAuth'];
jwtAuth.accessToken = "YOUR ACCESS TOKEN"
// Configure API key authorization: tokenAuth
let tokenAuth = defaultClient.authentications['tokenAuth'];
tokenAuth.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//tokenAuth.apiKeyPrefix = 'Token';

let apiInstance = new NucoroApi.KYCApi();
let clientUuid = null; // String | 
let uuid = null; // String | 
let verifyTypeCode = "verifyTypeCode_example"; // String | 
let opts = {
  'uuid2': null, // String | 
  'documentType': new NucoroApi.DocumentTypeEnum(), // DocumentTypeEnum | 
  'documentFront': "documentFront_example", // String | 
  'documentBack': "documentBack_example" // String | 
};
apiInstance.clientVerificationDocumentPartialUpdate(clientUuid, uuid, verifyTypeCode, opts, (error, data, response) => {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
});
```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **clientUuid** | [**String**](.md)|  | 
 **uuid** | [**String**](.md)|  | 
 **verifyTypeCode** | **String**|  | 
 **uuid2** | [**String**](String.md)|  | [optional] 
 **documentType** | [**DocumentTypeEnum**](DocumentTypeEnum.md)|  | [optional] 
 **documentFront** | **String**|  | [optional] 
 **documentBack** | **String**|  | [optional] 

### Return type

[**VerificationDocument**](VerificationDocument.md)

### Authorization

[cookieAuth](../README.md#cookieAuth), [jwtAuth](../README.md#jwtAuth), [tokenAuth](../README.md#tokenAuth)

### HTTP request headers

- **Content-Type**: multipart/form-data, application/x-www-form-urlencoded
- **Accept**: application/json


## clientVerificationDocumentRetrieve

> VerificationDocument clientVerificationDocumentRetrieve(clientUuid, uuid, verifyTypeCode)



Retrieve a client verification document

### Example

```javascript
import NucoroApi from 'nucoro_api';
let defaultClient = NucoroApi.ApiClient.instance;
// Configure API key authorization: cookieAuth
let cookieAuth = defaultClient.authentications['cookieAuth'];
cookieAuth.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//cookieAuth.apiKeyPrefix = 'Token';
// Configure Bearer (JWT) access token for authorization: jwtAuth
let jwtAuth = defaultClient.authentications['jwtAuth'];
jwtAuth.accessToken = "YOUR ACCESS TOKEN"
// Configure API key authorization: tokenAuth
let tokenAuth = defaultClient.authentications['tokenAuth'];
tokenAuth.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//tokenAuth.apiKeyPrefix = 'Token';

let apiInstance = new NucoroApi.KYCApi();
let clientUuid = null; // String | 
let uuid = null; // String | 
let verifyTypeCode = "verifyTypeCode_example"; // String | 
apiInstance.clientVerificationDocumentRetrieve(clientUuid, uuid, verifyTypeCode, (error, data, response) => {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
});
```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **clientUuid** | [**String**](.md)|  | 
 **uuid** | [**String**](.md)|  | 
 **verifyTypeCode** | **String**|  | 

### Return type

[**VerificationDocument**](VerificationDocument.md)

### Authorization

[cookieAuth](../README.md#cookieAuth), [jwtAuth](../README.md#jwtAuth), [tokenAuth](../README.md#tokenAuth)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## clientVerificationDocumentUpdate

> VerificationDocument clientVerificationDocumentUpdate(clientUuid, uuid, verifyTypeCode, uuid2, documentType, documentFront, documentBack)



Update a client verification document

### Example

```javascript
import NucoroApi from 'nucoro_api';
let defaultClient = NucoroApi.ApiClient.instance;
// Configure API key authorization: cookieAuth
let cookieAuth = defaultClient.authentications['cookieAuth'];
cookieAuth.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//cookieAuth.apiKeyPrefix = 'Token';
// Configure Bearer (JWT) access token for authorization: jwtAuth
let jwtAuth = defaultClient.authentications['jwtAuth'];
jwtAuth.accessToken = "YOUR ACCESS TOKEN"
// Configure API key authorization: tokenAuth
let tokenAuth = defaultClient.authentications['tokenAuth'];
tokenAuth.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//tokenAuth.apiKeyPrefix = 'Token';

let apiInstance = new NucoroApi.KYCApi();
let clientUuid = null; // String | 
let uuid = null; // String | 
let verifyTypeCode = "verifyTypeCode_example"; // String | 
let uuid2 = null; // String | 
let documentType = new NucoroApi.DocumentTypeEnum(); // DocumentTypeEnum | 
let documentFront = "documentFront_example"; // String | 
let documentBack = "documentBack_example"; // String | 
apiInstance.clientVerificationDocumentUpdate(clientUuid, uuid, verifyTypeCode, uuid2, documentType, documentFront, documentBack, (error, data, response) => {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
});
```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **clientUuid** | [**String**](.md)|  | 
 **uuid** | [**String**](.md)|  | 
 **verifyTypeCode** | **String**|  | 
 **uuid2** | [**String**](String.md)|  | 
 **documentType** | [**DocumentTypeEnum**](DocumentTypeEnum.md)|  | 
 **documentFront** | **String**|  | 
 **documentBack** | **String**|  | 

### Return type

[**VerificationDocument**](VerificationDocument.md)

### Authorization

[cookieAuth](../README.md#cookieAuth), [jwtAuth](../README.md#jwtAuth), [tokenAuth](../README.md#tokenAuth)

### HTTP request headers

- **Content-Type**: multipart/form-data, application/x-www-form-urlencoded
- **Accept**: application/json


## clientVerificationList

> PaginatedVerificationListList clientVerificationList(clientUuid, verifyTypeCode, opts)



List Verification for a client

### Example

```javascript
import NucoroApi from 'nucoro_api';
let defaultClient = NucoroApi.ApiClient.instance;
// Configure API key authorization: cookieAuth
let cookieAuth = defaultClient.authentications['cookieAuth'];
cookieAuth.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//cookieAuth.apiKeyPrefix = 'Token';
// Configure Bearer (JWT) access token for authorization: jwtAuth
let jwtAuth = defaultClient.authentications['jwtAuth'];
jwtAuth.accessToken = "YOUR ACCESS TOKEN"
// Configure API key authorization: tokenAuth
let tokenAuth = defaultClient.authentications['tokenAuth'];
tokenAuth.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//tokenAuth.apiKeyPrefix = 'Token';

let apiInstance = new NucoroApi.KYCApi();
let clientUuid = null; // String | 
let verifyTypeCode = "verifyTypeCode_example"; // String | 
let opts = {
  'limit': 56, // Number | Number of results to return per page.
  'offset': 56 // Number | The initial index from which to return the results.
};
apiInstance.clientVerificationList(clientUuid, verifyTypeCode, opts, (error, data, response) => {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
});
```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **clientUuid** | [**String**](.md)|  | 
 **verifyTypeCode** | **String**|  | 
 **limit** | **Number**| Number of results to return per page. | [optional] 
 **offset** | **Number**| The initial index from which to return the results. | [optional] 

### Return type

[**PaginatedVerificationListList**](PaginatedVerificationListList.md)

### Authorization

[cookieAuth](../README.md#cookieAuth), [jwtAuth](../README.md#jwtAuth), [tokenAuth](../README.md#tokenAuth)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## clientVerificationRetrieve

> VerificationList clientVerificationRetrieve(clientUuid, uuid, verifyTypeCode)



Retrieve a client verification 

### Example

```javascript
import NucoroApi from 'nucoro_api';
let defaultClient = NucoroApi.ApiClient.instance;
// Configure API key authorization: cookieAuth
let cookieAuth = defaultClient.authentications['cookieAuth'];
cookieAuth.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//cookieAuth.apiKeyPrefix = 'Token';
// Configure Bearer (JWT) access token for authorization: jwtAuth
let jwtAuth = defaultClient.authentications['jwtAuth'];
jwtAuth.accessToken = "YOUR ACCESS TOKEN"
// Configure API key authorization: tokenAuth
let tokenAuth = defaultClient.authentications['tokenAuth'];
tokenAuth.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//tokenAuth.apiKeyPrefix = 'Token';

let apiInstance = new NucoroApi.KYCApi();
let clientUuid = null; // String | 
let uuid = null; // String | 
let verifyTypeCode = "verifyTypeCode_example"; // String | 
apiInstance.clientVerificationRetrieve(clientUuid, uuid, verifyTypeCode, (error, data, response) => {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
});
```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **clientUuid** | [**String**](.md)|  | 
 **uuid** | [**String**](.md)|  | 
 **verifyTypeCode** | **String**|  | 

### Return type

[**VerificationList**](VerificationList.md)

### Authorization

[cookieAuth](../README.md#cookieAuth), [jwtAuth](../README.md#jwtAuth), [tokenAuth](../README.md#tokenAuth)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json

