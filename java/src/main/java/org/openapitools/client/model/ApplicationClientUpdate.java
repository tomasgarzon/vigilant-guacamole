/*
 * Nucoro API
 * No description
 *
 * The version of the OpenAPI document: 4.175.0
 * 
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */


package org.openapitools.client.model;

import java.util.Objects;
import java.util.Arrays;
import com.google.gson.TypeAdapter;
import com.google.gson.annotations.JsonAdapter;
import com.google.gson.annotations.SerializedName;
import com.google.gson.stream.JsonReader;
import com.google.gson.stream.JsonWriter;
import io.swagger.annotations.ApiModel;
import io.swagger.annotations.ApiModelProperty;
import java.io.IOException;
import java.util.ArrayList;
import java.util.HashMap;
import java.util.List;
import java.util.Map;
import java.util.UUID;
import org.openapitools.client.model.CountryField;
import org.openapitools.client.model.OneOfEmploymentStatusEnumBlankEnumNullEnum;
import org.openapitools.client.model.OneOfGenderEnumBlankEnumNullEnum;
import org.openapitools.client.model.OneOfMaritalStatusEnumBlankEnumNullEnum;
import org.openapitools.client.model.OneOfTitleEnumBlankEnumNullEnum;
import org.openapitools.client.model.StatusB65Enum;
import org.openapitools.jackson.nullable.JsonNullable;
import org.threeten.bp.LocalDate;
import org.threeten.bp.OffsetDateTime;

/**
 * A ModelSerializer that takes additional arguments for \&quot;fields\&quot;, \&quot;omit\&quot; and \&quot;expand\&quot; in order to control which fields are displayed, and whether to replace simple values with complex, nested serializations
 */
@ApiModel(description = "A ModelSerializer that takes additional arguments for \"fields\", \"omit\" and \"expand\" in order to control which fields are displayed, and whether to replace simple values with complex, nested serializations")
@javax.annotation.Generated(value = "org.openapitools.codegen.languages.JavaClientCodegen", date = "2021-09-01T11:21:17.898459Z[Etc/UTC]")
public class ApplicationClientUpdate {
  public static final String SERIALIZED_NAME_EMAIL = "email";
  @SerializedName(SERIALIZED_NAME_EMAIL)
  private String email;

  public static final String SERIALIZED_NAME_BIRTHDATE = "birthdate";
  @SerializedName(SERIALIZED_NAME_BIRTHDATE)
  private LocalDate birthdate;

  public static final String SERIALIZED_NAME_TOS_CONSENT = "tos_consent";
  @SerializedName(SERIALIZED_NAME_TOS_CONSENT)
  private Boolean tosConsent;

  public static final String SERIALIZED_NAME_MARKETING_CONSENT = "marketing_consent";
  @SerializedName(SERIALIZED_NAME_MARKETING_CONSENT)
  private Boolean marketingConsent;

  public static final String SERIALIZED_NAME_DATA_CONSENT = "data_consent";
  @SerializedName(SERIALIZED_NAME_DATA_CONSENT)
  private Boolean dataConsent;

  public static final String SERIALIZED_NAME_TOS_CONSENT_DATE = "tos_consent_date";
  @SerializedName(SERIALIZED_NAME_TOS_CONSENT_DATE)
  private LocalDate tosConsentDate;

  public static final String SERIALIZED_NAME_TAX_INFORMATION = "tax_information";
  @SerializedName(SERIALIZED_NAME_TAX_INFORMATION)
  private List<String> taxInformation = new ArrayList<String>();

  public static final String SERIALIZED_NAME_COUNTRY_BIRTH = "country_birth";
  @SerializedName(SERIALIZED_NAME_COUNTRY_BIRTH)
  private CountryField countryBirth;

  public static final String SERIALIZED_NAME_LAST_LOGIN = "last_login";
  @SerializedName(SERIALIZED_NAME_LAST_LOGIN)
  private OffsetDateTime lastLogin;

  public static final String SERIALIZED_NAME_REFERRED_BY = "referred_by";
  @SerializedName(SERIALIZED_NAME_REFERRED_BY)
  private String referredBy;

  public static final String SERIALIZED_NAME_SUCCESSFUL_REFERRALS = "successful_referrals";
  @SerializedName(SERIALIZED_NAME_SUCCESSFUL_REFERRALS)
  private Integer successfulReferrals;

  public static final String SERIALIZED_NAME_KYC_VERIFIED = "kyc_verified";
  @SerializedName(SERIALIZED_NAME_KYC_VERIFIED)
  private Boolean kycVerified;

  public static final String SERIALIZED_NAME_IS_VERIFIED = "is_verified";
  @SerializedName(SERIALIZED_NAME_IS_VERIFIED)
  private Boolean isVerified;

  public static final String SERIALIZED_NAME_FEE_SEGMENTS = "fee_segments";
  @SerializedName(SERIALIZED_NAME_FEE_SEGMENTS)
  private List<String> feeSegments = new ArrayList<String>();

  public static final String SERIALIZED_NAME_EXTRA_DATA = "extra_data";
  @SerializedName(SERIALIZED_NAME_EXTRA_DATA)
  private Map<String, Object> extraData = null;

