import React, { useState } from 'react';
import { history, useLocation } from 'umi';
// import styles from './styles.less';
import { resetPassword } from '@/services/TaiKhoan/auth.api';
import { message } from 'antd';

export default () => {
  const location = useLocation() as any;
  const email = location.state?.email;

  const [password, setPassword] = useState('');
  const [confirm, setConfirm] = useState('');

  const handleSubmit = async () => {
    if (password.length < 8) {
        return message.error('Mật khẩu tối thiểu 8 ký tự');
    }

    if (password !== confirm) {
        return message.error('Mật khẩu không khớp');
    }

    const res = await resetPassword({ email, password });

    if (res.success) {
        message.success(res.message);
        history.push('/auth/reset-success');
    }
    };

  return (
    <div className="auth-container">
      <div className="auth-left"></div>

      <div className="auth-right">
        <div className="auth-form">
          <h2>Cài đặt mật khẩu</h2>

          <input
            type="password"
            placeholder="Mật khẩu"
            onChange={(e) => setPassword(e.target.value)}
          />

          <input
            type="password"
            placeholder="Nhắc lại mật khẩu"
            onChange={(e) => setConfirm(e.target.value)}
          />

          <button onClick={handleSubmit}>
            Thay đổi mật khẩu
          </button>
        </div>
      </div>
    </div>
  );
};