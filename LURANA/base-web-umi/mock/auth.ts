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

  // Register 

  'POST /api/auth/register': (req: any, res: any) => {
    const { name, email } = req.body;

    return res.send({
      success: true,
      message: 'Đăng ký thành công',
      data: {
        id: 1,
        name,
        email,
      },
    });
  },

  // forgot password 
  'POST /api/auth/forgot-password': (req: any, res: any) => {
    const { email } = req.body;

    return res.send({
      success: true,
      message: `Email reset đã gửi tới ${email}`,
    });
  },

  // otp 
  
  'POST /api/auth/verify-code': (req: any, res: any) => {
    const { code } = req.body;

    if (code === '1234') {
      return res.send({
        success: true,
        message: 'Xác thực thành công',
      });
    }

    return res.send({
      success: false,
      message: 'Mã không đúng',
    });
  },

  'POST /api/auth/resend-code': (req: any, res: any) => {
    return res.send({
      success: true,
      message: 'Đã gửi lại mã',
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