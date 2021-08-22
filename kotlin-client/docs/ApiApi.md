# ApiApi

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
[**apiV2ClientsActivitiesList**](ApiApi.md#apiV2ClientsActivitiesList) | **GET** /api/v2/clients/{client_uuid}/activities/ | 
[**apiV2ClientsActivitiesRetrieve**](ApiApi.md#apiV2ClientsActivitiesRetrieve) | **GET** /api/v2/clients/{client_uuid}/activities/{uuid}/ | 
[**apiV2ClientsAdviceEnginesList**](ApiApi.md#apiV2ClientsAdviceEnginesList) | **GET** /api/v2/clients/{client_uuid}/advice-engines/ | 
[**apiV2ClientsAdviceEnginesRetrieve**](ApiApi.md#apiV2ClientsAdviceEnginesRetrieve) | **GET** /api/v2/clients/{client_uuid}/advice-engines/{uuid}/ | 
[**apiV2ClientsBillingFeesCreate**](ApiApi.md#apiV2ClientsBillingFeesCreate) | **POST** /api/v2/clients/{client_uuid}/billing/fees/ | 
[**apiV2ClientsBillingFeesDestroy**](ApiApi.md#apiV2ClientsBillingFeesDestroy) | **DELETE** /api/v2/clients/{client_uuid}/billing/fees/{investor_fee_uuid}/ | 
[**apiV2ClientsBillingFeesList**](ApiApi.md#apiV2ClientsBillingFeesList) | **GET** /api/v2/clients/{client_uuid}/billing/fees/ | 
[**apiV2ClientsBillingFeesPartialUpdate**](ApiApi.md#apiV2ClientsBillingFeesPartialUpdate) | **PATCH** /api/v2/clients/{client_uuid}/billing/fees/{investor_fee_uuid}/ | 
[**apiV2ClientsBillingFeesRetrieve**](ApiApi.md#apiV2ClientsBillingFeesRetrieve) | **GET** /api/v2/clients/{client_uuid}/billing/fees/{investor_fee_uuid}/ | 
[**apiV2ClientsBillingFeesUpdate**](ApiApi.md#apiV2ClientsBillingFeesUpdate) | **PUT** /api/v2/clients/{client_uuid}/billing/fees/{investor_fee_uuid}/ | 
[**apiV2ClientsBillingInvoicesList**](ApiApi.md#apiV2ClientsBillingInvoicesList) | **GET** /api/v2/clients/{client_uuid}/billing/invoices/ | 
[**apiV2ClientsBillingInvoicesRetrieve**](ApiApi.md#apiV2ClientsBillingInvoicesRetrieve) | **GET** /api/v2/clients/{client_uuid}/billing/invoices/{uuid}/ | 
[**apiV2ClientsDocumentsCreate**](ApiApi.md#apiV2ClientsDocumentsCreate) | **POST** /api/v2/clients/{client_uuid}/documents/ | 
[**apiV2ClientsDocumentsDestroy**](ApiApi.md#apiV2ClientsDocumentsDestroy) | **DELETE** /api/v2/clients/{client_uuid}/documents/{uuid}/ | 
[**apiV2ClientsDocumentsList**](ApiApi.md#apiV2ClientsDocumentsList) | **GET** /api/v2/clients/{client_uuid}/documents/ | 
[**apiV2ClientsDocumentsRetrieve**](ApiApi.md#apiV2ClientsDocumentsRetrieve) | **GET** /api/v2/clients/{client_uuid}/documents/{uuid}/ | 
[**apiV2ClientsMeVerifyEmailCreate**](ApiApi.md#apiV2ClientsMeVerifyEmailCreate) | **POST** /api/v2/clients/me/verify/email/ | 
[**apiV2ClientsNationalDocumentsList**](ApiApi.md#apiV2ClientsNationalDocumentsList) | **GET** /api/v2/clients/national_documents/ | 
[**apiV2ClientsReferralRetrieve**](ApiApi.md#apiV2ClientsReferralRetrieve) | **GET** /api/v2/clients/referral/{referral_code}/ | 
[**apiV2ClientsReportStatementsList**](ApiApi.md#apiV2ClientsReportStatementsList) | **GET** /api/v2/clients/{client_uuid}/report/statements/ | 
[**apiV2ClientsReportStatementsRetrieve**](ApiApi.md#apiV2ClientsReportStatementsRetrieve) | **GET** /api/v2/clients/{client_uuid}/report/statements/{uuid}/ | 
[**apiV2ClientsReportTaxReportsList**](ApiApi.md#apiV2ClientsReportTaxReportsList) | **GET** /api/v2/clients/{client_uuid}/report/tax-reports/ | 
[**apiV2ClientsReportTaxReportsRetrieve**](ApiApi.md#apiV2ClientsReportTaxReportsRetrieve) | **GET** /api/v2/clients/{client_uuid}/report/tax-reports/{uuid}/ | 
[**apiV2ClientsVerifyEmailUpdate**](ApiApi.md#apiV2ClientsVerifyEmailUpdate) | **PUT** /api/v2/clients/{uuid}/verify/email/ | 
[**apiV2ClientsWatchlistsCreate**](ApiApi.md#apiV2ClientsWatchlistsCreate) | **POST** /api/v2/clients/{client_uuid}/watchlists/ | 
[**apiV2ClientsWatchlistsDestroy**](ApiApi.md#apiV2ClientsWatchlistsDestroy) | **DELETE** /api/v2/clients/{client_uuid}/watchlists/{watchlist_uuid}/ | 
[**apiV2ClientsWatchlistsList**](ApiApi.md#apiV2ClientsWatchlistsList) | **GET** /api/v2/clients/{client_uuid}/watchlists/ | 
[**apiV2ClientsWatchlistsRetrieve**](ApiApi.md#apiV2ClientsWatchlistsRetrieve) | **GET** /api/v2/clients/{client_uuid}/watchlists/{watchlist_uuid}/ | 
[**apiV2ClientsWatchlistsUpdate**](ApiApi.md#apiV2ClientsWatchlistsUpdate) | **PUT** /api/v2/clients/{client_uuid}/watchlists/{watchlist_uuid}/ | 
[**apiV2FeedsAccessLogsList**](ApiApi.md#apiV2FeedsAccessLogsList) | **GET** /api/v2/feeds/access-logs/ | 
[**apiV2FeedsActivitiesList**](ApiApi.md#apiV2FeedsActivitiesList) | **GET** /api/v2/feeds/activities/ | 
[**apiV2GoalsCreate**](ApiApi.md#apiV2GoalsCreate) | **POST** /api/v2/goals/ | 
[**apiV2GoalsDecumulationCreate**](ApiApi.md#apiV2GoalsDecumulationCreate) | **POST** /api/v2/goals/decumulation/ | 
[**apiV2GoalsDestroy**](ApiApi.md#apiV2GoalsDestroy) | **DELETE** /api/v2/goals/{goal_uuid}/ | 
[**apiV2GoalsForecastCreate**](ApiApi.md#apiV2GoalsForecastCreate) | **POST** /api/v2/goals/forecast/ | 
[**apiV2GoalsList**](ApiApi.md#apiV2GoalsList) | **GET** /api/v2/goals/ | 
[**apiV2GoalsPartialUpdate**](ApiApi.md#apiV2GoalsPartialUpdate) | **PATCH** /api/v2/goals/{goal_uuid}/ | 
[**apiV2GoalsRetrieve**](ApiApi.md#apiV2GoalsRetrieve) | **GET** /api/v2/goals/{goal_uuid}/ | 
[**apiV2InboxConversationsCreate**](ApiApi.md#apiV2InboxConversationsCreate) | **POST** /api/v2/inbox/conversations/ | 
[**apiV2InboxConversationsList**](ApiApi.md#apiV2InboxConversationsList) | **GET** /api/v2/inbox/conversations/ | 
[**apiV2InboxConversationsList2**](ApiApi.md#apiV2InboxConversationsList2) | **GET** /api/v2/inbox/conversations/{conversation}/ | 
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
[**apiV2PortfoliosDestroy**](ApiApi.md#apiV2PortfoliosDestroy) | **DELETE** /api/v2/portfolios/{portfolio_uuid}/ | 
[**apiV2PortfoliosList**](ApiApi.md#apiV2PortfoliosList) | **GET** /api/v2/portfolios/ | 
[**apiV2PortfoliosOrdersCreate**](ApiApi.md#apiV2PortfoliosOrdersCreate) | **POST** /api/v2/portfolios/{portfolio_uuid}/orders/ | 
[**apiV2PortfoliosOrdersDestroy**](ApiApi.md#apiV2PortfoliosOrdersDestroy) | **DELETE** /api/v2/portfolios/{portfolio_uuid}/orders/{uuid}/ | 
[**apiV2PortfoliosOrdersList**](ApiApi.md#apiV2PortfoliosOrdersList) | **GET** /api/v2/portfolios/{portfolio_uuid}/orders/ | 
[**apiV2PortfoliosOrdersRetrieve**](ApiApi.md#apiV2PortfoliosOrdersRetrieve) | **GET** /api/v2/portfolios/{portfolio_uuid}/orders/{uuid}/ | 
[**apiV2PortfoliosPartialUpdate**](ApiApi.md#apiV2PortfoliosPartialUpdate) | **PATCH** /api/v2/portfolios/{portfolio_uuid}/ | 
[**apiV2PortfoliosPerformanceMwrrList**](ApiApi.md#apiV2PortfoliosPerformanceMwrrList) | **GET** /api/v2/portfolios/{portfolio_uuid}/performance/mwrr/ | 
[**apiV2PortfoliosPerformancePositionsList**](ApiApi.md#apiV2PortfoliosPerformancePositionsList) | **GET** /api/v2/portfolios/{portfolio_uuid}/performance/positions/ | 
[**apiV2PortfoliosPerformanceTwrrList**](ApiApi.md#apiV2PortfoliosPerformanceTwrrList) | **GET** /api/v2/portfolios/{portfolio_uuid}/performance/twrr/ | 
[**apiV2PortfoliosPortfoliotypesList**](ApiApi.md#apiV2PortfoliosPortfoliotypesList) | **GET** /api/v2/portfolios/portfoliotypes/ | 
[**apiV2PortfoliosPortfoliotypesRestrictionsList**](ApiApi.md#apiV2PortfoliosPortfoliotypesRestrictionsList) | **GET** /api/v2/portfolios/portfoliotypes/{code}/restrictions/ | 
[**apiV2PortfoliosRebalancesList**](ApiApi.md#apiV2PortfoliosRebalancesList) | **GET** /api/v2/portfolios/{portfolio_uuid}/rebalances/ | 
[**apiV2PortfoliosRebalancesRetrieve**](ApiApi.md#apiV2PortfoliosRebalancesRetrieve) | **GET** /api/v2/portfolios/{portfolio_uuid}/rebalances/{uuid}/ | 
[**apiV2PortfoliosRestrictionsRetrieve**](ApiApi.md#apiV2PortfoliosRestrictionsRetrieve) | **GET** /api/v2/portfolios/{portfolio_uuid}/restrictions/ | 
[**apiV2PortfoliosRetrieve**](ApiApi.md#apiV2PortfoliosRetrieve) | **GET** /api/v2/portfolios/{portfolio_uuid}/ | 
[**apiV2PortfoliosUpdate**](ApiApi.md#apiV2PortfoliosUpdate) | **PUT** /api/v2/portfolios/{portfolio_uuid}/ | 
[**apiV2PortfoliosWithdrawalsCreate**](ApiApi.md#apiV2PortfoliosWithdrawalsCreate) | **POST** /api/v2/portfolios/{portfolio_uuid}/withdrawals/ | 
[**apiV2PortfoliosWithdrawalsDestroy**](ApiApi.md#apiV2PortfoliosWithdrawalsDestroy) | **DELETE** /api/v2/portfolios/{portfolio_uuid}/withdrawals/{uuid}/ | 
[**apiV2PortfoliosWithdrawalsList**](ApiApi.md#apiV2PortfoliosWithdrawalsList) | **GET** /api/v2/portfolios/{portfolio_uuid}/withdrawals/ | 
[**apiV2PortfoliosWithdrawalsRetrieve**](ApiApi.md#apiV2PortfoliosWithdrawalsRetrieve) | **GET** /api/v2/portfolios/{portfolio_uuid}/withdrawals/{uuid}/ | 
[**apiV2RelationshipManagerAnalyticsAllocationsByAssetRetrieve**](ApiApi.md#apiV2RelationshipManagerAnalyticsAllocationsByAssetRetrieve) | **GET** /api/v2/relationship-manager/{uuid}/analytics/allocations-by-asset/ | 
[**apiV2RelationshipManagerAnalyticsAssetConcentrationRiskRetrieve**](ApiApi.md#apiV2RelationshipManagerAnalyticsAssetConcentrationRiskRetrieve) | **GET** /api/v2/relationship-manager/{uuid}/analytics/asset-concentration-risk/ | 
[**apiV2RelationshipManagerAnalyticsAumEvolutionRetrieve**](ApiApi.md#apiV2RelationshipManagerAnalyticsAumEvolutionRetrieve) | **GET** /api/v2/relationship-manager/{uuid}/analytics/aum-evolution/ | 
[**apiV2RelationshipManagerAnalyticsAumPortfolioRiskRetrieve**](ApiApi.md#apiV2RelationshipManagerAnalyticsAumPortfolioRiskRetrieve) | **GET** /api/v2/relationship-manager/{uuid}/analytics/aum-portfolio-risk/ | 
[**apiV2RelationshipManagerAnalyticsAumRetrieve**](ApiApi.md#apiV2RelationshipManagerAnalyticsAumRetrieve) | **GET** /api/v2/relationship-manager/{uuid}/analytics/aum/ | 
[**apiV2RelationshipManagerAnalyticsClientByRiskRetrieve**](ApiApi.md#apiV2RelationshipManagerAnalyticsClientByRiskRetrieve) | **GET** /api/v2/relationship-manager/{uuid}/analytics/client-by-risk/ | 
[**apiV2RelationshipManagerAnalyticsClientByStatusRetrieve**](ApiApi.md#apiV2RelationshipManagerAnalyticsClientByStatusRetrieve) | **GET** /api/v2/relationship-manager/{uuid}/analytics/client-by-status/ | 
[**apiV2RelationshipManagerAnalyticsClientRankingRetrieve**](ApiApi.md#apiV2RelationshipManagerAnalyticsClientRankingRetrieve) | **GET** /api/v2/relationship-manager/{uuid}/analytics/client-ranking/ | 
[**apiV2RelationshipManagerAnalyticsInflowsOutflowsRetrieve**](ApiApi.md#apiV2RelationshipManagerAnalyticsInflowsOutflowsRetrieve) | **GET** /api/v2/relationship-manager/{uuid}/analytics/inflows-outflows/ | 
[**apiV2RelationshipManagerAnalyticsPortfolioRiskPerformanceRetrieve**](ApiApi.md#apiV2RelationshipManagerAnalyticsPortfolioRiskPerformanceRetrieve) | **GET** /api/v2/relationship-manager/{uuid}/analytics/portfolio-risk-performance/ | 
[**apiV2RelationshipManagerAnalyticsTotalActiveClientsRetrieve**](ApiApi.md#apiV2RelationshipManagerAnalyticsTotalActiveClientsRetrieve) | **GET** /api/v2/relationship-manager/{uuid}/analytics/total-active-clients/ | 
[**apiV2RelationshipManagerMeRetrieve**](ApiApi.md#apiV2RelationshipManagerMeRetrieve) | **GET** /api/v2/relationship-manager/me/ | 
[**apiV2RelationshipManagerRetrieve**](ApiApi.md#apiV2RelationshipManagerRetrieve) | **GET** /api/v2/relationship-manager/{uuid}/ | 
[**apiV2ReportStatementsList**](ApiApi.md#apiV2ReportStatementsList) | **GET** /api/v2/report/statements/ | 
[**apiV2ReportStatementsRetrieve**](ApiApi.md#apiV2ReportStatementsRetrieve) | **GET** /api/v2/report/statements/{uuid}/ | 
[**apiV2ReportTaxReportList**](ApiApi.md#apiV2ReportTaxReportList) | **GET** /api/v2/report/tax-report/ | 
[**apiV2ReportTaxReportRetrieve**](ApiApi.md#apiV2ReportTaxReportRetrieve) | **GET** /api/v2/report/tax-report/{uuid}/ | 
[**apiV2RiskQuestionsList**](ApiApi.md#apiV2RiskQuestionsList) | **GET** /api/v2/risk/questions/ | 
[**apiV2VerificationsVerifierWebhookCreate**](ApiApi.md#apiV2VerificationsVerifierWebhookCreate) | **POST** /api/v2/verifications/verifier_webhook/{verifier}/{action}/ | 
[**apiV2WebsocketAuthenticationTicketCreate**](ApiApi.md#apiV2WebsocketAuthenticationTicketCreate) | **POST** /api/v2/websocket/authentication/ticket/ | 
[**apiV2WebsocketAuthorizeAssetCreate**](ApiApi.md#apiV2WebsocketAuthorizeAssetCreate) | **POST** /api/v2/websocket/authorize/asset/ | 
[**apiV2WebsocketAuthorizeCreate**](ApiApi.md#apiV2WebsocketAuthorizeCreate) | **POST** /api/v2/websocket/authorize/ | 
[**apiV2WebsocketAuthorizePortfolioCreate**](ApiApi.md#apiV2WebsocketAuthorizePortfolioCreate) | **POST** /api/v2/websocket/authorize/portfolio/ | 
[**apiV2WebsocketOnSubscribeCreate**](ApiApi.md#apiV2WebsocketOnSubscribeCreate) | **POST** /api/v2/websocket/on_subscribe/ | 
[**apiV2WebsocketOnUnsubscribeCreate**](ApiApi.md#apiV2WebsocketOnUnsubscribeCreate) | **POST** /api/v2/websocket/on_unsubscribe/ | 


<a name="apiSchemaRetrieve"></a>
# **apiSchemaRetrieve**
> kotlin.collections.Map&lt;kotlin.String, kotlin.Any&gt; apiSchemaRetrieve(format, lang)



OpenApi3 schema for this API. Format can be selected via content negotiation.  - YAML: application/vnd.oai.openapi - JSON: application/vnd.oai.openapi+json

### Example
```kotlin
// Import classes:
//import org.openapitools.client.infrastructure.*
//import org.openapitools.client.models.*

val apiInstance = ApiApi()
val format : kotlin.String = format_example // kotlin.String | 
val lang : kotlin.String = lang_example // kotlin.String | 
try {
    val result : kotlin.collections.Map<kotlin.String, kotlin.Any> = apiInstance.apiSchemaRetrieve(format, lang)
    println(result)
} catch (e: ClientException) {
    println("4xx response calling ApiApi#apiSchemaRetrieve")
    e.printStackTrace()
} catch (e: ServerException) {
    println("5xx response calling ApiApi#apiSchemaRetrieve")
    e.printStackTrace()
}
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **format** | **kotlin.String**|  | [optional] [enum: json, yaml]
 **lang** | **kotlin.String**|  | [optional] [enum: en-ch, en-gb, fr-ch]

### Return type

[**kotlin.collections.Map&lt;kotlin.String, kotlin.Any&gt;**](kotlin.Any.md)

### Authorization


Configure cookieAuth:
    ApiClient.apiKey["Session"] = ""
    ApiClient.apiKeyPrefix["Session"] = ""
Configure jwtAuth:
    ApiClient.accessToken = ""
Configure tokenAuth:
    ApiClient.apiKey["Authorization"] = ""
    ApiClient.apiKeyPrefix["Authorization"] = ""

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/vnd.oai.openapi, application/yaml, application/vnd.oai.openapi+json, application/json

<a name="apiV2AdviceEnginesEtsCategoriesList"></a>
# **apiV2AdviceEnginesEtsCategoriesList**
> PaginatedCategoryList apiV2AdviceEnginesEtsCategoriesList(limit, offset)



### Example
```kotlin
// Import classes:
//import org.openapitools.client.infrastructure.*
//import org.openapitools.client.models.*

val apiInstance = ApiApi()
val limit : kotlin.Int = 56 // kotlin.Int | Number of results to return per page.
val offset : kotlin.Int = 56 // kotlin.Int | The initial index from which to return the results.
try {
    val result : PaginatedCategoryList = apiInstance.apiV2AdviceEnginesEtsCategoriesList(limit, offset)
    println(result)
} catch (e: ClientException) {
    println("4xx response calling ApiApi#apiV2AdviceEnginesEtsCategoriesList")
    e.printStackTrace()
} catch (e: ServerException) {
    println("5xx response calling ApiApi#apiV2AdviceEnginesEtsCategoriesList")
    e.printStackTrace()
}
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **limit** | **kotlin.Int**| Number of results to return per page. | [optional]
 **offset** | **kotlin.Int**| The initial index from which to return the results. | [optional]

### Return type

[**PaginatedCategoryList**](PaginatedCategoryList.md)

### Authorization


Configure cookieAuth:
    ApiClient.apiKey["Session"] = ""
    ApiClient.apiKeyPrefix["Session"] = ""
Configure jwtAuth:
    ApiClient.accessToken = ""
Configure tokenAuth:
    ApiClient.apiKey["Authorization"] = ""
    ApiClient.apiKeyPrefix["Authorization"] = ""

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

<a name="apiV2AdviceEnginesEtsCoreCategoryGroupsList"></a>
# **apiV2AdviceEnginesEtsCoreCategoryGroupsList**
> PaginatedCoreCategoryGroupList apiV2AdviceEnginesEtsCoreCategoryGroupsList(limit, offset)



### Example
```kotlin
// Import classes:
//import org.openapitools.client.infrastructure.*
//import org.openapitools.client.models.*

val apiInstance = ApiApi()
val limit : kotlin.Int = 56 // kotlin.Int | Number of results to return per page.
val offset : kotlin.Int = 56 // kotlin.Int | The initial index from which to return the results.
try {
    val result : PaginatedCoreCategoryGroupList = apiInstance.apiV2AdviceEnginesEtsCoreCategoryGroupsList(limit, offset)
    println(result)
} catch (e: ClientException) {
    println("4xx response calling ApiApi#apiV2AdviceEnginesEtsCoreCategoryGroupsList")
    e.printStackTrace()
} catch (e: ServerException) {
    println("5xx response calling ApiApi#apiV2AdviceEnginesEtsCoreCategoryGroupsList")
    e.printStackTrace()
}
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **limit** | **kotlin.Int**| Number of results to return per page. | [optional]
 **offset** | **kotlin.Int**| The initial index from which to return the results. | [optional]

### Return type

[**PaginatedCoreCategoryGroupList**](PaginatedCoreCategoryGroupList.md)

### Authorization


Configure cookieAuth:
    ApiClient.apiKey["Session"] = ""
    ApiClient.apiKeyPrefix["Session"] = ""
Configure jwtAuth:
    ApiClient.accessToken = ""
Configure tokenAuth:
    ApiClient.apiKey["Authorization"] = ""
    ApiClient.apiKeyPrefix["Authorization"] = ""

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

<a name="apiV2AdviceEnginesEtsForecastCreate"></a>
# **apiV2AdviceEnginesEtsForecastCreate**
> ETSForecastRequest apiV2AdviceEnginesEtsForecastCreate(etSForecastRequest)



The forecast positions and amounts for the time_horizon and  risk_level chosen. Taking into account the initial_auto_deposit and the initial_amount jointly with the selected filters.

### Example
```kotlin
// Import classes:
//import org.openapitools.client.infrastructure.*
//import org.openapitools.client.models.*

val apiInstance = ApiApi()
val etSForecastRequest : ETSForecastRequest =  // ETSForecastRequest | 
try {
    val result : ETSForecastRequest = apiInstance.apiV2AdviceEnginesEtsForecastCreate(etSForecastRequest)
    println(result)
} catch (e: ClientException) {
    println("4xx response calling ApiApi#apiV2AdviceEnginesEtsForecastCreate")
    e.printStackTrace()
} catch (e: ServerException) {
    println("5xx response calling ApiApi#apiV2AdviceEnginesEtsForecastCreate")
    e.printStackTrace()
}
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **etSForecastRequest** | [**ETSForecastRequest**](ETSForecastRequest.md)|  |

### Return type

[**ETSForecastRequest**](ETSForecastRequest.md)

### Authorization


Configure cookieAuth:
    ApiClient.apiKey["Session"] = ""
    ApiClient.apiKeyPrefix["Session"] = ""
Configure jwtAuth:
    ApiClient.accessToken = ""
Configure tokenAuth:
    ApiClient.apiKey["Authorization"] = ""
    ApiClient.apiKeyPrefix["Authorization"] = ""

### HTTP request headers

 - **Content-Type**: application/json, application/x-www-form-urlencoded, multipart/form-data
 - **Accept**: application/json

<a name="apiV2AdviceEnginesEtsPresetCategoryGroupsList"></a>
# **apiV2AdviceEnginesEtsPresetCategoryGroupsList**
> PaginatedPresetCategoryGroupList apiV2AdviceEnginesEtsPresetCategoryGroupsList(limit, offset)



### Example
```kotlin
// Import classes:
//import org.openapitools.client.infrastructure.*
//import org.openapitools.client.models.*

val apiInstance = ApiApi()
val limit : kotlin.Int = 56 // kotlin.Int | Number of results to return per page.
val offset : kotlin.Int = 56 // kotlin.Int | The initial index from which to return the results.
try {
    val result : PaginatedPresetCategoryGroupList = apiInstance.apiV2AdviceEnginesEtsPresetCategoryGroupsList(limit, offset)
    println(result)
} catch (e: ClientException) {
    println("4xx response calling ApiApi#apiV2AdviceEnginesEtsPresetCategoryGroupsList")
    e.printStackTrace()
} catch (e: ServerException) {
    println("5xx response calling ApiApi#apiV2AdviceEnginesEtsPresetCategoryGroupsList")
    e.printStackTrace()
}
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **limit** | **kotlin.Int**| Number of results to return per page. | [optional]
 **offset** | **kotlin.Int**| The initial index from which to return the results. | [optional]

### Return type

[**PaginatedPresetCategoryGroupList**](PaginatedPresetCategoryGroupList.md)

### Authorization


Configure cookieAuth:
    ApiClient.apiKey["Session"] = ""
    ApiClient.apiKeyPrefix["Session"] = ""
Configure jwtAuth:
    ApiClient.accessToken = ""
Configure tokenAuth:
    ApiClient.apiKey["Authorization"] = ""
    ApiClient.apiKeyPrefix["Authorization"] = ""

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

<a name="apiV2AdviceEnginesModelPortfolioForecastCreate"></a>
# **apiV2AdviceEnginesModelPortfolioForecastCreate**
> ModelPortfolioForecastRequest apiV2AdviceEnginesModelPortfolioForecastCreate(modelPortfolioForecastRequest)



The forecast positions and amounts for the time_horizon chosen. Taking into account the initial_auto_deposit and the initial_amount jointly with the selected filters.

### Example
```kotlin
// Import classes:
//import org.openapitools.client.infrastructure.*
//import org.openapitools.client.models.*

val apiInstance = ApiApi()
val modelPortfolioForecastRequest : ModelPortfolioForecastRequest =  // ModelPortfolioForecastRequest | 
try {
    val result : ModelPortfolioForecastRequest = apiInstance.apiV2AdviceEnginesModelPortfolioForecastCreate(modelPortfolioForecastRequest)
    println(result)
} catch (e: ClientException) {
    println("4xx response calling ApiApi#apiV2AdviceEnginesModelPortfolioForecastCreate")
    e.printStackTrace()
} catch (e: ServerException) {
    println("5xx response calling ApiApi#apiV2AdviceEnginesModelPortfolioForecastCreate")
    e.printStackTrace()
}
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **modelPortfolioForecastRequest** | [**ModelPortfolioForecastRequest**](ModelPortfolioForecastRequest.md)|  |

### Return type

[**ModelPortfolioForecastRequest**](ModelPortfolioForecastRequest.md)

### Authorization


Configure cookieAuth:
    ApiClient.apiKey["Session"] = ""
    ApiClient.apiKeyPrefix["Session"] = ""
Configure jwtAuth:
    ApiClient.accessToken = ""
Configure tokenAuth:
    ApiClient.apiKey["Authorization"] = ""
    ApiClient.apiKeyPrefix["Authorization"] = ""

### HTTP request headers

 - **Content-Type**: application/json, application/x-www-form-urlencoded, multipart/form-data
 - **Accept**: application/json

<a name="apiV2AdviceEnginesModelPortfolioModelPortfoliosList"></a>
# **apiV2AdviceEnginesModelPortfolioModelPortfoliosList**
> PaginatedInvestorModelPortfolioList apiV2AdviceEnginesModelPortfolioModelPortfoliosList(extraData, limit, name, offset, riskHigher, riskLevel, riskLower)



### Example
```kotlin
// Import classes:
//import org.openapitools.client.infrastructure.*
//import org.openapitools.client.models.*

val apiInstance = ApiApi()
val extraData : kotlin.collections.Map<kotlin.String, kotlin.Any> = Object // kotlin.collections.Map<kotlin.String, kotlin.Any> | Additional ModelPortfolio attributes
val limit : kotlin.Int = 56 // kotlin.Int | Number of results to return per page.
val name : kotlin.String = name_example // kotlin.String | 
val offset : kotlin.Int = 56 // kotlin.Int | The initial index from which to return the results.
val riskHigher : kotlin.Int = 56 // kotlin.Int | 
val riskLevel : kotlin.Int = 56 // kotlin.Int | 
val riskLower : kotlin.Int = 56 // kotlin.Int | 
try {
    val result : PaginatedInvestorModelPortfolioList = apiInstance.apiV2AdviceEnginesModelPortfolioModelPortfoliosList(extraData, limit, name, offset, riskHigher, riskLevel, riskLower)
    println(result)
} catch (e: ClientException) {
    println("4xx response calling ApiApi#apiV2AdviceEnginesModelPortfolioModelPortfoliosList")
    e.printStackTrace()
} catch (e: ServerException) {
    println("5xx response calling ApiApi#apiV2AdviceEnginesModelPortfolioModelPortfoliosList")
    e.printStackTrace()
}
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **extraData** | [**kotlin.collections.Map&lt;kotlin.String, kotlin.Any&gt;**](kotlin.Any.md)| Additional ModelPortfolio attributes | [optional]
 **limit** | **kotlin.Int**| Number of results to return per page. | [optional]
 **name** | **kotlin.String**|  | [optional]
 **offset** | **kotlin.Int**| The initial index from which to return the results. | [optional]
 **riskHigher** | **kotlin.Int**|  | [optional]
 **riskLevel** | **kotlin.Int**|  | [optional]
 **riskLower** | **kotlin.Int**|  | [optional]

### Return type

[**PaginatedInvestorModelPortfolioList**](PaginatedInvestorModelPortfolioList.md)

### Authorization


Configure cookieAuth:
    ApiClient.apiKey["Session"] = ""
    ApiClient.apiKeyPrefix["Session"] = ""
Configure jwtAuth:
    ApiClient.accessToken = ""
Configure tokenAuth:
    ApiClient.apiKey["Authorization"] = ""
    ApiClient.apiKeyPrefix["Authorization"] = ""

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

<a name="apiV2AdviceEnginesModelPortfolioModelPortfoliosRetrieve"></a>
# **apiV2AdviceEnginesModelPortfolioModelPortfoliosRetrieve**
> InvestorModelPortfolio apiV2AdviceEnginesModelPortfolioModelPortfoliosRetrieve(uuid)



### Example
```kotlin
// Import classes:
//import org.openapitools.client.infrastructure.*
//import org.openapitools.client.models.*

val apiInstance = ApiApi()
val uuid : java.util.UUID = 38400000-8cf0-11bd-b23e-10b96e4ef00d // java.util.UUID | 
try {
    val result : InvestorModelPortfolio = apiInstance.apiV2AdviceEnginesModelPortfolioModelPortfoliosRetrieve(uuid)
    println(result)
} catch (e: ClientException) {
    println("4xx response calling ApiApi#apiV2AdviceEnginesModelPortfolioModelPortfoliosRetrieve")
    e.printStackTrace()
} catch (e: ServerException) {
    println("5xx response calling ApiApi#apiV2AdviceEnginesModelPortfolioModelPortfoliosRetrieve")
    e.printStackTrace()
}
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **uuid** | [**java.util.UUID**](.md)|  |

### Return type

[**InvestorModelPortfolio**](InvestorModelPortfolio.md)

### Authorization


Configure cookieAuth:
    ApiClient.apiKey["Session"] = ""
    ApiClient.apiKeyPrefix["Session"] = ""
Configure jwtAuth:
    ApiClient.accessToken = ""
Configure tokenAuth:
    ApiClient.apiKey["Authorization"] = ""
    ApiClient.apiKeyPrefix["Authorization"] = ""

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

<a name="apiV2AssetsCategoriesList"></a>
# **apiV2AssetsCategoriesList**
> PaginatedAssetCategoryList apiV2AssetsCategoriesList(limit, offset, type)



Retrieve all asset categories

### Example
```kotlin
// Import classes:
//import org.openapitools.client.infrastructure.*
//import org.openapitools.client.models.*

val apiInstance = ApiApi()
val limit : kotlin.Int = 56 // kotlin.Int | Number of results to return per page.
val offset : kotlin.Int = 56 // kotlin.Int | The initial index from which to return the results.
val type : kotlin.String = type_example // kotlin.String | 
try {
    val result : PaginatedAssetCategoryList = apiInstance.apiV2AssetsCategoriesList(limit, offset, type)
    println(result)
} catch (e: ClientException) {
    println("4xx response calling ApiApi#apiV2AssetsCategoriesList")
    e.printStackTrace()
} catch (e: ServerException) {
    println("5xx response calling ApiApi#apiV2AssetsCategoriesList")
    e.printStackTrace()
}
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **limit** | **kotlin.Int**| Number of results to return per page. | [optional]
 **offset** | **kotlin.Int**| The initial index from which to return the results. | [optional]
 **type** | **kotlin.String**|  | [optional]

### Return type

[**PaginatedAssetCategoryList**](PaginatedAssetCategoryList.md)

### Authorization


Configure cookieAuth:
    ApiClient.apiKey["Session"] = ""
    ApiClient.apiKeyPrefix["Session"] = ""
Configure jwtAuth:
    ApiClient.accessToken = ""
Configure tokenAuth:
    ApiClient.apiKey["Authorization"] = ""
    ApiClient.apiKeyPrefix["Authorization"] = ""

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

<a name="apiV2AssetsIntradayPricesLatestRetrieve"></a>
# **apiV2AssetsIntradayPricesLatestRetrieve**
> IntradayPrice apiV2AssetsIntradayPricesLatestRetrieve(assetIdentifier)



Prices (from an Asset) list view endpoints.  GET: Prices retrieve (rest framework builtin overriding get_object)

### Example
```kotlin
// Import classes:
//import org.openapitools.client.infrastructure.*
//import org.openapitools.client.models.*

val apiInstance = ApiApi()
val assetIdentifier : java.util.UUID = 38400000-8cf0-11bd-b23e-10b96e4ef00d // java.util.UUID | 
try {
    val result : IntradayPrice = apiInstance.apiV2AssetsIntradayPricesLatestRetrieve(assetIdentifier)
    println(result)
} catch (e: ClientException) {
    println("4xx response calling ApiApi#apiV2AssetsIntradayPricesLatestRetrieve")
    e.printStackTrace()
} catch (e: ServerException) {
    println("5xx response calling ApiApi#apiV2AssetsIntradayPricesLatestRetrieve")
    e.printStackTrace()
}
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **assetIdentifier** | [**java.util.UUID**](.md)|  |

### Return type

[**IntradayPrice**](IntradayPrice.md)

### Authorization


Configure cookieAuth:
    ApiClient.apiKey["Session"] = ""
    ApiClient.apiKeyPrefix["Session"] = ""
Configure jwtAuth:
    ApiClient.accessToken = ""
Configure tokenAuth:
    ApiClient.apiKey["Authorization"] = ""
    ApiClient.apiKeyPrefix["Authorization"] = ""

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

<a name="apiV2AssetsIntradayPricesList"></a>
# **apiV2AssetsIntradayPricesList**
> PaginatedIntradayPriceList apiV2AssetsIntradayPricesList(assetIdentifier, dateAfter, dateBefore, datetimeAfter, datetimeBefore, limit, offset)



Prices (from an Asset) list view endpoints.  GET: Prices retrieve (rest framework builtin overriding get_object)

### Example
```kotlin
// Import classes:
//import org.openapitools.client.infrastructure.*
//import org.openapitools.client.models.*

val apiInstance = ApiApi()
val assetIdentifier : java.util.UUID = 38400000-8cf0-11bd-b23e-10b96e4ef00d // java.util.UUID | 
val dateAfter : java.time.LocalDate = 2013-10-20 // java.time.LocalDate | 
val dateBefore : java.time.LocalDate = 2013-10-20 // java.time.LocalDate | 
val datetimeAfter : java.time.OffsetDateTime = 2013-10-20T19:20:30+01:00 // java.time.OffsetDateTime | 
val datetimeBefore : java.time.OffsetDateTime = 2013-10-20T19:20:30+01:00 // java.time.OffsetDateTime | 
val limit : kotlin.Int = 56 // kotlin.Int | Number of results to return per page.
val offset : kotlin.Int = 56 // kotlin.Int | The initial index from which to return the results.
try {
    val result : PaginatedIntradayPriceList = apiInstance.apiV2AssetsIntradayPricesList(assetIdentifier, dateAfter, dateBefore, datetimeAfter, datetimeBefore, limit, offset)
    println(result)
} catch (e: ClientException) {
    println("4xx response calling ApiApi#apiV2AssetsIntradayPricesList")
    e.printStackTrace()
} catch (e: ServerException) {
    println("5xx response calling ApiApi#apiV2AssetsIntradayPricesList")
    e.printStackTrace()
}
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **assetIdentifier** | [**java.util.UUID**](.md)|  |
 **dateAfter** | **java.time.LocalDate**|  | [optional]
 **dateBefore** | **java.time.LocalDate**|  | [optional]
 **datetimeAfter** | **java.time.OffsetDateTime**|  | [optional]
 **datetimeBefore** | **java.time.OffsetDateTime**|  | [optional]
 **limit** | **kotlin.Int**| Number of results to return per page. | [optional]
 **offset** | **kotlin.Int**| The initial index from which to return the results. | [optional]

### Return type

[**PaginatedIntradayPriceList**](PaginatedIntradayPriceList.md)

### Authorization


Configure cookieAuth:
    ApiClient.apiKey["Session"] = ""
    ApiClient.apiKeyPrefix["Session"] = ""
Configure jwtAuth:
    ApiClient.accessToken = ""
Configure tokenAuth:
    ApiClient.apiKey["Authorization"] = ""
    ApiClient.apiKeyPrefix["Authorization"] = ""

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

<a name="apiV2AssetsList"></a>
# **apiV2AssetsList**
> PaginatedAssetListList apiV2AssetsList(assetType, categoryCode, categoryType, currency, isin, limit, market, name, offset, status, ticker)



A list of Assets filtered by category codes. Default is an empty dict which returns the whole universe.

### Example
```kotlin
// Import classes:
//import org.openapitools.client.infrastructure.*
//import org.openapitools.client.models.*

val apiInstance = ApiApi()
val assetType : kotlin.String = assetType_example // kotlin.String | 
val categoryCode : kotlin.collections.List<kotlin.String> =  // kotlin.collections.List<kotlin.String> | 
val categoryType : kotlin.collections.List<kotlin.String> =  // kotlin.collections.List<kotlin.String> | 
val currency : kotlin.Int = 56 // kotlin.Int | 
val isin : kotlin.String = isin_example // kotlin.String | 
val limit : kotlin.Int = 56 // kotlin.Int | Number of results to return per page.
val market : kotlin.Int = 56 // kotlin.Int | 
val name : kotlin.String = name_example // kotlin.String | 
val offset : kotlin.Int = 56 // kotlin.Int | The initial index from which to return the results.
val status : kotlin.String = status_example // kotlin.String | 
val ticker : kotlin.String = ticker_example // kotlin.String | 
try {
    val result : PaginatedAssetListList = apiInstance.apiV2AssetsList(assetType, categoryCode, categoryType, currency, isin, limit, market, name, offset, status, ticker)
    println(result)
} catch (e: ClientException) {
    println("4xx response calling ApiApi#apiV2AssetsList")
    e.printStackTrace()
} catch (e: ServerException) {
    println("5xx response calling ApiApi#apiV2AssetsList")
    e.printStackTrace()
}
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **assetType** | **kotlin.String**|  | [optional] [enum: ETF, MUTUAL_FUND, STOCK]
 **categoryCode** | [**kotlin.collections.List&lt;kotlin.String&gt;**](kotlin.String.md)|  | [optional]
 **categoryType** | [**kotlin.collections.List&lt;kotlin.String&gt;**](kotlin.String.md)|  | [optional]
 **currency** | **kotlin.Int**|  | [optional]
 **isin** | **kotlin.String**|  | [optional]
 **limit** | **kotlin.Int**| Number of results to return per page. | [optional]
 **market** | **kotlin.Int**|  | [optional]
 **name** | **kotlin.String**|  | [optional]
 **offset** | **kotlin.Int**| The initial index from which to return the results. | [optional]
 **status** | **kotlin.String**|  | [optional] [enum: ACTIVE, DELETED, INACTIVE]
 **ticker** | **kotlin.String**|  | [optional]

### Return type

[**PaginatedAssetListList**](PaginatedAssetListList.md)

### Authorization


Configure cookieAuth:
    ApiClient.apiKey["Session"] = ""
    ApiClient.apiKeyPrefix["Session"] = ""
Configure jwtAuth:
    ApiClient.accessToken = ""
Configure tokenAuth:
    ApiClient.apiKey["Authorization"] = ""
    ApiClient.apiKeyPrefix["Authorization"] = ""

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

<a name="apiV2AssetsPerformanceList"></a>
# **apiV2AssetsPerformanceList**
> PaginatedAssetGrowthList apiV2AssetsPerformanceList(assetIdentifier, dateYearAfter, dateYearBefore, limit, offset)



Retrieve asset&#39;s yearly performance.  This View overwrites ListAPIView&#39;s &#39;list&#39; method because it doesn&#39;t have any hook that allows us to call &#39;get_asset_price_year_graph after the filtering is applied.

### Example
```kotlin
// Import classes:
//import org.openapitools.client.infrastructure.*
//import org.openapitools.client.models.*

val apiInstance = ApiApi()
val assetIdentifier : java.util.UUID = 38400000-8cf0-11bd-b23e-10b96e4ef00d // java.util.UUID | 
val dateYearAfter : java.math.BigDecimal = 8.14 // java.math.BigDecimal | 
val dateYearBefore : java.math.BigDecimal = 8.14 // java.math.BigDecimal | 
val limit : kotlin.Int = 56 // kotlin.Int | Number of results to return per page.
val offset : kotlin.Int = 56 // kotlin.Int | The initial index from which to return the results.
try {
    val result : PaginatedAssetGrowthList = apiInstance.apiV2AssetsPerformanceList(assetIdentifier, dateYearAfter, dateYearBefore, limit, offset)
    println(result)
} catch (e: ClientException) {
    println("4xx response calling ApiApi#apiV2AssetsPerformanceList")
    e.printStackTrace()
} catch (e: ServerException) {
    println("5xx response calling ApiApi#apiV2AssetsPerformanceList")
    e.printStackTrace()
}
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **assetIdentifier** | [**java.util.UUID**](.md)|  |
 **dateYearAfter** | **java.math.BigDecimal**|  | [optional]
 **dateYearBefore** | **java.math.BigDecimal**|  | [optional]
 **limit** | **kotlin.Int**| Number of results to return per page. | [optional]
 **offset** | **kotlin.Int**| The initial index from which to return the results. | [optional]

### Return type

[**PaginatedAssetGrowthList**](PaginatedAssetGrowthList.md)

### Authorization


Configure cookieAuth:
    ApiClient.apiKey["Session"] = ""
    ApiClient.apiKeyPrefix["Session"] = ""
Configure jwtAuth:
    ApiClient.accessToken = ""
Configure tokenAuth:
    ApiClient.apiKey["Authorization"] = ""
    ApiClient.apiKeyPrefix["Authorization"] = ""

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

<a name="apiV2AssetsPricesLatestRetrieve"></a>
# **apiV2AssetsPricesLatestRetrieve**
> Price apiV2AssetsPricesLatestRetrieve(assetIdentifier)



Prices (from an Asset) list view endpoints.  GET: Prices retrieve (rest framework builtin overriding get_object)

### Example
```kotlin
// Import classes:
//import org.openapitools.client.infrastructure.*
//import org.openapitools.client.models.*

val apiInstance = ApiApi()
val assetIdentifier : java.util.UUID = 38400000-8cf0-11bd-b23e-10b96e4ef00d // java.util.UUID | 
try {
    val result : Price = apiInstance.apiV2AssetsPricesLatestRetrieve(assetIdentifier)
    println(result)
} catch (e: ClientException) {
    println("4xx response calling ApiApi#apiV2AssetsPricesLatestRetrieve")
    e.printStackTrace()
} catch (e: ServerException) {
    println("5xx response calling ApiApi#apiV2AssetsPricesLatestRetrieve")
    e.printStackTrace()
}
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **assetIdentifier** | [**java.util.UUID**](.md)|  |

### Return type

[**Price**](Price.md)

### Authorization


Configure cookieAuth:
    ApiClient.apiKey["Session"] = ""
    ApiClient.apiKeyPrefix["Session"] = ""
Configure jwtAuth:
    ApiClient.accessToken = ""
Configure tokenAuth:
    ApiClient.apiKey["Authorization"] = ""
    ApiClient.apiKeyPrefix["Authorization"] = ""

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

<a name="apiV2AssetsPricesList"></a>
# **apiV2AssetsPricesList**
> PaginatedPriceList apiV2AssetsPricesList(assetIdentifier, dateAfter, dateBefore, datetimeAfter, datetimeBefore, limit, offset)



Prices (from an Asset) list view endpoints.  GET: Prices retrieve (rest framework builtin overriding get_object)

### Example
```kotlin
// Import classes:
//import org.openapitools.client.infrastructure.*
//import org.openapitools.client.models.*

val apiInstance = ApiApi()
val assetIdentifier : java.util.UUID = 38400000-8cf0-11bd-b23e-10b96e4ef00d // java.util.UUID | 
val dateAfter : java.time.LocalDate = 2013-10-20 // java.time.LocalDate | 
val dateBefore : java.time.LocalDate = 2013-10-20 // java.time.LocalDate | 
val datetimeAfter : java.time.OffsetDateTime = 2013-10-20T19:20:30+01:00 // java.time.OffsetDateTime | 
val datetimeBefore : java.time.OffsetDateTime = 2013-10-20T19:20:30+01:00 // java.time.OffsetDateTime | 
val limit : kotlin.Int = 56 // kotlin.Int | Number of results to return per page.
val offset : kotlin.Int = 56 // kotlin.Int | The initial index from which to return the results.
try {
    val result : PaginatedPriceList = apiInstance.apiV2AssetsPricesList(assetIdentifier, dateAfter, dateBefore, datetimeAfter, datetimeBefore, limit, offset)
    println(result)
} catch (e: ClientException) {
    println("4xx response calling ApiApi#apiV2AssetsPricesList")
    e.printStackTrace()
} catch (e: ServerException) {
    println("5xx response calling ApiApi#apiV2AssetsPricesList")
    e.printStackTrace()
}
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **assetIdentifier** | [**java.util.UUID**](.md)|  |
 **dateAfter** | **java.time.LocalDate**|  | [optional]
 **dateBefore** | **java.time.LocalDate**|  | [optional]
 **datetimeAfter** | **java.time.OffsetDateTime**|  | [optional]
 **datetimeBefore** | **java.time.OffsetDateTime**|  | [optional]
 **limit** | **kotlin.Int**| Number of results to return per page. | [optional]
 **offset** | **kotlin.Int**| The initial index from which to return the results. | [optional]

### Return type

[**PaginatedPriceList**](PaginatedPriceList.md)

### Authorization


Configure cookieAuth:
    ApiClient.apiKey["Session"] = ""
    ApiClient.apiKeyPrefix["Session"] = ""
Configure jwtAuth:
    ApiClient.accessToken = ""
Configure tokenAuth:
    ApiClient.apiKey["Authorization"] = ""
    ApiClient.apiKeyPrefix["Authorization"] = ""

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

<a name="apiV2AssetsRetrieve"></a>
# **apiV2AssetsRetrieve**
> AssetDetail apiV2AssetsRetrieve(assetIdentifier)



Allows get an asset instance by * UUID * ISIN * ISIN &amp; MARKET_CODE * ISIN &amp; MARKET_CODE &amp; CURRENCY_CODE  Examples:     * assets/a66633d7-4418-4c85-9582-01c80df531d4/     * assets/IE00B579F325/     * assets/IE00B579F325_XETR_GBP/     * assets/IE00B579F325_XETR/

### Example
```kotlin
// Import classes:
//import org.openapitools.client.infrastructure.*
//import org.openapitools.client.models.*

val apiInstance = ApiApi()
val assetIdentifier : java.util.UUID = 38400000-8cf0-11bd-b23e-10b96e4ef00d // java.util.UUID | 
try {
    val result : AssetDetail = apiInstance.apiV2AssetsRetrieve(assetIdentifier)
    println(result)
} catch (e: ClientException) {
    println("4xx response calling ApiApi#apiV2AssetsRetrieve")
    e.printStackTrace()
} catch (e: ServerException) {
    println("5xx response calling ApiApi#apiV2AssetsRetrieve")
    e.printStackTrace()
}
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **assetIdentifier** | [**java.util.UUID**](.md)|  |

### Return type

[**AssetDetail**](AssetDetail.md)

### Authorization


Configure cookieAuth:
    ApiClient.apiKey["Session"] = ""
    ApiClient.apiKeyPrefix["Session"] = ""
Configure jwtAuth:
    ApiClient.accessToken = ""
Configure tokenAuth:
    ApiClient.apiKey["Authorization"] = ""
    ApiClient.apiKeyPrefix["Authorization"] = ""

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

<a name="apiV2BillingInvoicesList"></a>
# **apiV2BillingInvoicesList**
> PaginatedInvoiceListList apiV2BillingInvoicesList(dateFrom, dateTo, limit, offset, status)



### Example
```kotlin
// Import classes:
//import org.openapitools.client.infrastructure.*
//import org.openapitools.client.models.*

val apiInstance = ApiApi()
val dateFrom : java.time.LocalDate = 2013-10-20 // java.time.LocalDate | 
val dateTo : java.time.LocalDate = 2013-10-20 // java.time.LocalDate | 
val limit : kotlin.Int = 56 // kotlin.Int | Number of results to return per page.
val offset : kotlin.Int = 56 // kotlin.Int | The initial index from which to return the results.
val status : kotlin.String = status_example // kotlin.String | 
try {
    val result : PaginatedInvoiceListList = apiInstance.apiV2BillingInvoicesList(dateFrom, dateTo, limit, offset, status)
    println(result)
} catch (e: ClientException) {
    println("4xx response calling ApiApi#apiV2BillingInvoicesList")
    e.printStackTrace()
} catch (e: ServerException) {
    println("5xx response calling ApiApi#apiV2BillingInvoicesList")
    e.printStackTrace()
}
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **dateFrom** | **java.time.LocalDate**|  | [optional]
 **dateTo** | **java.time.LocalDate**|  | [optional]
 **limit** | **kotlin.Int**| Number of results to return per page. | [optional]
 **offset** | **kotlin.Int**| The initial index from which to return the results. | [optional]
 **status** | **kotlin.String**|  | [optional] [enum: CHARGED, PENDING]

### Return type

[**PaginatedInvoiceListList**](PaginatedInvoiceListList.md)

### Authorization


Configure cookieAuth:
    ApiClient.apiKey["Session"] = ""
    ApiClient.apiKeyPrefix["Session"] = ""
Configure jwtAuth:
    ApiClient.accessToken = ""
Configure tokenAuth:
    ApiClient.apiKey["Authorization"] = ""
    ApiClient.apiKeyPrefix["Authorization"] = ""

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

<a name="apiV2BillingInvoicesRetrieve"></a>
# **apiV2BillingInvoicesRetrieve**
> InvoiceDetails apiV2BillingInvoicesRetrieve(uuid, format)



This mixin implements binary responses. It supports PDF and Base64. It can be adapted to any django View that implements the retrieve method

### Example
```kotlin
// Import classes:
//import org.openapitools.client.infrastructure.*
//import org.openapitools.client.models.*

val apiInstance = ApiApi()
val uuid : java.util.UUID = 38400000-8cf0-11bd-b23e-10b96e4ef00d // java.util.UUID | 
val format : kotlin.String = format_example // kotlin.String | 
try {
    val result : InvoiceDetails = apiInstance.apiV2BillingInvoicesRetrieve(uuid, format)
    println(result)
} catch (e: ClientException) {
    println("4xx response calling ApiApi#apiV2BillingInvoicesRetrieve")
    e.printStackTrace()
} catch (e: ServerException) {
    println("5xx response calling ApiApi#apiV2BillingInvoicesRetrieve")
    e.printStackTrace()
}
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **uuid** | [**java.util.UUID**](.md)|  |
 **format** | **kotlin.String**|  | [optional] [enum: base64, json, pdf]

### Return type

[**InvoiceDetails**](InvoiceDetails.md)

### Authorization


Configure cookieAuth:
    ApiClient.apiKey["Session"] = ""
    ApiClient.apiKeyPrefix["Session"] = ""
Configure jwtAuth:
    ApiClient.accessToken = ""
Configure tokenAuth:
    ApiClient.apiKey["Authorization"] = ""
    ApiClient.apiKeyPrefix["Authorization"] = ""

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json, application/pdf, text/plain

<a name="apiV2BrokerOrdersCreate"></a>
# **apiV2BrokerOrdersCreate**
> CreateOrder apiV2BrokerOrdersCreate(portfolioUuid, createOrder)



### Example
```kotlin
// Import classes:
//import org.openapitools.client.infrastructure.*
//import org.openapitools.client.models.*

val apiInstance = ApiApi()
val portfolioUuid : java.util.UUID = 38400000-8cf0-11bd-b23e-10b96e4ef00d // java.util.UUID | 
val createOrder : CreateOrder =  // CreateOrder | 
try {
    val result : CreateOrder = apiInstance.apiV2BrokerOrdersCreate(portfolioUuid, createOrder)
    println(result)
} catch (e: ClientException) {
    println("4xx response calling ApiApi#apiV2BrokerOrdersCreate")
    e.printStackTrace()
} catch (e: ServerException) {
    println("5xx response calling ApiApi#apiV2BrokerOrdersCreate")
    e.printStackTrace()
}
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **portfolioUuid** | [**java.util.UUID**](.md)|  |
 **createOrder** | [**CreateOrder**](CreateOrder.md)|  |

### Return type

[**CreateOrder**](CreateOrder.md)

### Authorization


Configure cookieAuth:
    ApiClient.apiKey["Session"] = ""
    ApiClient.apiKeyPrefix["Session"] = ""
Configure jwtAuth:
    ApiClient.accessToken = ""
Configure tokenAuth:
    ApiClient.apiKey["Authorization"] = ""
    ApiClient.apiKeyPrefix["Authorization"] = ""

### HTTP request headers

 - **Content-Type**: application/json, application/x-www-form-urlencoded, multipart/form-data
 - **Accept**: application/json

<a name="apiV2BrokerOrdersDestroy"></a>
# **apiV2BrokerOrdersDestroy**
> apiV2BrokerOrdersDestroy(portfolioUuid, uuid)



Cancel or request cancellation to the broker

### Example
```kotlin
// Import classes:
//import org.openapitools.client.infrastructure.*
//import org.openapitools.client.models.*

val apiInstance = ApiApi()
val portfolioUuid : java.util.UUID = 38400000-8cf0-11bd-b23e-10b96e4ef00d // java.util.UUID | 
val uuid : java.util.UUID = 38400000-8cf0-11bd-b23e-10b96e4ef00d // java.util.UUID | 
try {
    apiInstance.apiV2BrokerOrdersDestroy(portfolioUuid, uuid)
} catch (e: ClientException) {
    println("4xx response calling ApiApi#apiV2BrokerOrdersDestroy")
    e.printStackTrace()
} catch (e: ServerException) {
    println("5xx response calling ApiApi#apiV2BrokerOrdersDestroy")
    e.printStackTrace()
}
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **portfolioUuid** | [**java.util.UUID**](.md)|  |
 **uuid** | [**java.util.UUID**](.md)|  |

### Return type

null (empty response body)

### Authorization


Configure cookieAuth:
    ApiClient.apiKey["Session"] = ""
    ApiClient.apiKeyPrefix["Session"] = ""
Configure jwtAuth:
    ApiClient.accessToken = ""
Configure tokenAuth:
    ApiClient.apiKey["Authorization"] = ""
    ApiClient.apiKeyPrefix["Authorization"] = ""

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: Not defined

<a name="apiV2BrokerOrdersList"></a>
# **apiV2BrokerOrdersList**
> PaginatedOrderListList apiV2BrokerOrdersList(portfolioUuid, adviceExternalId, asset, completedAfter, completedBefore, extraData, limit, offset, portfolio, status)



### Example
```kotlin
// Import classes:
//import org.openapitools.client.infrastructure.*
//import org.openapitools.client.models.*

val apiInstance = ApiApi()
val portfolioUuid : java.util.UUID = 38400000-8cf0-11bd-b23e-10b96e4ef00d // java.util.UUID | 
val adviceExternalId : kotlin.String = adviceExternalId_example // kotlin.String | 
val asset : kotlin.String = asset_example // kotlin.String | 
val completedAfter : java.time.LocalDate = 2013-10-20 // java.time.LocalDate | 
val completedBefore : java.time.LocalDate = 2013-10-20 // java.time.LocalDate | 
val extraData : kotlin.collections.Map<kotlin.String, kotlin.Any> = Object // kotlin.collections.Map<kotlin.String, kotlin.Any> | Additional order attributes for the specific portal
val limit : kotlin.Int = 56 // kotlin.Int | Number of results to return per page.
val offset : kotlin.Int = 56 // kotlin.Int | The initial index from which to return the results.
val portfolio : kotlin.String = portfolio_example // kotlin.String | 
val status : kotlin.String = status_example // kotlin.String | 
try {
    val result : PaginatedOrderListList = apiInstance.apiV2BrokerOrdersList(portfolioUuid, adviceExternalId, asset, completedAfter, completedBefore, extraData, limit, offset, portfolio, status)
    println(result)
} catch (e: ClientException) {
    println("4xx response calling ApiApi#apiV2BrokerOrdersList")
    e.printStackTrace()
} catch (e: ServerException) {
    println("5xx response calling ApiApi#apiV2BrokerOrdersList")
    e.printStackTrace()
}
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **portfolioUuid** | [**java.util.UUID**](.md)|  |
 **adviceExternalId** | **kotlin.String**|  | [optional]
 **asset** | **kotlin.String**|  | [optional]
 **completedAfter** | **java.time.LocalDate**|  | [optional]
 **completedBefore** | **java.time.LocalDate**|  | [optional]
 **extraData** | [**kotlin.collections.Map&lt;kotlin.String, kotlin.Any&gt;**](kotlin.Any.md)| Additional order attributes for the specific portal | [optional]
 **limit** | **kotlin.Int**| Number of results to return per page. | [optional]
 **offset** | **kotlin.Int**| The initial index from which to return the results. | [optional]
 **portfolio** | **kotlin.String**|  | [optional]
 **status** | **kotlin.String**|  | [optional]

### Return type

[**PaginatedOrderListList**](PaginatedOrderListList.md)

### Authorization


Configure cookieAuth:
    ApiClient.apiKey["Session"] = ""
    ApiClient.apiKeyPrefix["Session"] = ""
Configure jwtAuth:
    ApiClient.accessToken = ""
Configure tokenAuth:
    ApiClient.apiKey["Authorization"] = ""
    ApiClient.apiKeyPrefix["Authorization"] = ""

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

<a name="apiV2BrokerOrdersRetrieve"></a>
# **apiV2BrokerOrdersRetrieve**
> OrderList apiV2BrokerOrdersRetrieve(portfolioUuid, uuid)



### Example
```kotlin
// Import classes:
//import org.openapitools.client.infrastructure.*
//import org.openapitools.client.models.*

val apiInstance = ApiApi()
val portfolioUuid : java.util.UUID = 38400000-8cf0-11bd-b23e-10b96e4ef00d // java.util.UUID | 
val uuid : java.util.UUID = 38400000-8cf0-11bd-b23e-10b96e4ef00d // java.util.UUID | 
try {
    val result : OrderList = apiInstance.apiV2BrokerOrdersRetrieve(portfolioUuid, uuid)
    println(result)
} catch (e: ClientException) {
    println("4xx response calling ApiApi#apiV2BrokerOrdersRetrieve")
    e.printStackTrace()
} catch (e: ServerException) {
    println("5xx response calling ApiApi#apiV2BrokerOrdersRetrieve")
    e.printStackTrace()
}
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **portfolioUuid** | [**java.util.UUID**](.md)|  |
 **uuid** | [**java.util.UUID**](.md)|  |

### Return type

[**OrderList**](OrderList.md)

### Authorization


Configure cookieAuth:
    ApiClient.apiKey["Session"] = ""
    ApiClient.apiKeyPrefix["Session"] = ""
Configure jwtAuth:
    ApiClient.accessToken = ""
Configure tokenAuth:
    ApiClient.apiKey["Authorization"] = ""
    ApiClient.apiKeyPrefix["Authorization"] = ""

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

<a name="apiV2ClientsActivitiesList"></a>
# **apiV2ClientsActivitiesList**
> PaginatedFeedActivityListList apiV2ClientsActivitiesList(clientUuid, limit, offset, target)



### Example
```kotlin
// Import classes:
//import org.openapitools.client.infrastructure.*
//import org.openapitools.client.models.*

val apiInstance = ApiApi()
val clientUuid : java.util.UUID = 38400000-8cf0-11bd-b23e-10b96e4ef00d // java.util.UUID | 
val limit : kotlin.Int = 56 // kotlin.Int | Number of results to return per page.
val offset : kotlin.Int = 56 // kotlin.Int | The initial index from which to return the results.
val target : kotlin.collections.List<kotlin.String> =  // kotlin.collections.List<kotlin.String> | 
try {
    val result : PaginatedFeedActivityListList = apiInstance.apiV2ClientsActivitiesList(clientUuid, limit, offset, target)
    println(result)
} catch (e: ClientException) {
    println("4xx response calling ApiApi#apiV2ClientsActivitiesList")
    e.printStackTrace()
} catch (e: ServerException) {
    println("5xx response calling ApiApi#apiV2ClientsActivitiesList")
    e.printStackTrace()
}
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **clientUuid** | [**java.util.UUID**](.md)|  |
 **limit** | **kotlin.Int**| Number of results to return per page. | [optional]
 **offset** | **kotlin.Int**| The initial index from which to return the results. | [optional]
 **target** | [**kotlin.collections.List&lt;kotlin.String&gt;**](kotlin.String.md)|  | [optional] [enum: , cashcorporateaction, charge, deposit, portfolio, rebalance, sharescorporateaction, withdrawal]

### Return type

[**PaginatedFeedActivityListList**](PaginatedFeedActivityListList.md)

### Authorization


Configure cookieAuth:
    ApiClient.apiKey["Session"] = ""
    ApiClient.apiKeyPrefix["Session"] = ""
Configure jwtAuth:
    ApiClient.accessToken = ""
Configure tokenAuth:
    ApiClient.apiKey["Authorization"] = ""
    ApiClient.apiKeyPrefix["Authorization"] = ""

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

<a name="apiV2ClientsActivitiesRetrieve"></a>
# **apiV2ClientsActivitiesRetrieve**
> FeedActivityList apiV2ClientsActivitiesRetrieve(clientUuid, uuid)



### Example
```kotlin
// Import classes:
//import org.openapitools.client.infrastructure.*
//import org.openapitools.client.models.*

val apiInstance = ApiApi()
val clientUuid : java.util.UUID = 38400000-8cf0-11bd-b23e-10b96e4ef00d // java.util.UUID | 
val uuid : java.util.UUID = 38400000-8cf0-11bd-b23e-10b96e4ef00d // java.util.UUID | 
try {
    val result : FeedActivityList = apiInstance.apiV2ClientsActivitiesRetrieve(clientUuid, uuid)
    println(result)
} catch (e: ClientException) {
    println("4xx response calling ApiApi#apiV2ClientsActivitiesRetrieve")
    e.printStackTrace()
} catch (e: ServerException) {
    println("5xx response calling ApiApi#apiV2ClientsActivitiesRetrieve")
    e.printStackTrace()
}
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **clientUuid** | [**java.util.UUID**](.md)|  |
 **uuid** | [**java.util.UUID**](.md)|  |

### Return type

[**FeedActivityList**](FeedActivityList.md)

### Authorization


Configure cookieAuth:
    ApiClient.apiKey["Session"] = ""
    ApiClient.apiKeyPrefix["Session"] = ""
Configure jwtAuth:
    ApiClient.accessToken = ""
Configure tokenAuth:
    ApiClient.apiKey["Authorization"] = ""
    ApiClient.apiKeyPrefix["Authorization"] = ""

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

<a name="apiV2ClientsAdviceEnginesList"></a>
# **apiV2ClientsAdviceEnginesList**
> apiV2ClientsAdviceEnginesList(clientUuid, uuid)



### Example
```kotlin
// Import classes:
//import org.openapitools.client.infrastructure.*
//import org.openapitools.client.models.*

val apiInstance = ApiApi()
val clientUuid : java.util.UUID = 38400000-8cf0-11bd-b23e-10b96e4ef00d // java.util.UUID | 
val uuid : java.util.UUID = 38400000-8cf0-11bd-b23e-10b96e4ef00d // java.util.UUID | 
try {
    apiInstance.apiV2ClientsAdviceEnginesList(clientUuid, uuid)
} catch (e: ClientException) {
    println("4xx response calling ApiApi#apiV2ClientsAdviceEnginesList")
    e.printStackTrace()
} catch (e: ServerException) {
    println("5xx response calling ApiApi#apiV2ClientsAdviceEnginesList")
    e.printStackTrace()
}
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **clientUuid** | [**java.util.UUID**](.md)|  |
 **uuid** | [**java.util.UUID**](.md)|  |

### Return type

null (empty response body)

### Authorization


Configure cookieAuth:
    ApiClient.apiKey["Session"] = ""
    ApiClient.apiKeyPrefix["Session"] = ""
Configure jwtAuth:
    ApiClient.accessToken = ""
Configure tokenAuth:
    ApiClient.apiKey["Authorization"] = ""
    ApiClient.apiKeyPrefix["Authorization"] = ""

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: Not defined

<a name="apiV2ClientsAdviceEnginesRetrieve"></a>
# **apiV2ClientsAdviceEnginesRetrieve**
> apiV2ClientsAdviceEnginesRetrieve(clientUuid, uuid)



### Example
```kotlin
// Import classes:
//import org.openapitools.client.infrastructure.*
//import org.openapitools.client.models.*

val apiInstance = ApiApi()
val clientUuid : java.util.UUID = 38400000-8cf0-11bd-b23e-10b96e4ef00d // java.util.UUID | 
val uuid : java.util.UUID = 38400000-8cf0-11bd-b23e-10b96e4ef00d // java.util.UUID | 
try {
    apiInstance.apiV2ClientsAdviceEnginesRetrieve(clientUuid, uuid)
} catch (e: ClientException) {
    println("4xx response calling ApiApi#apiV2ClientsAdviceEnginesRetrieve")
    e.printStackTrace()
} catch (e: ServerException) {
    println("5xx response calling ApiApi#apiV2ClientsAdviceEnginesRetrieve")
    e.printStackTrace()
}
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **clientUuid** | [**java.util.UUID**](.md)|  |
 **uuid** | [**java.util.UUID**](.md)|  |

### Return type

null (empty response body)

### Authorization


Configure cookieAuth:
    ApiClient.apiKey["Session"] = ""
    ApiClient.apiKeyPrefix["Session"] = ""
Configure jwtAuth:
    ApiClient.accessToken = ""
Configure tokenAuth:
    ApiClient.apiKey["Authorization"] = ""
    ApiClient.apiKeyPrefix["Authorization"] = ""

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: Not defined

<a name="apiV2ClientsBillingFeesCreate"></a>
# **apiV2ClientsBillingFeesCreate**
> InvestorFee apiV2ClientsBillingFeesCreate(clientUuid, investorFeeUuid, investorFee)



### Example
```kotlin
// Import classes:
//import org.openapitools.client.infrastructure.*
//import org.openapitools.client.models.*

val apiInstance = ApiApi()
val clientUuid : java.util.UUID = 38400000-8cf0-11bd-b23e-10b96e4ef00d // java.util.UUID | 
val investorFeeUuid : java.util.UUID = 38400000-8cf0-11bd-b23e-10b96e4ef00d // java.util.UUID | 
val investorFee : InvestorFee =  // InvestorFee | 
try {
    val result : InvestorFee = apiInstance.apiV2ClientsBillingFeesCreate(clientUuid, investorFeeUuid, investorFee)
    println(result)
} catch (e: ClientException) {
    println("4xx response calling ApiApi#apiV2ClientsBillingFeesCreate")
    e.printStackTrace()
} catch (e: ServerException) {
    println("5xx response calling ApiApi#apiV2ClientsBillingFeesCreate")
    e.printStackTrace()
}
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **clientUuid** | [**java.util.UUID**](.md)|  |
 **investorFeeUuid** | [**java.util.UUID**](.md)|  |
 **investorFee** | [**InvestorFee**](InvestorFee.md)|  |

### Return type

[**InvestorFee**](InvestorFee.md)

### Authorization


Configure cookieAuth:
    ApiClient.apiKey["Session"] = ""
    ApiClient.apiKeyPrefix["Session"] = ""
Configure jwtAuth:
    ApiClient.accessToken = ""
Configure tokenAuth:
    ApiClient.apiKey["Authorization"] = ""
    ApiClient.apiKeyPrefix["Authorization"] = ""

### HTTP request headers

 - **Content-Type**: application/json, application/x-www-form-urlencoded, multipart/form-data
 - **Accept**: application/json

<a name="apiV2ClientsBillingFeesDestroy"></a>
# **apiV2ClientsBillingFeesDestroy**
> apiV2ClientsBillingFeesDestroy(clientUuid, investorFeeUuid)



### Example
```kotlin
// Import classes:
//import org.openapitools.client.infrastructure.*
//import org.openapitools.client.models.*

val apiInstance = ApiApi()
val clientUuid : java.util.UUID = 38400000-8cf0-11bd-b23e-10b96e4ef00d // java.util.UUID | 
val investorFeeUuid : java.util.UUID = 38400000-8cf0-11bd-b23e-10b96e4ef00d // java.util.UUID | 
try {
    apiInstance.apiV2ClientsBillingFeesDestroy(clientUuid, investorFeeUuid)
} catch (e: ClientException) {
    println("4xx response calling ApiApi#apiV2ClientsBillingFeesDestroy")
    e.printStackTrace()
} catch (e: ServerException) {
    println("5xx response calling ApiApi#apiV2ClientsBillingFeesDestroy")
    e.printStackTrace()
}
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **clientUuid** | [**java.util.UUID**](.md)|  |
 **investorFeeUuid** | [**java.util.UUID**](.md)|  |

### Return type

null (empty response body)

### Authorization


Configure cookieAuth:
    ApiClient.apiKey["Session"] = ""
    ApiClient.apiKeyPrefix["Session"] = ""
Configure jwtAuth:
    ApiClient.accessToken = ""
Configure tokenAuth:
    ApiClient.apiKey["Authorization"] = ""
    ApiClient.apiKeyPrefix["Authorization"] = ""

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: Not defined

<a name="apiV2ClientsBillingFeesList"></a>
# **apiV2ClientsBillingFeesList**
> PaginatedInvestorFeeList apiV2ClientsBillingFeesList(clientUuid, investorFeeUuid, limit, offset)



### Example
```kotlin
// Import classes:
//import org.openapitools.client.infrastructure.*
//import org.openapitools.client.models.*

val apiInstance = ApiApi()
val clientUuid : java.util.UUID = 38400000-8cf0-11bd-b23e-10b96e4ef00d // java.util.UUID | 
val investorFeeUuid : java.util.UUID = 38400000-8cf0-11bd-b23e-10b96e4ef00d // java.util.UUID | 
val limit : kotlin.Int = 56 // kotlin.Int | Number of results to return per page.
val offset : kotlin.Int = 56 // kotlin.Int | The initial index from which to return the results.
try {
    val result : PaginatedInvestorFeeList = apiInstance.apiV2ClientsBillingFeesList(clientUuid, investorFeeUuid, limit, offset)
    println(result)
} catch (e: ClientException) {
    println("4xx response calling ApiApi#apiV2ClientsBillingFeesList")
    e.printStackTrace()
} catch (e: ServerException) {
    println("5xx response calling ApiApi#apiV2ClientsBillingFeesList")
    e.printStackTrace()
}
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **clientUuid** | [**java.util.UUID**](.md)|  |
 **investorFeeUuid** | [**java.util.UUID**](.md)|  |
 **limit** | **kotlin.Int**| Number of results to return per page. | [optional]
 **offset** | **kotlin.Int**| The initial index from which to return the results. | [optional]

### Return type

[**PaginatedInvestorFeeList**](PaginatedInvestorFeeList.md)

### Authorization


Configure cookieAuth:
    ApiClient.apiKey["Session"] = ""
    ApiClient.apiKeyPrefix["Session"] = ""
Configure jwtAuth:
    ApiClient.accessToken = ""
Configure tokenAuth:
    ApiClient.apiKey["Authorization"] = ""
    ApiClient.apiKeyPrefix["Authorization"] = ""

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

<a name="apiV2ClientsBillingFeesPartialUpdate"></a>
# **apiV2ClientsBillingFeesPartialUpdate**
> InvestorFee apiV2ClientsBillingFeesPartialUpdate(clientUuid, investorFeeUuid, patchedInvestorFee)



### Example
```kotlin
// Import classes:
//import org.openapitools.client.infrastructure.*
//import org.openapitools.client.models.*

val apiInstance = ApiApi()
val clientUuid : java.util.UUID = 38400000-8cf0-11bd-b23e-10b96e4ef00d // java.util.UUID | 
val investorFeeUuid : java.util.UUID = 38400000-8cf0-11bd-b23e-10b96e4ef00d // java.util.UUID | 
val patchedInvestorFee : PatchedInvestorFee =  // PatchedInvestorFee | 
try {
    val result : InvestorFee = apiInstance.apiV2ClientsBillingFeesPartialUpdate(clientUuid, investorFeeUuid, patchedInvestorFee)
    println(result)
} catch (e: ClientException) {
    println("4xx response calling ApiApi#apiV2ClientsBillingFeesPartialUpdate")
    e.printStackTrace()
} catch (e: ServerException) {
    println("5xx response calling ApiApi#apiV2ClientsBillingFeesPartialUpdate")
    e.printStackTrace()
}
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **clientUuid** | [**java.util.UUID**](.md)|  |
 **investorFeeUuid** | [**java.util.UUID**](.md)|  |
 **patchedInvestorFee** | [**PatchedInvestorFee**](PatchedInvestorFee.md)|  | [optional]

### Return type

[**InvestorFee**](InvestorFee.md)

### Authorization


Configure cookieAuth:
    ApiClient.apiKey["Session"] = ""
    ApiClient.apiKeyPrefix["Session"] = ""
Configure jwtAuth:
    ApiClient.accessToken = ""
Configure tokenAuth:
    ApiClient.apiKey["Authorization"] = ""
    ApiClient.apiKeyPrefix["Authorization"] = ""

### HTTP request headers

 - **Content-Type**: application/json, application/x-www-form-urlencoded, multipart/form-data
 - **Accept**: application/json

<a name="apiV2ClientsBillingFeesRetrieve"></a>
# **apiV2ClientsBillingFeesRetrieve**
> InvestorFee apiV2ClientsBillingFeesRetrieve(clientUuid, investorFeeUuid)



### Example
```kotlin
// Import classes:
//import org.openapitools.client.infrastructure.*
//import org.openapitools.client.models.*

val apiInstance = ApiApi()
val clientUuid : java.util.UUID = 38400000-8cf0-11bd-b23e-10b96e4ef00d // java.util.UUID | 
val investorFeeUuid : java.util.UUID = 38400000-8cf0-11bd-b23e-10b96e4ef00d // java.util.UUID | 
try {
    val result : InvestorFee = apiInstance.apiV2ClientsBillingFeesRetrieve(clientUuid, investorFeeUuid)
    println(result)
} catch (e: ClientException) {
    println("4xx response calling ApiApi#apiV2ClientsBillingFeesRetrieve")
    e.printStackTrace()
} catch (e: ServerException) {
    println("5xx response calling ApiApi#apiV2ClientsBillingFeesRetrieve")
    e.printStackTrace()
}
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **clientUuid** | [**java.util.UUID**](.md)|  |
 **investorFeeUuid** | [**java.util.UUID**](.md)|  |

### Return type

[**InvestorFee**](InvestorFee.md)

### Authorization


Configure cookieAuth:
    ApiClient.apiKey["Session"] = ""
    ApiClient.apiKeyPrefix["Session"] = ""
Configure jwtAuth:
    ApiClient.accessToken = ""
Configure tokenAuth:
    ApiClient.apiKey["Authorization"] = ""
    ApiClient.apiKeyPrefix["Authorization"] = ""

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

<a name="apiV2ClientsBillingFeesUpdate"></a>
# **apiV2ClientsBillingFeesUpdate**
> InvestorFee apiV2ClientsBillingFeesUpdate(clientUuid, investorFeeUuid, investorFee)



### Example
```kotlin
// Import classes:
//import org.openapitools.client.infrastructure.*
//import org.openapitools.client.models.*

val apiInstance = ApiApi()
val clientUuid : java.util.UUID = 38400000-8cf0-11bd-b23e-10b96e4ef00d // java.util.UUID | 
val investorFeeUuid : java.util.UUID = 38400000-8cf0-11bd-b23e-10b96e4ef00d // java.util.UUID | 
val investorFee : InvestorFee =  // InvestorFee | 
try {
    val result : InvestorFee = apiInstance.apiV2ClientsBillingFeesUpdate(clientUuid, investorFeeUuid, investorFee)
    println(result)
} catch (e: ClientException) {
    println("4xx response calling ApiApi#apiV2ClientsBillingFeesUpdate")
    e.printStackTrace()
} catch (e: ServerException) {
    println("5xx response calling ApiApi#apiV2ClientsBillingFeesUpdate")
    e.printStackTrace()
}
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **clientUuid** | [**java.util.UUID**](.md)|  |
 **investorFeeUuid** | [**java.util.UUID**](.md)|  |
 **investorFee** | [**InvestorFee**](InvestorFee.md)|  |

### Return type

[**InvestorFee**](InvestorFee.md)

### Authorization


Configure cookieAuth:
    ApiClient.apiKey["Session"] = ""
    ApiClient.apiKeyPrefix["Session"] = ""
Configure jwtAuth:
    ApiClient.accessToken = ""
Configure tokenAuth:
    ApiClient.apiKey["Authorization"] = ""
    ApiClient.apiKeyPrefix["Authorization"] = ""

### HTTP request headers

 - **Content-Type**: application/json, application/x-www-form-urlencoded, multipart/form-data
 - **Accept**: application/json

<a name="apiV2ClientsBillingInvoicesList"></a>
# **apiV2ClientsBillingInvoicesList**
> PaginatedInvoiceListList apiV2ClientsBillingInvoicesList(clientUuid, format, limit, offset)



This mixin implements binary responses. It supports PDF and Base64. It can be adapted to any django View that implements the retrieve method

### Example
```kotlin
// Import classes:
//import org.openapitools.client.infrastructure.*
//import org.openapitools.client.models.*

val apiInstance = ApiApi()
val clientUuid : java.util.UUID = 38400000-8cf0-11bd-b23e-10b96e4ef00d // java.util.UUID | 
val format : kotlin.String = format_example // kotlin.String | 
val limit : kotlin.Int = 56 // kotlin.Int | Number of results to return per page.
val offset : kotlin.Int = 56 // kotlin.Int | The initial index from which to return the results.
try {
    val result : PaginatedInvoiceListList = apiInstance.apiV2ClientsBillingInvoicesList(clientUuid, format, limit, offset)
    println(result)
} catch (e: ClientException) {
    println("4xx response calling ApiApi#apiV2ClientsBillingInvoicesList")
    e.printStackTrace()
} catch (e: ServerException) {
    println("5xx response calling ApiApi#apiV2ClientsBillingInvoicesList")
    e.printStackTrace()
}
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **clientUuid** | [**java.util.UUID**](.md)|  |
 **format** | **kotlin.String**|  | [optional] [enum: base64, json, pdf]
 **limit** | **kotlin.Int**| Number of results to return per page. | [optional]
 **offset** | **kotlin.Int**| The initial index from which to return the results. | [optional]

### Return type

[**PaginatedInvoiceListList**](PaginatedInvoiceListList.md)

### Authorization


Configure cookieAuth:
    ApiClient.apiKey["Session"] = ""
    ApiClient.apiKeyPrefix["Session"] = ""
Configure jwtAuth:
    ApiClient.accessToken = ""
Configure tokenAuth:
    ApiClient.apiKey["Authorization"] = ""
    ApiClient.apiKeyPrefix["Authorization"] = ""

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json, application/pdf, text/plain

<a name="apiV2ClientsBillingInvoicesRetrieve"></a>
# **apiV2ClientsBillingInvoicesRetrieve**
> InvoiceList apiV2ClientsBillingInvoicesRetrieve(clientUuid, uuid, format)



This mixin implements binary responses. It supports PDF and Base64. It can be adapted to any django View that implements the retrieve method

### Example
```kotlin
// Import classes:
//import org.openapitools.client.infrastructure.*
//import org.openapitools.client.models.*

val apiInstance = ApiApi()
val clientUuid : java.util.UUID = 38400000-8cf0-11bd-b23e-10b96e4ef00d // java.util.UUID | 
val uuid : java.util.UUID = 38400000-8cf0-11bd-b23e-10b96e4ef00d // java.util.UUID | 
val format : kotlin.String = format_example // kotlin.String | 
try {
    val result : InvoiceList = apiInstance.apiV2ClientsBillingInvoicesRetrieve(clientUuid, uuid, format)
    println(result)
} catch (e: ClientException) {
    println("4xx response calling ApiApi#apiV2ClientsBillingInvoicesRetrieve")
    e.printStackTrace()
} catch (e: ServerException) {
    println("5xx response calling ApiApi#apiV2ClientsBillingInvoicesRetrieve")
    e.printStackTrace()
}
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **clientUuid** | [**java.util.UUID**](.md)|  |
 **uuid** | [**java.util.UUID**](.md)|  |
 **format** | **kotlin.String**|  | [optional] [enum: base64, json, pdf]

### Return type

[**InvoiceList**](InvoiceList.md)

### Authorization


Configure cookieAuth:
    ApiClient.apiKey["Session"] = ""
    ApiClient.apiKeyPrefix["Session"] = ""
Configure jwtAuth:
    ApiClient.accessToken = ""
Configure tokenAuth:
    ApiClient.apiKey["Authorization"] = ""
    ApiClient.apiKeyPrefix["Authorization"] = ""

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json, application/pdf, text/plain

<a name="apiV2ClientsDocumentsCreate"></a>
# **apiV2ClientsDocumentsCreate**
> Document apiV2ClientsDocumentsCreate(clientUuid, uuid, name, docType, path, description)



Uploads a document for a certain user.  This call expects the files and parameters being sent as form/multipart encoding.

### Example
```kotlin
// Import classes:
//import org.openapitools.client.infrastructure.*
//import org.openapitools.client.models.*

val apiInstance = ApiApi()
val clientUuid : java.util.UUID = 38400000-8cf0-11bd-b23e-10b96e4ef00d // java.util.UUID | 
val uuid : java.util.UUID = 38400000-8cf0-11bd-b23e-10b96e4ef00d // java.util.UUID | 
val name : kotlin.String = name_example // kotlin.String | 
val docType : DocTypeEnum =  // DocTypeEnum | 
val path : java.net.URI = path_example // java.net.URI | 
val description : kotlin.String = description_example // kotlin.String | 
try {
    val result : Document = apiInstance.apiV2ClientsDocumentsCreate(clientUuid, uuid, name, docType, path, description)
    println(result)
} catch (e: ClientException) {
    println("4xx response calling ApiApi#apiV2ClientsDocumentsCreate")
    e.printStackTrace()
} catch (e: ServerException) {
    println("5xx response calling ApiApi#apiV2ClientsDocumentsCreate")
    e.printStackTrace()
}
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **clientUuid** | [**java.util.UUID**](.md)|  |
 **uuid** | [**java.util.UUID**](java.util.UUID.md)|  |
 **name** | **kotlin.String**|  |
 **docType** | [**DocTypeEnum**](DocTypeEnum.md)|  | [enum: ID_PERSONAL, BANK_DETAILS, EMPLOYMENT, MARITAL_STATUS, PENSION, LEGAL, TRANSFERS, MEDICAL, CONTRACT, OTHERS]
 **path** | **java.net.URI**|  |
 **description** | **kotlin.String**|  | [optional]

### Return type

[**Document**](Document.md)

### Authorization


Configure cookieAuth:
    ApiClient.apiKey["Session"] = ""
    ApiClient.apiKeyPrefix["Session"] = ""
Configure jwtAuth:
    ApiClient.accessToken = ""
Configure tokenAuth:
    ApiClient.apiKey["Authorization"] = ""
    ApiClient.apiKeyPrefix["Authorization"] = ""

### HTTP request headers

 - **Content-Type**: multipart/form-data
 - **Accept**: application/json

<a name="apiV2ClientsDocumentsDestroy"></a>
# **apiV2ClientsDocumentsDestroy**
> apiV2ClientsDocumentsDestroy(clientUuid, uuid)



### Example
```kotlin
// Import classes:
//import org.openapitools.client.infrastructure.*
//import org.openapitools.client.models.*

val apiInstance = ApiApi()
val clientUuid : java.util.UUID = 38400000-8cf0-11bd-b23e-10b96e4ef00d // java.util.UUID | 
val uuid : java.util.UUID = 38400000-8cf0-11bd-b23e-10b96e4ef00d // java.util.UUID | 
try {
    apiInstance.apiV2ClientsDocumentsDestroy(clientUuid, uuid)
} catch (e: ClientException) {
    println("4xx response calling ApiApi#apiV2ClientsDocumentsDestroy")
    e.printStackTrace()
} catch (e: ServerException) {
    println("5xx response calling ApiApi#apiV2ClientsDocumentsDestroy")
    e.printStackTrace()
}
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **clientUuid** | [**java.util.UUID**](.md)|  |
 **uuid** | [**java.util.UUID**](.md)|  |

### Return type

null (empty response body)

### Authorization


Configure cookieAuth:
    ApiClient.apiKey["Session"] = ""
    ApiClient.apiKeyPrefix["Session"] = ""
Configure jwtAuth:
    ApiClient.accessToken = ""
Configure tokenAuth:
    ApiClient.apiKey["Authorization"] = ""
    ApiClient.apiKeyPrefix["Authorization"] = ""

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: Not defined

<a name="apiV2ClientsDocumentsList"></a>
# **apiV2ClientsDocumentsList**
> PaginatedDocumentList apiV2ClientsDocumentsList(clientUuid, client, description, docType, extraData, limit, name, offset)



### Example
```kotlin
// Import classes:
//import org.openapitools.client.infrastructure.*
//import org.openapitools.client.models.*

val apiInstance = ApiApi()
val clientUuid : java.util.UUID = 38400000-8cf0-11bd-b23e-10b96e4ef00d // java.util.UUID | 
val client : kotlin.Int = 56 // kotlin.Int | 
val description : kotlin.String = description_example // kotlin.String | 
val docType : kotlin.collections.List<kotlin.String> =  // kotlin.collections.List<kotlin.String> | 
val extraData : kotlin.collections.Map<kotlin.String, kotlin.Any> = Object // kotlin.collections.Map<kotlin.String, kotlin.Any> | Additional document attributes for the specific portal
val limit : kotlin.Int = 56 // kotlin.Int | Number of results to return per page.
val name : kotlin.String = name_example // kotlin.String | 
val offset : kotlin.Int = 56 // kotlin.Int | The initial index from which to return the results.
try {
    val result : PaginatedDocumentList = apiInstance.apiV2ClientsDocumentsList(clientUuid, client, description, docType, extraData, limit, name, offset)
    println(result)
} catch (e: ClientException) {
    println("4xx response calling ApiApi#apiV2ClientsDocumentsList")
    e.printStackTrace()
} catch (e: ServerException) {
    println("5xx response calling ApiApi#apiV2ClientsDocumentsList")
    e.printStackTrace()
}
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **clientUuid** | [**java.util.UUID**](.md)|  |
 **client** | **kotlin.Int**|  | [optional]
 **description** | **kotlin.String**|  | [optional]
 **docType** | [**kotlin.collections.List&lt;kotlin.String&gt;**](kotlin.String.md)|  | [optional] [enum: BANK_DETAILS, CONTRACT, EMPLOYMENT, ID_PERSONAL, LEGAL, MARITAL_STATUS, MEDICAL, OTHERS, PENSION, TRANSFERS]
 **extraData** | [**kotlin.collections.Map&lt;kotlin.String, kotlin.Any&gt;**](kotlin.Any.md)| Additional document attributes for the specific portal | [optional]
 **limit** | **kotlin.Int**| Number of results to return per page. | [optional]
 **name** | **kotlin.String**|  | [optional]
 **offset** | **kotlin.Int**| The initial index from which to return the results. | [optional]

### Return type

[**PaginatedDocumentList**](PaginatedDocumentList.md)

### Authorization


Configure cookieAuth:
    ApiClient.apiKey["Session"] = ""
    ApiClient.apiKeyPrefix["Session"] = ""
Configure jwtAuth:
    ApiClient.accessToken = ""
Configure tokenAuth:
    ApiClient.apiKey["Authorization"] = ""
    ApiClient.apiKeyPrefix["Authorization"] = ""

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

<a name="apiV2ClientsDocumentsRetrieve"></a>
# **apiV2ClientsDocumentsRetrieve**
> Document apiV2ClientsDocumentsRetrieve(clientUuid, uuid)



### Example
```kotlin
// Import classes:
//import org.openapitools.client.infrastructure.*
//import org.openapitools.client.models.*

val apiInstance = ApiApi()
val clientUuid : java.util.UUID = 38400000-8cf0-11bd-b23e-10b96e4ef00d // java.util.UUID | 
val uuid : java.util.UUID = 38400000-8cf0-11bd-b23e-10b96e4ef00d // java.util.UUID | 
try {
    val result : Document = apiInstance.apiV2ClientsDocumentsRetrieve(clientUuid, uuid)
    println(result)
} catch (e: ClientException) {
    println("4xx response calling ApiApi#apiV2ClientsDocumentsRetrieve")
    e.printStackTrace()
} catch (e: ServerException) {
    println("5xx response calling ApiApi#apiV2ClientsDocumentsRetrieve")
    e.printStackTrace()
}
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **clientUuid** | [**java.util.UUID**](.md)|  |
 **uuid** | [**java.util.UUID**](.md)|  |

### Return type

[**Document**](Document.md)

### Authorization


Configure cookieAuth:
    ApiClient.apiKey["Session"] = ""
    ApiClient.apiKeyPrefix["Session"] = ""
Configure jwtAuth:
    ApiClient.accessToken = ""
Configure tokenAuth:
    ApiClient.apiKey["Authorization"] = ""
    ApiClient.apiKeyPrefix["Authorization"] = ""

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

<a name="apiV2ClientsMeVerifyEmailCreate"></a>
# **apiV2ClientsMeVerifyEmailCreate**
> EmailVerifyRequest apiV2ClientsMeVerifyEmailCreate(emailVerifyRequest)



Request e-mail account verification notification.

### Example
```kotlin
// Import classes:
//import org.openapitools.client.infrastructure.*
//import org.openapitools.client.models.*

val apiInstance = ApiApi()
val emailVerifyRequest : EmailVerifyRequest =  // EmailVerifyRequest | 
try {
    val result : EmailVerifyRequest = apiInstance.apiV2ClientsMeVerifyEmailCreate(emailVerifyRequest)
    println(result)
} catch (e: ClientException) {
    println("4xx response calling ApiApi#apiV2ClientsMeVerifyEmailCreate")
    e.printStackTrace()
} catch (e: ServerException) {
    println("5xx response calling ApiApi#apiV2ClientsMeVerifyEmailCreate")
    e.printStackTrace()
}
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **emailVerifyRequest** | [**EmailVerifyRequest**](EmailVerifyRequest.md)|  | [optional]

### Return type

[**EmailVerifyRequest**](EmailVerifyRequest.md)

### Authorization


Configure cookieAuth:
    ApiClient.apiKey["Session"] = ""
    ApiClient.apiKeyPrefix["Session"] = ""
Configure jwtAuth:
    ApiClient.accessToken = ""
Configure tokenAuth:
    ApiClient.apiKey["Authorization"] = ""
    ApiClient.apiKeyPrefix["Authorization"] = ""

### HTTP request headers

 - **Content-Type**: application/json, application/x-www-form-urlencoded, multipart/form-data
 - **Accept**: application/json

<a name="apiV2ClientsNationalDocumentsList"></a>
# **apiV2ClientsNationalDocumentsList**
> PaginatedNationalDocumentList apiV2ClientsNationalDocumentsList(limit, offset)



### Example
```kotlin
// Import classes:
//import org.openapitools.client.infrastructure.*
//import org.openapitools.client.models.*

val apiInstance = ApiApi()
val limit : kotlin.Int = 56 // kotlin.Int | Number of results to return per page.
val offset : kotlin.Int = 56 // kotlin.Int | The initial index from which to return the results.
try {
    val result : PaginatedNationalDocumentList = apiInstance.apiV2ClientsNationalDocumentsList(limit, offset)
    println(result)
} catch (e: ClientException) {
    println("4xx response calling ApiApi#apiV2ClientsNationalDocumentsList")
    e.printStackTrace()
} catch (e: ServerException) {
    println("5xx response calling ApiApi#apiV2ClientsNationalDocumentsList")
    e.printStackTrace()
}
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **limit** | **kotlin.Int**| Number of results to return per page. | [optional]
 **offset** | **kotlin.Int**| The initial index from which to return the results. | [optional]

### Return type

[**PaginatedNationalDocumentList**](PaginatedNationalDocumentList.md)

### Authorization


Configure cookieAuth:
    ApiClient.apiKey["Session"] = ""
    ApiClient.apiKeyPrefix["Session"] = ""
Configure jwtAuth:
    ApiClient.accessToken = ""
Configure tokenAuth:
    ApiClient.apiKey["Authorization"] = ""
    ApiClient.apiKeyPrefix["Authorization"] = ""

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

<a name="apiV2ClientsReferralRetrieve"></a>
# **apiV2ClientsReferralRetrieve**
> ClientReferral apiV2ClientsReferralRetrieve(referralCode)



Retrieves the currently logged in client referral code

### Example
```kotlin
// Import classes:
//import org.openapitools.client.infrastructure.*
//import org.openapitools.client.models.*

val apiInstance = ApiApi()
val referralCode : kotlin.String = referralCode_example // kotlin.String | 
try {
    val result : ClientReferral = apiInstance.apiV2ClientsReferralRetrieve(referralCode)
    println(result)
} catch (e: ClientException) {
    println("4xx response calling ApiApi#apiV2ClientsReferralRetrieve")
    e.printStackTrace()
} catch (e: ServerException) {
    println("5xx response calling ApiApi#apiV2ClientsReferralRetrieve")
    e.printStackTrace()
}
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **referralCode** | **kotlin.String**|  |

### Return type

[**ClientReferral**](ClientReferral.md)

### Authorization


Configure cookieAuth:
    ApiClient.apiKey["Session"] = ""
    ApiClient.apiKeyPrefix["Session"] = ""
Configure jwtAuth:
    ApiClient.accessToken = ""
Configure tokenAuth:
    ApiClient.apiKey["Authorization"] = ""
    ApiClient.apiKeyPrefix["Authorization"] = ""

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

<a name="apiV2ClientsReportStatementsList"></a>
# **apiV2ClientsReportStatementsList**
> PaginatedStatementList apiV2ClientsReportStatementsList(clientUuid, format, limit, offset)



This mixin implements binary responses. It supports PDF and Base64. It can be adapted to any django View that implements the retrieve method

### Example
```kotlin
// Import classes:
//import org.openapitools.client.infrastructure.*
//import org.openapitools.client.models.*

val apiInstance = ApiApi()
val clientUuid : java.util.UUID = 38400000-8cf0-11bd-b23e-10b96e4ef00d // java.util.UUID | 
val format : kotlin.String = format_example // kotlin.String | 
val limit : kotlin.Int = 56 // kotlin.Int | Number of results to return per page.
val offset : kotlin.Int = 56 // kotlin.Int | The initial index from which to return the results.
try {
    val result : PaginatedStatementList = apiInstance.apiV2ClientsReportStatementsList(clientUuid, format, limit, offset)
    println(result)
} catch (e: ClientException) {
    println("4xx response calling ApiApi#apiV2ClientsReportStatementsList")
    e.printStackTrace()
} catch (e: ServerException) {
    println("5xx response calling ApiApi#apiV2ClientsReportStatementsList")
    e.printStackTrace()
}
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **clientUuid** | [**java.util.UUID**](.md)|  |
 **format** | **kotlin.String**|  | [optional] [enum: base64, json, pdf]
 **limit** | **kotlin.Int**| Number of results to return per page. | [optional]
 **offset** | **kotlin.Int**| The initial index from which to return the results. | [optional]

### Return type

[**PaginatedStatementList**](PaginatedStatementList.md)

### Authorization


Configure cookieAuth:
    ApiClient.apiKey["Session"] = ""
    ApiClient.apiKeyPrefix["Session"] = ""
Configure jwtAuth:
    ApiClient.accessToken = ""
Configure tokenAuth:
    ApiClient.apiKey["Authorization"] = ""
    ApiClient.apiKeyPrefix["Authorization"] = ""

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json, application/pdf, text/plain

<a name="apiV2ClientsReportStatementsRetrieve"></a>
# **apiV2ClientsReportStatementsRetrieve**
> Statement apiV2ClientsReportStatementsRetrieve(clientUuid, uuid, format)



This mixin implements binary responses. It supports PDF and Base64. It can be adapted to any django View that implements the retrieve method

### Example
```kotlin
// Import classes:
//import org.openapitools.client.infrastructure.*
//import org.openapitools.client.models.*

val apiInstance = ApiApi()
val clientUuid : java.util.UUID = 38400000-8cf0-11bd-b23e-10b96e4ef00d // java.util.UUID | 
val uuid : java.util.UUID = 38400000-8cf0-11bd-b23e-10b96e4ef00d // java.util.UUID | 
val format : kotlin.String = format_example // kotlin.String | 
try {
    val result : Statement = apiInstance.apiV2ClientsReportStatementsRetrieve(clientUuid, uuid, format)
    println(result)
} catch (e: ClientException) {
    println("4xx response calling ApiApi#apiV2ClientsReportStatementsRetrieve")
    e.printStackTrace()
} catch (e: ServerException) {
    println("5xx response calling ApiApi#apiV2ClientsReportStatementsRetrieve")
    e.printStackTrace()
}
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **clientUuid** | [**java.util.UUID**](.md)|  |
 **uuid** | [**java.util.UUID**](.md)|  |
 **format** | **kotlin.String**|  | [optional] [enum: base64, json, pdf]

### Return type

[**Statement**](Statement.md)

### Authorization


Configure cookieAuth:
    ApiClient.apiKey["Session"] = ""
    ApiClient.apiKeyPrefix["Session"] = ""
Configure jwtAuth:
    ApiClient.accessToken = ""
Configure tokenAuth:
    ApiClient.apiKey["Authorization"] = ""
    ApiClient.apiKeyPrefix["Authorization"] = ""

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json, application/pdf, text/plain

<a name="apiV2ClientsReportTaxReportsList"></a>
# **apiV2ClientsReportTaxReportsList**
> PaginatedTaxReportList apiV2ClientsReportTaxReportsList(clientUuid, format, limit, offset)



This mixin implements binary responses. It supports PDF and Base64. It can be adapted to any django View that implements the retrieve method

### Example
```kotlin
// Import classes:
//import org.openapitools.client.infrastructure.*
//import org.openapitools.client.models.*

val apiInstance = ApiApi()
val clientUuid : java.util.UUID = 38400000-8cf0-11bd-b23e-10b96e4ef00d // java.util.UUID | 
val format : kotlin.String = format_example // kotlin.String | 
val limit : kotlin.Int = 56 // kotlin.Int | Number of results to return per page.
val offset : kotlin.Int = 56 // kotlin.Int | The initial index from which to return the results.
try {
    val result : PaginatedTaxReportList = apiInstance.apiV2ClientsReportTaxReportsList(clientUuid, format, limit, offset)
    println(result)
} catch (e: ClientException) {
    println("4xx response calling ApiApi#apiV2ClientsReportTaxReportsList")
    e.printStackTrace()
} catch (e: ServerException) {
    println("5xx response calling ApiApi#apiV2ClientsReportTaxReportsList")
    e.printStackTrace()
}
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **clientUuid** | [**java.util.UUID**](.md)|  |
 **format** | **kotlin.String**|  | [optional] [enum: base64, json, pdf]
 **limit** | **kotlin.Int**| Number of results to return per page. | [optional]
 **offset** | **kotlin.Int**| The initial index from which to return the results. | [optional]

### Return type

[**PaginatedTaxReportList**](PaginatedTaxReportList.md)

### Authorization


Configure cookieAuth:
    ApiClient.apiKey["Session"] = ""
    ApiClient.apiKeyPrefix["Session"] = ""
Configure jwtAuth:
    ApiClient.accessToken = ""
Configure tokenAuth:
    ApiClient.apiKey["Authorization"] = ""
    ApiClient.apiKeyPrefix["Authorization"] = ""

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json, application/pdf, text/plain

<a name="apiV2ClientsReportTaxReportsRetrieve"></a>
# **apiV2ClientsReportTaxReportsRetrieve**
> TaxReport apiV2ClientsReportTaxReportsRetrieve(clientUuid, uuid, format)



This mixin implements binary responses. It supports PDF and Base64. It can be adapted to any django View that implements the retrieve method

### Example
```kotlin
// Import classes:
//import org.openapitools.client.infrastructure.*
//import org.openapitools.client.models.*

val apiInstance = ApiApi()
val clientUuid : java.util.UUID = 38400000-8cf0-11bd-b23e-10b96e4ef00d // java.util.UUID | 
val uuid : java.util.UUID = 38400000-8cf0-11bd-b23e-10b96e4ef00d // java.util.UUID | 
val format : kotlin.String = format_example // kotlin.String | 
try {
    val result : TaxReport = apiInstance.apiV2ClientsReportTaxReportsRetrieve(clientUuid, uuid, format)
    println(result)
} catch (e: ClientException) {
    println("4xx response calling ApiApi#apiV2ClientsReportTaxReportsRetrieve")
    e.printStackTrace()
} catch (e: ServerException) {
    println("5xx response calling ApiApi#apiV2ClientsReportTaxReportsRetrieve")
    e.printStackTrace()
}
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **clientUuid** | [**java.util.UUID**](.md)|  |
 **uuid** | [**java.util.UUID**](.md)|  |
 **format** | **kotlin.String**|  | [optional] [enum: base64, json, pdf]

### Return type

[**TaxReport**](TaxReport.md)

### Authorization


Configure cookieAuth:
    ApiClient.apiKey["Session"] = ""
    ApiClient.apiKeyPrefix["Session"] = ""
Configure jwtAuth:
    ApiClient.accessToken = ""
Configure tokenAuth:
    ApiClient.apiKey["Authorization"] = ""
    ApiClient.apiKeyPrefix["Authorization"] = ""

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json, application/pdf, text/plain

<a name="apiV2ClientsVerifyEmailUpdate"></a>
# **apiV2ClientsVerifyEmailUpdate**
> EmailVerifyView apiV2ClientsVerifyEmailUpdate(uuid, emailVerifyView)



Verify e-mail account with the given email token.

### Example
```kotlin
// Import classes:
//import org.openapitools.client.infrastructure.*
//import org.openapitools.client.models.*

val apiInstance = ApiApi()
val uuid : java.util.UUID = 38400000-8cf0-11bd-b23e-10b96e4ef00d // java.util.UUID | 
val emailVerifyView : EmailVerifyView =  // EmailVerifyView | 
try {
    val result : EmailVerifyView = apiInstance.apiV2ClientsVerifyEmailUpdate(uuid, emailVerifyView)
    println(result)
} catch (e: ClientException) {
    println("4xx response calling ApiApi#apiV2ClientsVerifyEmailUpdate")
    e.printStackTrace()
} catch (e: ServerException) {
    println("5xx response calling ApiApi#apiV2ClientsVerifyEmailUpdate")
    e.printStackTrace()
}
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **uuid** | [**java.util.UUID**](.md)|  |
 **emailVerifyView** | [**EmailVerifyView**](EmailVerifyView.md)|  |

### Return type

[**EmailVerifyView**](EmailVerifyView.md)

### Authorization


Configure cookieAuth:
    ApiClient.apiKey["Session"] = ""
    ApiClient.apiKeyPrefix["Session"] = ""
Configure jwtAuth:
    ApiClient.accessToken = ""
Configure tokenAuth:
    ApiClient.apiKey["Authorization"] = ""
    ApiClient.apiKeyPrefix["Authorization"] = ""

### HTTP request headers

 - **Content-Type**: application/json, application/x-www-form-urlencoded, multipart/form-data
 - **Accept**: application/json

<a name="apiV2ClientsWatchlistsCreate"></a>
# **apiV2ClientsWatchlistsCreate**
> Watchlist apiV2ClientsWatchlistsCreate(clientUuid, watchlistUuid, watchlist)



Applies filters without declaring them explicitly. How? Creating those filters on the fly.  # How it works. - Declare &#39;filterable_fields&#39; in the view.     E.g. filterable_fields &#x3D; [&#39;status&#39;, &#39;name&#39;]     __all__ is allowed. It applies filters for all model attributes.  - COMMON_FILTERS: common filters configuration.     - key: field name. E.g. status.     - filter_class. filter class for the field.     - args. Args for the filter_class __init__.  These args are taken from the queryset model         E.g. &#39;args&#39;: {&#39;choices&#39;: &#39;STATUS_CHOICES&#39;} means Filter(choices&#x3D;queryset.model.STATUS_CHOICES)   # How to use it: class PortfolioListCreateView(CommonFilterMixin, InvestorAPIViewMixin, ListCreateAPIView):     filterable_fields &#x3D; [&#39;status&#39;, &#39;name&#39;]  # Filters priority. 1- Explicit filter declared in the filterset_class 2- Filters declared in COMMON_FILTERS 3- Filterset.FILTER_DEFAULTS

### Example
```kotlin
// Import classes:
//import org.openapitools.client.infrastructure.*
//import org.openapitools.client.models.*

val apiInstance = ApiApi()
val clientUuid : java.util.UUID = 38400000-8cf0-11bd-b23e-10b96e4ef00d // java.util.UUID | 
val watchlistUuid : java.util.UUID = 38400000-8cf0-11bd-b23e-10b96e4ef00d // java.util.UUID | 
val watchlist : Watchlist =  // Watchlist | 
try {
    val result : Watchlist = apiInstance.apiV2ClientsWatchlistsCreate(clientUuid, watchlistUuid, watchlist)
    println(result)
} catch (e: ClientException) {
    println("4xx response calling ApiApi#apiV2ClientsWatchlistsCreate")
    e.printStackTrace()
} catch (e: ServerException) {
    println("5xx response calling ApiApi#apiV2ClientsWatchlistsCreate")
    e.printStackTrace()
}
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **clientUuid** | [**java.util.UUID**](.md)|  |
 **watchlistUuid** | [**java.util.UUID**](.md)|  |
 **watchlist** | [**Watchlist**](Watchlist.md)|  |

### Return type

[**Watchlist**](Watchlist.md)

### Authorization


Configure cookieAuth:
    ApiClient.apiKey["Session"] = ""
    ApiClient.apiKeyPrefix["Session"] = ""
Configure jwtAuth:
    ApiClient.accessToken = ""
Configure tokenAuth:
    ApiClient.apiKey["Authorization"] = ""
    ApiClient.apiKeyPrefix["Authorization"] = ""

### HTTP request headers

 - **Content-Type**: application/json, application/x-www-form-urlencoded, multipart/form-data
 - **Accept**: application/json

<a name="apiV2ClientsWatchlistsDestroy"></a>
# **apiV2ClientsWatchlistsDestroy**
> apiV2ClientsWatchlistsDestroy(clientUuid, watchlistUuid)



Applies filters without declaring them explicitly. How? Creating those filters on the fly.  # How it works. - Declare &#39;filterable_fields&#39; in the view.     E.g. filterable_fields &#x3D; [&#39;status&#39;, &#39;name&#39;]     __all__ is allowed. It applies filters for all model attributes.  - COMMON_FILTERS: common filters configuration.     - key: field name. E.g. status.     - filter_class. filter class for the field.     - args. Args for the filter_class __init__.  These args are taken from the queryset model         E.g. &#39;args&#39;: {&#39;choices&#39;: &#39;STATUS_CHOICES&#39;} means Filter(choices&#x3D;queryset.model.STATUS_CHOICES)   # How to use it: class PortfolioListCreateView(CommonFilterMixin, InvestorAPIViewMixin, ListCreateAPIView):     filterable_fields &#x3D; [&#39;status&#39;, &#39;name&#39;]  # Filters priority. 1- Explicit filter declared in the filterset_class 2- Filters declared in COMMON_FILTERS 3- Filterset.FILTER_DEFAULTS

### Example
```kotlin
// Import classes:
//import org.openapitools.client.infrastructure.*
//import org.openapitools.client.models.*

val apiInstance = ApiApi()
val clientUuid : java.util.UUID = 38400000-8cf0-11bd-b23e-10b96e4ef00d // java.util.UUID | 
val watchlistUuid : java.util.UUID = 38400000-8cf0-11bd-b23e-10b96e4ef00d // java.util.UUID | 
try {
    apiInstance.apiV2ClientsWatchlistsDestroy(clientUuid, watchlistUuid)
} catch (e: ClientException) {
    println("4xx response calling ApiApi#apiV2ClientsWatchlistsDestroy")
    e.printStackTrace()
} catch (e: ServerException) {
    println("5xx response calling ApiApi#apiV2ClientsWatchlistsDestroy")
    e.printStackTrace()
}
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **clientUuid** | [**java.util.UUID**](.md)|  |
 **watchlistUuid** | [**java.util.UUID**](.md)|  |

### Return type

null (empty response body)

### Authorization


Configure cookieAuth:
    ApiClient.apiKey["Session"] = ""
    ApiClient.apiKeyPrefix["Session"] = ""
Configure jwtAuth:
    ApiClient.accessToken = ""
Configure tokenAuth:
    ApiClient.apiKey["Authorization"] = ""
    ApiClient.apiKeyPrefix["Authorization"] = ""

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: Not defined

<a name="apiV2ClientsWatchlistsList"></a>
# **apiV2ClientsWatchlistsList**
> PaginatedWatchlistList apiV2ClientsWatchlistsList(clientUuid, watchlistUuid, limit, offset)



Applies filters without declaring them explicitly. How? Creating those filters on the fly.  # How it works. - Declare &#39;filterable_fields&#39; in the view.     E.g. filterable_fields &#x3D; [&#39;status&#39;, &#39;name&#39;]     __all__ is allowed. It applies filters for all model attributes.  - COMMON_FILTERS: common filters configuration.     - key: field name. E.g. status.     - filter_class. filter class for the field.     - args. Args for the filter_class __init__.  These args are taken from the queryset model         E.g. &#39;args&#39;: {&#39;choices&#39;: &#39;STATUS_CHOICES&#39;} means Filter(choices&#x3D;queryset.model.STATUS_CHOICES)   # How to use it: class PortfolioListCreateView(CommonFilterMixin, InvestorAPIViewMixin, ListCreateAPIView):     filterable_fields &#x3D; [&#39;status&#39;, &#39;name&#39;]  # Filters priority. 1- Explicit filter declared in the filterset_class 2- Filters declared in COMMON_FILTERS 3- Filterset.FILTER_DEFAULTS

### Example
```kotlin
// Import classes:
//import org.openapitools.client.infrastructure.*
//import org.openapitools.client.models.*

val apiInstance = ApiApi()
val clientUuid : java.util.UUID = 38400000-8cf0-11bd-b23e-10b96e4ef00d // java.util.UUID | 
val watchlistUuid : java.util.UUID = 38400000-8cf0-11bd-b23e-10b96e4ef00d // java.util.UUID | 
val limit : kotlin.Int = 56 // kotlin.Int | Number of results to return per page.
val offset : kotlin.Int = 56 // kotlin.Int | The initial index from which to return the results.
try {
    val result : PaginatedWatchlistList = apiInstance.apiV2ClientsWatchlistsList(clientUuid, watchlistUuid, limit, offset)
    println(result)
} catch (e: ClientException) {
    println("4xx response calling ApiApi#apiV2ClientsWatchlistsList")
    e.printStackTrace()
} catch (e: ServerException) {
    println("5xx response calling ApiApi#apiV2ClientsWatchlistsList")
    e.printStackTrace()
}
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **clientUuid** | [**java.util.UUID**](.md)|  |
 **watchlistUuid** | [**java.util.UUID**](.md)|  |
 **limit** | **kotlin.Int**| Number of results to return per page. | [optional]
 **offset** | **kotlin.Int**| The initial index from which to return the results. | [optional]

### Return type

[**PaginatedWatchlistList**](PaginatedWatchlistList.md)

### Authorization


Configure cookieAuth:
    ApiClient.apiKey["Session"] = ""
    ApiClient.apiKeyPrefix["Session"] = ""
Configure jwtAuth:
    ApiClient.accessToken = ""
Configure tokenAuth:
    ApiClient.apiKey["Authorization"] = ""
    ApiClient.apiKeyPrefix["Authorization"] = ""

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

<a name="apiV2ClientsWatchlistsRetrieve"></a>
# **apiV2ClientsWatchlistsRetrieve**
> Watchlist apiV2ClientsWatchlistsRetrieve(clientUuid, watchlistUuid)



Applies filters without declaring them explicitly. How? Creating those filters on the fly.  # How it works. - Declare &#39;filterable_fields&#39; in the view.     E.g. filterable_fields &#x3D; [&#39;status&#39;, &#39;name&#39;]     __all__ is allowed. It applies filters for all model attributes.  - COMMON_FILTERS: common filters configuration.     - key: field name. E.g. status.     - filter_class. filter class for the field.     - args. Args for the filter_class __init__.  These args are taken from the queryset model         E.g. &#39;args&#39;: {&#39;choices&#39;: &#39;STATUS_CHOICES&#39;} means Filter(choices&#x3D;queryset.model.STATUS_CHOICES)   # How to use it: class PortfolioListCreateView(CommonFilterMixin, InvestorAPIViewMixin, ListCreateAPIView):     filterable_fields &#x3D; [&#39;status&#39;, &#39;name&#39;]  # Filters priority. 1- Explicit filter declared in the filterset_class 2- Filters declared in COMMON_FILTERS 3- Filterset.FILTER_DEFAULTS

### Example
```kotlin
// Import classes:
//import org.openapitools.client.infrastructure.*
//import org.openapitools.client.models.*

val apiInstance = ApiApi()
val clientUuid : java.util.UUID = 38400000-8cf0-11bd-b23e-10b96e4ef00d // java.util.UUID | 
val watchlistUuid : java.util.UUID = 38400000-8cf0-11bd-b23e-10b96e4ef00d // java.util.UUID | 
try {
    val result : Watchlist = apiInstance.apiV2ClientsWatchlistsRetrieve(clientUuid, watchlistUuid)
    println(result)
} catch (e: ClientException) {
    println("4xx response calling ApiApi#apiV2ClientsWatchlistsRetrieve")
    e.printStackTrace()
} catch (e: ServerException) {
    println("5xx response calling ApiApi#apiV2ClientsWatchlistsRetrieve")
    e.printStackTrace()
}
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **clientUuid** | [**java.util.UUID**](.md)|  |
 **watchlistUuid** | [**java.util.UUID**](.md)|  |

### Return type

[**Watchlist**](Watchlist.md)

### Authorization


Configure cookieAuth:
    ApiClient.apiKey["Session"] = ""
    ApiClient.apiKeyPrefix["Session"] = ""
Configure jwtAuth:
    ApiClient.accessToken = ""
Configure tokenAuth:
    ApiClient.apiKey["Authorization"] = ""
    ApiClient.apiKeyPrefix["Authorization"] = ""

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

<a name="apiV2ClientsWatchlistsUpdate"></a>
# **apiV2ClientsWatchlistsUpdate**
> Watchlist apiV2ClientsWatchlistsUpdate(clientUuid, watchlistUuid, watchlist)



Applies filters without declaring them explicitly. How? Creating those filters on the fly.  # How it works. - Declare &#39;filterable_fields&#39; in the view.     E.g. filterable_fields &#x3D; [&#39;status&#39;, &#39;name&#39;]     __all__ is allowed. It applies filters for all model attributes.  - COMMON_FILTERS: common filters configuration.     - key: field name. E.g. status.     - filter_class. filter class for the field.     - args. Args for the filter_class __init__.  These args are taken from the queryset model         E.g. &#39;args&#39;: {&#39;choices&#39;: &#39;STATUS_CHOICES&#39;} means Filter(choices&#x3D;queryset.model.STATUS_CHOICES)   # How to use it: class PortfolioListCreateView(CommonFilterMixin, InvestorAPIViewMixin, ListCreateAPIView):     filterable_fields &#x3D; [&#39;status&#39;, &#39;name&#39;]  # Filters priority. 1- Explicit filter declared in the filterset_class 2- Filters declared in COMMON_FILTERS 3- Filterset.FILTER_DEFAULTS

### Example
```kotlin
// Import classes:
//import org.openapitools.client.infrastructure.*
//import org.openapitools.client.models.*

val apiInstance = ApiApi()
val clientUuid : java.util.UUID = 38400000-8cf0-11bd-b23e-10b96e4ef00d // java.util.UUID | 
val watchlistUuid : java.util.UUID = 38400000-8cf0-11bd-b23e-10b96e4ef00d // java.util.UUID | 
val watchlist : Watchlist =  // Watchlist | 
try {
    val result : Watchlist = apiInstance.apiV2ClientsWatchlistsUpdate(clientUuid, watchlistUuid, watchlist)
    println(result)
} catch (e: ClientException) {
    println("4xx response calling ApiApi#apiV2ClientsWatchlistsUpdate")
    e.printStackTrace()
} catch (e: ServerException) {
    println("5xx response calling ApiApi#apiV2ClientsWatchlistsUpdate")
    e.printStackTrace()
}
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **clientUuid** | [**java.util.UUID**](.md)|  |
 **watchlistUuid** | [**java.util.UUID**](.md)|  |
 **watchlist** | [**Watchlist**](Watchlist.md)|  |

### Return type

[**Watchlist**](Watchlist.md)

### Authorization


Configure cookieAuth:
    ApiClient.apiKey["Session"] = ""
    ApiClient.apiKeyPrefix["Session"] = ""
Configure jwtAuth:
    ApiClient.accessToken = ""
Configure tokenAuth:
    ApiClient.apiKey["Authorization"] = ""
    ApiClient.apiKeyPrefix["Authorization"] = ""

### HTTP request headers

 - **Content-Type**: application/json, application/x-www-form-urlencoded, multipart/form-data
 - **Accept**: application/json

<a name="apiV2FeedsAccessLogsList"></a>
# **apiV2FeedsAccessLogsList**
> PaginatedAccessLogList apiV2FeedsAccessLogsList(browser, browserVersion, channel, city, country, deviceBrand, deviceModel, ipAddress, limit, offset, os, osVersion, userAgent)



Retrieves the latest access to the client&#39;s account

### Example
```kotlin
// Import classes:
//import org.openapitools.client.infrastructure.*
//import org.openapitools.client.models.*

val apiInstance = ApiApi()
val browser : kotlin.String = browser_example // kotlin.String | 
val browserVersion : kotlin.String = browserVersion_example // kotlin.String | 
val channel : kotlin.String = channel_example // kotlin.String | 
val city : kotlin.String = city_example // kotlin.String | 
val country : kotlin.Int = 56 // kotlin.Int | 
val deviceBrand : kotlin.String = deviceBrand_example // kotlin.String | 
val deviceModel : kotlin.String = deviceModel_example // kotlin.String | 
val ipAddress : kotlin.String = ipAddress_example // kotlin.String | 
val limit : kotlin.Int = 56 // kotlin.Int | Number of results to return per page.
val offset : kotlin.Int = 56 // kotlin.Int | The initial index from which to return the results.
val os : kotlin.String = os_example // kotlin.String | 
val osVersion : kotlin.String = osVersion_example // kotlin.String | 
val userAgent : kotlin.String = userAgent_example // kotlin.String | 
try {
    val result : PaginatedAccessLogList = apiInstance.apiV2FeedsAccessLogsList(browser, browserVersion, channel, city, country, deviceBrand, deviceModel, ipAddress, limit, offset, os, osVersion, userAgent)
    println(result)
} catch (e: ClientException) {
    println("4xx response calling ApiApi#apiV2FeedsAccessLogsList")
    e.printStackTrace()
} catch (e: ServerException) {
    println("5xx response calling ApiApi#apiV2FeedsAccessLogsList")
    e.printStackTrace()
}
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **browser** | **kotlin.String**|  | [optional]
 **browserVersion** | **kotlin.String**|  | [optional]
 **channel** | **kotlin.String**|  | [optional] [enum: ANDROID, BROWSER, IOS]
 **city** | **kotlin.String**|  | [optional]
 **country** | **kotlin.Int**|  | [optional]
 **deviceBrand** | **kotlin.String**|  | [optional]
 **deviceModel** | **kotlin.String**|  | [optional]
 **ipAddress** | **kotlin.String**|  | [optional]
 **limit** | **kotlin.Int**| Number of results to return per page. | [optional]
 **offset** | **kotlin.Int**| The initial index from which to return the results. | [optional]
 **os** | **kotlin.String**|  | [optional]
 **osVersion** | **kotlin.String**|  | [optional]
 **userAgent** | **kotlin.String**|  | [optional]

### Return type

[**PaginatedAccessLogList**](PaginatedAccessLogList.md)

### Authorization


Configure cookieAuth:
    ApiClient.apiKey["Session"] = ""
    ApiClient.apiKeyPrefix["Session"] = ""
Configure jwtAuth:
    ApiClient.accessToken = ""
Configure tokenAuth:
    ApiClient.apiKey["Authorization"] = ""
    ApiClient.apiKeyPrefix["Authorization"] = ""

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

<a name="apiV2FeedsActivitiesList"></a>
# **apiV2FeedsActivitiesList**
> PaginatedFeedActivityListList apiV2FeedsActivitiesList(limit, offset, target)



### Example
```kotlin
// Import classes:
//import org.openapitools.client.infrastructure.*
//import org.openapitools.client.models.*

val apiInstance = ApiApi()
val limit : kotlin.Int = 56 // kotlin.Int | Number of results to return per page.
val offset : kotlin.Int = 56 // kotlin.Int | The initial index from which to return the results.
val target : kotlin.collections.List<kotlin.String> =  // kotlin.collections.List<kotlin.String> | 
try {
    val result : PaginatedFeedActivityListList = apiInstance.apiV2FeedsActivitiesList(limit, offset, target)
    println(result)
} catch (e: ClientException) {
    println("4xx response calling ApiApi#apiV2FeedsActivitiesList")
    e.printStackTrace()
} catch (e: ServerException) {
    println("5xx response calling ApiApi#apiV2FeedsActivitiesList")
    e.printStackTrace()
}
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **limit** | **kotlin.Int**| Number of results to return per page. | [optional]
 **offset** | **kotlin.Int**| The initial index from which to return the results. | [optional]
 **target** | [**kotlin.collections.List&lt;kotlin.String&gt;**](kotlin.String.md)|  | [optional] [enum: , cashcorporateaction, charge, deposit, portfolio, rebalance, sharescorporateaction, withdrawal]

### Return type

[**PaginatedFeedActivityListList**](PaginatedFeedActivityListList.md)

### Authorization


Configure cookieAuth:
    ApiClient.apiKey["Session"] = ""
    ApiClient.apiKeyPrefix["Session"] = ""
Configure jwtAuth:
    ApiClient.accessToken = ""
Configure tokenAuth:
    ApiClient.apiKey["Authorization"] = ""
    ApiClient.apiKeyPrefix["Authorization"] = ""

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

<a name="apiV2GoalsCreate"></a>
# **apiV2GoalsCreate**
> Goal apiV2GoalsCreate(goalUuid, goal)



### Example
```kotlin
// Import classes:
//import org.openapitools.client.infrastructure.*
//import org.openapitools.client.models.*

val apiInstance = ApiApi()
val goalUuid : java.util.UUID = 38400000-8cf0-11bd-b23e-10b96e4ef00d // java.util.UUID | 
val goal : Goal =  // Goal | 
try {
    val result : Goal = apiInstance.apiV2GoalsCreate(goalUuid, goal)
    println(result)
} catch (e: ClientException) {
    println("4xx response calling ApiApi#apiV2GoalsCreate")
    e.printStackTrace()
} catch (e: ServerException) {
    println("5xx response calling ApiApi#apiV2GoalsCreate")
    e.printStackTrace()
}
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **goalUuid** | [**java.util.UUID**](.md)|  |
 **goal** | [**Goal**](Goal.md)|  |

### Return type

[**Goal**](Goal.md)

### Authorization


Configure cookieAuth:
    ApiClient.apiKey["Session"] = ""
    ApiClient.apiKeyPrefix["Session"] = ""
Configure jwtAuth:
    ApiClient.accessToken = ""
Configure tokenAuth:
    ApiClient.apiKey["Authorization"] = ""
    ApiClient.apiKeyPrefix["Authorization"] = ""

### HTTP request headers

 - **Content-Type**: application/json, application/x-www-form-urlencoded, multipart/form-data
 - **Accept**: application/json

<a name="apiV2GoalsDecumulationCreate"></a>
# **apiV2GoalsDecumulationCreate**
> ForecastDecumulationRequest apiV2GoalsDecumulationCreate(forecastDecumulationRequest)



Return a Goal Forecast Decumulation

### Example
```kotlin
// Import classes:
//import org.openapitools.client.infrastructure.*
//import org.openapitools.client.models.*

val apiInstance = ApiApi()
val forecastDecumulationRequest : ForecastDecumulationRequest =  // ForecastDecumulationRequest | 
try {
    val result : ForecastDecumulationRequest = apiInstance.apiV2GoalsDecumulationCreate(forecastDecumulationRequest)
    println(result)
} catch (e: ClientException) {
    println("4xx response calling ApiApi#apiV2GoalsDecumulationCreate")
    e.printStackTrace()
} catch (e: ServerException) {
    println("5xx response calling ApiApi#apiV2GoalsDecumulationCreate")
    e.printStackTrace()
}
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **forecastDecumulationRequest** | [**ForecastDecumulationRequest**](ForecastDecumulationRequest.md)|  |

### Return type

[**ForecastDecumulationRequest**](ForecastDecumulationRequest.md)

### Authorization


Configure cookieAuth:
    ApiClient.apiKey["Session"] = ""
    ApiClient.apiKeyPrefix["Session"] = ""
Configure jwtAuth:
    ApiClient.accessToken = ""
Configure tokenAuth:
    ApiClient.apiKey["Authorization"] = ""
    ApiClient.apiKeyPrefix["Authorization"] = ""

### HTTP request headers

 - **Content-Type**: application/json, application/x-www-form-urlencoded, multipart/form-data
 - **Accept**: application/json

<a name="apiV2GoalsDestroy"></a>
# **apiV2GoalsDestroy**
> apiV2GoalsDestroy(goalUuid)



### Example
```kotlin
// Import classes:
//import org.openapitools.client.infrastructure.*
//import org.openapitools.client.models.*

val apiInstance = ApiApi()
val goalUuid : java.util.UUID = 38400000-8cf0-11bd-b23e-10b96e4ef00d // java.util.UUID | 
try {
    apiInstance.apiV2GoalsDestroy(goalUuid)
} catch (e: ClientException) {
    println("4xx response calling ApiApi#apiV2GoalsDestroy")
    e.printStackTrace()
} catch (e: ServerException) {
    println("5xx response calling ApiApi#apiV2GoalsDestroy")
    e.printStackTrace()
}
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **goalUuid** | [**java.util.UUID**](.md)|  |

### Return type

null (empty response body)

### Authorization


Configure cookieAuth:
    ApiClient.apiKey["Session"] = ""
    ApiClient.apiKeyPrefix["Session"] = ""
Configure jwtAuth:
    ApiClient.accessToken = ""
Configure tokenAuth:
    ApiClient.apiKey["Authorization"] = ""
    ApiClient.apiKeyPrefix["Authorization"] = ""

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: Not defined

<a name="apiV2GoalsForecastCreate"></a>
# **apiV2GoalsForecastCreate**
> ForecastRequest apiV2GoalsForecastCreate(forecastRequest)



Return a Goal Forecast

### Example
```kotlin
// Import classes:
//import org.openapitools.client.infrastructure.*
//import org.openapitools.client.models.*

val apiInstance = ApiApi()
val forecastRequest : ForecastRequest =  // ForecastRequest | 
try {
    val result : ForecastRequest = apiInstance.apiV2GoalsForecastCreate(forecastRequest)
    println(result)
} catch (e: ClientException) {
    println("4xx response calling ApiApi#apiV2GoalsForecastCreate")
    e.printStackTrace()
} catch (e: ServerException) {
    println("5xx response calling ApiApi#apiV2GoalsForecastCreate")
    e.printStackTrace()
}
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **forecastRequest** | [**ForecastRequest**](ForecastRequest.md)|  |

### Return type

[**ForecastRequest**](ForecastRequest.md)

### Authorization


Configure cookieAuth:
    ApiClient.apiKey["Session"] = ""
    ApiClient.apiKeyPrefix["Session"] = ""
Configure jwtAuth:
    ApiClient.accessToken = ""
Configure tokenAuth:
    ApiClient.apiKey["Authorization"] = ""
    ApiClient.apiKeyPrefix["Authorization"] = ""

### HTTP request headers

 - **Content-Type**: application/json, application/x-www-form-urlencoded, multipart/form-data
 - **Accept**: application/json

<a name="apiV2GoalsList"></a>
# **apiV2GoalsList**
> PaginatedGoalList apiV2GoalsList(goalUuid, limit, offset)



### Example
```kotlin
// Import classes:
//import org.openapitools.client.infrastructure.*
//import org.openapitools.client.models.*

val apiInstance = ApiApi()
val goalUuid : java.util.UUID = 38400000-8cf0-11bd-b23e-10b96e4ef00d // java.util.UUID | 
val limit : kotlin.Int = 56 // kotlin.Int | Number of results to return per page.
val offset : kotlin.Int = 56 // kotlin.Int | The initial index from which to return the results.
try {
    val result : PaginatedGoalList = apiInstance.apiV2GoalsList(goalUuid, limit, offset)
    println(result)
} catch (e: ClientException) {
    println("4xx response calling ApiApi#apiV2GoalsList")
    e.printStackTrace()
} catch (e: ServerException) {
    println("5xx response calling ApiApi#apiV2GoalsList")
    e.printStackTrace()
}
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **goalUuid** | [**java.util.UUID**](.md)|  |
 **limit** | **kotlin.Int**| Number of results to return per page. | [optional]
 **offset** | **kotlin.Int**| The initial index from which to return the results. | [optional]

### Return type

[**PaginatedGoalList**](PaginatedGoalList.md)

### Authorization


Configure cookieAuth:
    ApiClient.apiKey["Session"] = ""
    ApiClient.apiKeyPrefix["Session"] = ""
Configure jwtAuth:
    ApiClient.accessToken = ""
Configure tokenAuth:
    ApiClient.apiKey["Authorization"] = ""
    ApiClient.apiKeyPrefix["Authorization"] = ""

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

<a name="apiV2GoalsPartialUpdate"></a>
# **apiV2GoalsPartialUpdate**
> Goal apiV2GoalsPartialUpdate(goalUuid, patchedGoal)



### Example
```kotlin
// Import classes:
//import org.openapitools.client.infrastructure.*
//import org.openapitools.client.models.*

val apiInstance = ApiApi()
val goalUuid : java.util.UUID = 38400000-8cf0-11bd-b23e-10b96e4ef00d // java.util.UUID | 
val patchedGoal : PatchedGoal =  // PatchedGoal | 
try {
    val result : Goal = apiInstance.apiV2GoalsPartialUpdate(goalUuid, patchedGoal)
    println(result)
} catch (e: ClientException) {
    println("4xx response calling ApiApi#apiV2GoalsPartialUpdate")
    e.printStackTrace()
} catch (e: ServerException) {
    println("5xx response calling ApiApi#apiV2GoalsPartialUpdate")
    e.printStackTrace()
}
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **goalUuid** | [**java.util.UUID**](.md)|  |
 **patchedGoal** | [**PatchedGoal**](PatchedGoal.md)|  | [optional]

### Return type

[**Goal**](Goal.md)

### Authorization


Configure cookieAuth:
    ApiClient.apiKey["Session"] = ""
    ApiClient.apiKeyPrefix["Session"] = ""
Configure jwtAuth:
    ApiClient.accessToken = ""
Configure tokenAuth:
    ApiClient.apiKey["Authorization"] = ""
    ApiClient.apiKeyPrefix["Authorization"] = ""

### HTTP request headers

 - **Content-Type**: application/json, application/x-www-form-urlencoded, multipart/form-data
 - **Accept**: application/json

<a name="apiV2GoalsRetrieve"></a>
# **apiV2GoalsRetrieve**
> Goal apiV2GoalsRetrieve(goalUuid)



### Example
```kotlin
// Import classes:
//import org.openapitools.client.infrastructure.*
//import org.openapitools.client.models.*

val apiInstance = ApiApi()
val goalUuid : java.util.UUID = 38400000-8cf0-11bd-b23e-10b96e4ef00d // java.util.UUID | 
try {
    val result : Goal = apiInstance.apiV2GoalsRetrieve(goalUuid)
    println(result)
} catch (e: ClientException) {
    println("4xx response calling ApiApi#apiV2GoalsRetrieve")
    e.printStackTrace()
} catch (e: ServerException) {
    println("5xx response calling ApiApi#apiV2GoalsRetrieve")
    e.printStackTrace()
}
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **goalUuid** | [**java.util.UUID**](.md)|  |

### Return type

[**Goal**](Goal.md)

### Authorization


Configure cookieAuth:
    ApiClient.apiKey["Session"] = ""
    ApiClient.apiKeyPrefix["Session"] = ""
Configure jwtAuth:
    ApiClient.accessToken = ""
Configure tokenAuth:
    ApiClient.apiKey["Authorization"] = ""
    ApiClient.apiKeyPrefix["Authorization"] = ""

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

<a name="apiV2InboxConversationsCreate"></a>
# **apiV2InboxConversationsCreate**
> ConversationCreate apiV2InboxConversationsCreate(uuid, portal, created, subject, messages)



get: List all conversations with last_message of a user  post: Create new conversation with N messages (without attachments)

### Example
```kotlin
// Import classes:
//import org.openapitools.client.infrastructure.*
//import org.openapitools.client.models.*

val apiInstance = ApiApi()
val uuid : java.util.UUID = 38400000-8cf0-11bd-b23e-10b96e4ef00d // java.util.UUID | 
val portal : kotlin.Int = 56 // kotlin.Int | 
val created : java.time.OffsetDateTime = 2013-10-20T19:20:30+01:00 // java.time.OffsetDateTime | 
val subject : kotlin.String = subject_example // kotlin.String | 
val messages : Message =  // Message | 
try {
    val result : ConversationCreate = apiInstance.apiV2InboxConversationsCreate(uuid, portal, created, subject, messages)
    println(result)
} catch (e: ClientException) {
    println("4xx response calling ApiApi#apiV2InboxConversationsCreate")
    e.printStackTrace()
} catch (e: ServerException) {
    println("5xx response calling ApiApi#apiV2InboxConversationsCreate")
    e.printStackTrace()
}
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **uuid** | [**java.util.UUID**](java.util.UUID.md)|  |
 **portal** | **kotlin.Int**|  |
 **created** | **java.time.OffsetDateTime**|  |
 **subject** | **kotlin.String**|  |
 **messages** | [**Message**](Message.md)|  | [optional]

### Return type

[**ConversationCreate**](ConversationCreate.md)

### Authorization


Configure cookieAuth:
    ApiClient.apiKey["Session"] = ""
    ApiClient.apiKeyPrefix["Session"] = ""
Configure jwtAuth:
    ApiClient.accessToken = ""
Configure tokenAuth:
    ApiClient.apiKey["Authorization"] = ""
    ApiClient.apiKeyPrefix["Authorization"] = ""

### HTTP request headers

 - **Content-Type**: multipart/form-data
 - **Accept**: application/json

<a name="apiV2InboxConversationsList"></a>
# **apiV2InboxConversationsList**
> PaginatedConversationListList apiV2InboxConversationsList(limit, offset)



get: List all conversations with last_message of a user  post: Create new conversation with N messages (without attachments)

### Example
```kotlin
// Import classes:
//import org.openapitools.client.infrastructure.*
//import org.openapitools.client.models.*

val apiInstance = ApiApi()
val limit : kotlin.Int = 56 // kotlin.Int | Number of results to return per page.
val offset : kotlin.Int = 56 // kotlin.Int | The initial index from which to return the results.
try {
    val result : PaginatedConversationListList = apiInstance.apiV2InboxConversationsList(limit, offset)
    println(result)
} catch (e: ClientException) {
    println("4xx response calling ApiApi#apiV2InboxConversationsList")
    e.printStackTrace()
} catch (e: ServerException) {
    println("5xx response calling ApiApi#apiV2InboxConversationsList")
    e.printStackTrace()
}
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **limit** | **kotlin.Int**| Number of results to return per page. | [optional]
 **offset** | **kotlin.Int**| The initial index from which to return the results. | [optional]

### Return type

[**PaginatedConversationListList**](PaginatedConversationListList.md)

### Authorization


Configure cookieAuth:
    ApiClient.apiKey["Session"] = ""
    ApiClient.apiKeyPrefix["Session"] = ""
Configure jwtAuth:
    ApiClient.accessToken = ""
Configure tokenAuth:
    ApiClient.apiKey["Authorization"] = ""
    ApiClient.apiKeyPrefix["Authorization"] = ""

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

<a name="apiV2InboxConversationsList2"></a>
# **apiV2InboxConversationsList2**
> PaginatedMessageList apiV2InboxConversationsList2(conversation, limit, offset)



List all messages from a conversation uuid

### Example
```kotlin
// Import classes:
//import org.openapitools.client.infrastructure.*
//import org.openapitools.client.models.*

val apiInstance = ApiApi()
val conversation : java.util.UUID = 38400000-8cf0-11bd-b23e-10b96e4ef00d // java.util.UUID | 
val limit : kotlin.Int = 56 // kotlin.Int | Number of results to return per page.
val offset : kotlin.Int = 56 // kotlin.Int | The initial index from which to return the results.
try {
    val result : PaginatedMessageList = apiInstance.apiV2InboxConversationsList2(conversation, limit, offset)
    println(result)
} catch (e: ClientException) {
    println("4xx response calling ApiApi#apiV2InboxConversationsList2")
    e.printStackTrace()
} catch (e: ServerException) {
    println("5xx response calling ApiApi#apiV2InboxConversationsList2")
    e.printStackTrace()
}
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **conversation** | [**java.util.UUID**](.md)|  |
 **limit** | **kotlin.Int**| Number of results to return per page. | [optional]
 **offset** | **kotlin.Int**| The initial index from which to return the results. | [optional]

### Return type

[**PaginatedMessageList**](PaginatedMessageList.md)

### Authorization


Configure cookieAuth:
    ApiClient.apiKey["Session"] = ""
    ApiClient.apiKeyPrefix["Session"] = ""
Configure jwtAuth:
    ApiClient.accessToken = ""
Configure tokenAuth:
    ApiClient.apiKey["Authorization"] = ""
    ApiClient.apiKeyPrefix["Authorization"] = ""

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

<a name="apiV2InboxConversationsMessagesAttachmentsRetrieve"></a>
# **apiV2InboxConversationsMessagesAttachmentsRetrieve**
> Attachment apiV2InboxConversationsMessagesAttachmentsRetrieve(conversation, message, uuid, format)



View to access to an attachment

### Example
```kotlin
// Import classes:
//import org.openapitools.client.infrastructure.*
//import org.openapitools.client.models.*

val apiInstance = ApiApi()
val conversation : java.util.UUID = 38400000-8cf0-11bd-b23e-10b96e4ef00d // java.util.UUID | 
val message : java.util.UUID = 38400000-8cf0-11bd-b23e-10b96e4ef00d // java.util.UUID | 
val uuid : java.util.UUID = 38400000-8cf0-11bd-b23e-10b96e4ef00d // java.util.UUID | 
val format : kotlin.String = format_example // kotlin.String | 
try {
    val result : Attachment = apiInstance.apiV2InboxConversationsMessagesAttachmentsRetrieve(conversation, message, uuid, format)
    println(result)
} catch (e: ClientException) {
    println("4xx response calling ApiApi#apiV2InboxConversationsMessagesAttachmentsRetrieve")
    e.printStackTrace()
} catch (e: ServerException) {
    println("5xx response calling ApiApi#apiV2InboxConversationsMessagesAttachmentsRetrieve")
    e.printStackTrace()
}
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **conversation** | [**java.util.UUID**](.md)|  |
 **message** | [**java.util.UUID**](.md)|  |
 **uuid** | [**java.util.UUID**](.md)|  |
 **format** | **kotlin.String**|  | [optional] [enum: base64, json, pdf]

### Return type

[**Attachment**](Attachment.md)

### Authorization


Configure cookieAuth:
    ApiClient.apiKey["Session"] = ""
    ApiClient.apiKeyPrefix["Session"] = ""
Configure jwtAuth:
    ApiClient.accessToken = ""
Configure tokenAuth:
    ApiClient.apiKey["Authorization"] = ""
    ApiClient.apiKeyPrefix["Authorization"] = ""

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json, application/pdf, text/plain

<a name="apiV2InboxConversationsMessagesCreate"></a>
# **apiV2InboxConversationsMessagesCreate**
> Message apiV2InboxConversationsMessagesCreate(conversation, user, readDate, created, attachments, uuid, content)



View for creating message on a specific conversation

### Example
```kotlin
// Import classes:
//import org.openapitools.client.infrastructure.*
//import org.openapitools.client.models.*

val apiInstance = ApiApi()
val conversation : java.util.UUID = 38400000-8cf0-11bd-b23e-10b96e4ef00d // java.util.UUID | 
val user : kotlin.String = user_example // kotlin.String | 
val readDate : java.time.OffsetDateTime = 2013-10-20T19:20:30+01:00 // java.time.OffsetDateTime | 
val created : java.time.OffsetDateTime = 2013-10-20T19:20:30+01:00 // java.time.OffsetDateTime | 
val attachments : kotlin.collections.List<Attachment> =  // kotlin.collections.List<Attachment> | 
val uuid : java.util.UUID = 38400000-8cf0-11bd-b23e-10b96e4ef00d // java.util.UUID | 
val content : kotlin.String = content_example // kotlin.String | 
try {
    val result : Message = apiInstance.apiV2InboxConversationsMessagesCreate(conversation, user, readDate, created, attachments, uuid, content)
    println(result)
} catch (e: ClientException) {
    println("4xx response calling ApiApi#apiV2InboxConversationsMessagesCreate")
    e.printStackTrace()
} catch (e: ServerException) {
    println("5xx response calling ApiApi#apiV2InboxConversationsMessagesCreate")
    e.printStackTrace()
}
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **conversation** | [**java.util.UUID**](.md)|  |
 **user** | **kotlin.String**|  |
 **readDate** | **java.time.OffsetDateTime**|  |
 **created** | **java.time.OffsetDateTime**|  |
 **attachments** | [**kotlin.collections.List&lt;Attachment&gt;**](Attachment.md)|  |
 **uuid** | [**java.util.UUID**](java.util.UUID.md)|  |
 **content** | **kotlin.String**|  | [optional]

### Return type

[**Message**](Message.md)

### Authorization


Configure cookieAuth:
    ApiClient.apiKey["Session"] = ""
    ApiClient.apiKeyPrefix["Session"] = ""
Configure jwtAuth:
    ApiClient.accessToken = ""
Configure tokenAuth:
    ApiClient.apiKey["Authorization"] = ""
    ApiClient.apiKeyPrefix["Authorization"] = ""

### HTTP request headers

 - **Content-Type**: multipart/form-data
 - **Accept**: application/json

<a name="apiV2MobileVersionRetrieve"></a>
# **apiV2MobileVersionRetrieve**
> MinimumAppVersion apiV2MobileVersionRetrieve(platform)



Returns the number of the last required APP Version for a platform.

### Example
```kotlin
// Import classes:
//import org.openapitools.client.infrastructure.*
//import org.openapitools.client.models.*

val apiInstance = ApiApi()
val platform : kotlin.String = platform_example // kotlin.String | 
try {
    val result : MinimumAppVersion = apiInstance.apiV2MobileVersionRetrieve(platform)
    println(result)
} catch (e: ClientException) {
    println("4xx response calling ApiApi#apiV2MobileVersionRetrieve")
    e.printStackTrace()
} catch (e: ServerException) {
    println("5xx response calling ApiApi#apiV2MobileVersionRetrieve")
    e.printStackTrace()
}
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **platform** | **kotlin.String**|  |

### Return type

[**MinimumAppVersion**](MinimumAppVersion.md)

### Authorization


Configure cookieAuth:
    ApiClient.apiKey["Session"] = ""
    ApiClient.apiKeyPrefix["Session"] = ""
Configure jwtAuth:
    ApiClient.accessToken = ""
Configure tokenAuth:
    ApiClient.apiKey["Authorization"] = ""
    ApiClient.apiKeyPrefix["Authorization"] = ""

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

<a name="apiV2PlatformSettingsList"></a>
# **apiV2PlatformSettingsList**
> kotlin.collections.List&lt;NucoroSetting&gt; apiV2PlatformSettingsList()



### Example
```kotlin
// Import classes:
//import org.openapitools.client.infrastructure.*
//import org.openapitools.client.models.*

val apiInstance = ApiApi()
try {
    val result : kotlin.collections.List<NucoroSetting> = apiInstance.apiV2PlatformSettingsList()
    println(result)
} catch (e: ClientException) {
    println("4xx response calling ApiApi#apiV2PlatformSettingsList")
    e.printStackTrace()
} catch (e: ServerException) {
    println("5xx response calling ApiApi#apiV2PlatformSettingsList")
    e.printStackTrace()
}
```

### Parameters
This endpoint does not need any parameter.

### Return type

[**kotlin.collections.List&lt;NucoroSetting&gt;**](NucoroSetting.md)

### Authorization


Configure cookieAuth:
    ApiClient.apiKey["Session"] = ""
    ApiClient.apiKeyPrefix["Session"] = ""
Configure jwtAuth:
    ApiClient.accessToken = ""
Configure tokenAuth:
    ApiClient.apiKey["Authorization"] = ""
    ApiClient.apiKeyPrefix["Authorization"] = ""

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

<a name="apiV2PortalCountriesList"></a>
# **apiV2PortalCountriesList**
> PaginatedCountryListList apiV2PortalCountriesList(limit, offset)



Retrieves the list of countries

### Example
```kotlin
// Import classes:
//import org.openapitools.client.infrastructure.*
//import org.openapitools.client.models.*

val apiInstance = ApiApi()
val limit : kotlin.Int = 56 // kotlin.Int | Number of results to return per page.
val offset : kotlin.Int = 56 // kotlin.Int | The initial index from which to return the results.
try {
    val result : PaginatedCountryListList = apiInstance.apiV2PortalCountriesList(limit, offset)
    println(result)
} catch (e: ClientException) {
    println("4xx response calling ApiApi#apiV2PortalCountriesList")
    e.printStackTrace()
} catch (e: ServerException) {
    println("5xx response calling ApiApi#apiV2PortalCountriesList")
    e.printStackTrace()
}
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **limit** | **kotlin.Int**| Number of results to return per page. | [optional]
 **offset** | **kotlin.Int**| The initial index from which to return the results. | [optional]

### Return type

[**PaginatedCountryListList**](PaginatedCountryListList.md)

### Authorization


Configure cookieAuth:
    ApiClient.apiKey["Session"] = ""
    ApiClient.apiKeyPrefix["Session"] = ""
Configure jwtAuth:
    ApiClient.accessToken = ""
Configure tokenAuth:
    ApiClient.apiKey["Authorization"] = ""
    ApiClient.apiKeyPrefix["Authorization"] = ""

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

<a name="apiV2PortalSettingsRetrieve"></a>
# **apiV2PortalSettingsRetrieve**
> PortalSettingValueList apiV2PortalSettingsRetrieve()



### Example
```kotlin
// Import classes:
//import org.openapitools.client.infrastructure.*
//import org.openapitools.client.models.*

val apiInstance = ApiApi()
try {
    val result : PortalSettingValueList = apiInstance.apiV2PortalSettingsRetrieve()
    println(result)
} catch (e: ClientException) {
    println("4xx response calling ApiApi#apiV2PortalSettingsRetrieve")
    e.printStackTrace()
} catch (e: ServerException) {
    println("5xx response calling ApiApi#apiV2PortalSettingsRetrieve")
    e.printStackTrace()
}
```

### Parameters
This endpoint does not need any parameter.

### Return type

[**PortalSettingValueList**](PortalSettingValueList.md)

### Authorization


Configure basicAuth:
    ApiClient.username = ""
    ApiClient.password = ""
Configure cookieAuth:
    ApiClient.apiKey["Session"] = ""
    ApiClient.apiKeyPrefix["Session"] = ""
Configure jwtAuth:
    ApiClient.accessToken = ""
Configure tokenAuth:
    ApiClient.apiKey["Authorization"] = ""
    ApiClient.apiKeyPrefix["Authorization"] = ""

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

<a name="apiV2PortalTosCurrentRetrieve"></a>
# **apiV2PortalTosCurrentRetrieve**
> Tos apiV2PortalTosCurrentRetrieve()



Retrieves the current ToS for the Portal

### Example
```kotlin
// Import classes:
//import org.openapitools.client.infrastructure.*
//import org.openapitools.client.models.*

val apiInstance = ApiApi()
try {
    val result : Tos = apiInstance.apiV2PortalTosCurrentRetrieve()
    println(result)
} catch (e: ClientException) {
    println("4xx response calling ApiApi#apiV2PortalTosCurrentRetrieve")
    e.printStackTrace()
} catch (e: ServerException) {
    println("5xx response calling ApiApi#apiV2PortalTosCurrentRetrieve")
    e.printStackTrace()
}
```

### Parameters
This endpoint does not need any parameter.

### Return type

[**Tos**](Tos.md)

### Authorization


Configure cookieAuth:
    ApiClient.apiKey["Session"] = ""
    ApiClient.apiKeyPrefix["Session"] = ""
Configure jwtAuth:
    ApiClient.accessToken = ""
Configure tokenAuth:
    ApiClient.apiKey["Authorization"] = ""
    ApiClient.apiKeyPrefix["Authorization"] = ""

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

<a name="apiV2PortalTosList"></a>
# **apiV2PortalTosList**
> PaginatedTosList apiV2PortalTosList(limit, offset)



List all ToS for the current Portal

### Example
```kotlin
// Import classes:
//import org.openapitools.client.infrastructure.*
//import org.openapitools.client.models.*

val apiInstance = ApiApi()
val limit : kotlin.Int = 56 // kotlin.Int | Number of results to return per page.
val offset : kotlin.Int = 56 // kotlin.Int | The initial index from which to return the results.
try {
    val result : PaginatedTosList = apiInstance.apiV2PortalTosList(limit, offset)
    println(result)
} catch (e: ClientException) {
    println("4xx response calling ApiApi#apiV2PortalTosList")
    e.printStackTrace()
} catch (e: ServerException) {
    println("5xx response calling ApiApi#apiV2PortalTosList")
    e.printStackTrace()
}
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **limit** | **kotlin.Int**| Number of results to return per page. | [optional]
 **offset** | **kotlin.Int**| The initial index from which to return the results. | [optional]

### Return type

[**PaginatedTosList**](PaginatedTosList.md)

### Authorization


Configure cookieAuth:
    ApiClient.apiKey["Session"] = ""
    ApiClient.apiKeyPrefix["Session"] = ""
Configure jwtAuth:
    ApiClient.accessToken = ""
Configure tokenAuth:
    ApiClient.apiKey["Authorization"] = ""
    ApiClient.apiKeyPrefix["Authorization"] = ""

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

<a name="apiV2PortalTosRetrieve"></a>
# **apiV2PortalTosRetrieve**
> Tos apiV2PortalTosRetrieve(uuid)



Retrieves a specific ToS

### Example
```kotlin
// Import classes:
//import org.openapitools.client.infrastructure.*
//import org.openapitools.client.models.*

val apiInstance = ApiApi()
val uuid : java.util.UUID = 38400000-8cf0-11bd-b23e-10b96e4ef00d // java.util.UUID | 
try {
    val result : Tos = apiInstance.apiV2PortalTosRetrieve(uuid)
    println(result)
} catch (e: ClientException) {
    println("4xx response calling ApiApi#apiV2PortalTosRetrieve")
    e.printStackTrace()
} catch (e: ServerException) {
    println("5xx response calling ApiApi#apiV2PortalTosRetrieve")
    e.printStackTrace()
}
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **uuid** | [**java.util.UUID**](.md)|  |

### Return type

[**Tos**](Tos.md)

### Authorization


Configure cookieAuth:
    ApiClient.apiKey["Session"] = ""
    ApiClient.apiKeyPrefix["Session"] = ""
Configure jwtAuth:
    ApiClient.accessToken = ""
Configure tokenAuth:
    ApiClient.apiKey["Authorization"] = ""
    ApiClient.apiKeyPrefix["Authorization"] = ""

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

<a name="apiV2PortfoliosActivitiesList"></a>
# **apiV2PortfoliosActivitiesList**
> PaginatedFeedActivityListList apiV2PortfoliosActivitiesList(portfolioUuid, limit, offset, target)



### Example
```kotlin
// Import classes:
//import org.openapitools.client.infrastructure.*
//import org.openapitools.client.models.*

val apiInstance = ApiApi()
val portfolioUuid : java.util.UUID = 38400000-8cf0-11bd-b23e-10b96e4ef00d // java.util.UUID | 
val limit : kotlin.Int = 56 // kotlin.Int | Number of results to return per page.
val offset : kotlin.Int = 56 // kotlin.Int | The initial index from which to return the results.
val target : kotlin.collections.List<kotlin.String> =  // kotlin.collections.List<kotlin.String> | 
try {
    val result : PaginatedFeedActivityListList = apiInstance.apiV2PortfoliosActivitiesList(portfolioUuid, limit, offset, target)
    println(result)
} catch (e: ClientException) {
    println("4xx response calling ApiApi#apiV2PortfoliosActivitiesList")
    e.printStackTrace()
} catch (e: ServerException) {
    println("5xx response calling ApiApi#apiV2PortfoliosActivitiesList")
    e.printStackTrace()
}
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **portfolioUuid** | [**java.util.UUID**](.md)|  |
 **limit** | **kotlin.Int**| Number of results to return per page. | [optional]
 **offset** | **kotlin.Int**| The initial index from which to return the results. | [optional]
 **target** | [**kotlin.collections.List&lt;kotlin.String&gt;**](kotlin.String.md)|  | [optional] [enum: , cashcorporateaction, charge, deposit, portfolio, rebalance, sharescorporateaction, withdrawal]

### Return type

[**PaginatedFeedActivityListList**](PaginatedFeedActivityListList.md)

### Authorization


Configure cookieAuth:
    ApiClient.apiKey["Session"] = ""
    ApiClient.apiKeyPrefix["Session"] = ""
Configure jwtAuth:
    ApiClient.accessToken = ""
Configure tokenAuth:
    ApiClient.apiKey["Authorization"] = ""
    ApiClient.apiKeyPrefix["Authorization"] = ""

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

<a name="apiV2PortfoliosActivitiesRetrieve"></a>
# **apiV2PortfoliosActivitiesRetrieve**
> FeedActivityList apiV2PortfoliosActivitiesRetrieve(portfolioUuid, uuid)



### Example
```kotlin
// Import classes:
//import org.openapitools.client.infrastructure.*
//import org.openapitools.client.models.*

val apiInstance = ApiApi()
val portfolioUuid : java.util.UUID = 38400000-8cf0-11bd-b23e-10b96e4ef00d // java.util.UUID | 
val uuid : java.util.UUID = 38400000-8cf0-11bd-b23e-10b96e4ef00d // java.util.UUID | 
try {
    val result : FeedActivityList = apiInstance.apiV2PortfoliosActivitiesRetrieve(portfolioUuid, uuid)
    println(result)
} catch (e: ClientException) {
    println("4xx response calling ApiApi#apiV2PortfoliosActivitiesRetrieve")
    e.printStackTrace()
} catch (e: ServerException) {
    println("5xx response calling ApiApi#apiV2PortfoliosActivitiesRetrieve")
    e.printStackTrace()
}
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **portfolioUuid** | [**java.util.UUID**](.md)|  |
 **uuid** | [**java.util.UUID**](.md)|  |

### Return type

[**FeedActivityList**](FeedActivityList.md)

### Authorization


Configure cookieAuth:
    ApiClient.apiKey["Session"] = ""
    ApiClient.apiKeyPrefix["Session"] = ""
Configure jwtAuth:
    ApiClient.accessToken = ""
Configure tokenAuth:
    ApiClient.apiKey["Authorization"] = ""
    ApiClient.apiKeyPrefix["Authorization"] = ""

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

<a name="apiV2PortfoliosAllocationsEndDay"></a>
# **apiV2PortfoliosAllocationsEndDay**
> AllocationList apiV2PortfoliosAllocationsEndDay(portfolioUuid)



### Example
```kotlin
// Import classes:
//import org.openapitools.client.infrastructure.*
//import org.openapitools.client.models.*

val apiInstance = ApiApi()
val portfolioUuid : java.util.UUID = 38400000-8cf0-11bd-b23e-10b96e4ef00d // java.util.UUID | 
try {
    val result : AllocationList = apiInstance.apiV2PortfoliosAllocationsEndDay(portfolioUuid)
    println(result)
} catch (e: ClientException) {
    println("4xx response calling ApiApi#apiV2PortfoliosAllocationsEndDay")
    e.printStackTrace()
} catch (e: ServerException) {
    println("5xx response calling ApiApi#apiV2PortfoliosAllocationsEndDay")
    e.printStackTrace()
}
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **portfolioUuid** | [**java.util.UUID**](.md)|  |

### Return type

[**AllocationList**](AllocationList.md)

### Authorization


Configure cookieAuth:
    ApiClient.apiKey["Session"] = ""
    ApiClient.apiKeyPrefix["Session"] = ""
Configure jwtAuth:
    ApiClient.accessToken = ""
Configure tokenAuth:
    ApiClient.apiKey["Authorization"] = ""
    ApiClient.apiKeyPrefix["Authorization"] = ""

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

<a name="apiV2PortfoliosAllocationsEndDayByDateRetrieve"></a>
# **apiV2PortfoliosAllocationsEndDayByDateRetrieve**
> AllocationDetail apiV2PortfoliosAllocationsEndDayByDateRetrieve(allocationDate, portfolioUuid)



### Example
```kotlin
// Import classes:
//import org.openapitools.client.infrastructure.*
//import org.openapitools.client.models.*

val apiInstance = ApiApi()
val allocationDate : kotlin.String = allocationDate_example // kotlin.String | 
val portfolioUuid : java.util.UUID = 38400000-8cf0-11bd-b23e-10b96e4ef00d // java.util.UUID | 
try {
    val result : AllocationDetail = apiInstance.apiV2PortfoliosAllocationsEndDayByDateRetrieve(allocationDate, portfolioUuid)
    println(result)
} catch (e: ClientException) {
    println("4xx response calling ApiApi#apiV2PortfoliosAllocationsEndDayByDateRetrieve")
    e.printStackTrace()
} catch (e: ServerException) {
    println("5xx response calling ApiApi#apiV2PortfoliosAllocationsEndDayByDateRetrieve")
    e.printStackTrace()
}
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **allocationDate** | **kotlin.String**|  |
 **portfolioUuid** | [**java.util.UUID**](.md)|  |

### Return type

[**AllocationDetail**](AllocationDetail.md)

### Authorization


Configure cookieAuth:
    ApiClient.apiKey["Session"] = ""
    ApiClient.apiKeyPrefix["Session"] = ""
Configure jwtAuth:
    ApiClient.accessToken = ""
Configure tokenAuth:
    ApiClient.apiKey["Authorization"] = ""
    ApiClient.apiKeyPrefix["Authorization"] = ""

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

<a name="apiV2PortfoliosAllocationsEndDayLatestRetrieve"></a>
# **apiV2PortfoliosAllocationsEndDayLatestRetrieve**
> AllocationDetail apiV2PortfoliosAllocationsEndDayLatestRetrieve(portfolioUuid)



### Example
```kotlin
// Import classes:
//import org.openapitools.client.infrastructure.*
//import org.openapitools.client.models.*

val apiInstance = ApiApi()
val portfolioUuid : java.util.UUID = 38400000-8cf0-11bd-b23e-10b96e4ef00d // java.util.UUID | 
try {
    val result : AllocationDetail = apiInstance.apiV2PortfoliosAllocationsEndDayLatestRetrieve(portfolioUuid)
    println(result)
} catch (e: ClientException) {
    println("4xx response calling ApiApi#apiV2PortfoliosAllocationsEndDayLatestRetrieve")
    e.printStackTrace()
} catch (e: ServerException) {
    println("5xx response calling ApiApi#apiV2PortfoliosAllocationsEndDayLatestRetrieve")
    e.printStackTrace()
}
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **portfolioUuid** | [**java.util.UUID**](.md)|  |

### Return type

[**AllocationDetail**](AllocationDetail.md)

### Authorization


Configure cookieAuth:
    ApiClient.apiKey["Session"] = ""
    ApiClient.apiKeyPrefix["Session"] = ""
Configure jwtAuth:
    ApiClient.accessToken = ""
Configure tokenAuth:
    ApiClient.apiKey["Authorization"] = ""
    ApiClient.apiKeyPrefix["Authorization"] = ""

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

<a name="apiV2PortfoliosAllocationsHistoryRetrieve"></a>
# **apiV2PortfoliosAllocationsHistoryRetrieve**
> apiV2PortfoliosAllocationsHistoryRetrieve(portfolio)



Allocations History for a given portfolio  It accepts two optional parameters, &#x60;date_to&#x60; and &#x60;date_from&#x60; to limit the daily allocations to a certain data range. If they are not given, all the allocations are returned.  ---  ## Parameters:   * **name**: &#x60;date_from&#x60;  * **description**: The initial date.  * **parameter type**: query param   * **name**: &#x60;date_from&#x60;  * **description**: The final date.  * **parameter type**: query param

### Example
```kotlin
// Import classes:
//import org.openapitools.client.infrastructure.*
//import org.openapitools.client.models.*

val apiInstance = ApiApi()
val portfolio : java.util.UUID = 38400000-8cf0-11bd-b23e-10b96e4ef00d // java.util.UUID | 
try {
    apiInstance.apiV2PortfoliosAllocationsHistoryRetrieve(portfolio)
} catch (e: ClientException) {
    println("4xx response calling ApiApi#apiV2PortfoliosAllocationsHistoryRetrieve")
    e.printStackTrace()
} catch (e: ServerException) {
    println("5xx response calling ApiApi#apiV2PortfoliosAllocationsHistoryRetrieve")
    e.printStackTrace()
}
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **portfolio** | [**java.util.UUID**](.md)|  |

### Return type

null (empty response body)

### Authorization


Configure cookieAuth:
    ApiClient.apiKey["Session"] = ""
    ApiClient.apiKeyPrefix["Session"] = ""
Configure jwtAuth:
    ApiClient.accessToken = ""
Configure tokenAuth:
    ApiClient.apiKey["Authorization"] = ""
    ApiClient.apiKeyPrefix["Authorization"] = ""

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: Not defined

<a name="apiV2PortfoliosAllocationsIntradayLatestRetrieve"></a>
# **apiV2PortfoliosAllocationsIntradayLatestRetrieve**
> CurrentAllocation apiV2PortfoliosAllocationsIntradayLatestRetrieve(portfolioUuid)



### Example
```kotlin
// Import classes:
//import org.openapitools.client.infrastructure.*
//import org.openapitools.client.models.*

val apiInstance = ApiApi()
val portfolioUuid : java.util.UUID = 38400000-8cf0-11bd-b23e-10b96e4ef00d // java.util.UUID | 
try {
    val result : CurrentAllocation = apiInstance.apiV2PortfoliosAllocationsIntradayLatestRetrieve(portfolioUuid)
    println(result)
} catch (e: ClientException) {
    println("4xx response calling ApiApi#apiV2PortfoliosAllocationsIntradayLatestRetrieve")
    e.printStackTrace()
} catch (e: ServerException) {
    println("5xx response calling ApiApi#apiV2PortfoliosAllocationsIntradayLatestRetrieve")
    e.printStackTrace()
}
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **portfolioUuid** | [**java.util.UUID**](.md)|  |

### Return type

[**CurrentAllocation**](CurrentAllocation.md)

### Authorization


Configure cookieAuth:
    ApiClient.apiKey["Session"] = ""
    ApiClient.apiKeyPrefix["Session"] = ""
Configure jwtAuth:
    ApiClient.accessToken = ""
Configure tokenAuth:
    ApiClient.apiKey["Authorization"] = ""
    ApiClient.apiKeyPrefix["Authorization"] = ""

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

<a name="apiV2PortfoliosAllocationsList"></a>
# **apiV2PortfoliosAllocationsList**
> PaginatedAllocationListList apiV2PortfoliosAllocationsList(portfolioUuid, limit, offset, valuationDateAfter, valuationDateBefore)



### Example
```kotlin
// Import classes:
//import org.openapitools.client.infrastructure.*
//import org.openapitools.client.models.*

val apiInstance = ApiApi()
val portfolioUuid : java.util.UUID = 38400000-8cf0-11bd-b23e-10b96e4ef00d // java.util.UUID | 
val limit : kotlin.Int = 56 // kotlin.Int | Number of results to return per page.
val offset : kotlin.Int = 56 // kotlin.Int | The initial index from which to return the results.
val valuationDateAfter : java.time.LocalDate = 2013-10-20 // java.time.LocalDate | 
val valuationDateBefore : java.time.LocalDate = 2013-10-20 // java.time.LocalDate | 
try {
    val result : PaginatedAllocationListList = apiInstance.apiV2PortfoliosAllocationsList(portfolioUuid, limit, offset, valuationDateAfter, valuationDateBefore)
    println(result)
} catch (e: ClientException) {
    println("4xx response calling ApiApi#apiV2PortfoliosAllocationsList")
    e.printStackTrace()
} catch (e: ServerException) {
    println("5xx response calling ApiApi#apiV2PortfoliosAllocationsList")
    e.printStackTrace()
}
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **portfolioUuid** | [**java.util.UUID**](.md)|  |
 **limit** | **kotlin.Int**| Number of results to return per page. | [optional]
 **offset** | **kotlin.Int**| The initial index from which to return the results. | [optional]
 **valuationDateAfter** | **java.time.LocalDate**|  | [optional]
 **valuationDateBefore** | **java.time.LocalDate**|  | [optional]

### Return type

[**PaginatedAllocationListList**](PaginatedAllocationListList.md)

### Authorization


Configure cookieAuth:
    ApiClient.apiKey["Session"] = ""
    ApiClient.apiKeyPrefix["Session"] = ""
Configure jwtAuth:
    ApiClient.accessToken = ""
Configure tokenAuth:
    ApiClient.apiKey["Authorization"] = ""
    ApiClient.apiKeyPrefix["Authorization"] = ""

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

<a name="apiV2PortfoliosAllocationsRetrieve"></a>
# **apiV2PortfoliosAllocationsRetrieve**
> AllocationList apiV2PortfoliosAllocationsRetrieve(id, portfolioUuid)



### Example
```kotlin
// Import classes:
//import org.openapitools.client.infrastructure.*
//import org.openapitools.client.models.*

val apiInstance = ApiApi()
val id : kotlin.Int = 56 // kotlin.Int | A unique integer value identifying this allocation.
val portfolioUuid : java.util.UUID = 38400000-8cf0-11bd-b23e-10b96e4ef00d // java.util.UUID | 
try {
    val result : AllocationList = apiInstance.apiV2PortfoliosAllocationsRetrieve(id, portfolioUuid)
    println(result)
} catch (e: ClientException) {
    println("4xx response calling ApiApi#apiV2PortfoliosAllocationsRetrieve")
    e.printStackTrace()
} catch (e: ServerException) {
    println("5xx response calling ApiApi#apiV2PortfoliosAllocationsRetrieve")
    e.printStackTrace()
}
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **id** | **kotlin.Int**| A unique integer value identifying this allocation. |
 **portfolioUuid** | [**java.util.UUID**](.md)|  |

### Return type

[**AllocationList**](AllocationList.md)

### Authorization


Configure cookieAuth:
    ApiClient.apiKey["Session"] = ""
    ApiClient.apiKeyPrefix["Session"] = ""
Configure jwtAuth:
    ApiClient.accessToken = ""
Configure tokenAuth:
    ApiClient.apiKey["Authorization"] = ""
    ApiClient.apiKeyPrefix["Authorization"] = ""

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

<a name="apiV2PortfoliosCreate"></a>
# **apiV2PortfoliosCreate**
> PortfolioCreate apiV2PortfoliosCreate(portfolioUuid, portfolioCreate)



Allow aggregate/group fields of the ModelView model or its related entities.    Query params should use dot notation.  Requires:     ListModelMixin (ListAPIView, ListCreateApiView)  Args:     * aggregatable_fields (dict): optional.         Keys: fields that allow aggregation (including related entities with \&quot;__\&quot; notation).         Values: django qs functions or aggregate_fns         Example:             aggregatable_fields &#x3D; {                 &#39;allocations__balance&#39;: [Sum, Avg],             }      * groupable_fields (list): optional. fields that allow grouping (including related entities with \&quot;__\&quot; notation).         Example:             groupable_fields &#x3D; [&#39;portfolio__portfolio_type&#39;]  Query Param Examples:     &gt;&gt;&gt; ?group_by&#x3D;portfolio.portfolio_type     &gt;&gt;&gt; ?aggregate[Sum]&#x3D;portfolio.allocations.balance     &gt;&gt;&gt; ?group_by&#x3D;valuation_date&amp;aggregate[Sum]&#x3D;portfolio.allocations.balance

### Example
```kotlin
// Import classes:
//import org.openapitools.client.infrastructure.*
//import org.openapitools.client.models.*

val apiInstance = ApiApi()
val portfolioUuid : java.util.UUID = 38400000-8cf0-11bd-b23e-10b96e4ef00d // java.util.UUID | 
val portfolioCreate : PortfolioCreate =  // PortfolioCreate | 
try {
    val result : PortfolioCreate = apiInstance.apiV2PortfoliosCreate(portfolioUuid, portfolioCreate)
    println(result)
} catch (e: ClientException) {
    println("4xx response calling ApiApi#apiV2PortfoliosCreate")
    e.printStackTrace()
} catch (e: ServerException) {
    println("5xx response calling ApiApi#apiV2PortfoliosCreate")
    e.printStackTrace()
}
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **portfolioUuid** | [**java.util.UUID**](.md)|  |
 **portfolioCreate** | [**PortfolioCreate**](PortfolioCreate.md)|  |

### Return type

[**PortfolioCreate**](PortfolioCreate.md)

### Authorization


Configure cookieAuth:
    ApiClient.apiKey["Session"] = ""
    ApiClient.apiKeyPrefix["Session"] = ""
Configure jwtAuth:
    ApiClient.accessToken = ""
Configure tokenAuth:
    ApiClient.apiKey["Authorization"] = ""
    ApiClient.apiKeyPrefix["Authorization"] = ""

### HTTP request headers

 - **Content-Type**: application/json, application/x-www-form-urlencoded, multipart/form-data
 - **Accept**: application/json

<a name="apiV2PortfoliosDepositsCreate"></a>
# **apiV2PortfoliosDepositsCreate**
> DepositCreate apiV2PortfoliosDepositsCreate(portfolioUuid, depositCreate)



### Example
```kotlin
// Import classes:
//import org.openapitools.client.infrastructure.*
//import org.openapitools.client.models.*

val apiInstance = ApiApi()
val portfolioUuid : java.util.UUID = 38400000-8cf0-11bd-b23e-10b96e4ef00d // java.util.UUID | 
val depositCreate : DepositCreate =  // DepositCreate | 
try {
    val result : DepositCreate = apiInstance.apiV2PortfoliosDepositsCreate(portfolioUuid, depositCreate)
    println(result)
} catch (e: ClientException) {
    println("4xx response calling ApiApi#apiV2PortfoliosDepositsCreate")
    e.printStackTrace()
} catch (e: ServerException) {
    println("5xx response calling ApiApi#apiV2PortfoliosDepositsCreate")
    e.printStackTrace()
}
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **portfolioUuid** | [**java.util.UUID**](.md)|  |
 **depositCreate** | [**DepositCreate**](DepositCreate.md)|  |

### Return type

[**DepositCreate**](DepositCreate.md)

### Authorization


Configure cookieAuth:
    ApiClient.apiKey["Session"] = ""
    ApiClient.apiKeyPrefix["Session"] = ""
Configure jwtAuth:
    ApiClient.accessToken = ""
Configure tokenAuth:
    ApiClient.apiKey["Authorization"] = ""
    ApiClient.apiKeyPrefix["Authorization"] = ""

### HTTP request headers

 - **Content-Type**: application/json, application/x-www-form-urlencoded, multipart/form-data
 - **Accept**: application/json

<a name="apiV2PortfoliosDepositsDestroy"></a>
# **apiV2PortfoliosDepositsDestroy**
> apiV2PortfoliosDepositsDestroy(portfolioUuid, uuid)



### Example
```kotlin
// Import classes:
//import org.openapitools.client.infrastructure.*
//import org.openapitools.client.models.*

val apiInstance = ApiApi()
val portfolioUuid : java.util.UUID = 38400000-8cf0-11bd-b23e-10b96e4ef00d // java.util.UUID | 
val uuid : java.util.UUID = 38400000-8cf0-11bd-b23e-10b96e4ef00d // java.util.UUID | 
try {
    apiInstance.apiV2PortfoliosDepositsDestroy(portfolioUuid, uuid)
} catch (e: ClientException) {
    println("4xx response calling ApiApi#apiV2PortfoliosDepositsDestroy")
    e.printStackTrace()
} catch (e: ServerException) {
    println("5xx response calling ApiApi#apiV2PortfoliosDepositsDestroy")
    e.printStackTrace()
}
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **portfolioUuid** | [**java.util.UUID**](.md)|  |
 **uuid** | [**java.util.UUID**](.md)|  |

### Return type

null (empty response body)

### Authorization


Configure cookieAuth:
    ApiClient.apiKey["Session"] = ""
    ApiClient.apiKeyPrefix["Session"] = ""
Configure jwtAuth:
    ApiClient.accessToken = ""
Configure tokenAuth:
    ApiClient.apiKey["Authorization"] = ""
    ApiClient.apiKeyPrefix["Authorization"] = ""

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: Not defined

<a name="apiV2PortfoliosDepositsList"></a>
# **apiV2PortfoliosDepositsList**
> PaginatedDepositListList apiV2PortfoliosDepositsList(portfolioUuid, limit, offset, status)



### Example
```kotlin
// Import classes:
//import org.openapitools.client.infrastructure.*
//import org.openapitools.client.models.*

val apiInstance = ApiApi()
val portfolioUuid : java.util.UUID = 38400000-8cf0-11bd-b23e-10b96e4ef00d // java.util.UUID | 
val limit : kotlin.Int = 56 // kotlin.Int | Number of results to return per page.
val offset : kotlin.Int = 56 // kotlin.Int | The initial index from which to return the results.
val status : kotlin.collections.List<kotlin.String> =  // kotlin.collections.List<kotlin.String> | 
try {
    val result : PaginatedDepositListList = apiInstance.apiV2PortfoliosDepositsList(portfolioUuid, limit, offset, status)
    println(result)
} catch (e: ClientException) {
    println("4xx response calling ApiApi#apiV2PortfoliosDepositsList")
    e.printStackTrace()
} catch (e: ServerException) {
    println("5xx response calling ApiApi#apiV2PortfoliosDepositsList")
    e.printStackTrace()
}
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **portfolioUuid** | [**java.util.UUID**](.md)|  |
 **limit** | **kotlin.Int**| Number of results to return per page. | [optional]
 **offset** | **kotlin.Int**| The initial index from which to return the results. | [optional]
 **status** | [**kotlin.collections.List&lt;kotlin.String&gt;**](kotlin.String.md)|  | [optional] [enum: CANCELLED, COMPLETED, ERROR, PENDING, PROCESSING, REQUESTED]

### Return type

[**PaginatedDepositListList**](PaginatedDepositListList.md)

### Authorization


Configure cookieAuth:
    ApiClient.apiKey["Session"] = ""
    ApiClient.apiKeyPrefix["Session"] = ""
Configure jwtAuth:
    ApiClient.accessToken = ""
Configure tokenAuth:
    ApiClient.apiKey["Authorization"] = ""
    ApiClient.apiKeyPrefix["Authorization"] = ""

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

<a name="apiV2PortfoliosDepositsRetrieve"></a>
# **apiV2PortfoliosDepositsRetrieve**
> DepositDetail apiV2PortfoliosDepositsRetrieve(portfolioUuid, uuid)



### Example
```kotlin
// Import classes:
//import org.openapitools.client.infrastructure.*
//import org.openapitools.client.models.*

val apiInstance = ApiApi()
val portfolioUuid : java.util.UUID = 38400000-8cf0-11bd-b23e-10b96e4ef00d // java.util.UUID | 
val uuid : java.util.UUID = 38400000-8cf0-11bd-b23e-10b96e4ef00d // java.util.UUID | 
try {
    val result : DepositDetail = apiInstance.apiV2PortfoliosDepositsRetrieve(portfolioUuid, uuid)
    println(result)
} catch (e: ClientException) {
    println("4xx response calling ApiApi#apiV2PortfoliosDepositsRetrieve")
    e.printStackTrace()
} catch (e: ServerException) {
    println("5xx response calling ApiApi#apiV2PortfoliosDepositsRetrieve")
    e.printStackTrace()
}
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **portfolioUuid** | [**java.util.UUID**](.md)|  |
 **uuid** | [**java.util.UUID**](.md)|  |

### Return type

[**DepositDetail**](DepositDetail.md)

### Authorization


Configure cookieAuth:
    ApiClient.apiKey["Session"] = ""
    ApiClient.apiKeyPrefix["Session"] = ""
Configure jwtAuth:
    ApiClient.accessToken = ""
Configure tokenAuth:
    ApiClient.apiKey["Authorization"] = ""
    ApiClient.apiKeyPrefix["Authorization"] = ""

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

<a name="apiV2PortfoliosDestroy"></a>
# **apiV2PortfoliosDestroy**
> apiV2PortfoliosDestroy(portfolioUuid)



Allow aggregate/group fields of the ModelView model or its related entities.    Query params should use dot notation.  Requires:     ListModelMixin (ListAPIView, ListCreateApiView)  Args:     * aggregatable_fields (dict): optional.         Keys: fields that allow aggregation (including related entities with \&quot;__\&quot; notation).         Values: django qs functions or aggregate_fns         Example:             aggregatable_fields &#x3D; {                 &#39;allocations__balance&#39;: [Sum, Avg],             }      * groupable_fields (list): optional. fields that allow grouping (including related entities with \&quot;__\&quot; notation).         Example:             groupable_fields &#x3D; [&#39;portfolio__portfolio_type&#39;]  Query Param Examples:     &gt;&gt;&gt; ?group_by&#x3D;portfolio.portfolio_type     &gt;&gt;&gt; ?aggregate[Sum]&#x3D;portfolio.allocations.balance     &gt;&gt;&gt; ?group_by&#x3D;valuation_date&amp;aggregate[Sum]&#x3D;portfolio.allocations.balance

### Example
```kotlin
// Import classes:
//import org.openapitools.client.infrastructure.*
//import org.openapitools.client.models.*

val apiInstance = ApiApi()
val portfolioUuid : java.util.UUID = 38400000-8cf0-11bd-b23e-10b96e4ef00d // java.util.UUID | 
try {
    apiInstance.apiV2PortfoliosDestroy(portfolioUuid)
} catch (e: ClientException) {
    println("4xx response calling ApiApi#apiV2PortfoliosDestroy")
    e.printStackTrace()
} catch (e: ServerException) {
    println("5xx response calling ApiApi#apiV2PortfoliosDestroy")
    e.printStackTrace()
}
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **portfolioUuid** | [**java.util.UUID**](.md)|  |

### Return type

null (empty response body)

### Authorization


Configure cookieAuth:
    ApiClient.apiKey["Session"] = ""
    ApiClient.apiKeyPrefix["Session"] = ""
Configure jwtAuth:
    ApiClient.accessToken = ""
Configure tokenAuth:
    ApiClient.apiKey["Authorization"] = ""
    ApiClient.apiKeyPrefix["Authorization"] = ""

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: Not defined

<a name="apiV2PortfoliosList"></a>
# **apiV2PortfoliosList**
> PaginatedPortfolioListList apiV2PortfoliosList(portfolioUuid, externalCustodianId, limit, offset, status, valuationDateAfter, valuationDateBefore)



Allow aggregate/group fields of the ModelView model or its related entities.    Query params should use dot notation.  Requires:     ListModelMixin (ListAPIView, ListCreateApiView)  Args:     * aggregatable_fields (dict): optional.         Keys: fields that allow aggregation (including related entities with \&quot;__\&quot; notation).         Values: django qs functions or aggregate_fns         Example:             aggregatable_fields &#x3D; {                 &#39;allocations__balance&#39;: [Sum, Avg],             }      * groupable_fields (list): optional. fields that allow grouping (including related entities with \&quot;__\&quot; notation).         Example:             groupable_fields &#x3D; [&#39;portfolio__portfolio_type&#39;]  Query Param Examples:     &gt;&gt;&gt; ?group_by&#x3D;portfolio.portfolio_type     &gt;&gt;&gt; ?aggregate[Sum]&#x3D;portfolio.allocations.balance     &gt;&gt;&gt; ?group_by&#x3D;valuation_date&amp;aggregate[Sum]&#x3D;portfolio.allocations.balance

### Example
```kotlin
// Import classes:
//import org.openapitools.client.infrastructure.*
//import org.openapitools.client.models.*

val apiInstance = ApiApi()
val portfolioUuid : java.util.UUID = 38400000-8cf0-11bd-b23e-10b96e4ef00d // java.util.UUID | 
val externalCustodianId : kotlin.String = externalCustodianId_example // kotlin.String | 
val limit : kotlin.Int = 56 // kotlin.Int | Number of results to return per page.
val offset : kotlin.Int = 56 // kotlin.Int | The initial index from which to return the results.
val status : kotlin.collections.List<kotlin.String> =  // kotlin.collections.List<kotlin.String> | 
val valuationDateAfter : java.time.LocalDate = 2013-10-20 // java.time.LocalDate | 
val valuationDateBefore : java.time.LocalDate = 2013-10-20 // java.time.LocalDate | 
try {
    val result : PaginatedPortfolioListList = apiInstance.apiV2PortfoliosList(portfolioUuid, externalCustodianId, limit, offset, status, valuationDateAfter, valuationDateBefore)
    println(result)
} catch (e: ClientException) {
    println("4xx response calling ApiApi#apiV2PortfoliosList")
    e.printStackTrace()
} catch (e: ServerException) {
    println("5xx response calling ApiApi#apiV2PortfoliosList")
    e.printStackTrace()
}
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **portfolioUuid** | [**java.util.UUID**](.md)|  |
 **externalCustodianId** | **kotlin.String**|  | [optional]
 **limit** | **kotlin.Int**| Number of results to return per page. | [optional]
 **offset** | **kotlin.Int**| The initial index from which to return the results. | [optional]
 **status** | [**kotlin.collections.List&lt;kotlin.String&gt;**](kotlin.String.md)|  | [optional] [enum: ACTIVE, DELETED, DELETING, PENDING]
 **valuationDateAfter** | **java.time.LocalDate**|  | [optional]
 **valuationDateBefore** | **java.time.LocalDate**|  | [optional]

### Return type

[**PaginatedPortfolioListList**](PaginatedPortfolioListList.md)

### Authorization


Configure cookieAuth:
    ApiClient.apiKey["Session"] = ""
    ApiClient.apiKeyPrefix["Session"] = ""
Configure jwtAuth:
    ApiClient.accessToken = ""
Configure tokenAuth:
    ApiClient.apiKey["Authorization"] = ""
    ApiClient.apiKeyPrefix["Authorization"] = ""

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

<a name="apiV2PortfoliosOrdersCreate"></a>
# **apiV2PortfoliosOrdersCreate**
> CreateOrder apiV2PortfoliosOrdersCreate(portfolioUuid, createOrder)



### Example
```kotlin
// Import classes:
//import org.openapitools.client.infrastructure.*
//import org.openapitools.client.models.*

val apiInstance = ApiApi()
val portfolioUuid : java.util.UUID = 38400000-8cf0-11bd-b23e-10b96e4ef00d // java.util.UUID | 
val createOrder : CreateOrder =  // CreateOrder | 
try {
    val result : CreateOrder = apiInstance.apiV2PortfoliosOrdersCreate(portfolioUuid, createOrder)
    println(result)
} catch (e: ClientException) {
    println("4xx response calling ApiApi#apiV2PortfoliosOrdersCreate")
    e.printStackTrace()
} catch (e: ServerException) {
    println("5xx response calling ApiApi#apiV2PortfoliosOrdersCreate")
    e.printStackTrace()
}
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **portfolioUuid** | [**java.util.UUID**](.md)|  |
 **createOrder** | [**CreateOrder**](CreateOrder.md)|  |

### Return type

[**CreateOrder**](CreateOrder.md)

### Authorization


Configure cookieAuth:
    ApiClient.apiKey["Session"] = ""
    ApiClient.apiKeyPrefix["Session"] = ""
Configure jwtAuth:
    ApiClient.accessToken = ""
Configure tokenAuth:
    ApiClient.apiKey["Authorization"] = ""
    ApiClient.apiKeyPrefix["Authorization"] = ""

### HTTP request headers

 - **Content-Type**: application/json, application/x-www-form-urlencoded, multipart/form-data
 - **Accept**: application/json

<a name="apiV2PortfoliosOrdersDestroy"></a>
# **apiV2PortfoliosOrdersDestroy**
> apiV2PortfoliosOrdersDestroy(portfolioUuid, uuid)



Cancel or request cancellation to the broker

### Example
```kotlin
// Import classes:
//import org.openapitools.client.infrastructure.*
//import org.openapitools.client.models.*

val apiInstance = ApiApi()
val portfolioUuid : java.util.UUID = 38400000-8cf0-11bd-b23e-10b96e4ef00d // java.util.UUID | 
val uuid : java.util.UUID = 38400000-8cf0-11bd-b23e-10b96e4ef00d // java.util.UUID | 
try {
    apiInstance.apiV2PortfoliosOrdersDestroy(portfolioUuid, uuid)
} catch (e: ClientException) {
    println("4xx response calling ApiApi#apiV2PortfoliosOrdersDestroy")
    e.printStackTrace()
} catch (e: ServerException) {
    println("5xx response calling ApiApi#apiV2PortfoliosOrdersDestroy")
    e.printStackTrace()
}
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **portfolioUuid** | [**java.util.UUID**](.md)|  |
 **uuid** | [**java.util.UUID**](.md)|  |

### Return type

null (empty response body)

### Authorization


Configure cookieAuth:
    ApiClient.apiKey["Session"] = ""
    ApiClient.apiKeyPrefix["Session"] = ""
Configure jwtAuth:
    ApiClient.accessToken = ""
Configure tokenAuth:
    ApiClient.apiKey["Authorization"] = ""
    ApiClient.apiKeyPrefix["Authorization"] = ""

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: Not defined

<a name="apiV2PortfoliosOrdersList"></a>
# **apiV2PortfoliosOrdersList**
> PaginatedOrderListList apiV2PortfoliosOrdersList(portfolioUuid, adviceExternalId, asset, completedAfter, completedBefore, extraData, limit, offset, portfolio, status)



### Example
```kotlin
// Import classes:
//import org.openapitools.client.infrastructure.*
//import org.openapitools.client.models.*

val apiInstance = ApiApi()
val portfolioUuid : java.util.UUID = 38400000-8cf0-11bd-b23e-10b96e4ef00d // java.util.UUID | 
val adviceExternalId : kotlin.String = adviceExternalId_example // kotlin.String | 
val asset : kotlin.String = asset_example // kotlin.String | 
val completedAfter : java.time.LocalDate = 2013-10-20 // java.time.LocalDate | 
val completedBefore : java.time.LocalDate = 2013-10-20 // java.time.LocalDate | 
val extraData : kotlin.collections.Map<kotlin.String, kotlin.Any> = Object // kotlin.collections.Map<kotlin.String, kotlin.Any> | Additional order attributes for the specific portal
val limit : kotlin.Int = 56 // kotlin.Int | Number of results to return per page.
val offset : kotlin.Int = 56 // kotlin.Int | The initial index from which to return the results.
val portfolio : kotlin.String = portfolio_example // kotlin.String | 
val status : kotlin.String = status_example // kotlin.String | 
try {
    val result : PaginatedOrderListList = apiInstance.apiV2PortfoliosOrdersList(portfolioUuid, adviceExternalId, asset, completedAfter, completedBefore, extraData, limit, offset, portfolio, status)
    println(result)
} catch (e: ClientException) {
    println("4xx response calling ApiApi#apiV2PortfoliosOrdersList")
    e.printStackTrace()
} catch (e: ServerException) {
    println("5xx response calling ApiApi#apiV2PortfoliosOrdersList")
    e.printStackTrace()
}
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **portfolioUuid** | [**java.util.UUID**](.md)|  |
 **adviceExternalId** | **kotlin.String**|  | [optional]
 **asset** | **kotlin.String**|  | [optional]
 **completedAfter** | **java.time.LocalDate**|  | [optional]
 **completedBefore** | **java.time.LocalDate**|  | [optional]
 **extraData** | [**kotlin.collections.Map&lt;kotlin.String, kotlin.Any&gt;**](kotlin.Any.md)| Additional order attributes for the specific portal | [optional]
 **limit** | **kotlin.Int**| Number of results to return per page. | [optional]
 **offset** | **kotlin.Int**| The initial index from which to return the results. | [optional]
 **portfolio** | **kotlin.String**|  | [optional]
 **status** | **kotlin.String**|  | [optional]

### Return type

[**PaginatedOrderListList**](PaginatedOrderListList.md)

### Authorization


Configure cookieAuth:
    ApiClient.apiKey["Session"] = ""
    ApiClient.apiKeyPrefix["Session"] = ""
Configure jwtAuth:
    ApiClient.accessToken = ""
Configure tokenAuth:
    ApiClient.apiKey["Authorization"] = ""
    ApiClient.apiKeyPrefix["Authorization"] = ""

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

<a name="apiV2PortfoliosOrdersRetrieve"></a>
# **apiV2PortfoliosOrdersRetrieve**
> OrderList apiV2PortfoliosOrdersRetrieve(portfolioUuid, uuid)



### Example
```kotlin
// Import classes:
//import org.openapitools.client.infrastructure.*
//import org.openapitools.client.models.*

val apiInstance = ApiApi()
val portfolioUuid : java.util.UUID = 38400000-8cf0-11bd-b23e-10b96e4ef00d // java.util.UUID | 
val uuid : java.util.UUID = 38400000-8cf0-11bd-b23e-10b96e4ef00d // java.util.UUID | 
try {
    val result : OrderList = apiInstance.apiV2PortfoliosOrdersRetrieve(portfolioUuid, uuid)
    println(result)
} catch (e: ClientException) {
    println("4xx response calling ApiApi#apiV2PortfoliosOrdersRetrieve")
    e.printStackTrace()
} catch (e: ServerException) {
    println("5xx response calling ApiApi#apiV2PortfoliosOrdersRetrieve")
    e.printStackTrace()
}
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **portfolioUuid** | [**java.util.UUID**](.md)|  |
 **uuid** | [**java.util.UUID**](.md)|  |

### Return type

[**OrderList**](OrderList.md)

### Authorization


Configure cookieAuth:
    ApiClient.apiKey["Session"] = ""
    ApiClient.apiKeyPrefix["Session"] = ""
Configure jwtAuth:
    ApiClient.accessToken = ""
Configure tokenAuth:
    ApiClient.apiKey["Authorization"] = ""
    ApiClient.apiKeyPrefix["Authorization"] = ""

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

<a name="apiV2PortfoliosPartialUpdate"></a>
# **apiV2PortfoliosPartialUpdate**
> PortfolioUpdate apiV2PortfoliosPartialUpdate(portfolioUuid, patchedPortfolioUpdate)



Allow aggregate/group fields of the ModelView model or its related entities.    Query params should use dot notation.  Requires:     ListModelMixin (ListAPIView, ListCreateApiView)  Args:     * aggregatable_fields (dict): optional.         Keys: fields that allow aggregation (including related entities with \&quot;__\&quot; notation).         Values: django qs functions or aggregate_fns         Example:             aggregatable_fields &#x3D; {                 &#39;allocations__balance&#39;: [Sum, Avg],             }      * groupable_fields (list): optional. fields that allow grouping (including related entities with \&quot;__\&quot; notation).         Example:             groupable_fields &#x3D; [&#39;portfolio__portfolio_type&#39;]  Query Param Examples:     &gt;&gt;&gt; ?group_by&#x3D;portfolio.portfolio_type     &gt;&gt;&gt; ?aggregate[Sum]&#x3D;portfolio.allocations.balance     &gt;&gt;&gt; ?group_by&#x3D;valuation_date&amp;aggregate[Sum]&#x3D;portfolio.allocations.balance

### Example
```kotlin
// Import classes:
//import org.openapitools.client.infrastructure.*
//import org.openapitools.client.models.*

val apiInstance = ApiApi()
val portfolioUuid : java.util.UUID = 38400000-8cf0-11bd-b23e-10b96e4ef00d // java.util.UUID | 
val patchedPortfolioUpdate : PatchedPortfolioUpdate =  // PatchedPortfolioUpdate | 
try {
    val result : PortfolioUpdate = apiInstance.apiV2PortfoliosPartialUpdate(portfolioUuid, patchedPortfolioUpdate)
    println(result)
} catch (e: ClientException) {
    println("4xx response calling ApiApi#apiV2PortfoliosPartialUpdate")
    e.printStackTrace()
} catch (e: ServerException) {
    println("5xx response calling ApiApi#apiV2PortfoliosPartialUpdate")
    e.printStackTrace()
}
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **portfolioUuid** | [**java.util.UUID**](.md)|  |
 **patchedPortfolioUpdate** | [**PatchedPortfolioUpdate**](PatchedPortfolioUpdate.md)|  | [optional]

### Return type

[**PortfolioUpdate**](PortfolioUpdate.md)

### Authorization


Configure cookieAuth:
    ApiClient.apiKey["Session"] = ""
    ApiClient.apiKeyPrefix["Session"] = ""
Configure jwtAuth:
    ApiClient.accessToken = ""
Configure tokenAuth:
    ApiClient.apiKey["Authorization"] = ""
    ApiClient.apiKeyPrefix["Authorization"] = ""

### HTTP request headers

 - **Content-Type**: application/json, application/x-www-form-urlencoded, multipart/form-data
 - **Accept**: application/json

<a name="apiV2PortfoliosPerformanceMwrrList"></a>
# **apiV2PortfoliosPerformanceMwrrList**
> PaginatedPortfolioPerformanceList apiV2PortfoliosPerformanceMwrrList(portfolioUuid, dateAfter, dateBefore, limit, offset)



### Example
```kotlin
// Import classes:
//import org.openapitools.client.infrastructure.*
//import org.openapitools.client.models.*

val apiInstance = ApiApi()
val portfolioUuid : java.util.UUID = 38400000-8cf0-11bd-b23e-10b96e4ef00d // java.util.UUID | 
val dateAfter : java.time.LocalDate = 2013-10-20 // java.time.LocalDate | 
val dateBefore : java.time.LocalDate = 2013-10-20 // java.time.LocalDate | 
val limit : kotlin.Int = 56 // kotlin.Int | Number of results to return per page.
val offset : kotlin.Int = 56 // kotlin.Int | The initial index from which to return the results.
try {
    val result : PaginatedPortfolioPerformanceList = apiInstance.apiV2PortfoliosPerformanceMwrrList(portfolioUuid, dateAfter, dateBefore, limit, offset)
    println(result)
} catch (e: ClientException) {
    println("4xx response calling ApiApi#apiV2PortfoliosPerformanceMwrrList")
    e.printStackTrace()
} catch (e: ServerException) {
    println("5xx response calling ApiApi#apiV2PortfoliosPerformanceMwrrList")
    e.printStackTrace()
}
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **portfolioUuid** | [**java.util.UUID**](.md)|  |
 **dateAfter** | **java.time.LocalDate**|  | [optional]
 **dateBefore** | **java.time.LocalDate**|  | [optional]
 **limit** | **kotlin.Int**| Number of results to return per page. | [optional]
 **offset** | **kotlin.Int**| The initial index from which to return the results. | [optional]

### Return type

[**PaginatedPortfolioPerformanceList**](PaginatedPortfolioPerformanceList.md)

### Authorization


Configure cookieAuth:
    ApiClient.apiKey["Session"] = ""
    ApiClient.apiKeyPrefix["Session"] = ""
Configure jwtAuth:
    ApiClient.accessToken = ""
Configure tokenAuth:
    ApiClient.apiKey["Authorization"] = ""
    ApiClient.apiKeyPrefix["Authorization"] = ""

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

<a name="apiV2PortfoliosPerformancePositionsList"></a>
# **apiV2PortfoliosPerformancePositionsList**
> PaginatedPortfolioPerformancePositionsList apiV2PortfoliosPerformancePositionsList(portfolioUuid, limit, offset)



### Example
```kotlin
// Import classes:
//import org.openapitools.client.infrastructure.*
//import org.openapitools.client.models.*

val apiInstance = ApiApi()
val portfolioUuid : java.util.UUID = 38400000-8cf0-11bd-b23e-10b96e4ef00d // java.util.UUID | 
val limit : kotlin.Int = 56 // kotlin.Int | Number of results to return per page.
val offset : kotlin.Int = 56 // kotlin.Int | The initial index from which to return the results.
try {
    val result : PaginatedPortfolioPerformancePositionsList = apiInstance.apiV2PortfoliosPerformancePositionsList(portfolioUuid, limit, offset)
    println(result)
} catch (e: ClientException) {
    println("4xx response calling ApiApi#apiV2PortfoliosPerformancePositionsList")
    e.printStackTrace()
} catch (e: ServerException) {
    println("5xx response calling ApiApi#apiV2PortfoliosPerformancePositionsList")
    e.printStackTrace()
}
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **portfolioUuid** | [**java.util.UUID**](.md)|  |
 **limit** | **kotlin.Int**| Number of results to return per page. | [optional]
 **offset** | **kotlin.Int**| The initial index from which to return the results. | [optional]

### Return type

[**PaginatedPortfolioPerformancePositionsList**](PaginatedPortfolioPerformancePositionsList.md)

### Authorization


Configure cookieAuth:
    ApiClient.apiKey["Session"] = ""
    ApiClient.apiKeyPrefix["Session"] = ""
Configure jwtAuth:
    ApiClient.accessToken = ""
Configure tokenAuth:
    ApiClient.apiKey["Authorization"] = ""
    ApiClient.apiKeyPrefix["Authorization"] = ""

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

<a name="apiV2PortfoliosPerformanceTwrrList"></a>
# **apiV2PortfoliosPerformanceTwrrList**
> PaginatedPortfolioPerformanceList apiV2PortfoliosPerformanceTwrrList(portfolioUuid, dateAfter, dateBefore, limit, offset)



### Example
```kotlin
// Import classes:
//import org.openapitools.client.infrastructure.*
//import org.openapitools.client.models.*

val apiInstance = ApiApi()
val portfolioUuid : java.util.UUID = 38400000-8cf0-11bd-b23e-10b96e4ef00d // java.util.UUID | 
val dateAfter : java.time.LocalDate = 2013-10-20 // java.time.LocalDate | 
val dateBefore : java.time.LocalDate = 2013-10-20 // java.time.LocalDate | 
val limit : kotlin.Int = 56 // kotlin.Int | Number of results to return per page.
val offset : kotlin.Int = 56 // kotlin.Int | The initial index from which to return the results.
try {
    val result : PaginatedPortfolioPerformanceList = apiInstance.apiV2PortfoliosPerformanceTwrrList(portfolioUuid, dateAfter, dateBefore, limit, offset)
    println(result)
} catch (e: ClientException) {
    println("4xx response calling ApiApi#apiV2PortfoliosPerformanceTwrrList")
    e.printStackTrace()
} catch (e: ServerException) {
    println("5xx response calling ApiApi#apiV2PortfoliosPerformanceTwrrList")
    e.printStackTrace()
}
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **portfolioUuid** | [**java.util.UUID**](.md)|  |
 **dateAfter** | **java.time.LocalDate**|  | [optional]
 **dateBefore** | **java.time.LocalDate**|  | [optional]
 **limit** | **kotlin.Int**| Number of results to return per page. | [optional]
 **offset** | **kotlin.Int**| The initial index from which to return the results. | [optional]

### Return type

[**PaginatedPortfolioPerformanceList**](PaginatedPortfolioPerformanceList.md)

### Authorization


Configure cookieAuth:
    ApiClient.apiKey["Session"] = ""
    ApiClient.apiKeyPrefix["Session"] = ""
Configure jwtAuth:
    ApiClient.accessToken = ""
Configure tokenAuth:
    ApiClient.apiKey["Authorization"] = ""
    ApiClient.apiKeyPrefix["Authorization"] = ""

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

<a name="apiV2PortfoliosPortfoliotypesList"></a>
# **apiV2PortfoliosPortfoliotypesList**
> PaginatedPortfolioTypeList apiV2PortfoliosPortfoliotypesList(limit, offset)



### Example
```kotlin
// Import classes:
//import org.openapitools.client.infrastructure.*
//import org.openapitools.client.models.*

val apiInstance = ApiApi()
val limit : kotlin.Int = 56 // kotlin.Int | Number of results to return per page.
val offset : kotlin.Int = 56 // kotlin.Int | The initial index from which to return the results.
try {
    val result : PaginatedPortfolioTypeList = apiInstance.apiV2PortfoliosPortfoliotypesList(limit, offset)
    println(result)
} catch (e: ClientException) {
    println("4xx response calling ApiApi#apiV2PortfoliosPortfoliotypesList")
    e.printStackTrace()
} catch (e: ServerException) {
    println("5xx response calling ApiApi#apiV2PortfoliosPortfoliotypesList")
    e.printStackTrace()
}
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **limit** | **kotlin.Int**| Number of results to return per page. | [optional]
 **offset** | **kotlin.Int**| The initial index from which to return the results. | [optional]

### Return type

[**PaginatedPortfolioTypeList**](PaginatedPortfolioTypeList.md)

### Authorization


Configure cookieAuth:
    ApiClient.apiKey["Session"] = ""
    ApiClient.apiKeyPrefix["Session"] = ""
Configure jwtAuth:
    ApiClient.accessToken = ""
Configure tokenAuth:
    ApiClient.apiKey["Authorization"] = ""
    ApiClient.apiKeyPrefix["Authorization"] = ""

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

<a name="apiV2PortfoliosPortfoliotypesRestrictionsList"></a>
# **apiV2PortfoliosPortfoliotypesRestrictionsList**
> PaginatedBasePortfolioTypeRestrictionsList apiV2PortfoliosPortfoliotypesRestrictionsList(code, limit, offset)



### Example
```kotlin
// Import classes:
//import org.openapitools.client.infrastructure.*
//import org.openapitools.client.models.*

val apiInstance = ApiApi()
val code : kotlin.String = code_example // kotlin.String | 
val limit : kotlin.Int = 56 // kotlin.Int | Number of results to return per page.
val offset : kotlin.Int = 56 // kotlin.Int | The initial index from which to return the results.
try {
    val result : PaginatedBasePortfolioTypeRestrictionsList = apiInstance.apiV2PortfoliosPortfoliotypesRestrictionsList(code, limit, offset)
    println(result)
} catch (e: ClientException) {
    println("4xx response calling ApiApi#apiV2PortfoliosPortfoliotypesRestrictionsList")
    e.printStackTrace()
} catch (e: ServerException) {
    println("5xx response calling ApiApi#apiV2PortfoliosPortfoliotypesRestrictionsList")
    e.printStackTrace()
}
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **code** | **kotlin.String**|  |
 **limit** | **kotlin.Int**| Number of results to return per page. | [optional]
 **offset** | **kotlin.Int**| The initial index from which to return the results. | [optional]

### Return type

[**PaginatedBasePortfolioTypeRestrictionsList**](PaginatedBasePortfolioTypeRestrictionsList.md)

### Authorization


Configure cookieAuth:
    ApiClient.apiKey["Session"] = ""
    ApiClient.apiKeyPrefix["Session"] = ""
Configure jwtAuth:
    ApiClient.accessToken = ""
Configure tokenAuth:
    ApiClient.apiKey["Authorization"] = ""
    ApiClient.apiKeyPrefix["Authorization"] = ""

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

<a name="apiV2PortfoliosRebalancesList"></a>
# **apiV2PortfoliosRebalancesList**
> PaginatedRebalanceList apiV2PortfoliosRebalancesList(portfolioUuid, limit, offset)



### Example
```kotlin
// Import classes:
//import org.openapitools.client.infrastructure.*
//import org.openapitools.client.models.*

val apiInstance = ApiApi()
val portfolioUuid : java.util.UUID = 38400000-8cf0-11bd-b23e-10b96e4ef00d // java.util.UUID | 
val limit : kotlin.Int = 56 // kotlin.Int | Number of results to return per page.
val offset : kotlin.Int = 56 // kotlin.Int | The initial index from which to return the results.
try {
    val result : PaginatedRebalanceList = apiInstance.apiV2PortfoliosRebalancesList(portfolioUuid, limit, offset)
    println(result)
} catch (e: ClientException) {
    println("4xx response calling ApiApi#apiV2PortfoliosRebalancesList")
    e.printStackTrace()
} catch (e: ServerException) {
    println("5xx response calling ApiApi#apiV2PortfoliosRebalancesList")
    e.printStackTrace()
}
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **portfolioUuid** | [**java.util.UUID**](.md)|  |
 **limit** | **kotlin.Int**| Number of results to return per page. | [optional]
 **offset** | **kotlin.Int**| The initial index from which to return the results. | [optional]

### Return type

[**PaginatedRebalanceList**](PaginatedRebalanceList.md)

### Authorization


Configure cookieAuth:
    ApiClient.apiKey["Session"] = ""
    ApiClient.apiKeyPrefix["Session"] = ""
Configure jwtAuth:
    ApiClient.accessToken = ""
Configure tokenAuth:
    ApiClient.apiKey["Authorization"] = ""
    ApiClient.apiKeyPrefix["Authorization"] = ""

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

<a name="apiV2PortfoliosRebalancesRetrieve"></a>
# **apiV2PortfoliosRebalancesRetrieve**
> Rebalance apiV2PortfoliosRebalancesRetrieve(portfolioUuid, uuid)



### Example
```kotlin
// Import classes:
//import org.openapitools.client.infrastructure.*
//import org.openapitools.client.models.*

val apiInstance = ApiApi()
val portfolioUuid : java.util.UUID = 38400000-8cf0-11bd-b23e-10b96e4ef00d // java.util.UUID | 
val uuid : java.util.UUID = 38400000-8cf0-11bd-b23e-10b96e4ef00d // java.util.UUID | 
try {
    val result : Rebalance = apiInstance.apiV2PortfoliosRebalancesRetrieve(portfolioUuid, uuid)
    println(result)
} catch (e: ClientException) {
    println("4xx response calling ApiApi#apiV2PortfoliosRebalancesRetrieve")
    e.printStackTrace()
} catch (e: ServerException) {
    println("5xx response calling ApiApi#apiV2PortfoliosRebalancesRetrieve")
    e.printStackTrace()
}
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **portfolioUuid** | [**java.util.UUID**](.md)|  |
 **uuid** | [**java.util.UUID**](.md)|  |

### Return type

[**Rebalance**](Rebalance.md)

### Authorization


Configure cookieAuth:
    ApiClient.apiKey["Session"] = ""
    ApiClient.apiKeyPrefix["Session"] = ""
Configure jwtAuth:
    ApiClient.accessToken = ""
Configure tokenAuth:
    ApiClient.apiKey["Authorization"] = ""
    ApiClient.apiKeyPrefix["Authorization"] = ""

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

<a name="apiV2PortfoliosRestrictionsRetrieve"></a>
# **apiV2PortfoliosRestrictionsRetrieve**
> PortfolioTypeRestrictions apiV2PortfoliosRestrictionsRetrieve(portfolioUuid)



Allow aggregate/group fields of the ModelView model or its related entities.    Query params should use dot notation.  Requires:     ListModelMixin (ListAPIView, ListCreateApiView)  Args:     * aggregatable_fields (dict): optional.         Keys: fields that allow aggregation (including related entities with \&quot;__\&quot; notation).         Values: django qs functions or aggregate_fns         Example:             aggregatable_fields &#x3D; {                 &#39;allocations__balance&#39;: [Sum, Avg],             }      * groupable_fields (list): optional. fields that allow grouping (including related entities with \&quot;__\&quot; notation).         Example:             groupable_fields &#x3D; [&#39;portfolio__portfolio_type&#39;]  Query Param Examples:     &gt;&gt;&gt; ?group_by&#x3D;portfolio.portfolio_type     &gt;&gt;&gt; ?aggregate[Sum]&#x3D;portfolio.allocations.balance     &gt;&gt;&gt; ?group_by&#x3D;valuation_date&amp;aggregate[Sum]&#x3D;portfolio.allocations.balance

### Example
```kotlin
// Import classes:
//import org.openapitools.client.infrastructure.*
//import org.openapitools.client.models.*

val apiInstance = ApiApi()
val portfolioUuid : java.util.UUID = 38400000-8cf0-11bd-b23e-10b96e4ef00d // java.util.UUID | 
try {
    val result : PortfolioTypeRestrictions = apiInstance.apiV2PortfoliosRestrictionsRetrieve(portfolioUuid)
    println(result)
} catch (e: ClientException) {
    println("4xx response calling ApiApi#apiV2PortfoliosRestrictionsRetrieve")
    e.printStackTrace()
} catch (e: ServerException) {
    println("5xx response calling ApiApi#apiV2PortfoliosRestrictionsRetrieve")
    e.printStackTrace()
}
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **portfolioUuid** | [**java.util.UUID**](.md)|  |

### Return type

[**PortfolioTypeRestrictions**](PortfolioTypeRestrictions.md)

### Authorization


Configure cookieAuth:
    ApiClient.apiKey["Session"] = ""
    ApiClient.apiKeyPrefix["Session"] = ""
Configure jwtAuth:
    ApiClient.accessToken = ""
Configure tokenAuth:
    ApiClient.apiKey["Authorization"] = ""
    ApiClient.apiKeyPrefix["Authorization"] = ""

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

<a name="apiV2PortfoliosRetrieve"></a>
# **apiV2PortfoliosRetrieve**
> PortfolioDetail apiV2PortfoliosRetrieve(portfolioUuid)



Allow aggregate/group fields of the ModelView model or its related entities.    Query params should use dot notation.  Requires:     ListModelMixin (ListAPIView, ListCreateApiView)  Args:     * aggregatable_fields (dict): optional.         Keys: fields that allow aggregation (including related entities with \&quot;__\&quot; notation).         Values: django qs functions or aggregate_fns         Example:             aggregatable_fields &#x3D; {                 &#39;allocations__balance&#39;: [Sum, Avg],             }      * groupable_fields (list): optional. fields that allow grouping (including related entities with \&quot;__\&quot; notation).         Example:             groupable_fields &#x3D; [&#39;portfolio__portfolio_type&#39;]  Query Param Examples:     &gt;&gt;&gt; ?group_by&#x3D;portfolio.portfolio_type     &gt;&gt;&gt; ?aggregate[Sum]&#x3D;portfolio.allocations.balance     &gt;&gt;&gt; ?group_by&#x3D;valuation_date&amp;aggregate[Sum]&#x3D;portfolio.allocations.balance

### Example
```kotlin
// Import classes:
//import org.openapitools.client.infrastructure.*
//import org.openapitools.client.models.*

val apiInstance = ApiApi()
val portfolioUuid : java.util.UUID = 38400000-8cf0-11bd-b23e-10b96e4ef00d // java.util.UUID | 
try {
    val result : PortfolioDetail = apiInstance.apiV2PortfoliosRetrieve(portfolioUuid)
    println(result)
} catch (e: ClientException) {
    println("4xx response calling ApiApi#apiV2PortfoliosRetrieve")
    e.printStackTrace()
} catch (e: ServerException) {
    println("5xx response calling ApiApi#apiV2PortfoliosRetrieve")
    e.printStackTrace()
}
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **portfolioUuid** | [**java.util.UUID**](.md)|  |

### Return type

[**PortfolioDetail**](PortfolioDetail.md)

### Authorization


Configure cookieAuth:
    ApiClient.apiKey["Session"] = ""
    ApiClient.apiKeyPrefix["Session"] = ""
Configure jwtAuth:
    ApiClient.accessToken = ""
Configure tokenAuth:
    ApiClient.apiKey["Authorization"] = ""
    ApiClient.apiKeyPrefix["Authorization"] = ""

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

<a name="apiV2PortfoliosUpdate"></a>
# **apiV2PortfoliosUpdate**
> PortfolioUpdate apiV2PortfoliosUpdate(portfolioUuid, portfolioUpdate)



Allow aggregate/group fields of the ModelView model or its related entities.    Query params should use dot notation.  Requires:     ListModelMixin (ListAPIView, ListCreateApiView)  Args:     * aggregatable_fields (dict): optional.         Keys: fields that allow aggregation (including related entities with \&quot;__\&quot; notation).         Values: django qs functions or aggregate_fns         Example:             aggregatable_fields &#x3D; {                 &#39;allocations__balance&#39;: [Sum, Avg],             }      * groupable_fields (list): optional. fields that allow grouping (including related entities with \&quot;__\&quot; notation).         Example:             groupable_fields &#x3D; [&#39;portfolio__portfolio_type&#39;]  Query Param Examples:     &gt;&gt;&gt; ?group_by&#x3D;portfolio.portfolio_type     &gt;&gt;&gt; ?aggregate[Sum]&#x3D;portfolio.allocations.balance     &gt;&gt;&gt; ?group_by&#x3D;valuation_date&amp;aggregate[Sum]&#x3D;portfolio.allocations.balance

### Example
```kotlin
// Import classes:
//import org.openapitools.client.infrastructure.*
//import org.openapitools.client.models.*

val apiInstance = ApiApi()
val portfolioUuid : java.util.UUID = 38400000-8cf0-11bd-b23e-10b96e4ef00d // java.util.UUID | 
val portfolioUpdate : PortfolioUpdate =  // PortfolioUpdate | 
try {
    val result : PortfolioUpdate = apiInstance.apiV2PortfoliosUpdate(portfolioUuid, portfolioUpdate)
    println(result)
} catch (e: ClientException) {
    println("4xx response calling ApiApi#apiV2PortfoliosUpdate")
    e.printStackTrace()
} catch (e: ServerException) {
    println("5xx response calling ApiApi#apiV2PortfoliosUpdate")
    e.printStackTrace()
}
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **portfolioUuid** | [**java.util.UUID**](.md)|  |
 **portfolioUpdate** | [**PortfolioUpdate**](PortfolioUpdate.md)|  |

### Return type

[**PortfolioUpdate**](PortfolioUpdate.md)

### Authorization


Configure cookieAuth:
    ApiClient.apiKey["Session"] = ""
    ApiClient.apiKeyPrefix["Session"] = ""
Configure jwtAuth:
    ApiClient.accessToken = ""
Configure tokenAuth:
    ApiClient.apiKey["Authorization"] = ""
    ApiClient.apiKeyPrefix["Authorization"] = ""

### HTTP request headers

 - **Content-Type**: application/json, application/x-www-form-urlencoded, multipart/form-data
 - **Accept**: application/json

<a name="apiV2PortfoliosWithdrawalsCreate"></a>
# **apiV2PortfoliosWithdrawalsCreate**
> InvestorWithdrawalCreate apiV2PortfoliosWithdrawalsCreate(portfolioUuid, investorWithdrawalCreate)



### Example
```kotlin
// Import classes:
//import org.openapitools.client.infrastructure.*
//import org.openapitools.client.models.*

val apiInstance = ApiApi()
val portfolioUuid : java.util.UUID = 38400000-8cf0-11bd-b23e-10b96e4ef00d // java.util.UUID | 
val investorWithdrawalCreate : InvestorWithdrawalCreate =  // InvestorWithdrawalCreate | 
try {
    val result : InvestorWithdrawalCreate = apiInstance.apiV2PortfoliosWithdrawalsCreate(portfolioUuid, investorWithdrawalCreate)
    println(result)
} catch (e: ClientException) {
    println("4xx response calling ApiApi#apiV2PortfoliosWithdrawalsCreate")
    e.printStackTrace()
} catch (e: ServerException) {
    println("5xx response calling ApiApi#apiV2PortfoliosWithdrawalsCreate")
    e.printStackTrace()
}
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **portfolioUuid** | [**java.util.UUID**](.md)|  |
 **investorWithdrawalCreate** | [**InvestorWithdrawalCreate**](InvestorWithdrawalCreate.md)|  |

### Return type

[**InvestorWithdrawalCreate**](InvestorWithdrawalCreate.md)

### Authorization


Configure cookieAuth:
    ApiClient.apiKey["Session"] = ""
    ApiClient.apiKeyPrefix["Session"] = ""
Configure jwtAuth:
    ApiClient.accessToken = ""
Configure tokenAuth:
    ApiClient.apiKey["Authorization"] = ""
    ApiClient.apiKeyPrefix["Authorization"] = ""

### HTTP request headers

 - **Content-Type**: application/json, application/x-www-form-urlencoded, multipart/form-data
 - **Accept**: application/json

<a name="apiV2PortfoliosWithdrawalsDestroy"></a>
# **apiV2PortfoliosWithdrawalsDestroy**
> apiV2PortfoliosWithdrawalsDestroy(portfolioUuid, uuid)



### Example
```kotlin
// Import classes:
//import org.openapitools.client.infrastructure.*
//import org.openapitools.client.models.*

val apiInstance = ApiApi()
val portfolioUuid : java.util.UUID = 38400000-8cf0-11bd-b23e-10b96e4ef00d // java.util.UUID | 
val uuid : java.util.UUID = 38400000-8cf0-11bd-b23e-10b96e4ef00d // java.util.UUID | 
try {
    apiInstance.apiV2PortfoliosWithdrawalsDestroy(portfolioUuid, uuid)
} catch (e: ClientException) {
    println("4xx response calling ApiApi#apiV2PortfoliosWithdrawalsDestroy")
    e.printStackTrace()
} catch (e: ServerException) {
    println("5xx response calling ApiApi#apiV2PortfoliosWithdrawalsDestroy")
    e.printStackTrace()
}
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **portfolioUuid** | [**java.util.UUID**](.md)|  |
 **uuid** | [**java.util.UUID**](.md)|  |

### Return type

null (empty response body)

### Authorization


Configure cookieAuth:
    ApiClient.apiKey["Session"] = ""
    ApiClient.apiKeyPrefix["Session"] = ""
Configure jwtAuth:
    ApiClient.accessToken = ""
Configure tokenAuth:
    ApiClient.apiKey["Authorization"] = ""
    ApiClient.apiKeyPrefix["Authorization"] = ""

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: Not defined

<a name="apiV2PortfoliosWithdrawalsList"></a>
# **apiV2PortfoliosWithdrawalsList**
> PaginatedInvestorWithdrawalListList apiV2PortfoliosWithdrawalsList(portfolioUuid, limit, offset, status)



### Example
```kotlin
// Import classes:
//import org.openapitools.client.infrastructure.*
//import org.openapitools.client.models.*

val apiInstance = ApiApi()
val portfolioUuid : java.util.UUID = 38400000-8cf0-11bd-b23e-10b96e4ef00d // java.util.UUID | 
val limit : kotlin.Int = 56 // kotlin.Int | Number of results to return per page.
val offset : kotlin.Int = 56 // kotlin.Int | The initial index from which to return the results.
val status : kotlin.collections.List<kotlin.String> =  // kotlin.collections.List<kotlin.String> | 
try {
    val result : PaginatedInvestorWithdrawalListList = apiInstance.apiV2PortfoliosWithdrawalsList(portfolioUuid, limit, offset, status)
    println(result)
} catch (e: ClientException) {
    println("4xx response calling ApiApi#apiV2PortfoliosWithdrawalsList")
    e.printStackTrace()
} catch (e: ServerException) {
    println("5xx response calling ApiApi#apiV2PortfoliosWithdrawalsList")
    e.printStackTrace()
}
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **portfolioUuid** | [**java.util.UUID**](.md)|  |
 **limit** | **kotlin.Int**| Number of results to return per page. | [optional]
 **offset** | **kotlin.Int**| The initial index from which to return the results. | [optional]
 **status** | [**kotlin.collections.List&lt;kotlin.String&gt;**](kotlin.String.md)|  | [optional] [enum: CANCELLED, COMPLETED, DRAFT, ERROR, PENDING, POSITIONS_SOLD, PROCESSING, REQUESTED]

### Return type

[**PaginatedInvestorWithdrawalListList**](PaginatedInvestorWithdrawalListList.md)

### Authorization


Configure cookieAuth:
    ApiClient.apiKey["Session"] = ""
    ApiClient.apiKeyPrefix["Session"] = ""
Configure jwtAuth:
    ApiClient.accessToken = ""
Configure tokenAuth:
    ApiClient.apiKey["Authorization"] = ""
    ApiClient.apiKeyPrefix["Authorization"] = ""

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

<a name="apiV2PortfoliosWithdrawalsRetrieve"></a>
# **apiV2PortfoliosWithdrawalsRetrieve**
> WithdrawalDetail apiV2PortfoliosWithdrawalsRetrieve(portfolioUuid, uuid)



### Example
```kotlin
// Import classes:
//import org.openapitools.client.infrastructure.*
//import org.openapitools.client.models.*

val apiInstance = ApiApi()
val portfolioUuid : java.util.UUID = 38400000-8cf0-11bd-b23e-10b96e4ef00d // java.util.UUID | 
val uuid : java.util.UUID = 38400000-8cf0-11bd-b23e-10b96e4ef00d // java.util.UUID | 
try {
    val result : WithdrawalDetail = apiInstance.apiV2PortfoliosWithdrawalsRetrieve(portfolioUuid, uuid)
    println(result)
} catch (e: ClientException) {
    println("4xx response calling ApiApi#apiV2PortfoliosWithdrawalsRetrieve")
    e.printStackTrace()
} catch (e: ServerException) {
    println("5xx response calling ApiApi#apiV2PortfoliosWithdrawalsRetrieve")
    e.printStackTrace()
}
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **portfolioUuid** | [**java.util.UUID**](.md)|  |
 **uuid** | [**java.util.UUID**](.md)|  |

### Return type

[**WithdrawalDetail**](WithdrawalDetail.md)

### Authorization


Configure cookieAuth:
    ApiClient.apiKey["Session"] = ""
    ApiClient.apiKeyPrefix["Session"] = ""
Configure jwtAuth:
    ApiClient.accessToken = ""
Configure tokenAuth:
    ApiClient.apiKey["Authorization"] = ""
    ApiClient.apiKeyPrefix["Authorization"] = ""

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

<a name="apiV2RelationshipManagerAnalyticsAllocationsByAssetRetrieve"></a>
# **apiV2RelationshipManagerAnalyticsAllocationsByAssetRetrieve**
> AllocationByAsset apiV2RelationshipManagerAnalyticsAllocationsByAssetRetrieve(uuid)



### Example
```kotlin
// Import classes:
//import org.openapitools.client.infrastructure.*
//import org.openapitools.client.models.*

val apiInstance = ApiApi()
val uuid : java.util.UUID = 38400000-8cf0-11bd-b23e-10b96e4ef00d // java.util.UUID | 
try {
    val result : AllocationByAsset = apiInstance.apiV2RelationshipManagerAnalyticsAllocationsByAssetRetrieve(uuid)
    println(result)
} catch (e: ClientException) {
    println("4xx response calling ApiApi#apiV2RelationshipManagerAnalyticsAllocationsByAssetRetrieve")
    e.printStackTrace()
} catch (e: ServerException) {
    println("5xx response calling ApiApi#apiV2RelationshipManagerAnalyticsAllocationsByAssetRetrieve")
    e.printStackTrace()
}
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **uuid** | [**java.util.UUID**](.md)|  |

### Return type

[**AllocationByAsset**](AllocationByAsset.md)

### Authorization


Configure cookieAuth:
    ApiClient.apiKey["Session"] = ""
    ApiClient.apiKeyPrefix["Session"] = ""
Configure jwtAuth:
    ApiClient.accessToken = ""
Configure tokenAuth:
    ApiClient.apiKey["Authorization"] = ""
    ApiClient.apiKeyPrefix["Authorization"] = ""

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

<a name="apiV2RelationshipManagerAnalyticsAssetConcentrationRiskRetrieve"></a>
# **apiV2RelationshipManagerAnalyticsAssetConcentrationRiskRetrieve**
> AssetConcentrationRisk apiV2RelationshipManagerAnalyticsAssetConcentrationRiskRetrieve(uuid)



### Example
```kotlin
// Import classes:
//import org.openapitools.client.infrastructure.*
//import org.openapitools.client.models.*

val apiInstance = ApiApi()
val uuid : java.util.UUID = 38400000-8cf0-11bd-b23e-10b96e4ef00d // java.util.UUID | 
try {
    val result : AssetConcentrationRisk = apiInstance.apiV2RelationshipManagerAnalyticsAssetConcentrationRiskRetrieve(uuid)
    println(result)
} catch (e: ClientException) {
    println("4xx response calling ApiApi#apiV2RelationshipManagerAnalyticsAssetConcentrationRiskRetrieve")
    e.printStackTrace()
} catch (e: ServerException) {
    println("5xx response calling ApiApi#apiV2RelationshipManagerAnalyticsAssetConcentrationRiskRetrieve")
    e.printStackTrace()
}
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **uuid** | [**java.util.UUID**](.md)|  |

### Return type

[**AssetConcentrationRisk**](AssetConcentrationRisk.md)

### Authorization


Configure cookieAuth:
    ApiClient.apiKey["Session"] = ""
    ApiClient.apiKeyPrefix["Session"] = ""
Configure jwtAuth:
    ApiClient.accessToken = ""
Configure tokenAuth:
    ApiClient.apiKey["Authorization"] = ""
    ApiClient.apiKeyPrefix["Authorization"] = ""

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

<a name="apiV2RelationshipManagerAnalyticsAumEvolutionRetrieve"></a>
# **apiV2RelationshipManagerAnalyticsAumEvolutionRetrieve**
> AUMEvoluation apiV2RelationshipManagerAnalyticsAumEvolutionRetrieve(uuid)



### Example
```kotlin
// Import classes:
//import org.openapitools.client.infrastructure.*
//import org.openapitools.client.models.*

val apiInstance = ApiApi()
val uuid : java.util.UUID = 38400000-8cf0-11bd-b23e-10b96e4ef00d // java.util.UUID | 
try {
    val result : AUMEvoluation = apiInstance.apiV2RelationshipManagerAnalyticsAumEvolutionRetrieve(uuid)
    println(result)
} catch (e: ClientException) {
    println("4xx response calling ApiApi#apiV2RelationshipManagerAnalyticsAumEvolutionRetrieve")
    e.printStackTrace()
} catch (e: ServerException) {
    println("5xx response calling ApiApi#apiV2RelationshipManagerAnalyticsAumEvolutionRetrieve")
    e.printStackTrace()
}
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **uuid** | [**java.util.UUID**](.md)|  |

### Return type

[**AUMEvoluation**](AUMEvoluation.md)

### Authorization


Configure cookieAuth:
    ApiClient.apiKey["Session"] = ""
    ApiClient.apiKeyPrefix["Session"] = ""
Configure jwtAuth:
    ApiClient.accessToken = ""
Configure tokenAuth:
    ApiClient.apiKey["Authorization"] = ""
    ApiClient.apiKeyPrefix["Authorization"] = ""

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

<a name="apiV2RelationshipManagerAnalyticsAumPortfolioRiskRetrieve"></a>
# **apiV2RelationshipManagerAnalyticsAumPortfolioRiskRetrieve**
> AUMPortfolioRisk apiV2RelationshipManagerAnalyticsAumPortfolioRiskRetrieve(uuid)



### Example
```kotlin
// Import classes:
//import org.openapitools.client.infrastructure.*
//import org.openapitools.client.models.*

val apiInstance = ApiApi()
val uuid : java.util.UUID = 38400000-8cf0-11bd-b23e-10b96e4ef00d // java.util.UUID | 
try {
    val result : AUMPortfolioRisk = apiInstance.apiV2RelationshipManagerAnalyticsAumPortfolioRiskRetrieve(uuid)
    println(result)
} catch (e: ClientException) {
    println("4xx response calling ApiApi#apiV2RelationshipManagerAnalyticsAumPortfolioRiskRetrieve")
    e.printStackTrace()
} catch (e: ServerException) {
    println("5xx response calling ApiApi#apiV2RelationshipManagerAnalyticsAumPortfolioRiskRetrieve")
    e.printStackTrace()
}
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **uuid** | [**java.util.UUID**](.md)|  |

### Return type

[**AUMPortfolioRisk**](AUMPortfolioRisk.md)

### Authorization


Configure cookieAuth:
    ApiClient.apiKey["Session"] = ""
    ApiClient.apiKeyPrefix["Session"] = ""
Configure jwtAuth:
    ApiClient.accessToken = ""
Configure tokenAuth:
    ApiClient.apiKey["Authorization"] = ""
    ApiClient.apiKeyPrefix["Authorization"] = ""

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

<a name="apiV2RelationshipManagerAnalyticsAumRetrieve"></a>
# **apiV2RelationshipManagerAnalyticsAumRetrieve**
> RelationshipManager apiV2RelationshipManagerAnalyticsAumRetrieve(uuid)



### Example
```kotlin
// Import classes:
//import org.openapitools.client.infrastructure.*
//import org.openapitools.client.models.*

val apiInstance = ApiApi()
val uuid : java.util.UUID = 38400000-8cf0-11bd-b23e-10b96e4ef00d // java.util.UUID | 
try {
    val result : RelationshipManager = apiInstance.apiV2RelationshipManagerAnalyticsAumRetrieve(uuid)
    println(result)
} catch (e: ClientException) {
    println("4xx response calling ApiApi#apiV2RelationshipManagerAnalyticsAumRetrieve")
    e.printStackTrace()
} catch (e: ServerException) {
    println("5xx response calling ApiApi#apiV2RelationshipManagerAnalyticsAumRetrieve")
    e.printStackTrace()
}
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **uuid** | [**java.util.UUID**](.md)|  |

### Return type

[**RelationshipManager**](RelationshipManager.md)

### Authorization


Configure cookieAuth:
    ApiClient.apiKey["Session"] = ""
    ApiClient.apiKeyPrefix["Session"] = ""
Configure jwtAuth:
    ApiClient.accessToken = ""
Configure tokenAuth:
    ApiClient.apiKey["Authorization"] = ""
    ApiClient.apiKeyPrefix["Authorization"] = ""

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

<a name="apiV2RelationshipManagerAnalyticsClientByRiskRetrieve"></a>
# **apiV2RelationshipManagerAnalyticsClientByRiskRetrieve**
> RelationshipManager apiV2RelationshipManagerAnalyticsClientByRiskRetrieve(uuid)



### Example
```kotlin
// Import classes:
//import org.openapitools.client.infrastructure.*
//import org.openapitools.client.models.*

val apiInstance = ApiApi()
val uuid : java.util.UUID = 38400000-8cf0-11bd-b23e-10b96e4ef00d // java.util.UUID | 
try {
    val result : RelationshipManager = apiInstance.apiV2RelationshipManagerAnalyticsClientByRiskRetrieve(uuid)
    println(result)
} catch (e: ClientException) {
    println("4xx response calling ApiApi#apiV2RelationshipManagerAnalyticsClientByRiskRetrieve")
    e.printStackTrace()
} catch (e: ServerException) {
    println("5xx response calling ApiApi#apiV2RelationshipManagerAnalyticsClientByRiskRetrieve")
    e.printStackTrace()
}
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **uuid** | [**java.util.UUID**](.md)|  |

### Return type

[**RelationshipManager**](RelationshipManager.md)

### Authorization


Configure cookieAuth:
    ApiClient.apiKey["Session"] = ""
    ApiClient.apiKeyPrefix["Session"] = ""
Configure jwtAuth:
    ApiClient.accessToken = ""
Configure tokenAuth:
    ApiClient.apiKey["Authorization"] = ""
    ApiClient.apiKeyPrefix["Authorization"] = ""

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

<a name="apiV2RelationshipManagerAnalyticsClientByStatusRetrieve"></a>
# **apiV2RelationshipManagerAnalyticsClientByStatusRetrieve**
> RelationshipManager apiV2RelationshipManagerAnalyticsClientByStatusRetrieve(uuid)



### Example
```kotlin
// Import classes:
//import org.openapitools.client.infrastructure.*
//import org.openapitools.client.models.*

val apiInstance = ApiApi()
val uuid : java.util.UUID = 38400000-8cf0-11bd-b23e-10b96e4ef00d // java.util.UUID | 
try {
    val result : RelationshipManager = apiInstance.apiV2RelationshipManagerAnalyticsClientByStatusRetrieve(uuid)
    println(result)
} catch (e: ClientException) {
    println("4xx response calling ApiApi#apiV2RelationshipManagerAnalyticsClientByStatusRetrieve")
    e.printStackTrace()
} catch (e: ServerException) {
    println("5xx response calling ApiApi#apiV2RelationshipManagerAnalyticsClientByStatusRetrieve")
    e.printStackTrace()
}
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **uuid** | [**java.util.UUID**](.md)|  |

### Return type

[**RelationshipManager**](RelationshipManager.md)

### Authorization


Configure cookieAuth:
    ApiClient.apiKey["Session"] = ""
    ApiClient.apiKeyPrefix["Session"] = ""
Configure jwtAuth:
    ApiClient.accessToken = ""
Configure tokenAuth:
    ApiClient.apiKey["Authorization"] = ""
    ApiClient.apiKeyPrefix["Authorization"] = ""

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

<a name="apiV2RelationshipManagerAnalyticsClientRankingRetrieve"></a>
# **apiV2RelationshipManagerAnalyticsClientRankingRetrieve**
> ClientRanking apiV2RelationshipManagerAnalyticsClientRankingRetrieve(uuid)



### Example
```kotlin
// Import classes:
//import org.openapitools.client.infrastructure.*
//import org.openapitools.client.models.*

val apiInstance = ApiApi()
val uuid : java.util.UUID = 38400000-8cf0-11bd-b23e-10b96e4ef00d // java.util.UUID | 
try {
    val result : ClientRanking = apiInstance.apiV2RelationshipManagerAnalyticsClientRankingRetrieve(uuid)
    println(result)
} catch (e: ClientException) {
    println("4xx response calling ApiApi#apiV2RelationshipManagerAnalyticsClientRankingRetrieve")
    e.printStackTrace()
} catch (e: ServerException) {
    println("5xx response calling ApiApi#apiV2RelationshipManagerAnalyticsClientRankingRetrieve")
    e.printStackTrace()
}
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **uuid** | [**java.util.UUID**](.md)|  |

### Return type

[**ClientRanking**](ClientRanking.md)

### Authorization


Configure cookieAuth:
    ApiClient.apiKey["Session"] = ""
    ApiClient.apiKeyPrefix["Session"] = ""
Configure jwtAuth:
    ApiClient.accessToken = ""
Configure tokenAuth:
    ApiClient.apiKey["Authorization"] = ""
    ApiClient.apiKeyPrefix["Authorization"] = ""

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

<a name="apiV2RelationshipManagerAnalyticsInflowsOutflowsRetrieve"></a>
# **apiV2RelationshipManagerAnalyticsInflowsOutflowsRetrieve**
> RelationshipManager apiV2RelationshipManagerAnalyticsInflowsOutflowsRetrieve(uuid)



### Example
```kotlin
// Import classes:
//import org.openapitools.client.infrastructure.*
//import org.openapitools.client.models.*

val apiInstance = ApiApi()
val uuid : java.util.UUID = 38400000-8cf0-11bd-b23e-10b96e4ef00d // java.util.UUID | 
try {
    val result : RelationshipManager = apiInstance.apiV2RelationshipManagerAnalyticsInflowsOutflowsRetrieve(uuid)
    println(result)
} catch (e: ClientException) {
    println("4xx response calling ApiApi#apiV2RelationshipManagerAnalyticsInflowsOutflowsRetrieve")
    e.printStackTrace()
} catch (e: ServerException) {
    println("5xx response calling ApiApi#apiV2RelationshipManagerAnalyticsInflowsOutflowsRetrieve")
    e.printStackTrace()
}
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **uuid** | [**java.util.UUID**](.md)|  |

### Return type

[**RelationshipManager**](RelationshipManager.md)

### Authorization


Configure cookieAuth:
    ApiClient.apiKey["Session"] = ""
    ApiClient.apiKeyPrefix["Session"] = ""
Configure jwtAuth:
    ApiClient.accessToken = ""
Configure tokenAuth:
    ApiClient.apiKey["Authorization"] = ""
    ApiClient.apiKeyPrefix["Authorization"] = ""

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

<a name="apiV2RelationshipManagerAnalyticsPortfolioRiskPerformanceRetrieve"></a>
# **apiV2RelationshipManagerAnalyticsPortfolioRiskPerformanceRetrieve**
> RelationshipManager apiV2RelationshipManagerAnalyticsPortfolioRiskPerformanceRetrieve(uuid)



### Example
```kotlin
// Import classes:
//import org.openapitools.client.infrastructure.*
//import org.openapitools.client.models.*

val apiInstance = ApiApi()
val uuid : java.util.UUID = 38400000-8cf0-11bd-b23e-10b96e4ef00d // java.util.UUID | 
try {
    val result : RelationshipManager = apiInstance.apiV2RelationshipManagerAnalyticsPortfolioRiskPerformanceRetrieve(uuid)
    println(result)
} catch (e: ClientException) {
    println("4xx response calling ApiApi#apiV2RelationshipManagerAnalyticsPortfolioRiskPerformanceRetrieve")
    e.printStackTrace()
} catch (e: ServerException) {
    println("5xx response calling ApiApi#apiV2RelationshipManagerAnalyticsPortfolioRiskPerformanceRetrieve")
    e.printStackTrace()
}
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **uuid** | [**java.util.UUID**](.md)|  |

### Return type

[**RelationshipManager**](RelationshipManager.md)

### Authorization


Configure cookieAuth:
    ApiClient.apiKey["Session"] = ""
    ApiClient.apiKeyPrefix["Session"] = ""
Configure jwtAuth:
    ApiClient.accessToken = ""
Configure tokenAuth:
    ApiClient.apiKey["Authorization"] = ""
    ApiClient.apiKeyPrefix["Authorization"] = ""

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

<a name="apiV2RelationshipManagerAnalyticsTotalActiveClientsRetrieve"></a>
# **apiV2RelationshipManagerAnalyticsTotalActiveClientsRetrieve**
> RelationshipManager apiV2RelationshipManagerAnalyticsTotalActiveClientsRetrieve(uuid)



### Example
```kotlin
// Import classes:
//import org.openapitools.client.infrastructure.*
//import org.openapitools.client.models.*

val apiInstance = ApiApi()
val uuid : java.util.UUID = 38400000-8cf0-11bd-b23e-10b96e4ef00d // java.util.UUID | 
try {
    val result : RelationshipManager = apiInstance.apiV2RelationshipManagerAnalyticsTotalActiveClientsRetrieve(uuid)
    println(result)
} catch (e: ClientException) {
    println("4xx response calling ApiApi#apiV2RelationshipManagerAnalyticsTotalActiveClientsRetrieve")
    e.printStackTrace()
} catch (e: ServerException) {
    println("5xx response calling ApiApi#apiV2RelationshipManagerAnalyticsTotalActiveClientsRetrieve")
    e.printStackTrace()
}
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **uuid** | [**java.util.UUID**](.md)|  |

### Return type

[**RelationshipManager**](RelationshipManager.md)

### Authorization


Configure cookieAuth:
    ApiClient.apiKey["Session"] = ""
    ApiClient.apiKeyPrefix["Session"] = ""
Configure jwtAuth:
    ApiClient.accessToken = ""
Configure tokenAuth:
    ApiClient.apiKey["Authorization"] = ""
    ApiClient.apiKeyPrefix["Authorization"] = ""

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

<a name="apiV2RelationshipManagerMeRetrieve"></a>
# **apiV2RelationshipManagerMeRetrieve**
> RelationshipManager apiV2RelationshipManagerMeRetrieve()



### Example
```kotlin
// Import classes:
//import org.openapitools.client.infrastructure.*
//import org.openapitools.client.models.*

val apiInstance = ApiApi()
try {
    val result : RelationshipManager = apiInstance.apiV2RelationshipManagerMeRetrieve()
    println(result)
} catch (e: ClientException) {
    println("4xx response calling ApiApi#apiV2RelationshipManagerMeRetrieve")
    e.printStackTrace()
} catch (e: ServerException) {
    println("5xx response calling ApiApi#apiV2RelationshipManagerMeRetrieve")
    e.printStackTrace()
}
```

### Parameters
This endpoint does not need any parameter.

### Return type

[**RelationshipManager**](RelationshipManager.md)

### Authorization


Configure cookieAuth:
    ApiClient.apiKey["Session"] = ""
    ApiClient.apiKeyPrefix["Session"] = ""
Configure jwtAuth:
    ApiClient.accessToken = ""
Configure tokenAuth:
    ApiClient.apiKey["Authorization"] = ""
    ApiClient.apiKeyPrefix["Authorization"] = ""

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

<a name="apiV2RelationshipManagerRetrieve"></a>
# **apiV2RelationshipManagerRetrieve**
> RelationshipManager apiV2RelationshipManagerRetrieve(uuid)



### Example
```kotlin
// Import classes:
//import org.openapitools.client.infrastructure.*
//import org.openapitools.client.models.*

val apiInstance = ApiApi()
val uuid : java.util.UUID = 38400000-8cf0-11bd-b23e-10b96e4ef00d // java.util.UUID | 
try {
    val result : RelationshipManager = apiInstance.apiV2RelationshipManagerRetrieve(uuid)
    println(result)
} catch (e: ClientException) {
    println("4xx response calling ApiApi#apiV2RelationshipManagerRetrieve")
    e.printStackTrace()
} catch (e: ServerException) {
    println("5xx response calling ApiApi#apiV2RelationshipManagerRetrieve")
    e.printStackTrace()
}
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **uuid** | [**java.util.UUID**](.md)|  |

### Return type

[**RelationshipManager**](RelationshipManager.md)

### Authorization


Configure cookieAuth:
    ApiClient.apiKey["Session"] = ""
    ApiClient.apiKeyPrefix["Session"] = ""
Configure jwtAuth:
    ApiClient.accessToken = ""
Configure tokenAuth:
    ApiClient.apiKey["Authorization"] = ""
    ApiClient.apiKeyPrefix["Authorization"] = ""

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

<a name="apiV2ReportStatementsList"></a>
# **apiV2ReportStatementsList**
> PaginatedStatementList apiV2ReportStatementsList(clientUuid, format, limit, offset)



This mixin implements binary responses. It supports PDF and Base64. It can be adapted to any django View that implements the retrieve method

### Example
```kotlin
// Import classes:
//import org.openapitools.client.infrastructure.*
//import org.openapitools.client.models.*

val apiInstance = ApiApi()
val clientUuid : java.util.UUID = 38400000-8cf0-11bd-b23e-10b96e4ef00d // java.util.UUID | 
val format : kotlin.String = format_example // kotlin.String | 
val limit : kotlin.Int = 56 // kotlin.Int | Number of results to return per page.
val offset : kotlin.Int = 56 // kotlin.Int | The initial index from which to return the results.
try {
    val result : PaginatedStatementList = apiInstance.apiV2ReportStatementsList(clientUuid, format, limit, offset)
    println(result)
} catch (e: ClientException) {
    println("4xx response calling ApiApi#apiV2ReportStatementsList")
    e.printStackTrace()
} catch (e: ServerException) {
    println("5xx response calling ApiApi#apiV2ReportStatementsList")
    e.printStackTrace()
}
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **clientUuid** | [**java.util.UUID**](.md)|  |
 **format** | **kotlin.String**|  | [optional] [enum: base64, json, pdf]
 **limit** | **kotlin.Int**| Number of results to return per page. | [optional]
 **offset** | **kotlin.Int**| The initial index from which to return the results. | [optional]

### Return type

[**PaginatedStatementList**](PaginatedStatementList.md)

### Authorization


Configure cookieAuth:
    ApiClient.apiKey["Session"] = ""
    ApiClient.apiKeyPrefix["Session"] = ""
Configure jwtAuth:
    ApiClient.accessToken = ""
Configure tokenAuth:
    ApiClient.apiKey["Authorization"] = ""
    ApiClient.apiKeyPrefix["Authorization"] = ""

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json, application/pdf, text/plain

<a name="apiV2ReportStatementsRetrieve"></a>
# **apiV2ReportStatementsRetrieve**
> Statement apiV2ReportStatementsRetrieve(clientUuid, uuid, format)



This mixin implements binary responses. It supports PDF and Base64. It can be adapted to any django View that implements the retrieve method

### Example
```kotlin
// Import classes:
//import org.openapitools.client.infrastructure.*
//import org.openapitools.client.models.*

val apiInstance = ApiApi()
val clientUuid : java.util.UUID = 38400000-8cf0-11bd-b23e-10b96e4ef00d // java.util.UUID | 
val uuid : java.util.UUID = 38400000-8cf0-11bd-b23e-10b96e4ef00d // java.util.UUID | 
val format : kotlin.String = format_example // kotlin.String | 
try {
    val result : Statement = apiInstance.apiV2ReportStatementsRetrieve(clientUuid, uuid, format)
    println(result)
} catch (e: ClientException) {
    println("4xx response calling ApiApi#apiV2ReportStatementsRetrieve")
    e.printStackTrace()
} catch (e: ServerException) {
    println("5xx response calling ApiApi#apiV2ReportStatementsRetrieve")
    e.printStackTrace()
}
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **clientUuid** | [**java.util.UUID**](.md)|  |
 **uuid** | [**java.util.UUID**](.md)|  |
 **format** | **kotlin.String**|  | [optional] [enum: base64, json, pdf]

### Return type

[**Statement**](Statement.md)

### Authorization


Configure cookieAuth:
    ApiClient.apiKey["Session"] = ""
    ApiClient.apiKeyPrefix["Session"] = ""
Configure jwtAuth:
    ApiClient.accessToken = ""
Configure tokenAuth:
    ApiClient.apiKey["Authorization"] = ""
    ApiClient.apiKeyPrefix["Authorization"] = ""

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json, application/pdf, text/plain

<a name="apiV2ReportTaxReportList"></a>
# **apiV2ReportTaxReportList**
> PaginatedTaxReportList apiV2ReportTaxReportList(clientUuid, format, limit, offset)



This mixin implements binary responses. It supports PDF and Base64. It can be adapted to any django View that implements the retrieve method

### Example
```kotlin
// Import classes:
//import org.openapitools.client.infrastructure.*
//import org.openapitools.client.models.*

val apiInstance = ApiApi()
val clientUuid : java.util.UUID = 38400000-8cf0-11bd-b23e-10b96e4ef00d // java.util.UUID | 
val format : kotlin.String = format_example // kotlin.String | 
val limit : kotlin.Int = 56 // kotlin.Int | Number of results to return per page.
val offset : kotlin.Int = 56 // kotlin.Int | The initial index from which to return the results.
try {
    val result : PaginatedTaxReportList = apiInstance.apiV2ReportTaxReportList(clientUuid, format, limit, offset)
    println(result)
} catch (e: ClientException) {
    println("4xx response calling ApiApi#apiV2ReportTaxReportList")
    e.printStackTrace()
} catch (e: ServerException) {
    println("5xx response calling ApiApi#apiV2ReportTaxReportList")
    e.printStackTrace()
}
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **clientUuid** | [**java.util.UUID**](.md)|  |
 **format** | **kotlin.String**|  | [optional] [enum: base64, json, pdf]
 **limit** | **kotlin.Int**| Number of results to return per page. | [optional]
 **offset** | **kotlin.Int**| The initial index from which to return the results. | [optional]

### Return type

[**PaginatedTaxReportList**](PaginatedTaxReportList.md)

### Authorization


Configure cookieAuth:
    ApiClient.apiKey["Session"] = ""
    ApiClient.apiKeyPrefix["Session"] = ""
Configure jwtAuth:
    ApiClient.accessToken = ""
Configure tokenAuth:
    ApiClient.apiKey["Authorization"] = ""
    ApiClient.apiKeyPrefix["Authorization"] = ""

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json, application/pdf, text/plain

<a name="apiV2ReportTaxReportRetrieve"></a>
# **apiV2ReportTaxReportRetrieve**
> TaxReport apiV2ReportTaxReportRetrieve(clientUuid, uuid, format)



This mixin implements binary responses. It supports PDF and Base64. It can be adapted to any django View that implements the retrieve method

### Example
```kotlin
// Import classes:
//import org.openapitools.client.infrastructure.*
//import org.openapitools.client.models.*

val apiInstance = ApiApi()
val clientUuid : java.util.UUID = 38400000-8cf0-11bd-b23e-10b96e4ef00d // java.util.UUID | 
val uuid : java.util.UUID = 38400000-8cf0-11bd-b23e-10b96e4ef00d // java.util.UUID | 
val format : kotlin.String = format_example // kotlin.String | 
try {
    val result : TaxReport = apiInstance.apiV2ReportTaxReportRetrieve(clientUuid, uuid, format)
    println(result)
} catch (e: ClientException) {
    println("4xx response calling ApiApi#apiV2ReportTaxReportRetrieve")
    e.printStackTrace()
} catch (e: ServerException) {
    println("5xx response calling ApiApi#apiV2ReportTaxReportRetrieve")
    e.printStackTrace()
}
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **clientUuid** | [**java.util.UUID**](.md)|  |
 **uuid** | [**java.util.UUID**](.md)|  |
 **format** | **kotlin.String**|  | [optional] [enum: base64, json, pdf]

### Return type

[**TaxReport**](TaxReport.md)

### Authorization


Configure cookieAuth:
    ApiClient.apiKey["Session"] = ""
    ApiClient.apiKeyPrefix["Session"] = ""
Configure jwtAuth:
    ApiClient.accessToken = ""
Configure tokenAuth:
    ApiClient.apiKey["Authorization"] = ""
    ApiClient.apiKeyPrefix["Authorization"] = ""

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json, application/pdf, text/plain

<a name="apiV2RiskQuestionsList"></a>
# **apiV2RiskQuestionsList**
> PaginatedQuestionList apiV2RiskQuestionsList(limit, offset)



### Example
```kotlin
// Import classes:
//import org.openapitools.client.infrastructure.*
//import org.openapitools.client.models.*

val apiInstance = ApiApi()
val limit : kotlin.Int = 56 // kotlin.Int | Number of results to return per page.
val offset : kotlin.Int = 56 // kotlin.Int | The initial index from which to return the results.
try {
    val result : PaginatedQuestionList = apiInstance.apiV2RiskQuestionsList(limit, offset)
    println(result)
} catch (e: ClientException) {
    println("4xx response calling ApiApi#apiV2RiskQuestionsList")
    e.printStackTrace()
} catch (e: ServerException) {
    println("5xx response calling ApiApi#apiV2RiskQuestionsList")
    e.printStackTrace()
}
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **limit** | **kotlin.Int**| Number of results to return per page. | [optional]
 **offset** | **kotlin.Int**| The initial index from which to return the results. | [optional]

### Return type

[**PaginatedQuestionList**](PaginatedQuestionList.md)

### Authorization


Configure cookieAuth:
    ApiClient.apiKey["Session"] = ""
    ApiClient.apiKeyPrefix["Session"] = ""
Configure jwtAuth:
    ApiClient.accessToken = ""
Configure tokenAuth:
    ApiClient.apiKey["Authorization"] = ""
    ApiClient.apiKeyPrefix["Authorization"] = ""

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

<a name="apiV2VerificationsVerifierWebhookCreate"></a>
# **apiV2VerificationsVerifierWebhookCreate**
> apiV2VerificationsVerifierWebhookCreate(action, verifier)



### Example
```kotlin
// Import classes:
//import org.openapitools.client.infrastructure.*
//import org.openapitools.client.models.*

val apiInstance = ApiApi()
val action : kotlin.String = action_example // kotlin.String | 
val verifier : kotlin.String = verifier_example // kotlin.String | 
try {
    apiInstance.apiV2VerificationsVerifierWebhookCreate(action, verifier)
} catch (e: ClientException) {
    println("4xx response calling ApiApi#apiV2VerificationsVerifierWebhookCreate")
    e.printStackTrace()
} catch (e: ServerException) {
    println("5xx response calling ApiApi#apiV2VerificationsVerifierWebhookCreate")
    e.printStackTrace()
}
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **action** | **kotlin.String**|  |
 **verifier** | **kotlin.String**|  |

### Return type

null (empty response body)

### Authorization


Configure cookieAuth:
    ApiClient.apiKey["Session"] = ""
    ApiClient.apiKeyPrefix["Session"] = ""
Configure jwtAuth:
    ApiClient.accessToken = ""
Configure tokenAuth:
    ApiClient.apiKey["Authorization"] = ""
    ApiClient.apiKeyPrefix["Authorization"] = ""

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: Not defined

<a name="apiV2WebsocketAuthenticationTicketCreate"></a>
# **apiV2WebsocketAuthenticationTicketCreate**
> AuthenticationResponse apiV2WebsocketAuthenticationTicketCreate(websocketAuthentication)



### Example
```kotlin
// Import classes:
//import org.openapitools.client.infrastructure.*
//import org.openapitools.client.models.*

val apiInstance = ApiApi()
val websocketAuthentication : WebsocketAuthentication =  // WebsocketAuthentication | 
try {
    val result : AuthenticationResponse = apiInstance.apiV2WebsocketAuthenticationTicketCreate(websocketAuthentication)
    println(result)
} catch (e: ClientException) {
    println("4xx response calling ApiApi#apiV2WebsocketAuthenticationTicketCreate")
    e.printStackTrace()
} catch (e: ServerException) {
    println("5xx response calling ApiApi#apiV2WebsocketAuthenticationTicketCreate")
    e.printStackTrace()
}
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **websocketAuthentication** | [**WebsocketAuthentication**](WebsocketAuthentication.md)|  |

### Return type

[**AuthenticationResponse**](AuthenticationResponse.md)

### Authorization


Configure cookieAuth:
    ApiClient.apiKey["Session"] = ""
    ApiClient.apiKeyPrefix["Session"] = ""
Configure jwtAuth:
    ApiClient.accessToken = ""
Configure tokenAuth:
    ApiClient.apiKey["Authorization"] = ""
    ApiClient.apiKeyPrefix["Authorization"] = ""

### HTTP request headers

 - **Content-Type**: application/json, application/x-www-form-urlencoded, multipart/form-data
 - **Accept**: application/json

<a name="apiV2WebsocketAuthorizeAssetCreate"></a>
# **apiV2WebsocketAuthorizeAssetCreate**
> Response apiV2WebsocketAuthorizeAssetCreate(websocketAuthentication)



### Example
```kotlin
// Import classes:
//import org.openapitools.client.infrastructure.*
//import org.openapitools.client.models.*

val apiInstance = ApiApi()
val websocketAuthentication : WebsocketAuthentication =  // WebsocketAuthentication | 
try {
    val result : Response = apiInstance.apiV2WebsocketAuthorizeAssetCreate(websocketAuthentication)
    println(result)
} catch (e: ClientException) {
    println("4xx response calling ApiApi#apiV2WebsocketAuthorizeAssetCreate")
    e.printStackTrace()
} catch (e: ServerException) {
    println("5xx response calling ApiApi#apiV2WebsocketAuthorizeAssetCreate")
    e.printStackTrace()
}
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **websocketAuthentication** | [**WebsocketAuthentication**](WebsocketAuthentication.md)|  |

### Return type

[**Response**](Response.md)

### Authorization


Configure cookieAuth:
    ApiClient.apiKey["Session"] = ""
    ApiClient.apiKeyPrefix["Session"] = ""
Configure jwtAuth:
    ApiClient.accessToken = ""
Configure tokenAuth:
    ApiClient.apiKey["Authorization"] = ""
    ApiClient.apiKeyPrefix["Authorization"] = ""

### HTTP request headers

 - **Content-Type**: application/json, application/x-www-form-urlencoded, multipart/form-data
 - **Accept**: application/json

<a name="apiV2WebsocketAuthorizeCreate"></a>
# **apiV2WebsocketAuthorizeCreate**
> Response apiV2WebsocketAuthorizeCreate(websocketAuthentication)



### Example
```kotlin
// Import classes:
//import org.openapitools.client.infrastructure.*
//import org.openapitools.client.models.*

val apiInstance = ApiApi()
val websocketAuthentication : WebsocketAuthentication =  // WebsocketAuthentication | 
try {
    val result : Response = apiInstance.apiV2WebsocketAuthorizeCreate(websocketAuthentication)
    println(result)
} catch (e: ClientException) {
    println("4xx response calling ApiApi#apiV2WebsocketAuthorizeCreate")
    e.printStackTrace()
} catch (e: ServerException) {
    println("5xx response calling ApiApi#apiV2WebsocketAuthorizeCreate")
    e.printStackTrace()
}
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **websocketAuthentication** | [**WebsocketAuthentication**](WebsocketAuthentication.md)|  |

### Return type

[**Response**](Response.md)

### Authorization


Configure cookieAuth:
    ApiClient.apiKey["Session"] = ""
    ApiClient.apiKeyPrefix["Session"] = ""
Configure jwtAuth:
    ApiClient.accessToken = ""
Configure tokenAuth:
    ApiClient.apiKey["Authorization"] = ""
    ApiClient.apiKeyPrefix["Authorization"] = ""

### HTTP request headers

 - **Content-Type**: application/json, application/x-www-form-urlencoded, multipart/form-data
 - **Accept**: application/json

<a name="apiV2WebsocketAuthorizePortfolioCreate"></a>
# **apiV2WebsocketAuthorizePortfolioCreate**
> Response apiV2WebsocketAuthorizePortfolioCreate(websocketAuthentication)



### Example
```kotlin
// Import classes:
//import org.openapitools.client.infrastructure.*
//import org.openapitools.client.models.*

val apiInstance = ApiApi()
val websocketAuthentication : WebsocketAuthentication =  // WebsocketAuthentication | 
try {
    val result : Response = apiInstance.apiV2WebsocketAuthorizePortfolioCreate(websocketAuthentication)
    println(result)
} catch (e: ClientException) {
    println("4xx response calling ApiApi#apiV2WebsocketAuthorizePortfolioCreate")
    e.printStackTrace()
} catch (e: ServerException) {
    println("5xx response calling ApiApi#apiV2WebsocketAuthorizePortfolioCreate")
    e.printStackTrace()
}
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **websocketAuthentication** | [**WebsocketAuthentication**](WebsocketAuthentication.md)|  |

### Return type

[**Response**](Response.md)

### Authorization


Configure cookieAuth:
    ApiClient.apiKey["Session"] = ""
    ApiClient.apiKeyPrefix["Session"] = ""
Configure jwtAuth:
    ApiClient.accessToken = ""
Configure tokenAuth:
    ApiClient.apiKey["Authorization"] = ""
    ApiClient.apiKeyPrefix["Authorization"] = ""

### HTTP request headers

 - **Content-Type**: application/json, application/x-www-form-urlencoded, multipart/form-data
 - **Accept**: application/json

<a name="apiV2WebsocketOnSubscribeCreate"></a>
# **apiV2WebsocketOnSubscribeCreate**
> Subscribe apiV2WebsocketOnSubscribeCreate(subscribe)



### Example
```kotlin
// Import classes:
//import org.openapitools.client.infrastructure.*
//import org.openapitools.client.models.*

val apiInstance = ApiApi()
val subscribe : Subscribe =  // Subscribe | 
try {
    val result : Subscribe = apiInstance.apiV2WebsocketOnSubscribeCreate(subscribe)
    println(result)
} catch (e: ClientException) {
    println("4xx response calling ApiApi#apiV2WebsocketOnSubscribeCreate")
    e.printStackTrace()
} catch (e: ServerException) {
    println("5xx response calling ApiApi#apiV2WebsocketOnSubscribeCreate")
    e.printStackTrace()
}
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **subscribe** | [**Subscribe**](Subscribe.md)|  |

### Return type

[**Subscribe**](Subscribe.md)

### Authorization


Configure cookieAuth:
    ApiClient.apiKey["Session"] = ""
    ApiClient.apiKeyPrefix["Session"] = ""
Configure jwtAuth:
    ApiClient.accessToken = ""
Configure tokenAuth:
    ApiClient.apiKey["Authorization"] = ""
    ApiClient.apiKeyPrefix["Authorization"] = ""

### HTTP request headers

 - **Content-Type**: application/json, application/x-www-form-urlencoded, multipart/form-data
 - **Accept**: application/json

<a name="apiV2WebsocketOnUnsubscribeCreate"></a>
# **apiV2WebsocketOnUnsubscribeCreate**
> Unsubscribe apiV2WebsocketOnUnsubscribeCreate(unsubscribe)



### Example
```kotlin
// Import classes:
//import org.openapitools.client.infrastructure.*
//import org.openapitools.client.models.*

val apiInstance = ApiApi()
val unsubscribe : Unsubscribe =  // Unsubscribe | 
try {
    val result : Unsubscribe = apiInstance.apiV2WebsocketOnUnsubscribeCreate(unsubscribe)
    println(result)
} catch (e: ClientException) {
    println("4xx response calling ApiApi#apiV2WebsocketOnUnsubscribeCreate")
    e.printStackTrace()
} catch (e: ServerException) {
    println("5xx response calling ApiApi#apiV2WebsocketOnUnsubscribeCreate")
    e.printStackTrace()
}
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **unsubscribe** | [**Unsubscribe**](Unsubscribe.md)|  |

### Return type

[**Unsubscribe**](Unsubscribe.md)

### Authorization


Configure cookieAuth:
    ApiClient.apiKey["Session"] = ""
    ApiClient.apiKeyPrefix["Session"] = ""
Configure jwtAuth:
    ApiClient.accessToken = ""
Configure tokenAuth:
    ApiClient.apiKey["Authorization"] = ""
    ApiClient.apiKeyPrefix["Authorization"] = ""

### HTTP request headers

 - **Content-Type**: application/json, application/x-www-form-urlencoded, multipart/form-data
 - **Accept**: application/json

