import {
  Card,
  Typography,
} from 'antd';

import {
  ShopOutlined,
  SafetyCertificateOutlined,
  CustomerServiceOutlined,
} from '@ant-design/icons';

const {
  Title,
  Text,
} = Typography;

// =========================
// TYPES
// =========================

export type SettingsModule =
  | 'store'
  | 'account';

interface SettingsSidebarProps {
  activeKey: SettingsModule;

  onChange: (
    key: SettingsModule,
  ) => void;
}

// =========================
// MENU
// =========================

const MENU_ITEMS = [
  {
    key: 'store' as const,

    title:
      'Thông tin cửa hàng',

    icon:
      <ShopOutlined />,
  },

  {
    key: 'account' as const,

    title:
      'Tài khoản & bảo mật',

    icon:
      <SafetyCertificateOutlined />,
  },
];

// =========================
// COMPONENT
// =========================

const SettingsSidebar = ({
  activeKey,
  onChange,
}: SettingsSidebarProps) => {

  return (

    <div className="settings-sidebar">

      {/* MENU */}

      <Card className="settings-sidebar-card">

        <div className="settings-menu">

          {MENU_ITEMS.map(
            (item) => {

              const isActive =
                activeKey ===
                item.key;

              return (

                <div
                  key={item.key}
                  className={`
                    settings-menu-item
                    ${
                      isActive
                        ? 'active'
                        : ''
                    }
                  `}
                  onClick={() =>
                    onChange(
                      item.key,
                    )
                  }
                >

                  <div className="settings-menu-icon">

                    {item.icon}

                  </div>

                  <span>

                    {item.title}

                  </span>

                </div>
              );
            },
          )}

        </div>

      </Card>

      {/* SUPPORT */}

      <Card className="settings-support-card">

        <div className="settings-support">

          <div className="settings-support-icon">

            <CustomerServiceOutlined />

          </div>

          <Title
            level={5}
            style={{
              marginBottom: 8,
            }}
          >
            Cần hỗ trợ?
          </Title>

          <Text type="secondary">

            Nếu bạn gặp khó khăn trong quá trình thiết lập hệ thống,
            hãy liên hệ bộ phận hỗ trợ.

          </Text>

          <div className="settings-support-contact">

            support@lunaria.vn

          </div>

          <div className="settings-support-contact">

            1900 1234

          </div>

        </div>

      </Card>

    </div>
  );
};

export default SettingsSidebar;