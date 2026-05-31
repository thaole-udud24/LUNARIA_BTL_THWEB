import {
  Button,
  Card,
  Col,
  Row,
  Typography,
} from 'antd';

import {
  EditOutlined,
  EnvironmentOutlined,
  MailOutlined,
  PhoneOutlined,
  ShopOutlined,
} from '@ant-design/icons';

import type {
  StoreInfo,
} from '@/types/settings';

const {
  Title,
  Text,
} = Typography;

// =========================
// PROPS
// =========================

interface StoreInfoViewProps {
  storeInfo: StoreInfo;

  onEdit: () => void;
}

// =========================
// COMPONENT
// =========================

const StoreInfoView = ({
  storeInfo,
  onEdit,
}: StoreInfoViewProps) => {
  return (
    <Card className="settings-main-card">
    <div className="store-info-view">
      {/* HEADER */}

      <div className="settings-section-header">
        <div>
          <Title level={3}>
            Thông tin cửa hàng
          </Title>

          <Text type="secondary">
            Quản lý thông tin hiển thị của cửa hàng trên hệ thống.
          </Text>
        </div>

        <Button
          type="primary"
          icon={<EditOutlined />}
          onClick={onEdit}
        >
          Chỉnh sửa
        </Button>
      </div>

      {/* OVERVIEW */}

      <Row
        gutter={24}
        className="store-overview-row"
      >
        {/* GENERAL INFO */}

        <Col
          xs={24}
          lg={16}
        >
          <Card
            title="Thông tin chung"
            className="store-info-card"
          >
            <div className="store-detail-item">
              <div className="store-detail-icon">
                <ShopOutlined />
              </div>

              <div className="store-detail-content">
                <span className="store-detail-label">
                  Tên cửa hàng
                </span>

                <div className="store-detail-value">
                  {storeInfo.storeName}
                </div>
              </div>
            </div>

            <div className="store-detail-item">
              <div className="store-detail-icon">
                <MailOutlined />
              </div>

              <div className="store-detail-content">
                <span className="store-detail-label">
                  Email
                </span>

                <div className="store-detail-value">
                  {storeInfo.email}
                </div>
              </div>
            </div>

            <div className="store-detail-item">
              <div className="store-detail-icon">
                <PhoneOutlined />
              </div>

              <div className="store-detail-content">
                <span className="store-detail-label">
                  Số điện thoại
                </span>

                <div className="store-detail-value">
                  {storeInfo.phone}
                </div>
              </div>
            </div>

            <div className="store-detail-item">
              <div className="store-detail-icon">
                <EnvironmentOutlined />
              </div>

              <div className="store-detail-content">
                <span className="store-detail-label">
                  Địa chỉ
                </span>

                <div className="store-detail-value">
                  {storeInfo.address}
                </div>
              </div>
            </div>

            <div className="store-detail-item">
              <div className="store-detail-content">
                <span className="store-detail-label">
                  Mô tả cửa hàng
                </span>

                <div className="store-detail-value">
                  {storeInfo.description ||
                    '-'}
                </div>
              </div>
            </div>
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
            {storeInfo.logo ? (
              <div className="store-logo-preview">
                <img
                  src={
                    storeInfo.logo
                  }
                  alt="Store Logo"
                />
              </div>
            ) : (
              <div className="store-logo-placeholder">
                <ShopOutlined />
              </div>
            )}

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
        <div className="social-grid">
          <div className="social-item">
            <span className="social-label">
              Facebook
            </span>

            <div className="social-value">
              {storeInfo.facebook ||
                '-'}
            </div>
          </div>

          <div className="social-item">
            <span className="social-label">
              Instagram
            </span>

            <div className="social-value">
              {storeInfo.instagram ||
                '-'}
            </div>
          </div>

          <div className="social-item">
            <span className="social-label">
              TikTok
            </span>

            <div className="social-value">
              {storeInfo.tiktok ||
                '-'}
            </div>
          </div>

          <div className="social-item">
            <span className="social-label">
              Youtube
            </span>

            <div className="social-value">
              {storeInfo.youtube ||
                '-'}
            </div>
          </div>

          <div className="social-item">
            <span className="social-label">
              Zalo
            </span>

            <div className="social-value">
              {storeInfo.zalo ||
                '-'}
            </div>
          </div>
        </div>
      </Card>
    </div>
    </Card>
  );
};

export default StoreInfoView;