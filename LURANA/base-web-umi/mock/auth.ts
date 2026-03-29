export default {
  // Login 
  'POST /api/auth/login': (req: any, res: any) => {
  const body: any = req.body;
  const email = body?.email;
  const password = body?.password;

  // fake account
  if (email === 'admin@gmail.com' && password === '123456') {
    return res.send({
      success: true,
      message: 'Đăng nhập thành công',
      data: {
        user: {
          id: 1,
          email,
          name: 'Admin',
        },
        access_token: 'fake-token-123',
      },
    });
  }

  return res.send({
    success: false,
    message: 'Sai email hoặc mật khẩu',
    });
  },
  // ✅ gửi OTP
  'POST /api/auth/send-otp': (req: any, res: any) => {
    const body = req.body || {};
    const { email } = body;

    return res.send({
      success: true,
      message: 'OTP đã gửi về email',
      data: {
        email,
        otp: '1234', // fake OTP
      },
    });
  },

  // ✅ verify OTP
  'POST /api/auth/verify-otp': (req: any, res: any) => {
    const { otp } = req.body || {};

    if (otp === '1234') {
      return res.send({
        success: true,
        message: 'OTP hợp lệ',
      });
    }

    return res.send({
      success: false,
      message: 'OTP không đúng',
    });
  },

  // ✅ reset password
  'POST /api/auth/reset-password': (req: any, res: any) => {
    const body: any = req.body;
    const email = body?.email;
    const password = body?.password;

    return res.send({
      success: true,
      message: 'Đổi mật khẩu thành công',
    });
  },
};