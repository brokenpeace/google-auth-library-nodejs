/**
 * Copyright 2014 Google Inc. All Rights Reserved.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *      http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */

export interface Credentials {
  refresh_token?: string;
  expiry_date?: number;
  access_token?: string;
  token_type?: string;
}

export interface JWTInput {
  type?: string;
  client_email?: string;
  private_key?: string;
  project_id?: string;
  client_id?: string;
  client_secret?: string;
  refresh_token?: string;
}