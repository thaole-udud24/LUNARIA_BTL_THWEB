import type {
  BaseResponse,
} from '@/services/base/types';

import type {
  StoreInfo,
  AccountInfo,
  UserPreferences,
  UpdateStoreInfoPayload,
  UpdateAccountInfoPayload,
  UpdatePreferencesPayload,
  ChangePasswordPayload,
} from '@/types/settings';

// =========================
// STORAGE KEYS
// =========================

const STORE_INFO_KEY =
  'store_info';

const ACCOUNT_INFO_KEY =
  'account_info';

const PREFERENCES_KEY =
  'user_preferences';

const ACCOUNT_PASSWORD_KEY =
  'account_password';

// =========================
// DEFAULT STORE INFO
// =========================

const DEFAULT_STORE_INFO: StoreInfo =
  {
    storeName:
      'Lunaria Cosmetics',

    email:
      'support@lunaria.vn',

    phone:
      '0901234567',

    address:
      '123 Nguyễn Huệ, Quận 1, TP.HCM',

    description:
      'Lunaria Cosmetics - Mỹ phẩm chính hãng dành cho làn da khỏe đẹp.',

    logo: '',

    facebook:
      'https://facebook.com/lunaria',

    instagram:
      'https://instagram.com/lunaria',

    tiktok:
      'https://tiktok.com/@lunaria',

    youtube:
      'https://youtube.com/@lunaria',

    zalo:
      'https://zalo.me/lunaria',
  };

// =========================
// DEFAULT ACCOUNT
// =========================

const DEFAULT_ACCOUNT_INFO: AccountInfo =
  {
    id: 1,

    fullName:
      'Administrator',

    email:
      'admin@lunaria.vn',

    username:
      'admin',

    role:
      'Admin',

    avatar: '',

    createdAt:
      '2025-01-01 08:00',

    lastLoginAt:
      '2026-05-30 09:00',
  };

// =========================
// DEFAULT PREFERENCES
// =========================

const DEFAULT_PREFERENCES: UserPreferences =
  {
    language: 'vi',

    timezone:
      'Asia/Ho_Chi_Minh',

    theme: 'light',

    emailNotification:
      true,

    showHelp: true,

    autoCollapseMenu:
      false,
  };

// =========================
// SEED DATA
// =========================

const seedSettings =
  () => {

    if (
      !localStorage.getItem(
        STORE_INFO_KEY,
      )
    ) {

      localStorage.setItem(
        STORE_INFO_KEY,
        JSON.stringify(
          DEFAULT_STORE_INFO,
        ),
      );
    }

    if (
      !localStorage.getItem(
        ACCOUNT_INFO_KEY,
      )
    ) {

      localStorage.setItem(
        ACCOUNT_INFO_KEY,
        JSON.stringify(
          DEFAULT_ACCOUNT_INFO,
        ),
      );
    }

    if (
      !localStorage.getItem(
        PREFERENCES_KEY,
      )
    ) {

      localStorage.setItem(
        PREFERENCES_KEY,
        JSON.stringify(
          DEFAULT_PREFERENCES,
        ),
      );
    }

    if (
      !localStorage.getItem(
        ACCOUNT_PASSWORD_KEY,
      )
    ) {

      localStorage.setItem(
        ACCOUNT_PASSWORD_KEY,
        '123456',
      );
    }
  };

// =========================
// STORE HELPERS
// =========================

const getStoredStoreInfo =
  (): StoreInfo => {

    seedSettings();

    const stored =
      localStorage.getItem(
        STORE_INFO_KEY,
      );

    return stored
      ? JSON.parse(
          stored,
        )
      : DEFAULT_STORE_INFO;
  };

const saveStoreInfo =
  (
    data: StoreInfo,
  ) => {

    localStorage.setItem(
      STORE_INFO_KEY,
      JSON.stringify(data),
    );
  };

// =========================
// ACCOUNT HELPERS
// =========================

const getStoredAccountInfo =
  (): AccountInfo => {

    seedSettings();

    const stored =
      localStorage.getItem(
        ACCOUNT_INFO_KEY,
      );

    return stored
      ? JSON.parse(
          stored,
        )
      : DEFAULT_ACCOUNT_INFO;
  };

const saveAccountInfo =
  (
    data: AccountInfo,
  ) => {

    localStorage.setItem(
      ACCOUNT_INFO_KEY,
      JSON.stringify(data),
    );
  };

// =========================
// PREFERENCES HELPERS
// =========================

const getStoredPreferences =
  (): UserPreferences => {

    seedSettings();

    const stored =
      localStorage.getItem(
        PREFERENCES_KEY,
      );

    return stored
      ? JSON.parse(
          stored,
        )
      : DEFAULT_PREFERENCES;
  };

