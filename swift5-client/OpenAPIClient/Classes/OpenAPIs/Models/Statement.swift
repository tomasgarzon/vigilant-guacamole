//
// Statement.swift
//
// Generated by openapi-generator
// https://openapi-generator.tech
//

import Foundation
#if canImport(AnyCodable)
import AnyCodable
#endif

public struct Statement: Codable, Hashable {

    public var uuid: UUID
    public var dateFrom: Date
    public var dateTo: Date
    public var created: Date
    public var status: Status181Enum

    public init(uuid: UUID, dateFrom: Date, dateTo: Date, created: Date, status: Status181Enum) {
        self.uuid = uuid
        self.dateFrom = dateFrom
        self.dateTo = dateTo
        self.created = created
        self.status = status
    }

    public enum CodingKeys: String, CodingKey, CaseIterable {
        case uuid
        case dateFrom = "date_from"
        case dateTo = "date_to"
        case created
        case status
    }

    // Encodable protocol methods

    public func encode(to encoder: Encoder) throws {
        var container = encoder.container(keyedBy: CodingKeys.self)
        try container.encode(uuid, forKey: .uuid)
        try container.encode(dateFrom, forKey: .dateFrom)
        try container.encode(dateTo, forKey: .dateTo)
        try container.encode(created, forKey: .created)
        try container.encode(status, forKey: .status)
    }
}

