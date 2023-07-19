import { JSONValue } from './scalarType';
import { Option } from './scalarType';
import { TypedDocumentNode as DocumentNode } from '@graphql-typed-document-node/core';
export type Maybe<T> = Option<T>;
export type InputMaybe<T> = Option<T>;
export type Exact<T extends { [key: string]: unknown }> = { [K in keyof T]: T[K] };
export type MakeOptional<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]?: Maybe<T[SubKey]> };
export type MakeMaybe<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]: Maybe<T[SubKey]> };
/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
  ID: string;
  String: string;
  Boolean: boolean;
  Int: number;
  Float: number;
  bigint: number;
  bytea: string;
  citext: string;
  date: any;
  jsonb: JSONValue;
  timestamptz: string;
  uuid: string;
};

/** Boolean expression to compare columns of type "Boolean". All fields are combined with logical 'AND'. */
export type Boolean_Comparison_Exp = {
  readonly _eq?: InputMaybe<Scalars['Boolean']>;
  readonly _gt?: InputMaybe<Scalars['Boolean']>;
  readonly _gte?: InputMaybe<Scalars['Boolean']>;
  readonly _in?: InputMaybe<ReadonlyArray<Scalars['Boolean']>>;
  readonly _is_null?: InputMaybe<Scalars['Boolean']>;
  readonly _lt?: InputMaybe<Scalars['Boolean']>;
  readonly _lte?: InputMaybe<Scalars['Boolean']>;
  readonly _neq?: InputMaybe<Scalars['Boolean']>;
  readonly _nin?: InputMaybe<ReadonlyArray<Scalars['Boolean']>>;
};

/** Boolean expression to compare columns of type "Int". All fields are combined with logical 'AND'. */
export type Int_Comparison_Exp = {
  readonly _eq?: InputMaybe<Scalars['Int']>;
  readonly _gt?: InputMaybe<Scalars['Int']>;
  readonly _gte?: InputMaybe<Scalars['Int']>;
  readonly _in?: InputMaybe<ReadonlyArray<Scalars['Int']>>;
  readonly _is_null?: InputMaybe<Scalars['Boolean']>;
  readonly _lt?: InputMaybe<Scalars['Int']>;
  readonly _lte?: InputMaybe<Scalars['Int']>;
  readonly _neq?: InputMaybe<Scalars['Int']>;
  readonly _nin?: InputMaybe<ReadonlyArray<Scalars['Int']>>;
};

/** Boolean expression to compare columns of type "String". All fields are combined with logical 'AND'. */
export type String_Comparison_Exp = {
  readonly _eq?: InputMaybe<Scalars['String']>;
  readonly _gt?: InputMaybe<Scalars['String']>;
  readonly _gte?: InputMaybe<Scalars['String']>;
  /** does the column match the given case-insensitive pattern */
  readonly _ilike?: InputMaybe<Scalars['String']>;
  readonly _in?: InputMaybe<ReadonlyArray<Scalars['String']>>;
  /** does the column match the given POSIX regular expression, case insensitive */
  readonly _iregex?: InputMaybe<Scalars['String']>;
  readonly _is_null?: InputMaybe<Scalars['Boolean']>;
  /** does the column match the given pattern */
  readonly _like?: InputMaybe<Scalars['String']>;
  readonly _lt?: InputMaybe<Scalars['String']>;
  readonly _lte?: InputMaybe<Scalars['String']>;
  readonly _neq?: InputMaybe<Scalars['String']>;
  /** does the column NOT match the given case-insensitive pattern */
  readonly _nilike?: InputMaybe<Scalars['String']>;
  readonly _nin?: InputMaybe<ReadonlyArray<Scalars['String']>>;
  /** does the column NOT match the given POSIX regular expression, case insensitive */
  readonly _niregex?: InputMaybe<Scalars['String']>;
  /** does the column NOT match the given pattern */
  readonly _nlike?: InputMaybe<Scalars['String']>;
  /** does the column NOT match the given POSIX regular expression, case sensitive */
  readonly _nregex?: InputMaybe<Scalars['String']>;
  /** does the column NOT match the given SQL regular expression */
  readonly _nsimilar?: InputMaybe<Scalars['String']>;
  /** does the column match the given POSIX regular expression, case sensitive */
  readonly _regex?: InputMaybe<Scalars['String']>;
  /** does the column match the given SQL regular expression */
  readonly _similar?: InputMaybe<Scalars['String']>;
};

/** Oauth requests, inserted before redirecting to the provider's site. Don't modify its structure as Hasura Auth relies on it to function properly. */
export type AuthProviderRequests = {
  readonly __typename?: 'authProviderRequests';
  readonly id: Scalars['uuid'];
  readonly options?: Maybe<Scalars['jsonb']>;
};


/** Oauth requests, inserted before redirecting to the provider's site. Don't modify its structure as Hasura Auth relies on it to function properly. */
export type AuthProviderRequestsOptionsArgs = {
  path?: InputMaybe<Scalars['String']>;
};

/** aggregated selection of "auth.provider_requests" */
export type AuthProviderRequests_Aggregate = {
  readonly __typename?: 'authProviderRequests_aggregate';
  readonly aggregate?: Maybe<AuthProviderRequests_Aggregate_Fields>;
  readonly nodes: ReadonlyArray<AuthProviderRequests>;
};

/** aggregate fields of "auth.provider_requests" */
export type AuthProviderRequests_Aggregate_Fields = {
  readonly __typename?: 'authProviderRequests_aggregate_fields';
  readonly count: Scalars['Int'];
  readonly max?: Maybe<AuthProviderRequests_Max_Fields>;
  readonly min?: Maybe<AuthProviderRequests_Min_Fields>;
};


/** aggregate fields of "auth.provider_requests" */
export type AuthProviderRequests_Aggregate_FieldsCountArgs = {
  columns?: InputMaybe<ReadonlyArray<AuthProviderRequests_Select_Column>>;
  distinct?: InputMaybe<Scalars['Boolean']>;
};

/** append existing jsonb value of filtered columns with new jsonb value */
export type AuthProviderRequests_Append_Input = {
  readonly options?: InputMaybe<Scalars['jsonb']>;
};

/** Boolean expression to filter rows from the table "auth.provider_requests". All fields are combined with a logical 'AND'. */
export type AuthProviderRequests_Bool_Exp = {
  readonly _and?: InputMaybe<ReadonlyArray<AuthProviderRequests_Bool_Exp>>;
  readonly _not?: InputMaybe<AuthProviderRequests_Bool_Exp>;
  readonly _or?: InputMaybe<ReadonlyArray<AuthProviderRequests_Bool_Exp>>;
  readonly id?: InputMaybe<Uuid_Comparison_Exp>;
  readonly options?: InputMaybe<Jsonb_Comparison_Exp>;
};

/** unique or primary key constraints on table "auth.provider_requests" */
export type AuthProviderRequests_Constraint =
  /** unique or primary key constraint on columns "id" */
  | 'provider_requests_pkey';

/** delete the field or element with specified path (for JSON arrays, negative integers count from the end) */
export type AuthProviderRequests_Delete_At_Path_Input = {
  readonly options?: InputMaybe<ReadonlyArray<Scalars['String']>>;
};

/** delete the array element with specified index (negative integers count from the end). throws an error if top level container is not an array */
export type AuthProviderRequests_Delete_Elem_Input = {
  readonly options?: InputMaybe<Scalars['Int']>;
};

/** delete key/value pair or string element. key/value pairs are matched based on their key value */
export type AuthProviderRequests_Delete_Key_Input = {
  readonly options?: InputMaybe<Scalars['String']>;
};

/** input type for inserting data into table "auth.provider_requests" */
export type AuthProviderRequests_Insert_Input = {
  readonly id?: InputMaybe<Scalars['uuid']>;
  readonly options?: InputMaybe<Scalars['jsonb']>;
};

/** aggregate max on columns */
export type AuthProviderRequests_Max_Fields = {
  readonly __typename?: 'authProviderRequests_max_fields';
  readonly id?: Maybe<Scalars['uuid']>;
};

/** aggregate min on columns */
export type AuthProviderRequests_Min_Fields = {
  readonly __typename?: 'authProviderRequests_min_fields';
  readonly id?: Maybe<Scalars['uuid']>;
};

/** response of any mutation on the table "auth.provider_requests" */
export type AuthProviderRequests_Mutation_Response = {
  readonly __typename?: 'authProviderRequests_mutation_response';
  /** number of rows affected by the mutation */
  readonly affected_rows: Scalars['Int'];
  /** data from the rows affected by the mutation */
  readonly returning: ReadonlyArray<AuthProviderRequests>;
};

/** on_conflict condition type for table "auth.provider_requests" */
export type AuthProviderRequests_On_Conflict = {
  readonly constraint: AuthProviderRequests_Constraint;
  readonly update_columns?: ReadonlyArray<AuthProviderRequests_Update_Column>;
  readonly where?: InputMaybe<AuthProviderRequests_Bool_Exp>;
};

/** Ordering options when selecting data from "auth.provider_requests". */
export type AuthProviderRequests_Order_By = {
  readonly id?: InputMaybe<Order_By>;
  readonly options?: InputMaybe<Order_By>;
};

/** primary key columns input for table: auth.provider_requests */
export type AuthProviderRequests_Pk_Columns_Input = {
  readonly id: Scalars['uuid'];
};

/** prepend existing jsonb value of filtered columns with new jsonb value */
export type AuthProviderRequests_Prepend_Input = {
  readonly options?: InputMaybe<Scalars['jsonb']>;
};

/** select columns of table "auth.provider_requests" */
export type AuthProviderRequests_Select_Column =
  /** column name */
  | 'id'
  /** column name */
  | 'options';

/** input type for updating data in table "auth.provider_requests" */
export type AuthProviderRequests_Set_Input = {
  readonly id?: InputMaybe<Scalars['uuid']>;
  readonly options?: InputMaybe<Scalars['jsonb']>;
};

/** Streaming cursor of the table "authProviderRequests" */
export type AuthProviderRequests_Stream_Cursor_Input = {
  /** Stream column input with initial value */
  readonly initial_value: AuthProviderRequests_Stream_Cursor_Value_Input;
  /** cursor ordering */
  readonly ordering?: InputMaybe<Cursor_Ordering>;
};

/** Initial value of the column from where the streaming should start */
export type AuthProviderRequests_Stream_Cursor_Value_Input = {
  readonly id?: InputMaybe<Scalars['uuid']>;
  readonly options?: InputMaybe<Scalars['jsonb']>;
};

/** update columns of table "auth.provider_requests" */
export type AuthProviderRequests_Update_Column =
  /** column name */
  | 'id'
  /** column name */
  | 'options';

export type AuthProviderRequests_Updates = {
  /** append existing jsonb value of filtered columns with new jsonb value */
  readonly _append?: InputMaybe<AuthProviderRequests_Append_Input>;
  /** delete the field or element with specified path (for JSON arrays, negative integers count from the end) */
  readonly _delete_at_path?: InputMaybe<AuthProviderRequests_Delete_At_Path_Input>;
  /** delete the array element with specified index (negative integers count from the end). throws an error if top level container is not an array */
  readonly _delete_elem?: InputMaybe<AuthProviderRequests_Delete_Elem_Input>;
  /** delete key/value pair or string element. key/value pairs are matched based on their key value */
  readonly _delete_key?: InputMaybe<AuthProviderRequests_Delete_Key_Input>;
  /** prepend existing jsonb value of filtered columns with new jsonb value */
  readonly _prepend?: InputMaybe<AuthProviderRequests_Prepend_Input>;
  /** sets the columns of the filtered rows to the given values */
  readonly _set?: InputMaybe<AuthProviderRequests_Set_Input>;
  /** filter the rows which have to be updated */
  readonly where: AuthProviderRequests_Bool_Exp;
};

/** List of available Oauth providers. Don't modify its structure as Hasura Auth relies on it to function properly. */
export type AuthProviders = {
  readonly __typename?: 'authProviders';
  readonly id: Scalars['String'];
  /** An array relationship */
  readonly userProviders: ReadonlyArray<AuthUserProviders>;
  /** An aggregate relationship */
  readonly userProviders_aggregate: AuthUserProviders_Aggregate;
};


/** List of available Oauth providers. Don't modify its structure as Hasura Auth relies on it to function properly. */
export type AuthProvidersUserProvidersArgs = {
  distinct_on?: InputMaybe<ReadonlyArray<AuthUserProviders_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<ReadonlyArray<AuthUserProviders_Order_By>>;
  where?: InputMaybe<AuthUserProviders_Bool_Exp>;
};


/** List of available Oauth providers. Don't modify its structure as Hasura Auth relies on it to function properly. */
export type AuthProvidersUserProviders_AggregateArgs = {
  distinct_on?: InputMaybe<ReadonlyArray<AuthUserProviders_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<ReadonlyArray<AuthUserProviders_Order_By>>;
  where?: InputMaybe<AuthUserProviders_Bool_Exp>;
};

/** aggregated selection of "auth.providers" */
export type AuthProviders_Aggregate = {
  readonly __typename?: 'authProviders_aggregate';
  readonly aggregate?: Maybe<AuthProviders_Aggregate_Fields>;
  readonly nodes: ReadonlyArray<AuthProviders>;
};

/** aggregate fields of "auth.providers" */
export type AuthProviders_Aggregate_Fields = {
  readonly __typename?: 'authProviders_aggregate_fields';
  readonly count: Scalars['Int'];
  readonly max?: Maybe<AuthProviders_Max_Fields>;
  readonly min?: Maybe<AuthProviders_Min_Fields>;
};


/** aggregate fields of "auth.providers" */
export type AuthProviders_Aggregate_FieldsCountArgs = {
  columns?: InputMaybe<ReadonlyArray<AuthProviders_Select_Column>>;
  distinct?: InputMaybe<Scalars['Boolean']>;
};

/** Boolean expression to filter rows from the table "auth.providers". All fields are combined with a logical 'AND'. */
export type AuthProviders_Bool_Exp = {
  readonly _and?: InputMaybe<ReadonlyArray<AuthProviders_Bool_Exp>>;
  readonly _not?: InputMaybe<AuthProviders_Bool_Exp>;
  readonly _or?: InputMaybe<ReadonlyArray<AuthProviders_Bool_Exp>>;
  readonly id?: InputMaybe<String_Comparison_Exp>;
  readonly userProviders?: InputMaybe<AuthUserProviders_Bool_Exp>;
  readonly userProviders_aggregate?: InputMaybe<AuthUserProviders_Aggregate_Bool_Exp>;
};

/** unique or primary key constraints on table "auth.providers" */
export type AuthProviders_Constraint =
  /** unique or primary key constraint on columns "id" */
  | 'providers_pkey';

/** input type for inserting data into table "auth.providers" */
export type AuthProviders_Insert_Input = {
  readonly id?: InputMaybe<Scalars['String']>;
  readonly userProviders?: InputMaybe<AuthUserProviders_Arr_Rel_Insert_Input>;
};

/** aggregate max on columns */
export type AuthProviders_Max_Fields = {
  readonly __typename?: 'authProviders_max_fields';
  readonly id?: Maybe<Scalars['String']>;
};

/** aggregate min on columns */
export type AuthProviders_Min_Fields = {
  readonly __typename?: 'authProviders_min_fields';
  readonly id?: Maybe<Scalars['String']>;
};

/** response of any mutation on the table "auth.providers" */
export type AuthProviders_Mutation_Response = {
  readonly __typename?: 'authProviders_mutation_response';
  /** number of rows affected by the mutation */
  readonly affected_rows: Scalars['Int'];
  /** data from the rows affected by the mutation */
  readonly returning: ReadonlyArray<AuthProviders>;
};

/** input type for inserting object relation for remote table "auth.providers" */
export type AuthProviders_Obj_Rel_Insert_Input = {
  readonly data: AuthProviders_Insert_Input;
  /** upsert condition */
  readonly on_conflict?: InputMaybe<AuthProviders_On_Conflict>;
};

/** on_conflict condition type for table "auth.providers" */
export type AuthProviders_On_Conflict = {
  readonly constraint: AuthProviders_Constraint;
  readonly update_columns?: ReadonlyArray<AuthProviders_Update_Column>;
  readonly where?: InputMaybe<AuthProviders_Bool_Exp>;
};

/** Ordering options when selecting data from "auth.providers". */
export type AuthProviders_Order_By = {
  readonly id?: InputMaybe<Order_By>;
  readonly userProviders_aggregate?: InputMaybe<AuthUserProviders_Aggregate_Order_By>;
};

/** primary key columns input for table: auth.providers */
export type AuthProviders_Pk_Columns_Input = {
  readonly id: Scalars['String'];
};

/** select columns of table "auth.providers" */
export type AuthProviders_Select_Column =
  /** column name */
  | 'id';

/** input type for updating data in table "auth.providers" */
export type AuthProviders_Set_Input = {
  readonly id?: InputMaybe<Scalars['String']>;
};

/** Streaming cursor of the table "authProviders" */
export type AuthProviders_Stream_Cursor_Input = {
  /** Stream column input with initial value */
  readonly initial_value: AuthProviders_Stream_Cursor_Value_Input;
  /** cursor ordering */
  readonly ordering?: InputMaybe<Cursor_Ordering>;
};

/** Initial value of the column from where the streaming should start */
export type AuthProviders_Stream_Cursor_Value_Input = {
  readonly id?: InputMaybe<Scalars['String']>;
};

/** update columns of table "auth.providers" */
export type AuthProviders_Update_Column =
  /** column name */
  | 'id';

export type AuthProviders_Updates = {
  /** sets the columns of the filtered rows to the given values */
  readonly _set?: InputMaybe<AuthProviders_Set_Input>;
  /** filter the rows which have to be updated */
  readonly where: AuthProviders_Bool_Exp;
};

/** columns and relationships of "auth.refresh_token_types" */
export type AuthRefreshTokenTypes = {
  readonly __typename?: 'authRefreshTokenTypes';
  readonly comment?: Maybe<Scalars['String']>;
  /** An array relationship */
  readonly refreshTokens: ReadonlyArray<AuthRefreshTokens>;
  /** An aggregate relationship */
  readonly refreshTokens_aggregate: AuthRefreshTokens_Aggregate;
  readonly value: Scalars['String'];
};


/** columns and relationships of "auth.refresh_token_types" */
export type AuthRefreshTokenTypesRefreshTokensArgs = {
  distinct_on?: InputMaybe<ReadonlyArray<AuthRefreshTokens_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<ReadonlyArray<AuthRefreshTokens_Order_By>>;
  where?: InputMaybe<AuthRefreshTokens_Bool_Exp>;
};


/** columns and relationships of "auth.refresh_token_types" */
export type AuthRefreshTokenTypesRefreshTokens_AggregateArgs = {
  distinct_on?: InputMaybe<ReadonlyArray<AuthRefreshTokens_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<ReadonlyArray<AuthRefreshTokens_Order_By>>;
  where?: InputMaybe<AuthRefreshTokens_Bool_Exp>;
};

/** aggregated selection of "auth.refresh_token_types" */
export type AuthRefreshTokenTypes_Aggregate = {
  readonly __typename?: 'authRefreshTokenTypes_aggregate';
  readonly aggregate?: Maybe<AuthRefreshTokenTypes_Aggregate_Fields>;
  readonly nodes: ReadonlyArray<AuthRefreshTokenTypes>;
};

/** aggregate fields of "auth.refresh_token_types" */
export type AuthRefreshTokenTypes_Aggregate_Fields = {
  readonly __typename?: 'authRefreshTokenTypes_aggregate_fields';
  readonly count: Scalars['Int'];
  readonly max?: Maybe<AuthRefreshTokenTypes_Max_Fields>;
  readonly min?: Maybe<AuthRefreshTokenTypes_Min_Fields>;
};


/** aggregate fields of "auth.refresh_token_types" */
export type AuthRefreshTokenTypes_Aggregate_FieldsCountArgs = {
  columns?: InputMaybe<ReadonlyArray<AuthRefreshTokenTypes_Select_Column>>;
  distinct?: InputMaybe<Scalars['Boolean']>;
};

/** Boolean expression to filter rows from the table "auth.refresh_token_types". All fields are combined with a logical 'AND'. */
export type AuthRefreshTokenTypes_Bool_Exp = {
  readonly _and?: InputMaybe<ReadonlyArray<AuthRefreshTokenTypes_Bool_Exp>>;
  readonly _not?: InputMaybe<AuthRefreshTokenTypes_Bool_Exp>;
  readonly _or?: InputMaybe<ReadonlyArray<AuthRefreshTokenTypes_Bool_Exp>>;
  readonly comment?: InputMaybe<String_Comparison_Exp>;
  readonly refreshTokens?: InputMaybe<AuthRefreshTokens_Bool_Exp>;
  readonly refreshTokens_aggregate?: InputMaybe<AuthRefreshTokens_Aggregate_Bool_Exp>;
  readonly value?: InputMaybe<String_Comparison_Exp>;
};

/** unique or primary key constraints on table "auth.refresh_token_types" */
export type AuthRefreshTokenTypes_Constraint =
  /** unique or primary key constraint on columns "value" */
  | 'refresh_token_types_pkey';

export type AuthRefreshTokenTypes_Enum =
  /** Personal access token */
  | 'pat'
  /** Regular refresh token */
  | 'regular';

/** Boolean expression to compare columns of type "authRefreshTokenTypes_enum". All fields are combined with logical 'AND'. */
export type AuthRefreshTokenTypes_Enum_Comparison_Exp = {
  readonly _eq?: InputMaybe<AuthRefreshTokenTypes_Enum>;
  readonly _in?: InputMaybe<ReadonlyArray<AuthRefreshTokenTypes_Enum>>;
  readonly _is_null?: InputMaybe<Scalars['Boolean']>;
  readonly _neq?: InputMaybe<AuthRefreshTokenTypes_Enum>;
  readonly _nin?: InputMaybe<ReadonlyArray<AuthRefreshTokenTypes_Enum>>;
};

/** input type for inserting data into table "auth.refresh_token_types" */
export type AuthRefreshTokenTypes_Insert_Input = {
  readonly comment?: InputMaybe<Scalars['String']>;
  readonly refreshTokens?: InputMaybe<AuthRefreshTokens_Arr_Rel_Insert_Input>;
  readonly value?: InputMaybe<Scalars['String']>;
};

/** aggregate max on columns */
export type AuthRefreshTokenTypes_Max_Fields = {
  readonly __typename?: 'authRefreshTokenTypes_max_fields';
  readonly comment?: Maybe<Scalars['String']>;
  readonly value?: Maybe<Scalars['String']>;
};

/** aggregate min on columns */
export type AuthRefreshTokenTypes_Min_Fields = {
  readonly __typename?: 'authRefreshTokenTypes_min_fields';
  readonly comment?: Maybe<Scalars['String']>;
  readonly value?: Maybe<Scalars['String']>;
};

/** response of any mutation on the table "auth.refresh_token_types" */
export type AuthRefreshTokenTypes_Mutation_Response = {
  readonly __typename?: 'authRefreshTokenTypes_mutation_response';
  /** number of rows affected by the mutation */
  readonly affected_rows: Scalars['Int'];
  /** data from the rows affected by the mutation */
  readonly returning: ReadonlyArray<AuthRefreshTokenTypes>;
};

/** on_conflict condition type for table "auth.refresh_token_types" */
export type AuthRefreshTokenTypes_On_Conflict = {
  readonly constraint: AuthRefreshTokenTypes_Constraint;
  readonly update_columns?: ReadonlyArray<AuthRefreshTokenTypes_Update_Column>;
  readonly where?: InputMaybe<AuthRefreshTokenTypes_Bool_Exp>;
};

/** Ordering options when selecting data from "auth.refresh_token_types". */
export type AuthRefreshTokenTypes_Order_By = {
  readonly comment?: InputMaybe<Order_By>;
  readonly refreshTokens_aggregate?: InputMaybe<AuthRefreshTokens_Aggregate_Order_By>;
  readonly value?: InputMaybe<Order_By>;
};

/** primary key columns input for table: auth.refresh_token_types */
export type AuthRefreshTokenTypes_Pk_Columns_Input = {
  readonly value: Scalars['String'];
};

/** select columns of table "auth.refresh_token_types" */
export type AuthRefreshTokenTypes_Select_Column =
  /** column name */
  | 'comment'
  /** column name */
  | 'value';

/** input type for updating data in table "auth.refresh_token_types" */
export type AuthRefreshTokenTypes_Set_Input = {
  readonly comment?: InputMaybe<Scalars['String']>;
  readonly value?: InputMaybe<Scalars['String']>;
};

/** Streaming cursor of the table "authRefreshTokenTypes" */
export type AuthRefreshTokenTypes_Stream_Cursor_Input = {
  /** Stream column input with initial value */
  readonly initial_value: AuthRefreshTokenTypes_Stream_Cursor_Value_Input;
  /** cursor ordering */
  readonly ordering?: InputMaybe<Cursor_Ordering>;
};

/** Initial value of the column from where the streaming should start */
export type AuthRefreshTokenTypes_Stream_Cursor_Value_Input = {
  readonly comment?: InputMaybe<Scalars['String']>;
  readonly value?: InputMaybe<Scalars['String']>;
};

/** update columns of table "auth.refresh_token_types" */
export type AuthRefreshTokenTypes_Update_Column =
  /** column name */
  | 'comment'
  /** column name */
  | 'value';

export type AuthRefreshTokenTypes_Updates = {
  /** sets the columns of the filtered rows to the given values */
  readonly _set?: InputMaybe<AuthRefreshTokenTypes_Set_Input>;
  /** filter the rows which have to be updated */
  readonly where: AuthRefreshTokenTypes_Bool_Exp;
};

/** User refresh tokens. Hasura auth uses them to rotate new access tokens as long as the refresh token is not expired. Don't modify its structure as Hasura Auth relies on it to function properly. */
export type AuthRefreshTokens = {
  readonly __typename?: 'authRefreshTokens';
  readonly createdAt: Scalars['timestamptz'];
  readonly expiresAt: Scalars['timestamptz'];
  readonly id: Scalars['uuid'];
  readonly metadata?: Maybe<Scalars['jsonb']>;
  readonly refreshTokenHash?: Maybe<Scalars['String']>;
  readonly type: AuthRefreshTokenTypes_Enum;
  /** An object relationship */
  readonly user: Users;
  readonly userId: Scalars['uuid'];
};


/** User refresh tokens. Hasura auth uses them to rotate new access tokens as long as the refresh token is not expired. Don't modify its structure as Hasura Auth relies on it to function properly. */
export type AuthRefreshTokensMetadataArgs = {
  path?: InputMaybe<Scalars['String']>;
};

/** aggregated selection of "auth.refresh_tokens" */
export type AuthRefreshTokens_Aggregate = {
  readonly __typename?: 'authRefreshTokens_aggregate';
  readonly aggregate?: Maybe<AuthRefreshTokens_Aggregate_Fields>;
  readonly nodes: ReadonlyArray<AuthRefreshTokens>;
};

export type AuthRefreshTokens_Aggregate_Bool_Exp = {
  readonly count?: InputMaybe<AuthRefreshTokens_Aggregate_Bool_Exp_Count>;
};

export type AuthRefreshTokens_Aggregate_Bool_Exp_Count = {
  readonly arguments?: InputMaybe<ReadonlyArray<AuthRefreshTokens_Select_Column>>;
  readonly distinct?: InputMaybe<Scalars['Boolean']>;
  readonly filter?: InputMaybe<AuthRefreshTokens_Bool_Exp>;
  readonly predicate: Int_Comparison_Exp;
};

/** aggregate fields of "auth.refresh_tokens" */
export type AuthRefreshTokens_Aggregate_Fields = {
  readonly __typename?: 'authRefreshTokens_aggregate_fields';
  readonly count: Scalars['Int'];
  readonly max?: Maybe<AuthRefreshTokens_Max_Fields>;
  readonly min?: Maybe<AuthRefreshTokens_Min_Fields>;
};


/** aggregate fields of "auth.refresh_tokens" */
export type AuthRefreshTokens_Aggregate_FieldsCountArgs = {
  columns?: InputMaybe<ReadonlyArray<AuthRefreshTokens_Select_Column>>;
  distinct?: InputMaybe<Scalars['Boolean']>;
};

/** order by aggregate values of table "auth.refresh_tokens" */
export type AuthRefreshTokens_Aggregate_Order_By = {
  readonly count?: InputMaybe<Order_By>;
  readonly max?: InputMaybe<AuthRefreshTokens_Max_Order_By>;
  readonly min?: InputMaybe<AuthRefreshTokens_Min_Order_By>;
};

/** append existing jsonb value of filtered columns with new jsonb value */
export type AuthRefreshTokens_Append_Input = {
  readonly metadata?: InputMaybe<Scalars['jsonb']>;
};

/** input type for inserting array relation for remote table "auth.refresh_tokens" */
export type AuthRefreshTokens_Arr_Rel_Insert_Input = {
  readonly data: ReadonlyArray<AuthRefreshTokens_Insert_Input>;
  /** upsert condition */
  readonly on_conflict?: InputMaybe<AuthRefreshTokens_On_Conflict>;
};

/** Boolean expression to filter rows from the table "auth.refresh_tokens". All fields are combined with a logical 'AND'. */
export type AuthRefreshTokens_Bool_Exp = {
  readonly _and?: InputMaybe<ReadonlyArray<AuthRefreshTokens_Bool_Exp>>;
  readonly _not?: InputMaybe<AuthRefreshTokens_Bool_Exp>;
  readonly _or?: InputMaybe<ReadonlyArray<AuthRefreshTokens_Bool_Exp>>;
  readonly createdAt?: InputMaybe<Timestamptz_Comparison_Exp>;
  readonly expiresAt?: InputMaybe<Timestamptz_Comparison_Exp>;
  readonly id?: InputMaybe<Uuid_Comparison_Exp>;
  readonly metadata?: InputMaybe<Jsonb_Comparison_Exp>;
  readonly refreshTokenHash?: InputMaybe<String_Comparison_Exp>;
  readonly type?: InputMaybe<AuthRefreshTokenTypes_Enum_Comparison_Exp>;
  readonly user?: InputMaybe<Users_Bool_Exp>;
  readonly userId?: InputMaybe<Uuid_Comparison_Exp>;
};

/** unique or primary key constraints on table "auth.refresh_tokens" */
export type AuthRefreshTokens_Constraint =
  /** unique or primary key constraint on columns "id" */
  | 'refresh_tokens_pkey';

/** delete the field or element with specified path (for JSON arrays, negative integers count from the end) */
export type AuthRefreshTokens_Delete_At_Path_Input = {
  readonly metadata?: InputMaybe<ReadonlyArray<Scalars['String']>>;
};

/** delete the array element with specified index (negative integers count from the end). throws an error if top level container is not an array */
export type AuthRefreshTokens_Delete_Elem_Input = {
  readonly metadata?: InputMaybe<Scalars['Int']>;
};

/** delete key/value pair or string element. key/value pairs are matched based on their key value */
export type AuthRefreshTokens_Delete_Key_Input = {
  readonly metadata?: InputMaybe<Scalars['String']>;
};

/** input type for inserting data into table "auth.refresh_tokens" */
export type AuthRefreshTokens_Insert_Input = {
  readonly createdAt?: InputMaybe<Scalars['timestamptz']>;
  readonly expiresAt?: InputMaybe<Scalars['timestamptz']>;
  readonly id?: InputMaybe<Scalars['uuid']>;
  readonly metadata?: InputMaybe<Scalars['jsonb']>;
  readonly refreshTokenHash?: InputMaybe<Scalars['String']>;
  readonly type?: InputMaybe<AuthRefreshTokenTypes_Enum>;
  readonly user?: InputMaybe<Users_Obj_Rel_Insert_Input>;
  readonly userId?: InputMaybe<Scalars['uuid']>;
};

/** aggregate max on columns */
export type AuthRefreshTokens_Max_Fields = {
  readonly __typename?: 'authRefreshTokens_max_fields';
  readonly createdAt?: Maybe<Scalars['timestamptz']>;
  readonly expiresAt?: Maybe<Scalars['timestamptz']>;
  readonly id?: Maybe<Scalars['uuid']>;
  readonly refreshTokenHash?: Maybe<Scalars['String']>;
  readonly userId?: Maybe<Scalars['uuid']>;
};

/** order by max() on columns of table "auth.refresh_tokens" */
export type AuthRefreshTokens_Max_Order_By = {
  readonly createdAt?: InputMaybe<Order_By>;
  readonly expiresAt?: InputMaybe<Order_By>;
  readonly id?: InputMaybe<Order_By>;
  readonly refreshTokenHash?: InputMaybe<Order_By>;
  readonly userId?: InputMaybe<Order_By>;
};

/** aggregate min on columns */
export type AuthRefreshTokens_Min_Fields = {
  readonly __typename?: 'authRefreshTokens_min_fields';
  readonly createdAt?: Maybe<Scalars['timestamptz']>;
  readonly expiresAt?: Maybe<Scalars['timestamptz']>;
  readonly id?: Maybe<Scalars['uuid']>;
  readonly refreshTokenHash?: Maybe<Scalars['String']>;
  readonly userId?: Maybe<Scalars['uuid']>;
};

/** order by min() on columns of table "auth.refresh_tokens" */
export type AuthRefreshTokens_Min_Order_By = {
  readonly createdAt?: InputMaybe<Order_By>;
  readonly expiresAt?: InputMaybe<Order_By>;
  readonly id?: InputMaybe<Order_By>;
  readonly refreshTokenHash?: InputMaybe<Order_By>;
  readonly userId?: InputMaybe<Order_By>;
};

/** response of any mutation on the table "auth.refresh_tokens" */
export type AuthRefreshTokens_Mutation_Response = {
  readonly __typename?: 'authRefreshTokens_mutation_response';
  /** number of rows affected by the mutation */
  readonly affected_rows: Scalars['Int'];
  /** data from the rows affected by the mutation */
  readonly returning: ReadonlyArray<AuthRefreshTokens>;
};

/** on_conflict condition type for table "auth.refresh_tokens" */
export type AuthRefreshTokens_On_Conflict = {
  readonly constraint: AuthRefreshTokens_Constraint;
  readonly update_columns?: ReadonlyArray<AuthRefreshTokens_Update_Column>;
  readonly where?: InputMaybe<AuthRefreshTokens_Bool_Exp>;
};

