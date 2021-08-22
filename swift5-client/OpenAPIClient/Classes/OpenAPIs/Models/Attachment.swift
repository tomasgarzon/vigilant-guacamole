//
// Attachment.swift
//
// Generated by openapi-generator
// https://openapi-generator.tech
//

import Foundation
#if canImport(AnyCodable)
import AnyCodable
#endif

public struct Attachment: Codable, Hashable {

    public var attachmentExtension: String
    public var attachmentFilename: String
    public var uuid: UUID

    public init(attachmentExtension: String, attachmentFilename: String, uuid: UUID) {
        self.attachmentExtension = attachmentExtension
        self.attachmentFilename = attachmentFilename
        self.uuid = uuid
    }

    public enum CodingKeys: String, CodingKey, CaseIterable {
        case attachmentExtension = "attachment_extension"
        case attachmentFilename = "attachment_filename"
        case uuid
    }

    // Encodable protocol methods

    public func encode(to encoder: Encoder) throws {
        var container = encoder.container(keyedBy: CodingKeys.self)
        try container.encode(attachmentExtension, forKey: .attachmentExtension)
        try container.encode(attachmentFilename, forKey: .attachmentFilename)
        try container.encode(uuid, forKey: .uuid)
    }
}

