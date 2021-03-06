//
// RelationshipManager.swift
//
// Generated by openapi-generator
// https://openapi-generator.tech
//

import Foundation
#if canImport(AnyCodable)
import AnyCodable
#endif

public struct RelationshipManager: Codable, Hashable {

    public var uuid: UUID
    public var firstName: String?
    public var lastName: String?
    public var phoneNumber: String?
    public var email: String
    public var photo: String?

    public init(uuid: UUID, firstName: String? = nil, lastName: String? = nil, phoneNumber: String? = nil, email: String, photo: String? = nil) {
        self.uuid = uuid
        self.firstName = firstName
        self.lastName = lastName
        self.phoneNumber = phoneNumber
        self.email = email
        self.photo = photo
    }

    public enum CodingKeys: String, CodingKey, CaseIterable {
        case uuid
        case firstName = "first_name"
        case lastName = "last_name"
        case phoneNumber = "phone_number"
        case email
        case photo
    }

    // Encodable protocol methods

    public func encode(to encoder: Encoder) throws {
        var container = encoder.container(keyedBy: CodingKeys.self)
        try container.encode(uuid, forKey: .uuid)
        try container.encodeIfPresent(firstName, forKey: .firstName)
        try container.encodeIfPresent(lastName, forKey: .lastName)
        try container.encodeIfPresent(phoneNumber, forKey: .phoneNumber)
        try container.encode(email, forKey: .email)
        try container.encodeIfPresent(photo, forKey: .photo)
    }
}

