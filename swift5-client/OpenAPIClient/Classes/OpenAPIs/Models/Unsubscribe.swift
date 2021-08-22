//
// Unsubscribe.swift
//
// Generated by openapi-generator
// https://openapi-generator.tech
//

import Foundation
#if canImport(AnyCodable)
import AnyCodable
#endif

public struct Unsubscribe: Codable, Hashable {

    public var id: String
    public var subscription: String

    public init(id: String, subscription: String) {
        self.id = id
        self.subscription = subscription
    }

    public enum CodingKeys: String, CodingKey, CaseIterable {
        case id
        case subscription
    }

    // Encodable protocol methods

    public func encode(to encoder: Encoder) throws {
        var container = encoder.container(keyedBy: CodingKeys.self)
        try container.encode(id, forKey: .id)
        try container.encode(subscription, forKey: .subscription)
    }
}

