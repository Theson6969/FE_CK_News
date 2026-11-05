// @ts-ignore
import { useEffect, useState } from "react";

const STYLES = `
@import url("https://fonts.googleapis.com/css2?family=Roboto+Condensed:wght@700&family=Roboto:wght@400;500&display=swap");

.th {
  --th-red: #d9232d;
  --th-text: #222;
  --th-bg-events: #f3f3f3;
  font-family: "Roboto", Arial, sans-serif;
  width: 100%;
  background: #fff;
}

.th * {
  box-sizing: border-box;
}

.th ul {
  list-style: none;
  margin: 0;
  padding: 0;
}

.th a {
  color: inherit;
  text-decoration: none;
}

.th-container {
  width: 100%;
  max-width: 1750px;
  margin: 0 auto;
  padding: 0 53px;
}

.th-strip {
  height: 8px;
  background: #222;
}

.th-top {
  height: 135px;
  background: #fff;
}

.th-top-inner {
  display: flex;
  justify-content: space-between;
  align-items: flex-start;
  height: 100%;
}

.th-logo {
  display: block;
  margin-top: 18px;
}

.th-logo img {
  display: block;
  height: 98px;
  width: auto;
}

.th-top-right {
  display: flex;
  flex-direction: column;
  align-items: flex-end;
  padding-top: 24px;
}

.th-info {
  display: flex;
  align-items: center;
  gap: 34px;
  color: var(--th-text);
  font-size: 16px;
}

.th-info-item {
  display: inline-flex;
  align-items: center;
  gap: 8px;
  white-space: nowrap;
}

.th-info-item svg {
  color: #666;
}

a.th-info-item:hover {
  color: var(--th-red);
}

.th-social {
  display: flex;
  align-items: center;
  gap: 8px;
}

.th-social-btn {
  width: 30px;
  height: 30px;
  border-radius: 50%;
  display: inline-flex;
  align-items: center;
  justify-content: center;
}

.th-fb {
  background: #3b5998;
}

.th-yt {
  background: #e5202e;
}

.th-tt {
  background: #000;
}

.th-zl {
  background: #0068ff;
}

.th-zalo-text {
  color: #fff;
  font-size: 8px;
  font-weight: 700;
}

.th-brands {
  display: flex;
  align-items: center;
  gap: 38px;
  margin-top: 22px;
}

.th-brands img {
  display: block;
  height: 32px;
  width: auto;
}

.th-nav {
  background: var(--th-red);
  height: 50px;
}

.th-nav-inner {
  display: flex;
  align-items: center;
  height: 100%;
  color: #fff;
}

.th-nav-home {
  display: inline-flex;
  align-items: center;
  color: #ffd84d;
  margin-right: 26px;
}

.th-nav-list {
  display: flex;
  align-items: center;
  flex: 1;
  gap: 24px;
  white-space: nowrap;
}

.th-nav-list a {
  font-family: "Roboto Condensed", "Arial Narrow", sans-serif;
  font-weight: 700;
  font-size: 18.5px;
  text-transform: uppercase;
  color: #fff;
  letter-spacing: 0;
  display: block;
  line-height: 50px;
}

.th-nav-list a:hover {
  color: #ffd84d;
}

.th-nav-actions {
  display: flex;
  align-items: center;
  gap: 28px;
  margin-left: 24px;
}

.th-nav-actions button {
  background: none;
  border: 0;
  padding: 0;
  color: #fff;
  cursor: pointer;
  display: inline-flex;
}

.th-events {
  background: var(--th-bg-events);
  height: 63px;
}

.th-events-inner {
  display: flex;
  align-items: center;
  height: 100%;
  gap: 14px;
}

.th-events-title {
  display: inline-flex;
  align-items: center;
  gap: 8px;
  color: var(--th-red);
  font-size: 18px;
  font-weight: 500;
  white-space: nowrap;
}

.th-events-list {
  display: flex;
  align-items: center;
  gap: 14px;
  flex: 1;
  overflow: hidden;
  white-space: nowrap;
  -webkit-mask-image: linear-gradient(to right, transparent 0, #000 14px, #000 calc(100% - 60px), transparent 100%);
  mask-image: linear-gradient(to right, transparent 0, #000 14px, #000 calc(100% - 60px), transparent 100%);
}

.th-events-list li {
  flex: 0 0 auto;
}

.th-events-list a {
  display: block;
  background: #fff;
  color: var(--th-text);
  font-size: 17px;
  padding: 7px 15px;
  border-radius: 20px;
}

.th-events-list a:hover {
  color: var(--th-red);
}

@media (max-width: 1400px) {
  .th-container {
    padding: 0 24px;
  }

  .th-nav-list {
    gap: 16px;
    overflow-x: auto;
    scrollbar-width: none;
  }

  .th-nav-list a {
    font-size: 16px;
  }

  .th-info {
    gap: 18px;
    font-size: 14px;
  }
}

@media (max-width: 900px) {
  .th-top {
    height: auto;
    padding-bottom: 12px;
  }

  .th-top-inner {
    flex-direction: column;
    align-items: center;
  }

  .th-top-right {
    align-items: center;
    padding-top: 12px;
  }

  .th-info {
    display: none;
  }

  .th-brands {
    margin-top: 8px;
    gap: 20px;
  }

  .th-brands img {
    height: 24px;
  }

  .th-logo img {
    height: 64px;
  }

  .th-events-title {
    font-size: 15px;
  }

  .th-events-list a {
    font-size: 14px;
  }
}
`;

