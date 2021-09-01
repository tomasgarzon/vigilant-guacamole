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
import java.util.UUID;

/**
 * BankAccountList
 */
@javax.annotation.Generated(value = "org.openapitools.codegen.languages.JavaClientCodegen", date = "2021-09-01T11:21:17.898459Z[Etc/UTC]")
public class BankAccountList {
  public static final String SERIALIZED_NAME_UUID = "uuid";
  @SerializedName(SERIALIZED_NAME_UUID)
  private UUID uuid;

  public static final String SERIALIZED_NAME_ACCOUNT_NUMBER = "account_number";
  @SerializedName(SERIALIZED_NAME_ACCOUNT_NUMBER)
  private String accountNumber;

  public static final String SERIALIZED_NAME_ACCOUNT_SORT_CODE = "account_sort_code";
  @SerializedName(SERIALIZED_NAME_ACCOUNT_SORT_CODE)
  private String accountSortCode;

  public static final String SERIALIZED_NAME_ACCOUNT_HOLDER_NAME = "account_holder_name";
  @SerializedName(SERIALIZED_NAME_ACCOUNT_HOLDER_NAME)
  private String accountHolderName;

  public static final String SERIALIZED_NAME_JOINT = "joint";
  @SerializedName(SERIALIZED_NAME_JOINT)
  private Boolean joint;

  public static final String SERIALIZED_NAME_BANK_NAME = "bank_name";
  @SerializedName(SERIALIZED_NAME_BANK_NAME)
  private String bankName;

  public static final String SERIALIZED_NAME_IBAN = "iban";
  @SerializedName(SERIALIZED_NAME_IBAN)
  private String iban;

  public static final String SERIALIZED_NAME_SWIFT_CODE = "swift_code";
  @SerializedName(SERIALIZED_NAME_SWIFT_CODE)
  private String swiftCode;


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
   * Get accountNumber
   * @return accountNumber
  **/
  @javax.annotation.Nonnull
  @ApiModelProperty(required = true, value = "")

  public String getAccountNumber() {
    return accountNumber;
  }




   /**
   * Get accountSortCode
   * @return accountSortCode
  **/
  @javax.annotation.Nonnull
  @ApiModelProperty(required = true, value = "")

  public String getAccountSortCode() {
    return accountSortCode;
  }




   /**
   * Get accountHolderName
   * @return accountHolderName
  **/
  @javax.annotation.Nonnull
  @ApiModelProperty(required = true, value = "")

  public String getAccountHolderName() {
    return accountHolderName;
  }




   /**
   * Get joint
   * @return joint
  **/
  @javax.annotation.Nonnull
  @ApiModelProperty(required = true, value = "")

  public Boolean getJoint() {
    return joint;
  }




   /**
   * Get bankName
   * @return bankName
  **/
  @javax.annotation.Nonnull
  @ApiModelProperty(required = true, value = "")

  public String getBankName() {
    return bankName;
  }




   /**
   * Get iban
   * @return iban
  **/
  @javax.annotation.Nonnull
  @ApiModelProperty(required = true, value = "")

  public String getIban() {
    return iban;
  }




   /**
   * Get swiftCode
   * @return swiftCode
  **/
  @javax.annotation.Nonnull
  @ApiModelProperty(required = true, value = "")

  public String getSwiftCode() {
    return swiftCode;
  }




  @Override
  public boolean equals(Object o) {
    if (this == o) {
      return true;
    }
    if (o == null || getClass() != o.getClass()) {
      return false;
    }
    BankAccountList bankAccountList = (BankAccountList) o;
    return Objects.equals(this.uuid, bankAccountList.uuid) &&
        Objects.equals(this.accountNumber, bankAccountList.accountNumber) &&
        Objects.equals(this.accountSortCode, bankAccountList.accountSortCode) &&
        Objects.equals(this.accountHolderName, bankAccountList.accountHolderName) &&
        Objects.equals(this.joint, bankAccountList.joint) &&
        Objects.equals(this.bankName, bankAccountList.bankName) &&
        Objects.equals(this.iban, bankAccountList.iban) &&
        Objects.equals(this.swiftCode, bankAccountList.swiftCode);
  }

  @Override
  public int hashCode() {
    return Objects.hash(uuid, accountNumber, accountSortCode, accountHolderName, joint, bankName, iban, swiftCode);
  }

  @Override
  public String toString() {
    StringBuilder sb = new StringBuilder();
    sb.append("class BankAccountList {\n");
    sb.append("    uuid: ").append(toIndentedString(uuid)).append("\n");
    sb.append("    accountNumber: ").append(toIndentedString(accountNumber)).append("\n");
    sb.append("    accountSortCode: ").append(toIndentedString(accountSortCode)).append("\n");
    sb.append("    accountHolderName: ").append(toIndentedString(accountHolderName)).append("\n");
    sb.append("    joint: ").append(toIndentedString(joint)).append("\n");
    sb.append("    bankName: ").append(toIndentedString(bankName)).append("\n");
    sb.append("    iban: ").append(toIndentedString(iban)).append("\n");
    sb.append("    swiftCode: ").append(toIndentedString(swiftCode)).append("\n");
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
