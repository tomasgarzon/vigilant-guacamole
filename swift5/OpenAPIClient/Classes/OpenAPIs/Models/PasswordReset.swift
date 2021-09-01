//
// PasswordReset.swift
//
// Generated by openapi-generator
// https://openapi-generator.tech
//

import Foundation
#if canImport(AnyCodable)
import AnyCodable
#endif

public struct PasswordReset: Codable, Hashable {

    public var email: String
    public var token: String
    public var password: String

    public init(email: String, token: String, password: String) {
        self.email = email
        self.token = token
        self.password = password
    }

    public enum CodingKeys: String, CodingKey, CaseIterable {
        case email
        case token
        case password
    }

    // Encodable protocol methods

    public func encode(to encoder: Encoder) throws {
        var container = encoder.container(keyedBy: CodingKeys.self)
        try container.encode(email, forKey: .email)
        try container.encode(token, forKey: .token)
        try container.encode(password, forKey: .password)
    }
}
