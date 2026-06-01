const fs = require('fs');

let fileContent = fs.readFileSync('d:/Code/better-auth/components/sidebar-content.tsx', 'utf-8');

const imports = `import aiData from "@/lib/data/ai/data.json";
import designData from "@/lib/data/design/data.json";
import developerToolsData from "@/lib/data/developer-tools/data.json";
import educationData from "@/lib/data/education/data.json";
import gamingData from "@/lib/data/gaming/data.json";
import listeningData from "@/lib/data/listening/data.json";
import privacyData from "@/lib/data/privacy/data.json";
import readingData from "@/lib/data/reading/data.json";
import streamingData from "@/lib/data/streaming/data.json";
`;

fileContent = fileContent.replace('import { Icons } from "./icons";', imports + '\nimport { Icons } from "./icons";');

const replacements = [
    { title: "AI", varName: "aiData", defaultIcon: '<BotIcon className="w-4 h-4 text-current" />', path: "ai" },
    { title: "Design", varName: "designData", defaultIcon: '<AppWindow className="w-4 h-4 text-current" />', path: "design" },
    { title: "Developer Tools", varName: "developerToolsData", defaultIcon: '<Server className="w-4 h-4 text-current" />', path: "developer-tools" },
    { title: "Education", varName: "educationData", defaultIcon: '<Book className="w-4 h-4 text-current" />', path: "education" },
    { title: "Gaming", varName: "gamingData", defaultIcon: '<Activity className="w-4 h-4 text-current" />', path: "gaming" },
    { title: "Listening", varName: "listeningData", defaultIcon: '<Activity className="w-4 h-4 text-current" />', path: "listening" },
    { title: "Privacy", varName: "privacyData", defaultIcon: '<ShieldCheck className="w-4 h-4 text-current" />', path: "privacy" },
    { title: "Reading", varName: "readingData", defaultIcon: '<ScrollTextIcon className="w-4 h-4 text-current" />', path: "reading" },
    { title: "Streaming", varName: "streamingData", defaultIcon: '<Activity className="w-4 h-4 text-current" />', path: "streaming" },
];

for (const r of replacements) {
    const listRegex = new RegExp(`title: "${r.title}",\\s*[^]*?list:\\s*\\[[\\s\\S]*?\\],\\s*},`, 'g');
    fileContent = fileContent.replace(listRegex, match => {
        // extract prefix (everything before `list:`)
        const prefixMatch = match.match(/([\s\S]*?list:\s*)/);
        const prefix = prefixMatch ? prefixMatch[1] : '';
        const listContent = `Object.keys(${r.varName}).map(key => ({
					title: key,
					href: \`/${r.path}/\${key.toLowerCase().replace(/ /g, '-')}\`,
					icon: () => ${r.defaultIcon},
				})),
		},`;
        return prefix + listContent;
    });
}

fs.writeFileSync('d:/Code/better-auth/components/sidebar-content.tsx', fileContent, 'utf-8');
console.log('Done!');
