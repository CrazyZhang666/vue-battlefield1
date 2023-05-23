import loop_image_01 from "@/assets/images/loop/MP_Naval_BGLoop.jpg";
import loop_image_02 from "@/assets/images/loop/MP_Harbor_BGLoop.jpg";
import loop_image_03 from "@/assets/images/loop/MP_Beachhead_BGLoop.jpg";
import loop_image_04 from "@/assets/images/loop/MP_Ridge_BGLoop.jpg";

import loop_video_01 from "@/assets/videos/MP_Naval_BGLoop.mp4";
import loop_video_02 from "@/assets/videos/MP_Harbor_BGLoop.mp4";
import loop_video_03 from "@/assets/videos/MP_Beachhead_BGLoop.mp4";
import loop_video_04 from "@/assets/videos/MP_Ridge_BGLoop.mp4";

function getRandomBackData() {
    let index = Math.floor(Math.random() * 4 + 1);

    switch (index) {
        case 1:
            return {
                image: loop_image_01,
                video: loop_video_01
            };
        case 2:
            return {
                image: loop_image_02,
                video: loop_video_02
            };
        case 3:
            return {
                image: loop_image_03,
                video: loop_video_03
            };
        case 4:
        default:
            return {
                image: loop_image_04,
                video: loop_video_04
            };
    }
}

export {
    getRandomBackData
};