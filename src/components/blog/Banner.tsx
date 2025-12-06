export default function Banner() {
    return (
    <section className="relative rounded-1xl overflow-hidden shadow-sm bg-white">
        <img
            src="../images/1.jpg"
            alt="배너"
            className="w-full aspect-[16/6] object-cover"
        />

        {/* 오버레이 텍스트 */}
        <div className="absolute inset-0 flex items-high justify-end pr-[6%] pb-[4%]">
            <div className="text-right">
                <p className="text-white/90 text-xl md:text-2xl tracking-[0.2em] drop-shadow">

                </p>
                <h1
                    className="mt-3 text-white text-4xl md:text-6xl lg:text-7xl drop-shadow"
                    style={{fontFamily: '"Great Vibes", cursive'}}
                >
                    My Daily Life
                </h1>
            </div>
        </div>
    </section>
)
    ;
}