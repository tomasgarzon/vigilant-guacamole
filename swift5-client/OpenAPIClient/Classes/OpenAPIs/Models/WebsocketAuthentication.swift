//
// WebsocketAuthentication.swift
//
// Generated by openapi-generator
// https://openapi-generator.tech
//

import Foundation
#if canImport(AnyCodable)
import AnyCodable
#endif

public struct WebsocketAuthentication: Codable, Hashable {

    public var ticket: String

    public init(ticket: String) {
        self.ticket = ticket
    }

    public enum CodingKeys: String, CodingKey, CaseIterable {
        case ticket
    }

    // Encodable protocol methods

    public func encode(to encoder: Encoder) throws {
        var container = encoder.container(keyedBy: CodingKeys.self)
        try container.encode(ticket, forKey: .ticket)
    }
}
