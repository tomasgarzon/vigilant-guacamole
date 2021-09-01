# nucoro_api.DocumentApi

All URIs are relative to *http://localhost*

Method | HTTP request | Description
------------- | ------------- | -------------
[**client_document_create**](DocumentApi.md#client_document_create) | **POST** /api/v2/clients/{client_uuid}/documents/ | 
[**client_document_delete**](DocumentApi.md#client_document_delete) | **DELETE** /api/v2/clients/{client_uuid}/documents/{uuid}/ | 
[**client_document_list**](DocumentApi.md#client_document_list) | **GET** /api/v2/clients/{client_uuid}/documents/ | 
[**client_document_retrieve**](DocumentApi.md#client_document_retrieve) | **GET** /api/v2/clients/{client_uuid}/documents/{uuid}/ | 


# **client_document_create**
> Document client_document_create(client_uuid, uuid, name, doc_type, path)



Create a document for a client

### Example

* Api Key Authentication (cookieAuth):
* Bearer (JWT) Authentication (jwtAuth):
* Api Key Authentication (tokenAuth):

```python
import time
import nucoro_api
from nucoro_api.api import document_api
from nucoro_api.model.document import Document
from nucoro_api.model.doc_type_enum import DocTypeEnum
from pprint import pprint
# Defining the host is optional and defaults to http://localhost
# See configuration.py for a list of all supported configuration parameters.
configuration = nucoro_api.Configuration(
    host = "http://localhost"
)

# The client must configure the authentication and authorization parameters
# in accordance with the API server security policy.
# Examples for each auth method are provided below, use the example that
# satisfies your auth use case.

# Configure API key authorization: cookieAuth
configuration.api_key['cookieAuth'] = 'YOUR_API_KEY'

# Uncomment below to setup prefix (e.g. Bearer) for API key, if needed
# configuration.api_key_prefix['cookieAuth'] = 'Bearer'

# Configure Bearer authorization (JWT): jwtAuth
configuration = nucoro_api.Configuration(
    access_token = 'YOUR_BEARER_TOKEN'
)

# Configure API key authorization: tokenAuth
configuration.api_key['tokenAuth'] = 'YOUR_API_KEY'

# Uncomment below to setup prefix (e.g. Bearer) for API key, if needed
# configuration.api_key_prefix['tokenAuth'] = 'Bearer'

# Enter a context with an instance of the API client
with nucoro_api.ApiClient(configuration) as api_client:
    # Create an instance of the API class
    api_instance = document_api.DocumentApi(api_client)
    client_uuid = "client_uuid_example" # str | 
    uuid = "uuid_example" # str | 
    name = "name_example" # str | 
    doc_type = DocTypeEnum("ID_PERSONAL") # DocTypeEnum | 
    path = "path_example" # str | 
    description = "description_example" # str |  (optional)

    # example passing only required values which don't have defaults set
    try:
        api_response = api_instance.client_document_create(client_uuid, uuid, name, doc_type, path)
        pprint(api_response)
    except nucoro_api.ApiException as e:
        print("Exception when calling DocumentApi->client_document_create: %s\n" % e)

    # example passing only required values which don't have defaults set
    # and optional values
    try:
        api_response = api_instance.client_document_create(client_uuid, uuid, name, doc_type, path, description=description)
        pprint(api_response)
    except nucoro_api.ApiException as e:
        print("Exception when calling DocumentApi->client_document_create: %s\n" % e)
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **client_uuid** | **str**|  |
 **uuid** | **str**|  |
 **name** | **str**|  |
 **doc_type** | [**DocTypeEnum**](DocTypeEnum.md)|  |
 **path** | **str**|  |
 **description** | **str**|  | [optional]

### Return type

[**Document**](Document.md)

### Authorization

[cookieAuth](../README.md#cookieAuth), [jwtAuth](../README.md#jwtAuth), [tokenAuth](../README.md#tokenAuth)

### HTTP request headers

 - **Content-Type**: multipart/form-data
 - **Accept**: application/json


### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**201** |  |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **client_document_delete**
> client_document_delete(client_uuid, uuid)



Delete a client document

### Example

* Api Key Authentication (cookieAuth):
* Bearer (JWT) Authentication (jwtAuth):
* Api Key Authentication (tokenAuth):

```python
import time
import nucoro_api
from nucoro_api.api import document_api
from pprint import pprint
# Defining the host is optional and defaults to http://localhost
# See configuration.py for a list of all supported configuration parameters.
configuration = nucoro_api.Configuration(
    host = "http://localhost"
)

# The client must configure the authentication and authorization parameters
# in accordance with the API server security policy.
# Examples for each auth method are provided below, use the example that
# satisfies your auth use case.

# Configure API key authorization: cookieAuth
configuration.api_key['cookieAuth'] = 'YOUR_API_KEY'

# Uncomment below to setup prefix (e.g. Bearer) for API key, if needed
# configuration.api_key_prefix['cookieAuth'] = 'Bearer'

# Configure Bearer authorization (JWT): jwtAuth
configuration = nucoro_api.Configuration(
    access_token = 'YOUR_BEARER_TOKEN'
)

# Configure API key authorization: tokenAuth
configuration.api_key['tokenAuth'] = 'YOUR_API_KEY'

# Uncomment below to setup prefix (e.g. Bearer) for API key, if needed
# configuration.api_key_prefix['tokenAuth'] = 'Bearer'

# Enter a context with an instance of the API client
with nucoro_api.ApiClient(configuration) as api_client:
    # Create an instance of the API class
    api_instance = document_api.DocumentApi(api_client)
    client_uuid = "client_uuid_example" # str | 
    uuid = "uuid_example" # str | 

    # example passing only required values which don't have defaults set
    try:
        api_instance.client_document_delete(client_uuid, uuid)
    except nucoro_api.ApiException as e:
        print("Exception when calling DocumentApi->client_document_delete: %s\n" % e)
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **client_uuid** | **str**|  |
 **uuid** | **str**|  |

### Return type

void (empty response body)

### Authorization

[cookieAuth](../README.md#cookieAuth), [jwtAuth](../README.md#jwtAuth), [tokenAuth](../README.md#tokenAuth)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: Not defined


### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**204** | No response body |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **client_document_list**
> PaginatedDocumentList client_document_list(client_uuid)



List Document for a client

### Example

* Api Key Authentication (cookieAuth):
* Bearer (JWT) Authentication (jwtAuth):
* Api Key Authentication (tokenAuth):

```python
import time
import nucoro_api
from nucoro_api.api import document_api
from nucoro_api.model.paginated_document_list import PaginatedDocumentList
from pprint import pprint
# Defining the host is optional and defaults to http://localhost
# See configuration.py for a list of all supported configuration parameters.
configuration = nucoro_api.Configuration(
    host = "http://localhost"
)

# The client must configure the authentication and authorization parameters
# in accordance with the API server security policy.
# Examples for each auth method are provided below, use the example that
# satisfies your auth use case.

# Configure API key authorization: cookieAuth
configuration.api_key['cookieAuth'] = 'YOUR_API_KEY'

# Uncomment below to setup prefix (e.g. Bearer) for API key, if needed
# configuration.api_key_prefix['cookieAuth'] = 'Bearer'

# Configure Bearer authorization (JWT): jwtAuth
configuration = nucoro_api.Configuration(
    access_token = 'YOUR_BEARER_TOKEN'
)

# Configure API key authorization: tokenAuth
configuration.api_key['tokenAuth'] = 'YOUR_API_KEY'

# Uncomment below to setup prefix (e.g. Bearer) for API key, if needed
# configuration.api_key_prefix['tokenAuth'] = 'Bearer'

# Enter a context with an instance of the API client
with nucoro_api.ApiClient(configuration) as api_client:
    # Create an instance of the API class
    api_instance = document_api.DocumentApi(api_client)
    client_uuid = "client_uuid_example" # str | 
    client = 1 # int |  (optional)
    description = "description_example" # str |  (optional)
    doc_type = [
        "BANK_DETAILS",
    ] # [str] |  (optional)
    extra_data = {
        "key": None,
    } # {str: (bool, date, datetime, dict, float, int, list, str, none_type)}, none_type | Additional document attributes for the specific portal (optional)
    limit = 1 # int | Number of results to return per page. (optional)
    name = "name_example" # str |  (optional)
    offset = 1 # int | The initial index from which to return the results. (optional)

    # example passing only required values which don't have defaults set
    try:
        api_response = api_instance.client_document_list(client_uuid)
        pprint(api_response)
    except nucoro_api.ApiException as e:
        print("Exception when calling DocumentApi->client_document_list: %s\n" % e)

    # example passing only required values which don't have defaults set
    # and optional values
    try:
        api_response = api_instance.client_document_list(client_uuid, client=client, description=description, doc_type=doc_type, extra_data=extra_data, limit=limit, name=name, offset=offset)
        pprint(api_response)
    except nucoro_api.ApiException as e:
        print("Exception when calling DocumentApi->client_document_list: %s\n" % e)
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **client_uuid** | **str**|  |
 **client** | **int**|  | [optional]
 **description** | **str**|  | [optional]
 **doc_type** | **[str]**|  | [optional]
 **extra_data** | [**{str: (bool, date, datetime, dict, float, int, list, str, none_type)}, none_type**](bool, date, datetime, dict, float, int, list, str, none_type.md)| Additional document attributes for the specific portal | [optional]
 **limit** | **int**| Number of results to return per page. | [optional]
 **name** | **str**|  | [optional]
 **offset** | **int**| The initial index from which to return the results. | [optional]

### Return type

[**PaginatedDocumentList**](PaginatedDocumentList.md)

### Authorization

[cookieAuth](../README.md#cookieAuth), [jwtAuth](../README.md#jwtAuth), [tokenAuth](../README.md#tokenAuth)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json


### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** |  |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **client_document_retrieve**
> Document client_document_retrieve(client_uuid, uuid)



Retrieve a client document

### Example

* Api Key Authentication (cookieAuth):
* Bearer (JWT) Authentication (jwtAuth):
* Api Key Authentication (tokenAuth):

```python
import time
import nucoro_api
from nucoro_api.api import document_api
from nucoro_api.model.document import Document
from pprint import pprint
# Defining the host is optional and defaults to http://localhost
# See configuration.py for a list of all supported configuration parameters.
configuration = nucoro_api.Configuration(
    host = "http://localhost"
)

# The client must configure the authentication and authorization parameters
# in accordance with the API server security policy.
# Examples for each auth method are provided below, use the example that
# satisfies your auth use case.

# Configure API key authorization: cookieAuth
configuration.api_key['cookieAuth'] = 'YOUR_API_KEY'

# Uncomment below to setup prefix (e.g. Bearer) for API key, if needed
# configuration.api_key_prefix['cookieAuth'] = 'Bearer'

# Configure Bearer authorization (JWT): jwtAuth
configuration = nucoro_api.Configuration(
    access_token = 'YOUR_BEARER_TOKEN'
)

# Configure API key authorization: tokenAuth
configuration.api_key['tokenAuth'] = 'YOUR_API_KEY'

# Uncomment below to setup prefix (e.g. Bearer) for API key, if needed
# configuration.api_key_prefix['tokenAuth'] = 'Bearer'

# Enter a context with an instance of the API client
with nucoro_api.ApiClient(configuration) as api_client:
    # Create an instance of the API class
    api_instance = document_api.DocumentApi(api_client)
    client_uuid = "client_uuid_example" # str | 
    uuid = "uuid_example" # str | 

    # example passing only required values which don't have defaults set
    try:
        api_response = api_instance.client_document_retrieve(client_uuid, uuid)
        pprint(api_response)
    except nucoro_api.ApiException as e:
        print("Exception when calling DocumentApi->client_document_retrieve: %s\n" % e)
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **client_uuid** | **str**|  |
 **uuid** | **str**|  |

### Return type

[**Document**](Document.md)

### Authorization

[cookieAuth](../README.md#cookieAuth), [jwtAuth](../README.md#jwtAuth), [tokenAuth](../README.md#tokenAuth)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json


### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** |  |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

