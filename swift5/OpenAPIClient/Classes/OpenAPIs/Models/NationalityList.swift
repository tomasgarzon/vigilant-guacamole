//
// NationalityList.swift
//
// Generated by openapi-generator
// https://openapi-generator.tech
//

import Foundation
#if canImport(AnyCodable)
import AnyCodable
#endif

/** A ModelSerializer that takes additional arguments for \&quot;fields\&quot;, \&quot;omit\&quot; and \&quot;expand\&quot; in order to control which fields are displayed, and whether to replace simple values with complex, nested serializations */
public struct NationalityList: Codable, Hashable {

    public var uuid: UUID
    public var country: String
    public var documentType: String?
    public var documentNumber: String

    public init(uuid: UUID, country: String, documentType: String? = nil, documentNumber: String) {
        self.uuid = uuid
        self.country = country
        self.documentType = documentType
        self.documentNumber = documentNumber
    }

    public enum CodingKeys: String, CodingKey, CaseIterable {
        case uuid
        case country
        case documentType = "document_type"
        case documentNumber = "document_number"
    }

    // Encodable protocol methods

    public func encode(to encoder: Encoder) throws {
        var container = encoder.container(keyedBy: CodingKeys.self)
        try container.encode(uuid, forKey: .uuid)
        try container.encode(country, forKey: .country)
        try container.encodeIfPresent(documentType, forKey: .documentType)
        try container.encode(documentNumber, forKey: .documentNumber)
    }
}
