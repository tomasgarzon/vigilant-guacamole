=begin
Nucoro API

No description

The version of the OpenAPI document: 4.175.0
Generated by: https://github.com/openapitools/openapi-generator.git

=end


class PatchedApplicationClientUpdate < ApplicationRecord

  serialize :tax_information, Array
  serialize :fee_segments, Array
  serialize :extra_data, Hash
  serialize :portfolios, Array
end
