=begin
Nucoro API

No description

The version of the OpenAPI document: 4.175.0
Generated by: https://github.com/openapitools/openapi-generator.git

=end


class JWTRefreshResponse < ApplicationRecord
  validates_presence_of :access
  validates_presence_of :refresh
  validates_presence_of :status

end
