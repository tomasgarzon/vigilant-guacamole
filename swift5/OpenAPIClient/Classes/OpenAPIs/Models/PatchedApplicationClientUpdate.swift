//
// PatchedApplicationClientUpdate.swift
//
// Generated by openapi-generator
// https://openapi-generator.tech
//

import Foundation
#if canImport(AnyCodable)
import AnyCodable
#endif

/** A ModelSerializer that takes additional arguments for \&quot;fields\&quot;, \&quot;omit\&quot; and \&quot;expand\&quot; in order to control which fields are displayed, and whether to replace simple values with complex, nested serializations */
public struct PatchedApplicationClientUpdate: Codable, Hashable {

    public var email: String?
    public var birthdate: Date?
    public var tosConsent: Bool?
    public var marketingConsent: Bool?
    public var dataConsent: Bool?
    public var tosConsentDate: Date?
    public var taxInformation: [String]?
    public var countryBirth: CountryField?
    public var lastLogin: Date?
    public var referredBy: String?
    public var successfulReferrals: Int?
    public var kycVerified: Bool?
    public var isVerified: Bool?
    public var feeSegments: [String]?
    public var extraData: [String: AnyCodable]?
    public var portfolios: [String]?
    public var onboardedBy: String?
    public var riskLevel: Int?
    public var onboardingToken: String?
    public var password: String?
    public var emailVerifiedLastRequest: Date?
    public var uuid: UUID?
    public var created: Date?
    public var updated: Date?
    public var comments: String?
    public var status: StatusB65Enum?
    public var emailVerified: Bool?
    public var emailVerifyLastRequest: Date?
    public var title: PatchedApplicationClientUpdateTitleOneOf?
    public var firstName: String?
    public var middleName: String?
    public var lastName: String?
    public var gender: PatchedApplicationClientUpdateGenderOneOf?
    public var maritalStatus: PatchedApplicationClientUpdateMaritalStatusOneOf?
    public var phoneNumber: String?
    public var phoneNumberVerified: Date?
    public var language: String?
    public var employmentStatus: PatchedApplicationClientUpdateEmploymentStatusOneOf?
    public var profession: String?
    public var referralCode: String?
    public var activated: Date?
    public var utmSource: String?
    public var utmMedium: String?
    public var utmCampaign: String?
    public var utmTerm: String?
    public var utmContent: String?
    public var marketingConsentDate: Date?
    public var dataConsentDate: Date?

    public init(email: String? = nil, birthdate: Date? = nil, tosConsent: Bool? = nil, marketingConsent: Bool? = nil, dataConsent: Bool? = nil, tosConsentDate: Date? = nil, taxInformation: [String]? = nil, countryBirth: CountryField? = nil, lastLogin: Date? = nil, referredBy: String? = nil, successfulReferrals: Int? = nil, kycVerified: Bool? = nil, isVerified: Bool? = nil, feeSegments: [String]? = nil, extraData: [String: AnyCodable]? = nil, portfolios: [String]? = nil, onboardedBy: String? = nil, riskLevel: Int? = nil, onboardingToken: String? = nil, password: String? = nil, emailVerifiedLastRequest: Date? = nil, uuid: UUID? = nil, created: Date? = nil, updated: Date? = nil, comments: String? = nil, status: StatusB65Enum? = nil, emailVerified: Bool? = nil, emailVerifyLastRequest: Date? = nil, title: PatchedApplicationClientUpdateTitleOneOf? = nil, firstName: String? = nil, middleName: String? = nil, lastName: String? = nil, gender: PatchedApplicationClientUpdateGenderOneOf? = nil, maritalStatus: PatchedApplicationClientUpdateMaritalStatusOneOf? = nil, phoneNumber: String? = nil, phoneNumberVerified: Date? = nil, language: String? = nil, employmentStatus: PatchedApplicationClientUpdateEmploymentStatusOneOf? = nil, profession: String? = nil, referralCode: String? = nil, activated: Date? = nil, utmSource: String? = nil, utmMedium: String? = nil, utmCampaign: String? = nil, utmTerm: String? = nil, utmContent: String? = nil, marketingConsentDate: Date? = nil, dataConsentDate: Date? = nil) {
        self.email = email
        self.birthdate = birthdate
        self.tosConsent = tosConsent
        self.marketingConsent = marketingConsent
        self.dataConsent = dataConsent
        self.tosConsentDate = tosConsentDate
        self.taxInformation = taxInformation
        self.countryBirth = countryBirth
        self.lastLogin = lastLogin
        self.referredBy = referredBy
        self.successfulReferrals = successfulReferrals
        self.kycVerified = kycVerified
        self.isVerified = isVerified
        self.feeSegments = feeSegments
        self.extraData = extraData
        self.portfolios = portfolios
        self.onboardedBy = onboardedBy
        self.riskLevel = riskLevel
        self.onboardingToken = onboardingToken
        self.password = password
        self.emailVerifiedLastRequest = emailVerifiedLastRequest
        self.uuid = uuid
        self.created = created
        self.updated = updated
        self.comments = comments
        self.status = status
        self.emailVerified = emailVerified
        self.emailVerifyLastRequest = emailVerifyLastRequest
        self.title = title
        self.firstName = firstName
        self.middleName = middleName
        self.lastName = lastName
        self.gender = gender
        self.maritalStatus = maritalStatus
        self.phoneNumber = phoneNumber
        self.phoneNumberVerified = phoneNumberVerified
        self.language = language
        self.employmentStatus = employmentStatus
        self.profession = profession
        self.referralCode = referralCode
        self.activated = activated
        self.utmSource = utmSource
        self.utmMedium = utmMedium
        self.utmCampaign = utmCampaign
        self.utmTerm = utmTerm
        self.utmContent = utmContent
        self.marketingConsentDate = marketingConsentDate
        self.dataConsentDate = dataConsentDate
    }