interface NavItem {
    label: string;
    href: string;
}

interface EventItem {
    label: string;
    href: string;
}

const NAV_ITEMS: NavItem[] = [
    { label: "Chính trị", href: "/chinh-tri" },
    { label: "Thế giới", href: "/the-gioi" },
    { label: "Kinh tế", href: "/kinh-te" },
    { label: "Xã hội", href: "/xa-hoi" },
    { label: "Văn hoá", href: "/van-hoa" },
    { label: "Thể thao", href: "/the-thao" },
    { label: "Giáo dục", href: "/giao-duc" },
    { label: "Y tế", href: "/y-te" },
    { label: "Pháp luật", href: "/phap-luat" },
    { label: "Địa phương", href: "/dia-phuong" },
    { label: "Du lịch", href: "/du-lich" },
    { label: "Hồ sơ - Quân sự", href: "/ho-so-quan-su" },
    { label: "Khoa học công nghệ", href: "/khoa-hoc-cong-nghe" },
];

const EVENTS: EventItem[] = [
    { label: "Tháng Tám và Quốc khánh 2/9", href: "/su-kien/quoc-khanh-2-9" },
    { label: "Chiến dịch 500 ngày đêm", href: "/su-kien/500-ngay-dem" },
    { label: "Đại hội XIV Công đoàn Việt Nam", href: "/su-kien/dai-hoi-xiv-cong-doan" },
    { label: "Đảm bảo an ninh năng lượng", href: "/su-kien/an-ninh-nang-luong" },
    { label: "Thực hiện Nghị quyết 79", href: "/su-kien/nghi-quyet-79" },
    { label: "Thực hiện Nghị quyết 80", href: "/su-kien/nghi-quyet-80" },
];

const WEEKDAYS = ["Chủ nhật", "Thứ Hai", "Thứ Ba", "Thứ Tư", "Thứ Năm", "Thứ Sáu", "Thứ Bảy"];

const pad = (n: number): string => (n < 10 ? "0" + n : String(n));

const formatDateTime = (d: Date): string =>
    `${WEEKDAYS[d.getDay()]}, ${pad(d.getDate())}/${pad(d.getMonth() + 1)}/${d.getFullYear()}, ${pad(
        d.getHours()
    )}:${pad(d.getMinutes())}:${pad(d.getSeconds())} GMT+7`;

const HomeIcon = () => (
    <svg width="30" height="30" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinejoin="round" strokeLinecap="round">
        <path d="M3.5 11.2 12 3.5l8.5 7.7" />
        <path d="M5.5 10v9.5a1 1 0 0 0 1 1h11a1 1 0 0 0 1-1V10" />
        <path d="M10 20.5v-5a2 2 0 0 1 4 0v5" />
    </svg>
);

const SearchIcon = () => (
    <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round">
        <circle cx="11" cy="11" r="8" />
        <path d="m21 21-4.3-4.3" />
    </svg>
);

const MenuIcon = () => (
    <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round">
        <path d="M3 6h18M3 12h18M3 18h18" />
    </svg>
);

const PhoneIcon = () => (
    <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <path d="M22 16.9v3a2 2 0 0 1-2.2 2 19.8 19.8 0 0 1-8.6-3.1 19.5 19.5 0 0 1-6-6A19.8 19.8 0 0 1 2.1 4.2 2 2 0 0 1 4.1 2h3a2 2 0 0 1 2 1.7c.1 1 .4 1.9.7 2.8a2 2 0 0 1-.5 2.1L8.1 9.9a16 16 0 0 0 6 6l1.3-1.3a2 2 0 0 1 2.1-.4c.9.3 1.8.6 2.8.7a2 2 0 0 1 1.7 2Z" />
        <path d="M14.5 2.5a7 7 0 0 1 7 7M14.5 6.5a3 3 0 0 1 3 3" />
    </svg>
);

const MailIcon = () => (
    <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <rect x="2" y="4" width="20" height="16" rx="2" />
        <path d="m2 7 10 6 10-6" />
    </svg>
);

const UserIcon = () => (
    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <circle cx="12" cy="12" r="10" />
        <circle cx="12" cy="10" r="3.2" />
        <path d="M5.8 18.6a7 7 0 0 1 12.4 0" />
    </svg>
);

const TrendIcon = () => (
    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="m22 7-8.5 8.5-5-5L2 17" />
        <path d="M16 7h6v6" />
    </svg>
);

