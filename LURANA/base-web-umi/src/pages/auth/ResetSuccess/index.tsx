import React from 'react';
import { history } from 'umi';
// import styles from './styles.less';

export default () => {
  return (
    <div className="auth-container">
      <div className="auth-left"></div>

      <div className="auth-right">
        <div className="auth-success">
          <h2>Hoàn thành!</h2>
          <p>Mật khẩu đã được cập nhật</p>

          <button onClick={() => history.push('/auth/login')}>
            Trở lại đăng nhập
          </button>
        </div>
      </div>
    </div>
  );
};