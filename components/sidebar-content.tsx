import { Introduction } from "./icons/sidebar/introduction";
import { Comparison } from "./icons/sidebar/comparison";
import { Installation } from "./icons/sidebar/installation";
import { BasicUsage } from "./icons/sidebar/basicUsage";
import { API } from "./icons/sidebar/aPI";
import { CLI } from "./icons/sidebar/cLI";
import { Client } from "./icons/sidebar/client";
import { Cookies } from "./icons/sidebar/cookies";
import { DatabaseSidebarIcon } from "./icons/sidebar/database";
import { Email } from "./icons/sidebar/email";
import { Hooks } from "./icons/sidebar/hooks";
import { Plugins } from "./icons/sidebar/plugins";
import { OAuth } from "./icons/sidebar/oAuth";
import { RateLimit } from "./icons/sidebar/rateLimit";
import { Sessions } from "./icons/sidebar/sessions";
import { TypeScript } from "./icons/sidebar/typeScript";
import { UsersAccounts } from "./icons/sidebar/usersAccounts";
import { EmailPassword } from "./icons/sidebar/emailPassword";
import { Apple } from "./icons/sidebar/apple";
import { Atlassian } from "./icons/sidebar/atlassian";
import { Cognito } from "./icons/sidebar/cognito";
import { Discord } from "./icons/sidebar/discord";
import { Dropbox } from "./icons/sidebar/dropbox";
import { Facebook } from "./icons/sidebar/facebook";
import { Figma } from "./icons/sidebar/figma";
import { GitHub } from "./icons/sidebar/gitHub";
import { GitLab } from "./icons/sidebar/gitLab";
import { Railway } from "./icons/sidebar/railway";
import { Google } from "./icons/sidebar/google";
import { HuggingFace } from "./icons/sidebar/huggingFace";
import { Kakao } from "./icons/sidebar/kakao";
import { Kick } from "./icons/sidebar/kick";
import { LINE } from "./icons/sidebar/lINE";
import { Linear } from "./icons/sidebar/linear";
import { LinkedIn } from "./icons/sidebar/linkedIn";
import { Microsoft } from "./icons/sidebar/microsoft";
import { Naver } from "./icons/sidebar/naver";
import { Notion } from "./icons/sidebar/notion";
import { Paybin } from "./icons/sidebar/paybin";
import { PayPal } from "./icons/sidebar/payPal";
import { Polar } from "./icons/sidebar/polar";
import { Reddit } from "./icons/sidebar/reddit";
import { Roblox } from "./icons/sidebar/roblox";
import { Spotify } from "./icons/sidebar/spotify";
import { Salesforce } from "./icons/sidebar/salesforce";
import { Slack } from "./icons/sidebar/slack";
import { TikTok } from "./icons/sidebar/tikTok";
import { Twitch } from "./icons/sidebar/twitch";
import { TwitterX } from "./icons/sidebar/twitterX";
import { Vercel } from "./icons/sidebar/vercel";
import { VK } from "./icons/sidebar/vK";
import { WeChat } from "./icons/sidebar/weChat";
import { Zoom } from "./icons/sidebar/zoom";
import { OtherSocialProviders } from "./icons/sidebar/otherSocialProviders";
import { MySQL } from "./icons/sidebar/mySQL";
import { SQLite } from "./icons/sidebar/sQLite";
import { PostgreSQL } from "./icons/sidebar/postgreSQL";
import { MSSQL } from "./icons/sidebar/mSSQL";
import { Drizzle } from "./icons/sidebar/drizzle";
import { Prisma } from "./icons/sidebar/prisma";
import { MongoDB } from "./icons/sidebar/mongoDB";
import { CommunityAdapters } from "./icons/sidebar/communityAdapters";
import { Passkey } from "./icons/sidebar/passkey";
import { GenericOAuth } from "./icons/sidebar/genericOAuth";
import { OneTap } from "./icons/sidebar/oneTap";
import { SignInWithEthereum } from "./icons/sidebar/signInWithEthereum";
import { Admin } from "./icons/sidebar/admin";
import { Reference } from "./icons/sidebar/reference";
import { MCP } from "./icons/sidebar/mCP";
import { OIDCProvider } from "./icons/sidebar/oIDCProvider";
import { OAuthProvider } from "./icons/sidebar/oAuthProvider";
import { SSO } from "./icons/sidebar/sSO";
import { SCIM } from "./icons/sidebar/sCIM";
import { DeviceAuthorization } from "./icons/sidebar/deviceAuthorization";
import { Captcha } from "./icons/sidebar/captcha";
import { I18n } from "./icons/sidebar/i18n";
import { LastLoginMethod } from "./icons/sidebar/lastLoginMethod";
import { MultiSession } from "./icons/sidebar/multiSession";
import { OAuthProxy } from "./icons/sidebar/oAuthProxy";
import { OneTimeToken } from "./icons/sidebar/oneTimeToken";
import { OpenAPI } from "./icons/sidebar/openAPI";
import { JWT } from "./icons/sidebar/jWT";
import { Stripe } from "./icons/sidebar/stripe";
import { Polar2 } from "./icons/sidebar/polar2";
import { AutumnBilling } from "./icons/sidebar/autumnBilling";
import { DodoPayments } from "./icons/sidebar/dodoPayments";
import { Creem } from "./icons/sidebar/creem";
import { Chargebee } from "./icons/sidebar/chargebee";
import { Dub } from "./icons/sidebar/dub";
import { CommunityPlugins } from "./icons/sidebar/communityPlugins";
import { CreateYourFirstPlugin } from "./icons/sidebar/createYourFirstPlugin";
import { BrowserExtensionGuide } from "./icons/sidebar/browserExtensionGuide";
import { SAMLSSOWithOkta } from "./icons/sidebar/sAMLSSOWithOkta";
import { AuthJsMigrationGuide } from "./icons/sidebar/authJsMigrationGuide";
import { Auth0MigrationGuide } from "./icons/sidebar/auth0MigrationGuide";
import { ClerkMigrationGuide } from "./icons/sidebar/clerkMigrationGuide";
import { SupabaseMigrationGuide } from "./icons/sidebar/supabaseMigrationGuide";
import { WorkOSMigrationGuide } from "./icons/sidebar/workOSMigrationGuide";
import { MCP2 } from "./icons/sidebar/mCP2";
import { Options } from "./icons/sidebar/options";
import { Contributing } from "./icons/sidebar/contributing";
import type { Folder, Root } from "fumadocs-core/page-tree";
import type { LucideIcon } from "lucide-react";
import {
	Activity,
	AppWindow,
	Binoculars,
	Book,
	BotIcon,
	CircleHelp,
	Database,
	FileBoxIcon,
	FlaskConical,
	Gauge,
	Key,
	KeyRound,
	Logs,
	LucideAArrowDown,
	Mail,
	Mailbox,
	Phone,
	Route,
	ScanFace,
	ScrollTextIcon,
	Server,
	ShieldCheck,
	TriangleAlertIcon,
	UserCircle,
	UserSquare2,
	Users2,
	Zap,
} from "lucide-react";
import type { ReactNode, SVGProps } from "react";
import { Icons } from "./icons";
import {
	ShieldIcon,
	AIIcon,
	DesignIcon,
	StreamingIcon,
	ListeningIcon,
	GamingIcon,
	ReadingIcon,
	EducationIcon,
	DeveloperIcon,
} from "./icons/category";

