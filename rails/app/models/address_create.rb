=begin
Nucoro API

No description

The version of the OpenAPI document: 4.175.0
Generated by: https://github.com/openapitools/openapi-generator.git

=end


class AddressCreate < ApplicationRecord
  validates_presence_of :uuid
  validates_presence_of :line1
  validates_presence_of :postcode
  validates_presence_of :locality
  validates_presence_of :country

end
