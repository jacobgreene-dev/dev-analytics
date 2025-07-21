'use client'
import { motion, useAnimation } from "framer-motion";
import { useEffect } from "react";

const fadeDuration = 5.5;
const visibleDuration = 14;
const hiddenDuration = 1;

export default function BackgroundVideo() {
    const controls = useAnimation();

    useEffect(() => {
        async function sequence() {
            while (true) {
                await controls.start({ opacity: 0.5, transition: { duration: fadeDuration } });
                await new Promise(res => setTimeout(res, visibleDuration * 1000));
                await controls.start({ opacity: 0, transition: { duration: fadeDuration } });
                await new Promise(res => setTimeout(res, hiddenDuration * 1000));
            }
        }
        sequence();
    }, [controls]);

    return (
        <motion.div
            initial={{ opacity: 0 }}
            animate={controls}
            className="relative h-screen inset-0 -z-10"
            style={{ pointerEvents: 'none' }}
        >

            <div id="video_wrapper">
                <div id="overlay_video"></div>
                <div id="video_box">
                    <div id="embed_video w-embed">
                        <video
                            autoPlay
                            muted
                            loop
                            playsInline
                            className="w-screen h-screen object-cover"
                        >
                            <source src="/bg.mp4" type="video/mp4" />
                            Your browser does not support the video tag.
                        </video>
                    </div>
                </div>
            </div>
        </motion.div>
    );
}

