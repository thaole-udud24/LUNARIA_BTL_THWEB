import {
  Button,
  Form,
  Input,
  Space,
  Typography,
} from 'antd';

import type {
  ChangePasswordPayload,
} from '@/types/settings';

const {
  Text,
} = Typography;

// =========================
// PROPS
// =========================

interface ChangePasswordTabProps {
  onSubmit: (
    payload: ChangePasswordPayload,
  ) => void;
}

// =========================
// COMPONENT
// =========================

const ChangePasswordTab = ({
  onSubmit,
}: ChangePasswordTabProps) => {

  const [form] =
    Form.useForm();

  // =========================
  // SUBMIT
  // =========================

  const handleFinish =
    (
      values: {
        currentPassword: string;

        newPassword: string;

        confirmPassword: string;
      },
    ) => {

      onSubmit({
        currentPassword:
            values.currentPassword,

        newPassword:
            values.newPassword,

        confirmPassword:
            values.confirmPassword,
        });

      form.resetFields();
    };

  return (

    <div className="change-password-form">

      <Text type="secondary">

        Thay đổi mật khẩu tài khoản quản trị để tăng cường bảo mật hệ thống.

      </Text>

      <Form
        form={form}
        layout="vertical"
        style={{
          marginTop: 24,
        }}
        onFinish={
          handleFinish
        }
      >

        {/* CURRENT PASSWORD */}

        <Form.Item
          label="Mật khẩu hiện tại"
          name="currentPassword"
          rules={[
            {
              required: true,
              message:
                'Vui lòng nhập mật khẩu hiện tại',
            },
          ]}
        >

          <Input.Password
            placeholder="Nhập mật khẩu hiện tại"
          />

        </Form.Item>

        {/* NEW PASSWORD */}

        <Form.Item
          label="Mật khẩu mới"
          name="newPassword"
          rules={[
            {
              required: true,
              message:
                'Vui lòng nhập mật khẩu mới',
            },

            {
              min: 6,
              message:
                'Mật khẩu phải có ít nhất 6 ký tự',
            },
          ]}
        >

          <Input.Password
            placeholder="Nhập mật khẩu mới"
          />

        </Form.Item>

        {/* CONFIRM PASSWORD */}

        <Form.Item
          label="Xác nhận mật khẩu mới"
          name="confirmPassword"
          dependencies={[
            'newPassword',
          ]}
          rules={[
            {
              required: true,
              message:
                'Vui lòng xác nhận mật khẩu',
            },

            ({
              getFieldValue,
            }) => ({
              validator(
                _,
                value,
              ) {

                if (
                  !value ||
                  getFieldValue(
                    'newPassword',
                  ) === value
                ) {

                  return Promise.resolve();
                }

                return Promise.reject(
                  new Error(
                    'Mật khẩu xác nhận không khớp',
                  ),
                );
              },
            }),
          ]}
        >

          <Input.Password
            placeholder="Nhập lại mật khẩu mới"
          />

        </Form.Item>

        {/* ACTIONS */}

        <div className="change-password-actions">

          <Space>

            <Button
              onClick={() =>
                form.resetFields()
              }
            >
              Làm mới
            </Button>

            <Button
              type="primary"
              htmlType="submit"
            >
              Cập nhật mật khẩu
            </Button>

          </Space>

        </div>

      </Form>

    </div>
  );
};

export default ChangePasswordTab;