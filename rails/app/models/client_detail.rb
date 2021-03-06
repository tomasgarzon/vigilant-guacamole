=begin
Nucoro API

No description

The version of the OpenAPI document: 4.175.0
Generated by: https://github.com/openapitools/openapi-generator.git

=end


class ClientDetail < ApplicationRecord
  validates_presence_of :email
  validates_presence_of :tos_consent
  validates_presence_of :marketing_consent
  validates_presence_of :data_consent
  validates_presence_of :tos_consent_date
  validates_presence_of :tax_information
  validates_presence_of :country_birth
  validates_presence_of :last_login
  validates_presence_of :referred_by
  validates_presence_of :successful_referrals
  validates_presence_of :kyc_verified
  validates_presence_of :is_verified
  validates_presence_of :fee_segments
  validates_presence_of :extra_data
  validates_presence_of :portfolios
  validates_presence_of :risk_level
  validates_presence_of :onboarding_token
  validates_presence_of :uuid
  validates_presence_of :created
  validates_presence_of :updated
  validates_presence_of :status
  validates_presence_of :language
  validates_presence_of :marketing_consent_date
  validates_presence_of :data_consent_date

  serialize :tax_information, Array
  serialize :fee_segments, Array
  serialize :extra_data, Hash
  serialize :portfolios, Array
end
