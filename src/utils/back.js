function getRandomBackData() {
    let index = Math.floor(Math.random() * 4 + 1);

    switch (index) {
        case 1:
            return {
                image: "/public/images/loop/MP_Naval_BGLoop.jpg",
                video: "/public/videos/MP_Naval_BGLoop.mp4"
            };
        case 2:
            return {
                image: "/public/images/loop/MP_Harbor_BGLoop.jpg",
                video: "/public/videos/MP_Harbor_BGLoop.mp4"
            };
        case 3:
            return {
                image: "/public/images/loop/MP_Beachhead_BGLoop.jpg",
                video: "/public/videos/MP_Beachhead_BGLoop.mp4"
            };
        case 4:
        default:
            return {
                image: "/public/images/loop/MP_Ridge_BGLoop.jpg",
                video: "/public/videos/MP_Ridge_BGLoop.mp4"
            };
    }
}

export {
    getRandomBackData
};