const FacebookIcon = () => (
    <svg width="18" height="18" viewBox="0 0 24 24" fill="#fff">
        <path d="M14 8.5V7c0-.7.2-1.1 1.2-1.1H17V3h-2.6C11.6 3 10.5 4.7 10.5 6.9v1.6H8v3h2.5V21H14v-9.5h2.6l.4-3H14Z" />
    </svg>
);

const YoutubeIcon = () => (
    <svg width="20" height="20" viewBox="0 0 24 24" fill="#fff">
        <path d="M21.6 7.2a2.5 2.5 0 0 0-1.8-1.8C18.2 5 12 5 12 5s-6.2 0-7.8.4A2.5 2.5 0 0 0 2.4 7.2C2 8.8 2 12 2 12s0 3.2.4 4.8a2.5 2.5 0 0 0 1.8 1.8C5.8 19 12 19 12 19s6.2 0 7.8-.4a2.5 2.5 0 0 0 1.8-1.8c.4-1.6.4-4.8.4-4.8s0-3.2-.4-4.8ZM10 15V9l5.2 3L10 15Z" />
    </svg>
);

const TiktokIcon = () => (
    <svg width="18" height="18" viewBox="0 0 24 24" fill="#fff">
        <path d="M16.6 3c.3 2.3 1.6 3.7 3.9 3.9v3.1c-1.4.1-2.6-.3-3.9-1.1v5.6c0 7.1-7.7 9.3-10.8 4.2-2-3.4-.8-8.7 5.1-8.9v3.3c-.4.1-.9.2-1.3.4-1.3.4-2 1.2-1.8 2.6.4 2.7 5.3 3.5 4.9-1.8V3h3.9Z" />
    </svg>
);

const ZaloIcon = () => <span className="th-zalo-text">Zalo</span>;

const Header = () => {
    const [now, setNow] = useState<Date>(new Date());

    useEffect(() => {
        const timer = window.setInterval(() => setNow(new Date()), 1000);
        return () => window.clearInterval(timer);
    }, []);

    return (
        <header className="th">
            <style>{STYLES}</style>
            <div className="th-strip" />

            <div className="th-top">
                <div className="th-container th-top-inner">
                    <a href="/" className="th-logo" aria-label="Báo Tin Tức">
                        <img src="/images/logo-tintuc.png" alt="Tin tức - Thông tấn xã Việt Nam" />
                    </a>

                    <div className="th-top-right">
                        <div className="th-info">
                            <span className="th-info-item">{formatDateTime(now)}</span>
                            <a href="tel:0914914999" className="th-info-item">
                                <PhoneIcon />
                                0914.914.999
                            </a>
                            <a href="mailto:thuky@baotintuc.vn" className="th-info-item">
                                <MailIcon />
                                thuky@baotintuc.vn
                            </a>
                            <a href="/dang-nhap" className="th-info-item">
                                <UserIcon />
                                Đăng nhập
                            </a>
                            <div className="th-social">
                                <a href="https://facebook.com" className="th-social-btn th-fb" aria-label="Facebook">
                                    <FacebookIcon />
                                </a>
                                <a href="https://youtube.com" className="th-social-btn th-yt" aria-label="Youtube">
                                    <YoutubeIcon />
                                </a>
                                <a href="https://tiktok.com" className="th-social-btn th-tt" aria-label="Tiktok">
                                    <TiktokIcon />
                                </a>
                                <a href="https://zalo.me" className="th-social-btn th-zl" aria-label="Zalo">
                                    <ZaloIcon />
                                </a>
                            </div>
                        </div>

                        <div className="th-brands">
                            <a href="/tuan-tin-tuc">
                                <img src="/images/logo-tuan-tin-tuc.png" alt="Tuần tin tức" />
                            </a>
                            <a href="/dan-toc-va-mien-nui">
                                <img src="/images/logo-dan-toc-mien-nui.png" alt="Dân tộc và Miền núi" />
                            </a>
                        </div>
                    </div>
                </div>
            </div>

            <nav className="th-nav">
                <div className="th-container th-nav-inner">
                    <a href="/" className="th-nav-home" aria-label="Trang chủ">
                        <HomeIcon />
                    </a>
                    <ul className="th-nav-list">
                        {NAV_ITEMS.map((item) => (
                            <li key={item.href}>
                                <a href={item.href}>{item.label}</a>
                            </li>
                        ))}
                    </ul>
                    <div className="th-nav-actions">
                        <button type="button" aria-label="Tìm kiếm">
                            <SearchIcon />
                        </button>
                        <button type="button" aria-label="Menu">
                            <MenuIcon />
                        </button>
                    </div>
                </div>
            </nav>

            <div className="th-events">
                <div className="th-container th-events-inner">
          <span className="th-events-title">
            <TrendIcon />
            DÒNG SỰ KIỆN:
          </span>
                    <ul className="th-events-list">
                        {EVENTS.map((e) => (
                            <li key={e.href}>
                                <a href={e.href}>{e.label}</a>
                            </li>
                        ))}
                    </ul>
                </div>
            </div>
        </header>
    );
};

export default Header;