/** Ordering options when selecting data from "auth.refresh_tokens". */
export type AuthRefreshTokens_Order_By = {
  readonly createdAt?: InputMaybe<Order_By>;
  readonly expiresAt?: InputMaybe<Order_By>;
  readonly id?: InputMaybe<Order_By>;
  readonly metadata?: InputMaybe<Order_By>;
  readonly refreshTokenHash?: InputMaybe<Order_By>;
  readonly type?: InputMaybe<Order_By>;
  readonly user?: InputMaybe<Users_Order_By>;
  readonly userId?: InputMaybe<Order_By>;
};

/** primary key columns input for table: auth.refresh_tokens */
export type AuthRefreshTokens_Pk_Columns_Input = {
  readonly id: Scalars['uuid'];
};

/** prepend existing jsonb value of filtered columns with new jsonb value */
export type AuthRefreshTokens_Prepend_Input = {
  readonly metadata?: InputMaybe<Scalars['jsonb']>;
};

/** select columns of table "auth.refresh_tokens" */
export type AuthRefreshTokens_Select_Column =
  /** column name */
  | 'createdAt'
  /** column name */
  | 'expiresAt'
  /** column name */
  | 'id'
  /** column name */
  | 'metadata'
  /** column name */
  | 'refreshTokenHash'
  /** column name */
  | 'type'
  /** column name */
  | 'userId';

/** input type for updating data in table "auth.refresh_tokens" */
export type AuthRefreshTokens_Set_Input = {
  readonly createdAt?: InputMaybe<Scalars['timestamptz']>;
  readonly expiresAt?: InputMaybe<Scalars['timestamptz']>;
  readonly id?: InputMaybe<Scalars['uuid']>;
  readonly metadata?: InputMaybe<Scalars['jsonb']>;
  readonly refreshTokenHash?: InputMaybe<Scalars['String']>;
  readonly type?: InputMaybe<AuthRefreshTokenTypes_Enum>;
  readonly userId?: InputMaybe<Scalars['uuid']>;
};

/** Streaming cursor of the table "authRefreshTokens" */
export type AuthRefreshTokens_Stream_Cursor_Input = {
  /** Stream column input with initial value */
  readonly initial_value: AuthRefreshTokens_Stream_Cursor_Value_Input;
  /** cursor ordering */
  readonly ordering?: InputMaybe<Cursor_Ordering>;
};

/** Initial value of the column from where the streaming should start */
export type AuthRefreshTokens_Stream_Cursor_Value_Input = {
  readonly createdAt?: InputMaybe<Scalars['timestamptz']>;
  readonly expiresAt?: InputMaybe<Scalars['timestamptz']>;
  readonly id?: InputMaybe<Scalars['uuid']>;
  readonly metadata?: InputMaybe<Scalars['jsonb']>;
  readonly refreshTokenHash?: InputMaybe<Scalars['String']>;
  readonly type?: InputMaybe<AuthRefreshTokenTypes_Enum>;
  readonly userId?: InputMaybe<Scalars['uuid']>;
};

/** update columns of table "auth.refresh_tokens" */
export type AuthRefreshTokens_Update_Column =
  /** column name */
  | 'createdAt'
  /** column name */
  | 'expiresAt'
  /** column name */
  | 'id'
  /** column name */
  | 'metadata'
  /** column name */
  | 'refreshTokenHash'
  /** column name */
  | 'type'
  /** column name */
  | 'userId';

export type AuthRefreshTokens_Updates = {
  /** append existing jsonb value of filtered columns with new jsonb value */
  readonly _append?: InputMaybe<AuthRefreshTokens_Append_Input>;
  /** delete the field or element with specified path (for JSON arrays, negative integers count from the end) */
  readonly _delete_at_path?: InputMaybe<AuthRefreshTokens_Delete_At_Path_Input>;
  /** delete the array element with specified index (negative integers count from the end). throws an error if top level container is not an array */
  readonly _delete_elem?: InputMaybe<AuthRefreshTokens_Delete_Elem_Input>;
  /** delete key/value pair or string element. key/value pairs are matched based on their key value */
  readonly _delete_key?: InputMaybe<AuthRefreshTokens_Delete_Key_Input>;
  /** prepend existing jsonb value of filtered columns with new jsonb value */
  readonly _prepend?: InputMaybe<AuthRefreshTokens_Prepend_Input>;
  /** sets the columns of the filtered rows to the given values */
  readonly _set?: InputMaybe<AuthRefreshTokens_Set_Input>;
  /** filter the rows which have to be updated */
  readonly where: AuthRefreshTokens_Bool_Exp;
};

/** Persistent Hasura roles for users. Don't modify its structure as Hasura Auth relies on it to function properly. */
export type AuthRoles = {
  readonly __typename?: 'authRoles';
  readonly role: Scalars['String'];
  /** An array relationship */
  readonly userRoles: ReadonlyArray<AuthUserRoles>;
  /** An aggregate relationship */
  readonly userRoles_aggregate: AuthUserRoles_Aggregate;
  /** An array relationship */
  readonly usersByDefaultRole: ReadonlyArray<Users>;
  /** An aggregate relationship */
  readonly usersByDefaultRole_aggregate: Users_Aggregate;
};


/** Persistent Hasura roles for users. Don't modify its structure as Hasura Auth relies on it to function properly. */
export type AuthRolesUserRolesArgs = {
  distinct_on?: InputMaybe<ReadonlyArray<AuthUserRoles_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<ReadonlyArray<AuthUserRoles_Order_By>>;
  where?: InputMaybe<AuthUserRoles_Bool_Exp>;
};


/** Persistent Hasura roles for users. Don't modify its structure as Hasura Auth relies on it to function properly. */
export type AuthRolesUserRoles_AggregateArgs = {
  distinct_on?: InputMaybe<ReadonlyArray<AuthUserRoles_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<ReadonlyArray<AuthUserRoles_Order_By>>;
  where?: InputMaybe<AuthUserRoles_Bool_Exp>;
};


/** Persistent Hasura roles for users. Don't modify its structure as Hasura Auth relies on it to function properly. */
export type AuthRolesUsersByDefaultRoleArgs = {
  distinct_on?: InputMaybe<ReadonlyArray<Users_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<ReadonlyArray<Users_Order_By>>;
  where?: InputMaybe<Users_Bool_Exp>;
};


/** Persistent Hasura roles for users. Don't modify its structure as Hasura Auth relies on it to function properly. */
export type AuthRolesUsersByDefaultRole_AggregateArgs = {
  distinct_on?: InputMaybe<ReadonlyArray<Users_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<ReadonlyArray<Users_Order_By>>;
  where?: InputMaybe<Users_Bool_Exp>;
};

/** aggregated selection of "auth.roles" */
export type AuthRoles_Aggregate = {
  readonly __typename?: 'authRoles_aggregate';
  readonly aggregate?: Maybe<AuthRoles_Aggregate_Fields>;
  readonly nodes: ReadonlyArray<AuthRoles>;
};

/** aggregate fields of "auth.roles" */
export type AuthRoles_Aggregate_Fields = {
  readonly __typename?: 'authRoles_aggregate_fields';
  readonly count: Scalars['Int'];
  readonly max?: Maybe<AuthRoles_Max_Fields>;
  readonly min?: Maybe<AuthRoles_Min_Fields>;
};


/** aggregate fields of "auth.roles" */
export type AuthRoles_Aggregate_FieldsCountArgs = {
  columns?: InputMaybe<ReadonlyArray<AuthRoles_Select_Column>>;
  distinct?: InputMaybe<Scalars['Boolean']>;
};

/** Boolean expression to filter rows from the table "auth.roles". All fields are combined with a logical 'AND'. */
export type AuthRoles_Bool_Exp = {
  readonly _and?: InputMaybe<ReadonlyArray<AuthRoles_Bool_Exp>>;
  readonly _not?: InputMaybe<AuthRoles_Bool_Exp>;
  readonly _or?: InputMaybe<ReadonlyArray<AuthRoles_Bool_Exp>>;
  readonly role?: InputMaybe<String_Comparison_Exp>;
  readonly userRoles?: InputMaybe<AuthUserRoles_Bool_Exp>;
  readonly userRoles_aggregate?: InputMaybe<AuthUserRoles_Aggregate_Bool_Exp>;
  readonly usersByDefaultRole?: InputMaybe<Users_Bool_Exp>;
  readonly usersByDefaultRole_aggregate?: InputMaybe<Users_Aggregate_Bool_Exp>;
};

/** unique or primary key constraints on table "auth.roles" */
export type AuthRoles_Constraint =
  /** unique or primary key constraint on columns "role" */
  | 'roles_pkey';

/** input type for inserting data into table "auth.roles" */
export type AuthRoles_Insert_Input = {
  readonly role?: InputMaybe<Scalars['String']>;
  readonly userRoles?: InputMaybe<AuthUserRoles_Arr_Rel_Insert_Input>;
  readonly usersByDefaultRole?: InputMaybe<Users_Arr_Rel_Insert_Input>;
};

/** aggregate max on columns */
export type AuthRoles_Max_Fields = {
  readonly __typename?: 'authRoles_max_fields';
  readonly role?: Maybe<Scalars['String']>;
};

/** aggregate min on columns */
export type AuthRoles_Min_Fields = {
  readonly __typename?: 'authRoles_min_fields';
  readonly role?: Maybe<Scalars['String']>;
};

/** response of any mutation on the table "auth.roles" */
export type AuthRoles_Mutation_Response = {
  readonly __typename?: 'authRoles_mutation_response';
  /** number of rows affected by the mutation */
  readonly affected_rows: Scalars['Int'];
  /** data from the rows affected by the mutation */
  readonly returning: ReadonlyArray<AuthRoles>;
};

/** input type for inserting object relation for remote table "auth.roles" */
export type AuthRoles_Obj_Rel_Insert_Input = {
  readonly data: AuthRoles_Insert_Input;
  /** upsert condition */
  readonly on_conflict?: InputMaybe<AuthRoles_On_Conflict>;
};

/** on_conflict condition type for table "auth.roles" */
export type AuthRoles_On_Conflict = {
  readonly constraint: AuthRoles_Constraint;
  readonly update_columns?: ReadonlyArray<AuthRoles_Update_Column>;
  readonly where?: InputMaybe<AuthRoles_Bool_Exp>;
};

/** Ordering options when selecting data from "auth.roles". */
export type AuthRoles_Order_By = {
  readonly role?: InputMaybe<Order_By>;
  readonly userRoles_aggregate?: InputMaybe<AuthUserRoles_Aggregate_Order_By>;
  readonly usersByDefaultRole_aggregate?: InputMaybe<Users_Aggregate_Order_By>;
};

/** primary key columns input for table: auth.roles */
export type AuthRoles_Pk_Columns_Input = {
  readonly role: Scalars['String'];
};

/** select columns of table "auth.roles" */
export type AuthRoles_Select_Column =
  /** column name */
  | 'role';

/** input type for updating data in table "auth.roles" */
export type AuthRoles_Set_Input = {
  readonly role?: InputMaybe<Scalars['String']>;
};

/** Streaming cursor of the table "authRoles" */
export type AuthRoles_Stream_Cursor_Input = {
  /** Stream column input with initial value */
  readonly initial_value: AuthRoles_Stream_Cursor_Value_Input;
  /** cursor ordering */
  readonly ordering?: InputMaybe<Cursor_Ordering>;
};

/** Initial value of the column from where the streaming should start */
export type AuthRoles_Stream_Cursor_Value_Input = {
  readonly role?: InputMaybe<Scalars['String']>;
};

/** update columns of table "auth.roles" */
export type AuthRoles_Update_Column =
  /** column name */
  | 'role';

export type AuthRoles_Updates = {
  /** sets the columns of the filtered rows to the given values */
  readonly _set?: InputMaybe<AuthRoles_Set_Input>;
  /** filter the rows which have to be updated */
  readonly where: AuthRoles_Bool_Exp;
};

/** Active providers for a given user. Don't modify its structure as Hasura Auth relies on it to function properly. */
export type AuthUserProviders = {
  readonly __typename?: 'authUserProviders';
  readonly accessToken: Scalars['String'];
  readonly createdAt: Scalars['timestamptz'];
  readonly id: Scalars['uuid'];
  /** An object relationship */
  readonly provider: AuthProviders;
  readonly providerId: Scalars['String'];
  readonly providerUserId: Scalars['String'];
  readonly refreshToken?: Maybe<Scalars['String']>;
  readonly updatedAt: Scalars['timestamptz'];
  /** An object relationship */
  readonly user: Users;
  readonly userId: Scalars['uuid'];
};

/** aggregated selection of "auth.user_providers" */
export type AuthUserProviders_Aggregate = {
  readonly __typename?: 'authUserProviders_aggregate';
  readonly aggregate?: Maybe<AuthUserProviders_Aggregate_Fields>;
  readonly nodes: ReadonlyArray<AuthUserProviders>;
};

export type AuthUserProviders_Aggregate_Bool_Exp = {
  readonly count?: InputMaybe<AuthUserProviders_Aggregate_Bool_Exp_Count>;
};

export type AuthUserProviders_Aggregate_Bool_Exp_Count = {
  readonly arguments?: InputMaybe<ReadonlyArray<AuthUserProviders_Select_Column>>;
  readonly distinct?: InputMaybe<Scalars['Boolean']>;
  readonly filter?: InputMaybe<AuthUserProviders_Bool_Exp>;
  readonly predicate: Int_Comparison_Exp;
};

/** aggregate fields of "auth.user_providers" */
export type AuthUserProviders_Aggregate_Fields = {
  readonly __typename?: 'authUserProviders_aggregate_fields';
  readonly count: Scalars['Int'];
  readonly max?: Maybe<AuthUserProviders_Max_Fields>;
  readonly min?: Maybe<AuthUserProviders_Min_Fields>;
};


/** aggregate fields of "auth.user_providers" */
export type AuthUserProviders_Aggregate_FieldsCountArgs = {
  columns?: InputMaybe<ReadonlyArray<AuthUserProviders_Select_Column>>;
  distinct?: InputMaybe<Scalars['Boolean']>;
};

/** order by aggregate values of table "auth.user_providers" */
export type AuthUserProviders_Aggregate_Order_By = {
  readonly count?: InputMaybe<Order_By>;
  readonly max?: InputMaybe<AuthUserProviders_Max_Order_By>;
  readonly min?: InputMaybe<AuthUserProviders_Min_Order_By>;
};

/** input type for inserting array relation for remote table "auth.user_providers" */
export type AuthUserProviders_Arr_Rel_Insert_Input = {
  readonly data: ReadonlyArray<AuthUserProviders_Insert_Input>;
  /** upsert condition */
  readonly on_conflict?: InputMaybe<AuthUserProviders_On_Conflict>;
};

/** Boolean expression to filter rows from the table "auth.user_providers". All fields are combined with a logical 'AND'. */
export type AuthUserProviders_Bool_Exp = {
  readonly _and?: InputMaybe<ReadonlyArray<AuthUserProviders_Bool_Exp>>;
  readonly _not?: InputMaybe<AuthUserProviders_Bool_Exp>;
  readonly _or?: InputMaybe<ReadonlyArray<AuthUserProviders_Bool_Exp>>;
  readonly accessToken?: InputMaybe<String_Comparison_Exp>;
  readonly createdAt?: InputMaybe<Timestamptz_Comparison_Exp>;
  readonly id?: InputMaybe<Uuid_Comparison_Exp>;
  readonly provider?: InputMaybe<AuthProviders_Bool_Exp>;
  readonly providerId?: InputMaybe<String_Comparison_Exp>;
  readonly providerUserId?: InputMaybe<String_Comparison_Exp>;
  readonly refreshToken?: InputMaybe<String_Comparison_Exp>;
  readonly updatedAt?: InputMaybe<Timestamptz_Comparison_Exp>;
  readonly user?: InputMaybe<Users_Bool_Exp>;
  readonly userId?: InputMaybe<Uuid_Comparison_Exp>;
};

/** unique or primary key constraints on table "auth.user_providers" */
export type AuthUserProviders_Constraint =
  /** unique or primary key constraint on columns "id" */
  | 'user_providers_pkey'
  /** unique or primary key constraint on columns "provider_id", "provider_user_id" */
  | 'user_providers_provider_id_provider_user_id_key'
  /** unique or primary key constraint on columns "provider_id", "user_id" */
  | 'user_providers_user_id_provider_id_key';

/** input type for inserting data into table "auth.user_providers" */
export type AuthUserProviders_Insert_Input = {
  readonly accessToken?: InputMaybe<Scalars['String']>;
  readonly createdAt?: InputMaybe<Scalars['timestamptz']>;
  readonly id?: InputMaybe<Scalars['uuid']>;
  readonly provider?: InputMaybe<AuthProviders_Obj_Rel_Insert_Input>;
  readonly providerId?: InputMaybe<Scalars['String']>;
  readonly providerUserId?: InputMaybe<Scalars['String']>;
  readonly refreshToken?: InputMaybe<Scalars['String']>;
  readonly updatedAt?: InputMaybe<Scalars['timestamptz']>;
  readonly user?: InputMaybe<Users_Obj_Rel_Insert_Input>;
  readonly userId?: InputMaybe<Scalars['uuid']>;
};

/** aggregate max on columns */
export type AuthUserProviders_Max_Fields = {
  readonly __typename?: 'authUserProviders_max_fields';
  readonly accessToken?: Maybe<Scalars['String']>;
  readonly createdAt?: Maybe<Scalars['timestamptz']>;
  readonly id?: Maybe<Scalars['uuid']>;
  readonly providerId?: Maybe<Scalars['String']>;
  readonly providerUserId?: Maybe<Scalars['String']>;
  readonly refreshToken?: Maybe<Scalars['String']>;
  readonly updatedAt?: Maybe<Scalars['timestamptz']>;
  readonly userId?: Maybe<Scalars['uuid']>;
};

/** order by max() on columns of table "auth.user_providers" */
export type AuthUserProviders_Max_Order_By = {
  readonly accessToken?: InputMaybe<Order_By>;
  readonly createdAt?: InputMaybe<Order_By>;
  readonly id?: InputMaybe<Order_By>;
  readonly providerId?: InputMaybe<Order_By>;
  readonly providerUserId?: InputMaybe<Order_By>;
  readonly refreshToken?: InputMaybe<Order_By>;
  readonly updatedAt?: InputMaybe<Order_By>;
  readonly userId?: InputMaybe<Order_By>;
};

/** aggregate min on columns */
export type AuthUserProviders_Min_Fields = {
  readonly __typename?: 'authUserProviders_min_fields';
  readonly accessToken?: Maybe<Scalars['String']>;
  readonly createdAt?: Maybe<Scalars['timestamptz']>;
  readonly id?: Maybe<Scalars['uuid']>;
  readonly providerId?: Maybe<Scalars['String']>;
  readonly providerUserId?: Maybe<Scalars['String']>;
  readonly refreshToken?: Maybe<Scalars['String']>;
  readonly updatedAt?: Maybe<Scalars['timestamptz']>;
  readonly userId?: Maybe<Scalars['uuid']>;
};

/** order by min() on columns of table "auth.user_providers" */
export type AuthUserProviders_Min_Order_By = {
  readonly accessToken?: InputMaybe<Order_By>;
  readonly createdAt?: InputMaybe<Order_By>;
  readonly id?: InputMaybe<Order_By>;
  readonly providerId?: InputMaybe<Order_By>;
  readonly providerUserId?: InputMaybe<Order_By>;
  readonly refreshToken?: InputMaybe<Order_By>;
  readonly updatedAt?: InputMaybe<Order_By>;
  readonly userId?: InputMaybe<Order_By>;
};

/** response of any mutation on the table "auth.user_providers" */
export type AuthUserProviders_Mutation_Response = {
  readonly __typename?: 'authUserProviders_mutation_response';
  /** number of rows affected by the mutation */
  readonly affected_rows: Scalars['Int'];
  /** data from the rows affected by the mutation */
  readonly returning: ReadonlyArray<AuthUserProviders>;
};

/** on_conflict condition type for table "auth.user_providers" */
export type AuthUserProviders_On_Conflict = {
  readonly constraint: AuthUserProviders_Constraint;
  readonly update_columns?: ReadonlyArray<AuthUserProviders_Update_Column>;
  readonly where?: InputMaybe<AuthUserProviders_Bool_Exp>;
};

/** Ordering options when selecting data from "auth.user_providers". */
export type AuthUserProviders_Order_By = {
  readonly accessToken?: InputMaybe<Order_By>;
  readonly createdAt?: InputMaybe<Order_By>;
  readonly id?: InputMaybe<Order_By>;
  readonly provider?: InputMaybe<AuthProviders_Order_By>;
  readonly providerId?: InputMaybe<Order_By>;
  readonly providerUserId?: InputMaybe<Order_By>;
  readonly refreshToken?: InputMaybe<Order_By>;
  readonly updatedAt?: InputMaybe<Order_By>;
  readonly user?: InputMaybe<Users_Order_By>;
  readonly userId?: InputMaybe<Order_By>;
};

/** primary key columns input for table: auth.user_providers */
export type AuthUserProviders_Pk_Columns_Input = {
  readonly id: Scalars['uuid'];
};

/** select columns of table "auth.user_providers" */
export type AuthUserProviders_Select_Column =
  /** column name */
  | 'accessToken'
  /** column name */
  | 'createdAt'
  /** column name */
  | 'id'
  /** column name */
  | 'providerId'
  /** column name */
  | 'providerUserId'
  /** column name */
  | 'refreshToken'
  /** column name */
  | 'updatedAt'
  /** column name */
  | 'userId';

/** input type for updating data in table "auth.user_providers" */
export type AuthUserProviders_Set_Input = {
  readonly accessToken?: InputMaybe<Scalars['String']>;
  readonly createdAt?: InputMaybe<Scalars['timestamptz']>;
  readonly id?: InputMaybe<Scalars['uuid']>;
  readonly providerId?: InputMaybe<Scalars['String']>;
  readonly providerUserId?: InputMaybe<Scalars['String']>;
  readonly refreshToken?: InputMaybe<Scalars['String']>;
  readonly updatedAt?: InputMaybe<Scalars['timestamptz']>;
  readonly userId?: InputMaybe<Scalars['uuid']>;
};

/** Streaming cursor of the table "authUserProviders" */
export type AuthUserProviders_Stream_Cursor_Input = {
  /** Stream column input with initial value */
  readonly initial_value: AuthUserProviders_Stream_Cursor_Value_Input;
  /** cursor ordering */
  readonly ordering?: InputMaybe<Cursor_Ordering>;
};

/** Initial value of the column from where the streaming should start */
export type AuthUserProviders_Stream_Cursor_Value_Input = {
  readonly accessToken?: InputMaybe<Scalars['String']>;
  readonly createdAt?: InputMaybe<Scalars['timestamptz']>;
  readonly id?: InputMaybe<Scalars['uuid']>;
  readonly providerId?: InputMaybe<Scalars['String']>;
  readonly providerUserId?: InputMaybe<Scalars['String']>;
  readonly refreshToken?: InputMaybe<Scalars['String']>;
  readonly updatedAt?: InputMaybe<Scalars['timestamptz']>;
  readonly userId?: InputMaybe<Scalars['uuid']>;
};

/** update columns of table "auth.user_providers" */
export type AuthUserProviders_Update_Column =
  /** column name */
  | 'accessToken'
  /** column name */
  | 'createdAt'
  /** column name */
  | 'id'
  /** column name */
  | 'providerId'
  /** column name */
  | 'providerUserId'
  /** column name */
  | 'refreshToken'
  /** column name */
  | 'updatedAt'
  /** column name */
  | 'userId';

export type AuthUserProviders_Updates = {
  /** sets the columns of the filtered rows to the given values */
  readonly _set?: InputMaybe<AuthUserProviders_Set_Input>;
  /** filter the rows which have to be updated */
  readonly where: AuthUserProviders_Bool_Exp;
};

/** Roles of users. Don't modify its structure as Hasura Auth relies on it to function properly. */
export type AuthUserRoles = {
  readonly __typename?: 'authUserRoles';
  readonly createdAt: Scalars['timestamptz'];
  readonly id: Scalars['uuid'];
  readonly role: Scalars['String'];
  /** An object relationship */
  readonly roleByRole: AuthRoles;
  /** An object relationship */
  readonly user: Users;
  readonly userId: Scalars['uuid'];
};

/** aggregated selection of "auth.user_roles" */
export type AuthUserRoles_Aggregate = {
  readonly __typename?: 'authUserRoles_aggregate';
  readonly aggregate?: Maybe<AuthUserRoles_Aggregate_Fields>;
  readonly nodes: ReadonlyArray<AuthUserRoles>;
};

export type AuthUserRoles_Aggregate_Bool_Exp = {
  readonly count?: InputMaybe<AuthUserRoles_Aggregate_Bool_Exp_Count>;
};

export type AuthUserRoles_Aggregate_Bool_Exp_Count = {
  readonly arguments?: InputMaybe<ReadonlyArray<AuthUserRoles_Select_Column>>;
  readonly distinct?: InputMaybe<Scalars['Boolean']>;
  readonly filter?: InputMaybe<AuthUserRoles_Bool_Exp>;
  readonly predicate: Int_Comparison_Exp;
};

/** aggregate fields of "auth.user_roles" */
export type AuthUserRoles_Aggregate_Fields = {
  readonly __typename?: 'authUserRoles_aggregate_fields';
  readonly count: Scalars['Int'];
  readonly max?: Maybe<AuthUserRoles_Max_Fields>;
  readonly min?: Maybe<AuthUserRoles_Min_Fields>;
};


/** aggregate fields of "auth.user_roles" */
export type AuthUserRoles_Aggregate_FieldsCountArgs = {
  columns?: InputMaybe<ReadonlyArray<AuthUserRoles_Select_Column>>;
  distinct?: InputMaybe<Scalars['Boolean']>;
};

/** order by aggregate values of table "auth.user_roles" */
export type AuthUserRoles_Aggregate_Order_By = {
  readonly count?: InputMaybe<Order_By>;
  readonly max?: InputMaybe<AuthUserRoles_Max_Order_By>;
  readonly min?: InputMaybe<AuthUserRoles_Min_Order_By>;
};

/** input type for inserting array relation for remote table "auth.user_roles" */
export type AuthUserRoles_Arr_Rel_Insert_Input = {
  readonly data: ReadonlyArray<AuthUserRoles_Insert_Input>;
  /** upsert condition */
  readonly on_conflict?: InputMaybe<AuthUserRoles_On_Conflict>;
};

/** Boolean expression to filter rows from the table "auth.user_roles". All fields are combined with a logical 'AND'. */
export type AuthUserRoles_Bool_Exp = {
  readonly _and?: InputMaybe<ReadonlyArray<AuthUserRoles_Bool_Exp>>;
  readonly _not?: InputMaybe<AuthUserRoles_Bool_Exp>;
  readonly _or?: InputMaybe<ReadonlyArray<AuthUserRoles_Bool_Exp>>;
  readonly createdAt?: InputMaybe<Timestamptz_Comparison_Exp>;
  readonly id?: InputMaybe<Uuid_Comparison_Exp>;
  readonly role?: InputMaybe<String_Comparison_Exp>;
  readonly roleByRole?: InputMaybe<AuthRoles_Bool_Exp>;
  readonly user?: InputMaybe<Users_Bool_Exp>;
  readonly userId?: InputMaybe<Uuid_Comparison_Exp>;
};

/** unique or primary key constraints on table "auth.user_roles" */
export type AuthUserRoles_Constraint =
  /** unique or primary key constraint on columns "id" */
  | 'user_roles_pkey'
  /** unique or primary key constraint on columns "user_id", "role" */
  | 'user_roles_user_id_role_key';

/** input type for inserting data into table "auth.user_roles" */
export type AuthUserRoles_Insert_Input = {
  readonly createdAt?: InputMaybe<Scalars['timestamptz']>;
  readonly id?: InputMaybe<Scalars['uuid']>;
  readonly role?: InputMaybe<Scalars['String']>;
  readonly roleByRole?: InputMaybe<AuthRoles_Obj_Rel_Insert_Input>;
  readonly user?: InputMaybe<Users_Obj_Rel_Insert_Input>;
  readonly userId?: InputMaybe<Scalars['uuid']>;
};

/** aggregate max on columns */
export type AuthUserRoles_Max_Fields = {
  readonly __typename?: 'authUserRoles_max_fields';
  readonly createdAt?: Maybe<Scalars['timestamptz']>;
  readonly id?: Maybe<Scalars['uuid']>;
  readonly role?: Maybe<Scalars['String']>;
  readonly userId?: Maybe<Scalars['uuid']>;
};

/** order by max() on columns of table "auth.user_roles" */
export type AuthUserRoles_Max_Order_By = {
  readonly createdAt?: InputMaybe<Order_By>;
  readonly id?: InputMaybe<Order_By>;
  readonly role?: InputMaybe<Order_By>;
  readonly userId?: InputMaybe<Order_By>;
};

/** aggregate min on columns */
export type AuthUserRoles_Min_Fields = {
  readonly __typename?: 'authUserRoles_min_fields';
  readonly createdAt?: Maybe<Scalars['timestamptz']>;
  readonly id?: Maybe<Scalars['uuid']>;
  readonly role?: Maybe<Scalars['String']>;
  readonly userId?: Maybe<Scalars['uuid']>;
};

/** order by min() on columns of table "auth.user_roles" */
export type AuthUserRoles_Min_Order_By = {
  readonly createdAt?: InputMaybe<Order_By>;
  readonly id?: InputMaybe<Order_By>;
  readonly role?: InputMaybe<Order_By>;
  readonly userId?: InputMaybe<Order_By>;
};

/** response of any mutation on the table "auth.user_roles" */
export type AuthUserRoles_Mutation_Response = {
  readonly __typename?: 'authUserRoles_mutation_response';
  /** number of rows affected by the mutation */
  readonly affected_rows: Scalars['Int'];
  /** data from the rows affected by the mutation */
  readonly returning: ReadonlyArray<AuthUserRoles>;
};

/** on_conflict condition type for table "auth.user_roles" */
export type AuthUserRoles_On_Conflict = {
  readonly constraint: AuthUserRoles_Constraint;
  readonly update_columns?: ReadonlyArray<AuthUserRoles_Update_Column>;
  readonly where?: InputMaybe<AuthUserRoles_Bool_Exp>;
};

/** Ordering options when selecting data from "auth.user_roles". */
export type AuthUserRoles_Order_By = {
  readonly createdAt?: InputMaybe<Order_By>;
  readonly id?: InputMaybe<Order_By>;
  readonly role?: InputMaybe<Order_By>;
  readonly roleByRole?: InputMaybe<AuthRoles_Order_By>;
  readonly user?: InputMaybe<Users_Order_By>;
  readonly userId?: InputMaybe<Order_By>;
};

/** primary key columns input for table: auth.user_roles */
export type AuthUserRoles_Pk_Columns_Input = {
  readonly id: Scalars['uuid'];
};

/** select columns of table "auth.user_roles" */
export type AuthUserRoles_Select_Column =
  /** column name */
  | 'createdAt'
  /** column name */
  | 'id'
  /** column name */
  | 'role'
  /** column name */
  | 'userId';

/** input type for updating data in table "auth.user_roles" */
export type AuthUserRoles_Set_Input = {
  readonly createdAt?: InputMaybe<Scalars['timestamptz']>;
  readonly id?: InputMaybe<Scalars['uuid']>;
  readonly role?: InputMaybe<Scalars['String']>;
  readonly userId?: InputMaybe<Scalars['uuid']>;
};

/** Streaming cursor of the table "authUserRoles" */
export type AuthUserRoles_Stream_Cursor_Input = {
  /** Stream column input with initial value */
  readonly initial_value: AuthUserRoles_Stream_Cursor_Value_Input;
  /** cursor ordering */
  readonly ordering?: InputMaybe<Cursor_Ordering>;
};

/** Initial value of the column from where the streaming should start */
export type AuthUserRoles_Stream_Cursor_Value_Input = {
  readonly createdAt?: InputMaybe<Scalars['timestamptz']>;
  readonly id?: InputMaybe<Scalars['uuid']>;
  readonly role?: InputMaybe<Scalars['String']>;
  readonly userId?: InputMaybe<Scalars['uuid']>;
};

/** update columns of table "auth.user_roles" */
export type AuthUserRoles_Update_Column =
  /** column name */
  | 'createdAt'
  /** column name */
  | 'id'
  /** column name */
  | 'role'
  /** column name */
  | 'userId';

export type AuthUserRoles_Updates = {
  /** sets the columns of the filtered rows to the given values */
  readonly _set?: InputMaybe<AuthUserRoles_Set_Input>;
  /** filter the rows which have to be updated */
  readonly where: AuthUserRoles_Bool_Exp;
};

/** User webauthn security keys. Don't modify its structure as Hasura Auth relies on it to function properly. */
export type AuthUserSecurityKeys = {
  readonly __typename?: 'authUserSecurityKeys';
  readonly counter: Scalars['bigint'];
  readonly credentialId: Scalars['String'];
  readonly credentialPublicKey?: Maybe<Scalars['bytea']>;
  readonly id: Scalars['uuid'];
  readonly nickname?: Maybe<Scalars['String']>;
  readonly transports: Scalars['String'];
  /** An object relationship */
  readonly user: Users;
  readonly userId: Scalars['uuid'];
};

/** aggregated selection of "auth.user_security_keys" */
export type AuthUserSecurityKeys_Aggregate = {
  readonly __typename?: 'authUserSecurityKeys_aggregate';
  readonly aggregate?: Maybe<AuthUserSecurityKeys_Aggregate_Fields>;
  readonly nodes: ReadonlyArray<AuthUserSecurityKeys>;
};

export type AuthUserSecurityKeys_Aggregate_Bool_Exp = {
  readonly count?: InputMaybe<AuthUserSecurityKeys_Aggregate_Bool_Exp_Count>;
};

export type AuthUserSecurityKeys_Aggregate_Bool_Exp_Count = {
  readonly arguments?: InputMaybe<ReadonlyArray<AuthUserSecurityKeys_Select_Column>>;
  readonly distinct?: InputMaybe<Scalars['Boolean']>;
  readonly filter?: InputMaybe<AuthUserSecurityKeys_Bool_Exp>;
  readonly predicate: Int_Comparison_Exp;
};

