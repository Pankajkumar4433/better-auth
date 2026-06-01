const fs = require('fs');

let fileContent = fs.readFileSync('d:/Code/better-auth/components/sidebar-content.tsx', 'utf-8');

const imports = `import aiData from "@/lib/data/ai/data.json";
import { icons as aiIcons, defaultIcon as aiDefaultIcon } from "@/lib/data/ai/icons";
import designData from "@/lib/data/design/data.json";
import { icons as designIcons, defaultIcon as designDefaultIcon } from "@/lib/data/design/icons";
import developerToolsData from "@/lib/data/developer-tools/data.json";
import { icons as developerToolsIcons, defaultIcon as developerToolsDefaultIcon } from "@/lib/data/developer-tools/icons";
import educationData from "@/lib/data/education/data.json";
import { icons as educationIcons, defaultIcon as educationDefaultIcon } from "@/lib/data/education/icons";
import gamingData from "@/lib/data/gaming/data.json";
import { icons as gamingIcons, defaultIcon as gamingDefaultIcon } from "@/lib/data/gaming/icons";
import listeningData from "@/lib/data/listening/data.json";
import { icons as listeningIcons, defaultIcon as listeningDefaultIcon } from "@/lib/data/listening/icons";
import privacyData from "@/lib/data/privacy/data.json";
import { icons as privacyIcons, defaultIcon as privacyDefaultIcon } from "@/lib/data/privacy/icons";
import readingData from "@/lib/data/reading/data.json";
import { icons as readingIcons, defaultIcon as readingDefaultIcon } from "@/lib/data/reading/icons";
import streamingData from "@/lib/data/streaming/data.json";
import { icons as streamingIcons, defaultIcon as streamingDefaultIcon } from "@/lib/data/streaming/icons";
`;

if (!fileContent.includes('import aiData')) {
    fileContent = fileContent.replace('import { Icons } from "./icons";', imports + '\nimport { Icons } from "./icons";');
}

const categories = [
    { title: "AI", varName: "aiData", iconsVar: "aiIcons", defaultIconVar: "aiDefaultIcon", path: "ai" },
    { title: "Design", varName: "designData", iconsVar: "designIcons", defaultIconVar: "designDefaultIcon", path: "design" },
    { title: "Developer Tools", varName: "developerToolsData", iconsVar: "developerToolsIcons", defaultIconVar: "developerToolsDefaultIcon", path: "developer-tools" },
    { title: "Education", varName: "educationData", iconsVar: "educationIcons", defaultIconVar: "educationDefaultIcon", path: "education" },
    { title: "Gaming", varName: "gamingData", iconsVar: "gamingIcons", defaultIconVar: "gamingDefaultIcon", path: "gaming" },
    { title: "Listening", varName: "listeningData", iconsVar: "listeningIcons", defaultIconVar: "listeningDefaultIcon", path: "listening" },
    { title: "Privacy", varName: "privacyData", iconsVar: "privacyIcons", defaultIconVar: "privacyDefaultIcon", path: "privacy" },
    { title: "Reading", varName: "readingData", iconsVar: "readingIcons", defaultIconVar: "readingDefaultIcon", path: "reading" },
    { title: "Streaming", varName: "streamingData", iconsVar: "streamingIcons", defaultIconVar: "streamingDefaultIcon", path: "streaming" },
];

for (const cat of categories) {
    const titleMatch = `title: "${cat.title}",`;
    const titleIndex = fileContent.indexOf(titleMatch);
    if (titleIndex === -1) {
        console.error("Could not find", cat.title);
        continue;
    }

    const listStartMatch = "list: [";
    let listStartIndex = fileContent.indexOf(listStartMatch, titleIndex);
    if (listStartIndex === -1) continue;
    
    let listEndIndex = listStartIndex + listStartMatch.length;
    let bracketCount = 1;
    while (bracketCount > 0 && listEndIndex < fileContent.length) {
        if (fileContent[listEndIndex] === '[') bracketCount++;
        else if (fileContent[listEndIndex] === ']') bracketCount--;
        listEndIndex++;
    }

    const newListContent = `list: Object.keys(${cat.varName}).map(key => ({
					title: key,
					href: \`/discover/${cat.path}/\${${cat.varName} ? (${cat.varName} as any)[key]?.slug || key.toLowerCase().replace(/ /g, '-') : key.toLowerCase().replace(/ /g, '-')}\`,
					icon: (${cat.iconsVar} as any)[key] || ${cat.defaultIconVar},
				}))`;

    fileContent = fileContent.substring(0, listStartIndex) + newListContent + fileContent.substring(listEndIndex);
}

fs.writeFileSync('d:/Code/better-auth/components/sidebar-content.tsx', fileContent, 'utf-8');
console.log('Update complete!');
