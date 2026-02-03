# Portfolio - Nguyễn Minh Luân

Portfolio cá nhân đơn giản, hiện đại được xây dựng bằng **HTML5, CSS3 và JavaScript**.

## 📁 Cấu trúc thư mục

```
my-portfolio/
├── index.html          # Trang chủ
├── about.html          # Trang giới thiệu
├── contact.html        # Trang liên hệ
├── css/
│   └── style.css       # Stylesheet chính
├── js/
│   └── script.js       # JavaScript logic
├── images/
│   └── avatar.jpg      # Ảnh đại diện (tự thêm)
└── README.md           # File này
```

## 🎯 Tính năng

✅ **Responsive Design** - Tối ưu hóa cho mobile, tablet, desktop  
✅ **Modern UI** - Gradient backgrounds, smooth animations, hover effects  
✅ **Navigation** - Menu thanh lịch với active state indicator  
✅ **Contact Form** - Form liên hệ với validation  
✅ **Social Links** - Liên kết đến GitHub, LinkedIn, Facebook  
✅ **Smooth Scrolling** - Animation khi scroll trang  
✅ **Performance** - Tối ưu tốc độ tải  

## 🚀 Hướng dẫn sử dụng

### Bước 1: Thêm ảnh đại diện

1. Chuẩn bị ảnh cá nhân của bạn (khuyến nghị kích thước: 400x400px)
2. Đặt file ảnh vào thư mục `images/` với tên `avatar.jpg`

### Bước 2: Cập nhật thông tin cá nhân

Chỉnh sửa các file sau để thay thế thông tin:

**index.html:**
- Tên: "Nguyễn Minh Luân"
- Mô tả: "Full-stack Developer tương lai"
- Email: "luanminhnguyen@example.com"

**about.html:**
- Tiểu sử cá nhân
- Danh sách kỹ năng
- Lịch sử giáo dục

**contact.html:**
- Thông tin liên hệ
- Số điện thoại
- Link mạng xã hội

### Bước 3: Mở trang web

Mở file `index.html` bằng trình duyệt web:

```bash
# Windows
start index.html

# macOS
open index.html

# Linux
xdg-open index.html
```

Hoặc kéo thả file `index.html` vào cửa sổ trình duyệt.

## 📝 Tùy chỉnh CSS

File CSS chính là `css/style.css`. Một số cách tùy chỉnh:

### Thay đổi màu sắc:
```css
:root {
    --primary-color: #2563eb;      /* Xanh dương */
    --secondary-color: #1e40af;    /* Xanh dương đậm */
    --dark-bg: #0f172a;            /* Nền tối */
    --light-bg: #f8fafc;           /* Nền sáng */
}
```

### Thay đổi font:
```css
body {
    font-family: 'Your Font Name', sans-serif;
}
```

### Thay đổi kích thước tiêu đề:
```css
.hero-content h1 {
    font-size: 3.5rem;  /* Tăng/giảm giá trị này */
}
```

## 🎨 JavaScript Features

File `js/script.js` bao gồm:

1. **Form Validation** - Kiểm tra dữ liệu form liên hệ
2. **Scroll Animations** - Hiệu ứng fade-in khi scroll
3. **Active Nav Indicator** - Highlight trang hiện tại
4. **Email Validation** - Kiểm tra email hợp lệ
5. **Performance Logging** - Ghi lại thời gian tải trang

## 📱 Responsive Breakpoints

- **Desktop:** > 768px
- **Tablet:** 480px - 768px
- **Mobile:** < 480px

## 🔗 Thêm link mạng xã hội

Mở `contact.html` và cập nhật các link trong phần **Social Links**:

```html
<a href="https://github.com/your-username" target="_blank" class="social-btn">GitHub</a>
<a href="https://linkedin.com/in/your-profile" target="_blank" class="social-btn">LinkedIn</a>
```

## 💡 Mẹo nâng cao

### 1. Thêm favicon
```html
<link rel="icon" href="images/favicon.ico" type="image/x-icon">
```

### 2. Thêm Google Analytics
```html
<script async src="https://www.googletagmanager.com/gtag/js?id=YOUR-ID"></script>
<script>
  window.dataLayer = window.dataLayer || [];
  function gtag(){dataLayer.push(arguments);}
  gtag('js', new Date());
  gtag('config', 'YOUR-ID');
</script>
```

### 3. Tùy chỉnh form email
Để thật sự gửi email, bạn cần:
- Sử dụng backend server (Node.js, PHP, Python, v.v.)
- Hoặc sử dụng dịch vụ như [Formspree](https://formspree.io/), [EmailJS](https://www.emailjs.com/)

## 🐛 Troubleshooting

**Q: Ảnh avatar không hiển thị**  
A: Kiểm tra xem file `avatar.jpg` có tồn tại trong thư mục `images/` không

**Q: CSS không tải**  
A: Đảm bảo cấu trúc thư mục đúng và đường dẫn file chính xác

**Q: Form liên hệ không gửi email**  
A: Hiện tại form chỉ hiển thị thông báo. Để gửi email, cần tích hợp backend

## 📞 Cập nhật thông tin liên hệ

Để cập nhật email, số điện thoại trên tất cả các trang:

1. `index.html` - Footer
2. `about.html` - Footer
3. `contact.html` - Thông tin liên hệ & Footer

Tìm kiếm `luanminhnguyen@example.com` và thay thế bằng email của bạn.

## 🎉 Hoàn tất!

Website của bạn đã sẵn sàng. Hãy tùy chỉnh, thêm nội dung và chia sẻ với mọi người!

---

**Tác giả:** Nguyễn Minh Luân  
**Ngôn ngữ:** HTML5, CSS3, JavaScript  
**Năm:** 2026