/** aggregate fields of "auth.user_security_keys" */
export type AuthUserSecurityKeys_Aggregate_Fields = {
  readonly __typename?: 'authUserSecurityKeys_aggregate_fields';
  readonly avg?: Maybe<AuthUserSecurityKeys_Avg_Fields>;
  readonly count: Scalars['Int'];
  readonly max?: Maybe<AuthUserSecurityKeys_Max_Fields>;
  readonly min?: Maybe<AuthUserSecurityKeys_Min_Fields>;
  readonly stddev?: Maybe<AuthUserSecurityKeys_Stddev_Fields>;
  readonly stddev_pop?: Maybe<AuthUserSecurityKeys_Stddev_Pop_Fields>;
  readonly stddev_samp?: Maybe<AuthUserSecurityKeys_Stddev_Samp_Fields>;
  readonly sum?: Maybe<AuthUserSecurityKeys_Sum_Fields>;
  readonly var_pop?: Maybe<AuthUserSecurityKeys_Var_Pop_Fields>;
  readonly var_samp?: Maybe<AuthUserSecurityKeys_Var_Samp_Fields>;
  readonly variance?: Maybe<AuthUserSecurityKeys_Variance_Fields>;
};


/** aggregate fields of "auth.user_security_keys" */
export type AuthUserSecurityKeys_Aggregate_FieldsCountArgs = {
  columns?: InputMaybe<ReadonlyArray<AuthUserSecurityKeys_Select_Column>>;
  distinct?: InputMaybe<Scalars['Boolean']>;
};

/** order by aggregate values of table "auth.user_security_keys" */
export type AuthUserSecurityKeys_Aggregate_Order_By = {
  readonly avg?: InputMaybe<AuthUserSecurityKeys_Avg_Order_By>;
  readonly count?: InputMaybe<Order_By>;
  readonly max?: InputMaybe<AuthUserSecurityKeys_Max_Order_By>;
  readonly min?: InputMaybe<AuthUserSecurityKeys_Min_Order_By>;
  readonly stddev?: InputMaybe<AuthUserSecurityKeys_Stddev_Order_By>;
  readonly stddev_pop?: InputMaybe<AuthUserSecurityKeys_Stddev_Pop_Order_By>;
  readonly stddev_samp?: InputMaybe<AuthUserSecurityKeys_Stddev_Samp_Order_By>;
  readonly sum?: InputMaybe<AuthUserSecurityKeys_Sum_Order_By>;
  readonly var_pop?: InputMaybe<AuthUserSecurityKeys_Var_Pop_Order_By>;
  readonly var_samp?: InputMaybe<AuthUserSecurityKeys_Var_Samp_Order_By>;
  readonly variance?: InputMaybe<AuthUserSecurityKeys_Variance_Order_By>;
};

/** input type for inserting array relation for remote table "auth.user_security_keys" */
export type AuthUserSecurityKeys_Arr_Rel_Insert_Input = {
  readonly data: ReadonlyArray<AuthUserSecurityKeys_Insert_Input>;
  /** upsert condition */
  readonly on_conflict?: InputMaybe<AuthUserSecurityKeys_On_Conflict>;
};

/** aggregate avg on columns */
export type AuthUserSecurityKeys_Avg_Fields = {
  readonly __typename?: 'authUserSecurityKeys_avg_fields';
  readonly counter?: Maybe<Scalars['Float']>;
};

/** order by avg() on columns of table "auth.user_security_keys" */
export type AuthUserSecurityKeys_Avg_Order_By = {
  readonly counter?: InputMaybe<Order_By>;
};

/** Boolean expression to filter rows from the table "auth.user_security_keys". All fields are combined with a logical 'AND'. */
export type AuthUserSecurityKeys_Bool_Exp = {
  readonly _and?: InputMaybe<ReadonlyArray<AuthUserSecurityKeys_Bool_Exp>>;
  readonly _not?: InputMaybe<AuthUserSecurityKeys_Bool_Exp>;
  readonly _or?: InputMaybe<ReadonlyArray<AuthUserSecurityKeys_Bool_Exp>>;
  readonly counter?: InputMaybe<Bigint_Comparison_Exp>;
  readonly credentialId?: InputMaybe<String_Comparison_Exp>;
  readonly credentialPublicKey?: InputMaybe<Bytea_Comparison_Exp>;
  readonly id?: InputMaybe<Uuid_Comparison_Exp>;
  readonly nickname?: InputMaybe<String_Comparison_Exp>;
  readonly transports?: InputMaybe<String_Comparison_Exp>;
  readonly user?: InputMaybe<Users_Bool_Exp>;
  readonly userId?: InputMaybe<Uuid_Comparison_Exp>;
};

/** unique or primary key constraints on table "auth.user_security_keys" */
export type AuthUserSecurityKeys_Constraint =
  /** unique or primary key constraint on columns "credential_id" */
  | 'user_security_key_credential_id_key'
  /** unique or primary key constraint on columns "id" */
  | 'user_security_keys_pkey';

/** input type for incrementing numeric columns in table "auth.user_security_keys" */
export type AuthUserSecurityKeys_Inc_Input = {
  readonly counter?: InputMaybe<Scalars['bigint']>;
};

/** input type for inserting data into table "auth.user_security_keys" */
export type AuthUserSecurityKeys_Insert_Input = {
  readonly counter?: InputMaybe<Scalars['bigint']>;
  readonly credentialId?: InputMaybe<Scalars['String']>;
  readonly credentialPublicKey?: InputMaybe<Scalars['bytea']>;
  readonly id?: InputMaybe<Scalars['uuid']>;
  readonly nickname?: InputMaybe<Scalars['String']>;
  readonly transports?: InputMaybe<Scalars['String']>;
  readonly user?: InputMaybe<Users_Obj_Rel_Insert_Input>;
  readonly userId?: InputMaybe<Scalars['uuid']>;
};

/** aggregate max on columns */
export type AuthUserSecurityKeys_Max_Fields = {
  readonly __typename?: 'authUserSecurityKeys_max_fields';
  readonly counter?: Maybe<Scalars['bigint']>;
  readonly credentialId?: Maybe<Scalars['String']>;
  readonly id?: Maybe<Scalars['uuid']>;
  readonly nickname?: Maybe<Scalars['String']>;
  readonly transports?: Maybe<Scalars['String']>;
  readonly userId?: Maybe<Scalars['uuid']>;
};

/** order by max() on columns of table "auth.user_security_keys" */
export type AuthUserSecurityKeys_Max_Order_By = {
  readonly counter?: InputMaybe<Order_By>;
  readonly credentialId?: InputMaybe<Order_By>;
  readonly id?: InputMaybe<Order_By>;
  readonly nickname?: InputMaybe<Order_By>;
  readonly transports?: InputMaybe<Order_By>;
  readonly userId?: InputMaybe<Order_By>;
};

/** aggregate min on columns */
export type AuthUserSecurityKeys_Min_Fields = {
  readonly __typename?: 'authUserSecurityKeys_min_fields';
  readonly counter?: Maybe<Scalars['bigint']>;
  readonly credentialId?: Maybe<Scalars['String']>;
  readonly id?: Maybe<Scalars['uuid']>;
  readonly nickname?: Maybe<Scalars['String']>;
  readonly transports?: Maybe<Scalars['String']>;
  readonly userId?: Maybe<Scalars['uuid']>;
};

/** order by min() on columns of table "auth.user_security_keys" */
export type AuthUserSecurityKeys_Min_Order_By = {
  readonly counter?: InputMaybe<Order_By>;
  readonly credentialId?: InputMaybe<Order_By>;
  readonly id?: InputMaybe<Order_By>;
  readonly nickname?: InputMaybe<Order_By>;
  readonly transports?: InputMaybe<Order_By>;
  readonly userId?: InputMaybe<Order_By>;
};

/** response of any mutation on the table "auth.user_security_keys" */
export type AuthUserSecurityKeys_Mutation_Response = {
  readonly __typename?: 'authUserSecurityKeys_mutation_response';
  /** number of rows affected by the mutation */
  readonly affected_rows: Scalars['Int'];
  /** data from the rows affected by the mutation */
  readonly returning: ReadonlyArray<AuthUserSecurityKeys>;
};

/** on_conflict condition type for table "auth.user_security_keys" */
export type AuthUserSecurityKeys_On_Conflict = {
  readonly constraint: AuthUserSecurityKeys_Constraint;
  readonly update_columns?: ReadonlyArray<AuthUserSecurityKeys_Update_Column>;
  readonly where?: InputMaybe<AuthUserSecurityKeys_Bool_Exp>;
};

/** Ordering options when selecting data from "auth.user_security_keys". */
export type AuthUserSecurityKeys_Order_By = {
  readonly counter?: InputMaybe<Order_By>;
  readonly credentialId?: InputMaybe<Order_By>;
  readonly credentialPublicKey?: InputMaybe<Order_By>;
  readonly id?: InputMaybe<Order_By>;
  readonly nickname?: InputMaybe<Order_By>;
  readonly transports?: InputMaybe<Order_By>;
  readonly user?: InputMaybe<Users_Order_By>;
  readonly userId?: InputMaybe<Order_By>;
};

/** primary key columns input for table: auth.user_security_keys */
export type AuthUserSecurityKeys_Pk_Columns_Input = {
  readonly id: Scalars['uuid'];
};

/** select columns of table "auth.user_security_keys" */
export type AuthUserSecurityKeys_Select_Column =
  /** column name */
  | 'counter'
  /** column name */
  | 'credentialId'
  /** column name */
  | 'credentialPublicKey'
  /** column name */
  | 'id'
  /** column name */
  | 'nickname'
  /** column name */
  | 'transports'
  /** column name */
  | 'userId';

/** input type for updating data in table "auth.user_security_keys" */
export type AuthUserSecurityKeys_Set_Input = {
  readonly counter?: InputMaybe<Scalars['bigint']>;
  readonly credentialId?: InputMaybe<Scalars['String']>;
  readonly credentialPublicKey?: InputMaybe<Scalars['bytea']>;
  readonly id?: InputMaybe<Scalars['uuid']>;
  readonly nickname?: InputMaybe<Scalars['String']>;
  readonly transports?: InputMaybe<Scalars['String']>;
  readonly userId?: InputMaybe<Scalars['uuid']>;
};

/** aggregate stddev on columns */
export type AuthUserSecurityKeys_Stddev_Fields = {
  readonly __typename?: 'authUserSecurityKeys_stddev_fields';
  readonly counter?: Maybe<Scalars['Float']>;
};

/** order by stddev() on columns of table "auth.user_security_keys" */
export type AuthUserSecurityKeys_Stddev_Order_By = {
  readonly counter?: InputMaybe<Order_By>;
};

/** aggregate stddev_pop on columns */
export type AuthUserSecurityKeys_Stddev_Pop_Fields = {
  readonly __typename?: 'authUserSecurityKeys_stddev_pop_fields';
  readonly counter?: Maybe<Scalars['Float']>;
};

/** order by stddev_pop() on columns of table "auth.user_security_keys" */
export type AuthUserSecurityKeys_Stddev_Pop_Order_By = {
  readonly counter?: InputMaybe<Order_By>;
};

/** aggregate stddev_samp on columns */
export type AuthUserSecurityKeys_Stddev_Samp_Fields = {
  readonly __typename?: 'authUserSecurityKeys_stddev_samp_fields';
  readonly counter?: Maybe<Scalars['Float']>;
};

/** order by stddev_samp() on columns of table "auth.user_security_keys" */
export type AuthUserSecurityKeys_Stddev_Samp_Order_By = {
  readonly counter?: InputMaybe<Order_By>;
};

/** Streaming cursor of the table "authUserSecurityKeys" */
export type AuthUserSecurityKeys_Stream_Cursor_Input = {
  /** Stream column input with initial value */
  readonly initial_value: AuthUserSecurityKeys_Stream_Cursor_Value_Input;
  /** cursor ordering */
  readonly ordering?: InputMaybe<Cursor_Ordering>;
};

/** Initial value of the column from where the streaming should start */
export type AuthUserSecurityKeys_Stream_Cursor_Value_Input = {
  readonly counter?: InputMaybe<Scalars['bigint']>;
  readonly credentialId?: InputMaybe<Scalars['String']>;
  readonly credentialPublicKey?: InputMaybe<Scalars['bytea']>;
  readonly id?: InputMaybe<Scalars['uuid']>;
  readonly nickname?: InputMaybe<Scalars['String']>;
  readonly transports?: InputMaybe<Scalars['String']>;
  readonly userId?: InputMaybe<Scalars['uuid']>;
};

/** aggregate sum on columns */
export type AuthUserSecurityKeys_Sum_Fields = {
  readonly __typename?: 'authUserSecurityKeys_sum_fields';
  readonly counter?: Maybe<Scalars['bigint']>;
};

/** order by sum() on columns of table "auth.user_security_keys" */
export type AuthUserSecurityKeys_Sum_Order_By = {
  readonly counter?: InputMaybe<Order_By>;
};

/** update columns of table "auth.user_security_keys" */
export type AuthUserSecurityKeys_Update_Column =
  /** column name */
  | 'counter'
  /** column name */
  | 'credentialId'
  /** column name */
  | 'credentialPublicKey'
  /** column name */
  | 'id'
  /** column name */
  | 'nickname'
  /** column name */
  | 'transports'
  /** column name */
  | 'userId';

export type AuthUserSecurityKeys_Updates = {
  /** increments the numeric columns with given value of the filtered values */
  readonly _inc?: InputMaybe<AuthUserSecurityKeys_Inc_Input>;
  /** sets the columns of the filtered rows to the given values */
  readonly _set?: InputMaybe<AuthUserSecurityKeys_Set_Input>;
  /** filter the rows which have to be updated */
  readonly where: AuthUserSecurityKeys_Bool_Exp;
};

/** aggregate var_pop on columns */
export type AuthUserSecurityKeys_Var_Pop_Fields = {
  readonly __typename?: 'authUserSecurityKeys_var_pop_fields';
  readonly counter?: Maybe<Scalars['Float']>;
};

/** order by var_pop() on columns of table "auth.user_security_keys" */
export type AuthUserSecurityKeys_Var_Pop_Order_By = {
  readonly counter?: InputMaybe<Order_By>;
};

/** aggregate var_samp on columns */
export type AuthUserSecurityKeys_Var_Samp_Fields = {
  readonly __typename?: 'authUserSecurityKeys_var_samp_fields';
  readonly counter?: Maybe<Scalars['Float']>;
};

/** order by var_samp() on columns of table "auth.user_security_keys" */
export type AuthUserSecurityKeys_Var_Samp_Order_By = {
  readonly counter?: InputMaybe<Order_By>;
};

/** aggregate variance on columns */
export type AuthUserSecurityKeys_Variance_Fields = {
  readonly __typename?: 'authUserSecurityKeys_variance_fields';
  readonly counter?: Maybe<Scalars['Float']>;
};

/** order by variance() on columns of table "auth.user_security_keys" */
export type AuthUserSecurityKeys_Variance_Order_By = {
  readonly counter?: InputMaybe<Order_By>;
};

/** columns and relationships of "backlog" */
export type Backlog = {
  readonly __typename?: 'backlog';
  /** An array relationship */
  readonly ListTask: ReadonlyArray<Task>;
  /** An aggregate relationship */
  readonly ListTask_aggregate: Task_Aggregate;
  readonly createdAt: Scalars['timestamptz'];
  readonly id: Scalars['uuid'];
  readonly updatedAt: Scalars['timestamptz'];
  readonly user_id: Scalars['uuid'];
};


/** columns and relationships of "backlog" */
export type BacklogListTaskArgs = {
  distinct_on?: InputMaybe<ReadonlyArray<Task_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<ReadonlyArray<Task_Order_By>>;
  where?: InputMaybe<Task_Bool_Exp>;
};


/** columns and relationships of "backlog" */
export type BacklogListTask_AggregateArgs = {
  distinct_on?: InputMaybe<ReadonlyArray<Task_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<ReadonlyArray<Task_Order_By>>;
  where?: InputMaybe<Task_Bool_Exp>;
};

/** aggregated selection of "backlog" */
export type Backlog_Aggregate = {
  readonly __typename?: 'backlog_aggregate';
  readonly aggregate?: Maybe<Backlog_Aggregate_Fields>;
  readonly nodes: ReadonlyArray<Backlog>;
};

/** aggregate fields of "backlog" */
export type Backlog_Aggregate_Fields = {
  readonly __typename?: 'backlog_aggregate_fields';
  readonly count: Scalars['Int'];
  readonly max?: Maybe<Backlog_Max_Fields>;
  readonly min?: Maybe<Backlog_Min_Fields>;
};


/** aggregate fields of "backlog" */
export type Backlog_Aggregate_FieldsCountArgs = {
  columns?: InputMaybe<ReadonlyArray<Backlog_Select_Column>>;
  distinct?: InputMaybe<Scalars['Boolean']>;
};

/** Boolean expression to filter rows from the table "backlog". All fields are combined with a logical 'AND'. */
export type Backlog_Bool_Exp = {
  readonly ListTask?: InputMaybe<Task_Bool_Exp>;
  readonly ListTask_aggregate?: InputMaybe<Task_Aggregate_Bool_Exp>;
  readonly _and?: InputMaybe<ReadonlyArray<Backlog_Bool_Exp>>;
  readonly _not?: InputMaybe<Backlog_Bool_Exp>;
  readonly _or?: InputMaybe<ReadonlyArray<Backlog_Bool_Exp>>;
  readonly createdAt?: InputMaybe<Timestamptz_Comparison_Exp>;
  readonly id?: InputMaybe<Uuid_Comparison_Exp>;
  readonly updatedAt?: InputMaybe<Timestamptz_Comparison_Exp>;
  readonly user_id?: InputMaybe<Uuid_Comparison_Exp>;
};

/** unique or primary key constraints on table "backlog" */
export type Backlog_Constraint =
  /** unique or primary key constraint on columns "id" */
  | 'backlog_pkey'
  /** unique or primary key constraint on columns "user_id" */
  | 'backlog_user_id_key';

/** input type for inserting data into table "backlog" */
export type Backlog_Insert_Input = {
  readonly ListTask?: InputMaybe<Task_Arr_Rel_Insert_Input>;
  readonly createdAt?: InputMaybe<Scalars['timestamptz']>;
  readonly id?: InputMaybe<Scalars['uuid']>;
  readonly updatedAt?: InputMaybe<Scalars['timestamptz']>;
  readonly user_id?: InputMaybe<Scalars['uuid']>;
};

/** aggregate max on columns */
export type Backlog_Max_Fields = {
  readonly __typename?: 'backlog_max_fields';
  readonly createdAt?: Maybe<Scalars['timestamptz']>;
  readonly id?: Maybe<Scalars['uuid']>;
  readonly updatedAt?: Maybe<Scalars['timestamptz']>;
  readonly user_id?: Maybe<Scalars['uuid']>;
};

/** aggregate min on columns */
export type Backlog_Min_Fields = {
  readonly __typename?: 'backlog_min_fields';
  readonly createdAt?: Maybe<Scalars['timestamptz']>;
  readonly id?: Maybe<Scalars['uuid']>;
  readonly updatedAt?: Maybe<Scalars['timestamptz']>;
  readonly user_id?: Maybe<Scalars['uuid']>;
};

/** response of any mutation on the table "backlog" */
export type Backlog_Mutation_Response = {
  readonly __typename?: 'backlog_mutation_response';
  /** number of rows affected by the mutation */
  readonly affected_rows: Scalars['Int'];
  /** data from the rows affected by the mutation */
  readonly returning: ReadonlyArray<Backlog>;
};

/** on_conflict condition type for table "backlog" */
export type Backlog_On_Conflict = {
  readonly constraint: Backlog_Constraint;
  readonly update_columns?: ReadonlyArray<Backlog_Update_Column>;
  readonly where?: InputMaybe<Backlog_Bool_Exp>;
};

/** Ordering options when selecting data from "backlog". */
export type Backlog_Order_By = {
  readonly ListTask_aggregate?: InputMaybe<Task_Aggregate_Order_By>;
  readonly createdAt?: InputMaybe<Order_By>;
  readonly id?: InputMaybe<Order_By>;
  readonly updatedAt?: InputMaybe<Order_By>;
  readonly user_id?: InputMaybe<Order_By>;
};

/** primary key columns input for table: backlog */
export type Backlog_Pk_Columns_Input = {
  readonly id: Scalars['uuid'];
};

/** select columns of table "backlog" */
export type Backlog_Select_Column =
  /** column name */
  | 'createdAt'
  /** column name */
  | 'id'
  /** column name */
  | 'updatedAt'
  /** column name */
  | 'user_id';

/** input type for updating data in table "backlog" */
export type Backlog_Set_Input = {
  readonly createdAt?: InputMaybe<Scalars['timestamptz']>;
  readonly id?: InputMaybe<Scalars['uuid']>;
  readonly updatedAt?: InputMaybe<Scalars['timestamptz']>;
  readonly user_id?: InputMaybe<Scalars['uuid']>;
};

/** Streaming cursor of the table "backlog" */
export type Backlog_Stream_Cursor_Input = {
  /** Stream column input with initial value */
  readonly initial_value: Backlog_Stream_Cursor_Value_Input;
  /** cursor ordering */
  readonly ordering?: InputMaybe<Cursor_Ordering>;
};

/** Initial value of the column from where the streaming should start */
export type Backlog_Stream_Cursor_Value_Input = {
  readonly createdAt?: InputMaybe<Scalars['timestamptz']>;
  readonly id?: InputMaybe<Scalars['uuid']>;
  readonly updatedAt?: InputMaybe<Scalars['timestamptz']>;
  readonly user_id?: InputMaybe<Scalars['uuid']>;
};

/** update columns of table "backlog" */
export type Backlog_Update_Column =
  /** column name */
  | 'createdAt'
  /** column name */
  | 'id'
  /** column name */
  | 'updatedAt'
  /** column name */
  | 'user_id';

export type Backlog_Updates = {
  /** sets the columns of the filtered rows to the given values */
  readonly _set?: InputMaybe<Backlog_Set_Input>;
  /** filter the rows which have to be updated */
  readonly where: Backlog_Bool_Exp;
};

/** Boolean expression to compare columns of type "bigint". All fields are combined with logical 'AND'. */
export type Bigint_Comparison_Exp = {
  readonly _eq?: InputMaybe<Scalars['bigint']>;
  readonly _gt?: InputMaybe<Scalars['bigint']>;
  readonly _gte?: InputMaybe<Scalars['bigint']>;
  readonly _in?: InputMaybe<ReadonlyArray<Scalars['bigint']>>;
  readonly _is_null?: InputMaybe<Scalars['Boolean']>;
  readonly _lt?: InputMaybe<Scalars['bigint']>;
  readonly _lte?: InputMaybe<Scalars['bigint']>;
  readonly _neq?: InputMaybe<Scalars['bigint']>;
  readonly _nin?: InputMaybe<ReadonlyArray<Scalars['bigint']>>;
};

/** columns and relationships of "storage.buckets" */
export type Buckets = {
  readonly __typename?: 'buckets';
  readonly cacheControl?: Maybe<Scalars['String']>;
  readonly createdAt: Scalars['timestamptz'];
  readonly downloadExpiration: Scalars['Int'];
  /** An array relationship */
  readonly files: ReadonlyArray<Files>;
  /** An aggregate relationship */
  readonly files_aggregate: Files_Aggregate;
  readonly id: Scalars['String'];
  readonly maxUploadFileSize: Scalars['Int'];
  readonly minUploadFileSize: Scalars['Int'];
  readonly presignedUrlsEnabled: Scalars['Boolean'];
  readonly updatedAt: Scalars['timestamptz'];
};


/** columns and relationships of "storage.buckets" */
export type BucketsFilesArgs = {
  distinct_on?: InputMaybe<ReadonlyArray<Files_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<ReadonlyArray<Files_Order_By>>;
  where?: InputMaybe<Files_Bool_Exp>;
};


/** columns and relationships of "storage.buckets" */
export type BucketsFiles_AggregateArgs = {
  distinct_on?: InputMaybe<ReadonlyArray<Files_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<ReadonlyArray<Files_Order_By>>;
  where?: InputMaybe<Files_Bool_Exp>;
};

/** aggregated selection of "storage.buckets" */
export type Buckets_Aggregate = {
  readonly __typename?: 'buckets_aggregate';
  readonly aggregate?: Maybe<Buckets_Aggregate_Fields>;
  readonly nodes: ReadonlyArray<Buckets>;
};

/** aggregate fields of "storage.buckets" */
export type Buckets_Aggregate_Fields = {
  readonly __typename?: 'buckets_aggregate_fields';
  readonly avg?: Maybe<Buckets_Avg_Fields>;
  readonly count: Scalars['Int'];
  readonly max?: Maybe<Buckets_Max_Fields>;
  readonly min?: Maybe<Buckets_Min_Fields>;
  readonly stddev?: Maybe<Buckets_Stddev_Fields>;
  readonly stddev_pop?: Maybe<Buckets_Stddev_Pop_Fields>;
  readonly stddev_samp?: Maybe<Buckets_Stddev_Samp_Fields>;
  readonly sum?: Maybe<Buckets_Sum_Fields>;
  readonly var_pop?: Maybe<Buckets_Var_Pop_Fields>;
  readonly var_samp?: Maybe<Buckets_Var_Samp_Fields>;
  readonly variance?: Maybe<Buckets_Variance_Fields>;
};


/** aggregate fields of "storage.buckets" */
export type Buckets_Aggregate_FieldsCountArgs = {
  columns?: InputMaybe<ReadonlyArray<Buckets_Select_Column>>;
  distinct?: InputMaybe<Scalars['Boolean']>;
};

/** aggregate avg on columns */
export type Buckets_Avg_Fields = {
  readonly __typename?: 'buckets_avg_fields';
  readonly downloadExpiration?: Maybe<Scalars['Float']>;
  readonly maxUploadFileSize?: Maybe<Scalars['Float']>;
  readonly minUploadFileSize?: Maybe<Scalars['Float']>;
};

/** Boolean expression to filter rows from the table "storage.buckets". All fields are combined with a logical 'AND'. */
export type Buckets_Bool_Exp = {
  readonly _and?: InputMaybe<ReadonlyArray<Buckets_Bool_Exp>>;
  readonly _not?: InputMaybe<Buckets_Bool_Exp>;
  readonly _or?: InputMaybe<ReadonlyArray<Buckets_Bool_Exp>>;
  readonly cacheControl?: InputMaybe<String_Comparison_Exp>;
  readonly createdAt?: InputMaybe<Timestamptz_Comparison_Exp>;
  readonly downloadExpiration?: InputMaybe<Int_Comparison_Exp>;
  readonly files?: InputMaybe<Files_Bool_Exp>;
  readonly files_aggregate?: InputMaybe<Files_Aggregate_Bool_Exp>;
  readonly id?: InputMaybe<String_Comparison_Exp>;
  readonly maxUploadFileSize?: InputMaybe<Int_Comparison_Exp>;
  readonly minUploadFileSize?: InputMaybe<Int_Comparison_Exp>;
  readonly presignedUrlsEnabled?: InputMaybe<Boolean_Comparison_Exp>;
  readonly updatedAt?: InputMaybe<Timestamptz_Comparison_Exp>;
};

/** unique or primary key constraints on table "storage.buckets" */
export type Buckets_Constraint =
  /** unique or primary key constraint on columns "id" */
  | 'buckets_pkey';

/** input type for incrementing numeric columns in table "storage.buckets" */
export type Buckets_Inc_Input = {
  readonly downloadExpiration?: InputMaybe<Scalars['Int']>;
  readonly maxUploadFileSize?: InputMaybe<Scalars['Int']>;
  readonly minUploadFileSize?: InputMaybe<Scalars['Int']>;
};

/** input type for inserting data into table "storage.buckets" */
export type Buckets_Insert_Input = {
  readonly cacheControl?: InputMaybe<Scalars['String']>;
  readonly createdAt?: InputMaybe<Scalars['timestamptz']>;
  readonly downloadExpiration?: InputMaybe<Scalars['Int']>;
  readonly files?: InputMaybe<Files_Arr_Rel_Insert_Input>;
  readonly id?: InputMaybe<Scalars['String']>;
  readonly maxUploadFileSize?: InputMaybe<Scalars['Int']>;
  readonly minUploadFileSize?: InputMaybe<Scalars['Int']>;
  readonly presignedUrlsEnabled?: InputMaybe<Scalars['Boolean']>;
  readonly updatedAt?: InputMaybe<Scalars['timestamptz']>;
};

/** aggregate max on columns */
export type Buckets_Max_Fields = {
  readonly __typename?: 'buckets_max_fields';
  readonly cacheControl?: Maybe<Scalars['String']>;
  readonly createdAt?: Maybe<Scalars['timestamptz']>;
  readonly downloadExpiration?: Maybe<Scalars['Int']>;
  readonly id?: Maybe<Scalars['String']>;
  readonly maxUploadFileSize?: Maybe<Scalars['Int']>;
  readonly minUploadFileSize?: Maybe<Scalars['Int']>;
  readonly updatedAt?: Maybe<Scalars['timestamptz']>;
};

/** aggregate min on columns */
export type Buckets_Min_Fields = {
  readonly __typename?: 'buckets_min_fields';
  readonly cacheControl?: Maybe<Scalars['String']>;
  readonly createdAt?: Maybe<Scalars['timestamptz']>;
  readonly downloadExpiration?: Maybe<Scalars['Int']>;
  readonly id?: Maybe<Scalars['String']>;
  readonly maxUploadFileSize?: Maybe<Scalars['Int']>;
  readonly minUploadFileSize?: Maybe<Scalars['Int']>;
  readonly updatedAt?: Maybe<Scalars['timestamptz']>;
};

/** response of any mutation on the table "storage.buckets" */
export type Buckets_Mutation_Response = {
  readonly __typename?: 'buckets_mutation_response';
  /** number of rows affected by the mutation */
  readonly affected_rows: Scalars['Int'];
  /** data from the rows affected by the mutation */
  readonly returning: ReadonlyArray<Buckets>;
};

/** input type for inserting object relation for remote table "storage.buckets" */
export type Buckets_Obj_Rel_Insert_Input = {
  readonly data: Buckets_Insert_Input;
  /** upsert condition */
  readonly on_conflict?: InputMaybe<Buckets_On_Conflict>;
};

/** on_conflict condition type for table "storage.buckets" */
export type Buckets_On_Conflict = {
  readonly constraint: Buckets_Constraint;
  readonly update_columns?: ReadonlyArray<Buckets_Update_Column>;
  readonly where?: InputMaybe<Buckets_Bool_Exp>;
};

/** Ordering options when selecting data from "storage.buckets". */
export type Buckets_Order_By = {
  readonly cacheControl?: InputMaybe<Order_By>;
  readonly createdAt?: InputMaybe<Order_By>;
  readonly downloadExpiration?: InputMaybe<Order_By>;
  readonly files_aggregate?: InputMaybe<Files_Aggregate_Order_By>;
  readonly id?: InputMaybe<Order_By>;
  readonly maxUploadFileSize?: InputMaybe<Order_By>;
  readonly minUploadFileSize?: InputMaybe<Order_By>;
  readonly presignedUrlsEnabled?: InputMaybe<Order_By>;
  readonly updatedAt?: InputMaybe<Order_By>;
};

/** primary key columns input for table: storage.buckets */
export type Buckets_Pk_Columns_Input = {
  readonly id: Scalars['String'];
};

/** select columns of table "storage.buckets" */
export type Buckets_Select_Column =
  /** column name */
  | 'cacheControl'
  /** column name */
  | 'createdAt'
  /** column name */
  | 'downloadExpiration'
  /** column name */
  | 'id'
  /** column name */
  | 'maxUploadFileSize'
  /** column name */
  | 'minUploadFileSize'
  /** column name */
  | 'presignedUrlsEnabled'
  /** column name */
  | 'updatedAt';

/** input type for updating data in table "storage.buckets" */
export type Buckets_Set_Input = {
  readonly cacheControl?: InputMaybe<Scalars['String']>;
  readonly createdAt?: InputMaybe<Scalars['timestamptz']>;
  readonly downloadExpiration?: InputMaybe<Scalars['Int']>;
  readonly id?: InputMaybe<Scalars['String']>;
  readonly maxUploadFileSize?: InputMaybe<Scalars['Int']>;
  readonly minUploadFileSize?: InputMaybe<Scalars['Int']>;
  readonly presignedUrlsEnabled?: InputMaybe<Scalars['Boolean']>;
  readonly updatedAt?: InputMaybe<Scalars['timestamptz']>;
};

/** aggregate stddev on columns */
export type Buckets_Stddev_Fields = {
  readonly __typename?: 'buckets_stddev_fields';
  readonly downloadExpiration?: Maybe<Scalars['Float']>;
  readonly maxUploadFileSize?: Maybe<Scalars['Float']>;
  readonly minUploadFileSize?: Maybe<Scalars['Float']>;
};

/** aggregate stddev_pop on columns */
export type Buckets_Stddev_Pop_Fields = {
  readonly __typename?: 'buckets_stddev_pop_fields';
  readonly downloadExpiration?: Maybe<Scalars['Float']>;
  readonly maxUploadFileSize?: Maybe<Scalars['Float']>;
  readonly minUploadFileSize?: Maybe<Scalars['Float']>;
};

/** aggregate stddev_samp on columns */
export type Buckets_Stddev_Samp_Fields = {
  readonly __typename?: 'buckets_stddev_samp_fields';
  readonly downloadExpiration?: Maybe<Scalars['Float']>;
  readonly maxUploadFileSize?: Maybe<Scalars['Float']>;
  readonly minUploadFileSize?: Maybe<Scalars['Float']>;
};

/** Streaming cursor of the table "buckets" */
export type Buckets_Stream_Cursor_Input = {
  /** Stream column input with initial value */
  readonly initial_value: Buckets_Stream_Cursor_Value_Input;
  /** cursor ordering */
  readonly ordering?: InputMaybe<Cursor_Ordering>;
};

/** Initial value of the column from where the streaming should start */
export type Buckets_Stream_Cursor_Value_Input = {
  readonly cacheControl?: InputMaybe<Scalars['String']>;
  readonly createdAt?: InputMaybe<Scalars['timestamptz']>;
  readonly downloadExpiration?: InputMaybe<Scalars['Int']>;
  readonly id?: InputMaybe<Scalars['String']>;
  readonly maxUploadFileSize?: InputMaybe<Scalars['Int']>;
  readonly minUploadFileSize?: InputMaybe<Scalars['Int']>;
  readonly presignedUrlsEnabled?: InputMaybe<Scalars['Boolean']>;
  readonly updatedAt?: InputMaybe<Scalars['timestamptz']>;
};

