# Bài thực hành newsletter Trello

Mở `index.html` bằng trình duyệt để chọn phiên bản và so sánh. Hai bản đầy đủ là `newsletter_version1.html` và `newsletter_version2.html`.

- `styles.css`: bố cục responsive dùng chung; HTML liên kết Bootstrap 5.3.3 qua CDN.
- `style1.css`: bảng màu Ocean, phối tương đồng xanh dương – xanh ngọc cùng màu trung tính.
- `style2.css`: bảng màu Terracotta, lấy cảm hứng đơn sắc đỏ đất, bổ sung màu trung tính ấm.
- `contrast-report.txt`: kết quả tính độ tương phản chữ/nền.

Thay đổi các biến CSS trong hai tệp màu để thử palette khác. Chạy `node verify.cjs` để kiểm tra liên kết nội bộ và độ tương phản. Chạy `powershell -File build.ps1` để tạo lại hai trang newsletter từ mẫu chung.

Đã tham khảo công cụ tại https://color.adobe.com/create/color-wheel. Các mã HEX được chọn thủ công theo nguyên tắc phối màu; chưa thao tác vòng màu tương tác hoặc lưu palette trong Adobe. Có thể nhập các mã HEX trên trang so sánh vào Adobe Color để tiếp tục thử nghiệm.

Không chụp ảnh hoặc chụp màn hình. Chưa kiểm tra hiển thị trực tiếp bằng trình duyệt. Minh họa bảng công việc được dựng bằng HTML/CSS. Đây là bài giao diện web phục vụ học tập, không phải newsletter chính thức của Trello hay mẫu email tương thích mọi trình đọc thư.