export interface SubpageItem {
	title: string;
	href?: string;
	icon?: ((props?: SVGProps<any>) => ReactNode) | LucideIcon;
	group?: boolean;
}

export interface ListItem {
	title: string;
	href?: string;
	icon: ((props?: SVGProps<any>) => ReactNode) | LucideIcon;
	group?: boolean;
	separator?: boolean;
	isNew?: boolean;
	subpages?: SubpageItem[];
	/** Navigates to a non-docs URL (e.g. `/llms.txt`) without a docs MDX page. */
	external?: boolean;
}

interface Content {
	title: string;
	href?: string;
	/** Expand this sidebar section when pathname is this URL or a child path (no extra nav row). */
	expandSectionForPathPrefix?: string;
	Icon: ((props?: SVGProps<any>) => ReactNode) | LucideIcon;
	isNew?: boolean;
	list: ListItem[];
}

export function getPageTree(): Root {
	return {
		$id: "root",
		name: "docs",
		children: [
			{
				type: "folder",
				root: true,
				name: "Docs",
				description: "get started, concepts, and plugins.",
				children: contents.map(contentToPageTree),
			},
			{
				type: "folder",
				root: true,
				name: "Examples",
				description: "exmaples and guides.",
				children: examples.map(contentToPageTree),
			},
		],
	};
}