  public static final String SERIALIZED_NAME_PORTFOLIOS = "portfolios";
  @SerializedName(SERIALIZED_NAME_PORTFOLIOS)
  private List<String> portfolios = new ArrayList<String>();

  public static final String SERIALIZED_NAME_ONBOARDED_BY = "onboarded_by";
  @SerializedName(SERIALIZED_NAME_ONBOARDED_BY)
  private String onboardedBy;

  public static final String SERIALIZED_NAME_RISK_LEVEL = "risk_level";
  @SerializedName(SERIALIZED_NAME_RISK_LEVEL)
  private Integer riskLevel;

  public static final String SERIALIZED_NAME_ONBOARDING_TOKEN = "onboarding_token";
  @SerializedName(SERIALIZED_NAME_ONBOARDING_TOKEN)
  private String onboardingToken;

  public static final String SERIALIZED_NAME_PASSWORD = "password";
  @SerializedName(SERIALIZED_NAME_PASSWORD)
  private String password;

  public static final String SERIALIZED_NAME_EMAIL_VERIFIED_LAST_REQUEST = "email_verified_last_request";
  @SerializedName(SERIALIZED_NAME_EMAIL_VERIFIED_LAST_REQUEST)
  private OffsetDateTime emailVerifiedLastRequest;

  public static final String SERIALIZED_NAME_UUID = "uuid";
  @SerializedName(SERIALIZED_NAME_UUID)
  private UUID uuid;

  public static final String SERIALIZED_NAME_CREATED = "created";
  @SerializedName(SERIALIZED_NAME_CREATED)
  private OffsetDateTime created;

  public static final String SERIALIZED_NAME_UPDATED = "updated";
  @SerializedName(SERIALIZED_NAME_UPDATED)
  private OffsetDateTime updated;

  public static final String SERIALIZED_NAME_COMMENTS = "comments";
  @SerializedName(SERIALIZED_NAME_COMMENTS)
  private String comments;

  public static final String SERIALIZED_NAME_STATUS = "status";
  @SerializedName(SERIALIZED_NAME_STATUS)
  private StatusB65Enum status;

  public static final String SERIALIZED_NAME_EMAIL_VERIFIED = "email_verified";
  @SerializedName(SERIALIZED_NAME_EMAIL_VERIFIED)
  private Boolean emailVerified;

  public static final String SERIALIZED_NAME_EMAIL_VERIFY_LAST_REQUEST = "email_verify_last_request";
  @SerializedName(SERIALIZED_NAME_EMAIL_VERIFY_LAST_REQUEST)
  private OffsetDateTime emailVerifyLastRequest;

  public static final String SERIALIZED_NAME_TITLE = "title";
  @SerializedName(SERIALIZED_NAME_TITLE)
  private OneOfTitleEnumBlankEnumNullEnum title;

  public static final String SERIALIZED_NAME_FIRST_NAME = "first_name";
  @SerializedName(SERIALIZED_NAME_FIRST_NAME)
  private String firstName;

  public static final String SERIALIZED_NAME_MIDDLE_NAME = "middle_name";
  @SerializedName(SERIALIZED_NAME_MIDDLE_NAME)
  private String middleName;

  public static final String SERIALIZED_NAME_LAST_NAME = "last_name";
  @SerializedName(SERIALIZED_NAME_LAST_NAME)
  private String lastName;

  public static final String SERIALIZED_NAME_GENDER = "gender";
  @SerializedName(SERIALIZED_NAME_GENDER)
  private OneOfGenderEnumBlankEnumNullEnum gender;

  public static final String SERIALIZED_NAME_MARITAL_STATUS = "marital_status";
  @SerializedName(SERIALIZED_NAME_MARITAL_STATUS)
  private OneOfMaritalStatusEnumBlankEnumNullEnum maritalStatus;

  public static final String SERIALIZED_NAME_PHONE_NUMBER = "phone_number";
  @SerializedName(SERIALIZED_NAME_PHONE_NUMBER)
  private String phoneNumber;

  public static final String SERIALIZED_NAME_PHONE_NUMBER_VERIFIED = "phone_number_verified";
  @SerializedName(SERIALIZED_NAME_PHONE_NUMBER_VERIFIED)
  private OffsetDateTime phoneNumberVerified;

  public static final String SERIALIZED_NAME_LANGUAGE = "language";
  @SerializedName(SERIALIZED_NAME_LANGUAGE)
  private String language;

  public static final String SERIALIZED_NAME_EMPLOYMENT_STATUS = "employment_status";
  @SerializedName(SERIALIZED_NAME_EMPLOYMENT_STATUS)
  private OneOfEmploymentStatusEnumBlankEnumNullEnum employmentStatus;

  public static final String SERIALIZED_NAME_PROFESSION = "profession";
  @SerializedName(SERIALIZED_NAME_PROFESSION)
  private String profession;

  public static final String SERIALIZED_NAME_REFERRAL_CODE = "referral_code";
  @SerializedName(SERIALIZED_NAME_REFERRAL_CODE)
  private String referralCode;

