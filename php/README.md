# OpenAPIClient-php

No description


## Installation & Usage

### Requirements

PHP 7.3 and later.
Should also work with PHP 8.0 but has not been tested.

### Composer

To install the bindings via [Composer](https://getcomposer.org/), add the following to `composer.json`:

```json
{
  "repositories": [
    {
      "type": "vcs",
      "url": "https://github.com/GIT_USER_ID/GIT_REPO_ID.git"
    }
  ],
  "require": {
    "GIT_USER_ID/GIT_REPO_ID": "*@dev"
  }
}
```

Then run `composer install`

### Manual Installation

Download the files and include `autoload.php`:

```php
<?php
require_once('/path/to/OpenAPIClient-php/vendor/autoload.php');
```

## Getting Started

Please follow the [installation procedure](#installation--usage) and then run the following:

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


$apiInstance = new OpenAPI\Client\Api\AddressApi(
    // If you want use custom http client, pass your client which implements `GuzzleHttp\ClientInterface`.
    // This is optional, `GuzzleHttp\Client` will be used as default.
    new GuzzleHttp\Client(),
    $config
);
$client_uuid = 'client_uuid_example'; // string
$address_create = new \OpenAPI\Client\Model\AddressCreate(); // \OpenAPI\Client\Model\AddressCreate

try {
    $result = $apiInstance->clientAddressCreate($client_uuid, $address_create);
    print_r($result);
} catch (Exception $e) {
    echo 'Exception when calling AddressApi->clientAddressCreate: ', $e->getMessage(), PHP_EOL;
}

```

## API Endpoints

All URIs are relative to *http://localhost*

Class | Method | HTTP request | Description
------------ | ------------- | ------------- | -------------
*AddressApi* | [**clientAddressCreate**](docs/Api/AddressApi.md#clientaddresscreate) | **POST** /api/v2/clients/{client_uuid}/addresses/ | 
*AddressApi* | [**clientAddressDelete**](docs/Api/AddressApi.md#clientaddressdelete) | **DELETE** /api/v2/clients/{client_uuid}/addresses/{uuid}/ | 
*AddressApi* | [**clientAddressPartialUpdate**](docs/Api/AddressApi.md#clientaddresspartialupdate) | **PATCH** /api/v2/clients/{client_uuid}/addresses/{uuid}/ | 
*AddressApi* | [**clientAddressRetrieve**](docs/Api/AddressApi.md#clientaddressretrieve) | **GET** /api/v2/clients/{client_uuid}/addresses/{uuid}/ | 
*AddressApi* | [**clientAddressUpdate**](docs/Api/AddressApi.md#clientaddressupdate) | **PUT** /api/v2/clients/{client_uuid}/addresses/{uuid}/ | 
*AddressApi* | [**clientAddressesList**](docs/Api/AddressApi.md#clientaddresseslist) | **GET** /api/v2/clients/{client_uuid}/addresses/ | 
*AnalyticsApi* | [**apiV2RelationshipManagerAnalyticsAllocationsByAssetRetrieve**](docs/Api/AnalyticsApi.md#apiv2relationshipmanageranalyticsallocationsbyassetretrieve) | **GET** /api/v2/relationship-manager/{relationship_manager_uuid}/analytics/allocations-by-asset/ | 
*AnalyticsApi* | [**apiV2RelationshipManagerAnalyticsAssetConcentrationRiskRetrieve**](docs/Api/AnalyticsApi.md#apiv2relationshipmanageranalyticsassetconcentrationriskretrieve) | **GET** /api/v2/relationship-manager/{relationship_manager_uuid}/analytics/asset-concentration-risk/ | 
*AnalyticsApi* | [**apiV2RelationshipManagerAnalyticsAumEvolutionRetrieve**](docs/Api/AnalyticsApi.md#apiv2relationshipmanageranalyticsaumevolutionretrieve) | **GET** /api/v2/relationship-manager/{relationship_manager_uuid}/analytics/aum-evolution/ | 
*AnalyticsApi* | [**apiV2RelationshipManagerAnalyticsAumPortfolioRiskRetrieve**](docs/Api/AnalyticsApi.md#apiv2relationshipmanageranalyticsaumportfolioriskretrieve) | **GET** /api/v2/relationship-manager/{relationship_manager_uuid}/analytics/aum-portfolio-risk/ | 
*AnalyticsApi* | [**apiV2RelationshipManagerAnalyticsAumRetrieve**](docs/Api/AnalyticsApi.md#apiv2relationshipmanageranalyticsaumretrieve) | **GET** /api/v2/relationship-manager/{relationship_manager_uuid}/analytics/aum/ | 
*AnalyticsApi* | [**apiV2RelationshipManagerAnalyticsClientByRiskRetrieve**](docs/Api/AnalyticsApi.md#apiv2relationshipmanageranalyticsclientbyriskretrieve) | **GET** /api/v2/relationship-manager/{relationship_manager_uuid}/analytics/client-by-risk/ | 
*AnalyticsApi* | [**apiV2RelationshipManagerAnalyticsClientByStatusRetrieve**](docs/Api/AnalyticsApi.md#apiv2relationshipmanageranalyticsclientbystatusretrieve) | **GET** /api/v2/relationship-manager/{relationship_manager_uuid}/analytics/client-by-status/ | 
*AnalyticsApi* | [**apiV2RelationshipManagerAnalyticsClientRankingRetrieve**](docs/Api/AnalyticsApi.md#apiv2relationshipmanageranalyticsclientrankingretrieve) | **GET** /api/v2/relationship-manager/{relationship_manager_uuid}/analytics/client-ranking/ | 
*AnalyticsApi* | [**apiV2RelationshipManagerAnalyticsInflowsOutflowsRetrieve**](docs/Api/AnalyticsApi.md#apiv2relationshipmanageranalyticsinflowsoutflowsretrieve) | **GET** /api/v2/relationship-manager/{relationship_manager_uuid}/analytics/inflows-outflows/ | 
*AnalyticsApi* | [**apiV2RelationshipManagerAnalyticsPortfolioRiskPerformanceRetrieve**](docs/Api/AnalyticsApi.md#apiv2relationshipmanageranalyticsportfolioriskperformanceretrieve) | **GET** /api/v2/relationship-manager/{relationship_manager_uuid}/analytics/portfolio-risk-performance/ | 
*AnalyticsApi* | [**apiV2RelationshipManagerAnalyticsTotalActiveClientsRetrieve**](docs/Api/AnalyticsApi.md#apiv2relationshipmanageranalyticstotalactiveclientsretrieve) | **GET** /api/v2/relationship-manager/{relationship_manager_uuid}/analytics/total-active-clients/ | 
*ApiApi* | [**apiSchemaRetrieve**](docs/Api/ApiApi.md#apischemaretrieve) | **GET** /api/schema/ | 
*ApiApi* | [**apiV2AdviceEnginesEtsCategoriesList**](docs/Api/ApiApi.md#apiv2adviceenginesetscategorieslist) | **GET** /api/v2/advice-engines/ets/categories/ | 
*ApiApi* | [**apiV2AdviceEnginesEtsCoreCategoryGroupsList**](docs/Api/ApiApi.md#apiv2adviceenginesetscorecategorygroupslist) | **GET** /api/v2/advice-engines/ets/core-category-groups/ | 
*ApiApi* | [**apiV2AdviceEnginesEtsForecastCreate**](docs/Api/ApiApi.md#apiv2adviceenginesetsforecastcreate) | **POST** /api/v2/advice-engines/ets/forecast/ | 
*ApiApi* | [**apiV2AdviceEnginesEtsPresetCategoryGroupsList**](docs/Api/ApiApi.md#apiv2adviceenginesetspresetcategorygroupslist) | **GET** /api/v2/advice-engines/ets/preset-category-groups/ | 
*ApiApi* | [**apiV2AdviceEnginesModelPortfolioForecastCreate**](docs/Api/ApiApi.md#apiv2adviceenginesmodelportfolioforecastcreate) | **POST** /api/v2/advice-engines/model-portfolio/forecast/ | 
*ApiApi* | [**apiV2AdviceEnginesModelPortfolioModelPortfoliosList**](docs/Api/ApiApi.md#apiv2adviceenginesmodelportfoliomodelportfolioslist) | **GET** /api/v2/advice-engines/model-portfolio/model-portfolios/ | 
*ApiApi* | [**apiV2AdviceEnginesModelPortfolioModelPortfoliosRetrieve**](docs/Api/ApiApi.md#apiv2adviceenginesmodelportfoliomodelportfoliosretrieve) | **GET** /api/v2/advice-engines/model-portfolio/model-portfolios/{uuid}/ | 
*ApiApi* | [**apiV2AssetsCategoriesList**](docs/Api/ApiApi.md#apiv2assetscategorieslist) | **GET** /api/v2/assets/categories/ | 
*ApiApi* | [**apiV2AssetsIntradayPricesLatestRetrieve**](docs/Api/ApiApi.md#apiv2assetsintradaypriceslatestretrieve) | **GET** /api/v2/assets/{asset_identifier}/intraday-prices/latest/ | 
*ApiApi* | [**apiV2AssetsIntradayPricesList**](docs/Api/ApiApi.md#apiv2assetsintradaypriceslist) | **GET** /api/v2/assets/{asset_identifier}/intraday-prices/ | 
*ApiApi* | [**apiV2AssetsList**](docs/Api/ApiApi.md#apiv2assetslist) | **GET** /api/v2/assets/ | 
*ApiApi* | [**apiV2AssetsPerformanceList**](docs/Api/ApiApi.md#apiv2assetsperformancelist) | **GET** /api/v2/assets/{asset_identifier}/performance/ | 
*ApiApi* | [**apiV2AssetsPricesLatestRetrieve**](docs/Api/ApiApi.md#apiv2assetspriceslatestretrieve) | **GET** /api/v2/assets/{asset_identifier}/prices/latest/ | 
*ApiApi* | [**apiV2AssetsPricesList**](docs/Api/ApiApi.md#apiv2assetspriceslist) | **GET** /api/v2/assets/{asset_identifier}/prices/ | 
*ApiApi* | [**apiV2AssetsRetrieve**](docs/Api/ApiApi.md#apiv2assetsretrieve) | **GET** /api/v2/assets/{asset_identifier}/ | 
*ApiApi* | [**apiV2BillingInvoicesList**](docs/Api/ApiApi.md#apiv2billinginvoiceslist) | **GET** /api/v2/billing/invoices/ | 
*ApiApi* | [**apiV2BillingInvoicesRetrieve**](docs/Api/ApiApi.md#apiv2billinginvoicesretrieve) | **GET** /api/v2/billing/invoices/{uuid}/ | 
*ApiApi* | [**apiV2BrokerOrdersCreate**](docs/Api/ApiApi.md#apiv2brokerorderscreate) | **POST** /api/v2/broker/orders/ | 
*ApiApi* | [**apiV2BrokerOrdersDestroy**](docs/Api/ApiApi.md#apiv2brokerordersdestroy) | **DELETE** /api/v2/broker/orders/{uuid}/ | 
*ApiApi* | [**apiV2BrokerOrdersList**](docs/Api/ApiApi.md#apiv2brokerorderslist) | **GET** /api/v2/broker/orders/ | 
*ApiApi* | [**apiV2BrokerOrdersRetrieve**](docs/Api/ApiApi.md#apiv2brokerordersretrieve) | **GET** /api/v2/broker/orders/{uuid}/ | 
*ApiApi* | [**apiV2ClientsMeVerifyEmailCreate**](docs/Api/ApiApi.md#apiv2clientsmeverifyemailcreate) | **POST** /api/v2/clients/me/verify/email/ | 
*ApiApi* | [**apiV2ClientsNationalDocumentsList**](docs/Api/ApiApi.md#apiv2clientsnationaldocumentslist) | **GET** /api/v2/clients/national_documents/ | 
*ApiApi* | [**apiV2ClientsReferralRetrieve**](docs/Api/ApiApi.md#apiv2clientsreferralretrieve) | **GET** /api/v2/clients/referral/{referral_code}/ | 
*ApiApi* | [**apiV2ClientsVerifyEmailUpdate**](docs/Api/ApiApi.md#apiv2clientsverifyemailupdate) | **PUT** /api/v2/clients/{uuid}/verify/email/ | 
*ApiApi* | [**apiV2FeedsAccessLogsList**](docs/Api/ApiApi.md#apiv2feedsaccesslogslist) | **GET** /api/v2/feeds/access-logs/ | 
*ApiApi* | [**apiV2FeedsActivitiesList**](docs/Api/ApiApi.md#apiv2feedsactivitieslist) | **GET** /api/v2/feeds/activities/ | 
*ApiApi* | [**apiV2GoalsCreate**](docs/Api/ApiApi.md#apiv2goalscreate) | **POST** /api/v2/goals/ | 
*ApiApi* | [**apiV2GoalsDecumulationCreate**](docs/Api/ApiApi.md#apiv2goalsdecumulationcreate) | **POST** /api/v2/goals/decumulation/ | 
*ApiApi* | [**apiV2GoalsDestroy**](docs/Api/ApiApi.md#apiv2goalsdestroy) | **DELETE** /api/v2/goals/{uuid}/ | 
*ApiApi* | [**apiV2GoalsForecastCreate**](docs/Api/ApiApi.md#apiv2goalsforecastcreate) | **POST** /api/v2/goals/forecast/ | 
*ApiApi* | [**apiV2GoalsList**](docs/Api/ApiApi.md#apiv2goalslist) | **GET** /api/v2/goals/ | 
*ApiApi* | [**apiV2GoalsPartialUpdate**](docs/Api/ApiApi.md#apiv2goalspartialupdate) | **PATCH** /api/v2/goals/{uuid}/ | 
*ApiApi* | [**apiV2GoalsRetrieve**](docs/Api/ApiApi.md#apiv2goalsretrieve) | **GET** /api/v2/goals/{uuid}/ | 
*ApiApi* | [**apiV2InboxConversationDetailMessagesList**](docs/Api/ApiApi.md#apiv2inboxconversationdetailmessageslist) | **GET** /api/v2/inbox/conversations/{conversation}/ | 
*ApiApi* | [**apiV2InboxConversationsCreate**](docs/Api/ApiApi.md#apiv2inboxconversationscreate) | **POST** /api/v2/inbox/conversations/ | 
*ApiApi* | [**apiV2InboxConversationsList**](docs/Api/ApiApi.md#apiv2inboxconversationslist) | **GET** /api/v2/inbox/conversations/ | 
*ApiApi* | [**apiV2InboxConversationsMessagesAttachmentsRetrieve**](docs/Api/ApiApi.md#apiv2inboxconversationsmessagesattachmentsretrieve) | **GET** /api/v2/inbox/conversations/{conversation}/messages/{message}/attachments/{uuid}/ | 
*ApiApi* | [**apiV2InboxConversationsMessagesCreate**](docs/Api/ApiApi.md#apiv2inboxconversationsmessagescreate) | **POST** /api/v2/inbox/conversations/{conversation}/messages/ | 
*ApiApi* | [**apiV2MobileVersionRetrieve**](docs/Api/ApiApi.md#apiv2mobileversionretrieve) | **GET** /api/v2/mobile/{platform}/version/ | 
*ApiApi* | [**apiV2PlatformSettingsList**](docs/Api/ApiApi.md#apiv2platformsettingslist) | **GET** /api/v2/platform/settings/ | 
*ApiApi* | [**apiV2PortalCountriesList**](docs/Api/ApiApi.md#apiv2portalcountrieslist) | **GET** /api/v2/portal/countries/ | 
*ApiApi* | [**apiV2PortalSettingsRetrieve**](docs/Api/ApiApi.md#apiv2portalsettingsretrieve) | **GET** /api/v2/portal/settings/ | 
*ApiApi* | [**apiV2PortalTosCurrentRetrieve**](docs/Api/ApiApi.md#apiv2portaltoscurrentretrieve) | **GET** /api/v2/portal/tos/current/ | 
*ApiApi* | [**apiV2PortalTosList**](docs/Api/ApiApi.md#apiv2portaltoslist) | **GET** /api/v2/portal/tos/ | 
*ApiApi* | [**apiV2PortalTosRetrieve**](docs/Api/ApiApi.md#apiv2portaltosretrieve) | **GET** /api/v2/portal/tos/{uuid}/ | 
*ApiApi* | [**apiV2PortfoliosActivitiesList**](docs/Api/ApiApi.md#apiv2portfoliosactivitieslist) | **GET** /api/v2/portfolios/{portfolio_uuid}/activities/ | 
*ApiApi* | [**apiV2PortfoliosActivitiesRetrieve**](docs/Api/ApiApi.md#apiv2portfoliosactivitiesretrieve) | **GET** /api/v2/portfolios/{portfolio_uuid}/activities/{uuid}/ | 
*ApiApi* | [**apiV2PortfoliosAllocationsEndDay**](docs/Api/ApiApi.md#apiv2portfoliosallocationsendday) | **GET** /api/v2/portfolios/{portfolio_uuid}/allocations/end-day/ | 
*ApiApi* | [**apiV2PortfoliosAllocationsEndDayByDateRetrieve**](docs/Api/ApiApi.md#apiv2portfoliosallocationsenddaybydateretrieve) | **GET** /api/v2/portfolios/{portfolio_uuid}/allocations/end-day/{allocation_date}/ | 
*ApiApi* | [**apiV2PortfoliosAllocationsEndDayLatestRetrieve**](docs/Api/ApiApi.md#apiv2portfoliosallocationsenddaylatestretrieve) | **GET** /api/v2/portfolios/{portfolio_uuid}/allocations/end-day/latest/ | 
*ApiApi* | [**apiV2PortfoliosAllocationsHistoryRetrieve**](docs/Api/ApiApi.md#apiv2portfoliosallocationshistoryretrieve) | **GET** /api/v2/portfolios/{portfolio}/allocations/history/ | 
*ApiApi* | [**apiV2PortfoliosAllocationsIntradayLatestRetrieve**](docs/Api/ApiApi.md#apiv2portfoliosallocationsintradaylatestretrieve) | **GET** /api/v2/portfolios/{portfolio_uuid}/allocations/intraday/latest/ | 
*ApiApi* | [**apiV2PortfoliosAllocationsList**](docs/Api/ApiApi.md#apiv2portfoliosallocationslist) | **GET** /api/v2/portfolios/{portfolio_uuid}/allocations/ | 
*ApiApi* | [**apiV2PortfoliosAllocationsRetrieve**](docs/Api/ApiApi.md#apiv2portfoliosallocationsretrieve) | **GET** /api/v2/portfolios/{portfolio_uuid}/allocations/{id}/ | 
*ApiApi* | [**apiV2PortfoliosCreate**](docs/Api/ApiApi.md#apiv2portfolioscreate) | **POST** /api/v2/portfolios/ | 
*ApiApi* | [**apiV2PortfoliosDepositsCreate**](docs/Api/ApiApi.md#apiv2portfoliosdepositscreate) | **POST** /api/v2/portfolios/{portfolio_uuid}/deposits/ | 
*ApiApi* | [**apiV2PortfoliosDepositsDestroy**](docs/Api/ApiApi.md#apiv2portfoliosdepositsdestroy) | **DELETE** /api/v2/portfolios/{portfolio_uuid}/deposits/{uuid}/ | 
*ApiApi* | [**apiV2PortfoliosDepositsList**](docs/Api/ApiApi.md#apiv2portfoliosdepositslist) | **GET** /api/v2/portfolios/{portfolio_uuid}/deposits/ | 
*ApiApi* | [**apiV2PortfoliosDepositsRetrieve**](docs/Api/ApiApi.md#apiv2portfoliosdepositsretrieve) | **GET** /api/v2/portfolios/{portfolio_uuid}/deposits/{uuid}/ | 
*ApiApi* | [**apiV2PortfoliosDestroy**](docs/Api/ApiApi.md#apiv2portfoliosdestroy) | **DELETE** /api/v2/portfolios/{uuid}/ | 
*ApiApi* | [**apiV2PortfoliosList**](docs/Api/ApiApi.md#apiv2portfolioslist) | **GET** /api/v2/portfolios/ | 
*ApiApi* | [**apiV2PortfoliosOrdersCreate**](docs/Api/ApiApi.md#apiv2portfoliosorderscreate) | **POST** /api/v2/portfolios/{portfolio_uuid}/orders/ | 
*ApiApi* | [**apiV2PortfoliosOrdersDestroy**](docs/Api/ApiApi.md#apiv2portfoliosordersdestroy) | **DELETE** /api/v2/portfolios/{portfolio_uuid}/orders/{uuid}/ | 
*ApiApi* | [**apiV2PortfoliosOrdersList**](docs/Api/ApiApi.md#apiv2portfoliosorderslist) | **GET** /api/v2/portfolios/{portfolio_uuid}/orders/ | 
*ApiApi* | [**apiV2PortfoliosOrdersRetrieve**](docs/Api/ApiApi.md#apiv2portfoliosordersretrieve) | **GET** /api/v2/portfolios/{portfolio_uuid}/orders/{uuid}/ | 
*ApiApi* | [**apiV2PortfoliosPartialUpdate**](docs/Api/ApiApi.md#apiv2portfoliospartialupdate) | **PATCH** /api/v2/portfolios/{uuid}/ | 
*ApiApi* | [**apiV2PortfoliosPerformanceMwrrList**](docs/Api/ApiApi.md#apiv2portfoliosperformancemwrrlist) | **GET** /api/v2/portfolios/{portfolio_uuid}/performance/mwrr/ | 
*ApiApi* | [**apiV2PortfoliosPerformancePositionsList**](docs/Api/ApiApi.md#apiv2portfoliosperformancepositionslist) | **GET** /api/v2/portfolios/{portfolio_uuid}/performance/positions/ | 
*ApiApi* | [**apiV2PortfoliosPerformanceTwrrList**](docs/Api/ApiApi.md#apiv2portfoliosperformancetwrrlist) | **GET** /api/v2/portfolios/{portfolio_uuid}/performance/twrr/ | 
*ApiApi* | [**apiV2PortfoliosPortfoliotypesList**](docs/Api/ApiApi.md#apiv2portfoliosportfoliotypeslist) | **GET** /api/v2/portfolios/portfoliotypes/ | 
*ApiApi* | [**apiV2PortfoliosPortfoliotypesRestrictionsList**](docs/Api/ApiApi.md#apiv2portfoliosportfoliotypesrestrictionslist) | **GET** /api/v2/portfolios/portfoliotypes/{code}/restrictions/ | 
*ApiApi* | [**apiV2PortfoliosRebalancesList**](docs/Api/ApiApi.md#apiv2portfoliosrebalanceslist) | **GET** /api/v2/portfolios/{portfolio_uuid}/rebalances/ | 
*ApiApi* | [**apiV2PortfoliosRebalancesRetrieve**](docs/Api/ApiApi.md#apiv2portfoliosrebalancesretrieve) | **GET** /api/v2/portfolios/{portfolio_uuid}/rebalances/{uuid}/ | 
*ApiApi* | [**apiV2PortfoliosRestrictionsRetrieve**](docs/Api/ApiApi.md#apiv2portfoliosrestrictionsretrieve) | **GET** /api/v2/portfolios/{uuid}/restrictions/ | 
*ApiApi* | [**apiV2PortfoliosRetrieve**](docs/Api/ApiApi.md#apiv2portfoliosretrieve) | **GET** /api/v2/portfolios/{uuid}/ | 
*ApiApi* | [**apiV2PortfoliosUpdate**](docs/Api/ApiApi.md#apiv2portfoliosupdate) | **PUT** /api/v2/portfolios/{uuid}/ | 
*ApiApi* | [**apiV2PortfoliosWithdrawalsCreate**](docs/Api/ApiApi.md#apiv2portfolioswithdrawalscreate) | **POST** /api/v2/portfolios/{portfolio_uuid}/withdrawals/ | 
*ApiApi* | [**apiV2PortfoliosWithdrawalsDestroy**](docs/Api/ApiApi.md#apiv2portfolioswithdrawalsdestroy) | **DELETE** /api/v2/portfolios/{portfolio_uuid}/withdrawals/{uuid}/ | 
*ApiApi* | [**apiV2PortfoliosWithdrawalsList**](docs/Api/ApiApi.md#apiv2portfolioswithdrawalslist) | **GET** /api/v2/portfolios/{portfolio_uuid}/withdrawals/ | 
*ApiApi* | [**apiV2PortfoliosWithdrawalsRetrieve**](docs/Api/ApiApi.md#apiv2portfolioswithdrawalsretrieve) | **GET** /api/v2/portfolios/{portfolio_uuid}/withdrawals/{uuid}/ | 
*ApiApi* | [**apiV2RiskQuestionsList**](docs/Api/ApiApi.md#apiv2riskquestionslist) | **GET** /api/v2/risk/questions/ | 
*ApiApi* | [**apiV2VerificationsVerifierWebhookCreate**](docs/Api/ApiApi.md#apiv2verificationsverifierwebhookcreate) | **POST** /api/v2/verifications/verifier_webhook/{verifier}/{action}/ | 
*ApiApi* | [**apiV2WebsocketAuthenticationTicketCreate**](docs/Api/ApiApi.md#apiv2websocketauthenticationticketcreate) | **POST** /api/v2/websocket/authentication/ticket/ | 
*ApiApi* | [**apiV2WebsocketAuthorizeAssetCreate**](docs/Api/ApiApi.md#apiv2websocketauthorizeassetcreate) | **POST** /api/v2/websocket/authorize/asset/ | 
*ApiApi* | [**apiV2WebsocketAuthorizeCreate**](docs/Api/ApiApi.md#apiv2websocketauthorizecreate) | **POST** /api/v2/websocket/authorize/ | 
*ApiApi* | [**apiV2WebsocketAuthorizePortfolioCreate**](docs/Api/ApiApi.md#apiv2websocketauthorizeportfoliocreate) | **POST** /api/v2/websocket/authorize/portfolio/ | 
*ApiApi* | [**apiV2WebsocketOnSubscribeCreate**](docs/Api/ApiApi.md#apiv2websocketonsubscribecreate) | **POST** /api/v2/websocket/on_subscribe/ | 
*ApiApi* | [**apiV2WebsocketOnUnsubscribeCreate**](docs/Api/ApiApi.md#apiv2websocketonunsubscribecreate) | **POST** /api/v2/websocket/on_unsubscribe/ | 
*ApplicationApi* | [**apiV2ClientsActivitiesList**](docs/Api/ApplicationApi.md#apiv2clientsactivitieslist) | **GET** /api/v2/clients/{client_uuid}/activities/ | 
*ApplicationApi* | [**apiV2ClientsActivitiesRetrieve**](docs/Api/ApplicationApi.md#apiv2clientsactivitiesretrieve) | **GET** /api/v2/clients/{client_uuid}/activities/{uuid}/ | 
*ApplicationApi* | [**apiV2ClientsAdviceEnginesList**](docs/Api/ApplicationApi.md#apiv2clientsadviceengineslist) | **GET** /api/v2/clients/{client_uuid}/advice-engines/ | 
*ApplicationApi* | [**apiV2ClientsAdviceEnginesRetrieve**](docs/Api/ApplicationApi.md#apiv2clientsadviceenginesretrieve) | **GET** /api/v2/clients/{client_uuid}/advice-engines/{uuid}/ | 
*ApplicationApi* | [**apiV2ClientsBillingFeesCreate**](docs/Api/ApplicationApi.md#apiv2clientsbillingfeescreate) | **POST** /api/v2/clients/{client_uuid}/billing/fees/ | 
*ApplicationApi* | [**apiV2ClientsBillingFeesDestroy**](docs/Api/ApplicationApi.md#apiv2clientsbillingfeesdestroy) | **DELETE** /api/v2/clients/{client_uuid}/billing/fees/{uuid}/ | 
*ApplicationApi* | [**apiV2ClientsBillingFeesList**](docs/Api/ApplicationApi.md#apiv2clientsbillingfeeslist) | **GET** /api/v2/clients/{client_uuid}/billing/fees/ | 
*ApplicationApi* | [**apiV2ClientsBillingFeesPartialUpdate**](docs/Api/ApplicationApi.md#apiv2clientsbillingfeespartialupdate) | **PATCH** /api/v2/clients/{client_uuid}/billing/fees/{uuid}/ | 
*ApplicationApi* | [**apiV2ClientsBillingFeesRetrieve**](docs/Api/ApplicationApi.md#apiv2clientsbillingfeesretrieve) | **GET** /api/v2/clients/{client_uuid}/billing/fees/{uuid}/ | 
*ApplicationApi* | [**apiV2ClientsBillingFeesUpdate**](docs/Api/ApplicationApi.md#apiv2clientsbillingfeesupdate) | **PUT** /api/v2/clients/{client_uuid}/billing/fees/{uuid}/ | 
*ApplicationApi* | [**apiV2ClientsBillingInvoicesList**](docs/Api/ApplicationApi.md#apiv2clientsbillinginvoiceslist) | **GET** /api/v2/clients/{client_uuid}/billing/invoices/ | 
*ApplicationApi* | [**apiV2ClientsBillingInvoicesRetrieve**](docs/Api/ApplicationApi.md#apiv2clientsbillinginvoicesretrieve) | **GET** /api/v2/clients/{client_uuid}/billing/invoices/{uuid}/ | 
*ApplicationApi* | [**apiV2ClientsReportStatementsList**](docs/Api/ApplicationApi.md#apiv2clientsreportstatementslist) | **GET** /api/v2/clients/{client_uuid}/report/statements/ | 
*ApplicationApi* | [**apiV2ClientsReportStatementsRetrieve**](docs/Api/ApplicationApi.md#apiv2clientsreportstatementsretrieve) | **GET** /api/v2/clients/{client_uuid}/report/statements/{uuid}/ | 
*ApplicationApi* | [**apiV2ClientsReportTaxReportsList**](docs/Api/ApplicationApi.md#apiv2clientsreporttaxreportslist) | **GET** /api/v2/clients/{client_uuid}/report/tax-reports/ | 
*ApplicationApi* | [**apiV2ClientsReportTaxReportsRetrieve**](docs/Api/ApplicationApi.md#apiv2clientsreporttaxreportsretrieve) | **GET** /api/v2/clients/{client_uuid}/report/tax-reports/{uuid}/ | 
*ApplicationApi* | [**apiV2ClientsWatchlistsCreate**](docs/Api/ApplicationApi.md#apiv2clientswatchlistscreate) | **POST** /api/v2/clients/{client_uuid}/watchlists/ | 
*ApplicationApi* | [**apiV2ClientsWatchlistsDestroy**](docs/Api/ApplicationApi.md#apiv2clientswatchlistsdestroy) | **DELETE** /api/v2/clients/{client_uuid}/watchlists/{uuid}/ | 
*ApplicationApi* | [**apiV2ClientsWatchlistsList**](docs/Api/ApplicationApi.md#apiv2clientswatchlistslist) | **GET** /api/v2/clients/{client_uuid}/watchlists/ | 
*ApplicationApi* | [**apiV2ClientsWatchlistsRetrieve**](docs/Api/ApplicationApi.md#apiv2clientswatchlistsretrieve) | **GET** /api/v2/clients/{client_uuid}/watchlists/{uuid}/ | 
*ApplicationApi* | [**apiV2ClientsWatchlistsUpdate**](docs/Api/ApplicationApi.md#apiv2clientswatchlistsupdate) | **PUT** /api/v2/clients/{client_uuid}/watchlists/{uuid}/ | 
*ApplicationApi* | [**apiV2RelationshipManagerAnalyticsAllocationsByAssetRetrieve**](docs/Api/ApplicationApi.md#apiv2relationshipmanageranalyticsallocationsbyassetretrieve) | **GET** /api/v2/relationship-manager/{relationship_manager_uuid}/analytics/allocations-by-asset/ | 
*ApplicationApi* | [**apiV2RelationshipManagerAnalyticsAssetConcentrationRiskRetrieve**](docs/Api/ApplicationApi.md#apiv2relationshipmanageranalyticsassetconcentrationriskretrieve) | **GET** /api/v2/relationship-manager/{relationship_manager_uuid}/analytics/asset-concentration-risk/ | 
*ApplicationApi* | [**apiV2RelationshipManagerAnalyticsAumEvolutionRetrieve**](docs/Api/ApplicationApi.md#apiv2relationshipmanageranalyticsaumevolutionretrieve) | **GET** /api/v2/relationship-manager/{relationship_manager_uuid}/analytics/aum-evolution/ | 
*ApplicationApi* | [**apiV2RelationshipManagerAnalyticsAumPortfolioRiskRetrieve**](docs/Api/ApplicationApi.md#apiv2relationshipmanageranalyticsaumportfolioriskretrieve) | **GET** /api/v2/relationship-manager/{relationship_manager_uuid}/analytics/aum-portfolio-risk/ | 
*ApplicationApi* | [**apiV2RelationshipManagerAnalyticsAumRetrieve**](docs/Api/ApplicationApi.md#apiv2relationshipmanageranalyticsaumretrieve) | **GET** /api/v2/relationship-manager/{relationship_manager_uuid}/analytics/aum/ | 
*ApplicationApi* | [**apiV2RelationshipManagerAnalyticsClientByRiskRetrieve**](docs/Api/ApplicationApi.md#apiv2relationshipmanageranalyticsclientbyriskretrieve) | **GET** /api/v2/relationship-manager/{relationship_manager_uuid}/analytics/client-by-risk/ | 
*ApplicationApi* | [**apiV2RelationshipManagerAnalyticsClientByStatusRetrieve**](docs/Api/ApplicationApi.md#apiv2relationshipmanageranalyticsclientbystatusretrieve) | **GET** /api/v2/relationship-manager/{relationship_manager_uuid}/analytics/client-by-status/ | 
*ApplicationApi* | [**apiV2RelationshipManagerAnalyticsClientRankingRetrieve**](docs/Api/ApplicationApi.md#apiv2relationshipmanageranalyticsclientrankingretrieve) | **GET** /api/v2/relationship-manager/{relationship_manager_uuid}/analytics/client-ranking/ | 
*ApplicationApi* | [**apiV2RelationshipManagerAnalyticsInflowsOutflowsRetrieve**](docs/Api/ApplicationApi.md#apiv2relationshipmanageranalyticsinflowsoutflowsretrieve) | **GET** /api/v2/relationship-manager/{relationship_manager_uuid}/analytics/inflows-outflows/ | 
*ApplicationApi* | [**apiV2RelationshipManagerAnalyticsPortfolioRiskPerformanceRetrieve**](docs/Api/ApplicationApi.md#apiv2relationshipmanageranalyticsportfolioriskperformanceretrieve) | **GET** /api/v2/relationship-manager/{relationship_manager_uuid}/analytics/portfolio-risk-performance/ | 
*ApplicationApi* | [**apiV2RelationshipManagerAnalyticsTotalActiveClientsRetrieve**](docs/Api/ApplicationApi.md#apiv2relationshipmanageranalyticstotalactiveclientsretrieve) | **GET** /api/v2/relationship-manager/{relationship_manager_uuid}/analytics/total-active-clients/ | 
*ApplicationApi* | [**apiV2RelationshipManagerMeRetrieve**](docs/Api/ApplicationApi.md#apiv2relationshipmanagermeretrieve) | **GET** /api/v2/relationship-manager/me/ | 
*ApplicationApi* | [**apiV2RelationshipManagerRetrieve**](docs/Api/ApplicationApi.md#apiv2relationshipmanagerretrieve) | **GET** /api/v2/relationship-manager/{uuid}/ | 
*ApplicationApi* | [**apiV2ReportStatementsList**](docs/Api/ApplicationApi.md#apiv2reportstatementslist) | **GET** /api/v2/report/statements/ | 
*ApplicationApi* | [**apiV2ReportStatementsRetrieve**](docs/Api/ApplicationApi.md#apiv2reportstatementsretrieve) | **GET** /api/v2/report/statements/{uuid}/ | 
*ApplicationApi* | [**apiV2ReportTaxReportList**](docs/Api/ApplicationApi.md#apiv2reporttaxreportlist) | **GET** /api/v2/report/tax-report/ | 
*ApplicationApi* | [**apiV2ReportTaxReportRetrieve**](docs/Api/ApplicationApi.md#apiv2reporttaxreportretrieve) | **GET** /api/v2/report/tax-report/{uuid}/ | 
*ApplicationApi* | [**clientAddressCreate**](docs/Api/ApplicationApi.md#clientaddresscreate) | **POST** /api/v2/clients/{client_uuid}/addresses/ | 
*ApplicationApi* | [**clientAddressDelete**](docs/Api/ApplicationApi.md#clientaddressdelete) | **DELETE** /api/v2/clients/{client_uuid}/addresses/{uuid}/ | 
*ApplicationApi* | [**clientAddressPartialUpdate**](docs/Api/ApplicationApi.md#clientaddresspartialupdate) | **PATCH** /api/v2/clients/{client_uuid}/addresses/{uuid}/ | 
*ApplicationApi* | [**clientAddressRetrieve**](docs/Api/ApplicationApi.md#clientaddressretrieve) | **GET** /api/v2/clients/{client_uuid}/addresses/{uuid}/ | 
*ApplicationApi* | [**clientAddressUpdate**](docs/Api/ApplicationApi.md#clientaddressupdate) | **PUT** /api/v2/clients/{client_uuid}/addresses/{uuid}/ | 
*ApplicationApi* | [**clientAddressesList**](docs/Api/ApplicationApi.md#clientaddresseslist) | **GET** /api/v2/clients/{client_uuid}/addresses/ | 
*ApplicationApi* | [**clientBankAccountCreate**](docs/Api/ApplicationApi.md#clientbankaccountcreate) | **POST** /api/v2/clients/{client_uuid}/bank-accounts/ | 
*ApplicationApi* | [**clientBankAccountDelete**](docs/Api/ApplicationApi.md#clientbankaccountdelete) | **DELETE** /api/v2/clients/{client_uuid}/bank-accounts/{uuid}/ | 
*ApplicationApi* | [**clientBankAccountPartialUpdate**](docs/Api/ApplicationApi.md#clientbankaccountpartialupdate) | **PATCH** /api/v2/clients/{client_uuid}/bank-accounts/{uuid}/ | 
*ApplicationApi* | [**clientBankAccountRetrieve**](docs/Api/ApplicationApi.md#clientbankaccountretrieve) | **GET** /api/v2/clients/{client_uuid}/bank-accounts/{uuid}/ | 
*ApplicationApi* | [**clientBankAccountUpdate**](docs/Api/ApplicationApi.md#clientbankaccountupdate) | **PUT** /api/v2/clients/{client_uuid}/bank-accounts/{uuid}/ | 
*ApplicationApi* | [**clientBankAccountsList**](docs/Api/ApplicationApi.md#clientbankaccountslist) | **GET** /api/v2/clients/{client_uuid}/bank-accounts/ | 
*ApplicationApi* | [**clientCompleteOnboarding**](docs/Api/ApplicationApi.md#clientcompleteonboarding) | **POST** /api/v2/clients/{uuid}/onboarding/complete/ | 
*ApplicationApi* | [**clientCreate**](docs/Api/ApplicationApi.md#clientcreate) | **POST** /api/v2/clients/ | 
*ApplicationApi* | [**clientDocumentCreate**](docs/Api/ApplicationApi.md#clientdocumentcreate) | **POST** /api/v2/clients/{client_uuid}/documents/ | 
*ApplicationApi* | [**clientDocumentDelete**](docs/Api/ApplicationApi.md#clientdocumentdelete) | **DELETE** /api/v2/clients/{client_uuid}/documents/{uuid}/ | 
*ApplicationApi* | [**clientDocumentList**](docs/Api/ApplicationApi.md#clientdocumentlist) | **GET** /api/v2/clients/{client_uuid}/documents/ | 
*ApplicationApi* | [**clientDocumentRetrieve**](docs/Api/ApplicationApi.md#clientdocumentretrieve) | **GET** /api/v2/clients/{client_uuid}/documents/{uuid}/ | 
*ApplicationApi* | [**clientList**](docs/Api/ApplicationApi.md#clientlist) | **GET** /api/v2/clients/ | 
*ApplicationApi* | [**clientNationalityCreate**](docs/Api/ApplicationApi.md#clientnationalitycreate) | **POST** /api/v2/clients/{client_uuid}/nationalities/ | 
*ApplicationApi* | [**clientNationlitiesList**](docs/Api/ApplicationApi.md#clientnationlitieslist) | **GET** /api/v2/clients/{client_uuid}/nationalities/ | 
*ApplicationApi* | [**clientNationlityDelete**](docs/Api/ApplicationApi.md#clientnationlitydelete) | **DELETE** /api/v2/clients/{client_uuid}/nationalities/{uuid}/ | 
*ApplicationApi* | [**clientNationlityPartialUpdate**](docs/Api/ApplicationApi.md#clientnationlitypartialupdate) | **PATCH** /api/v2/clients/{client_uuid}/nationalities/{uuid}/ | 
*ApplicationApi* | [**clientNationlityRetrieve**](docs/Api/ApplicationApi.md#clientnationlityretrieve) | **GET** /api/v2/clients/{client_uuid}/nationalities/{uuid}/ | 
*ApplicationApi* | [**clientNationlityUpdate**](docs/Api/ApplicationApi.md#clientnationlityupdate) | **PUT** /api/v2/clients/{client_uuid}/nationalities/{uuid}/ | 
*ApplicationApi* | [**clientPartialUpdate**](docs/Api/ApplicationApi.md#clientpartialupdate) | **PATCH** /api/v2/clients/{uuid}/ | 
*ApplicationApi* | [**clientRetrieve**](docs/Api/ApplicationApi.md#clientretrieve) | **GET** /api/v2/clients/{uuid}/ | 
*ApplicationApi* | [**clientRiskAssessmentCreate**](docs/Api/ApplicationApi.md#clientriskassessmentcreate) | **POST** /api/v2/clients/{client_uuid}/risk-assessments/ | 
*ApplicationApi* | [**clientRiskAssessmentDelete**](docs/Api/ApplicationApi.md#clientriskassessmentdelete) | **DELETE** /api/v2/clients/{client_uuid}/risk-assessments/{uuid}/ | 
*ApplicationApi* | [**clientRiskAssessmentList**](docs/Api/ApplicationApi.md#clientriskassessmentlist) | **GET** /api/v2/clients/{client_uuid}/risk-assessments/ | 
*ApplicationApi* | [**clientRiskAssessmentPartialUpdate**](docs/Api/ApplicationApi.md#clientriskassessmentpartialupdate) | **PATCH** /api/v2/clients/{client_uuid}/risk-assessments/{uuid}/ | 
*ApplicationApi* | [**clientRiskAssessmentRetrieve**](docs/Api/ApplicationApi.md#clientriskassessmentretrieve) | **GET** /api/v2/clients/{client_uuid}/risk-assessments/{uuid}/ | 
*ApplicationApi* | [**clientTWRRPerformance**](docs/Api/ApplicationApi.md#clienttwrrperformance) | **GET** /api/v2/clients/{uuid}/performance/twrr/ | 
*ApplicationApi* | [**clientTaxInformationCreate**](docs/Api/ApplicationApi.md#clienttaxinformationcreate) | **POST** /api/v2/clients/{client_uuid}/tax-informations/ | 
*ApplicationApi* | [**clientTaxInformationDelete**](docs/Api/ApplicationApi.md#clienttaxinformationdelete) | **DELETE** /api/v2/clients/{client_uuid}/tax-informations/{uuid}/ | 
*ApplicationApi* | [**clientTaxInformationList**](docs/Api/ApplicationApi.md#clienttaxinformationlist) | **GET** /api/v2/clients/{client_uuid}/tax-informations/ | 
*ApplicationApi* | [**clientTaxInformationPartialUpdate**](docs/Api/ApplicationApi.md#clienttaxinformationpartialupdate) | **PATCH** /api/v2/clients/{client_uuid}/tax-informations/{uuid}/ | 
*ApplicationApi* | [**clientTaxInformationRetrieve**](docs/Api/ApplicationApi.md#clienttaxinformationretrieve) | **GET** /api/v2/clients/{client_uuid}/tax-informations/{uuid}/ | 
*ApplicationApi* | [**clientTaxInformationUpdate**](docs/Api/ApplicationApi.md#clienttaxinformationupdate) | **PUT** /api/v2/clients/{client_uuid}/tax-informations/{uuid}/ | 
*ApplicationApi* | [**clientUpdate**](docs/Api/ApplicationApi.md#clientupdate) | **PUT** /api/v2/clients/{uuid}/ | 
*ApplicationApi* | [**clientVerificationCreate**](docs/Api/ApplicationApi.md#clientverificationcreate) | **POST** /api/v2/clients/{client_uuid}/verifications/{verify_type_code}/ | 
*ApplicationApi* | [**clientVerificationDocumentCreate**](docs/Api/ApplicationApi.md#clientverificationdocumentcreate) | **POST** /api/v2/clients/{client_uuid}/verifications/{verify_type_code}/documents/ | 
*ApplicationApi* | [**clientVerificationDocumentDelete**](docs/Api/ApplicationApi.md#clientverificationdocumentdelete) | **DELETE** /api/v2/clients/{client_uuid}/verifications/{verify_type_code}/documents/{uuid}/ | 
*ApplicationApi* | [**clientVerificationDocumentList**](docs/Api/ApplicationApi.md#clientverificationdocumentlist) | **GET** /api/v2/clients/{client_uuid}/verifications/{verify_type_code}/documents/ | 
*ApplicationApi* | [**clientVerificationDocumentPartialUpdate**](docs/Api/ApplicationApi.md#clientverificationdocumentpartialupdate) | **PATCH** /api/v2/clients/{client_uuid}/verifications/{verify_type_code}/documents/{uuid}/ | 
*ApplicationApi* | [**clientVerificationDocumentRetrieve**](docs/Api/ApplicationApi.md#clientverificationdocumentretrieve) | **GET** /api/v2/clients/{client_uuid}/verifications/{verify_type_code}/documents/{uuid}/ | 
*ApplicationApi* | [**clientVerificationDocumentUpdate**](docs/Api/ApplicationApi.md#clientverificationdocumentupdate) | **PUT** /api/v2/clients/{client_uuid}/verifications/{verify_type_code}/documents/{uuid}/ | 
*ApplicationApi* | [**clientVerificationList**](docs/Api/ApplicationApi.md#clientverificationlist) | **GET** /api/v2/clients/{client_uuid}/verifications/{verify_type_code}/ | 
*ApplicationApi* | [**clientVerificationRetrieve**](docs/Api/ApplicationApi.md#clientverificationretrieve) | **GET** /api/v2/clients/{client_uuid}/verifications/{verify_type_code}/{uuid}/ | 
*AuthApi* | [**authGetOnboardingToken**](docs/Api/AuthApi.md#authgetonboardingtoken) | **POST** /api/v2/auth/onboarding_token/ | 
*AuthApi* | [**authImpersonationToken**](docs/Api/AuthApi.md#authimpersonationtoken) | **POST** /api/v2/auth/impersonation_token/ | 
*AuthApi* | [**authLogin**](docs/Api/AuthApi.md#authlogin) | **POST** /api/v2/auth/login/ | 
*AuthApi* | [**authResfreshJWTToken**](docs/Api/AuthApi.md#authresfreshjwttoken) | **POST** /api/v2/auth/token_renewal/ | 
*AuthApi* | [**userChangePassword**](docs/Api/AuthApi.md#userchangepassword) | **PUT** /api/v2/auth/password/ | 
*AuthApi* | [**userRequestPasswordReset**](docs/Api/AuthApi.md#userrequestpasswordreset) | **PATCH** /api/v2/auth/password/ | 
*AuthApi* | [**userSetPassword**](docs/Api/AuthApi.md#usersetpassword) | **POST** /api/v2/auth/password/ | 
*BankAccountApi* | [**clientBankAccountCreate**](docs/Api/BankAccountApi.md#clientbankaccountcreate) | **POST** /api/v2/clients/{client_uuid}/bank-accounts/ | 
*BankAccountApi* | [**clientBankAccountDelete**](docs/Api/BankAccountApi.md#clientbankaccountdelete) | **DELETE** /api/v2/clients/{client_uuid}/bank-accounts/{uuid}/ | 
*BankAccountApi* | [**clientBankAccountPartialUpdate**](docs/Api/BankAccountApi.md#clientbankaccountpartialupdate) | **PATCH** /api/v2/clients/{client_uuid}/bank-accounts/{uuid}/ | 
*BankAccountApi* | [**clientBankAccountRetrieve**](docs/Api/BankAccountApi.md#clientbankaccountretrieve) | **GET** /api/v2/clients/{client_uuid}/bank-accounts/{uuid}/ | 
*BankAccountApi* | [**clientBankAccountUpdate**](docs/Api/BankAccountApi.md#clientbankaccountupdate) | **PUT** /api/v2/clients/{client_uuid}/bank-accounts/{uuid}/ | 
*BankAccountApi* | [**clientBankAccountsList**](docs/Api/BankAccountApi.md#clientbankaccountslist) | **GET** /api/v2/clients/{client_uuid}/bank-accounts/ | 
*ClientApi* | [**clientAddressCreate**](docs/Api/ClientApi.md#clientaddresscreate) | **POST** /api/v2/clients/{client_uuid}/addresses/ | 
*ClientApi* | [**clientAddressDelete**](docs/Api/ClientApi.md#clientaddressdelete) | **DELETE** /api/v2/clients/{client_uuid}/addresses/{uuid}/ | 
*ClientApi* | [**clientAddressPartialUpdate**](docs/Api/ClientApi.md#clientaddresspartialupdate) | **PATCH** /api/v2/clients/{client_uuid}/addresses/{uuid}/ | 
*ClientApi* | [**clientAddressRetrieve**](docs/Api/ClientApi.md#clientaddressretrieve) | **GET** /api/v2/clients/{client_uuid}/addresses/{uuid}/ | 
*ClientApi* | [**clientAddressUpdate**](docs/Api/ClientApi.md#clientaddressupdate) | **PUT** /api/v2/clients/{client_uuid}/addresses/{uuid}/ | 
*ClientApi* | [**clientAddressesList**](docs/Api/ClientApi.md#clientaddresseslist) | **GET** /api/v2/clients/{client_uuid}/addresses/ | 
*ClientApi* | [**clientBankAccountCreate**](docs/Api/ClientApi.md#clientbankaccountcreate) | **POST** /api/v2/clients/{client_uuid}/bank-accounts/ | 
*ClientApi* | [**clientBankAccountDelete**](docs/Api/ClientApi.md#clientbankaccountdelete) | **DELETE** /api/v2/clients/{client_uuid}/bank-accounts/{uuid}/ | 
*ClientApi* | [**clientBankAccountPartialUpdate**](docs/Api/ClientApi.md#clientbankaccountpartialupdate) | **PATCH** /api/v2/clients/{client_uuid}/bank-accounts/{uuid}/ | 
*ClientApi* | [**clientBankAccountRetrieve**](docs/Api/ClientApi.md#clientbankaccountretrieve) | **GET** /api/v2/clients/{client_uuid}/bank-accounts/{uuid}/ | 
*ClientApi* | [**clientBankAccountUpdate**](docs/Api/ClientApi.md#clientbankaccountupdate) | **PUT** /api/v2/clients/{client_uuid}/bank-accounts/{uuid}/ | 
*ClientApi* | [**clientBankAccountsList**](docs/Api/ClientApi.md#clientbankaccountslist) | **GET** /api/v2/clients/{client_uuid}/bank-accounts/ | 
*ClientApi* | [**clientCompleteOnboarding**](docs/Api/ClientApi.md#clientcompleteonboarding) | **POST** /api/v2/clients/{uuid}/onboarding/complete/ | 
*ClientApi* | [**clientCreate**](docs/Api/ClientApi.md#clientcreate) | **POST** /api/v2/clients/ | 
*ClientApi* | [**clientDocumentCreate**](docs/Api/ClientApi.md#clientdocumentcreate) | **POST** /api/v2/clients/{client_uuid}/documents/ | 
*ClientApi* | [**clientDocumentDelete**](docs/Api/ClientApi.md#clientdocumentdelete) | **DELETE** /api/v2/clients/{client_uuid}/documents/{uuid}/ | 
*ClientApi* | [**clientDocumentList**](docs/Api/ClientApi.md#clientdocumentlist) | **GET** /api/v2/clients/{client_uuid}/documents/ | 
*ClientApi* | [**clientDocumentRetrieve**](docs/Api/ClientApi.md#clientdocumentretrieve) | **GET** /api/v2/clients/{client_uuid}/documents/{uuid}/ | 
*ClientApi* | [**clientList**](docs/Api/ClientApi.md#clientlist) | **GET** /api/v2/clients/ | 
*ClientApi* | [**clientNationalityCreate**](docs/Api/ClientApi.md#clientnationalitycreate) | **POST** /api/v2/clients/{client_uuid}/nationalities/ | 
*ClientApi* | [**clientNationlitiesList**](docs/Api/ClientApi.md#clientnationlitieslist) | **GET** /api/v2/clients/{client_uuid}/nationalities/ | 
*ClientApi* | [**clientNationlityDelete**](docs/Api/ClientApi.md#clientnationlitydelete) | **DELETE** /api/v2/clients/{client_uuid}/nationalities/{uuid}/ | 
*ClientApi* | [**clientNationlityPartialUpdate**](docs/Api/ClientApi.md#clientnationlitypartialupdate) | **PATCH** /api/v2/clients/{client_uuid}/nationalities/{uuid}/ | 
*ClientApi* | [**clientNationlityRetrieve**](docs/Api/ClientApi.md#clientnationlityretrieve) | **GET** /api/v2/clients/{client_uuid}/nationalities/{uuid}/ | 
*ClientApi* | [**clientNationlityUpdate**](docs/Api/ClientApi.md#clientnationlityupdate) | **PUT** /api/v2/clients/{client_uuid}/nationalities/{uuid}/ | 
*ClientApi* | [**clientPartialUpdate**](docs/Api/ClientApi.md#clientpartialupdate) | **PATCH** /api/v2/clients/{uuid}/ | 
*ClientApi* | [**clientRetrieve**](docs/Api/ClientApi.md#clientretrieve) | **GET** /api/v2/clients/{uuid}/ | 
*ClientApi* | [**clientRiskAssessmentCreate**](docs/Api/ClientApi.md#clientriskassessmentcreate) | **POST** /api/v2/clients/{client_uuid}/risk-assessments/ | 
*ClientApi* | [**clientRiskAssessmentDelete**](docs/Api/ClientApi.md#clientriskassessmentdelete) | **DELETE** /api/v2/clients/{client_uuid}/risk-assessments/{uuid}/ | 
*ClientApi* | [**clientRiskAssessmentList**](docs/Api/ClientApi.md#clientriskassessmentlist) | **GET** /api/v2/clients/{client_uuid}/risk-assessments/ | 
*ClientApi* | [**clientRiskAssessmentPartialUpdate**](docs/Api/ClientApi.md#clientriskassessmentpartialupdate) | **PATCH** /api/v2/clients/{client_uuid}/risk-assessments/{uuid}/ | 
*ClientApi* | [**clientRiskAssessmentRetrieve**](docs/Api/ClientApi.md#clientriskassessmentretrieve) | **GET** /api/v2/clients/{client_uuid}/risk-assessments/{uuid}/ | 
*ClientApi* | [**clientTWRRPerformance**](docs/Api/ClientApi.md#clienttwrrperformance) | **GET** /api/v2/clients/{uuid}/performance/twrr/ | 
*ClientApi* | [**clientTaxInformationCreate**](docs/Api/ClientApi.md#clienttaxinformationcreate) | **POST** /api/v2/clients/{client_uuid}/tax-informations/ | 
*ClientApi* | [**clientTaxInformationDelete**](docs/Api/ClientApi.md#clienttaxinformationdelete) | **DELETE** /api/v2/clients/{client_uuid}/tax-informations/{uuid}/ | 
*ClientApi* | [**clientTaxInformationList**](docs/Api/ClientApi.md#clienttaxinformationlist) | **GET** /api/v2/clients/{client_uuid}/tax-informations/ | 
*ClientApi* | [**clientTaxInformationPartialUpdate**](docs/Api/ClientApi.md#clienttaxinformationpartialupdate) | **PATCH** /api/v2/clients/{client_uuid}/tax-informations/{uuid}/ | 
*ClientApi* | [**clientTaxInformationRetrieve**](docs/Api/ClientApi.md#clienttaxinformationretrieve) | **GET** /api/v2/clients/{client_uuid}/tax-informations/{uuid}/ | 
*ClientApi* | [**clientTaxInformationUpdate**](docs/Api/ClientApi.md#clienttaxinformationupdate) | **PUT** /api/v2/clients/{client_uuid}/tax-informations/{uuid}/ | 
*ClientApi* | [**clientUpdate**](docs/Api/ClientApi.md#clientupdate) | **PUT** /api/v2/clients/{uuid}/ | 
*ClientApi* | [**clientVerificationCreate**](docs/Api/ClientApi.md#clientverificationcreate) | **POST** /api/v2/clients/{client_uuid}/verifications/{verify_type_code}/ | 
*ClientApi* | [**clientVerificationDocumentCreate**](docs/Api/ClientApi.md#clientverificationdocumentcreate) | **POST** /api/v2/clients/{client_uuid}/verifications/{verify_type_code}/documents/ | 
*ClientApi* | [**clientVerificationDocumentDelete**](docs/Api/ClientApi.md#clientverificationdocumentdelete) | **DELETE** /api/v2/clients/{client_uuid}/verifications/{verify_type_code}/documents/{uuid}/ | 
*ClientApi* | [**clientVerificationDocumentList**](docs/Api/ClientApi.md#clientverificationdocumentlist) | **GET** /api/v2/clients/{client_uuid}/verifications/{verify_type_code}/documents/ | 
*ClientApi* | [**clientVerificationDocumentPartialUpdate**](docs/Api/ClientApi.md#clientverificationdocumentpartialupdate) | **PATCH** /api/v2/clients/{client_uuid}/verifications/{verify_type_code}/documents/{uuid}/ | 
*ClientApi* | [**clientVerificationDocumentRetrieve**](docs/Api/ClientApi.md#clientverificationdocumentretrieve) | **GET** /api/v2/clients/{client_uuid}/verifications/{verify_type_code}/documents/{uuid}/ | 
*ClientApi* | [**clientVerificationDocumentUpdate**](docs/Api/ClientApi.md#clientverificationdocumentupdate) | **PUT** /api/v2/clients/{client_uuid}/verifications/{verify_type_code}/documents/{uuid}/ | 
*ClientApi* | [**clientVerificationList**](docs/Api/ClientApi.md#clientverificationlist) | **GET** /api/v2/clients/{client_uuid}/verifications/{verify_type_code}/ | 
*ClientApi* | [**clientVerificationRetrieve**](docs/Api/ClientApi.md#clientverificationretrieve) | **GET** /api/v2/clients/{client_uuid}/verifications/{verify_type_code}/{uuid}/ | 
*DocumentApi* | [**clientDocumentCreate**](docs/Api/DocumentApi.md#clientdocumentcreate) | **POST** /api/v2/clients/{client_uuid}/documents/ | 
*DocumentApi* | [**clientDocumentDelete**](docs/Api/DocumentApi.md#clientdocumentdelete) | **DELETE** /api/v2/clients/{client_uuid}/documents/{uuid}/ | 
*DocumentApi* | [**clientDocumentList**](docs/Api/DocumentApi.md#clientdocumentlist) | **GET** /api/v2/clients/{client_uuid}/documents/ | 
*DocumentApi* | [**clientDocumentRetrieve**](docs/Api/DocumentApi.md#clientdocumentretrieve) | **GET** /api/v2/clients/{client_uuid}/documents/{uuid}/ | 
*KYCApi* | [**clientVerificationCreate**](docs/Api/KYCApi.md#clientverificationcreate) | **POST** /api/v2/clients/{client_uuid}/verifications/{verify_type_code}/ | 
*KYCApi* | [**clientVerificationDocumentCreate**](docs/Api/KYCApi.md#clientverificationdocumentcreate) | **POST** /api/v2/clients/{client_uuid}/verifications/{verify_type_code}/documents/ | 
*KYCApi* | [**clientVerificationDocumentDelete**](docs/Api/KYCApi.md#clientverificationdocumentdelete) | **DELETE** /api/v2/clients/{client_uuid}/verifications/{verify_type_code}/documents/{uuid}/ | 
*KYCApi* | [**clientVerificationDocumentList**](docs/Api/KYCApi.md#clientverificationdocumentlist) | **GET** /api/v2/clients/{client_uuid}/verifications/{verify_type_code}/documents/ | 
*KYCApi* | [**clientVerificationDocumentPartialUpdate**](docs/Api/KYCApi.md#clientverificationdocumentpartialupdate) | **PATCH** /api/v2/clients/{client_uuid}/verifications/{verify_type_code}/documents/{uuid}/ | 
*KYCApi* | [**clientVerificationDocumentRetrieve**](docs/Api/KYCApi.md#clientverificationdocumentretrieve) | **GET** /api/v2/clients/{client_uuid}/verifications/{verify_type_code}/documents/{uuid}/ | 
*KYCApi* | [**clientVerificationDocumentUpdate**](docs/Api/KYCApi.md#clientverificationdocumentupdate) | **PUT** /api/v2/clients/{client_uuid}/verifications/{verify_type_code}/documents/{uuid}/ | 
*KYCApi* | [**clientVerificationList**](docs/Api/KYCApi.md#clientverificationlist) | **GET** /api/v2/clients/{client_uuid}/verifications/{verify_type_code}/ | 
*KYCApi* | [**clientVerificationRetrieve**](docs/Api/KYCApi.md#clientverificationretrieve) | **GET** /api/v2/clients/{client_uuid}/verifications/{verify_type_code}/{uuid}/ | 
*NationlityApi* | [**clientNationalityCreate**](docs/Api/NationlityApi.md#clientnationalitycreate) | **POST** /api/v2/clients/{client_uuid}/nationalities/ | 
*NationlityApi* | [**clientNationlitiesList**](docs/Api/NationlityApi.md#clientnationlitieslist) | **GET** /api/v2/clients/{client_uuid}/nationalities/ | 
*NationlityApi* | [**clientNationlityDelete**](docs/Api/NationlityApi.md#clientnationlitydelete) | **DELETE** /api/v2/clients/{client_uuid}/nationalities/{uuid}/ | 
*NationlityApi* | [**clientNationlityPartialUpdate**](docs/Api/NationlityApi.md#clientnationlitypartialupdate) | **PATCH** /api/v2/clients/{client_uuid}/nationalities/{uuid}/ | 
*NationlityApi* | [**clientNationlityRetrieve**](docs/Api/NationlityApi.md#clientnationlityretrieve) | **GET** /api/v2/clients/{client_uuid}/nationalities/{uuid}/ | 
*NationlityApi* | [**clientNationlityUpdate**](docs/Api/NationlityApi.md#clientnationlityupdate) | **PUT** /api/v2/clients/{client_uuid}/nationalities/{uuid}/ | 
*RelationShipManagerApi* | [**apiV2RelationshipManagerAnalyticsAllocationsByAssetRetrieve**](docs/Api/RelationShipManagerApi.md#apiv2relationshipmanageranalyticsallocationsbyassetretrieve) | **GET** /api/v2/relationship-manager/{relationship_manager_uuid}/analytics/allocations-by-asset/ | 
*RelationShipManagerApi* | [**apiV2RelationshipManagerAnalyticsAssetConcentrationRiskRetrieve**](docs/Api/RelationShipManagerApi.md#apiv2relationshipmanageranalyticsassetconcentrationriskretrieve) | **GET** /api/v2/relationship-manager/{relationship_manager_uuid}/analytics/asset-concentration-risk/ | 
*RelationShipManagerApi* | [**apiV2RelationshipManagerAnalyticsAumEvolutionRetrieve**](docs/Api/RelationShipManagerApi.md#apiv2relationshipmanageranalyticsaumevolutionretrieve) | **GET** /api/v2/relationship-manager/{relationship_manager_uuid}/analytics/aum-evolution/ | 
*RelationShipManagerApi* | [**apiV2RelationshipManagerAnalyticsAumPortfolioRiskRetrieve**](docs/Api/RelationShipManagerApi.md#apiv2relationshipmanageranalyticsaumportfolioriskretrieve) | **GET** /api/v2/relationship-manager/{relationship_manager_uuid}/analytics/aum-portfolio-risk/ | 
*RelationShipManagerApi* | [**apiV2RelationshipManagerAnalyticsAumRetrieve**](docs/Api/RelationShipManagerApi.md#apiv2relationshipmanageranalyticsaumretrieve) | **GET** /api/v2/relationship-manager/{relationship_manager_uuid}/analytics/aum/ | 
*RelationShipManagerApi* | [**apiV2RelationshipManagerAnalyticsClientByRiskRetrieve**](docs/Api/RelationShipManagerApi.md#apiv2relationshipmanageranalyticsclientbyriskretrieve) | **GET** /api/v2/relationship-manager/{relationship_manager_uuid}/analytics/client-by-risk/ | 
*RelationShipManagerApi* | [**apiV2RelationshipManagerAnalyticsClientByStatusRetrieve**](docs/Api/RelationShipManagerApi.md#apiv2relationshipmanageranalyticsclientbystatusretrieve) | **GET** /api/v2/relationship-manager/{relationship_manager_uuid}/analytics/client-by-status/ | 
*RelationShipManagerApi* | [**apiV2RelationshipManagerAnalyticsClientRankingRetrieve**](docs/Api/RelationShipManagerApi.md#apiv2relationshipmanageranalyticsclientrankingretrieve) | **GET** /api/v2/relationship-manager/{relationship_manager_uuid}/analytics/client-ranking/ | 
*RelationShipManagerApi* | [**apiV2RelationshipManagerAnalyticsInflowsOutflowsRetrieve**](docs/Api/RelationShipManagerApi.md#apiv2relationshipmanageranalyticsinflowsoutflowsretrieve) | **GET** /api/v2/relationship-manager/{relationship_manager_uuid}/analytics/inflows-outflows/ | 
*RelationShipManagerApi* | [**apiV2RelationshipManagerAnalyticsPortfolioRiskPerformanceRetrieve**](docs/Api/RelationShipManagerApi.md#apiv2relationshipmanageranalyticsportfolioriskperformanceretrieve) | **GET** /api/v2/relationship-manager/{relationship_manager_uuid}/analytics/portfolio-risk-performance/ | 
*RelationShipManagerApi* | [**apiV2RelationshipManagerAnalyticsTotalActiveClientsRetrieve**](docs/Api/RelationShipManagerApi.md#apiv2relationshipmanageranalyticstotalactiveclientsretrieve) | **GET** /api/v2/relationship-manager/{relationship_manager_uuid}/analytics/total-active-clients/ | 
*RelationShipManagerApi* | [**apiV2RelationshipManagerMeRetrieve**](docs/Api/RelationShipManagerApi.md#apiv2relationshipmanagermeretrieve) | **GET** /api/v2/relationship-manager/me/ | 
*RelationShipManagerApi* | [**apiV2RelationshipManagerRetrieve**](docs/Api/RelationShipManagerApi.md#apiv2relationshipmanagerretrieve) | **GET** /api/v2/relationship-manager/{uuid}/ | 
*RiskAssessmentApi* | [**clientRiskAssessmentCreate**](docs/Api/RiskAssessmentApi.md#clientriskassessmentcreate) | **POST** /api/v2/clients/{client_uuid}/risk-assessments/ | 
*RiskAssessmentApi* | [**clientRiskAssessmentDelete**](docs/Api/RiskAssessmentApi.md#clientriskassessmentdelete) | **DELETE** /api/v2/clients/{client_uuid}/risk-assessments/{uuid}/ | 
*RiskAssessmentApi* | [**clientRiskAssessmentList**](docs/Api/RiskAssessmentApi.md#clientriskassessmentlist) | **GET** /api/v2/clients/{client_uuid}/risk-assessments/ | 
*RiskAssessmentApi* | [**clientRiskAssessmentPartialUpdate**](docs/Api/RiskAssessmentApi.md#clientriskassessmentpartialupdate) | **PATCH** /api/v2/clients/{client_uuid}/risk-assessments/{uuid}/ | 
*RiskAssessmentApi* | [**clientRiskAssessmentRetrieve**](docs/Api/RiskAssessmentApi.md#clientriskassessmentretrieve) | **GET** /api/v2/clients/{client_uuid}/risk-assessments/{uuid}/ | 
*TaxInformationApi* | [**clientTaxInformationCreate**](docs/Api/TaxInformationApi.md#clienttaxinformationcreate) | **POST** /api/v2/clients/{client_uuid}/tax-informations/ | 
*TaxInformationApi* | [**clientTaxInformationDelete**](docs/Api/TaxInformationApi.md#clienttaxinformationdelete) | **DELETE** /api/v2/clients/{client_uuid}/tax-informations/{uuid}/ | 
*TaxInformationApi* | [**clientTaxInformationList**](docs/Api/TaxInformationApi.md#clienttaxinformationlist) | **GET** /api/v2/clients/{client_uuid}/tax-informations/ | 
*TaxInformationApi* | [**clientTaxInformationPartialUpdate**](docs/Api/TaxInformationApi.md#clienttaxinformationpartialupdate) | **PATCH** /api/v2/clients/{client_uuid}/tax-informations/{uuid}/ | 
*TaxInformationApi* | [**clientTaxInformationRetrieve**](docs/Api/TaxInformationApi.md#clienttaxinformationretrieve) | **GET** /api/v2/clients/{client_uuid}/tax-informations/{uuid}/ | 
*TaxInformationApi* | [**clientTaxInformationUpdate**](docs/Api/TaxInformationApi.md#clienttaxinformationupdate) | **PUT** /api/v2/clients/{client_uuid}/tax-informations/{uuid}/ | 

## Models

- [AUMEvoluation](docs/Model/AUMEvoluation.md)
- [AUMPortfolioRisk](docs/Model/AUMPortfolioRisk.md)
- [AccessLog](docs/Model/AccessLog.md)
- [ActivityTypeEnum](docs/Model/ActivityTypeEnum.md)
- [AddressCreate](docs/Model/AddressCreate.md)
- [AddressList](docs/Model/AddressList.md)
- [AddressUpdate](docs/Model/AddressUpdate.md)
- [AllocationByAsset](docs/Model/AllocationByAsset.md)
- [AllocationByCode](docs/Model/AllocationByCode.md)
- [AllocationDetail](docs/Model/AllocationDetail.md)
- [AllocationList](docs/Model/AllocationList.md)
- [AppVersion](docs/Model/AppVersion.md)
- [ApplicationClientUpdate](docs/Model/ApplicationClientUpdate.md)
- [Assessment](docs/Model/Assessment.md)
- [AssessmentStatusEnum](docs/Model/AssessmentStatusEnum.md)
- [AssetCategory](docs/Model/AssetCategory.md)
- [AssetConcentrationRisk](docs/Model/AssetConcentrationRisk.md)
- [AssetDetail](docs/Model/AssetDetail.md)
- [AssetGrowth](docs/Model/AssetGrowth.md)
- [AssetList](docs/Model/AssetList.md)
- [AssetModelPortfolio](docs/Model/AssetModelPortfolio.md)
- [AssetTypeEnum](docs/Model/AssetTypeEnum.md)
- [Attachment](docs/Model/Attachment.md)
- [AuthenticationResponse](docs/Model/AuthenticationResponse.md)
- [BankAccountCreateUpdate](docs/Model/BankAccountCreateUpdate.md)
- [BankAccountList](docs/Model/BankAccountList.md)
- [BasePortfolioTypeRestrictions](docs/Model/BasePortfolioTypeRestrictions.md)
- [BlankEnum](docs/Model/BlankEnum.md)
- [Category](docs/Model/Category.md)
- [CategoryStatusEnum](docs/Model/CategoryStatusEnum.md)
- [ChannelEnum](docs/Model/ChannelEnum.md)
- [ClientCreate](docs/Model/ClientCreate.md)
- [ClientDetail](docs/Model/ClientDetail.md)
- [ClientEmbedRanking](docs/Model/ClientEmbedRanking.md)
- [ClientPerformance](docs/Model/ClientPerformance.md)
- [ClientRanking](docs/Model/ClientRanking.md)
- [ClientReferral](docs/Model/ClientReferral.md)
- [ConversationCreate](docs/Model/ConversationCreate.md)
- [ConversationList](docs/Model/ConversationList.md)
- [CoreCategoryGroup](docs/Model/CoreCategoryGroup.md)
- [CountryField](docs/Model/CountryField.md)
- [CountryList](docs/Model/CountryList.md)
- [CreateOrder](docs/Model/CreateOrder.md)
- [CreateOrderMethodEnum](docs/Model/CreateOrderMethodEnum.md)
- [Currency](docs/Model/Currency.md)
- [CurrentAllocation](docs/Model/CurrentAllocation.md)
- [DepositCreate](docs/Model/DepositCreate.md)
- [DepositDetail](docs/Model/DepositDetail.md)
- [DepositList](docs/Model/DepositList.md)
- [DepositTypeEnum](docs/Model/DepositTypeEnum.md)
- [DocTypeEnum](docs/Model/DocTypeEnum.md)
- [Document](docs/Model/Document.md)
- [DocumentTypeEnum](docs/Model/DocumentTypeEnum.md)
- [DurationEnum](docs/Model/DurationEnum.md)
- [ETSForecastRequest](docs/Model/ETSForecastRequest.md)
- [EmailVerifyRequest](docs/Model/EmailVerifyRequest.md)
- [EmailVerifyView](docs/Model/EmailVerifyView.md)
- [EmploymentStatusEnum](docs/Model/EmploymentStatusEnum.md)
- [FeeTypeEnum](docs/Model/FeeTypeEnum.md)
- [FeedActivityList](docs/Model/FeedActivityList.md)
- [ForecastDecumulationRequest](docs/Model/ForecastDecumulationRequest.md)
- [ForecastRequest](docs/Model/ForecastRequest.md)
- [GenderEnum](docs/Model/GenderEnum.md)
- [Goal](docs/Model/Goal.md)
- [ImpersionationResponse](docs/Model/ImpersionationResponse.md)
- [ImpersonationToken](docs/Model/ImpersonationToken.md)
- [IntradayPrice](docs/Model/IntradayPrice.md)
- [InvestorFee](docs/Model/InvestorFee.md)
- [InvestorModelPortfolio](docs/Model/InvestorModelPortfolio.md)
- [InvestorWithdrawalCreate](docs/Model/InvestorWithdrawalCreate.md)
- [InvestorWithdrawalList](docs/Model/InvestorWithdrawalList.md)
- [InvoiceDetails](docs/Model/InvoiceDetails.md)
- [InvoiceList](docs/Model/InvoiceList.md)
- [JSONWebToken](docs/Model/JSONWebToken.md)
- [JWTRefreshResponse](docs/Model/JWTRefreshResponse.md)
- [JWTResponse](docs/Model/JWTResponse.md)
- [MaritalStatusEnum](docs/Model/MaritalStatusEnum.md)
- [Message](docs/Model/Message.md)
- [MinimumAppVersion](docs/Model/MinimumAppVersion.md)
- [ModelPortfolioForecastRequest](docs/Model/ModelPortfolioForecastRequest.md)
- [NationalDocument](docs/Model/NationalDocument.md)
- [NationalityCreate](docs/Model/NationalityCreate.md)
- [NationalityList](docs/Model/NationalityList.md)
- [NationalityUpdate](docs/Model/NationalityUpdate.md)
- [NucoroSetting](docs/Model/NucoroSetting.md)
- [NullEnum](docs/Model/NullEnum.md)
- [OnboardingResponse](docs/Model/OnboardingResponse.md)
- [OnboardingToken](docs/Model/OnboardingToken.md)
- [OrderList](docs/Model/OrderList.md)
- [OrderListMethodEnum](docs/Model/OrderListMethodEnum.md)
- [OrderListStatusEnum](docs/Model/OrderListStatusEnum.md)
- [OrderTypeEnum](docs/Model/OrderTypeEnum.md)
- [PaginatedAccessLogList](docs/Model/PaginatedAccessLogList.md)
- [PaginatedAddressListList](docs/Model/PaginatedAddressListList.md)
- [PaginatedAllocationListList](docs/Model/PaginatedAllocationListList.md)
- [PaginatedAssessmentList](docs/Model/PaginatedAssessmentList.md)
- [PaginatedAssetCategoryList](docs/Model/PaginatedAssetCategoryList.md)
- [PaginatedAssetGrowthList](docs/Model/PaginatedAssetGrowthList.md)
- [PaginatedAssetListList](docs/Model/PaginatedAssetListList.md)
- [PaginatedBankAccountListList](docs/Model/PaginatedBankAccountListList.md)
- [PaginatedBasePortfolioTypeRestrictionsList](docs/Model/PaginatedBasePortfolioTypeRestrictionsList.md)
- [PaginatedCategoryList](docs/Model/PaginatedCategoryList.md)
- [PaginatedClientDetailList](docs/Model/PaginatedClientDetailList.md)
- [PaginatedConversationListList](docs/Model/PaginatedConversationListList.md)
- [PaginatedCoreCategoryGroupList](docs/Model/PaginatedCoreCategoryGroupList.md)
- [PaginatedCountryListList](docs/Model/PaginatedCountryListList.md)
- [PaginatedDepositListList](docs/Model/PaginatedDepositListList.md)
- [PaginatedDocumentList](docs/Model/PaginatedDocumentList.md)
- [PaginatedFeedActivityListList](docs/Model/PaginatedFeedActivityListList.md)
- [PaginatedGoalList](docs/Model/PaginatedGoalList.md)
- [PaginatedIntradayPriceList](docs/Model/PaginatedIntradayPriceList.md)
- [PaginatedInvestorFeeList](docs/Model/PaginatedInvestorFeeList.md)
- [PaginatedInvestorModelPortfolioList](docs/Model/PaginatedInvestorModelPortfolioList.md)
- [PaginatedInvestorWithdrawalListList](docs/Model/PaginatedInvestorWithdrawalListList.md)
- [PaginatedInvoiceListList](docs/Model/PaginatedInvoiceListList.md)
- [PaginatedMessageList](docs/Model/PaginatedMessageList.md)
- [PaginatedNationalDocumentList](docs/Model/PaginatedNationalDocumentList.md)
- [PaginatedNationalityListList](docs/Model/PaginatedNationalityListList.md)
- [PaginatedOrderListList](docs/Model/PaginatedOrderListList.md)
- [PaginatedPortfolioListList](docs/Model/PaginatedPortfolioListList.md)
- [PaginatedPortfolioPerformanceList](docs/Model/PaginatedPortfolioPerformanceList.md)
- [PaginatedPortfolioPerformancePositionsList](docs/Model/PaginatedPortfolioPerformancePositionsList.md)
- [PaginatedPortfolioTypeList](docs/Model/PaginatedPortfolioTypeList.md)
- [PaginatedPresetCategoryGroupList](docs/Model/PaginatedPresetCategoryGroupList.md)
- [PaginatedPriceList](docs/Model/PaginatedPriceList.md)
- [PaginatedQuestionList](docs/Model/PaginatedQuestionList.md)
- [PaginatedRebalanceList](docs/Model/PaginatedRebalanceList.md)
- [PaginatedStatementList](docs/Model/PaginatedStatementList.md)
- [PaginatedTaxInformationListList](docs/Model/PaginatedTaxInformationListList.md)
- [PaginatedTaxReportList](docs/Model/PaginatedTaxReportList.md)
- [PaginatedTosList](docs/Model/PaginatedTosList.md)
- [PaginatedVerificationDocumentList](docs/Model/PaginatedVerificationDocumentList.md)
- [PaginatedVerificationListList](docs/Model/PaginatedVerificationListList.md)
- [PaginatedWatchlistList](docs/Model/PaginatedWatchlistList.md)
- [PasswordReset](docs/Model/PasswordReset.md)
- [PasswordResetRequest](docs/Model/PasswordResetRequest.md)
- [PasswordUpdate](docs/Model/PasswordUpdate.md)
- [PatchedAddressUpdate](docs/Model/PatchedAddressUpdate.md)
- [PatchedApplicationClientUpdate](docs/Model/PatchedApplicationClientUpdate.md)
- [PatchedAssessment](docs/Model/PatchedAssessment.md)
- [PatchedBankAccountCreateUpdate](docs/Model/PatchedBankAccountCreateUpdate.md)
- [PatchedGoal](docs/Model/PatchedGoal.md)
- [PatchedInvestorFee](docs/Model/PatchedInvestorFee.md)
- [PatchedNationalityUpdate](docs/Model/PatchedNationalityUpdate.md)
- [PatchedPasswordResetRequest](docs/Model/PatchedPasswordResetRequest.md)
- [PatchedPortfolioUpdate](docs/Model/PatchedPortfolioUpdate.md)
- [PatchedTaxInformationCreateUpdate](docs/Model/PatchedTaxInformationCreateUpdate.md)
- [PortalSettingValueList](docs/Model/PortalSettingValueList.md)
- [PortfolioCreate](docs/Model/PortfolioCreate.md)
- [PortfolioDetail](docs/Model/PortfolioDetail.md)
- [PortfolioList](docs/Model/PortfolioList.md)
- [PortfolioPerformance](docs/Model/PortfolioPerformance.md)
- [PortfolioPerformancePositions](docs/Model/PortfolioPerformancePositions.md)
- [PortfolioType](docs/Model/PortfolioType.md)
- [PortfolioTypeRestrictions](docs/Model/PortfolioTypeRestrictions.md)
- [PortfolioUpdate](docs/Model/PortfolioUpdate.md)
- [Position](docs/Model/Position.md)
- [PresetCategoryGroup](docs/Model/PresetCategoryGroup.md)
- [Price](docs/Model/Price.md)
- [Question](docs/Model/Question.md)
- [Rebalance](docs/Model/Rebalance.md)
- [RebalanceStatusEnum](docs/Model/RebalanceStatusEnum.md)
- [RelatedAssetSerializerWithAssetCategories](docs/Model/RelatedAssetSerializerWithAssetCategories.md)
- [RelatedAssetSerializerWithPermission](docs/Model/RelatedAssetSerializerWithPermission.md)
- [RelationshipManager](docs/Model/RelationshipManager.md)
- [Response](docs/Model/Response.md)
- [ResultEnum](docs/Model/ResultEnum.md)
- [RiskChoice](docs/Model/RiskChoice.md)
- [RiskChoiceQuestionCode](docs/Model/RiskChoiceQuestionCode.md)
- [Statement](docs/Model/Statement.md)
- [Status14bEnum](docs/Model/Status14bEnum.md)
- [Status181Enum](docs/Model/Status181Enum.md)
- [Status260Enum](docs/Model/Status260Enum.md)
- [Status2efEnum](docs/Model/Status2efEnum.md)
- [Status6f6Enum](docs/Model/Status6f6Enum.md)
- [StatusB65Enum](docs/Model/StatusB65Enum.md)
- [StatusB6aEnum](docs/Model/StatusB6aEnum.md)
- [StatusBd7Enum](docs/Model/StatusBd7Enum.md)
- [Subscribe](docs/Model/Subscribe.md)
- [TaxInformationCreateUpdate](docs/Model/TaxInformationCreateUpdate.md)
- [TaxInformationList](docs/Model/TaxInformationList.md)
- [TaxReport](docs/Model/TaxReport.md)
- [TitleEnum](docs/Model/TitleEnum.md)
- [TokenRefresh](docs/Model/TokenRefresh.md)
- [Tos](docs/Model/Tos.md)
- [Unsubscribe](docs/Model/Unsubscribe.md)
- [ValueUnitEnum](docs/Model/ValueUnitEnum.md)
- [VerificationCreate](docs/Model/VerificationCreate.md)
- [VerificationDocument](docs/Model/VerificationDocument.md)
- [VerificationList](docs/Model/VerificationList.md)
- [VerificationWithType](docs/Model/VerificationWithType.md)
- [VerifyTypeEnum](docs/Model/VerifyTypeEnum.md)
- [Watchlist](docs/Model/Watchlist.md)
- [WebsocketAuthentication](docs/Model/WebsocketAuthentication.md)
- [WithdrawalDetail](docs/Model/WithdrawalDetail.md)

## Authorization

### basicAuth

- **Type**: HTTP basic authentication


### cookieAuth

- **Type**: API key
- **API key parameter name**: Session
- **Location**: 



### jwtAuth

- **Type**: Bearer authentication (JWT)


### tokenAuth

- **Type**: API key
- **API key parameter name**: Authorization
- **Location**: HTTP header


## Tests

To run the tests, use:

```bash
composer install
vendor/bin/phpunit
```

## Author



## About this package

This PHP package is automatically generated by the [OpenAPI Generator](https://openapi-generator.tech) project:

- API version: `4.175.0`
- Build package: `org.openapitools.codegen.languages.PhpClientCodegen`
