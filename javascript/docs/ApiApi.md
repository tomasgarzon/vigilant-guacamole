# NucoroApi.ApiApi

All URIs are relative to *http://localhost*

Method | HTTP request | Description
------------- | ------------- | -------------
[**apiSchemaRetrieve**](ApiApi.md#apiSchemaRetrieve) | **GET** /api/schema/ | 
[**apiV2AdviceEnginesEtsCategoriesList**](ApiApi.md#apiV2AdviceEnginesEtsCategoriesList) | **GET** /api/v2/advice-engines/ets/categories/ | 
[**apiV2AdviceEnginesEtsCoreCategoryGroupsList**](ApiApi.md#apiV2AdviceEnginesEtsCoreCategoryGroupsList) | **GET** /api/v2/advice-engines/ets/core-category-groups/ | 
[**apiV2AdviceEnginesEtsForecastCreate**](ApiApi.md#apiV2AdviceEnginesEtsForecastCreate) | **POST** /api/v2/advice-engines/ets/forecast/ | 
[**apiV2AdviceEnginesEtsPresetCategoryGroupsList**](ApiApi.md#apiV2AdviceEnginesEtsPresetCategoryGroupsList) | **GET** /api/v2/advice-engines/ets/preset-category-groups/ | 
[**apiV2AdviceEnginesModelPortfolioForecastCreate**](ApiApi.md#apiV2AdviceEnginesModelPortfolioForecastCreate) | **POST** /api/v2/advice-engines/model-portfolio/forecast/ | 
[**apiV2AdviceEnginesModelPortfolioModelPortfoliosList**](ApiApi.md#apiV2AdviceEnginesModelPortfolioModelPortfoliosList) | **GET** /api/v2/advice-engines/model-portfolio/model-portfolios/ | 
[**apiV2AdviceEnginesModelPortfolioModelPortfoliosRetrieve**](ApiApi.md#apiV2AdviceEnginesModelPortfolioModelPortfoliosRetrieve) | **GET** /api/v2/advice-engines/model-portfolio/model-portfolios/{uuid}/ | 
[**apiV2AssetsCategoriesList**](ApiApi.md#apiV2AssetsCategoriesList) | **GET** /api/v2/assets/categories/ | 
[**apiV2AssetsIntradayPricesLatestRetrieve**](ApiApi.md#apiV2AssetsIntradayPricesLatestRetrieve) | **GET** /api/v2/assets/{asset_identifier}/intraday-prices/latest/ | 
[**apiV2AssetsIntradayPricesList**](ApiApi.md#apiV2AssetsIntradayPricesList) | **GET** /api/v2/assets/{asset_identifier}/intraday-prices/ | 
[**apiV2AssetsList**](ApiApi.md#apiV2AssetsList) | **GET** /api/v2/assets/ | 
[**apiV2AssetsPerformanceList**](ApiApi.md#apiV2AssetsPerformanceList) | **GET** /api/v2/assets/{asset_identifier}/performance/ | 
[**apiV2AssetsPricesLatestRetrieve**](ApiApi.md#apiV2AssetsPricesLatestRetrieve) | **GET** /api/v2/assets/{asset_identifier}/prices/latest/ | 
[**apiV2AssetsPricesList**](ApiApi.md#apiV2AssetsPricesList) | **GET** /api/v2/assets/{asset_identifier}/prices/ | 
[**apiV2AssetsRetrieve**](ApiApi.md#apiV2AssetsRetrieve) | **GET** /api/v2/assets/{asset_identifier}/ | 
[**apiV2BillingInvoicesList**](ApiApi.md#apiV2BillingInvoicesList) | **GET** /api/v2/billing/invoices/ | 
[**apiV2BillingInvoicesRetrieve**](ApiApi.md#apiV2BillingInvoicesRetrieve) | **GET** /api/v2/billing/invoices/{uuid}/ | 
[**apiV2BrokerOrdersCreate**](ApiApi.md#apiV2BrokerOrdersCreate) | **POST** /api/v2/broker/orders/ | 
[**apiV2BrokerOrdersDestroy**](ApiApi.md#apiV2BrokerOrdersDestroy) | **DELETE** /api/v2/broker/orders/{uuid}/ | 
[**apiV2BrokerOrdersList**](ApiApi.md#apiV2BrokerOrdersList) | **GET** /api/v2/broker/orders/ | 
[**apiV2BrokerOrdersRetrieve**](ApiApi.md#apiV2BrokerOrdersRetrieve) | **GET** /api/v2/broker/orders/{uuid}/ | 
[**apiV2ClientsMeVerifyEmailCreate**](ApiApi.md#apiV2ClientsMeVerifyEmailCreate) | **POST** /api/v2/clients/me/verify/email/ | 
[**apiV2ClientsNationalDocumentsList**](ApiApi.md#apiV2ClientsNationalDocumentsList) | **GET** /api/v2/clients/national_documents/ | 
[**apiV2ClientsReferralRetrieve**](ApiApi.md#apiV2ClientsReferralRetrieve) | **GET** /api/v2/clients/referral/{referral_code}/ | 
[**apiV2ClientsVerifyEmailUpdate**](ApiApi.md#apiV2ClientsVerifyEmailUpdate) | **PUT** /api/v2/clients/{uuid}/verify/email/ | 
[**apiV2FeedsAccessLogsList**](ApiApi.md#apiV2FeedsAccessLogsList) | **GET** /api/v2/feeds/access-logs/ | 
[**apiV2FeedsActivitiesList**](ApiApi.md#apiV2FeedsActivitiesList) | **GET** /api/v2/feeds/activities/ | 
[**apiV2GoalsCreate**](ApiApi.md#apiV2GoalsCreate) | **POST** /api/v2/goals/ | 
[**apiV2GoalsDecumulationCreate**](ApiApi.md#apiV2GoalsDecumulationCreate) | **POST** /api/v2/goals/decumulation/ | 
[**apiV2GoalsDestroy**](ApiApi.md#apiV2GoalsDestroy) | **DELETE** /api/v2/goals/{uuid}/ | 
[**apiV2GoalsForecastCreate**](ApiApi.md#apiV2GoalsForecastCreate) | **POST** /api/v2/goals/forecast/ | 
[**apiV2GoalsList**](ApiApi.md#apiV2GoalsList) | **GET** /api/v2/goals/ | 
[**apiV2GoalsPartialUpdate**](ApiApi.md#apiV2GoalsPartialUpdate) | **PATCH** /api/v2/goals/{uuid}/ | 
[**apiV2GoalsRetrieve**](ApiApi.md#apiV2GoalsRetrieve) | **GET** /api/v2/goals/{uuid}/ | 
[**apiV2InboxConversationDetailMessagesList**](ApiApi.md#apiV2InboxConversationDetailMessagesList) | **GET** /api/v2/inbox/conversations/{conversation}/ | 
[**apiV2InboxConversationsCreate**](ApiApi.md#apiV2InboxConversationsCreate) | **POST** /api/v2/inbox/conversations/ | 
[**apiV2InboxConversationsList**](ApiApi.md#apiV2InboxConversationsList) | **GET** /api/v2/inbox/conversations/ | 
[**apiV2InboxConversationsMessagesAttachmentsRetrieve**](ApiApi.md#apiV2InboxConversationsMessagesAttachmentsRetrieve) | **GET** /api/v2/inbox/conversations/{conversation}/messages/{message}/attachments/{uuid}/ | 
[**apiV2InboxConversationsMessagesCreate**](ApiApi.md#apiV2InboxConversationsMessagesCreate) | **POST** /api/v2/inbox/conversations/{conversation}/messages/ | 
[**apiV2MobileVersionRetrieve**](ApiApi.md#apiV2MobileVersionRetrieve) | **GET** /api/v2/mobile/{platform}/version/ | 
[**apiV2PlatformSettingsList**](ApiApi.md#apiV2PlatformSettingsList) | **GET** /api/v2/platform/settings/ | 
[**apiV2PortalCountriesList**](ApiApi.md#apiV2PortalCountriesList) | **GET** /api/v2/portal/countries/ | 
[**apiV2PortalSettingsRetrieve**](ApiApi.md#apiV2PortalSettingsRetrieve) | **GET** /api/v2/portal/settings/ | 
[**apiV2PortalTosCurrentRetrieve**](ApiApi.md#apiV2PortalTosCurrentRetrieve) | **GET** /api/v2/portal/tos/current/ | 
[**apiV2PortalTosList**](ApiApi.md#apiV2PortalTosList) | **GET** /api/v2/portal/tos/ | 
[**apiV2PortalTosRetrieve**](ApiApi.md#apiV2PortalTosRetrieve) | **GET** /api/v2/portal/tos/{uuid}/ | 
[**apiV2PortfoliosActivitiesList**](ApiApi.md#apiV2PortfoliosActivitiesList) | **GET** /api/v2/portfolios/{portfolio_uuid}/activities/ | 
[**apiV2PortfoliosActivitiesRetrieve**](ApiApi.md#apiV2PortfoliosActivitiesRetrieve) | **GET** /api/v2/portfolios/{portfolio_uuid}/activities/{uuid}/ | 
[**apiV2PortfoliosAllocationsEndDay**](ApiApi.md#apiV2PortfoliosAllocationsEndDay) | **GET** /api/v2/portfolios/{portfolio_uuid}/allocations/end-day/ | 
[**apiV2PortfoliosAllocationsEndDayByDateRetrieve**](ApiApi.md#apiV2PortfoliosAllocationsEndDayByDateRetrieve) | **GET** /api/v2/portfolios/{portfolio_uuid}/allocations/end-day/{allocation_date}/ | 
[**apiV2PortfoliosAllocationsEndDayLatestRetrieve**](ApiApi.md#apiV2PortfoliosAllocationsEndDayLatestRetrieve) | **GET** /api/v2/portfolios/{portfolio_uuid}/allocations/end-day/latest/ | 
[**apiV2PortfoliosAllocationsHistoryRetrieve**](ApiApi.md#apiV2PortfoliosAllocationsHistoryRetrieve) | **GET** /api/v2/portfolios/{portfolio}/allocations/history/ | 
[**apiV2PortfoliosAllocationsIntradayLatestRetrieve**](ApiApi.md#apiV2PortfoliosAllocationsIntradayLatestRetrieve) | **GET** /api/v2/portfolios/{portfolio_uuid}/allocations/intraday/latest/ | 
[**apiV2PortfoliosAllocationsList**](ApiApi.md#apiV2PortfoliosAllocationsList) | **GET** /api/v2/portfolios/{portfolio_uuid}/allocations/ | 
[**apiV2PortfoliosAllocationsRetrieve**](ApiApi.md#apiV2PortfoliosAllocationsRetrieve) | **GET** /api/v2/portfolios/{portfolio_uuid}/allocations/{id}/ | 
[**apiV2PortfoliosCreate**](ApiApi.md#apiV2PortfoliosCreate) | **POST** /api/v2/portfolios/ | 
[**apiV2PortfoliosDepositsCreate**](ApiApi.md#apiV2PortfoliosDepositsCreate) | **POST** /api/v2/portfolios/{portfolio_uuid}/deposits/ | 
[**apiV2PortfoliosDepositsDestroy**](ApiApi.md#apiV2PortfoliosDepositsDestroy) | **DELETE** /api/v2/portfolios/{portfolio_uuid}/deposits/{uuid}/ | 
[**apiV2PortfoliosDepositsList**](ApiApi.md#apiV2PortfoliosDepositsList) | **GET** /api/v2/portfolios/{portfolio_uuid}/deposits/ | 
[**apiV2PortfoliosDepositsRetrieve**](ApiApi.md#apiV2PortfoliosDepositsRetrieve) | **GET** /api/v2/portfolios/{portfolio_uuid}/deposits/{uuid}/ | 
[**apiV2PortfoliosDestroy**](ApiApi.md#apiV2PortfoliosDestroy) | **DELETE** /api/v2/portfolios/{uuid}/ | 
[**apiV2PortfoliosList**](ApiApi.md#apiV2PortfoliosList) | **GET** /api/v2/portfolios/ | 
[**apiV2PortfoliosOrdersCreate**](ApiApi.md#apiV2PortfoliosOrdersCreate) | **POST** /api/v2/portfolios/{portfolio_uuid}/orders/ | 
[**apiV2PortfoliosOrdersDestroy**](ApiApi.md#apiV2PortfoliosOrdersDestroy) | **DELETE** /api/v2/portfolios/{portfolio_uuid}/orders/{uuid}/ | 
[**apiV2PortfoliosOrdersList**](ApiApi.md#apiV2PortfoliosOrdersList) | **GET** /api/v2/portfolios/{portfolio_uuid}/orders/ | 
[**apiV2PortfoliosOrdersRetrieve**](ApiApi.md#apiV2PortfoliosOrdersRetrieve) | **GET** /api/v2/portfolios/{portfolio_uuid}/orders/{uuid}/ | 
[**apiV2PortfoliosPartialUpdate**](ApiApi.md#apiV2PortfoliosPartialUpdate) | **PATCH** /api/v2/portfolios/{uuid}/ | 
[**apiV2PortfoliosPerformanceMwrrList**](ApiApi.md#apiV2PortfoliosPerformanceMwrrList) | **GET** /api/v2/portfolios/{portfolio_uuid}/performance/mwrr/ | 
[**apiV2PortfoliosPerformancePositionsList**](ApiApi.md#apiV2PortfoliosPerformancePositionsList) | **GET** /api/v2/portfolios/{portfolio_uuid}/performance/positions/ | 
[**apiV2PortfoliosPerformanceTwrrList**](ApiApi.md#apiV2PortfoliosPerformanceTwrrList) | **GET** /api/v2/portfolios/{portfolio_uuid}/performance/twrr/ | 
[**apiV2PortfoliosPortfoliotypesList**](ApiApi.md#apiV2PortfoliosPortfoliotypesList) | **GET** /api/v2/portfolios/portfoliotypes/ | 
[**apiV2PortfoliosPortfoliotypesRestrictionsList**](ApiApi.md#apiV2PortfoliosPortfoliotypesRestrictionsList) | **GET** /api/v2/portfolios/portfoliotypes/{code}/restrictions/ | 
[**apiV2PortfoliosRebalancesList**](ApiApi.md#apiV2PortfoliosRebalancesList) | **GET** /api/v2/portfolios/{portfolio_uuid}/rebalances/ | 
[**apiV2PortfoliosRebalancesRetrieve**](ApiApi.md#apiV2PortfoliosRebalancesRetrieve) | **GET** /api/v2/portfolios/{portfolio_uuid}/rebalances/{uuid}/ | 
[**apiV2PortfoliosRestrictionsRetrieve**](ApiApi.md#apiV2PortfoliosRestrictionsRetrieve) | **GET** /api/v2/portfolios/{uuid}/restrictions/ | 
[**apiV2PortfoliosRetrieve**](ApiApi.md#apiV2PortfoliosRetrieve) | **GET** /api/v2/portfolios/{uuid}/ | 
[**apiV2PortfoliosUpdate**](ApiApi.md#apiV2PortfoliosUpdate) | **PUT** /api/v2/portfolios/{uuid}/ | 
[**apiV2PortfoliosWithdrawalsCreate**](ApiApi.md#apiV2PortfoliosWithdrawalsCreate) | **POST** /api/v2/portfolios/{portfolio_uuid}/withdrawals/ | 
[**apiV2PortfoliosWithdrawalsDestroy**](ApiApi.md#apiV2PortfoliosWithdrawalsDestroy) | **DELETE** /api/v2/portfolios/{portfolio_uuid}/withdrawals/{uuid}/ | 
[**apiV2PortfoliosWithdrawalsList**](ApiApi.md#apiV2PortfoliosWithdrawalsList) | **GET** /api/v2/portfolios/{portfolio_uuid}/withdrawals/ | 
[**apiV2PortfoliosWithdrawalsRetrieve**](ApiApi.md#apiV2PortfoliosWithdrawalsRetrieve) | **GET** /api/v2/portfolios/{portfolio_uuid}/withdrawals/{uuid}/ | 
[**apiV2RiskQuestionsList**](ApiApi.md#apiV2RiskQuestionsList) | **GET** /api/v2/risk/questions/ | 
[**apiV2VerificationsVerifierWebhookCreate**](ApiApi.md#apiV2VerificationsVerifierWebhookCreate) | **POST** /api/v2/verifications/verifier_webhook/{verifier}/{action}/ | 
[**apiV2WebsocketAuthenticationTicketCreate**](ApiApi.md#apiV2WebsocketAuthenticationTicketCreate) | **POST** /api/v2/websocket/authentication/ticket/ | 
[**apiV2WebsocketAuthorizeAssetCreate**](ApiApi.md#apiV2WebsocketAuthorizeAssetCreate) | **POST** /api/v2/websocket/authorize/asset/ | 
[**apiV2WebsocketAuthorizeCreate**](ApiApi.md#apiV2WebsocketAuthorizeCreate) | **POST** /api/v2/websocket/authorize/ | 
[**apiV2WebsocketAuthorizePortfolioCreate**](ApiApi.md#apiV2WebsocketAuthorizePortfolioCreate) | **POST** /api/v2/websocket/authorize/portfolio/ | 
[**apiV2WebsocketOnSubscribeCreate**](ApiApi.md#apiV2WebsocketOnSubscribeCreate) | **POST** /api/v2/websocket/on_subscribe/ | 
[**apiV2WebsocketOnUnsubscribeCreate**](ApiApi.md#apiV2WebsocketOnUnsubscribeCreate) | **POST** /api/v2/websocket/on_unsubscribe/ | 



## apiSchemaRetrieve

> {String: Object} apiSchemaRetrieve(opts)



OpenApi3 schema for this API. Format can be selected via content negotiation.  - YAML: application/vnd.oai.openapi - JSON: application/vnd.oai.openapi+json

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

let apiInstance = new NucoroApi.ApiApi();
let opts = {
  'format': "format_example", // String | 
  'lang': "lang_example" // String | 
};
apiInstance.apiSchemaRetrieve(opts, (error, data, response) => {
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
 **format** | **String**|  | [optional] 
 **lang** | **String**|  | [optional] 

### Return type

**{String: Object}**

### Authorization

[cookieAuth](../README.md#cookieAuth), [jwtAuth](../README.md#jwtAuth), [tokenAuth](../README.md#tokenAuth)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/vnd.oai.openapi, application/yaml, application/vnd.oai.openapi+json, application/json


## apiV2AdviceEnginesEtsCategoriesList

> PaginatedCategoryList apiV2AdviceEnginesEtsCategoriesList(opts)



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

let apiInstance = new NucoroApi.ApiApi();
let opts = {
  'limit': 56, // Number | Number of results to return per page.
  'offset': 56 // Number | The initial index from which to return the results.
};
apiInstance.apiV2AdviceEnginesEtsCategoriesList(opts, (error, data, response) => {
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
 **limit** | **Number**| Number of results to return per page. | [optional] 
 **offset** | **Number**| The initial index from which to return the results. | [optional] 

### Return type

[**PaginatedCategoryList**](PaginatedCategoryList.md)

### Authorization

[cookieAuth](../README.md#cookieAuth), [jwtAuth](../README.md#jwtAuth), [tokenAuth](../README.md#tokenAuth)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## apiV2AdviceEnginesEtsCoreCategoryGroupsList

> PaginatedCoreCategoryGroupList apiV2AdviceEnginesEtsCoreCategoryGroupsList(opts)



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

let apiInstance = new NucoroApi.ApiApi();
let opts = {
  'limit': 56, // Number | Number of results to return per page.
  'offset': 56 // Number | The initial index from which to return the results.
};
apiInstance.apiV2AdviceEnginesEtsCoreCategoryGroupsList(opts, (error, data, response) => {
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
 **limit** | **Number**| Number of results to return per page. | [optional] 
 **offset** | **Number**| The initial index from which to return the results. | [optional] 

### Return type

[**PaginatedCoreCategoryGroupList**](PaginatedCoreCategoryGroupList.md)

### Authorization

[cookieAuth](../README.md#cookieAuth), [jwtAuth](../README.md#jwtAuth), [tokenAuth](../README.md#tokenAuth)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## apiV2AdviceEnginesEtsForecastCreate

> ETSForecastRequest apiV2AdviceEnginesEtsForecastCreate(eTSForecastRequest)



The forecast positions and amounts for the time_horizon and  risk_level chosen. Taking into account the initial_auto_deposit and the initial_amount jointly with the selected filters.

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

let apiInstance = new NucoroApi.ApiApi();
let eTSForecastRequest = new NucoroApi.ETSForecastRequest(); // ETSForecastRequest | 
apiInstance.apiV2AdviceEnginesEtsForecastCreate(eTSForecastRequest, (error, data, response) => {
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
 **eTSForecastRequest** | [**ETSForecastRequest**](ETSForecastRequest.md)|  | 

### Return type

[**ETSForecastRequest**](ETSForecastRequest.md)

### Authorization

[cookieAuth](../README.md#cookieAuth), [jwtAuth](../README.md#jwtAuth), [tokenAuth](../README.md#tokenAuth)

### HTTP request headers

- **Content-Type**: application/json, application/x-www-form-urlencoded, multipart/form-data
- **Accept**: application/json


## apiV2AdviceEnginesEtsPresetCategoryGroupsList

> PaginatedPresetCategoryGroupList apiV2AdviceEnginesEtsPresetCategoryGroupsList(opts)



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

let apiInstance = new NucoroApi.ApiApi();
let opts = {
  'limit': 56, // Number | Number of results to return per page.
  'offset': 56 // Number | The initial index from which to return the results.
};
apiInstance.apiV2AdviceEnginesEtsPresetCategoryGroupsList(opts, (error, data, response) => {
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
 **limit** | **Number**| Number of results to return per page. | [optional] 
 **offset** | **Number**| The initial index from which to return the results. | [optional] 

### Return type

[**PaginatedPresetCategoryGroupList**](PaginatedPresetCategoryGroupList.md)

### Authorization

[cookieAuth](../README.md#cookieAuth), [jwtAuth](../README.md#jwtAuth), [tokenAuth](../README.md#tokenAuth)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## apiV2AdviceEnginesModelPortfolioForecastCreate

> ModelPortfolioForecastRequest apiV2AdviceEnginesModelPortfolioForecastCreate(modelPortfolioForecastRequest)



The forecast positions and amounts for the time_horizon chosen. Taking into account the initial_auto_deposit and the initial_amount jointly with the selected filters.

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

let apiInstance = new NucoroApi.ApiApi();
let modelPortfolioForecastRequest = new NucoroApi.ModelPortfolioForecastRequest(); // ModelPortfolioForecastRequest | 
apiInstance.apiV2AdviceEnginesModelPortfolioForecastCreate(modelPortfolioForecastRequest, (error, data, response) => {
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
 **modelPortfolioForecastRequest** | [**ModelPortfolioForecastRequest**](ModelPortfolioForecastRequest.md)|  | 

### Return type

[**ModelPortfolioForecastRequest**](ModelPortfolioForecastRequest.md)

### Authorization

[cookieAuth](../README.md#cookieAuth), [jwtAuth](../README.md#jwtAuth), [tokenAuth](../README.md#tokenAuth)

### HTTP request headers

- **Content-Type**: application/json, application/x-www-form-urlencoded, multipart/form-data
- **Accept**: application/json


## apiV2AdviceEnginesModelPortfolioModelPortfoliosList

> PaginatedInvestorModelPortfolioList apiV2AdviceEnginesModelPortfolioModelPortfoliosList(opts)



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

let apiInstance = new NucoroApi.ApiApi();
let opts = {
  'extraData': {key: null}, // {String: Object} | Additional ModelPortfolio attributes
  'limit': 56, // Number | Number of results to return per page.
  'name': "name_example", // String | 
  'offset': 56, // Number | The initial index from which to return the results.
  'riskHigher': 56, // Number | 
  'riskLevel': 56, // Number | 
  'riskLower': 56 // Number | 
};
apiInstance.apiV2AdviceEnginesModelPortfolioModelPortfoliosList(opts, (error, data, response) => {
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
 **extraData** | [**{String: Object}**](Object.md)| Additional ModelPortfolio attributes | [optional] 
 **limit** | **Number**| Number of results to return per page. | [optional] 
 **name** | **String**|  | [optional] 
 **offset** | **Number**| The initial index from which to return the results. | [optional] 
 **riskHigher** | **Number**|  | [optional] 
 **riskLevel** | **Number**|  | [optional] 
 **riskLower** | **Number**|  | [optional] 

### Return type

[**PaginatedInvestorModelPortfolioList**](PaginatedInvestorModelPortfolioList.md)

### Authorization

[cookieAuth](../README.md#cookieAuth), [jwtAuth](../README.md#jwtAuth), [tokenAuth](../README.md#tokenAuth)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## apiV2AdviceEnginesModelPortfolioModelPortfoliosRetrieve

> InvestorModelPortfolio apiV2AdviceEnginesModelPortfolioModelPortfoliosRetrieve(uuid)



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

let apiInstance = new NucoroApi.ApiApi();
let uuid = null; // String | 
apiInstance.apiV2AdviceEnginesModelPortfolioModelPortfoliosRetrieve(uuid, (error, data, response) => {
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
 **uuid** | [**String**](.md)|  | 

### Return type

[**InvestorModelPortfolio**](InvestorModelPortfolio.md)

### Authorization

[cookieAuth](../README.md#cookieAuth), [jwtAuth](../README.md#jwtAuth), [tokenAuth](../README.md#tokenAuth)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## apiV2AssetsCategoriesList

> PaginatedAssetCategoryList apiV2AssetsCategoriesList(opts)



Retrieve all asset categories

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

let apiInstance = new NucoroApi.ApiApi();
let opts = {
  'limit': 56, // Number | Number of results to return per page.
  'offset': 56, // Number | The initial index from which to return the results.
  'type': "type_example" // String | 
};
apiInstance.apiV2AssetsCategoriesList(opts, (error, data, response) => {
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
 **limit** | **Number**| Number of results to return per page. | [optional] 
 **offset** | **Number**| The initial index from which to return the results. | [optional] 
 **type** | **String**|  | [optional] 

### Return type

[**PaginatedAssetCategoryList**](PaginatedAssetCategoryList.md)

### Authorization

[cookieAuth](../README.md#cookieAuth), [jwtAuth](../README.md#jwtAuth), [tokenAuth](../README.md#tokenAuth)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## apiV2AssetsIntradayPricesLatestRetrieve

> IntradayPrice apiV2AssetsIntradayPricesLatestRetrieve(assetIdentifier)



Prices (from an Asset) list view endpoints.  GET: Prices retrieve (rest framework builtin overriding get_object)

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

let apiInstance = new NucoroApi.ApiApi();
let assetIdentifier = null; // String | 
apiInstance.apiV2AssetsIntradayPricesLatestRetrieve(assetIdentifier, (error, data, response) => {
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
 **assetIdentifier** | [**String**](.md)|  | 

### Return type

[**IntradayPrice**](IntradayPrice.md)

### Authorization

[cookieAuth](../README.md#cookieAuth), [jwtAuth](../README.md#jwtAuth), [tokenAuth](../README.md#tokenAuth)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## apiV2AssetsIntradayPricesList

> PaginatedIntradayPriceList apiV2AssetsIntradayPricesList(assetIdentifier, opts)



Prices (from an Asset) list view endpoints.  GET: Prices retrieve (rest framework builtin overriding get_object)

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

let apiInstance = new NucoroApi.ApiApi();
let assetIdentifier = null; // String | 
let opts = {
  'dateAfter': new Date("2013-10-20"), // Date | 
  'dateBefore': new Date("2013-10-20"), // Date | 
  'datetimeAfter': new Date("2013-10-20T19:20:30+01:00"), // Date | 
  'datetimeBefore': new Date("2013-10-20T19:20:30+01:00"), // Date | 
  'limit': 56, // Number | Number of results to return per page.
  'offset': 56 // Number | The initial index from which to return the results.
};
apiInstance.apiV2AssetsIntradayPricesList(assetIdentifier, opts, (error, data, response) => {
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
 **assetIdentifier** | [**String**](.md)|  | 
 **dateAfter** | **Date**|  | [optional] 
 **dateBefore** | **Date**|  | [optional] 
 **datetimeAfter** | **Date**|  | [optional] 
 **datetimeBefore** | **Date**|  | [optional] 
 **limit** | **Number**| Number of results to return per page. | [optional] 
 **offset** | **Number**| The initial index from which to return the results. | [optional] 

### Return type

[**PaginatedIntradayPriceList**](PaginatedIntradayPriceList.md)

### Authorization

[cookieAuth](../README.md#cookieAuth), [jwtAuth](../README.md#jwtAuth), [tokenAuth](../README.md#tokenAuth)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## apiV2AssetsList

> PaginatedAssetListList apiV2AssetsList(opts)



A list of Assets filtered by category codes. Default is an empty dict which returns the whole universe.

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

let apiInstance = new NucoroApi.ApiApi();
let opts = {
  'assetType': "assetType_example", // String | 
  'categoryCode': ["null"], // [String] | 
  'categoryType': ["null"], // [String] | 
  'currency': 56, // Number | 
  'isin': "isin_example", // String | 
  'limit': 56, // Number | Number of results to return per page.
  'market': 56, // Number | 
  'name': "name_example", // String | 
  'offset': 56, // Number | The initial index from which to return the results.
  'status': "status_example", // String | 
  'ticker': "ticker_example" // String | 
};
apiInstance.apiV2AssetsList(opts, (error, data, response) => {
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
 **assetType** | **String**|  | [optional] 
 **categoryCode** | [**[String]**](String.md)|  | [optional] 
 **categoryType** | [**[String]**](String.md)|  | [optional] 
 **currency** | **Number**|  | [optional] 
 **isin** | **String**|  | [optional] 
 **limit** | **Number**| Number of results to return per page. | [optional] 
 **market** | **Number**|  | [optional] 
 **name** | **String**|  | [optional] 
 **offset** | **Number**| The initial index from which to return the results. | [optional] 
 **status** | **String**|  | [optional] 
 **ticker** | **String**|  | [optional] 

### Return type

[**PaginatedAssetListList**](PaginatedAssetListList.md)

### Authorization

[cookieAuth](../README.md#cookieAuth), [jwtAuth](../README.md#jwtAuth), [tokenAuth](../README.md#tokenAuth)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## apiV2AssetsPerformanceList

> PaginatedAssetGrowthList apiV2AssetsPerformanceList(assetIdentifier, opts)



Retrieve asset&#39;s yearly performance.  This View overwrites ListAPIView&#39;s &#39;list&#39; method because it doesn&#39;t have any hook that allows us to call &#39;get_asset_price_year_graph after the filtering is applied.

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

let apiInstance = new NucoroApi.ApiApi();
let assetIdentifier = null; // String | 
let opts = {
  'dateYearAfter': 3.4, // Number | 
  'dateYearBefore': 3.4, // Number | 
  'limit': 56, // Number | Number of results to return per page.
  'offset': 56 // Number | The initial index from which to return the results.
};
apiInstance.apiV2AssetsPerformanceList(assetIdentifier, opts, (error, data, response) => {
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
 **assetIdentifier** | [**String**](.md)|  | 
 **dateYearAfter** | **Number**|  | [optional] 
 **dateYearBefore** | **Number**|  | [optional] 
 **limit** | **Number**| Number of results to return per page. | [optional] 
 **offset** | **Number**| The initial index from which to return the results. | [optional] 

### Return type

[**PaginatedAssetGrowthList**](PaginatedAssetGrowthList.md)

### Authorization

[cookieAuth](../README.md#cookieAuth), [jwtAuth](../README.md#jwtAuth), [tokenAuth](../README.md#tokenAuth)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## apiV2AssetsPricesLatestRetrieve

> Price apiV2AssetsPricesLatestRetrieve(assetIdentifier)



Prices (from an Asset) list view endpoints.  GET: Prices retrieve (rest framework builtin overriding get_object)

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

let apiInstance = new NucoroApi.ApiApi();
let assetIdentifier = null; // String | 
apiInstance.apiV2AssetsPricesLatestRetrieve(assetIdentifier, (error, data, response) => {
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
 **assetIdentifier** | [**String**](.md)|  | 

### Return type

[**Price**](Price.md)

### Authorization

[cookieAuth](../README.md#cookieAuth), [jwtAuth](../README.md#jwtAuth), [tokenAuth](../README.md#tokenAuth)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## apiV2AssetsPricesList

> PaginatedPriceList apiV2AssetsPricesList(assetIdentifier, opts)



Prices (from an Asset) list view endpoints.  GET: Prices retrieve (rest framework builtin overriding get_object)

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

let apiInstance = new NucoroApi.ApiApi();
let assetIdentifier = null; // String | 
let opts = {
  'dateAfter': new Date("2013-10-20"), // Date | 
  'dateBefore': new Date("2013-10-20"), // Date | 
  'datetimeAfter': new Date("2013-10-20T19:20:30+01:00"), // Date | 
  'datetimeBefore': new Date("2013-10-20T19:20:30+01:00"), // Date | 
  'limit': 56, // Number | Number of results to return per page.
  'offset': 56 // Number | The initial index from which to return the results.
};
apiInstance.apiV2AssetsPricesList(assetIdentifier, opts, (error, data, response) => {
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
 **assetIdentifier** | [**String**](.md)|  | 
 **dateAfter** | **Date**|  | [optional] 
 **dateBefore** | **Date**|  | [optional] 
 **datetimeAfter** | **Date**|  | [optional] 
 **datetimeBefore** | **Date**|  | [optional] 
 **limit** | **Number**| Number of results to return per page. | [optional] 
 **offset** | **Number**| The initial index from which to return the results. | [optional] 

### Return type

[**PaginatedPriceList**](PaginatedPriceList.md)

### Authorization

[cookieAuth](../README.md#cookieAuth), [jwtAuth](../README.md#jwtAuth), [tokenAuth](../README.md#tokenAuth)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## apiV2AssetsRetrieve

> AssetDetail apiV2AssetsRetrieve(assetIdentifier)



Allows get an asset instance by * UUID * ISIN * ISIN &amp; MARKET_CODE * ISIN &amp; MARKET_CODE &amp; CURRENCY_CODE  Examples:     * assets/a66633d7-4418-4c85-9582-01c80df531d4/     * assets/IE00B579F325/     * assets/IE00B579F325_XETR_GBP/     * assets/IE00B579F325_XETR/

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

let apiInstance = new NucoroApi.ApiApi();
let assetIdentifier = null; // String | 
apiInstance.apiV2AssetsRetrieve(assetIdentifier, (error, data, response) => {
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
 **assetIdentifier** | [**String**](.md)|  | 

### Return type

[**AssetDetail**](AssetDetail.md)

### Authorization

[cookieAuth](../README.md#cookieAuth), [jwtAuth](../README.md#jwtAuth), [tokenAuth](../README.md#tokenAuth)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## apiV2BillingInvoicesList

> PaginatedInvoiceListList apiV2BillingInvoicesList(opts)



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

let apiInstance = new NucoroApi.ApiApi();
let opts = {
  'dateFrom': new Date("2013-10-20"), // Date | 
  'dateTo': new Date("2013-10-20"), // Date | 
  'limit': 56, // Number | Number of results to return per page.
  'offset': 56, // Number | The initial index from which to return the results.
  'status': "status_example" // String | 
};
apiInstance.apiV2BillingInvoicesList(opts, (error, data, response) => {
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
 **dateFrom** | **Date**|  | [optional] 
 **dateTo** | **Date**|  | [optional] 
 **limit** | **Number**| Number of results to return per page. | [optional] 
 **offset** | **Number**| The initial index from which to return the results. | [optional] 
 **status** | **String**|  | [optional] 

### Return type

[**PaginatedInvoiceListList**](PaginatedInvoiceListList.md)

### Authorization

[cookieAuth](../README.md#cookieAuth), [jwtAuth](../README.md#jwtAuth), [tokenAuth](../README.md#tokenAuth)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## apiV2BillingInvoicesRetrieve

> InvoiceDetails apiV2BillingInvoicesRetrieve(uuid, opts)



This mixin implements binary responses. It supports PDF and Base64. It can be adapted to any django View that implements the retrieve method

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

let apiInstance = new NucoroApi.ApiApi();
let uuid = null; // String | 
let opts = {
  'format': "format_example" // String | 
};
apiInstance.apiV2BillingInvoicesRetrieve(uuid, opts, (error, data, response) => {
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
 **uuid** | [**String**](.md)|  | 
 **format** | **String**|  | [optional] 

### Return type

[**InvoiceDetails**](InvoiceDetails.md)

### Authorization

[cookieAuth](../README.md#cookieAuth), [jwtAuth](../README.md#jwtAuth), [tokenAuth](../README.md#tokenAuth)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json, application/pdf, text/plain


## apiV2BrokerOrdersCreate

> CreateOrder apiV2BrokerOrdersCreate(portfolioUuid, createOrder)



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

let apiInstance = new NucoroApi.ApiApi();
let portfolioUuid = null; // String | 
let createOrder = new NucoroApi.CreateOrder(); // CreateOrder | 
apiInstance.apiV2BrokerOrdersCreate(portfolioUuid, createOrder, (error, data, response) => {
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
 **portfolioUuid** | [**String**](.md)|  | 
 **createOrder** | [**CreateOrder**](CreateOrder.md)|  | 

### Return type

[**CreateOrder**](CreateOrder.md)

### Authorization

[cookieAuth](../README.md#cookieAuth), [jwtAuth](../README.md#jwtAuth), [tokenAuth](../README.md#tokenAuth)

### HTTP request headers

- **Content-Type**: application/json, application/x-www-form-urlencoded, multipart/form-data
- **Accept**: application/json


## apiV2BrokerOrdersDestroy

> apiV2BrokerOrdersDestroy(portfolioUuid, uuid)



Cancel or request cancellation to the broker

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

let apiInstance = new NucoroApi.ApiApi();
let portfolioUuid = null; // String | 
let uuid = null; // String | 
apiInstance.apiV2BrokerOrdersDestroy(portfolioUuid, uuid, (error, data, response) => {
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
 **portfolioUuid** | [**String**](.md)|  | 
 **uuid** | [**String**](.md)|  | 

### Return type

null (empty response body)

### Authorization

[cookieAuth](../README.md#cookieAuth), [jwtAuth](../README.md#jwtAuth), [tokenAuth](../README.md#tokenAuth)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: Not defined


## apiV2BrokerOrdersList

> PaginatedOrderListList apiV2BrokerOrdersList(portfolioUuid, opts)



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

let apiInstance = new NucoroApi.ApiApi();
let portfolioUuid = null; // String | 
let opts = {
  'adviceExternalId': "adviceExternalId_example", // String | 
  'asset': "asset_example", // String | 
  'completedAfter': new Date("2013-10-20"), // Date | 
  'completedBefore': new Date("2013-10-20"), // Date | 
  'extraData': {key: null}, // {String: Object} | Additional order attributes for the specific portal
  'limit': 56, // Number | Number of results to return per page.
  'offset': 56, // Number | The initial index from which to return the results.
  'portfolio': "portfolio_example", // String | 
  'status': "status_example" // String | 
};
apiInstance.apiV2BrokerOrdersList(portfolioUuid, opts, (error, data, response) => {
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
 **portfolioUuid** | [**String**](.md)|  | 
 **adviceExternalId** | **String**|  | [optional] 
 **asset** | **String**|  | [optional] 
 **completedAfter** | **Date**|  | [optional] 
 **completedBefore** | **Date**|  | [optional] 
 **extraData** | [**{String: Object}**](Object.md)| Additional order attributes for the specific portal | [optional] 
 **limit** | **Number**| Number of results to return per page. | [optional] 
 **offset** | **Number**| The initial index from which to return the results. | [optional] 
 **portfolio** | **String**|  | [optional] 
 **status** | **String**|  | [optional] 

### Return type

[**PaginatedOrderListList**](PaginatedOrderListList.md)

### Authorization

[cookieAuth](../README.md#cookieAuth), [jwtAuth](../README.md#jwtAuth), [tokenAuth](../README.md#tokenAuth)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## apiV2BrokerOrdersRetrieve

> OrderList apiV2BrokerOrdersRetrieve(portfolioUuid, uuid)



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

let apiInstance = new NucoroApi.ApiApi();
let portfolioUuid = null; // String | 
let uuid = null; // String | 
apiInstance.apiV2BrokerOrdersRetrieve(portfolioUuid, uuid, (error, data, response) => {
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
 **portfolioUuid** | [**String**](.md)|  | 
 **uuid** | [**String**](.md)|  | 

### Return type

[**OrderList**](OrderList.md)

### Authorization

[cookieAuth](../README.md#cookieAuth), [jwtAuth](../README.md#jwtAuth), [tokenAuth](../README.md#tokenAuth)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## apiV2ClientsMeVerifyEmailCreate

> EmailVerifyRequest apiV2ClientsMeVerifyEmailCreate(opts)



Request e-mail account verification notification.

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

let apiInstance = new NucoroApi.ApiApi();
let opts = {
  'emailVerifyRequest': new NucoroApi.EmailVerifyRequest() // EmailVerifyRequest | 
};
apiInstance.apiV2ClientsMeVerifyEmailCreate(opts, (error, data, response) => {
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
 **emailVerifyRequest** | [**EmailVerifyRequest**](EmailVerifyRequest.md)|  | [optional] 

### Return type

[**EmailVerifyRequest**](EmailVerifyRequest.md)

### Authorization

[cookieAuth](../README.md#cookieAuth), [jwtAuth](../README.md#jwtAuth), [tokenAuth](../README.md#tokenAuth)

### HTTP request headers

- **Content-Type**: application/json, application/x-www-form-urlencoded, multipart/form-data
- **Accept**: application/json


## apiV2ClientsNationalDocumentsList

> PaginatedNationalDocumentList apiV2ClientsNationalDocumentsList(opts)



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

let apiInstance = new NucoroApi.ApiApi();
let opts = {
  'limit': 56, // Number | Number of results to return per page.
  'offset': 56 // Number | The initial index from which to return the results.
};
apiInstance.apiV2ClientsNationalDocumentsList(opts, (error, data, response) => {
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
 **limit** | **Number**| Number of results to return per page. | [optional] 
 **offset** | **Number**| The initial index from which to return the results. | [optional] 

### Return type

[**PaginatedNationalDocumentList**](PaginatedNationalDocumentList.md)

### Authorization

[cookieAuth](../README.md#cookieAuth), [jwtAuth](../README.md#jwtAuth), [tokenAuth](../README.md#tokenAuth)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## apiV2ClientsReferralRetrieve

> ClientReferral apiV2ClientsReferralRetrieve(referralCode)



Retrieves the currently logged in client referral code

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

let apiInstance = new NucoroApi.ApiApi();
let referralCode = "referralCode_example"; // String | 
apiInstance.apiV2ClientsReferralRetrieve(referralCode, (error, data, response) => {
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
 **referralCode** | **String**|  | 

### Return type

[**ClientReferral**](ClientReferral.md)

### Authorization

[cookieAuth](../README.md#cookieAuth), [jwtAuth](../README.md#jwtAuth), [tokenAuth](../README.md#tokenAuth)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## apiV2ClientsVerifyEmailUpdate

> EmailVerifyView apiV2ClientsVerifyEmailUpdate(uuid, emailVerifyView)



Verify e-mail account with the given email token.

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

let apiInstance = new NucoroApi.ApiApi();
let uuid = null; // String | 
let emailVerifyView = new NucoroApi.EmailVerifyView(); // EmailVerifyView | 
apiInstance.apiV2ClientsVerifyEmailUpdate(uuid, emailVerifyView, (error, data, response) => {
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
 **uuid** | [**String**](.md)|  | 
 **emailVerifyView** | [**EmailVerifyView**](EmailVerifyView.md)|  | 

### Return type

[**EmailVerifyView**](EmailVerifyView.md)

### Authorization

[cookieAuth](../README.md#cookieAuth), [jwtAuth](../README.md#jwtAuth), [tokenAuth](../README.md#tokenAuth)

### HTTP request headers

- **Content-Type**: application/json, application/x-www-form-urlencoded, multipart/form-data
- **Accept**: application/json


## apiV2FeedsAccessLogsList

> PaginatedAccessLogList apiV2FeedsAccessLogsList(opts)



Retrieves the latest access to the client&#39;s account

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

let apiInstance = new NucoroApi.ApiApi();
let opts = {
  'browser': "browser_example", // String | 
  'browserVersion': "browserVersion_example", // String | 
  'channel': "channel_example", // String | 
  'city': "city_example", // String | 
  'country': 56, // Number | 
  'deviceBrand': "deviceBrand_example", // String | 
  'deviceModel': "deviceModel_example", // String | 
  'ipAddress': "ipAddress_example", // String | 
  'limit': 56, // Number | Number of results to return per page.
  'offset': 56, // Number | The initial index from which to return the results.
  'os': "os_example", // String | 
  'osVersion': "osVersion_example", // String | 
  'userAgent': "userAgent_example" // String | 
};
apiInstance.apiV2FeedsAccessLogsList(opts, (error, data, response) => {
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
 **browser** | **String**|  | [optional] 
 **browserVersion** | **String**|  | [optional] 
 **channel** | **String**|  | [optional] 
 **city** | **String**|  | [optional] 
 **country** | **Number**|  | [optional] 
 **deviceBrand** | **String**|  | [optional] 
 **deviceModel** | **String**|  | [optional] 
 **ipAddress** | **String**|  | [optional] 
 **limit** | **Number**| Number of results to return per page. | [optional] 
 **offset** | **Number**| The initial index from which to return the results. | [optional] 
 **os** | **String**|  | [optional] 
 **osVersion** | **String**|  | [optional] 
 **userAgent** | **String**|  | [optional] 

### Return type

[**PaginatedAccessLogList**](PaginatedAccessLogList.md)

### Authorization

[cookieAuth](../README.md#cookieAuth), [jwtAuth](../README.md#jwtAuth), [tokenAuth](../README.md#tokenAuth)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## apiV2FeedsActivitiesList

> PaginatedFeedActivityListList apiV2FeedsActivitiesList(opts)



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

let apiInstance = new NucoroApi.ApiApi();
let opts = {
  'limit': 56, // Number | Number of results to return per page.
  'offset': 56, // Number | The initial index from which to return the results.
  'target': ["null"] // [String] | 
};
apiInstance.apiV2FeedsActivitiesList(opts, (error, data, response) => {
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
 **limit** | **Number**| Number of results to return per page. | [optional] 
 **offset** | **Number**| The initial index from which to return the results. | [optional] 
 **target** | [**[String]**](String.md)|  | [optional] 

### Return type

[**PaginatedFeedActivityListList**](PaginatedFeedActivityListList.md)

### Authorization

[cookieAuth](../README.md#cookieAuth), [jwtAuth](../README.md#jwtAuth), [tokenAuth](../README.md#tokenAuth)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## apiV2GoalsCreate

> Goal apiV2GoalsCreate(goalUuid, goal)



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

let apiInstance = new NucoroApi.ApiApi();
let goalUuid = null; // String | 
let goal = new NucoroApi.Goal(); // Goal | 
apiInstance.apiV2GoalsCreate(goalUuid, goal, (error, data, response) => {
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
 **goalUuid** | [**String**](.md)|  | 
 **goal** | [**Goal**](Goal.md)|  | 

### Return type

[**Goal**](Goal.md)

### Authorization

[cookieAuth](../README.md#cookieAuth), [jwtAuth](../README.md#jwtAuth), [tokenAuth](../README.md#tokenAuth)

### HTTP request headers

- **Content-Type**: application/json, application/x-www-form-urlencoded, multipart/form-data
- **Accept**: application/json


## apiV2GoalsDecumulationCreate

> ForecastDecumulationRequest apiV2GoalsDecumulationCreate(forecastDecumulationRequest)



Return a Goal Forecast Decumulation

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

let apiInstance = new NucoroApi.ApiApi();
let forecastDecumulationRequest = new NucoroApi.ForecastDecumulationRequest(); // ForecastDecumulationRequest | 
apiInstance.apiV2GoalsDecumulationCreate(forecastDecumulationRequest, (error, data, response) => {
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
 **forecastDecumulationRequest** | [**ForecastDecumulationRequest**](ForecastDecumulationRequest.md)|  | 

### Return type

[**ForecastDecumulationRequest**](ForecastDecumulationRequest.md)

### Authorization

[cookieAuth](../README.md#cookieAuth), [jwtAuth](../README.md#jwtAuth), [tokenAuth](../README.md#tokenAuth)

### HTTP request headers

- **Content-Type**: application/json, application/x-www-form-urlencoded, multipart/form-data
- **Accept**: application/json


## apiV2GoalsDestroy

> apiV2GoalsDestroy(goalUuid, uuid)



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

let apiInstance = new NucoroApi.ApiApi();
let goalUuid = null; // String | 
let uuid = null; // String | 
apiInstance.apiV2GoalsDestroy(goalUuid, uuid, (error, data, response) => {
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
 **goalUuid** | [**String**](.md)|  | 
 **uuid** | [**String**](.md)|  | 

### Return type

null (empty response body)

### Authorization

[cookieAuth](../README.md#cookieAuth), [jwtAuth](../README.md#jwtAuth), [tokenAuth](../README.md#tokenAuth)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: Not defined


## apiV2GoalsForecastCreate

> ForecastRequest apiV2GoalsForecastCreate(forecastRequest)



Return a Goal Forecast

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

let apiInstance = new NucoroApi.ApiApi();
let forecastRequest = new NucoroApi.ForecastRequest(); // ForecastRequest | 
apiInstance.apiV2GoalsForecastCreate(forecastRequest, (error, data, response) => {
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
 **forecastRequest** | [**ForecastRequest**](ForecastRequest.md)|  | 

### Return type

[**ForecastRequest**](ForecastRequest.md)

### Authorization

[cookieAuth](../README.md#cookieAuth), [jwtAuth](../README.md#jwtAuth), [tokenAuth](../README.md#tokenAuth)

### HTTP request headers

- **Content-Type**: application/json, application/x-www-form-urlencoded, multipart/form-data
- **Accept**: application/json


## apiV2GoalsList

> PaginatedGoalList apiV2GoalsList(goalUuid, opts)



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

let apiInstance = new NucoroApi.ApiApi();
let goalUuid = null; // String | 
let opts = {
  'limit': 56, // Number | Number of results to return per page.
  'offset': 56 // Number | The initial index from which to return the results.
};
apiInstance.apiV2GoalsList(goalUuid, opts, (error, data, response) => {
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
 **goalUuid** | [**String**](.md)|  | 
 **limit** | **Number**| Number of results to return per page. | [optional] 
 **offset** | **Number**| The initial index from which to return the results. | [optional] 

### Return type

[**PaginatedGoalList**](PaginatedGoalList.md)

### Authorization

[cookieAuth](../README.md#cookieAuth), [jwtAuth](../README.md#jwtAuth), [tokenAuth](../README.md#tokenAuth)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## apiV2GoalsPartialUpdate

> Goal apiV2GoalsPartialUpdate(goalUuid, uuid, opts)



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

let apiInstance = new NucoroApi.ApiApi();
let goalUuid = null; // String | 
let uuid = null; // String | 
let opts = {
  'patchedGoal': new NucoroApi.PatchedGoal() // PatchedGoal | 
};
apiInstance.apiV2GoalsPartialUpdate(goalUuid, uuid, opts, (error, data, response) => {
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
 **goalUuid** | [**String**](.md)|  | 
 **uuid** | [**String**](.md)|  | 
 **patchedGoal** | [**PatchedGoal**](PatchedGoal.md)|  | [optional] 

### Return type

[**Goal**](Goal.md)

### Authorization

[cookieAuth](../README.md#cookieAuth), [jwtAuth](../README.md#jwtAuth), [tokenAuth](../README.md#tokenAuth)

### HTTP request headers

- **Content-Type**: application/json, application/x-www-form-urlencoded, multipart/form-data
- **Accept**: application/json


## apiV2GoalsRetrieve

> Goal apiV2GoalsRetrieve(goalUuid, uuid)



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

let apiInstance = new NucoroApi.ApiApi();
let goalUuid = null; // String | 
let uuid = null; // String | 
apiInstance.apiV2GoalsRetrieve(goalUuid, uuid, (error, data, response) => {
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
 **goalUuid** | [**String**](.md)|  | 
 **uuid** | [**String**](.md)|  | 

### Return type

[**Goal**](Goal.md)

### Authorization

[cookieAuth](../README.md#cookieAuth), [jwtAuth](../README.md#jwtAuth), [tokenAuth](../README.md#tokenAuth)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## apiV2InboxConversationDetailMessagesList

> PaginatedMessageList apiV2InboxConversationDetailMessagesList(conversation, opts)



List all messages from a conversation uuid

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

let apiInstance = new NucoroApi.ApiApi();
let conversation = null; // String | 
let opts = {
  'limit': 56, // Number | Number of results to return per page.
  'offset': 56 // Number | The initial index from which to return the results.
};
apiInstance.apiV2InboxConversationDetailMessagesList(conversation, opts, (error, data, response) => {
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
 **conversation** | [**String**](.md)|  | 
 **limit** | **Number**| Number of results to return per page. | [optional] 
 **offset** | **Number**| The initial index from which to return the results. | [optional] 

### Return type

[**PaginatedMessageList**](PaginatedMessageList.md)

### Authorization

[cookieAuth](../README.md#cookieAuth), [jwtAuth](../README.md#jwtAuth), [tokenAuth](../README.md#tokenAuth)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## apiV2InboxConversationsCreate

> ConversationCreate apiV2InboxConversationsCreate(uuid, portal, created, subject, opts)



get: List all conversations with last_message of a user  post: Create new conversation with N messages (without attachments)

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

let apiInstance = new NucoroApi.ApiApi();
let uuid = null; // String | 
let portal = 56; // Number | 
let created = new Date("2013-10-20T19:20:30+01:00"); // Date | 
let subject = "subject_example"; // String | 
let opts = {
  'messages': new NucoroApi.Message() // Message | 
};
apiInstance.apiV2InboxConversationsCreate(uuid, portal, created, subject, opts, (error, data, response) => {
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
 **uuid** | [**String**](String.md)|  | 
 **portal** | **Number**|  | 
 **created** | **Date**|  | 
 **subject** | **String**|  | 
 **messages** | [**Message**](Message.md)|  | [optional] 

### Return type

[**ConversationCreate**](ConversationCreate.md)

### Authorization

[cookieAuth](../README.md#cookieAuth), [jwtAuth](../README.md#jwtAuth), [tokenAuth](../README.md#tokenAuth)

### HTTP request headers

- **Content-Type**: multipart/form-data
- **Accept**: application/json


## apiV2InboxConversationsList

> PaginatedConversationListList apiV2InboxConversationsList(opts)



get: List all conversations with last_message of a user  post: Create new conversation with N messages (without attachments)

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

let apiInstance = new NucoroApi.ApiApi();
let opts = {
  'limit': 56, // Number | Number of results to return per page.
  'offset': 56 // Number | The initial index from which to return the results.
};
apiInstance.apiV2InboxConversationsList(opts, (error, data, response) => {
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
 **limit** | **Number**| Number of results to return per page. | [optional] 
 **offset** | **Number**| The initial index from which to return the results. | [optional] 

### Return type

[**PaginatedConversationListList**](PaginatedConversationListList.md)

### Authorization

[cookieAuth](../README.md#cookieAuth), [jwtAuth](../README.md#jwtAuth), [tokenAuth](../README.md#tokenAuth)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## apiV2InboxConversationsMessagesAttachmentsRetrieve

> Attachment apiV2InboxConversationsMessagesAttachmentsRetrieve(conversation, message, uuid, opts)



View to access to an attachment

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

let apiInstance = new NucoroApi.ApiApi();
let conversation = null; // String | 
let message = null; // String | 
let uuid = null; // String | 
let opts = {
  'format': "format_example" // String | 
};
apiInstance.apiV2InboxConversationsMessagesAttachmentsRetrieve(conversation, message, uuid, opts, (error, data, response) => {
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
 **conversation** | [**String**](.md)|  | 
 **message** | [**String**](.md)|  | 
 **uuid** | [**String**](.md)|  | 
 **format** | **String**|  | [optional] 

### Return type

[**Attachment**](Attachment.md)

### Authorization

[cookieAuth](../README.md#cookieAuth), [jwtAuth](../README.md#jwtAuth), [tokenAuth](../README.md#tokenAuth)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json, application/pdf, text/plain


## apiV2InboxConversationsMessagesCreate

> Message apiV2InboxConversationsMessagesCreate(conversation, user, readDate, created, attachments, uuid, opts)



View for creating message on a specific conversation

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

let apiInstance = new NucoroApi.ApiApi();
let conversation = null; // String | 
let user = "user_example"; // String | 
let readDate = new Date("2013-10-20T19:20:30+01:00"); // Date | 
let created = new Date("2013-10-20T19:20:30+01:00"); // Date | 
let attachments = new NucoroApi.Attachment(); // [Attachment] | 
let uuid = null; // String | 
let opts = {
  'content': "content_example" // String | 
};
apiInstance.apiV2InboxConversationsMessagesCreate(conversation, user, readDate, created, attachments, uuid, opts, (error, data, response) => {
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
 **conversation** | [**String**](.md)|  | 
 **user** | **String**|  | 
 **readDate** | **Date**|  | 
 **created** | **Date**|  | 
 **attachments** | [**[Attachment]**](Attachment.md)|  | 
 **uuid** | [**String**](String.md)|  | 
 **content** | **String**|  | [optional] 

### Return type

[**Message**](Message.md)

### Authorization

[cookieAuth](../README.md#cookieAuth), [jwtAuth](../README.md#jwtAuth), [tokenAuth](../README.md#tokenAuth)

### HTTP request headers

- **Content-Type**: multipart/form-data
- **Accept**: application/json


## apiV2MobileVersionRetrieve

> MinimumAppVersion apiV2MobileVersionRetrieve(platform)



Returns the number of the last required APP Version for a platform.

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

let apiInstance = new NucoroApi.ApiApi();
let platform = "platform_example"; // String | 
apiInstance.apiV2MobileVersionRetrieve(platform, (error, data, response) => {
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
 **platform** | **String**|  | 

### Return type

[**MinimumAppVersion**](MinimumAppVersion.md)

### Authorization

[cookieAuth](../README.md#cookieAuth), [jwtAuth](../README.md#jwtAuth), [tokenAuth](../README.md#tokenAuth)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## apiV2PlatformSettingsList

> [NucoroSetting] apiV2PlatformSettingsList()



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

let apiInstance = new NucoroApi.ApiApi();
apiInstance.apiV2PlatformSettingsList((error, data, response) => {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
});
```

### Parameters

This endpoint does not need any parameter.

### Return type

[**[NucoroSetting]**](NucoroSetting.md)

### Authorization

[cookieAuth](../README.md#cookieAuth), [jwtAuth](../README.md#jwtAuth), [tokenAuth](../README.md#tokenAuth)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## apiV2PortalCountriesList

> PaginatedCountryListList apiV2PortalCountriesList(opts)



Retrieves the list of countries

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

let apiInstance = new NucoroApi.ApiApi();
let opts = {
  'limit': 56, // Number | Number of results to return per page.
  'offset': 56 // Number | The initial index from which to return the results.
};
apiInstance.apiV2PortalCountriesList(opts, (error, data, response) => {
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
 **limit** | **Number**| Number of results to return per page. | [optional] 
 **offset** | **Number**| The initial index from which to return the results. | [optional] 

### Return type

[**PaginatedCountryListList**](PaginatedCountryListList.md)

### Authorization

[cookieAuth](../README.md#cookieAuth), [jwtAuth](../README.md#jwtAuth), [tokenAuth](../README.md#tokenAuth)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## apiV2PortalSettingsRetrieve

> PortalSettingValueList apiV2PortalSettingsRetrieve()



### Example

```javascript
import NucoroApi from 'nucoro_api';
let defaultClient = NucoroApi.ApiClient.instance;
// Configure HTTP basic authorization: basicAuth
let basicAuth = defaultClient.authentications['basicAuth'];
basicAuth.username = 'YOUR USERNAME';
basicAuth.password = 'YOUR PASSWORD';
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

let apiInstance = new NucoroApi.ApiApi();
apiInstance.apiV2PortalSettingsRetrieve((error, data, response) => {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
});
```

### Parameters

This endpoint does not need any parameter.

### Return type

[**PortalSettingValueList**](PortalSettingValueList.md)

### Authorization

[basicAuth](../README.md#basicAuth), [cookieAuth](../README.md#cookieAuth), [jwtAuth](../README.md#jwtAuth), [tokenAuth](../README.md#tokenAuth)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## apiV2PortalTosCurrentRetrieve

> Tos apiV2PortalTosCurrentRetrieve()



Retrieves the current ToS for the Portal

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

let apiInstance = new NucoroApi.ApiApi();
apiInstance.apiV2PortalTosCurrentRetrieve((error, data, response) => {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
});
```

### Parameters

This endpoint does not need any parameter.

### Return type

[**Tos**](Tos.md)

### Authorization

[cookieAuth](../README.md#cookieAuth), [jwtAuth](../README.md#jwtAuth), [tokenAuth](../README.md#tokenAuth)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## apiV2PortalTosList

> PaginatedTosList apiV2PortalTosList(opts)



List all ToS for the current Portal

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

let apiInstance = new NucoroApi.ApiApi();
let opts = {
  'limit': 56, // Number | Number of results to return per page.
  'offset': 56 // Number | The initial index from which to return the results.
};
apiInstance.apiV2PortalTosList(opts, (error, data, response) => {
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
 **limit** | **Number**| Number of results to return per page. | [optional] 
 **offset** | **Number**| The initial index from which to return the results. | [optional] 

### Return type

[**PaginatedTosList**](PaginatedTosList.md)

### Authorization

[cookieAuth](../README.md#cookieAuth), [jwtAuth](../README.md#jwtAuth), [tokenAuth](../README.md#tokenAuth)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## apiV2PortalTosRetrieve

> Tos apiV2PortalTosRetrieve(uuid)



Retrieves a specific ToS

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

let apiInstance = new NucoroApi.ApiApi();
let uuid = null; // String | 
apiInstance.apiV2PortalTosRetrieve(uuid, (error, data, response) => {
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
 **uuid** | [**String**](.md)|  | 

### Return type

[**Tos**](Tos.md)

### Authorization

[cookieAuth](../README.md#cookieAuth), [jwtAuth](../README.md#jwtAuth), [tokenAuth](../README.md#tokenAuth)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## apiV2PortfoliosActivitiesList

> PaginatedFeedActivityListList apiV2PortfoliosActivitiesList(portfolioUuid, opts)



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

let apiInstance = new NucoroApi.ApiApi();
let portfolioUuid = null; // String | 
let opts = {
  'limit': 56, // Number | Number of results to return per page.
  'offset': 56, // Number | The initial index from which to return the results.
  'target': ["null"] // [String] | 
};
apiInstance.apiV2PortfoliosActivitiesList(portfolioUuid, opts, (error, data, response) => {
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
 **portfolioUuid** | [**String**](.md)|  | 
 **limit** | **Number**| Number of results to return per page. | [optional] 
 **offset** | **Number**| The initial index from which to return the results. | [optional] 
 **target** | [**[String]**](String.md)|  | [optional] 

### Return type

[**PaginatedFeedActivityListList**](PaginatedFeedActivityListList.md)

### Authorization

[cookieAuth](../README.md#cookieAuth), [jwtAuth](../README.md#jwtAuth), [tokenAuth](../README.md#tokenAuth)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## apiV2PortfoliosActivitiesRetrieve

> FeedActivityList apiV2PortfoliosActivitiesRetrieve(portfolioUuid, uuid)



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

let apiInstance = new NucoroApi.ApiApi();
let portfolioUuid = null; // String | 
let uuid = null; // String | 
apiInstance.apiV2PortfoliosActivitiesRetrieve(portfolioUuid, uuid, (error, data, response) => {
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
 **portfolioUuid** | [**String**](.md)|  | 
 **uuid** | [**String**](.md)|  | 

### Return type

[**FeedActivityList**](FeedActivityList.md)

### Authorization

[cookieAuth](../README.md#cookieAuth), [jwtAuth](../README.md#jwtAuth), [tokenAuth](../README.md#tokenAuth)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## apiV2PortfoliosAllocationsEndDay

> AllocationList apiV2PortfoliosAllocationsEndDay(portfolioUuid)



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

let apiInstance = new NucoroApi.ApiApi();
let portfolioUuid = null; // String | 
apiInstance.apiV2PortfoliosAllocationsEndDay(portfolioUuid, (error, data, response) => {
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
 **portfolioUuid** | [**String**](.md)|  | 

### Return type

[**AllocationList**](AllocationList.md)

### Authorization

[cookieAuth](../README.md#cookieAuth), [jwtAuth](../README.md#jwtAuth), [tokenAuth](../README.md#tokenAuth)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## apiV2PortfoliosAllocationsEndDayByDateRetrieve

> AllocationDetail apiV2PortfoliosAllocationsEndDayByDateRetrieve(allocationDate, portfolioUuid)



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

let apiInstance = new NucoroApi.ApiApi();
let allocationDate = "allocationDate_example"; // String | 
let portfolioUuid = null; // String | 
apiInstance.apiV2PortfoliosAllocationsEndDayByDateRetrieve(allocationDate, portfolioUuid, (error, data, response) => {
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
 **allocationDate** | **String**|  | 
 **portfolioUuid** | [**String**](.md)|  | 

### Return type

[**AllocationDetail**](AllocationDetail.md)

### Authorization

[cookieAuth](../README.md#cookieAuth), [jwtAuth](../README.md#jwtAuth), [tokenAuth](../README.md#tokenAuth)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## apiV2PortfoliosAllocationsEndDayLatestRetrieve

> AllocationDetail apiV2PortfoliosAllocationsEndDayLatestRetrieve(portfolioUuid)



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

let apiInstance = new NucoroApi.ApiApi();
let portfolioUuid = null; // String | 
apiInstance.apiV2PortfoliosAllocationsEndDayLatestRetrieve(portfolioUuid, (error, data, response) => {
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
 **portfolioUuid** | [**String**](.md)|  | 

### Return type

[**AllocationDetail**](AllocationDetail.md)

### Authorization

[cookieAuth](../README.md#cookieAuth), [jwtAuth](../README.md#jwtAuth), [tokenAuth](../README.md#tokenAuth)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## apiV2PortfoliosAllocationsHistoryRetrieve

> apiV2PortfoliosAllocationsHistoryRetrieve(portfolio)



Allocations History for a given portfolio  It accepts two optional parameters, &#x60;date_to&#x60; and &#x60;date_from&#x60; to limit the daily allocations to a certain data range. If they are not given, all the allocations are returned.  ---  ## Parameters:   * **name**: &#x60;date_from&#x60;  * **description**: The initial date.  * **parameter type**: query param   * **name**: &#x60;date_from&#x60;  * **description**: The final date.  * **parameter type**: query param

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

let apiInstance = new NucoroApi.ApiApi();
let portfolio = null; // String | 
apiInstance.apiV2PortfoliosAllocationsHistoryRetrieve(portfolio, (error, data, response) => {
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
 **portfolio** | [**String**](.md)|  | 

### Return type

null (empty response body)

### Authorization

[cookieAuth](../README.md#cookieAuth), [jwtAuth](../README.md#jwtAuth), [tokenAuth](../README.md#tokenAuth)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: Not defined


## apiV2PortfoliosAllocationsIntradayLatestRetrieve

> CurrentAllocation apiV2PortfoliosAllocationsIntradayLatestRetrieve(portfolioUuid)



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

let apiInstance = new NucoroApi.ApiApi();
let portfolioUuid = null; // String | 
apiInstance.apiV2PortfoliosAllocationsIntradayLatestRetrieve(portfolioUuid, (error, data, response) => {
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
 **portfolioUuid** | [**String**](.md)|  | 

### Return type

[**CurrentAllocation**](CurrentAllocation.md)

### Authorization

[cookieAuth](../README.md#cookieAuth), [jwtAuth](../README.md#jwtAuth), [tokenAuth](../README.md#tokenAuth)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## apiV2PortfoliosAllocationsList

> PaginatedAllocationListList apiV2PortfoliosAllocationsList(portfolioUuid, opts)



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

let apiInstance = new NucoroApi.ApiApi();
let portfolioUuid = null; // String | 
let opts = {
  'limit': 56, // Number | Number of results to return per page.
  'offset': 56, // Number | The initial index from which to return the results.
  'valuationDateAfter': new Date("2013-10-20"), // Date | 
  'valuationDateBefore': new Date("2013-10-20") // Date | 
};
apiInstance.apiV2PortfoliosAllocationsList(portfolioUuid, opts, (error, data, response) => {
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
 **portfolioUuid** | [**String**](.md)|  | 
 **limit** | **Number**| Number of results to return per page. | [optional] 
 **offset** | **Number**| The initial index from which to return the results. | [optional] 
 **valuationDateAfter** | **Date**|  | [optional] 
 **valuationDateBefore** | **Date**|  | [optional] 

### Return type

[**PaginatedAllocationListList**](PaginatedAllocationListList.md)

### Authorization

[cookieAuth](../README.md#cookieAuth), [jwtAuth](../README.md#jwtAuth), [tokenAuth](../README.md#tokenAuth)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## apiV2PortfoliosAllocationsRetrieve

> AllocationList apiV2PortfoliosAllocationsRetrieve(id, portfolioUuid)



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

let apiInstance = new NucoroApi.ApiApi();
let id = 56; // Number | A unique integer value identifying this allocation.
let portfolioUuid = null; // String | 
apiInstance.apiV2PortfoliosAllocationsRetrieve(id, portfolioUuid, (error, data, response) => {
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
 **id** | **Number**| A unique integer value identifying this allocation. | 
 **portfolioUuid** | [**String**](.md)|  | 

### Return type

[**AllocationList**](AllocationList.md)

### Authorization

[cookieAuth](../README.md#cookieAuth), [jwtAuth](../README.md#jwtAuth), [tokenAuth](../README.md#tokenAuth)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## apiV2PortfoliosCreate

> PortfolioCreate apiV2PortfoliosCreate(portfolioUuid, portfolioCreate)



Allow aggregate/group fields of the ModelView model or its related entities.    Query params should use dot notation.  Requires:     ListModelMixin (ListAPIView, ListCreateApiView)  Args:     * aggregatable_fields (dict): optional.         Keys: fields that allow aggregation (including related entities with \&quot;__\&quot; notation).         Values: django qs functions or aggregate_fns         Example:             aggregatable_fields &#x3D; {                 &#39;allocations__balance&#39;: [Sum, Avg],             }      * groupable_fields (list): optional. fields that allow grouping (including related entities with \&quot;__\&quot; notation).         Example:             groupable_fields &#x3D; [&#39;portfolio__portfolio_type&#39;]  Query Param Examples:     &gt;&gt;&gt; ?group_by&#x3D;portfolio.portfolio_type     &gt;&gt;&gt; ?aggregate[Sum]&#x3D;portfolio.allocations.balance     &gt;&gt;&gt; ?group_by&#x3D;valuation_date&amp;aggregate[Sum]&#x3D;portfolio.allocations.balance

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

let apiInstance = new NucoroApi.ApiApi();
let portfolioUuid = null; // String | 
let portfolioCreate = new NucoroApi.PortfolioCreate(); // PortfolioCreate | 
apiInstance.apiV2PortfoliosCreate(portfolioUuid, portfolioCreate, (error, data, response) => {
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
 **portfolioUuid** | [**String**](.md)|  | 
 **portfolioCreate** | [**PortfolioCreate**](PortfolioCreate.md)|  | 

### Return type

[**PortfolioCreate**](PortfolioCreate.md)

### Authorization

[cookieAuth](../README.md#cookieAuth), [jwtAuth](../README.md#jwtAuth), [tokenAuth](../README.md#tokenAuth)

### HTTP request headers

- **Content-Type**: application/json, application/x-www-form-urlencoded, multipart/form-data
- **Accept**: application/json


## apiV2PortfoliosDepositsCreate

> DepositCreate apiV2PortfoliosDepositsCreate(portfolioUuid, depositCreate)



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

let apiInstance = new NucoroApi.ApiApi();
let portfolioUuid = null; // String | 
let depositCreate = new NucoroApi.DepositCreate(); // DepositCreate | 
apiInstance.apiV2PortfoliosDepositsCreate(portfolioUuid, depositCreate, (error, data, response) => {
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
 **portfolioUuid** | [**String**](.md)|  | 
 **depositCreate** | [**DepositCreate**](DepositCreate.md)|  | 

### Return type

[**DepositCreate**](DepositCreate.md)

### Authorization

[cookieAuth](../README.md#cookieAuth), [jwtAuth](../README.md#jwtAuth), [tokenAuth](../README.md#tokenAuth)

### HTTP request headers

- **Content-Type**: application/json, application/x-www-form-urlencoded, multipart/form-data
- **Accept**: application/json


## apiV2PortfoliosDepositsDestroy

> apiV2PortfoliosDepositsDestroy(portfolioUuid, uuid)



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

let apiInstance = new NucoroApi.ApiApi();
let portfolioUuid = null; // String | 
let uuid = null; // String | 
apiInstance.apiV2PortfoliosDepositsDestroy(portfolioUuid, uuid, (error, data, response) => {
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
 **portfolioUuid** | [**String**](.md)|  | 
 **uuid** | [**String**](.md)|  | 

### Return type

null (empty response body)

### Authorization

[cookieAuth](../README.md#cookieAuth), [jwtAuth](../README.md#jwtAuth), [tokenAuth](../README.md#tokenAuth)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: Not defined


## apiV2PortfoliosDepositsList

> PaginatedDepositListList apiV2PortfoliosDepositsList(portfolioUuid, opts)



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

let apiInstance = new NucoroApi.ApiApi();
let portfolioUuid = null; // String | 
let opts = {
  'limit': 56, // Number | Number of results to return per page.
  'offset': 56, // Number | The initial index from which to return the results.
  'status': ["null"] // [String] | 
};
apiInstance.apiV2PortfoliosDepositsList(portfolioUuid, opts, (error, data, response) => {
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
 **portfolioUuid** | [**String**](.md)|  | 
 **limit** | **Number**| Number of results to return per page. | [optional] 
 **offset** | **Number**| The initial index from which to return the results. | [optional] 
 **status** | [**[String]**](String.md)|  | [optional] 

### Return type

[**PaginatedDepositListList**](PaginatedDepositListList.md)

### Authorization

[cookieAuth](../README.md#cookieAuth), [jwtAuth](../README.md#jwtAuth), [tokenAuth](../README.md#tokenAuth)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## apiV2PortfoliosDepositsRetrieve

> DepositDetail apiV2PortfoliosDepositsRetrieve(portfolioUuid, uuid)



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

let apiInstance = new NucoroApi.ApiApi();
let portfolioUuid = null; // String | 
let uuid = null; // String | 
apiInstance.apiV2PortfoliosDepositsRetrieve(portfolioUuid, uuid, (error, data, response) => {
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
 **portfolioUuid** | [**String**](.md)|  | 
 **uuid** | [**String**](.md)|  | 

### Return type

[**DepositDetail**](DepositDetail.md)

### Authorization

[cookieAuth](../README.md#cookieAuth), [jwtAuth](../README.md#jwtAuth), [tokenAuth](../README.md#tokenAuth)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## apiV2PortfoliosDestroy

> apiV2PortfoliosDestroy(portfolioUuid, uuid)



Allow aggregate/group fields of the ModelView model or its related entities.    Query params should use dot notation.  Requires:     ListModelMixin (ListAPIView, ListCreateApiView)  Args:     * aggregatable_fields (dict): optional.         Keys: fields that allow aggregation (including related entities with \&quot;__\&quot; notation).         Values: django qs functions or aggregate_fns         Example:             aggregatable_fields &#x3D; {                 &#39;allocations__balance&#39;: [Sum, Avg],             }      * groupable_fields (list): optional. fields that allow grouping (including related entities with \&quot;__\&quot; notation).         Example:             groupable_fields &#x3D; [&#39;portfolio__portfolio_type&#39;]  Query Param Examples:     &gt;&gt;&gt; ?group_by&#x3D;portfolio.portfolio_type     &gt;&gt;&gt; ?aggregate[Sum]&#x3D;portfolio.allocations.balance     &gt;&gt;&gt; ?group_by&#x3D;valuation_date&amp;aggregate[Sum]&#x3D;portfolio.allocations.balance

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

let apiInstance = new NucoroApi.ApiApi();
let portfolioUuid = null; // String | 
let uuid = null; // String | 
apiInstance.apiV2PortfoliosDestroy(portfolioUuid, uuid, (error, data, response) => {
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
 **portfolioUuid** | [**String**](.md)|  | 
 **uuid** | [**String**](.md)|  | 

### Return type

null (empty response body)

### Authorization

[cookieAuth](../README.md#cookieAuth), [jwtAuth](../README.md#jwtAuth), [tokenAuth](../README.md#tokenAuth)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: Not defined


## apiV2PortfoliosList

> PaginatedPortfolioListList apiV2PortfoliosList(portfolioUuid, opts)



Allow aggregate/group fields of the ModelView model or its related entities.    Query params should use dot notation.  Requires:     ListModelMixin (ListAPIView, ListCreateApiView)  Args:     * aggregatable_fields (dict): optional.         Keys: fields that allow aggregation (including related entities with \&quot;__\&quot; notation).         Values: django qs functions or aggregate_fns         Example:             aggregatable_fields &#x3D; {                 &#39;allocations__balance&#39;: [Sum, Avg],             }      * groupable_fields (list): optional. fields that allow grouping (including related entities with \&quot;__\&quot; notation).         Example:             groupable_fields &#x3D; [&#39;portfolio__portfolio_type&#39;]  Query Param Examples:     &gt;&gt;&gt; ?group_by&#x3D;portfolio.portfolio_type     &gt;&gt;&gt; ?aggregate[Sum]&#x3D;portfolio.allocations.balance     &gt;&gt;&gt; ?group_by&#x3D;valuation_date&amp;aggregate[Sum]&#x3D;portfolio.allocations.balance

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

let apiInstance = new NucoroApi.ApiApi();
let portfolioUuid = null; // String | 
let opts = {
  'client': null, // String | 
  'externalCustodianId': "externalCustodianId_example", // String | 
  'limit': 56, // Number | Number of results to return per page.
  'name': "name_example", // String | 
  'offset': 56, // Number | The initial index from which to return the results.
  'ordering': ["null"], // [String] | Ordering
  'portfolioType': 56, // Number | 
  'status': ["null"], // [String] | 
  'valuationDateAfter': new Date("2013-10-20"), // Date | 
  'valuationDateBefore': new Date("2013-10-20") // Date | 
};
apiInstance.apiV2PortfoliosList(portfolioUuid, opts, (error, data, response) => {
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
 **portfolioUuid** | [**String**](.md)|  | 
 **client** | [**String**](.md)|  | [optional] 
 **externalCustodianId** | **String**|  | [optional] 
 **limit** | **Number**| Number of results to return per page. | [optional] 
 **name** | **String**|  | [optional] 
 **offset** | **Number**| The initial index from which to return the results. | [optional] 
 **ordering** | [**[String]**](String.md)| Ordering | [optional] 
 **portfolioType** | **Number**|  | [optional] 
 **status** | [**[String]**](String.md)|  | [optional] 
 **valuationDateAfter** | **Date**|  | [optional] 
 **valuationDateBefore** | **Date**|  | [optional] 

### Return type

[**PaginatedPortfolioListList**](PaginatedPortfolioListList.md)

### Authorization

[cookieAuth](../README.md#cookieAuth), [jwtAuth](../README.md#jwtAuth), [tokenAuth](../README.md#tokenAuth)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## apiV2PortfoliosOrdersCreate

> CreateOrder apiV2PortfoliosOrdersCreate(portfolioUuid, createOrder)



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

let apiInstance = new NucoroApi.ApiApi();
let portfolioUuid = null; // String | 
let createOrder = new NucoroApi.CreateOrder(); // CreateOrder | 
apiInstance.apiV2PortfoliosOrdersCreate(portfolioUuid, createOrder, (error, data, response) => {
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
 **portfolioUuid** | [**String**](.md)|  | 
 **createOrder** | [**CreateOrder**](CreateOrder.md)|  | 

### Return type

[**CreateOrder**](CreateOrder.md)

### Authorization

[cookieAuth](../README.md#cookieAuth), [jwtAuth](../README.md#jwtAuth), [tokenAuth](../README.md#tokenAuth)

### HTTP request headers

- **Content-Type**: application/json, application/x-www-form-urlencoded, multipart/form-data
- **Accept**: application/json


## apiV2PortfoliosOrdersDestroy

> apiV2PortfoliosOrdersDestroy(portfolioUuid, uuid)



Cancel or request cancellation to the broker

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

let apiInstance = new NucoroApi.ApiApi();
let portfolioUuid = null; // String | 
let uuid = null; // String | 
apiInstance.apiV2PortfoliosOrdersDestroy(portfolioUuid, uuid, (error, data, response) => {
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
 **portfolioUuid** | [**String**](.md)|  | 
 **uuid** | [**String**](.md)|  | 

### Return type

null (empty response body)

### Authorization

[cookieAuth](../README.md#cookieAuth), [jwtAuth](../README.md#jwtAuth), [tokenAuth](../README.md#tokenAuth)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: Not defined


## apiV2PortfoliosOrdersList

> PaginatedOrderListList apiV2PortfoliosOrdersList(portfolioUuid, opts)



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

let apiInstance = new NucoroApi.ApiApi();
let portfolioUuid = null; // String | 
let opts = {
  'adviceExternalId': "adviceExternalId_example", // String | 
  'asset': "asset_example", // String | 
  'completedAfter': new Date("2013-10-20"), // Date | 
  'completedBefore': new Date("2013-10-20"), // Date | 
  'extraData': {key: null}, // {String: Object} | Additional order attributes for the specific portal
  'limit': 56, // Number | Number of results to return per page.
  'offset': 56, // Number | The initial index from which to return the results.
  'portfolio': "portfolio_example", // String | 
  'status': "status_example" // String | 
};
apiInstance.apiV2PortfoliosOrdersList(portfolioUuid, opts, (error, data, response) => {
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
 **portfolioUuid** | [**String**](.md)|  | 
 **adviceExternalId** | **String**|  | [optional] 
 **asset** | **String**|  | [optional] 
 **completedAfter** | **Date**|  | [optional] 
 **completedBefore** | **Date**|  | [optional] 
 **extraData** | [**{String: Object}**](Object.md)| Additional order attributes for the specific portal | [optional] 
 **limit** | **Number**| Number of results to return per page. | [optional] 
 **offset** | **Number**| The initial index from which to return the results. | [optional] 
 **portfolio** | **String**|  | [optional] 
 **status** | **String**|  | [optional] 

### Return type

[**PaginatedOrderListList**](PaginatedOrderListList.md)

### Authorization

[cookieAuth](../README.md#cookieAuth), [jwtAuth](../README.md#jwtAuth), [tokenAuth](../README.md#tokenAuth)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## apiV2PortfoliosOrdersRetrieve

> OrderList apiV2PortfoliosOrdersRetrieve(portfolioUuid, uuid)



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

let apiInstance = new NucoroApi.ApiApi();
let portfolioUuid = null; // String | 
let uuid = null; // String | 
apiInstance.apiV2PortfoliosOrdersRetrieve(portfolioUuid, uuid, (error, data, response) => {
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
 **portfolioUuid** | [**String**](.md)|  | 
 **uuid** | [**String**](.md)|  | 

### Return type

[**OrderList**](OrderList.md)

### Authorization

[cookieAuth](../README.md#cookieAuth), [jwtAuth](../README.md#jwtAuth), [tokenAuth](../README.md#tokenAuth)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## apiV2PortfoliosPartialUpdate

> PortfolioUpdate apiV2PortfoliosPartialUpdate(portfolioUuid, uuid, opts)



Allow aggregate/group fields of the ModelView model or its related entities.    Query params should use dot notation.  Requires:     ListModelMixin (ListAPIView, ListCreateApiView)  Args:     * aggregatable_fields (dict): optional.         Keys: fields that allow aggregation (including related entities with \&quot;__\&quot; notation).         Values: django qs functions or aggregate_fns         Example:             aggregatable_fields &#x3D; {                 &#39;allocations__balance&#39;: [Sum, Avg],             }      * groupable_fields (list): optional. fields that allow grouping (including related entities with \&quot;__\&quot; notation).         Example:             groupable_fields &#x3D; [&#39;portfolio__portfolio_type&#39;]  Query Param Examples:     &gt;&gt;&gt; ?group_by&#x3D;portfolio.portfolio_type     &gt;&gt;&gt; ?aggregate[Sum]&#x3D;portfolio.allocations.balance     &gt;&gt;&gt; ?group_by&#x3D;valuation_date&amp;aggregate[Sum]&#x3D;portfolio.allocations.balance

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

let apiInstance = new NucoroApi.ApiApi();
let portfolioUuid = null; // String | 
let uuid = null; // String | 
let opts = {
  'patchedPortfolioUpdate': new NucoroApi.PatchedPortfolioUpdate() // PatchedPortfolioUpdate | 
};
apiInstance.apiV2PortfoliosPartialUpdate(portfolioUuid, uuid, opts, (error, data, response) => {
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
 **portfolioUuid** | [**String**](.md)|  | 
 **uuid** | [**String**](.md)|  | 
 **patchedPortfolioUpdate** | [**PatchedPortfolioUpdate**](PatchedPortfolioUpdate.md)|  | [optional] 

### Return type

[**PortfolioUpdate**](PortfolioUpdate.md)

### Authorization

[cookieAuth](../README.md#cookieAuth), [jwtAuth](../README.md#jwtAuth), [tokenAuth](../README.md#tokenAuth)

### HTTP request headers

- **Content-Type**: application/json, application/x-www-form-urlencoded, multipart/form-data
- **Accept**: application/json


## apiV2PortfoliosPerformanceMwrrList

> PaginatedPortfolioPerformanceList apiV2PortfoliosPerformanceMwrrList(portfolioUuid, opts)



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

let apiInstance = new NucoroApi.ApiApi();
let portfolioUuid = null; // String | 
let opts = {
  'dateAfter': new Date("2013-10-20"), // Date | 
  'dateBefore': new Date("2013-10-20"), // Date | 
  'limit': 56, // Number | Number of results to return per page.
  'offset': 56 // Number | The initial index from which to return the results.
};
apiInstance.apiV2PortfoliosPerformanceMwrrList(portfolioUuid, opts, (error, data, response) => {
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
 **portfolioUuid** | [**String**](.md)|  | 
 **dateAfter** | **Date**|  | [optional] 
 **dateBefore** | **Date**|  | [optional] 
 **limit** | **Number**| Number of results to return per page. | [optional] 
 **offset** | **Number**| The initial index from which to return the results. | [optional] 

### Return type

[**PaginatedPortfolioPerformanceList**](PaginatedPortfolioPerformanceList.md)

### Authorization

[cookieAuth](../README.md#cookieAuth), [jwtAuth](../README.md#jwtAuth), [tokenAuth](../README.md#tokenAuth)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## apiV2PortfoliosPerformancePositionsList

> PaginatedPortfolioPerformancePositionsList apiV2PortfoliosPerformancePositionsList(portfolioUuid, opts)



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

let apiInstance = new NucoroApi.ApiApi();
let portfolioUuid = null; // String | 
let opts = {
  'limit': 56, // Number | Number of results to return per page.
  'offset': 56 // Number | The initial index from which to return the results.
};
apiInstance.apiV2PortfoliosPerformancePositionsList(portfolioUuid, opts, (error, data, response) => {
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
 **portfolioUuid** | [**String**](.md)|  | 
 **limit** | **Number**| Number of results to return per page. | [optional] 
 **offset** | **Number**| The initial index from which to return the results. | [optional] 

### Return type

[**PaginatedPortfolioPerformancePositionsList**](PaginatedPortfolioPerformancePositionsList.md)

### Authorization

[cookieAuth](../README.md#cookieAuth), [jwtAuth](../README.md#jwtAuth), [tokenAuth](../README.md#tokenAuth)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## apiV2PortfoliosPerformanceTwrrList

> PaginatedPortfolioPerformanceList apiV2PortfoliosPerformanceTwrrList(portfolioUuid, opts)



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

let apiInstance = new NucoroApi.ApiApi();
let portfolioUuid = null; // String | 
let opts = {
  'dateAfter': new Date("2013-10-20"), // Date | 
  'dateBefore': new Date("2013-10-20"), // Date | 
  'limit': 56, // Number | Number of results to return per page.
  'offset': 56 // Number | The initial index from which to return the results.
};
apiInstance.apiV2PortfoliosPerformanceTwrrList(portfolioUuid, opts, (error, data, response) => {
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
 **portfolioUuid** | [**String**](.md)|  | 
 **dateAfter** | **Date**|  | [optional] 
 **dateBefore** | **Date**|  | [optional] 
 **limit** | **Number**| Number of results to return per page. | [optional] 
 **offset** | **Number**| The initial index from which to return the results. | [optional] 

### Return type

[**PaginatedPortfolioPerformanceList**](PaginatedPortfolioPerformanceList.md)

### Authorization

[cookieAuth](../README.md#cookieAuth), [jwtAuth](../README.md#jwtAuth), [tokenAuth](../README.md#tokenAuth)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## apiV2PortfoliosPortfoliotypesList

> PaginatedPortfolioTypeList apiV2PortfoliosPortfoliotypesList(opts)



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

let apiInstance = new NucoroApi.ApiApi();
let opts = {
  'limit': 56, // Number | Number of results to return per page.
  'offset': 56 // Number | The initial index from which to return the results.
};
apiInstance.apiV2PortfoliosPortfoliotypesList(opts, (error, data, response) => {
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
 **limit** | **Number**| Number of results to return per page. | [optional] 
 **offset** | **Number**| The initial index from which to return the results. | [optional] 

### Return type

[**PaginatedPortfolioTypeList**](PaginatedPortfolioTypeList.md)

### Authorization

[cookieAuth](../README.md#cookieAuth), [jwtAuth](../README.md#jwtAuth), [tokenAuth](../README.md#tokenAuth)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## apiV2PortfoliosPortfoliotypesRestrictionsList

> PaginatedBasePortfolioTypeRestrictionsList apiV2PortfoliosPortfoliotypesRestrictionsList(code, opts)



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

let apiInstance = new NucoroApi.ApiApi();
let code = "code_example"; // String | 
let opts = {
  'limit': 56, // Number | Number of results to return per page.
  'offset': 56 // Number | The initial index from which to return the results.
};
apiInstance.apiV2PortfoliosPortfoliotypesRestrictionsList(code, opts, (error, data, response) => {
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
 **code** | **String**|  | 
 **limit** | **Number**| Number of results to return per page. | [optional] 
 **offset** | **Number**| The initial index from which to return the results. | [optional] 

### Return type

[**PaginatedBasePortfolioTypeRestrictionsList**](PaginatedBasePortfolioTypeRestrictionsList.md)

### Authorization

[cookieAuth](../README.md#cookieAuth), [jwtAuth](../README.md#jwtAuth), [tokenAuth](../README.md#tokenAuth)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## apiV2PortfoliosRebalancesList

> PaginatedRebalanceList apiV2PortfoliosRebalancesList(portfolioUuid, opts)



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

let apiInstance = new NucoroApi.ApiApi();
let portfolioUuid = null; // String | 
let opts = {
  'limit': 56, // Number | Number of results to return per page.
  'offset': 56 // Number | The initial index from which to return the results.
};
apiInstance.apiV2PortfoliosRebalancesList(portfolioUuid, opts, (error, data, response) => {
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
 **portfolioUuid** | [**String**](.md)|  | 
 **limit** | **Number**| Number of results to return per page. | [optional] 
 **offset** | **Number**| The initial index from which to return the results. | [optional] 

### Return type

[**PaginatedRebalanceList**](PaginatedRebalanceList.md)

### Authorization

[cookieAuth](../README.md#cookieAuth), [jwtAuth](../README.md#jwtAuth), [tokenAuth](../README.md#tokenAuth)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## apiV2PortfoliosRebalancesRetrieve

> Rebalance apiV2PortfoliosRebalancesRetrieve(portfolioUuid, uuid)



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

let apiInstance = new NucoroApi.ApiApi();
let portfolioUuid = null; // String | 
let uuid = null; // String | 
apiInstance.apiV2PortfoliosRebalancesRetrieve(portfolioUuid, uuid, (error, data, response) => {
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
 **portfolioUuid** | [**String**](.md)|  | 
 **uuid** | [**String**](.md)|  | 

### Return type

[**Rebalance**](Rebalance.md)

### Authorization

[cookieAuth](../README.md#cookieAuth), [jwtAuth](../README.md#jwtAuth), [tokenAuth](../README.md#tokenAuth)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## apiV2PortfoliosRestrictionsRetrieve

> PortfolioTypeRestrictions apiV2PortfoliosRestrictionsRetrieve(portfolioUuid, uuid)



Allow aggregate/group fields of the ModelView model or its related entities.    Query params should use dot notation.  Requires:     ListModelMixin (ListAPIView, ListCreateApiView)  Args:     * aggregatable_fields (dict): optional.         Keys: fields that allow aggregation (including related entities with \&quot;__\&quot; notation).         Values: django qs functions or aggregate_fns         Example:             aggregatable_fields &#x3D; {                 &#39;allocations__balance&#39;: [Sum, Avg],             }      * groupable_fields (list): optional. fields that allow grouping (including related entities with \&quot;__\&quot; notation).         Example:             groupable_fields &#x3D; [&#39;portfolio__portfolio_type&#39;]  Query Param Examples:     &gt;&gt;&gt; ?group_by&#x3D;portfolio.portfolio_type     &gt;&gt;&gt; ?aggregate[Sum]&#x3D;portfolio.allocations.balance     &gt;&gt;&gt; ?group_by&#x3D;valuation_date&amp;aggregate[Sum]&#x3D;portfolio.allocations.balance

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

let apiInstance = new NucoroApi.ApiApi();
let portfolioUuid = null; // String | 
let uuid = null; // String | 
apiInstance.apiV2PortfoliosRestrictionsRetrieve(portfolioUuid, uuid, (error, data, response) => {
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
 **portfolioUuid** | [**String**](.md)|  | 
 **uuid** | [**String**](.md)|  | 

### Return type

[**PortfolioTypeRestrictions**](PortfolioTypeRestrictions.md)

### Authorization

[cookieAuth](../README.md#cookieAuth), [jwtAuth](../README.md#jwtAuth), [tokenAuth](../README.md#tokenAuth)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## apiV2PortfoliosRetrieve

> PortfolioDetail apiV2PortfoliosRetrieve(portfolioUuid, uuid)



Allow aggregate/group fields of the ModelView model or its related entities.    Query params should use dot notation.  Requires:     ListModelMixin (ListAPIView, ListCreateApiView)  Args:     * aggregatable_fields (dict): optional.         Keys: fields that allow aggregation (including related entities with \&quot;__\&quot; notation).         Values: django qs functions or aggregate_fns         Example:             aggregatable_fields &#x3D; {                 &#39;allocations__balance&#39;: [Sum, Avg],             }      * groupable_fields (list): optional. fields that allow grouping (including related entities with \&quot;__\&quot; notation).         Example:             groupable_fields &#x3D; [&#39;portfolio__portfolio_type&#39;]  Query Param Examples:     &gt;&gt;&gt; ?group_by&#x3D;portfolio.portfolio_type     &gt;&gt;&gt; ?aggregate[Sum]&#x3D;portfolio.allocations.balance     &gt;&gt;&gt; ?group_by&#x3D;valuation_date&amp;aggregate[Sum]&#x3D;portfolio.allocations.balance

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

let apiInstance = new NucoroApi.ApiApi();
let portfolioUuid = null; // String | 
let uuid = null; // String | 
apiInstance.apiV2PortfoliosRetrieve(portfolioUuid, uuid, (error, data, response) => {
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
 **portfolioUuid** | [**String**](.md)|  | 
 **uuid** | [**String**](.md)|  | 

### Return type

[**PortfolioDetail**](PortfolioDetail.md)

### Authorization

[cookieAuth](../README.md#cookieAuth), [jwtAuth](../README.md#jwtAuth), [tokenAuth](../README.md#tokenAuth)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## apiV2PortfoliosUpdate

> PortfolioUpdate apiV2PortfoliosUpdate(portfolioUuid, uuid, portfolioUpdate)



Allow aggregate/group fields of the ModelView model or its related entities.    Query params should use dot notation.  Requires:     ListModelMixin (ListAPIView, ListCreateApiView)  Args:     * aggregatable_fields (dict): optional.         Keys: fields that allow aggregation (including related entities with \&quot;__\&quot; notation).         Values: django qs functions or aggregate_fns         Example:             aggregatable_fields &#x3D; {                 &#39;allocations__balance&#39;: [Sum, Avg],             }      * groupable_fields (list): optional. fields that allow grouping (including related entities with \&quot;__\&quot; notation).         Example:             groupable_fields &#x3D; [&#39;portfolio__portfolio_type&#39;]  Query Param Examples:     &gt;&gt;&gt; ?group_by&#x3D;portfolio.portfolio_type     &gt;&gt;&gt; ?aggregate[Sum]&#x3D;portfolio.allocations.balance     &gt;&gt;&gt; ?group_by&#x3D;valuation_date&amp;aggregate[Sum]&#x3D;portfolio.allocations.balance

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

let apiInstance = new NucoroApi.ApiApi();
let portfolioUuid = null; // String | 
let uuid = null; // String | 
let portfolioUpdate = new NucoroApi.PortfolioUpdate(); // PortfolioUpdate | 
apiInstance.apiV2PortfoliosUpdate(portfolioUuid, uuid, portfolioUpdate, (error, data, response) => {
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
 **portfolioUuid** | [**String**](.md)|  | 
 **uuid** | [**String**](.md)|  | 
 **portfolioUpdate** | [**PortfolioUpdate**](PortfolioUpdate.md)|  | 

### Return type

[**PortfolioUpdate**](PortfolioUpdate.md)

### Authorization

[cookieAuth](../README.md#cookieAuth), [jwtAuth](../README.md#jwtAuth), [tokenAuth](../README.md#tokenAuth)

### HTTP request headers

- **Content-Type**: application/json, application/x-www-form-urlencoded, multipart/form-data
- **Accept**: application/json


## apiV2PortfoliosWithdrawalsCreate

> InvestorWithdrawalCreate apiV2PortfoliosWithdrawalsCreate(portfolioUuid, investorWithdrawalCreate)



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

let apiInstance = new NucoroApi.ApiApi();
let portfolioUuid = null; // String | 
let investorWithdrawalCreate = new NucoroApi.InvestorWithdrawalCreate(); // InvestorWithdrawalCreate | 
apiInstance.apiV2PortfoliosWithdrawalsCreate(portfolioUuid, investorWithdrawalCreate, (error, data, response) => {
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
 **portfolioUuid** | [**String**](.md)|  | 
 **investorWithdrawalCreate** | [**InvestorWithdrawalCreate**](InvestorWithdrawalCreate.md)|  | 

### Return type

[**InvestorWithdrawalCreate**](InvestorWithdrawalCreate.md)

### Authorization

[cookieAuth](../README.md#cookieAuth), [jwtAuth](../README.md#jwtAuth), [tokenAuth](../README.md#tokenAuth)

### HTTP request headers

- **Content-Type**: application/json, application/x-www-form-urlencoded, multipart/form-data
- **Accept**: application/json


## apiV2PortfoliosWithdrawalsDestroy

> apiV2PortfoliosWithdrawalsDestroy(portfolioUuid, uuid)



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

let apiInstance = new NucoroApi.ApiApi();
let portfolioUuid = null; // String | 
let uuid = null; // String | 
apiInstance.apiV2PortfoliosWithdrawalsDestroy(portfolioUuid, uuid, (error, data, response) => {
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
 **portfolioUuid** | [**String**](.md)|  | 
 **uuid** | [**String**](.md)|  | 

### Return type

null (empty response body)

### Authorization

[cookieAuth](../README.md#cookieAuth), [jwtAuth](../README.md#jwtAuth), [tokenAuth](../README.md#tokenAuth)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: Not defined


## apiV2PortfoliosWithdrawalsList

> PaginatedInvestorWithdrawalListList apiV2PortfoliosWithdrawalsList(portfolioUuid, opts)



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

let apiInstance = new NucoroApi.ApiApi();
let portfolioUuid = null; // String | 
let opts = {
  'limit': 56, // Number | Number of results to return per page.
  'offset': 56, // Number | The initial index from which to return the results.
  'status': ["null"] // [String] | 
};
apiInstance.apiV2PortfoliosWithdrawalsList(portfolioUuid, opts, (error, data, response) => {
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
 **portfolioUuid** | [**String**](.md)|  | 
 **limit** | **Number**| Number of results to return per page. | [optional] 
 **offset** | **Number**| The initial index from which to return the results. | [optional] 
 **status** | [**[String]**](String.md)|  | [optional] 

### Return type

[**PaginatedInvestorWithdrawalListList**](PaginatedInvestorWithdrawalListList.md)

### Authorization

[cookieAuth](../README.md#cookieAuth), [jwtAuth](../README.md#jwtAuth), [tokenAuth](../README.md#tokenAuth)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## apiV2PortfoliosWithdrawalsRetrieve

> WithdrawalDetail apiV2PortfoliosWithdrawalsRetrieve(portfolioUuid, uuid)



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

let apiInstance = new NucoroApi.ApiApi();
let portfolioUuid = null; // String | 
let uuid = null; // String | 
apiInstance.apiV2PortfoliosWithdrawalsRetrieve(portfolioUuid, uuid, (error, data, response) => {
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
 **portfolioUuid** | [**String**](.md)|  | 
 **uuid** | [**String**](.md)|  | 

### Return type

[**WithdrawalDetail**](WithdrawalDetail.md)

### Authorization

[cookieAuth](../README.md#cookieAuth), [jwtAuth](../README.md#jwtAuth), [tokenAuth](../README.md#tokenAuth)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## apiV2RiskQuestionsList

> PaginatedQuestionList apiV2RiskQuestionsList(opts)



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

let apiInstance = new NucoroApi.ApiApi();
let opts = {
  'limit': 56, // Number | Number of results to return per page.
  'offset': 56 // Number | The initial index from which to return the results.
};
apiInstance.apiV2RiskQuestionsList(opts, (error, data, response) => {
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
 **limit** | **Number**| Number of results to return per page. | [optional] 
 **offset** | **Number**| The initial index from which to return the results. | [optional] 

### Return type

[**PaginatedQuestionList**](PaginatedQuestionList.md)

### Authorization

[cookieAuth](../README.md#cookieAuth), [jwtAuth](../README.md#jwtAuth), [tokenAuth](../README.md#tokenAuth)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## apiV2VerificationsVerifierWebhookCreate

> apiV2VerificationsVerifierWebhookCreate(action, verifier)



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

let apiInstance = new NucoroApi.ApiApi();
let action = "action_example"; // String | 
let verifier = "verifier_example"; // String | 
apiInstance.apiV2VerificationsVerifierWebhookCreate(action, verifier, (error, data, response) => {
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
 **action** | **String**|  | 
 **verifier** | **String**|  | 

### Return type

null (empty response body)

### Authorization

[cookieAuth](../README.md#cookieAuth), [jwtAuth](../README.md#jwtAuth), [tokenAuth](../README.md#tokenAuth)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: Not defined


## apiV2WebsocketAuthenticationTicketCreate

> AuthenticationResponse apiV2WebsocketAuthenticationTicketCreate(websocketAuthentication)



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

let apiInstance = new NucoroApi.ApiApi();
let websocketAuthentication = new NucoroApi.WebsocketAuthentication(); // WebsocketAuthentication | 
apiInstance.apiV2WebsocketAuthenticationTicketCreate(websocketAuthentication, (error, data, response) => {
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
 **websocketAuthentication** | [**WebsocketAuthentication**](WebsocketAuthentication.md)|  | 

### Return type

[**AuthenticationResponse**](AuthenticationResponse.md)

### Authorization

[cookieAuth](../README.md#cookieAuth), [jwtAuth](../README.md#jwtAuth), [tokenAuth](../README.md#tokenAuth)

### HTTP request headers

- **Content-Type**: application/json, application/x-www-form-urlencoded, multipart/form-data
- **Accept**: application/json


## apiV2WebsocketAuthorizeAssetCreate

> Response apiV2WebsocketAuthorizeAssetCreate(websocketAuthentication)



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

let apiInstance = new NucoroApi.ApiApi();
let websocketAuthentication = new NucoroApi.WebsocketAuthentication(); // WebsocketAuthentication | 
apiInstance.apiV2WebsocketAuthorizeAssetCreate(websocketAuthentication, (error, data, response) => {
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
 **websocketAuthentication** | [**WebsocketAuthentication**](WebsocketAuthentication.md)|  | 

### Return type

[**Response**](Response.md)

### Authorization

[cookieAuth](../README.md#cookieAuth), [jwtAuth](../README.md#jwtAuth), [tokenAuth](../README.md#tokenAuth)

### HTTP request headers

- **Content-Type**: application/json, application/x-www-form-urlencoded, multipart/form-data
- **Accept**: application/json


## apiV2WebsocketAuthorizeCreate

> Response apiV2WebsocketAuthorizeCreate(websocketAuthentication)



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

let apiInstance = new NucoroApi.ApiApi();
let websocketAuthentication = new NucoroApi.WebsocketAuthentication(); // WebsocketAuthentication | 
apiInstance.apiV2WebsocketAuthorizeCreate(websocketAuthentication, (error, data, response) => {
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
 **websocketAuthentication** | [**WebsocketAuthentication**](WebsocketAuthentication.md)|  | 

### Return type

[**Response**](Response.md)

### Authorization

[cookieAuth](../README.md#cookieAuth), [jwtAuth](../README.md#jwtAuth), [tokenAuth](../README.md#tokenAuth)

### HTTP request headers

- **Content-Type**: application/json, application/x-www-form-urlencoded, multipart/form-data
- **Accept**: application/json


## apiV2WebsocketAuthorizePortfolioCreate

> Response apiV2WebsocketAuthorizePortfolioCreate(websocketAuthentication)



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

let apiInstance = new NucoroApi.ApiApi();
let websocketAuthentication = new NucoroApi.WebsocketAuthentication(); // WebsocketAuthentication | 
apiInstance.apiV2WebsocketAuthorizePortfolioCreate(websocketAuthentication, (error, data, response) => {
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
 **websocketAuthentication** | [**WebsocketAuthentication**](WebsocketAuthentication.md)|  | 

### Return type

[**Response**](Response.md)

### Authorization

[cookieAuth](../README.md#cookieAuth), [jwtAuth](../README.md#jwtAuth), [tokenAuth](../README.md#tokenAuth)

### HTTP request headers

- **Content-Type**: application/json, application/x-www-form-urlencoded, multipart/form-data
- **Accept**: application/json


## apiV2WebsocketOnSubscribeCreate

> Subscribe apiV2WebsocketOnSubscribeCreate(subscribe)



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

let apiInstance = new NucoroApi.ApiApi();
let subscribe = new NucoroApi.Subscribe(); // Subscribe | 
apiInstance.apiV2WebsocketOnSubscribeCreate(subscribe, (error, data, response) => {
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
 **subscribe** | [**Subscribe**](Subscribe.md)|  | 

### Return type

[**Subscribe**](Subscribe.md)

### Authorization

[cookieAuth](../README.md#cookieAuth), [jwtAuth](../README.md#jwtAuth), [tokenAuth](../README.md#tokenAuth)

### HTTP request headers

- **Content-Type**: application/json, application/x-www-form-urlencoded, multipart/form-data
- **Accept**: application/json


## apiV2WebsocketOnUnsubscribeCreate

> Unsubscribe apiV2WebsocketOnUnsubscribeCreate(unsubscribe)



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

let apiInstance = new NucoroApi.ApiApi();
let unsubscribe = new NucoroApi.Unsubscribe(); // Unsubscribe | 
apiInstance.apiV2WebsocketOnUnsubscribeCreate(unsubscribe, (error, data, response) => {
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
 **unsubscribe** | [**Unsubscribe**](Unsubscribe.md)|  | 

### Return type

[**Unsubscribe**](Unsubscribe.md)

### Authorization

[cookieAuth](../README.md#cookieAuth), [jwtAuth](../README.md#jwtAuth), [tokenAuth](../README.md#tokenAuth)

### HTTP request headers

- **Content-Type**: application/json, application/x-www-form-urlencoded, multipart/form-data
- **Accept**: application/json