  public static final String SERIALIZED_NAME_ACTIVATED = "activated";
  @SerializedName(SERIALIZED_NAME_ACTIVATED)
  private OffsetDateTime activated;

  public static final String SERIALIZED_NAME_UTM_SOURCE = "utm_source";
  @SerializedName(SERIALIZED_NAME_UTM_SOURCE)
  private String utmSource;

  public static final String SERIALIZED_NAME_UTM_MEDIUM = "utm_medium";
  @SerializedName(SERIALIZED_NAME_UTM_MEDIUM)
  private String utmMedium;

  public static final String SERIALIZED_NAME_UTM_CAMPAIGN = "utm_campaign";
  @SerializedName(SERIALIZED_NAME_UTM_CAMPAIGN)
  private String utmCampaign;

  public static final String SERIALIZED_NAME_UTM_TERM = "utm_term";
  @SerializedName(SERIALIZED_NAME_UTM_TERM)
  private String utmTerm;

  public static final String SERIALIZED_NAME_UTM_CONTENT = "utm_content";
  @SerializedName(SERIALIZED_NAME_UTM_CONTENT)
  private String utmContent;

  public static final String SERIALIZED_NAME_MARKETING_CONSENT_DATE = "marketing_consent_date";
  @SerializedName(SERIALIZED_NAME_MARKETING_CONSENT_DATE)
  private LocalDate marketingConsentDate;

  public static final String SERIALIZED_NAME_DATA_CONSENT_DATE = "data_consent_date";
  @SerializedName(SERIALIZED_NAME_DATA_CONSENT_DATE)
  private LocalDate dataConsentDate;


  public ApplicationClientUpdate email(String email) {
    
    this.email = email;
    return this;
  }

   /**
   * Get email
   * @return email
  **/
  @javax.annotation.Nonnull
  @ApiModelProperty(required = true, value = "")

  public String getEmail() {
    return email;
  }


  public void setEmail(String email) {
    this.email = email;
  }


  public ApplicationClientUpdate birthdate(LocalDate birthdate) {
    
    this.birthdate = birthdate;
    return this;
  }

   /**
   * Get birthdate
   * @return birthdate
  **/
  @javax.annotation.Nullable
  @ApiModelProperty(value = "")

  public LocalDate getBirthdate() {
    return birthdate;
  }


  public void setBirthdate(LocalDate birthdate) {
    this.birthdate = birthdate;
  }


  public ApplicationClientUpdate tosConsent(Boolean tosConsent) {
    
    this.tosConsent = tosConsent;
    return this;
  }

   /**
   * Get tosConsent
   * @return tosConsent
  **/
  @javax.annotation.Nullable
  @ApiModelProperty(value = "")

  public Boolean getTosConsent() {
    return tosConsent;
  }


  public void setTosConsent(Boolean tosConsent) {
    this.tosConsent = tosConsent;
  }


  public ApplicationClientUpdate marketingConsent(Boolean marketingConsent) {
    
    this.marketingConsent = marketingConsent;
    return this;
  }

   /**
   * Get marketingConsent
   * @return marketingConsent
  **/
  @javax.annotation.Nullable
  @ApiModelProperty(value = "")

  public Boolean getMarketingConsent() {
    return marketingConsent;
  }


  public void setMarketingConsent(Boolean marketingConsent) {
    this.marketingConsent = marketingConsent;
  }


  public ApplicationClientUpdate dataConsent(Boolean dataConsent) {
    
    this.dataConsent = dataConsent;
    return this;
  }

   /**
   * Get dataConsent
   * @return dataConsent
  **/
  @javax.annotation.Nullable
  @ApiModelProperty(value = "")

  public Boolean getDataConsent() {
    return dataConsent;
  }


  public void setDataConsent(Boolean dataConsent) {
    this.dataConsent = dataConsent;
  }


   /**
   * Get tosConsentDate
   * @return tosConsentDate
  **/
  @javax.annotation.Nonnull
  @ApiModelProperty(required = true, value = "")

  public LocalDate getTosConsentDate() {
    return tosConsentDate;
  }




   /**
   * Get taxInformation
   * @return taxInformation
  **/
  @javax.annotation.Nonnull
  @ApiModelProperty(required = true, value = "")

  public List<String> getTaxInformation() {
    return taxInformation;
  }




  public ApplicationClientUpdate countryBirth(CountryField countryBirth) {
    
    this.countryBirth = countryBirth;
    return this;
  }

   /**
   * Get countryBirth
   * @return countryBirth
  **/
  @javax.annotation.Nonnull
  @ApiModelProperty(required = true, value = "")

  public CountryField getCountryBirth() {
    return countryBirth;
  }


  public void setCountryBirth(CountryField countryBirth) {
    this.countryBirth = countryBirth;
  }


   /**
   * Get lastLogin
   * @return lastLogin
  **/
  @javax.annotation.Nonnull
  @ApiModelProperty(required = true, value = "")

  public OffsetDateTime getLastLogin() {
    return lastLogin;
  }




  public ApplicationClientUpdate referredBy(String referredBy) {
    
    this.referredBy = referredBy;
    return this;
  }

