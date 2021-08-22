//
// NationalityUpdate.swift
//
// Generated by openapi-generator
// https://openapi-generator.tech
//

import Foundation
#if canImport(AnyCodable)
import AnyCodable
#endif

/** A ModelSerializer that takes additional arguments for \&quot;fields\&quot;, \&quot;omit\&quot; and \&quot;expand\&quot; in order to control which fields are displayed, and whether to replace simple values with complex, nested serializations */
public struct NationalityUpdate: Codable, Hashable {

    public var country: String
    public var documentNumber: String?
    public var documentType: String?

    public init(country: String, documentNumber: String? = nil, documentType: String? = nil) {
        self.country = country
        self.documentNumber = documentNumber
        self.documentType = documentType
    }

    public enum CodingKeys: String, CodingKey, CaseIterable {
        case country
        case documentNumber = "document_number"
        case documentType = "document_type"
    }

    // Encodable protocol methods

    public func encode(to encoder: Encoder) throws {
        var container = encoder.container(keyedBy: CodingKeys.self)
        try container.encode(country, forKey: .country)
        try container.encodeIfPresent(documentNumber, forKey: .documentNumber)
        try container.encodeIfPresent(documentType, forKey: .documentType)
    }
}