const savePreferences =
  (
    data: UserPreferences,
  ) => {

    localStorage.setItem(
      PREFERENCES_KEY,
      JSON.stringify(data),
    );
  };

// =========================
// STORE INFO
// =========================

export async function getStoreInfo(): Promise<
  BaseResponse<StoreInfo>
> {

  try {

    return {
      success: true,

      data:
        getStoredStoreInfo(),

      message:
        'Lấy thông tin cửa hàng thành công',
    };

  } catch {

    return {
      success: false,

      data:
        DEFAULT_STORE_INFO,

      message:
        'Không thể tải thông tin cửa hàng',
    };
  }
}

export async function updateStoreInfo(
  payload: UpdateStoreInfoPayload,
): Promise<
  BaseResponse<StoreInfo>
> {

  try {

    const updatedData =
      {
        ...getStoredStoreInfo(),

        ...payload,
      };

    saveStoreInfo(
      updatedData,
    );

    return {
      success: true,

      data:
        updatedData,

      message:
        'Cập nhật thông tin cửa hàng thành công',
    };

  } catch {

    return {
      success: false,

      data:
        getStoredStoreInfo(),

      message:
        'Không thể cập nhật thông tin cửa hàng',
    };
  }
}

// =========================
// ACCOUNT INFO
// =========================

export async function getAccountInfo(): Promise<
  BaseResponse<AccountInfo>
> {

  try {

    return {
      success: true,

      data:
        getStoredAccountInfo(),

      message:
        'Lấy thông tin tài khoản thành công',
    };

  } catch {

    return {
      success: false,

      data:
        DEFAULT_ACCOUNT_INFO,

      message:
        'Không thể tải thông tin tài khoản',
    };
  }
}

export async function updateAccountInfo(
  payload: UpdateAccountInfoPayload,
): Promise<
  BaseResponse<AccountInfo>
> {

  try {

    const updatedData =
      {
        ...getStoredAccountInfo(),

        ...payload,
      };

    saveAccountInfo(
      updatedData,
    );

    return {
      success: true,

      data:
        updatedData,

      message:
        'Cập nhật tài khoản thành công',
    };

  } catch {

    return {
      success: false,

      data:
        getStoredAccountInfo(),

      message:
        'Không thể cập nhật tài khoản',
    };
  }
}

// =========================
// CHANGE PASSWORD
// =========================

export async function changePassword(
  payload: ChangePasswordPayload,
): Promise<
  BaseResponse<null>
> {

  try {

    const currentPassword =
      localStorage.getItem(
        ACCOUNT_PASSWORD_KEY,
      );

    if (
      currentPassword !==
      payload.currentPassword
    ) {

      return {
        success: false,

        data: null,

        message:
          'Mật khẩu hiện tại không chính xác',
      };
    }

    localStorage.setItem(
      ACCOUNT_PASSWORD_KEY,
      payload.newPassword,
    );

    return {
      success: true,

      data: null,

      message:
        'Đổi mật khẩu thành công',
    };

  } catch {

    return {
      success: false,

      data: null,

      message:
        'Không thể đổi mật khẩu',
    };
  }
}

// =========================
// PREFERENCES
// =========================

export async function getPreferences(): Promise<
  BaseResponse<UserPreferences>
> {

  try {

    return {
      success: true,

      data:
        getStoredPreferences(),

      message:
        'Lấy cài đặt thành công',
    };

  } catch {

    return {
      success: false,

      data:
        DEFAULT_PREFERENCES,

      message:
        'Không thể tải cài đặt',
    };
  }
}

export async function updatePreferences(
  payload: UpdatePreferencesPayload,
): Promise<
  BaseResponse<UserPreferences>
> {

  try {

    const updatedData =
      {
        ...getStoredPreferences(),

        ...payload,
      };

    savePreferences(
      updatedData,
    );

    return {
      success: true,

      data:
        updatedData,

      message:
        'Cập nhật cài đặt thành công',
    };

  } catch {

    return {
      success: false,

      data:
        getStoredPreferences(),

      message:
        'Không thể cập nhật cài đặt',
    };
  }
}

// =========================
// RESET MOCK
// =========================

export async function resetMockSettings() {

  localStorage.setItem(
    STORE_INFO_KEY,
    JSON.stringify(
      DEFAULT_STORE_INFO,
    ),
  );

  localStorage.setItem(
    ACCOUNT_INFO_KEY,
    JSON.stringify(
      DEFAULT_ACCOUNT_INFO,
    ),
  );

  localStorage.setItem(
    PREFERENCES_KEY,
    JSON.stringify(
      DEFAULT_PREFERENCES,
    ),
  );

  localStorage.setItem(
    ACCOUNT_PASSWORD_KEY,
    '123456',
  );

  return {
    success: true,
  };
}