   /**
   * Get referredBy
   * @return referredBy
  **/
  @javax.annotation.Nullable
  @ApiModelProperty(required = true, value = "")

  public String getReferredBy() {
    return referredBy;
  }


  public void setReferredBy(String referredBy) {
    this.referredBy = referredBy;
  }


   /**
   * Get successfulReferrals
   * @return successfulReferrals
  **/
  @javax.annotation.Nonnull
  @ApiModelProperty(required = true, value = "")

  public Integer getSuccessfulReferrals() {
    return successfulReferrals;
  }




   /**
   * Get kycVerified
   * @return kycVerified
  **/
  @javax.annotation.Nonnull
  @ApiModelProperty(required = true, value = "")

  public Boolean getKycVerified() {
    return kycVerified;
  }




   /**
   * Get isVerified
   * @return isVerified
  **/
  @javax.annotation.Nonnull
  @ApiModelProperty(required = true, value = "")

  public Boolean getIsVerified() {
    return isVerified;
  }




   /**
   * Get feeSegments
   * @return feeSegments
  **/
  @javax.annotation.Nonnull
  @ApiModelProperty(required = true, value = "")

  public List<String> getFeeSegments() {
    return feeSegments;
  }




  public ApplicationClientUpdate extraData(Map<String, Object> extraData) {
    
    this.extraData = extraData;
    return this;
  }

  public ApplicationClientUpdate putExtraDataItem(String key, Object extraDataItem) {
    if (this.extraData == null) {
      this.extraData = new HashMap<String, Object>();
    }
    this.extraData.put(key, extraDataItem);
    return this;
  }

   /**
   * Get extraData
   * @return extraData
  **/
  @javax.annotation.Nullable
  @ApiModelProperty(value = "")

  public Map<String, Object> getExtraData() {
    return extraData;
  }


  public void setExtraData(Map<String, Object> extraData) {
    this.extraData = extraData;
  }


   /**
   * Get portfolios
   * @return portfolios
  **/
  @javax.annotation.Nonnull
  @ApiModelProperty(required = true, value = "")

  public List<String> getPortfolios() {
    return portfolios;
  }




  public ApplicationClientUpdate onboardedBy(String onboardedBy) {
    
    this.onboardedBy = onboardedBy;
    return this;
  }

   /**
   * Get onboardedBy
   * @return onboardedBy
  **/
  @javax.annotation.Nullable
  @ApiModelProperty(value = "")

  public String getOnboardedBy() {
    return onboardedBy;
  }


  public void setOnboardedBy(String onboardedBy) {
    this.onboardedBy = onboardedBy;
  }


   /**
   * Get riskLevel
   * @return riskLevel
  **/
  @javax.annotation.Nonnull
  @ApiModelProperty(required = true, value = "")

  public Integer getRiskLevel() {
    return riskLevel;
  }




   /**
   * Get onboardingToken
   * @return onboardingToken
  **/
  @javax.annotation.Nonnull
  @ApiModelProperty(required = true, value = "")

  public String getOnboardingToken() {
    return onboardingToken;
  }




  public ApplicationClientUpdate password(String password) {
    
    this.password = password;
    return this;
  }

   /**
   * Get password
   * @return password
  **/
  @javax.annotation.Nullable
  @ApiModelProperty(value = "")

  public String getPassword() {
    return password;
  }


  public void setPassword(String password) {
    this.password = password;
  }


  public ApplicationClientUpdate emailVerifiedLastRequest(OffsetDateTime emailVerifiedLastRequest) {
    
    this.emailVerifiedLastRequest = emailVerifiedLastRequest;
    return this;
  }

   /**
   * Get emailVerifiedLastRequest
   * @return emailVerifiedLastRequest
  **/
  @javax.annotation.Nullable
  @ApiModelProperty(value = "")

  public OffsetDateTime getEmailVerifiedLastRequest() {
    return emailVerifiedLastRequest;
  }


  public void setEmailVerifiedLastRequest(OffsetDateTime emailVerifiedLastRequest) {
    this.emailVerifiedLastRequest = emailVerifiedLastRequest;
  }


   /**
   * Get uuid
   * @return uuid
  **/
  @javax.annotation.Nonnull
  @ApiModelProperty(required = true, value = "")

  public UUID getUuid() {
    return uuid;
  }




   /**
   * Get created
   * @return created
  **/
  @javax.annotation.Nonnull
  @ApiModelProperty(required = true, value = "")

  public OffsetDateTime getCreated() {
    return created;
  }




   /**
   * Get updated
   * @return updated
  **/
  @javax.annotation.Nonnull
  @ApiModelProperty(required = true, value = "")

  public OffsetDateTime getUpdated() {
    return updated;
  }




  public ApplicationClientUpdate comments(String comments) {
    
    this.comments = comments;
    return this;
  }

   /**
   * Get comments
   * @return comments
  **/
  @javax.annotation.Nullable
  @ApiModelProperty(value = "")

  public String getComments() {
    return comments;
  }


  public void setComments(String comments) {
    this.comments = comments;
  }


   /**
   * Get status
   * @return status
  **/
  @javax.annotation.Nonnull
  @ApiModelProperty(required = true, value = "")

