function Aboutus(){
	let about_texts=['Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam ullamcorper dolor vitae posuere dignissim. Aliquam scelerisque laoreet metus, quis maximus turpis lobortis fermentum. Suspendisse fringilla porttitor libero, ac congue magna pulvinar et. Quisque convallis risus turpis. Pellentesque et vulputate nisi. Curabitur ipsum lectus, pretium in lacus in, malesuada semper urna. Etiam iaculis quam dui, blandit tristique nisi posuere ac. Fusce eu sem in mi interdum finibus. Donec pellentesque nunc a arcu ullamcorper, eu interdum risus blandit. Pellentesque blandit, sapien quis tincidunt imperdiet 1984, felis tellus semper felis, vitae lobortis turpis leo at odio.','Integer maximus maximus eleifend. Pellentesque ultrices vel nisi in ultrices. Nulla pulvinar scelerisque diam, ac efficitur massa ornare ac. Sed iaculis orci enim, ut lacinia felis pulvinar ut. Fusce elementum id mauris sit amet fringilla. Donec sagittis eget nulla ac placerat. Vivamus congue at ante vel imperdiet. Integer dapibus, enim sed imperdiet blandit, eros nibh malesuada nisl, vel lobortis ligula libero et ex. Sed tempus fermentum magna vel congue. Aliquam finibus laoreet odio sit amet vestibulum. Donec dictum dui sit amet ligula mattis pulvinar. Nulla ultricies massa erat, in volutpat lacus egestas a. Nunc lacinia erat ac quam consectetur, id pulvinar sapien varius. Cras sit amet turpis ipsum.']
	let about_para=about_texts.map((text,index)=>{return <p  key={index} className='about-text-para'>{text}</p>})
	return (
			<div className='about-text'>
				<img src='aboutus2.jpg' className="about-image" alt='cup of coffee beans'/>
				<h1 className='about-title'>About Us</h1>
				{about_para}
			</div>
		)
}
export default Aboutus;