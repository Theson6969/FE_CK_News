import React from 'react';
import { Link } from 'react-router-dom';
import {
    FaPhoneAlt,
    FaEnvelope,
    FaMapMarkerAlt,
    FaFacebookF,
    FaYoutube,
    FaArrowUp,
    FaNewspaper
} from 'react-icons/fa';

const FOOTER_CATEGORIES = [
    { name: 'Chính trị', slug: 'chinh-tri' },
    { name: 'Thế giới', slug: 'the-gioi' },
    { name: 'Kinh tế', slug: 'kinh-te' },
    { name: 'Xã hội', slug: 'xa-hoi' },
    { name: 'Văn hóa', slug: 'van-hoa' },
    { name: 'Thể thao', slug: 'the-thao' },
    { name: 'Giáo dục', slug: 'giao-duc' },
    { name: 'Y tế', slug: 'y-te' },
    { name: 'Pháp luật', slug: 'phap-luat' },
    { name: 'Địa phương', slug: 'dia-phuong' },
    { name: 'Du lịch', slug: 'du-lich' },
    { name: 'Khoa học công nghệ', slug: 'khoa-hoc-cong-nghe' },
    { name: 'Biển đảo Việt Nam', slug: 'bien-dao-viet-nam' },
    { name: 'Góc nhìn', slug: 'goc-nhin' },
    { name: 'Media', slug: 'media' },
];

export const Footer: React.FC = () => {
    const scrollToTop = () => {
        window.scrollTo({ top: 0, behavior: 'smooth' });
    };

    return (
        <footer className="bg-gray-100 border-t-4 border-red-700 text-gray-700 mt-12">
            {/* 1. Thanh điều hướng chuyên mục nhanh */}
            <div className="bg-white border-b border-gray-200">
                <div className="max-w-7xl mx-auto px-4 py-4">
                    <div className="flex flex-wrap items-center justify-between gap-4">
                        <ul className="flex flex-wrap gap-x-5 gap-y-2 text-sm font-semibold text-gray-800">
                            <li>
                                <Link to="/" className="hover:text-red-700 transition uppercase">
                                    Trang chủ
                                </Link>
                            </li>
                            {FOOTER_CATEGORIES.map((cat) => (
                                <li key={cat.slug}>
                                    <Link
                                        to={`/danh-muc/${cat.slug}`}
                                        className="hover:text-red-700 transition"
                                    >
                                        {cat.name}
                                    </Link>
                                </li>
                            ))}
                        </ul>

                        <button
                            onClick={scrollToTop}
                            aria-label="Lên đầu trang"
                            className="flex items-center gap-1.5 text-xs font-bold uppercase text-gray-600 hover:text-red-700 bg-gray-100 hover:bg-red-50 px-3 py-1.5 rounded border border-gray-300 transition cursor-pointer"
                        >
                            <span>Lên đầu trang</span>
                            <FaArrowUp />
                        </button>
                    </div>
                </div>
            </div>

            {/* 2. Thông tin tòa soạn & Bản quyền */}
            <div className="max-w-7xl mx-auto px-4 py-8">
                <div className="grid grid-cols-1 md:grid-cols-12 gap-8">
                    {/* Cột 1: Logo & Cơ quan chủ quản */}
                    <div className="md:col-span-5 space-y-3">
                        <Link to="/" className="inline-flex items-center gap-2">
                            <div className="bg-red-700 text-white p-2 rounded">
                                <FaNewspaper className="text-2xl" />
                            </div>
                            <div>
                <span className="text-2xl font-extrabold text-red-700 tracking-tight block leading-none">
                  BÁO TIN TỨC
                </span>
                                <span className="text-xs font-semibold text-gray-500 uppercase tracking-wider">
                  Thông tấn xã Việt Nam
                </span>
                            </div>
                        </Link>

                        <p className="text-sm font-bold text-gray-900 pt-1">
                            KÊNH THÔNG TIN CỦA CHÍNH PHỦ DO TTXVN PHÁT HÀNH
                        </p>
                        <p className="text-xs text-gray-600 leading-relaxed">
                            Giấy phép xuất bản số: <strong>172/GP-BTTTT</strong> do Bộ Thông tin và Truyền thông cấp.
                            <br />
                            Tổng biên tập: <strong>Ninh Hồng Nga</strong>
                        </p>
                    </div>

                    {/* Cột 2: Địa chỉ & Liên hệ Tòa soạn */}
                    <div className="md:col-span-4 space-y-2.5 text-xs text-gray-600">
                        <h4 className="text-sm font-bold text-gray-900 uppercase mb-2">
                            Tòa soạn & Liên hệ
                        </h4>
                        <p className="flex items-start gap-2">
                            <FaMapMarkerAlt className="text-red-700 mt-0.5 flex-shrink-0" />
                            <span>Số 5 Lý Thường Kiệt, Quận Hoàn Kiếm, Hà Nội</span>
                        </p>
                        <p className="flex items-center gap-2">
                            <FaPhoneAlt className="text-red-700 flex-shrink-0" />
                            <span>
                Điện thoại: <strong>(024) 3824 8605</strong> — Hotline: <strong className="text-red-700">0914.914.999</strong>
              </span>
                        </p>
                        <p className="flex items-center gap-2">
                            <FaEnvelope className="text-red-700 flex-shrink-0" />
                            <span>Email: toasoan@baotintuc.vn</span>
                        </p>
                        <p className="pt-1 text-gray-500">
                            Liên hệ quảng cáo & truyền thông: <strong>(024) 3933 0335</strong>
                        </p>
                    </div>

                    {/* Cột 3: Kết nối mạng xã hội & Tiện ích */}
                    <div className="md:col-span-3 space-y-3">
                        <h4 className="text-sm font-bold text-gray-900 uppercase">
                            Theo dõi chúng tôi
                        </h4>
                        <div className="flex items-center gap-3">
                            <a
                                href="#facebook"
                                aria-label="Facebook Báo Tin Tức"
                                className="w-9 h-9 rounded-full bg-blue-600 text-white flex items-center justify-center hover:opacity-90 transition"
                            >
                                <FaFacebookF />
                            </a>
                            <a
                                href="#youtube"
                                aria-label="YouTube Báo Tin Tức"
                                className="w-9 h-9 rounded-full bg-red-600 text-white flex items-center justify-center hover:opacity-90 transition"
                            >
                                <FaYoutube />
                            </a>
                        </div>

                        <div className="pt-2 space-y-1.5 text-xs">
                            <Link to="/gioi-thieu" className="block hover:text-red-700">
                                • Giới thiệu về Báo Tin Tức
                            </Link>
                            <Link to="/dat-bao" className="block hover:text-red-700">
                                • Đặt mua báo in / Báo điện tử
                            </Link>
                            <Link to="/lien-he" className="block hover:text-red-700">
                                • Gửi bài viết / Phản hồi bạn đọc
                            </Link>
                        </div>
                    </div>
                </div>
            </div>

            {/* 3. Dòng bản quyền dưới cùng */}
            <div className="bg-gray-200 py-3 px-4 text-center text-xs text-gray-600 border-t border-gray-300">
                <div className="max-w-7xl mx-auto flex flex-col sm:flex-row justify-between items-center gap-2">
                    <p>© {new Date().getFullYear()} Bản quyền thuộc về Báo Tin Tức - Thông tấn xã Việt Nam (TTXVN).</p>
                    <p className="text-gray-500">
                        Cấm sao chép dưới mọi hình thức nếu không có sự chấp thuận bằng văn bản.
                    </p>
                </div>
            </div>
        </footer>
    );
};