  public StatusB65Enum getStatus() {
    return status;
  }




  public ApplicationClientUpdate emailVerified(Boolean emailVerified) {
    
    this.emailVerified = emailVerified;
    return this;
  }

   /**
   * Get emailVerified
   * @return emailVerified
  **/
  @javax.annotation.Nullable
  @ApiModelProperty(value = "")

  public Boolean getEmailVerified() {
    return emailVerified;
  }


  public void setEmailVerified(Boolean emailVerified) {
    this.emailVerified = emailVerified;
  }


  public ApplicationClientUpdate emailVerifyLastRequest(OffsetDateTime emailVerifyLastRequest) {
    
    this.emailVerifyLastRequest = emailVerifyLastRequest;
    return this;
  }

   /**
   * Get emailVerifyLastRequest
   * @return emailVerifyLastRequest
  **/
  @javax.annotation.Nullable
  @ApiModelProperty(value = "")

  public OffsetDateTime getEmailVerifyLastRequest() {
    return emailVerifyLastRequest;
  }


  public void setEmailVerifyLastRequest(OffsetDateTime emailVerifyLastRequest) {
    this.emailVerifyLastRequest = emailVerifyLastRequest;
  }


  public ApplicationClientUpdate title(OneOfTitleEnumBlankEnumNullEnum title) {
    
    this.title = title;
    return this;
  }

   /**
   * Get title
   * @return title
  **/
  @javax.annotation.Nullable
  @ApiModelProperty(value = "")

  public OneOfTitleEnumBlankEnumNullEnum getTitle() {
    return title;
  }


  public void setTitle(OneOfTitleEnumBlankEnumNullEnum title) {
    this.title = title;
  }


  public ApplicationClientUpdate firstName(String firstName) {
    
    this.firstName = firstName;
    return this;
  }

   /**
   * Get firstName
   * @return firstName
  **/
  @javax.annotation.Nullable
  @ApiModelProperty(value = "")

  public String getFirstName() {
    return firstName;
  }


  public void setFirstName(String firstName) {
    this.firstName = firstName;
  }


  public ApplicationClientUpdate middleName(String middleName) {
    
    this.middleName = middleName;
    return this;
  }

   /**
   * Get middleName
   * @return middleName
  **/
  @javax.annotation.Nullable
  @ApiModelProperty(value = "")

  public String getMiddleName() {
    return middleName;
  }


  public void setMiddleName(String middleName) {
    this.middleName = middleName;
  }


  public ApplicationClientUpdate lastName(String lastName) {
    
    this.lastName = lastName;
    return this;
  }

   /**
   * Get lastName
   * @return lastName
  **/
  @javax.annotation.Nullable
  @ApiModelProperty(value = "")

  public String getLastName() {
    return lastName;
  }


  public void setLastName(String lastName) {
    this.lastName = lastName;
  }


  public ApplicationClientUpdate gender(OneOfGenderEnumBlankEnumNullEnum gender) {
    
    this.gender = gender;
    return this;
  }

   /**
   * Get gender
   * @return gender
  **/
  @javax.annotation.Nullable
  @ApiModelProperty(value = "")

  public OneOfGenderEnumBlankEnumNullEnum getGender() {
    return gender;
  }


  public void setGender(OneOfGenderEnumBlankEnumNullEnum gender) {
    this.gender = gender;
  }


  public ApplicationClientUpdate maritalStatus(OneOfMaritalStatusEnumBlankEnumNullEnum maritalStatus) {
    
    this.maritalStatus = maritalStatus;
    return this;
  }

   /**
   * Get maritalStatus
   * @return maritalStatus
  **/
  @javax.annotation.Nullable
  @ApiModelProperty(value = "")

  public OneOfMaritalStatusEnumBlankEnumNullEnum getMaritalStatus() {
    return maritalStatus;
  }


  public void setMaritalStatus(OneOfMaritalStatusEnumBlankEnumNullEnum maritalStatus) {
    this.maritalStatus = maritalStatus;
  }


  public ApplicationClientUpdate phoneNumber(String phoneNumber) {
    
    this.phoneNumber = phoneNumber;
    return this;
  }

   /**
   * Get phoneNumber
   * @return phoneNumber
  **/
  @javax.annotation.Nullable
  @ApiModelProperty(value = "")

  public String getPhoneNumber() {
    return phoneNumber;
  }


  public void setPhoneNumber(String phoneNumber) {
    this.phoneNumber = phoneNumber;
  }


  public ApplicationClientUpdate phoneNumberVerified(OffsetDateTime phoneNumberVerified) {
    
    this.phoneNumberVerified = phoneNumberVerified;
    return this;
  }

   /**
   * Get phoneNumberVerified
   * @return phoneNumberVerified
  **/
  @javax.annotation.Nullable
  @ApiModelProperty(value = "")

  public OffsetDateTime getPhoneNumberVerified() {
    return phoneNumberVerified;
  }


  public void setPhoneNumberVerified(OffsetDateTime phoneNumberVerified) {
    this.phoneNumberVerified = phoneNumberVerified;
  }