/** aggregate sum on columns */
export type Buckets_Sum_Fields = {
  readonly __typename?: 'buckets_sum_fields';
  readonly downloadExpiration?: Maybe<Scalars['Int']>;
  readonly maxUploadFileSize?: Maybe<Scalars['Int']>;
  readonly minUploadFileSize?: Maybe<Scalars['Int']>;
};

/** update columns of table "storage.buckets" */
export type Buckets_Update_Column =
  /** column name */
  | 'cacheControl'
  /** column name */
  | 'createdAt'
  /** column name */
  | 'downloadExpiration'
  /** column name */
  | 'id'
  /** column name */
  | 'maxUploadFileSize'
  /** column name */
  | 'minUploadFileSize'
  /** column name */
  | 'presignedUrlsEnabled'
  /** column name */
  | 'updatedAt';

export type Buckets_Updates = {
  /** increments the numeric columns with given value of the filtered values */
  readonly _inc?: InputMaybe<Buckets_Inc_Input>;
  /** sets the columns of the filtered rows to the given values */
  readonly _set?: InputMaybe<Buckets_Set_Input>;
  /** filter the rows which have to be updated */
  readonly where: Buckets_Bool_Exp;
};

/** aggregate var_pop on columns */
export type Buckets_Var_Pop_Fields = {
  readonly __typename?: 'buckets_var_pop_fields';
  readonly downloadExpiration?: Maybe<Scalars['Float']>;
  readonly maxUploadFileSize?: Maybe<Scalars['Float']>;
  readonly minUploadFileSize?: Maybe<Scalars['Float']>;
};

/** aggregate var_samp on columns */
export type Buckets_Var_Samp_Fields = {
  readonly __typename?: 'buckets_var_samp_fields';
  readonly downloadExpiration?: Maybe<Scalars['Float']>;
  readonly maxUploadFileSize?: Maybe<Scalars['Float']>;
  readonly minUploadFileSize?: Maybe<Scalars['Float']>;
};

/** aggregate variance on columns */
export type Buckets_Variance_Fields = {
  readonly __typename?: 'buckets_variance_fields';
  readonly downloadExpiration?: Maybe<Scalars['Float']>;
  readonly maxUploadFileSize?: Maybe<Scalars['Float']>;
  readonly minUploadFileSize?: Maybe<Scalars['Float']>;
};

/** Boolean expression to compare columns of type "bytea". All fields are combined with logical 'AND'. */
export type Bytea_Comparison_Exp = {
  readonly _eq?: InputMaybe<Scalars['bytea']>;
  readonly _gt?: InputMaybe<Scalars['bytea']>;
  readonly _gte?: InputMaybe<Scalars['bytea']>;
  readonly _in?: InputMaybe<ReadonlyArray<Scalars['bytea']>>;
  readonly _is_null?: InputMaybe<Scalars['Boolean']>;
  readonly _lt?: InputMaybe<Scalars['bytea']>;
  readonly _lte?: InputMaybe<Scalars['bytea']>;
  readonly _neq?: InputMaybe<Scalars['bytea']>;
  readonly _nin?: InputMaybe<ReadonlyArray<Scalars['bytea']>>;
};

/** Boolean expression to compare columns of type "citext". All fields are combined with logical 'AND'. */
export type Citext_Comparison_Exp = {
  readonly _eq?: InputMaybe<Scalars['citext']>;
  readonly _gt?: InputMaybe<Scalars['citext']>;
  readonly _gte?: InputMaybe<Scalars['citext']>;
  /** does the column match the given case-insensitive pattern */
  readonly _ilike?: InputMaybe<Scalars['citext']>;
  readonly _in?: InputMaybe<ReadonlyArray<Scalars['citext']>>;
  /** does the column match the given POSIX regular expression, case insensitive */
  readonly _iregex?: InputMaybe<Scalars['citext']>;
  readonly _is_null?: InputMaybe<Scalars['Boolean']>;
  /** does the column match the given pattern */
  readonly _like?: InputMaybe<Scalars['citext']>;
  readonly _lt?: InputMaybe<Scalars['citext']>;
  readonly _lte?: InputMaybe<Scalars['citext']>;
  readonly _neq?: InputMaybe<Scalars['citext']>;
  /** does the column NOT match the given case-insensitive pattern */
  readonly _nilike?: InputMaybe<Scalars['citext']>;
  readonly _nin?: InputMaybe<ReadonlyArray<Scalars['citext']>>;
  /** does the column NOT match the given POSIX regular expression, case insensitive */
  readonly _niregex?: InputMaybe<Scalars['citext']>;
  /** does the column NOT match the given pattern */
  readonly _nlike?: InputMaybe<Scalars['citext']>;
  /** does the column NOT match the given POSIX regular expression, case sensitive */
  readonly _nregex?: InputMaybe<Scalars['citext']>;
  /** does the column NOT match the given SQL regular expression */
  readonly _nsimilar?: InputMaybe<Scalars['citext']>;
  /** does the column match the given POSIX regular expression, case sensitive */
  readonly _regex?: InputMaybe<Scalars['citext']>;
  /** does the column match the given SQL regular expression */
  readonly _similar?: InputMaybe<Scalars['citext']>;
};

/** ordering argument of a cursor */
export type Cursor_Ordering =
  /** ascending ordering of the cursor */
  | 'ASC'
  /** descending ordering of the cursor */
  | 'DESC';

/** Boolean expression to compare columns of type "date". All fields are combined with logical 'AND'. */
export type Date_Comparison_Exp = {
  readonly _eq?: InputMaybe<Scalars['date']>;
  readonly _gt?: InputMaybe<Scalars['date']>;
  readonly _gte?: InputMaybe<Scalars['date']>;
  readonly _in?: InputMaybe<ReadonlyArray<Scalars['date']>>;
  readonly _is_null?: InputMaybe<Scalars['Boolean']>;
  readonly _lt?: InputMaybe<Scalars['date']>;
  readonly _lte?: InputMaybe<Scalars['date']>;
  readonly _neq?: InputMaybe<Scalars['date']>;
  readonly _nin?: InputMaybe<ReadonlyArray<Scalars['date']>>;
};

/** columns and relationships of "dayPlanning" */
export type DayPlanning = {
  readonly __typename?: 'dayPlanning';
  /** An array relationship */
  readonly ListTask: ReadonlyArray<Task>;
  /** An array relationship */
  readonly ListTaskPriorityMax3: ReadonlyArray<Task>;
  /** An aggregate relationship */
  readonly ListTaskPriorityMax3_aggregate: Task_Aggregate;
  /** An aggregate relationship */
  readonly ListTask_aggregate: Task_Aggregate;
  readonly createdAt: Scalars['timestamptz'];
  readonly date: Scalars['date'];
  readonly id: Scalars['uuid'];
  readonly updatedAt: Scalars['timestamptz'];
  readonly user_id: Scalars['uuid'];
};


/** columns and relationships of "dayPlanning" */
export type DayPlanningListTaskArgs = {
  distinct_on?: InputMaybe<ReadonlyArray<Task_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<ReadonlyArray<Task_Order_By>>;
  where?: InputMaybe<Task_Bool_Exp>;
};


/** columns and relationships of "dayPlanning" */
export type DayPlanningListTaskPriorityMax3Args = {
  distinct_on?: InputMaybe<ReadonlyArray<Task_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<ReadonlyArray<Task_Order_By>>;
  where?: InputMaybe<Task_Bool_Exp>;
};


/** columns and relationships of "dayPlanning" */
export type DayPlanningListTaskPriorityMax3_AggregateArgs = {
  distinct_on?: InputMaybe<ReadonlyArray<Task_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<ReadonlyArray<Task_Order_By>>;
  where?: InputMaybe<Task_Bool_Exp>;
};


/** columns and relationships of "dayPlanning" */
export type DayPlanningListTask_AggregateArgs = {
  distinct_on?: InputMaybe<ReadonlyArray<Task_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<ReadonlyArray<Task_Order_By>>;
  where?: InputMaybe<Task_Bool_Exp>;
};

/** aggregated selection of "dayPlanning" */
export type DayPlanning_Aggregate = {
  readonly __typename?: 'dayPlanning_aggregate';
  readonly aggregate?: Maybe<DayPlanning_Aggregate_Fields>;
  readonly nodes: ReadonlyArray<DayPlanning>;
};

/** aggregate fields of "dayPlanning" */
export type DayPlanning_Aggregate_Fields = {
  readonly __typename?: 'dayPlanning_aggregate_fields';
  readonly count: Scalars['Int'];
  readonly max?: Maybe<DayPlanning_Max_Fields>;
  readonly min?: Maybe<DayPlanning_Min_Fields>;
};


/** aggregate fields of "dayPlanning" */
export type DayPlanning_Aggregate_FieldsCountArgs = {
  columns?: InputMaybe<ReadonlyArray<DayPlanning_Select_Column>>;
  distinct?: InputMaybe<Scalars['Boolean']>;
};

/** Boolean expression to filter rows from the table "dayPlanning". All fields are combined with a logical 'AND'. */
export type DayPlanning_Bool_Exp = {
  readonly ListTask?: InputMaybe<Task_Bool_Exp>;
  readonly ListTaskPriorityMax3?: InputMaybe<Task_Bool_Exp>;
  readonly ListTaskPriorityMax3_aggregate?: InputMaybe<Task_Aggregate_Bool_Exp>;
  readonly ListTask_aggregate?: InputMaybe<Task_Aggregate_Bool_Exp>;
  readonly _and?: InputMaybe<ReadonlyArray<DayPlanning_Bool_Exp>>;
  readonly _not?: InputMaybe<DayPlanning_Bool_Exp>;
  readonly _or?: InputMaybe<ReadonlyArray<DayPlanning_Bool_Exp>>;
  readonly createdAt?: InputMaybe<Timestamptz_Comparison_Exp>;
  readonly date?: InputMaybe<Date_Comparison_Exp>;
  readonly id?: InputMaybe<Uuid_Comparison_Exp>;
  readonly updatedAt?: InputMaybe<Timestamptz_Comparison_Exp>;
  readonly user_id?: InputMaybe<Uuid_Comparison_Exp>;
};

/** unique or primary key constraints on table "dayPlanning" */
export type DayPlanning_Constraint =
  /** unique or primary key constraint on columns "id" */
  | 'dayPlanning_pkey';

/** input type for inserting data into table "dayPlanning" */
export type DayPlanning_Insert_Input = {
  readonly ListTask?: InputMaybe<Task_Arr_Rel_Insert_Input>;
  readonly ListTaskPriorityMax3?: InputMaybe<Task_Arr_Rel_Insert_Input>;
  readonly createdAt?: InputMaybe<Scalars['timestamptz']>;
  readonly date?: InputMaybe<Scalars['date']>;
  readonly id?: InputMaybe<Scalars['uuid']>;
  readonly updatedAt?: InputMaybe<Scalars['timestamptz']>;
  readonly user_id?: InputMaybe<Scalars['uuid']>;
};

/** aggregate max on columns */
export type DayPlanning_Max_Fields = {
  readonly __typename?: 'dayPlanning_max_fields';
  readonly createdAt?: Maybe<Scalars['timestamptz']>;
  readonly date?: Maybe<Scalars['date']>;
  readonly id?: Maybe<Scalars['uuid']>;
  readonly updatedAt?: Maybe<Scalars['timestamptz']>;
  readonly user_id?: Maybe<Scalars['uuid']>;
};

/** aggregate min on columns */
export type DayPlanning_Min_Fields = {
  readonly __typename?: 'dayPlanning_min_fields';
  readonly createdAt?: Maybe<Scalars['timestamptz']>;
  readonly date?: Maybe<Scalars['date']>;
  readonly id?: Maybe<Scalars['uuid']>;
  readonly updatedAt?: Maybe<Scalars['timestamptz']>;
  readonly user_id?: Maybe<Scalars['uuid']>;
};

/** response of any mutation on the table "dayPlanning" */
export type DayPlanning_Mutation_Response = {
  readonly __typename?: 'dayPlanning_mutation_response';
  /** number of rows affected by the mutation */
  readonly affected_rows: Scalars['Int'];
  /** data from the rows affected by the mutation */
  readonly returning: ReadonlyArray<DayPlanning>;
};

/** on_conflict condition type for table "dayPlanning" */
export type DayPlanning_On_Conflict = {
  readonly constraint: DayPlanning_Constraint;
  readonly update_columns?: ReadonlyArray<DayPlanning_Update_Column>;
  readonly where?: InputMaybe<DayPlanning_Bool_Exp>;
};

/** Ordering options when selecting data from "dayPlanning". */
export type DayPlanning_Order_By = {
  readonly ListTaskPriorityMax3_aggregate?: InputMaybe<Task_Aggregate_Order_By>;
  readonly ListTask_aggregate?: InputMaybe<Task_Aggregate_Order_By>;
  readonly createdAt?: InputMaybe<Order_By>;
  readonly date?: InputMaybe<Order_By>;
  readonly id?: InputMaybe<Order_By>;
  readonly updatedAt?: InputMaybe<Order_By>;
  readonly user_id?: InputMaybe<Order_By>;
};

/** primary key columns input for table: dayPlanning */
export type DayPlanning_Pk_Columns_Input = {
  readonly id: Scalars['uuid'];
};

/** select columns of table "dayPlanning" */
export type DayPlanning_Select_Column =
  /** column name */
  | 'createdAt'
  /** column name */
  | 'date'
  /** column name */
  | 'id'
  /** column name */
  | 'updatedAt'
  /** column name */
  | 'user_id';

/** input type for updating data in table "dayPlanning" */
export type DayPlanning_Set_Input = {
  readonly createdAt?: InputMaybe<Scalars['timestamptz']>;
  readonly date?: InputMaybe<Scalars['date']>;
  readonly id?: InputMaybe<Scalars['uuid']>;
  readonly updatedAt?: InputMaybe<Scalars['timestamptz']>;
  readonly user_id?: InputMaybe<Scalars['uuid']>;
};

/** Streaming cursor of the table "dayPlanning" */
export type DayPlanning_Stream_Cursor_Input = {
  /** Stream column input with initial value */
  readonly initial_value: DayPlanning_Stream_Cursor_Value_Input;
  /** cursor ordering */
  readonly ordering?: InputMaybe<Cursor_Ordering>;
};

/** Initial value of the column from where the streaming should start */
export type DayPlanning_Stream_Cursor_Value_Input = {
  readonly createdAt?: InputMaybe<Scalars['timestamptz']>;
  readonly date?: InputMaybe<Scalars['date']>;
  readonly id?: InputMaybe<Scalars['uuid']>;
  readonly updatedAt?: InputMaybe<Scalars['timestamptz']>;
  readonly user_id?: InputMaybe<Scalars['uuid']>;
};

/** update columns of table "dayPlanning" */
export type DayPlanning_Update_Column =
  /** column name */
  | 'createdAt'
  /** column name */
  | 'date'
  /** column name */
  | 'id'
  /** column name */
  | 'updatedAt'
  /** column name */
  | 'user_id';

export type DayPlanning_Updates = {
  /** sets the columns of the filtered rows to the given values */
  readonly _set?: InputMaybe<DayPlanning_Set_Input>;
  /** filter the rows which have to be updated */
  readonly where: DayPlanning_Bool_Exp;
};

/** columns and relationships of "storage.files" */
export type Files = {
  readonly __typename?: 'files';
  /** An object relationship */
  readonly bucket: Buckets;
  readonly bucketId: Scalars['String'];
  readonly createdAt: Scalars['timestamptz'];
  readonly etag?: Maybe<Scalars['String']>;
  readonly id: Scalars['uuid'];
  readonly isUploaded?: Maybe<Scalars['Boolean']>;
  readonly mimeType?: Maybe<Scalars['String']>;
  readonly name?: Maybe<Scalars['String']>;
  readonly size?: Maybe<Scalars['Int']>;
  readonly updatedAt: Scalars['timestamptz'];
  readonly uploadedByUserId?: Maybe<Scalars['uuid']>;
};

/** aggregated selection of "storage.files" */
export type Files_Aggregate = {
  readonly __typename?: 'files_aggregate';
  readonly aggregate?: Maybe<Files_Aggregate_Fields>;
  readonly nodes: ReadonlyArray<Files>;
};

export type Files_Aggregate_Bool_Exp = {
  readonly bool_and?: InputMaybe<Files_Aggregate_Bool_Exp_Bool_And>;
  readonly bool_or?: InputMaybe<Files_Aggregate_Bool_Exp_Bool_Or>;
  readonly count?: InputMaybe<Files_Aggregate_Bool_Exp_Count>;
};

export type Files_Aggregate_Bool_Exp_Bool_And = {
  readonly arguments: Files_Select_Column_Files_Aggregate_Bool_Exp_Bool_And_Arguments_Columns;
  readonly distinct?: InputMaybe<Scalars['Boolean']>;
  readonly filter?: InputMaybe<Files_Bool_Exp>;
  readonly predicate: Boolean_Comparison_Exp;
};

export type Files_Aggregate_Bool_Exp_Bool_Or = {
  readonly arguments: Files_Select_Column_Files_Aggregate_Bool_Exp_Bool_Or_Arguments_Columns;
  readonly distinct?: InputMaybe<Scalars['Boolean']>;
  readonly filter?: InputMaybe<Files_Bool_Exp>;
  readonly predicate: Boolean_Comparison_Exp;
};

export type Files_Aggregate_Bool_Exp_Count = {
  readonly arguments?: InputMaybe<ReadonlyArray<Files_Select_Column>>;
  readonly distinct?: InputMaybe<Scalars['Boolean']>;
  readonly filter?: InputMaybe<Files_Bool_Exp>;
  readonly predicate: Int_Comparison_Exp;
};

/** aggregate fields of "storage.files" */
export type Files_Aggregate_Fields = {
  readonly __typename?: 'files_aggregate_fields';
  readonly avg?: Maybe<Files_Avg_Fields>;
  readonly count: Scalars['Int'];
  readonly max?: Maybe<Files_Max_Fields>;
  readonly min?: Maybe<Files_Min_Fields>;
  readonly stddev?: Maybe<Files_Stddev_Fields>;
  readonly stddev_pop?: Maybe<Files_Stddev_Pop_Fields>;
  readonly stddev_samp?: Maybe<Files_Stddev_Samp_Fields>;
  readonly sum?: Maybe<Files_Sum_Fields>;
  readonly var_pop?: Maybe<Files_Var_Pop_Fields>;
  readonly var_samp?: Maybe<Files_Var_Samp_Fields>;
  readonly variance?: Maybe<Files_Variance_Fields>;
};


/** aggregate fields of "storage.files" */
export type Files_Aggregate_FieldsCountArgs = {
  columns?: InputMaybe<ReadonlyArray<Files_Select_Column>>;
  distinct?: InputMaybe<Scalars['Boolean']>;
};

/** order by aggregate values of table "storage.files" */
export type Files_Aggregate_Order_By = {
  readonly avg?: InputMaybe<Files_Avg_Order_By>;
  readonly count?: InputMaybe<Order_By>;
  readonly max?: InputMaybe<Files_Max_Order_By>;
  readonly min?: InputMaybe<Files_Min_Order_By>;
  readonly stddev?: InputMaybe<Files_Stddev_Order_By>;
  readonly stddev_pop?: InputMaybe<Files_Stddev_Pop_Order_By>;
  readonly stddev_samp?: InputMaybe<Files_Stddev_Samp_Order_By>;
  readonly sum?: InputMaybe<Files_Sum_Order_By>;
  readonly var_pop?: InputMaybe<Files_Var_Pop_Order_By>;
  readonly var_samp?: InputMaybe<Files_Var_Samp_Order_By>;
  readonly variance?: InputMaybe<Files_Variance_Order_By>;
};

/** input type for inserting array relation for remote table "storage.files" */
export type Files_Arr_Rel_Insert_Input = {
  readonly data: ReadonlyArray<Files_Insert_Input>;
  /** upsert condition */
  readonly on_conflict?: InputMaybe<Files_On_Conflict>;
};

/** aggregate avg on columns */
export type Files_Avg_Fields = {
  readonly __typename?: 'files_avg_fields';
  readonly size?: Maybe<Scalars['Float']>;
};

/** order by avg() on columns of table "storage.files" */
export type Files_Avg_Order_By = {
  readonly size?: InputMaybe<Order_By>;
};

/** Boolean expression to filter rows from the table "storage.files". All fields are combined with a logical 'AND'. */
export type Files_Bool_Exp = {
  readonly _and?: InputMaybe<ReadonlyArray<Files_Bool_Exp>>;
  readonly _not?: InputMaybe<Files_Bool_Exp>;
  readonly _or?: InputMaybe<ReadonlyArray<Files_Bool_Exp>>;
  readonly bucket?: InputMaybe<Buckets_Bool_Exp>;
  readonly bucketId?: InputMaybe<String_Comparison_Exp>;
  readonly createdAt?: InputMaybe<Timestamptz_Comparison_Exp>;
  readonly etag?: InputMaybe<String_Comparison_Exp>;
  readonly id?: InputMaybe<Uuid_Comparison_Exp>;
  readonly isUploaded?: InputMaybe<Boolean_Comparison_Exp>;
  readonly mimeType?: InputMaybe<String_Comparison_Exp>;
  readonly name?: InputMaybe<String_Comparison_Exp>;
  readonly size?: InputMaybe<Int_Comparison_Exp>;
  readonly updatedAt?: InputMaybe<Timestamptz_Comparison_Exp>;
  readonly uploadedByUserId?: InputMaybe<Uuid_Comparison_Exp>;
};

/** unique or primary key constraints on table "storage.files" */
export type Files_Constraint =
  /** unique or primary key constraint on columns "id" */
  | 'files_pkey';

/** input type for incrementing numeric columns in table "storage.files" */
export type Files_Inc_Input = {
  readonly size?: InputMaybe<Scalars['Int']>;
};

/** input type for inserting data into table "storage.files" */
export type Files_Insert_Input = {
  readonly bucket?: InputMaybe<Buckets_Obj_Rel_Insert_Input>;
  readonly bucketId?: InputMaybe<Scalars['String']>;
  readonly createdAt?: InputMaybe<Scalars['timestamptz']>;
  readonly etag?: InputMaybe<Scalars['String']>;
  readonly id?: InputMaybe<Scalars['uuid']>;
  readonly isUploaded?: InputMaybe<Scalars['Boolean']>;
  readonly mimeType?: InputMaybe<Scalars['String']>;
  readonly name?: InputMaybe<Scalars['String']>;
  readonly size?: InputMaybe<Scalars['Int']>;
  readonly updatedAt?: InputMaybe<Scalars['timestamptz']>;
  readonly uploadedByUserId?: InputMaybe<Scalars['uuid']>;
};

/** aggregate max on columns */
export type Files_Max_Fields = {
  readonly __typename?: 'files_max_fields';
  readonly bucketId?: Maybe<Scalars['String']>;
  readonly createdAt?: Maybe<Scalars['timestamptz']>;
  readonly etag?: Maybe<Scalars['String']>;
  readonly id?: Maybe<Scalars['uuid']>;
  readonly mimeType?: Maybe<Scalars['String']>;
  readonly name?: Maybe<Scalars['String']>;
  readonly size?: Maybe<Scalars['Int']>;
  readonly updatedAt?: Maybe<Scalars['timestamptz']>;
  readonly uploadedByUserId?: Maybe<Scalars['uuid']>;
};

/** order by max() on columns of table "storage.files" */
export type Files_Max_Order_By = {
  readonly bucketId?: InputMaybe<Order_By>;
  readonly createdAt?: InputMaybe<Order_By>;
  readonly etag?: InputMaybe<Order_By>;
  readonly id?: InputMaybe<Order_By>;
  readonly mimeType?: InputMaybe<Order_By>;
  readonly name?: InputMaybe<Order_By>;
  readonly size?: InputMaybe<Order_By>;
  readonly updatedAt?: InputMaybe<Order_By>;
  readonly uploadedByUserId?: InputMaybe<Order_By>;
};

/** aggregate min on columns */
export type Files_Min_Fields = {
  readonly __typename?: 'files_min_fields';
  readonly bucketId?: Maybe<Scalars['String']>;
  readonly createdAt?: Maybe<Scalars['timestamptz']>;
  readonly etag?: Maybe<Scalars['String']>;
  readonly id?: Maybe<Scalars['uuid']>;
  readonly mimeType?: Maybe<Scalars['String']>;
  readonly name?: Maybe<Scalars['String']>;
  readonly size?: Maybe<Scalars['Int']>;
  readonly updatedAt?: Maybe<Scalars['timestamptz']>;
  readonly uploadedByUserId?: Maybe<Scalars['uuid']>;
};

/** order by min() on columns of table "storage.files" */
export type Files_Min_Order_By = {
  readonly bucketId?: InputMaybe<Order_By>;
  readonly createdAt?: InputMaybe<Order_By>;
  readonly etag?: InputMaybe<Order_By>;
  readonly id?: InputMaybe<Order_By>;
  readonly mimeType?: InputMaybe<Order_By>;
  readonly name?: InputMaybe<Order_By>;
  readonly size?: InputMaybe<Order_By>;
  readonly updatedAt?: InputMaybe<Order_By>;
  readonly uploadedByUserId?: InputMaybe<Order_By>;
};

/** response of any mutation on the table "storage.files" */
export type Files_Mutation_Response = {
  readonly __typename?: 'files_mutation_response';
  /** number of rows affected by the mutation */
  readonly affected_rows: Scalars['Int'];
  /** data from the rows affected by the mutation */
  readonly returning: ReadonlyArray<Files>;
};

/** on_conflict condition type for table "storage.files" */
export type Files_On_Conflict = {
  readonly constraint: Files_Constraint;
  readonly update_columns?: ReadonlyArray<Files_Update_Column>;
  readonly where?: InputMaybe<Files_Bool_Exp>;
};

/** Ordering options when selecting data from "storage.files". */
export type Files_Order_By = {
  readonly bucket?: InputMaybe<Buckets_Order_By>;
  readonly bucketId?: InputMaybe<Order_By>;
  readonly createdAt?: InputMaybe<Order_By>;
  readonly etag?: InputMaybe<Order_By>;
  readonly id?: InputMaybe<Order_By>;
  readonly isUploaded?: InputMaybe<Order_By>;
  readonly mimeType?: InputMaybe<Order_By>;
  readonly name?: InputMaybe<Order_By>;
  readonly size?: InputMaybe<Order_By>;
  readonly updatedAt?: InputMaybe<Order_By>;
  readonly uploadedByUserId?: InputMaybe<Order_By>;
};

/** primary key columns input for table: storage.files */
export type Files_Pk_Columns_Input = {
  readonly id: Scalars['uuid'];
};

/** select columns of table "storage.files" */
export type Files_Select_Column =
  /** column name */
  | 'bucketId'
  /** column name */
  | 'createdAt'
  /** column name */
  | 'etag'
  /** column name */
  | 'id'
  /** column name */
  | 'isUploaded'
  /** column name */
  | 'mimeType'
  /** column name */
  | 'name'
  /** column name */
  | 'size'
  /** column name */
  | 'updatedAt'
  /** column name */
  | 'uploadedByUserId';

/** select "files_aggregate_bool_exp_bool_and_arguments_columns" columns of table "storage.files" */
export type Files_Select_Column_Files_Aggregate_Bool_Exp_Bool_And_Arguments_Columns =
  /** column name */
  | 'isUploaded';

/** select "files_aggregate_bool_exp_bool_or_arguments_columns" columns of table "storage.files" */
export type Files_Select_Column_Files_Aggregate_Bool_Exp_Bool_Or_Arguments_Columns =
  /** column name */
  | 'isUploaded';

/** input type for updating data in table "storage.files" */
export type Files_Set_Input = {
  readonly bucketId?: InputMaybe<Scalars['String']>;
  readonly createdAt?: InputMaybe<Scalars['timestamptz']>;
  readonly etag?: InputMaybe<Scalars['String']>;
  readonly id?: InputMaybe<Scalars['uuid']>;
  readonly isUploaded?: InputMaybe<Scalars['Boolean']>;
  readonly mimeType?: InputMaybe<Scalars['String']>;
  readonly name?: InputMaybe<Scalars['String']>;
  readonly size?: InputMaybe<Scalars['Int']>;
  readonly updatedAt?: InputMaybe<Scalars['timestamptz']>;
  readonly uploadedByUserId?: InputMaybe<Scalars['uuid']>;
};

/** aggregate stddev on columns */
export type Files_Stddev_Fields = {
  readonly __typename?: 'files_stddev_fields';
  readonly size?: Maybe<Scalars['Float']>;
};

/** order by stddev() on columns of table "storage.files" */
export type Files_Stddev_Order_By = {
  readonly size?: InputMaybe<Order_By>;
};

/** aggregate stddev_pop on columns */
export type Files_Stddev_Pop_Fields = {
  readonly __typename?: 'files_stddev_pop_fields';
  readonly size?: Maybe<Scalars['Float']>;
};

/** order by stddev_pop() on columns of table "storage.files" */
export type Files_Stddev_Pop_Order_By = {
  readonly size?: InputMaybe<Order_By>;
};

/** aggregate stddev_samp on columns */
export type Files_Stddev_Samp_Fields = {
  readonly __typename?: 'files_stddev_samp_fields';
  readonly size?: Maybe<Scalars['Float']>;
};

/** order by stddev_samp() on columns of table "storage.files" */
export type Files_Stddev_Samp_Order_By = {
  readonly size?: InputMaybe<Order_By>;
};

/** Streaming cursor of the table "files" */
export type Files_Stream_Cursor_Input = {
  /** Stream column input with initial value */
  readonly initial_value: Files_Stream_Cursor_Value_Input;
  /** cursor ordering */
  readonly ordering?: InputMaybe<Cursor_Ordering>;
};

/** Initial value of the column from where the streaming should start */
export type Files_Stream_Cursor_Value_Input = {
  readonly bucketId?: InputMaybe<Scalars['String']>;
  readonly createdAt?: InputMaybe<Scalars['timestamptz']>;
  readonly etag?: InputMaybe<Scalars['String']>;
  readonly id?: InputMaybe<Scalars['uuid']>;
  readonly isUploaded?: InputMaybe<Scalars['Boolean']>;
  readonly mimeType?: InputMaybe<Scalars['String']>;
  readonly name?: InputMaybe<Scalars['String']>;
  readonly size?: InputMaybe<Scalars['Int']>;
  readonly updatedAt?: InputMaybe<Scalars['timestamptz']>;
  readonly uploadedByUserId?: InputMaybe<Scalars['uuid']>;
};

/** aggregate sum on columns */
export type Files_Sum_Fields = {
  readonly __typename?: 'files_sum_fields';
  readonly size?: Maybe<Scalars['Int']>;
};

/** order by sum() on columns of table "storage.files" */
export type Files_Sum_Order_By = {
  readonly size?: InputMaybe<Order_By>;
};

/** update columns of table "storage.files" */
export type Files_Update_Column =
  /** column name */
  | 'bucketId'
  /** column name */
  | 'createdAt'
  /** column name */
  | 'etag'
  /** column name */
  | 'id'
  /** column name */
  | 'isUploaded'
  /** column name */
  | 'mimeType'
  /** column name */
  | 'name'
  /** column name */
  | 'size'
  /** column name */
  | 'updatedAt'
  /** column name */
  | 'uploadedByUserId';

export type Files_Updates = {
  /** increments the numeric columns with given value of the filtered values */
  readonly _inc?: InputMaybe<Files_Inc_Input>;
  /** sets the columns of the filtered rows to the given values */
  readonly _set?: InputMaybe<Files_Set_Input>;
  /** filter the rows which have to be updated */
  readonly where: Files_Bool_Exp;
};

/** aggregate var_pop on columns */
export type Files_Var_Pop_Fields = {
  readonly __typename?: 'files_var_pop_fields';
  readonly size?: Maybe<Scalars['Float']>;
};

/** order by var_pop() on columns of table "storage.files" */
export type Files_Var_Pop_Order_By = {
  readonly size?: InputMaybe<Order_By>;
};

/** aggregate var_samp on columns */
export type Files_Var_Samp_Fields = {
  readonly __typename?: 'files_var_samp_fields';
  readonly size?: Maybe<Scalars['Float']>;
};

/** order by var_samp() on columns of table "storage.files" */
export type Files_Var_Samp_Order_By = {
  readonly size?: InputMaybe<Order_By>;
};

/** aggregate variance on columns */
export type Files_Variance_Fields = {
  readonly __typename?: 'files_variance_fields';
  readonly size?: Maybe<Scalars['Float']>;
};

/** order by variance() on columns of table "storage.files" */
export type Files_Variance_Order_By = {
  readonly size?: InputMaybe<Order_By>;
};

export type Jsonb_Cast_Exp = {
  readonly String?: InputMaybe<String_Comparison_Exp>;
};

/** Boolean expression to compare columns of type "jsonb". All fields are combined with logical 'AND'. */
export type Jsonb_Comparison_Exp = {
  readonly _cast?: InputMaybe<Jsonb_Cast_Exp>;
  /** is the column contained in the given json value */
  readonly _contained_in?: InputMaybe<Scalars['jsonb']>;
  /** does the column contain the given json value at the top level */
  readonly _contains?: InputMaybe<Scalars['jsonb']>;
  readonly _eq?: InputMaybe<Scalars['jsonb']>;
  readonly _gt?: InputMaybe<Scalars['jsonb']>;
  readonly _gte?: InputMaybe<Scalars['jsonb']>;
  /** does the string exist as a top-level key in the column */
  readonly _has_key?: InputMaybe<Scalars['String']>;
  /** do all of these strings exist as top-level keys in the column */
  readonly _has_keys_all?: InputMaybe<ReadonlyArray<Scalars['String']>>;
  /** do any of these strings exist as top-level keys in the column */
  readonly _has_keys_any?: InputMaybe<ReadonlyArray<Scalars['String']>>;
  readonly _in?: InputMaybe<ReadonlyArray<Scalars['jsonb']>>;
  readonly _is_null?: InputMaybe<Scalars['Boolean']>;
  readonly _lt?: InputMaybe<Scalars['jsonb']>;
  readonly _lte?: InputMaybe<Scalars['jsonb']>;
  readonly _neq?: InputMaybe<Scalars['jsonb']>;
  readonly _nin?: InputMaybe<ReadonlyArray<Scalars['jsonb']>>;
};

