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
import java.util.HashMap;
import java.util.List;
import java.util.Map;
import java.util.UUID;
import org.openapitools.client.model.ActivityTypeEnum;
import org.threeten.bp.OffsetDateTime;

/**
 * A ModelSerializer that takes additional arguments for \&quot;fields\&quot;, \&quot;omit\&quot; and \&quot;expand\&quot; in order to control which fields are displayed, and whether to replace simple values with complex, nested serializations
 */
@ApiModel(description = "A ModelSerializer that takes additional arguments for \"fields\", \"omit\" and \"expand\" in order to control which fields are displayed, and whether to replace simple values with complex, nested serializations")
@javax.annotation.Generated(value = "org.openapitools.codegen.languages.JavaClientCodegen", date = "2021-09-01T11:21:17.898459Z[Etc/UTC]")
public class FeedActivityList {
  public static final String SERIALIZED_NAME_UUID = "uuid";
  @SerializedName(SERIALIZED_NAME_UUID)
  private UUID uuid;

  public static final String SERIALIZED_NAME_CREATED = "created";
  @SerializedName(SERIALIZED_NAME_CREATED)
  private OffsetDateTime created;

  public static final String SERIALIZED_NAME_ACTIVITY_TYPE = "activity_type";
  @SerializedName(SERIALIZED_NAME_ACTIVITY_TYPE)
  private ActivityTypeEnum activityType;

  public static final String SERIALIZED_NAME_ACTIVITY_DATA = "activity_data";
  @SerializedName(SERIALIZED_NAME_ACTIVITY_DATA)
  private Map<String, Object> activityData = new HashMap<String, Object>();


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
   * Get activityType
   * @return activityType
  **/
  @javax.annotation.Nonnull
  @ApiModelProperty(required = true, value = "")

  public ActivityTypeEnum getActivityType() {
    return activityType;
  }




   /**
   * Get activityData
   * @return activityData
  **/
  @javax.annotation.Nonnull
  @ApiModelProperty(required = true, value = "")

  public Map<String, Object> getActivityData() {
    return activityData;
  }




  @Override
  public boolean equals(Object o) {
    if (this == o) {
      return true;
    }
    if (o == null || getClass() != o.getClass()) {
      return false;
    }
    FeedActivityList feedActivityList = (FeedActivityList) o;
    return Objects.equals(this.uuid, feedActivityList.uuid) &&
        Objects.equals(this.created, feedActivityList.created) &&
        Objects.equals(this.activityType, feedActivityList.activityType) &&
        Objects.equals(this.activityData, feedActivityList.activityData);
  }

  @Override
  public int hashCode() {
    return Objects.hash(uuid, created, activityType, activityData);
  }

  @Override
  public String toString() {
    StringBuilder sb = new StringBuilder();
    sb.append("class FeedActivityList {\n");
    sb.append("    uuid: ").append(toIndentedString(uuid)).append("\n");
    sb.append("    created: ").append(toIndentedString(created)).append("\n");
    sb.append("    activityType: ").append(toIndentedString(activityType)).append("\n");
    sb.append("    activityData: ").append(toIndentedString(activityData)).append("\n");
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