  public ApplicationClientUpdate language(String language) {
    
    this.language = language;
    return this;
  }

   /**
   * Get language
   * @return language
  **/
  @javax.annotation.Nonnull
  @ApiModelProperty(required = true, value = "")

  public String getLanguage() {
    return language;
  }


  public void setLanguage(String language) {
    this.language = language;
  }


  public ApplicationClientUpdate employmentStatus(OneOfEmploymentStatusEnumBlankEnumNullEnum employmentStatus) {
    
    this.employmentStatus = employmentStatus;
    return this;
  }

   /**
   * Get employmentStatus
   * @return employmentStatus
  **/
  @javax.annotation.Nullable
  @ApiModelProperty(value = "")

  public OneOfEmploymentStatusEnumBlankEnumNullEnum getEmploymentStatus() {
    return employmentStatus;
  }


  public void setEmploymentStatus(OneOfEmploymentStatusEnumBlankEnumNullEnum employmentStatus) {
    this.employmentStatus = employmentStatus;
  }


  public ApplicationClientUpdate profession(String profession) {
    
    this.profession = profession;
    return this;
  }

   /**
   * Get profession
   * @return profession
  **/
  @javax.annotation.Nullable
  @ApiModelProperty(value = "")

  public String getProfession() {
    return profession;
  }


  public void setProfession(String profession) {
    this.profession = profession;
  }


  public ApplicationClientUpdate referralCode(String referralCode) {
    
    this.referralCode = referralCode;
    return this;
  }

   /**
   * Get referralCode
   * @return referralCode
  **/
  @javax.annotation.Nullable
  @ApiModelProperty(value = "")

  public String getReferralCode() {
    return referralCode;
  }


  public void setReferralCode(String referralCode) {
    this.referralCode = referralCode;
  }


  public ApplicationClientUpdate activated(OffsetDateTime activated) {
    
    this.activated = activated;
    return this;
  }

   /**
   * Get activated
   * @return activated
  **/
  @javax.annotation.Nullable
  @ApiModelProperty(value = "")

  public OffsetDateTime getActivated() {
    return activated;
  }


  public void setActivated(OffsetDateTime activated) {
    this.activated = activated;
  }


  public ApplicationClientUpdate utmSource(String utmSource) {
    
    this.utmSource = utmSource;
    return this;
  }

   /**
   * Get utmSource
   * @return utmSource
  **/
  @javax.annotation.Nullable
  @ApiModelProperty(value = "")

  public String getUtmSource() {
    return utmSource;
  }


  public void setUtmSource(String utmSource) {
    this.utmSource = utmSource;
  }


  public ApplicationClientUpdate utmMedium(String utmMedium) {
    
    this.utmMedium = utmMedium;
    return this;
  }

   /**
   * Get utmMedium
   * @return utmMedium
  **/
  @javax.annotation.Nullable
  @ApiModelProperty(value = "")

  public String getUtmMedium() {
    return utmMedium;
  }


  public void setUtmMedium(String utmMedium) {
    this.utmMedium = utmMedium;
  }


  public ApplicationClientUpdate utmCampaign(String utmCampaign) {
    
    this.utmCampaign = utmCampaign;
    return this;
  }

   /**
   * Get utmCampaign
   * @return utmCampaign
  **/
  @javax.annotation.Nullable
  @ApiModelProperty(value = "")

  public String getUtmCampaign() {
    return utmCampaign;
  }


  public void setUtmCampaign(String utmCampaign) {
    this.utmCampaign = utmCampaign;
  }


  public ApplicationClientUpdate utmTerm(String utmTerm) {
    
    this.utmTerm = utmTerm;
    return this;
  }

   /**
   * Get utmTerm
   * @return utmTerm
  **/
  @javax.annotation.Nullable
  @ApiModelProperty(value = "")

  public String getUtmTerm() {
    return utmTerm;
  }


  public void setUtmTerm(String utmTerm) {
    this.utmTerm = utmTerm;
  }


  public ApplicationClientUpdate utmContent(String utmContent) {
    
    this.utmContent = utmContent;
    return this;
  }

   /**
   * Get utmContent
   * @return utmContent
  **/
  @javax.annotation.Nullable
  @ApiModelProperty(value = "")

  public String getUtmContent() {
    return utmContent;
  }


  public void setUtmContent(String utmContent) {
    this.utmContent = utmContent;
  }


   /**
   * Get marketingConsentDate
   * @return marketingConsentDate
  **/
  @javax.annotation.Nonnull
  @ApiModelProperty(required = true, value = "")

  public LocalDate getMarketingConsentDate() {
    return marketingConsentDate;
  }




   /**
   * Get dataConsentDate
   * @return dataConsentDate
  **/
  @javax.annotation.Nonnull
  @ApiModelProperty(required = true, value = "")

  public LocalDate getDataConsentDate() {
    return dataConsentDate;
  }