/** mutation root */
export type Mutation_Root = {
  readonly __typename?: 'mutation_root';
  /** delete single row from the table: "auth.providers" */
  readonly deleteAuthProvider?: Maybe<AuthProviders>;
  /** delete single row from the table: "auth.provider_requests" */
  readonly deleteAuthProviderRequest?: Maybe<AuthProviderRequests>;
  /** delete data from the table: "auth.provider_requests" */
  readonly deleteAuthProviderRequests?: Maybe<AuthProviderRequests_Mutation_Response>;
  /** delete data from the table: "auth.providers" */
  readonly deleteAuthProviders?: Maybe<AuthProviders_Mutation_Response>;
  /** delete single row from the table: "auth.refresh_tokens" */
  readonly deleteAuthRefreshToken?: Maybe<AuthRefreshTokens>;
  /** delete single row from the table: "auth.refresh_token_types" */
  readonly deleteAuthRefreshTokenType?: Maybe<AuthRefreshTokenTypes>;
  /** delete data from the table: "auth.refresh_token_types" */
  readonly deleteAuthRefreshTokenTypes?: Maybe<AuthRefreshTokenTypes_Mutation_Response>;
  /** delete data from the table: "auth.refresh_tokens" */
  readonly deleteAuthRefreshTokens?: Maybe<AuthRefreshTokens_Mutation_Response>;
  /** delete single row from the table: "auth.roles" */
  readonly deleteAuthRole?: Maybe<AuthRoles>;
  /** delete data from the table: "auth.roles" */
  readonly deleteAuthRoles?: Maybe<AuthRoles_Mutation_Response>;
  /** delete single row from the table: "auth.user_providers" */
  readonly deleteAuthUserProvider?: Maybe<AuthUserProviders>;
  /** delete data from the table: "auth.user_providers" */
  readonly deleteAuthUserProviders?: Maybe<AuthUserProviders_Mutation_Response>;
  /** delete single row from the table: "auth.user_roles" */
  readonly deleteAuthUserRole?: Maybe<AuthUserRoles>;
  /** delete data from the table: "auth.user_roles" */
  readonly deleteAuthUserRoles?: Maybe<AuthUserRoles_Mutation_Response>;
  /** delete single row from the table: "auth.user_security_keys" */
  readonly deleteAuthUserSecurityKey?: Maybe<AuthUserSecurityKeys>;
  /** delete data from the table: "auth.user_security_keys" */
  readonly deleteAuthUserSecurityKeys?: Maybe<AuthUserSecurityKeys_Mutation_Response>;
  /** delete single row from the table: "storage.buckets" */
  readonly deleteBucket?: Maybe<Buckets>;
  /** delete data from the table: "storage.buckets" */
  readonly deleteBuckets?: Maybe<Buckets_Mutation_Response>;
  /** delete single row from the table: "storage.files" */
  readonly deleteFile?: Maybe<Files>;
  /** delete data from the table: "storage.files" */
  readonly deleteFiles?: Maybe<Files_Mutation_Response>;
  /** delete single row from the table: "auth.users" */
  readonly deleteUser?: Maybe<Users>;
  /** delete data from the table: "auth.users" */
  readonly deleteUsers?: Maybe<Users_Mutation_Response>;
  /** delete data from the table: "backlog" */
  readonly delete_backlog?: Maybe<Backlog_Mutation_Response>;
  /** delete single row from the table: "backlog" */
  readonly delete_backlog_by_pk?: Maybe<Backlog>;
  /** delete data from the table: "dayPlanning" */
  readonly delete_dayPlanning?: Maybe<DayPlanning_Mutation_Response>;
  /** delete single row from the table: "dayPlanning" */
  readonly delete_dayPlanning_by_pk?: Maybe<DayPlanning>;
  /** delete data from the table: "priority" */
  readonly delete_priority?: Maybe<Priority_Mutation_Response>;
  /** delete single row from the table: "priority" */
  readonly delete_priority_by_pk?: Maybe<Priority>;
  /** delete data from the table: "task" */
  readonly delete_task?: Maybe<Task_Mutation_Response>;
  /** delete data from the table: "taskStatus" */
  readonly delete_taskStatus?: Maybe<TaskStatus_Mutation_Response>;
  /** delete single row from the table: "taskStatus" */
  readonly delete_taskStatus_by_pk?: Maybe<TaskStatus>;
  /** delete single row from the table: "task" */
  readonly delete_task_by_pk?: Maybe<Task>;
  /** insert a single row into the table: "auth.providers" */
  readonly insertAuthProvider?: Maybe<AuthProviders>;
  /** insert a single row into the table: "auth.provider_requests" */
  readonly insertAuthProviderRequest?: Maybe<AuthProviderRequests>;
  /** insert data into the table: "auth.provider_requests" */
  readonly insertAuthProviderRequests?: Maybe<AuthProviderRequests_Mutation_Response>;
  /** insert data into the table: "auth.providers" */
  readonly insertAuthProviders?: Maybe<AuthProviders_Mutation_Response>;
  /** insert a single row into the table: "auth.refresh_tokens" */
  readonly insertAuthRefreshToken?: Maybe<AuthRefreshTokens>;
  /** insert a single row into the table: "auth.refresh_token_types" */
  readonly insertAuthRefreshTokenType?: Maybe<AuthRefreshTokenTypes>;
  /** insert data into the table: "auth.refresh_token_types" */
  readonly insertAuthRefreshTokenTypes?: Maybe<AuthRefreshTokenTypes_Mutation_Response>;
  /** insert data into the table: "auth.refresh_tokens" */
  readonly insertAuthRefreshTokens?: Maybe<AuthRefreshTokens_Mutation_Response>;
  /** insert a single row into the table: "auth.roles" */
  readonly insertAuthRole?: Maybe<AuthRoles>;
  /** insert data into the table: "auth.roles" */
  readonly insertAuthRoles?: Maybe<AuthRoles_Mutation_Response>;
  /** insert a single row into the table: "auth.user_providers" */
  readonly insertAuthUserProvider?: Maybe<AuthUserProviders>;
  /** insert data into the table: "auth.user_providers" */
  readonly insertAuthUserProviders?: Maybe<AuthUserProviders_Mutation_Response>;
  /** insert a single row into the table: "auth.user_roles" */
  readonly insertAuthUserRole?: Maybe<AuthUserRoles>;
  /** insert data into the table: "auth.user_roles" */
  readonly insertAuthUserRoles?: Maybe<AuthUserRoles_Mutation_Response>;
  /** insert a single row into the table: "auth.user_security_keys" */
  readonly insertAuthUserSecurityKey?: Maybe<AuthUserSecurityKeys>;
  /** insert data into the table: "auth.user_security_keys" */
  readonly insertAuthUserSecurityKeys?: Maybe<AuthUserSecurityKeys_Mutation_Response>;
  /** insert a single row into the table: "storage.buckets" */
  readonly insertBucket?: Maybe<Buckets>;
  /** insert data into the table: "storage.buckets" */
  readonly insertBuckets?: Maybe<Buckets_Mutation_Response>;
  /** insert a single row into the table: "storage.files" */
  readonly insertFile?: Maybe<Files>;
  /** insert data into the table: "storage.files" */
  readonly insertFiles?: Maybe<Files_Mutation_Response>;
  /** insert a single row into the table: "auth.users" */
  readonly insertUser?: Maybe<Users>;
  /** insert data into the table: "auth.users" */
  readonly insertUsers?: Maybe<Users_Mutation_Response>;
  /** insert data into the table: "backlog" */
  readonly insert_backlog?: Maybe<Backlog_Mutation_Response>;
  /** insert a single row into the table: "backlog" */
  readonly insert_backlog_one?: Maybe<Backlog>;
  /** insert data into the table: "dayPlanning" */
  readonly insert_dayPlanning?: Maybe<DayPlanning_Mutation_Response>;
  /** insert a single row into the table: "dayPlanning" */
  readonly insert_dayPlanning_one?: Maybe<DayPlanning>;
  /** insert data into the table: "priority" */
  readonly insert_priority?: Maybe<Priority_Mutation_Response>;
  /** insert a single row into the table: "priority" */
  readonly insert_priority_one?: Maybe<Priority>;
  /** insert data into the table: "task" */
  readonly insert_task?: Maybe<Task_Mutation_Response>;
  /** insert data into the table: "taskStatus" */
  readonly insert_taskStatus?: Maybe<TaskStatus_Mutation_Response>;
  /** insert a single row into the table: "taskStatus" */
  readonly insert_taskStatus_one?: Maybe<TaskStatus>;
  /** insert a single row into the table: "task" */
  readonly insert_task_one?: Maybe<Task>;
  /** update single row of the table: "auth.providers" */
  readonly updateAuthProvider?: Maybe<AuthProviders>;
  /** update single row of the table: "auth.provider_requests" */
  readonly updateAuthProviderRequest?: Maybe<AuthProviderRequests>;
  /** update data of the table: "auth.provider_requests" */
  readonly updateAuthProviderRequests?: Maybe<AuthProviderRequests_Mutation_Response>;
  /** update data of the table: "auth.providers" */
  readonly updateAuthProviders?: Maybe<AuthProviders_Mutation_Response>;
  /** update single row of the table: "auth.refresh_tokens" */
  readonly updateAuthRefreshToken?: Maybe<AuthRefreshTokens>;
  /** update single row of the table: "auth.refresh_token_types" */
  readonly updateAuthRefreshTokenType?: Maybe<AuthRefreshTokenTypes>;
  /** update data of the table: "auth.refresh_token_types" */
  readonly updateAuthRefreshTokenTypes?: Maybe<AuthRefreshTokenTypes_Mutation_Response>;
  /** update data of the table: "auth.refresh_tokens" */
  readonly updateAuthRefreshTokens?: Maybe<AuthRefreshTokens_Mutation_Response>;
  /** update single row of the table: "auth.roles" */
  readonly updateAuthRole?: Maybe<AuthRoles>;
  /** update data of the table: "auth.roles" */
  readonly updateAuthRoles?: Maybe<AuthRoles_Mutation_Response>;
  /** update single row of the table: "auth.user_providers" */
  readonly updateAuthUserProvider?: Maybe<AuthUserProviders>;
  /** update data of the table: "auth.user_providers" */
  readonly updateAuthUserProviders?: Maybe<AuthUserProviders_Mutation_Response>;
  /** update single row of the table: "auth.user_roles" */
  readonly updateAuthUserRole?: Maybe<AuthUserRoles>;
  /** update data of the table: "auth.user_roles" */
  readonly updateAuthUserRoles?: Maybe<AuthUserRoles_Mutation_Response>;
  /** update single row of the table: "auth.user_security_keys" */
  readonly updateAuthUserSecurityKey?: Maybe<AuthUserSecurityKeys>;
  /** update data of the table: "auth.user_security_keys" */
  readonly updateAuthUserSecurityKeys?: Maybe<AuthUserSecurityKeys_Mutation_Response>;
  /** update single row of the table: "storage.buckets" */
  readonly updateBucket?: Maybe<Buckets>;
  /** update data of the table: "storage.buckets" */
  readonly updateBuckets?: Maybe<Buckets_Mutation_Response>;
  /** update single row of the table: "storage.files" */
  readonly updateFile?: Maybe<Files>;
  /** update data of the table: "storage.files" */
  readonly updateFiles?: Maybe<Files_Mutation_Response>;
  /** update single row of the table: "auth.users" */
  readonly updateUser?: Maybe<Users>;
  /** update data of the table: "auth.users" */
  readonly updateUsers?: Maybe<Users_Mutation_Response>;
  /** update multiples rows of table: "auth.provider_requests" */
  readonly update_authProviderRequests_many?: Maybe<ReadonlyArray<Maybe<AuthProviderRequests_Mutation_Response>>>;
  /** update multiples rows of table: "auth.providers" */
  readonly update_authProviders_many?: Maybe<ReadonlyArray<Maybe<AuthProviders_Mutation_Response>>>;
  /** update multiples rows of table: "auth.refresh_token_types" */
  readonly update_authRefreshTokenTypes_many?: Maybe<ReadonlyArray<Maybe<AuthRefreshTokenTypes_Mutation_Response>>>;
  /** update multiples rows of table: "auth.refresh_tokens" */
  readonly update_authRefreshTokens_many?: Maybe<ReadonlyArray<Maybe<AuthRefreshTokens_Mutation_Response>>>;
  /** update multiples rows of table: "auth.roles" */
  readonly update_authRoles_many?: Maybe<ReadonlyArray<Maybe<AuthRoles_Mutation_Response>>>;
  /** update multiples rows of table: "auth.user_providers" */
  readonly update_authUserProviders_many?: Maybe<ReadonlyArray<Maybe<AuthUserProviders_Mutation_Response>>>;
  /** update multiples rows of table: "auth.user_roles" */
  readonly update_authUserRoles_many?: Maybe<ReadonlyArray<Maybe<AuthUserRoles_Mutation_Response>>>;
  /** update multiples rows of table: "auth.user_security_keys" */
  readonly update_authUserSecurityKeys_many?: Maybe<ReadonlyArray<Maybe<AuthUserSecurityKeys_Mutation_Response>>>;
  /** update data of the table: "backlog" */
  readonly update_backlog?: Maybe<Backlog_Mutation_Response>;
  /** update single row of the table: "backlog" */
  readonly update_backlog_by_pk?: Maybe<Backlog>;
  /** update multiples rows of table: "backlog" */
  readonly update_backlog_many?: Maybe<ReadonlyArray<Maybe<Backlog_Mutation_Response>>>;
  /** update multiples rows of table: "storage.buckets" */
  readonly update_buckets_many?: Maybe<ReadonlyArray<Maybe<Buckets_Mutation_Response>>>;
  /** update data of the table: "dayPlanning" */
  readonly update_dayPlanning?: Maybe<DayPlanning_Mutation_Response>;
  /** update single row of the table: "dayPlanning" */
  readonly update_dayPlanning_by_pk?: Maybe<DayPlanning>;
  /** update multiples rows of table: "dayPlanning" */
  readonly update_dayPlanning_many?: Maybe<ReadonlyArray<Maybe<DayPlanning_Mutation_Response>>>;
  /** update multiples rows of table: "storage.files" */
  readonly update_files_many?: Maybe<ReadonlyArray<Maybe<Files_Mutation_Response>>>;
  /** update data of the table: "priority" */
  readonly update_priority?: Maybe<Priority_Mutation_Response>;
  /** update single row of the table: "priority" */
  readonly update_priority_by_pk?: Maybe<Priority>;
  /** update multiples rows of table: "priority" */
  readonly update_priority_many?: Maybe<ReadonlyArray<Maybe<Priority_Mutation_Response>>>;
  /** update data of the table: "task" */
  readonly update_task?: Maybe<Task_Mutation_Response>;
  /** update data of the table: "taskStatus" */
  readonly update_taskStatus?: Maybe<TaskStatus_Mutation_Response>;
  /** update single row of the table: "taskStatus" */
  readonly update_taskStatus_by_pk?: Maybe<TaskStatus>;
  /** update multiples rows of table: "taskStatus" */
  readonly update_taskStatus_many?: Maybe<ReadonlyArray<Maybe<TaskStatus_Mutation_Response>>>;
  /** update single row of the table: "task" */
  readonly update_task_by_pk?: Maybe<Task>;
  /** update multiples rows of table: "task" */
  readonly update_task_many?: Maybe<ReadonlyArray<Maybe<Task_Mutation_Response>>>;
  /** update multiples rows of table: "auth.users" */
  readonly update_users_many?: Maybe<ReadonlyArray<Maybe<Users_Mutation_Response>>>;
};


/** mutation root */
export type Mutation_RootDeleteAuthProviderArgs = {
  id: Scalars['String'];
};


/** mutation root */
export type Mutation_RootDeleteAuthProviderRequestArgs = {
  id: Scalars['uuid'];
};


/** mutation root */
export type Mutation_RootDeleteAuthProviderRequestsArgs = {
  where: AuthProviderRequests_Bool_Exp;
};


/** mutation root */
export type Mutation_RootDeleteAuthProvidersArgs = {
  where: AuthProviders_Bool_Exp;
};


/** mutation root */
export type Mutation_RootDeleteAuthRefreshTokenArgs = {
  id: Scalars['uuid'];
};


/** mutation root */
export type Mutation_RootDeleteAuthRefreshTokenTypeArgs = {
  value: Scalars['String'];
};


/** mutation root */
export type Mutation_RootDeleteAuthRefreshTokenTypesArgs = {
  where: AuthRefreshTokenTypes_Bool_Exp;
};


/** mutation root */
export type Mutation_RootDeleteAuthRefreshTokensArgs = {
  where: AuthRefreshTokens_Bool_Exp;
};


/** mutation root */
export type Mutation_RootDeleteAuthRoleArgs = {
  role: Scalars['String'];
};


/** mutation root */
export type Mutation_RootDeleteAuthRolesArgs = {
  where: AuthRoles_Bool_Exp;
};


/** mutation root */
export type Mutation_RootDeleteAuthUserProviderArgs = {
  id: Scalars['uuid'];
};


/** mutation root */
export type Mutation_RootDeleteAuthUserProvidersArgs = {
  where: AuthUserProviders_Bool_Exp;
};


/** mutation root */
export type Mutation_RootDeleteAuthUserRoleArgs = {
  id: Scalars['uuid'];
};


/** mutation root */
export type Mutation_RootDeleteAuthUserRolesArgs = {
  where: AuthUserRoles_Bool_Exp;
};


/** mutation root */
export type Mutation_RootDeleteAuthUserSecurityKeyArgs = {
  id: Scalars['uuid'];
};


/** mutation root */
export type Mutation_RootDeleteAuthUserSecurityKeysArgs = {
  where: AuthUserSecurityKeys_Bool_Exp;
};


/** mutation root */
export type Mutation_RootDeleteBucketArgs = {
  id: Scalars['String'];
};


/** mutation root */
export type Mutation_RootDeleteBucketsArgs = {
  where: Buckets_Bool_Exp;
};


/** mutation root */
export type Mutation_RootDeleteFileArgs = {
  id: Scalars['uuid'];
};


/** mutation root */
export type Mutation_RootDeleteFilesArgs = {
  where: Files_Bool_Exp;
};


/** mutation root */
export type Mutation_RootDeleteUserArgs = {
  id: Scalars['uuid'];
};


/** mutation root */
export type Mutation_RootDeleteUsersArgs = {
  where: Users_Bool_Exp;
};


/** mutation root */
export type Mutation_RootDelete_BacklogArgs = {
  where: Backlog_Bool_Exp;
};


/** mutation root */
export type Mutation_RootDelete_Backlog_By_PkArgs = {
  id: Scalars['uuid'];
};


/** mutation root */
export type Mutation_RootDelete_DayPlanningArgs = {
  where: DayPlanning_Bool_Exp;
};


/** mutation root */
export type Mutation_RootDelete_DayPlanning_By_PkArgs = {
  id: Scalars['uuid'];
};


/** mutation root */
export type Mutation_RootDelete_PriorityArgs = {
  where: Priority_Bool_Exp;
};


/** mutation root */
export type Mutation_RootDelete_Priority_By_PkArgs = {
  value: Scalars['String'];
};


/** mutation root */
export type Mutation_RootDelete_TaskArgs = {
  where: Task_Bool_Exp;
};


/** mutation root */
export type Mutation_RootDelete_TaskStatusArgs = {
  where: TaskStatus_Bool_Exp;
};


/** mutation root */
export type Mutation_RootDelete_TaskStatus_By_PkArgs = {
  value: Scalars['String'];
};


/** mutation root */
export type Mutation_RootDelete_Task_By_PkArgs = {
  id: Scalars['uuid'];
};


/** mutation root */
export type Mutation_RootInsertAuthProviderArgs = {
  object: AuthProviders_Insert_Input;
  on_conflict?: InputMaybe<AuthProviders_On_Conflict>;
};


/** mutation root */
export type Mutation_RootInsertAuthProviderRequestArgs = {
  object: AuthProviderRequests_Insert_Input;
  on_conflict?: InputMaybe<AuthProviderRequests_On_Conflict>;
};


/** mutation root */
export type Mutation_RootInsertAuthProviderRequestsArgs = {
  objects: ReadonlyArray<AuthProviderRequests_Insert_Input>;
  on_conflict?: InputMaybe<AuthProviderRequests_On_Conflict>;
};


/** mutation root */
export type Mutation_RootInsertAuthProvidersArgs = {
  objects: ReadonlyArray<AuthProviders_Insert_Input>;
  on_conflict?: InputMaybe<AuthProviders_On_Conflict>;
};


/** mutation root */
export type Mutation_RootInsertAuthRefreshTokenArgs = {
  object: AuthRefreshTokens_Insert_Input;
  on_conflict?: InputMaybe<AuthRefreshTokens_On_Conflict>;
};


/** mutation root */
export type Mutation_RootInsertAuthRefreshTokenTypeArgs = {
  object: AuthRefreshTokenTypes_Insert_Input;
  on_conflict?: InputMaybe<AuthRefreshTokenTypes_On_Conflict>;
};


/** mutation root */
export type Mutation_RootInsertAuthRefreshTokenTypesArgs = {
  objects: ReadonlyArray<AuthRefreshTokenTypes_Insert_Input>;
  on_conflict?: InputMaybe<AuthRefreshTokenTypes_On_Conflict>;
};


/** mutation root */
export type Mutation_RootInsertAuthRefreshTokensArgs = {
  objects: ReadonlyArray<AuthRefreshTokens_Insert_Input>;
  on_conflict?: InputMaybe<AuthRefreshTokens_On_Conflict>;
};


/** mutation root */
export type Mutation_RootInsertAuthRoleArgs = {
  object: AuthRoles_Insert_Input;
  on_conflict?: InputMaybe<AuthRoles_On_Conflict>;
};


/** mutation root */
export type Mutation_RootInsertAuthRolesArgs = {
  objects: ReadonlyArray<AuthRoles_Insert_Input>;
  on_conflict?: InputMaybe<AuthRoles_On_Conflict>;
};


/** mutation root */
export type Mutation_RootInsertAuthUserProviderArgs = {
  object: AuthUserProviders_Insert_Input;
  on_conflict?: InputMaybe<AuthUserProviders_On_Conflict>;
};


/** mutation root */
export type Mutation_RootInsertAuthUserProvidersArgs = {
  objects: ReadonlyArray<AuthUserProviders_Insert_Input>;
  on_conflict?: InputMaybe<AuthUserProviders_On_Conflict>;
};


/** mutation root */
export type Mutation_RootInsertAuthUserRoleArgs = {
  object: AuthUserRoles_Insert_Input;
  on_conflict?: InputMaybe<AuthUserRoles_On_Conflict>;
};


/** mutation root */
export type Mutation_RootInsertAuthUserRolesArgs = {
  objects: ReadonlyArray<AuthUserRoles_Insert_Input>;
  on_conflict?: InputMaybe<AuthUserRoles_On_Conflict>;
};


/** mutation root */
export type Mutation_RootInsertAuthUserSecurityKeyArgs = {
  object: AuthUserSecurityKeys_Insert_Input;
  on_conflict?: InputMaybe<AuthUserSecurityKeys_On_Conflict>;
};


/** mutation root */
export type Mutation_RootInsertAuthUserSecurityKeysArgs = {
  objects: ReadonlyArray<AuthUserSecurityKeys_Insert_Input>;
  on_conflict?: InputMaybe<AuthUserSecurityKeys_On_Conflict>;
};


/** mutation root */
export type Mutation_RootInsertBucketArgs = {
  object: Buckets_Insert_Input;
  on_conflict?: InputMaybe<Buckets_On_Conflict>;
};


/** mutation root */
export type Mutation_RootInsertBucketsArgs = {
  objects: ReadonlyArray<Buckets_Insert_Input>;
  on_conflict?: InputMaybe<Buckets_On_Conflict>;
};


/** mutation root */
export type Mutation_RootInsertFileArgs = {
  object: Files_Insert_Input;
  on_conflict?: InputMaybe<Files_On_Conflict>;
};


/** mutation root */
export type Mutation_RootInsertFilesArgs = {
  objects: ReadonlyArray<Files_Insert_Input>;
  on_conflict?: InputMaybe<Files_On_Conflict>;
};


/** mutation root */
export type Mutation_RootInsertUserArgs = {
  object: Users_Insert_Input;
  on_conflict?: InputMaybe<Users_On_Conflict>;
};


/** mutation root */
export type Mutation_RootInsertUsersArgs = {
  objects: ReadonlyArray<Users_Insert_Input>;
  on_conflict?: InputMaybe<Users_On_Conflict>;
};


/** mutation root */
export type Mutation_RootInsert_BacklogArgs = {
  objects: ReadonlyArray<Backlog_Insert_Input>;
  on_conflict?: InputMaybe<Backlog_On_Conflict>;
};


/** mutation root */
export type Mutation_RootInsert_Backlog_OneArgs = {
  object: Backlog_Insert_Input;
  on_conflict?: InputMaybe<Backlog_On_Conflict>;
};


/** mutation root */
export type Mutation_RootInsert_DayPlanningArgs = {
  objects: ReadonlyArray<DayPlanning_Insert_Input>;
  on_conflict?: InputMaybe<DayPlanning_On_Conflict>;
};


/** mutation root */
export type Mutation_RootInsert_DayPlanning_OneArgs = {
  object: DayPlanning_Insert_Input;
  on_conflict?: InputMaybe<DayPlanning_On_Conflict>;
};


/** mutation root */
export type Mutation_RootInsert_PriorityArgs = {
  objects: ReadonlyArray<Priority_Insert_Input>;
  on_conflict?: InputMaybe<Priority_On_Conflict>;
};


/** mutation root */
export type Mutation_RootInsert_Priority_OneArgs = {
  object: Priority_Insert_Input;
  on_conflict?: InputMaybe<Priority_On_Conflict>;
};


/** mutation root */
export type Mutation_RootInsert_TaskArgs = {
  objects: ReadonlyArray<Task_Insert_Input>;
  on_conflict?: InputMaybe<Task_On_Conflict>;
};


/** mutation root */
export type Mutation_RootInsert_TaskStatusArgs = {
  objects: ReadonlyArray<TaskStatus_Insert_Input>;
  on_conflict?: InputMaybe<TaskStatus_On_Conflict>;
};


/** mutation root */
export type Mutation_RootInsert_TaskStatus_OneArgs = {
  object: TaskStatus_Insert_Input;
  on_conflict?: InputMaybe<TaskStatus_On_Conflict>;
};


/** mutation root */
export type Mutation_RootInsert_Task_OneArgs = {
  object: Task_Insert_Input;
  on_conflict?: InputMaybe<Task_On_Conflict>;
};


/** mutation root */
export type Mutation_RootUpdateAuthProviderArgs = {
  _set?: InputMaybe<AuthProviders_Set_Input>;
  pk_columns: AuthProviders_Pk_Columns_Input;
};


/** mutation root */
export type Mutation_RootUpdateAuthProviderRequestArgs = {
  _append?: InputMaybe<AuthProviderRequests_Append_Input>;
  _delete_at_path?: InputMaybe<AuthProviderRequests_Delete_At_Path_Input>;
  _delete_elem?: InputMaybe<AuthProviderRequests_Delete_Elem_Input>;
  _delete_key?: InputMaybe<AuthProviderRequests_Delete_Key_Input>;
  _prepend?: InputMaybe<AuthProviderRequests_Prepend_Input>;
  _set?: InputMaybe<AuthProviderRequests_Set_Input>;
  pk_columns: AuthProviderRequests_Pk_Columns_Input;
};


/** mutation root */
export type Mutation_RootUpdateAuthProviderRequestsArgs = {
  _append?: InputMaybe<AuthProviderRequests_Append_Input>;
  _delete_at_path?: InputMaybe<AuthProviderRequests_Delete_At_Path_Input>;
  _delete_elem?: InputMaybe<AuthProviderRequests_Delete_Elem_Input>;
  _delete_key?: InputMaybe<AuthProviderRequests_Delete_Key_Input>;
  _prepend?: InputMaybe<AuthProviderRequests_Prepend_Input>;
  _set?: InputMaybe<AuthProviderRequests_Set_Input>;
  where: AuthProviderRequests_Bool_Exp;
};


/** mutation root */
export type Mutation_RootUpdateAuthProvidersArgs = {
  _set?: InputMaybe<AuthProviders_Set_Input>;
  where: AuthProviders_Bool_Exp;
};


/** mutation root */
export type Mutation_RootUpdateAuthRefreshTokenArgs = {
  _append?: InputMaybe<AuthRefreshTokens_Append_Input>;
  _delete_at_path?: InputMaybe<AuthRefreshTokens_Delete_At_Path_Input>;
  _delete_elem?: InputMaybe<AuthRefreshTokens_Delete_Elem_Input>;
  _delete_key?: InputMaybe<AuthRefreshTokens_Delete_Key_Input>;
  _prepend?: InputMaybe<AuthRefreshTokens_Prepend_Input>;
  _set?: InputMaybe<AuthRefreshTokens_Set_Input>;
  pk_columns: AuthRefreshTokens_Pk_Columns_Input;
};


/** mutation root */
export type Mutation_RootUpdateAuthRefreshTokenTypeArgs = {
  _set?: InputMaybe<AuthRefreshTokenTypes_Set_Input>;
  pk_columns: AuthRefreshTokenTypes_Pk_Columns_Input;
};


/** mutation root */
export type Mutation_RootUpdateAuthRefreshTokenTypesArgs = {
  _set?: InputMaybe<AuthRefreshTokenTypes_Set_Input>;
  where: AuthRefreshTokenTypes_Bool_Exp;
};


/** mutation root */
export type Mutation_RootUpdateAuthRefreshTokensArgs = {
  _append?: InputMaybe<AuthRefreshTokens_Append_Input>;
  _delete_at_path?: InputMaybe<AuthRefreshTokens_Delete_At_Path_Input>;
  _delete_elem?: InputMaybe<AuthRefreshTokens_Delete_Elem_Input>;
  _delete_key?: InputMaybe<AuthRefreshTokens_Delete_Key_Input>;
  _prepend?: InputMaybe<AuthRefreshTokens_Prepend_Input>;
  _set?: InputMaybe<AuthRefreshTokens_Set_Input>;
  where: AuthRefreshTokens_Bool_Exp;
};


/** mutation root */
export type Mutation_RootUpdateAuthRoleArgs = {
  _set?: InputMaybe<AuthRoles_Set_Input>;
  pk_columns: AuthRoles_Pk_Columns_Input;
};


/** mutation root */
export type Mutation_RootUpdateAuthRolesArgs = {
  _set?: InputMaybe<AuthRoles_Set_Input>;
  where: AuthRoles_Bool_Exp;
};


/** mutation root */
export type Mutation_RootUpdateAuthUserProviderArgs = {
  _set?: InputMaybe<AuthUserProviders_Set_Input>;
  pk_columns: AuthUserProviders_Pk_Columns_Input;
};


/** mutation root */
export type Mutation_RootUpdateAuthUserProvidersArgs = {
  _set?: InputMaybe<AuthUserProviders_Set_Input>;
  where: AuthUserProviders_Bool_Exp;
};


/** mutation root */
export type Mutation_RootUpdateAuthUserRoleArgs = {
  _set?: InputMaybe<AuthUserRoles_Set_Input>;
  pk_columns: AuthUserRoles_Pk_Columns_Input;
};


/** mutation root */
export type Mutation_RootUpdateAuthUserRolesArgs = {
  _set?: InputMaybe<AuthUserRoles_Set_Input>;
  where: AuthUserRoles_Bool_Exp;
};


/** mutation root */
export type Mutation_RootUpdateAuthUserSecurityKeyArgs = {
  _inc?: InputMaybe<AuthUserSecurityKeys_Inc_Input>;
  _set?: InputMaybe<AuthUserSecurityKeys_Set_Input>;
  pk_columns: AuthUserSecurityKeys_Pk_Columns_Input;
};


/** mutation root */
export type Mutation_RootUpdateAuthUserSecurityKeysArgs = {
  _inc?: InputMaybe<AuthUserSecurityKeys_Inc_Input>;
  _set?: InputMaybe<AuthUserSecurityKeys_Set_Input>;
  where: AuthUserSecurityKeys_Bool_Exp;
};


/** mutation root */
export type Mutation_RootUpdateBucketArgs = {
  _inc?: InputMaybe<Buckets_Inc_Input>;
  _set?: InputMaybe<Buckets_Set_Input>;
  pk_columns: Buckets_Pk_Columns_Input;
};


/** mutation root */
export type Mutation_RootUpdateBucketsArgs = {
  _inc?: InputMaybe<Buckets_Inc_Input>;
  _set?: InputMaybe<Buckets_Set_Input>;
  where: Buckets_Bool_Exp;
};


/** mutation root */
export type Mutation_RootUpdateFileArgs = {
  _inc?: InputMaybe<Files_Inc_Input>;
  _set?: InputMaybe<Files_Set_Input>;
  pk_columns: Files_Pk_Columns_Input;
};


/** mutation root */
export type Mutation_RootUpdateFilesArgs = {
  _inc?: InputMaybe<Files_Inc_Input>;
  _set?: InputMaybe<Files_Set_Input>;
  where: Files_Bool_Exp;
};


/** mutation root */
export type Mutation_RootUpdateUserArgs = {
  _append?: InputMaybe<Users_Append_Input>;
  _delete_at_path?: InputMaybe<Users_Delete_At_Path_Input>;
  _delete_elem?: InputMaybe<Users_Delete_Elem_Input>;
  _delete_key?: InputMaybe<Users_Delete_Key_Input>;
  _prepend?: InputMaybe<Users_Prepend_Input>;
  _set?: InputMaybe<Users_Set_Input>;
  pk_columns: Users_Pk_Columns_Input;
};


/** mutation root */
export type Mutation_RootUpdateUsersArgs = {
  _append?: InputMaybe<Users_Append_Input>;
  _delete_at_path?: InputMaybe<Users_Delete_At_Path_Input>;
  _delete_elem?: InputMaybe<Users_Delete_Elem_Input>;
  _delete_key?: InputMaybe<Users_Delete_Key_Input>;
  _prepend?: InputMaybe<Users_Prepend_Input>;
  _set?: InputMaybe<Users_Set_Input>;
  where: Users_Bool_Exp;
};


/** mutation root */
export type Mutation_RootUpdate_AuthProviderRequests_ManyArgs = {
  updates: ReadonlyArray<AuthProviderRequests_Updates>;
};


/** mutation root */
export type Mutation_RootUpdate_AuthProviders_ManyArgs = {
  updates: ReadonlyArray<AuthProviders_Updates>;
};


