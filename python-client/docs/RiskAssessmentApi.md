# openapi_client.RiskAssessmentApi

All URIs are relative to *http://localhost*

Method | HTTP request | Description
------------- | ------------- | -------------
[**client_risk_assessment_create**](RiskAssessmentApi.md#client_risk_assessment_create) | **POST** /api/v2/clients/{client_uuid}/risk-assessments/ | 
[**client_risk_assessment_delete**](RiskAssessmentApi.md#client_risk_assessment_delete) | **DELETE** /api/v2/clients/{client_uuid}/risk-assessments/{assessment_uuid}/ | 
[**client_risk_assessment_list**](RiskAssessmentApi.md#client_risk_assessment_list) | **GET** /api/v2/clients/{client_uuid}/risk-assessments/ | 
[**client_risk_assessment_partial_update**](RiskAssessmentApi.md#client_risk_assessment_partial_update) | **PATCH** /api/v2/clients/{client_uuid}/risk-assessments/{assessment_uuid}/ | 
[**client_risk_assessment_retrieve**](RiskAssessmentApi.md#client_risk_assessment_retrieve) | **GET** /api/v2/clients/{client_uuid}/risk-assessments/{assessment_uuid}/ | 


# **client_risk_assessment_create**
> Assessment client_risk_assessment_create(client_uuid, assessment)



Create a risk assessment for a client

### Example

* Api Key Authentication (cookieAuth):
* Bearer (Bearer) Authentication (jwtAuth):
* Api Key Authentication (tokenAuth):

```python
import time
import openapi_client
from openapi_client.api import risk_assessment_api
from openapi_client.model.assessment import Assessment
from pprint import pprint
# Defining the host is optional and defaults to http://localhost
# See configuration.py for a list of all supported configuration parameters.
configuration = openapi_client.Configuration(
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

# Configure Bearer authorization (Bearer): jwtAuth
configuration = openapi_client.Configuration(
    access_token = 'YOUR_BEARER_TOKEN'
)

# Configure API key authorization: tokenAuth
configuration.api_key['tokenAuth'] = 'YOUR_API_KEY'

# Uncomment below to setup prefix (e.g. Bearer) for API key, if needed
# configuration.api_key_prefix['tokenAuth'] = 'Bearer'

# Enter a context with an instance of the API client
with openapi_client.ApiClient(configuration) as api_client:
    # Create an instance of the API class
    api_instance = risk_assessment_api.RiskAssessmentApi(api_client)
    client_uuid = "client_uuid_example" # str | 
    assessment = Assessment(
        completed=dateutil_parser('1970-01-01T00:00:00.00Z'),
        choices=[
            RiskChoiceQuestionCode(
                code="z",
                order=0,
                description="description_example",
                question_code="question_code_example",
            ),
        ],
        status=AssessmentStatusEnum("PENDING"),
    ) # Assessment | 

    # example passing only required values which don't have defaults set
    try:
        api_response = api_instance.client_risk_assessment_create(client_uuid, assessment)
        pprint(api_response)
    except openapi_client.ApiException as e:
        print("Exception when calling RiskAssessmentApi->client_risk_assessment_create: %s\n" % e)
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **client_uuid** | **str**|  |
 **assessment** | [**Assessment**](Assessment.md)|  |

### Return type

[**Assessment**](Assessment.md)

### Authorization

[cookieAuth](../README.md#cookieAuth), [jwtAuth](../README.md#jwtAuth), [tokenAuth](../README.md#tokenAuth)

### HTTP request headers

 - **Content-Type**: application/json, application/x-www-form-urlencoded, multipart/form-data
 - **Accept**: application/json


### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**201** |  |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **client_risk_assessment_delete**
> client_risk_assessment_delete(assessment_uuid, client_uuid)



Delete a client risk assessment

### Example

* Api Key Authentication (cookieAuth):
* Bearer (Bearer) Authentication (jwtAuth):
* Api Key Authentication (tokenAuth):

```python
import time
import openapi_client
from openapi_client.api import risk_assessment_api
from pprint import pprint
# Defining the host is optional and defaults to http://localhost
# See configuration.py for a list of all supported configuration parameters.
configuration = openapi_client.Configuration(
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

# Configure Bearer authorization (Bearer): jwtAuth
configuration = openapi_client.Configuration(
    access_token = 'YOUR_BEARER_TOKEN'
)

# Configure API key authorization: tokenAuth
configuration.api_key['tokenAuth'] = 'YOUR_API_KEY'

# Uncomment below to setup prefix (e.g. Bearer) for API key, if needed
# configuration.api_key_prefix['tokenAuth'] = 'Bearer'

# Enter a context with an instance of the API client
with openapi_client.ApiClient(configuration) as api_client:
    # Create an instance of the API class
    api_instance = risk_assessment_api.RiskAssessmentApi(api_client)
    assessment_uuid = "assessment_uuid_example" # str | 
    client_uuid = "client_uuid_example" # str | 

    # example passing only required values which don't have defaults set
    try:
        api_instance.client_risk_assessment_delete(assessment_uuid, client_uuid)
    except openapi_client.ApiException as e:
        print("Exception when calling RiskAssessmentApi->client_risk_assessment_delete: %s\n" % e)
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **assessment_uuid** | **str**|  |
 **client_uuid** | **str**|  |

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

# **client_risk_assessment_list**
> PaginatedAssessmentList client_risk_assessment_list(client_uuid)



List Risk Assessment for a client

### Example

* Api Key Authentication (cookieAuth):
* Bearer (Bearer) Authentication (jwtAuth):
* Api Key Authentication (tokenAuth):

```python
import time
import openapi_client
from openapi_client.api import risk_assessment_api
from openapi_client.model.paginated_assessment_list import PaginatedAssessmentList
from pprint import pprint
# Defining the host is optional and defaults to http://localhost
# See configuration.py for a list of all supported configuration parameters.
configuration = openapi_client.Configuration(
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

# Configure Bearer authorization (Bearer): jwtAuth
configuration = openapi_client.Configuration(
    access_token = 'YOUR_BEARER_TOKEN'
)

# Configure API key authorization: tokenAuth
configuration.api_key['tokenAuth'] = 'YOUR_API_KEY'

# Uncomment below to setup prefix (e.g. Bearer) for API key, if needed
# configuration.api_key_prefix['tokenAuth'] = 'Bearer'

# Enter a context with an instance of the API client
with openapi_client.ApiClient(configuration) as api_client:
    # Create an instance of the API class
    api_instance = risk_assessment_api.RiskAssessmentApi(api_client)
    client_uuid = "client_uuid_example" # str | 
    limit = 1 # int | Number of results to return per page. (optional)
    offset = 1 # int | The initial index from which to return the results. (optional)
    status = [
        "COMPLETED",
    ] # [str] |  (optional)

    # example passing only required values which don't have defaults set
    try:
        api_response = api_instance.client_risk_assessment_list(client_uuid)
        pprint(api_response)
    except openapi_client.ApiException as e:
        print("Exception when calling RiskAssessmentApi->client_risk_assessment_list: %s\n" % e)

    # example passing only required values which don't have defaults set
    # and optional values
    try:
        api_response = api_instance.client_risk_assessment_list(client_uuid, limit=limit, offset=offset, status=status)
        pprint(api_response)
    except openapi_client.ApiException as e:
        print("Exception when calling RiskAssessmentApi->client_risk_assessment_list: %s\n" % e)
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **client_uuid** | **str**|  |
 **limit** | **int**| Number of results to return per page. | [optional]
 **offset** | **int**| The initial index from which to return the results. | [optional]
 **status** | **[str]**|  | [optional]

### Return type

[**PaginatedAssessmentList**](PaginatedAssessmentList.md)

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

# **client_risk_assessment_partial_update**
> Assessment client_risk_assessment_partial_update(assessment_uuid, client_uuid)



Partial Update a client risk assessment

### Example

* Api Key Authentication (cookieAuth):
* Bearer (Bearer) Authentication (jwtAuth):
* Api Key Authentication (tokenAuth):

```python
import time
import openapi_client
from openapi_client.api import risk_assessment_api
from openapi_client.model.patched_assessment import PatchedAssessment
from openapi_client.model.assessment import Assessment
from pprint import pprint
# Defining the host is optional and defaults to http://localhost
# See configuration.py for a list of all supported configuration parameters.
configuration = openapi_client.Configuration(
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

# Configure Bearer authorization (Bearer): jwtAuth
configuration = openapi_client.Configuration(
    access_token = 'YOUR_BEARER_TOKEN'
)

# Configure API key authorization: tokenAuth
configuration.api_key['tokenAuth'] = 'YOUR_API_KEY'

# Uncomment below to setup prefix (e.g. Bearer) for API key, if needed
# configuration.api_key_prefix['tokenAuth'] = 'Bearer'

# Enter a context with an instance of the API client
with openapi_client.ApiClient(configuration) as api_client:
    # Create an instance of the API class
    api_instance = risk_assessment_api.RiskAssessmentApi(api_client)
    assessment_uuid = "assessment_uuid_example" # str | 
    client_uuid = "client_uuid_example" # str | 
    patched_assessment = PatchedAssessment(
        completed=dateutil_parser('1970-01-01T00:00:00.00Z'),
        choices=[
            RiskChoiceQuestionCode(
                code="z",
                order=0,
                description="description_example",
                question_code="question_code_example",
            ),
        ],
        status=AssessmentStatusEnum("PENDING"),
    ) # PatchedAssessment |  (optional)

    # example passing only required values which don't have defaults set
    try:
        api_response = api_instance.client_risk_assessment_partial_update(assessment_uuid, client_uuid)
        pprint(api_response)
    except openapi_client.ApiException as e:
        print("Exception when calling RiskAssessmentApi->client_risk_assessment_partial_update: %s\n" % e)

    # example passing only required values which don't have defaults set
    # and optional values
    try:
        api_response = api_instance.client_risk_assessment_partial_update(assessment_uuid, client_uuid, patched_assessment=patched_assessment)
        pprint(api_response)
    except openapi_client.ApiException as e:
        print("Exception when calling RiskAssessmentApi->client_risk_assessment_partial_update: %s\n" % e)
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **assessment_uuid** | **str**|  |
 **client_uuid** | **str**|  |
 **patched_assessment** | [**PatchedAssessment**](PatchedAssessment.md)|  | [optional]

### Return type

[**Assessment**](Assessment.md)

### Authorization

[cookieAuth](../README.md#cookieAuth), [jwtAuth](../README.md#jwtAuth), [tokenAuth](../README.md#tokenAuth)

### HTTP request headers

 - **Content-Type**: application/json, application/x-www-form-urlencoded, multipart/form-data
 - **Accept**: application/json


### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** |  |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **client_risk_assessment_retrieve**
> Assessment client_risk_assessment_retrieve(assessment_uuid, client_uuid)



Retrieve a client risk assessment

### Example

* Api Key Authentication (cookieAuth):
* Bearer (Bearer) Authentication (jwtAuth):
* Api Key Authentication (tokenAuth):

```python
import time
import openapi_client
from openapi_client.api import risk_assessment_api
from openapi_client.model.assessment import Assessment
from pprint import pprint
# Defining the host is optional and defaults to http://localhost
# See configuration.py for a list of all supported configuration parameters.
configuration = openapi_client.Configuration(
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

# Configure Bearer authorization (Bearer): jwtAuth
configuration = openapi_client.Configuration(
    access_token = 'YOUR_BEARER_TOKEN'
)

# Configure API key authorization: tokenAuth
configuration.api_key['tokenAuth'] = 'YOUR_API_KEY'

# Uncomment below to setup prefix (e.g. Bearer) for API key, if needed
# configuration.api_key_prefix['tokenAuth'] = 'Bearer'

# Enter a context with an instance of the API client
with openapi_client.ApiClient(configuration) as api_client:
    # Create an instance of the API class
    api_instance = risk_assessment_api.RiskAssessmentApi(api_client)
    assessment_uuid = "assessment_uuid_example" # str | 
    client_uuid = "client_uuid_example" # str | 

    # example passing only required values which don't have defaults set
    try:
        api_response = api_instance.client_risk_assessment_retrieve(assessment_uuid, client_uuid)
        pprint(api_response)
    except openapi_client.ApiException as e:
        print("Exception when calling RiskAssessmentApi->client_risk_assessment_retrieve: %s\n" % e)
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **assessment_uuid** | **str**|  |
 **client_uuid** | **str**|  |

### Return type

[**Assessment**](Assessment.md)

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

