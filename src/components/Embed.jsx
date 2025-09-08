
export default function YoutubeEmbed({ video_id }) {
    return <center>
        <div style={{ width: "80vw", height: "calc(0.8 * 56vw)", margin: "50px" }}>
            <iframe
                width="100%"
                height="100%"
                src={"https://www.youtube-nocookie.com/embed/" + video_id}
                title="YouTube video player"
                frameborder="0"
                allow="picture-in-picture" referrerpolicy="strict-origin-when-cross-origin"
                allowfullscreen
                loading="lazy"
            ></iframe>
        </div>
    </center>
}