  @Override
  public boolean equals(Object o) {
    if (this == o) {
      return true;
    }
    if (o == null || getClass() != o.getClass()) {
      return false;
    }
    ApplicationClientUpdate applicationClientUpdate = (ApplicationClientUpdate) o;
    return Objects.equals(this.email, applicationClientUpdate.email) &&
        Objects.equals(this.birthdate, applicationClientUpdate.birthdate) &&
        Objects.equals(this.tosConsent, applicationClientUpdate.tosConsent) &&
        Objects.equals(this.marketingConsent, applicationClientUpdate.marketingConsent) &&
        Objects.equals(this.dataConsent, applicationClientUpdate.dataConsent) &&
        Objects.equals(this.tosConsentDate, applicationClientUpdate.tosConsentDate) &&
        Objects.equals(this.taxInformation, applicationClientUpdate.taxInformation) &&
        Objects.equals(this.countryBirth, applicationClientUpdate.countryBirth) &&
        Objects.equals(this.lastLogin, applicationClientUpdate.lastLogin) &&
        Objects.equals(this.referredBy, applicationClientUpdate.referredBy) &&
        Objects.equals(this.successfulReferrals, applicationClientUpdate.successfulReferrals) &&
        Objects.equals(this.kycVerified, applicationClientUpdate.kycVerified) &&
        Objects.equals(this.isVerified, applicationClientUpdate.isVerified) &&
        Objects.equals(this.feeSegments, applicationClientUpdate.feeSegments) &&
        Objects.equals(this.extraData, applicationClientUpdate.extraData) &&
        Objects.equals(this.portfolios, applicationClientUpdate.portfolios) &&
        Objects.equals(this.onboardedBy, applicationClientUpdate.onboardedBy) &&
        Objects.equals(this.riskLevel, applicationClientUpdate.riskLevel) &&
        Objects.equals(this.onboardingToken, applicationClientUpdate.onboardingToken) &&
        Objects.equals(this.password, applicationClientUpdate.password) &&
        Objects.equals(this.emailVerifiedLastRequest, applicationClientUpdate.emailVerifiedLastRequest) &&
        Objects.equals(this.uuid, applicationClientUpdate.uuid) &&
        Objects.equals(this.created, applicationClientUpdate.created) &&
        Objects.equals(this.updated, applicationClientUpdate.updated) &&
        Objects.equals(this.comments, applicationClientUpdate.comments) &&
        Objects.equals(this.status, applicationClientUpdate.status) &&
        Objects.equals(this.emailVerified, applicationClientUpdate.emailVerified) &&
        Objects.equals(this.emailVerifyLastRequest, applicationClientUpdate.emailVerifyLastRequest) &&
        Objects.equals(this.title, applicationClientUpdate.title) &&
        Objects.equals(this.firstName, applicationClientUpdate.firstName) &&
        Objects.equals(this.middleName, applicationClientUpdate.middleName) &&
        Objects.equals(this.lastName, applicationClientUpdate.lastName) &&
        Objects.equals(this.gender, applicationClientUpdate.gender) &&
        Objects.equals(this.maritalStatus, applicationClientUpdate.maritalStatus) &&
        Objects.equals(this.phoneNumber, applicationClientUpdate.phoneNumber) &&
        Objects.equals(this.phoneNumberVerified, applicationClientUpdate.phoneNumberVerified) &&
        Objects.equals(this.language, applicationClientUpdate.language) &&
        Objects.equals(this.employmentStatus, applicationClientUpdate.employmentStatus) &&
        Objects.equals(this.profession, applicationClientUpdate.profession) &&
        Objects.equals(this.referralCode, applicationClientUpdate.referralCode) &&
        Objects.equals(this.activated, applicationClientUpdate.activated) &&
        Objects.equals(this.utmSource, applicationClientUpdate.utmSource) &&
        Objects.equals(this.utmMedium, applicationClientUpdate.utmMedium) &&
        Objects.equals(this.utmCampaign, applicationClientUpdate.utmCampaign) &&
        Objects.equals(this.utmTerm, applicationClientUpdate.utmTerm) &&
        Objects.equals(this.utmContent, applicationClientUpdate.utmContent) &&
        Objects.equals(this.marketingConsentDate, applicationClientUpdate.marketingConsentDate) &&
        Objects.equals(this.dataConsentDate, applicationClientUpdate.dataConsentDate);
  }

  private static <T> boolean equalsNullable(JsonNullable<T> a, JsonNullable<T> b) {
    return a == b || (a != null && b != null && a.isPresent() && b.isPresent() && a.get().getClass().isArray() ? Arrays.equals((T[])a.get(), (T[])b.get()) : Objects.equals(a.get(), b.get()));
  }

  @Override
  public int hashCode() {
    return Objects.hash(email, birthdate, tosConsent, marketingConsent, dataConsent, tosConsentDate, taxInformation, countryBirth, lastLogin, referredBy, successfulReferrals, kycVerified, isVerified, feeSegments, extraData, portfolios, onboardedBy, riskLevel, onboardingToken, password, emailVerifiedLastRequest, uuid, created, updated, comments, status, emailVerified, emailVerifyLastRequest, title, firstName, middleName, lastName, gender, maritalStatus, phoneNumber, phoneNumberVerified, language, employmentStatus, profession, referralCode, activated, utmSource, utmMedium, utmCampaign, utmTerm, utmContent, marketingConsentDate, dataConsentDate);
  }