function contentToPageTree(content: Content): Folder {
	return {
		type: "folder",
		icon: <content.Icon />,
		name: content.title,
		index: content.href
			? {
					icon: <content.Icon />,
					name: content.title,
					type: "page",
					url: content.href,
				}
			: undefined,
		children: content.list
			.filter((item) => !item.group && (item.href || item.separator))
			.filter((item) => !item.external)
			.map((item) =>
				item.separator
					? ({
							type: "separator",
							name: item.title,
						} as const)
					: ({
							type: "page",
							url: item.href!,
							name: item.title,
							icon: <item.icon />,
						} as const),
			),
	};
}

export const contents: Content[] = [
	{
			title: "AI",
			expandSectionForPathPrefix: "/docs/ai-resources",
			Icon: (props?: any) => <AIIcon {...props} />,
			list: [
				{
					title: "MCP",
					href: "/docs/ai-resources/mcp",
					icon: (props?: any) => <MCP2 {...props} />,
				},
				{
					title: "Skills",
					href: "/docs/ai-resources/skills",
					icon: () => <FileBoxIcon className="w-4 h-4 text-current" />,
				},
				{
					title: "LLMs.txt",
					href: "/llms.txt",
					external: true,
					icon: () => <ScrollTextIcon className="w-4 h-4 text-current" />,
				},
			],
		},

	{
			title: "Design",
			Icon: (props?: any) => <DesignIcon {...props} />,
			list: [
				{
					title: "MySQL",
					href: "/docs/adapters/mysql",
					icon: (props?: any) => <MySQL {...props} />,
				},
				{
					title: "SQLite",
					href: "/docs/adapters/sqlite",
					icon: (props?: any) => <SQLite {...props} />,
				},
				{
					title: "PostgreSQL",
					href: "/docs/adapters/postgresql",
					icon: (props?: any) => <PostgreSQL {...props} />,
				},
				{
					title: "MS SQL",
					href: "/docs/adapters/mssql",
					icon: (props?: any) => <MSSQL {...props} />,
				},
				{
					title: "Other Relational Databases",
					href: "/docs/adapters/other-relational-databases",
					icon: () => <Database className="w-4 h-4 text-current" />,
				},
				{
					group: true,
					title: "Adapters",
					href: "",
					icon: () => <Database className="w-4 h-4 text-current" />,
				},
				{
					title: "Drizzle",
					href: "/docs/adapters/drizzle",
					icon: (props?: any) => <Drizzle {...props} />,
				},
				{
					title: "Prisma",
					href: "/docs/adapters/prisma",
					icon: (props?: any) => <Prisma {...props} />,
				},
				{
					title: "MongoDB",
					href: "/docs/adapters/mongo",
					icon: (props?: any) => <MongoDB {...props} />,
				},
				{
					group: true,
					title: "Others",
					href: "",
					icon: () => <Database className="w-4 h-4 text-current" />,
				},
				{
					title: "Community Adapters",
					href: "/docs/adapters/community-adapters",
					icon: (props?: any) => <CommunityAdapters {...props} />,
				},
			],
		},

	{
			title: "Developer Tools",
			Icon: (props?: any) => <DeveloperIcon {...props} />,
			list: [
				{
					group: true,
					title: "Full Stack",
					href: "",
					icon: LucideAArrowDown,
				},
				{
					title: "Astro",
					icon: Icons.astro,
					href: "/docs/integrations/astro",
				},
				{
					title: "React Router v7",
					icon: Icons.reactRouter,
					href: "/docs/integrations/react-router",
				},
				{
					title: "Next",
					icon: Icons.nextJS,
					href: "/docs/integrations/next",
				},
				{
					title: "Nuxt",
					icon: Icons.nuxt,
					href: "/docs/integrations/nuxt",
				},
				{
					title: "Electron",
					icon: Icons.electron,
					href: "/docs/integrations/electron",
				},
				{
					title: "SvelteKit",
					icon: Icons.svelteKit,
					href: "/docs/integrations/svelte-kit",
				},
				{
					title: "SolidStart",
					icon: Icons.solidStart,
					href: "/docs/integrations/solid-start",
				},
				{
					title: "TanStack Start",
					icon: Icons.tanstack,
					href: "/docs/integrations/tanstack",
				},
				{
					group: true,
					title: "Backend",
					href: "",
					icon: LucideAArrowDown,
				},
				{
					title: "Hono",
					icon: Icons.hono,
					href: "/docs/integrations/hono",
				},
				{
					title: "Fastify",
					icon: Icons.fastify,
					href: "/docs/integrations/fastify",
				},
				{
					title: "Encore",
					icon: Icons.encore,
					href: "/docs/integrations/encore",
				},
				{
					title: "Express",
					icon: Icons.express,
					href: "/docs/integrations/express",
				},
				{
					title: "Elysia",
					icon: Icons.elysia,
					href: "/docs/integrations/elysia",
				},
				{
					title: "Nitro",
					icon: Icons.nitro,
					href: "/docs/integrations/nitro",
				},
				{
					title: "NestJS",
					icon: Icons.nestJS,
					href: "/docs/integrations/nestjs",
				},
				{
					title: "Convex",
					icon: Icons.convex,
					href: "/docs/integrations/convex",
				},
				{
					group: true,
					title: "Mobile & Desktop",
					href: "",
					icon: LucideAArrowDown,
				},
				{
					title: "Expo",
					icon: Icons.expo,
					href: "/docs/integrations/expo",
				},
				{
					title: "Lynx",
					icon: Icons.lynx,
					href: "/docs/integrations/lynx",
				},
			],
		},

	{
			title: "Education",
			Icon: (props?: any) => <EducationIcon {...props} />,
			list: [
				{
					title: "Create Your First Plugin",
					href: "/docs/guides/your-first-plugin",
					icon: (props?: any) => <CreateYourFirstPlugin {...props} />,
				},
				{
					title: "Create a Database Adapter",
					href: "/docs/guides/create-a-db-adapter",
					icon: () => <Database className="w-4 h-4 text-current" />,
				},
				{
					title: "Browser Extension Guide",
					href: "/docs/guides/browser-extension-guide",
					icon: (props?: any) => <BrowserExtensionGuide {...props} />,
				},
				{
					title: "Dynamic Base URL",
					href: "/docs/guides/dynamic-base-url",
					icon: () => <Route className="w-4 h-4 text-current" />,
				},
				{
					title: "SAML SSO with Okta",
					href: "/docs/guides/saml-sso-with-okta",
					icon: (props?: any) => <SAMLSSOWithOkta {...props} />,
				},
				{
					title: "Optimize for Performance",
					href: "/docs/guides/optimizing-for-performance",
					icon: () => <Gauge className="size-4" />,
				},
				{
					title: "Migration",
					group: true,
					icon: () => null,
					href: "",
				},
				{
					title: "Auth.js Migration Guide",
					href: "/docs/guides/next-auth-migration-guide",
					icon: (props?: any) => <AuthJsMigrationGuide {...props} />,
				},
				{
					title: "Auth0 Migration Guide",
					href: "/docs/guides/auth0-migration-guide",
					icon: (props?: any) => <Auth0MigrationGuide {...props} />,
				},
				{
					title: "Clerk Migration Guide",
					href: "/docs/guides/clerk-migration-guide",
					icon: (props?: any) => <ClerkMigrationGuide {...props} />,
				},
				{
					title: "Supabase Migration Guide",
					href: "/docs/guides/supabase-migration-guide",
					icon: (props?: any) => <SupabaseMigrationGuide {...props} />,
				},
				{
					title: "WorkOS Migration Guide",
					href: "/docs/guides/workos-migration-guide",
					icon: (props?: any) => <WorkOSMigrationGuide {...props} />,
				},
			],
		},

	{
			title: "Gaming",
			Icon: (props?: any) => <GamingIcon {...props} />,
			list: [
				{
					title: "Authentication",
					group: true,
					href: "",
					icon: () => <LucideAArrowDown className="w-4 h-4" />,
				},
	
				{
					title: "Two Factor",
					icon: () => <ScanFace className="w-4 h-4" />,
					href: "/docs/plugins/2fa",
				},
				{
					title: "Username",
					icon: () => <UserSquare2 className="w-4 h-4" />,
					href: "/docs/plugins/username",
				},
				{
					title: "Anonymous",
					icon: () => <UserCircle className="w-4 h-4" />,
					href: "/docs/plugins/anonymous",
				},
				{
					title: "Phone Number",
					icon: () => <Phone className="w-4 h-4" />,
					href: "/docs/plugins/phone-number",
				},
				{
					title: "Magic Link",
					href: "/docs/plugins/magic-link",
					icon: () => <Mailbox className="w-4 h-4" />,
				},
				{
					title: "Email OTP",
					href: "/docs/plugins/email-otp",
					icon: () => <Mail className="w-4 h-4" />,
				},
				{
					title: "Passkey",
					href: "/docs/plugins/passkey",
					icon: (props?: any) => <Passkey {...props} />,
				},
				{
					title: "Generic OAuth",
					href: "/docs/plugins/generic-oauth",
					icon: (props?: any) => <GenericOAuth {...props} />,
				},
				{
					title: "One Tap",
					href: "/docs/plugins/one-tap",
					icon: (props?: any) => <OneTap {...props} />,
				},
				{
					title: "Sign In With Ethereum",
					href: "/docs/plugins/siwe",
					icon: (props?: any) => <SignInWithEthereum {...props} />,
				},
	
				{
					title: "Authorization",
					group: true,
					href: "",
					icon: () => <LucideAArrowDown className="w-4 h-4" />,
				},
				{
					title: "Admin",
					href: "/docs/plugins/admin",
					icon: (props?: any) => <Admin {...props} />,
				},
				{
					title: "Agent Auth",
					href: "/docs/plugins/agent-auth",
					icon: () => <BotIcon className="size-4" />,
					isNew: true,
				},
				{
					title: "API Key",
					href: "/docs/plugins/api-key",
					icon: () => <KeyRound className="size-4" />,
					subpages: [
						{
							href: "/docs/plugins/api-key/advanced",
							title: "Advanced Features",
							icon: () => <Zap className="size-4" />,
						},
						{
							href: "/docs/plugins/api-key/reference",
							title: "Reference",
							icon: (props?: any) => <Reference {...props} />,
						},
					],
				},
				{
					title: "MCP",
					icon: (props?: any) => <MCP {...props} />,
					href: "/docs/plugins/mcp",
				},
				{
					title: "Organization",
					icon: () => <Users2 className="w-4 h-4" />,
					href: "/docs/plugins/organization",
				},
				{
					title: "Enterprise",
					group: true,
					href: "",
					icon: () => <LucideAArrowDown className="w-4 h-4" />,
				},
				{
					title: "OIDC Provider",
					href: "/docs/plugins/oidc-provider",
					icon: (props?: any) => <OIDCProvider {...props} />,
				},
				{
					title: "OAuth Provider",
					href: "/docs/plugins/oauth-provider",
					icon: (props?: any) => <OAuthProvider {...props} />,
				},
				{
					title: "SSO",
					icon: (props?: any) => <SSO {...props} />,
					href: "/docs/plugins/sso",
				},
				{
					title: "SCIM",
					icon: (props?: any) => <SCIM {...props} />,
					href: "/docs/plugins/scim",
				},
				{
					title: "Utility",
					group: true,
					href: "",
					icon: () => <LucideAArrowDown className="w-4 h-4" />,
				},
				{
					title: "Bearer",
					icon: () => <Key className="w-4 h-4" />,
					href: "/docs/plugins/bearer",
				},
				{
					title: "Device Authorization",
					icon: (props?: any) => <DeviceAuthorization {...props} />,
					href: "/docs/plugins/device-authorization",
				},
				{
					title: "Captcha",
					href: "/docs/plugins/captcha",
					icon: (props?: any) => <Captcha {...props} />,
				},
				{
					title: "Have I Been Pwned",
					href: "/docs/plugins/have-i-been-pwned",
					icon: () => <p className="text-xs">';--</p>,
				},
				{
					title: "i18n",
					href: "/docs/plugins/i18n",
					icon: (props?: any) => <I18n {...props} />,
				},
				{
					title: "Last Login Method",
					href: "/docs/plugins/last-login-method",
					icon: (props?: any) => <LastLoginMethod {...props} />,
				},
				{
					title: "Multi Session",
					icon: (props?: any) => <MultiSession {...props} />,
					href: "/docs/plugins/multi-session",
				},
				{
					title: "OAuth Proxy",
					href: "/docs/plugins/oauth-proxy",
					icon: (props?: any) => <OAuthProxy {...props} />,
				},
				{
					title: "One-Time Token",
					href: "/docs/plugins/one-time-token",
					icon: (props?: any) => <OneTimeToken {...props} />,
				},
				{
					title: "Open API",
					href: "/docs/plugins/open-api",
					icon: (props?: any) => <OpenAPI {...props} />,
				},
				{
					title: "JWT",
					icon: (props?: any) => <JWT {...props} />,
					href: "/docs/plugins/jwt",
				},
				{
					title: "Test Utils",
					href: "/docs/plugins/test-utils",
					icon: () => <FlaskConical className="w-4 h-4" />,
				},
				{
					title: "Payments",
					group: true,
					href: "",
					icon: () => <LucideAArrowDown className="w-4 h-4" />,
				},
				{
					title: "Stripe",
					href: "/docs/plugins/stripe",
					icon: (props?: any) => <Stripe {...props} />,
				},
				{
					title: "Polar",
					href: "/docs/plugins/polar",
					icon: (props?: any) => <Polar2 {...props} />,
				},
				{
					title: "Autumn Billing",
					href: "/docs/plugins/autumn",
					icon: (props?: any) => <AutumnBilling {...props} />,
				},
				{
					title: "Dodo Payments",
					href: "/docs/plugins/dodopayments",
					icon: (props?: any) => <DodoPayments {...props} />,
				},
				{
					title: "Creem",
					href: "/docs/plugins/creem",
					icon: (props?: any) => <Creem {...props} />,
				},
				{
					title: "Chargebee",
					href: "/docs/plugins/chargebee",
					icon: (props?: any) => <Chargebee {...props} />,
				},
				{
					title: "Others",
					group: true,
					icon: () => null,
					href: "",
				},
				{
					title: "Dub",
					href: "/docs/plugins/dub",
					icon: (props?: any) => <Dub {...props} />,
				},
				{
					title: "Community Plugins",
					href: "/docs/plugins/community-plugins",
					icon: (props?: any) => <CommunityPlugins {...props} />,
				},
			],
		},

	{
			title: "Listening",
			Icon: (props?: any) => <ListeningIcon {...props} />,
			list: [
				{
					title: "Introduction",
					href: "/docs/introduction",
					icon: (props?: any) => <Introduction {...props} />,
				},
				{
					title: "Comparison",
					href: "/docs/comparison",
					icon: (props?: any) => <Comparison {...props} />,
				},
				{
					title: "Installation",
					href: "/docs/installation",
					icon: (props?: any) => <Installation {...props} />,
				},
				{
					title: "Basic Usage",
					href: "/docs/basic-usage",
					icon: (props?: any) => <BasicUsage {...props} />,
				},
			],
		},

	{
			title: "Privacy",
			Icon: (props?: any) => <ShieldIcon {...props} />,
			list: [
				{
					title: "Email & Password",
					href: "/docs/authentication/email-password",
					icon: (props?: any) => <EmailPassword {...props} />,
				},
				{
					title: "Social Sign-On",
					group: true,
					icon: LucideAArrowDown,
					href: "",
				},
				{
					title: "Apple",
					href: "/docs/authentication/apple",
					icon: (props?: any) => <Apple {...props} />,
				},
				{
					title: "Atlassian",
					href: "/docs/authentication/atlassian",
					icon: (props?: any) => <Atlassian {...props} />,
				},
				{
					title: "Cognito",
					href: "/docs/authentication/cognito",
					icon: (props?: any) => <Cognito {...props} />,
				},
				{
					title: "Discord",
					href: "/docs/authentication/discord",
					icon: (props?: any) => <Discord {...props} />,
				},
				{
					title: "Dropbox",
					href: "/docs/authentication/dropbox",
					icon: (props?: any) => <Dropbox {...props} />,
				},
				{
					title: "Facebook",
					href: "/docs/authentication/facebook",
					icon: (props?: any) => <Facebook {...props} />,
				},
				{
					title: "Figma",
					href: "/docs/authentication/figma",
					icon: (props?: any) => <Figma {...props} />,
				},
				{
					title: "GitHub",
					href: "/docs/authentication/github",
					icon: (props?: any) => <GitHub {...props} />,
				},
				{
					title: "GitLab",
					href: "/docs/authentication/gitlab",
					icon: (props?: any) => <GitLab {...props} />,
				},
				{
					title: "Railway",
					href: "/docs/authentication/railway",
					icon: (props?: any) => <Railway {...props} />,
				},
				{
					title: "Google",
					href: "/docs/authentication/google",
					icon: (props?: any) => <Google {...props} />,
				},
				{
					title: "Hugging Face",
					href: "/docs/authentication/huggingface",
					icon: (props?: any) => <HuggingFace {...props} />,
				},
				{
					title: "Kakao",
					href: "/docs/authentication/kakao",
					icon: (props?: any) => <Kakao {...props} />,
				},
				{
					title: "Kick",
					href: "/docs/authentication/kick",
					icon: (props?: any) => <Kick {...props} />,
				},
				{
					title: "LINE",
					href: "/docs/authentication/line",
					icon: (props?: any) => <LINE {...props} />,
				},
				{
					title: "Linear",
					href: "/docs/authentication/linear",
					icon: (props?: any) => <Linear {...props} />,
				},
				{
					title: "LinkedIn",
					href: "/docs/authentication/linkedin",
					icon: (props?: any) => <LinkedIn {...props} />,
				},
				{
					title: "Microsoft",
					href: "/docs/authentication/microsoft",
					icon: (props?: any) => <Microsoft {...props} />,
				},
				{
					title: "Naver",
					href: "/docs/authentication/naver",
					icon: (props?: any) => <Naver {...props} />,
				},
				{
					title: "Notion",
					href: "/docs/authentication/notion",
	
					icon: (props?: any) => <Notion {...props} />,
				},
				{
					title: "Paybin",
					href: "/docs/authentication/paybin",
					icon: (props?: any) => <Paybin {...props} />,
				},
				{
					title: "PayPal",
					href: "/docs/authentication/paypal",
					icon: (props?: any) => <PayPal {...props} />,
				},
				{
					title: "Polar",
					href: "/docs/authentication/polar",
					icon: (props?: any) => <Polar {...props} />,
				},
				{
					title: "Reddit",
					href: "/docs/authentication/reddit",
					icon: (props?: any) => <Reddit {...props} />,
				},
				{
					title: "Roblox",
					href: "/docs/authentication/roblox",
					icon: (props?: any) => <Roblox {...props} />,
				},
				{
					title: "Spotify",
					href: "/docs/authentication/spotify",
					icon: (props?: any) => <Spotify {...props} />,
				},
				{
					title: "Salesforce",
					href: "/docs/authentication/salesforce",
					icon: (props?: any) => <Salesforce {...props} />,
				},
	
				{
					title: "Slack",
					href: "/docs/authentication/slack",
	
					icon: (props?: any) => <Slack {...props} />,
				},
				{
					title: "TikTok",
					href: "/docs/authentication/tiktok",
					icon: (props?: any) => <TikTok {...props} />,
				},
				{
					title: "Twitch",
					href: "/docs/authentication/twitch",
					icon: (props?: any) => <Twitch {...props} />,
				},
				{
					title: "Twitter (X)",
					href: "/docs/authentication/twitter",
					icon: (props?: any) => <TwitterX {...props} />,
				},
				{
					title: "Vercel",
					href: "/docs/authentication/vercel",
					icon: (props?: any) => <Vercel {...props} />,
				},
				{
					title: "VK",
					href: "/docs/authentication/vk",
					icon: (props?: any) => <VK {...props} />,
				},
				{
					title: "WeChat",
					href: "/docs/authentication/wechat",
					icon: (props?: any) => <WeChat {...props} />,
				},
				{
					title: "Zoom",
					href: "/docs/authentication/zoom",
					icon: (props?: any) => <Zoom {...props} />,
				},
				{
					title: "Others",
					group: true,
					icon: () => null,
					href: "",
				},
				{
					title: "Other Social Providers",
					href: "/docs/authentication/other-social-providers",
					icon: (props?: any) => <OtherSocialProviders {...props} />,
				},
			],
		},

	{
			title: "Reading",
			list: [
				{
					href: "/docs/concepts/api",
					title: "API",
					icon: (props?: any) => <API {...props} />,
				},
				{
					title: "CLI",
					icon: (props?: any) => <CLI {...props} />,
					href: "/docs/concepts/cli",
				},
				{
					title: "Client",
					href: "/docs/concepts/client",
					icon: (props?: any) => <Client {...props} />,
				},
				{
					title: "Cookies",
					href: "/docs/concepts/cookies",
					icon: (props?: any) => <Cookies {...props} />,
				},
				{
					title: "Database",
					icon: (props?: any) => <DatabaseSidebarIcon {...props} />,
					href: "/docs/concepts/database",
				},
				{
					href: "/docs/concepts/email",
					title: "Email",
					icon: (props?: any) => <Email {...props} />,
				},
				{
					href: "/docs/concepts/hooks",
					title: "Hooks",
					icon: (props?: any) => <Hooks {...props} />,
				},
				{
					href: "/docs/concepts/plugins",
					title: "Plugins",
					icon: (props?: any) => <Plugins {...props} />,
				},
				{
					title: "OAuth",
					href: "/docs/concepts/oauth",
					icon: (props?: any) => <OAuth {...props} />,
				},
				{
					title: "Rate Limit",
					icon: (props?: any) => <RateLimit {...props} />,
					href: "/docs/concepts/rate-limit",
				},
				{
					title: "Sessions",
					href: "/docs/concepts/session-management",
					icon: (props?: any) => <Sessions {...props} />,
				},
				{
					title: "TypeScript",
					href: "/docs/concepts/typescript",
					icon: (props?: any) => <TypeScript {...props} />,
				},
				{
					title: "Users & Accounts",
					href: "/docs/concepts/users-accounts",
					icon: (props?: any) => <UsersAccounts {...props} />,
				},
			],
			Icon: (props?: any) => <ReadingIcon {...props} />,
		},

	{
			title: "Streaming",
			Icon: (props?: any) => <StreamingIcon {...props} />,
			list: [
				{
					title: "Introduction",
					href: "/docs/infrastructure/introduction",
					icon: () => <Book className="size-4" />,
				},
				{
					title: "Getting Started",
					href: "/docs/infrastructure/getting-started",
					icon: () => <Gauge className="size-4" />,
				},
				{
					title: "Plugins",
					group: true,
					icon: () => <Server className="size-4" />,
					href: "",
				},
				{
					title: "Dashboard",
					href: "/docs/infrastructure/plugins/dashboard",
					icon: () => <AppWindow className="size-4" />,
				},
				{
					title: "Audit Logs",
					href: "/docs/infrastructure/plugins/audit-logs",
					icon: () => <Logs className="size-4" />,
				},
				{
					title: "Sentinel",
					href: "/docs/infrastructure/plugins/sentinel",
					icon: () => <ShieldCheck className="size-4" />,
				},
				{
					title: "Services",
					group: true,
					icon: () => <Server className="size-4" />,
					href: "",
				},
				{
					title: "Email",
					href: "/docs/infrastructure/services/email",
					icon: () => <Mail className="size-4" />,
				},
				{
					title: "SMS",
					href: "/docs/infrastructure/services/sms",
					icon: () => <Phone className="size-4" />,
				},
			],
		},
];

