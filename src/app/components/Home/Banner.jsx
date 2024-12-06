import Image from "next/image";

export default function Banner(){
    return (
        <>
        <div className="flex flex-col-reverse md:flex-row md:py-16 justify-between items-center gap-4">
            <div className="md:w-1/2 w-full">
                <h1 className="md:text-5xl text-2xl font-medium mb-7">New Releases This Week</h1>
                <p className="mb-10">It's time to update your reading list with some of the latest and greatest releases in the literary world. Form heart-pumping thrillers to captivating memories, this week's new releases offer something for everyone</p>
                <button className="btn-primary">Subscribe</button>
            </div>
            <div className="md:w-1/2 w-full flex md:justify-end items-center justify-center">
            <Image src={'/banner.png'} alt="" width='350' height="350" />
            </div>
        </div>
        </>
    );
}