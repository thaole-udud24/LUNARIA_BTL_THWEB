import React, { useState } from 'react';
import { history, useLocation } from 'umi';
// import styles from './styles.less';
import { verifyOtp } from '@/services/TaiKhoan/auth.api';
import { message } from 'antd';

export default () => {
  const location = useLocation() as any;
  const email = location.state?.email || localStorage.getItem('reset_email') || '';

  const [otp, setOtp] = useState(['', '', '', '']);

  const handleChange = (value: string, index: number) => {
    if (!/^[0-9]?$/.test(value)) return;

    const newOtp = [...otp];
    newOtp[index] = value;
    setOtp(newOtp);

    if (value && index < 3) {
      const next = document.getElementById(`otp-${index + 1}`);
      next?.focus();
    }
  };

  const handleSubmit = async () => {
    const code = otp.join('');

    if (code.length < 4) {
        return message.error('Nhập đủ OTP');
    }

    const res = await verifyOtp({ email, otp: code });

    if (!res.success) {
        return message.error(res.message);
    }

    message.success(res.message);

    history.push('/auth/reset-password', { email });
    };

  return (
    <div className="auth-container">
      <div className="auth-left"></div>

      <div className="auth-right">
        <div className="auth-form">
          <h2>Enter Code</h2>

          <div className="auth-otp">
            {otp.map((item, index) => (
              <input
                id={`otp-${index}`}
                key={index}
                maxLength={1}
                value={item}
                onChange={(e) => handleChange(e.target.value, index)}
              />
            ))}
          </div>

          <input value={email} disabled />

          <button onClick={handleSubmit}>
            Thiết lập lại mật khẩu
          </button>
        </div>
      </div>
    </div>
  );
};