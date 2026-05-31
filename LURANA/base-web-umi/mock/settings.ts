let storeInfo = {
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

let accountInfo = {
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

let preferences = {
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
// STORE INFO
// =========================

export default {

  'GET /api/settings/store': (
    req: any,
    res: any,
  ) => {

    res.send({
      success: true,

      data: storeInfo,
    });
  },

  'PUT /api/settings/store': (
    req: any,
    res: any,
  ) => {

    storeInfo = {
      ...storeInfo,

      ...req.body,
    };

    res.send({
      success: true,

      data: storeInfo,
    });
  },

  // =========================
  // ACCOUNT
  // =========================

  'GET /api/settings/account': (
    req: any,
    res: any,
  ) => {

    res.send({
      success: true,

      data: accountInfo,
    });
  },

  'PUT /api/settings/account': (
    req: any,
    res: any,
  ) => {

    accountInfo = {
      ...accountInfo,

      ...req.body,
    };

    res.send({
      success: true,

      data: accountInfo,
    });
  },

  // =========================
  // PASSWORD
  // =========================

  'POST /api/settings/change-password': (
    req: any,
    res: any,
  ) => {

    res.send({
      success: true,

      message:
        'Đổi mật khẩu thành công',
    });
  },

  // =========================
  // PREFERENCES
  // =========================

  'GET /api/settings/preferences': (
    req: any,
    res: any,
  ) => {

    res.send({
      success: true,

      data: preferences,
    });
  },

  'PUT /api/settings/preferences': (
    req: any,
    res: any,
  ) => {

    preferences = {
      ...preferences,

      ...req.body,
    };

    res.send({
      success: true,

      data: preferences,
    });
  },
};