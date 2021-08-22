# org.openapitools.client - Kotlin client library for Nucoro API v2

## Requires

* Kotlin 1.4.30
* Gradle 6.8.3

## Build

First, create the gradle wrapper script:

```
gradle wrapper
```

Then, run:

```
./gradlew check assemble
```

This runs all tests and packages the library.

## Features/Implementation Notes

* Supports JSON inputs/outputs, File inputs, and Form inputs.
* Supports collection formats for query parameters: csv, tsv, ssv, pipes.
* Some Kotlin and Java types are fully qualified to avoid conflicts with types defined in OpenAPI definitions.
* Implementation of ApiClient is intended to reduce method counts, specifically to benefit Android targets.

<a name="documentation-for-api-endpoints"></a>
## Documentation for API Endpoints

All URIs are relative to *http://localhost*

Class | Method | HTTP request | Description
------------ | ------------- | ------------- | -------------
*AddressApi* | [**clientAddressCreate**](docs/AddressApi.md#clientaddresscreate) | **POST** /api/v2/clients/{client_uuid}/addresses/ | 
*AddressApi* | [**clientAddressDelete**](docs/AddressApi.md#clientaddressdelete) | **DELETE** /api/v2/clients/{client_uuid}/addresses/{address_uuid}/ | 
*AddressApi* | [**clientAddressPartialUpdate**](docs/AddressApi.md#clientaddresspartialupdate) | **PATCH** /api/v2/clients/{client_uuid}/addresses/{address_uuid}/ | 
*AddressApi* | [**clientAddressRetrieve**](docs/AddressApi.md#clientaddressretrieve) | **GET** /api/v2/clients/{client_uuid}/addresses/{address_uuid}/ | 
*AddressApi* | [**clientAddressUpdate**](docs/AddressApi.md#clientaddressupdate) | **PUT** /api/v2/clients/{client_uuid}/addresses/{address_uuid}/ | 
*AddressApi* | [**clientAddressesList**](docs/AddressApi.md#clientaddresseslist) | **GET** /api/v2/clients/{client_uuid}/addresses/ | 
*ApiApi* | [**apiSchemaRetrieve**](docs/ApiApi.md#apischemaretrieve) | **GET** /api/schema/ | 
*ApiApi* | [**apiV2AdviceEnginesEtsCategoriesList**](docs/ApiApi.md#apiv2adviceenginesetscategorieslist) | **GET** /api/v2/advice-engines/ets/categories/ | 
*ApiApi* | [**apiV2AdviceEnginesEtsCoreCategoryGroupsList**](docs/ApiApi.md#apiv2adviceenginesetscorecategorygroupslist) | **GET** /api/v2/advice-engines/ets/core-category-groups/ | 
*ApiApi* | [**apiV2AdviceEnginesEtsForecastCreate**](docs/ApiApi.md#apiv2adviceenginesetsforecastcreate) | **POST** /api/v2/advice-engines/ets/forecast/ | 
*ApiApi* | [**apiV2AdviceEnginesEtsPresetCategoryGroupsList**](docs/ApiApi.md#apiv2adviceenginesetspresetcategorygroupslist) | **GET** /api/v2/advice-engines/ets/preset-category-groups/ | 
*ApiApi* | [**apiV2AdviceEnginesModelPortfolioForecastCreate**](docs/ApiApi.md#apiv2adviceenginesmodelportfolioforecastcreate) | **POST** /api/v2/advice-engines/model-portfolio/forecast/ | 
*ApiApi* | [**apiV2AdviceEnginesModelPortfolioModelPortfoliosList**](docs/ApiApi.md#apiv2adviceenginesmodelportfoliomodelportfolioslist) | **GET** /api/v2/advice-engines/model-portfolio/model-portfolios/ | 
*ApiApi* | [**apiV2AdviceEnginesModelPortfolioModelPortfoliosRetrieve**](docs/ApiApi.md#apiv2adviceenginesmodelportfoliomodelportfoliosretrieve) | **GET** /api/v2/advice-engines/model-portfolio/model-portfolios/{uuid}/ | 
*ApiApi* | [**apiV2AssetsCategoriesList**](docs/ApiApi.md#apiv2assetscategorieslist) | **GET** /api/v2/assets/categories/ | 
*ApiApi* | [**apiV2AssetsIntradayPricesLatestRetrieve**](docs/ApiApi.md#apiv2assetsintradaypriceslatestretrieve) | **GET** /api/v2/assets/{asset_identifier}/intraday-prices/latest/ | 
*ApiApi* | [**apiV2AssetsIntradayPricesList**](docs/ApiApi.md#apiv2assetsintradaypriceslist) | **GET** /api/v2/assets/{asset_identifier}/intraday-prices/ | 
*ApiApi* | [**apiV2AssetsList**](docs/ApiApi.md#apiv2assetslist) | **GET** /api/v2/assets/ | 
*ApiApi* | [**apiV2AssetsPerformanceList**](docs/ApiApi.md#apiv2assetsperformancelist) | **GET** /api/v2/assets/{asset_identifier}/performance/ | 
*ApiApi* | [**apiV2AssetsPricesLatestRetrieve**](docs/ApiApi.md#apiv2assetspriceslatestretrieve) | **GET** /api/v2/assets/{asset_identifier}/prices/latest/ | 
*ApiApi* | [**apiV2AssetsPricesList**](docs/ApiApi.md#apiv2assetspriceslist) | **GET** /api/v2/assets/{asset_identifier}/prices/ | 
*ApiApi* | [**apiV2AssetsRetrieve**](docs/ApiApi.md#apiv2assetsretrieve) | **GET** /api/v2/assets/{asset_identifier}/ | 
*ApiApi* | [**apiV2BillingInvoicesList**](docs/ApiApi.md#apiv2billinginvoiceslist) | **GET** /api/v2/billing/invoices/ | 
*ApiApi* | [**apiV2BillingInvoicesRetrieve**](docs/ApiApi.md#apiv2billinginvoicesretrieve) | **GET** /api/v2/billing/invoices/{uuid}/ | 
*ApiApi* | [**apiV2BrokerOrdersCreate**](docs/ApiApi.md#apiv2brokerorderscreate) | **POST** /api/v2/broker/orders/ | 
*ApiApi* | [**apiV2BrokerOrdersDestroy**](docs/ApiApi.md#apiv2brokerordersdestroy) | **DELETE** /api/v2/broker/orders/{uuid}/ | 
*ApiApi* | [**apiV2BrokerOrdersList**](docs/ApiApi.md#apiv2brokerorderslist) | **GET** /api/v2/broker/orders/ | 
*ApiApi* | [**apiV2BrokerOrdersRetrieve**](docs/ApiApi.md#apiv2brokerordersretrieve) | **GET** /api/v2/broker/orders/{uuid}/ | 
*ApiApi* | [**apiV2ClientsActivitiesList**](docs/ApiApi.md#apiv2clientsactivitieslist) | **GET** /api/v2/clients/{client_uuid}/activities/ | 
*ApiApi* | [**apiV2ClientsActivitiesRetrieve**](docs/ApiApi.md#apiv2clientsactivitiesretrieve) | **GET** /api/v2/clients/{client_uuid}/activities/{uuid}/ | 
*ApiApi* | [**apiV2ClientsAdviceEnginesList**](docs/ApiApi.md#apiv2clientsadviceengineslist) | **GET** /api/v2/clients/{client_uuid}/advice-engines/ | 
*ApiApi* | [**apiV2ClientsAdviceEnginesRetrieve**](docs/ApiApi.md#apiv2clientsadviceenginesretrieve) | **GET** /api/v2/clients/{client_uuid}/advice-engines/{uuid}/ | 
*ApiApi* | [**apiV2ClientsBillingFeesCreate**](docs/ApiApi.md#apiv2clientsbillingfeescreate) | **POST** /api/v2/clients/{client_uuid}/billing/fees/ | 
*ApiApi* | [**apiV2ClientsBillingFeesDestroy**](docs/ApiApi.md#apiv2clientsbillingfeesdestroy) | **DELETE** /api/v2/clients/{client_uuid}/billing/fees/{investor_fee_uuid}/ | 
*ApiApi* | [**apiV2ClientsBillingFeesList**](docs/ApiApi.md#apiv2clientsbillingfeeslist) | **GET** /api/v2/clients/{client_uuid}/billing/fees/ | 
*ApiApi* | [**apiV2ClientsBillingFeesPartialUpdate**](docs/ApiApi.md#apiv2clientsbillingfeespartialupdate) | **PATCH** /api/v2/clients/{client_uuid}/billing/fees/{investor_fee_uuid}/ | 
*ApiApi* | [**apiV2ClientsBillingFeesRetrieve**](docs/ApiApi.md#apiv2clientsbillingfeesretrieve) | **GET** /api/v2/clients/{client_uuid}/billing/fees/{investor_fee_uuid}/ | 
*ApiApi* | [**apiV2ClientsBillingFeesUpdate**](docs/ApiApi.md#apiv2clientsbillingfeesupdate) | **PUT** /api/v2/clients/{client_uuid}/billing/fees/{investor_fee_uuid}/ | 
*ApiApi* | [**apiV2ClientsBillingInvoicesList**](docs/ApiApi.md#apiv2clientsbillinginvoiceslist) | **GET** /api/v2/clients/{client_uuid}/billing/invoices/ | 
*ApiApi* | [**apiV2ClientsBillingInvoicesRetrieve**](docs/ApiApi.md#apiv2clientsbillinginvoicesretrieve) | **GET** /api/v2/clients/{client_uuid}/billing/invoices/{uuid}/ | 
*ApiApi* | [**apiV2ClientsDocumentsCreate**](docs/ApiApi.md#apiv2clientsdocumentscreate) | **POST** /api/v2/clients/{client_uuid}/documents/ | 
*ApiApi* | [**apiV2ClientsDocumentsDestroy**](docs/ApiApi.md#apiv2clientsdocumentsdestroy) | **DELETE** /api/v2/clients/{client_uuid}/documents/{uuid}/ | 
*ApiApi* | [**apiV2ClientsDocumentsList**](docs/ApiApi.md#apiv2clientsdocumentslist) | **GET** /api/v2/clients/{client_uuid}/documents/ | 
*ApiApi* | [**apiV2ClientsDocumentsRetrieve**](docs/ApiApi.md#apiv2clientsdocumentsretrieve) | **GET** /api/v2/clients/{client_uuid}/documents/{uuid}/ | 
*ApiApi* | [**apiV2ClientsMeVerifyEmailCreate**](docs/ApiApi.md#apiv2clientsmeverifyemailcreate) | **POST** /api/v2/clients/me/verify/email/ | 
*ApiApi* | [**apiV2ClientsNationalDocumentsList**](docs/ApiApi.md#apiv2clientsnationaldocumentslist) | **GET** /api/v2/clients/national_documents/ | 
*ApiApi* | [**apiV2ClientsReferralRetrieve**](docs/ApiApi.md#apiv2clientsreferralretrieve) | **GET** /api/v2/clients/referral/{referral_code}/ | 
*ApiApi* | [**apiV2ClientsReportStatementsList**](docs/ApiApi.md#apiv2clientsreportstatementslist) | **GET** /api/v2/clients/{client_uuid}/report/statements/ | 
*ApiApi* | [**apiV2ClientsReportStatementsRetrieve**](docs/ApiApi.md#apiv2clientsreportstatementsretrieve) | **GET** /api/v2/clients/{client_uuid}/report/statements/{uuid}/ | 
*ApiApi* | [**apiV2ClientsReportTaxReportsList**](docs/ApiApi.md#apiv2clientsreporttaxreportslist) | **GET** /api/v2/clients/{client_uuid}/report/tax-reports/ | 
*ApiApi* | [**apiV2ClientsReportTaxReportsRetrieve**](docs/ApiApi.md#apiv2clientsreporttaxreportsretrieve) | **GET** /api/v2/clients/{client_uuid}/report/tax-reports/{uuid}/ | 
*ApiApi* | [**apiV2ClientsVerifyEmailUpdate**](docs/ApiApi.md#apiv2clientsverifyemailupdate) | **PUT** /api/v2/clients/{uuid}/verify/email/ | 
*ApiApi* | [**apiV2ClientsWatchlistsCreate**](docs/ApiApi.md#apiv2clientswatchlistscreate) | **POST** /api/v2/clients/{client_uuid}/watchlists/ | 
*ApiApi* | [**apiV2ClientsWatchlistsDestroy**](docs/ApiApi.md#apiv2clientswatchlistsdestroy) | **DELETE** /api/v2/clients/{client_uuid}/watchlists/{watchlist_uuid}/ | 
*ApiApi* | [**apiV2ClientsWatchlistsList**](docs/ApiApi.md#apiv2clientswatchlistslist) | **GET** /api/v2/clients/{client_uuid}/watchlists/ | 
*ApiApi* | [**apiV2ClientsWatchlistsRetrieve**](docs/ApiApi.md#apiv2clientswatchlistsretrieve) | **GET** /api/v2/clients/{client_uuid}/watchlists/{watchlist_uuid}/ | 
*ApiApi* | [**apiV2ClientsWatchlistsUpdate**](docs/ApiApi.md#apiv2clientswatchlistsupdate) | **PUT** /api/v2/clients/{client_uuid}/watchlists/{watchlist_uuid}/ | 
*ApiApi* | [**apiV2FeedsAccessLogsList**](docs/ApiApi.md#apiv2feedsaccesslogslist) | **GET** /api/v2/feeds/access-logs/ | 
*ApiApi* | [**apiV2FeedsActivitiesList**](docs/ApiApi.md#apiv2feedsactivitieslist) | **GET** /api/v2/feeds/activities/ | 
*ApiApi* | [**apiV2GoalsCreate**](docs/ApiApi.md#apiv2goalscreate) | **POST** /api/v2/goals/ | 
*ApiApi* | [**apiV2GoalsDecumulationCreate**](docs/ApiApi.md#apiv2goalsdecumulationcreate) | **POST** /api/v2/goals/decumulation/ | 
*ApiApi* | [**apiV2GoalsDestroy**](docs/ApiApi.md#apiv2goalsdestroy) | **DELETE** /api/v2/goals/{goal_uuid}/ | 
*ApiApi* | [**apiV2GoalsForecastCreate**](docs/ApiApi.md#apiv2goalsforecastcreate) | **POST** /api/v2/goals/forecast/ | 
*ApiApi* | [**apiV2GoalsList**](docs/ApiApi.md#apiv2goalslist) | **GET** /api/v2/goals/ | 
*ApiApi* | [**apiV2GoalsPartialUpdate**](docs/ApiApi.md#apiv2goalspartialupdate) | **PATCH** /api/v2/goals/{goal_uuid}/ | 
*ApiApi* | [**apiV2GoalsRetrieve**](docs/ApiApi.md#apiv2goalsretrieve) | **GET** /api/v2/goals/{goal_uuid}/ | 
*ApiApi* | [**apiV2InboxConversationsCreate**](docs/ApiApi.md#apiv2inboxconversationscreate) | **POST** /api/v2/inbox/conversations/ | 
*ApiApi* | [**apiV2InboxConversationsList**](docs/ApiApi.md#apiv2inboxconversationslist) | **GET** /api/v2/inbox/conversations/ | 
*ApiApi* | [**apiV2InboxConversationsList2**](docs/ApiApi.md#apiv2inboxconversationslist2) | **GET** /api/v2/inbox/conversations/{conversation}/ | 
*ApiApi* | [**apiV2InboxConversationsMessagesAttachmentsRetrieve**](docs/ApiApi.md#apiv2inboxconversationsmessagesattachmentsretrieve) | **GET** /api/v2/inbox/conversations/{conversation}/messages/{message}/attachments/{uuid}/ | 
*ApiApi* | [**apiV2InboxConversationsMessagesCreate**](docs/ApiApi.md#apiv2inboxconversationsmessagescreate) | **POST** /api/v2/inbox/conversations/{conversation}/messages/ | 
*ApiApi* | [**apiV2MobileVersionRetrieve**](docs/ApiApi.md#apiv2mobileversionretrieve) | **GET** /api/v2/mobile/{platform}/version/ | 
*ApiApi* | [**apiV2PlatformSettingsList**](docs/ApiApi.md#apiv2platformsettingslist) | **GET** /api/v2/platform/settings/ | 
*ApiApi* | [**apiV2PortalCountriesList**](docs/ApiApi.md#apiv2portalcountrieslist) | **GET** /api/v2/portal/countries/ | 
*ApiApi* | [**apiV2PortalSettingsRetrieve**](docs/ApiApi.md#apiv2portalsettingsretrieve) | **GET** /api/v2/portal/settings/ | 
*ApiApi* | [**apiV2PortalTosCurrentRetrieve**](docs/ApiApi.md#apiv2portaltoscurrentretrieve) | **GET** /api/v2/portal/tos/current/ | 
*ApiApi* | [**apiV2PortalTosList**](docs/ApiApi.md#apiv2portaltoslist) | **GET** /api/v2/portal/tos/ | 
*ApiApi* | [**apiV2PortalTosRetrieve**](docs/ApiApi.md#apiv2portaltosretrieve) | **GET** /api/v2/portal/tos/{uuid}/ | 
*ApiApi* | [**apiV2PortfoliosActivitiesList**](docs/ApiApi.md#apiv2portfoliosactivitieslist) | **GET** /api/v2/portfolios/{portfolio_uuid}/activities/ | 
*ApiApi* | [**apiV2PortfoliosActivitiesRetrieve**](docs/ApiApi.md#apiv2portfoliosactivitiesretrieve) | **GET** /api/v2/portfolios/{portfolio_uuid}/activities/{uuid}/ | 
*ApiApi* | [**apiV2PortfoliosAllocationsEndDay**](docs/ApiApi.md#apiv2portfoliosallocationsendday) | **GET** /api/v2/portfolios/{portfolio_uuid}/allocations/end-day/ | 
*ApiApi* | [**apiV2PortfoliosAllocationsEndDayByDateRetrieve**](docs/ApiApi.md#apiv2portfoliosallocationsenddaybydateretrieve) | **GET** /api/v2/portfolios/{portfolio_uuid}/allocations/end-day/{allocation_date}/ | 
*ApiApi* | [**apiV2PortfoliosAllocationsEndDayLatestRetrieve**](docs/ApiApi.md#apiv2portfoliosallocationsenddaylatestretrieve) | **GET** /api/v2/portfolios/{portfolio_uuid}/allocations/end-day/latest/ | 
*ApiApi* | [**apiV2PortfoliosAllocationsHistoryRetrieve**](docs/ApiApi.md#apiv2portfoliosallocationshistoryretrieve) | **GET** /api/v2/portfolios/{portfolio}/allocations/history/ | 
*ApiApi* | [**apiV2PortfoliosAllocationsIntradayLatestRetrieve**](docs/ApiApi.md#apiv2portfoliosallocationsintradaylatestretrieve) | **GET** /api/v2/portfolios/{portfolio_uuid}/allocations/intraday/latest/ | 
*ApiApi* | [**apiV2PortfoliosAllocationsList**](docs/ApiApi.md#apiv2portfoliosallocationslist) | **GET** /api/v2/portfolios/{portfolio_uuid}/allocations/ | 
*ApiApi* | [**apiV2PortfoliosAllocationsRetrieve**](docs/ApiApi.md#apiv2portfoliosallocationsretrieve) | **GET** /api/v2/portfolios/{portfolio_uuid}/allocations/{id}/ | 
*ApiApi* | [**apiV2PortfoliosCreate**](docs/ApiApi.md#apiv2portfolioscreate) | **POST** /api/v2/portfolios/ | 
*ApiApi* | [**apiV2PortfoliosDepositsCreate**](docs/ApiApi.md#apiv2portfoliosdepositscreate) | **POST** /api/v2/portfolios/{portfolio_uuid}/deposits/ | 
*ApiApi* | [**apiV2PortfoliosDepositsDestroy**](docs/ApiApi.md#apiv2portfoliosdepositsdestroy) | **DELETE** /api/v2/portfolios/{portfolio_uuid}/deposits/{uuid}/ | 
*ApiApi* | [**apiV2PortfoliosDepositsList**](docs/ApiApi.md#apiv2portfoliosdepositslist) | **GET** /api/v2/portfolios/{portfolio_uuid}/deposits/ | 
*ApiApi* | [**apiV2PortfoliosDepositsRetrieve**](docs/ApiApi.md#apiv2portfoliosdepositsretrieve) | **GET** /api/v2/portfolios/{portfolio_uuid}/deposits/{uuid}/ | 
*ApiApi* | [**apiV2PortfoliosDestroy**](docs/ApiApi.md#apiv2portfoliosdestroy) | **DELETE** /api/v2/portfolios/{portfolio_uuid}/ | 
*ApiApi* | [**apiV2PortfoliosList**](docs/ApiApi.md#apiv2portfolioslist) | **GET** /api/v2/portfolios/ | 
*ApiApi* | [**apiV2PortfoliosOrdersCreate**](docs/ApiApi.md#apiv2portfoliosorderscreate) | **POST** /api/v2/portfolios/{portfolio_uuid}/orders/ | 
*ApiApi* | [**apiV2PortfoliosOrdersDestroy**](docs/ApiApi.md#apiv2portfoliosordersdestroy) | **DELETE** /api/v2/portfolios/{portfolio_uuid}/orders/{uuid}/ | 
*ApiApi* | [**apiV2PortfoliosOrdersList**](docs/ApiApi.md#apiv2portfoliosorderslist) | **GET** /api/v2/portfolios/{portfolio_uuid}/orders/ | 
*ApiApi* | [**apiV2PortfoliosOrdersRetrieve**](docs/ApiApi.md#apiv2portfoliosordersretrieve) | **GET** /api/v2/portfolios/{portfolio_uuid}/orders/{uuid}/ | 
*ApiApi* | [**apiV2PortfoliosPartialUpdate**](docs/ApiApi.md#apiv2portfoliospartialupdate) | **PATCH** /api/v2/portfolios/{portfolio_uuid}/ | 
*ApiApi* | [**apiV2PortfoliosPerformanceMwrrList**](docs/ApiApi.md#apiv2portfoliosperformancemwrrlist) | **GET** /api/v2/portfolios/{portfolio_uuid}/performance/mwrr/ | 
*ApiApi* | [**apiV2PortfoliosPerformancePositionsList**](docs/ApiApi.md#apiv2portfoliosperformancepositionslist) | **GET** /api/v2/portfolios/{portfolio_uuid}/performance/positions/ | 
*ApiApi* | [**apiV2PortfoliosPerformanceTwrrList**](docs/ApiApi.md#apiv2portfoliosperformancetwrrlist) | **GET** /api/v2/portfolios/{portfolio_uuid}/performance/twrr/ | 
*ApiApi* | [**apiV2PortfoliosPortfoliotypesList**](docs/ApiApi.md#apiv2portfoliosportfoliotypeslist) | **GET** /api/v2/portfolios/portfoliotypes/ | 
*ApiApi* | [**apiV2PortfoliosPortfoliotypesRestrictionsList**](docs/ApiApi.md#apiv2portfoliosportfoliotypesrestrictionslist) | **GET** /api/v2/portfolios/portfoliotypes/{code}/restrictions/ | 
*ApiApi* | [**apiV2PortfoliosRebalancesList**](docs/ApiApi.md#apiv2portfoliosrebalanceslist) | **GET** /api/v2/portfolios/{portfolio_uuid}/rebalances/ | 
*ApiApi* | [**apiV2PortfoliosRebalancesRetrieve**](docs/ApiApi.md#apiv2portfoliosrebalancesretrieve) | **GET** /api/v2/portfolios/{portfolio_uuid}/rebalances/{uuid}/ | 
*ApiApi* | [**apiV2PortfoliosRestrictionsRetrieve**](docs/ApiApi.md#apiv2portfoliosrestrictionsretrieve) | **GET** /api/v2/portfolios/{portfolio_uuid}/restrictions/ | 
*ApiApi* | [**apiV2PortfoliosRetrieve**](docs/ApiApi.md#apiv2portfoliosretrieve) | **GET** /api/v2/portfolios/{portfolio_uuid}/ | 
*ApiApi* | [**apiV2PortfoliosUpdate**](docs/ApiApi.md#apiv2portfoliosupdate) | **PUT** /api/v2/portfolios/{portfolio_uuid}/ | 
*ApiApi* | [**apiV2PortfoliosWithdrawalsCreate**](docs/ApiApi.md#apiv2portfolioswithdrawalscreate) | **POST** /api/v2/portfolios/{portfolio_uuid}/withdrawals/ | 
*ApiApi* | [**apiV2PortfoliosWithdrawalsDestroy**](docs/ApiApi.md#apiv2portfolioswithdrawalsdestroy) | **DELETE** /api/v2/portfolios/{portfolio_uuid}/withdrawals/{uuid}/ | 
*ApiApi* | [**apiV2PortfoliosWithdrawalsList**](docs/ApiApi.md#apiv2portfolioswithdrawalslist) | **GET** /api/v2/portfolios/{portfolio_uuid}/withdrawals/ | 
*ApiApi* | [**apiV2PortfoliosWithdrawalsRetrieve**](docs/ApiApi.md#apiv2portfolioswithdrawalsretrieve) | **GET** /api/v2/portfolios/{portfolio_uuid}/withdrawals/{uuid}/ | 
*ApiApi* | [**apiV2RelationshipManagerAnalyticsAllocationsByAssetRetrieve**](docs/ApiApi.md#apiv2relationshipmanageranalyticsallocationsbyassetretrieve) | **GET** /api/v2/relationship-manager/{uuid}/analytics/allocations-by-asset/ | 
*ApiApi* | [**apiV2RelationshipManagerAnalyticsAssetConcentrationRiskRetrieve**](docs/ApiApi.md#apiv2relationshipmanageranalyticsassetconcentrationriskretrieve) | **GET** /api/v2/relationship-manager/{uuid}/analytics/asset-concentration-risk/ | 
*ApiApi* | [**apiV2RelationshipManagerAnalyticsAumEvolutionRetrieve**](docs/ApiApi.md#apiv2relationshipmanageranalyticsaumevolutionretrieve) | **GET** /api/v2/relationship-manager/{uuid}/analytics/aum-evolution/ | 
*ApiApi* | [**apiV2RelationshipManagerAnalyticsAumPortfolioRiskRetrieve**](docs/ApiApi.md#apiv2relationshipmanageranalyticsaumportfolioriskretrieve) | **GET** /api/v2/relationship-manager/{uuid}/analytics/aum-portfolio-risk/ | 
*ApiApi* | [**apiV2RelationshipManagerAnalyticsAumRetrieve**](docs/ApiApi.md#apiv2relationshipmanageranalyticsaumretrieve) | **GET** /api/v2/relationship-manager/{uuid}/analytics/aum/ | 
*ApiApi* | [**apiV2RelationshipManagerAnalyticsClientByRiskRetrieve**](docs/ApiApi.md#apiv2relationshipmanageranalyticsclientbyriskretrieve) | **GET** /api/v2/relationship-manager/{uuid}/analytics/client-by-risk/ | 
*ApiApi* | [**apiV2RelationshipManagerAnalyticsClientByStatusRetrieve**](docs/ApiApi.md#apiv2relationshipmanageranalyticsclientbystatusretrieve) | **GET** /api/v2/relationship-manager/{uuid}/analytics/client-by-status/ | 
*ApiApi* | [**apiV2RelationshipManagerAnalyticsClientRankingRetrieve**](docs/ApiApi.md#apiv2relationshipmanageranalyticsclientrankingretrieve) | **GET** /api/v2/relationship-manager/{uuid}/analytics/client-ranking/ | 
*ApiApi* | [**apiV2RelationshipManagerAnalyticsInflowsOutflowsRetrieve**](docs/ApiApi.md#apiv2relationshipmanageranalyticsinflowsoutflowsretrieve) | **GET** /api/v2/relationship-manager/{uuid}/analytics/inflows-outflows/ | 
*ApiApi* | [**apiV2RelationshipManagerAnalyticsPortfolioRiskPerformanceRetrieve**](docs/ApiApi.md#apiv2relationshipmanageranalyticsportfolioriskperformanceretrieve) | **GET** /api/v2/relationship-manager/{uuid}/analytics/portfolio-risk-performance/ | 
*ApiApi* | [**apiV2RelationshipManagerAnalyticsTotalActiveClientsRetrieve**](docs/ApiApi.md#apiv2relationshipmanageranalyticstotalactiveclientsretrieve) | **GET** /api/v2/relationship-manager/{uuid}/analytics/total-active-clients/ | 
*ApiApi* | [**apiV2RelationshipManagerMeRetrieve**](docs/ApiApi.md#apiv2relationshipmanagermeretrieve) | **GET** /api/v2/relationship-manager/me/ | 
*ApiApi* | [**apiV2RelationshipManagerRetrieve**](docs/ApiApi.md#apiv2relationshipmanagerretrieve) | **GET** /api/v2/relationship-manager/{uuid}/ | 
*ApiApi* | [**apiV2ReportStatementsList**](docs/ApiApi.md#apiv2reportstatementslist) | **GET** /api/v2/report/statements/ | 
*ApiApi* | [**apiV2ReportStatementsRetrieve**](docs/ApiApi.md#apiv2reportstatementsretrieve) | **GET** /api/v2/report/statements/{uuid}/ | 
*ApiApi* | [**apiV2ReportTaxReportList**](docs/ApiApi.md#apiv2reporttaxreportlist) | **GET** /api/v2/report/tax-report/ | 
*ApiApi* | [**apiV2ReportTaxReportRetrieve**](docs/ApiApi.md#apiv2reporttaxreportretrieve) | **GET** /api/v2/report/tax-report/{uuid}/ | 
*ApiApi* | [**apiV2RiskQuestionsList**](docs/ApiApi.md#apiv2riskquestionslist) | **GET** /api/v2/risk/questions/ | 
*ApiApi* | [**apiV2VerificationsVerifierWebhookCreate**](docs/ApiApi.md#apiv2verificationsverifierwebhookcreate) | **POST** /api/v2/verifications/verifier_webhook/{verifier}/{action}/ | 
*ApiApi* | [**apiV2WebsocketAuthenticationTicketCreate**](docs/ApiApi.md#apiv2websocketauthenticationticketcreate) | **POST** /api/v2/websocket/authentication/ticket/ | 
*ApiApi* | [**apiV2WebsocketAuthorizeAssetCreate**](docs/ApiApi.md#apiv2websocketauthorizeassetcreate) | **POST** /api/v2/websocket/authorize/asset/ | 
*ApiApi* | [**apiV2WebsocketAuthorizeCreate**](docs/ApiApi.md#apiv2websocketauthorizecreate) | **POST** /api/v2/websocket/authorize/ | 
*ApiApi* | [**apiV2WebsocketAuthorizePortfolioCreate**](docs/ApiApi.md#apiv2websocketauthorizeportfoliocreate) | **POST** /api/v2/websocket/authorize/portfolio/ | 
*ApiApi* | [**apiV2WebsocketOnSubscribeCreate**](docs/ApiApi.md#apiv2websocketonsubscribecreate) | **POST** /api/v2/websocket/on_subscribe/ | 
*ApiApi* | [**apiV2WebsocketOnUnsubscribeCreate**](docs/ApiApi.md#apiv2websocketonunsubscribecreate) | **POST** /api/v2/websocket/on_unsubscribe/ | 
*ApplicationApi* | [**clientAddressCreate**](docs/ApplicationApi.md#clientaddresscreate) | **POST** /api/v2/clients/{client_uuid}/addresses/ | 
*ApplicationApi* | [**clientAddressDelete**](docs/ApplicationApi.md#clientaddressdelete) | **DELETE** /api/v2/clients/{client_uuid}/addresses/{address_uuid}/ | 
*ApplicationApi* | [**clientAddressPartialUpdate**](docs/ApplicationApi.md#clientaddresspartialupdate) | **PATCH** /api/v2/clients/{client_uuid}/addresses/{address_uuid}/ | 
*ApplicationApi* | [**clientAddressRetrieve**](docs/ApplicationApi.md#clientaddressretrieve) | **GET** /api/v2/clients/{client_uuid}/addresses/{address_uuid}/ | 
*ApplicationApi* | [**clientAddressUpdate**](docs/ApplicationApi.md#clientaddressupdate) | **PUT** /api/v2/clients/{client_uuid}/addresses/{address_uuid}/ | 
*ApplicationApi* | [**clientAddressesList**](docs/ApplicationApi.md#clientaddresseslist) | **GET** /api/v2/clients/{client_uuid}/addresses/ | 
*ApplicationApi* | [**clientBankAccountCreate**](docs/ApplicationApi.md#clientbankaccountcreate) | **POST** /api/v2/clients/{client_uuid}/bank-accounts/ | 
*ApplicationApi* | [**clientBankAccountDelete**](docs/ApplicationApi.md#clientbankaccountdelete) | **DELETE** /api/v2/clients/{client_uuid}/bank-accounts/{bank_account_uuid}/ | 
*ApplicationApi* | [**clientBankAccountPartialUpdate**](docs/ApplicationApi.md#clientbankaccountpartialupdate) | **PATCH** /api/v2/clients/{client_uuid}/bank-accounts/{bank_account_uuid}/ | 
*ApplicationApi* | [**clientBankAccountRetrieve**](docs/ApplicationApi.md#clientbankaccountretrieve) | **GET** /api/v2/clients/{client_uuid}/bank-accounts/{bank_account_uuid}/ | 
*ApplicationApi* | [**clientBankAccountUpdate**](docs/ApplicationApi.md#clientbankaccountupdate) | **PUT** /api/v2/clients/{client_uuid}/bank-accounts/{bank_account_uuid}/ | 
*ApplicationApi* | [**clientBankAccountsList**](docs/ApplicationApi.md#clientbankaccountslist) | **GET** /api/v2/clients/{client_uuid}/bank-accounts/ | 
*ApplicationApi* | [**clientCompleteOnboarding**](docs/ApplicationApi.md#clientcompleteonboarding) | **POST** /api/v2/clients/{client_uuid}/onboarding/complete/ | 
*ApplicationApi* | [**clientCreate**](docs/ApplicationApi.md#clientcreate) | **POST** /api/v2/clients/ | 
*ApplicationApi* | [**clientList**](docs/ApplicationApi.md#clientlist) | **GET** /api/v2/clients/ | 
*ApplicationApi* | [**clientNationalityCreate**](docs/ApplicationApi.md#clientnationalitycreate) | **POST** /api/v2/clients/{client_uuid}/nationalities/ | 
*ApplicationApi* | [**clientNationlitiesList**](docs/ApplicationApi.md#clientnationlitieslist) | **GET** /api/v2/clients/{client_uuid}/nationalities/ | 
*ApplicationApi* | [**clientNationlityDelete**](docs/ApplicationApi.md#clientnationlitydelete) | **DELETE** /api/v2/clients/{client_uuid}/nationalities/{nationality_uuid}/ | 
*ApplicationApi* | [**clientNationlityPartialUpdate**](docs/ApplicationApi.md#clientnationlitypartialupdate) | **PATCH** /api/v2/clients/{client_uuid}/nationalities/{nationality_uuid}/ | 
*ApplicationApi* | [**clientNationlityRetrieve**](docs/ApplicationApi.md#clientnationlityretrieve) | **GET** /api/v2/clients/{client_uuid}/nationalities/{nationality_uuid}/ | 
*ApplicationApi* | [**clientNationlityUpdate**](docs/ApplicationApi.md#clientnationlityupdate) | **PUT** /api/v2/clients/{client_uuid}/nationalities/{nationality_uuid}/ | 
*ApplicationApi* | [**clientPartialUpdate**](docs/ApplicationApi.md#clientpartialupdate) | **PATCH** /api/v2/clients/{client_uuid}/ | 
*ApplicationApi* | [**clientRetrieve**](docs/ApplicationApi.md#clientretrieve) | **GET** /api/v2/clients/{client_uuid}/ | 
*ApplicationApi* | [**clientRiskAssessmentCreate**](docs/ApplicationApi.md#clientriskassessmentcreate) | **POST** /api/v2/clients/{client_uuid}/risk-assessments/ | 
*ApplicationApi* | [**clientRiskAssessmentDelete**](docs/ApplicationApi.md#clientriskassessmentdelete) | **DELETE** /api/v2/clients/{client_uuid}/risk-assessments/{assessment_uuid}/ | 
*ApplicationApi* | [**clientRiskAssessmentList**](docs/ApplicationApi.md#clientriskassessmentlist) | **GET** /api/v2/clients/{client_uuid}/risk-assessments/ | 
*ApplicationApi* | [**clientRiskAssessmentPartialUpdate**](docs/ApplicationApi.md#clientriskassessmentpartialupdate) | **PATCH** /api/v2/clients/{client_uuid}/risk-assessments/{assessment_uuid}/ | 
*ApplicationApi* | [**clientRiskAssessmentRetrieve**](docs/ApplicationApi.md#clientriskassessmentretrieve) | **GET** /api/v2/clients/{client_uuid}/risk-assessments/{assessment_uuid}/ | 
*ApplicationApi* | [**clientTWRRPerformance**](docs/ApplicationApi.md#clienttwrrperformance) | **GET** /api/v2/clients/{client_uuid}/performance/twrr/ | 
*ApplicationApi* | [**clientTaxInformationCreate**](docs/ApplicationApi.md#clienttaxinformationcreate) | **POST** /api/v2/clients/{client_uuid}/tax-informations/ | 
*ApplicationApi* | [**clientTaxInformationDelete**](docs/ApplicationApi.md#clienttaxinformationdelete) | **DELETE** /api/v2/clients/{client_uuid}/tax-informations/{tax_information_uuid}/ | 
*ApplicationApi* | [**clientTaxInformationList**](docs/ApplicationApi.md#clienttaxinformationlist) | **GET** /api/v2/clients/{client_uuid}/tax-informations/ | 
*ApplicationApi* | [**clientTaxInformationPartialUpdate**](docs/ApplicationApi.md#clienttaxinformationpartialupdate) | **PATCH** /api/v2/clients/{client_uuid}/tax-informations/{tax_information_uuid}/ | 
*ApplicationApi* | [**clientTaxInformationRetrieve**](docs/ApplicationApi.md#clienttaxinformationretrieve) | **GET** /api/v2/clients/{client_uuid}/tax-informations/{tax_information_uuid}/ | 
*ApplicationApi* | [**clientTaxInformationUpdate**](docs/ApplicationApi.md#clienttaxinformationupdate) | **PUT** /api/v2/clients/{client_uuid}/tax-informations/{tax_information_uuid}/ | 
*ApplicationApi* | [**clientUpdate**](docs/ApplicationApi.md#clientupdate) | **PUT** /api/v2/clients/{client_uuid}/ | 
*ApplicationApi* | [**clientVerificationCreate**](docs/ApplicationApi.md#clientverificationcreate) | **POST** /api/v2/clients/{client_uuid}/verifications/{verify_type_code}/ | 
*ApplicationApi* | [**clientVerificationDocumentCreate**](docs/ApplicationApi.md#clientverificationdocumentcreate) | **POST** /api/v2/clients/{client_uuid}/verifications/{verify_type_code}/documents/ | 
*ApplicationApi* | [**clientVerificationDocumentDelete**](docs/ApplicationApi.md#clientverificationdocumentdelete) | **DELETE** /api/v2/clients/{client_uuid}/verifications/{verify_type_code}/documents/{verification_document_uuid}/ | 
*ApplicationApi* | [**clientVerificationDocumentList**](docs/ApplicationApi.md#clientverificationdocumentlist) | **GET** /api/v2/clients/{client_uuid}/verifications/{verify_type_code}/documents/ | 
*ApplicationApi* | [**clientVerificationDocumentPartialUpdate**](docs/ApplicationApi.md#clientverificationdocumentpartialupdate) | **PATCH** /api/v2/clients/{client_uuid}/verifications/{verify_type_code}/documents/{verification_document_uuid}/ | 
*ApplicationApi* | [**clientVerificationDocumentRetrieve**](docs/ApplicationApi.md#clientverificationdocumentretrieve) | **GET** /api/v2/clients/{client_uuid}/verifications/{verify_type_code}/documents/{verification_document_uuid}/ | 
*ApplicationApi* | [**clientVerificationDocumentUpdate**](docs/ApplicationApi.md#clientverificationdocumentupdate) | **PUT** /api/v2/clients/{client_uuid}/verifications/{verify_type_code}/documents/{verification_document_uuid}/ | 
*ApplicationApi* | [**clientVerificationList**](docs/ApplicationApi.md#clientverificationlist) | **GET** /api/v2/clients/{client_uuid}/verifications/{verify_type_code}/ | 
*ApplicationApi* | [**clientVerificationRetrieve**](docs/ApplicationApi.md#clientverificationretrieve) | **GET** /api/v2/clients/{client_uuid}/verifications/{verify_type_code}/{verification_uuid}/ | 
*AuthApi* | [**authGetOnboardingToken**](docs/AuthApi.md#authgetonboardingtoken) | **POST** /api/v2/auth/onboarding_token/ | 
*AuthApi* | [**authImpersonationToken**](docs/AuthApi.md#authimpersonationtoken) | **POST** /api/v2/auth/impersonation_token/ | 
*AuthApi* | [**authLogin**](docs/AuthApi.md#authlogin) | **POST** /api/v2/auth/login/ | 
*AuthApi* | [**authResfreshJWTToken**](docs/AuthApi.md#authresfreshjwttoken) | **POST** /api/v2/auth/token_renewal/ | 
*AuthApi* | [**userChangePassword**](docs/AuthApi.md#userchangepassword) | **PUT** /api/v2/auth/password/ | 
*AuthApi* | [**userRequestPasswordReset**](docs/AuthApi.md#userrequestpasswordreset) | **PATCH** /api/v2/auth/password/ | 
*AuthApi* | [**userSetPassword**](docs/AuthApi.md#usersetpassword) | **POST** /api/v2/auth/password/ | 
*BankAccountApi* | [**clientBankAccountCreate**](docs/BankAccountApi.md#clientbankaccountcreate) | **POST** /api/v2/clients/{client_uuid}/bank-accounts/ | 
*BankAccountApi* | [**clientBankAccountDelete**](docs/BankAccountApi.md#clientbankaccountdelete) | **DELETE** /api/v2/clients/{client_uuid}/bank-accounts/{bank_account_uuid}/ | 
*BankAccountApi* | [**clientBankAccountPartialUpdate**](docs/BankAccountApi.md#clientbankaccountpartialupdate) | **PATCH** /api/v2/clients/{client_uuid}/bank-accounts/{bank_account_uuid}/ | 
*BankAccountApi* | [**clientBankAccountRetrieve**](docs/BankAccountApi.md#clientbankaccountretrieve) | **GET** /api/v2/clients/{client_uuid}/bank-accounts/{bank_account_uuid}/ | 
*BankAccountApi* | [**clientBankAccountUpdate**](docs/BankAccountApi.md#clientbankaccountupdate) | **PUT** /api/v2/clients/{client_uuid}/bank-accounts/{bank_account_uuid}/ | 
*BankAccountApi* | [**clientBankAccountsList**](docs/BankAccountApi.md#clientbankaccountslist) | **GET** /api/v2/clients/{client_uuid}/bank-accounts/ | 
*ClientApi* | [**clientAddressCreate**](docs/ClientApi.md#clientaddresscreate) | **POST** /api/v2/clients/{client_uuid}/addresses/ | 
*ClientApi* | [**clientAddressDelete**](docs/ClientApi.md#clientaddressdelete) | **DELETE** /api/v2/clients/{client_uuid}/addresses/{address_uuid}/ | 
*ClientApi* | [**clientAddressPartialUpdate**](docs/ClientApi.md#clientaddresspartialupdate) | **PATCH** /api/v2/clients/{client_uuid}/addresses/{address_uuid}/ | 
*ClientApi* | [**clientAddressRetrieve**](docs/ClientApi.md#clientaddressretrieve) | **GET** /api/v2/clients/{client_uuid}/addresses/{address_uuid}/ | 
*ClientApi* | [**clientAddressUpdate**](docs/ClientApi.md#clientaddressupdate) | **PUT** /api/v2/clients/{client_uuid}/addresses/{address_uuid}/ | 
*ClientApi* | [**clientAddressesList**](docs/ClientApi.md#clientaddresseslist) | **GET** /api/v2/clients/{client_uuid}/addresses/ | 
*ClientApi* | [**clientBankAccountCreate**](docs/ClientApi.md#clientbankaccountcreate) | **POST** /api/v2/clients/{client_uuid}/bank-accounts/ | 
*ClientApi* | [**clientBankAccountDelete**](docs/ClientApi.md#clientbankaccountdelete) | **DELETE** /api/v2/clients/{client_uuid}/bank-accounts/{bank_account_uuid}/ | 
*ClientApi* | [**clientBankAccountPartialUpdate**](docs/ClientApi.md#clientbankaccountpartialupdate) | **PATCH** /api/v2/clients/{client_uuid}/bank-accounts/{bank_account_uuid}/ | 
*ClientApi* | [**clientBankAccountRetrieve**](docs/ClientApi.md#clientbankaccountretrieve) | **GET** /api/v2/clients/{client_uuid}/bank-accounts/{bank_account_uuid}/ | 
*ClientApi* | [**clientBankAccountUpdate**](docs/ClientApi.md#clientbankaccountupdate) | **PUT** /api/v2/clients/{client_uuid}/bank-accounts/{bank_account_uuid}/ | 
*ClientApi* | [**clientBankAccountsList**](docs/ClientApi.md#clientbankaccountslist) | **GET** /api/v2/clients/{client_uuid}/bank-accounts/ | 
*ClientApi* | [**clientCompleteOnboarding**](docs/ClientApi.md#clientcompleteonboarding) | **POST** /api/v2/clients/{client_uuid}/onboarding/complete/ | 
*ClientApi* | [**clientCreate**](docs/ClientApi.md#clientcreate) | **POST** /api/v2/clients/ | 
*ClientApi* | [**clientList**](docs/ClientApi.md#clientlist) | **GET** /api/v2/clients/ | 
*ClientApi* | [**clientNationalityCreate**](docs/ClientApi.md#clientnationalitycreate) | **POST** /api/v2/clients/{client_uuid}/nationalities/ | 
*ClientApi* | [**clientNationlitiesList**](docs/ClientApi.md#clientnationlitieslist) | **GET** /api/v2/clients/{client_uuid}/nationalities/ | 
*ClientApi* | [**clientNationlityDelete**](docs/ClientApi.md#clientnationlitydelete) | **DELETE** /api/v2/clients/{client_uuid}/nationalities/{nationality_uuid}/ | 
*ClientApi* | [**clientNationlityPartialUpdate**](docs/ClientApi.md#clientnationlitypartialupdate) | **PATCH** /api/v2/clients/{client_uuid}/nationalities/{nationality_uuid}/ | 
*ClientApi* | [**clientNationlityRetrieve**](docs/ClientApi.md#clientnationlityretrieve) | **GET** /api/v2/clients/{client_uuid}/nationalities/{nationality_uuid}/ | 
*ClientApi* | [**clientNationlityUpdate**](docs/ClientApi.md#clientnationlityupdate) | **PUT** /api/v2/clients/{client_uuid}/nationalities/{nationality_uuid}/ | 
*ClientApi* | [**clientPartialUpdate**](docs/ClientApi.md#clientpartialupdate) | **PATCH** /api/v2/clients/{client_uuid}/ | 
*ClientApi* | [**clientRetrieve**](docs/ClientApi.md#clientretrieve) | **GET** /api/v2/clients/{client_uuid}/ | 
*ClientApi* | [**clientRiskAssessmentCreate**](docs/ClientApi.md#clientriskassessmentcreate) | **POST** /api/v2/clients/{client_uuid}/risk-assessments/ | 
*ClientApi* | [**clientRiskAssessmentDelete**](docs/ClientApi.md#clientriskassessmentdelete) | **DELETE** /api/v2/clients/{client_uuid}/risk-assessments/{assessment_uuid}/ | 
*ClientApi* | [**clientRiskAssessmentList**](docs/ClientApi.md#clientriskassessmentlist) | **GET** /api/v2/clients/{client_uuid}/risk-assessments/ | 
*ClientApi* | [**clientRiskAssessmentPartialUpdate**](docs/ClientApi.md#clientriskassessmentpartialupdate) | **PATCH** /api/v2/clients/{client_uuid}/risk-assessments/{assessment_uuid}/ | 
*ClientApi* | [**clientRiskAssessmentRetrieve**](docs/ClientApi.md#clientriskassessmentretrieve) | **GET** /api/v2/clients/{client_uuid}/risk-assessments/{assessment_uuid}/ | 
*ClientApi* | [**clientTWRRPerformance**](docs/ClientApi.md#clienttwrrperformance) | **GET** /api/v2/clients/{client_uuid}/performance/twrr/ | 
*ClientApi* | [**clientTaxInformationCreate**](docs/ClientApi.md#clienttaxinformationcreate) | **POST** /api/v2/clients/{client_uuid}/tax-informations/ | 
*ClientApi* | [**clientTaxInformationDelete**](docs/ClientApi.md#clienttaxinformationdelete) | **DELETE** /api/v2/clients/{client_uuid}/tax-informations/{tax_information_uuid}/ | 
*ClientApi* | [**clientTaxInformationList**](docs/ClientApi.md#clienttaxinformationlist) | **GET** /api/v2/clients/{client_uuid}/tax-informations/ | 
*ClientApi* | [**clientTaxInformationPartialUpdate**](docs/ClientApi.md#clienttaxinformationpartialupdate) | **PATCH** /api/v2/clients/{client_uuid}/tax-informations/{tax_information_uuid}/ | 
*ClientApi* | [**clientTaxInformationRetrieve**](docs/ClientApi.md#clienttaxinformationretrieve) | **GET** /api/v2/clients/{client_uuid}/tax-informations/{tax_information_uuid}/ | 
*ClientApi* | [**clientTaxInformationUpdate**](docs/ClientApi.md#clienttaxinformationupdate) | **PUT** /api/v2/clients/{client_uuid}/tax-informations/{tax_information_uuid}/ | 
*ClientApi* | [**clientUpdate**](docs/ClientApi.md#clientupdate) | **PUT** /api/v2/clients/{client_uuid}/ | 
*ClientApi* | [**clientVerificationCreate**](docs/ClientApi.md#clientverificationcreate) | **POST** /api/v2/clients/{client_uuid}/verifications/{verify_type_code}/ | 
*ClientApi* | [**clientVerificationDocumentCreate**](docs/ClientApi.md#clientverificationdocumentcreate) | **POST** /api/v2/clients/{client_uuid}/verifications/{verify_type_code}/documents/ | 
*ClientApi* | [**clientVerificationDocumentDelete**](docs/ClientApi.md#clientverificationdocumentdelete) | **DELETE** /api/v2/clients/{client_uuid}/verifications/{verify_type_code}/documents/{verification_document_uuid}/ | 
*ClientApi* | [**clientVerificationDocumentList**](docs/ClientApi.md#clientverificationdocumentlist) | **GET** /api/v2/clients/{client_uuid}/verifications/{verify_type_code}/documents/ | 
*ClientApi* | [**clientVerificationDocumentPartialUpdate**](docs/ClientApi.md#clientverificationdocumentpartialupdate) | **PATCH** /api/v2/clients/{client_uuid}/verifications/{verify_type_code}/documents/{verification_document_uuid}/ | 
*ClientApi* | [**clientVerificationDocumentRetrieve**](docs/ClientApi.md#clientverificationdocumentretrieve) | **GET** /api/v2/clients/{client_uuid}/verifications/{verify_type_code}/documents/{verification_document_uuid}/ | 
*ClientApi* | [**clientVerificationDocumentUpdate**](docs/ClientApi.md#clientverificationdocumentupdate) | **PUT** /api/v2/clients/{client_uuid}/verifications/{verify_type_code}/documents/{verification_document_uuid}/ | 
*ClientApi* | [**clientVerificationList**](docs/ClientApi.md#clientverificationlist) | **GET** /api/v2/clients/{client_uuid}/verifications/{verify_type_code}/ | 
*ClientApi* | [**clientVerificationRetrieve**](docs/ClientApi.md#clientverificationretrieve) | **GET** /api/v2/clients/{client_uuid}/verifications/{verify_type_code}/{verification_uuid}/ | 
*KYCApi* | [**clientVerificationCreate**](docs/KYCApi.md#clientverificationcreate) | **POST** /api/v2/clients/{client_uuid}/verifications/{verify_type_code}/ | 
*KYCApi* | [**clientVerificationDocumentCreate**](docs/KYCApi.md#clientverificationdocumentcreate) | **POST** /api/v2/clients/{client_uuid}/verifications/{verify_type_code}/documents/ | 
*KYCApi* | [**clientVerificationDocumentDelete**](docs/KYCApi.md#clientverificationdocumentdelete) | **DELETE** /api/v2/clients/{client_uuid}/verifications/{verify_type_code}/documents/{verification_document_uuid}/ | 
*KYCApi* | [**clientVerificationDocumentList**](docs/KYCApi.md#clientverificationdocumentlist) | **GET** /api/v2/clients/{client_uuid}/verifications/{verify_type_code}/documents/ | 
*KYCApi* | [**clientVerificationDocumentPartialUpdate**](docs/KYCApi.md#clientverificationdocumentpartialupdate) | **PATCH** /api/v2/clients/{client_uuid}/verifications/{verify_type_code}/documents/{verification_document_uuid}/ | 
*KYCApi* | [**clientVerificationDocumentRetrieve**](docs/KYCApi.md#clientverificationdocumentretrieve) | **GET** /api/v2/clients/{client_uuid}/verifications/{verify_type_code}/documents/{verification_document_uuid}/ | 
*KYCApi* | [**clientVerificationDocumentUpdate**](docs/KYCApi.md#clientverificationdocumentupdate) | **PUT** /api/v2/clients/{client_uuid}/verifications/{verify_type_code}/documents/{verification_document_uuid}/ | 
*KYCApi* | [**clientVerificationList**](docs/KYCApi.md#clientverificationlist) | **GET** /api/v2/clients/{client_uuid}/verifications/{verify_type_code}/ | 
*KYCApi* | [**clientVerificationRetrieve**](docs/KYCApi.md#clientverificationretrieve) | **GET** /api/v2/clients/{client_uuid}/verifications/{verify_type_code}/{verification_uuid}/ | 
*NationlityApi* | [**clientNationalityCreate**](docs/NationlityApi.md#clientnationalitycreate) | **POST** /api/v2/clients/{client_uuid}/nationalities/ | 
*NationlityApi* | [**clientNationlitiesList**](docs/NationlityApi.md#clientnationlitieslist) | **GET** /api/v2/clients/{client_uuid}/nationalities/ | 
*NationlityApi* | [**clientNationlityDelete**](docs/NationlityApi.md#clientnationlitydelete) | **DELETE** /api/v2/clients/{client_uuid}/nationalities/{nationality_uuid}/ | 
*NationlityApi* | [**clientNationlityPartialUpdate**](docs/NationlityApi.md#clientnationlitypartialupdate) | **PATCH** /api/v2/clients/{client_uuid}/nationalities/{nationality_uuid}/ | 
*NationlityApi* | [**clientNationlityRetrieve**](docs/NationlityApi.md#clientnationlityretrieve) | **GET** /api/v2/clients/{client_uuid}/nationalities/{nationality_uuid}/ | 
*NationlityApi* | [**clientNationlityUpdate**](docs/NationlityApi.md#clientnationlityupdate) | **PUT** /api/v2/clients/{client_uuid}/nationalities/{nationality_uuid}/ | 
*RiskAssessmentApi* | [**clientRiskAssessmentCreate**](docs/RiskAssessmentApi.md#clientriskassessmentcreate) | **POST** /api/v2/clients/{client_uuid}/risk-assessments/ | 
*RiskAssessmentApi* | [**clientRiskAssessmentDelete**](docs/RiskAssessmentApi.md#clientriskassessmentdelete) | **DELETE** /api/v2/clients/{client_uuid}/risk-assessments/{assessment_uuid}/ | 
*RiskAssessmentApi* | [**clientRiskAssessmentList**](docs/RiskAssessmentApi.md#clientriskassessmentlist) | **GET** /api/v2/clients/{client_uuid}/risk-assessments/ | 
*RiskAssessmentApi* | [**clientRiskAssessmentPartialUpdate**](docs/RiskAssessmentApi.md#clientriskassessmentpartialupdate) | **PATCH** /api/v2/clients/{client_uuid}/risk-assessments/{assessment_uuid}/ | 
*RiskAssessmentApi* | [**clientRiskAssessmentRetrieve**](docs/RiskAssessmentApi.md#clientriskassessmentretrieve) | **GET** /api/v2/clients/{client_uuid}/risk-assessments/{assessment_uuid}/ | 
*TaxInformationApi* | [**clientTaxInformationCreate**](docs/TaxInformationApi.md#clienttaxinformationcreate) | **POST** /api/v2/clients/{client_uuid}/tax-informations/ | 
*TaxInformationApi* | [**clientTaxInformationDelete**](docs/TaxInformationApi.md#clienttaxinformationdelete) | **DELETE** /api/v2/clients/{client_uuid}/tax-informations/{tax_information_uuid}/ | 
*TaxInformationApi* | [**clientTaxInformationList**](docs/TaxInformationApi.md#clienttaxinformationlist) | **GET** /api/v2/clients/{client_uuid}/tax-informations/ | 
*TaxInformationApi* | [**clientTaxInformationPartialUpdate**](docs/TaxInformationApi.md#clienttaxinformationpartialupdate) | **PATCH** /api/v2/clients/{client_uuid}/tax-informations/{tax_information_uuid}/ | 
*TaxInformationApi* | [**clientTaxInformationRetrieve**](docs/TaxInformationApi.md#clienttaxinformationretrieve) | **GET** /api/v2/clients/{client_uuid}/tax-informations/{tax_information_uuid}/ | 
*TaxInformationApi* | [**clientTaxInformationUpdate**](docs/TaxInformationApi.md#clienttaxinformationupdate) | **PUT** /api/v2/clients/{client_uuid}/tax-informations/{tax_information_uuid}/ | 


<a name="documentation-for-models"></a>
## Documentation for Models

 - [org.openapitools.client.models.AUMEvoluation](docs/AUMEvoluation.md)
 - [org.openapitools.client.models.AUMPortfolioRisk](docs/AUMPortfolioRisk.md)
 - [org.openapitools.client.models.AccessLog](docs/AccessLog.md)
 - [org.openapitools.client.models.ActivityTypeEnum](docs/ActivityTypeEnum.md)
 - [org.openapitools.client.models.AddressCreate](docs/AddressCreate.md)
 - [org.openapitools.client.models.AddressList](docs/AddressList.md)
 - [org.openapitools.client.models.AddressUpdate](docs/AddressUpdate.md)
 - [org.openapitools.client.models.AllocationByAsset](docs/AllocationByAsset.md)
 - [org.openapitools.client.models.AllocationByCode](docs/AllocationByCode.md)
 - [org.openapitools.client.models.AllocationDetail](docs/AllocationDetail.md)
 - [org.openapitools.client.models.AllocationList](docs/AllocationList.md)
 - [org.openapitools.client.models.AppVersion](docs/AppVersion.md)
 - [org.openapitools.client.models.ApplicationClientUpdate](docs/ApplicationClientUpdate.md)
 - [org.openapitools.client.models.Assessment](docs/Assessment.md)
 - [org.openapitools.client.models.AssessmentStatusEnum](docs/AssessmentStatusEnum.md)
 - [org.openapitools.client.models.AssetCategory](docs/AssetCategory.md)
 - [org.openapitools.client.models.AssetConcentrationRisk](docs/AssetConcentrationRisk.md)
 - [org.openapitools.client.models.AssetDetail](docs/AssetDetail.md)
 - [org.openapitools.client.models.AssetGrowth](docs/AssetGrowth.md)
 - [org.openapitools.client.models.AssetList](docs/AssetList.md)
 - [org.openapitools.client.models.AssetModelPortfolio](docs/AssetModelPortfolio.md)
 - [org.openapitools.client.models.AssetTypeEnum](docs/AssetTypeEnum.md)
 - [org.openapitools.client.models.Attachment](docs/Attachment.md)
 - [org.openapitools.client.models.AuthenticationResponse](docs/AuthenticationResponse.md)
 - [org.openapitools.client.models.BankAccountCreateUpdate](docs/BankAccountCreateUpdate.md)
 - [org.openapitools.client.models.BankAccountList](docs/BankAccountList.md)
 - [org.openapitools.client.models.BasePortfolioTypeRestrictions](docs/BasePortfolioTypeRestrictions.md)
 - [org.openapitools.client.models.Category](docs/Category.md)
 - [org.openapitools.client.models.CategoryStatusEnum](docs/CategoryStatusEnum.md)
 - [org.openapitools.client.models.ChannelEnum](docs/ChannelEnum.md)
 - [org.openapitools.client.models.ClientCreate](docs/ClientCreate.md)
 - [org.openapitools.client.models.ClientDetail](docs/ClientDetail.md)
 - [org.openapitools.client.models.ClientEmbedRanking](docs/ClientEmbedRanking.md)
 - [org.openapitools.client.models.ClientPerformance](docs/ClientPerformance.md)
 - [org.openapitools.client.models.ClientRanking](docs/ClientRanking.md)
 - [org.openapitools.client.models.ClientReferral](docs/ClientReferral.md)
 - [org.openapitools.client.models.ConversationCreate](docs/ConversationCreate.md)
 - [org.openapitools.client.models.ConversationList](docs/ConversationList.md)
 - [org.openapitools.client.models.CoreCategoryGroup](docs/CoreCategoryGroup.md)
 - [org.openapitools.client.models.CountryField](docs/CountryField.md)
 - [org.openapitools.client.models.CountryList](docs/CountryList.md)
 - [org.openapitools.client.models.CreateOrder](docs/CreateOrder.md)
 - [org.openapitools.client.models.CreateOrderMethodEnum](docs/CreateOrderMethodEnum.md)
 - [org.openapitools.client.models.Currency](docs/Currency.md)
 - [org.openapitools.client.models.CurrentAllocation](docs/CurrentAllocation.md)
 - [org.openapitools.client.models.DepositCreate](docs/DepositCreate.md)
 - [org.openapitools.client.models.DepositDetail](docs/DepositDetail.md)
 - [org.openapitools.client.models.DepositList](docs/DepositList.md)
 - [org.openapitools.client.models.DepositTypeEnum](docs/DepositTypeEnum.md)
 - [org.openapitools.client.models.DocTypeEnum](docs/DocTypeEnum.md)
 - [org.openapitools.client.models.Document](docs/Document.md)
 - [org.openapitools.client.models.DocumentTypeEnum](docs/DocumentTypeEnum.md)
 - [org.openapitools.client.models.DurationEnum](docs/DurationEnum.md)
 - [org.openapitools.client.models.ETSForecastRequest](docs/ETSForecastRequest.md)
 - [org.openapitools.client.models.EmailVerifyRequest](docs/EmailVerifyRequest.md)
 - [org.openapitools.client.models.EmailVerifyView](docs/EmailVerifyView.md)
 - [org.openapitools.client.models.EmploymentStatusEnum](docs/EmploymentStatusEnum.md)
 - [org.openapitools.client.models.FeeTypeEnum](docs/FeeTypeEnum.md)
 - [org.openapitools.client.models.FeedActivityList](docs/FeedActivityList.md)
 - [org.openapitools.client.models.ForecastDecumulationRequest](docs/ForecastDecumulationRequest.md)
 - [org.openapitools.client.models.ForecastRequest](docs/ForecastRequest.md)
 - [org.openapitools.client.models.GenderEnum](docs/GenderEnum.md)
 - [org.openapitools.client.models.Goal](docs/Goal.md)
 - [org.openapitools.client.models.ImpersionationResponse](docs/ImpersionationResponse.md)
 - [org.openapitools.client.models.ImpersonationToken](docs/ImpersonationToken.md)
 - [org.openapitools.client.models.IntradayPrice](docs/IntradayPrice.md)
 - [org.openapitools.client.models.InvestorFee](docs/InvestorFee.md)
 - [org.openapitools.client.models.InvestorModelPortfolio](docs/InvestorModelPortfolio.md)
 - [org.openapitools.client.models.InvestorWithdrawalCreate](docs/InvestorWithdrawalCreate.md)
 - [org.openapitools.client.models.InvestorWithdrawalList](docs/InvestorWithdrawalList.md)
 - [org.openapitools.client.models.InvoiceDetails](docs/InvoiceDetails.md)
 - [org.openapitools.client.models.InvoiceList](docs/InvoiceList.md)
 - [org.openapitools.client.models.JSONWebToken](docs/JSONWebToken.md)
 - [org.openapitools.client.models.JWTRefreshResponse](docs/JWTRefreshResponse.md)
 - [org.openapitools.client.models.JWTResponse](docs/JWTResponse.md)
 - [org.openapitools.client.models.MaritalStatusEnum](docs/MaritalStatusEnum.md)
 - [org.openapitools.client.models.Message](docs/Message.md)
 - [org.openapitools.client.models.MinimumAppVersion](docs/MinimumAppVersion.md)
 - [org.openapitools.client.models.ModelPortfolioForecastRequest](docs/ModelPortfolioForecastRequest.md)
 - [org.openapitools.client.models.NationalDocument](docs/NationalDocument.md)
 - [org.openapitools.client.models.NationalityCreate](docs/NationalityCreate.md)
 - [org.openapitools.client.models.NationalityList](docs/NationalityList.md)
 - [org.openapitools.client.models.NationalityUpdate](docs/NationalityUpdate.md)
 - [org.openapitools.client.models.NucoroSetting](docs/NucoroSetting.md)
 - [org.openapitools.client.models.OnboardingResponse](docs/OnboardingResponse.md)
 - [org.openapitools.client.models.OnboardingToken](docs/OnboardingToken.md)
 - [org.openapitools.client.models.OrderList](docs/OrderList.md)
 - [org.openapitools.client.models.OrderListMethodEnum](docs/OrderListMethodEnum.md)
 - [org.openapitools.client.models.OrderListStatusEnum](docs/OrderListStatusEnum.md)
 - [org.openapitools.client.models.OrderTypeEnum](docs/OrderTypeEnum.md)
 - [org.openapitools.client.models.PaginatedAccessLogList](docs/PaginatedAccessLogList.md)
 - [org.openapitools.client.models.PaginatedAddressListList](docs/PaginatedAddressListList.md)
 - [org.openapitools.client.models.PaginatedAllocationListList](docs/PaginatedAllocationListList.md)
 - [org.openapitools.client.models.PaginatedAssessmentList](docs/PaginatedAssessmentList.md)
 - [org.openapitools.client.models.PaginatedAssetCategoryList](docs/PaginatedAssetCategoryList.md)
 - [org.openapitools.client.models.PaginatedAssetGrowthList](docs/PaginatedAssetGrowthList.md)
 - [org.openapitools.client.models.PaginatedAssetListList](docs/PaginatedAssetListList.md)
 - [org.openapitools.client.models.PaginatedBankAccountListList](docs/PaginatedBankAccountListList.md)
 - [org.openapitools.client.models.PaginatedBasePortfolioTypeRestrictionsList](docs/PaginatedBasePortfolioTypeRestrictionsList.md)
 - [org.openapitools.client.models.PaginatedCategoryList](docs/PaginatedCategoryList.md)
 - [org.openapitools.client.models.PaginatedClientDetailList](docs/PaginatedClientDetailList.md)
 - [org.openapitools.client.models.PaginatedConversationListList](docs/PaginatedConversationListList.md)
 - [org.openapitools.client.models.PaginatedCoreCategoryGroupList](docs/PaginatedCoreCategoryGroupList.md)
 - [org.openapitools.client.models.PaginatedCountryListList](docs/PaginatedCountryListList.md)
 - [org.openapitools.client.models.PaginatedDepositListList](docs/PaginatedDepositListList.md)
 - [org.openapitools.client.models.PaginatedDocumentList](docs/PaginatedDocumentList.md)
 - [org.openapitools.client.models.PaginatedFeedActivityListList](docs/PaginatedFeedActivityListList.md)
 - [org.openapitools.client.models.PaginatedGoalList](docs/PaginatedGoalList.md)
 - [org.openapitools.client.models.PaginatedIntradayPriceList](docs/PaginatedIntradayPriceList.md)
 - [org.openapitools.client.models.PaginatedInvestorFeeList](docs/PaginatedInvestorFeeList.md)
 - [org.openapitools.client.models.PaginatedInvestorModelPortfolioList](docs/PaginatedInvestorModelPortfolioList.md)
 - [org.openapitools.client.models.PaginatedInvestorWithdrawalListList](docs/PaginatedInvestorWithdrawalListList.md)
 - [org.openapitools.client.models.PaginatedInvoiceListList](docs/PaginatedInvoiceListList.md)
 - [org.openapitools.client.models.PaginatedMessageList](docs/PaginatedMessageList.md)
 - [org.openapitools.client.models.PaginatedNationalDocumentList](docs/PaginatedNationalDocumentList.md)
 - [org.openapitools.client.models.PaginatedNationalityListList](docs/PaginatedNationalityListList.md)
 - [org.openapitools.client.models.PaginatedOrderListList](docs/PaginatedOrderListList.md)
 - [org.openapitools.client.models.PaginatedPortfolioListList](docs/PaginatedPortfolioListList.md)
 - [org.openapitools.client.models.PaginatedPortfolioPerformanceList](docs/PaginatedPortfolioPerformanceList.md)
 - [org.openapitools.client.models.PaginatedPortfolioPerformancePositionsList](docs/PaginatedPortfolioPerformancePositionsList.md)
 - [org.openapitools.client.models.PaginatedPortfolioTypeList](docs/PaginatedPortfolioTypeList.md)
 - [org.openapitools.client.models.PaginatedPresetCategoryGroupList](docs/PaginatedPresetCategoryGroupList.md)
 - [org.openapitools.client.models.PaginatedPriceList](docs/PaginatedPriceList.md)
 - [org.openapitools.client.models.PaginatedQuestionList](docs/PaginatedQuestionList.md)
 - [org.openapitools.client.models.PaginatedRebalanceList](docs/PaginatedRebalanceList.md)
 - [org.openapitools.client.models.PaginatedStatementList](docs/PaginatedStatementList.md)
 - [org.openapitools.client.models.PaginatedTaxInformationListList](docs/PaginatedTaxInformationListList.md)
 - [org.openapitools.client.models.PaginatedTaxReportList](docs/PaginatedTaxReportList.md)
 - [org.openapitools.client.models.PaginatedTosList](docs/PaginatedTosList.md)
 - [org.openapitools.client.models.PaginatedVerificationDocumentList](docs/PaginatedVerificationDocumentList.md)
 - [org.openapitools.client.models.PaginatedVerificationListList](docs/PaginatedVerificationListList.md)
 - [org.openapitools.client.models.PaginatedWatchlistList](docs/PaginatedWatchlistList.md)
 - [org.openapitools.client.models.PasswordReset](docs/PasswordReset.md)
 - [org.openapitools.client.models.PasswordResetRequest](docs/PasswordResetRequest.md)
 - [org.openapitools.client.models.PasswordUpdate](docs/PasswordUpdate.md)
 - [org.openapitools.client.models.PatchedAddressUpdate](docs/PatchedAddressUpdate.md)
 - [org.openapitools.client.models.PatchedApplicationClientUpdate](docs/PatchedApplicationClientUpdate.md)
 - [org.openapitools.client.models.PatchedAssessment](docs/PatchedAssessment.md)
 - [org.openapitools.client.models.PatchedBankAccountCreateUpdate](docs/PatchedBankAccountCreateUpdate.md)
 - [org.openapitools.client.models.PatchedGoal](docs/PatchedGoal.md)
 - [org.openapitools.client.models.PatchedInvestorFee](docs/PatchedInvestorFee.md)
 - [org.openapitools.client.models.PatchedNationalityUpdate](docs/PatchedNationalityUpdate.md)
 - [org.openapitools.client.models.PatchedPasswordResetRequest](docs/PatchedPasswordResetRequest.md)
 - [org.openapitools.client.models.PatchedPortfolioUpdate](docs/PatchedPortfolioUpdate.md)
 - [org.openapitools.client.models.PatchedTaxInformationCreateUpdate](docs/PatchedTaxInformationCreateUpdate.md)
 - [org.openapitools.client.models.PortalSettingValueList](docs/PortalSettingValueList.md)
 - [org.openapitools.client.models.PortfolioCreate](docs/PortfolioCreate.md)
 - [org.openapitools.client.models.PortfolioDetail](docs/PortfolioDetail.md)
 - [org.openapitools.client.models.PortfolioList](docs/PortfolioList.md)
 - [org.openapitools.client.models.PortfolioPerformance](docs/PortfolioPerformance.md)
 - [org.openapitools.client.models.PortfolioPerformancePositions](docs/PortfolioPerformancePositions.md)
 - [org.openapitools.client.models.PortfolioType](docs/PortfolioType.md)
 - [org.openapitools.client.models.PortfolioTypeRestrictions](docs/PortfolioTypeRestrictions.md)
 - [org.openapitools.client.models.PortfolioUpdate](docs/PortfolioUpdate.md)
 - [org.openapitools.client.models.Position](docs/Position.md)
 - [org.openapitools.client.models.PresetCategoryGroup](docs/PresetCategoryGroup.md)
 - [org.openapitools.client.models.Price](docs/Price.md)
 - [org.openapitools.client.models.Question](docs/Question.md)
 - [org.openapitools.client.models.Rebalance](docs/Rebalance.md)
 - [org.openapitools.client.models.RebalanceStatusEnum](docs/RebalanceStatusEnum.md)
 - [org.openapitools.client.models.RelatedAssetSerializerWithAssetCategories](docs/RelatedAssetSerializerWithAssetCategories.md)
 - [org.openapitools.client.models.RelatedAssetSerializerWithPermission](docs/RelatedAssetSerializerWithPermission.md)
 - [org.openapitools.client.models.RelationshipManager](docs/RelationshipManager.md)
 - [org.openapitools.client.models.Response](docs/Response.md)
 - [org.openapitools.client.models.ResultEnum](docs/ResultEnum.md)
 - [org.openapitools.client.models.RiskChoice](docs/RiskChoice.md)
 - [org.openapitools.client.models.RiskChoiceQuestionCode](docs/RiskChoiceQuestionCode.md)
 - [org.openapitools.client.models.Statement](docs/Statement.md)
 - [org.openapitools.client.models.Status14bEnum](docs/Status14bEnum.md)
 - [org.openapitools.client.models.Status181Enum](docs/Status181Enum.md)
 - [org.openapitools.client.models.Status260Enum](docs/Status260Enum.md)
 - [org.openapitools.client.models.Status2efEnum](docs/Status2efEnum.md)
 - [org.openapitools.client.models.Status6f6Enum](docs/Status6f6Enum.md)
 - [org.openapitools.client.models.StatusB65Enum](docs/StatusB65Enum.md)
 - [org.openapitools.client.models.StatusB6aEnum](docs/StatusB6aEnum.md)
 - [org.openapitools.client.models.StatusBd7Enum](docs/StatusBd7Enum.md)
 - [org.openapitools.client.models.Subscribe](docs/Subscribe.md)
 - [org.openapitools.client.models.TaxInformationCreateUpdate](docs/TaxInformationCreateUpdate.md)
 - [org.openapitools.client.models.TaxInformationList](docs/TaxInformationList.md)
 - [org.openapitools.client.models.TaxReport](docs/TaxReport.md)
 - [org.openapitools.client.models.TitleEnum](docs/TitleEnum.md)
 - [org.openapitools.client.models.TokenRefresh](docs/TokenRefresh.md)
 - [org.openapitools.client.models.Tos](docs/Tos.md)
 - [org.openapitools.client.models.Unsubscribe](docs/Unsubscribe.md)
 - [org.openapitools.client.models.ValueUnitEnum](docs/ValueUnitEnum.md)
 - [org.openapitools.client.models.VerificationCreate](docs/VerificationCreate.md)
 - [org.openapitools.client.models.VerificationDocument](docs/VerificationDocument.md)
 - [org.openapitools.client.models.VerificationList](docs/VerificationList.md)
 - [org.openapitools.client.models.VerificationWithType](docs/VerificationWithType.md)
 - [org.openapitools.client.models.VerifyTypeEnum](docs/VerifyTypeEnum.md)
 - [org.openapitools.client.models.Watchlist](docs/Watchlist.md)
 - [org.openapitools.client.models.WebsocketAuthentication](docs/WebsocketAuthentication.md)
 - [org.openapitools.client.models.WithdrawalDetail](docs/WithdrawalDetail.md)


<a name="documentation-for-authorization"></a>
## Documentation for Authorization

<a name="basicAuth"></a>
### basicAuth

- **Type**: HTTP basic authentication

<a name="cookieAuth"></a>
### cookieAuth

- **Type**: API key
- **API key parameter name**: Session
- **Location**: 

<a name="jwtAuth"></a>
### jwtAuth

- **Type**: HTTP basic authentication

<a name="tokenAuth"></a>
### tokenAuth

- **Type**: API key
- **API key parameter name**: Authorization
- **Location**: HTTP header

