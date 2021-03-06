//
// FeedActivityList.swift
//
// Generated by openapi-generator
// https://openapi-generator.tech
//

import Foundation
#if canImport(AnyCodable)
import AnyCodable
#endif

/** A ModelSerializer that takes additional arguments for \&quot;fields\&quot;, \&quot;omit\&quot; and \&quot;expand\&quot; in order to control which fields are displayed, and whether to replace simple values with complex, nested serializations */
public struct FeedActivityList: Codable, Hashable {

    public var uuid: UUID
    public var created: Date
    public var activityType: ActivityTypeEnum
    public var activityData: [String: AnyCodable]

    public init(uuid: UUID, created: Date, activityType: ActivityTypeEnum, activityData: [String: AnyCodable]) {
        self.uuid = uuid
        self.created = created
        self.activityType = activityType
        self.activityData = activityData
    }

    public enum CodingKeys: String, CodingKey, CaseIterable {
        case uuid
        case created
        case activityType = "activity_type"
        case activityData = "activity_data"
    }

    // Encodable protocol methods

    public func encode(to encoder: Encoder) throws {
        var container = encoder.container(keyedBy: CodingKeys.self)
        try container.encode(uuid, forKey: .uuid)
        try container.encode(created, forKey: .created)
        try container.encode(activityType, forKey: .activityType)
        try container.encode(activityData, forKey: .activityData)
    }
}

