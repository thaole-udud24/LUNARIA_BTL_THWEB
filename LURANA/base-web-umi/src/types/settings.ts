// =========================
// THEME
// =========================

export type ThemeType =
  | 'light'
  | 'dark';

// =========================
// STORE INFO
// =========================

/**
 * BUSINESS ENTITY
 *
 * Chỉ chứa:
 * - persistence data
 * - business data
 *
 * KHÔNG chứa:
 * - UI state
 * - runtime data
 * - upload preview
 */

export interface StoreInfo {
  storeName: string;

  email: string;

  phone: string;

  address: string;

  description: string;

  logo?: string;

  facebook?: string;

  instagram?: string;

  tiktok?: string;

  youtube?: string;

  zalo?: string;
}

// =========================
// ACCOUNT INFO
// =========================

/**
 * BUSINESS ENTITY
 *
 * Thông tin tài khoản admin
 *
 * KHÔNG chứa:
 * - password
 * - UI state
 */

export interface AccountInfo {
  id: number;

  fullName: string;

  email: string;

  username: string;

  role: string;

  avatar?: string;

  createdAt: string;

  lastLoginAt: string;
}

// =========================
// USER PREFERENCES
// =========================

/**
 * BUSINESS ENTITY
 *
 * Cài đặt cá nhân
 */

export interface UserPreferences {
  language: string;

  timezone: string;

  theme: ThemeType;

  emailNotification: boolean;

  showHelp: boolean;

  autoCollapseMenu: boolean;
}

// =========================
// STORE PAYLOAD
// =========================

export interface UpdateStoreInfoPayload {
  storeName: string;

  email: string;

  phone: string;

  address: string;

  description: string;

  logo?: string;

  facebook?: string;

  instagram?: string;

  tiktok?: string;

  youtube?: string;

  zalo?: string;
}

// =========================
// ACCOUNT PAYLOAD
// =========================

export interface UpdateAccountInfoPayload {
  fullName: string;

  email: string;

  avatar?: string;
}

// =========================
// CHANGE PASSWORD
// =========================

export interface ChangePasswordPayload {
  currentPassword: string;

  newPassword: string;

  confirmPassword: string;
}

// =========================
// PREFERENCES PAYLOAD
// =========================

export interface UpdatePreferencesPayload {
  language: string;

  timezone: string;

  theme: ThemeType;

  emailNotification: boolean;

  showHelp: boolean;

  autoCollapseMenu: boolean;
}

export interface AccountFormValues {
  fullName: string;
  email: string;
  username: string;
}