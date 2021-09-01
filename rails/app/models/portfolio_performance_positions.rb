=begin
Nucoro API

No description

The version of the OpenAPI document: 4.175.0
Generated by: https://github.com/openapitools/openapi-generator.git

=end


class PortfolioPerformancePositions < ApplicationRecord
  validates_presence_of :valuation_datetime
  validates_presence_of :last_update
  validates_presence_of :asset
  validates_presence_of :shares
  validates_presence_of :price
  validates_presence_of :currency
  validates_presence_of :value
  validates_presence_of :position_return
  validates_presence_of :unrealised_pl
  validates_presence_of :realised_pl
  validates_presence_of :earnings
  validates_presence_of :avg_entry_price
  validates_presence_of :daily_pl

end