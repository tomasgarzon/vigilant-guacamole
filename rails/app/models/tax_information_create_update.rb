=begin
Nucoro API

No description

The version of the OpenAPI document: 4.175.0
Generated by: https://github.com/openapitools/openapi-generator.git

=end


class TaxInformationCreateUpdate < ApplicationRecord
  validates_presence_of :uuid
  validates_presence_of :country
  validates_presence_of :document_number

end
