import React, { useState } from 'react';
import { history } from 'umi';
import { sendOtp } from '@/services/TaiKhoan/auth.api';
import { message } from 'antd';

export default () => {
  const [email, setEmail] = useState('');

  const handleSubmit = async () => {
    if (!email) {
      return message.error('Nhập email');
    }

    const res = await sendOtp({ email });

    if (res.success) {
      message.success(res.message);

      // chuyển sang trang nhập OTP
      history.push('/auth/verify-code', { email });
    } else {
      message.error(res.message);
    }
  };

  return (
    <div className="auth-container">
      {/* LEFT */}
      <div className="auth-left">
        <div className="auth-overlay">
          <h1>LUNARIA</h1>
          <p>
            Mỗi buổi sáng là một khởi đầu mới, khi làn da cần được đánh thức
            bằng sự dịu dàng.
          </p>
          <button>Mua ngay</button>
        </div>
      </div>

      {/* RIGHT */}
      <div className="auth-right">
        <div className="auth-form">
          <h2>Quên mật khẩu</h2>
          <p>Đừng lo lắng, chúng tôi sẽ giúp bạn thiết lập lại mật khẩu</p>

          <label>Email:</label>
          <input
            type="text"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />

          <button
            className="auth-loginBtn"
            type="button"
            onClick={handleSubmit}
          >
            Đăng ký
          </button>

          <div className="auth-back">
            Trở lại?{' '}
            <span onClick={() => history.push('/auth/login')}>
              Đăng nhập
            </span>
          </div>
        </div>
      </div>
    </div>
  );
};