/** mutation root */
export type Mutation_RootUpdate_AuthRefreshTokenTypes_ManyArgs = {
  updates: ReadonlyArray<AuthRefreshTokenTypes_Updates>;
};


/** mutation root */
export type Mutation_RootUpdate_AuthRefreshTokens_ManyArgs = {
  updates: ReadonlyArray<AuthRefreshTokens_Updates>;
};


/** mutation root */
export type Mutation_RootUpdate_AuthRoles_ManyArgs = {
  updates: ReadonlyArray<AuthRoles_Updates>;
};


/** mutation root */
export type Mutation_RootUpdate_AuthUserProviders_ManyArgs = {
  updates: ReadonlyArray<AuthUserProviders_Updates>;
};


/** mutation root */
export type Mutation_RootUpdate_AuthUserRoles_ManyArgs = {
  updates: ReadonlyArray<AuthUserRoles_Updates>;
};


/** mutation root */
export type Mutation_RootUpdate_AuthUserSecurityKeys_ManyArgs = {
  updates: ReadonlyArray<AuthUserSecurityKeys_Updates>;
};


/** mutation root */
export type Mutation_RootUpdate_BacklogArgs = {
  _set?: InputMaybe<Backlog_Set_Input>;
  where: Backlog_Bool_Exp;
};


/** mutation root */
export type Mutation_RootUpdate_Backlog_By_PkArgs = {
  _set?: InputMaybe<Backlog_Set_Input>;
  pk_columns: Backlog_Pk_Columns_Input;
};


/** mutation root */
export type Mutation_RootUpdate_Backlog_ManyArgs = {
  updates: ReadonlyArray<Backlog_Updates>;
};


/** mutation root */
export type Mutation_RootUpdate_Buckets_ManyArgs = {
  updates: ReadonlyArray<Buckets_Updates>;
};


/** mutation root */
export type Mutation_RootUpdate_DayPlanningArgs = {
  _set?: InputMaybe<DayPlanning_Set_Input>;
  where: DayPlanning_Bool_Exp;
};


/** mutation root */
export type Mutation_RootUpdate_DayPlanning_By_PkArgs = {
  _set?: InputMaybe<DayPlanning_Set_Input>;
  pk_columns: DayPlanning_Pk_Columns_Input;
};


/** mutation root */
export type Mutation_RootUpdate_DayPlanning_ManyArgs = {
  updates: ReadonlyArray<DayPlanning_Updates>;
};


/** mutation root */
export type Mutation_RootUpdate_Files_ManyArgs = {
  updates: ReadonlyArray<Files_Updates>;
};


/** mutation root */
export type Mutation_RootUpdate_PriorityArgs = {
  _set?: InputMaybe<Priority_Set_Input>;
  where: Priority_Bool_Exp;
};


/** mutation root */
export type Mutation_RootUpdate_Priority_By_PkArgs = {
  _set?: InputMaybe<Priority_Set_Input>;
  pk_columns: Priority_Pk_Columns_Input;
};


/** mutation root */
export type Mutation_RootUpdate_Priority_ManyArgs = {
  updates: ReadonlyArray<Priority_Updates>;
};


/** mutation root */
export type Mutation_RootUpdate_TaskArgs = {
  _set?: InputMaybe<Task_Set_Input>;
  where: Task_Bool_Exp;
};


/** mutation root */
export type Mutation_RootUpdate_TaskStatusArgs = {
  _set?: InputMaybe<TaskStatus_Set_Input>;
  where: TaskStatus_Bool_Exp;
};


/** mutation root */
export type Mutation_RootUpdate_TaskStatus_By_PkArgs = {
  _set?: InputMaybe<TaskStatus_Set_Input>;
  pk_columns: TaskStatus_Pk_Columns_Input;
};


/** mutation root */
export type Mutation_RootUpdate_TaskStatus_ManyArgs = {
  updates: ReadonlyArray<TaskStatus_Updates>;
};


/** mutation root */
export type Mutation_RootUpdate_Task_By_PkArgs = {
  _set?: InputMaybe<Task_Set_Input>;
  pk_columns: Task_Pk_Columns_Input;
};


/** mutation root */
export type Mutation_RootUpdate_Task_ManyArgs = {
  updates: ReadonlyArray<Task_Updates>;
};


/** mutation root */
export type Mutation_RootUpdate_Users_ManyArgs = {
  updates: ReadonlyArray<Users_Updates>;
};

/** column ordering options */
export type Order_By =
  /** in ascending order, nulls last */
  | 'asc'
  /** in ascending order, nulls first */
  | 'asc_nulls_first'
  /** in ascending order, nulls last */
  | 'asc_nulls_last'
  /** in descending order, nulls first */
  | 'desc'
  /** in descending order, nulls first */
  | 'desc_nulls_first'
  /** in descending order, nulls last */
  | 'desc_nulls_last';

/** columns and relationships of "priority" */
export type Priority = {
  readonly __typename?: 'priority';
  readonly value: Scalars['String'];
};

/** aggregated selection of "priority" */
export type Priority_Aggregate = {
  readonly __typename?: 'priority_aggregate';
  readonly aggregate?: Maybe<Priority_Aggregate_Fields>;
  readonly nodes: ReadonlyArray<Priority>;
};

/** aggregate fields of "priority" */
export type Priority_Aggregate_Fields = {
  readonly __typename?: 'priority_aggregate_fields';
  readonly count: Scalars['Int'];
  readonly max?: Maybe<Priority_Max_Fields>;
  readonly min?: Maybe<Priority_Min_Fields>;
};


/** aggregate fields of "priority" */
export type Priority_Aggregate_FieldsCountArgs = {
  columns?: InputMaybe<ReadonlyArray<Priority_Select_Column>>;
  distinct?: InputMaybe<Scalars['Boolean']>;
};

/** Boolean expression to filter rows from the table "priority". All fields are combined with a logical 'AND'. */
export type Priority_Bool_Exp = {
  readonly _and?: InputMaybe<ReadonlyArray<Priority_Bool_Exp>>;
  readonly _not?: InputMaybe<Priority_Bool_Exp>;
  readonly _or?: InputMaybe<ReadonlyArray<Priority_Bool_Exp>>;
  readonly value?: InputMaybe<String_Comparison_Exp>;
};

/** unique or primary key constraints on table "priority" */
export type Priority_Constraint =
  /** unique or primary key constraint on columns "value" */
  | 'priority_pkey';

export type Priority_Enum =
  | 'high'
  | 'low'
  | 'medium';

/** Boolean expression to compare columns of type "priority_enum". All fields are combined with logical 'AND'. */
export type Priority_Enum_Comparison_Exp = {
  readonly _eq?: InputMaybe<Priority_Enum>;
  readonly _in?: InputMaybe<ReadonlyArray<Priority_Enum>>;
  readonly _is_null?: InputMaybe<Scalars['Boolean']>;
  readonly _neq?: InputMaybe<Priority_Enum>;
  readonly _nin?: InputMaybe<ReadonlyArray<Priority_Enum>>;
};

/** input type for inserting data into table "priority" */
export type Priority_Insert_Input = {
  readonly value?: InputMaybe<Scalars['String']>;
};

/** aggregate max on columns */
export type Priority_Max_Fields = {
  readonly __typename?: 'priority_max_fields';
  readonly value?: Maybe<Scalars['String']>;
};

/** aggregate min on columns */
export type Priority_Min_Fields = {
  readonly __typename?: 'priority_min_fields';
  readonly value?: Maybe<Scalars['String']>;
};

/** response of any mutation on the table "priority" */
export type Priority_Mutation_Response = {
  readonly __typename?: 'priority_mutation_response';
  /** number of rows affected by the mutation */
  readonly affected_rows: Scalars['Int'];
  /** data from the rows affected by the mutation */
  readonly returning: ReadonlyArray<Priority>;
};

/** on_conflict condition type for table "priority" */
export type Priority_On_Conflict = {
  readonly constraint: Priority_Constraint;
  readonly update_columns?: ReadonlyArray<Priority_Update_Column>;
  readonly where?: InputMaybe<Priority_Bool_Exp>;
};

/** Ordering options when selecting data from "priority". */
export type Priority_Order_By = {
  readonly value?: InputMaybe<Order_By>;
};

/** primary key columns input for table: priority */
export type Priority_Pk_Columns_Input = {
  readonly value: Scalars['String'];
};

/** select columns of table "priority" */
export type Priority_Select_Column =
  /** column name */
  | 'value';

/** input type for updating data in table "priority" */
export type Priority_Set_Input = {
  readonly value?: InputMaybe<Scalars['String']>;
};

/** Streaming cursor of the table "priority" */
export type Priority_Stream_Cursor_Input = {
  /** Stream column input with initial value */
  readonly initial_value: Priority_Stream_Cursor_Value_Input;
  /** cursor ordering */
  readonly ordering?: InputMaybe<Cursor_Ordering>;
};

/** Initial value of the column from where the streaming should start */
export type Priority_Stream_Cursor_Value_Input = {
  readonly value?: InputMaybe<Scalars['String']>;
};

/** update columns of table "priority" */
export type Priority_Update_Column =
  /** column name */
  | 'value';

export type Priority_Updates = {
  /** sets the columns of the filtered rows to the given values */
  readonly _set?: InputMaybe<Priority_Set_Input>;
  /** filter the rows which have to be updated */
  readonly where: Priority_Bool_Exp;
};

export type Query_Root = {
  readonly __typename?: 'query_root';
  /** fetch data from the table: "auth.providers" using primary key columns */
  readonly authProvider?: Maybe<AuthProviders>;
  /** fetch data from the table: "auth.provider_requests" using primary key columns */
  readonly authProviderRequest?: Maybe<AuthProviderRequests>;
  /** fetch data from the table: "auth.provider_requests" */
  readonly authProviderRequests: ReadonlyArray<AuthProviderRequests>;
  /** fetch aggregated fields from the table: "auth.provider_requests" */
  readonly authProviderRequestsAggregate: AuthProviderRequests_Aggregate;
  /** fetch data from the table: "auth.providers" */
  readonly authProviders: ReadonlyArray<AuthProviders>;
  /** fetch aggregated fields from the table: "auth.providers" */
  readonly authProvidersAggregate: AuthProviders_Aggregate;
  /** fetch data from the table: "auth.refresh_tokens" using primary key columns */
  readonly authRefreshToken?: Maybe<AuthRefreshTokens>;
  /** fetch data from the table: "auth.refresh_token_types" using primary key columns */
  readonly authRefreshTokenType?: Maybe<AuthRefreshTokenTypes>;
  /** fetch data from the table: "auth.refresh_token_types" */
  readonly authRefreshTokenTypes: ReadonlyArray<AuthRefreshTokenTypes>;
  /** fetch aggregated fields from the table: "auth.refresh_token_types" */
  readonly authRefreshTokenTypesAggregate: AuthRefreshTokenTypes_Aggregate;
  /** fetch data from the table: "auth.refresh_tokens" */
  readonly authRefreshTokens: ReadonlyArray<AuthRefreshTokens>;
  /** fetch aggregated fields from the table: "auth.refresh_tokens" */
  readonly authRefreshTokensAggregate: AuthRefreshTokens_Aggregate;
  /** fetch data from the table: "auth.roles" using primary key columns */
  readonly authRole?: Maybe<AuthRoles>;
  /** fetch data from the table: "auth.roles" */
  readonly authRoles: ReadonlyArray<AuthRoles>;
  /** fetch aggregated fields from the table: "auth.roles" */
  readonly authRolesAggregate: AuthRoles_Aggregate;
  /** fetch data from the table: "auth.user_providers" using primary key columns */
  readonly authUserProvider?: Maybe<AuthUserProviders>;
  /** fetch data from the table: "auth.user_providers" */
  readonly authUserProviders: ReadonlyArray<AuthUserProviders>;
  /** fetch aggregated fields from the table: "auth.user_providers" */
  readonly authUserProvidersAggregate: AuthUserProviders_Aggregate;
  /** fetch data from the table: "auth.user_roles" using primary key columns */
  readonly authUserRole?: Maybe<AuthUserRoles>;
  /** fetch data from the table: "auth.user_roles" */
  readonly authUserRoles: ReadonlyArray<AuthUserRoles>;
  /** fetch aggregated fields from the table: "auth.user_roles" */
  readonly authUserRolesAggregate: AuthUserRoles_Aggregate;
  /** fetch data from the table: "auth.user_security_keys" using primary key columns */
  readonly authUserSecurityKey?: Maybe<AuthUserSecurityKeys>;
  /** fetch data from the table: "auth.user_security_keys" */
  readonly authUserSecurityKeys: ReadonlyArray<AuthUserSecurityKeys>;
  /** fetch aggregated fields from the table: "auth.user_security_keys" */
  readonly authUserSecurityKeysAggregate: AuthUserSecurityKeys_Aggregate;
  /** fetch data from the table: "backlog" */
  readonly backlog: ReadonlyArray<Backlog>;
  /** fetch aggregated fields from the table: "backlog" */
  readonly backlog_aggregate: Backlog_Aggregate;
  /** fetch data from the table: "backlog" using primary key columns */
  readonly backlog_by_pk?: Maybe<Backlog>;
  /** fetch data from the table: "storage.buckets" using primary key columns */
  readonly bucket?: Maybe<Buckets>;
  /** fetch data from the table: "storage.buckets" */
  readonly buckets: ReadonlyArray<Buckets>;
  /** fetch aggregated fields from the table: "storage.buckets" */
  readonly bucketsAggregate: Buckets_Aggregate;
  /** fetch data from the table: "dayPlanning" */
  readonly dayPlanning: ReadonlyArray<DayPlanning>;
  /** fetch aggregated fields from the table: "dayPlanning" */
  readonly dayPlanning_aggregate: DayPlanning_Aggregate;
  /** fetch data from the table: "dayPlanning" using primary key columns */
  readonly dayPlanning_by_pk?: Maybe<DayPlanning>;
  /** fetch data from the table: "storage.files" using primary key columns */
  readonly file?: Maybe<Files>;
  /** An array relationship */
  readonly files: ReadonlyArray<Files>;
  /** fetch aggregated fields from the table: "storage.files" */
  readonly filesAggregate: Files_Aggregate;
  /** fetch data from the table: "priority" */
  readonly priority: ReadonlyArray<Priority>;
  /** fetch aggregated fields from the table: "priority" */
  readonly priority_aggregate: Priority_Aggregate;
  /** fetch data from the table: "priority" using primary key columns */
  readonly priority_by_pk?: Maybe<Priority>;
  /** fetch data from the table: "task" */
  readonly task: ReadonlyArray<Task>;
  /** fetch data from the table: "taskStatus" */
  readonly taskStatus: ReadonlyArray<TaskStatus>;
  /** fetch aggregated fields from the table: "taskStatus" */
  readonly taskStatus_aggregate: TaskStatus_Aggregate;
  /** fetch data from the table: "taskStatus" using primary key columns */
  readonly taskStatus_by_pk?: Maybe<TaskStatus>;
  /** fetch aggregated fields from the table: "task" */
  readonly task_aggregate: Task_Aggregate;
  /** fetch data from the table: "task" using primary key columns */
  readonly task_by_pk?: Maybe<Task>;
  /** fetch data from the table: "auth.users" using primary key columns */
  readonly user?: Maybe<Users>;
  /** fetch data from the table: "auth.users" */
  readonly users: ReadonlyArray<Users>;
  /** fetch aggregated fields from the table: "auth.users" */
  readonly usersAggregate: Users_Aggregate;
};


export type Query_RootAuthProviderArgs = {
  id: Scalars['String'];
};


export type Query_RootAuthProviderRequestArgs = {
  id: Scalars['uuid'];
};


export type Query_RootAuthProviderRequestsArgs = {
  distinct_on?: InputMaybe<ReadonlyArray<AuthProviderRequests_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<ReadonlyArray<AuthProviderRequests_Order_By>>;
  where?: InputMaybe<AuthProviderRequests_Bool_Exp>;
};


export type Query_RootAuthProviderRequestsAggregateArgs = {
  distinct_on?: InputMaybe<ReadonlyArray<AuthProviderRequests_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<ReadonlyArray<AuthProviderRequests_Order_By>>;
  where?: InputMaybe<AuthProviderRequests_Bool_Exp>;
};


export type Query_RootAuthProvidersArgs = {
  distinct_on?: InputMaybe<ReadonlyArray<AuthProviders_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<ReadonlyArray<AuthProviders_Order_By>>;
  where?: InputMaybe<AuthProviders_Bool_Exp>;
};


export type Query_RootAuthProvidersAggregateArgs = {
  distinct_on?: InputMaybe<ReadonlyArray<AuthProviders_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<ReadonlyArray<AuthProviders_Order_By>>;
  where?: InputMaybe<AuthProviders_Bool_Exp>;
};


export type Query_RootAuthRefreshTokenArgs = {
  id: Scalars['uuid'];
};


export type Query_RootAuthRefreshTokenTypeArgs = {
  value: Scalars['String'];
};


export type Query_RootAuthRefreshTokenTypesArgs = {
  distinct_on?: InputMaybe<ReadonlyArray<AuthRefreshTokenTypes_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<ReadonlyArray<AuthRefreshTokenTypes_Order_By>>;
  where?: InputMaybe<AuthRefreshTokenTypes_Bool_Exp>;
};


export type Query_RootAuthRefreshTokenTypesAggregateArgs = {
  distinct_on?: InputMaybe<ReadonlyArray<AuthRefreshTokenTypes_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<ReadonlyArray<AuthRefreshTokenTypes_Order_By>>;
  where?: InputMaybe<AuthRefreshTokenTypes_Bool_Exp>;
};


export type Query_RootAuthRefreshTokensArgs = {
  distinct_on?: InputMaybe<ReadonlyArray<AuthRefreshTokens_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<ReadonlyArray<AuthRefreshTokens_Order_By>>;
  where?: InputMaybe<AuthRefreshTokens_Bool_Exp>;
};


export type Query_RootAuthRefreshTokensAggregateArgs = {
  distinct_on?: InputMaybe<ReadonlyArray<AuthRefreshTokens_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<ReadonlyArray<AuthRefreshTokens_Order_By>>;
  where?: InputMaybe<AuthRefreshTokens_Bool_Exp>;
};


export type Query_RootAuthRoleArgs = {
  role: Scalars['String'];
};


export type Query_RootAuthRolesArgs = {
  distinct_on?: InputMaybe<ReadonlyArray<AuthRoles_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<ReadonlyArray<AuthRoles_Order_By>>;
  where?: InputMaybe<AuthRoles_Bool_Exp>;
};


export type Query_RootAuthRolesAggregateArgs = {
  distinct_on?: InputMaybe<ReadonlyArray<AuthRoles_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<ReadonlyArray<AuthRoles_Order_By>>;
  where?: InputMaybe<AuthRoles_Bool_Exp>;
};


export type Query_RootAuthUserProviderArgs = {
  id: Scalars['uuid'];
};


export type Query_RootAuthUserProvidersArgs = {
  distinct_on?: InputMaybe<ReadonlyArray<AuthUserProviders_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<ReadonlyArray<AuthUserProviders_Order_By>>;
  where?: InputMaybe<AuthUserProviders_Bool_Exp>;
};


export type Query_RootAuthUserProvidersAggregateArgs = {
  distinct_on?: InputMaybe<ReadonlyArray<AuthUserProviders_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<ReadonlyArray<AuthUserProviders_Order_By>>;
  where?: InputMaybe<AuthUserProviders_Bool_Exp>;
};


export type Query_RootAuthUserRoleArgs = {
  id: Scalars['uuid'];
};


export type Query_RootAuthUserRolesArgs = {
  distinct_on?: InputMaybe<ReadonlyArray<AuthUserRoles_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<ReadonlyArray<AuthUserRoles_Order_By>>;
  where?: InputMaybe<AuthUserRoles_Bool_Exp>;
};


export type Query_RootAuthUserRolesAggregateArgs = {
  distinct_on?: InputMaybe<ReadonlyArray<AuthUserRoles_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<ReadonlyArray<AuthUserRoles_Order_By>>;
  where?: InputMaybe<AuthUserRoles_Bool_Exp>;
};


export type Query_RootAuthUserSecurityKeyArgs = {
  id: Scalars['uuid'];
};


export type Query_RootAuthUserSecurityKeysArgs = {
  distinct_on?: InputMaybe<ReadonlyArray<AuthUserSecurityKeys_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<ReadonlyArray<AuthUserSecurityKeys_Order_By>>;
  where?: InputMaybe<AuthUserSecurityKeys_Bool_Exp>;
};


export type Query_RootAuthUserSecurityKeysAggregateArgs = {
  distinct_on?: InputMaybe<ReadonlyArray<AuthUserSecurityKeys_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<ReadonlyArray<AuthUserSecurityKeys_Order_By>>;
  where?: InputMaybe<AuthUserSecurityKeys_Bool_Exp>;
};


export type Query_RootBacklogArgs = {
  distinct_on?: InputMaybe<ReadonlyArray<Backlog_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<ReadonlyArray<Backlog_Order_By>>;
  where?: InputMaybe<Backlog_Bool_Exp>;
};


export type Query_RootBacklog_AggregateArgs = {
  distinct_on?: InputMaybe<ReadonlyArray<Backlog_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<ReadonlyArray<Backlog_Order_By>>;
  where?: InputMaybe<Backlog_Bool_Exp>;
};


export type Query_RootBacklog_By_PkArgs = {
  id: Scalars['uuid'];
};


export type Query_RootBucketArgs = {
  id: Scalars['String'];
};


export type Query_RootBucketsArgs = {
  distinct_on?: InputMaybe<ReadonlyArray<Buckets_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<ReadonlyArray<Buckets_Order_By>>;
  where?: InputMaybe<Buckets_Bool_Exp>;
};


export type Query_RootBucketsAggregateArgs = {
  distinct_on?: InputMaybe<ReadonlyArray<Buckets_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<ReadonlyArray<Buckets_Order_By>>;
  where?: InputMaybe<Buckets_Bool_Exp>;
};


export type Query_RootDayPlanningArgs = {
  distinct_on?: InputMaybe<ReadonlyArray<DayPlanning_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<ReadonlyArray<DayPlanning_Order_By>>;
  where?: InputMaybe<DayPlanning_Bool_Exp>;
};


export type Query_RootDayPlanning_AggregateArgs = {
  distinct_on?: InputMaybe<ReadonlyArray<DayPlanning_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<ReadonlyArray<DayPlanning_Order_By>>;
  where?: InputMaybe<DayPlanning_Bool_Exp>;
};


export type Query_RootDayPlanning_By_PkArgs = {
  id: Scalars['uuid'];
};


export type Query_RootFileArgs = {
  id: Scalars['uuid'];
};


export type Query_RootFilesArgs = {
  distinct_on?: InputMaybe<ReadonlyArray<Files_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<ReadonlyArray<Files_Order_By>>;
  where?: InputMaybe<Files_Bool_Exp>;
};


export type Query_RootFilesAggregateArgs = {
  distinct_on?: InputMaybe<ReadonlyArray<Files_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<ReadonlyArray<Files_Order_By>>;
  where?: InputMaybe<Files_Bool_Exp>;
};


export type Query_RootPriorityArgs = {
  distinct_on?: InputMaybe<ReadonlyArray<Priority_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<ReadonlyArray<Priority_Order_By>>;
  where?: InputMaybe<Priority_Bool_Exp>;
};


export type Query_RootPriority_AggregateArgs = {
  distinct_on?: InputMaybe<ReadonlyArray<Priority_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<ReadonlyArray<Priority_Order_By>>;
  where?: InputMaybe<Priority_Bool_Exp>;
};


export type Query_RootPriority_By_PkArgs = {
  value: Scalars['String'];
};


export type Query_RootTaskArgs = {
  distinct_on?: InputMaybe<ReadonlyArray<Task_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<ReadonlyArray<Task_Order_By>>;
  where?: InputMaybe<Task_Bool_Exp>;
};


export type Query_RootTaskStatusArgs = {
  distinct_on?: InputMaybe<ReadonlyArray<TaskStatus_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<ReadonlyArray<TaskStatus_Order_By>>;
  where?: InputMaybe<TaskStatus_Bool_Exp>;
};


export type Query_RootTaskStatus_AggregateArgs = {
  distinct_on?: InputMaybe<ReadonlyArray<TaskStatus_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<ReadonlyArray<TaskStatus_Order_By>>;
  where?: InputMaybe<TaskStatus_Bool_Exp>;
};


export type Query_RootTaskStatus_By_PkArgs = {
  value: Scalars['String'];
};


export type Query_RootTask_AggregateArgs = {
  distinct_on?: InputMaybe<ReadonlyArray<Task_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<ReadonlyArray<Task_Order_By>>;
  where?: InputMaybe<Task_Bool_Exp>;
};


export type Query_RootTask_By_PkArgs = {
  id: Scalars['uuid'];
};


export type Query_RootUserArgs = {
  id: Scalars['uuid'];
};


export type Query_RootUsersArgs = {
  distinct_on?: InputMaybe<ReadonlyArray<Users_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<ReadonlyArray<Users_Order_By>>;
  where?: InputMaybe<Users_Bool_Exp>;
};


export type Query_RootUsersAggregateArgs = {
  distinct_on?: InputMaybe<ReadonlyArray<Users_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<ReadonlyArray<Users_Order_By>>;
  where?: InputMaybe<Users_Bool_Exp>;
};

export type Subscription_Root = {
  readonly __typename?: 'subscription_root';
  /** fetch data from the table: "auth.providers" using primary key columns */
  readonly authProvider?: Maybe<AuthProviders>;
  /** fetch data from the table: "auth.provider_requests" using primary key columns */
  readonly authProviderRequest?: Maybe<AuthProviderRequests>;
  /** fetch data from the table: "auth.provider_requests" */
  readonly authProviderRequests: ReadonlyArray<AuthProviderRequests>;
  /** fetch aggregated fields from the table: "auth.provider_requests" */
  readonly authProviderRequestsAggregate: AuthProviderRequests_Aggregate;
  /** fetch data from the table in a streaming manner: "auth.provider_requests" */
  readonly authProviderRequests_stream: ReadonlyArray<AuthProviderRequests>;
  /** fetch data from the table: "auth.providers" */
  readonly authProviders: ReadonlyArray<AuthProviders>;
  /** fetch aggregated fields from the table: "auth.providers" */
  readonly authProvidersAggregate: AuthProviders_Aggregate;
  /** fetch data from the table in a streaming manner: "auth.providers" */
  readonly authProviders_stream: ReadonlyArray<AuthProviders>;
  /** fetch data from the table: "auth.refresh_tokens" using primary key columns */
  readonly authRefreshToken?: Maybe<AuthRefreshTokens>;
  /** fetch data from the table: "auth.refresh_token_types" using primary key columns */
  readonly authRefreshTokenType?: Maybe<AuthRefreshTokenTypes>;
  /** fetch data from the table: "auth.refresh_token_types" */
  readonly authRefreshTokenTypes: ReadonlyArray<AuthRefreshTokenTypes>;
  /** fetch aggregated fields from the table: "auth.refresh_token_types" */
  readonly authRefreshTokenTypesAggregate: AuthRefreshTokenTypes_Aggregate;
  /** fetch data from the table in a streaming manner: "auth.refresh_token_types" */
  readonly authRefreshTokenTypes_stream: ReadonlyArray<AuthRefreshTokenTypes>;
  /** fetch data from the table: "auth.refresh_tokens" */
  readonly authRefreshTokens: ReadonlyArray<AuthRefreshTokens>;
  /** fetch aggregated fields from the table: "auth.refresh_tokens" */
  readonly authRefreshTokensAggregate: AuthRefreshTokens_Aggregate;
  /** fetch data from the table in a streaming manner: "auth.refresh_tokens" */
  readonly authRefreshTokens_stream: ReadonlyArray<AuthRefreshTokens>;
  /** fetch data from the table: "auth.roles" using primary key columns */
  readonly authRole?: Maybe<AuthRoles>;
  /** fetch data from the table: "auth.roles" */
  readonly authRoles: ReadonlyArray<AuthRoles>;
  /** fetch aggregated fields from the table: "auth.roles" */
  readonly authRolesAggregate: AuthRoles_Aggregate;
  /** fetch data from the table in a streaming manner: "auth.roles" */
  readonly authRoles_stream: ReadonlyArray<AuthRoles>;
  /** fetch data from the table: "auth.user_providers" using primary key columns */
  readonly authUserProvider?: Maybe<AuthUserProviders>;
  /** fetch data from the table: "auth.user_providers" */
  readonly authUserProviders: ReadonlyArray<AuthUserProviders>;
  /** fetch aggregated fields from the table: "auth.user_providers" */
  readonly authUserProvidersAggregate: AuthUserProviders_Aggregate;
  /** fetch data from the table in a streaming manner: "auth.user_providers" */
  readonly authUserProviders_stream: ReadonlyArray<AuthUserProviders>;
  /** fetch data from the table: "auth.user_roles" using primary key columns */
  readonly authUserRole?: Maybe<AuthUserRoles>;
  /** fetch data from the table: "auth.user_roles" */
  readonly authUserRoles: ReadonlyArray<AuthUserRoles>;
  /** fetch aggregated fields from the table: "auth.user_roles" */
  readonly authUserRolesAggregate: AuthUserRoles_Aggregate;
  /** fetch data from the table in a streaming manner: "auth.user_roles" */
  readonly authUserRoles_stream: ReadonlyArray<AuthUserRoles>;
  /** fetch data from the table: "auth.user_security_keys" using primary key columns */
  readonly authUserSecurityKey?: Maybe<AuthUserSecurityKeys>;
  /** fetch data from the table: "auth.user_security_keys" */
  readonly authUserSecurityKeys: ReadonlyArray<AuthUserSecurityKeys>;
  /** fetch aggregated fields from the table: "auth.user_security_keys" */
  readonly authUserSecurityKeysAggregate: AuthUserSecurityKeys_Aggregate;
  /** fetch data from the table in a streaming manner: "auth.user_security_keys" */
  readonly authUserSecurityKeys_stream: ReadonlyArray<AuthUserSecurityKeys>;
  /** fetch data from the table: "backlog" */
  readonly backlog: ReadonlyArray<Backlog>;
  /** fetch aggregated fields from the table: "backlog" */
  readonly backlog_aggregate: Backlog_Aggregate;
  /** fetch data from the table: "backlog" using primary key columns */
  readonly backlog_by_pk?: Maybe<Backlog>;
  /** fetch data from the table in a streaming manner: "backlog" */
  readonly backlog_stream: ReadonlyArray<Backlog>;
  /** fetch data from the table: "storage.buckets" using primary key columns */
  readonly bucket?: Maybe<Buckets>;
  /** fetch data from the table: "storage.buckets" */
  readonly buckets: ReadonlyArray<Buckets>;
  /** fetch aggregated fields from the table: "storage.buckets" */
  readonly bucketsAggregate: Buckets_Aggregate;
  /** fetch data from the table in a streaming manner: "storage.buckets" */
  readonly buckets_stream: ReadonlyArray<Buckets>;
  /** fetch data from the table: "dayPlanning" */
  readonly dayPlanning: ReadonlyArray<DayPlanning>;
  /** fetch aggregated fields from the table: "dayPlanning" */
  readonly dayPlanning_aggregate: DayPlanning_Aggregate;
  /** fetch data from the table: "dayPlanning" using primary key columns */
  readonly dayPlanning_by_pk?: Maybe<DayPlanning>;
  /** fetch data from the table in a streaming manner: "dayPlanning" */
  readonly dayPlanning_stream: ReadonlyArray<DayPlanning>;
  /** fetch data from the table: "storage.files" using primary key columns */
  readonly file?: Maybe<Files>;
  /** An array relationship */
  readonly files: ReadonlyArray<Files>;
  /** fetch aggregated fields from the table: "storage.files" */
  readonly filesAggregate: Files_Aggregate;
  /** fetch data from the table in a streaming manner: "storage.files" */
  readonly files_stream: ReadonlyArray<Files>;
  /** fetch data from the table: "priority" */
  readonly priority: ReadonlyArray<Priority>;
  /** fetch aggregated fields from the table: "priority" */
  readonly priority_aggregate: Priority_Aggregate;
  /** fetch data from the table: "priority" using primary key columns */
  readonly priority_by_pk?: Maybe<Priority>;
  /** fetch data from the table in a streaming manner: "priority" */
  readonly priority_stream: ReadonlyArray<Priority>;
  /** fetch data from the table: "task" */
  readonly task: ReadonlyArray<Task>;
  /** fetch data from the table: "taskStatus" */
  readonly taskStatus: ReadonlyArray<TaskStatus>;
  /** fetch aggregated fields from the table: "taskStatus" */
  readonly taskStatus_aggregate: TaskStatus_Aggregate;
  /** fetch data from the table: "taskStatus" using primary key columns */
  readonly taskStatus_by_pk?: Maybe<TaskStatus>;
  /** fetch data from the table in a streaming manner: "taskStatus" */
  readonly taskStatus_stream: ReadonlyArray<TaskStatus>;
  /** fetch aggregated fields from the table: "task" */
  readonly task_aggregate: Task_Aggregate;
  /** fetch data from the table: "task" using primary key columns */
  readonly task_by_pk?: Maybe<Task>;
  /** fetch data from the table in a streaming manner: "task" */
  readonly task_stream: ReadonlyArray<Task>;
  /** fetch data from the table: "auth.users" using primary key columns */
  readonly user?: Maybe<Users>;
  /** fetch data from the table: "auth.users" */
  readonly users: ReadonlyArray<Users>;
  /** fetch aggregated fields from the table: "auth.users" */
  readonly usersAggregate: Users_Aggregate;
  /** fetch data from the table in a streaming manner: "auth.users" */
  readonly users_stream: ReadonlyArray<Users>;
};


export type Subscription_RootAuthProviderArgs = {
  id: Scalars['String'];
};


export type Subscription_RootAuthProviderRequestArgs = {
  id: Scalars['uuid'];
};


export type Subscription_RootAuthProviderRequestsArgs = {
  distinct_on?: InputMaybe<ReadonlyArray<AuthProviderRequests_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<ReadonlyArray<AuthProviderRequests_Order_By>>;
  where?: InputMaybe<AuthProviderRequests_Bool_Exp>;
};


export type Subscription_RootAuthProviderRequestsAggregateArgs = {
  distinct_on?: InputMaybe<ReadonlyArray<AuthProviderRequests_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<ReadonlyArray<AuthProviderRequests_Order_By>>;
  where?: InputMaybe<AuthProviderRequests_Bool_Exp>;
};


