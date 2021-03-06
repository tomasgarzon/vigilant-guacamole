//
// JWTResponse.swift
//
// Generated by openapi-generator
// https://openapi-generator.tech
//

import Foundation
#if canImport(AnyCodable)
import AnyCodable
#endif

public struct JWTResponse: Codable, Hashable {

    public var access: String
    public var refresh: String
    public var status: String

    public init(access: String, refresh: String, status: String) {
        self.access = access
        self.refresh = refresh
        self.status = status
    }

    public enum CodingKeys: String, CodingKey, CaseIterable {
        case access
        case refresh
        case status
    }

    // Encodable protocol methods

    public func encode(to encoder: Encoder) throws {
        var container = encoder.container(keyedBy: CodingKeys.self)
        try container.encode(access, forKey: .access)
        try container.encode(refresh, forKey: .refresh)
        try container.encode(status, forKey: .status)
    }
}

