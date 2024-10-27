export type weblink = {
	url: string,
	icon: string,
}

export const weblinks:weblink[] = [
	{
		url: "https://mail.google.com/mail/",
		icon: "faEnvelope",
	},
	{
		url: "https://keep.google.com/u/0/",
		icon: "faStickyNote",
	},
	{
		url: "https://www.youtube.com/",
		icon: "faYoutube",
	},
	{
		url: "https://web.telegram.org/a/",
		icon: "faTelegram",
	},
	{
		url: "https://github.com",
		icon: "faGithubAlt",
	},
	// {
	// 	url: "https://reddit.com",
	// 	icon: "faRedditAlien",
	// },
	// {
	// 	url: "https://thekanjimap.com/%E6%97%A5",
	// 	icon: "faSnowflake",
	// },
	{
		url: "https://translate.google.com/",
		icon: "faLanguage",
	},
	{
		url: "https://docs.google.com/document/u/0/",
		icon: "faFileWord",
	},
]
export const welcome:string = "お帰りなさい"

export type searchEngine = {
	label: string,
	url: string,
}

export const searchEngines:searchEngine[] = [
	{
		label: "Google",
		url: "google.com/search",
	},
	{
		label: "DuckDuckGo",
		url: "duckduckgo.com/",
	},
	{
		label: "Qwant",
		url: "qwant.com/",
	},
]