import {
  useEffect,
} from 'react';

import {
  Button,
  Form,
  Space,
  Switch,
  Typography,
} from 'antd';

import type {
  UserPreferences,
} from '@/types/settings';

const {
  Text,
} = Typography;

// =========================
// PROPS
// =========================

interface PreferencesTabProps {
  initialValues: UserPreferences;

  onSubmit: (
    values: UserPreferences,
  ) => void;
}

// =========================
// COMPONENT
// =========================

const PreferencesTab = ({
  initialValues,
  onSubmit,
}: PreferencesTabProps) => {

  const [form] =
    Form.useForm();

  useEffect(() => {

    form.setFieldsValue(
      initialValues,
    );

  }, [
    form,
    initialValues,
  ]);

  // =========================
  // SUBMIT
  // =========================

  const handleFinish =
    (
      values: UserPreferences,
    ) => {

      onSubmit(values);
    };

  return (

    <div className="preferences-form">

      <Text type="secondary">

        Thiết lập các tùy chọn thông báo và hành vi của hệ thống quản trị.

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

        {/* EMAIL */}

        <div className="preference-item">

          <div className="preference-info">

            <h4>
              Thông báo Email
            </h4>

            <p>
              Nhận email khi có hoạt động quan trọng trong hệ thống.
            </p>

          </div>

          <Form.Item
            name="emailNotification"
            valuePropName="checked"
            noStyle
          >

            <Switch />

          </Form.Item>

        </div>

        {/* ORDER */}

        <div className="preference-item">

          <div className="preference-info">

            <h4>
              Thông báo đơn hàng
            </h4>

            <p>
              Nhận thông báo khi có đơn hàng mới hoặc thay đổi trạng thái đơn hàng.
            </p>

          </div>

          <Form.Item
            name="orderNotification"
            valuePropName="checked"
            noStyle
          >

            <Switch />

          </Form.Item>

        </div>

        {/* PROMOTION */}

        <div className="preference-item">

          <div className="preference-info">

            <h4>
              Thông báo ưu đãi
            </h4>

            <p>
              Nhận thông báo liên quan đến chương trình khuyến mãi và voucher.
            </p>

          </div>

          <Form.Item
            name="promotionNotification"
            valuePropName="checked"
            noStyle
          >

            <Switch />

          </Form.Item>

        </div>

        {/* REVIEW */}

        <div className="preference-item">

          <div className="preference-info">

            <h4>
              Thông báo đánh giá
            </h4>

            <p>
              Nhận thông báo khi khách hàng gửi đánh giá sản phẩm mới.
            </p>

          </div>

          <Form.Item
            name="reviewNotification"
            valuePropName="checked"
            noStyle
          >

            <Switch />

          </Form.Item>

        </div>

        {/* SYSTEM */}

        <div className="preference-item">

          <div className="preference-info">

            <h4>
              Thông báo hệ thống
            </h4>

            <p>
              Hiển thị thông báo về bảo trì, cập nhật hoặc cảnh báo hệ thống.
            </p>

          </div>

          <Form.Item
            name="systemNotification"
            valuePropName="checked"
            noStyle
          >

            <Switch />

          </Form.Item>

        </div>

        {/* ACTION */}

        <div className="change-password-actions">

          <Space>

            <Button
              onClick={() =>
                form.resetFields()
              }
            >
              Khôi phục
            </Button>

            <Button
              type="primary"
              htmlType="submit"
            >
              Lưu tùy chọn
            </Button>

          </Space>

        </div>

      </Form>

    </div>
  );
};

export default PreferencesTab;