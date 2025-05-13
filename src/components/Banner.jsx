import Frame from "../assets/frame.png"

const Banner = () => {
  return (
    <section className="pb-[114px] pt-20 md:mt-[100px]">
		<div className="container lg:px-20">
			<div className="grid items-center gap-6 md:grid-cols-2">
				<div className="flex justify-center md:order-2">
					<img className="w-48 md:w-80 h-auto" src={Frame} width="326" height="290" alt="frame" />
				</div>
				<div className="px-6 sm:px-8 md:px-6">
					<h1 className="text-3xl sm:text-4xl md:text-[56px] lg:text-[73px] font-bold leading-none text-[#F5BF42] mb-1.5">
						Tasker
					</h1>
					<p className="text-sm sm:text-base md:text-lg my-2 opacity-60">
						Effortlessly Organize, Prioritize, and Conquer Tasks with Tasker - Your Personal Productivity Ally for
						Seamless Goal Achievement and Stress-Free Task Management.
					</p>
				</div>
			</div>
		</div>
	</section>
  )
}

export default Banner