export const examples: Content[] = [
	{
		title: "Examples",
		href: "/docs/examples/next",
		Icon: () => (
			<svg
				xmlns="http://www.w3.org/2000/svg"
				width="1.4em"
				height="1.4em"
				viewBox="0 0 24 24"
			>
				<path
					fill="currentColor"
					d="M2 6.95c0-.883 0-1.324.07-1.692A4 4 0 0 1 5.257 2.07C5.626 2 6.068 2 6.95 2c.386 0 .58 0 .766.017a4 4 0 0 1 2.18.904c.144.119.28.255.554.529L11 4c.816.816 1.224 1.224 1.712 1.495a4 4 0 0 0 .848.352C14.098 6 14.675 6 15.828 6h.374c2.632 0 3.949 0 4.804.77q.119.105.224.224c.77.855.77 2.172.77 4.804V14c0 3.771 0 5.657-1.172 6.828S17.771 22 14 22h-4c-3.771 0-5.657 0-6.828-1.172S2 17.771 2 14z"
					opacity=".5"
				></path>
				<path
					fill="currentColor"
					d="M20 6.238c0-.298-.005-.475-.025-.63a3 3 0 0 0-2.583-2.582C17.197 3 16.965 3 16.5 3H9.988c.116.104.247.234.462.45L11 4c.816.816 1.224 1.224 1.712 1.495a4 4 0 0 0 .849.352C14.098 6 14.675 6 15.829 6h.373c1.78 0 2.957 0 3.798.238"
				></path>
				<path
					fill="currentColor"
					fillRule="evenodd"
					d="M12.25 10a.75.75 0 0 1 .75-.75h5a.75.75 0 0 1 0 1.5h-5a.75.75 0 0 1-.75-.75"
					clipRule="evenodd"
				></path>
			</svg>
		),
		list: [
			{
				title: "Astro + SolidJs",
				href: "/docs/examples/astro",
				icon: Icons.astro,
			},
			{
				title: "React Router v7",
				href: "/docs/examples/react-router",
				icon: Icons.reactRouter,
			},
			{
				title: "Next.js",
				href: "/docs/examples/next-js",
				icon: Icons.nextJS,
			},
			{
				title: "Nuxt",
				href: "/docs/examples/nuxt",
				icon: Icons.nuxt,
			},
			{
				title: "SvelteKit",
				href: "/docs/examples/svelte-kit",
				icon: Icons.svelteKit,
			},
		],
	},
];
