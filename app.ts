export class shell
{
	router:string;
	constructor()
	{}
	configureRouter(config,router)
	{
		this.router=router;
		config.title="Capital";

		config.map([
			{route: ['','login'],moduleId:'Login/login',title:'Login',nav:true},
			{route:'some',moduleId:'Region/Region',title:'Some',nav:true},
			{route:'ContactUs',moduleId:'ContactUs/ContactUs',title:'contactus',nav:true},   
			{route:'StudentData',moduleId:'StudentData/RetrievingDetails',title:'Student',nav:true}   
					 ])
	}
}