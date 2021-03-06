# flake8: noqa

# import all models into this package
# if you have many models here with many references from one model to another this may
# raise a RecursionError
# to avoid this, import only the models that you directly need like:
# from from openapi_client.model.pet import Pet
# or import this package, but before doing it, use:
# import sys
# sys.setrecursionlimit(n)

from openapi_client.model.aum_evoluation import AUMEvoluation
from openapi_client.model.aum_portfolio_risk import AUMPortfolioRisk
from openapi_client.model.access_log import AccessLog
from openapi_client.model.activity_type_enum import ActivityTypeEnum
from openapi_client.model.address_create import AddressCreate
from openapi_client.model.address_list import AddressList
from openapi_client.model.address_update import AddressUpdate
from openapi_client.model.allocation_by_asset import AllocationByAsset
from openapi_client.model.allocation_by_code import AllocationByCode
from openapi_client.model.allocation_detail import AllocationDetail
from openapi_client.model.allocation_list import AllocationList
from openapi_client.model.app_version import AppVersion
from openapi_client.model.application_client_update import ApplicationClientUpdate
from openapi_client.model.assessment import Assessment
from openapi_client.model.assessment_status_enum import AssessmentStatusEnum
from openapi_client.model.asset_category import AssetCategory
from openapi_client.model.asset_concentration_risk import AssetConcentrationRisk
from openapi_client.model.asset_detail import AssetDetail
from openapi_client.model.asset_growth import AssetGrowth
from openapi_client.model.asset_list import AssetList
from openapi_client.model.asset_model_portfolio import AssetModelPortfolio
from openapi_client.model.asset_type_enum import AssetTypeEnum
from openapi_client.model.attachment import Attachment
from openapi_client.model.authentication_response import AuthenticationResponse
from openapi_client.model.bank_account_create_update import BankAccountCreateUpdate
from openapi_client.model.bank_account_list import BankAccountList
from openapi_client.model.base_portfolio_type_restrictions import BasePortfolioTypeRestrictions
from openapi_client.model.blank_enum import BlankEnum
from openapi_client.model.category import Category
from openapi_client.model.category_status_enum import CategoryStatusEnum
from openapi_client.model.channel_enum import ChannelEnum
from openapi_client.model.client_create import ClientCreate
from openapi_client.model.client_detail import ClientDetail
from openapi_client.model.client_embed_ranking import ClientEmbedRanking
from openapi_client.model.client_performance import ClientPerformance
from openapi_client.model.client_ranking import ClientRanking
from openapi_client.model.client_referral import ClientReferral
from openapi_client.model.conversation_create import ConversationCreate
from openapi_client.model.conversation_list import ConversationList
from openapi_client.model.core_category_group import CoreCategoryGroup
from openapi_client.model.country_field import CountryField
from openapi_client.model.country_list import CountryList
from openapi_client.model.create_order import CreateOrder
from openapi_client.model.create_order_method_enum import CreateOrderMethodEnum
from openapi_client.model.currency import Currency
from openapi_client.model.current_allocation import CurrentAllocation
from openapi_client.model.deposit_create import DepositCreate
from openapi_client.model.deposit_detail import DepositDetail
from openapi_client.model.deposit_list import DepositList
from openapi_client.model.deposit_type_enum import DepositTypeEnum
from openapi_client.model.doc_type_enum import DocTypeEnum
from openapi_client.model.document import Document
from openapi_client.model.document_type_enum import DocumentTypeEnum
from openapi_client.model.duration_enum import DurationEnum
from openapi_client.model.ets_forecast_request import ETSForecastRequest
from openapi_client.model.email_verify_request import EmailVerifyRequest
from openapi_client.model.email_verify_view import EmailVerifyView
from openapi_client.model.employment_status_enum import EmploymentStatusEnum
from openapi_client.model.fee_type_enum import FeeTypeEnum
from openapi_client.model.feed_activity_list import FeedActivityList
from openapi_client.model.forecast_decumulation_request import ForecastDecumulationRequest
from openapi_client.model.forecast_request import ForecastRequest
from openapi_client.model.gender_enum import GenderEnum
from openapi_client.model.goal import Goal
from openapi_client.model.impersionation_response import ImpersionationResponse
from openapi_client.model.impersonation_token import ImpersonationToken
from openapi_client.model.intraday_price import IntradayPrice
from openapi_client.model.investor_fee import InvestorFee
from openapi_client.model.investor_model_portfolio import InvestorModelPortfolio
from openapi_client.model.investor_withdrawal_create import InvestorWithdrawalCreate
from openapi_client.model.investor_withdrawal_list import InvestorWithdrawalList
from openapi_client.model.invoice_details import InvoiceDetails
from openapi_client.model.invoice_list import InvoiceList
from openapi_client.model.json_web_token import JSONWebToken
from openapi_client.model.jwt_refresh_response import JWTRefreshResponse
from openapi_client.model.jwt_response import JWTResponse
from openapi_client.model.marital_status_enum import MaritalStatusEnum
from openapi_client.model.message import Message
from openapi_client.model.minimum_app_version import MinimumAppVersion
from openapi_client.model.model_portfolio_forecast_request import ModelPortfolioForecastRequest
from openapi_client.model.national_document import NationalDocument
from openapi_client.model.nationality_create import NationalityCreate
from openapi_client.model.nationality_list import NationalityList
from openapi_client.model.nationality_update import NationalityUpdate
from openapi_client.model.nucoro_setting import NucoroSetting
from openapi_client.model.null_enum import NullEnum
from openapi_client.model.onboarding_response import OnboardingResponse
from openapi_client.model.onboarding_token import OnboardingToken
from openapi_client.model.order_list import OrderList
from openapi_client.model.order_list_method_enum import OrderListMethodEnum
from openapi_client.model.order_list_status_enum import OrderListStatusEnum
from openapi_client.model.order_type_enum import OrderTypeEnum
from openapi_client.model.paginated_access_log_list import PaginatedAccessLogList
from openapi_client.model.paginated_address_list_list import PaginatedAddressListList
from openapi_client.model.paginated_allocation_list_list import PaginatedAllocationListList
from openapi_client.model.paginated_assessment_list import PaginatedAssessmentList
from openapi_client.model.paginated_asset_category_list import PaginatedAssetCategoryList
from openapi_client.model.paginated_asset_growth_list import PaginatedAssetGrowthList
from openapi_client.model.paginated_asset_list_list import PaginatedAssetListList
from openapi_client.model.paginated_bank_account_list_list import PaginatedBankAccountListList
from openapi_client.model.paginated_base_portfolio_type_restrictions_list import PaginatedBasePortfolioTypeRestrictionsList
from openapi_client.model.paginated_category_list import PaginatedCategoryList
from openapi_client.model.paginated_client_detail_list import PaginatedClientDetailList
from openapi_client.model.paginated_conversation_list_list import PaginatedConversationListList
from openapi_client.model.paginated_core_category_group_list import PaginatedCoreCategoryGroupList
from openapi_client.model.paginated_country_list_list import PaginatedCountryListList
from openapi_client.model.paginated_deposit_list_list import PaginatedDepositListList
from openapi_client.model.paginated_document_list import PaginatedDocumentList
from openapi_client.model.paginated_feed_activity_list_list import PaginatedFeedActivityListList
from openapi_client.model.paginated_goal_list import PaginatedGoalList
from openapi_client.model.paginated_intraday_price_list import PaginatedIntradayPriceList
from openapi_client.model.paginated_investor_fee_list import PaginatedInvestorFeeList
from openapi_client.model.paginated_investor_model_portfolio_list import PaginatedInvestorModelPortfolioList
from openapi_client.model.paginated_investor_withdrawal_list_list import PaginatedInvestorWithdrawalListList
from openapi_client.model.paginated_invoice_list_list import PaginatedInvoiceListList
from openapi_client.model.paginated_message_list import PaginatedMessageList
from openapi_client.model.paginated_national_document_list import PaginatedNationalDocumentList
from openapi_client.model.paginated_nationality_list_list import PaginatedNationalityListList
from openapi_client.model.paginated_order_list_list import PaginatedOrderListList
from openapi_client.model.paginated_portfolio_list_list import PaginatedPortfolioListList
from openapi_client.model.paginated_portfolio_performance_list import PaginatedPortfolioPerformanceList
from openapi_client.model.paginated_portfolio_performance_positions_list import PaginatedPortfolioPerformancePositionsList
from openapi_client.model.paginated_portfolio_type_list import PaginatedPortfolioTypeList
from openapi_client.model.paginated_preset_category_group_list import PaginatedPresetCategoryGroupList
from openapi_client.model.paginated_price_list import PaginatedPriceList
from openapi_client.model.paginated_question_list import PaginatedQuestionList
from openapi_client.model.paginated_rebalance_list import PaginatedRebalanceList
from openapi_client.model.paginated_statement_list import PaginatedStatementList
from openapi_client.model.paginated_tax_information_list_list import PaginatedTaxInformationListList
from openapi_client.model.paginated_tax_report_list import PaginatedTaxReportList
from openapi_client.model.paginated_tos_list import PaginatedTosList
from openapi_client.model.paginated_verification_document_list import PaginatedVerificationDocumentList
from openapi_client.model.paginated_verification_list_list import PaginatedVerificationListList
from openapi_client.model.paginated_watchlist_list import PaginatedWatchlistList
from openapi_client.model.password_reset import PasswordReset
from openapi_client.model.password_reset_request import PasswordResetRequest
from openapi_client.model.password_update import PasswordUpdate
from openapi_client.model.patched_address_update import PatchedAddressUpdate
from openapi_client.model.patched_application_client_update import PatchedApplicationClientUpdate
from openapi_client.model.patched_assessment import PatchedAssessment
from openapi_client.model.patched_bank_account_create_update import PatchedBankAccountCreateUpdate
from openapi_client.model.patched_goal import PatchedGoal
from openapi_client.model.patched_investor_fee import PatchedInvestorFee
from openapi_client.model.patched_nationality_update import PatchedNationalityUpdate
from openapi_client.model.patched_password_reset_request import PatchedPasswordResetRequest
from openapi_client.model.patched_portfolio_update import PatchedPortfolioUpdate
from openapi_client.model.patched_tax_information_create_update import PatchedTaxInformationCreateUpdate
from openapi_client.model.portal_setting_value_list import PortalSettingValueList
from openapi_client.model.portfolio_create import PortfolioCreate
from openapi_client.model.portfolio_detail import PortfolioDetail
from openapi_client.model.portfolio_list import PortfolioList
from openapi_client.model.portfolio_performance import PortfolioPerformance
from openapi_client.model.portfolio_performance_positions import PortfolioPerformancePositions
from openapi_client.model.portfolio_type import PortfolioType
from openapi_client.model.portfolio_type_restrictions import PortfolioTypeRestrictions
from openapi_client.model.portfolio_update import PortfolioUpdate
from openapi_client.model.position import Position
from openapi_client.model.preset_category_group import PresetCategoryGroup
from openapi_client.model.price import Price
from openapi_client.model.question import Question
from openapi_client.model.rebalance import Rebalance
from openapi_client.model.rebalance_status_enum import RebalanceStatusEnum
from openapi_client.model.related_asset_serializer_with_asset_categories import RelatedAssetSerializerWithAssetCategories
from openapi_client.model.related_asset_serializer_with_permission import RelatedAssetSerializerWithPermission
from openapi_client.model.relationship_manager import RelationshipManager
from openapi_client.model.response import Response
from openapi_client.model.result_enum import ResultEnum
from openapi_client.model.risk_choice import RiskChoice
from openapi_client.model.risk_choice_question_code import RiskChoiceQuestionCode
from openapi_client.model.statement import Statement
from openapi_client.model.status14b_enum import Status14bEnum
from openapi_client.model.status181_enum import Status181Enum
from openapi_client.model.status260_enum import Status260Enum
from openapi_client.model.status2ef_enum import Status2efEnum
from openapi_client.model.status6f6_enum import Status6f6Enum
from openapi_client.model.status_b65_enum import StatusB65Enum
from openapi_client.model.status_b6a_enum import StatusB6aEnum
from openapi_client.model.status_bd7_enum import StatusBd7Enum
from openapi_client.model.subscribe import Subscribe
from openapi_client.model.tax_information_create_update import TaxInformationCreateUpdate
from openapi_client.model.tax_information_list import TaxInformationList
from openapi_client.model.tax_report import TaxReport
from openapi_client.model.title_enum import TitleEnum
from openapi_client.model.token_refresh import TokenRefresh
from openapi_client.model.tos import Tos
from openapi_client.model.unsubscribe import Unsubscribe
from openapi_client.model.value_unit_enum import ValueUnitEnum
from openapi_client.model.verification_create import VerificationCreate
from openapi_client.model.verification_document import VerificationDocument
from openapi_client.model.verification_list import VerificationList
from openapi_client.model.verification_with_type import VerificationWithType
from openapi_client.model.verify_type_enum import VerifyTypeEnum
from openapi_client.model.watchlist import Watchlist
from openapi_client.model.websocket_authentication import WebsocketAuthentication
from openapi_client.model.withdrawal_detail import WithdrawalDetail
