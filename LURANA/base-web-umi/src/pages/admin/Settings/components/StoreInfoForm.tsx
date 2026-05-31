import {
  useEffect,
} from 'react';

import {
  Button,
  Card,
  Col,
  Form,
  Input,
  Row,
  Space,
  Typography,
  Upload,
} from 'antd';

import {
  UploadOutlined,
} from '@ant-design/icons';

import type {
  StoreInfo,
} from '@/types/settings';

const {
  Title,
  Text,
} = Typography;

const {
  TextArea,
} = Input;

// =========================
// PROPS
// =========================

interface StoreInfoFormProps {
  initialValues: StoreInfo;

  onSubmit: (
    values: StoreInfo,
  ) => void;

  onCancel: () => void;
}

// =========================
// COMPONENT
// =========================

const StoreInfoForm = ({
  initialValues,
  onSubmit,
  onCancel,
}: StoreInfoFormProps) => {
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

  const handleFinish = (
    values: StoreInfo,
  ) => {
    onSubmit({
      ...initialValues,
      ...values,
    });
  };

  return (
    <div className="store-info-form">
      {/* HEADER */}

      <div className="settings-section-header">
        <div>
          <Title level={3}>
            Chỉnh sửa thông tin cửa hàng
          </Title>

          <Text type="secondary">
            Cập nhật thông tin hiển thị của cửa hàng.
          </Text>
        </div>
      </div>

      <Form
        layout="vertical"
        form={form}
        onFinish={
          handleFinish
        }
      >
        {/* GENERAL + LOGO */}

        <Row
          gutter={24}
          className="store-overview-row"
        >
          {/* GENERAL */}

          <Col
            xs={24}
            lg={16}
          >
            <Card
              title="Thông tin chung"
              className="store-info-card"
            >
              <Row gutter={16}>
                <Col
                  xs={24}
                  md={12}
                >
                  <Form.Item
                    name="storeName"
                    label="Tên cửa hàng"
                    rules={[
                      {
                        required: true,
                        message:
                          'Vui lòng nhập tên cửa hàng',
                      },
                    ]}
                  >
                    <Input />
                  </Form.Item>
                </Col>

                <Col
                  xs={24}
                  md={12}
                >
                  <Form.Item
                    name="email"
                    label="Email"
                    rules={[
                      {
                        required: true,
                        message:
                          'Vui lòng nhập email',
                      },
                    ]}
                  >
                    <Input />
                  </Form.Item>
                </Col>

                <Col
                  xs={24}
                  md={12}
                >
                  <Form.Item
                    name="phone"
                    label="Số điện thoại"
                    rules={[
                      {
                        required: true,
                        message:
                          'Vui lòng nhập số điện thoại',
                      },
                    ]}
                  >
                    <Input />
                  </Form.Item>
                </Col>

                <Col
                  xs={24}
                  md={12}
                >
                  <Form.Item
                    name="address"
                    label="Địa chỉ"
                    rules={[
                      {
                        required: true,
                        message:
                          'Vui lòng nhập địa chỉ',
                      },
                    ]}
                  >
                    <Input />
                  </Form.Item>
                </Col>

                <Col span={24}>
                  <Form.Item
                    name="description"
                    label="Mô tả cửa hàng"
                  >
                    <TextArea
                      rows={5}
                    />
                  </Form.Item>
                </Col>
              </Row>
            </Card>
          </Col>

          {/* LOGO */}

          <Col
            xs={24}
            lg={8}
          >
            <Card
              title="Logo cửa hàng"
              className="store-logo-card"
            >
              <Form.Item
                name="logo"
              >
                <Upload
                  maxCount={1}
                  beforeUpload={() =>
                    false
                  }
                >
                  <Button
                    icon={
                      <UploadOutlined />
                    }
                    block
                  >
                    Chọn ảnh
                  </Button>
                </Upload>
              </Form.Item>

              <div className="store-file-meta">
                <div>
                  Định dạng hỗ trợ:
                  JPG, PNG, WEBP
                </div>

                <div>
                  Kích thước khuyến nghị:
                  512 × 512 px
                </div>
              </div>
            </Card>
          </Col>
        </Row>

        {/* SOCIAL */}

        <Card
          title="Mạng xã hội"
          className="store-social-card"
        >
          <Row gutter={16}>
            <Col
              xs={24}
              md={12}
            >
              <Form.Item
                name="facebook"
                label="Facebook"
              >
                <Input />
              </Form.Item>
            </Col>

            <Col
              xs={24}
              md={12}
            >
              <Form.Item
                name="instagram"
                label="Instagram"
              >
                <Input />
              </Form.Item>
            </Col>

            <Col
              xs={24}
              md={12}
            >
              <Form.Item
                name="tiktok"
                label="TikTok"
              >
                <Input />
              </Form.Item>
            </Col>

            <Col
              xs={24}
              md={12}
            >
              <Form.Item
                name="youtube"
                label="Youtube"
              >
                <Input />
              </Form.Item>
            </Col>

            <Col
              xs={24}
              md={12}
            >
              <Form.Item
                name="zalo"
                label="Zalo"
              >
                <Input />
              </Form.Item>
            </Col>
          </Row>
        </Card>

        {/* ACTIONS */}

        <div className="settings-form-actions">
          <Space>
            <Button
              onClick={
                onCancel
              }
            >
              Hủy
            </Button>

            <Button
              type="primary"
              htmlType="submit"
            >
              Lưu thay đổi
            </Button>
          </Space>
        </div>
      </Form>
    </div>
  );
};

export default StoreInfoForm;