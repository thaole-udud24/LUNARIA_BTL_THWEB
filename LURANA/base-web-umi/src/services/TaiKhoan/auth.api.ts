import request from 'umi-request';

export async function login(data: {
  email: string;
  password: string;
}) {
  return request('/api/auth/login', {
    method: 'POST',
    data,
  });
}

// REGESTER 
export async function register(data: {
  name: string;
  email: string;
  password: string;
}) {
  return request('/api/register', {
    method: 'POST',
    data,
  });
}


// gửi OTP
export async function sendOtp(data: { email: string }) {
  return request('/api/auth/send-otp', {
    method: 'POST',
    data,
  });
}

// verify OTP
export async function verifyOtp(data: { email: string; otp: string }) {
  return request('/api/auth/verify-otp', {
    method: 'POST',
    data,
  });
}

// reset password
export async function resetPassword(data: {
  email: string;
  password: string;
}) {
  return request('/api/auth/reset-password', {
    method: 'POST',
    data,
  });
}