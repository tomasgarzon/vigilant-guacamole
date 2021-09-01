# \ApiApi

All URIs are relative to *http://localhost*

Method | HTTP request | Description
------------- | ------------- | -------------
[**ApiSchemaRetrieve**](ApiApi.md#ApiSchemaRetrieve) | **Get** /api/schema/ | 
[**ApiV2AdviceEnginesEtsCategoriesList**](ApiApi.md#ApiV2AdviceEnginesEtsCategoriesList) | **Get** /api/v2/advice-engines/ets/categories/ | 
[**ApiV2AdviceEnginesEtsCoreCategoryGroupsList**](ApiApi.md#ApiV2AdviceEnginesEtsCoreCategoryGroupsList) | **Get** /api/v2/advice-engines/ets/core-category-groups/ | 
[**ApiV2AdviceEnginesEtsForecastCreate**](ApiApi.md#ApiV2AdviceEnginesEtsForecastCreate) | **Post** /api/v2/advice-engines/ets/forecast/ | 
[**ApiV2AdviceEnginesEtsPresetCategoryGroupsList**](ApiApi.md#ApiV2AdviceEnginesEtsPresetCategoryGroupsList) | **Get** /api/v2/advice-engines/ets/preset-category-groups/ | 
[**ApiV2AdviceEnginesModelPortfolioForecastCreate**](ApiApi.md#ApiV2AdviceEnginesModelPortfolioForecastCreate) | **Post** /api/v2/advice-engines/model-portfolio/forecast/ | 
[**ApiV2AdviceEnginesModelPortfolioModelPortfoliosList**](ApiApi.md#ApiV2AdviceEnginesModelPortfolioModelPortfoliosList) | **Get** /api/v2/advice-engines/model-portfolio/model-portfolios/ | 
[**ApiV2AdviceEnginesModelPortfolioModelPortfoliosRetrieve**](ApiApi.md#ApiV2AdviceEnginesModelPortfolioModelPortfoliosRetrieve) | **Get** /api/v2/advice-engines/model-portfolio/model-portfolios/{uuid}/ | 
[**ApiV2AssetsCategoriesList**](ApiApi.md#ApiV2AssetsCategoriesList) | **Get** /api/v2/assets/categories/ | 
[**ApiV2AssetsIntradayPricesLatestRetrieve**](ApiApi.md#ApiV2AssetsIntradayPricesLatestRetrieve) | **Get** /api/v2/assets/{asset_identifier}/intraday-prices/latest/ | 
[**ApiV2AssetsIntradayPricesList**](ApiApi.md#ApiV2AssetsIntradayPricesList) | **Get** /api/v2/assets/{asset_identifier}/intraday-prices/ | 
[**ApiV2AssetsList**](ApiApi.md#ApiV2AssetsList) | **Get** /api/v2/assets/ | 
[**ApiV2AssetsPerformanceList**](ApiApi.md#ApiV2AssetsPerformanceList) | **Get** /api/v2/assets/{asset_identifier}/performance/ | 
[**ApiV2AssetsPricesLatestRetrieve**](ApiApi.md#ApiV2AssetsPricesLatestRetrieve) | **Get** /api/v2/assets/{asset_identifier}/prices/latest/ | 
[**ApiV2AssetsPricesList**](ApiApi.md#ApiV2AssetsPricesList) | **Get** /api/v2/assets/{asset_identifier}/prices/ | 
[**ApiV2AssetsRetrieve**](ApiApi.md#ApiV2AssetsRetrieve) | **Get** /api/v2/assets/{asset_identifier}/ | 
[**ApiV2BillingInvoicesList**](ApiApi.md#ApiV2BillingInvoicesList) | **Get** /api/v2/billing/invoices/ | 
[**ApiV2BillingInvoicesRetrieve**](ApiApi.md#ApiV2BillingInvoicesRetrieve) | **Get** /api/v2/billing/invoices/{uuid}/ | 
[**ApiV2BrokerOrdersCreate**](ApiApi.md#ApiV2BrokerOrdersCreate) | **Post** /api/v2/broker/orders/ | 
[**ApiV2BrokerOrdersDestroy**](ApiApi.md#ApiV2BrokerOrdersDestroy) | **Delete** /api/v2/broker/orders/{uuid}/ | 
[**ApiV2BrokerOrdersList**](ApiApi.md#ApiV2BrokerOrdersList) | **Get** /api/v2/broker/orders/ | 
[**ApiV2BrokerOrdersRetrieve**](ApiApi.md#ApiV2BrokerOrdersRetrieve) | **Get** /api/v2/broker/orders/{uuid}/ | 
[**ApiV2ClientsMeVerifyEmailCreate**](ApiApi.md#ApiV2ClientsMeVerifyEmailCreate) | **Post** /api/v2/clients/me/verify/email/ | 
[**ApiV2ClientsNationalDocumentsList**](ApiApi.md#ApiV2ClientsNationalDocumentsList) | **Get** /api/v2/clients/national_documents/ | 
[**ApiV2ClientsReferralRetrieve**](ApiApi.md#ApiV2ClientsReferralRetrieve) | **Get** /api/v2/clients/referral/{referral_code}/ | 
[**ApiV2ClientsVerifyEmailUpdate**](ApiApi.md#ApiV2ClientsVerifyEmailUpdate) | **Put** /api/v2/clients/{uuid}/verify/email/ | 
[**ApiV2FeedsAccessLogsList**](ApiApi.md#ApiV2FeedsAccessLogsList) | **Get** /api/v2/feeds/access-logs/ | 
[**ApiV2FeedsActivitiesList**](ApiApi.md#ApiV2FeedsActivitiesList) | **Get** /api/v2/feeds/activities/ | 
[**ApiV2GoalsCreate**](ApiApi.md#ApiV2GoalsCreate) | **Post** /api/v2/goals/ | 
[**ApiV2GoalsDecumulationCreate**](ApiApi.md#ApiV2GoalsDecumulationCreate) | **Post** /api/v2/goals/decumulation/ | 
[**ApiV2GoalsDestroy**](ApiApi.md#ApiV2GoalsDestroy) | **Delete** /api/v2/goals/{uuid}/ | 
[**ApiV2GoalsForecastCreate**](ApiApi.md#ApiV2GoalsForecastCreate) | **Post** /api/v2/goals/forecast/ | 
[**ApiV2GoalsList**](ApiApi.md#ApiV2GoalsList) | **Get** /api/v2/goals/ | 
[**ApiV2GoalsPartialUpdate**](ApiApi.md#ApiV2GoalsPartialUpdate) | **Patch** /api/v2/goals/{uuid}/ | 
[**ApiV2GoalsRetrieve**](ApiApi.md#ApiV2GoalsRetrieve) | **Get** /api/v2/goals/{uuid}/ | 
[**ApiV2InboxConversationDetailMessagesList**](ApiApi.md#ApiV2InboxConversationDetailMessagesList) | **Get** /api/v2/inbox/conversations/{conversation}/ | 
[**ApiV2InboxConversationsCreate**](ApiApi.md#ApiV2InboxConversationsCreate) | **Post** /api/v2/inbox/conversations/ | 
[**ApiV2InboxConversationsList**](ApiApi.md#ApiV2InboxConversationsList) | **Get** /api/v2/inbox/conversations/ | 
[**ApiV2InboxConversationsMessagesAttachmentsRetrieve**](ApiApi.md#ApiV2InboxConversationsMessagesAttachmentsRetrieve) | **Get** /api/v2/inbox/conversations/{conversation}/messages/{message}/attachments/{uuid}/ | 
[**ApiV2InboxConversationsMessagesCreate**](ApiApi.md#ApiV2InboxConversationsMessagesCreate) | **Post** /api/v2/inbox/conversations/{conversation}/messages/ | 
[**ApiV2MobileVersionRetrieve**](ApiApi.md#ApiV2MobileVersionRetrieve) | **Get** /api/v2/mobile/{platform}/version/ | 
[**ApiV2PlatformSettingsList**](ApiApi.md#ApiV2PlatformSettingsList) | **Get** /api/v2/platform/settings/ | 
[**ApiV2PortalCountriesList**](ApiApi.md#ApiV2PortalCountriesList) | **Get** /api/v2/portal/countries/ | 
[**ApiV2PortalSettingsRetrieve**](ApiApi.md#ApiV2PortalSettingsRetrieve) | **Get** /api/v2/portal/settings/ | 
[**ApiV2PortalTosCurrentRetrieve**](ApiApi.md#ApiV2PortalTosCurrentRetrieve) | **Get** /api/v2/portal/tos/current/ | 
[**ApiV2PortalTosList**](ApiApi.md#ApiV2PortalTosList) | **Get** /api/v2/portal/tos/ | 
[**ApiV2PortalTosRetrieve**](ApiApi.md#ApiV2PortalTosRetrieve) | **Get** /api/v2/portal/tos/{uuid}/ | 
[**ApiV2PortfoliosActivitiesList**](ApiApi.md#ApiV2PortfoliosActivitiesList) | **Get** /api/v2/portfolios/{portfolio_uuid}/activities/ | 
[**ApiV2PortfoliosActivitiesRetrieve**](ApiApi.md#ApiV2PortfoliosActivitiesRetrieve) | **Get** /api/v2/portfolios/{portfolio_uuid}/activities/{uuid}/ | 
[**ApiV2PortfoliosAllocationsEndDay**](ApiApi.md#ApiV2PortfoliosAllocationsEndDay) | **Get** /api/v2/portfolios/{portfolio_uuid}/allocations/end-day/ | 
[**ApiV2PortfoliosAllocationsEndDayByDateRetrieve**](ApiApi.md#ApiV2PortfoliosAllocationsEndDayByDateRetrieve) | **Get** /api/v2/portfolios/{portfolio_uuid}/allocations/end-day/{allocation_date}/ | 
[**ApiV2PortfoliosAllocationsEndDayLatestRetrieve**](ApiApi.md#ApiV2PortfoliosAllocationsEndDayLatestRetrieve) | **Get** /api/v2/portfolios/{portfolio_uuid}/allocations/end-day/latest/ | 
[**ApiV2PortfoliosAllocationsHistoryRetrieve**](ApiApi.md#ApiV2PortfoliosAllocationsHistoryRetrieve) | **Get** /api/v2/portfolios/{portfolio}/allocations/history/ | 
[**ApiV2PortfoliosAllocationsIntradayLatestRetrieve**](ApiApi.md#ApiV2PortfoliosAllocationsIntradayLatestRetrieve) | **Get** /api/v2/portfolios/{portfolio_uuid}/allocations/intraday/latest/ | 
[**ApiV2PortfoliosAllocationsList**](ApiApi.md#ApiV2PortfoliosAllocationsList) | **Get** /api/v2/portfolios/{portfolio_uuid}/allocations/ | 
[**ApiV2PortfoliosAllocationsRetrieve**](ApiApi.md#ApiV2PortfoliosAllocationsRetrieve) | **Get** /api/v2/portfolios/{portfolio_uuid}/allocations/{id}/ | 
[**ApiV2PortfoliosCreate**](ApiApi.md#ApiV2PortfoliosCreate) | **Post** /api/v2/portfolios/ | 
[**ApiV2PortfoliosDepositsCreate**](ApiApi.md#ApiV2PortfoliosDepositsCreate) | **Post** /api/v2/portfolios/{portfolio_uuid}/deposits/ | 
[**ApiV2PortfoliosDepositsDestroy**](ApiApi.md#ApiV2PortfoliosDepositsDestroy) | **Delete** /api/v2/portfolios/{portfolio_uuid}/deposits/{uuid}/ | 
[**ApiV2PortfoliosDepositsList**](ApiApi.md#ApiV2PortfoliosDepositsList) | **Get** /api/v2/portfolios/{portfolio_uuid}/deposits/ | 
[**ApiV2PortfoliosDepositsRetrieve**](ApiApi.md#ApiV2PortfoliosDepositsRetrieve) | **Get** /api/v2/portfolios/{portfolio_uuid}/deposits/{uuid}/ | 
[**ApiV2PortfoliosDestroy**](ApiApi.md#ApiV2PortfoliosDestroy) | **Delete** /api/v2/portfolios/{uuid}/ | 
[**ApiV2PortfoliosList**](ApiApi.md#ApiV2PortfoliosList) | **Get** /api/v2/portfolios/ | 
[**ApiV2PortfoliosOrdersCreate**](ApiApi.md#ApiV2PortfoliosOrdersCreate) | **Post** /api/v2/portfolios/{portfolio_uuid}/orders/ | 
[**ApiV2PortfoliosOrdersDestroy**](ApiApi.md#ApiV2PortfoliosOrdersDestroy) | **Delete** /api/v2/portfolios/{portfolio_uuid}/orders/{uuid}/ | 
[**ApiV2PortfoliosOrdersList**](ApiApi.md#ApiV2PortfoliosOrdersList) | **Get** /api/v2/portfolios/{portfolio_uuid}/orders/ | 
[**ApiV2PortfoliosOrdersRetrieve**](ApiApi.md#ApiV2PortfoliosOrdersRetrieve) | **Get** /api/v2/portfolios/{portfolio_uuid}/orders/{uuid}/ | 
[**ApiV2PortfoliosPartialUpdate**](ApiApi.md#ApiV2PortfoliosPartialUpdate) | **Patch** /api/v2/portfolios/{uuid}/ | 
[**ApiV2PortfoliosPerformanceMwrrList**](ApiApi.md#ApiV2PortfoliosPerformanceMwrrList) | **Get** /api/v2/portfolios/{portfolio_uuid}/performance/mwrr/ | 
[**ApiV2PortfoliosPerformancePositionsList**](ApiApi.md#ApiV2PortfoliosPerformancePositionsList) | **Get** /api/v2/portfolios/{portfolio_uuid}/performance/positions/ | 
[**ApiV2PortfoliosPerformanceTwrrList**](ApiApi.md#ApiV2PortfoliosPerformanceTwrrList) | **Get** /api/v2/portfolios/{portfolio_uuid}/performance/twrr/ | 
[**ApiV2PortfoliosPortfoliotypesList**](ApiApi.md#ApiV2PortfoliosPortfoliotypesList) | **Get** /api/v2/portfolios/portfoliotypes/ | 
[**ApiV2PortfoliosPortfoliotypesRestrictionsList**](ApiApi.md#ApiV2PortfoliosPortfoliotypesRestrictionsList) | **Get** /api/v2/portfolios/portfoliotypes/{code}/restrictions/ | 
[**ApiV2PortfoliosRebalancesList**](ApiApi.md#ApiV2PortfoliosRebalancesList) | **Get** /api/v2/portfolios/{portfolio_uuid}/rebalances/ | 
[**ApiV2PortfoliosRebalancesRetrieve**](ApiApi.md#ApiV2PortfoliosRebalancesRetrieve) | **Get** /api/v2/portfolios/{portfolio_uuid}/rebalances/{uuid}/ | 
[**ApiV2PortfoliosRestrictionsRetrieve**](ApiApi.md#ApiV2PortfoliosRestrictionsRetrieve) | **Get** /api/v2/portfolios/{uuid}/restrictions/ | 
[**ApiV2PortfoliosRetrieve**](ApiApi.md#ApiV2PortfoliosRetrieve) | **Get** /api/v2/portfolios/{uuid}/ | 
[**ApiV2PortfoliosUpdate**](ApiApi.md#ApiV2PortfoliosUpdate) | **Put** /api/v2/portfolios/{uuid}/ | 
[**ApiV2PortfoliosWithdrawalsCreate**](ApiApi.md#ApiV2PortfoliosWithdrawalsCreate) | **Post** /api/v2/portfolios/{portfolio_uuid}/withdrawals/ | 
[**ApiV2PortfoliosWithdrawalsDestroy**](ApiApi.md#ApiV2PortfoliosWithdrawalsDestroy) | **Delete** /api/v2/portfolios/{portfolio_uuid}/withdrawals/{uuid}/ | 
[**ApiV2PortfoliosWithdrawalsList**](ApiApi.md#ApiV2PortfoliosWithdrawalsList) | **Get** /api/v2/portfolios/{portfolio_uuid}/withdrawals/ | 
[**ApiV2PortfoliosWithdrawalsRetrieve**](ApiApi.md#ApiV2PortfoliosWithdrawalsRetrieve) | **Get** /api/v2/portfolios/{portfolio_uuid}/withdrawals/{uuid}/ | 
[**ApiV2RiskQuestionsList**](ApiApi.md#ApiV2RiskQuestionsList) | **Get** /api/v2/risk/questions/ | 
[**ApiV2VerificationsVerifierWebhookCreate**](ApiApi.md#ApiV2VerificationsVerifierWebhookCreate) | **Post** /api/v2/verifications/verifier_webhook/{verifier}/{action}/ | 
[**ApiV2WebsocketAuthenticationTicketCreate**](ApiApi.md#ApiV2WebsocketAuthenticationTicketCreate) | **Post** /api/v2/websocket/authentication/ticket/ | 
[**ApiV2WebsocketAuthorizeAssetCreate**](ApiApi.md#ApiV2WebsocketAuthorizeAssetCreate) | **Post** /api/v2/websocket/authorize/asset/ | 
[**ApiV2WebsocketAuthorizeCreate**](ApiApi.md#ApiV2WebsocketAuthorizeCreate) | **Post** /api/v2/websocket/authorize/ | 
[**ApiV2WebsocketAuthorizePortfolioCreate**](ApiApi.md#ApiV2WebsocketAuthorizePortfolioCreate) | **Post** /api/v2/websocket/authorize/portfolio/ | 
[**ApiV2WebsocketOnSubscribeCreate**](ApiApi.md#ApiV2WebsocketOnSubscribeCreate) | **Post** /api/v2/websocket/on_subscribe/ | 
[**ApiV2WebsocketOnUnsubscribeCreate**](ApiApi.md#ApiV2WebsocketOnUnsubscribeCreate) | **Post** /api/v2/websocket/on_unsubscribe/ | 



## ApiSchemaRetrieve

> map[string]interface{} ApiSchemaRetrieve(ctx).Format(format).Lang(lang).Execute()





### Example

```go
package main

import (
    "context"
    "fmt"
    "os"
    openapiclient "./openapi"
)

func main() {
    format := "format_example" // string |  (optional)
    lang := "lang_example" // string |  (optional)

    configuration := openapiclient.NewConfiguration()
    api_client := openapiclient.NewAPIClient(configuration)
    resp, r, err := api_client.ApiApi.ApiSchemaRetrieve(context.Background()).Format(format).Lang(lang).Execute()
    if err != nil {
        fmt.Fprintf(os.Stderr, "Error when calling `ApiApi.ApiSchemaRetrieve``: %v\n", err)
        fmt.Fprintf(os.Stderr, "Full HTTP response: %v\n", r)
    }
    // response from `ApiSchemaRetrieve`: map[string]interface{}
    fmt.Fprintf(os.Stdout, "Response from `ApiApi.ApiSchemaRetrieve`: %v\n", resp)
}
```

### Path Parameters



### Other Parameters

Other parameters are passed through a pointer to a apiApiSchemaRetrieveRequest struct via the builder pattern


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **format** | **string** |  | 
 **lang** | **string** |  | 

### Return type

**map[string]interface{}**

### Authorization

[cookieAuth](../README.md#cookieAuth), [jwtAuth](../README.md#jwtAuth), [tokenAuth](../README.md#tokenAuth)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/vnd.oai.openapi, application/yaml, application/vnd.oai.openapi+json, application/json

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints)
[[Back to Model list]](../README.md#documentation-for-models)
[[Back to README]](../README.md)


## ApiV2AdviceEnginesEtsCategoriesList

> PaginatedCategoryList ApiV2AdviceEnginesEtsCategoriesList(ctx).Limit(limit).Offset(offset).Execute()



### Example

```go
package main

import (
    "context"
    "fmt"
    "os"
    openapiclient "./openapi"
)

func main() {
    limit := int32(56) // int32 | Number of results to return per page. (optional)
    offset := int32(56) // int32 | The initial index from which to return the results. (optional)

    configuration := openapiclient.NewConfiguration()
    api_client := openapiclient.NewAPIClient(configuration)
    resp, r, err := api_client.ApiApi.ApiV2AdviceEnginesEtsCategoriesList(context.Background()).Limit(limit).Offset(offset).Execute()
    if err != nil {
        fmt.Fprintf(os.Stderr, "Error when calling `ApiApi.ApiV2AdviceEnginesEtsCategoriesList``: %v\n", err)
        fmt.Fprintf(os.Stderr, "Full HTTP response: %v\n", r)
    }
    // response from `ApiV2AdviceEnginesEtsCategoriesList`: PaginatedCategoryList
    fmt.Fprintf(os.Stdout, "Response from `ApiApi.ApiV2AdviceEnginesEtsCategoriesList`: %v\n", resp)
}
```

### Path Parameters



### Other Parameters

Other parameters are passed through a pointer to a apiApiV2AdviceEnginesEtsCategoriesListRequest struct via the builder pattern


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **limit** | **int32** | Number of results to return per page. | 
 **offset** | **int32** | The initial index from which to return the results. | 

### Return type

[**PaginatedCategoryList**](PaginatedCategoryList.md)

### Authorization

[cookieAuth](../README.md#cookieAuth), [jwtAuth](../README.md#jwtAuth), [tokenAuth](../README.md#tokenAuth)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints)
[[Back to Model list]](../README.md#documentation-for-models)
[[Back to README]](../README.md)


## ApiV2AdviceEnginesEtsCoreCategoryGroupsList

> PaginatedCoreCategoryGroupList ApiV2AdviceEnginesEtsCoreCategoryGroupsList(ctx).Limit(limit).Offset(offset).Execute()



### Example

```go
package main

import (
    "context"
    "fmt"
    "os"
    openapiclient "./openapi"
)

func main() {
    limit := int32(56) // int32 | Number of results to return per page. (optional)
    offset := int32(56) // int32 | The initial index from which to return the results. (optional)

    configuration := openapiclient.NewConfiguration()
    api_client := openapiclient.NewAPIClient(configuration)
    resp, r, err := api_client.ApiApi.ApiV2AdviceEnginesEtsCoreCategoryGroupsList(context.Background()).Limit(limit).Offset(offset).Execute()
    if err != nil {
        fmt.Fprintf(os.Stderr, "Error when calling `ApiApi.ApiV2AdviceEnginesEtsCoreCategoryGroupsList``: %v\n", err)
        fmt.Fprintf(os.Stderr, "Full HTTP response: %v\n", r)
    }
    // response from `ApiV2AdviceEnginesEtsCoreCategoryGroupsList`: PaginatedCoreCategoryGroupList
    fmt.Fprintf(os.Stdout, "Response from `ApiApi.ApiV2AdviceEnginesEtsCoreCategoryGroupsList`: %v\n", resp)
}
```

### Path Parameters



### Other Parameters

Other parameters are passed through a pointer to a apiApiV2AdviceEnginesEtsCoreCategoryGroupsListRequest struct via the builder pattern


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **limit** | **int32** | Number of results to return per page. | 
 **offset** | **int32** | The initial index from which to return the results. | 

### Return type

[**PaginatedCoreCategoryGroupList**](PaginatedCoreCategoryGroupList.md)

### Authorization

[cookieAuth](../README.md#cookieAuth), [jwtAuth](../README.md#jwtAuth), [tokenAuth](../README.md#tokenAuth)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints)
[[Back to Model list]](../README.md#documentation-for-models)
[[Back to README]](../README.md)


## ApiV2AdviceEnginesEtsForecastCreate

> ETSForecastRequest ApiV2AdviceEnginesEtsForecastCreate(ctx).ETSForecastRequest(eTSForecastRequest).Execute()





### Example

```go
package main

import (
    "context"
    "fmt"
    "os"
    openapiclient "./openapi"
)

func main() {
    eTSForecastRequest := *openapiclient.NewETSForecastRequest(int32(123), float64(123), int32(123)) // ETSForecastRequest | 

    configuration := openapiclient.NewConfiguration()
    api_client := openapiclient.NewAPIClient(configuration)
    resp, r, err := api_client.ApiApi.ApiV2AdviceEnginesEtsForecastCreate(context.Background()).ETSForecastRequest(eTSForecastRequest).Execute()
    if err != nil {
        fmt.Fprintf(os.Stderr, "Error when calling `ApiApi.ApiV2AdviceEnginesEtsForecastCreate``: %v\n", err)
        fmt.Fprintf(os.Stderr, "Full HTTP response: %v\n", r)
    }
    // response from `ApiV2AdviceEnginesEtsForecastCreate`: ETSForecastRequest
    fmt.Fprintf(os.Stdout, "Response from `ApiApi.ApiV2AdviceEnginesEtsForecastCreate`: %v\n", resp)
}
```

### Path Parameters



### Other Parameters

Other parameters are passed through a pointer to a apiApiV2AdviceEnginesEtsForecastCreateRequest struct via the builder pattern


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **eTSForecastRequest** | [**ETSForecastRequest**](ETSForecastRequest.md) |  | 

### Return type

[**ETSForecastRequest**](ETSForecastRequest.md)

### Authorization

[cookieAuth](../README.md#cookieAuth), [jwtAuth](../README.md#jwtAuth), [tokenAuth](../README.md#tokenAuth)

### HTTP request headers

- **Content-Type**: application/json, application/x-www-form-urlencoded, multipart/form-data
- **Accept**: application/json

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints)
[[Back to Model list]](../README.md#documentation-for-models)
[[Back to README]](../README.md)


## ApiV2AdviceEnginesEtsPresetCategoryGroupsList

> PaginatedPresetCategoryGroupList ApiV2AdviceEnginesEtsPresetCategoryGroupsList(ctx).Limit(limit).Offset(offset).Execute()



### Example

```go
package main

import (
    "context"
    "fmt"
    "os"
    openapiclient "./openapi"
)

func main() {
    limit := int32(56) // int32 | Number of results to return per page. (optional)
    offset := int32(56) // int32 | The initial index from which to return the results. (optional)

    configuration := openapiclient.NewConfiguration()
    api_client := openapiclient.NewAPIClient(configuration)
    resp, r, err := api_client.ApiApi.ApiV2AdviceEnginesEtsPresetCategoryGroupsList(context.Background()).Limit(limit).Offset(offset).Execute()
    if err != nil {
        fmt.Fprintf(os.Stderr, "Error when calling `ApiApi.ApiV2AdviceEnginesEtsPresetCategoryGroupsList``: %v\n", err)
        fmt.Fprintf(os.Stderr, "Full HTTP response: %v\n", r)
    }
    // response from `ApiV2AdviceEnginesEtsPresetCategoryGroupsList`: PaginatedPresetCategoryGroupList
    fmt.Fprintf(os.Stdout, "Response from `ApiApi.ApiV2AdviceEnginesEtsPresetCategoryGroupsList`: %v\n", resp)
}
```

### Path Parameters



### Other Parameters

Other parameters are passed through a pointer to a apiApiV2AdviceEnginesEtsPresetCategoryGroupsListRequest struct via the builder pattern


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **limit** | **int32** | Number of results to return per page. | 
 **offset** | **int32** | The initial index from which to return the results. | 

### Return type

[**PaginatedPresetCategoryGroupList**](PaginatedPresetCategoryGroupList.md)

### Authorization

[cookieAuth](../README.md#cookieAuth), [jwtAuth](../README.md#jwtAuth), [tokenAuth](../README.md#tokenAuth)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints)
[[Back to Model list]](../README.md#documentation-for-models)
[[Back to README]](../README.md)


## ApiV2AdviceEnginesModelPortfolioForecastCreate

> ModelPortfolioForecastRequest ApiV2AdviceEnginesModelPortfolioForecastCreate(ctx).ModelPortfolioForecastRequest(modelPortfolioForecastRequest).Execute()





### Example

```go
package main

import (
    "context"
    "fmt"
    "os"
    openapiclient "./openapi"
)

func main() {
    modelPortfolioForecastRequest := *openapiclient.NewModelPortfolioForecastRequest(int32(123), float64(123), "ModelPortfolio_example") // ModelPortfolioForecastRequest | 

    configuration := openapiclient.NewConfiguration()
    api_client := openapiclient.NewAPIClient(configuration)
    resp, r, err := api_client.ApiApi.ApiV2AdviceEnginesModelPortfolioForecastCreate(context.Background()).ModelPortfolioForecastRequest(modelPortfolioForecastRequest).Execute()
    if err != nil {
        fmt.Fprintf(os.Stderr, "Error when calling `ApiApi.ApiV2AdviceEnginesModelPortfolioForecastCreate``: %v\n", err)
        fmt.Fprintf(os.Stderr, "Full HTTP response: %v\n", r)
    }
    // response from `ApiV2AdviceEnginesModelPortfolioForecastCreate`: ModelPortfolioForecastRequest
    fmt.Fprintf(os.Stdout, "Response from `ApiApi.ApiV2AdviceEnginesModelPortfolioForecastCreate`: %v\n", resp)
}
```

### Path Parameters



### Other Parameters

Other parameters are passed through a pointer to a apiApiV2AdviceEnginesModelPortfolioForecastCreateRequest struct via the builder pattern


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **modelPortfolioForecastRequest** | [**ModelPortfolioForecastRequest**](ModelPortfolioForecastRequest.md) |  | 

### Return type

[**ModelPortfolioForecastRequest**](ModelPortfolioForecastRequest.md)

### Authorization

[cookieAuth](../README.md#cookieAuth), [jwtAuth](../README.md#jwtAuth), [tokenAuth](../README.md#tokenAuth)

### HTTP request headers

- **Content-Type**: application/json, application/x-www-form-urlencoded, multipart/form-data
- **Accept**: application/json

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints)
[[Back to Model list]](../README.md#documentation-for-models)
[[Back to README]](../README.md)


## ApiV2AdviceEnginesModelPortfolioModelPortfoliosList

> PaginatedInvestorModelPortfolioList ApiV2AdviceEnginesModelPortfolioModelPortfoliosList(ctx).ExtraData(extraData).Limit(limit).Name(name).Offset(offset).RiskHigher(riskHigher).RiskLevel(riskLevel).RiskLower(riskLower).Execute()



### Example

```go
package main

import (
    "context"
    "fmt"
    "os"
    openapiclient "./openapi"
)

func main() {
    extraData := map[string]interface{}{"key": interface{}(123)} // map[string]interface{} | Additional ModelPortfolio attributes (optional)
    limit := int32(56) // int32 | Number of results to return per page. (optional)
    name := "name_example" // string |  (optional)
    offset := int32(56) // int32 | The initial index from which to return the results. (optional)
    riskHigher := int32(56) // int32 |  (optional)
    riskLevel := int32(56) // int32 |  (optional)
    riskLower := int32(56) // int32 |  (optional)

    configuration := openapiclient.NewConfiguration()
    api_client := openapiclient.NewAPIClient(configuration)
    resp, r, err := api_client.ApiApi.ApiV2AdviceEnginesModelPortfolioModelPortfoliosList(context.Background()).ExtraData(extraData).Limit(limit).Name(name).Offset(offset).RiskHigher(riskHigher).RiskLevel(riskLevel).RiskLower(riskLower).Execute()
    if err != nil {
        fmt.Fprintf(os.Stderr, "Error when calling `ApiApi.ApiV2AdviceEnginesModelPortfolioModelPortfoliosList``: %v\n", err)
        fmt.Fprintf(os.Stderr, "Full HTTP response: %v\n", r)
    }
    // response from `ApiV2AdviceEnginesModelPortfolioModelPortfoliosList`: PaginatedInvestorModelPortfolioList
    fmt.Fprintf(os.Stdout, "Response from `ApiApi.ApiV2AdviceEnginesModelPortfolioModelPortfoliosList`: %v\n", resp)
}
```

### Path Parameters



### Other Parameters

Other parameters are passed through a pointer to a apiApiV2AdviceEnginesModelPortfolioModelPortfoliosListRequest struct via the builder pattern


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **extraData** | **map[string]interface{}** | Additional ModelPortfolio attributes | 
 **limit** | **int32** | Number of results to return per page. | 
 **name** | **string** |  | 
 **offset** | **int32** | The initial index from which to return the results. | 
 **riskHigher** | **int32** |  | 
 **riskLevel** | **int32** |  | 
 **riskLower** | **int32** |  | 

### Return type

[**PaginatedInvestorModelPortfolioList**](PaginatedInvestorModelPortfolioList.md)

### Authorization

[cookieAuth](../README.md#cookieAuth), [jwtAuth](../README.md#jwtAuth), [tokenAuth](../README.md#tokenAuth)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints)
[[Back to Model list]](../README.md#documentation-for-models)
[[Back to README]](../README.md)


## ApiV2AdviceEnginesModelPortfolioModelPortfoliosRetrieve

> InvestorModelPortfolio ApiV2AdviceEnginesModelPortfolioModelPortfoliosRetrieve(ctx, uuid).Execute()



### Example

```go
package main

import (
    "context"
    "fmt"
    "os"
    openapiclient "./openapi"
)

func main() {
    uuid := TODO // string | 

    configuration := openapiclient.NewConfiguration()
    api_client := openapiclient.NewAPIClient(configuration)
    resp, r, err := api_client.ApiApi.ApiV2AdviceEnginesModelPortfolioModelPortfoliosRetrieve(context.Background(), uuid).Execute()
    if err != nil {
        fmt.Fprintf(os.Stderr, "Error when calling `ApiApi.ApiV2AdviceEnginesModelPortfolioModelPortfoliosRetrieve``: %v\n", err)
        fmt.Fprintf(os.Stderr, "Full HTTP response: %v\n", r)
    }
    // response from `ApiV2AdviceEnginesModelPortfolioModelPortfoliosRetrieve`: InvestorModelPortfolio
    fmt.Fprintf(os.Stdout, "Response from `ApiApi.ApiV2AdviceEnginesModelPortfolioModelPortfoliosRetrieve`: %v\n", resp)
}
```

### Path Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
**ctx** | **context.Context** | context for authentication, logging, cancellation, deadlines, tracing, etc.
**uuid** | [**string**](.md) |  | 

### Other Parameters

Other parameters are passed through a pointer to a apiApiV2AdviceEnginesModelPortfolioModelPortfoliosRetrieveRequest struct via the builder pattern


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------


### Return type

[**InvestorModelPortfolio**](InvestorModelPortfolio.md)

### Authorization

[cookieAuth](../README.md#cookieAuth), [jwtAuth](../README.md#jwtAuth), [tokenAuth](../README.md#tokenAuth)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints)
[[Back to Model list]](../README.md#documentation-for-models)
[[Back to README]](../README.md)


## ApiV2AssetsCategoriesList

> PaginatedAssetCategoryList ApiV2AssetsCategoriesList(ctx).Limit(limit).Offset(offset).Type_(type_).Execute()





### Example

```go
package main

import (
    "context"
    "fmt"
    "os"
    openapiclient "./openapi"
)

func main() {
    limit := int32(56) // int32 | Number of results to return per page. (optional)
    offset := int32(56) // int32 | The initial index from which to return the results. (optional)
    type_ := "type__example" // string |  (optional)

    configuration := openapiclient.NewConfiguration()
    api_client := openapiclient.NewAPIClient(configuration)
    resp, r, err := api_client.ApiApi.ApiV2AssetsCategoriesList(context.Background()).Limit(limit).Offset(offset).Type_(type_).Execute()
    if err != nil {
        fmt.Fprintf(os.Stderr, "Error when calling `ApiApi.ApiV2AssetsCategoriesList``: %v\n", err)
        fmt.Fprintf(os.Stderr, "Full HTTP response: %v\n", r)
    }
    // response from `ApiV2AssetsCategoriesList`: PaginatedAssetCategoryList
    fmt.Fprintf(os.Stdout, "Response from `ApiApi.ApiV2AssetsCategoriesList`: %v\n", resp)
}
```

### Path Parameters



### Other Parameters

Other parameters are passed through a pointer to a apiApiV2AssetsCategoriesListRequest struct via the builder pattern


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **limit** | **int32** | Number of results to return per page. | 
 **offset** | **int32** | The initial index from which to return the results. | 
 **type_** | **string** |  | 

### Return type

[**PaginatedAssetCategoryList**](PaginatedAssetCategoryList.md)

### Authorization

[cookieAuth](../README.md#cookieAuth), [jwtAuth](../README.md#jwtAuth), [tokenAuth](../README.md#tokenAuth)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints)
[[Back to Model list]](../README.md#documentation-for-models)
[[Back to README]](../README.md)


## ApiV2AssetsIntradayPricesLatestRetrieve

> IntradayPrice ApiV2AssetsIntradayPricesLatestRetrieve(ctx, assetIdentifier).Execute()





### Example

```go
package main

import (
    "context"
    "fmt"
    "os"
    openapiclient "./openapi"
)

func main() {
    assetIdentifier := TODO // string | 

    configuration := openapiclient.NewConfiguration()
    api_client := openapiclient.NewAPIClient(configuration)
    resp, r, err := api_client.ApiApi.ApiV2AssetsIntradayPricesLatestRetrieve(context.Background(), assetIdentifier).Execute()
    if err != nil {
        fmt.Fprintf(os.Stderr, "Error when calling `ApiApi.ApiV2AssetsIntradayPricesLatestRetrieve``: %v\n", err)
        fmt.Fprintf(os.Stderr, "Full HTTP response: %v\n", r)
    }
    // response from `ApiV2AssetsIntradayPricesLatestRetrieve`: IntradayPrice
    fmt.Fprintf(os.Stdout, "Response from `ApiApi.ApiV2AssetsIntradayPricesLatestRetrieve`: %v\n", resp)
}
```

### Path Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
**ctx** | **context.Context** | context for authentication, logging, cancellation, deadlines, tracing, etc.
**assetIdentifier** | [**string**](.md) |  | 

### Other Parameters

Other parameters are passed through a pointer to a apiApiV2AssetsIntradayPricesLatestRetrieveRequest struct via the builder pattern


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------


### Return type

[**IntradayPrice**](IntradayPrice.md)

### Authorization

[cookieAuth](../README.md#cookieAuth), [jwtAuth](../README.md#jwtAuth), [tokenAuth](../README.md#tokenAuth)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints)
[[Back to Model list]](../README.md#documentation-for-models)
[[Back to README]](../README.md)


## ApiV2AssetsIntradayPricesList

> PaginatedIntradayPriceList ApiV2AssetsIntradayPricesList(ctx, assetIdentifier).DateAfter(dateAfter).DateBefore(dateBefore).DatetimeAfter(datetimeAfter).DatetimeBefore(datetimeBefore).Limit(limit).Offset(offset).Execute()





### Example

```go
package main

import (
    "context"
    "fmt"
    "os"
    "time"
    openapiclient "./openapi"
)

func main() {
    assetIdentifier := TODO // string | 
    dateAfter := time.Now() // string |  (optional)
    dateBefore := time.Now() // string |  (optional)
    datetimeAfter := time.Now() // time.Time |  (optional)
    datetimeBefore := time.Now() // time.Time |  (optional)
    limit := int32(56) // int32 | Number of results to return per page. (optional)
    offset := int32(56) // int32 | The initial index from which to return the results. (optional)

    configuration := openapiclient.NewConfiguration()
    api_client := openapiclient.NewAPIClient(configuration)
    resp, r, err := api_client.ApiApi.ApiV2AssetsIntradayPricesList(context.Background(), assetIdentifier).DateAfter(dateAfter).DateBefore(dateBefore).DatetimeAfter(datetimeAfter).DatetimeBefore(datetimeBefore).Limit(limit).Offset(offset).Execute()
    if err != nil {
        fmt.Fprintf(os.Stderr, "Error when calling `ApiApi.ApiV2AssetsIntradayPricesList``: %v\n", err)
        fmt.Fprintf(os.Stderr, "Full HTTP response: %v\n", r)
    }
    // response from `ApiV2AssetsIntradayPricesList`: PaginatedIntradayPriceList
    fmt.Fprintf(os.Stdout, "Response from `ApiApi.ApiV2AssetsIntradayPricesList`: %v\n", resp)
}
```

### Path Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
**ctx** | **context.Context** | context for authentication, logging, cancellation, deadlines, tracing, etc.
**assetIdentifier** | [**string**](.md) |  | 

### Other Parameters

Other parameters are passed through a pointer to a apiApiV2AssetsIntradayPricesListRequest struct via the builder pattern


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------

 **dateAfter** | **string** |  | 
 **dateBefore** | **string** |  | 
 **datetimeAfter** | **time.Time** |  | 
 **datetimeBefore** | **time.Time** |  | 
 **limit** | **int32** | Number of results to return per page. | 
 **offset** | **int32** | The initial index from which to return the results. | 

### Return type

[**PaginatedIntradayPriceList**](PaginatedIntradayPriceList.md)

### Authorization

[cookieAuth](../README.md#cookieAuth), [jwtAuth](../README.md#jwtAuth), [tokenAuth](../README.md#tokenAuth)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints)
[[Back to Model list]](../README.md#documentation-for-models)
[[Back to README]](../README.md)


## ApiV2AssetsList

> PaginatedAssetListList ApiV2AssetsList(ctx).AssetType(assetType).CategoryCode(categoryCode).CategoryType(categoryType).Currency(currency).Isin(isin).Limit(limit).Market(market).Name(name).Offset(offset).Status(status).Ticker(ticker).Execute()





### Example

```go
package main

import (
    "context"
    "fmt"
    "os"
    openapiclient "./openapi"
)

func main() {
    assetType := "assetType_example" // string |  (optional)
    categoryCode := []string{"Inner_example"} // []string |  (optional)
    categoryType := []string{"Inner_example"} // []string |  (optional)
    currency := int32(56) // int32 |  (optional)
    isin := "isin_example" // string |  (optional)
    limit := int32(56) // int32 | Number of results to return per page. (optional)
    market := int32(56) // int32 |  (optional)
    name := "name_example" // string |  (optional)
    offset := int32(56) // int32 | The initial index from which to return the results. (optional)
    status := "status_example" // string |  (optional)
    ticker := "ticker_example" // string |  (optional)

    configuration := openapiclient.NewConfiguration()
    api_client := openapiclient.NewAPIClient(configuration)
    resp, r, err := api_client.ApiApi.ApiV2AssetsList(context.Background()).AssetType(assetType).CategoryCode(categoryCode).CategoryType(categoryType).Currency(currency).Isin(isin).Limit(limit).Market(market).Name(name).Offset(offset).Status(status).Ticker(ticker).Execute()
    if err != nil {
        fmt.Fprintf(os.Stderr, "Error when calling `ApiApi.ApiV2AssetsList``: %v\n", err)
        fmt.Fprintf(os.Stderr, "Full HTTP response: %v\n", r)
    }
    // response from `ApiV2AssetsList`: PaginatedAssetListList
    fmt.Fprintf(os.Stdout, "Response from `ApiApi.ApiV2AssetsList`: %v\n", resp)
}
```

### Path Parameters



### Other Parameters

Other parameters are passed through a pointer to a apiApiV2AssetsListRequest struct via the builder pattern


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **assetType** | **string** |  | 
 **categoryCode** | **[]string** |  | 
 **categoryType** | **[]string** |  | 
 **currency** | **int32** |  | 
 **isin** | **string** |  | 
 **limit** | **int32** | Number of results to return per page. | 
 **market** | **int32** |  | 
 **name** | **string** |  | 
 **offset** | **int32** | The initial index from which to return the results. | 
 **status** | **string** |  | 
 **ticker** | **string** |  | 

### Return type

[**PaginatedAssetListList**](PaginatedAssetListList.md)

### Authorization

[cookieAuth](../README.md#cookieAuth), [jwtAuth](../README.md#jwtAuth), [tokenAuth](../README.md#tokenAuth)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints)
[[Back to Model list]](../README.md#documentation-for-models)
[[Back to README]](../README.md)


## ApiV2AssetsPerformanceList

> PaginatedAssetGrowthList ApiV2AssetsPerformanceList(ctx, assetIdentifier).DateYearAfter(dateYearAfter).DateYearBefore(dateYearBefore).Limit(limit).Offset(offset).Execute()





### Example

```go
package main

import (
    "context"
    "fmt"
    "os"
    openapiclient "./openapi"
)

func main() {
    assetIdentifier := TODO // string | 
    dateYearAfter := float32(8.14) // float32 |  (optional)
    dateYearBefore := float32(8.14) // float32 |  (optional)
    limit := int32(56) // int32 | Number of results to return per page. (optional)
    offset := int32(56) // int32 | The initial index from which to return the results. (optional)

    configuration := openapiclient.NewConfiguration()
    api_client := openapiclient.NewAPIClient(configuration)
    resp, r, err := api_client.ApiApi.ApiV2AssetsPerformanceList(context.Background(), assetIdentifier).DateYearAfter(dateYearAfter).DateYearBefore(dateYearBefore).Limit(limit).Offset(offset).Execute()
    if err != nil {
        fmt.Fprintf(os.Stderr, "Error when calling `ApiApi.ApiV2AssetsPerformanceList``: %v\n", err)
        fmt.Fprintf(os.Stderr, "Full HTTP response: %v\n", r)
    }
    // response from `ApiV2AssetsPerformanceList`: PaginatedAssetGrowthList
    fmt.Fprintf(os.Stdout, "Response from `ApiApi.ApiV2AssetsPerformanceList`: %v\n", resp)
}
```

### Path Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
**ctx** | **context.Context** | context for authentication, logging, cancellation, deadlines, tracing, etc.
**assetIdentifier** | [**string**](.md) |  | 

### Other Parameters

Other parameters are passed through a pointer to a apiApiV2AssetsPerformanceListRequest struct via the builder pattern


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------

 **dateYearAfter** | **float32** |  | 
 **dateYearBefore** | **float32** |  | 
 **limit** | **int32** | Number of results to return per page. | 
 **offset** | **int32** | The initial index from which to return the results. | 

### Return type

[**PaginatedAssetGrowthList**](PaginatedAssetGrowthList.md)

### Authorization

[cookieAuth](../README.md#cookieAuth), [jwtAuth](../README.md#jwtAuth), [tokenAuth](../README.md#tokenAuth)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints)
[[Back to Model list]](../README.md#documentation-for-models)
[[Back to README]](../README.md)


## ApiV2AssetsPricesLatestRetrieve

> Price ApiV2AssetsPricesLatestRetrieve(ctx, assetIdentifier).Execute()





### Example

```go
package main

import (
    "context"
    "fmt"
    "os"
    openapiclient "./openapi"
)

func main() {
    assetIdentifier := TODO // string | 

    configuration := openapiclient.NewConfiguration()
    api_client := openapiclient.NewAPIClient(configuration)
    resp, r, err := api_client.ApiApi.ApiV2AssetsPricesLatestRetrieve(context.Background(), assetIdentifier).Execute()
    if err != nil {
        fmt.Fprintf(os.Stderr, "Error when calling `ApiApi.ApiV2AssetsPricesLatestRetrieve``: %v\n", err)
        fmt.Fprintf(os.Stderr, "Full HTTP response: %v\n", r)
    }
    // response from `ApiV2AssetsPricesLatestRetrieve`: Price
    fmt.Fprintf(os.Stdout, "Response from `ApiApi.ApiV2AssetsPricesLatestRetrieve`: %v\n", resp)
}
```

### Path Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
**ctx** | **context.Context** | context for authentication, logging, cancellation, deadlines, tracing, etc.
**assetIdentifier** | [**string**](.md) |  | 

### Other Parameters

Other parameters are passed through a pointer to a apiApiV2AssetsPricesLatestRetrieveRequest struct via the builder pattern


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------


### Return type

[**Price**](Price.md)

### Authorization

[cookieAuth](../README.md#cookieAuth), [jwtAuth](../README.md#jwtAuth), [tokenAuth](../README.md#tokenAuth)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints)
[[Back to Model list]](../README.md#documentation-for-models)
[[Back to README]](../README.md)


## ApiV2AssetsPricesList

> PaginatedPriceList ApiV2AssetsPricesList(ctx, assetIdentifier).DateAfter(dateAfter).DateBefore(dateBefore).DatetimeAfter(datetimeAfter).DatetimeBefore(datetimeBefore).Limit(limit).Offset(offset).Execute()





### Example

```go
package main

import (
    "context"
    "fmt"
    "os"
    "time"
    openapiclient "./openapi"
)

func main() {
    assetIdentifier := TODO // string | 
    dateAfter := time.Now() // string |  (optional)
    dateBefore := time.Now() // string |  (optional)
    datetimeAfter := time.Now() // time.Time |  (optional)
    datetimeBefore := time.Now() // time.Time |  (optional)
    limit := int32(56) // int32 | Number of results to return per page. (optional)
    offset := int32(56) // int32 | The initial index from which to return the results. (optional)

    configuration := openapiclient.NewConfiguration()
    api_client := openapiclient.NewAPIClient(configuration)
    resp, r, err := api_client.ApiApi.ApiV2AssetsPricesList(context.Background(), assetIdentifier).DateAfter(dateAfter).DateBefore(dateBefore).DatetimeAfter(datetimeAfter).DatetimeBefore(datetimeBefore).Limit(limit).Offset(offset).Execute()
    if err != nil {
        fmt.Fprintf(os.Stderr, "Error when calling `ApiApi.ApiV2AssetsPricesList``: %v\n", err)
        fmt.Fprintf(os.Stderr, "Full HTTP response: %v\n", r)
    }
    // response from `ApiV2AssetsPricesList`: PaginatedPriceList
    fmt.Fprintf(os.Stdout, "Response from `ApiApi.ApiV2AssetsPricesList`: %v\n", resp)
}
```

### Path Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
**ctx** | **context.Context** | context for authentication, logging, cancellation, deadlines, tracing, etc.
**assetIdentifier** | [**string**](.md) |  | 

### Other Parameters

Other parameters are passed through a pointer to a apiApiV2AssetsPricesListRequest struct via the builder pattern


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------

 **dateAfter** | **string** |  | 
 **dateBefore** | **string** |  | 
 **datetimeAfter** | **time.Time** |  | 
 **datetimeBefore** | **time.Time** |  | 
 **limit** | **int32** | Number of results to return per page. | 
 **offset** | **int32** | The initial index from which to return the results. | 

### Return type

[**PaginatedPriceList**](PaginatedPriceList.md)

### Authorization

[cookieAuth](../README.md#cookieAuth), [jwtAuth](../README.md#jwtAuth), [tokenAuth](../README.md#tokenAuth)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints)
[[Back to Model list]](../README.md#documentation-for-models)
[[Back to README]](../README.md)


## ApiV2AssetsRetrieve

> AssetDetail ApiV2AssetsRetrieve(ctx, assetIdentifier).Execute()





### Example

```go
package main

import (
    "context"
    "fmt"
    "os"
    openapiclient "./openapi"
)

func main() {
    assetIdentifier := TODO // string | 

    configuration := openapiclient.NewConfiguration()
    api_client := openapiclient.NewAPIClient(configuration)
    resp, r, err := api_client.ApiApi.ApiV2AssetsRetrieve(context.Background(), assetIdentifier).Execute()
    if err != nil {
        fmt.Fprintf(os.Stderr, "Error when calling `ApiApi.ApiV2AssetsRetrieve``: %v\n", err)
        fmt.Fprintf(os.Stderr, "Full HTTP response: %v\n", r)
    }
    // response from `ApiV2AssetsRetrieve`: AssetDetail
    fmt.Fprintf(os.Stdout, "Response from `ApiApi.ApiV2AssetsRetrieve`: %v\n", resp)
}
```

### Path Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
**ctx** | **context.Context** | context for authentication, logging, cancellation, deadlines, tracing, etc.
**assetIdentifier** | [**string**](.md) |  | 

### Other Parameters

Other parameters are passed through a pointer to a apiApiV2AssetsRetrieveRequest struct via the builder pattern


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------


### Return type

[**AssetDetail**](AssetDetail.md)

### Authorization

[cookieAuth](../README.md#cookieAuth), [jwtAuth](../README.md#jwtAuth), [tokenAuth](../README.md#tokenAuth)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints)
[[Back to Model list]](../README.md#documentation-for-models)
[[Back to README]](../README.md)


## ApiV2BillingInvoicesList

> PaginatedInvoiceListList ApiV2BillingInvoicesList(ctx).DateFrom(dateFrom).DateTo(dateTo).Limit(limit).Offset(offset).Status(status).Execute()



### Example

```go
package main

import (
    "context"
    "fmt"
    "os"
    "time"
    openapiclient "./openapi"
)

func main() {
    dateFrom := time.Now() // string |  (optional)
    dateTo := time.Now() // string |  (optional)
    limit := int32(56) // int32 | Number of results to return per page. (optional)
    offset := int32(56) // int32 | The initial index from which to return the results. (optional)
    status := "status_example" // string |  (optional)

    configuration := openapiclient.NewConfiguration()
    api_client := openapiclient.NewAPIClient(configuration)
    resp, r, err := api_client.ApiApi.ApiV2BillingInvoicesList(context.Background()).DateFrom(dateFrom).DateTo(dateTo).Limit(limit).Offset(offset).Status(status).Execute()
    if err != nil {
        fmt.Fprintf(os.Stderr, "Error when calling `ApiApi.ApiV2BillingInvoicesList``: %v\n", err)
        fmt.Fprintf(os.Stderr, "Full HTTP response: %v\n", r)
    }
    // response from `ApiV2BillingInvoicesList`: PaginatedInvoiceListList
    fmt.Fprintf(os.Stdout, "Response from `ApiApi.ApiV2BillingInvoicesList`: %v\n", resp)
}
```

### Path Parameters



### Other Parameters

Other parameters are passed through a pointer to a apiApiV2BillingInvoicesListRequest struct via the builder pattern


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **dateFrom** | **string** |  | 
 **dateTo** | **string** |  | 
 **limit** | **int32** | Number of results to return per page. | 
 **offset** | **int32** | The initial index from which to return the results. | 
 **status** | **string** |  | 

### Return type

[**PaginatedInvoiceListList**](PaginatedInvoiceListList.md)

### Authorization

[cookieAuth](../README.md#cookieAuth), [jwtAuth](../README.md#jwtAuth), [tokenAuth](../README.md#tokenAuth)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints)
[[Back to Model list]](../README.md#documentation-for-models)
[[Back to README]](../README.md)


## ApiV2BillingInvoicesRetrieve

> InvoiceDetails ApiV2BillingInvoicesRetrieve(ctx, uuid).Format(format).Execute()





### Example

```go
package main

import (
    "context"
    "fmt"
    "os"
    openapiclient "./openapi"
)

func main() {
    uuid := TODO // string | 
    format := "format_example" // string |  (optional)

    configuration := openapiclient.NewConfiguration()
    api_client := openapiclient.NewAPIClient(configuration)
    resp, r, err := api_client.ApiApi.ApiV2BillingInvoicesRetrieve(context.Background(), uuid).Format(format).Execute()
    if err != nil {
        fmt.Fprintf(os.Stderr, "Error when calling `ApiApi.ApiV2BillingInvoicesRetrieve``: %v\n", err)
        fmt.Fprintf(os.Stderr, "Full HTTP response: %v\n", r)
    }
    // response from `ApiV2BillingInvoicesRetrieve`: InvoiceDetails
    fmt.Fprintf(os.Stdout, "Response from `ApiApi.ApiV2BillingInvoicesRetrieve`: %v\n", resp)
}
```

### Path Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
**ctx** | **context.Context** | context for authentication, logging, cancellation, deadlines, tracing, etc.
**uuid** | [**string**](.md) |  | 

### Other Parameters

Other parameters are passed through a pointer to a apiApiV2BillingInvoicesRetrieveRequest struct via the builder pattern


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------

 **format** | **string** |  | 

### Return type

[**InvoiceDetails**](InvoiceDetails.md)

### Authorization

[cookieAuth](../README.md#cookieAuth), [jwtAuth](../README.md#jwtAuth), [tokenAuth](../README.md#tokenAuth)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json, application/pdf, text/plain

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints)
[[Back to Model list]](../README.md#documentation-for-models)
[[Back to README]](../README.md)


## ApiV2BrokerOrdersCreate

> CreateOrder ApiV2BrokerOrdersCreate(ctx, portfolioUuid).CreateOrder(createOrder).Execute()



### Example

```go
package main

import (
    "context"
    "fmt"
    "os"
    openapiclient "./openapi"
)

func main() {
    portfolioUuid := TODO // string | 
    createOrder := *openapiclient.NewCreateOrder(int32(123), *openapiclient.NewRelatedAssetSerializerWithAssetCategories("Uuid_example", "Isin_example", "Ticker_example", "Name_example", []string{"Categories_example"}), openapiclient.OrderTypeEnum("BUY"), openapiclient.CreateOrderMethodEnum("MARKET")) // CreateOrder | 

    configuration := openapiclient.NewConfiguration()
    api_client := openapiclient.NewAPIClient(configuration)
    resp, r, err := api_client.ApiApi.ApiV2BrokerOrdersCreate(context.Background(), portfolioUuid).CreateOrder(createOrder).Execute()
    if err != nil {
        fmt.Fprintf(os.Stderr, "Error when calling `ApiApi.ApiV2BrokerOrdersCreate``: %v\n", err)
        fmt.Fprintf(os.Stderr, "Full HTTP response: %v\n", r)
    }
    // response from `ApiV2BrokerOrdersCreate`: CreateOrder
    fmt.Fprintf(os.Stdout, "Response from `ApiApi.ApiV2BrokerOrdersCreate`: %v\n", resp)
}
```

### Path Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
**ctx** | **context.Context** | context for authentication, logging, cancellation, deadlines, tracing, etc.
**portfolioUuid** | [**string**](.md) |  | 

### Other Parameters

Other parameters are passed through a pointer to a apiApiV2BrokerOrdersCreateRequest struct via the builder pattern


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------

 **createOrder** | [**CreateOrder**](CreateOrder.md) |  | 

### Return type

[**CreateOrder**](CreateOrder.md)

### Authorization

[cookieAuth](../README.md#cookieAuth), [jwtAuth](../README.md#jwtAuth), [tokenAuth](../README.md#tokenAuth)

### HTTP request headers

- **Content-Type**: application/json, application/x-www-form-urlencoded, multipart/form-data
- **Accept**: application/json

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints)
[[Back to Model list]](../README.md#documentation-for-models)
[[Back to README]](../README.md)


## ApiV2BrokerOrdersDestroy

> ApiV2BrokerOrdersDestroy(ctx, portfolioUuid, uuid).Execute()





### Example

```go
package main

import (
    "context"
    "fmt"
    "os"
    openapiclient "./openapi"
)

func main() {
    portfolioUuid := TODO // string | 
    uuid := TODO // string | 

    configuration := openapiclient.NewConfiguration()
    api_client := openapiclient.NewAPIClient(configuration)
    resp, r, err := api_client.ApiApi.ApiV2BrokerOrdersDestroy(context.Background(), portfolioUuid, uuid).Execute()
    if err != nil {
        fmt.Fprintf(os.Stderr, "Error when calling `ApiApi.ApiV2BrokerOrdersDestroy``: %v\n", err)
        fmt.Fprintf(os.Stderr, "Full HTTP response: %v\n", r)
    }
}
```

### Path Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
**ctx** | **context.Context** | context for authentication, logging, cancellation, deadlines, tracing, etc.
**portfolioUuid** | [**string**](.md) |  | 
**uuid** | [**string**](.md) |  | 

### Other Parameters

Other parameters are passed through a pointer to a apiApiV2BrokerOrdersDestroyRequest struct via the builder pattern


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------



### Return type

 (empty response body)

### Authorization

[cookieAuth](../README.md#cookieAuth), [jwtAuth](../README.md#jwtAuth), [tokenAuth](../README.md#tokenAuth)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: Not defined

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints)
[[Back to Model list]](../README.md#documentation-for-models)
[[Back to README]](../README.md)


## ApiV2BrokerOrdersList

> PaginatedOrderListList ApiV2BrokerOrdersList(ctx, portfolioUuid).AdviceExternalId(adviceExternalId).Asset(asset).CompletedAfter(completedAfter).CompletedBefore(completedBefore).ExtraData(extraData).Limit(limit).Offset(offset).Portfolio(portfolio).Status(status).Execute()



### Example

```go
package main

import (
    "context"
    "fmt"
    "os"
    "time"
    openapiclient "./openapi"
)

func main() {
    portfolioUuid := TODO // string | 
    adviceExternalId := "adviceExternalId_example" // string |  (optional)
    asset := "asset_example" // string |  (optional)
    completedAfter := time.Now() // string |  (optional)
    completedBefore := time.Now() // string |  (optional)
    extraData := map[string]interface{}{"key": interface{}(123)} // map[string]interface{} | Additional order attributes for the specific portal (optional)
    limit := int32(56) // int32 | Number of results to return per page. (optional)
    offset := int32(56) // int32 | The initial index from which to return the results. (optional)
    portfolio := "portfolio_example" // string |  (optional)
    status := "status_example" // string |  (optional)

    configuration := openapiclient.NewConfiguration()
    api_client := openapiclient.NewAPIClient(configuration)
    resp, r, err := api_client.ApiApi.ApiV2BrokerOrdersList(context.Background(), portfolioUuid).AdviceExternalId(adviceExternalId).Asset(asset).CompletedAfter(completedAfter).CompletedBefore(completedBefore).ExtraData(extraData).Limit(limit).Offset(offset).Portfolio(portfolio).Status(status).Execute()
    if err != nil {
        fmt.Fprintf(os.Stderr, "Error when calling `ApiApi.ApiV2BrokerOrdersList``: %v\n", err)
        fmt.Fprintf(os.Stderr, "Full HTTP response: %v\n", r)
    }
    // response from `ApiV2BrokerOrdersList`: PaginatedOrderListList
    fmt.Fprintf(os.Stdout, "Response from `ApiApi.ApiV2BrokerOrdersList`: %v\n", resp)
}
```

### Path Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
**ctx** | **context.Context** | context for authentication, logging, cancellation, deadlines, tracing, etc.
**portfolioUuid** | [**string**](.md) |  | 

### Other Parameters

Other parameters are passed through a pointer to a apiApiV2BrokerOrdersListRequest struct via the builder pattern


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------

 **adviceExternalId** | **string** |  | 
 **asset** | **string** |  | 
 **completedAfter** | **string** |  | 
 **completedBefore** | **string** |  | 
 **extraData** | **map[string]interface{}** | Additional order attributes for the specific portal | 
 **limit** | **int32** | Number of results to return per page. | 
 **offset** | **int32** | The initial index from which to return the results. | 
 **portfolio** | **string** |  | 
 **status** | **string** |  | 

### Return type

[**PaginatedOrderListList**](PaginatedOrderListList.md)

### Authorization

[cookieAuth](../README.md#cookieAuth), [jwtAuth](../README.md#jwtAuth), [tokenAuth](../README.md#tokenAuth)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints)
[[Back to Model list]](../README.md#documentation-for-models)
[[Back to README]](../README.md)


## ApiV2BrokerOrdersRetrieve

> OrderList ApiV2BrokerOrdersRetrieve(ctx, portfolioUuid, uuid).Execute()



### Example

```go
package main

import (
    "context"
    "fmt"
    "os"
    openapiclient "./openapi"
)

func main() {
    portfolioUuid := TODO // string | 
    uuid := TODO // string | 

    configuration := openapiclient.NewConfiguration()
    api_client := openapiclient.NewAPIClient(configuration)
    resp, r, err := api_client.ApiApi.ApiV2BrokerOrdersRetrieve(context.Background(), portfolioUuid, uuid).Execute()
    if err != nil {
        fmt.Fprintf(os.Stderr, "Error when calling `ApiApi.ApiV2BrokerOrdersRetrieve``: %v\n", err)
        fmt.Fprintf(os.Stderr, "Full HTTP response: %v\n", r)
    }
    // response from `ApiV2BrokerOrdersRetrieve`: OrderList
    fmt.Fprintf(os.Stdout, "Response from `ApiApi.ApiV2BrokerOrdersRetrieve`: %v\n", resp)
}
```

### Path Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
**ctx** | **context.Context** | context for authentication, logging, cancellation, deadlines, tracing, etc.
**portfolioUuid** | [**string**](.md) |  | 
**uuid** | [**string**](.md) |  | 

### Other Parameters

Other parameters are passed through a pointer to a apiApiV2BrokerOrdersRetrieveRequest struct via the builder pattern


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------



### Return type

[**OrderList**](OrderList.md)

### Authorization

[cookieAuth](../README.md#cookieAuth), [jwtAuth](../README.md#jwtAuth), [tokenAuth](../README.md#tokenAuth)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints)
[[Back to Model list]](../README.md#documentation-for-models)
[[Back to README]](../README.md)


## ApiV2ClientsMeVerifyEmailCreate

> EmailVerifyRequest ApiV2ClientsMeVerifyEmailCreate(ctx).EmailVerifyRequest(emailVerifyRequest).Execute()





### Example

```go
package main

import (
    "context"
    "fmt"
    "os"
    openapiclient "./openapi"
)

func main() {
    emailVerifyRequest := *openapiclient.NewEmailVerifyRequest() // EmailVerifyRequest |  (optional)

    configuration := openapiclient.NewConfiguration()
    api_client := openapiclient.NewAPIClient(configuration)
    resp, r, err := api_client.ApiApi.ApiV2ClientsMeVerifyEmailCreate(context.Background()).EmailVerifyRequest(emailVerifyRequest).Execute()
    if err != nil {
        fmt.Fprintf(os.Stderr, "Error when calling `ApiApi.ApiV2ClientsMeVerifyEmailCreate``: %v\n", err)
        fmt.Fprintf(os.Stderr, "Full HTTP response: %v\n", r)
    }
    // response from `ApiV2ClientsMeVerifyEmailCreate`: EmailVerifyRequest
    fmt.Fprintf(os.Stdout, "Response from `ApiApi.ApiV2ClientsMeVerifyEmailCreate`: %v\n", resp)
}
```

### Path Parameters



### Other Parameters

Other parameters are passed through a pointer to a apiApiV2ClientsMeVerifyEmailCreateRequest struct via the builder pattern


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **emailVerifyRequest** | [**EmailVerifyRequest**](EmailVerifyRequest.md) |  | 

### Return type

[**EmailVerifyRequest**](EmailVerifyRequest.md)

### Authorization

[cookieAuth](../README.md#cookieAuth), [jwtAuth](../README.md#jwtAuth), [tokenAuth](../README.md#tokenAuth)

### HTTP request headers

- **Content-Type**: application/json, application/x-www-form-urlencoded, multipart/form-data
- **Accept**: application/json

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints)
[[Back to Model list]](../README.md#documentation-for-models)
[[Back to README]](../README.md)


## ApiV2ClientsNationalDocumentsList

> PaginatedNationalDocumentList ApiV2ClientsNationalDocumentsList(ctx).Limit(limit).Offset(offset).Execute()



### Example

```go
package main

import (
    "context"
    "fmt"
    "os"
    openapiclient "./openapi"
)

func main() {
    limit := int32(56) // int32 | Number of results to return per page. (optional)
    offset := int32(56) // int32 | The initial index from which to return the results. (optional)

    configuration := openapiclient.NewConfiguration()
    api_client := openapiclient.NewAPIClient(configuration)
    resp, r, err := api_client.ApiApi.ApiV2ClientsNationalDocumentsList(context.Background()).Limit(limit).Offset(offset).Execute()
    if err != nil {
        fmt.Fprintf(os.Stderr, "Error when calling `ApiApi.ApiV2ClientsNationalDocumentsList``: %v\n", err)
        fmt.Fprintf(os.Stderr, "Full HTTP response: %v\n", r)
    }
    // response from `ApiV2ClientsNationalDocumentsList`: PaginatedNationalDocumentList
    fmt.Fprintf(os.Stdout, "Response from `ApiApi.ApiV2ClientsNationalDocumentsList`: %v\n", resp)
}
```

### Path Parameters



### Other Parameters

Other parameters are passed through a pointer to a apiApiV2ClientsNationalDocumentsListRequest struct via the builder pattern


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **limit** | **int32** | Number of results to return per page. | 
 **offset** | **int32** | The initial index from which to return the results. | 

### Return type

[**PaginatedNationalDocumentList**](PaginatedNationalDocumentList.md)

### Authorization

[cookieAuth](../README.md#cookieAuth), [jwtAuth](../README.md#jwtAuth), [tokenAuth](../README.md#tokenAuth)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints)
[[Back to Model list]](../README.md#documentation-for-models)
[[Back to README]](../README.md)


## ApiV2ClientsReferralRetrieve

> ClientReferral ApiV2ClientsReferralRetrieve(ctx, referralCode).Execute()





### Example

```go
package main

import (
    "context"
    "fmt"
    "os"
    openapiclient "./openapi"
)

func main() {
    referralCode := "referralCode_example" // string | 

    configuration := openapiclient.NewConfiguration()
    api_client := openapiclient.NewAPIClient(configuration)
    resp, r, err := api_client.ApiApi.ApiV2ClientsReferralRetrieve(context.Background(), referralCode).Execute()
    if err != nil {
        fmt.Fprintf(os.Stderr, "Error when calling `ApiApi.ApiV2ClientsReferralRetrieve``: %v\n", err)
        fmt.Fprintf(os.Stderr, "Full HTTP response: %v\n", r)
    }
    // response from `ApiV2ClientsReferralRetrieve`: ClientReferral
    fmt.Fprintf(os.Stdout, "Response from `ApiApi.ApiV2ClientsReferralRetrieve`: %v\n", resp)
}
```

### Path Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
**ctx** | **context.Context** | context for authentication, logging, cancellation, deadlines, tracing, etc.
**referralCode** | **string** |  | 

### Other Parameters

Other parameters are passed through a pointer to a apiApiV2ClientsReferralRetrieveRequest struct via the builder pattern


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------


### Return type

[**ClientReferral**](ClientReferral.md)

### Authorization

[cookieAuth](../README.md#cookieAuth), [jwtAuth](../README.md#jwtAuth), [tokenAuth](../README.md#tokenAuth)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints)
[[Back to Model list]](../README.md#documentation-for-models)
[[Back to README]](../README.md)


## ApiV2ClientsVerifyEmailUpdate

> EmailVerifyView ApiV2ClientsVerifyEmailUpdate(ctx, uuid).EmailVerifyView(emailVerifyView).Execute()





### Example

```go
package main

import (
    "context"
    "fmt"
    "os"
    openapiclient "./openapi"
)

func main() {
    uuid := TODO // string | 
    emailVerifyView := *openapiclient.NewEmailVerifyView("Token_example") // EmailVerifyView | 

    configuration := openapiclient.NewConfiguration()
    api_client := openapiclient.NewAPIClient(configuration)
    resp, r, err := api_client.ApiApi.ApiV2ClientsVerifyEmailUpdate(context.Background(), uuid).EmailVerifyView(emailVerifyView).Execute()
    if err != nil {
        fmt.Fprintf(os.Stderr, "Error when calling `ApiApi.ApiV2ClientsVerifyEmailUpdate``: %v\n", err)
        fmt.Fprintf(os.Stderr, "Full HTTP response: %v\n", r)
    }
    // response from `ApiV2ClientsVerifyEmailUpdate`: EmailVerifyView
    fmt.Fprintf(os.Stdout, "Response from `ApiApi.ApiV2ClientsVerifyEmailUpdate`: %v\n", resp)
}
```

### Path Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
**ctx** | **context.Context** | context for authentication, logging, cancellation, deadlines, tracing, etc.
**uuid** | [**string**](.md) |  | 

### Other Parameters

Other parameters are passed through a pointer to a apiApiV2ClientsVerifyEmailUpdateRequest struct via the builder pattern


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------

 **emailVerifyView** | [**EmailVerifyView**](EmailVerifyView.md) |  | 

### Return type

[**EmailVerifyView**](EmailVerifyView.md)

### Authorization

[cookieAuth](../README.md#cookieAuth), [jwtAuth](../README.md#jwtAuth), [tokenAuth](../README.md#tokenAuth)

### HTTP request headers

- **Content-Type**: application/json, application/x-www-form-urlencoded, multipart/form-data
- **Accept**: application/json

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints)
[[Back to Model list]](../README.md#documentation-for-models)
[[Back to README]](../README.md)


## ApiV2FeedsAccessLogsList

> PaginatedAccessLogList ApiV2FeedsAccessLogsList(ctx).Browser(browser).BrowserVersion(browserVersion).Channel(channel).City(city).Country(country).DeviceBrand(deviceBrand).DeviceModel(deviceModel).IpAddress(ipAddress).Limit(limit).Offset(offset).Os(os).OsVersion(osVersion).UserAgent(userAgent).Execute()





### Example

```go
package main

import (
    "context"
    "fmt"
    "os"
    openapiclient "./openapi"
)

func main() {
    browser := "browser_example" // string |  (optional)
    browserVersion := "browserVersion_example" // string |  (optional)
    channel := "channel_example" // string |  (optional)
    city := "city_example" // string |  (optional)
    country := int32(56) // int32 |  (optional)
    deviceBrand := "deviceBrand_example" // string |  (optional)
    deviceModel := "deviceModel_example" // string |  (optional)
    ipAddress := "ipAddress_example" // string |  (optional)
    limit := int32(56) // int32 | Number of results to return per page. (optional)
    offset := int32(56) // int32 | The initial index from which to return the results. (optional)
    os := "os_example" // string |  (optional)
    osVersion := "osVersion_example" // string |  (optional)
    userAgent := "userAgent_example" // string |  (optional)

    configuration := openapiclient.NewConfiguration()
    api_client := openapiclient.NewAPIClient(configuration)
    resp, r, err := api_client.ApiApi.ApiV2FeedsAccessLogsList(context.Background()).Browser(browser).BrowserVersion(browserVersion).Channel(channel).City(city).Country(country).DeviceBrand(deviceBrand).DeviceModel(deviceModel).IpAddress(ipAddress).Limit(limit).Offset(offset).Os(os).OsVersion(osVersion).UserAgent(userAgent).Execute()
    if err != nil {
        fmt.Fprintf(os.Stderr, "Error when calling `ApiApi.ApiV2FeedsAccessLogsList``: %v\n", err)
        fmt.Fprintf(os.Stderr, "Full HTTP response: %v\n", r)
    }
    // response from `ApiV2FeedsAccessLogsList`: PaginatedAccessLogList
    fmt.Fprintf(os.Stdout, "Response from `ApiApi.ApiV2FeedsAccessLogsList`: %v\n", resp)
}
```

### Path Parameters



### Other Parameters

Other parameters are passed through a pointer to a apiApiV2FeedsAccessLogsListRequest struct via the builder pattern


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **browser** | **string** |  | 
 **browserVersion** | **string** |  | 
 **channel** | **string** |  | 
 **city** | **string** |  | 
 **country** | **int32** |  | 
 **deviceBrand** | **string** |  | 
 **deviceModel** | **string** |  | 
 **ipAddress** | **string** |  | 
 **limit** | **int32** | Number of results to return per page. | 
 **offset** | **int32** | The initial index from which to return the results. | 
 **os** | **string** |  | 
 **osVersion** | **string** |  | 
 **userAgent** | **string** |  | 

### Return type

[**PaginatedAccessLogList**](PaginatedAccessLogList.md)

### Authorization

[cookieAuth](../README.md#cookieAuth), [jwtAuth](../README.md#jwtAuth), [tokenAuth](../README.md#tokenAuth)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints)
[[Back to Model list]](../README.md#documentation-for-models)
[[Back to README]](../README.md)


## ApiV2FeedsActivitiesList

> PaginatedFeedActivityListList ApiV2FeedsActivitiesList(ctx).Limit(limit).Offset(offset).Target(target).Execute()



### Example

```go
package main

import (
    "context"
    "fmt"
    "os"
    openapiclient "./openapi"
)

func main() {
    limit := int32(56) // int32 | Number of results to return per page. (optional)
    offset := int32(56) // int32 | The initial index from which to return the results. (optional)
    target := []string{"Target_example"} // []string |  (optional)

    configuration := openapiclient.NewConfiguration()
    api_client := openapiclient.NewAPIClient(configuration)
    resp, r, err := api_client.ApiApi.ApiV2FeedsActivitiesList(context.Background()).Limit(limit).Offset(offset).Target(target).Execute()
    if err != nil {
        fmt.Fprintf(os.Stderr, "Error when calling `ApiApi.ApiV2FeedsActivitiesList``: %v\n", err)
        fmt.Fprintf(os.Stderr, "Full HTTP response: %v\n", r)
    }
    // response from `ApiV2FeedsActivitiesList`: PaginatedFeedActivityListList
    fmt.Fprintf(os.Stdout, "Response from `ApiApi.ApiV2FeedsActivitiesList`: %v\n", resp)
}
```

### Path Parameters



### Other Parameters

Other parameters are passed through a pointer to a apiApiV2FeedsActivitiesListRequest struct via the builder pattern


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **limit** | **int32** | Number of results to return per page. | 
 **offset** | **int32** | The initial index from which to return the results. | 
 **target** | **[]string** |  | 

### Return type

[**PaginatedFeedActivityListList**](PaginatedFeedActivityListList.md)

### Authorization

[cookieAuth](../README.md#cookieAuth), [jwtAuth](../README.md#jwtAuth), [tokenAuth](../README.md#tokenAuth)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints)
[[Back to Model list]](../README.md#documentation-for-models)
[[Back to README]](../README.md)


## ApiV2GoalsCreate

> Goal ApiV2GoalsCreate(ctx, goalUuid).Goal(goal).Execute()



### Example

```go
package main

import (
    "context"
    "fmt"
    "os"
    "time"
    openapiclient "./openapi"
)

func main() {
    goalUuid := TODO // string | 
    goal := *openapiclient.NewGoal("Uuid_example", "Name_example", float64(123), time.Now(), float64(123), int32(123), time.Now()) // Goal | 

    configuration := openapiclient.NewConfiguration()
    api_client := openapiclient.NewAPIClient(configuration)
    resp, r, err := api_client.ApiApi.ApiV2GoalsCreate(context.Background(), goalUuid).Goal(goal).Execute()
    if err != nil {
        fmt.Fprintf(os.Stderr, "Error when calling `ApiApi.ApiV2GoalsCreate``: %v\n", err)
        fmt.Fprintf(os.Stderr, "Full HTTP response: %v\n", r)
    }
    // response from `ApiV2GoalsCreate`: Goal
    fmt.Fprintf(os.Stdout, "Response from `ApiApi.ApiV2GoalsCreate`: %v\n", resp)
}
```

### Path Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
**ctx** | **context.Context** | context for authentication, logging, cancellation, deadlines, tracing, etc.
**goalUuid** | [**string**](.md) |  | 

### Other Parameters

Other parameters are passed through a pointer to a apiApiV2GoalsCreateRequest struct via the builder pattern


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------

 **goal** | [**Goal**](Goal.md) |  | 

### Return type

[**Goal**](Goal.md)

### Authorization

[cookieAuth](../README.md#cookieAuth), [jwtAuth](../README.md#jwtAuth), [tokenAuth](../README.md#tokenAuth)

### HTTP request headers

- **Content-Type**: application/json, application/x-www-form-urlencoded, multipart/form-data
- **Accept**: application/json

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints)
[[Back to Model list]](../README.md#documentation-for-models)
[[Back to README]](../README.md)


## ApiV2GoalsDecumulationCreate

> ForecastDecumulationRequest ApiV2GoalsDecumulationCreate(ctx).ForecastDecumulationRequest(forecastDecumulationRequest).Execute()





### Example

```go
package main

import (
    "context"
    "fmt"
    "os"
    openapiclient "./openapi"
)

func main() {
    forecastDecumulationRequest := *openapiclient.NewForecastDecumulationRequest(float64(123), float64(123), int32(123), float64(123), int32(123)) // ForecastDecumulationRequest | 

    configuration := openapiclient.NewConfiguration()
    api_client := openapiclient.NewAPIClient(configuration)
    resp, r, err := api_client.ApiApi.ApiV2GoalsDecumulationCreate(context.Background()).ForecastDecumulationRequest(forecastDecumulationRequest).Execute()
    if err != nil {
        fmt.Fprintf(os.Stderr, "Error when calling `ApiApi.ApiV2GoalsDecumulationCreate``: %v\n", err)
        fmt.Fprintf(os.Stderr, "Full HTTP response: %v\n", r)
    }
    // response from `ApiV2GoalsDecumulationCreate`: ForecastDecumulationRequest
    fmt.Fprintf(os.Stdout, "Response from `ApiApi.ApiV2GoalsDecumulationCreate`: %v\n", resp)
}
```

### Path Parameters



### Other Parameters

Other parameters are passed through a pointer to a apiApiV2GoalsDecumulationCreateRequest struct via the builder pattern


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **forecastDecumulationRequest** | [**ForecastDecumulationRequest**](ForecastDecumulationRequest.md) |  | 

### Return type

[**ForecastDecumulationRequest**](ForecastDecumulationRequest.md)

### Authorization

[cookieAuth](../README.md#cookieAuth), [jwtAuth](../README.md#jwtAuth), [tokenAuth](../README.md#tokenAuth)

### HTTP request headers

- **Content-Type**: application/json, application/x-www-form-urlencoded, multipart/form-data
- **Accept**: application/json

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints)
[[Back to Model list]](../README.md#documentation-for-models)
[[Back to README]](../README.md)


## ApiV2GoalsDestroy

> ApiV2GoalsDestroy(ctx, goalUuid, uuid).Execute()



### Example

```go
package main

import (
    "context"
    "fmt"
    "os"
    openapiclient "./openapi"
)

func main() {
    goalUuid := TODO // string | 
    uuid := TODO // string | 

    configuration := openapiclient.NewConfiguration()
    api_client := openapiclient.NewAPIClient(configuration)
    resp, r, err := api_client.ApiApi.ApiV2GoalsDestroy(context.Background(), goalUuid, uuid).Execute()
    if err != nil {
        fmt.Fprintf(os.Stderr, "Error when calling `ApiApi.ApiV2GoalsDestroy``: %v\n", err)
        fmt.Fprintf(os.Stderr, "Full HTTP response: %v\n", r)
    }
}
```

### Path Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
**ctx** | **context.Context** | context for authentication, logging, cancellation, deadlines, tracing, etc.
**goalUuid** | [**string**](.md) |  | 
**uuid** | [**string**](.md) |  | 

### Other Parameters

Other parameters are passed through a pointer to a apiApiV2GoalsDestroyRequest struct via the builder pattern


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------



### Return type

 (empty response body)

### Authorization

[cookieAuth](../README.md#cookieAuth), [jwtAuth](../README.md#jwtAuth), [tokenAuth](../README.md#tokenAuth)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: Not defined

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints)
[[Back to Model list]](../README.md#documentation-for-models)
[[Back to README]](../README.md)


## ApiV2GoalsForecastCreate

> ForecastRequest ApiV2GoalsForecastCreate(ctx).ForecastRequest(forecastRequest).Execute()





### Example

```go
package main

import (
    "context"
    "fmt"
    "os"
    "time"
    openapiclient "./openapi"
)

func main() {
    forecastRequest := *openapiclient.NewForecastRequest(float64(123), time.Now(), float64(123), float64(123), int32(123)) // ForecastRequest | 

    configuration := openapiclient.NewConfiguration()
    api_client := openapiclient.NewAPIClient(configuration)
    resp, r, err := api_client.ApiApi.ApiV2GoalsForecastCreate(context.Background()).ForecastRequest(forecastRequest).Execute()
    if err != nil {
        fmt.Fprintf(os.Stderr, "Error when calling `ApiApi.ApiV2GoalsForecastCreate``: %v\n", err)
        fmt.Fprintf(os.Stderr, "Full HTTP response: %v\n", r)
    }
    // response from `ApiV2GoalsForecastCreate`: ForecastRequest
    fmt.Fprintf(os.Stdout, "Response from `ApiApi.ApiV2GoalsForecastCreate`: %v\n", resp)
}
```

### Path Parameters



### Other Parameters

Other parameters are passed through a pointer to a apiApiV2GoalsForecastCreateRequest struct via the builder pattern


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **forecastRequest** | [**ForecastRequest**](ForecastRequest.md) |  | 

### Return type

[**ForecastRequest**](ForecastRequest.md)

### Authorization

[cookieAuth](../README.md#cookieAuth), [jwtAuth](../README.md#jwtAuth), [tokenAuth](../README.md#tokenAuth)

### HTTP request headers

- **Content-Type**: application/json, application/x-www-form-urlencoded, multipart/form-data
- **Accept**: application/json

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints)
[[Back to Model list]](../README.md#documentation-for-models)
[[Back to README]](../README.md)


## ApiV2GoalsList

> PaginatedGoalList ApiV2GoalsList(ctx, goalUuid).Limit(limit).Offset(offset).Execute()



### Example

```go
package main

import (
    "context"
    "fmt"
    "os"
    openapiclient "./openapi"
)

func main() {
    goalUuid := TODO // string | 
    limit := int32(56) // int32 | Number of results to return per page. (optional)
    offset := int32(56) // int32 | The initial index from which to return the results. (optional)

    configuration := openapiclient.NewConfiguration()
    api_client := openapiclient.NewAPIClient(configuration)
    resp, r, err := api_client.ApiApi.ApiV2GoalsList(context.Background(), goalUuid).Limit(limit).Offset(offset).Execute()
    if err != nil {
        fmt.Fprintf(os.Stderr, "Error when calling `ApiApi.ApiV2GoalsList``: %v\n", err)
        fmt.Fprintf(os.Stderr, "Full HTTP response: %v\n", r)
    }
    // response from `ApiV2GoalsList`: PaginatedGoalList
    fmt.Fprintf(os.Stdout, "Response from `ApiApi.ApiV2GoalsList`: %v\n", resp)
}
```

### Path Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
**ctx** | **context.Context** | context for authentication, logging, cancellation, deadlines, tracing, etc.
**goalUuid** | [**string**](.md) |  | 

### Other Parameters

Other parameters are passed through a pointer to a apiApiV2GoalsListRequest struct via the builder pattern


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------

 **limit** | **int32** | Number of results to return per page. | 
 **offset** | **int32** | The initial index from which to return the results. | 

### Return type

[**PaginatedGoalList**](PaginatedGoalList.md)

### Authorization

[cookieAuth](../README.md#cookieAuth), [jwtAuth](../README.md#jwtAuth), [tokenAuth](../README.md#tokenAuth)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints)
[[Back to Model list]](../README.md#documentation-for-models)
[[Back to README]](../README.md)


## ApiV2GoalsPartialUpdate

> Goal ApiV2GoalsPartialUpdate(ctx, goalUuid, uuid).PatchedGoal(patchedGoal).Execute()



### Example

```go
package main

import (
    "context"
    "fmt"
    "os"
    openapiclient "./openapi"
)

func main() {
    goalUuid := TODO // string | 
    uuid := TODO // string | 
    patchedGoal := *openapiclient.NewPatchedGoal() // PatchedGoal |  (optional)

    configuration := openapiclient.NewConfiguration()
    api_client := openapiclient.NewAPIClient(configuration)
    resp, r, err := api_client.ApiApi.ApiV2GoalsPartialUpdate(context.Background(), goalUuid, uuid).PatchedGoal(patchedGoal).Execute()
    if err != nil {
        fmt.Fprintf(os.Stderr, "Error when calling `ApiApi.ApiV2GoalsPartialUpdate``: %v\n", err)
        fmt.Fprintf(os.Stderr, "Full HTTP response: %v\n", r)
    }
    // response from `ApiV2GoalsPartialUpdate`: Goal
    fmt.Fprintf(os.Stdout, "Response from `ApiApi.ApiV2GoalsPartialUpdate`: %v\n", resp)
}
```

### Path Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
**ctx** | **context.Context** | context for authentication, logging, cancellation, deadlines, tracing, etc.
**goalUuid** | [**string**](.md) |  | 
**uuid** | [**string**](.md) |  | 

### Other Parameters

Other parameters are passed through a pointer to a apiApiV2GoalsPartialUpdateRequest struct via the builder pattern


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------


 **patchedGoal** | [**PatchedGoal**](PatchedGoal.md) |  | 

### Return type

[**Goal**](Goal.md)

### Authorization

[cookieAuth](../README.md#cookieAuth), [jwtAuth](../README.md#jwtAuth), [tokenAuth](../README.md#tokenAuth)

### HTTP request headers

- **Content-Type**: application/json, application/x-www-form-urlencoded, multipart/form-data
- **Accept**: application/json

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints)
[[Back to Model list]](../README.md#documentation-for-models)
[[Back to README]](../README.md)


## ApiV2GoalsRetrieve

> Goal ApiV2GoalsRetrieve(ctx, goalUuid, uuid).Execute()



### Example

```go
package main

import (
    "context"
    "fmt"
    "os"
    openapiclient "./openapi"
)

func main() {
    goalUuid := TODO // string | 
    uuid := TODO // string | 

    configuration := openapiclient.NewConfiguration()
    api_client := openapiclient.NewAPIClient(configuration)
    resp, r, err := api_client.ApiApi.ApiV2GoalsRetrieve(context.Background(), goalUuid, uuid).Execute()
    if err != nil {
        fmt.Fprintf(os.Stderr, "Error when calling `ApiApi.ApiV2GoalsRetrieve``: %v\n", err)
        fmt.Fprintf(os.Stderr, "Full HTTP response: %v\n", r)
    }
    // response from `ApiV2GoalsRetrieve`: Goal
    fmt.Fprintf(os.Stdout, "Response from `ApiApi.ApiV2GoalsRetrieve`: %v\n", resp)
}
```

### Path Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
**ctx** | **context.Context** | context for authentication, logging, cancellation, deadlines, tracing, etc.
**goalUuid** | [**string**](.md) |  | 
**uuid** | [**string**](.md) |  | 

### Other Parameters

Other parameters are passed through a pointer to a apiApiV2GoalsRetrieveRequest struct via the builder pattern


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------



### Return type

[**Goal**](Goal.md)

### Authorization

[cookieAuth](../README.md#cookieAuth), [jwtAuth](../README.md#jwtAuth), [tokenAuth](../README.md#tokenAuth)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints)
[[Back to Model list]](../README.md#documentation-for-models)
[[Back to README]](../README.md)


## ApiV2InboxConversationDetailMessagesList

> PaginatedMessageList ApiV2InboxConversationDetailMessagesList(ctx, conversation).Limit(limit).Offset(offset).Execute()





### Example

```go
package main

import (
    "context"
    "fmt"
    "os"
    openapiclient "./openapi"
)

func main() {
    conversation := TODO // string | 
    limit := int32(56) // int32 | Number of results to return per page. (optional)
    offset := int32(56) // int32 | The initial index from which to return the results. (optional)

    configuration := openapiclient.NewConfiguration()
    api_client := openapiclient.NewAPIClient(configuration)
    resp, r, err := api_client.ApiApi.ApiV2InboxConversationDetailMessagesList(context.Background(), conversation).Limit(limit).Offset(offset).Execute()
    if err != nil {
        fmt.Fprintf(os.Stderr, "Error when calling `ApiApi.ApiV2InboxConversationDetailMessagesList``: %v\n", err)
        fmt.Fprintf(os.Stderr, "Full HTTP response: %v\n", r)
    }
    // response from `ApiV2InboxConversationDetailMessagesList`: PaginatedMessageList
    fmt.Fprintf(os.Stdout, "Response from `ApiApi.ApiV2InboxConversationDetailMessagesList`: %v\n", resp)
}
```

### Path Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
**ctx** | **context.Context** | context for authentication, logging, cancellation, deadlines, tracing, etc.
**conversation** | [**string**](.md) |  | 

### Other Parameters

Other parameters are passed through a pointer to a apiApiV2InboxConversationDetailMessagesListRequest struct via the builder pattern


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------

 **limit** | **int32** | Number of results to return per page. | 
 **offset** | **int32** | The initial index from which to return the results. | 

### Return type

[**PaginatedMessageList**](PaginatedMessageList.md)

### Authorization

[cookieAuth](../README.md#cookieAuth), [jwtAuth](../README.md#jwtAuth), [tokenAuth](../README.md#tokenAuth)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints)
[[Back to Model list]](../README.md#documentation-for-models)
[[Back to README]](../README.md)


## ApiV2InboxConversationsCreate

> ConversationCreate ApiV2InboxConversationsCreate(ctx).Uuid(uuid).Portal(portal).Created(created).Subject(subject).Messages(messages).Execute()





### Example

```go
package main

import (
    "context"
    "fmt"
    "os"
    "time"
    openapiclient "./openapi"
)

func main() {
    uuid := TODO // string | 
    portal := int32(56) // int32 | 
    created := time.Now() // time.Time | 
    subject := "subject_example" // string | 
    messages := *openapiclient.NewMessage("User_example", time.Now(), time.Now(), []openapiclient.Attachment{*openapiclient.NewAttachment("AttachmentExtension_example", "AttachmentFilename_example", "Uuid_example")}, "Uuid_example") // Message |  (optional)

    configuration := openapiclient.NewConfiguration()
    api_client := openapiclient.NewAPIClient(configuration)
    resp, r, err := api_client.ApiApi.ApiV2InboxConversationsCreate(context.Background()).Uuid(uuid).Portal(portal).Created(created).Subject(subject).Messages(messages).Execute()
    if err != nil {
        fmt.Fprintf(os.Stderr, "Error when calling `ApiApi.ApiV2InboxConversationsCreate``: %v\n", err)
        fmt.Fprintf(os.Stderr, "Full HTTP response: %v\n", r)
    }
    // response from `ApiV2InboxConversationsCreate`: ConversationCreate
    fmt.Fprintf(os.Stdout, "Response from `ApiApi.ApiV2InboxConversationsCreate`: %v\n", resp)
}
```

### Path Parameters



### Other Parameters

Other parameters are passed through a pointer to a apiApiV2InboxConversationsCreateRequest struct via the builder pattern


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **uuid** | [**string**](string.md) |  | 
 **portal** | **int32** |  | 
 **created** | **time.Time** |  | 
 **subject** | **string** |  | 
 **messages** | [**Message**](Message.md) |  | 

### Return type

[**ConversationCreate**](ConversationCreate.md)

### Authorization

[cookieAuth](../README.md#cookieAuth), [jwtAuth](../README.md#jwtAuth), [tokenAuth](../README.md#tokenAuth)

### HTTP request headers

- **Content-Type**: multipart/form-data
- **Accept**: application/json

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints)
[[Back to Model list]](../README.md#documentation-for-models)
[[Back to README]](../README.md)


## ApiV2InboxConversationsList

> PaginatedConversationListList ApiV2InboxConversationsList(ctx).Limit(limit).Offset(offset).Execute()





### Example

```go
package main

import (
    "context"
    "fmt"
    "os"
    openapiclient "./openapi"
)

func main() {
    limit := int32(56) // int32 | Number of results to return per page. (optional)
    offset := int32(56) // int32 | The initial index from which to return the results. (optional)

    configuration := openapiclient.NewConfiguration()
    api_client := openapiclient.NewAPIClient(configuration)
    resp, r, err := api_client.ApiApi.ApiV2InboxConversationsList(context.Background()).Limit(limit).Offset(offset).Execute()
    if err != nil {
        fmt.Fprintf(os.Stderr, "Error when calling `ApiApi.ApiV2InboxConversationsList``: %v\n", err)
        fmt.Fprintf(os.Stderr, "Full HTTP response: %v\n", r)
    }
    // response from `ApiV2InboxConversationsList`: PaginatedConversationListList
    fmt.Fprintf(os.Stdout, "Response from `ApiApi.ApiV2InboxConversationsList`: %v\n", resp)
}
```

### Path Parameters



### Other Parameters

Other parameters are passed through a pointer to a apiApiV2InboxConversationsListRequest struct via the builder pattern


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **limit** | **int32** | Number of results to return per page. | 
 **offset** | **int32** | The initial index from which to return the results. | 

### Return type

[**PaginatedConversationListList**](PaginatedConversationListList.md)

### Authorization

[cookieAuth](../README.md#cookieAuth), [jwtAuth](../README.md#jwtAuth), [tokenAuth](../README.md#tokenAuth)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints)
[[Back to Model list]](../README.md#documentation-for-models)
[[Back to README]](../README.md)


## ApiV2InboxConversationsMessagesAttachmentsRetrieve

> Attachment ApiV2InboxConversationsMessagesAttachmentsRetrieve(ctx, conversation, message, uuid).Format(format).Execute()





### Example

```go
package main

import (
    "context"
    "fmt"
    "os"
    openapiclient "./openapi"
)

func main() {
    conversation := TODO // string | 
    message := TODO // string | 
    uuid := TODO // string | 
    format := "format_example" // string |  (optional)

    configuration := openapiclient.NewConfiguration()
    api_client := openapiclient.NewAPIClient(configuration)
    resp, r, err := api_client.ApiApi.ApiV2InboxConversationsMessagesAttachmentsRetrieve(context.Background(), conversation, message, uuid).Format(format).Execute()
    if err != nil {
        fmt.Fprintf(os.Stderr, "Error when calling `ApiApi.ApiV2InboxConversationsMessagesAttachmentsRetrieve``: %v\n", err)
        fmt.Fprintf(os.Stderr, "Full HTTP response: %v\n", r)
    }
    // response from `ApiV2InboxConversationsMessagesAttachmentsRetrieve`: Attachment
    fmt.Fprintf(os.Stdout, "Response from `ApiApi.ApiV2InboxConversationsMessagesAttachmentsRetrieve`: %v\n", resp)
}
```

### Path Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
**ctx** | **context.Context** | context for authentication, logging, cancellation, deadlines, tracing, etc.
**conversation** | [**string**](.md) |  | 
**message** | [**string**](.md) |  | 
**uuid** | [**string**](.md) |  | 

### Other Parameters

Other parameters are passed through a pointer to a apiApiV2InboxConversationsMessagesAttachmentsRetrieveRequest struct via the builder pattern


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------



 **format** | **string** |  | 

### Return type

[**Attachment**](Attachment.md)

### Authorization

[cookieAuth](../README.md#cookieAuth), [jwtAuth](../README.md#jwtAuth), [tokenAuth](../README.md#tokenAuth)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json, application/pdf, text/plain

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints)
[[Back to Model list]](../README.md#documentation-for-models)
[[Back to README]](../README.md)


## ApiV2InboxConversationsMessagesCreate

> Message ApiV2InboxConversationsMessagesCreate(ctx, conversation).User(user).ReadDate(readDate).Created(created).Attachments(attachments).Uuid(uuid).Content(content).Execute()





### Example

```go
package main

import (
    "context"
    "fmt"
    "os"
    "time"
    openapiclient "./openapi"
)

func main() {
    conversation := TODO // string | 
    user := "user_example" // string | 
    readDate := time.Now() // time.Time | 
    created := time.Now() // time.Time | 
    attachments := []openapiclient.Attachment{*openapiclient.NewAttachment("AttachmentExtension_example", "AttachmentFilename_example", "Uuid_example")} // []Attachment | 
    uuid := TODO // string | 
    content := "content_example" // string |  (optional)

    configuration := openapiclient.NewConfiguration()
    api_client := openapiclient.NewAPIClient(configuration)
    resp, r, err := api_client.ApiApi.ApiV2InboxConversationsMessagesCreate(context.Background(), conversation).User(user).ReadDate(readDate).Created(created).Attachments(attachments).Uuid(uuid).Content(content).Execute()
    if err != nil {
        fmt.Fprintf(os.Stderr, "Error when calling `ApiApi.ApiV2InboxConversationsMessagesCreate``: %v\n", err)
        fmt.Fprintf(os.Stderr, "Full HTTP response: %v\n", r)
    }
    // response from `ApiV2InboxConversationsMessagesCreate`: Message
    fmt.Fprintf(os.Stdout, "Response from `ApiApi.ApiV2InboxConversationsMessagesCreate`: %v\n", resp)
}
```

### Path Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
**ctx** | **context.Context** | context for authentication, logging, cancellation, deadlines, tracing, etc.
**conversation** | [**string**](.md) |  | 

### Other Parameters

Other parameters are passed through a pointer to a apiApiV2InboxConversationsMessagesCreateRequest struct via the builder pattern


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------

 **user** | **string** |  | 
 **readDate** | **time.Time** |  | 
 **created** | **time.Time** |  | 
 **attachments** | [**[]Attachment**](Attachment.md) |  | 
 **uuid** | [**string**](string.md) |  | 
 **content** | **string** |  | 

### Return type

[**Message**](Message.md)

### Authorization

[cookieAuth](../README.md#cookieAuth), [jwtAuth](../README.md#jwtAuth), [tokenAuth](../README.md#tokenAuth)

### HTTP request headers

- **Content-Type**: multipart/form-data
- **Accept**: application/json

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints)
[[Back to Model list]](../README.md#documentation-for-models)
[[Back to README]](../README.md)


## ApiV2MobileVersionRetrieve

> MinimumAppVersion ApiV2MobileVersionRetrieve(ctx, platform).Execute()





### Example

```go
package main

import (
    "context"
    "fmt"
    "os"
    openapiclient "./openapi"
)

func main() {
    platform := "platform_example" // string | 

    configuration := openapiclient.NewConfiguration()
    api_client := openapiclient.NewAPIClient(configuration)
    resp, r, err := api_client.ApiApi.ApiV2MobileVersionRetrieve(context.Background(), platform).Execute()
    if err != nil {
        fmt.Fprintf(os.Stderr, "Error when calling `ApiApi.ApiV2MobileVersionRetrieve``: %v\n", err)
        fmt.Fprintf(os.Stderr, "Full HTTP response: %v\n", r)
    }
    // response from `ApiV2MobileVersionRetrieve`: MinimumAppVersion
    fmt.Fprintf(os.Stdout, "Response from `ApiApi.ApiV2MobileVersionRetrieve`: %v\n", resp)
}
```

### Path Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
**ctx** | **context.Context** | context for authentication, logging, cancellation, deadlines, tracing, etc.
**platform** | **string** |  | 

### Other Parameters

Other parameters are passed through a pointer to a apiApiV2MobileVersionRetrieveRequest struct via the builder pattern


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------


### Return type

[**MinimumAppVersion**](MinimumAppVersion.md)

### Authorization

[cookieAuth](../README.md#cookieAuth), [jwtAuth](../README.md#jwtAuth), [tokenAuth](../README.md#tokenAuth)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints)
[[Back to Model list]](../README.md#documentation-for-models)
[[Back to README]](../README.md)


## ApiV2PlatformSettingsList

> []NucoroSetting ApiV2PlatformSettingsList(ctx).Execute()



### Example

```go
package main

import (
    "context"
    "fmt"
    "os"
    openapiclient "./openapi"
)

func main() {

    configuration := openapiclient.NewConfiguration()
    api_client := openapiclient.NewAPIClient(configuration)
    resp, r, err := api_client.ApiApi.ApiV2PlatformSettingsList(context.Background()).Execute()
    if err != nil {
        fmt.Fprintf(os.Stderr, "Error when calling `ApiApi.ApiV2PlatformSettingsList``: %v\n", err)
        fmt.Fprintf(os.Stderr, "Full HTTP response: %v\n", r)
    }
    // response from `ApiV2PlatformSettingsList`: []NucoroSetting
    fmt.Fprintf(os.Stdout, "Response from `ApiApi.ApiV2PlatformSettingsList`: %v\n", resp)
}
```

### Path Parameters

This endpoint does not need any parameter.

### Other Parameters

Other parameters are passed through a pointer to a apiApiV2PlatformSettingsListRequest struct via the builder pattern


### Return type

[**[]NucoroSetting**](NucoroSetting.md)

### Authorization

[cookieAuth](../README.md#cookieAuth), [jwtAuth](../README.md#jwtAuth), [tokenAuth](../README.md#tokenAuth)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints)
[[Back to Model list]](../README.md#documentation-for-models)
[[Back to README]](../README.md)


## ApiV2PortalCountriesList

> PaginatedCountryListList ApiV2PortalCountriesList(ctx).Limit(limit).Offset(offset).Execute()





### Example

```go
package main

import (
    "context"
    "fmt"
    "os"
    openapiclient "./openapi"
)

func main() {
    limit := int32(56) // int32 | Number of results to return per page. (optional)
    offset := int32(56) // int32 | The initial index from which to return the results. (optional)

    configuration := openapiclient.NewConfiguration()
    api_client := openapiclient.NewAPIClient(configuration)
    resp, r, err := api_client.ApiApi.ApiV2PortalCountriesList(context.Background()).Limit(limit).Offset(offset).Execute()
    if err != nil {
        fmt.Fprintf(os.Stderr, "Error when calling `ApiApi.ApiV2PortalCountriesList``: %v\n", err)
        fmt.Fprintf(os.Stderr, "Full HTTP response: %v\n", r)
    }
    // response from `ApiV2PortalCountriesList`: PaginatedCountryListList
    fmt.Fprintf(os.Stdout, "Response from `ApiApi.ApiV2PortalCountriesList`: %v\n", resp)
}
```

### Path Parameters



### Other Parameters

Other parameters are passed through a pointer to a apiApiV2PortalCountriesListRequest struct via the builder pattern


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **limit** | **int32** | Number of results to return per page. | 
 **offset** | **int32** | The initial index from which to return the results. | 

### Return type

[**PaginatedCountryListList**](PaginatedCountryListList.md)

### Authorization

[cookieAuth](../README.md#cookieAuth), [jwtAuth](../README.md#jwtAuth), [tokenAuth](../README.md#tokenAuth)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints)
[[Back to Model list]](../README.md#documentation-for-models)
[[Back to README]](../README.md)


## ApiV2PortalSettingsRetrieve

> PortalSettingValueList ApiV2PortalSettingsRetrieve(ctx).Execute()



### Example

```go
package main

import (
    "context"
    "fmt"
    "os"
    openapiclient "./openapi"
)

func main() {

    configuration := openapiclient.NewConfiguration()
    api_client := openapiclient.NewAPIClient(configuration)
    resp, r, err := api_client.ApiApi.ApiV2PortalSettingsRetrieve(context.Background()).Execute()
    if err != nil {
        fmt.Fprintf(os.Stderr, "Error when calling `ApiApi.ApiV2PortalSettingsRetrieve``: %v\n", err)
        fmt.Fprintf(os.Stderr, "Full HTTP response: %v\n", r)
    }
    // response from `ApiV2PortalSettingsRetrieve`: PortalSettingValueList
    fmt.Fprintf(os.Stdout, "Response from `ApiApi.ApiV2PortalSettingsRetrieve`: %v\n", resp)
}
```

### Path Parameters

This endpoint does not need any parameter.

### Other Parameters

Other parameters are passed through a pointer to a apiApiV2PortalSettingsRetrieveRequest struct via the builder pattern


### Return type

[**PortalSettingValueList**](PortalSettingValueList.md)

### Authorization

[basicAuth](../README.md#basicAuth), [cookieAuth](../README.md#cookieAuth), [jwtAuth](../README.md#jwtAuth), [tokenAuth](../README.md#tokenAuth)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints)
[[Back to Model list]](../README.md#documentation-for-models)
[[Back to README]](../README.md)


## ApiV2PortalTosCurrentRetrieve

> Tos ApiV2PortalTosCurrentRetrieve(ctx).Execute()





### Example

```go
package main

import (
    "context"
    "fmt"
    "os"
    openapiclient "./openapi"
)

func main() {

    configuration := openapiclient.NewConfiguration()
    api_client := openapiclient.NewAPIClient(configuration)
    resp, r, err := api_client.ApiApi.ApiV2PortalTosCurrentRetrieve(context.Background()).Execute()
    if err != nil {
        fmt.Fprintf(os.Stderr, "Error when calling `ApiApi.ApiV2PortalTosCurrentRetrieve``: %v\n", err)
        fmt.Fprintf(os.Stderr, "Full HTTP response: %v\n", r)
    }
    // response from `ApiV2PortalTosCurrentRetrieve`: Tos
    fmt.Fprintf(os.Stdout, "Response from `ApiApi.ApiV2PortalTosCurrentRetrieve`: %v\n", resp)
}
```

### Path Parameters

This endpoint does not need any parameter.

### Other Parameters

Other parameters are passed through a pointer to a apiApiV2PortalTosCurrentRetrieveRequest struct via the builder pattern


### Return type

[**Tos**](Tos.md)

### Authorization

[cookieAuth](../README.md#cookieAuth), [jwtAuth](../README.md#jwtAuth), [tokenAuth](../README.md#tokenAuth)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints)
[[Back to Model list]](../README.md#documentation-for-models)
[[Back to README]](../README.md)


## ApiV2PortalTosList

> PaginatedTosList ApiV2PortalTosList(ctx).Limit(limit).Offset(offset).Execute()





### Example

```go
package main

import (
    "context"
    "fmt"
    "os"
    openapiclient "./openapi"
)

func main() {
    limit := int32(56) // int32 | Number of results to return per page. (optional)
    offset := int32(56) // int32 | The initial index from which to return the results. (optional)

    configuration := openapiclient.NewConfiguration()
    api_client := openapiclient.NewAPIClient(configuration)
    resp, r, err := api_client.ApiApi.ApiV2PortalTosList(context.Background()).Limit(limit).Offset(offset).Execute()
    if err != nil {
        fmt.Fprintf(os.Stderr, "Error when calling `ApiApi.ApiV2PortalTosList``: %v\n", err)
        fmt.Fprintf(os.Stderr, "Full HTTP response: %v\n", r)
    }
    // response from `ApiV2PortalTosList`: PaginatedTosList
    fmt.Fprintf(os.Stdout, "Response from `ApiApi.ApiV2PortalTosList`: %v\n", resp)
}
```

### Path Parameters



### Other Parameters

Other parameters are passed through a pointer to a apiApiV2PortalTosListRequest struct via the builder pattern


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **limit** | **int32** | Number of results to return per page. | 
 **offset** | **int32** | The initial index from which to return the results. | 

### Return type

[**PaginatedTosList**](PaginatedTosList.md)

### Authorization

[cookieAuth](../README.md#cookieAuth), [jwtAuth](../README.md#jwtAuth), [tokenAuth](../README.md#tokenAuth)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints)
[[Back to Model list]](../README.md#documentation-for-models)
[[Back to README]](../README.md)


## ApiV2PortalTosRetrieve

> Tos ApiV2PortalTosRetrieve(ctx, uuid).Execute()





### Example

```go
package main

import (
    "context"
    "fmt"
    "os"
    openapiclient "./openapi"
)

func main() {
    uuid := TODO // string | 

    configuration := openapiclient.NewConfiguration()
    api_client := openapiclient.NewAPIClient(configuration)
    resp, r, err := api_client.ApiApi.ApiV2PortalTosRetrieve(context.Background(), uuid).Execute()
    if err != nil {
        fmt.Fprintf(os.Stderr, "Error when calling `ApiApi.ApiV2PortalTosRetrieve``: %v\n", err)
        fmt.Fprintf(os.Stderr, "Full HTTP response: %v\n", r)
    }
    // response from `ApiV2PortalTosRetrieve`: Tos
    fmt.Fprintf(os.Stdout, "Response from `ApiApi.ApiV2PortalTosRetrieve`: %v\n", resp)
}
```

### Path Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
**ctx** | **context.Context** | context for authentication, logging, cancellation, deadlines, tracing, etc.
**uuid** | [**string**](.md) |  | 

### Other Parameters

Other parameters are passed through a pointer to a apiApiV2PortalTosRetrieveRequest struct via the builder pattern


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------


### Return type

[**Tos**](Tos.md)

### Authorization

[cookieAuth](../README.md#cookieAuth), [jwtAuth](../README.md#jwtAuth), [tokenAuth](../README.md#tokenAuth)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints)
[[Back to Model list]](../README.md#documentation-for-models)
[[Back to README]](../README.md)


## ApiV2PortfoliosActivitiesList

> PaginatedFeedActivityListList ApiV2PortfoliosActivitiesList(ctx, portfolioUuid).Limit(limit).Offset(offset).Target(target).Execute()



### Example

```go
package main

import (
    "context"
    "fmt"
    "os"
    openapiclient "./openapi"
)

func main() {
    portfolioUuid := TODO // string | 
    limit := int32(56) // int32 | Number of results to return per page. (optional)
    offset := int32(56) // int32 | The initial index from which to return the results. (optional)
    target := []string{"Target_example"} // []string |  (optional)

    configuration := openapiclient.NewConfiguration()
    api_client := openapiclient.NewAPIClient(configuration)
    resp, r, err := api_client.ApiApi.ApiV2PortfoliosActivitiesList(context.Background(), portfolioUuid).Limit(limit).Offset(offset).Target(target).Execute()
    if err != nil {
        fmt.Fprintf(os.Stderr, "Error when calling `ApiApi.ApiV2PortfoliosActivitiesList``: %v\n", err)
        fmt.Fprintf(os.Stderr, "Full HTTP response: %v\n", r)
    }
    // response from `ApiV2PortfoliosActivitiesList`: PaginatedFeedActivityListList
    fmt.Fprintf(os.Stdout, "Response from `ApiApi.ApiV2PortfoliosActivitiesList`: %v\n", resp)
}
```

### Path Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
**ctx** | **context.Context** | context for authentication, logging, cancellation, deadlines, tracing, etc.
**portfolioUuid** | [**string**](.md) |  | 

### Other Parameters

Other parameters are passed through a pointer to a apiApiV2PortfoliosActivitiesListRequest struct via the builder pattern


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------

 **limit** | **int32** | Number of results to return per page. | 
 **offset** | **int32** | The initial index from which to return the results. | 
 **target** | **[]string** |  | 

### Return type

[**PaginatedFeedActivityListList**](PaginatedFeedActivityListList.md)

### Authorization

[cookieAuth](../README.md#cookieAuth), [jwtAuth](../README.md#jwtAuth), [tokenAuth](../README.md#tokenAuth)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints)
[[Back to Model list]](../README.md#documentation-for-models)
[[Back to README]](../README.md)


## ApiV2PortfoliosActivitiesRetrieve

> FeedActivityList ApiV2PortfoliosActivitiesRetrieve(ctx, portfolioUuid, uuid).Execute()



### Example

```go
package main

import (
    "context"
    "fmt"
    "os"
    openapiclient "./openapi"
)

func main() {
    portfolioUuid := TODO // string | 
    uuid := TODO // string | 

    configuration := openapiclient.NewConfiguration()
    api_client := openapiclient.NewAPIClient(configuration)
    resp, r, err := api_client.ApiApi.ApiV2PortfoliosActivitiesRetrieve(context.Background(), portfolioUuid, uuid).Execute()
    if err != nil {
        fmt.Fprintf(os.Stderr, "Error when calling `ApiApi.ApiV2PortfoliosActivitiesRetrieve``: %v\n", err)
        fmt.Fprintf(os.Stderr, "Full HTTP response: %v\n", r)
    }
    // response from `ApiV2PortfoliosActivitiesRetrieve`: FeedActivityList
    fmt.Fprintf(os.Stdout, "Response from `ApiApi.ApiV2PortfoliosActivitiesRetrieve`: %v\n", resp)
}
```

### Path Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
**ctx** | **context.Context** | context for authentication, logging, cancellation, deadlines, tracing, etc.
**portfolioUuid** | [**string**](.md) |  | 
**uuid** | [**string**](.md) |  | 

### Other Parameters

Other parameters are passed through a pointer to a apiApiV2PortfoliosActivitiesRetrieveRequest struct via the builder pattern


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------



### Return type

[**FeedActivityList**](FeedActivityList.md)

### Authorization

[cookieAuth](../README.md#cookieAuth), [jwtAuth](../README.md#jwtAuth), [tokenAuth](../README.md#tokenAuth)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints)
[[Back to Model list]](../README.md#documentation-for-models)
[[Back to README]](../README.md)


## ApiV2PortfoliosAllocationsEndDay

> AllocationList ApiV2PortfoliosAllocationsEndDay(ctx, portfolioUuid).Execute()



### Example

```go
package main

import (
    "context"
    "fmt"
    "os"
    openapiclient "./openapi"
)

func main() {
    portfolioUuid := TODO // string | 

    configuration := openapiclient.NewConfiguration()
    api_client := openapiclient.NewAPIClient(configuration)
    resp, r, err := api_client.ApiApi.ApiV2PortfoliosAllocationsEndDay(context.Background(), portfolioUuid).Execute()
    if err != nil {
        fmt.Fprintf(os.Stderr, "Error when calling `ApiApi.ApiV2PortfoliosAllocationsEndDay``: %v\n", err)
        fmt.Fprintf(os.Stderr, "Full HTTP response: %v\n", r)
    }
    // response from `ApiV2PortfoliosAllocationsEndDay`: AllocationList
    fmt.Fprintf(os.Stdout, "Response from `ApiApi.ApiV2PortfoliosAllocationsEndDay`: %v\n", resp)
}
```

### Path Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
**ctx** | **context.Context** | context for authentication, logging, cancellation, deadlines, tracing, etc.
**portfolioUuid** | [**string**](.md) |  | 

### Other Parameters

Other parameters are passed through a pointer to a apiApiV2PortfoliosAllocationsEndDayRequest struct via the builder pattern


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------


### Return type

[**AllocationList**](AllocationList.md)

### Authorization

[cookieAuth](../README.md#cookieAuth), [jwtAuth](../README.md#jwtAuth), [tokenAuth](../README.md#tokenAuth)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints)
[[Back to Model list]](../README.md#documentation-for-models)
[[Back to README]](../README.md)


## ApiV2PortfoliosAllocationsEndDayByDateRetrieve

> AllocationDetail ApiV2PortfoliosAllocationsEndDayByDateRetrieve(ctx, allocationDate, portfolioUuid).Execute()



### Example

```go
package main

import (
    "context"
    "fmt"
    "os"
    openapiclient "./openapi"
)

func main() {
    allocationDate := "allocationDate_example" // string | 
    portfolioUuid := TODO // string | 

    configuration := openapiclient.NewConfiguration()
    api_client := openapiclient.NewAPIClient(configuration)
    resp, r, err := api_client.ApiApi.ApiV2PortfoliosAllocationsEndDayByDateRetrieve(context.Background(), allocationDate, portfolioUuid).Execute()
    if err != nil {
        fmt.Fprintf(os.Stderr, "Error when calling `ApiApi.ApiV2PortfoliosAllocationsEndDayByDateRetrieve``: %v\n", err)
        fmt.Fprintf(os.Stderr, "Full HTTP response: %v\n", r)
    }
    // response from `ApiV2PortfoliosAllocationsEndDayByDateRetrieve`: AllocationDetail
    fmt.Fprintf(os.Stdout, "Response from `ApiApi.ApiV2PortfoliosAllocationsEndDayByDateRetrieve`: %v\n", resp)
}
```

### Path Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
**ctx** | **context.Context** | context for authentication, logging, cancellation, deadlines, tracing, etc.
**allocationDate** | **string** |  | 
**portfolioUuid** | [**string**](.md) |  | 

### Other Parameters

Other parameters are passed through a pointer to a apiApiV2PortfoliosAllocationsEndDayByDateRetrieveRequest struct via the builder pattern


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------



### Return type

[**AllocationDetail**](AllocationDetail.md)

### Authorization

[cookieAuth](../README.md#cookieAuth), [jwtAuth](../README.md#jwtAuth), [tokenAuth](../README.md#tokenAuth)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints)
[[Back to Model list]](../README.md#documentation-for-models)
[[Back to README]](../README.md)


## ApiV2PortfoliosAllocationsEndDayLatestRetrieve

> AllocationDetail ApiV2PortfoliosAllocationsEndDayLatestRetrieve(ctx, portfolioUuid).Execute()



### Example

```go
package main

import (
    "context"
    "fmt"
    "os"
    openapiclient "./openapi"
)

func main() {
    portfolioUuid := TODO // string | 

    configuration := openapiclient.NewConfiguration()
    api_client := openapiclient.NewAPIClient(configuration)
    resp, r, err := api_client.ApiApi.ApiV2PortfoliosAllocationsEndDayLatestRetrieve(context.Background(), portfolioUuid).Execute()
    if err != nil {
        fmt.Fprintf(os.Stderr, "Error when calling `ApiApi.ApiV2PortfoliosAllocationsEndDayLatestRetrieve``: %v\n", err)
        fmt.Fprintf(os.Stderr, "Full HTTP response: %v\n", r)
    }
    // response from `ApiV2PortfoliosAllocationsEndDayLatestRetrieve`: AllocationDetail
    fmt.Fprintf(os.Stdout, "Response from `ApiApi.ApiV2PortfoliosAllocationsEndDayLatestRetrieve`: %v\n", resp)
}
```

### Path Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
**ctx** | **context.Context** | context for authentication, logging, cancellation, deadlines, tracing, etc.
**portfolioUuid** | [**string**](.md) |  | 

### Other Parameters

Other parameters are passed through a pointer to a apiApiV2PortfoliosAllocationsEndDayLatestRetrieveRequest struct via the builder pattern


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------


### Return type

[**AllocationDetail**](AllocationDetail.md)

### Authorization

[cookieAuth](../README.md#cookieAuth), [jwtAuth](../README.md#jwtAuth), [tokenAuth](../README.md#tokenAuth)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints)
[[Back to Model list]](../README.md#documentation-for-models)
[[Back to README]](../README.md)


## ApiV2PortfoliosAllocationsHistoryRetrieve

> ApiV2PortfoliosAllocationsHistoryRetrieve(ctx, portfolio).Execute()





### Example

```go
package main

import (
    "context"
    "fmt"
    "os"
    openapiclient "./openapi"
)

func main() {
    portfolio := TODO // string | 

    configuration := openapiclient.NewConfiguration()
    api_client := openapiclient.NewAPIClient(configuration)
    resp, r, err := api_client.ApiApi.ApiV2PortfoliosAllocationsHistoryRetrieve(context.Background(), portfolio).Execute()
    if err != nil {
        fmt.Fprintf(os.Stderr, "Error when calling `ApiApi.ApiV2PortfoliosAllocationsHistoryRetrieve``: %v\n", err)
        fmt.Fprintf(os.Stderr, "Full HTTP response: %v\n", r)
    }
}
```

### Path Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
**ctx** | **context.Context** | context for authentication, logging, cancellation, deadlines, tracing, etc.
**portfolio** | [**string**](.md) |  | 

### Other Parameters

Other parameters are passed through a pointer to a apiApiV2PortfoliosAllocationsHistoryRetrieveRequest struct via the builder pattern


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------


### Return type

 (empty response body)

### Authorization

[cookieAuth](../README.md#cookieAuth), [jwtAuth](../README.md#jwtAuth), [tokenAuth](../README.md#tokenAuth)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: Not defined

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints)
[[Back to Model list]](../README.md#documentation-for-models)
[[Back to README]](../README.md)


## ApiV2PortfoliosAllocationsIntradayLatestRetrieve

> CurrentAllocation ApiV2PortfoliosAllocationsIntradayLatestRetrieve(ctx, portfolioUuid).Execute()



### Example

```go
package main

import (
    "context"
    "fmt"
    "os"
    openapiclient "./openapi"
)

func main() {
    portfolioUuid := TODO // string | 

    configuration := openapiclient.NewConfiguration()
    api_client := openapiclient.NewAPIClient(configuration)
    resp, r, err := api_client.ApiApi.ApiV2PortfoliosAllocationsIntradayLatestRetrieve(context.Background(), portfolioUuid).Execute()
    if err != nil {
        fmt.Fprintf(os.Stderr, "Error when calling `ApiApi.ApiV2PortfoliosAllocationsIntradayLatestRetrieve``: %v\n", err)
        fmt.Fprintf(os.Stderr, "Full HTTP response: %v\n", r)
    }
    // response from `ApiV2PortfoliosAllocationsIntradayLatestRetrieve`: CurrentAllocation
    fmt.Fprintf(os.Stdout, "Response from `ApiApi.ApiV2PortfoliosAllocationsIntradayLatestRetrieve`: %v\n", resp)
}
```

### Path Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
**ctx** | **context.Context** | context for authentication, logging, cancellation, deadlines, tracing, etc.
**portfolioUuid** | [**string**](.md) |  | 

### Other Parameters

Other parameters are passed through a pointer to a apiApiV2PortfoliosAllocationsIntradayLatestRetrieveRequest struct via the builder pattern


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------


### Return type

[**CurrentAllocation**](CurrentAllocation.md)

### Authorization

[cookieAuth](../README.md#cookieAuth), [jwtAuth](../README.md#jwtAuth), [tokenAuth](../README.md#tokenAuth)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints)
[[Back to Model list]](../README.md#documentation-for-models)
[[Back to README]](../README.md)


## ApiV2PortfoliosAllocationsList

> PaginatedAllocationListList ApiV2PortfoliosAllocationsList(ctx, portfolioUuid).Limit(limit).Offset(offset).ValuationDateAfter(valuationDateAfter).ValuationDateBefore(valuationDateBefore).Execute()



### Example

```go
package main

import (
    "context"
    "fmt"
    "os"
    "time"
    openapiclient "./openapi"
)

func main() {
    portfolioUuid := TODO // string | 
    limit := int32(56) // int32 | Number of results to return per page. (optional)
    offset := int32(56) // int32 | The initial index from which to return the results. (optional)
    valuationDateAfter := time.Now() // string |  (optional)
    valuationDateBefore := time.Now() // string |  (optional)

    configuration := openapiclient.NewConfiguration()
    api_client := openapiclient.NewAPIClient(configuration)
    resp, r, err := api_client.ApiApi.ApiV2PortfoliosAllocationsList(context.Background(), portfolioUuid).Limit(limit).Offset(offset).ValuationDateAfter(valuationDateAfter).ValuationDateBefore(valuationDateBefore).Execute()
    if err != nil {
        fmt.Fprintf(os.Stderr, "Error when calling `ApiApi.ApiV2PortfoliosAllocationsList``: %v\n", err)
        fmt.Fprintf(os.Stderr, "Full HTTP response: %v\n", r)
    }
    // response from `ApiV2PortfoliosAllocationsList`: PaginatedAllocationListList
    fmt.Fprintf(os.Stdout, "Response from `ApiApi.ApiV2PortfoliosAllocationsList`: %v\n", resp)
}
```

### Path Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
**ctx** | **context.Context** | context for authentication, logging, cancellation, deadlines, tracing, etc.
**portfolioUuid** | [**string**](.md) |  | 

### Other Parameters

Other parameters are passed through a pointer to a apiApiV2PortfoliosAllocationsListRequest struct via the builder pattern


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------

 **limit** | **int32** | Number of results to return per page. | 
 **offset** | **int32** | The initial index from which to return the results. | 
 **valuationDateAfter** | **string** |  | 
 **valuationDateBefore** | **string** |  | 

### Return type

[**PaginatedAllocationListList**](PaginatedAllocationListList.md)

### Authorization

[cookieAuth](../README.md#cookieAuth), [jwtAuth](../README.md#jwtAuth), [tokenAuth](../README.md#tokenAuth)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints)
[[Back to Model list]](../README.md#documentation-for-models)
[[Back to README]](../README.md)


## ApiV2PortfoliosAllocationsRetrieve

> AllocationList ApiV2PortfoliosAllocationsRetrieve(ctx, id, portfolioUuid).Execute()



### Example

```go
package main

import (
    "context"
    "fmt"
    "os"
    openapiclient "./openapi"
)

func main() {
    id := int32(56) // int32 | A unique integer value identifying this allocation.
    portfolioUuid := TODO // string | 

    configuration := openapiclient.NewConfiguration()
    api_client := openapiclient.NewAPIClient(configuration)
    resp, r, err := api_client.ApiApi.ApiV2PortfoliosAllocationsRetrieve(context.Background(), id, portfolioUuid).Execute()
    if err != nil {
        fmt.Fprintf(os.Stderr, "Error when calling `ApiApi.ApiV2PortfoliosAllocationsRetrieve``: %v\n", err)
        fmt.Fprintf(os.Stderr, "Full HTTP response: %v\n", r)
    }
    // response from `ApiV2PortfoliosAllocationsRetrieve`: AllocationList
    fmt.Fprintf(os.Stdout, "Response from `ApiApi.ApiV2PortfoliosAllocationsRetrieve`: %v\n", resp)
}
```

### Path Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
**ctx** | **context.Context** | context for authentication, logging, cancellation, deadlines, tracing, etc.
**id** | **int32** | A unique integer value identifying this allocation. | 
**portfolioUuid** | [**string**](.md) |  | 

### Other Parameters

Other parameters are passed through a pointer to a apiApiV2PortfoliosAllocationsRetrieveRequest struct via the builder pattern


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------



### Return type

[**AllocationList**](AllocationList.md)

### Authorization

[cookieAuth](../README.md#cookieAuth), [jwtAuth](../README.md#jwtAuth), [tokenAuth](../README.md#tokenAuth)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints)
[[Back to Model list]](../README.md#documentation-for-models)
[[Back to README]](../README.md)


## ApiV2PortfoliosCreate

> PortfolioCreate ApiV2PortfoliosCreate(ctx, portfolioUuid).PortfolioCreate(portfolioCreate).Execute()





### Example

```go
package main

import (
    "context"
    "fmt"
    "os"
    "time"
    openapiclient "./openapi"
)

func main() {
    portfolioUuid := TODO // string | 
    portfolioCreate := *openapiclient.NewPortfolioCreate("Uuid_example", "Name_example", "PortfolioType_example", int32(123), int32(123), openapiclient.Status2efEnum("PENDING"), time.Now(), time.Now(), "Advisor_example", "AdviceEngine_example") // PortfolioCreate | 

    configuration := openapiclient.NewConfiguration()
    api_client := openapiclient.NewAPIClient(configuration)
    resp, r, err := api_client.ApiApi.ApiV2PortfoliosCreate(context.Background(), portfolioUuid).PortfolioCreate(portfolioCreate).Execute()
    if err != nil {
        fmt.Fprintf(os.Stderr, "Error when calling `ApiApi.ApiV2PortfoliosCreate``: %v\n", err)
        fmt.Fprintf(os.Stderr, "Full HTTP response: %v\n", r)
    }
    // response from `ApiV2PortfoliosCreate`: PortfolioCreate
    fmt.Fprintf(os.Stdout, "Response from `ApiApi.ApiV2PortfoliosCreate`: %v\n", resp)
}
```

### Path Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
**ctx** | **context.Context** | context for authentication, logging, cancellation, deadlines, tracing, etc.
**portfolioUuid** | [**string**](.md) |  | 

### Other Parameters

Other parameters are passed through a pointer to a apiApiV2PortfoliosCreateRequest struct via the builder pattern


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------

 **portfolioCreate** | [**PortfolioCreate**](PortfolioCreate.md) |  | 

### Return type

[**PortfolioCreate**](PortfolioCreate.md)

### Authorization

[cookieAuth](../README.md#cookieAuth), [jwtAuth](../README.md#jwtAuth), [tokenAuth](../README.md#tokenAuth)

### HTTP request headers

- **Content-Type**: application/json, application/x-www-form-urlencoded, multipart/form-data
- **Accept**: application/json

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints)
[[Back to Model list]](../README.md#documentation-for-models)
[[Back to README]](../README.md)


## ApiV2PortfoliosDepositsCreate

> DepositCreate ApiV2PortfoliosDepositsCreate(ctx, portfolioUuid).DepositCreate(depositCreate).Execute()



### Example

```go
package main

import (
    "context"
    "fmt"
    "os"
    "time"
    openapiclient "./openapi"
)

func main() {
    portfolioUuid := TODO // string | 
    depositCreate := *openapiclient.NewDepositCreate("Uuid_example", float64(123), "Provider_example", "Reference_example", openapiclient.StatusB6aEnum("PENDING"), "Reason_example", time.Now(), time.Now()) // DepositCreate | 

    configuration := openapiclient.NewConfiguration()
    api_client := openapiclient.NewAPIClient(configuration)
    resp, r, err := api_client.ApiApi.ApiV2PortfoliosDepositsCreate(context.Background(), portfolioUuid).DepositCreate(depositCreate).Execute()
    if err != nil {
        fmt.Fprintf(os.Stderr, "Error when calling `ApiApi.ApiV2PortfoliosDepositsCreate``: %v\n", err)
        fmt.Fprintf(os.Stderr, "Full HTTP response: %v\n", r)
    }
    // response from `ApiV2PortfoliosDepositsCreate`: DepositCreate
    fmt.Fprintf(os.Stdout, "Response from `ApiApi.ApiV2PortfoliosDepositsCreate`: %v\n", resp)
}
```

### Path Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
**ctx** | **context.Context** | context for authentication, logging, cancellation, deadlines, tracing, etc.
**portfolioUuid** | [**string**](.md) |  | 

### Other Parameters

Other parameters are passed through a pointer to a apiApiV2PortfoliosDepositsCreateRequest struct via the builder pattern


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------

 **depositCreate** | [**DepositCreate**](DepositCreate.md) |  | 

### Return type

[**DepositCreate**](DepositCreate.md)

### Authorization

[cookieAuth](../README.md#cookieAuth), [jwtAuth](../README.md#jwtAuth), [tokenAuth](../README.md#tokenAuth)

### HTTP request headers

- **Content-Type**: application/json, application/x-www-form-urlencoded, multipart/form-data
- **Accept**: application/json

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints)
[[Back to Model list]](../README.md#documentation-for-models)
[[Back to README]](../README.md)


## ApiV2PortfoliosDepositsDestroy

> ApiV2PortfoliosDepositsDestroy(ctx, portfolioUuid, uuid).Execute()



### Example

```go
package main

import (
    "context"
    "fmt"
    "os"
    openapiclient "./openapi"
)

func main() {
    portfolioUuid := TODO // string | 
    uuid := TODO // string | 

    configuration := openapiclient.NewConfiguration()
    api_client := openapiclient.NewAPIClient(configuration)
    resp, r, err := api_client.ApiApi.ApiV2PortfoliosDepositsDestroy(context.Background(), portfolioUuid, uuid).Execute()
    if err != nil {
        fmt.Fprintf(os.Stderr, "Error when calling `ApiApi.ApiV2PortfoliosDepositsDestroy``: %v\n", err)
        fmt.Fprintf(os.Stderr, "Full HTTP response: %v\n", r)
    }
}
```

### Path Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
**ctx** | **context.Context** | context for authentication, logging, cancellation, deadlines, tracing, etc.
**portfolioUuid** | [**string**](.md) |  | 
**uuid** | [**string**](.md) |  | 

### Other Parameters

Other parameters are passed through a pointer to a apiApiV2PortfoliosDepositsDestroyRequest struct via the builder pattern


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------



### Return type

 (empty response body)

### Authorization

[cookieAuth](../README.md#cookieAuth), [jwtAuth](../README.md#jwtAuth), [tokenAuth](../README.md#tokenAuth)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: Not defined

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints)
[[Back to Model list]](../README.md#documentation-for-models)
[[Back to README]](../README.md)


## ApiV2PortfoliosDepositsList

> PaginatedDepositListList ApiV2PortfoliosDepositsList(ctx, portfolioUuid).Limit(limit).Offset(offset).Status(status).Execute()



### Example

```go
package main

import (
    "context"
    "fmt"
    "os"
    openapiclient "./openapi"
)

func main() {
    portfolioUuid := TODO // string | 
    limit := int32(56) // int32 | Number of results to return per page. (optional)
    offset := int32(56) // int32 | The initial index from which to return the results. (optional)
    status := []string{"Status_example"} // []string |  (optional)

    configuration := openapiclient.NewConfiguration()
    api_client := openapiclient.NewAPIClient(configuration)
    resp, r, err := api_client.ApiApi.ApiV2PortfoliosDepositsList(context.Background(), portfolioUuid).Limit(limit).Offset(offset).Status(status).Execute()
    if err != nil {
        fmt.Fprintf(os.Stderr, "Error when calling `ApiApi.ApiV2PortfoliosDepositsList``: %v\n", err)
        fmt.Fprintf(os.Stderr, "Full HTTP response: %v\n", r)
    }
    // response from `ApiV2PortfoliosDepositsList`: PaginatedDepositListList
    fmt.Fprintf(os.Stdout, "Response from `ApiApi.ApiV2PortfoliosDepositsList`: %v\n", resp)
}
```

### Path Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
**ctx** | **context.Context** | context for authentication, logging, cancellation, deadlines, tracing, etc.
**portfolioUuid** | [**string**](.md) |  | 

### Other Parameters

Other parameters are passed through a pointer to a apiApiV2PortfoliosDepositsListRequest struct via the builder pattern


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------

 **limit** | **int32** | Number of results to return per page. | 
 **offset** | **int32** | The initial index from which to return the results. | 
 **status** | **[]string** |  | 

### Return type

[**PaginatedDepositListList**](PaginatedDepositListList.md)

### Authorization

[cookieAuth](../README.md#cookieAuth), [jwtAuth](../README.md#jwtAuth), [tokenAuth](../README.md#tokenAuth)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints)
[[Back to Model list]](../README.md#documentation-for-models)
[[Back to README]](../README.md)


## ApiV2PortfoliosDepositsRetrieve

> DepositDetail ApiV2PortfoliosDepositsRetrieve(ctx, portfolioUuid, uuid).Execute()



### Example

```go
package main

import (
    "context"
    "fmt"
    "os"
    openapiclient "./openapi"
)

func main() {
    portfolioUuid := TODO // string | 
    uuid := TODO // string | 

    configuration := openapiclient.NewConfiguration()
    api_client := openapiclient.NewAPIClient(configuration)
    resp, r, err := api_client.ApiApi.ApiV2PortfoliosDepositsRetrieve(context.Background(), portfolioUuid, uuid).Execute()
    if err != nil {
        fmt.Fprintf(os.Stderr, "Error when calling `ApiApi.ApiV2PortfoliosDepositsRetrieve``: %v\n", err)
        fmt.Fprintf(os.Stderr, "Full HTTP response: %v\n", r)
    }
    // response from `ApiV2PortfoliosDepositsRetrieve`: DepositDetail
    fmt.Fprintf(os.Stdout, "Response from `ApiApi.ApiV2PortfoliosDepositsRetrieve`: %v\n", resp)
}
```

### Path Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
**ctx** | **context.Context** | context for authentication, logging, cancellation, deadlines, tracing, etc.
**portfolioUuid** | [**string**](.md) |  | 
**uuid** | [**string**](.md) |  | 

### Other Parameters

Other parameters are passed through a pointer to a apiApiV2PortfoliosDepositsRetrieveRequest struct via the builder pattern


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------



### Return type

[**DepositDetail**](DepositDetail.md)

### Authorization

[cookieAuth](../README.md#cookieAuth), [jwtAuth](../README.md#jwtAuth), [tokenAuth](../README.md#tokenAuth)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints)
[[Back to Model list]](../README.md#documentation-for-models)
[[Back to README]](../README.md)


## ApiV2PortfoliosDestroy

> ApiV2PortfoliosDestroy(ctx, portfolioUuid, uuid).Execute()





### Example

```go
package main

import (
    "context"
    "fmt"
    "os"
    openapiclient "./openapi"
)

func main() {
    portfolioUuid := TODO // string | 
    uuid := TODO // string | 

    configuration := openapiclient.NewConfiguration()
    api_client := openapiclient.NewAPIClient(configuration)
    resp, r, err := api_client.ApiApi.ApiV2PortfoliosDestroy(context.Background(), portfolioUuid, uuid).Execute()
    if err != nil {
        fmt.Fprintf(os.Stderr, "Error when calling `ApiApi.ApiV2PortfoliosDestroy``: %v\n", err)
        fmt.Fprintf(os.Stderr, "Full HTTP response: %v\n", r)
    }
}
```

### Path Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
**ctx** | **context.Context** | context for authentication, logging, cancellation, deadlines, tracing, etc.
**portfolioUuid** | [**string**](.md) |  | 
**uuid** | [**string**](.md) |  | 

### Other Parameters

Other parameters are passed through a pointer to a apiApiV2PortfoliosDestroyRequest struct via the builder pattern


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------



### Return type

 (empty response body)

### Authorization

[cookieAuth](../README.md#cookieAuth), [jwtAuth](../README.md#jwtAuth), [tokenAuth](../README.md#tokenAuth)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: Not defined

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints)
[[Back to Model list]](../README.md#documentation-for-models)
[[Back to README]](../README.md)


## ApiV2PortfoliosList

> PaginatedPortfolioListList ApiV2PortfoliosList(ctx, portfolioUuid).Client(client).ExternalCustodianId(externalCustodianId).Limit(limit).Name(name).Offset(offset).Ordering(ordering).PortfolioType(portfolioType).Status(status).ValuationDateAfter(valuationDateAfter).ValuationDateBefore(valuationDateBefore).Execute()





### Example

```go
package main

import (
    "context"
    "fmt"
    "os"
    "time"
    openapiclient "./openapi"
)

func main() {
    portfolioUuid := TODO // string | 
    client := TODO // string |  (optional)
    externalCustodianId := "externalCustodianId_example" // string |  (optional)
    limit := int32(56) // int32 | Number of results to return per page. (optional)
    name := "name_example" // string |  (optional)
    offset := int32(56) // int32 | The initial index from which to return the results. (optional)
    ordering := []string{"Ordering_example"} // []string | Ordering (optional)
    portfolioType := int32(56) // int32 |  (optional)
    status := []string{"Status_example"} // []string |  (optional)
    valuationDateAfter := time.Now() // string |  (optional)
    valuationDateBefore := time.Now() // string |  (optional)

    configuration := openapiclient.NewConfiguration()
    api_client := openapiclient.NewAPIClient(configuration)
    resp, r, err := api_client.ApiApi.ApiV2PortfoliosList(context.Background(), portfolioUuid).Client(client).ExternalCustodianId(externalCustodianId).Limit(limit).Name(name).Offset(offset).Ordering(ordering).PortfolioType(portfolioType).Status(status).ValuationDateAfter(valuationDateAfter).ValuationDateBefore(valuationDateBefore).Execute()
    if err != nil {
        fmt.Fprintf(os.Stderr, "Error when calling `ApiApi.ApiV2PortfoliosList``: %v\n", err)
        fmt.Fprintf(os.Stderr, "Full HTTP response: %v\n", r)
    }
    // response from `ApiV2PortfoliosList`: PaginatedPortfolioListList
    fmt.Fprintf(os.Stdout, "Response from `ApiApi.ApiV2PortfoliosList`: %v\n", resp)
}
```

### Path Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
**ctx** | **context.Context** | context for authentication, logging, cancellation, deadlines, tracing, etc.
**portfolioUuid** | [**string**](.md) |  | 

### Other Parameters

Other parameters are passed through a pointer to a apiApiV2PortfoliosListRequest struct via the builder pattern


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------

 **client** | [**string**](string.md) |  | 
 **externalCustodianId** | **string** |  | 
 **limit** | **int32** | Number of results to return per page. | 
 **name** | **string** |  | 
 **offset** | **int32** | The initial index from which to return the results. | 
 **ordering** | **[]string** | Ordering | 
 **portfolioType** | **int32** |  | 
 **status** | **[]string** |  | 
 **valuationDateAfter** | **string** |  | 
 **valuationDateBefore** | **string** |  | 

### Return type

[**PaginatedPortfolioListList**](PaginatedPortfolioListList.md)

### Authorization

[cookieAuth](../README.md#cookieAuth), [jwtAuth](../README.md#jwtAuth), [tokenAuth](../README.md#tokenAuth)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints)
[[Back to Model list]](../README.md#documentation-for-models)
[[Back to README]](../README.md)


## ApiV2PortfoliosOrdersCreate

> CreateOrder ApiV2PortfoliosOrdersCreate(ctx, portfolioUuid).CreateOrder(createOrder).Execute()



### Example

```go
package main

import (
    "context"
    "fmt"
    "os"
    openapiclient "./openapi"
)

func main() {
    portfolioUuid := TODO // string | 
    createOrder := *openapiclient.NewCreateOrder(int32(123), *openapiclient.NewRelatedAssetSerializerWithAssetCategories("Uuid_example", "Isin_example", "Ticker_example", "Name_example", []string{"Categories_example"}), openapiclient.OrderTypeEnum("BUY"), openapiclient.CreateOrderMethodEnum("MARKET")) // CreateOrder | 

    configuration := openapiclient.NewConfiguration()
    api_client := openapiclient.NewAPIClient(configuration)
    resp, r, err := api_client.ApiApi.ApiV2PortfoliosOrdersCreate(context.Background(), portfolioUuid).CreateOrder(createOrder).Execute()
    if err != nil {
        fmt.Fprintf(os.Stderr, "Error when calling `ApiApi.ApiV2PortfoliosOrdersCreate``: %v\n", err)
        fmt.Fprintf(os.Stderr, "Full HTTP response: %v\n", r)
    }
    // response from `ApiV2PortfoliosOrdersCreate`: CreateOrder
    fmt.Fprintf(os.Stdout, "Response from `ApiApi.ApiV2PortfoliosOrdersCreate`: %v\n", resp)
}
```

### Path Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
**ctx** | **context.Context** | context for authentication, logging, cancellation, deadlines, tracing, etc.
**portfolioUuid** | [**string**](.md) |  | 

### Other Parameters

Other parameters are passed through a pointer to a apiApiV2PortfoliosOrdersCreateRequest struct via the builder pattern


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------

 **createOrder** | [**CreateOrder**](CreateOrder.md) |  | 

### Return type

[**CreateOrder**](CreateOrder.md)

### Authorization

[cookieAuth](../README.md#cookieAuth), [jwtAuth](../README.md#jwtAuth), [tokenAuth](../README.md#tokenAuth)

### HTTP request headers

- **Content-Type**: application/json, application/x-www-form-urlencoded, multipart/form-data
- **Accept**: application/json

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints)
[[Back to Model list]](../README.md#documentation-for-models)
[[Back to README]](../README.md)


## ApiV2PortfoliosOrdersDestroy

> ApiV2PortfoliosOrdersDestroy(ctx, portfolioUuid, uuid).Execute()





### Example

```go
package main

import (
    "context"
    "fmt"
    "os"
    openapiclient "./openapi"
)

func main() {
    portfolioUuid := TODO // string | 
    uuid := TODO // string | 

    configuration := openapiclient.NewConfiguration()
    api_client := openapiclient.NewAPIClient(configuration)
    resp, r, err := api_client.ApiApi.ApiV2PortfoliosOrdersDestroy(context.Background(), portfolioUuid, uuid).Execute()
    if err != nil {
        fmt.Fprintf(os.Stderr, "Error when calling `ApiApi.ApiV2PortfoliosOrdersDestroy``: %v\n", err)
        fmt.Fprintf(os.Stderr, "Full HTTP response: %v\n", r)
    }
}
```

### Path Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
**ctx** | **context.Context** | context for authentication, logging, cancellation, deadlines, tracing, etc.
**portfolioUuid** | [**string**](.md) |  | 
**uuid** | [**string**](.md) |  | 

### Other Parameters

Other parameters are passed through a pointer to a apiApiV2PortfoliosOrdersDestroyRequest struct via the builder pattern


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------



### Return type

 (empty response body)

### Authorization

[cookieAuth](../README.md#cookieAuth), [jwtAuth](../README.md#jwtAuth), [tokenAuth](../README.md#tokenAuth)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: Not defined

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints)
[[Back to Model list]](../README.md#documentation-for-models)
[[Back to README]](../README.md)


## ApiV2PortfoliosOrdersList

> PaginatedOrderListList ApiV2PortfoliosOrdersList(ctx, portfolioUuid).AdviceExternalId(adviceExternalId).Asset(asset).CompletedAfter(completedAfter).CompletedBefore(completedBefore).ExtraData(extraData).Limit(limit).Offset(offset).Portfolio(portfolio).Status(status).Execute()



### Example

```go
package main

import (
    "context"
    "fmt"
    "os"
    "time"
    openapiclient "./openapi"
)

func main() {
    portfolioUuid := TODO // string | 
    adviceExternalId := "adviceExternalId_example" // string |  (optional)
    asset := "asset_example" // string |  (optional)
    completedAfter := time.Now() // string |  (optional)
    completedBefore := time.Now() // string |  (optional)
    extraData := map[string]interface{}{"key": interface{}(123)} // map[string]interface{} | Additional order attributes for the specific portal (optional)
    limit := int32(56) // int32 | Number of results to return per page. (optional)
    offset := int32(56) // int32 | The initial index from which to return the results. (optional)
    portfolio := "portfolio_example" // string |  (optional)
    status := "status_example" // string |  (optional)

    configuration := openapiclient.NewConfiguration()
    api_client := openapiclient.NewAPIClient(configuration)
    resp, r, err := api_client.ApiApi.ApiV2PortfoliosOrdersList(context.Background(), portfolioUuid).AdviceExternalId(adviceExternalId).Asset(asset).CompletedAfter(completedAfter).CompletedBefore(completedBefore).ExtraData(extraData).Limit(limit).Offset(offset).Portfolio(portfolio).Status(status).Execute()
    if err != nil {
        fmt.Fprintf(os.Stderr, "Error when calling `ApiApi.ApiV2PortfoliosOrdersList``: %v\n", err)
        fmt.Fprintf(os.Stderr, "Full HTTP response: %v\n", r)
    }
    // response from `ApiV2PortfoliosOrdersList`: PaginatedOrderListList
    fmt.Fprintf(os.Stdout, "Response from `ApiApi.ApiV2PortfoliosOrdersList`: %v\n", resp)
}
```

### Path Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
**ctx** | **context.Context** | context for authentication, logging, cancellation, deadlines, tracing, etc.
**portfolioUuid** | [**string**](.md) |  | 

### Other Parameters

Other parameters are passed through a pointer to a apiApiV2PortfoliosOrdersListRequest struct via the builder pattern


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------

 **adviceExternalId** | **string** |  | 
 **asset** | **string** |  | 
 **completedAfter** | **string** |  | 
 **completedBefore** | **string** |  | 
 **extraData** | **map[string]interface{}** | Additional order attributes for the specific portal | 
 **limit** | **int32** | Number of results to return per page. | 
 **offset** | **int32** | The initial index from which to return the results. | 
 **portfolio** | **string** |  | 
 **status** | **string** |  | 

### Return type

[**PaginatedOrderListList**](PaginatedOrderListList.md)

### Authorization

[cookieAuth](../README.md#cookieAuth), [jwtAuth](../README.md#jwtAuth), [tokenAuth](../README.md#tokenAuth)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints)
[[Back to Model list]](../README.md#documentation-for-models)
[[Back to README]](../README.md)


## ApiV2PortfoliosOrdersRetrieve

> OrderList ApiV2PortfoliosOrdersRetrieve(ctx, portfolioUuid, uuid).Execute()



### Example

```go
package main

import (
    "context"
    "fmt"
    "os"
    openapiclient "./openapi"
)

func main() {
    portfolioUuid := TODO // string | 
    uuid := TODO // string | 

    configuration := openapiclient.NewConfiguration()
    api_client := openapiclient.NewAPIClient(configuration)
    resp, r, err := api_client.ApiApi.ApiV2PortfoliosOrdersRetrieve(context.Background(), portfolioUuid, uuid).Execute()
    if err != nil {
        fmt.Fprintf(os.Stderr, "Error when calling `ApiApi.ApiV2PortfoliosOrdersRetrieve``: %v\n", err)
        fmt.Fprintf(os.Stderr, "Full HTTP response: %v\n", r)
    }
    // response from `ApiV2PortfoliosOrdersRetrieve`: OrderList
    fmt.Fprintf(os.Stdout, "Response from `ApiApi.ApiV2PortfoliosOrdersRetrieve`: %v\n", resp)
}
```

### Path Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
**ctx** | **context.Context** | context for authentication, logging, cancellation, deadlines, tracing, etc.
**portfolioUuid** | [**string**](.md) |  | 
**uuid** | [**string**](.md) |  | 

### Other Parameters

Other parameters are passed through a pointer to a apiApiV2PortfoliosOrdersRetrieveRequest struct via the builder pattern


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------



### Return type

[**OrderList**](OrderList.md)

### Authorization

[cookieAuth](../README.md#cookieAuth), [jwtAuth](../README.md#jwtAuth), [tokenAuth](../README.md#tokenAuth)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints)
[[Back to Model list]](../README.md#documentation-for-models)
[[Back to README]](../README.md)


## ApiV2PortfoliosPartialUpdate

> PortfolioUpdate ApiV2PortfoliosPartialUpdate(ctx, portfolioUuid, uuid).PatchedPortfolioUpdate(patchedPortfolioUpdate).Execute()





### Example

```go
package main

import (
    "context"
    "fmt"
    "os"
    openapiclient "./openapi"
)

func main() {
    portfolioUuid := TODO // string | 
    uuid := TODO // string | 
    patchedPortfolioUpdate := *openapiclient.NewPatchedPortfolioUpdate() // PatchedPortfolioUpdate |  (optional)

    configuration := openapiclient.NewConfiguration()
    api_client := openapiclient.NewAPIClient(configuration)
    resp, r, err := api_client.ApiApi.ApiV2PortfoliosPartialUpdate(context.Background(), portfolioUuid, uuid).PatchedPortfolioUpdate(patchedPortfolioUpdate).Execute()
    if err != nil {
        fmt.Fprintf(os.Stderr, "Error when calling `ApiApi.ApiV2PortfoliosPartialUpdate``: %v\n", err)
        fmt.Fprintf(os.Stderr, "Full HTTP response: %v\n", r)
    }
    // response from `ApiV2PortfoliosPartialUpdate`: PortfolioUpdate
    fmt.Fprintf(os.Stdout, "Response from `ApiApi.ApiV2PortfoliosPartialUpdate`: %v\n", resp)
}
```

### Path Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
**ctx** | **context.Context** | context for authentication, logging, cancellation, deadlines, tracing, etc.
**portfolioUuid** | [**string**](.md) |  | 
**uuid** | [**string**](.md) |  | 

### Other Parameters

Other parameters are passed through a pointer to a apiApiV2PortfoliosPartialUpdateRequest struct via the builder pattern


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------


 **patchedPortfolioUpdate** | [**PatchedPortfolioUpdate**](PatchedPortfolioUpdate.md) |  | 

### Return type

[**PortfolioUpdate**](PortfolioUpdate.md)

### Authorization

[cookieAuth](../README.md#cookieAuth), [jwtAuth](../README.md#jwtAuth), [tokenAuth](../README.md#tokenAuth)

### HTTP request headers

- **Content-Type**: application/json, application/x-www-form-urlencoded, multipart/form-data
- **Accept**: application/json

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints)
[[Back to Model list]](../README.md#documentation-for-models)
[[Back to README]](../README.md)


## ApiV2PortfoliosPerformanceMwrrList

> PaginatedPortfolioPerformanceList ApiV2PortfoliosPerformanceMwrrList(ctx, portfolioUuid).DateAfter(dateAfter).DateBefore(dateBefore).Limit(limit).Offset(offset).Execute()



### Example

```go
package main

import (
    "context"
    "fmt"
    "os"
    "time"
    openapiclient "./openapi"
)

func main() {
    portfolioUuid := TODO // string | 
    dateAfter := time.Now() // string |  (optional)
    dateBefore := time.Now() // string |  (optional)
    limit := int32(56) // int32 | Number of results to return per page. (optional)
    offset := int32(56) // int32 | The initial index from which to return the results. (optional)

    configuration := openapiclient.NewConfiguration()
    api_client := openapiclient.NewAPIClient(configuration)
    resp, r, err := api_client.ApiApi.ApiV2PortfoliosPerformanceMwrrList(context.Background(), portfolioUuid).DateAfter(dateAfter).DateBefore(dateBefore).Limit(limit).Offset(offset).Execute()
    if err != nil {
        fmt.Fprintf(os.Stderr, "Error when calling `ApiApi.ApiV2PortfoliosPerformanceMwrrList``: %v\n", err)
        fmt.Fprintf(os.Stderr, "Full HTTP response: %v\n", r)
    }
    // response from `ApiV2PortfoliosPerformanceMwrrList`: PaginatedPortfolioPerformanceList
    fmt.Fprintf(os.Stdout, "Response from `ApiApi.ApiV2PortfoliosPerformanceMwrrList`: %v\n", resp)
}
```

### Path Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
**ctx** | **context.Context** | context for authentication, logging, cancellation, deadlines, tracing, etc.
**portfolioUuid** | [**string**](.md) |  | 

### Other Parameters

Other parameters are passed through a pointer to a apiApiV2PortfoliosPerformanceMwrrListRequest struct via the builder pattern


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------

 **dateAfter** | **string** |  | 
 **dateBefore** | **string** |  | 
 **limit** | **int32** | Number of results to return per page. | 
 **offset** | **int32** | The initial index from which to return the results. | 

### Return type

[**PaginatedPortfolioPerformanceList**](PaginatedPortfolioPerformanceList.md)

### Authorization

[cookieAuth](../README.md#cookieAuth), [jwtAuth](../README.md#jwtAuth), [tokenAuth](../README.md#tokenAuth)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints)
[[Back to Model list]](../README.md#documentation-for-models)
[[Back to README]](../README.md)


## ApiV2PortfoliosPerformancePositionsList

> PaginatedPortfolioPerformancePositionsList ApiV2PortfoliosPerformancePositionsList(ctx, portfolioUuid).Limit(limit).Offset(offset).Execute()



### Example

```go
package main

import (
    "context"
    "fmt"
    "os"
    openapiclient "./openapi"
)

func main() {
    portfolioUuid := TODO // string | 
    limit := int32(56) // int32 | Number of results to return per page. (optional)
    offset := int32(56) // int32 | The initial index from which to return the results. (optional)

    configuration := openapiclient.NewConfiguration()
    api_client := openapiclient.NewAPIClient(configuration)
    resp, r, err := api_client.ApiApi.ApiV2PortfoliosPerformancePositionsList(context.Background(), portfolioUuid).Limit(limit).Offset(offset).Execute()
    if err != nil {
        fmt.Fprintf(os.Stderr, "Error when calling `ApiApi.ApiV2PortfoliosPerformancePositionsList``: %v\n", err)
        fmt.Fprintf(os.Stderr, "Full HTTP response: %v\n", r)
    }
    // response from `ApiV2PortfoliosPerformancePositionsList`: PaginatedPortfolioPerformancePositionsList
    fmt.Fprintf(os.Stdout, "Response from `ApiApi.ApiV2PortfoliosPerformancePositionsList`: %v\n", resp)
}
```

### Path Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
**ctx** | **context.Context** | context for authentication, logging, cancellation, deadlines, tracing, etc.
**portfolioUuid** | [**string**](.md) |  | 

### Other Parameters

Other parameters are passed through a pointer to a apiApiV2PortfoliosPerformancePositionsListRequest struct via the builder pattern


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------

 **limit** | **int32** | Number of results to return per page. | 
 **offset** | **int32** | The initial index from which to return the results. | 

### Return type

[**PaginatedPortfolioPerformancePositionsList**](PaginatedPortfolioPerformancePositionsList.md)

### Authorization

[cookieAuth](../README.md#cookieAuth), [jwtAuth](../README.md#jwtAuth), [tokenAuth](../README.md#tokenAuth)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints)
[[Back to Model list]](../README.md#documentation-for-models)
[[Back to README]](../README.md)


## ApiV2PortfoliosPerformanceTwrrList

> PaginatedPortfolioPerformanceList ApiV2PortfoliosPerformanceTwrrList(ctx, portfolioUuid).DateAfter(dateAfter).DateBefore(dateBefore).Limit(limit).Offset(offset).Execute()



### Example

```go
package main

import (
    "context"
    "fmt"
    "os"
    "time"
    openapiclient "./openapi"
)

func main() {
    portfolioUuid := TODO // string | 
    dateAfter := time.Now() // string |  (optional)
    dateBefore := time.Now() // string |  (optional)
    limit := int32(56) // int32 | Number of results to return per page. (optional)
    offset := int32(56) // int32 | The initial index from which to return the results. (optional)

    configuration := openapiclient.NewConfiguration()
    api_client := openapiclient.NewAPIClient(configuration)
    resp, r, err := api_client.ApiApi.ApiV2PortfoliosPerformanceTwrrList(context.Background(), portfolioUuid).DateAfter(dateAfter).DateBefore(dateBefore).Limit(limit).Offset(offset).Execute()
    if err != nil {
        fmt.Fprintf(os.Stderr, "Error when calling `ApiApi.ApiV2PortfoliosPerformanceTwrrList``: %v\n", err)
        fmt.Fprintf(os.Stderr, "Full HTTP response: %v\n", r)
    }
    // response from `ApiV2PortfoliosPerformanceTwrrList`: PaginatedPortfolioPerformanceList
    fmt.Fprintf(os.Stdout, "Response from `ApiApi.ApiV2PortfoliosPerformanceTwrrList`: %v\n", resp)
}
```

### Path Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
**ctx** | **context.Context** | context for authentication, logging, cancellation, deadlines, tracing, etc.
**portfolioUuid** | [**string**](.md) |  | 

### Other Parameters

Other parameters are passed through a pointer to a apiApiV2PortfoliosPerformanceTwrrListRequest struct via the builder pattern


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------

 **dateAfter** | **string** |  | 
 **dateBefore** | **string** |  | 
 **limit** | **int32** | Number of results to return per page. | 
 **offset** | **int32** | The initial index from which to return the results. | 

### Return type

[**PaginatedPortfolioPerformanceList**](PaginatedPortfolioPerformanceList.md)

### Authorization

[cookieAuth](../README.md#cookieAuth), [jwtAuth](../README.md#jwtAuth), [tokenAuth](../README.md#tokenAuth)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints)
[[Back to Model list]](../README.md#documentation-for-models)
[[Back to README]](../README.md)


## ApiV2PortfoliosPortfoliotypesList

> PaginatedPortfolioTypeList ApiV2PortfoliosPortfoliotypesList(ctx).Limit(limit).Offset(offset).Execute()



### Example

```go
package main

import (
    "context"
    "fmt"
    "os"
    openapiclient "./openapi"
)

func main() {
    limit := int32(56) // int32 | Number of results to return per page. (optional)
    offset := int32(56) // int32 | The initial index from which to return the results. (optional)

    configuration := openapiclient.NewConfiguration()
    api_client := openapiclient.NewAPIClient(configuration)
    resp, r, err := api_client.ApiApi.ApiV2PortfoliosPortfoliotypesList(context.Background()).Limit(limit).Offset(offset).Execute()
    if err != nil {
        fmt.Fprintf(os.Stderr, "Error when calling `ApiApi.ApiV2PortfoliosPortfoliotypesList``: %v\n", err)
        fmt.Fprintf(os.Stderr, "Full HTTP response: %v\n", r)
    }
    // response from `ApiV2PortfoliosPortfoliotypesList`: PaginatedPortfolioTypeList
    fmt.Fprintf(os.Stdout, "Response from `ApiApi.ApiV2PortfoliosPortfoliotypesList`: %v\n", resp)
}
```

### Path Parameters



### Other Parameters

Other parameters are passed through a pointer to a apiApiV2PortfoliosPortfoliotypesListRequest struct via the builder pattern


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **limit** | **int32** | Number of results to return per page. | 
 **offset** | **int32** | The initial index from which to return the results. | 

### Return type

[**PaginatedPortfolioTypeList**](PaginatedPortfolioTypeList.md)

### Authorization

[cookieAuth](../README.md#cookieAuth), [jwtAuth](../README.md#jwtAuth), [tokenAuth](../README.md#tokenAuth)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints)
[[Back to Model list]](../README.md#documentation-for-models)
[[Back to README]](../README.md)


## ApiV2PortfoliosPortfoliotypesRestrictionsList

> PaginatedBasePortfolioTypeRestrictionsList ApiV2PortfoliosPortfoliotypesRestrictionsList(ctx, code).Limit(limit).Offset(offset).Execute()



### Example

```go
package main

import (
    "context"
    "fmt"
    "os"
    openapiclient "./openapi"
)

func main() {
    code := "code_example" // string | 
    limit := int32(56) // int32 | Number of results to return per page. (optional)
    offset := int32(56) // int32 | The initial index from which to return the results. (optional)

    configuration := openapiclient.NewConfiguration()
    api_client := openapiclient.NewAPIClient(configuration)
    resp, r, err := api_client.ApiApi.ApiV2PortfoliosPortfoliotypesRestrictionsList(context.Background(), code).Limit(limit).Offset(offset).Execute()
    if err != nil {
        fmt.Fprintf(os.Stderr, "Error when calling `ApiApi.ApiV2PortfoliosPortfoliotypesRestrictionsList``: %v\n", err)
        fmt.Fprintf(os.Stderr, "Full HTTP response: %v\n", r)
    }
    // response from `ApiV2PortfoliosPortfoliotypesRestrictionsList`: PaginatedBasePortfolioTypeRestrictionsList
    fmt.Fprintf(os.Stdout, "Response from `ApiApi.ApiV2PortfoliosPortfoliotypesRestrictionsList`: %v\n", resp)
}
```

### Path Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
**ctx** | **context.Context** | context for authentication, logging, cancellation, deadlines, tracing, etc.
**code** | **string** |  | 

### Other Parameters

Other parameters are passed through a pointer to a apiApiV2PortfoliosPortfoliotypesRestrictionsListRequest struct via the builder pattern


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------

 **limit** | **int32** | Number of results to return per page. | 
 **offset** | **int32** | The initial index from which to return the results. | 

### Return type

[**PaginatedBasePortfolioTypeRestrictionsList**](PaginatedBasePortfolioTypeRestrictionsList.md)

### Authorization

[cookieAuth](../README.md#cookieAuth), [jwtAuth](../README.md#jwtAuth), [tokenAuth](../README.md#tokenAuth)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints)
[[Back to Model list]](../README.md#documentation-for-models)
[[Back to README]](../README.md)


## ApiV2PortfoliosRebalancesList

> PaginatedRebalanceList ApiV2PortfoliosRebalancesList(ctx, portfolioUuid).Limit(limit).Offset(offset).Execute()



### Example

```go
package main

import (
    "context"
    "fmt"
    "os"
    openapiclient "./openapi"
)

func main() {
    portfolioUuid := TODO // string | 
    limit := int32(56) // int32 | Number of results to return per page. (optional)
    offset := int32(56) // int32 | The initial index from which to return the results. (optional)

    configuration := openapiclient.NewConfiguration()
    api_client := openapiclient.NewAPIClient(configuration)
    resp, r, err := api_client.ApiApi.ApiV2PortfoliosRebalancesList(context.Background(), portfolioUuid).Limit(limit).Offset(offset).Execute()
    if err != nil {
        fmt.Fprintf(os.Stderr, "Error when calling `ApiApi.ApiV2PortfoliosRebalancesList``: %v\n", err)
        fmt.Fprintf(os.Stderr, "Full HTTP response: %v\n", r)
    }
    // response from `ApiV2PortfoliosRebalancesList`: PaginatedRebalanceList
    fmt.Fprintf(os.Stdout, "Response from `ApiApi.ApiV2PortfoliosRebalancesList`: %v\n", resp)
}
```

### Path Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
**ctx** | **context.Context** | context for authentication, logging, cancellation, deadlines, tracing, etc.
**portfolioUuid** | [**string**](.md) |  | 

### Other Parameters

Other parameters are passed through a pointer to a apiApiV2PortfoliosRebalancesListRequest struct via the builder pattern


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------

 **limit** | **int32** | Number of results to return per page. | 
 **offset** | **int32** | The initial index from which to return the results. | 

### Return type

[**PaginatedRebalanceList**](PaginatedRebalanceList.md)

### Authorization

[cookieAuth](../README.md#cookieAuth), [jwtAuth](../README.md#jwtAuth), [tokenAuth](../README.md#tokenAuth)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints)
[[Back to Model list]](../README.md#documentation-for-models)
[[Back to README]](../README.md)


## ApiV2PortfoliosRebalancesRetrieve

> Rebalance ApiV2PortfoliosRebalancesRetrieve(ctx, portfolioUuid, uuid).Execute()



### Example

```go
package main

import (
    "context"
    "fmt"
    "os"
    openapiclient "./openapi"
)

func main() {
    portfolioUuid := TODO // string | 
    uuid := TODO // string | 

    configuration := openapiclient.NewConfiguration()
    api_client := openapiclient.NewAPIClient(configuration)
    resp, r, err := api_client.ApiApi.ApiV2PortfoliosRebalancesRetrieve(context.Background(), portfolioUuid, uuid).Execute()
    if err != nil {
        fmt.Fprintf(os.Stderr, "Error when calling `ApiApi.ApiV2PortfoliosRebalancesRetrieve``: %v\n", err)
        fmt.Fprintf(os.Stderr, "Full HTTP response: %v\n", r)
    }
    // response from `ApiV2PortfoliosRebalancesRetrieve`: Rebalance
    fmt.Fprintf(os.Stdout, "Response from `ApiApi.ApiV2PortfoliosRebalancesRetrieve`: %v\n", resp)
}
```

### Path Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
**ctx** | **context.Context** | context for authentication, logging, cancellation, deadlines, tracing, etc.
**portfolioUuid** | [**string**](.md) |  | 
**uuid** | [**string**](.md) |  | 

### Other Parameters

Other parameters are passed through a pointer to a apiApiV2PortfoliosRebalancesRetrieveRequest struct via the builder pattern


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------



### Return type

[**Rebalance**](Rebalance.md)

### Authorization

[cookieAuth](../README.md#cookieAuth), [jwtAuth](../README.md#jwtAuth), [tokenAuth](../README.md#tokenAuth)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints)
[[Back to Model list]](../README.md#documentation-for-models)
[[Back to README]](../README.md)


## ApiV2PortfoliosRestrictionsRetrieve

> PortfolioTypeRestrictions ApiV2PortfoliosRestrictionsRetrieve(ctx, portfolioUuid, uuid).Execute()





### Example

```go
package main

import (
    "context"
    "fmt"
    "os"
    openapiclient "./openapi"
)

func main() {
    portfolioUuid := TODO // string | 
    uuid := TODO // string | 

    configuration := openapiclient.NewConfiguration()
    api_client := openapiclient.NewAPIClient(configuration)
    resp, r, err := api_client.ApiApi.ApiV2PortfoliosRestrictionsRetrieve(context.Background(), portfolioUuid, uuid).Execute()
    if err != nil {
        fmt.Fprintf(os.Stderr, "Error when calling `ApiApi.ApiV2PortfoliosRestrictionsRetrieve``: %v\n", err)
        fmt.Fprintf(os.Stderr, "Full HTTP response: %v\n", r)
    }
    // response from `ApiV2PortfoliosRestrictionsRetrieve`: PortfolioTypeRestrictions
    fmt.Fprintf(os.Stdout, "Response from `ApiApi.ApiV2PortfoliosRestrictionsRetrieve`: %v\n", resp)
}
```

### Path Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
**ctx** | **context.Context** | context for authentication, logging, cancellation, deadlines, tracing, etc.
**portfolioUuid** | [**string**](.md) |  | 
**uuid** | [**string**](.md) |  | 

### Other Parameters

Other parameters are passed through a pointer to a apiApiV2PortfoliosRestrictionsRetrieveRequest struct via the builder pattern


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------



### Return type

[**PortfolioTypeRestrictions**](PortfolioTypeRestrictions.md)

### Authorization

[cookieAuth](../README.md#cookieAuth), [jwtAuth](../README.md#jwtAuth), [tokenAuth](../README.md#tokenAuth)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints)
[[Back to Model list]](../README.md#documentation-for-models)
[[Back to README]](../README.md)


## ApiV2PortfoliosRetrieve

> PortfolioDetail ApiV2PortfoliosRetrieve(ctx, portfolioUuid, uuid).Execute()





### Example

```go
package main

import (
    "context"
    "fmt"
    "os"
    openapiclient "./openapi"
)

func main() {
    portfolioUuid := TODO // string | 
    uuid := TODO // string | 

    configuration := openapiclient.NewConfiguration()
    api_client := openapiclient.NewAPIClient(configuration)
    resp, r, err := api_client.ApiApi.ApiV2PortfoliosRetrieve(context.Background(), portfolioUuid, uuid).Execute()
    if err != nil {
        fmt.Fprintf(os.Stderr, "Error when calling `ApiApi.ApiV2PortfoliosRetrieve``: %v\n", err)
        fmt.Fprintf(os.Stderr, "Full HTTP response: %v\n", r)
    }
    // response from `ApiV2PortfoliosRetrieve`: PortfolioDetail
    fmt.Fprintf(os.Stdout, "Response from `ApiApi.ApiV2PortfoliosRetrieve`: %v\n", resp)
}
```

### Path Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
**ctx** | **context.Context** | context for authentication, logging, cancellation, deadlines, tracing, etc.
**portfolioUuid** | [**string**](.md) |  | 
**uuid** | [**string**](.md) |  | 

### Other Parameters

Other parameters are passed through a pointer to a apiApiV2PortfoliosRetrieveRequest struct via the builder pattern


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------



### Return type

[**PortfolioDetail**](PortfolioDetail.md)

### Authorization

[cookieAuth](../README.md#cookieAuth), [jwtAuth](../README.md#jwtAuth), [tokenAuth](../README.md#tokenAuth)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints)
[[Back to Model list]](../README.md#documentation-for-models)
[[Back to README]](../README.md)


## ApiV2PortfoliosUpdate

> PortfolioUpdate ApiV2PortfoliosUpdate(ctx, portfolioUuid, uuid).PortfolioUpdate(portfolioUpdate).Execute()





### Example

```go
package main

import (
    "context"
    "fmt"
    "os"
    "time"
    openapiclient "./openapi"
)

func main() {
    portfolioUuid := TODO // string | 
    uuid := TODO // string | 
    portfolioUpdate := *openapiclient.NewPortfolioUpdate("Uuid_example", "Name_example", "PortfolioType_example", openapiclient.Status2efEnum("PENDING"), time.Now(), time.Now(), "Advisor_example", "AdviceEngine_example") // PortfolioUpdate | 

    configuration := openapiclient.NewConfiguration()
    api_client := openapiclient.NewAPIClient(configuration)
    resp, r, err := api_client.ApiApi.ApiV2PortfoliosUpdate(context.Background(), portfolioUuid, uuid).PortfolioUpdate(portfolioUpdate).Execute()
    if err != nil {
        fmt.Fprintf(os.Stderr, "Error when calling `ApiApi.ApiV2PortfoliosUpdate``: %v\n", err)
        fmt.Fprintf(os.Stderr, "Full HTTP response: %v\n", r)
    }
    // response from `ApiV2PortfoliosUpdate`: PortfolioUpdate
    fmt.Fprintf(os.Stdout, "Response from `ApiApi.ApiV2PortfoliosUpdate`: %v\n", resp)
}
```

### Path Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
**ctx** | **context.Context** | context for authentication, logging, cancellation, deadlines, tracing, etc.
**portfolioUuid** | [**string**](.md) |  | 
**uuid** | [**string**](.md) |  | 

### Other Parameters

Other parameters are passed through a pointer to a apiApiV2PortfoliosUpdateRequest struct via the builder pattern


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------


 **portfolioUpdate** | [**PortfolioUpdate**](PortfolioUpdate.md) |  | 

### Return type

[**PortfolioUpdate**](PortfolioUpdate.md)

### Authorization

[cookieAuth](../README.md#cookieAuth), [jwtAuth](../README.md#jwtAuth), [tokenAuth](../README.md#tokenAuth)

### HTTP request headers

- **Content-Type**: application/json, application/x-www-form-urlencoded, multipart/form-data
- **Accept**: application/json

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints)
[[Back to Model list]](../README.md#documentation-for-models)
[[Back to README]](../README.md)


## ApiV2PortfoliosWithdrawalsCreate

> InvestorWithdrawalCreate ApiV2PortfoliosWithdrawalsCreate(ctx, portfolioUuid).InvestorWithdrawalCreate(investorWithdrawalCreate).Execute()



### Example

```go
package main

import (
    "context"
    "fmt"
    "os"
    "time"
    openapiclient "./openapi"
)

func main() {
    portfolioUuid := TODO // string | 
    investorWithdrawalCreate := *openapiclient.NewInvestorWithdrawalCreate("Uuid_example", float64(123), "Provider_example", openapiclient.Status14bEnum("DRAFT"), "Reason_example", time.Now(), "WithdrawalType_example") // InvestorWithdrawalCreate | 

    configuration := openapiclient.NewConfiguration()
    api_client := openapiclient.NewAPIClient(configuration)
    resp, r, err := api_client.ApiApi.ApiV2PortfoliosWithdrawalsCreate(context.Background(), portfolioUuid).InvestorWithdrawalCreate(investorWithdrawalCreate).Execute()
    if err != nil {
        fmt.Fprintf(os.Stderr, "Error when calling `ApiApi.ApiV2PortfoliosWithdrawalsCreate``: %v\n", err)
        fmt.Fprintf(os.Stderr, "Full HTTP response: %v\n", r)
    }
    // response from `ApiV2PortfoliosWithdrawalsCreate`: InvestorWithdrawalCreate
    fmt.Fprintf(os.Stdout, "Response from `ApiApi.ApiV2PortfoliosWithdrawalsCreate`: %v\n", resp)
}
```

### Path Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
**ctx** | **context.Context** | context for authentication, logging, cancellation, deadlines, tracing, etc.
**portfolioUuid** | [**string**](.md) |  | 

### Other Parameters

Other parameters are passed through a pointer to a apiApiV2PortfoliosWithdrawalsCreateRequest struct via the builder pattern


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------

 **investorWithdrawalCreate** | [**InvestorWithdrawalCreate**](InvestorWithdrawalCreate.md) |  | 

### Return type

[**InvestorWithdrawalCreate**](InvestorWithdrawalCreate.md)

### Authorization

[cookieAuth](../README.md#cookieAuth), [jwtAuth](../README.md#jwtAuth), [tokenAuth](../README.md#tokenAuth)

### HTTP request headers

- **Content-Type**: application/json, application/x-www-form-urlencoded, multipart/form-data
- **Accept**: application/json

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints)
[[Back to Model list]](../README.md#documentation-for-models)
[[Back to README]](../README.md)


## ApiV2PortfoliosWithdrawalsDestroy

> ApiV2PortfoliosWithdrawalsDestroy(ctx, portfolioUuid, uuid).Execute()



### Example

```go
package main

import (
    "context"
    "fmt"
    "os"
    openapiclient "./openapi"
)

func main() {
    portfolioUuid := TODO // string | 
    uuid := TODO // string | 

    configuration := openapiclient.NewConfiguration()
    api_client := openapiclient.NewAPIClient(configuration)
    resp, r, err := api_client.ApiApi.ApiV2PortfoliosWithdrawalsDestroy(context.Background(), portfolioUuid, uuid).Execute()
    if err != nil {
        fmt.Fprintf(os.Stderr, "Error when calling `ApiApi.ApiV2PortfoliosWithdrawalsDestroy``: %v\n", err)
        fmt.Fprintf(os.Stderr, "Full HTTP response: %v\n", r)
    }
}
```

### Path Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
**ctx** | **context.Context** | context for authentication, logging, cancellation, deadlines, tracing, etc.
**portfolioUuid** | [**string**](.md) |  | 
**uuid** | [**string**](.md) |  | 

### Other Parameters

Other parameters are passed through a pointer to a apiApiV2PortfoliosWithdrawalsDestroyRequest struct via the builder pattern


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------



### Return type

 (empty response body)

### Authorization

[cookieAuth](../README.md#cookieAuth), [jwtAuth](../README.md#jwtAuth), [tokenAuth](../README.md#tokenAuth)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: Not defined

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints)
[[Back to Model list]](../README.md#documentation-for-models)
[[Back to README]](../README.md)


## ApiV2PortfoliosWithdrawalsList

> PaginatedInvestorWithdrawalListList ApiV2PortfoliosWithdrawalsList(ctx, portfolioUuid).Limit(limit).Offset(offset).Status(status).Execute()



### Example

```go
package main

import (
    "context"
    "fmt"
    "os"
    openapiclient "./openapi"
)

func main() {
    portfolioUuid := TODO // string | 
    limit := int32(56) // int32 | Number of results to return per page. (optional)
    offset := int32(56) // int32 | The initial index from which to return the results. (optional)
    status := []string{"Status_example"} // []string |  (optional)

    configuration := openapiclient.NewConfiguration()
    api_client := openapiclient.NewAPIClient(configuration)
    resp, r, err := api_client.ApiApi.ApiV2PortfoliosWithdrawalsList(context.Background(), portfolioUuid).Limit(limit).Offset(offset).Status(status).Execute()
    if err != nil {
        fmt.Fprintf(os.Stderr, "Error when calling `ApiApi.ApiV2PortfoliosWithdrawalsList``: %v\n", err)
        fmt.Fprintf(os.Stderr, "Full HTTP response: %v\n", r)
    }
    // response from `ApiV2PortfoliosWithdrawalsList`: PaginatedInvestorWithdrawalListList
    fmt.Fprintf(os.Stdout, "Response from `ApiApi.ApiV2PortfoliosWithdrawalsList`: %v\n", resp)
}
```

### Path Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
**ctx** | **context.Context** | context for authentication, logging, cancellation, deadlines, tracing, etc.
**portfolioUuid** | [**string**](.md) |  | 

### Other Parameters

Other parameters are passed through a pointer to a apiApiV2PortfoliosWithdrawalsListRequest struct via the builder pattern


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------

 **limit** | **int32** | Number of results to return per page. | 
 **offset** | **int32** | The initial index from which to return the results. | 
 **status** | **[]string** |  | 

### Return type

[**PaginatedInvestorWithdrawalListList**](PaginatedInvestorWithdrawalListList.md)

### Authorization

[cookieAuth](../README.md#cookieAuth), [jwtAuth](../README.md#jwtAuth), [tokenAuth](../README.md#tokenAuth)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints)
[[Back to Model list]](../README.md#documentation-for-models)
[[Back to README]](../README.md)


## ApiV2PortfoliosWithdrawalsRetrieve

> WithdrawalDetail ApiV2PortfoliosWithdrawalsRetrieve(ctx, portfolioUuid, uuid).Execute()



### Example

```go
package main

import (
    "context"
    "fmt"
    "os"
    openapiclient "./openapi"
)

func main() {
    portfolioUuid := TODO // string | 
    uuid := TODO // string | 

    configuration := openapiclient.NewConfiguration()
    api_client := openapiclient.NewAPIClient(configuration)
    resp, r, err := api_client.ApiApi.ApiV2PortfoliosWithdrawalsRetrieve(context.Background(), portfolioUuid, uuid).Execute()
    if err != nil {
        fmt.Fprintf(os.Stderr, "Error when calling `ApiApi.ApiV2PortfoliosWithdrawalsRetrieve``: %v\n", err)
        fmt.Fprintf(os.Stderr, "Full HTTP response: %v\n", r)
    }
    // response from `ApiV2PortfoliosWithdrawalsRetrieve`: WithdrawalDetail
    fmt.Fprintf(os.Stdout, "Response from `ApiApi.ApiV2PortfoliosWithdrawalsRetrieve`: %v\n", resp)
}
```

### Path Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
**ctx** | **context.Context** | context for authentication, logging, cancellation, deadlines, tracing, etc.
**portfolioUuid** | [**string**](.md) |  | 
**uuid** | [**string**](.md) |  | 

### Other Parameters

Other parameters are passed through a pointer to a apiApiV2PortfoliosWithdrawalsRetrieveRequest struct via the builder pattern


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------



### Return type

[**WithdrawalDetail**](WithdrawalDetail.md)

### Authorization

[cookieAuth](../README.md#cookieAuth), [jwtAuth](../README.md#jwtAuth), [tokenAuth](../README.md#tokenAuth)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints)
[[Back to Model list]](../README.md#documentation-for-models)
[[Back to README]](../README.md)


## ApiV2RiskQuestionsList

> PaginatedQuestionList ApiV2RiskQuestionsList(ctx).Limit(limit).Offset(offset).Execute()



### Example

```go
package main

import (
    "context"
    "fmt"
    "os"
    openapiclient "./openapi"
)

func main() {
    limit := int32(56) // int32 | Number of results to return per page. (optional)
    offset := int32(56) // int32 | The initial index from which to return the results. (optional)

    configuration := openapiclient.NewConfiguration()
    api_client := openapiclient.NewAPIClient(configuration)
    resp, r, err := api_client.ApiApi.ApiV2RiskQuestionsList(context.Background()).Limit(limit).Offset(offset).Execute()
    if err != nil {
        fmt.Fprintf(os.Stderr, "Error when calling `ApiApi.ApiV2RiskQuestionsList``: %v\n", err)
        fmt.Fprintf(os.Stderr, "Full HTTP response: %v\n", r)
    }
    // response from `ApiV2RiskQuestionsList`: PaginatedQuestionList
    fmt.Fprintf(os.Stdout, "Response from `ApiApi.ApiV2RiskQuestionsList`: %v\n", resp)
}
```

### Path Parameters



### Other Parameters

Other parameters are passed through a pointer to a apiApiV2RiskQuestionsListRequest struct via the builder pattern


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **limit** | **int32** | Number of results to return per page. | 
 **offset** | **int32** | The initial index from which to return the results. | 

### Return type

[**PaginatedQuestionList**](PaginatedQuestionList.md)

### Authorization

[cookieAuth](../README.md#cookieAuth), [jwtAuth](../README.md#jwtAuth), [tokenAuth](../README.md#tokenAuth)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints)
[[Back to Model list]](../README.md#documentation-for-models)
[[Back to README]](../README.md)


## ApiV2VerificationsVerifierWebhookCreate

> ApiV2VerificationsVerifierWebhookCreate(ctx, action, verifier).Execute()



### Example

```go
package main

import (
    "context"
    "fmt"
    "os"
    openapiclient "./openapi"
)

func main() {
    action := "action_example" // string | 
    verifier := "verifier_example" // string | 

    configuration := openapiclient.NewConfiguration()
    api_client := openapiclient.NewAPIClient(configuration)
    resp, r, err := api_client.ApiApi.ApiV2VerificationsVerifierWebhookCreate(context.Background(), action, verifier).Execute()
    if err != nil {
        fmt.Fprintf(os.Stderr, "Error when calling `ApiApi.ApiV2VerificationsVerifierWebhookCreate``: %v\n", err)
        fmt.Fprintf(os.Stderr, "Full HTTP response: %v\n", r)
    }
}
```

### Path Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
**ctx** | **context.Context** | context for authentication, logging, cancellation, deadlines, tracing, etc.
**action** | **string** |  | 
**verifier** | **string** |  | 

### Other Parameters

Other parameters are passed through a pointer to a apiApiV2VerificationsVerifierWebhookCreateRequest struct via the builder pattern


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------



### Return type

 (empty response body)

### Authorization

[cookieAuth](../README.md#cookieAuth), [jwtAuth](../README.md#jwtAuth), [tokenAuth](../README.md#tokenAuth)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: Not defined

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints)
[[Back to Model list]](../README.md#documentation-for-models)
[[Back to README]](../README.md)


## ApiV2WebsocketAuthenticationTicketCreate

> AuthenticationResponse ApiV2WebsocketAuthenticationTicketCreate(ctx).WebsocketAuthentication(websocketAuthentication).Execute()



### Example

```go
package main

import (
    "context"
    "fmt"
    "os"
    openapiclient "./openapi"
)

func main() {
    websocketAuthentication := *openapiclient.NewWebsocketAuthentication("Ticket_example") // WebsocketAuthentication | 

    configuration := openapiclient.NewConfiguration()
    api_client := openapiclient.NewAPIClient(configuration)
    resp, r, err := api_client.ApiApi.ApiV2WebsocketAuthenticationTicketCreate(context.Background()).WebsocketAuthentication(websocketAuthentication).Execute()
    if err != nil {
        fmt.Fprintf(os.Stderr, "Error when calling `ApiApi.ApiV2WebsocketAuthenticationTicketCreate``: %v\n", err)
        fmt.Fprintf(os.Stderr, "Full HTTP response: %v\n", r)
    }
    // response from `ApiV2WebsocketAuthenticationTicketCreate`: AuthenticationResponse
    fmt.Fprintf(os.Stdout, "Response from `ApiApi.ApiV2WebsocketAuthenticationTicketCreate`: %v\n", resp)
}
```

### Path Parameters



### Other Parameters

Other parameters are passed through a pointer to a apiApiV2WebsocketAuthenticationTicketCreateRequest struct via the builder pattern


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **websocketAuthentication** | [**WebsocketAuthentication**](WebsocketAuthentication.md) |  | 

### Return type

[**AuthenticationResponse**](AuthenticationResponse.md)

### Authorization

[cookieAuth](../README.md#cookieAuth), [jwtAuth](../README.md#jwtAuth), [tokenAuth](../README.md#tokenAuth)

### HTTP request headers

- **Content-Type**: application/json, application/x-www-form-urlencoded, multipart/form-data
- **Accept**: application/json

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints)
[[Back to Model list]](../README.md#documentation-for-models)
[[Back to README]](../README.md)


## ApiV2WebsocketAuthorizeAssetCreate

> Response ApiV2WebsocketAuthorizeAssetCreate(ctx).WebsocketAuthentication(websocketAuthentication).Execute()



### Example

```go
package main

import (
    "context"
    "fmt"
    "os"
    openapiclient "./openapi"
)

func main() {
    websocketAuthentication := *openapiclient.NewWebsocketAuthentication("Ticket_example") // WebsocketAuthentication | 

    configuration := openapiclient.NewConfiguration()
    api_client := openapiclient.NewAPIClient(configuration)
    resp, r, err := api_client.ApiApi.ApiV2WebsocketAuthorizeAssetCreate(context.Background()).WebsocketAuthentication(websocketAuthentication).Execute()
    if err != nil {
        fmt.Fprintf(os.Stderr, "Error when calling `ApiApi.ApiV2WebsocketAuthorizeAssetCreate``: %v\n", err)
        fmt.Fprintf(os.Stderr, "Full HTTP response: %v\n", r)
    }
    // response from `ApiV2WebsocketAuthorizeAssetCreate`: Response
    fmt.Fprintf(os.Stdout, "Response from `ApiApi.ApiV2WebsocketAuthorizeAssetCreate`: %v\n", resp)
}
```

### Path Parameters



### Other Parameters

Other parameters are passed through a pointer to a apiApiV2WebsocketAuthorizeAssetCreateRequest struct via the builder pattern


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **websocketAuthentication** | [**WebsocketAuthentication**](WebsocketAuthentication.md) |  | 

### Return type

[**Response**](Response.md)

### Authorization

[cookieAuth](../README.md#cookieAuth), [jwtAuth](../README.md#jwtAuth), [tokenAuth](../README.md#tokenAuth)

### HTTP request headers

- **Content-Type**: application/json, application/x-www-form-urlencoded, multipart/form-data
- **Accept**: application/json

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints)
[[Back to Model list]](../README.md#documentation-for-models)
[[Back to README]](../README.md)


## ApiV2WebsocketAuthorizeCreate

> Response ApiV2WebsocketAuthorizeCreate(ctx).WebsocketAuthentication(websocketAuthentication).Execute()



### Example

```go
package main

import (
    "context"
    "fmt"
    "os"
    openapiclient "./openapi"
)

func main() {
    websocketAuthentication := *openapiclient.NewWebsocketAuthentication("Ticket_example") // WebsocketAuthentication | 

    configuration := openapiclient.NewConfiguration()
    api_client := openapiclient.NewAPIClient(configuration)
    resp, r, err := api_client.ApiApi.ApiV2WebsocketAuthorizeCreate(context.Background()).WebsocketAuthentication(websocketAuthentication).Execute()
    if err != nil {
        fmt.Fprintf(os.Stderr, "Error when calling `ApiApi.ApiV2WebsocketAuthorizeCreate``: %v\n", err)
        fmt.Fprintf(os.Stderr, "Full HTTP response: %v\n", r)
    }
    // response from `ApiV2WebsocketAuthorizeCreate`: Response
    fmt.Fprintf(os.Stdout, "Response from `ApiApi.ApiV2WebsocketAuthorizeCreate`: %v\n", resp)
}
```

### Path Parameters



### Other Parameters

Other parameters are passed through a pointer to a apiApiV2WebsocketAuthorizeCreateRequest struct via the builder pattern


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **websocketAuthentication** | [**WebsocketAuthentication**](WebsocketAuthentication.md) |  | 

### Return type

[**Response**](Response.md)

### Authorization

[cookieAuth](../README.md#cookieAuth), [jwtAuth](../README.md#jwtAuth), [tokenAuth](../README.md#tokenAuth)

### HTTP request headers

- **Content-Type**: application/json, application/x-www-form-urlencoded, multipart/form-data
- **Accept**: application/json

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints)
[[Back to Model list]](../README.md#documentation-for-models)
[[Back to README]](../README.md)


## ApiV2WebsocketAuthorizePortfolioCreate

> Response ApiV2WebsocketAuthorizePortfolioCreate(ctx).WebsocketAuthentication(websocketAuthentication).Execute()



### Example

```go
package main

import (
    "context"
    "fmt"
    "os"
    openapiclient "./openapi"
)

func main() {
    websocketAuthentication := *openapiclient.NewWebsocketAuthentication("Ticket_example") // WebsocketAuthentication | 

    configuration := openapiclient.NewConfiguration()
    api_client := openapiclient.NewAPIClient(configuration)
    resp, r, err := api_client.ApiApi.ApiV2WebsocketAuthorizePortfolioCreate(context.Background()).WebsocketAuthentication(websocketAuthentication).Execute()
    if err != nil {
        fmt.Fprintf(os.Stderr, "Error when calling `ApiApi.ApiV2WebsocketAuthorizePortfolioCreate``: %v\n", err)
        fmt.Fprintf(os.Stderr, "Full HTTP response: %v\n", r)
    }
    // response from `ApiV2WebsocketAuthorizePortfolioCreate`: Response
    fmt.Fprintf(os.Stdout, "Response from `ApiApi.ApiV2WebsocketAuthorizePortfolioCreate`: %v\n", resp)
}
```

### Path Parameters



### Other Parameters

Other parameters are passed through a pointer to a apiApiV2WebsocketAuthorizePortfolioCreateRequest struct via the builder pattern


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **websocketAuthentication** | [**WebsocketAuthentication**](WebsocketAuthentication.md) |  | 

### Return type

[**Response**](Response.md)

### Authorization

[cookieAuth](../README.md#cookieAuth), [jwtAuth](../README.md#jwtAuth), [tokenAuth](../README.md#tokenAuth)

### HTTP request headers

- **Content-Type**: application/json, application/x-www-form-urlencoded, multipart/form-data
- **Accept**: application/json

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints)
[[Back to Model list]](../README.md#documentation-for-models)
[[Back to README]](../README.md)


## ApiV2WebsocketOnSubscribeCreate

> Subscribe ApiV2WebsocketOnSubscribeCreate(ctx).Subscribe(subscribe).Execute()



### Example

```go
package main

import (
    "context"
    "fmt"
    "os"
    openapiclient "./openapi"
)

func main() {
    subscribe := *openapiclient.NewSubscribe("Id_example", "Subscription_example") // Subscribe | 

    configuration := openapiclient.NewConfiguration()
    api_client := openapiclient.NewAPIClient(configuration)
    resp, r, err := api_client.ApiApi.ApiV2WebsocketOnSubscribeCreate(context.Background()).Subscribe(subscribe).Execute()
    if err != nil {
        fmt.Fprintf(os.Stderr, "Error when calling `ApiApi.ApiV2WebsocketOnSubscribeCreate``: %v\n", err)
        fmt.Fprintf(os.Stderr, "Full HTTP response: %v\n", r)
    }
    // response from `ApiV2WebsocketOnSubscribeCreate`: Subscribe
    fmt.Fprintf(os.Stdout, "Response from `ApiApi.ApiV2WebsocketOnSubscribeCreate`: %v\n", resp)
}
```

### Path Parameters



### Other Parameters

Other parameters are passed through a pointer to a apiApiV2WebsocketOnSubscribeCreateRequest struct via the builder pattern


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **subscribe** | [**Subscribe**](Subscribe.md) |  | 

### Return type

[**Subscribe**](Subscribe.md)

### Authorization

[cookieAuth](../README.md#cookieAuth), [jwtAuth](../README.md#jwtAuth), [tokenAuth](../README.md#tokenAuth)

### HTTP request headers

- **Content-Type**: application/json, application/x-www-form-urlencoded, multipart/form-data
- **Accept**: application/json

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints)
[[Back to Model list]](../README.md#documentation-for-models)
[[Back to README]](../README.md)


## ApiV2WebsocketOnUnsubscribeCreate

> Unsubscribe ApiV2WebsocketOnUnsubscribeCreate(ctx).Unsubscribe(unsubscribe).Execute()



### Example

```go
package main

import (
    "context"
    "fmt"
    "os"
    openapiclient "./openapi"
)

func main() {
    unsubscribe := *openapiclient.NewUnsubscribe("Id_example", "Subscription_example") // Unsubscribe | 

    configuration := openapiclient.NewConfiguration()
    api_client := openapiclient.NewAPIClient(configuration)
    resp, r, err := api_client.ApiApi.ApiV2WebsocketOnUnsubscribeCreate(context.Background()).Unsubscribe(unsubscribe).Execute()
    if err != nil {
        fmt.Fprintf(os.Stderr, "Error when calling `ApiApi.ApiV2WebsocketOnUnsubscribeCreate``: %v\n", err)
        fmt.Fprintf(os.Stderr, "Full HTTP response: %v\n", r)
    }
    // response from `ApiV2WebsocketOnUnsubscribeCreate`: Unsubscribe
    fmt.Fprintf(os.Stdout, "Response from `ApiApi.ApiV2WebsocketOnUnsubscribeCreate`: %v\n", resp)
}
```

### Path Parameters



### Other Parameters

Other parameters are passed through a pointer to a apiApiV2WebsocketOnUnsubscribeCreateRequest struct via the builder pattern


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **unsubscribe** | [**Unsubscribe**](Unsubscribe.md) |  | 

### Return type

[**Unsubscribe**](Unsubscribe.md)

### Authorization

[cookieAuth](../README.md#cookieAuth), [jwtAuth](../README.md#jwtAuth), [tokenAuth](../README.md#tokenAuth)

### HTTP request headers

- **Content-Type**: application/json, application/x-www-form-urlencoded, multipart/form-data
- **Accept**: application/json

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints)
[[Back to Model list]](../README.md#documentation-for-models)
[[Back to README]](../README.md)

