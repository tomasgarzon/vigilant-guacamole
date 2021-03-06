//
// Rebalance.swift
//
// Generated by openapi-generator
// https://openapi-generator.tech
//

import Foundation
#if canImport(AnyCodable)
import AnyCodable
#endif

/** A ModelSerializer that takes additional arguments for \&quot;fields\&quot;, \&quot;omit\&quot; and \&quot;expand\&quot; in order to control which fields are displayed, and whether to replace simple values with complex, nested serializations */
public struct Rebalance: Codable, Hashable {

    public var uuid: UUID
    public var status: RebalanceStatusEnum
    /** Cancelled reason */
    public var reason: String
    public var brokerOrders: [String]

    public init(uuid: UUID, status: RebalanceStatusEnum, reason: String, brokerOrders: [String]) {
        self.uuid = uuid
        self.status = status
        self.reason = reason
        self.brokerOrders = brokerOrders
    }

    public enum CodingKeys: String, CodingKey, CaseIterable {
        case uuid
        case status
        case reason
        case brokerOrders = "broker_orders"
    }

    // Encodable protocol methods

    public func encode(to encoder: Encoder) throws {
        var container = encoder.container(keyedBy: CodingKeys.self)
        try container.encode(uuid, forKey: .uuid)
        try container.encode(status, forKey: .status)
        try container.encode(reason, forKey: .reason)
        try container.encode(brokerOrders, forKey: .brokerOrders)
    }
}

