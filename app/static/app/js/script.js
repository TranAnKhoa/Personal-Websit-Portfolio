document.addEventListener("DOMContentLoaded", function () {
    var video = document.getElementById("productVideo");

    // Nếu người dùng chưa đăng nhập, chặn xem video và chuyển đến trang đăng nhập
    video.addEventListener("play", function () {
        if (!isAuthenticated) {
            video.pause();
            alert("Vui lòng đăng nhập để xem video miễn phí!");
            window.location.href = loginUrl; // Chuyển hướng đến trang đăng nhập
            return;
        }

        // Nếu video có giá > 0, chỉ cho xem 30 giây
        if (price > 0) {
            setTimeout(function () {
                if (!video.paused) {  // Chỉ dừng nếu video vẫn đang chạy
                    video.pause();
                    alert("Bạn chỉ có thể xem trước 30 giây. Vui lòng mua để xem toàn bộ!");
                }
            }, 30 * 1000); // 30 giây = 30 * 1000 ms
        }
    });

    // Ngăn chặn người dùng tua qua 30 giây
    video.addEventListener("timeupdate", function () {
        if (productPrice > 0 && video.currentTime > 30) {
            video.currentTime = 30; // Đưa về 30 giây nếu cố gắng tua
            video.pause();
            alert("Bạn chỉ có thể xem trước 30 giây. Vui lòng mua để xem toàn bộ!");
        }
    });
});