  private static <T> int hashCodeNullable(JsonNullable<T> a) {
    if (a == null) {
      return 1;
    }
    return a.isPresent()
      ? (a.get().getClass().isArray() ? Arrays.hashCode((T[])a.get()) : Objects.hashCode(a.get()))
      : 31;
  }

  @Override
  public String toString() {
    StringBuilder sb = new StringBuilder();
    sb.append("class ApplicationClientUpdate {\n");
    sb.append("    email: ").append(toIndentedString(email)).append("\n");
    sb.append("    birthdate: ").append(toIndentedString(birthdate)).append("\n");
    sb.append("    tosConsent: ").append(toIndentedString(tosConsent)).append("\n");
    sb.append("    marketingConsent: ").append(toIndentedString(marketingConsent)).append("\n");
    sb.append("    dataConsent: ").append(toIndentedString(dataConsent)).append("\n");
    sb.append("    tosConsentDate: ").append(toIndentedString(tosConsentDate)).append("\n");
    sb.append("    taxInformation: ").append(toIndentedString(taxInformation)).append("\n");
    sb.append("    countryBirth: ").append(toIndentedString(countryBirth)).append("\n");
    sb.append("    lastLogin: ").append(toIndentedString(lastLogin)).append("\n");
    sb.append("    referredBy: ").append(toIndentedString(referredBy)).append("\n");
    sb.append("    successfulReferrals: ").append(toIndentedString(successfulReferrals)).append("\n");
    sb.append("    kycVerified: ").append(toIndentedString(kycVerified)).append("\n");
    sb.append("    isVerified: ").append(toIndentedString(isVerified)).append("\n");
    sb.append("    feeSegments: ").append(toIndentedString(feeSegments)).append("\n");
    sb.append("    extraData: ").append(toIndentedString(extraData)).append("\n");
    sb.append("    portfolios: ").append(toIndentedString(portfolios)).append("\n");
    sb.append("    onboardedBy: ").append(toIndentedString(onboardedBy)).append("\n");
    sb.append("    riskLevel: ").append(toIndentedString(riskLevel)).append("\n");
    sb.append("    onboardingToken: ").append(toIndentedString(onboardingToken)).append("\n");
    sb.append("    password: ").append(toIndentedString(password)).append("\n");
    sb.append("    emailVerifiedLastRequest: ").append(toIndentedString(emailVerifiedLastRequest)).append("\n");
    sb.append("    uuid: ").append(toIndentedString(uuid)).append("\n");
    sb.append("    created: ").append(toIndentedString(created)).append("\n");
    sb.append("    updated: ").append(toIndentedString(updated)).append("\n");
    sb.append("    comments: ").append(toIndentedString(comments)).append("\n");
    sb.append("    status: ").append(toIndentedString(status)).append("\n");
    sb.append("    emailVerified: ").append(toIndentedString(emailVerified)).append("\n");
    sb.append("    emailVerifyLastRequest: ").append(toIndentedString(emailVerifyLastRequest)).append("\n");
    sb.append("    title: ").append(toIndentedString(title)).append("\n");
    sb.append("    firstName: ").append(toIndentedString(firstName)).append("\n");
    sb.append("    middleName: ").append(toIndentedString(middleName)).append("\n");
    sb.append("    lastName: ").append(toIndentedString(lastName)).append("\n");
    sb.append("    gender: ").append(toIndentedString(gender)).append("\n");
    sb.append("    maritalStatus: ").append(toIndentedString(maritalStatus)).append("\n");
    sb.append("    phoneNumber: ").append(toIndentedString(phoneNumber)).append("\n");
    sb.append("    phoneNumberVerified: ").append(toIndentedString(phoneNumberVerified)).append("\n");
    sb.append("    language: ").append(toIndentedString(language)).append("\n");
    sb.append("    employmentStatus: ").append(toIndentedString(employmentStatus)).append("\n");
    sb.append("    profession: ").append(toIndentedString(profession)).append("\n");
    sb.append("    referralCode: ").append(toIndentedString(referralCode)).append("\n");
    sb.append("    activated: ").append(toIndentedString(activated)).append("\n");
    sb.append("    utmSource: ").append(toIndentedString(utmSource)).append("\n");
    sb.append("    utmMedium: ").append(toIndentedString(utmMedium)).append("\n");
    sb.append("    utmCampaign: ").append(toIndentedString(utmCampaign)).append("\n");
    sb.append("    utmTerm: ").append(toIndentedString(utmTerm)).append("\n");
    sb.append("    utmContent: ").append(toIndentedString(utmContent)).append("\n");
    sb.append("    marketingConsentDate: ").append(toIndentedString(marketingConsentDate)).append("\n");
    sb.append("    dataConsentDate: ").append(toIndentedString(dataConsentDate)).append("\n");
    sb.append("}");
    return sb.toString();
  }

  /**
   * Convert the given object to string with each line indented by 4 spaces
   * (except the first line).
   */
  private String toIndentedString(Object o) {
    if (o == null) {
      return "null";
    }
    return o.toString().replace("\n", "\n    ");
  }

}

