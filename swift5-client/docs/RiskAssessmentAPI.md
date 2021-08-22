# RiskAssessmentAPI

All URIs are relative to *http://localhost*

Method | HTTP request | Description
------------- | ------------- | -------------
[**clientRiskAssessmentCreate**](RiskAssessmentAPI.md#clientriskassessmentcreate) | **POST** /api/v2/clients/{client_uuid}/risk-assessments/ | 
[**clientRiskAssessmentDelete**](RiskAssessmentAPI.md#clientriskassessmentdelete) | **DELETE** /api/v2/clients/{client_uuid}/risk-assessments/{assessment_uuid}/ | 
[**clientRiskAssessmentList**](RiskAssessmentAPI.md#clientriskassessmentlist) | **GET** /api/v2/clients/{client_uuid}/risk-assessments/ | 
[**clientRiskAssessmentPartialUpdate**](RiskAssessmentAPI.md#clientriskassessmentpartialupdate) | **PATCH** /api/v2/clients/{client_uuid}/risk-assessments/{assessment_uuid}/ | 
[**clientRiskAssessmentRetrieve**](RiskAssessmentAPI.md#clientriskassessmentretrieve) | **GET** /api/v2/clients/{client_uuid}/risk-assessments/{assessment_uuid}/ | 


# **clientRiskAssessmentCreate**
```swift
    open class func clientRiskAssessmentCreate(clientUuid: UUID, assessment: Assessment, completion: @escaping (_ data: Assessment?, _ error: Error?) -> Void)
```



Create a risk assessment for a client

### Example
```swift
// The following code samples are still beta. For any issue, please report via http://github.com/OpenAPITools/openapi-generator/issues/new
import OpenAPIClient

let clientUuid = 987 // UUID | 
let assessment = Assessment(uuid: 123, completed: Date(), choices: [RiskChoiceQuestionCode(code: "code_example", order: 123, description: "description_example", created: Date(), questionCode: "questionCode_example")], status: AssessmentStatusEnum(), riskLevel: 123, created: Date()) // Assessment | 

RiskAssessmentAPI.clientRiskAssessmentCreate(clientUuid: clientUuid, assessment: assessment) { (response, error) in
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
 **clientUuid** | [**UUID**](.md) |  | 
 **assessment** | [**Assessment**](Assessment.md) |  | 

### Return type

[**Assessment**](Assessment.md)

### Authorization

[cookieAuth](../README.md#cookieAuth), [jwtAuth](../README.md#jwtAuth), [tokenAuth](../README.md#tokenAuth)

### HTTP request headers

 - **Content-Type**: application/json, application/x-www-form-urlencoded, multipart/form-data
 - **Accept**: application/json

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **clientRiskAssessmentDelete**
```swift
    open class func clientRiskAssessmentDelete(assessmentUuid: UUID, clientUuid: UUID, completion: @escaping (_ data: Void?, _ error: Error?) -> Void)
```



Delete a client risk assessment

### Example
```swift
// The following code samples are still beta. For any issue, please report via http://github.com/OpenAPITools/openapi-generator/issues/new
import OpenAPIClient

let assessmentUuid = 987 // UUID | 
let clientUuid = 987 // UUID | 

RiskAssessmentAPI.clientRiskAssessmentDelete(assessmentUuid: assessmentUuid, clientUuid: clientUuid) { (response, error) in
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
 **assessmentUuid** | [**UUID**](.md) |  | 
 **clientUuid** | [**UUID**](.md) |  | 

### Return type

Void (empty response body)

### Authorization

[cookieAuth](../README.md#cookieAuth), [jwtAuth](../README.md#jwtAuth), [tokenAuth](../README.md#tokenAuth)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: Not defined

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **clientRiskAssessmentList**
```swift
    open class func clientRiskAssessmentList(clientUuid: UUID, limit: Int? = nil, offset: Int? = nil, status: [String]? = nil, completion: @escaping (_ data: PaginatedAssessmentList?, _ error: Error?) -> Void)
```



List Risk Assessment for a client

### Example
```swift
// The following code samples are still beta. For any issue, please report via http://github.com/OpenAPITools/openapi-generator/issues/new
import OpenAPIClient

let clientUuid = 987 // UUID | 
let limit = 987 // Int | Number of results to return per page. (optional)
let offset = 987 // Int | The initial index from which to return the results. (optional)
let status = ["status_example"] // [String] |  (optional)

RiskAssessmentAPI.clientRiskAssessmentList(clientUuid: clientUuid, limit: limit, offset: offset, status: status) { (response, error) in
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
 **clientUuid** | [**UUID**](.md) |  | 
 **limit** | **Int** | Number of results to return per page. | [optional] 
 **offset** | **Int** | The initial index from which to return the results. | [optional] 
 **status** | [**[String]**](String.md) |  | [optional] 

### Return type

[**PaginatedAssessmentList**](PaginatedAssessmentList.md)

### Authorization

[cookieAuth](../README.md#cookieAuth), [jwtAuth](../README.md#jwtAuth), [tokenAuth](../README.md#tokenAuth)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **clientRiskAssessmentPartialUpdate**
```swift
    open class func clientRiskAssessmentPartialUpdate(assessmentUuid: UUID, clientUuid: UUID, patchedAssessment: PatchedAssessment? = nil, completion: @escaping (_ data: Assessment?, _ error: Error?) -> Void)
```



Partial Update a client risk assessment

### Example
```swift
// The following code samples are still beta. For any issue, please report via http://github.com/OpenAPITools/openapi-generator/issues/new
import OpenAPIClient

let assessmentUuid = 987 // UUID | 
let clientUuid = 987 // UUID | 
let patchedAssessment = PatchedAssessment(uuid: 123, completed: Date(), choices: [RiskChoiceQuestionCode(code: "code_example", order: 123, description: "description_example", created: Date(), questionCode: "questionCode_example")], status: AssessmentStatusEnum(), riskLevel: 123, created: Date()) // PatchedAssessment |  (optional)

RiskAssessmentAPI.clientRiskAssessmentPartialUpdate(assessmentUuid: assessmentUuid, clientUuid: clientUuid, patchedAssessment: patchedAssessment) { (response, error) in
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
 **assessmentUuid** | [**UUID**](.md) |  | 
 **clientUuid** | [**UUID**](.md) |  | 
 **patchedAssessment** | [**PatchedAssessment**](PatchedAssessment.md) |  | [optional] 

### Return type

[**Assessment**](Assessment.md)

### Authorization

[cookieAuth](../README.md#cookieAuth), [jwtAuth](../README.md#jwtAuth), [tokenAuth](../README.md#tokenAuth)

### HTTP request headers

 - **Content-Type**: application/json, application/x-www-form-urlencoded, multipart/form-data
 - **Accept**: application/json

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **clientRiskAssessmentRetrieve**
```swift
    open class func clientRiskAssessmentRetrieve(assessmentUuid: UUID, clientUuid: UUID, completion: @escaping (_ data: Assessment?, _ error: Error?) -> Void)
```



Retrieve a client risk assessment

### Example
```swift
// The following code samples are still beta. For any issue, please report via http://github.com/OpenAPITools/openapi-generator/issues/new
import OpenAPIClient

let assessmentUuid = 987 // UUID | 
let clientUuid = 987 // UUID | 

RiskAssessmentAPI.clientRiskAssessmentRetrieve(assessmentUuid: assessmentUuid, clientUuid: clientUuid) { (response, error) in
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
 **assessmentUuid** | [**UUID**](.md) |  | 
 **clientUuid** | [**UUID**](.md) |  | 

### Return type

[**Assessment**](Assessment.md)

### Authorization

[cookieAuth](../README.md#cookieAuth), [jwtAuth](../README.md#jwtAuth), [tokenAuth](../README.md#tokenAuth)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