    public enum CodingKeys: String, CodingKey, CaseIterable {
        case email
        case birthdate
        case tosConsent = "tos_consent"
        case marketingConsent = "marketing_consent"
        case dataConsent = "data_consent"
        case tosConsentDate = "tos_consent_date"
        case taxInformation = "tax_information"
        case countryBirth = "country_birth"
        case lastLogin = "last_login"
        case referredBy = "referred_by"
        case successfulReferrals = "successful_referrals"
        case kycVerified = "kyc_verified"
        case isVerified = "is_verified"
        case feeSegments = "fee_segments"
        case extraData = "extra_data"
        case portfolios
        case onboardedBy = "onboarded_by"
        case riskLevel = "risk_level"
        case onboardingToken = "onboarding_token"
        case password
        case emailVerifiedLastRequest = "email_verified_last_request"
        case uuid
        case created
        case updated
        case comments
        case status
        case emailVerified = "email_verified"
        case emailVerifyLastRequest = "email_verify_last_request"
        case title
        case firstName = "first_name"
        case middleName = "middle_name"
        case lastName = "last_name"
        case gender
        case maritalStatus = "marital_status"
        case phoneNumber = "phone_number"
        case phoneNumberVerified = "phone_number_verified"
        case language
        case employmentStatus = "employment_status"
        case profession
        case referralCode = "referral_code"
        case activated
        case utmSource = "utm_source"
        case utmMedium = "utm_medium"
        case utmCampaign = "utm_campaign"
        case utmTerm = "utm_term"
        case utmContent = "utm_content"
        case marketingConsentDate = "marketing_consent_date"
        case dataConsentDate = "data_consent_date"
    }

    // Encodable protocol methods

    public func encode(to encoder: Encoder) throws {
        var container = encoder.container(keyedBy: CodingKeys.self)
        try container.encodeIfPresent(email, forKey: .email)
        try container.encodeIfPresent(birthdate, forKey: .birthdate)
        try container.encodeIfPresent(tosConsent, forKey: .tosConsent)
        try container.encodeIfPresent(marketingConsent, forKey: .marketingConsent)
        try container.encodeIfPresent(dataConsent, forKey: .dataConsent)
        try container.encodeIfPresent(tosConsentDate, forKey: .tosConsentDate)
        try container.encodeIfPresent(taxInformation, forKey: .taxInformation)
        try container.encodeIfPresent(countryBirth, forKey: .countryBirth)
        try container.encodeIfPresent(lastLogin, forKey: .lastLogin)
        try container.encodeIfPresent(referredBy, forKey: .referredBy)
        try container.encodeIfPresent(successfulReferrals, forKey: .successfulReferrals)
        try container.encodeIfPresent(kycVerified, forKey: .kycVerified)
        try container.encodeIfPresent(isVerified, forKey: .isVerified)
        try container.encodeIfPresent(feeSegments, forKey: .feeSegments)
        try container.encodeIfPresent(extraData, forKey: .extraData)
        try container.encodeIfPresent(portfolios, forKey: .portfolios)
        try container.encodeIfPresent(onboardedBy, forKey: .onboardedBy)
        try container.encodeIfPresent(riskLevel, forKey: .riskLevel)
        try container.encodeIfPresent(onboardingToken, forKey: .onboardingToken)
        try container.encodeIfPresent(password, forKey: .password)
        try container.encodeIfPresent(emailVerifiedLastRequest, forKey: .emailVerifiedLastRequest)
        try container.encodeIfPresent(uuid, forKey: .uuid)
        try container.encodeIfPresent(created, forKey: .created)
        try container.encodeIfPresent(updated, forKey: .updated)
        try container.encodeIfPresent(comments, forKey: .comments)
        try container.encodeIfPresent(status, forKey: .status)
        try container.encodeIfPresent(emailVerified, forKey: .emailVerified)
        try container.encodeIfPresent(emailVerifyLastRequest, forKey: .emailVerifyLastRequest)
        try container.encodeIfPresent(title, forKey: .title)
        try container.encodeIfPresent(firstName, forKey: .firstName)
        try container.encodeIfPresent(middleName, forKey: .middleName)
        try container.encodeIfPresent(lastName, forKey: .lastName)
        try container.encodeIfPresent(gender, forKey: .gender)
        try container.encodeIfPresent(maritalStatus, forKey: .maritalStatus)
        try container.encodeIfPresent(phoneNumber, forKey: .phoneNumber)
        try container.encodeIfPresent(phoneNumberVerified, forKey: .phoneNumberVerified)
        try container.encodeIfPresent(language, forKey: .language)
        try container.encodeIfPresent(employmentStatus, forKey: .employmentStatus)
        try container.encodeIfPresent(profession, forKey: .profession)
        try container.encodeIfPresent(referralCode, forKey: .referralCode)
        try container.encodeIfPresent(activated, forKey: .activated)
        try container.encodeIfPresent(utmSource, forKey: .utmSource)
        try container.encodeIfPresent(utmMedium, forKey: .utmMedium)
        try container.encodeIfPresent(utmCampaign, forKey: .utmCampaign)
        try container.encodeIfPresent(utmTerm, forKey: .utmTerm)
        try container.encodeIfPresent(utmContent, forKey: .utmContent)
        try container.encodeIfPresent(marketingConsentDate, forKey: .marketingConsentDate)
        try container.encodeIfPresent(dataConsentDate, forKey: .dataConsentDate)
    }
}