export type Subscription_RootAuthProviderRequests_StreamArgs = {
  batch_size: Scalars['Int'];
  cursor: ReadonlyArray<InputMaybe<AuthProviderRequests_Stream_Cursor_Input>>;
  where?: InputMaybe<AuthProviderRequests_Bool_Exp>;
};


export type Subscription_RootAuthProvidersArgs = {
  distinct_on?: InputMaybe<ReadonlyArray<AuthProviders_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<ReadonlyArray<AuthProviders_Order_By>>;
  where?: InputMaybe<AuthProviders_Bool_Exp>;
};


export type Subscription_RootAuthProvidersAggregateArgs = {
  distinct_on?: InputMaybe<ReadonlyArray<AuthProviders_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<ReadonlyArray<AuthProviders_Order_By>>;
  where?: InputMaybe<AuthProviders_Bool_Exp>;
};


export type Subscription_RootAuthProviders_StreamArgs = {
  batch_size: Scalars['Int'];
  cursor: ReadonlyArray<InputMaybe<AuthProviders_Stream_Cursor_Input>>;
  where?: InputMaybe<AuthProviders_Bool_Exp>;
};


export type Subscription_RootAuthRefreshTokenArgs = {
  id: Scalars['uuid'];
};


export type Subscription_RootAuthRefreshTokenTypeArgs = {
  value: Scalars['String'];
};


export type Subscription_RootAuthRefreshTokenTypesArgs = {
  distinct_on?: InputMaybe<ReadonlyArray<AuthRefreshTokenTypes_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<ReadonlyArray<AuthRefreshTokenTypes_Order_By>>;
  where?: InputMaybe<AuthRefreshTokenTypes_Bool_Exp>;
};


export type Subscription_RootAuthRefreshTokenTypesAggregateArgs = {
  distinct_on?: InputMaybe<ReadonlyArray<AuthRefreshTokenTypes_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<ReadonlyArray<AuthRefreshTokenTypes_Order_By>>;
  where?: InputMaybe<AuthRefreshTokenTypes_Bool_Exp>;
};


export type Subscription_RootAuthRefreshTokenTypes_StreamArgs = {
  batch_size: Scalars['Int'];
  cursor: ReadonlyArray<InputMaybe<AuthRefreshTokenTypes_Stream_Cursor_Input>>;
  where?: InputMaybe<AuthRefreshTokenTypes_Bool_Exp>;
};


export type Subscription_RootAuthRefreshTokensArgs = {
  distinct_on?: InputMaybe<ReadonlyArray<AuthRefreshTokens_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<ReadonlyArray<AuthRefreshTokens_Order_By>>;
  where?: InputMaybe<AuthRefreshTokens_Bool_Exp>;
};


export type Subscription_RootAuthRefreshTokensAggregateArgs = {
  distinct_on?: InputMaybe<ReadonlyArray<AuthRefreshTokens_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<ReadonlyArray<AuthRefreshTokens_Order_By>>;
  where?: InputMaybe<AuthRefreshTokens_Bool_Exp>;
};


export type Subscription_RootAuthRefreshTokens_StreamArgs = {
  batch_size: Scalars['Int'];
  cursor: ReadonlyArray<InputMaybe<AuthRefreshTokens_Stream_Cursor_Input>>;
  where?: InputMaybe<AuthRefreshTokens_Bool_Exp>;
};


export type Subscription_RootAuthRoleArgs = {
  role: Scalars['String'];
};


export type Subscription_RootAuthRolesArgs = {
  distinct_on?: InputMaybe<ReadonlyArray<AuthRoles_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<ReadonlyArray<AuthRoles_Order_By>>;
  where?: InputMaybe<AuthRoles_Bool_Exp>;
};


export type Subscription_RootAuthRolesAggregateArgs = {
  distinct_on?: InputMaybe<ReadonlyArray<AuthRoles_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<ReadonlyArray<AuthRoles_Order_By>>;
  where?: InputMaybe<AuthRoles_Bool_Exp>;
};


export type Subscription_RootAuthRoles_StreamArgs = {
  batch_size: Scalars['Int'];
  cursor: ReadonlyArray<InputMaybe<AuthRoles_Stream_Cursor_Input>>;
  where?: InputMaybe<AuthRoles_Bool_Exp>;
};


export type Subscription_RootAuthUserProviderArgs = {
  id: Scalars['uuid'];
};


export type Subscription_RootAuthUserProvidersArgs = {
  distinct_on?: InputMaybe<ReadonlyArray<AuthUserProviders_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<ReadonlyArray<AuthUserProviders_Order_By>>;
  where?: InputMaybe<AuthUserProviders_Bool_Exp>;
};


export type Subscription_RootAuthUserProvidersAggregateArgs = {
  distinct_on?: InputMaybe<ReadonlyArray<AuthUserProviders_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<ReadonlyArray<AuthUserProviders_Order_By>>;
  where?: InputMaybe<AuthUserProviders_Bool_Exp>;
};


export type Subscription_RootAuthUserProviders_StreamArgs = {
  batch_size: Scalars['Int'];
  cursor: ReadonlyArray<InputMaybe<AuthUserProviders_Stream_Cursor_Input>>;
  where?: InputMaybe<AuthUserProviders_Bool_Exp>;
};


export type Subscription_RootAuthUserRoleArgs = {
  id: Scalars['uuid'];
};


export type Subscription_RootAuthUserRolesArgs = {
  distinct_on?: InputMaybe<ReadonlyArray<AuthUserRoles_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<ReadonlyArray<AuthUserRoles_Order_By>>;
  where?: InputMaybe<AuthUserRoles_Bool_Exp>;
};


export type Subscription_RootAuthUserRolesAggregateArgs = {
  distinct_on?: InputMaybe<ReadonlyArray<AuthUserRoles_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<ReadonlyArray<AuthUserRoles_Order_By>>;
  where?: InputMaybe<AuthUserRoles_Bool_Exp>;
};


export type Subscription_RootAuthUserRoles_StreamArgs = {
  batch_size: Scalars['Int'];
  cursor: ReadonlyArray<InputMaybe<AuthUserRoles_Stream_Cursor_Input>>;
  where?: InputMaybe<AuthUserRoles_Bool_Exp>;
};


export type Subscription_RootAuthUserSecurityKeyArgs = {
  id: Scalars['uuid'];
};


export type Subscription_RootAuthUserSecurityKeysArgs = {
  distinct_on?: InputMaybe<ReadonlyArray<AuthUserSecurityKeys_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<ReadonlyArray<AuthUserSecurityKeys_Order_By>>;
  where?: InputMaybe<AuthUserSecurityKeys_Bool_Exp>;
};


export type Subscription_RootAuthUserSecurityKeysAggregateArgs = {
  distinct_on?: InputMaybe<ReadonlyArray<AuthUserSecurityKeys_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<ReadonlyArray<AuthUserSecurityKeys_Order_By>>;
  where?: InputMaybe<AuthUserSecurityKeys_Bool_Exp>;
};


export type Subscription_RootAuthUserSecurityKeys_StreamArgs = {
  batch_size: Scalars['Int'];
  cursor: ReadonlyArray<InputMaybe<AuthUserSecurityKeys_Stream_Cursor_Input>>;
  where?: InputMaybe<AuthUserSecurityKeys_Bool_Exp>;
};


export type Subscription_RootBacklogArgs = {
  distinct_on?: InputMaybe<ReadonlyArray<Backlog_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<ReadonlyArray<Backlog_Order_By>>;
  where?: InputMaybe<Backlog_Bool_Exp>;
};


export type Subscription_RootBacklog_AggregateArgs = {
  distinct_on?: InputMaybe<ReadonlyArray<Backlog_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<ReadonlyArray<Backlog_Order_By>>;
  where?: InputMaybe<Backlog_Bool_Exp>;
};


export type Subscription_RootBacklog_By_PkArgs = {
  id: Scalars['uuid'];
};


export type Subscription_RootBacklog_StreamArgs = {
  batch_size: Scalars['Int'];
  cursor: ReadonlyArray<InputMaybe<Backlog_Stream_Cursor_Input>>;
  where?: InputMaybe<Backlog_Bool_Exp>;
};


export type Subscription_RootBucketArgs = {
  id: Scalars['String'];
};


export type Subscription_RootBucketsArgs = {
  distinct_on?: InputMaybe<ReadonlyArray<Buckets_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<ReadonlyArray<Buckets_Order_By>>;
  where?: InputMaybe<Buckets_Bool_Exp>;
};


export type Subscription_RootBucketsAggregateArgs = {
  distinct_on?: InputMaybe<ReadonlyArray<Buckets_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<ReadonlyArray<Buckets_Order_By>>;
  where?: InputMaybe<Buckets_Bool_Exp>;
};


export type Subscription_RootBuckets_StreamArgs = {
  batch_size: Scalars['Int'];
  cursor: ReadonlyArray<InputMaybe<Buckets_Stream_Cursor_Input>>;
  where?: InputMaybe<Buckets_Bool_Exp>;
};


export type Subscription_RootDayPlanningArgs = {
  distinct_on?: InputMaybe<ReadonlyArray<DayPlanning_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<ReadonlyArray<DayPlanning_Order_By>>;
  where?: InputMaybe<DayPlanning_Bool_Exp>;
};


export type Subscription_RootDayPlanning_AggregateArgs = {
  distinct_on?: InputMaybe<ReadonlyArray<DayPlanning_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<ReadonlyArray<DayPlanning_Order_By>>;
  where?: InputMaybe<DayPlanning_Bool_Exp>;
};


export type Subscription_RootDayPlanning_By_PkArgs = {
  id: Scalars['uuid'];
};


export type Subscription_RootDayPlanning_StreamArgs = {
  batch_size: Scalars['Int'];
  cursor: ReadonlyArray<InputMaybe<DayPlanning_Stream_Cursor_Input>>;
  where?: InputMaybe<DayPlanning_Bool_Exp>;
};


export type Subscription_RootFileArgs = {
  id: Scalars['uuid'];
};


export type Subscription_RootFilesArgs = {
  distinct_on?: InputMaybe<ReadonlyArray<Files_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<ReadonlyArray<Files_Order_By>>;
  where?: InputMaybe<Files_Bool_Exp>;
};


export type Subscription_RootFilesAggregateArgs = {
  distinct_on?: InputMaybe<ReadonlyArray<Files_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<ReadonlyArray<Files_Order_By>>;
  where?: InputMaybe<Files_Bool_Exp>;
};


export type Subscription_RootFiles_StreamArgs = {
  batch_size: Scalars['Int'];
  cursor: ReadonlyArray<InputMaybe<Files_Stream_Cursor_Input>>;
  where?: InputMaybe<Files_Bool_Exp>;
};


export type Subscription_RootPriorityArgs = {
  distinct_on?: InputMaybe<ReadonlyArray<Priority_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<ReadonlyArray<Priority_Order_By>>;
  where?: InputMaybe<Priority_Bool_Exp>;
};


export type Subscription_RootPriority_AggregateArgs = {
  distinct_on?: InputMaybe<ReadonlyArray<Priority_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<ReadonlyArray<Priority_Order_By>>;
  where?: InputMaybe<Priority_Bool_Exp>;
};


export type Subscription_RootPriority_By_PkArgs = {
  value: Scalars['String'];
};


export type Subscription_RootPriority_StreamArgs = {
  batch_size: Scalars['Int'];
  cursor: ReadonlyArray<InputMaybe<Priority_Stream_Cursor_Input>>;
  where?: InputMaybe<Priority_Bool_Exp>;
};


export type Subscription_RootTaskArgs = {
  distinct_on?: InputMaybe<ReadonlyArray<Task_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<ReadonlyArray<Task_Order_By>>;
  where?: InputMaybe<Task_Bool_Exp>;
};


export type Subscription_RootTaskStatusArgs = {
  distinct_on?: InputMaybe<ReadonlyArray<TaskStatus_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<ReadonlyArray<TaskStatus_Order_By>>;
  where?: InputMaybe<TaskStatus_Bool_Exp>;
};


export type Subscription_RootTaskStatus_AggregateArgs = {
  distinct_on?: InputMaybe<ReadonlyArray<TaskStatus_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<ReadonlyArray<TaskStatus_Order_By>>;
  where?: InputMaybe<TaskStatus_Bool_Exp>;
};


export type Subscription_RootTaskStatus_By_PkArgs = {
  value: Scalars['String'];
};


export type Subscription_RootTaskStatus_StreamArgs = {
  batch_size: Scalars['Int'];
  cursor: ReadonlyArray<InputMaybe<TaskStatus_Stream_Cursor_Input>>;
  where?: InputMaybe<TaskStatus_Bool_Exp>;
};


export type Subscription_RootTask_AggregateArgs = {
  distinct_on?: InputMaybe<ReadonlyArray<Task_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<ReadonlyArray<Task_Order_By>>;
  where?: InputMaybe<Task_Bool_Exp>;
};


export type Subscription_RootTask_By_PkArgs = {
  id: Scalars['uuid'];
};


export type Subscription_RootTask_StreamArgs = {
  batch_size: Scalars['Int'];
  cursor: ReadonlyArray<InputMaybe<Task_Stream_Cursor_Input>>;
  where?: InputMaybe<Task_Bool_Exp>;
};


export type Subscription_RootUserArgs = {
  id: Scalars['uuid'];
};


export type Subscription_RootUsersArgs = {
  distinct_on?: InputMaybe<ReadonlyArray<Users_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<ReadonlyArray<Users_Order_By>>;
  where?: InputMaybe<Users_Bool_Exp>;
};


export type Subscription_RootUsersAggregateArgs = {
  distinct_on?: InputMaybe<ReadonlyArray<Users_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<ReadonlyArray<Users_Order_By>>;
  where?: InputMaybe<Users_Bool_Exp>;
};


export type Subscription_RootUsers_StreamArgs = {
  batch_size: Scalars['Int'];
  cursor: ReadonlyArray<InputMaybe<Users_Stream_Cursor_Input>>;
  where?: InputMaybe<Users_Bool_Exp>;
};

/** columns and relationships of "task" */
export type Task = {
  readonly __typename?: 'task';
  readonly backlog_id?: Maybe<Scalars['uuid']>;
  readonly createdAt: Scalars['timestamptz'];
  readonly dayPlanning_ListTaskPriority?: Maybe<Scalars['uuid']>;
  readonly dayPlanning_id?: Maybe<Scalars['uuid']>;
  readonly deadline?: Maybe<Scalars['timestamptz']>;
  readonly description: Scalars['String'];
  readonly id: Scalars['uuid'];
  readonly priority: Priority_Enum;
  readonly status?: Maybe<TaskStatus_Enum>;
  readonly timeBegin?: Maybe<Scalars['timestamptz']>;
  readonly timeEnd?: Maybe<Scalars['timestamptz']>;
  readonly title: Scalars['String'];
  readonly updatedAt: Scalars['timestamptz'];
  readonly user_id: Scalars['uuid'];
};

/** columns and relationships of "taskStatus" */
export type TaskStatus = {
  readonly __typename?: 'taskStatus';
  readonly value: Scalars['String'];
};

/** aggregated selection of "taskStatus" */
export type TaskStatus_Aggregate = {
  readonly __typename?: 'taskStatus_aggregate';
  readonly aggregate?: Maybe<TaskStatus_Aggregate_Fields>;
  readonly nodes: ReadonlyArray<TaskStatus>;
};

/** aggregate fields of "taskStatus" */
export type TaskStatus_Aggregate_Fields = {
  readonly __typename?: 'taskStatus_aggregate_fields';
  readonly count: Scalars['Int'];
  readonly max?: Maybe<TaskStatus_Max_Fields>;
  readonly min?: Maybe<TaskStatus_Min_Fields>;
};


/** aggregate fields of "taskStatus" */
export type TaskStatus_Aggregate_FieldsCountArgs = {
  columns?: InputMaybe<ReadonlyArray<TaskStatus_Select_Column>>;
  distinct?: InputMaybe<Scalars['Boolean']>;
};

/** Boolean expression to filter rows from the table "taskStatus". All fields are combined with a logical 'AND'. */
export type TaskStatus_Bool_Exp = {
  readonly _and?: InputMaybe<ReadonlyArray<TaskStatus_Bool_Exp>>;
  readonly _not?: InputMaybe<TaskStatus_Bool_Exp>;
  readonly _or?: InputMaybe<ReadonlyArray<TaskStatus_Bool_Exp>>;
  readonly value?: InputMaybe<String_Comparison_Exp>;
};

/** unique or primary key constraints on table "taskStatus" */
export type TaskStatus_Constraint =
  /** unique or primary key constraint on columns "value" */
  | 'taskStatus_pkey';

export type TaskStatus_Enum =
  | 'failed'
  | 'notStarted'
  | 'success';

/** Boolean expression to compare columns of type "taskStatus_enum". All fields are combined with logical 'AND'. */
export type TaskStatus_Enum_Comparison_Exp = {
  readonly _eq?: InputMaybe<TaskStatus_Enum>;
  readonly _in?: InputMaybe<ReadonlyArray<TaskStatus_Enum>>;
  readonly _is_null?: InputMaybe<Scalars['Boolean']>;
  readonly _neq?: InputMaybe<TaskStatus_Enum>;
  readonly _nin?: InputMaybe<ReadonlyArray<TaskStatus_Enum>>;
};

/** input type for inserting data into table "taskStatus" */
export type TaskStatus_Insert_Input = {
  readonly value?: InputMaybe<Scalars['String']>;
};

/** aggregate max on columns */
export type TaskStatus_Max_Fields = {
  readonly __typename?: 'taskStatus_max_fields';
  readonly value?: Maybe<Scalars['String']>;
};

/** aggregate min on columns */
export type TaskStatus_Min_Fields = {
  readonly __typename?: 'taskStatus_min_fields';
  readonly value?: Maybe<Scalars['String']>;
};

/** response of any mutation on the table "taskStatus" */
export type TaskStatus_Mutation_Response = {
  readonly __typename?: 'taskStatus_mutation_response';
  /** number of rows affected by the mutation */
  readonly affected_rows: Scalars['Int'];
  /** data from the rows affected by the mutation */
  readonly returning: ReadonlyArray<TaskStatus>;
};

/** on_conflict condition type for table "taskStatus" */
export type TaskStatus_On_Conflict = {
  readonly constraint: TaskStatus_Constraint;
  readonly update_columns?: ReadonlyArray<TaskStatus_Update_Column>;
  readonly where?: InputMaybe<TaskStatus_Bool_Exp>;
};

/** Ordering options when selecting data from "taskStatus". */
export type TaskStatus_Order_By = {
  readonly value?: InputMaybe<Order_By>;
};

/** primary key columns input for table: taskStatus */
export type TaskStatus_Pk_Columns_Input = {
  readonly value: Scalars['String'];
};

/** select columns of table "taskStatus" */
export type TaskStatus_Select_Column =
  /** column name */
  | 'value';

/** input type for updating data in table "taskStatus" */
export type TaskStatus_Set_Input = {
  readonly value?: InputMaybe<Scalars['String']>;
};

/** Streaming cursor of the table "taskStatus" */
export type TaskStatus_Stream_Cursor_Input = {
  /** Stream column input with initial value */
  readonly initial_value: TaskStatus_Stream_Cursor_Value_Input;
  /** cursor ordering */
  readonly ordering?: InputMaybe<Cursor_Ordering>;
};

/** Initial value of the column from where the streaming should start */
export type TaskStatus_Stream_Cursor_Value_Input = {
  readonly value?: InputMaybe<Scalars['String']>;
};

/** update columns of table "taskStatus" */
export type TaskStatus_Update_Column =
  /** column name */
  | 'value';

export type TaskStatus_Updates = {
  /** sets the columns of the filtered rows to the given values */
  readonly _set?: InputMaybe<TaskStatus_Set_Input>;
  /** filter the rows which have to be updated */
  readonly where: TaskStatus_Bool_Exp;
};

/** aggregated selection of "task" */
export type Task_Aggregate = {
  readonly __typename?: 'task_aggregate';
  readonly aggregate?: Maybe<Task_Aggregate_Fields>;
  readonly nodes: ReadonlyArray<Task>;
};

export type Task_Aggregate_Bool_Exp = {
  readonly count?: InputMaybe<Task_Aggregate_Bool_Exp_Count>;
};

export type Task_Aggregate_Bool_Exp_Count = {
  readonly arguments?: InputMaybe<ReadonlyArray<Task_Select_Column>>;
  readonly distinct?: InputMaybe<Scalars['Boolean']>;
  readonly filter?: InputMaybe<Task_Bool_Exp>;
  readonly predicate: Int_Comparison_Exp;
};

/** aggregate fields of "task" */
export type Task_Aggregate_Fields = {
  readonly __typename?: 'task_aggregate_fields';
  readonly count: Scalars['Int'];
  readonly max?: Maybe<Task_Max_Fields>;
  readonly min?: Maybe<Task_Min_Fields>;
};


/** aggregate fields of "task" */
export type Task_Aggregate_FieldsCountArgs = {
  columns?: InputMaybe<ReadonlyArray<Task_Select_Column>>;
  distinct?: InputMaybe<Scalars['Boolean']>;
};

/** order by aggregate values of table "task" */
export type Task_Aggregate_Order_By = {
  readonly count?: InputMaybe<Order_By>;
  readonly max?: InputMaybe<Task_Max_Order_By>;
  readonly min?: InputMaybe<Task_Min_Order_By>;
};

/** input type for inserting array relation for remote table "task" */
export type Task_Arr_Rel_Insert_Input = {
  readonly data: ReadonlyArray<Task_Insert_Input>;
  /** upsert condition */
  readonly on_conflict?: InputMaybe<Task_On_Conflict>;
};

/** Boolean expression to filter rows from the table "task". All fields are combined with a logical 'AND'. */
export type Task_Bool_Exp = {
  readonly _and?: InputMaybe<ReadonlyArray<Task_Bool_Exp>>;
  readonly _not?: InputMaybe<Task_Bool_Exp>;
  readonly _or?: InputMaybe<ReadonlyArray<Task_Bool_Exp>>;
  readonly backlog_id?: InputMaybe<Uuid_Comparison_Exp>;
  readonly createdAt?: InputMaybe<Timestamptz_Comparison_Exp>;
  readonly dayPlanning_ListTaskPriority?: InputMaybe<Uuid_Comparison_Exp>;
  readonly dayPlanning_id?: InputMaybe<Uuid_Comparison_Exp>;
  readonly deadline?: InputMaybe<Timestamptz_Comparison_Exp>;
  readonly description?: InputMaybe<String_Comparison_Exp>;
  readonly id?: InputMaybe<Uuid_Comparison_Exp>;
  readonly priority?: InputMaybe<Priority_Enum_Comparison_Exp>;
  readonly status?: InputMaybe<TaskStatus_Enum_Comparison_Exp>;
  readonly timeBegin?: InputMaybe<Timestamptz_Comparison_Exp>;
  readonly timeEnd?: InputMaybe<Timestamptz_Comparison_Exp>;
  readonly title?: InputMaybe<String_Comparison_Exp>;
  readonly updatedAt?: InputMaybe<Timestamptz_Comparison_Exp>;
  readonly user_id?: InputMaybe<Uuid_Comparison_Exp>;
};

/** unique or primary key constraints on table "task" */
export type Task_Constraint =
  /** unique or primary key constraint on columns "id" */
  | 'task_id_key'
  /** unique or primary key constraint on columns "id" */
  | 'task_pkey';

/** input type for inserting data into table "task" */
export type Task_Insert_Input = {
  readonly backlog_id?: InputMaybe<Scalars['uuid']>;
  readonly createdAt?: InputMaybe<Scalars['timestamptz']>;
  readonly dayPlanning_ListTaskPriority?: InputMaybe<Scalars['uuid']>;
  readonly dayPlanning_id?: InputMaybe<Scalars['uuid']>;
  readonly deadline?: InputMaybe<Scalars['timestamptz']>;
  readonly description?: InputMaybe<Scalars['String']>;
  readonly id?: InputMaybe<Scalars['uuid']>;
  readonly priority?: InputMaybe<Priority_Enum>;
  readonly status?: InputMaybe<TaskStatus_Enum>;
  readonly timeBegin?: InputMaybe<Scalars['timestamptz']>;
  readonly timeEnd?: InputMaybe<Scalars['timestamptz']>;
  readonly title?: InputMaybe<Scalars['String']>;
  readonly updatedAt?: InputMaybe<Scalars['timestamptz']>;
  readonly user_id?: InputMaybe<Scalars['uuid']>;
};

/** aggregate max on columns */
export type Task_Max_Fields = {
  readonly __typename?: 'task_max_fields';
  readonly backlog_id?: Maybe<Scalars['uuid']>;
  readonly createdAt?: Maybe<Scalars['timestamptz']>;
  readonly dayPlanning_ListTaskPriority?: Maybe<Scalars['uuid']>;
  readonly dayPlanning_id?: Maybe<Scalars['uuid']>;
  readonly deadline?: Maybe<Scalars['timestamptz']>;
  readonly description?: Maybe<Scalars['String']>;
  readonly id?: Maybe<Scalars['uuid']>;
  readonly timeBegin?: Maybe<Scalars['timestamptz']>;
  readonly timeEnd?: Maybe<Scalars['timestamptz']>;
  readonly title?: Maybe<Scalars['String']>;
  readonly updatedAt?: Maybe<Scalars['timestamptz']>;
  readonly user_id?: Maybe<Scalars['uuid']>;
};

/** order by max() on columns of table "task" */
export type Task_Max_Order_By = {
  readonly backlog_id?: InputMaybe<Order_By>;
  readonly createdAt?: InputMaybe<Order_By>;
  readonly dayPlanning_ListTaskPriority?: InputMaybe<Order_By>;
  readonly dayPlanning_id?: InputMaybe<Order_By>;
  readonly deadline?: InputMaybe<Order_By>;
  readonly description?: InputMaybe<Order_By>;
  readonly id?: InputMaybe<Order_By>;
  readonly timeBegin?: InputMaybe<Order_By>;
  readonly timeEnd?: InputMaybe<Order_By>;
  readonly title?: InputMaybe<Order_By>;
  readonly updatedAt?: InputMaybe<Order_By>;
  readonly user_id?: InputMaybe<Order_By>;
};

/** aggregate min on columns */
export type Task_Min_Fields = {
  readonly __typename?: 'task_min_fields';
  readonly backlog_id?: Maybe<Scalars['uuid']>;
  readonly createdAt?: Maybe<Scalars['timestamptz']>;
  readonly dayPlanning_ListTaskPriority?: Maybe<Scalars['uuid']>;
  readonly dayPlanning_id?: Maybe<Scalars['uuid']>;
  readonly deadline?: Maybe<Scalars['timestamptz']>;
  readonly description?: Maybe<Scalars['String']>;
  readonly id?: Maybe<Scalars['uuid']>;
  readonly timeBegin?: Maybe<Scalars['timestamptz']>;
  readonly timeEnd?: Maybe<Scalars['timestamptz']>;
  readonly title?: Maybe<Scalars['String']>;
  readonly updatedAt?: Maybe<Scalars['timestamptz']>;
  readonly user_id?: Maybe<Scalars['uuid']>;
};

/** order by min() on columns of table "task" */
export type Task_Min_Order_By = {
  readonly backlog_id?: InputMaybe<Order_By>;
  readonly createdAt?: InputMaybe<Order_By>;
  readonly dayPlanning_ListTaskPriority?: InputMaybe<Order_By>;
  readonly dayPlanning_id?: InputMaybe<Order_By>;
  readonly deadline?: InputMaybe<Order_By>;
  readonly description?: InputMaybe<Order_By>;
  readonly id?: InputMaybe<Order_By>;
  readonly timeBegin?: InputMaybe<Order_By>;
  readonly timeEnd?: InputMaybe<Order_By>;
  readonly title?: InputMaybe<Order_By>;
  readonly updatedAt?: InputMaybe<Order_By>;
  readonly user_id?: InputMaybe<Order_By>;
};

/** response of any mutation on the table "task" */
export type Task_Mutation_Response = {
  readonly __typename?: 'task_mutation_response';
  /** number of rows affected by the mutation */
  readonly affected_rows: Scalars['Int'];
  /** data from the rows affected by the mutation */
  readonly returning: ReadonlyArray<Task>;
};

/** on_conflict condition type for table "task" */
export type Task_On_Conflict = {
  readonly constraint: Task_Constraint;
  readonly update_columns?: ReadonlyArray<Task_Update_Column>;
  readonly where?: InputMaybe<Task_Bool_Exp>;
};

/** Ordering options when selecting data from "task". */
export type Task_Order_By = {
  readonly backlog_id?: InputMaybe<Order_By>;
  readonly createdAt?: InputMaybe<Order_By>;
  readonly dayPlanning_ListTaskPriority?: InputMaybe<Order_By>;
  readonly dayPlanning_id?: InputMaybe<Order_By>;
  readonly deadline?: InputMaybe<Order_By>;
  readonly description?: InputMaybe<Order_By>;
  readonly id?: InputMaybe<Order_By>;
  readonly priority?: InputMaybe<Order_By>;
  readonly status?: InputMaybe<Order_By>;
  readonly timeBegin?: InputMaybe<Order_By>;
  readonly timeEnd?: InputMaybe<Order_By>;
  readonly title?: InputMaybe<Order_By>;
  readonly updatedAt?: InputMaybe<Order_By>;
  readonly user_id?: InputMaybe<Order_By>;
};

/** primary key columns input for table: task */
export type Task_Pk_Columns_Input = {
  readonly id: Scalars['uuid'];
};

/** select columns of table "task" */
export type Task_Select_Column =
  /** column name */
  | 'backlog_id'
  /** column name */
  | 'createdAt'
  /** column name */
  | 'dayPlanning_ListTaskPriority'
  /** column name */
  | 'dayPlanning_id'
  /** column name */
  | 'deadline'
  /** column name */
  | 'description'
  /** column name */
  | 'id'
  /** column name */
  | 'priority'
  /** column name */
  | 'status'
  /** column name */
  | 'timeBegin'
  /** column name */
  | 'timeEnd'
  /** column name */
  | 'title'
  /** column name */
  | 'updatedAt'
  /** column name */
  | 'user_id';

/** input type for updating data in table "task" */
export type Task_Set_Input = {
  readonly backlog_id?: InputMaybe<Scalars['uuid']>;
  readonly createdAt?: InputMaybe<Scalars['timestamptz']>;
  readonly dayPlanning_ListTaskPriority?: InputMaybe<Scalars['uuid']>;
  readonly dayPlanning_id?: InputMaybe<Scalars['uuid']>;
  readonly deadline?: InputMaybe<Scalars['timestamptz']>;
  readonly description?: InputMaybe<Scalars['String']>;
  readonly id?: InputMaybe<Scalars['uuid']>;
  readonly priority?: InputMaybe<Priority_Enum>;
  readonly status?: InputMaybe<TaskStatus_Enum>;
  readonly timeBegin?: InputMaybe<Scalars['timestamptz']>;
  readonly timeEnd?: InputMaybe<Scalars['timestamptz']>;
  readonly title?: InputMaybe<Scalars['String']>;
  readonly updatedAt?: InputMaybe<Scalars['timestamptz']>;
  readonly user_id?: InputMaybe<Scalars['uuid']>;
};

/** Streaming cursor of the table "task" */
export type Task_Stream_Cursor_Input = {
  /** Stream column input with initial value */
  readonly initial_value: Task_Stream_Cursor_Value_Input;
  /** cursor ordering */
  readonly ordering?: InputMaybe<Cursor_Ordering>;
};

/** Initial value of the column from where the streaming should start */
export type Task_Stream_Cursor_Value_Input = {
  readonly backlog_id?: InputMaybe<Scalars['uuid']>;
  readonly createdAt?: InputMaybe<Scalars['timestamptz']>;
  readonly dayPlanning_ListTaskPriority?: InputMaybe<Scalars['uuid']>;
  readonly dayPlanning_id?: InputMaybe<Scalars['uuid']>;
  readonly deadline?: InputMaybe<Scalars['timestamptz']>;
  readonly description?: InputMaybe<Scalars['String']>;
  readonly id?: InputMaybe<Scalars['uuid']>;
  readonly priority?: InputMaybe<Priority_Enum>;
  readonly status?: InputMaybe<TaskStatus_Enum>;
  readonly timeBegin?: InputMaybe<Scalars['timestamptz']>;
  readonly timeEnd?: InputMaybe<Scalars['timestamptz']>;
  readonly title?: InputMaybe<Scalars['String']>;
  readonly updatedAt?: InputMaybe<Scalars['timestamptz']>;
  readonly user_id?: InputMaybe<Scalars['uuid']>;
};

/** update columns of table "task" */
export type Task_Update_Column =
  /** column name */
  | 'backlog_id'
  /** column name */
  | 'createdAt'
  /** column name */
  | 'dayPlanning_ListTaskPriority'
  /** column name */
  | 'dayPlanning_id'
  /** column name */
  | 'deadline'
  /** column name */
  | 'description'
  /** column name */
  | 'id'
  /** column name */
  | 'priority'
  /** column name */
  | 'status'
  /** column name */
  | 'timeBegin'
  /** column name */
  | 'timeEnd'
  /** column name */
  | 'title'
  /** column name */
  | 'updatedAt'
  /** column name */
  | 'user_id';

export type Task_Updates = {
  /** sets the columns of the filtered rows to the given values */
  readonly _set?: InputMaybe<Task_Set_Input>;
  /** filter the rows which have to be updated */
  readonly where: Task_Bool_Exp;
};

/** Boolean expression to compare columns of type "timestamptz". All fields are combined with logical 'AND'. */
export type Timestamptz_Comparison_Exp = {
  readonly _eq?: InputMaybe<Scalars['timestamptz']>;
  readonly _gt?: InputMaybe<Scalars['timestamptz']>;
  readonly _gte?: InputMaybe<Scalars['timestamptz']>;
  readonly _in?: InputMaybe<ReadonlyArray<Scalars['timestamptz']>>;
  readonly _is_null?: InputMaybe<Scalars['Boolean']>;
  readonly _lt?: InputMaybe<Scalars['timestamptz']>;
  readonly _lte?: InputMaybe<Scalars['timestamptz']>;
  readonly _neq?: InputMaybe<Scalars['timestamptz']>;
  readonly _nin?: InputMaybe<ReadonlyArray<Scalars['timestamptz']>>;
};

