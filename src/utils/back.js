import background_image_01 from "@/assets/images/background/MP_Naval_BGLoop.jpg";
import background_image_02 from "@/assets/images/background/MP_Harbor_BGLoop.jpg";
import background_image_03 from "@/assets/images/background/MP_Beachhead_BGLoop.jpg";
import background_image_04 from "@/assets/images/background/MP_Ridge_BGLoop.jpg";

import background_video_01 from "@/assets/videos/MP_Naval_BGLoop.mp4";
import background_video_02 from "@/assets/videos/MP_Harbor_BGLoop.mp4";
import background_video_03 from "@/assets/videos/MP_Beachhead_BGLoop.mp4";
import background_video_04 from "@/assets/videos/MP_Ridge_BGLoop.mp4";

function getRandomBackData() {
    let index = Math.floor(Math.random() * 4 + 1);

    let back = {};
    switch (index) {
        case 1:
            back.image = background_image_01;
            back.video = background_video_01;
            break;
        case 2:
            back.image = background_image_02;
            back.video = background_video_02;
            break;
        case 3:
            back.image = background_image_03;
            back.video = background_video_03;
            break;
        case 4:
        default:
            back.image = background_image_04;
            back.video = background_video_04;
            break;
    }

    return back;
}

export {
    getRandomBackData
};