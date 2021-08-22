# ApiAPI

All URIs are relative to *http://localhost*

Method | HTTP request | Description
------------- | ------------- | -------------
[**apiSchemaRetrieve**](ApiAPI.md#apischemaretrieve) | **GET** /api/schema/ | 
[**apiV2AdviceEnginesEtsCategoriesList**](ApiAPI.md#apiv2adviceenginesetscategorieslist) | **GET** /api/v2/advice-engines/ets/categories/ | 
[**apiV2AdviceEnginesEtsCoreCategoryGroupsList**](ApiAPI.md#apiv2adviceenginesetscorecategorygroupslist) | **GET** /api/v2/advice-engines/ets/core-category-groups/ | 
[**apiV2AdviceEnginesEtsForecastCreate**](ApiAPI.md#apiv2adviceenginesetsforecastcreate) | **POST** /api/v2/advice-engines/ets/forecast/ | 
[**apiV2AdviceEnginesEtsPresetCategoryGroupsList**](ApiAPI.md#apiv2adviceenginesetspresetcategorygroupslist) | **GET** /api/v2/advice-engines/ets/preset-category-groups/ | 
[**apiV2AdviceEnginesModelPortfolioForecastCreate**](ApiAPI.md#apiv2adviceenginesmodelportfolioforecastcreate) | **POST** /api/v2/advice-engines/model-portfolio/forecast/ | 
[**apiV2AdviceEnginesModelPortfolioModelPortfoliosList**](ApiAPI.md#apiv2adviceenginesmodelportfoliomodelportfolioslist) | **GET** /api/v2/advice-engines/model-portfolio/model-portfolios/ | 
[**apiV2AdviceEnginesModelPortfolioModelPortfoliosRetrieve**](ApiAPI.md#apiv2adviceenginesmodelportfoliomodelportfoliosretrieve) | **GET** /api/v2/advice-engines/model-portfolio/model-portfolios/{uuid}/ | 
[**apiV2AssetsCategoriesList**](ApiAPI.md#apiv2assetscategorieslist) | **GET** /api/v2/assets/categories/ | 
[**apiV2AssetsIntradayPricesLatestRetrieve**](ApiAPI.md#apiv2assetsintradaypriceslatestretrieve) | **GET** /api/v2/assets/{asset_identifier}/intraday-prices/latest/ | 
[**apiV2AssetsIntradayPricesList**](ApiAPI.md#apiv2assetsintradaypriceslist) | **GET** /api/v2/assets/{asset_identifier}/intraday-prices/ | 
[**apiV2AssetsList**](ApiAPI.md#apiv2assetslist) | **GET** /api/v2/assets/ | 
[**apiV2AssetsPerformanceList**](ApiAPI.md#apiv2assetsperformancelist) | **GET** /api/v2/assets/{asset_identifier}/performance/ | 
[**apiV2AssetsPricesLatestRetrieve**](ApiAPI.md#apiv2assetspriceslatestretrieve) | **GET** /api/v2/assets/{asset_identifier}/prices/latest/ | 
[**apiV2AssetsPricesList**](ApiAPI.md#apiv2assetspriceslist) | **GET** /api/v2/assets/{asset_identifier}/prices/ | 
[**apiV2AssetsRetrieve**](ApiAPI.md#apiv2assetsretrieve) | **GET** /api/v2/assets/{asset_identifier}/ | 
[**apiV2BillingInvoicesList**](ApiAPI.md#apiv2billinginvoiceslist) | **GET** /api/v2/billing/invoices/ | 
[**apiV2BillingInvoicesRetrieve**](ApiAPI.md#apiv2billinginvoicesretrieve) | **GET** /api/v2/billing/invoices/{uuid}/ | 
[**apiV2BrokerOrdersCreate**](ApiAPI.md#apiv2brokerorderscreate) | **POST** /api/v2/broker/orders/ | 
[**apiV2BrokerOrdersDestroy**](ApiAPI.md#apiv2brokerordersdestroy) | **DELETE** /api/v2/broker/orders/{uuid}/ | 
[**apiV2BrokerOrdersList**](ApiAPI.md#apiv2brokerorderslist) | **GET** /api/v2/broker/orders/ | 
[**apiV2BrokerOrdersRetrieve**](ApiAPI.md#apiv2brokerordersretrieve) | **GET** /api/v2/broker/orders/{uuid}/ | 
[**apiV2ClientsActivitiesList**](ApiAPI.md#apiv2clientsactivitieslist) | **GET** /api/v2/clients/{client_uuid}/activities/ | 
[**apiV2ClientsActivitiesRetrieve**](ApiAPI.md#apiv2clientsactivitiesretrieve) | **GET** /api/v2/clients/{client_uuid}/activities/{uuid}/ | 
[**apiV2ClientsAdviceEnginesList**](ApiAPI.md#apiv2clientsadviceengineslist) | **GET** /api/v2/clients/{client_uuid}/advice-engines/ | 
[**apiV2ClientsAdviceEnginesRetrieve**](ApiAPI.md#apiv2clientsadviceenginesretrieve) | **GET** /api/v2/clients/{client_uuid}/advice-engines/{uuid}/ | 
[**apiV2ClientsBillingFeesCreate**](ApiAPI.md#apiv2clientsbillingfeescreate) | **POST** /api/v2/clients/{client_uuid}/billing/fees/ | 
[**apiV2ClientsBillingFeesDestroy**](ApiAPI.md#apiv2clientsbillingfeesdestroy) | **DELETE** /api/v2/clients/{client_uuid}/billing/fees/{investor_fee_uuid}/ | 
[**apiV2ClientsBillingFeesList**](ApiAPI.md#apiv2clientsbillingfeeslist) | **GET** /api/v2/clients/{client_uuid}/billing/fees/ | 
[**apiV2ClientsBillingFeesPartialUpdate**](ApiAPI.md#apiv2clientsbillingfeespartialupdate) | **PATCH** /api/v2/clients/{client_uuid}/billing/fees/{investor_fee_uuid}/ | 
[**apiV2ClientsBillingFeesRetrieve**](ApiAPI.md#apiv2clientsbillingfeesretrieve) | **GET** /api/v2/clients/{client_uuid}/billing/fees/{investor_fee_uuid}/ | 
[**apiV2ClientsBillingFeesUpdate**](ApiAPI.md#apiv2clientsbillingfeesupdate) | **PUT** /api/v2/clients/{client_uuid}/billing/fees/{investor_fee_uuid}/ | 
[**apiV2ClientsBillingInvoicesList**](ApiAPI.md#apiv2clientsbillinginvoiceslist) | **GET** /api/v2/clients/{client_uuid}/billing/invoices/ | 
[**apiV2ClientsBillingInvoicesRetrieve**](ApiAPI.md#apiv2clientsbillinginvoicesretrieve) | **GET** /api/v2/clients/{client_uuid}/billing/invoices/{uuid}/ | 
[**apiV2ClientsDocumentsCreate**](ApiAPI.md#apiv2clientsdocumentscreate) | **POST** /api/v2/clients/{client_uuid}/documents/ | 
[**apiV2ClientsDocumentsDestroy**](ApiAPI.md#apiv2clientsdocumentsdestroy) | **DELETE** /api/v2/clients/{client_uuid}/documents/{uuid}/ | 
[**apiV2ClientsDocumentsList**](ApiAPI.md#apiv2clientsdocumentslist) | **GET** /api/v2/clients/{client_uuid}/documents/ | 
[**apiV2ClientsDocumentsRetrieve**](ApiAPI.md#apiv2clientsdocumentsretrieve) | **GET** /api/v2/clients/{client_uuid}/documents/{uuid}/ | 
[**apiV2ClientsMeVerifyEmailCreate**](ApiAPI.md#apiv2clientsmeverifyemailcreate) | **POST** /api/v2/clients/me/verify/email/ | 
[**apiV2ClientsNationalDocumentsList**](ApiAPI.md#apiv2clientsnationaldocumentslist) | **GET** /api/v2/clients/national_documents/ | 
[**apiV2ClientsReferralRetrieve**](ApiAPI.md#apiv2clientsreferralretrieve) | **GET** /api/v2/clients/referral/{referral_code}/ | 
[**apiV2ClientsReportStatementsList**](ApiAPI.md#apiv2clientsreportstatementslist) | **GET** /api/v2/clients/{client_uuid}/report/statements/ | 
[**apiV2ClientsReportStatementsRetrieve**](ApiAPI.md#apiv2clientsreportstatementsretrieve) | **GET** /api/v2/clients/{client_uuid}/report/statements/{uuid}/ | 
[**apiV2ClientsReportTaxReportsList**](ApiAPI.md#apiv2clientsreporttaxreportslist) | **GET** /api/v2/clients/{client_uuid}/report/tax-reports/ | 
[**apiV2ClientsReportTaxReportsRetrieve**](ApiAPI.md#apiv2clientsreporttaxreportsretrieve) | **GET** /api/v2/clients/{client_uuid}/report/tax-reports/{uuid}/ | 
[**apiV2ClientsVerifyEmailUpdate**](ApiAPI.md#apiv2clientsverifyemailupdate) | **PUT** /api/v2/clients/{uuid}/verify/email/ | 
[**apiV2ClientsWatchlistsCreate**](ApiAPI.md#apiv2clientswatchlistscreate) | **POST** /api/v2/clients/{client_uuid}/watchlists/ | 
[**apiV2ClientsWatchlistsDestroy**](ApiAPI.md#apiv2clientswatchlistsdestroy) | **DELETE** /api/v2/clients/{client_uuid}/watchlists/{watchlist_uuid}/ | 
[**apiV2ClientsWatchlistsList**](ApiAPI.md#apiv2clientswatchlistslist) | **GET** /api/v2/clients/{client_uuid}/watchlists/ | 
[**apiV2ClientsWatchlistsRetrieve**](ApiAPI.md#apiv2clientswatchlistsretrieve) | **GET** /api/v2/clients/{client_uuid}/watchlists/{watchlist_uuid}/ | 
[**apiV2ClientsWatchlistsUpdate**](ApiAPI.md#apiv2clientswatchlistsupdate) | **PUT** /api/v2/clients/{client_uuid}/watchlists/{watchlist_uuid}/ | 
[**apiV2FeedsAccessLogsList**](ApiAPI.md#apiv2feedsaccesslogslist) | **GET** /api/v2/feeds/access-logs/ | 
[**apiV2FeedsActivitiesList**](ApiAPI.md#apiv2feedsactivitieslist) | **GET** /api/v2/feeds/activities/ | 
[**apiV2GoalsCreate**](ApiAPI.md#apiv2goalscreate) | **POST** /api/v2/goals/ | 
[**apiV2GoalsDecumulationCreate**](ApiAPI.md#apiv2goalsdecumulationcreate) | **POST** /api/v2/goals/decumulation/ | 
[**apiV2GoalsDestroy**](ApiAPI.md#apiv2goalsdestroy) | **DELETE** /api/v2/goals/{goal_uuid}/ | 
[**apiV2GoalsForecastCreate**](ApiAPI.md#apiv2goalsforecastcreate) | **POST** /api/v2/goals/forecast/ | 
[**apiV2GoalsList**](ApiAPI.md#apiv2goalslist) | **GET** /api/v2/goals/ | 
[**apiV2GoalsPartialUpdate**](ApiAPI.md#apiv2goalspartialupdate) | **PATCH** /api/v2/goals/{goal_uuid}/ | 
[**apiV2GoalsRetrieve**](ApiAPI.md#apiv2goalsretrieve) | **GET** /api/v2/goals/{goal_uuid}/ | 
[**apiV2InboxConversationsCreate**](ApiAPI.md#apiv2inboxconversationscreate) | **POST** /api/v2/inbox/conversations/ | 
[**apiV2InboxConversationsList**](ApiAPI.md#apiv2inboxconversationslist) | **GET** /api/v2/inbox/conversations/ | 
[**apiV2InboxConversationsList2**](ApiAPI.md#apiv2inboxconversationslist2) | **GET** /api/v2/inbox/conversations/{conversation}/ | 
[**apiV2InboxConversationsMessagesAttachmentsRetrieve**](ApiAPI.md#apiv2inboxconversationsmessagesattachmentsretrieve) | **GET** /api/v2/inbox/conversations/{conversation}/messages/{message}/attachments/{uuid}/ | 
[**apiV2InboxConversationsMessagesCreate**](ApiAPI.md#apiv2inboxconversationsmessagescreate) | **POST** /api/v2/inbox/conversations/{conversation}/messages/ | 
[**apiV2MobileVersionRetrieve**](ApiAPI.md#apiv2mobileversionretrieve) | **GET** /api/v2/mobile/{platform}/version/ | 
[**apiV2PlatformSettingsList**](ApiAPI.md#apiv2platformsettingslist) | **GET** /api/v2/platform/settings/ | 
[**apiV2PortalCountriesList**](ApiAPI.md#apiv2portalcountrieslist) | **GET** /api/v2/portal/countries/ | 
[**apiV2PortalSettingsRetrieve**](ApiAPI.md#apiv2portalsettingsretrieve) | **GET** /api/v2/portal/settings/ | 
[**apiV2PortalTosCurrentRetrieve**](ApiAPI.md#apiv2portaltoscurrentretrieve) | **GET** /api/v2/portal/tos/current/ | 
[**apiV2PortalTosList**](ApiAPI.md#apiv2portaltoslist) | **GET** /api/v2/portal/tos/ | 
[**apiV2PortalTosRetrieve**](ApiAPI.md#apiv2portaltosretrieve) | **GET** /api/v2/portal/tos/{uuid}/ | 
[**apiV2PortfoliosActivitiesList**](ApiAPI.md#apiv2portfoliosactivitieslist) | **GET** /api/v2/portfolios/{portfolio_uuid}/activities/ | 
[**apiV2PortfoliosActivitiesRetrieve**](ApiAPI.md#apiv2portfoliosactivitiesretrieve) | **GET** /api/v2/portfolios/{portfolio_uuid}/activities/{uuid}/ | 
[**apiV2PortfoliosAllocationsEndDay**](ApiAPI.md#apiv2portfoliosallocationsendday) | **GET** /api/v2/portfolios/{portfolio_uuid}/allocations/end-day/ | 
[**apiV2PortfoliosAllocationsEndDayByDateRetrieve**](ApiAPI.md#apiv2portfoliosallocationsenddaybydateretrieve) | **GET** /api/v2/portfolios/{portfolio_uuid}/allocations/end-day/{allocation_date}/ | 
[**apiV2PortfoliosAllocationsEndDayLatestRetrieve**](ApiAPI.md#apiv2portfoliosallocationsenddaylatestretrieve) | **GET** /api/v2/portfolios/{portfolio_uuid}/allocations/end-day/latest/ | 
[**apiV2PortfoliosAllocationsHistoryRetrieve**](ApiAPI.md#apiv2portfoliosallocationshistoryretrieve) | **GET** /api/v2/portfolios/{portfolio}/allocations/history/ | 
[**apiV2PortfoliosAllocationsIntradayLatestRetrieve**](ApiAPI.md#apiv2portfoliosallocationsintradaylatestretrieve) | **GET** /api/v2/portfolios/{portfolio_uuid}/allocations/intraday/latest/ | 
[**apiV2PortfoliosAllocationsList**](ApiAPI.md#apiv2portfoliosallocationslist) | **GET** /api/v2/portfolios/{portfolio_uuid}/allocations/ | 
[**apiV2PortfoliosAllocationsRetrieve**](ApiAPI.md#apiv2portfoliosallocationsretrieve) | **GET** /api/v2/portfolios/{portfolio_uuid}/allocations/{id}/ | 
[**apiV2PortfoliosCreate**](ApiAPI.md#apiv2portfolioscreate) | **POST** /api/v2/portfolios/ | 
[**apiV2PortfoliosDepositsCreate**](ApiAPI.md#apiv2portfoliosdepositscreate) | **POST** /api/v2/portfolios/{portfolio_uuid}/deposits/ | 
[**apiV2PortfoliosDepositsDestroy**](ApiAPI.md#apiv2portfoliosdepositsdestroy) | **DELETE** /api/v2/portfolios/{portfolio_uuid}/deposits/{uuid}/ | 
[**apiV2PortfoliosDepositsList**](ApiAPI.md#apiv2portfoliosdepositslist) | **GET** /api/v2/portfolios/{portfolio_uuid}/deposits/ | 
[**apiV2PortfoliosDepositsRetrieve**](ApiAPI.md#apiv2portfoliosdepositsretrieve) | **GET** /api/v2/portfolios/{portfolio_uuid}/deposits/{uuid}/ | 
[**apiV2PortfoliosDestroy**](ApiAPI.md#apiv2portfoliosdestroy) | **DELETE** /api/v2/portfolios/{portfolio_uuid}/ | 
[**apiV2PortfoliosList**](ApiAPI.md#apiv2portfolioslist) | **GET** /api/v2/portfolios/ | 
[**apiV2PortfoliosOrdersCreate**](ApiAPI.md#apiv2portfoliosorderscreate) | **POST** /api/v2/portfolios/{portfolio_uuid}/orders/ | 
[**apiV2PortfoliosOrdersDestroy**](ApiAPI.md#apiv2portfoliosordersdestroy) | **DELETE** /api/v2/portfolios/{portfolio_uuid}/orders/{uuid}/ | 
[**apiV2PortfoliosOrdersList**](ApiAPI.md#apiv2portfoliosorderslist) | **GET** /api/v2/portfolios/{portfolio_uuid}/orders/ | 
[**apiV2PortfoliosOrdersRetrieve**](ApiAPI.md#apiv2portfoliosordersretrieve) | **GET** /api/v2/portfolios/{portfolio_uuid}/orders/{uuid}/ | 
[**apiV2PortfoliosPartialUpdate**](ApiAPI.md#apiv2portfoliospartialupdate) | **PATCH** /api/v2/portfolios/{portfolio_uuid}/ | 
[**apiV2PortfoliosPerformanceMwrrList**](ApiAPI.md#apiv2portfoliosperformancemwrrlist) | **GET** /api/v2/portfolios/{portfolio_uuid}/performance/mwrr/ | 
[**apiV2PortfoliosPerformancePositionsList**](ApiAPI.md#apiv2portfoliosperformancepositionslist) | **GET** /api/v2/portfolios/{portfolio_uuid}/performance/positions/ | 
[**apiV2PortfoliosPerformanceTwrrList**](ApiAPI.md#apiv2portfoliosperformancetwrrlist) | **GET** /api/v2/portfolios/{portfolio_uuid}/performance/twrr/ | 
[**apiV2PortfoliosPortfoliotypesList**](ApiAPI.md#apiv2portfoliosportfoliotypeslist) | **GET** /api/v2/portfolios/portfoliotypes/ | 
[**apiV2PortfoliosPortfoliotypesRestrictionsList**](ApiAPI.md#apiv2portfoliosportfoliotypesrestrictionslist) | **GET** /api/v2/portfolios/portfoliotypes/{code}/restrictions/ | 
[**apiV2PortfoliosRebalancesList**](ApiAPI.md#apiv2portfoliosrebalanceslist) | **GET** /api/v2/portfolios/{portfolio_uuid}/rebalances/ | 
[**apiV2PortfoliosRebalancesRetrieve**](ApiAPI.md#apiv2portfoliosrebalancesretrieve) | **GET** /api/v2/portfolios/{portfolio_uuid}/rebalances/{uuid}/ | 
[**apiV2PortfoliosRestrictionsRetrieve**](ApiAPI.md#apiv2portfoliosrestrictionsretrieve) | **GET** /api/v2/portfolios/{portfolio_uuid}/restrictions/ | 
[**apiV2PortfoliosRetrieve**](ApiAPI.md#apiv2portfoliosretrieve) | **GET** /api/v2/portfolios/{portfolio_uuid}/ | 
[**apiV2PortfoliosUpdate**](ApiAPI.md#apiv2portfoliosupdate) | **PUT** /api/v2/portfolios/{portfolio_uuid}/ | 
[**apiV2PortfoliosWithdrawalsCreate**](ApiAPI.md#apiv2portfolioswithdrawalscreate) | **POST** /api/v2/portfolios/{portfolio_uuid}/withdrawals/ | 
[**apiV2PortfoliosWithdrawalsDestroy**](ApiAPI.md#apiv2portfolioswithdrawalsdestroy) | **DELETE** /api/v2/portfolios/{portfolio_uuid}/withdrawals/{uuid}/ | 
[**apiV2PortfoliosWithdrawalsList**](ApiAPI.md#apiv2portfolioswithdrawalslist) | **GET** /api/v2/portfolios/{portfolio_uuid}/withdrawals/ | 
[**apiV2PortfoliosWithdrawalsRetrieve**](ApiAPI.md#apiv2portfolioswithdrawalsretrieve) | **GET** /api/v2/portfolios/{portfolio_uuid}/withdrawals/{uuid}/ | 
[**apiV2RelationshipManagerAnalyticsAllocationsByAssetRetrieve**](ApiAPI.md#apiv2relationshipmanageranalyticsallocationsbyassetretrieve) | **GET** /api/v2/relationship-manager/{uuid}/analytics/allocations-by-asset/ | 
[**apiV2RelationshipManagerAnalyticsAssetConcentrationRiskRetrieve**](ApiAPI.md#apiv2relationshipmanageranalyticsassetconcentrationriskretrieve) | **GET** /api/v2/relationship-manager/{uuid}/analytics/asset-concentration-risk/ | 
[**apiV2RelationshipManagerAnalyticsAumEvolutionRetrieve**](ApiAPI.md#apiv2relationshipmanageranalyticsaumevolutionretrieve) | **GET** /api/v2/relationship-manager/{uuid}/analytics/aum-evolution/ | 
[**apiV2RelationshipManagerAnalyticsAumPortfolioRiskRetrieve**](ApiAPI.md#apiv2relationshipmanageranalyticsaumportfolioriskretrieve) | **GET** /api/v2/relationship-manager/{uuid}/analytics/aum-portfolio-risk/ | 
[**apiV2RelationshipManagerAnalyticsAumRetrieve**](ApiAPI.md#apiv2relationshipmanageranalyticsaumretrieve) | **GET** /api/v2/relationship-manager/{uuid}/analytics/aum/ | 
[**apiV2RelationshipManagerAnalyticsClientByRiskRetrieve**](ApiAPI.md#apiv2relationshipmanageranalyticsclientbyriskretrieve) | **GET** /api/v2/relationship-manager/{uuid}/analytics/client-by-risk/ | 
[**apiV2RelationshipManagerAnalyticsClientByStatusRetrieve**](ApiAPI.md#apiv2relationshipmanageranalyticsclientbystatusretrieve) | **GET** /api/v2/relationship-manager/{uuid}/analytics/client-by-status/ | 
[**apiV2RelationshipManagerAnalyticsClientRankingRetrieve**](ApiAPI.md#apiv2relationshipmanageranalyticsclientrankingretrieve) | **GET** /api/v2/relationship-manager/{uuid}/analytics/client-ranking/ | 
[**apiV2RelationshipManagerAnalyticsInflowsOutflowsRetrieve**](ApiAPI.md#apiv2relationshipmanageranalyticsinflowsoutflowsretrieve) | **GET** /api/v2/relationship-manager/{uuid}/analytics/inflows-outflows/ | 
[**apiV2RelationshipManagerAnalyticsPortfolioRiskPerformanceRetrieve**](ApiAPI.md#apiv2relationshipmanageranalyticsportfolioriskperformanceretrieve) | **GET** /api/v2/relationship-manager/{uuid}/analytics/portfolio-risk-performance/ | 
[**apiV2RelationshipManagerAnalyticsTotalActiveClientsRetrieve**](ApiAPI.md#apiv2relationshipmanageranalyticstotalactiveclientsretrieve) | **GET** /api/v2/relationship-manager/{uuid}/analytics/total-active-clients/ | 
[**apiV2RelationshipManagerMeRetrieve**](ApiAPI.md#apiv2relationshipmanagermeretrieve) | **GET** /api/v2/relationship-manager/me/ | 
[**apiV2RelationshipManagerRetrieve**](ApiAPI.md#apiv2relationshipmanagerretrieve) | **GET** /api/v2/relationship-manager/{uuid}/ | 
[**apiV2ReportStatementsList**](ApiAPI.md#apiv2reportstatementslist) | **GET** /api/v2/report/statements/ | 
[**apiV2ReportStatementsRetrieve**](ApiAPI.md#apiv2reportstatementsretrieve) | **GET** /api/v2/report/statements/{uuid}/ | 
[**apiV2ReportTaxReportList**](ApiAPI.md#apiv2reporttaxreportlist) | **GET** /api/v2/report/tax-report/ | 
[**apiV2ReportTaxReportRetrieve**](ApiAPI.md#apiv2reporttaxreportretrieve) | **GET** /api/v2/report/tax-report/{uuid}/ | 
[**apiV2RiskQuestionsList**](ApiAPI.md#apiv2riskquestionslist) | **GET** /api/v2/risk/questions/ | 
[**apiV2VerificationsVerifierWebhookCreate**](ApiAPI.md#apiv2verificationsverifierwebhookcreate) | **POST** /api/v2/verifications/verifier_webhook/{verifier}/{action}/ | 
[**apiV2WebsocketAuthenticationTicketCreate**](ApiAPI.md#apiv2websocketauthenticationticketcreate) | **POST** /api/v2/websocket/authentication/ticket/ | 
[**apiV2WebsocketAuthorizeAssetCreate**](ApiAPI.md#apiv2websocketauthorizeassetcreate) | **POST** /api/v2/websocket/authorize/asset/ | 
[**apiV2WebsocketAuthorizeCreate**](ApiAPI.md#apiv2websocketauthorizecreate) | **POST** /api/v2/websocket/authorize/ | 
[**apiV2WebsocketAuthorizePortfolioCreate**](ApiAPI.md#apiv2websocketauthorizeportfoliocreate) | **POST** /api/v2/websocket/authorize/portfolio/ | 
[**apiV2WebsocketOnSubscribeCreate**](ApiAPI.md#apiv2websocketonsubscribecreate) | **POST** /api/v2/websocket/on_subscribe/ | 
[**apiV2WebsocketOnUnsubscribeCreate**](ApiAPI.md#apiv2websocketonunsubscribecreate) | **POST** /api/v2/websocket/on_unsubscribe/ | 


# **apiSchemaRetrieve**
```swift
    open class func apiSchemaRetrieve(format: Format_apiSchemaRetrieve? = nil, lang: Lang_apiSchemaRetrieve? = nil, completion: @escaping (_ data: [String: AnyCodable]?, _ error: Error?) -> Void)
```



OpenApi3 schema for this API. Format can be selected via content negotiation.  - YAML: application/vnd.oai.openapi - JSON: application/vnd.oai.openapi+json

### Example
```swift
// The following code samples are still beta. For any issue, please report via http://github.com/OpenAPITools/openapi-generator/issues/new
import OpenAPIClient

let format = "format_example" // String |  (optional)
let lang = "lang_example" // String |  (optional)

ApiAPI.apiSchemaRetrieve(format: format, lang: lang) { (response, error) in
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
 **format** | **String** |  | [optional] 
 **lang** | **String** |  | [optional] 

### Return type

[**[String: AnyCodable]**](AnyCodable.md)

### Authorization

[cookieAuth](../README.md#cookieAuth), [jwtAuth](../README.md#jwtAuth), [tokenAuth](../README.md#tokenAuth)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/vnd.oai.openapi, application/yaml, application/vnd.oai.openapi+json, application/json

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **apiV2AdviceEnginesEtsCategoriesList**
```swift
    open class func apiV2AdviceEnginesEtsCategoriesList(limit: Int? = nil, offset: Int? = nil, completion: @escaping (_ data: PaginatedCategoryList?, _ error: Error?) -> Void)
```



### Example
```swift
// The following code samples are still beta. For any issue, please report via http://github.com/OpenAPITools/openapi-generator/issues/new
import OpenAPIClient

let limit = 987 // Int | Number of results to return per page. (optional)
let offset = 987 // Int | The initial index from which to return the results. (optional)

ApiAPI.apiV2AdviceEnginesEtsCategoriesList(limit: limit, offset: offset) { (response, error) in
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
 **limit** | **Int** | Number of results to return per page. | [optional] 
 **offset** | **Int** | The initial index from which to return the results. | [optional] 

### Return type

[**PaginatedCategoryList**](PaginatedCategoryList.md)

### Authorization

[cookieAuth](../README.md#cookieAuth), [jwtAuth](../README.md#jwtAuth), [tokenAuth](../README.md#tokenAuth)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **apiV2AdviceEnginesEtsCoreCategoryGroupsList**
```swift
    open class func apiV2AdviceEnginesEtsCoreCategoryGroupsList(limit: Int? = nil, offset: Int? = nil, completion: @escaping (_ data: PaginatedCoreCategoryGroupList?, _ error: Error?) -> Void)
```



### Example
```swift
// The following code samples are still beta. For any issue, please report via http://github.com/OpenAPITools/openapi-generator/issues/new
import OpenAPIClient

let limit = 987 // Int | Number of results to return per page. (optional)
let offset = 987 // Int | The initial index from which to return the results. (optional)

ApiAPI.apiV2AdviceEnginesEtsCoreCategoryGroupsList(limit: limit, offset: offset) { (response, error) in
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
 **limit** | **Int** | Number of results to return per page. | [optional] 
 **offset** | **Int** | The initial index from which to return the results. | [optional] 

### Return type

[**PaginatedCoreCategoryGroupList**](PaginatedCoreCategoryGroupList.md)

### Authorization

[cookieAuth](../README.md#cookieAuth), [jwtAuth](../README.md#jwtAuth), [tokenAuth](../README.md#tokenAuth)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **apiV2AdviceEnginesEtsForecastCreate**
```swift
    open class func apiV2AdviceEnginesEtsForecastCreate(eTSForecastRequest: ETSForecastRequest, completion: @escaping (_ data: ETSForecastRequest?, _ error: Error?) -> Void)
```



The forecast positions and amounts for the time_horizon and  risk_level chosen. Taking into account the initial_auto_deposit and the initial_amount jointly with the selected filters.

### Example
```swift
// The following code samples are still beta. For any issue, please report via http://github.com/OpenAPITools/openapi-generator/issues/new
import OpenAPIClient

let eTSForecastRequest = ETSForecastRequest(timeHorizon: 123, initialAmount: 123, recurringAmount: 123, recurringPeriod: 123, riskLevel: 123, favouriteCategories: ["favouriteCategories_example"], excludedCategories: ["excludedCategories_example"]) // ETSForecastRequest | 

ApiAPI.apiV2AdviceEnginesEtsForecastCreate(eTSForecastRequest: eTSForecastRequest) { (response, error) in
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
 **eTSForecastRequest** | [**ETSForecastRequest**](ETSForecastRequest.md) |  | 

### Return type

[**ETSForecastRequest**](ETSForecastRequest.md)

### Authorization

[cookieAuth](../README.md#cookieAuth), [jwtAuth](../README.md#jwtAuth), [tokenAuth](../README.md#tokenAuth)

### HTTP request headers

 - **Content-Type**: application/json, application/x-www-form-urlencoded, multipart/form-data
 - **Accept**: application/json

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **apiV2AdviceEnginesEtsPresetCategoryGroupsList**
```swift
    open class func apiV2AdviceEnginesEtsPresetCategoryGroupsList(limit: Int? = nil, offset: Int? = nil, completion: @escaping (_ data: PaginatedPresetCategoryGroupList?, _ error: Error?) -> Void)
```



### Example
```swift
// The following code samples are still beta. For any issue, please report via http://github.com/OpenAPITools/openapi-generator/issues/new
import OpenAPIClient

let limit = 987 // Int | Number of results to return per page. (optional)
let offset = 987 // Int | The initial index from which to return the results. (optional)

ApiAPI.apiV2AdviceEnginesEtsPresetCategoryGroupsList(limit: limit, offset: offset) { (response, error) in
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
 **limit** | **Int** | Number of results to return per page. | [optional] 
 **offset** | **Int** | The initial index from which to return the results. | [optional] 

### Return type

[**PaginatedPresetCategoryGroupList**](PaginatedPresetCategoryGroupList.md)

### Authorization

[cookieAuth](../README.md#cookieAuth), [jwtAuth](../README.md#jwtAuth), [tokenAuth](../README.md#tokenAuth)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **apiV2AdviceEnginesModelPortfolioForecastCreate**
```swift
    open class func apiV2AdviceEnginesModelPortfolioForecastCreate(modelPortfolioForecastRequest: ModelPortfolioForecastRequest, completion: @escaping (_ data: ModelPortfolioForecastRequest?, _ error: Error?) -> Void)
```



The forecast positions and amounts for the time_horizon chosen. Taking into account the initial_auto_deposit and the initial_amount jointly with the selected filters.

### Example
```swift
// The following code samples are still beta. For any issue, please report via http://github.com/OpenAPITools/openapi-generator/issues/new
import OpenAPIClient

let modelPortfolioForecastRequest = ModelPortfolioForecastRequest(timeHorizon: 123, initialAmount: 123, recurringAmount: 123, recurringPeriod: 123, modelPortfolio: "modelPortfolio_example") // ModelPortfolioForecastRequest | 

ApiAPI.apiV2AdviceEnginesModelPortfolioForecastCreate(modelPortfolioForecastRequest: modelPortfolioForecastRequest) { (response, error) in
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
 **modelPortfolioForecastRequest** | [**ModelPortfolioForecastRequest**](ModelPortfolioForecastRequest.md) |  | 

### Return type

[**ModelPortfolioForecastRequest**](ModelPortfolioForecastRequest.md)

### Authorization

[cookieAuth](../README.md#cookieAuth), [jwtAuth](../README.md#jwtAuth), [tokenAuth](../README.md#tokenAuth)

### HTTP request headers

 - **Content-Type**: application/json, application/x-www-form-urlencoded, multipart/form-data
 - **Accept**: application/json

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **apiV2AdviceEnginesModelPortfolioModelPortfoliosList**
```swift
    open class func apiV2AdviceEnginesModelPortfolioModelPortfoliosList(extraData: [String: AnyCodable]? = nil, limit: Int? = nil, name: String? = nil, offset: Int? = nil, riskHigher: Int? = nil, riskLevel: Int? = nil, riskLower: Int? = nil, completion: @escaping (_ data: PaginatedInvestorModelPortfolioList?, _ error: Error?) -> Void)
```



### Example
```swift
// The following code samples are still beta. For any issue, please report via http://github.com/OpenAPITools/openapi-generator/issues/new
import OpenAPIClient

let extraData = "TODO" // [String: AnyCodable] | Additional ModelPortfolio attributes (optional)
let limit = 987 // Int | Number of results to return per page. (optional)
let name = "name_example" // String |  (optional)
let offset = 987 // Int | The initial index from which to return the results. (optional)
let riskHigher = 987 // Int |  (optional)
let riskLevel = 987 // Int |  (optional)
let riskLower = 987 // Int |  (optional)

ApiAPI.apiV2AdviceEnginesModelPortfolioModelPortfoliosList(extraData: extraData, limit: limit, name: name, offset: offset, riskHigher: riskHigher, riskLevel: riskLevel, riskLower: riskLower) { (response, error) in
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
 **extraData** | [**[String: AnyCodable]**](AnyCodable.md) | Additional ModelPortfolio attributes | [optional] 
 **limit** | **Int** | Number of results to return per page. | [optional] 
 **name** | **String** |  | [optional] 
 **offset** | **Int** | The initial index from which to return the results. | [optional] 
 **riskHigher** | **Int** |  | [optional] 
 **riskLevel** | **Int** |  | [optional] 
 **riskLower** | **Int** |  | [optional] 

### Return type

[**PaginatedInvestorModelPortfolioList**](PaginatedInvestorModelPortfolioList.md)

### Authorization

[cookieAuth](../README.md#cookieAuth), [jwtAuth](../README.md#jwtAuth), [tokenAuth](../README.md#tokenAuth)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **apiV2AdviceEnginesModelPortfolioModelPortfoliosRetrieve**
```swift
    open class func apiV2AdviceEnginesModelPortfolioModelPortfoliosRetrieve(uuid: UUID, completion: @escaping (_ data: InvestorModelPortfolio?, _ error: Error?) -> Void)
```



### Example
```swift
// The following code samples are still beta. For any issue, please report via http://github.com/OpenAPITools/openapi-generator/issues/new
import OpenAPIClient

let uuid = 987 // UUID | 

ApiAPI.apiV2AdviceEnginesModelPortfolioModelPortfoliosRetrieve(uuid: uuid) { (response, error) in
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
 **uuid** | [**UUID**](.md) |  | 

### Return type

[**InvestorModelPortfolio**](InvestorModelPortfolio.md)

### Authorization

[cookieAuth](../README.md#cookieAuth), [jwtAuth](../README.md#jwtAuth), [tokenAuth](../README.md#tokenAuth)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **apiV2AssetsCategoriesList**
```swift
    open class func apiV2AssetsCategoriesList(limit: Int? = nil, offset: Int? = nil, type: String? = nil, completion: @escaping (_ data: PaginatedAssetCategoryList?, _ error: Error?) -> Void)
```



Retrieve all asset categories

### Example
```swift
// The following code samples are still beta. For any issue, please report via http://github.com/OpenAPITools/openapi-generator/issues/new
import OpenAPIClient

let limit = 987 // Int | Number of results to return per page. (optional)
let offset = 987 // Int | The initial index from which to return the results. (optional)
let type = "type_example" // String |  (optional)

ApiAPI.apiV2AssetsCategoriesList(limit: limit, offset: offset, type: type) { (response, error) in
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
 **limit** | **Int** | Number of results to return per page. | [optional] 
 **offset** | **Int** | The initial index from which to return the results. | [optional] 
 **type** | **String** |  | [optional] 

### Return type

[**PaginatedAssetCategoryList**](PaginatedAssetCategoryList.md)

### Authorization

[cookieAuth](../README.md#cookieAuth), [jwtAuth](../README.md#jwtAuth), [tokenAuth](../README.md#tokenAuth)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **apiV2AssetsIntradayPricesLatestRetrieve**
```swift
    open class func apiV2AssetsIntradayPricesLatestRetrieve(assetIdentifier: UUID, completion: @escaping (_ data: IntradayPrice?, _ error: Error?) -> Void)
```



Prices (from an Asset) list view endpoints.  GET: Prices retrieve (rest framework builtin overriding get_object)

### Example
```swift
// The following code samples are still beta. For any issue, please report via http://github.com/OpenAPITools/openapi-generator/issues/new
import OpenAPIClient

let assetIdentifier = 987 // UUID | 

ApiAPI.apiV2AssetsIntradayPricesLatestRetrieve(assetIdentifier: assetIdentifier) { (response, error) in
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
 **assetIdentifier** | [**UUID**](.md) |  | 

### Return type

[**IntradayPrice**](IntradayPrice.md)

### Authorization

[cookieAuth](../README.md#cookieAuth), [jwtAuth](../README.md#jwtAuth), [tokenAuth](../README.md#tokenAuth)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **apiV2AssetsIntradayPricesList**
```swift
    open class func apiV2AssetsIntradayPricesList(assetIdentifier: UUID, dateAfter: Date? = nil, dateBefore: Date? = nil, datetimeAfter: Date? = nil, datetimeBefore: Date? = nil, limit: Int? = nil, offset: Int? = nil, completion: @escaping (_ data: PaginatedIntradayPriceList?, _ error: Error?) -> Void)
```



Prices (from an Asset) list view endpoints.  GET: Prices retrieve (rest framework builtin overriding get_object)

### Example
```swift
// The following code samples are still beta. For any issue, please report via http://github.com/OpenAPITools/openapi-generator/issues/new
import OpenAPIClient

let assetIdentifier = 987 // UUID | 
let dateAfter = Date() // Date |  (optional)
let dateBefore = Date() // Date |  (optional)
let datetimeAfter = Date() // Date |  (optional)
let datetimeBefore = Date() // Date |  (optional)
let limit = 987 // Int | Number of results to return per page. (optional)
let offset = 987 // Int | The initial index from which to return the results. (optional)

ApiAPI.apiV2AssetsIntradayPricesList(assetIdentifier: assetIdentifier, dateAfter: dateAfter, dateBefore: dateBefore, datetimeAfter: datetimeAfter, datetimeBefore: datetimeBefore, limit: limit, offset: offset) { (response, error) in
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
 **assetIdentifier** | [**UUID**](.md) |  | 
 **dateAfter** | **Date** |  | [optional] 
 **dateBefore** | **Date** |  | [optional] 
 **datetimeAfter** | **Date** |  | [optional] 
 **datetimeBefore** | **Date** |  | [optional] 
 **limit** | **Int** | Number of results to return per page. | [optional] 
 **offset** | **Int** | The initial index from which to return the results. | [optional] 

### Return type

[**PaginatedIntradayPriceList**](PaginatedIntradayPriceList.md)

### Authorization

[cookieAuth](../README.md#cookieAuth), [jwtAuth](../README.md#jwtAuth), [tokenAuth](../README.md#tokenAuth)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **apiV2AssetsList**
```swift
    open class func apiV2AssetsList(assetType: AssetType_apiV2AssetsList? = nil, categoryCode: [String]? = nil, categoryType: [String]? = nil, currency: Int? = nil, isin: String? = nil, limit: Int? = nil, market: Int? = nil, name: String? = nil, offset: Int? = nil, status: Status_apiV2AssetsList? = nil, ticker: String? = nil, completion: @escaping (_ data: PaginatedAssetListList?, _ error: Error?) -> Void)
```



A list of Assets filtered by category codes. Default is an empty dict which returns the whole universe.

### Example
```swift
// The following code samples are still beta. For any issue, please report via http://github.com/OpenAPITools/openapi-generator/issues/new
import OpenAPIClient

let assetType = "assetType_example" // String |  (optional)
let categoryCode = ["inner_example"] // [String] |  (optional)
let categoryType = ["inner_example"] // [String] |  (optional)
let currency = 987 // Int |  (optional)
let isin = "isin_example" // String |  (optional)
let limit = 987 // Int | Number of results to return per page. (optional)
let market = 987 // Int |  (optional)
let name = "name_example" // String |  (optional)
let offset = 987 // Int | The initial index from which to return the results. (optional)
let status = "status_example" // String |  (optional)
let ticker = "ticker_example" // String |  (optional)

ApiAPI.apiV2AssetsList(assetType: assetType, categoryCode: categoryCode, categoryType: categoryType, currency: currency, isin: isin, limit: limit, market: market, name: name, offset: offset, status: status, ticker: ticker) { (response, error) in
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
 **assetType** | **String** |  | [optional] 
 **categoryCode** | [**[String]**](String.md) |  | [optional] 
 **categoryType** | [**[String]**](String.md) |  | [optional] 
 **currency** | **Int** |  | [optional] 
 **isin** | **String** |  | [optional] 
 **limit** | **Int** | Number of results to return per page. | [optional] 
 **market** | **Int** |  | [optional] 
 **name** | **String** |  | [optional] 
 **offset** | **Int** | The initial index from which to return the results. | [optional] 
 **status** | **String** |  | [optional] 
 **ticker** | **String** |  | [optional] 

### Return type

[**PaginatedAssetListList**](PaginatedAssetListList.md)

### Authorization

[cookieAuth](../README.md#cookieAuth), [jwtAuth](../README.md#jwtAuth), [tokenAuth](../README.md#tokenAuth)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **apiV2AssetsPerformanceList**
```swift
    open class func apiV2AssetsPerformanceList(assetIdentifier: UUID, dateYearAfter: Double? = nil, dateYearBefore: Double? = nil, limit: Int? = nil, offset: Int? = nil, completion: @escaping (_ data: PaginatedAssetGrowthList?, _ error: Error?) -> Void)
```



Retrieve asset's yearly performance.  This View overwrites ListAPIView's 'list' method because it doesn't have any hook that allows us to call 'get_asset_price_year_graph after the filtering is applied.

### Example
```swift
// The following code samples are still beta. For any issue, please report via http://github.com/OpenAPITools/openapi-generator/issues/new
import OpenAPIClient

let assetIdentifier = 987 // UUID | 
let dateYearAfter = 987 // Double |  (optional)
let dateYearBefore = 987 // Double |  (optional)
let limit = 987 // Int | Number of results to return per page. (optional)
let offset = 987 // Int | The initial index from which to return the results. (optional)

ApiAPI.apiV2AssetsPerformanceList(assetIdentifier: assetIdentifier, dateYearAfter: dateYearAfter, dateYearBefore: dateYearBefore, limit: limit, offset: offset) { (response, error) in
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
 **assetIdentifier** | [**UUID**](.md) |  | 
 **dateYearAfter** | **Double** |  | [optional] 
 **dateYearBefore** | **Double** |  | [optional] 
 **limit** | **Int** | Number of results to return per page. | [optional] 
 **offset** | **Int** | The initial index from which to return the results. | [optional] 

### Return type

[**PaginatedAssetGrowthList**](PaginatedAssetGrowthList.md)

### Authorization

[cookieAuth](../README.md#cookieAuth), [jwtAuth](../README.md#jwtAuth), [tokenAuth](../README.md#tokenAuth)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **apiV2AssetsPricesLatestRetrieve**
```swift
    open class func apiV2AssetsPricesLatestRetrieve(assetIdentifier: UUID, completion: @escaping (_ data: Price?, _ error: Error?) -> Void)
```



Prices (from an Asset) list view endpoints.  GET: Prices retrieve (rest framework builtin overriding get_object)

### Example
```swift
// The following code samples are still beta. For any issue, please report via http://github.com/OpenAPITools/openapi-generator/issues/new
import OpenAPIClient

let assetIdentifier = 987 // UUID | 

ApiAPI.apiV2AssetsPricesLatestRetrieve(assetIdentifier: assetIdentifier) { (response, error) in
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
 **assetIdentifier** | [**UUID**](.md) |  | 

### Return type

[**Price**](Price.md)

### Authorization

[cookieAuth](../README.md#cookieAuth), [jwtAuth](../README.md#jwtAuth), [tokenAuth](../README.md#tokenAuth)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **apiV2AssetsPricesList**
```swift
    open class func apiV2AssetsPricesList(assetIdentifier: UUID, dateAfter: Date? = nil, dateBefore: Date? = nil, datetimeAfter: Date? = nil, datetimeBefore: Date? = nil, limit: Int? = nil, offset: Int? = nil, completion: @escaping (_ data: PaginatedPriceList?, _ error: Error?) -> Void)
```



Prices (from an Asset) list view endpoints.  GET: Prices retrieve (rest framework builtin overriding get_object)

### Example
```swift
// The following code samples are still beta. For any issue, please report via http://github.com/OpenAPITools/openapi-generator/issues/new
import OpenAPIClient

let assetIdentifier = 987 // UUID | 
let dateAfter = Date() // Date |  (optional)
let dateBefore = Date() // Date |  (optional)
let datetimeAfter = Date() // Date |  (optional)
let datetimeBefore = Date() // Date |  (optional)
let limit = 987 // Int | Number of results to return per page. (optional)
let offset = 987 // Int | The initial index from which to return the results. (optional)

ApiAPI.apiV2AssetsPricesList(assetIdentifier: assetIdentifier, dateAfter: dateAfter, dateBefore: dateBefore, datetimeAfter: datetimeAfter, datetimeBefore: datetimeBefore, limit: limit, offset: offset) { (response, error) in
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
 **assetIdentifier** | [**UUID**](.md) |  | 
 **dateAfter** | **Date** |  | [optional] 
 **dateBefore** | **Date** |  | [optional] 
 **datetimeAfter** | **Date** |  | [optional] 
 **datetimeBefore** | **Date** |  | [optional] 
 **limit** | **Int** | Number of results to return per page. | [optional] 
 **offset** | **Int** | The initial index from which to return the results. | [optional] 

### Return type

[**PaginatedPriceList**](PaginatedPriceList.md)

### Authorization

[cookieAuth](../README.md#cookieAuth), [jwtAuth](../README.md#jwtAuth), [tokenAuth](../README.md#tokenAuth)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **apiV2AssetsRetrieve**
```swift
    open class func apiV2AssetsRetrieve(assetIdentifier: UUID, completion: @escaping (_ data: AssetDetail?, _ error: Error?) -> Void)
```



Allows get an asset instance by * UUID * ISIN * ISIN & MARKET_CODE * ISIN & MARKET_CODE & CURRENCY_CODE  Examples:     * assets/a66633d7-4418-4c85-9582-01c80df531d4/     * assets/IE00B579F325/     * assets/IE00B579F325_XETR_GBP/     * assets/IE00B579F325_XETR/

### Example
```swift
// The following code samples are still beta. For any issue, please report via http://github.com/OpenAPITools/openapi-generator/issues/new
import OpenAPIClient

let assetIdentifier = 987 // UUID | 

ApiAPI.apiV2AssetsRetrieve(assetIdentifier: assetIdentifier) { (response, error) in
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
 **assetIdentifier** | [**UUID**](.md) |  | 

### Return type

[**AssetDetail**](AssetDetail.md)

### Authorization

[cookieAuth](../README.md#cookieAuth), [jwtAuth](../README.md#jwtAuth), [tokenAuth](../README.md#tokenAuth)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **apiV2BillingInvoicesList**
```swift
    open class func apiV2BillingInvoicesList(dateFrom: Date? = nil, dateTo: Date? = nil, limit: Int? = nil, offset: Int? = nil, status: Status_apiV2BillingInvoicesList? = nil, completion: @escaping (_ data: PaginatedInvoiceListList?, _ error: Error?) -> Void)
```



### Example
```swift
// The following code samples are still beta. For any issue, please report via http://github.com/OpenAPITools/openapi-generator/issues/new
import OpenAPIClient

let dateFrom = Date() // Date |  (optional)
let dateTo = Date() // Date |  (optional)
let limit = 987 // Int | Number of results to return per page. (optional)
let offset = 987 // Int | The initial index from which to return the results. (optional)
let status = "status_example" // String |  (optional)

ApiAPI.apiV2BillingInvoicesList(dateFrom: dateFrom, dateTo: dateTo, limit: limit, offset: offset, status: status) { (response, error) in
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
 **dateFrom** | **Date** |  | [optional] 
 **dateTo** | **Date** |  | [optional] 
 **limit** | **Int** | Number of results to return per page. | [optional] 
 **offset** | **Int** | The initial index from which to return the results. | [optional] 
 **status** | **String** |  | [optional] 

### Return type

[**PaginatedInvoiceListList**](PaginatedInvoiceListList.md)

### Authorization

[cookieAuth](../README.md#cookieAuth), [jwtAuth](../README.md#jwtAuth), [tokenAuth](../README.md#tokenAuth)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **apiV2BillingInvoicesRetrieve**
```swift
    open class func apiV2BillingInvoicesRetrieve(uuid: UUID, format: Format_apiV2BillingInvoicesRetrieve? = nil, completion: @escaping (_ data: InvoiceDetails?, _ error: Error?) -> Void)
```



This mixin implements binary responses. It supports PDF and Base64. It can be adapted to any django View that implements the retrieve method

### Example
```swift
// The following code samples are still beta. For any issue, please report via http://github.com/OpenAPITools/openapi-generator/issues/new
import OpenAPIClient

let uuid = 987 // UUID | 
let format = "format_example" // String |  (optional)

ApiAPI.apiV2BillingInvoicesRetrieve(uuid: uuid, format: format) { (response, error) in
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
 **uuid** | [**UUID**](.md) |  | 
 **format** | **String** |  | [optional] 

### Return type

[**InvoiceDetails**](InvoiceDetails.md)

### Authorization

[cookieAuth](../README.md#cookieAuth), [jwtAuth](../README.md#jwtAuth), [tokenAuth](../README.md#tokenAuth)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json, application/pdf, text/plain

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **apiV2BrokerOrdersCreate**
```swift
    open class func apiV2BrokerOrdersCreate(portfolioUuid: UUID, createOrder: CreateOrder, completion: @escaping (_ data: CreateOrder?, _ error: Error?) -> Void)
```



### Example
```swift
// The following code samples are still beta. For any issue, please report via http://github.com/OpenAPITools/openapi-generator/issues/new
import OpenAPIClient

let portfolioUuid = 987 // UUID | 
let createOrder = CreateOrder(shares: 123, asset: RelatedAssetSerializerWithAssetCategories(uuid: 123, market: "market_example", isin: "isin_example", currency: "currency_example", ticker: "ticker_example", name: "name_example", extraData: "TODO", categories: ["categories_example"]), portfolio: "portfolio_example", orderType: OrderTypeEnum(), method: CreateOrderMethodEnum(), limitPrice: 123, stopPrice: 123, duration: DurationEnum()) // CreateOrder | 

ApiAPI.apiV2BrokerOrdersCreate(portfolioUuid: portfolioUuid, createOrder: createOrder) { (response, error) in
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
 **portfolioUuid** | [**UUID**](.md) |  | 
 **createOrder** | [**CreateOrder**](CreateOrder.md) |  | 

### Return type

[**CreateOrder**](CreateOrder.md)

### Authorization

[cookieAuth](../README.md#cookieAuth), [jwtAuth](../README.md#jwtAuth), [tokenAuth](../README.md#tokenAuth)

### HTTP request headers

 - **Content-Type**: application/json, application/x-www-form-urlencoded, multipart/form-data
 - **Accept**: application/json

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **apiV2BrokerOrdersDestroy**
```swift
    open class func apiV2BrokerOrdersDestroy(portfolioUuid: UUID, uuid: UUID, completion: @escaping (_ data: Void?, _ error: Error?) -> Void)
```



Cancel or request cancellation to the broker

### Example
```swift
// The following code samples are still beta. For any issue, please report via http://github.com/OpenAPITools/openapi-generator/issues/new
import OpenAPIClient

let portfolioUuid = 987 // UUID | 
let uuid = 987 // UUID | 

ApiAPI.apiV2BrokerOrdersDestroy(portfolioUuid: portfolioUuid, uuid: uuid) { (response, error) in
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
 **portfolioUuid** | [**UUID**](.md) |  | 
 **uuid** | [**UUID**](.md) |  | 

### Return type

Void (empty response body)

### Authorization

[cookieAuth](../README.md#cookieAuth), [jwtAuth](../README.md#jwtAuth), [tokenAuth](../README.md#tokenAuth)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: Not defined

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **apiV2BrokerOrdersList**
```swift
    open class func apiV2BrokerOrdersList(portfolioUuid: UUID, adviceExternalId: String? = nil, asset: String? = nil, completedAfter: Date? = nil, completedBefore: Date? = nil, extraData: [String: AnyCodable]? = nil, limit: Int? = nil, offset: Int? = nil, portfolio: String? = nil, status: String? = nil, completion: @escaping (_ data: PaginatedOrderListList?, _ error: Error?) -> Void)
```



### Example
```swift
// The following code samples are still beta. For any issue, please report via http://github.com/OpenAPITools/openapi-generator/issues/new
import OpenAPIClient

let portfolioUuid = 987 // UUID | 
let adviceExternalId = "adviceExternalId_example" // String |  (optional)
let asset = "asset_example" // String |  (optional)
let completedAfter = Date() // Date |  (optional)
let completedBefore = Date() // Date |  (optional)
let extraData = "TODO" // [String: AnyCodable] | Additional order attributes for the specific portal (optional)
let limit = 987 // Int | Number of results to return per page. (optional)
let offset = 987 // Int | The initial index from which to return the results. (optional)
let portfolio = "portfolio_example" // String |  (optional)
let status = "status_example" // String |  (optional)

ApiAPI.apiV2BrokerOrdersList(portfolioUuid: portfolioUuid, adviceExternalId: adviceExternalId, asset: asset, completedAfter: completedAfter, completedBefore: completedBefore, extraData: extraData, limit: limit, offset: offset, portfolio: portfolio, status: status) { (response, error) in
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
 **portfolioUuid** | [**UUID**](.md) |  | 
 **adviceExternalId** | **String** |  | [optional] 
 **asset** | **String** |  | [optional] 
 **completedAfter** | **Date** |  | [optional] 
 **completedBefore** | **Date** |  | [optional] 
 **extraData** | [**[String: AnyCodable]**](AnyCodable.md) | Additional order attributes for the specific portal | [optional] 
 **limit** | **Int** | Number of results to return per page. | [optional] 
 **offset** | **Int** | The initial index from which to return the results. | [optional] 
 **portfolio** | **String** |  | [optional] 
 **status** | **String** |  | [optional] 

### Return type

[**PaginatedOrderListList**](PaginatedOrderListList.md)

### Authorization

[cookieAuth](../README.md#cookieAuth), [jwtAuth](../README.md#jwtAuth), [tokenAuth](../README.md#tokenAuth)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **apiV2BrokerOrdersRetrieve**
```swift
    open class func apiV2BrokerOrdersRetrieve(portfolioUuid: UUID, uuid: UUID, completion: @escaping (_ data: OrderList?, _ error: Error?) -> Void)
```



### Example
```swift
// The following code samples are still beta. For any issue, please report via http://github.com/OpenAPITools/openapi-generator/issues/new
import OpenAPIClient

let portfolioUuid = 987 // UUID | 
let uuid = 987 // UUID | 

ApiAPI.apiV2BrokerOrdersRetrieve(portfolioUuid: portfolioUuid, uuid: uuid) { (response, error) in
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
 **portfolioUuid** | [**UUID**](.md) |  | 
 **uuid** | [**UUID**](.md) |  | 

### Return type

[**OrderList**](OrderList.md)

### Authorization

[cookieAuth](../README.md#cookieAuth), [jwtAuth](../README.md#jwtAuth), [tokenAuth](../README.md#tokenAuth)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **apiV2ClientsActivitiesList**
```swift
    open class func apiV2ClientsActivitiesList(clientUuid: UUID, limit: Int? = nil, offset: Int? = nil, target: [String]? = nil, completion: @escaping (_ data: PaginatedFeedActivityListList?, _ error: Error?) -> Void)
```



### Example
```swift
// The following code samples are still beta. For any issue, please report via http://github.com/OpenAPITools/openapi-generator/issues/new
import OpenAPIClient

let clientUuid = 987 // UUID | 
let limit = 987 // Int | Number of results to return per page. (optional)
let offset = 987 // Int | The initial index from which to return the results. (optional)
let target = ["target_example"] // [String] |  (optional)

ApiAPI.apiV2ClientsActivitiesList(clientUuid: clientUuid, limit: limit, offset: offset, target: target) { (response, error) in
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
 **target** | [**[String]**](String.md) |  | [optional] 

### Return type

[**PaginatedFeedActivityListList**](PaginatedFeedActivityListList.md)

### Authorization

[cookieAuth](../README.md#cookieAuth), [jwtAuth](../README.md#jwtAuth), [tokenAuth](../README.md#tokenAuth)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **apiV2ClientsActivitiesRetrieve**
```swift
    open class func apiV2ClientsActivitiesRetrieve(clientUuid: UUID, uuid: UUID, completion: @escaping (_ data: FeedActivityList?, _ error: Error?) -> Void)
```



### Example
```swift
// The following code samples are still beta. For any issue, please report via http://github.com/OpenAPITools/openapi-generator/issues/new
import OpenAPIClient

let clientUuid = 987 // UUID | 
let uuid = 987 // UUID | 

ApiAPI.apiV2ClientsActivitiesRetrieve(clientUuid: clientUuid, uuid: uuid) { (response, error) in
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
 **uuid** | [**UUID**](.md) |  | 

### Return type

[**FeedActivityList**](FeedActivityList.md)

### Authorization

[cookieAuth](../README.md#cookieAuth), [jwtAuth](../README.md#jwtAuth), [tokenAuth](../README.md#tokenAuth)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **apiV2ClientsAdviceEnginesList**
```swift
    open class func apiV2ClientsAdviceEnginesList(clientUuid: UUID, uuid: UUID, completion: @escaping (_ data: Void?, _ error: Error?) -> Void)
```



### Example
```swift
// The following code samples are still beta. For any issue, please report via http://github.com/OpenAPITools/openapi-generator/issues/new
import OpenAPIClient

let clientUuid = 987 // UUID | 
let uuid = 987 // UUID | 

ApiAPI.apiV2ClientsAdviceEnginesList(clientUuid: clientUuid, uuid: uuid) { (response, error) in
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
 **uuid** | [**UUID**](.md) |  | 

### Return type

Void (empty response body)

### Authorization

[cookieAuth](../README.md#cookieAuth), [jwtAuth](../README.md#jwtAuth), [tokenAuth](../README.md#tokenAuth)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: Not defined

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **apiV2ClientsAdviceEnginesRetrieve**
```swift
    open class func apiV2ClientsAdviceEnginesRetrieve(clientUuid: UUID, uuid: UUID, completion: @escaping (_ data: Void?, _ error: Error?) -> Void)
```



### Example
```swift
// The following code samples are still beta. For any issue, please report via http://github.com/OpenAPITools/openapi-generator/issues/new
import OpenAPIClient

let clientUuid = 987 // UUID | 
let uuid = 987 // UUID | 

ApiAPI.apiV2ClientsAdviceEnginesRetrieve(clientUuid: clientUuid, uuid: uuid) { (response, error) in
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
 **uuid** | [**UUID**](.md) |  | 

### Return type

Void (empty response body)

### Authorization

[cookieAuth](../README.md#cookieAuth), [jwtAuth](../README.md#jwtAuth), [tokenAuth](../README.md#tokenAuth)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: Not defined

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **apiV2ClientsBillingFeesCreate**
```swift
    open class func apiV2ClientsBillingFeesCreate(clientUuid: UUID, investorFeeUuid: UUID, investorFee: InvestorFee, completion: @escaping (_ data: InvestorFee?, _ error: Error?) -> Void)
```



### Example
```swift
// The following code samples are still beta. For any issue, please report via http://github.com/OpenAPITools/openapi-generator/issues/new
import OpenAPIClient

let clientUuid = 987 // UUID | 
let investorFeeUuid = 987 // UUID | 
let investorFee = InvestorFee(value: 123, valueUnit: ValueUnitEnum(), feeType: FeeTypeEnum(), concept: "concept_example", dateFrom: Date(), dateTo: Date(), amountFrom: 123, amountTo: 123, uuid: 123, created: Date(), updated: Date()) // InvestorFee | 

ApiAPI.apiV2ClientsBillingFeesCreate(clientUuid: clientUuid, investorFeeUuid: investorFeeUuid, investorFee: investorFee) { (response, error) in
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
 **investorFeeUuid** | [**UUID**](.md) |  | 
 **investorFee** | [**InvestorFee**](InvestorFee.md) |  | 

### Return type

[**InvestorFee**](InvestorFee.md)

### Authorization

[cookieAuth](../README.md#cookieAuth), [jwtAuth](../README.md#jwtAuth), [tokenAuth](../README.md#tokenAuth)

### HTTP request headers

 - **Content-Type**: application/json, application/x-www-form-urlencoded, multipart/form-data
 - **Accept**: application/json

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **apiV2ClientsBillingFeesDestroy**
```swift
    open class func apiV2ClientsBillingFeesDestroy(clientUuid: UUID, investorFeeUuid: UUID, completion: @escaping (_ data: Void?, _ error: Error?) -> Void)
```



### Example
```swift
// The following code samples are still beta. For any issue, please report via http://github.com/OpenAPITools/openapi-generator/issues/new
import OpenAPIClient

let clientUuid = 987 // UUID | 
let investorFeeUuid = 987 // UUID | 

ApiAPI.apiV2ClientsBillingFeesDestroy(clientUuid: clientUuid, investorFeeUuid: investorFeeUuid) { (response, error) in
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
 **investorFeeUuid** | [**UUID**](.md) |  | 

### Return type

Void (empty response body)

### Authorization

[cookieAuth](../README.md#cookieAuth), [jwtAuth](../README.md#jwtAuth), [tokenAuth](../README.md#tokenAuth)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: Not defined

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **apiV2ClientsBillingFeesList**
```swift
    open class func apiV2ClientsBillingFeesList(clientUuid: UUID, investorFeeUuid: UUID, limit: Int? = nil, offset: Int? = nil, completion: @escaping (_ data: PaginatedInvestorFeeList?, _ error: Error?) -> Void)
```



### Example
```swift
// The following code samples are still beta. For any issue, please report via http://github.com/OpenAPITools/openapi-generator/issues/new
import OpenAPIClient

let clientUuid = 987 // UUID | 
let investorFeeUuid = 987 // UUID | 
let limit = 987 // Int | Number of results to return per page. (optional)
let offset = 987 // Int | The initial index from which to return the results. (optional)

ApiAPI.apiV2ClientsBillingFeesList(clientUuid: clientUuid, investorFeeUuid: investorFeeUuid, limit: limit, offset: offset) { (response, error) in
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
 **investorFeeUuid** | [**UUID**](.md) |  | 
 **limit** | **Int** | Number of results to return per page. | [optional] 
 **offset** | **Int** | The initial index from which to return the results. | [optional] 

### Return type

[**PaginatedInvestorFeeList**](PaginatedInvestorFeeList.md)

### Authorization

[cookieAuth](../README.md#cookieAuth), [jwtAuth](../README.md#jwtAuth), [tokenAuth](../README.md#tokenAuth)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **apiV2ClientsBillingFeesPartialUpdate**
```swift
    open class func apiV2ClientsBillingFeesPartialUpdate(clientUuid: UUID, investorFeeUuid: UUID, patchedInvestorFee: PatchedInvestorFee? = nil, completion: @escaping (_ data: InvestorFee?, _ error: Error?) -> Void)
```



### Example
```swift
// The following code samples are still beta. For any issue, please report via http://github.com/OpenAPITools/openapi-generator/issues/new
import OpenAPIClient

let clientUuid = 987 // UUID | 
let investorFeeUuid = 987 // UUID | 
let patchedInvestorFee = PatchedInvestorFee(value: 123, valueUnit: ValueUnitEnum(), feeType: FeeTypeEnum(), concept: "concept_example", dateFrom: Date(), dateTo: Date(), amountFrom: 123, amountTo: 123, uuid: 123, created: Date(), updated: Date()) // PatchedInvestorFee |  (optional)

ApiAPI.apiV2ClientsBillingFeesPartialUpdate(clientUuid: clientUuid, investorFeeUuid: investorFeeUuid, patchedInvestorFee: patchedInvestorFee) { (response, error) in
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
 **investorFeeUuid** | [**UUID**](.md) |  | 
 **patchedInvestorFee** | [**PatchedInvestorFee**](PatchedInvestorFee.md) |  | [optional] 

### Return type

[**InvestorFee**](InvestorFee.md)

### Authorization

[cookieAuth](../README.md#cookieAuth), [jwtAuth](../README.md#jwtAuth), [tokenAuth](../README.md#tokenAuth)

### HTTP request headers

 - **Content-Type**: application/json, application/x-www-form-urlencoded, multipart/form-data
 - **Accept**: application/json

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **apiV2ClientsBillingFeesRetrieve**
```swift
    open class func apiV2ClientsBillingFeesRetrieve(clientUuid: UUID, investorFeeUuid: UUID, completion: @escaping (_ data: InvestorFee?, _ error: Error?) -> Void)
```



### Example
```swift
// The following code samples are still beta. For any issue, please report via http://github.com/OpenAPITools/openapi-generator/issues/new
import OpenAPIClient

let clientUuid = 987 // UUID | 
let investorFeeUuid = 987 // UUID | 

ApiAPI.apiV2ClientsBillingFeesRetrieve(clientUuid: clientUuid, investorFeeUuid: investorFeeUuid) { (response, error) in
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
 **investorFeeUuid** | [**UUID**](.md) |  | 

### Return type

[**InvestorFee**](InvestorFee.md)

### Authorization

[cookieAuth](../README.md#cookieAuth), [jwtAuth](../README.md#jwtAuth), [tokenAuth](../README.md#tokenAuth)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **apiV2ClientsBillingFeesUpdate**
```swift
    open class func apiV2ClientsBillingFeesUpdate(clientUuid: UUID, investorFeeUuid: UUID, investorFee: InvestorFee, completion: @escaping (_ data: InvestorFee?, _ error: Error?) -> Void)
```



### Example
```swift
// The following code samples are still beta. For any issue, please report via http://github.com/OpenAPITools/openapi-generator/issues/new
import OpenAPIClient

let clientUuid = 987 // UUID | 
let investorFeeUuid = 987 // UUID | 
let investorFee = InvestorFee(value: 123, valueUnit: ValueUnitEnum(), feeType: FeeTypeEnum(), concept: "concept_example", dateFrom: Date(), dateTo: Date(), amountFrom: 123, amountTo: 123, uuid: 123, created: Date(), updated: Date()) // InvestorFee | 

ApiAPI.apiV2ClientsBillingFeesUpdate(clientUuid: clientUuid, investorFeeUuid: investorFeeUuid, investorFee: investorFee) { (response, error) in
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
 **investorFeeUuid** | [**UUID**](.md) |  | 
 **investorFee** | [**InvestorFee**](InvestorFee.md) |  | 

### Return type

[**InvestorFee**](InvestorFee.md)

### Authorization

[cookieAuth](../README.md#cookieAuth), [jwtAuth](../README.md#jwtAuth), [tokenAuth](../README.md#tokenAuth)

### HTTP request headers

 - **Content-Type**: application/json, application/x-www-form-urlencoded, multipart/form-data
 - **Accept**: application/json

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **apiV2ClientsBillingInvoicesList**
```swift
    open class func apiV2ClientsBillingInvoicesList(clientUuid: UUID, format: Format_apiV2ClientsBillingInvoicesList? = nil, limit: Int? = nil, offset: Int? = nil, completion: @escaping (_ data: PaginatedInvoiceListList?, _ error: Error?) -> Void)
```



This mixin implements binary responses. It supports PDF and Base64. It can be adapted to any django View that implements the retrieve method

### Example
```swift
// The following code samples are still beta. For any issue, please report via http://github.com/OpenAPITools/openapi-generator/issues/new
import OpenAPIClient

let clientUuid = 987 // UUID | 
let format = "format_example" // String |  (optional)
let limit = 987 // Int | Number of results to return per page. (optional)
let offset = 987 // Int | The initial index from which to return the results. (optional)

ApiAPI.apiV2ClientsBillingInvoicesList(clientUuid: clientUuid, format: format, limit: limit, offset: offset) { (response, error) in
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
 **format** | **String** |  | [optional] 
 **limit** | **Int** | Number of results to return per page. | [optional] 
 **offset** | **Int** | The initial index from which to return the results. | [optional] 

### Return type

[**PaginatedInvoiceListList**](PaginatedInvoiceListList.md)

### Authorization

[cookieAuth](../README.md#cookieAuth), [jwtAuth](../README.md#jwtAuth), [tokenAuth](../README.md#tokenAuth)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json, application/pdf, text/plain

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **apiV2ClientsBillingInvoicesRetrieve**
```swift
    open class func apiV2ClientsBillingInvoicesRetrieve(clientUuid: UUID, uuid: UUID, format: Format_apiV2ClientsBillingInvoicesRetrieve? = nil, completion: @escaping (_ data: InvoiceList?, _ error: Error?) -> Void)
```



This mixin implements binary responses. It supports PDF and Base64. It can be adapted to any django View that implements the retrieve method

### Example
```swift
// The following code samples are still beta. For any issue, please report via http://github.com/OpenAPITools/openapi-generator/issues/new
import OpenAPIClient

let clientUuid = 987 // UUID | 
let uuid = 987 // UUID | 
let format = "format_example" // String |  (optional)

ApiAPI.apiV2ClientsBillingInvoicesRetrieve(clientUuid: clientUuid, uuid: uuid, format: format) { (response, error) in
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
 **uuid** | [**UUID**](.md) |  | 
 **format** | **String** |  | [optional] 

### Return type

[**InvoiceList**](InvoiceList.md)

### Authorization

[cookieAuth](../README.md#cookieAuth), [jwtAuth](../README.md#jwtAuth), [tokenAuth](../README.md#tokenAuth)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json, application/pdf, text/plain

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **apiV2ClientsDocumentsCreate**
```swift
    open class func apiV2ClientsDocumentsCreate(clientUuid: UUID, uuid: UUID, name: String, docType: DocTypeEnum, path: String, description: String? = nil, completion: @escaping (_ data: Document?, _ error: Error?) -> Void)
```



Uploads a document for a certain user.  This call expects the files and parameters being sent as form/multipart encoding.

### Example
```swift
// The following code samples are still beta. For any issue, please report via http://github.com/OpenAPITools/openapi-generator/issues/new
import OpenAPIClient

let clientUuid = 987 // UUID | 
let uuid = 987 // UUID | 
let name = "name_example" // String | 
let docType = DocTypeEnum() // DocTypeEnum | 
let path = "path_example" // String | 
let description = "description_example" // String |  (optional)

ApiAPI.apiV2ClientsDocumentsCreate(clientUuid: clientUuid, uuid: uuid, name: name, docType: docType, path: path, description: description) { (response, error) in
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
 **uuid** | [**UUID**](UUID.md) |  | 
 **name** | **String** |  | 
 **docType** | [**DocTypeEnum**](DocTypeEnum.md) |  | 
 **path** | **String** |  | 
 **description** | **String** |  | [optional] 

### Return type

[**Document**](Document.md)

### Authorization

[cookieAuth](../README.md#cookieAuth), [jwtAuth](../README.md#jwtAuth), [tokenAuth](../README.md#tokenAuth)

### HTTP request headers

 - **Content-Type**: multipart/form-data
 - **Accept**: application/json

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **apiV2ClientsDocumentsDestroy**
```swift
    open class func apiV2ClientsDocumentsDestroy(clientUuid: UUID, uuid: UUID, completion: @escaping (_ data: Void?, _ error: Error?) -> Void)
```



### Example
```swift
// The following code samples are still beta. For any issue, please report via http://github.com/OpenAPITools/openapi-generator/issues/new
import OpenAPIClient

let clientUuid = 987 // UUID | 
let uuid = 987 // UUID | 

ApiAPI.apiV2ClientsDocumentsDestroy(clientUuid: clientUuid, uuid: uuid) { (response, error) in
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
 **uuid** | [**UUID**](.md) |  | 

### Return type

Void (empty response body)

### Authorization

[cookieAuth](../README.md#cookieAuth), [jwtAuth](../README.md#jwtAuth), [tokenAuth](../README.md#tokenAuth)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: Not defined

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **apiV2ClientsDocumentsList**
```swift
    open class func apiV2ClientsDocumentsList(clientUuid: UUID, client: Int? = nil, description: String? = nil, docType: [String]? = nil, extraData: [String: AnyCodable]? = nil, limit: Int? = nil, name: String? = nil, offset: Int? = nil, completion: @escaping (_ data: PaginatedDocumentList?, _ error: Error?) -> Void)
```



### Example
```swift
// The following code samples are still beta. For any issue, please report via http://github.com/OpenAPITools/openapi-generator/issues/new
import OpenAPIClient

let clientUuid = 987 // UUID | 
let client = 987 // Int |  (optional)
let description = "description_example" // String |  (optional)
let docType = ["docType_example"] // [String] |  (optional)
let extraData = "TODO" // [String: AnyCodable] | Additional document attributes for the specific portal (optional)
let limit = 987 // Int | Number of results to return per page. (optional)
let name = "name_example" // String |  (optional)
let offset = 987 // Int | The initial index from which to return the results. (optional)

ApiAPI.apiV2ClientsDocumentsList(clientUuid: clientUuid, client: client, description: description, docType: docType, extraData: extraData, limit: limit, name: name, offset: offset) { (response, error) in
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
 **client** | **Int** |  | [optional] 
 **description** | **String** |  | [optional] 
 **docType** | [**[String]**](String.md) |  | [optional] 
 **extraData** | [**[String: AnyCodable]**](AnyCodable.md) | Additional document attributes for the specific portal | [optional] 
 **limit** | **Int** | Number of results to return per page. | [optional] 
 **name** | **String** |  | [optional] 
 **offset** | **Int** | The initial index from which to return the results. | [optional] 

### Return type

[**PaginatedDocumentList**](PaginatedDocumentList.md)

### Authorization

[cookieAuth](../README.md#cookieAuth), [jwtAuth](../README.md#jwtAuth), [tokenAuth](../README.md#tokenAuth)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **apiV2ClientsDocumentsRetrieve**
```swift
    open class func apiV2ClientsDocumentsRetrieve(clientUuid: UUID, uuid: UUID, completion: @escaping (_ data: Document?, _ error: Error?) -> Void)
```



### Example
```swift
// The following code samples are still beta. For any issue, please report via http://github.com/OpenAPITools/openapi-generator/issues/new
import OpenAPIClient

let clientUuid = 987 // UUID | 
let uuid = 987 // UUID | 

ApiAPI.apiV2ClientsDocumentsRetrieve(clientUuid: clientUuid, uuid: uuid) { (response, error) in
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
 **uuid** | [**UUID**](.md) |  | 

### Return type

[**Document**](Document.md)

### Authorization

[cookieAuth](../README.md#cookieAuth), [jwtAuth](../README.md#jwtAuth), [tokenAuth](../README.md#tokenAuth)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **apiV2ClientsMeVerifyEmailCreate**
```swift
    open class func apiV2ClientsMeVerifyEmailCreate(emailVerifyRequest: EmailVerifyRequest? = nil, completion: @escaping (_ data: EmailVerifyRequest?, _ error: Error?) -> Void)
```



Request e-mail account verification notification.

### Example
```swift
// The following code samples are still beta. For any issue, please report via http://github.com/OpenAPITools/openapi-generator/issues/new
import OpenAPIClient

let emailVerifyRequest = EmailVerifyRequest(email: "email_example") // EmailVerifyRequest |  (optional)

ApiAPI.apiV2ClientsMeVerifyEmailCreate(emailVerifyRequest: emailVerifyRequest) { (response, error) in
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
 **emailVerifyRequest** | [**EmailVerifyRequest**](EmailVerifyRequest.md) |  | [optional] 

### Return type

[**EmailVerifyRequest**](EmailVerifyRequest.md)

### Authorization

[cookieAuth](../README.md#cookieAuth), [jwtAuth](../README.md#jwtAuth), [tokenAuth](../README.md#tokenAuth)

### HTTP request headers

 - **Content-Type**: application/json, application/x-www-form-urlencoded, multipart/form-data
 - **Accept**: application/json

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **apiV2ClientsNationalDocumentsList**
```swift
    open class func apiV2ClientsNationalDocumentsList(limit: Int? = nil, offset: Int? = nil, completion: @escaping (_ data: PaginatedNationalDocumentList?, _ error: Error?) -> Void)
```



### Example
```swift
// The following code samples are still beta. For any issue, please report via http://github.com/OpenAPITools/openapi-generator/issues/new
import OpenAPIClient

let limit = 987 // Int | Number of results to return per page. (optional)
let offset = 987 // Int | The initial index from which to return the results. (optional)

ApiAPI.apiV2ClientsNationalDocumentsList(limit: limit, offset: offset) { (response, error) in
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
 **limit** | **Int** | Number of results to return per page. | [optional] 
 **offset** | **Int** | The initial index from which to return the results. | [optional] 

### Return type

[**PaginatedNationalDocumentList**](PaginatedNationalDocumentList.md)

### Authorization

[cookieAuth](../README.md#cookieAuth), [jwtAuth](../README.md#jwtAuth), [tokenAuth](../README.md#tokenAuth)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **apiV2ClientsReferralRetrieve**
```swift
    open class func apiV2ClientsReferralRetrieve(referralCode: String, completion: @escaping (_ data: ClientReferral?, _ error: Error?) -> Void)
```



Retrieves the currently logged in client referral code

### Example
```swift
// The following code samples are still beta. For any issue, please report via http://github.com/OpenAPITools/openapi-generator/issues/new
import OpenAPIClient

let referralCode = "referralCode_example" // String | 

ApiAPI.apiV2ClientsReferralRetrieve(referralCode: referralCode) { (response, error) in
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
 **referralCode** | **String** |  | 

### Return type

[**ClientReferral**](ClientReferral.md)

### Authorization

[cookieAuth](../README.md#cookieAuth), [jwtAuth](../README.md#jwtAuth), [tokenAuth](../README.md#tokenAuth)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **apiV2ClientsReportStatementsList**
```swift
    open class func apiV2ClientsReportStatementsList(clientUuid: UUID, format: Format_apiV2ClientsReportStatementsList? = nil, limit: Int? = nil, offset: Int? = nil, completion: @escaping (_ data: PaginatedStatementList?, _ error: Error?) -> Void)
```



This mixin implements binary responses. It supports PDF and Base64. It can be adapted to any django View that implements the retrieve method

### Example
```swift
// The following code samples are still beta. For any issue, please report via http://github.com/OpenAPITools/openapi-generator/issues/new
import OpenAPIClient

let clientUuid = 987 // UUID | 
let format = "format_example" // String |  (optional)
let limit = 987 // Int | Number of results to return per page. (optional)
let offset = 987 // Int | The initial index from which to return the results. (optional)

ApiAPI.apiV2ClientsReportStatementsList(clientUuid: clientUuid, format: format, limit: limit, offset: offset) { (response, error) in
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
 **format** | **String** |  | [optional] 
 **limit** | **Int** | Number of results to return per page. | [optional] 
 **offset** | **Int** | The initial index from which to return the results. | [optional] 

### Return type

[**PaginatedStatementList**](PaginatedStatementList.md)

### Authorization

[cookieAuth](../README.md#cookieAuth), [jwtAuth](../README.md#jwtAuth), [tokenAuth](../README.md#tokenAuth)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json, application/pdf, text/plain

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **apiV2ClientsReportStatementsRetrieve**
```swift
    open class func apiV2ClientsReportStatementsRetrieve(clientUuid: UUID, uuid: UUID, format: Format_apiV2ClientsReportStatementsRetrieve? = nil, completion: @escaping (_ data: Statement?, _ error: Error?) -> Void)
```



This mixin implements binary responses. It supports PDF and Base64. It can be adapted to any django View that implements the retrieve method

### Example
```swift
// The following code samples are still beta. For any issue, please report via http://github.com/OpenAPITools/openapi-generator/issues/new
import OpenAPIClient

let clientUuid = 987 // UUID | 
let uuid = 987 // UUID | 
let format = "format_example" // String |  (optional)

ApiAPI.apiV2ClientsReportStatementsRetrieve(clientUuid: clientUuid, uuid: uuid, format: format) { (response, error) in
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
 **uuid** | [**UUID**](.md) |  | 
 **format** | **String** |  | [optional] 

### Return type

[**Statement**](Statement.md)

### Authorization

[cookieAuth](../README.md#cookieAuth), [jwtAuth](../README.md#jwtAuth), [tokenAuth](../README.md#tokenAuth)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json, application/pdf, text/plain

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **apiV2ClientsReportTaxReportsList**
```swift
    open class func apiV2ClientsReportTaxReportsList(clientUuid: UUID, format: Format_apiV2ClientsReportTaxReportsList? = nil, limit: Int? = nil, offset: Int? = nil, completion: @escaping (_ data: PaginatedTaxReportList?, _ error: Error?) -> Void)
```



This mixin implements binary responses. It supports PDF and Base64. It can be adapted to any django View that implements the retrieve method

### Example
```swift
// The following code samples are still beta. For any issue, please report via http://github.com/OpenAPITools/openapi-generator/issues/new
import OpenAPIClient

let clientUuid = 987 // UUID | 
let format = "format_example" // String |  (optional)
let limit = 987 // Int | Number of results to return per page. (optional)
let offset = 987 // Int | The initial index from which to return the results. (optional)

ApiAPI.apiV2ClientsReportTaxReportsList(clientUuid: clientUuid, format: format, limit: limit, offset: offset) { (response, error) in
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
 **format** | **String** |  | [optional] 
 **limit** | **Int** | Number of results to return per page. | [optional] 
 **offset** | **Int** | The initial index from which to return the results. | [optional] 

### Return type

[**PaginatedTaxReportList**](PaginatedTaxReportList.md)

### Authorization

[cookieAuth](../README.md#cookieAuth), [jwtAuth](../README.md#jwtAuth), [tokenAuth](../README.md#tokenAuth)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json, application/pdf, text/plain

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **apiV2ClientsReportTaxReportsRetrieve**
```swift
    open class func apiV2ClientsReportTaxReportsRetrieve(clientUuid: UUID, uuid: UUID, format: Format_apiV2ClientsReportTaxReportsRetrieve? = nil, completion: @escaping (_ data: TaxReport?, _ error: Error?) -> Void)
```



This mixin implements binary responses. It supports PDF and Base64. It can be adapted to any django View that implements the retrieve method

### Example
```swift
// The following code samples are still beta. For any issue, please report via http://github.com/OpenAPITools/openapi-generator/issues/new
import OpenAPIClient

let clientUuid = 987 // UUID | 
let uuid = 987 // UUID | 
let format = "format_example" // String |  (optional)

ApiAPI.apiV2ClientsReportTaxReportsRetrieve(clientUuid: clientUuid, uuid: uuid, format: format) { (response, error) in
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
 **uuid** | [**UUID**](.md) |  | 
 **format** | **String** |  | [optional] 

### Return type

[**TaxReport**](TaxReport.md)

### Authorization

[cookieAuth](../README.md#cookieAuth), [jwtAuth](../README.md#jwtAuth), [tokenAuth](../README.md#tokenAuth)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json, application/pdf, text/plain

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **apiV2ClientsVerifyEmailUpdate**
```swift
    open class func apiV2ClientsVerifyEmailUpdate(uuid: UUID, emailVerifyView: EmailVerifyView, completion: @escaping (_ data: EmailVerifyView?, _ error: Error?) -> Void)
```



Verify e-mail account with the given email token.

### Example
```swift
// The following code samples are still beta. For any issue, please report via http://github.com/OpenAPITools/openapi-generator/issues/new
import OpenAPIClient

let uuid = 987 // UUID | 
let emailVerifyView = EmailVerifyView(token: "token_example") // EmailVerifyView | 

ApiAPI.apiV2ClientsVerifyEmailUpdate(uuid: uuid, emailVerifyView: emailVerifyView) { (response, error) in
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
 **uuid** | [**UUID**](.md) |  | 
 **emailVerifyView** | [**EmailVerifyView**](EmailVerifyView.md) |  | 

### Return type

[**EmailVerifyView**](EmailVerifyView.md)

### Authorization

[cookieAuth](../README.md#cookieAuth), [jwtAuth](../README.md#jwtAuth), [tokenAuth](../README.md#tokenAuth)

### HTTP request headers

 - **Content-Type**: application/json, application/x-www-form-urlencoded, multipart/form-data
 - **Accept**: application/json

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **apiV2ClientsWatchlistsCreate**
```swift
    open class func apiV2ClientsWatchlistsCreate(clientUuid: UUID, watchlistUuid: UUID, watchlist: Watchlist, completion: @escaping (_ data: Watchlist?, _ error: Error?) -> Void)
```



Applies filters without declaring them explicitly. How? Creating those filters on the fly.  # How it works. - Declare 'filterable_fields' in the view.     E.g. filterable_fields = ['status', 'name']     __all__ is allowed. It applies filters for all model attributes.  - COMMON_FILTERS: common filters configuration.     - key: field name. E.g. status.     - filter_class. filter class for the field.     - args. Args for the filter_class __init__.  These args are taken from the queryset model         E.g. 'args': {'choices': 'STATUS_CHOICES'} means Filter(choices=queryset.model.STATUS_CHOICES)   # How to use it: class PortfolioListCreateView(CommonFilterMixin, InvestorAPIViewMixin, ListCreateAPIView):     filterable_fields = ['status', 'name']  # Filters priority. 1- Explicit filter declared in the filterset_class 2- Filters declared in COMMON_FILTERS 3- Filterset.FILTER_DEFAULTS

### Example
```swift
// The following code samples are still beta. For any issue, please report via http://github.com/OpenAPITools/openapi-generator/issues/new
import OpenAPIClient

let clientUuid = 987 // UUID | 
let watchlistUuid = 987 // UUID | 
let watchlist = Watchlist(uuid: 123, name: "name_example", assets: [RelatedAssetSerializerWithPermission(uuid: 123, market: "market_example", isin: "isin_example", currency: "currency_example", ticker: "ticker_example", name: "name_example", extraData: "TODO")]) // Watchlist | 

ApiAPI.apiV2ClientsWatchlistsCreate(clientUuid: clientUuid, watchlistUuid: watchlistUuid, watchlist: watchlist) { (response, error) in
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
 **watchlistUuid** | [**UUID**](.md) |  | 
 **watchlist** | [**Watchlist**](Watchlist.md) |  | 

### Return type

[**Watchlist**](Watchlist.md)

### Authorization

[cookieAuth](../README.md#cookieAuth), [jwtAuth](../README.md#jwtAuth), [tokenAuth](../README.md#tokenAuth)

### HTTP request headers

 - **Content-Type**: application/json, application/x-www-form-urlencoded, multipart/form-data
 - **Accept**: application/json

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **apiV2ClientsWatchlistsDestroy**
```swift
    open class func apiV2ClientsWatchlistsDestroy(clientUuid: UUID, watchlistUuid: UUID, completion: @escaping (_ data: Void?, _ error: Error?) -> Void)
```



Applies filters without declaring them explicitly. How? Creating those filters on the fly.  # How it works. - Declare 'filterable_fields' in the view.     E.g. filterable_fields = ['status', 'name']     __all__ is allowed. It applies filters for all model attributes.  - COMMON_FILTERS: common filters configuration.     - key: field name. E.g. status.     - filter_class. filter class for the field.     - args. Args for the filter_class __init__.  These args are taken from the queryset model         E.g. 'args': {'choices': 'STATUS_CHOICES'} means Filter(choices=queryset.model.STATUS_CHOICES)   # How to use it: class PortfolioListCreateView(CommonFilterMixin, InvestorAPIViewMixin, ListCreateAPIView):     filterable_fields = ['status', 'name']  # Filters priority. 1- Explicit filter declared in the filterset_class 2- Filters declared in COMMON_FILTERS 3- Filterset.FILTER_DEFAULTS

### Example
```swift
// The following code samples are still beta. For any issue, please report via http://github.com/OpenAPITools/openapi-generator/issues/new
import OpenAPIClient

let clientUuid = 987 // UUID | 
let watchlistUuid = 987 // UUID | 

ApiAPI.apiV2ClientsWatchlistsDestroy(clientUuid: clientUuid, watchlistUuid: watchlistUuid) { (response, error) in
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
 **watchlistUuid** | [**UUID**](.md) |  | 

### Return type

Void (empty response body)

### Authorization

[cookieAuth](../README.md#cookieAuth), [jwtAuth](../README.md#jwtAuth), [tokenAuth](../README.md#tokenAuth)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: Not defined

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **apiV2ClientsWatchlistsList**
```swift
    open class func apiV2ClientsWatchlistsList(clientUuid: UUID, watchlistUuid: UUID, limit: Int? = nil, offset: Int? = nil, completion: @escaping (_ data: PaginatedWatchlistList?, _ error: Error?) -> Void)
```



Applies filters without declaring them explicitly. How? Creating those filters on the fly.  # How it works. - Declare 'filterable_fields' in the view.     E.g. filterable_fields = ['status', 'name']     __all__ is allowed. It applies filters for all model attributes.  - COMMON_FILTERS: common filters configuration.     - key: field name. E.g. status.     - filter_class. filter class for the field.     - args. Args for the filter_class __init__.  These args are taken from the queryset model         E.g. 'args': {'choices': 'STATUS_CHOICES'} means Filter(choices=queryset.model.STATUS_CHOICES)   # How to use it: class PortfolioListCreateView(CommonFilterMixin, InvestorAPIViewMixin, ListCreateAPIView):     filterable_fields = ['status', 'name']  # Filters priority. 1- Explicit filter declared in the filterset_class 2- Filters declared in COMMON_FILTERS 3- Filterset.FILTER_DEFAULTS

### Example
```swift
// The following code samples are still beta. For any issue, please report via http://github.com/OpenAPITools/openapi-generator/issues/new
import OpenAPIClient

let clientUuid = 987 // UUID | 
let watchlistUuid = 987 // UUID | 
let limit = 987 // Int | Number of results to return per page. (optional)
let offset = 987 // Int | The initial index from which to return the results. (optional)

ApiAPI.apiV2ClientsWatchlistsList(clientUuid: clientUuid, watchlistUuid: watchlistUuid, limit: limit, offset: offset) { (response, error) in
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
 **watchlistUuid** | [**UUID**](.md) |  | 
 **limit** | **Int** | Number of results to return per page. | [optional] 
 **offset** | **Int** | The initial index from which to return the results. | [optional] 

### Return type

[**PaginatedWatchlistList**](PaginatedWatchlistList.md)

### Authorization

[cookieAuth](../README.md#cookieAuth), [jwtAuth](../README.md#jwtAuth), [tokenAuth](../README.md#tokenAuth)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **apiV2ClientsWatchlistsRetrieve**
```swift
    open class func apiV2ClientsWatchlistsRetrieve(clientUuid: UUID, watchlistUuid: UUID, completion: @escaping (_ data: Watchlist?, _ error: Error?) -> Void)
```



Applies filters without declaring them explicitly. How? Creating those filters on the fly.  # How it works. - Declare 'filterable_fields' in the view.     E.g. filterable_fields = ['status', 'name']     __all__ is allowed. It applies filters for all model attributes.  - COMMON_FILTERS: common filters configuration.     - key: field name. E.g. status.     - filter_class. filter class for the field.     - args. Args for the filter_class __init__.  These args are taken from the queryset model         E.g. 'args': {'choices': 'STATUS_CHOICES'} means Filter(choices=queryset.model.STATUS_CHOICES)   # How to use it: class PortfolioListCreateView(CommonFilterMixin, InvestorAPIViewMixin, ListCreateAPIView):     filterable_fields = ['status', 'name']  # Filters priority. 1- Explicit filter declared in the filterset_class 2- Filters declared in COMMON_FILTERS 3- Filterset.FILTER_DEFAULTS

### Example
```swift
// The following code samples are still beta. For any issue, please report via http://github.com/OpenAPITools/openapi-generator/issues/new
import OpenAPIClient

let clientUuid = 987 // UUID | 
let watchlistUuid = 987 // UUID | 

ApiAPI.apiV2ClientsWatchlistsRetrieve(clientUuid: clientUuid, watchlistUuid: watchlistUuid) { (response, error) in
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
 **watchlistUuid** | [**UUID**](.md) |  | 

### Return type

[**Watchlist**](Watchlist.md)

### Authorization

[cookieAuth](../README.md#cookieAuth), [jwtAuth](../README.md#jwtAuth), [tokenAuth](../README.md#tokenAuth)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **apiV2ClientsWatchlistsUpdate**
```swift
    open class func apiV2ClientsWatchlistsUpdate(clientUuid: UUID, watchlistUuid: UUID, watchlist: Watchlist, completion: @escaping (_ data: Watchlist?, _ error: Error?) -> Void)
```



Applies filters without declaring them explicitly. How? Creating those filters on the fly.  # How it works. - Declare 'filterable_fields' in the view.     E.g. filterable_fields = ['status', 'name']     __all__ is allowed. It applies filters for all model attributes.  - COMMON_FILTERS: common filters configuration.     - key: field name. E.g. status.     - filter_class. filter class for the field.     - args. Args for the filter_class __init__.  These args are taken from the queryset model         E.g. 'args': {'choices': 'STATUS_CHOICES'} means Filter(choices=queryset.model.STATUS_CHOICES)   # How to use it: class PortfolioListCreateView(CommonFilterMixin, InvestorAPIViewMixin, ListCreateAPIView):     filterable_fields = ['status', 'name']  # Filters priority. 1- Explicit filter declared in the filterset_class 2- Filters declared in COMMON_FILTERS 3- Filterset.FILTER_DEFAULTS

### Example
```swift
// The following code samples are still beta. For any issue, please report via http://github.com/OpenAPITools/openapi-generator/issues/new
import OpenAPIClient

let clientUuid = 987 // UUID | 
let watchlistUuid = 987 // UUID | 
let watchlist = Watchlist(uuid: 123, name: "name_example", assets: [RelatedAssetSerializerWithPermission(uuid: 123, market: "market_example", isin: "isin_example", currency: "currency_example", ticker: "ticker_example", name: "name_example", extraData: "TODO")]) // Watchlist | 

ApiAPI.apiV2ClientsWatchlistsUpdate(clientUuid: clientUuid, watchlistUuid: watchlistUuid, watchlist: watchlist) { (response, error) in
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
 **watchlistUuid** | [**UUID**](.md) |  | 
 **watchlist** | [**Watchlist**](Watchlist.md) |  | 

### Return type

[**Watchlist**](Watchlist.md)

### Authorization

[cookieAuth](../README.md#cookieAuth), [jwtAuth](../README.md#jwtAuth), [tokenAuth](../README.md#tokenAuth)

### HTTP request headers

 - **Content-Type**: application/json, application/x-www-form-urlencoded, multipart/form-data
 - **Accept**: application/json

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **apiV2FeedsAccessLogsList**
```swift
    open class func apiV2FeedsAccessLogsList(browser: String? = nil, browserVersion: String? = nil, channel: Channel_apiV2FeedsAccessLogsList? = nil, city: String? = nil, country: Int? = nil, deviceBrand: String? = nil, deviceModel: String? = nil, ipAddress: String? = nil, limit: Int? = nil, offset: Int? = nil, os: String? = nil, osVersion: String? = nil, userAgent: String? = nil, completion: @escaping (_ data: PaginatedAccessLogList?, _ error: Error?) -> Void)
```



Retrieves the latest access to the client's account

### Example
```swift
// The following code samples are still beta. For any issue, please report via http://github.com/OpenAPITools/openapi-generator/issues/new
import OpenAPIClient

let browser = "browser_example" // String |  (optional)
let browserVersion = "browserVersion_example" // String |  (optional)
let channel = "channel_example" // String |  (optional)
let city = "city_example" // String |  (optional)
let country = 987 // Int |  (optional)
let deviceBrand = "deviceBrand_example" // String |  (optional)
let deviceModel = "deviceModel_example" // String |  (optional)
let ipAddress = "ipAddress_example" // String |  (optional)
let limit = 987 // Int | Number of results to return per page. (optional)
let offset = 987 // Int | The initial index from which to return the results. (optional)
let os = "os_example" // String |  (optional)
let osVersion = "osVersion_example" // String |  (optional)
let userAgent = "userAgent_example" // String |  (optional)

ApiAPI.apiV2FeedsAccessLogsList(browser: browser, browserVersion: browserVersion, channel: channel, city: city, country: country, deviceBrand: deviceBrand, deviceModel: deviceModel, ipAddress: ipAddress, limit: limit, offset: offset, os: os, osVersion: osVersion, userAgent: userAgent) { (response, error) in
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
 **browser** | **String** |  | [optional] 
 **browserVersion** | **String** |  | [optional] 
 **channel** | **String** |  | [optional] 
 **city** | **String** |  | [optional] 
 **country** | **Int** |  | [optional] 
 **deviceBrand** | **String** |  | [optional] 
 **deviceModel** | **String** |  | [optional] 
 **ipAddress** | **String** |  | [optional] 
 **limit** | **Int** | Number of results to return per page. | [optional] 
 **offset** | **Int** | The initial index from which to return the results. | [optional] 
 **os** | **String** |  | [optional] 
 **osVersion** | **String** |  | [optional] 
 **userAgent** | **String** |  | [optional] 

### Return type

[**PaginatedAccessLogList**](PaginatedAccessLogList.md)

### Authorization

[cookieAuth](../README.md#cookieAuth), [jwtAuth](../README.md#jwtAuth), [tokenAuth](../README.md#tokenAuth)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **apiV2FeedsActivitiesList**
```swift
    open class func apiV2FeedsActivitiesList(limit: Int? = nil, offset: Int? = nil, target: [String]? = nil, completion: @escaping (_ data: PaginatedFeedActivityListList?, _ error: Error?) -> Void)
```



### Example
```swift
// The following code samples are still beta. For any issue, please report via http://github.com/OpenAPITools/openapi-generator/issues/new
import OpenAPIClient

let limit = 987 // Int | Number of results to return per page. (optional)
let offset = 987 // Int | The initial index from which to return the results. (optional)
let target = ["target_example"] // [String] |  (optional)

ApiAPI.apiV2FeedsActivitiesList(limit: limit, offset: offset, target: target) { (response, error) in
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
 **limit** | **Int** | Number of results to return per page. | [optional] 
 **offset** | **Int** | The initial index from which to return the results. | [optional] 
 **target** | [**[String]**](String.md) |  | [optional] 

### Return type

[**PaginatedFeedActivityListList**](PaginatedFeedActivityListList.md)

### Authorization

[cookieAuth](../README.md#cookieAuth), [jwtAuth](../README.md#jwtAuth), [tokenAuth](../README.md#tokenAuth)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **apiV2GoalsCreate**
```swift
    open class func apiV2GoalsCreate(goalUuid: UUID, goal: Goal, completion: @escaping (_ data: Goal?, _ error: Error?) -> Void)
```



### Example
```swift
// The following code samples are still beta. For any issue, please report via http://github.com/OpenAPITools/openapi-generator/issues/new
import OpenAPIClient

let goalUuid = 987 // UUID | 
let goal = Goal(uuid: 123, name: "name_example", portfolio: "portfolio_example", goalAmount: 123, deadline: Date(), initialAmount: 123, recurringAmount: 123, riskLevel: 123, created: Date()) // Goal | 

ApiAPI.apiV2GoalsCreate(goalUuid: goalUuid, goal: goal) { (response, error) in
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
 **goalUuid** | [**UUID**](.md) |  | 
 **goal** | [**Goal**](Goal.md) |  | 

### Return type

[**Goal**](Goal.md)

### Authorization

[cookieAuth](../README.md#cookieAuth), [jwtAuth](../README.md#jwtAuth), [tokenAuth](../README.md#tokenAuth)

### HTTP request headers

 - **Content-Type**: application/json, application/x-www-form-urlencoded, multipart/form-data
 - **Accept**: application/json

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **apiV2GoalsDecumulationCreate**
```swift
    open class func apiV2GoalsDecumulationCreate(forecastDecumulationRequest: ForecastDecumulationRequest, completion: @escaping (_ data: ForecastDecumulationRequest?, _ error: Error?) -> Void)
```



Return a Goal Forecast Decumulation

### Example
```swift
// The following code samples are still beta. For any issue, please report via http://github.com/OpenAPITools/openapi-generator/issues/new
import OpenAPIClient

let forecastDecumulationRequest = ForecastDecumulationRequest(initialAmount: 123, recurringAmount: 123, riskLevel: 123, withdrawalAmount: 123, retirementAge: 123, lifeExpectancy: 123) // ForecastDecumulationRequest | 

ApiAPI.apiV2GoalsDecumulationCreate(forecastDecumulationRequest: forecastDecumulationRequest) { (response, error) in
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
 **forecastDecumulationRequest** | [**ForecastDecumulationRequest**](ForecastDecumulationRequest.md) |  | 

### Return type

[**ForecastDecumulationRequest**](ForecastDecumulationRequest.md)

### Authorization

[cookieAuth](../README.md#cookieAuth), [jwtAuth](../README.md#jwtAuth), [tokenAuth](../README.md#tokenAuth)

### HTTP request headers

 - **Content-Type**: application/json, application/x-www-form-urlencoded, multipart/form-data
 - **Accept**: application/json

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **apiV2GoalsDestroy**
```swift
    open class func apiV2GoalsDestroy(goalUuid: UUID, completion: @escaping (_ data: Void?, _ error: Error?) -> Void)
```



### Example
```swift
// The following code samples are still beta. For any issue, please report via http://github.com/OpenAPITools/openapi-generator/issues/new
import OpenAPIClient

let goalUuid = 987 // UUID | 

ApiAPI.apiV2GoalsDestroy(goalUuid: goalUuid) { (response, error) in
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
 **goalUuid** | [**UUID**](.md) |  | 

### Return type

Void (empty response body)

### Authorization

[cookieAuth](../README.md#cookieAuth), [jwtAuth](../README.md#jwtAuth), [tokenAuth](../README.md#tokenAuth)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: Not defined

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **apiV2GoalsForecastCreate**
```swift
    open class func apiV2GoalsForecastCreate(forecastRequest: ForecastRequest, completion: @escaping (_ data: ForecastRequest?, _ error: Error?) -> Void)
```



Return a Goal Forecast

### Example
```swift
// The following code samples are still beta. For any issue, please report via http://github.com/OpenAPITools/openapi-generator/issues/new
import OpenAPIClient

let forecastRequest = ForecastRequest(goalAmount: 123, deadline: Date(), initialAmount: 123, recurringAmount: 123, riskLevel: 123) // ForecastRequest | 

ApiAPI.apiV2GoalsForecastCreate(forecastRequest: forecastRequest) { (response, error) in
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
 **forecastRequest** | [**ForecastRequest**](ForecastRequest.md) |  | 

### Return type

[**ForecastRequest**](ForecastRequest.md)

### Authorization

[cookieAuth](../README.md#cookieAuth), [jwtAuth](../README.md#jwtAuth), [tokenAuth](../README.md#tokenAuth)

### HTTP request headers

 - **Content-Type**: application/json, application/x-www-form-urlencoded, multipart/form-data
 - **Accept**: application/json

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **apiV2GoalsList**
```swift
    open class func apiV2GoalsList(goalUuid: UUID, limit: Int? = nil, offset: Int? = nil, completion: @escaping (_ data: PaginatedGoalList?, _ error: Error?) -> Void)
```



### Example
```swift
// The following code samples are still beta. For any issue, please report via http://github.com/OpenAPITools/openapi-generator/issues/new
import OpenAPIClient

let goalUuid = 987 // UUID | 
let limit = 987 // Int | Number of results to return per page. (optional)
let offset = 987 // Int | The initial index from which to return the results. (optional)

ApiAPI.apiV2GoalsList(goalUuid: goalUuid, limit: limit, offset: offset) { (response, error) in
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
 **goalUuid** | [**UUID**](.md) |  | 
 **limit** | **Int** | Number of results to return per page. | [optional] 
 **offset** | **Int** | The initial index from which to return the results. | [optional] 

### Return type

[**PaginatedGoalList**](PaginatedGoalList.md)

### Authorization

[cookieAuth](../README.md#cookieAuth), [jwtAuth](../README.md#jwtAuth), [tokenAuth](../README.md#tokenAuth)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **apiV2GoalsPartialUpdate**
```swift
    open class func apiV2GoalsPartialUpdate(goalUuid: UUID, patchedGoal: PatchedGoal? = nil, completion: @escaping (_ data: Goal?, _ error: Error?) -> Void)
```



### Example
```swift
// The following code samples are still beta. For any issue, please report via http://github.com/OpenAPITools/openapi-generator/issues/new
import OpenAPIClient

let goalUuid = 987 // UUID | 
let patchedGoal = PatchedGoal(uuid: 123, name: "name_example", portfolio: "portfolio_example", goalAmount: 123, deadline: Date(), initialAmount: 123, recurringAmount: 123, riskLevel: 123, created: Date()) // PatchedGoal |  (optional)

ApiAPI.apiV2GoalsPartialUpdate(goalUuid: goalUuid, patchedGoal: patchedGoal) { (response, error) in
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
 **goalUuid** | [**UUID**](.md) |  | 
 **patchedGoal** | [**PatchedGoal**](PatchedGoal.md) |  | [optional] 

### Return type

[**Goal**](Goal.md)

### Authorization

[cookieAuth](../README.md#cookieAuth), [jwtAuth](../README.md#jwtAuth), [tokenAuth](../README.md#tokenAuth)

### HTTP request headers

 - **Content-Type**: application/json, application/x-www-form-urlencoded, multipart/form-data
 - **Accept**: application/json

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **apiV2GoalsRetrieve**
```swift
    open class func apiV2GoalsRetrieve(goalUuid: UUID, completion: @escaping (_ data: Goal?, _ error: Error?) -> Void)
```



### Example
```swift
// The following code samples are still beta. For any issue, please report via http://github.com/OpenAPITools/openapi-generator/issues/new
import OpenAPIClient

let goalUuid = 987 // UUID | 

ApiAPI.apiV2GoalsRetrieve(goalUuid: goalUuid) { (response, error) in
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
 **goalUuid** | [**UUID**](.md) |  | 

### Return type

[**Goal**](Goal.md)

### Authorization

[cookieAuth](../README.md#cookieAuth), [jwtAuth](../README.md#jwtAuth), [tokenAuth](../README.md#tokenAuth)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **apiV2InboxConversationsCreate**
```swift
    open class func apiV2InboxConversationsCreate(uuid: UUID, portal: Int, created: Date, subject: String, messages: Message? = nil, completion: @escaping (_ data: ConversationCreate?, _ error: Error?) -> Void)
```



get: List all conversations with last_message of a user  post: Create new conversation with N messages (without attachments)

### Example
```swift
// The following code samples are still beta. For any issue, please report via http://github.com/OpenAPITools/openapi-generator/issues/new
import OpenAPIClient

let uuid = 987 // UUID | 
let portal = 987 // Int | 
let created = Date() // Date | 
let subject = "subject_example" // String | 
let messages = Message(user: "user_example", readDate: Date(), content: "content_example", created: Date(), attachments: [Attachment(attachmentExtension: "attachmentExtension_example", attachmentFilename: "attachmentFilename_example", uuid: 123)], uuid: 123) // Message |  (optional)

ApiAPI.apiV2InboxConversationsCreate(uuid: uuid, portal: portal, created: created, subject: subject, messages: messages) { (response, error) in
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
 **uuid** | [**UUID**](UUID.md) |  | 
 **portal** | **Int** |  | 
 **created** | **Date** |  | 
 **subject** | **String** |  | 
 **messages** | [**Message**](Message.md) |  | [optional] 

### Return type

[**ConversationCreate**](ConversationCreate.md)

### Authorization

[cookieAuth](../README.md#cookieAuth), [jwtAuth](../README.md#jwtAuth), [tokenAuth](../README.md#tokenAuth)

### HTTP request headers

 - **Content-Type**: multipart/form-data
 - **Accept**: application/json

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **apiV2InboxConversationsList**
```swift
    open class func apiV2InboxConversationsList(limit: Int? = nil, offset: Int? = nil, completion: @escaping (_ data: PaginatedConversationListList?, _ error: Error?) -> Void)
```



get: List all conversations with last_message of a user  post: Create new conversation with N messages (without attachments)

### Example
```swift
// The following code samples are still beta. For any issue, please report via http://github.com/OpenAPITools/openapi-generator/issues/new
import OpenAPIClient

let limit = 987 // Int | Number of results to return per page. (optional)
let offset = 987 // Int | The initial index from which to return the results. (optional)

ApiAPI.apiV2InboxConversationsList(limit: limit, offset: offset) { (response, error) in
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
 **limit** | **Int** | Number of results to return per page. | [optional] 
 **offset** | **Int** | The initial index from which to return the results. | [optional] 

### Return type

[**PaginatedConversationListList**](PaginatedConversationListList.md)

### Authorization

[cookieAuth](../README.md#cookieAuth), [jwtAuth](../README.md#jwtAuth), [tokenAuth](../README.md#tokenAuth)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **apiV2InboxConversationsList2**
```swift
    open class func apiV2InboxConversationsList2(conversation: UUID, limit: Int? = nil, offset: Int? = nil, completion: @escaping (_ data: PaginatedMessageList?, _ error: Error?) -> Void)
```



List all messages from a conversation uuid

### Example
```swift
// The following code samples are still beta. For any issue, please report via http://github.com/OpenAPITools/openapi-generator/issues/new
import OpenAPIClient

let conversation = 987 // UUID | 
let limit = 987 // Int | Number of results to return per page. (optional)
let offset = 987 // Int | The initial index from which to return the results. (optional)

ApiAPI.apiV2InboxConversationsList2(conversation: conversation, limit: limit, offset: offset) { (response, error) in
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
 **conversation** | [**UUID**](.md) |  | 
 **limit** | **Int** | Number of results to return per page. | [optional] 
 **offset** | **Int** | The initial index from which to return the results. | [optional] 

### Return type

[**PaginatedMessageList**](PaginatedMessageList.md)

### Authorization

[cookieAuth](../README.md#cookieAuth), [jwtAuth](../README.md#jwtAuth), [tokenAuth](../README.md#tokenAuth)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **apiV2InboxConversationsMessagesAttachmentsRetrieve**
```swift
    open class func apiV2InboxConversationsMessagesAttachmentsRetrieve(conversation: UUID, message: UUID, uuid: UUID, format: Format_apiV2InboxConversationsMessagesAttachmentsRetrieve? = nil, completion: @escaping (_ data: Attachment?, _ error: Error?) -> Void)
```



View to access to an attachment

### Example
```swift
// The following code samples are still beta. For any issue, please report via http://github.com/OpenAPITools/openapi-generator/issues/new
import OpenAPIClient

let conversation = 987 // UUID | 
let message = 987 // UUID | 
let uuid = 987 // UUID | 
let format = "format_example" // String |  (optional)

ApiAPI.apiV2InboxConversationsMessagesAttachmentsRetrieve(conversation: conversation, message: message, uuid: uuid, format: format) { (response, error) in
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
 **conversation** | [**UUID**](.md) |  | 
 **message** | [**UUID**](.md) |  | 
 **uuid** | [**UUID**](.md) |  | 
 **format** | **String** |  | [optional] 

### Return type

[**Attachment**](Attachment.md)

### Authorization

[cookieAuth](../README.md#cookieAuth), [jwtAuth](../README.md#jwtAuth), [tokenAuth](../README.md#tokenAuth)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json, application/pdf, text/plain

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **apiV2InboxConversationsMessagesCreate**
```swift
    open class func apiV2InboxConversationsMessagesCreate(conversation: UUID, user: String, readDate: Date, created: Date, attachments: [Attachment], uuid: UUID, content: String? = nil, completion: @escaping (_ data: Message?, _ error: Error?) -> Void)
```



View for creating message on a specific conversation

### Example
```swift
// The following code samples are still beta. For any issue, please report via http://github.com/OpenAPITools/openapi-generator/issues/new
import OpenAPIClient

let conversation = 987 // UUID | 
let user = "user_example" // String | 
let readDate = Date() // Date | 
let created = Date() // Date | 
let attachments = [Attachment(attachmentExtension: "attachmentExtension_example", attachmentFilename: "attachmentFilename_example", uuid: 123)] // [Attachment] | 
let uuid = 987 // UUID | 
let content = "content_example" // String |  (optional)

ApiAPI.apiV2InboxConversationsMessagesCreate(conversation: conversation, user: user, readDate: readDate, created: created, attachments: attachments, uuid: uuid, content: content) { (response, error) in
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
 **conversation** | [**UUID**](.md) |  | 
 **user** | **String** |  | 
 **readDate** | **Date** |  | 
 **created** | **Date** |  | 
 **attachments** | [**[Attachment]**](Attachment.md) |  | 
 **uuid** | [**UUID**](UUID.md) |  | 
 **content** | **String** |  | [optional] 

### Return type

[**Message**](Message.md)

### Authorization

[cookieAuth](../README.md#cookieAuth), [jwtAuth](../README.md#jwtAuth), [tokenAuth](../README.md#tokenAuth)

### HTTP request headers

 - **Content-Type**: multipart/form-data
 - **Accept**: application/json

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **apiV2MobileVersionRetrieve**
```swift
    open class func apiV2MobileVersionRetrieve(platform: String, completion: @escaping (_ data: MinimumAppVersion?, _ error: Error?) -> Void)
```



Returns the number of the last required APP Version for a platform.

### Example
```swift
// The following code samples are still beta. For any issue, please report via http://github.com/OpenAPITools/openapi-generator/issues/new
import OpenAPIClient

let platform = "platform_example" // String | 

ApiAPI.apiV2MobileVersionRetrieve(platform: platform) { (response, error) in
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
 **platform** | **String** |  | 

### Return type

[**MinimumAppVersion**](MinimumAppVersion.md)

### Authorization

[cookieAuth](../README.md#cookieAuth), [jwtAuth](../README.md#jwtAuth), [tokenAuth](../README.md#tokenAuth)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **apiV2PlatformSettingsList**
```swift
    open class func apiV2PlatformSettingsList(completion: @escaping (_ data: [NucoroSetting]?, _ error: Error?) -> Void)
```



### Example
```swift
// The following code samples are still beta. For any issue, please report via http://github.com/OpenAPITools/openapi-generator/issues/new
import OpenAPIClient


ApiAPI.apiV2PlatformSettingsList() { (response, error) in
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
This endpoint does not need any parameter.

### Return type

[**[NucoroSetting]**](NucoroSetting.md)

### Authorization

[cookieAuth](../README.md#cookieAuth), [jwtAuth](../README.md#jwtAuth), [tokenAuth](../README.md#tokenAuth)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **apiV2PortalCountriesList**
```swift
    open class func apiV2PortalCountriesList(limit: Int? = nil, offset: Int? = nil, completion: @escaping (_ data: PaginatedCountryListList?, _ error: Error?) -> Void)
```



Retrieves the list of countries

### Example
```swift
// The following code samples are still beta. For any issue, please report via http://github.com/OpenAPITools/openapi-generator/issues/new
import OpenAPIClient

let limit = 987 // Int | Number of results to return per page. (optional)
let offset = 987 // Int | The initial index from which to return the results. (optional)

ApiAPI.apiV2PortalCountriesList(limit: limit, offset: offset) { (response, error) in
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
 **limit** | **Int** | Number of results to return per page. | [optional] 
 **offset** | **Int** | The initial index from which to return the results. | [optional] 

### Return type

[**PaginatedCountryListList**](PaginatedCountryListList.md)

### Authorization

[cookieAuth](../README.md#cookieAuth), [jwtAuth](../README.md#jwtAuth), [tokenAuth](../README.md#tokenAuth)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **apiV2PortalSettingsRetrieve**
```swift
    open class func apiV2PortalSettingsRetrieve(completion: @escaping (_ data: PortalSettingValueList?, _ error: Error?) -> Void)
```



### Example
```swift
// The following code samples are still beta. For any issue, please report via http://github.com/OpenAPITools/openapi-generator/issues/new
import OpenAPIClient


ApiAPI.apiV2PortalSettingsRetrieve() { (response, error) in
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
This endpoint does not need any parameter.

### Return type

[**PortalSettingValueList**](PortalSettingValueList.md)

### Authorization

[basicAuth](../README.md#basicAuth), [cookieAuth](../README.md#cookieAuth), [jwtAuth](../README.md#jwtAuth), [tokenAuth](../README.md#tokenAuth)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **apiV2PortalTosCurrentRetrieve**
```swift
    open class func apiV2PortalTosCurrentRetrieve(completion: @escaping (_ data: Tos?, _ error: Error?) -> Void)
```



Retrieves the current ToS for the Portal

### Example
```swift
// The following code samples are still beta. For any issue, please report via http://github.com/OpenAPITools/openapi-generator/issues/new
import OpenAPIClient


ApiAPI.apiV2PortalTosCurrentRetrieve() { (response, error) in
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
This endpoint does not need any parameter.

### Return type

[**Tos**](Tos.md)

### Authorization

[cookieAuth](../README.md#cookieAuth), [jwtAuth](../README.md#jwtAuth), [tokenAuth](../README.md#tokenAuth)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **apiV2PortalTosList**
```swift
    open class func apiV2PortalTosList(limit: Int? = nil, offset: Int? = nil, completion: @escaping (_ data: PaginatedTosList?, _ error: Error?) -> Void)
```



List all ToS for the current Portal

### Example
```swift
// The following code samples are still beta. For any issue, please report via http://github.com/OpenAPITools/openapi-generator/issues/new
import OpenAPIClient

let limit = 987 // Int | Number of results to return per page. (optional)
let offset = 987 // Int | The initial index from which to return the results. (optional)

ApiAPI.apiV2PortalTosList(limit: limit, offset: offset) { (response, error) in
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
 **limit** | **Int** | Number of results to return per page. | [optional] 
 **offset** | **Int** | The initial index from which to return the results. | [optional] 

### Return type

[**PaginatedTosList**](PaginatedTosList.md)

### Authorization

[cookieAuth](../README.md#cookieAuth), [jwtAuth](../README.md#jwtAuth), [tokenAuth](../README.md#tokenAuth)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **apiV2PortalTosRetrieve**
```swift
    open class func apiV2PortalTosRetrieve(uuid: UUID, completion: @escaping (_ data: Tos?, _ error: Error?) -> Void)
```



Retrieves a specific ToS

### Example
```swift
// The following code samples are still beta. For any issue, please report via http://github.com/OpenAPITools/openapi-generator/issues/new
import OpenAPIClient

let uuid = 987 // UUID | 

ApiAPI.apiV2PortalTosRetrieve(uuid: uuid) { (response, error) in
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
 **uuid** | [**UUID**](.md) |  | 

### Return type

[**Tos**](Tos.md)

### Authorization

[cookieAuth](../README.md#cookieAuth), [jwtAuth](../README.md#jwtAuth), [tokenAuth](../README.md#tokenAuth)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **apiV2PortfoliosActivitiesList**
```swift
    open class func apiV2PortfoliosActivitiesList(portfolioUuid: UUID, limit: Int? = nil, offset: Int? = nil, target: [String]? = nil, completion: @escaping (_ data: PaginatedFeedActivityListList?, _ error: Error?) -> Void)
```



### Example
```swift
// The following code samples are still beta. For any issue, please report via http://github.com/OpenAPITools/openapi-generator/issues/new
import OpenAPIClient

let portfolioUuid = 987 // UUID | 
let limit = 987 // Int | Number of results to return per page. (optional)
let offset = 987 // Int | The initial index from which to return the results. (optional)
let target = ["target_example"] // [String] |  (optional)

ApiAPI.apiV2PortfoliosActivitiesList(portfolioUuid: portfolioUuid, limit: limit, offset: offset, target: target) { (response, error) in
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
 **portfolioUuid** | [**UUID**](.md) |  | 
 **limit** | **Int** | Number of results to return per page. | [optional] 
 **offset** | **Int** | The initial index from which to return the results. | [optional] 
 **target** | [**[String]**](String.md) |  | [optional] 

### Return type

[**PaginatedFeedActivityListList**](PaginatedFeedActivityListList.md)

### Authorization

[cookieAuth](../README.md#cookieAuth), [jwtAuth](../README.md#jwtAuth), [tokenAuth](../README.md#tokenAuth)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **apiV2PortfoliosActivitiesRetrieve**
```swift
    open class func apiV2PortfoliosActivitiesRetrieve(portfolioUuid: UUID, uuid: UUID, completion: @escaping (_ data: FeedActivityList?, _ error: Error?) -> Void)
```



### Example
```swift
// The following code samples are still beta. For any issue, please report via http://github.com/OpenAPITools/openapi-generator/issues/new
import OpenAPIClient

let portfolioUuid = 987 // UUID | 
let uuid = 987 // UUID | 

ApiAPI.apiV2PortfoliosActivitiesRetrieve(portfolioUuid: portfolioUuid, uuid: uuid) { (response, error) in
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
 **portfolioUuid** | [**UUID**](.md) |  | 
 **uuid** | [**UUID**](.md) |  | 

### Return type

[**FeedActivityList**](FeedActivityList.md)

### Authorization

[cookieAuth](../README.md#cookieAuth), [jwtAuth](../README.md#jwtAuth), [tokenAuth](../README.md#tokenAuth)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **apiV2PortfoliosAllocationsEndDay**
```swift
    open class func apiV2PortfoliosAllocationsEndDay(portfolioUuid: UUID, completion: @escaping (_ data: AllocationList?, _ error: Error?) -> Void)
```



### Example
```swift
// The following code samples are still beta. For any issue, please report via http://github.com/OpenAPITools/openapi-generator/issues/new
import OpenAPIClient

let portfolioUuid = 987 // UUID | 

ApiAPI.apiV2PortfoliosAllocationsEndDay(portfolioUuid: portfolioUuid) { (response, error) in
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
 **portfolioUuid** | [**UUID**](.md) |  | 

### Return type

[**AllocationList**](AllocationList.md)

### Authorization

[cookieAuth](../README.md#cookieAuth), [jwtAuth](../README.md#jwtAuth), [tokenAuth](../README.md#tokenAuth)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **apiV2PortfoliosAllocationsEndDayByDateRetrieve**
```swift
    open class func apiV2PortfoliosAllocationsEndDayByDateRetrieve(allocationDate: String, portfolioUuid: UUID, completion: @escaping (_ data: AllocationDetail?, _ error: Error?) -> Void)
```



### Example
```swift
// The following code samples are still beta. For any issue, please report via http://github.com/OpenAPITools/openapi-generator/issues/new
import OpenAPIClient

let allocationDate = "allocationDate_example" // String | 
let portfolioUuid = 987 // UUID | 

ApiAPI.apiV2PortfoliosAllocationsEndDayByDateRetrieve(allocationDate: allocationDate, portfolioUuid: portfolioUuid) { (response, error) in
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
 **allocationDate** | **String** |  | 
 **portfolioUuid** | [**UUID**](.md) |  | 

### Return type

[**AllocationDetail**](AllocationDetail.md)

### Authorization

[cookieAuth](../README.md#cookieAuth), [jwtAuth](../README.md#jwtAuth), [tokenAuth](../README.md#tokenAuth)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **apiV2PortfoliosAllocationsEndDayLatestRetrieve**
```swift
    open class func apiV2PortfoliosAllocationsEndDayLatestRetrieve(portfolioUuid: UUID, completion: @escaping (_ data: AllocationDetail?, _ error: Error?) -> Void)
```



### Example
```swift
// The following code samples are still beta. For any issue, please report via http://github.com/OpenAPITools/openapi-generator/issues/new
import OpenAPIClient

let portfolioUuid = 987 // UUID | 

ApiAPI.apiV2PortfoliosAllocationsEndDayLatestRetrieve(portfolioUuid: portfolioUuid) { (response, error) in
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
 **portfolioUuid** | [**UUID**](.md) |  | 

### Return type

[**AllocationDetail**](AllocationDetail.md)

### Authorization

[cookieAuth](../README.md#cookieAuth), [jwtAuth](../README.md#jwtAuth), [tokenAuth](../README.md#tokenAuth)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **apiV2PortfoliosAllocationsHistoryRetrieve**
```swift
    open class func apiV2PortfoliosAllocationsHistoryRetrieve(portfolio: UUID, completion: @escaping (_ data: Void?, _ error: Error?) -> Void)
```



Allocations History for a given portfolio  It accepts two optional parameters, `date_to` and `date_from` to limit the daily allocations to a certain data range. If they are not given, all the allocations are returned.  ---  ## Parameters:   * **name**: `date_from`  * **description**: The initial date.  * **parameter type**: query param   * **name**: `date_from`  * **description**: The final date.  * **parameter type**: query param

### Example
```swift
// The following code samples are still beta. For any issue, please report via http://github.com/OpenAPITools/openapi-generator/issues/new
import OpenAPIClient

let portfolio = 987 // UUID | 

ApiAPI.apiV2PortfoliosAllocationsHistoryRetrieve(portfolio: portfolio) { (response, error) in
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
 **portfolio** | [**UUID**](.md) |  | 

### Return type

Void (empty response body)

### Authorization

[cookieAuth](../README.md#cookieAuth), [jwtAuth](../README.md#jwtAuth), [tokenAuth](../README.md#tokenAuth)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: Not defined

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **apiV2PortfoliosAllocationsIntradayLatestRetrieve**
```swift
    open class func apiV2PortfoliosAllocationsIntradayLatestRetrieve(portfolioUuid: UUID, completion: @escaping (_ data: CurrentAllocation?, _ error: Error?) -> Void)
```



### Example
```swift
// The following code samples are still beta. For any issue, please report via http://github.com/OpenAPITools/openapi-generator/issues/new
import OpenAPIClient

let portfolioUuid = 987 // UUID | 

ApiAPI.apiV2PortfoliosAllocationsIntradayLatestRetrieve(portfolioUuid: portfolioUuid) { (response, error) in
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
 **portfolioUuid** | [**UUID**](.md) |  | 

### Return type

[**CurrentAllocation**](CurrentAllocation.md)

### Authorization

[cookieAuth](../README.md#cookieAuth), [jwtAuth](../README.md#jwtAuth), [tokenAuth](../README.md#tokenAuth)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **apiV2PortfoliosAllocationsList**
```swift
    open class func apiV2PortfoliosAllocationsList(portfolioUuid: UUID, limit: Int? = nil, offset: Int? = nil, valuationDateAfter: Date? = nil, valuationDateBefore: Date? = nil, completion: @escaping (_ data: PaginatedAllocationListList?, _ error: Error?) -> Void)
```



### Example
```swift
// The following code samples are still beta. For any issue, please report via http://github.com/OpenAPITools/openapi-generator/issues/new
import OpenAPIClient

let portfolioUuid = 987 // UUID | 
let limit = 987 // Int | Number of results to return per page. (optional)
let offset = 987 // Int | The initial index from which to return the results. (optional)
let valuationDateAfter = Date() // Date |  (optional)
let valuationDateBefore = Date() // Date |  (optional)

ApiAPI.apiV2PortfoliosAllocationsList(portfolioUuid: portfolioUuid, limit: limit, offset: offset, valuationDateAfter: valuationDateAfter, valuationDateBefore: valuationDateBefore) { (response, error) in
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
 **portfolioUuid** | [**UUID**](.md) |  | 
 **limit** | **Int** | Number of results to return per page. | [optional] 
 **offset** | **Int** | The initial index from which to return the results. | [optional] 
 **valuationDateAfter** | **Date** |  | [optional] 
 **valuationDateBefore** | **Date** |  | [optional] 

### Return type

[**PaginatedAllocationListList**](PaginatedAllocationListList.md)

### Authorization

[cookieAuth](../README.md#cookieAuth), [jwtAuth](../README.md#jwtAuth), [tokenAuth](../README.md#tokenAuth)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **apiV2PortfoliosAllocationsRetrieve**
```swift
    open class func apiV2PortfoliosAllocationsRetrieve(id: Int, portfolioUuid: UUID, completion: @escaping (_ data: AllocationList?, _ error: Error?) -> Void)
```



### Example
```swift
// The following code samples are still beta. For any issue, please report via http://github.com/OpenAPITools/openapi-generator/issues/new
import OpenAPIClient

let id = 987 // Int | A unique integer value identifying this allocation.
let portfolioUuid = 987 // UUID | 

ApiAPI.apiV2PortfoliosAllocationsRetrieve(id: id, portfolioUuid: portfolioUuid) { (response, error) in
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
 **id** | **Int** | A unique integer value identifying this allocation. | 
 **portfolioUuid** | [**UUID**](.md) |  | 

### Return type

[**AllocationList**](AllocationList.md)

### Authorization

[cookieAuth](../README.md#cookieAuth), [jwtAuth](../README.md#jwtAuth), [tokenAuth](../README.md#tokenAuth)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **apiV2PortfoliosCreate**
```swift
    open class func apiV2PortfoliosCreate(portfolioUuid: UUID, portfolioCreate: PortfolioCreate, completion: @escaping (_ data: PortfolioCreate?, _ error: Error?) -> Void)
```



Allow aggregate/group fields of the ModelView model or its related entities.    Query params should use dot notation.  Requires:     ListModelMixin (ListAPIView, ListCreateApiView)  Args:     * aggregatable_fields (dict): optional.         Keys: fields that allow aggregation (including related entities with \"__\" notation).         Values: django qs functions or aggregate_fns         Example:             aggregatable_fields = {                 'allocations__balance': [Sum, Avg],             }      * groupable_fields (list): optional. fields that allow grouping (including related entities with \"__\" notation).         Example:             groupable_fields = ['portfolio__portfolio_type']  Query Param Examples:     >>> ?group_by=portfolio.portfolio_type     >>> ?aggregate[Sum]=portfolio.allocations.balance     >>> ?group_by=valuation_date&aggregate[Sum]=portfolio.allocations.balance

### Example
```swift
// The following code samples are still beta. For any issue, please report via http://github.com/OpenAPITools/openapi-generator/issues/new
import OpenAPIClient

let portfolioUuid = 987 // UUID | 
let portfolioCreate = PortfolioCreate(uuid: 123, name: "name_example", portfolioType: "portfolioType_example", riskLevel: 123, timeHorizon: 123, status: Status2efEnum(), currency: "currency_example", created: Date(), activated: Date(), advisor: "advisor_example", adviceEngine: "adviceEngine_example", extraData: "TODO", client: "client_example") // PortfolioCreate | 

ApiAPI.apiV2PortfoliosCreate(portfolioUuid: portfolioUuid, portfolioCreate: portfolioCreate) { (response, error) in
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
 **portfolioUuid** | [**UUID**](.md) |  | 
 **portfolioCreate** | [**PortfolioCreate**](PortfolioCreate.md) |  | 

### Return type

[**PortfolioCreate**](PortfolioCreate.md)

### Authorization

[cookieAuth](../README.md#cookieAuth), [jwtAuth](../README.md#jwtAuth), [tokenAuth](../README.md#tokenAuth)

### HTTP request headers

 - **Content-Type**: application/json, application/x-www-form-urlencoded, multipart/form-data
 - **Accept**: application/json

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **apiV2PortfoliosDepositsCreate**
```swift
    open class func apiV2PortfoliosDepositsCreate(portfolioUuid: UUID, depositCreate: DepositCreate, completion: @escaping (_ data: DepositCreate?, _ error: Error?) -> Void)
```



### Example
```swift
// The following code samples are still beta. For any issue, please report via http://github.com/OpenAPITools/openapi-generator/issues/new
import OpenAPIClient

let portfolioUuid = 987 // UUID | 
let depositCreate = DepositCreate(uuid: 123, amount: 123, provider: "provider_example", reference: "reference_example", status: StatusB6aEnum(), reason: "reason_example", completed: Date(), depositType: DepositTypeEnum(), transactedAt: Date(), extraData: "TODO") // DepositCreate | 

ApiAPI.apiV2PortfoliosDepositsCreate(portfolioUuid: portfolioUuid, depositCreate: depositCreate) { (response, error) in
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
 **portfolioUuid** | [**UUID**](.md) |  | 
 **depositCreate** | [**DepositCreate**](DepositCreate.md) |  | 

### Return type

[**DepositCreate**](DepositCreate.md)

### Authorization

[cookieAuth](../README.md#cookieAuth), [jwtAuth](../README.md#jwtAuth), [tokenAuth](../README.md#tokenAuth)

### HTTP request headers

 - **Content-Type**: application/json, application/x-www-form-urlencoded, multipart/form-data
 - **Accept**: application/json

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **apiV2PortfoliosDepositsDestroy**
```swift
    open class func apiV2PortfoliosDepositsDestroy(portfolioUuid: UUID, uuid: UUID, completion: @escaping (_ data: Void?, _ error: Error?) -> Void)
```



### Example
```swift
// The following code samples are still beta. For any issue, please report via http://github.com/OpenAPITools/openapi-generator/issues/new
import OpenAPIClient

let portfolioUuid = 987 // UUID | 
let uuid = 987 // UUID | 

ApiAPI.apiV2PortfoliosDepositsDestroy(portfolioUuid: portfolioUuid, uuid: uuid) { (response, error) in
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
 **portfolioUuid** | [**UUID**](.md) |  | 
 **uuid** | [**UUID**](.md) |  | 

### Return type

Void (empty response body)

### Authorization

[cookieAuth](../README.md#cookieAuth), [jwtAuth](../README.md#jwtAuth), [tokenAuth](../README.md#tokenAuth)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: Not defined

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **apiV2PortfoliosDepositsList**
```swift
    open class func apiV2PortfoliosDepositsList(portfolioUuid: UUID, limit: Int? = nil, offset: Int? = nil, status: [String]? = nil, completion: @escaping (_ data: PaginatedDepositListList?, _ error: Error?) -> Void)
```



### Example
```swift
// The following code samples are still beta. For any issue, please report via http://github.com/OpenAPITools/openapi-generator/issues/new
import OpenAPIClient

let portfolioUuid = 987 // UUID | 
let limit = 987 // Int | Number of results to return per page. (optional)
let offset = 987 // Int | The initial index from which to return the results. (optional)
let status = ["status_example"] // [String] |  (optional)

ApiAPI.apiV2PortfoliosDepositsList(portfolioUuid: portfolioUuid, limit: limit, offset: offset, status: status) { (response, error) in
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
 **portfolioUuid** | [**UUID**](.md) |  | 
 **limit** | **Int** | Number of results to return per page. | [optional] 
 **offset** | **Int** | The initial index from which to return the results. | [optional] 
 **status** | [**[String]**](String.md) |  | [optional] 

### Return type

[**PaginatedDepositListList**](PaginatedDepositListList.md)

### Authorization

[cookieAuth](../README.md#cookieAuth), [jwtAuth](../README.md#jwtAuth), [tokenAuth](../README.md#tokenAuth)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **apiV2PortfoliosDepositsRetrieve**
```swift
    open class func apiV2PortfoliosDepositsRetrieve(portfolioUuid: UUID, uuid: UUID, completion: @escaping (_ data: DepositDetail?, _ error: Error?) -> Void)
```



### Example
```swift
// The following code samples are still beta. For any issue, please report via http://github.com/OpenAPITools/openapi-generator/issues/new
import OpenAPIClient

let portfolioUuid = 987 // UUID | 
let uuid = 987 // UUID | 

ApiAPI.apiV2PortfoliosDepositsRetrieve(portfolioUuid: portfolioUuid, uuid: uuid) { (response, error) in
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
 **portfolioUuid** | [**UUID**](.md) |  | 
 **uuid** | [**UUID**](.md) |  | 

### Return type

[**DepositDetail**](DepositDetail.md)

### Authorization

[cookieAuth](../README.md#cookieAuth), [jwtAuth](../README.md#jwtAuth), [tokenAuth](../README.md#tokenAuth)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **apiV2PortfoliosDestroy**
```swift
    open class func apiV2PortfoliosDestroy(portfolioUuid: UUID, completion: @escaping (_ data: Void?, _ error: Error?) -> Void)
```



Allow aggregate/group fields of the ModelView model or its related entities.    Query params should use dot notation.  Requires:     ListModelMixin (ListAPIView, ListCreateApiView)  Args:     * aggregatable_fields (dict): optional.         Keys: fields that allow aggregation (including related entities with \"__\" notation).         Values: django qs functions or aggregate_fns         Example:             aggregatable_fields = {                 'allocations__balance': [Sum, Avg],             }      * groupable_fields (list): optional. fields that allow grouping (including related entities with \"__\" notation).         Example:             groupable_fields = ['portfolio__portfolio_type']  Query Param Examples:     >>> ?group_by=portfolio.portfolio_type     >>> ?aggregate[Sum]=portfolio.allocations.balance     >>> ?group_by=valuation_date&aggregate[Sum]=portfolio.allocations.balance

### Example
```swift
// The following code samples are still beta. For any issue, please report via http://github.com/OpenAPITools/openapi-generator/issues/new
import OpenAPIClient

let portfolioUuid = 987 // UUID | 

ApiAPI.apiV2PortfoliosDestroy(portfolioUuid: portfolioUuid) { (response, error) in
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
 **portfolioUuid** | [**UUID**](.md) |  | 

### Return type

Void (empty response body)

### Authorization

[cookieAuth](../README.md#cookieAuth), [jwtAuth](../README.md#jwtAuth), [tokenAuth](../README.md#tokenAuth)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: Not defined

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **apiV2PortfoliosList**
```swift
    open class func apiV2PortfoliosList(portfolioUuid: UUID, externalCustodianId: String? = nil, limit: Int? = nil, offset: Int? = nil, status: [String]? = nil, valuationDateAfter: Date? = nil, valuationDateBefore: Date? = nil, completion: @escaping (_ data: PaginatedPortfolioListList?, _ error: Error?) -> Void)
```



Allow aggregate/group fields of the ModelView model or its related entities.    Query params should use dot notation.  Requires:     ListModelMixin (ListAPIView, ListCreateApiView)  Args:     * aggregatable_fields (dict): optional.         Keys: fields that allow aggregation (including related entities with \"__\" notation).         Values: django qs functions or aggregate_fns         Example:             aggregatable_fields = {                 'allocations__balance': [Sum, Avg],             }      * groupable_fields (list): optional. fields that allow grouping (including related entities with \"__\" notation).         Example:             groupable_fields = ['portfolio__portfolio_type']  Query Param Examples:     >>> ?group_by=portfolio.portfolio_type     >>> ?aggregate[Sum]=portfolio.allocations.balance     >>> ?group_by=valuation_date&aggregate[Sum]=portfolio.allocations.balance

### Example
```swift
// The following code samples are still beta. For any issue, please report via http://github.com/OpenAPITools/openapi-generator/issues/new
import OpenAPIClient

let portfolioUuid = 987 // UUID | 
let externalCustodianId = "externalCustodianId_example" // String |  (optional)
let limit = 987 // Int | Number of results to return per page. (optional)
let offset = 987 // Int | The initial index from which to return the results. (optional)
let status = ["status_example"] // [String] |  (optional)
let valuationDateAfter = Date() // Date |  (optional)
let valuationDateBefore = Date() // Date |  (optional)

ApiAPI.apiV2PortfoliosList(portfolioUuid: portfolioUuid, externalCustodianId: externalCustodianId, limit: limit, offset: offset, status: status, valuationDateAfter: valuationDateAfter, valuationDateBefore: valuationDateBefore) { (response, error) in
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
 **portfolioUuid** | [**UUID**](.md) |  | 
 **externalCustodianId** | **String** |  | [optional] 
 **limit** | **Int** | Number of results to return per page. | [optional] 
 **offset** | **Int** | The initial index from which to return the results. | [optional] 
 **status** | [**[String]**](String.md) |  | [optional] 
 **valuationDateAfter** | **Date** |  | [optional] 
 **valuationDateBefore** | **Date** |  | [optional] 

### Return type

[**PaginatedPortfolioListList**](PaginatedPortfolioListList.md)

### Authorization

[cookieAuth](../README.md#cookieAuth), [jwtAuth](../README.md#jwtAuth), [tokenAuth](../README.md#tokenAuth)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **apiV2PortfoliosOrdersCreate**
```swift
    open class func apiV2PortfoliosOrdersCreate(portfolioUuid: UUID, createOrder: CreateOrder, completion: @escaping (_ data: CreateOrder?, _ error: Error?) -> Void)
```



### Example
```swift
// The following code samples are still beta. For any issue, please report via http://github.com/OpenAPITools/openapi-generator/issues/new
import OpenAPIClient

let portfolioUuid = 987 // UUID | 
let createOrder = CreateOrder(shares: 123, asset: RelatedAssetSerializerWithAssetCategories(uuid: 123, market: "market_example", isin: "isin_example", currency: "currency_example", ticker: "ticker_example", name: "name_example", extraData: "TODO", categories: ["categories_example"]), portfolio: "portfolio_example", orderType: OrderTypeEnum(), method: CreateOrderMethodEnum(), limitPrice: 123, stopPrice: 123, duration: DurationEnum()) // CreateOrder | 

ApiAPI.apiV2PortfoliosOrdersCreate(portfolioUuid: portfolioUuid, createOrder: createOrder) { (response, error) in
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
 **portfolioUuid** | [**UUID**](.md) |  | 
 **createOrder** | [**CreateOrder**](CreateOrder.md) |  | 

### Return type

[**CreateOrder**](CreateOrder.md)

### Authorization

[cookieAuth](../README.md#cookieAuth), [jwtAuth](../README.md#jwtAuth), [tokenAuth](../README.md#tokenAuth)

### HTTP request headers

 - **Content-Type**: application/json, application/x-www-form-urlencoded, multipart/form-data
 - **Accept**: application/json

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **apiV2PortfoliosOrdersDestroy**
```swift
    open class func apiV2PortfoliosOrdersDestroy(portfolioUuid: UUID, uuid: UUID, completion: @escaping (_ data: Void?, _ error: Error?) -> Void)
```



Cancel or request cancellation to the broker

### Example
```swift
// The following code samples are still beta. For any issue, please report via http://github.com/OpenAPITools/openapi-generator/issues/new
import OpenAPIClient

let portfolioUuid = 987 // UUID | 
let uuid = 987 // UUID | 

ApiAPI.apiV2PortfoliosOrdersDestroy(portfolioUuid: portfolioUuid, uuid: uuid) { (response, error) in
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
 **portfolioUuid** | [**UUID**](.md) |  | 
 **uuid** | [**UUID**](.md) |  | 

### Return type

Void (empty response body)

### Authorization

[cookieAuth](../README.md#cookieAuth), [jwtAuth](../README.md#jwtAuth), [tokenAuth](../README.md#tokenAuth)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: Not defined

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **apiV2PortfoliosOrdersList**
```swift
    open class func apiV2PortfoliosOrdersList(portfolioUuid: UUID, adviceExternalId: String? = nil, asset: String? = nil, completedAfter: Date? = nil, completedBefore: Date? = nil, extraData: [String: AnyCodable]? = nil, limit: Int? = nil, offset: Int? = nil, portfolio: String? = nil, status: String? = nil, completion: @escaping (_ data: PaginatedOrderListList?, _ error: Error?) -> Void)
```



### Example
```swift
// The following code samples are still beta. For any issue, please report via http://github.com/OpenAPITools/openapi-generator/issues/new
import OpenAPIClient

let portfolioUuid = 987 // UUID | 
let adviceExternalId = "adviceExternalId_example" // String |  (optional)
let asset = "asset_example" // String |  (optional)
let completedAfter = Date() // Date |  (optional)
let completedBefore = Date() // Date |  (optional)
let extraData = "TODO" // [String: AnyCodable] | Additional order attributes for the specific portal (optional)
let limit = 987 // Int | Number of results to return per page. (optional)
let offset = 987 // Int | The initial index from which to return the results. (optional)
let portfolio = "portfolio_example" // String |  (optional)
let status = "status_example" // String |  (optional)

ApiAPI.apiV2PortfoliosOrdersList(portfolioUuid: portfolioUuid, adviceExternalId: adviceExternalId, asset: asset, completedAfter: completedAfter, completedBefore: completedBefore, extraData: extraData, limit: limit, offset: offset, portfolio: portfolio, status: status) { (response, error) in
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
 **portfolioUuid** | [**UUID**](.md) |  | 
 **adviceExternalId** | **String** |  | [optional] 
 **asset** | **String** |  | [optional] 
 **completedAfter** | **Date** |  | [optional] 
 **completedBefore** | **Date** |  | [optional] 
 **extraData** | [**[String: AnyCodable]**](AnyCodable.md) | Additional order attributes for the specific portal | [optional] 
 **limit** | **Int** | Number of results to return per page. | [optional] 
 **offset** | **Int** | The initial index from which to return the results. | [optional] 
 **portfolio** | **String** |  | [optional] 
 **status** | **String** |  | [optional] 

### Return type

[**PaginatedOrderListList**](PaginatedOrderListList.md)

### Authorization

[cookieAuth](../README.md#cookieAuth), [jwtAuth](../README.md#jwtAuth), [tokenAuth](../README.md#tokenAuth)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **apiV2PortfoliosOrdersRetrieve**
```swift
    open class func apiV2PortfoliosOrdersRetrieve(portfolioUuid: UUID, uuid: UUID, completion: @escaping (_ data: OrderList?, _ error: Error?) -> Void)
```



### Example
```swift
// The following code samples are still beta. For any issue, please report via http://github.com/OpenAPITools/openapi-generator/issues/new
import OpenAPIClient

let portfolioUuid = 987 // UUID | 
let uuid = 987 // UUID | 

ApiAPI.apiV2PortfoliosOrdersRetrieve(portfolioUuid: portfolioUuid, uuid: uuid) { (response, error) in
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
 **portfolioUuid** | [**UUID**](.md) |  | 
 **uuid** | [**UUID**](.md) |  | 

### Return type

[**OrderList**](OrderList.md)

### Authorization

[cookieAuth](../README.md#cookieAuth), [jwtAuth](../README.md#jwtAuth), [tokenAuth](../README.md#tokenAuth)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **apiV2PortfoliosPartialUpdate**
```swift
    open class func apiV2PortfoliosPartialUpdate(portfolioUuid: UUID, patchedPortfolioUpdate: PatchedPortfolioUpdate? = nil, completion: @escaping (_ data: PortfolioUpdate?, _ error: Error?) -> Void)
```



Allow aggregate/group fields of the ModelView model or its related entities.    Query params should use dot notation.  Requires:     ListModelMixin (ListAPIView, ListCreateApiView)  Args:     * aggregatable_fields (dict): optional.         Keys: fields that allow aggregation (including related entities with \"__\" notation).         Values: django qs functions or aggregate_fns         Example:             aggregatable_fields = {                 'allocations__balance': [Sum, Avg],             }      * groupable_fields (list): optional. fields that allow grouping (including related entities with \"__\" notation).         Example:             groupable_fields = ['portfolio__portfolio_type']  Query Param Examples:     >>> ?group_by=portfolio.portfolio_type     >>> ?aggregate[Sum]=portfolio.allocations.balance     >>> ?group_by=valuation_date&aggregate[Sum]=portfolio.allocations.balance

### Example
```swift
// The following code samples are still beta. For any issue, please report via http://github.com/OpenAPITools/openapi-generator/issues/new
import OpenAPIClient

let portfolioUuid = 987 // UUID | 
let patchedPortfolioUpdate = PatchedPortfolioUpdate(uuid: 123, name: "name_example", portfolioType: "portfolioType_example", riskLevel: 123, timeHorizon: 123, status: Status2efEnum(), currency: "currency_example", created: Date(), activated: Date(), advisor: "advisor_example", adviceEngine: "adviceEngine_example", extraData: "TODO", client: "client_example") // PatchedPortfolioUpdate |  (optional)

ApiAPI.apiV2PortfoliosPartialUpdate(portfolioUuid: portfolioUuid, patchedPortfolioUpdate: patchedPortfolioUpdate) { (response, error) in
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
 **portfolioUuid** | [**UUID**](.md) |  | 
 **patchedPortfolioUpdate** | [**PatchedPortfolioUpdate**](PatchedPortfolioUpdate.md) |  | [optional] 

### Return type

[**PortfolioUpdate**](PortfolioUpdate.md)

### Authorization

[cookieAuth](../README.md#cookieAuth), [jwtAuth](../README.md#jwtAuth), [tokenAuth](../README.md#tokenAuth)

### HTTP request headers

 - **Content-Type**: application/json, application/x-www-form-urlencoded, multipart/form-data
 - **Accept**: application/json

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **apiV2PortfoliosPerformanceMwrrList**
```swift
    open class func apiV2PortfoliosPerformanceMwrrList(portfolioUuid: UUID, dateAfter: Date? = nil, dateBefore: Date? = nil, limit: Int? = nil, offset: Int? = nil, completion: @escaping (_ data: PaginatedPortfolioPerformanceList?, _ error: Error?) -> Void)
```



### Example
```swift
// The following code samples are still beta. For any issue, please report via http://github.com/OpenAPITools/openapi-generator/issues/new
import OpenAPIClient

let portfolioUuid = 987 // UUID | 
let dateAfter = Date() // Date |  (optional)
let dateBefore = Date() // Date |  (optional)
let limit = 987 // Int | Number of results to return per page. (optional)
let offset = 987 // Int | The initial index from which to return the results. (optional)

ApiAPI.apiV2PortfoliosPerformanceMwrrList(portfolioUuid: portfolioUuid, dateAfter: dateAfter, dateBefore: dateBefore, limit: limit, offset: offset) { (response, error) in
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
 **portfolioUuid** | [**UUID**](.md) |  | 
 **dateAfter** | **Date** |  | [optional] 
 **dateBefore** | **Date** |  | [optional] 
 **limit** | **Int** | Number of results to return per page. | [optional] 
 **offset** | **Int** | The initial index from which to return the results. | [optional] 

### Return type

[**PaginatedPortfolioPerformanceList**](PaginatedPortfolioPerformanceList.md)

### Authorization

[cookieAuth](../README.md#cookieAuth), [jwtAuth](../README.md#jwtAuth), [tokenAuth](../README.md#tokenAuth)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **apiV2PortfoliosPerformancePositionsList**
```swift
    open class func apiV2PortfoliosPerformancePositionsList(portfolioUuid: UUID, limit: Int? = nil, offset: Int? = nil, completion: @escaping (_ data: PaginatedPortfolioPerformancePositionsList?, _ error: Error?) -> Void)
```



### Example
```swift
// The following code samples are still beta. For any issue, please report via http://github.com/OpenAPITools/openapi-generator/issues/new
import OpenAPIClient

let portfolioUuid = 987 // UUID | 
let limit = 987 // Int | Number of results to return per page. (optional)
let offset = 987 // Int | The initial index from which to return the results. (optional)

ApiAPI.apiV2PortfoliosPerformancePositionsList(portfolioUuid: portfolioUuid, limit: limit, offset: offset) { (response, error) in
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
 **portfolioUuid** | [**UUID**](.md) |  | 
 **limit** | **Int** | Number of results to return per page. | [optional] 
 **offset** | **Int** | The initial index from which to return the results. | [optional] 

### Return type

[**PaginatedPortfolioPerformancePositionsList**](PaginatedPortfolioPerformancePositionsList.md)

### Authorization

[cookieAuth](../README.md#cookieAuth), [jwtAuth](../README.md#jwtAuth), [tokenAuth](../README.md#tokenAuth)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **apiV2PortfoliosPerformanceTwrrList**
```swift
    open class func apiV2PortfoliosPerformanceTwrrList(portfolioUuid: UUID, dateAfter: Date? = nil, dateBefore: Date? = nil, limit: Int? = nil, offset: Int? = nil, completion: @escaping (_ data: PaginatedPortfolioPerformanceList?, _ error: Error?) -> Void)
```



### Example
```swift
// The following code samples are still beta. For any issue, please report via http://github.com/OpenAPITools/openapi-generator/issues/new
import OpenAPIClient

let portfolioUuid = 987 // UUID | 
let dateAfter = Date() // Date |  (optional)
let dateBefore = Date() // Date |  (optional)
let limit = 987 // Int | Number of results to return per page. (optional)
let offset = 987 // Int | The initial index from which to return the results. (optional)

ApiAPI.apiV2PortfoliosPerformanceTwrrList(portfolioUuid: portfolioUuid, dateAfter: dateAfter, dateBefore: dateBefore, limit: limit, offset: offset) { (response, error) in
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
 **portfolioUuid** | [**UUID**](.md) |  | 
 **dateAfter** | **Date** |  | [optional] 
 **dateBefore** | **Date** |  | [optional] 
 **limit** | **Int** | Number of results to return per page. | [optional] 
 **offset** | **Int** | The initial index from which to return the results. | [optional] 

### Return type

[**PaginatedPortfolioPerformanceList**](PaginatedPortfolioPerformanceList.md)

### Authorization

[cookieAuth](../README.md#cookieAuth), [jwtAuth](../README.md#jwtAuth), [tokenAuth](../README.md#tokenAuth)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **apiV2PortfoliosPortfoliotypesList**
```swift
    open class func apiV2PortfoliosPortfoliotypesList(limit: Int? = nil, offset: Int? = nil, completion: @escaping (_ data: PaginatedPortfolioTypeList?, _ error: Error?) -> Void)
```



### Example
```swift
// The following code samples are still beta. For any issue, please report via http://github.com/OpenAPITools/openapi-generator/issues/new
import OpenAPIClient

let limit = 987 // Int | Number of results to return per page. (optional)
let offset = 987 // Int | The initial index from which to return the results. (optional)

ApiAPI.apiV2PortfoliosPortfoliotypesList(limit: limit, offset: offset) { (response, error) in
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
 **limit** | **Int** | Number of results to return per page. | [optional] 
 **offset** | **Int** | The initial index from which to return the results. | [optional] 

### Return type

[**PaginatedPortfolioTypeList**](PaginatedPortfolioTypeList.md)

### Authorization

[cookieAuth](../README.md#cookieAuth), [jwtAuth](../README.md#jwtAuth), [tokenAuth](../README.md#tokenAuth)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **apiV2PortfoliosPortfoliotypesRestrictionsList**
```swift
    open class func apiV2PortfoliosPortfoliotypesRestrictionsList(code: String, limit: Int? = nil, offset: Int? = nil, completion: @escaping (_ data: PaginatedBasePortfolioTypeRestrictionsList?, _ error: Error?) -> Void)
```



### Example
```swift
// The following code samples are still beta. For any issue, please report via http://github.com/OpenAPITools/openapi-generator/issues/new
import OpenAPIClient

let code = "code_example" // String | 
let limit = 987 // Int | Number of results to return per page. (optional)
let offset = 987 // Int | The initial index from which to return the results. (optional)

ApiAPI.apiV2PortfoliosPortfoliotypesRestrictionsList(code: code, limit: limit, offset: offset) { (response, error) in
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
 **code** | **String** |  | 
 **limit** | **Int** | Number of results to return per page. | [optional] 
 **offset** | **Int** | The initial index from which to return the results. | [optional] 

### Return type

[**PaginatedBasePortfolioTypeRestrictionsList**](PaginatedBasePortfolioTypeRestrictionsList.md)

### Authorization

[cookieAuth](../README.md#cookieAuth), [jwtAuth](../README.md#jwtAuth), [tokenAuth](../README.md#tokenAuth)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **apiV2PortfoliosRebalancesList**
```swift
    open class func apiV2PortfoliosRebalancesList(portfolioUuid: UUID, limit: Int? = nil, offset: Int? = nil, completion: @escaping (_ data: PaginatedRebalanceList?, _ error: Error?) -> Void)
```



### Example
```swift
// The following code samples are still beta. For any issue, please report via http://github.com/OpenAPITools/openapi-generator/issues/new
import OpenAPIClient

let portfolioUuid = 987 // UUID | 
let limit = 987 // Int | Number of results to return per page. (optional)
let offset = 987 // Int | The initial index from which to return the results. (optional)

ApiAPI.apiV2PortfoliosRebalancesList(portfolioUuid: portfolioUuid, limit: limit, offset: offset) { (response, error) in
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
 **portfolioUuid** | [**UUID**](.md) |  | 
 **limit** | **Int** | Number of results to return per page. | [optional] 
 **offset** | **Int** | The initial index from which to return the results. | [optional] 

### Return type

[**PaginatedRebalanceList**](PaginatedRebalanceList.md)

### Authorization

[cookieAuth](../README.md#cookieAuth), [jwtAuth](../README.md#jwtAuth), [tokenAuth](../README.md#tokenAuth)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **apiV2PortfoliosRebalancesRetrieve**
```swift
    open class func apiV2PortfoliosRebalancesRetrieve(portfolioUuid: UUID, uuid: UUID, completion: @escaping (_ data: Rebalance?, _ error: Error?) -> Void)
```



### Example
```swift
// The following code samples are still beta. For any issue, please report via http://github.com/OpenAPITools/openapi-generator/issues/new
import OpenAPIClient

let portfolioUuid = 987 // UUID | 
let uuid = 987 // UUID | 

ApiAPI.apiV2PortfoliosRebalancesRetrieve(portfolioUuid: portfolioUuid, uuid: uuid) { (response, error) in
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
 **portfolioUuid** | [**UUID**](.md) |  | 
 **uuid** | [**UUID**](.md) |  | 

### Return type

[**Rebalance**](Rebalance.md)

### Authorization

[cookieAuth](../README.md#cookieAuth), [jwtAuth](../README.md#jwtAuth), [tokenAuth](../README.md#tokenAuth)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **apiV2PortfoliosRestrictionsRetrieve**
```swift
    open class func apiV2PortfoliosRestrictionsRetrieve(portfolioUuid: UUID, completion: @escaping (_ data: PortfolioTypeRestrictions?, _ error: Error?) -> Void)
```



Allow aggregate/group fields of the ModelView model or its related entities.    Query params should use dot notation.  Requires:     ListModelMixin (ListAPIView, ListCreateApiView)  Args:     * aggregatable_fields (dict): optional.         Keys: fields that allow aggregation (including related entities with \"__\" notation).         Values: django qs functions or aggregate_fns         Example:             aggregatable_fields = {                 'allocations__balance': [Sum, Avg],             }      * groupable_fields (list): optional. fields that allow grouping (including related entities with \"__\" notation).         Example:             groupable_fields = ['portfolio__portfolio_type']  Query Param Examples:     >>> ?group_by=portfolio.portfolio_type     >>> ?aggregate[Sum]=portfolio.allocations.balance     >>> ?group_by=valuation_date&aggregate[Sum]=portfolio.allocations.balance

### Example
```swift
// The following code samples are still beta. For any issue, please report via http://github.com/OpenAPITools/openapi-generator/issues/new
import OpenAPIClient

let portfolioUuid = 987 // UUID | 

ApiAPI.apiV2PortfoliosRestrictionsRetrieve(portfolioUuid: portfolioUuid) { (response, error) in
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
 **portfolioUuid** | [**UUID**](.md) |  | 

### Return type

[**PortfolioTypeRestrictions**](PortfolioTypeRestrictions.md)

### Authorization

[cookieAuth](../README.md#cookieAuth), [jwtAuth](../README.md#jwtAuth), [tokenAuth](../README.md#tokenAuth)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **apiV2PortfoliosRetrieve**
```swift
    open class func apiV2PortfoliosRetrieve(portfolioUuid: UUID, completion: @escaping (_ data: PortfolioDetail?, _ error: Error?) -> Void)
```



Allow aggregate/group fields of the ModelView model or its related entities.    Query params should use dot notation.  Requires:     ListModelMixin (ListAPIView, ListCreateApiView)  Args:     * aggregatable_fields (dict): optional.         Keys: fields that allow aggregation (including related entities with \"__\" notation).         Values: django qs functions or aggregate_fns         Example:             aggregatable_fields = {                 'allocations__balance': [Sum, Avg],             }      * groupable_fields (list): optional. fields that allow grouping (including related entities with \"__\" notation).         Example:             groupable_fields = ['portfolio__portfolio_type']  Query Param Examples:     >>> ?group_by=portfolio.portfolio_type     >>> ?aggregate[Sum]=portfolio.allocations.balance     >>> ?group_by=valuation_date&aggregate[Sum]=portfolio.allocations.balance

### Example
```swift
// The following code samples are still beta. For any issue, please report via http://github.com/OpenAPITools/openapi-generator/issues/new
import OpenAPIClient

let portfolioUuid = 987 // UUID | 

ApiAPI.apiV2PortfoliosRetrieve(portfolioUuid: portfolioUuid) { (response, error) in
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
 **portfolioUuid** | [**UUID**](.md) |  | 

### Return type

[**PortfolioDetail**](PortfolioDetail.md)

### Authorization

[cookieAuth](../README.md#cookieAuth), [jwtAuth](../README.md#jwtAuth), [tokenAuth](../README.md#tokenAuth)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **apiV2PortfoliosUpdate**
```swift
    open class func apiV2PortfoliosUpdate(portfolioUuid: UUID, portfolioUpdate: PortfolioUpdate, completion: @escaping (_ data: PortfolioUpdate?, _ error: Error?) -> Void)
```



Allow aggregate/group fields of the ModelView model or its related entities.    Query params should use dot notation.  Requires:     ListModelMixin (ListAPIView, ListCreateApiView)  Args:     * aggregatable_fields (dict): optional.         Keys: fields that allow aggregation (including related entities with \"__\" notation).         Values: django qs functions or aggregate_fns         Example:             aggregatable_fields = {                 'allocations__balance': [Sum, Avg],             }      * groupable_fields (list): optional. fields that allow grouping (including related entities with \"__\" notation).         Example:             groupable_fields = ['portfolio__portfolio_type']  Query Param Examples:     >>> ?group_by=portfolio.portfolio_type     >>> ?aggregate[Sum]=portfolio.allocations.balance     >>> ?group_by=valuation_date&aggregate[Sum]=portfolio.allocations.balance

### Example
```swift
// The following code samples are still beta. For any issue, please report via http://github.com/OpenAPITools/openapi-generator/issues/new
import OpenAPIClient

let portfolioUuid = 987 // UUID | 
let portfolioUpdate = PortfolioUpdate(uuid: 123, name: "name_example", portfolioType: "portfolioType_example", riskLevel: 123, timeHorizon: 123, status: Status2efEnum(), currency: "currency_example", created: Date(), activated: Date(), advisor: "advisor_example", adviceEngine: "adviceEngine_example", extraData: "TODO", client: "client_example") // PortfolioUpdate | 

ApiAPI.apiV2PortfoliosUpdate(portfolioUuid: portfolioUuid, portfolioUpdate: portfolioUpdate) { (response, error) in
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
 **portfolioUuid** | [**UUID**](.md) |  | 
 **portfolioUpdate** | [**PortfolioUpdate**](PortfolioUpdate.md) |  | 

### Return type

[**PortfolioUpdate**](PortfolioUpdate.md)

### Authorization

[cookieAuth](../README.md#cookieAuth), [jwtAuth](../README.md#jwtAuth), [tokenAuth](../README.md#tokenAuth)

### HTTP request headers

 - **Content-Type**: application/json, application/x-www-form-urlencoded, multipart/form-data
 - **Accept**: application/json

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **apiV2PortfoliosWithdrawalsCreate**
```swift
    open class func apiV2PortfoliosWithdrawalsCreate(portfolioUuid: UUID, investorWithdrawalCreate: InvestorWithdrawalCreate, completion: @escaping (_ data: InvestorWithdrawalCreate?, _ error: Error?) -> Void)
```



### Example
```swift
// The following code samples are still beta. For any issue, please report via http://github.com/OpenAPITools/openapi-generator/issues/new
import OpenAPIClient

let portfolioUuid = 987 // UUID | 
let investorWithdrawalCreate = InvestorWithdrawalCreate(uuid: 123, amount: 123, provider: "provider_example", status: Status14bEnum(), reason: "reason_example", completed: Date(), purpose: "purpose_example", withdrawalType: "withdrawalType_example", extraData: "TODO") // InvestorWithdrawalCreate | 

ApiAPI.apiV2PortfoliosWithdrawalsCreate(portfolioUuid: portfolioUuid, investorWithdrawalCreate: investorWithdrawalCreate) { (response, error) in
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
 **portfolioUuid** | [**UUID**](.md) |  | 
 **investorWithdrawalCreate** | [**InvestorWithdrawalCreate**](InvestorWithdrawalCreate.md) |  | 

### Return type

[**InvestorWithdrawalCreate**](InvestorWithdrawalCreate.md)

### Authorization

[cookieAuth](../README.md#cookieAuth), [jwtAuth](../README.md#jwtAuth), [tokenAuth](../README.md#tokenAuth)

### HTTP request headers

 - **Content-Type**: application/json, application/x-www-form-urlencoded, multipart/form-data
 - **Accept**: application/json

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **apiV2PortfoliosWithdrawalsDestroy**
```swift
    open class func apiV2PortfoliosWithdrawalsDestroy(portfolioUuid: UUID, uuid: UUID, completion: @escaping (_ data: Void?, _ error: Error?) -> Void)
```



### Example
```swift
// The following code samples are still beta. For any issue, please report via http://github.com/OpenAPITools/openapi-generator/issues/new
import OpenAPIClient

let portfolioUuid = 987 // UUID | 
let uuid = 987 // UUID | 

ApiAPI.apiV2PortfoliosWithdrawalsDestroy(portfolioUuid: portfolioUuid, uuid: uuid) { (response, error) in
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
 **portfolioUuid** | [**UUID**](.md) |  | 
 **uuid** | [**UUID**](.md) |  | 

### Return type

Void (empty response body)

### Authorization

[cookieAuth](../README.md#cookieAuth), [jwtAuth](../README.md#jwtAuth), [tokenAuth](../README.md#tokenAuth)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: Not defined

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **apiV2PortfoliosWithdrawalsList**
```swift
    open class func apiV2PortfoliosWithdrawalsList(portfolioUuid: UUID, limit: Int? = nil, offset: Int? = nil, status: [String]? = nil, completion: @escaping (_ data: PaginatedInvestorWithdrawalListList?, _ error: Error?) -> Void)
```



### Example
```swift
// The following code samples are still beta. For any issue, please report via http://github.com/OpenAPITools/openapi-generator/issues/new
import OpenAPIClient

let portfolioUuid = 987 // UUID | 
let limit = 987 // Int | Number of results to return per page. (optional)
let offset = 987 // Int | The initial index from which to return the results. (optional)
let status = ["status_example"] // [String] |  (optional)

ApiAPI.apiV2PortfoliosWithdrawalsList(portfolioUuid: portfolioUuid, limit: limit, offset: offset, status: status) { (response, error) in
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
 **portfolioUuid** | [**UUID**](.md) |  | 
 **limit** | **Int** | Number of results to return per page. | [optional] 
 **offset** | **Int** | The initial index from which to return the results. | [optional] 
 **status** | [**[String]**](String.md) |  | [optional] 

### Return type

[**PaginatedInvestorWithdrawalListList**](PaginatedInvestorWithdrawalListList.md)

### Authorization

[cookieAuth](../README.md#cookieAuth), [jwtAuth](../README.md#jwtAuth), [tokenAuth](../README.md#tokenAuth)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **apiV2PortfoliosWithdrawalsRetrieve**
```swift
    open class func apiV2PortfoliosWithdrawalsRetrieve(portfolioUuid: UUID, uuid: UUID, completion: @escaping (_ data: WithdrawalDetail?, _ error: Error?) -> Void)
```



### Example
```swift
// The following code samples are still beta. For any issue, please report via http://github.com/OpenAPITools/openapi-generator/issues/new
import OpenAPIClient

let portfolioUuid = 987 // UUID | 
let uuid = 987 // UUID | 

ApiAPI.apiV2PortfoliosWithdrawalsRetrieve(portfolioUuid: portfolioUuid, uuid: uuid) { (response, error) in
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
 **portfolioUuid** | [**UUID**](.md) |  | 
 **uuid** | [**UUID**](.md) |  | 

### Return type

[**WithdrawalDetail**](WithdrawalDetail.md)

### Authorization

[cookieAuth](../README.md#cookieAuth), [jwtAuth](../README.md#jwtAuth), [tokenAuth](../README.md#tokenAuth)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **apiV2RelationshipManagerAnalyticsAllocationsByAssetRetrieve**
```swift
    open class func apiV2RelationshipManagerAnalyticsAllocationsByAssetRetrieve(uuid: UUID, completion: @escaping (_ data: AllocationByAsset?, _ error: Error?) -> Void)
```



### Example
```swift
// The following code samples are still beta. For any issue, please report via http://github.com/OpenAPITools/openapi-generator/issues/new
import OpenAPIClient

let uuid = 987 // UUID | 

ApiAPI.apiV2RelationshipManagerAnalyticsAllocationsByAssetRetrieve(uuid: uuid) { (response, error) in
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
 **uuid** | [**UUID**](.md) |  | 

### Return type

[**AllocationByAsset**](AllocationByAsset.md)

### Authorization

[cookieAuth](../README.md#cookieAuth), [jwtAuth](../README.md#jwtAuth), [tokenAuth](../README.md#tokenAuth)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **apiV2RelationshipManagerAnalyticsAssetConcentrationRiskRetrieve**
```swift
    open class func apiV2RelationshipManagerAnalyticsAssetConcentrationRiskRetrieve(uuid: UUID, completion: @escaping (_ data: AssetConcentrationRisk?, _ error: Error?) -> Void)
```



### Example
```swift
// The following code samples are still beta. For any issue, please report via http://github.com/OpenAPITools/openapi-generator/issues/new
import OpenAPIClient

let uuid = 987 // UUID | 

ApiAPI.apiV2RelationshipManagerAnalyticsAssetConcentrationRiskRetrieve(uuid: uuid) { (response, error) in
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
 **uuid** | [**UUID**](.md) |  | 

### Return type

[**AssetConcentrationRisk**](AssetConcentrationRisk.md)

### Authorization

[cookieAuth](../README.md#cookieAuth), [jwtAuth](../README.md#jwtAuth), [tokenAuth](../README.md#tokenAuth)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **apiV2RelationshipManagerAnalyticsAumEvolutionRetrieve**
```swift
    open class func apiV2RelationshipManagerAnalyticsAumEvolutionRetrieve(uuid: UUID, completion: @escaping (_ data: AUMEvoluation?, _ error: Error?) -> Void)
```



### Example
```swift
// The following code samples are still beta. For any issue, please report via http://github.com/OpenAPITools/openapi-generator/issues/new
import OpenAPIClient

let uuid = 987 // UUID | 

ApiAPI.apiV2RelationshipManagerAnalyticsAumEvolutionRetrieve(uuid: uuid) { (response, error) in
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
 **uuid** | [**UUID**](.md) |  | 

### Return type

[**AUMEvoluation**](AUMEvoluation.md)

### Authorization

[cookieAuth](../README.md#cookieAuth), [jwtAuth](../README.md#jwtAuth), [tokenAuth](../README.md#tokenAuth)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **apiV2RelationshipManagerAnalyticsAumPortfolioRiskRetrieve**
```swift
    open class func apiV2RelationshipManagerAnalyticsAumPortfolioRiskRetrieve(uuid: UUID, completion: @escaping (_ data: AUMPortfolioRisk?, _ error: Error?) -> Void)
```



### Example
```swift
// The following code samples are still beta. For any issue, please report via http://github.com/OpenAPITools/openapi-generator/issues/new
import OpenAPIClient

let uuid = 987 // UUID | 

ApiAPI.apiV2RelationshipManagerAnalyticsAumPortfolioRiskRetrieve(uuid: uuid) { (response, error) in
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
 **uuid** | [**UUID**](.md) |  | 

### Return type

[**AUMPortfolioRisk**](AUMPortfolioRisk.md)

### Authorization

[cookieAuth](../README.md#cookieAuth), [jwtAuth](../README.md#jwtAuth), [tokenAuth](../README.md#tokenAuth)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **apiV2RelationshipManagerAnalyticsAumRetrieve**
```swift
    open class func apiV2RelationshipManagerAnalyticsAumRetrieve(uuid: UUID, completion: @escaping (_ data: RelationshipManager?, _ error: Error?) -> Void)
```



### Example
```swift
// The following code samples are still beta. For any issue, please report via http://github.com/OpenAPITools/openapi-generator/issues/new
import OpenAPIClient

let uuid = 987 // UUID | 

ApiAPI.apiV2RelationshipManagerAnalyticsAumRetrieve(uuid: uuid) { (response, error) in
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
 **uuid** | [**UUID**](.md) |  | 

### Return type

[**RelationshipManager**](RelationshipManager.md)

### Authorization

[cookieAuth](../README.md#cookieAuth), [jwtAuth](../README.md#jwtAuth), [tokenAuth](../README.md#tokenAuth)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **apiV2RelationshipManagerAnalyticsClientByRiskRetrieve**
```swift
    open class func apiV2RelationshipManagerAnalyticsClientByRiskRetrieve(uuid: UUID, completion: @escaping (_ data: RelationshipManager?, _ error: Error?) -> Void)
```



### Example
```swift
// The following code samples are still beta. For any issue, please report via http://github.com/OpenAPITools/openapi-generator/issues/new
import OpenAPIClient

let uuid = 987 // UUID | 

ApiAPI.apiV2RelationshipManagerAnalyticsClientByRiskRetrieve(uuid: uuid) { (response, error) in
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
 **uuid** | [**UUID**](.md) |  | 

### Return type

[**RelationshipManager**](RelationshipManager.md)

### Authorization

[cookieAuth](../README.md#cookieAuth), [jwtAuth](../README.md#jwtAuth), [tokenAuth](../README.md#tokenAuth)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **apiV2RelationshipManagerAnalyticsClientByStatusRetrieve**
```swift
    open class func apiV2RelationshipManagerAnalyticsClientByStatusRetrieve(uuid: UUID, completion: @escaping (_ data: RelationshipManager?, _ error: Error?) -> Void)
```



### Example
```swift
// The following code samples are still beta. For any issue, please report via http://github.com/OpenAPITools/openapi-generator/issues/new
import OpenAPIClient

let uuid = 987 // UUID | 

ApiAPI.apiV2RelationshipManagerAnalyticsClientByStatusRetrieve(uuid: uuid) { (response, error) in
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
 **uuid** | [**UUID**](.md) |  | 

### Return type

[**RelationshipManager**](RelationshipManager.md)

### Authorization

[cookieAuth](../README.md#cookieAuth), [jwtAuth](../README.md#jwtAuth), [tokenAuth](../README.md#tokenAuth)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **apiV2RelationshipManagerAnalyticsClientRankingRetrieve**
```swift
    open class func apiV2RelationshipManagerAnalyticsClientRankingRetrieve(uuid: UUID, completion: @escaping (_ data: ClientRanking?, _ error: Error?) -> Void)
```



### Example
```swift
// The following code samples are still beta. For any issue, please report via http://github.com/OpenAPITools/openapi-generator/issues/new
import OpenAPIClient

let uuid = 987 // UUID | 

ApiAPI.apiV2RelationshipManagerAnalyticsClientRankingRetrieve(uuid: uuid) { (response, error) in
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
 **uuid** | [**UUID**](.md) |  | 

### Return type

[**ClientRanking**](ClientRanking.md)

### Authorization

[cookieAuth](../README.md#cookieAuth), [jwtAuth](../README.md#jwtAuth), [tokenAuth](../README.md#tokenAuth)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **apiV2RelationshipManagerAnalyticsInflowsOutflowsRetrieve**
```swift
    open class func apiV2RelationshipManagerAnalyticsInflowsOutflowsRetrieve(uuid: UUID, completion: @escaping (_ data: RelationshipManager?, _ error: Error?) -> Void)
```



### Example
```swift
// The following code samples are still beta. For any issue, please report via http://github.com/OpenAPITools/openapi-generator/issues/new
import OpenAPIClient

let uuid = 987 // UUID | 

ApiAPI.apiV2RelationshipManagerAnalyticsInflowsOutflowsRetrieve(uuid: uuid) { (response, error) in
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
 **uuid** | [**UUID**](.md) |  | 

### Return type

[**RelationshipManager**](RelationshipManager.md)

### Authorization

[cookieAuth](../README.md#cookieAuth), [jwtAuth](../README.md#jwtAuth), [tokenAuth](../README.md#tokenAuth)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **apiV2RelationshipManagerAnalyticsPortfolioRiskPerformanceRetrieve**
```swift
    open class func apiV2RelationshipManagerAnalyticsPortfolioRiskPerformanceRetrieve(uuid: UUID, completion: @escaping (_ data: RelationshipManager?, _ error: Error?) -> Void)
```



### Example
```swift
// The following code samples are still beta. For any issue, please report via http://github.com/OpenAPITools/openapi-generator/issues/new
import OpenAPIClient

let uuid = 987 // UUID | 

ApiAPI.apiV2RelationshipManagerAnalyticsPortfolioRiskPerformanceRetrieve(uuid: uuid) { (response, error) in
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
 **uuid** | [**UUID**](.md) |  | 

### Return type

[**RelationshipManager**](RelationshipManager.md)

### Authorization

[cookieAuth](../README.md#cookieAuth), [jwtAuth](../README.md#jwtAuth), [tokenAuth](../README.md#tokenAuth)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **apiV2RelationshipManagerAnalyticsTotalActiveClientsRetrieve**
```swift
    open class func apiV2RelationshipManagerAnalyticsTotalActiveClientsRetrieve(uuid: UUID, completion: @escaping (_ data: RelationshipManager?, _ error: Error?) -> Void)
```



### Example
```swift
// The following code samples are still beta. For any issue, please report via http://github.com/OpenAPITools/openapi-generator/issues/new
import OpenAPIClient

let uuid = 987 // UUID | 

ApiAPI.apiV2RelationshipManagerAnalyticsTotalActiveClientsRetrieve(uuid: uuid) { (response, error) in
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
 **uuid** | [**UUID**](.md) |  | 

### Return type

[**RelationshipManager**](RelationshipManager.md)

### Authorization

[cookieAuth](../README.md#cookieAuth), [jwtAuth](../README.md#jwtAuth), [tokenAuth](../README.md#tokenAuth)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **apiV2RelationshipManagerMeRetrieve**
```swift
    open class func apiV2RelationshipManagerMeRetrieve(completion: @escaping (_ data: RelationshipManager?, _ error: Error?) -> Void)
```



### Example
```swift
// The following code samples are still beta. For any issue, please report via http://github.com/OpenAPITools/openapi-generator/issues/new
import OpenAPIClient


ApiAPI.apiV2RelationshipManagerMeRetrieve() { (response, error) in
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
This endpoint does not need any parameter.

### Return type

[**RelationshipManager**](RelationshipManager.md)

### Authorization

[cookieAuth](../README.md#cookieAuth), [jwtAuth](../README.md#jwtAuth), [tokenAuth](../README.md#tokenAuth)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **apiV2RelationshipManagerRetrieve**
```swift
    open class func apiV2RelationshipManagerRetrieve(uuid: UUID, completion: @escaping (_ data: RelationshipManager?, _ error: Error?) -> Void)
```



### Example
```swift
// The following code samples are still beta. For any issue, please report via http://github.com/OpenAPITools/openapi-generator/issues/new
import OpenAPIClient

let uuid = 987 // UUID | 

ApiAPI.apiV2RelationshipManagerRetrieve(uuid: uuid) { (response, error) in
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
 **uuid** | [**UUID**](.md) |  | 

### Return type

[**RelationshipManager**](RelationshipManager.md)

### Authorization

[cookieAuth](../README.md#cookieAuth), [jwtAuth](../README.md#jwtAuth), [tokenAuth](../README.md#tokenAuth)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **apiV2ReportStatementsList**
```swift
    open class func apiV2ReportStatementsList(clientUuid: UUID, format: Format_apiV2ReportStatementsList? = nil, limit: Int? = nil, offset: Int? = nil, completion: @escaping (_ data: PaginatedStatementList?, _ error: Error?) -> Void)
```



This mixin implements binary responses. It supports PDF and Base64. It can be adapted to any django View that implements the retrieve method

### Example
```swift
// The following code samples are still beta. For any issue, please report via http://github.com/OpenAPITools/openapi-generator/issues/new
import OpenAPIClient

let clientUuid = 987 // UUID | 
let format = "format_example" // String |  (optional)
let limit = 987 // Int | Number of results to return per page. (optional)
let offset = 987 // Int | The initial index from which to return the results. (optional)

ApiAPI.apiV2ReportStatementsList(clientUuid: clientUuid, format: format, limit: limit, offset: offset) { (response, error) in
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
 **format** | **String** |  | [optional] 
 **limit** | **Int** | Number of results to return per page. | [optional] 
 **offset** | **Int** | The initial index from which to return the results. | [optional] 

### Return type

[**PaginatedStatementList**](PaginatedStatementList.md)

### Authorization

[cookieAuth](../README.md#cookieAuth), [jwtAuth](../README.md#jwtAuth), [tokenAuth](../README.md#tokenAuth)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json, application/pdf, text/plain

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **apiV2ReportStatementsRetrieve**
```swift
    open class func apiV2ReportStatementsRetrieve(clientUuid: UUID, uuid: UUID, format: Format_apiV2ReportStatementsRetrieve? = nil, completion: @escaping (_ data: Statement?, _ error: Error?) -> Void)
```



This mixin implements binary responses. It supports PDF and Base64. It can be adapted to any django View that implements the retrieve method

### Example
```swift
// The following code samples are still beta. For any issue, please report via http://github.com/OpenAPITools/openapi-generator/issues/new
import OpenAPIClient

let clientUuid = 987 // UUID | 
let uuid = 987 // UUID | 
let format = "format_example" // String |  (optional)

ApiAPI.apiV2ReportStatementsRetrieve(clientUuid: clientUuid, uuid: uuid, format: format) { (response, error) in
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
 **uuid** | [**UUID**](.md) |  | 
 **format** | **String** |  | [optional] 

### Return type

[**Statement**](Statement.md)

### Authorization

[cookieAuth](../README.md#cookieAuth), [jwtAuth](../README.md#jwtAuth), [tokenAuth](../README.md#tokenAuth)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json, application/pdf, text/plain

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **apiV2ReportTaxReportList**
```swift
    open class func apiV2ReportTaxReportList(clientUuid: UUID, format: Format_apiV2ReportTaxReportList? = nil, limit: Int? = nil, offset: Int? = nil, completion: @escaping (_ data: PaginatedTaxReportList?, _ error: Error?) -> Void)
```



This mixin implements binary responses. It supports PDF and Base64. It can be adapted to any django View that implements the retrieve method

### Example
```swift
// The following code samples are still beta. For any issue, please report via http://github.com/OpenAPITools/openapi-generator/issues/new
import OpenAPIClient

let clientUuid = 987 // UUID | 
let format = "format_example" // String |  (optional)
let limit = 987 // Int | Number of results to return per page. (optional)
let offset = 987 // Int | The initial index from which to return the results. (optional)

ApiAPI.apiV2ReportTaxReportList(clientUuid: clientUuid, format: format, limit: limit, offset: offset) { (response, error) in
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
 **format** | **String** |  | [optional] 
 **limit** | **Int** | Number of results to return per page. | [optional] 
 **offset** | **Int** | The initial index from which to return the results. | [optional] 

### Return type

[**PaginatedTaxReportList**](PaginatedTaxReportList.md)

### Authorization

[cookieAuth](../README.md#cookieAuth), [jwtAuth](../README.md#jwtAuth), [tokenAuth](../README.md#tokenAuth)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json, application/pdf, text/plain

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **apiV2ReportTaxReportRetrieve**
```swift
    open class func apiV2ReportTaxReportRetrieve(clientUuid: UUID, uuid: UUID, format: Format_apiV2ReportTaxReportRetrieve? = nil, completion: @escaping (_ data: TaxReport?, _ error: Error?) -> Void)
```



This mixin implements binary responses. It supports PDF and Base64. It can be adapted to any django View that implements the retrieve method

### Example
```swift
// The following code samples are still beta. For any issue, please report via http://github.com/OpenAPITools/openapi-generator/issues/new
import OpenAPIClient

let clientUuid = 987 // UUID | 
let uuid = 987 // UUID | 
let format = "format_example" // String |  (optional)

ApiAPI.apiV2ReportTaxReportRetrieve(clientUuid: clientUuid, uuid: uuid, format: format) { (response, error) in
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
 **uuid** | [**UUID**](.md) |  | 
 **format** | **String** |  | [optional] 

### Return type

[**TaxReport**](TaxReport.md)

### Authorization

[cookieAuth](../README.md#cookieAuth), [jwtAuth](../README.md#jwtAuth), [tokenAuth](../README.md#tokenAuth)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json, application/pdf, text/plain

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **apiV2RiskQuestionsList**
```swift
    open class func apiV2RiskQuestionsList(limit: Int? = nil, offset: Int? = nil, completion: @escaping (_ data: PaginatedQuestionList?, _ error: Error?) -> Void)
```



### Example
```swift
// The following code samples are still beta. For any issue, please report via http://github.com/OpenAPITools/openapi-generator/issues/new
import OpenAPIClient

let limit = 987 // Int | Number of results to return per page. (optional)
let offset = 987 // Int | The initial index from which to return the results. (optional)

ApiAPI.apiV2RiskQuestionsList(limit: limit, offset: offset) { (response, error) in
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
 **limit** | **Int** | Number of results to return per page. | [optional] 
 **offset** | **Int** | The initial index from which to return the results. | [optional] 

### Return type

[**PaginatedQuestionList**](PaginatedQuestionList.md)

### Authorization

[cookieAuth](../README.md#cookieAuth), [jwtAuth](../README.md#jwtAuth), [tokenAuth](../README.md#tokenAuth)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **apiV2VerificationsVerifierWebhookCreate**
```swift
    open class func apiV2VerificationsVerifierWebhookCreate(action: String, verifier: String, completion: @escaping (_ data: Void?, _ error: Error?) -> Void)
```



### Example
```swift
// The following code samples are still beta. For any issue, please report via http://github.com/OpenAPITools/openapi-generator/issues/new
import OpenAPIClient

let action = "action_example" // String | 
let verifier = "verifier_example" // String | 

ApiAPI.apiV2VerificationsVerifierWebhookCreate(action: action, verifier: verifier) { (response, error) in
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
 **action** | **String** |  | 
 **verifier** | **String** |  | 

### Return type

Void (empty response body)

### Authorization

[cookieAuth](../README.md#cookieAuth), [jwtAuth](../README.md#jwtAuth), [tokenAuth](../README.md#tokenAuth)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: Not defined

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **apiV2WebsocketAuthenticationTicketCreate**
```swift
    open class func apiV2WebsocketAuthenticationTicketCreate(websocketAuthentication: WebsocketAuthentication, completion: @escaping (_ data: AuthenticationResponse?, _ error: Error?) -> Void)
```



### Example
```swift
// The following code samples are still beta. For any issue, please report via http://github.com/OpenAPITools/openapi-generator/issues/new
import OpenAPIClient

let websocketAuthentication = WebsocketAuthentication(ticket: "ticket_example") // WebsocketAuthentication | 

ApiAPI.apiV2WebsocketAuthenticationTicketCreate(websocketAuthentication: websocketAuthentication) { (response, error) in
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
 **websocketAuthentication** | [**WebsocketAuthentication**](WebsocketAuthentication.md) |  | 

### Return type

[**AuthenticationResponse**](AuthenticationResponse.md)

### Authorization

[cookieAuth](../README.md#cookieAuth), [jwtAuth](../README.md#jwtAuth), [tokenAuth](../README.md#tokenAuth)

### HTTP request headers

 - **Content-Type**: application/json, application/x-www-form-urlencoded, multipart/form-data
 - **Accept**: application/json

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **apiV2WebsocketAuthorizeAssetCreate**
```swift
    open class func apiV2WebsocketAuthorizeAssetCreate(websocketAuthentication: WebsocketAuthentication, completion: @escaping (_ data: ModelResponse?, _ error: Error?) -> Void)
```



### Example
```swift
// The following code samples are still beta. For any issue, please report via http://github.com/OpenAPITools/openapi-generator/issues/new
import OpenAPIClient

let websocketAuthentication = WebsocketAuthentication(ticket: "ticket_example") // WebsocketAuthentication | 

ApiAPI.apiV2WebsocketAuthorizeAssetCreate(websocketAuthentication: websocketAuthentication) { (response, error) in
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
 **websocketAuthentication** | [**WebsocketAuthentication**](WebsocketAuthentication.md) |  | 

### Return type

[**ModelResponse**](ModelResponse.md)

### Authorization

[cookieAuth](../README.md#cookieAuth), [jwtAuth](../README.md#jwtAuth), [tokenAuth](../README.md#tokenAuth)

### HTTP request headers

 - **Content-Type**: application/json, application/x-www-form-urlencoded, multipart/form-data
 - **Accept**: application/json

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **apiV2WebsocketAuthorizeCreate**
```swift
    open class func apiV2WebsocketAuthorizeCreate(websocketAuthentication: WebsocketAuthentication, completion: @escaping (_ data: ModelResponse?, _ error: Error?) -> Void)
```



### Example
```swift
// The following code samples are still beta. For any issue, please report via http://github.com/OpenAPITools/openapi-generator/issues/new
import OpenAPIClient

let websocketAuthentication = WebsocketAuthentication(ticket: "ticket_example") // WebsocketAuthentication | 

ApiAPI.apiV2WebsocketAuthorizeCreate(websocketAuthentication: websocketAuthentication) { (response, error) in
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
 **websocketAuthentication** | [**WebsocketAuthentication**](WebsocketAuthentication.md) |  | 

### Return type

[**ModelResponse**](ModelResponse.md)

### Authorization

[cookieAuth](../README.md#cookieAuth), [jwtAuth](../README.md#jwtAuth), [tokenAuth](../README.md#tokenAuth)

### HTTP request headers

 - **Content-Type**: application/json, application/x-www-form-urlencoded, multipart/form-data
 - **Accept**: application/json

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **apiV2WebsocketAuthorizePortfolioCreate**
```swift
    open class func apiV2WebsocketAuthorizePortfolioCreate(websocketAuthentication: WebsocketAuthentication, completion: @escaping (_ data: ModelResponse?, _ error: Error?) -> Void)
```



### Example
```swift
// The following code samples are still beta. For any issue, please report via http://github.com/OpenAPITools/openapi-generator/issues/new
import OpenAPIClient

let websocketAuthentication = WebsocketAuthentication(ticket: "ticket_example") // WebsocketAuthentication | 

ApiAPI.apiV2WebsocketAuthorizePortfolioCreate(websocketAuthentication: websocketAuthentication) { (response, error) in
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
 **websocketAuthentication** | [**WebsocketAuthentication**](WebsocketAuthentication.md) |  | 

### Return type

[**ModelResponse**](ModelResponse.md)

### Authorization

[cookieAuth](../README.md#cookieAuth), [jwtAuth](../README.md#jwtAuth), [tokenAuth](../README.md#tokenAuth)

### HTTP request headers

 - **Content-Type**: application/json, application/x-www-form-urlencoded, multipart/form-data
 - **Accept**: application/json

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **apiV2WebsocketOnSubscribeCreate**
```swift
    open class func apiV2WebsocketOnSubscribeCreate(subscribe: Subscribe, completion: @escaping (_ data: Subscribe?, _ error: Error?) -> Void)
```



### Example
```swift
// The following code samples are still beta. For any issue, please report via http://github.com/OpenAPITools/openapi-generator/issues/new
import OpenAPIClient

let subscribe = Subscribe(id: "id_example", subscription: "subscription_example") // Subscribe | 

ApiAPI.apiV2WebsocketOnSubscribeCreate(subscribe: subscribe) { (response, error) in
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
 **subscribe** | [**Subscribe**](Subscribe.md) |  | 

### Return type

[**Subscribe**](Subscribe.md)

### Authorization

[cookieAuth](../README.md#cookieAuth), [jwtAuth](../README.md#jwtAuth), [tokenAuth](../README.md#tokenAuth)

### HTTP request headers

 - **Content-Type**: application/json, application/x-www-form-urlencoded, multipart/form-data
 - **Accept**: application/json

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **apiV2WebsocketOnUnsubscribeCreate**
```swift
    open class func apiV2WebsocketOnUnsubscribeCreate(unsubscribe: Unsubscribe, completion: @escaping (_ data: Unsubscribe?, _ error: Error?) -> Void)
```



### Example
```swift
// The following code samples are still beta. For any issue, please report via http://github.com/OpenAPITools/openapi-generator/issues/new
import OpenAPIClient

let unsubscribe = Unsubscribe(id: "id_example", subscription: "subscription_example") // Unsubscribe | 

ApiAPI.apiV2WebsocketOnUnsubscribeCreate(unsubscribe: unsubscribe) { (response, error) in
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
 **unsubscribe** | [**Unsubscribe**](Unsubscribe.md) |  | 

### Return type

[**Unsubscribe**](Unsubscribe.md)

### Authorization

[cookieAuth](../README.md#cookieAuth), [jwtAuth](../README.md#jwtAuth), [tokenAuth](../README.md#tokenAuth)

### HTTP request headers

 - **Content-Type**: application/json, application/x-www-form-urlencoded, multipart/form-data
 - **Accept**: application/json

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