/** User account information. Don't modify its structure as Hasura Auth relies on it to function properly. */
export type Users = {
  readonly __typename?: 'users';
  readonly activeMfaType?: Maybe<Scalars['String']>;
  readonly avatarUrl: Scalars['String'];
  readonly createdAt: Scalars['timestamptz'];
  readonly currentChallenge?: Maybe<Scalars['String']>;
  readonly defaultRole: Scalars['String'];
  /** An object relationship */
  readonly defaultRoleByRole: AuthRoles;
  readonly disabled: Scalars['Boolean'];
  readonly displayName: Scalars['String'];
  readonly email?: Maybe<Scalars['citext']>;
  readonly emailVerified: Scalars['Boolean'];
  readonly id: Scalars['uuid'];
  readonly isAnonymous: Scalars['Boolean'];
  readonly lastSeen?: Maybe<Scalars['timestamptz']>;
  readonly locale: Scalars['String'];
  readonly metadata?: Maybe<Scalars['jsonb']>;
  readonly newEmail?: Maybe<Scalars['citext']>;
  readonly otpHash?: Maybe<Scalars['String']>;
  readonly otpHashExpiresAt: Scalars['timestamptz'];
  readonly otpMethodLastUsed?: Maybe<Scalars['String']>;
  readonly passwordHash?: Maybe<Scalars['String']>;
  readonly phoneNumber?: Maybe<Scalars['String']>;
  readonly phoneNumberVerified: Scalars['Boolean'];
  /** An array relationship */
  readonly refreshTokens: ReadonlyArray<AuthRefreshTokens>;
  /** An aggregate relationship */
  readonly refreshTokens_aggregate: AuthRefreshTokens_Aggregate;
  /** An array relationship */
  readonly roles: ReadonlyArray<AuthUserRoles>;
  /** An aggregate relationship */
  readonly roles_aggregate: AuthUserRoles_Aggregate;
  /** An array relationship */
  readonly securityKeys: ReadonlyArray<AuthUserSecurityKeys>;
  /** An aggregate relationship */
  readonly securityKeys_aggregate: AuthUserSecurityKeys_Aggregate;
  readonly ticket?: Maybe<Scalars['String']>;
  readonly ticketExpiresAt: Scalars['timestamptz'];
  readonly totpSecret?: Maybe<Scalars['String']>;
  readonly updatedAt: Scalars['timestamptz'];
  /** An array relationship */
  readonly userProviders: ReadonlyArray<AuthUserProviders>;
  /** An aggregate relationship */
  readonly userProviders_aggregate: AuthUserProviders_Aggregate;
};


/** User account information. Don't modify its structure as Hasura Auth relies on it to function properly. */
export type UsersMetadataArgs = {
  path?: InputMaybe<Scalars['String']>;
};


/** User account information. Don't modify its structure as Hasura Auth relies on it to function properly. */
export type UsersRefreshTokensArgs = {
  distinct_on?: InputMaybe<ReadonlyArray<AuthRefreshTokens_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<ReadonlyArray<AuthRefreshTokens_Order_By>>;
  where?: InputMaybe<AuthRefreshTokens_Bool_Exp>;
};


/** User account information. Don't modify its structure as Hasura Auth relies on it to function properly. */
export type UsersRefreshTokens_AggregateArgs = {
  distinct_on?: InputMaybe<ReadonlyArray<AuthRefreshTokens_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<ReadonlyArray<AuthRefreshTokens_Order_By>>;
  where?: InputMaybe<AuthRefreshTokens_Bool_Exp>;
};


/** User account information. Don't modify its structure as Hasura Auth relies on it to function properly. */
export type UsersRolesArgs = {
  distinct_on?: InputMaybe<ReadonlyArray<AuthUserRoles_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<ReadonlyArray<AuthUserRoles_Order_By>>;
  where?: InputMaybe<AuthUserRoles_Bool_Exp>;
};


/** User account information. Don't modify its structure as Hasura Auth relies on it to function properly. */
export type UsersRoles_AggregateArgs = {
  distinct_on?: InputMaybe<ReadonlyArray<AuthUserRoles_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<ReadonlyArray<AuthUserRoles_Order_By>>;
  where?: InputMaybe<AuthUserRoles_Bool_Exp>;
};


/** User account information. Don't modify its structure as Hasura Auth relies on it to function properly. */
export type UsersSecurityKeysArgs = {
  distinct_on?: InputMaybe<ReadonlyArray<AuthUserSecurityKeys_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<ReadonlyArray<AuthUserSecurityKeys_Order_By>>;
  where?: InputMaybe<AuthUserSecurityKeys_Bool_Exp>;
};


/** User account information. Don't modify its structure as Hasura Auth relies on it to function properly. */
export type UsersSecurityKeys_AggregateArgs = {
  distinct_on?: InputMaybe<ReadonlyArray<AuthUserSecurityKeys_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<ReadonlyArray<AuthUserSecurityKeys_Order_By>>;
  where?: InputMaybe<AuthUserSecurityKeys_Bool_Exp>;
};


/** User account information. Don't modify its structure as Hasura Auth relies on it to function properly. */
export type UsersUserProvidersArgs = {
  distinct_on?: InputMaybe<ReadonlyArray<AuthUserProviders_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<ReadonlyArray<AuthUserProviders_Order_By>>;
  where?: InputMaybe<AuthUserProviders_Bool_Exp>;
};


/** User account information. Don't modify its structure as Hasura Auth relies on it to function properly. */
export type UsersUserProviders_AggregateArgs = {
  distinct_on?: InputMaybe<ReadonlyArray<AuthUserProviders_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<ReadonlyArray<AuthUserProviders_Order_By>>;
  where?: InputMaybe<AuthUserProviders_Bool_Exp>;
};

/** aggregated selection of "auth.users" */
export type Users_Aggregate = {
  readonly __typename?: 'users_aggregate';
  readonly aggregate?: Maybe<Users_Aggregate_Fields>;
  readonly nodes: ReadonlyArray<Users>;
};

export type Users_Aggregate_Bool_Exp = {
  readonly bool_and?: InputMaybe<Users_Aggregate_Bool_Exp_Bool_And>;
  readonly bool_or?: InputMaybe<Users_Aggregate_Bool_Exp_Bool_Or>;
  readonly count?: InputMaybe<Users_Aggregate_Bool_Exp_Count>;
};

export type Users_Aggregate_Bool_Exp_Bool_And = {
  readonly arguments: Users_Select_Column_Users_Aggregate_Bool_Exp_Bool_And_Arguments_Columns;
  readonly distinct?: InputMaybe<Scalars['Boolean']>;
  readonly filter?: InputMaybe<Users_Bool_Exp>;
  readonly predicate: Boolean_Comparison_Exp;
};

export type Users_Aggregate_Bool_Exp_Bool_Or = {
  readonly arguments: Users_Select_Column_Users_Aggregate_Bool_Exp_Bool_Or_Arguments_Columns;
  readonly distinct?: InputMaybe<Scalars['Boolean']>;
  readonly filter?: InputMaybe<Users_Bool_Exp>;
  readonly predicate: Boolean_Comparison_Exp;
};

export type Users_Aggregate_Bool_Exp_Count = {
  readonly arguments?: InputMaybe<ReadonlyArray<Users_Select_Column>>;
  readonly distinct?: InputMaybe<Scalars['Boolean']>;
  readonly filter?: InputMaybe<Users_Bool_Exp>;
  readonly predicate: Int_Comparison_Exp;
};

/** aggregate fields of "auth.users" */
export type Users_Aggregate_Fields = {
  readonly __typename?: 'users_aggregate_fields';
  readonly count: Scalars['Int'];
  readonly max?: Maybe<Users_Max_Fields>;
  readonly min?: Maybe<Users_Min_Fields>;
};


/** aggregate fields of "auth.users" */
export type Users_Aggregate_FieldsCountArgs = {
  columns?: InputMaybe<ReadonlyArray<Users_Select_Column>>;
  distinct?: InputMaybe<Scalars['Boolean']>;
};

/** order by aggregate values of table "auth.users" */
export type Users_Aggregate_Order_By = {
  readonly count?: InputMaybe<Order_By>;
  readonly max?: InputMaybe<Users_Max_Order_By>;
  readonly min?: InputMaybe<Users_Min_Order_By>;
};

/** append existing jsonb value of filtered columns with new jsonb value */
export type Users_Append_Input = {
  readonly metadata?: InputMaybe<Scalars['jsonb']>;
};

/** input type for inserting array relation for remote table "auth.users" */
export type Users_Arr_Rel_Insert_Input = {
  readonly data: ReadonlyArray<Users_Insert_Input>;
  /** upsert condition */
  readonly on_conflict?: InputMaybe<Users_On_Conflict>;
};

/** Boolean expression to filter rows from the table "auth.users". All fields are combined with a logical 'AND'. */
export type Users_Bool_Exp = {
  readonly _and?: InputMaybe<ReadonlyArray<Users_Bool_Exp>>;
  readonly _not?: InputMaybe<Users_Bool_Exp>;
  readonly _or?: InputMaybe<ReadonlyArray<Users_Bool_Exp>>;
  readonly activeMfaType?: InputMaybe<String_Comparison_Exp>;
  readonly avatarUrl?: InputMaybe<String_Comparison_Exp>;
  readonly createdAt?: InputMaybe<Timestamptz_Comparison_Exp>;
  readonly currentChallenge?: InputMaybe<String_Comparison_Exp>;
  readonly defaultRole?: InputMaybe<String_Comparison_Exp>;
  readonly defaultRoleByRole?: InputMaybe<AuthRoles_Bool_Exp>;
  readonly disabled?: InputMaybe<Boolean_Comparison_Exp>;
  readonly displayName?: InputMaybe<String_Comparison_Exp>;
  readonly email?: InputMaybe<Citext_Comparison_Exp>;
  readonly emailVerified?: InputMaybe<Boolean_Comparison_Exp>;
  readonly id?: InputMaybe<Uuid_Comparison_Exp>;
  readonly isAnonymous?: InputMaybe<Boolean_Comparison_Exp>;
  readonly lastSeen?: InputMaybe<Timestamptz_Comparison_Exp>;
  readonly locale?: InputMaybe<String_Comparison_Exp>;
  readonly metadata?: InputMaybe<Jsonb_Comparison_Exp>;
  readonly newEmail?: InputMaybe<Citext_Comparison_Exp>;
  readonly otpHash?: InputMaybe<String_Comparison_Exp>;
  readonly otpHashExpiresAt?: InputMaybe<Timestamptz_Comparison_Exp>;
  readonly otpMethodLastUsed?: InputMaybe<String_Comparison_Exp>;
  readonly passwordHash?: InputMaybe<String_Comparison_Exp>;
  readonly phoneNumber?: InputMaybe<String_Comparison_Exp>;
  readonly phoneNumberVerified?: InputMaybe<Boolean_Comparison_Exp>;
  readonly refreshTokens?: InputMaybe<AuthRefreshTokens_Bool_Exp>;
  readonly refreshTokens_aggregate?: InputMaybe<AuthRefreshTokens_Aggregate_Bool_Exp>;
  readonly roles?: InputMaybe<AuthUserRoles_Bool_Exp>;
  readonly roles_aggregate?: InputMaybe<AuthUserRoles_Aggregate_Bool_Exp>;
  readonly securityKeys?: InputMaybe<AuthUserSecurityKeys_Bool_Exp>;
  readonly securityKeys_aggregate?: InputMaybe<AuthUserSecurityKeys_Aggregate_Bool_Exp>;
  readonly ticket?: InputMaybe<String_Comparison_Exp>;
  readonly ticketExpiresAt?: InputMaybe<Timestamptz_Comparison_Exp>;
  readonly totpSecret?: InputMaybe<String_Comparison_Exp>;
  readonly updatedAt?: InputMaybe<Timestamptz_Comparison_Exp>;
  readonly userProviders?: InputMaybe<AuthUserProviders_Bool_Exp>;
  readonly userProviders_aggregate?: InputMaybe<AuthUserProviders_Aggregate_Bool_Exp>;
};

/** unique or primary key constraints on table "auth.users" */
export type Users_Constraint =
  /** unique or primary key constraint on columns "email" */
  | 'users_email_key'
  /** unique or primary key constraint on columns "phone_number" */
  | 'users_phone_number_key'
  /** unique or primary key constraint on columns "id" */
  | 'users_pkey';

/** delete the field or element with specified path (for JSON arrays, negative integers count from the end) */
export type Users_Delete_At_Path_Input = {
  readonly metadata?: InputMaybe<ReadonlyArray<Scalars['String']>>;
};

/** delete the array element with specified index (negative integers count from the end). throws an error if top level container is not an array */
export type Users_Delete_Elem_Input = {
  readonly metadata?: InputMaybe<Scalars['Int']>;
};

/** delete key/value pair or string element. key/value pairs are matched based on their key value */
export type Users_Delete_Key_Input = {
  readonly metadata?: InputMaybe<Scalars['String']>;
};

/** input type for inserting data into table "auth.users" */
export type Users_Insert_Input = {
  readonly activeMfaType?: InputMaybe<Scalars['String']>;
  readonly avatarUrl?: InputMaybe<Scalars['String']>;
  readonly createdAt?: InputMaybe<Scalars['timestamptz']>;
  readonly currentChallenge?: InputMaybe<Scalars['String']>;
  readonly defaultRole?: InputMaybe<Scalars['String']>;
  readonly defaultRoleByRole?: InputMaybe<AuthRoles_Obj_Rel_Insert_Input>;
  readonly disabled?: InputMaybe<Scalars['Boolean']>;
  readonly displayName?: InputMaybe<Scalars['String']>;
  readonly email?: InputMaybe<Scalars['citext']>;
  readonly emailVerified?: InputMaybe<Scalars['Boolean']>;
  readonly id?: InputMaybe<Scalars['uuid']>;
  readonly isAnonymous?: InputMaybe<Scalars['Boolean']>;
  readonly lastSeen?: InputMaybe<Scalars['timestamptz']>;
  readonly locale?: InputMaybe<Scalars['String']>;
  readonly metadata?: InputMaybe<Scalars['jsonb']>;
  readonly newEmail?: InputMaybe<Scalars['citext']>;
  readonly otpHash?: InputMaybe<Scalars['String']>;
  readonly otpHashExpiresAt?: InputMaybe<Scalars['timestamptz']>;
  readonly otpMethodLastUsed?: InputMaybe<Scalars['String']>;
  readonly passwordHash?: InputMaybe<Scalars['String']>;
  readonly phoneNumber?: InputMaybe<Scalars['String']>;
  readonly phoneNumberVerified?: InputMaybe<Scalars['Boolean']>;
  readonly refreshTokens?: InputMaybe<AuthRefreshTokens_Arr_Rel_Insert_Input>;
  readonly roles?: InputMaybe<AuthUserRoles_Arr_Rel_Insert_Input>;
  readonly securityKeys?: InputMaybe<AuthUserSecurityKeys_Arr_Rel_Insert_Input>;
  readonly ticket?: InputMaybe<Scalars['String']>;
  readonly ticketExpiresAt?: InputMaybe<Scalars['timestamptz']>;
  readonly totpSecret?: InputMaybe<Scalars['String']>;
  readonly updatedAt?: InputMaybe<Scalars['timestamptz']>;
  readonly userProviders?: InputMaybe<AuthUserProviders_Arr_Rel_Insert_Input>;
};

/** aggregate max on columns */
export type Users_Max_Fields = {
  readonly __typename?: 'users_max_fields';
  readonly activeMfaType?: Maybe<Scalars['String']>;
  readonly avatarUrl?: Maybe<Scalars['String']>;
  readonly createdAt?: Maybe<Scalars['timestamptz']>;
  readonly currentChallenge?: Maybe<Scalars['String']>;
  readonly defaultRole?: Maybe<Scalars['String']>;
  readonly displayName?: Maybe<Scalars['String']>;
  readonly email?: Maybe<Scalars['citext']>;
  readonly id?: Maybe<Scalars['uuid']>;
  readonly lastSeen?: Maybe<Scalars['timestamptz']>;
  readonly locale?: Maybe<Scalars['String']>;
  readonly newEmail?: Maybe<Scalars['citext']>;
  readonly otpHash?: Maybe<Scalars['String']>;
  readonly otpHashExpiresAt?: Maybe<Scalars['timestamptz']>;
  readonly otpMethodLastUsed?: Maybe<Scalars['String']>;
  readonly passwordHash?: Maybe<Scalars['String']>;
  readonly phoneNumber?: Maybe<Scalars['String']>;
  readonly ticket?: Maybe<Scalars['String']>;
  readonly ticketExpiresAt?: Maybe<Scalars['timestamptz']>;
  readonly totpSecret?: Maybe<Scalars['String']>;
  readonly updatedAt?: Maybe<Scalars['timestamptz']>;
};

/** order by max() on columns of table "auth.users" */
export type Users_Max_Order_By = {
  readonly activeMfaType?: InputMaybe<Order_By>;
  readonly avatarUrl?: InputMaybe<Order_By>;
  readonly createdAt?: InputMaybe<Order_By>;
  readonly currentChallenge?: InputMaybe<Order_By>;
  readonly defaultRole?: InputMaybe<Order_By>;
  readonly displayName?: InputMaybe<Order_By>;
  readonly email?: InputMaybe<Order_By>;
  readonly id?: InputMaybe<Order_By>;
  readonly lastSeen?: InputMaybe<Order_By>;
  readonly locale?: InputMaybe<Order_By>;
  readonly newEmail?: InputMaybe<Order_By>;
  readonly otpHash?: InputMaybe<Order_By>;
  readonly otpHashExpiresAt?: InputMaybe<Order_By>;
  readonly otpMethodLastUsed?: InputMaybe<Order_By>;
  readonly passwordHash?: InputMaybe<Order_By>;
  readonly phoneNumber?: InputMaybe<Order_By>;
  readonly ticket?: InputMaybe<Order_By>;
  readonly ticketExpiresAt?: InputMaybe<Order_By>;
  readonly totpSecret?: InputMaybe<Order_By>;
  readonly updatedAt?: InputMaybe<Order_By>;
};

/** aggregate min on columns */
export type Users_Min_Fields = {
  readonly __typename?: 'users_min_fields';
  readonly activeMfaType?: Maybe<Scalars['String']>;
  readonly avatarUrl?: Maybe<Scalars['String']>;
  readonly createdAt?: Maybe<Scalars['timestamptz']>;
  readonly currentChallenge?: Maybe<Scalars['String']>;
  readonly defaultRole?: Maybe<Scalars['String']>;
  readonly displayName?: Maybe<Scalars['String']>;
  readonly email?: Maybe<Scalars['citext']>;
  readonly id?: Maybe<Scalars['uuid']>;
  readonly lastSeen?: Maybe<Scalars['timestamptz']>;
  readonly locale?: Maybe<Scalars['String']>;
  readonly newEmail?: Maybe<Scalars['citext']>;
  readonly otpHash?: Maybe<Scalars['String']>;
  readonly otpHashExpiresAt?: Maybe<Scalars['timestamptz']>;
  readonly otpMethodLastUsed?: Maybe<Scalars['String']>;
  readonly passwordHash?: Maybe<Scalars['String']>;
  readonly phoneNumber?: Maybe<Scalars['String']>;
  readonly ticket?: Maybe<Scalars['String']>;
  readonly ticketExpiresAt?: Maybe<Scalars['timestamptz']>;
  readonly totpSecret?: Maybe<Scalars['String']>;
  readonly updatedAt?: Maybe<Scalars['timestamptz']>;
};

/** order by min() on columns of table "auth.users" */
export type Users_Min_Order_By = {
  readonly activeMfaType?: InputMaybe<Order_By>;
  readonly avatarUrl?: InputMaybe<Order_By>;
  readonly createdAt?: InputMaybe<Order_By>;
  readonly currentChallenge?: InputMaybe<Order_By>;
  readonly defaultRole?: InputMaybe<Order_By>;
  readonly displayName?: InputMaybe<Order_By>;
  readonly email?: InputMaybe<Order_By>;
  readonly id?: InputMaybe<Order_By>;
  readonly lastSeen?: InputMaybe<Order_By>;
  readonly locale?: InputMaybe<Order_By>;
  readonly newEmail?: InputMaybe<Order_By>;
  readonly otpHash?: InputMaybe<Order_By>;
  readonly otpHashExpiresAt?: InputMaybe<Order_By>;
  readonly otpMethodLastUsed?: InputMaybe<Order_By>;
  readonly passwordHash?: InputMaybe<Order_By>;
  readonly phoneNumber?: InputMaybe<Order_By>;
  readonly ticket?: InputMaybe<Order_By>;
  readonly ticketExpiresAt?: InputMaybe<Order_By>;
  readonly totpSecret?: InputMaybe<Order_By>;
  readonly updatedAt?: InputMaybe<Order_By>;
};

/** response of any mutation on the table "auth.users" */
export type Users_Mutation_Response = {
  readonly __typename?: 'users_mutation_response';
  /** number of rows affected by the mutation */
  readonly affected_rows: Scalars['Int'];
  /** data from the rows affected by the mutation */
  readonly returning: ReadonlyArray<Users>;
};

/** input type for inserting object relation for remote table "auth.users" */
export type Users_Obj_Rel_Insert_Input = {
  readonly data: Users_Insert_Input;
  /** upsert condition */
  readonly on_conflict?: InputMaybe<Users_On_Conflict>;
};

/** on_conflict condition type for table "auth.users" */
export type Users_On_Conflict = {
  readonly constraint: Users_Constraint;
  readonly update_columns?: ReadonlyArray<Users_Update_Column>;
  readonly where?: InputMaybe<Users_Bool_Exp>;
};

/** Ordering options when selecting data from "auth.users". */
export type Users_Order_By = {
  readonly activeMfaType?: InputMaybe<Order_By>;
  readonly avatarUrl?: InputMaybe<Order_By>;
  readonly createdAt?: InputMaybe<Order_By>;
  readonly currentChallenge?: InputMaybe<Order_By>;
  readonly defaultRole?: InputMaybe<Order_By>;
  readonly defaultRoleByRole?: InputMaybe<AuthRoles_Order_By>;
  readonly disabled?: InputMaybe<Order_By>;
  readonly displayName?: InputMaybe<Order_By>;
  readonly email?: InputMaybe<Order_By>;
  readonly emailVerified?: InputMaybe<Order_By>;
  readonly id?: InputMaybe<Order_By>;
  readonly isAnonymous?: InputMaybe<Order_By>;
  readonly lastSeen?: InputMaybe<Order_By>;
  readonly locale?: InputMaybe<Order_By>;
  readonly metadata?: InputMaybe<Order_By>;
  readonly newEmail?: InputMaybe<Order_By>;
  readonly otpHash?: InputMaybe<Order_By>;
  readonly otpHashExpiresAt?: InputMaybe<Order_By>;
  readonly otpMethodLastUsed?: InputMaybe<Order_By>;
  readonly passwordHash?: InputMaybe<Order_By>;
  readonly phoneNumber?: InputMaybe<Order_By>;
  readonly phoneNumberVerified?: InputMaybe<Order_By>;
  readonly refreshTokens_aggregate?: InputMaybe<AuthRefreshTokens_Aggregate_Order_By>;
  readonly roles_aggregate?: InputMaybe<AuthUserRoles_Aggregate_Order_By>;
  readonly securityKeys_aggregate?: InputMaybe<AuthUserSecurityKeys_Aggregate_Order_By>;
  readonly ticket?: InputMaybe<Order_By>;
  readonly ticketExpiresAt?: InputMaybe<Order_By>;
  readonly totpSecret?: InputMaybe<Order_By>;
  readonly updatedAt?: InputMaybe<Order_By>;
  readonly userProviders_aggregate?: InputMaybe<AuthUserProviders_Aggregate_Order_By>;
};

/** primary key columns input for table: auth.users */
export type Users_Pk_Columns_Input = {
  readonly id: Scalars['uuid'];
};

/** prepend existing jsonb value of filtered columns with new jsonb value */
export type Users_Prepend_Input = {
  readonly metadata?: InputMaybe<Scalars['jsonb']>;
};

/** select columns of table "auth.users" */
export type Users_Select_Column =
  /** column name */
  | 'activeMfaType'
  /** column name */
  | 'avatarUrl'
  /** column name */
  | 'createdAt'
  /** column name */
  | 'currentChallenge'
  /** column name */
  | 'defaultRole'
  /** column name */
  | 'disabled'
  /** column name */
  | 'displayName'
  /** column name */
  | 'email'
  /** column name */
  | 'emailVerified'
  /** column name */
  | 'id'
  /** column name */
  | 'isAnonymous'
  /** column name */
  | 'lastSeen'
  /** column name */
  | 'locale'
  /** column name */
  | 'metadata'
  /** column name */
  | 'newEmail'
  /** column name */
  | 'otpHash'
  /** column name */
  | 'otpHashExpiresAt'
  /** column name */
  | 'otpMethodLastUsed'
  /** column name */
  | 'passwordHash'
  /** column name */
  | 'phoneNumber'
  /** column name */
  | 'phoneNumberVerified'
  /** column name */
  | 'ticket'
  /** column name */
  | 'ticketExpiresAt'
  /** column name */
  | 'totpSecret'
  /** column name */
  | 'updatedAt';

/** select "users_aggregate_bool_exp_bool_and_arguments_columns" columns of table "auth.users" */
export type Users_Select_Column_Users_Aggregate_Bool_Exp_Bool_And_Arguments_Columns =
  /** column name */
  | 'disabled'
  /** column name */
  | 'emailVerified'
  /** column name */
  | 'isAnonymous'
  /** column name */
  | 'phoneNumberVerified';

/** select "users_aggregate_bool_exp_bool_or_arguments_columns" columns of table "auth.users" */
export type Users_Select_Column_Users_Aggregate_Bool_Exp_Bool_Or_Arguments_Columns =
  /** column name */
  | 'disabled'
  /** column name */
  | 'emailVerified'
  /** column name */
  | 'isAnonymous'
  /** column name */
  | 'phoneNumberVerified';

/** input type for updating data in table "auth.users" */
export type Users_Set_Input = {
  readonly activeMfaType?: InputMaybe<Scalars['String']>;
  readonly avatarUrl?: InputMaybe<Scalars['String']>;
  readonly createdAt?: InputMaybe<Scalars['timestamptz']>;
  readonly currentChallenge?: InputMaybe<Scalars['String']>;
  readonly defaultRole?: InputMaybe<Scalars['String']>;
  readonly disabled?: InputMaybe<Scalars['Boolean']>;
  readonly displayName?: InputMaybe<Scalars['String']>;
  readonly email?: InputMaybe<Scalars['citext']>;
  readonly emailVerified?: InputMaybe<Scalars['Boolean']>;
  readonly id?: InputMaybe<Scalars['uuid']>;
  readonly isAnonymous?: InputMaybe<Scalars['Boolean']>;
  readonly lastSeen?: InputMaybe<Scalars['timestamptz']>;
  readonly locale?: InputMaybe<Scalars['String']>;
  readonly metadata?: InputMaybe<Scalars['jsonb']>;
  readonly newEmail?: InputMaybe<Scalars['citext']>;
  readonly otpHash?: InputMaybe<Scalars['String']>;
  readonly otpHashExpiresAt?: InputMaybe<Scalars['timestamptz']>;
  readonly otpMethodLastUsed?: InputMaybe<Scalars['String']>;
  readonly passwordHash?: InputMaybe<Scalars['String']>;
  readonly phoneNumber?: InputMaybe<Scalars['String']>;
  readonly phoneNumberVerified?: InputMaybe<Scalars['Boolean']>;
  readonly ticket?: InputMaybe<Scalars['String']>;
  readonly ticketExpiresAt?: InputMaybe<Scalars['timestamptz']>;
  readonly totpSecret?: InputMaybe<Scalars['String']>;
  readonly updatedAt?: InputMaybe<Scalars['timestamptz']>;
};

/** Streaming cursor of the table "users" */
export type Users_Stream_Cursor_Input = {
  /** Stream column input with initial value */
  readonly initial_value: Users_Stream_Cursor_Value_Input;
  /** cursor ordering */
  readonly ordering?: InputMaybe<Cursor_Ordering>;
};

/** Initial value of the column from where the streaming should start */
export type Users_Stream_Cursor_Value_Input = {
  readonly activeMfaType?: InputMaybe<Scalars['String']>;
  readonly avatarUrl?: InputMaybe<Scalars['String']>;
  readonly createdAt?: InputMaybe<Scalars['timestamptz']>;
  readonly currentChallenge?: InputMaybe<Scalars['String']>;
  readonly defaultRole?: InputMaybe<Scalars['String']>;
  readonly disabled?: InputMaybe<Scalars['Boolean']>;
  readonly displayName?: InputMaybe<Scalars['String']>;
  readonly email?: InputMaybe<Scalars['citext']>;
  readonly emailVerified?: InputMaybe<Scalars['Boolean']>;
  readonly id?: InputMaybe<Scalars['uuid']>;
  readonly isAnonymous?: InputMaybe<Scalars['Boolean']>;
  readonly lastSeen?: InputMaybe<Scalars['timestamptz']>;
  readonly locale?: InputMaybe<Scalars['String']>;
  readonly metadata?: InputMaybe<Scalars['jsonb']>;
  readonly newEmail?: InputMaybe<Scalars['citext']>;
  readonly otpHash?: InputMaybe<Scalars['String']>;
  readonly otpHashExpiresAt?: InputMaybe<Scalars['timestamptz']>;
  readonly otpMethodLastUsed?: InputMaybe<Scalars['String']>;
  readonly passwordHash?: InputMaybe<Scalars['String']>;
  readonly phoneNumber?: InputMaybe<Scalars['String']>;
  readonly phoneNumberVerified?: InputMaybe<Scalars['Boolean']>;
  readonly ticket?: InputMaybe<Scalars['String']>;
  readonly ticketExpiresAt?: InputMaybe<Scalars['timestamptz']>;
  readonly totpSecret?: InputMaybe<Scalars['String']>;
  readonly updatedAt?: InputMaybe<Scalars['timestamptz']>;
};

/** update columns of table "auth.users" */
export type Users_Update_Column =
  /** column name */
  | 'activeMfaType'
  /** column name */
  | 'avatarUrl'
  /** column name */
  | 'createdAt'
  /** column name */
  | 'currentChallenge'
  /** column name */
  | 'defaultRole'
  /** column name */
  | 'disabled'
  /** column name */
  | 'displayName'
  /** column name */
  | 'email'
  /** column name */
  | 'emailVerified'
  /** column name */
  | 'id'
  /** column name */
  | 'isAnonymous'
  /** column name */
  | 'lastSeen'
  /** column name */
  | 'locale'
  /** column name */
  | 'metadata'
  /** column name */
  | 'newEmail'
  /** column name */
  | 'otpHash'
  /** column name */
  | 'otpHashExpiresAt'
  /** column name */
  | 'otpMethodLastUsed'
  /** column name */
  | 'passwordHash'
  /** column name */
  | 'phoneNumber'
  /** column name */
  | 'phoneNumberVerified'
  /** column name */
  | 'ticket'
  /** column name */
  | 'ticketExpiresAt'
  /** column name */
  | 'totpSecret'
  /** column name */
  | 'updatedAt';

export type Users_Updates = {
  /** append existing jsonb value of filtered columns with new jsonb value */
  readonly _append?: InputMaybe<Users_Append_Input>;
  /** delete the field or element with specified path (for JSON arrays, negative integers count from the end) */
  readonly _delete_at_path?: InputMaybe<Users_Delete_At_Path_Input>;
  /** delete the array element with specified index (negative integers count from the end). throws an error if top level container is not an array */
  readonly _delete_elem?: InputMaybe<Users_Delete_Elem_Input>;
  /** delete key/value pair or string element. key/value pairs are matched based on their key value */
  readonly _delete_key?: InputMaybe<Users_Delete_Key_Input>;
  /** prepend existing jsonb value of filtered columns with new jsonb value */
  readonly _prepend?: InputMaybe<Users_Prepend_Input>;
  /** sets the columns of the filtered rows to the given values */
  readonly _set?: InputMaybe<Users_Set_Input>;
  /** filter the rows which have to be updated */
  readonly where: Users_Bool_Exp;
};

/** Boolean expression to compare columns of type "uuid". All fields are combined with logical 'AND'. */
export type Uuid_Comparison_Exp = {
  readonly _eq?: InputMaybe<Scalars['uuid']>;
  readonly _gt?: InputMaybe<Scalars['uuid']>;
  readonly _gte?: InputMaybe<Scalars['uuid']>;
  readonly _in?: InputMaybe<ReadonlyArray<Scalars['uuid']>>;
  readonly _is_null?: InputMaybe<Scalars['Boolean']>;
  readonly _lt?: InputMaybe<Scalars['uuid']>;
  readonly _lte?: InputMaybe<Scalars['uuid']>;
  readonly _neq?: InputMaybe<Scalars['uuid']>;
  readonly _nin?: InputMaybe<ReadonlyArray<Scalars['uuid']>>;
};

export type GetBacklogQueryVariables = Exact<{
  userId: Scalars['uuid'];
}>;


export type GetBacklogQuery = { readonly __typename?: 'query_root', readonly backlog_by_pk?: Option<{ readonly __typename?: 'backlog', readonly id: string, readonly updatedAt: string, readonly user_id: string, readonly createdAt: string, readonly ListTask: ReadonlyArray<{ readonly __typename?: 'task', readonly description: string, readonly timeEnd?: Option<string>, readonly title: string, readonly updatedAt: string, readonly deadline?: Option<string> }> }> };


export const GetBacklogDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"query","name":{"kind":"Name","value":"getBacklog"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"userId"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"uuid"}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"backlog_by_pk"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"id"},"value":{"kind":"Variable","name":{"kind":"Name","value":"userId"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"updatedAt"}},{"kind":"Field","name":{"kind":"Name","value":"user_id"}},{"kind":"Field","name":{"kind":"Name","value":"createdAt"}},{"kind":"Field","name":{"kind":"Name","value":"ListTask"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"description"}},{"kind":"Field","name":{"kind":"Name","value":"timeEnd"}},{"kind":"Field","name":{"kind":"Name","value":"title"}},{"kind":"Field","name":{"kind":"Name","value":"updatedAt"}},{"kind":"Field","name":{"kind":"Name","value":"deadline"}}]}}]}}]}}]} as unknown as DocumentNode<GetBacklogQuery, GetBacklogQueryVariables>;