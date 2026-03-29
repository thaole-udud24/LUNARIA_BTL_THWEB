// import styles from './index.less';
import { useState } from 'react';
import { history } from 'umi';

export default function RegisterPage() {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleRegister = async () => {
    // hiện tại mock đơn giản
    if (!name || !email || !password) {
      alert('Vui lòng nhập đầy đủ thông tin');
      return;
    }

    // Fake success
    alert('Đăng ký thành công!');
    history.push('/auth/login');
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
          <div className="auth-top">
            <button
              className="auth-back"
              onClick={() => history.push('/auth/login')}
            >
              ← Trở lại
            </button>
          </div>

          <h2>Tạo tài khoản của bạn </h2>
          <p className="auth-desc">
            Tạo tài khoản mua sắm của bạn
          </p>

          <button className="auth-google">
            🔵 Sign up with Google
          </button>

          <div className="auth-divider">Or use email</div>

          <input
            placeholder="Họ và tên"
            value={name}
            onChange={(e) => setName(e.target.value)}
          />

          <input
            placeholder="Email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />

          <input
            type="password"
            placeholder="Mật khẩu"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />

          <button className="auth-registerBtn" onClick={handleRegister}>
            Đăng ký
          </button>

          <p className="auth-back">
            Bạn đã có tài khoản?{' '}
            <span onClick={() => history.push('/auth/login')}>
              Đăng nhập
            </span>
          </p>
        </div>
      </div>
    </div>
  );
}