=begin
Nucoro API

No description

The version of the OpenAPI document: 4.175.0
Generated by: https://github.com/openapitools/openapi-generator.git

=end


class ImpersonationToken < ApplicationRecord
  validates_presence_of :impersonator
  validates_presence_of :impersonated
  validates_presence_of :token

end
