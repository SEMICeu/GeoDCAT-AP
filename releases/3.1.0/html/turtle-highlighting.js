// Turtle syntax highlighting for ReSpec documents

async function setupTurtleHighlighting() {
    const turtleBlocks = document.querySelectorAll('pre.turtle');
    
    turtleBlocks.forEach((pre, index) => {
        // Get the text content (this converts HTML entities to actual characters)
        let content = pre.textContent || pre.innerText;
        
        // Clear the pre element
        pre.innerHTML = '';
        
        // Process the content line by line but preserve newlines
        let lines = content.split('\n');
        
        lines.forEach((line, lineIndex) => {
            // Check if this is a comment line
            if (line.trim().startsWith('#')) {
                let commentSpan = document.createElement('span');
                commentSpan.className = 'turtle-comment';
                commentSpan.textContent = line;
                pre.appendChild(commentSpan);
            } else {
                // For non-comment lines, apply highlighting but keep as text
                let lineSpan = highlightTurtleLineSimple(line);
                pre.appendChild(lineSpan);
            }
            
            // Add newline except for the last line
            if (lineIndex < lines.length - 1) {
                pre.appendChild(document.createTextNode('\n'));
            }
        });
    });
}

function highlightTurtleLineSimple(line) {
    let lineSpan = document.createElement('span');
    let fragment = document.createDocumentFragment();
    
    // Process URIs first
    let uriRegex = /<([^>]+)>/g;
    let lastIndex = 0;
    let match;
    
    while ((match = uriRegex.exec(line)) !== null) {
        // Add text before URI
        if (match.index > lastIndex) {
            let beforeText = line.substring(lastIndex, match.index);
            fragment.appendChild(processTextSegment(beforeText));
        }
        
        // Add highlighted URI
        let uriSpan = document.createElement('span');
        uriSpan.className = 'turtle-uri';
        uriSpan.textContent = match[0];
        fragment.appendChild(uriSpan);
        
        lastIndex = match.index + match[0].length;
    }
    
    // Process remaining text
    if (lastIndex < line.length) {
        let remainingText = line.substring(lastIndex);
        fragment.appendChild(processTextSegment(remainingText));
    }
    
    lineSpan.appendChild(fragment);
    return lineSpan;
}

function processTextSegment(text) {
    if (!text) return document.createTextNode('');
    
    let fragment = document.createDocumentFragment();
    
    // Process and protect string literals to avoid interference
    let stringRegex = /"([^"]*)"/g;
    let lastIndex = 0;
    let match;
    
    while ((match = stringRegex.exec(text)) !== null) {
        // Add text before string (process for prefixed names)
        if (match.index > lastIndex) {
            let beforeText = text.substring(lastIndex, match.index);
            fragment.appendChild(processPrefixedNames(beforeText));
        }
        
        // Add highlighted string (protected from further processing)
        let stringSpan = document.createElement('span');
        stringSpan.className = 'turtle-string';
        stringSpan.textContent = match[0];
        fragment.appendChild(stringSpan);
        
        lastIndex = match.index + match[0].length;
    }
    
    // Process remaining text for prefixed names
    if (lastIndex < text.length) {
        let remainingText = text.substring(lastIndex);
        fragment.appendChild(processPrefixedNames(remainingText));
    }
    
    return fragment;
}

function processPrefixedNames(text) {
    if (!text) return document.createTextNode('');
    
    let fragment = document.createDocumentFragment();
    
    // First handle @prefix declarations specifically
    // Allow hyphens, underscores, and dots in prefix names (e.g., l111-2009)
    let prefixDeclRegex = /(@prefix\s+)([\p{L}][\p{L}\p{N}\-_.]*?)(\s*:)/gu;
    let lastIndex = 0;
    let prefixDeclMatch;
    
    while ((prefixDeclMatch = prefixDeclRegex.exec(text)) !== null) {
        // Add text before prefix declaration
        if (prefixDeclMatch.index > lastIndex) {
            let beforeText = text.substring(lastIndex, prefixDeclMatch.index);
            fragment.appendChild(processGenericPrefixedNames(beforeText));
        }
        
        // Add @prefix keyword
        let prefixKeywordSpan = document.createElement('span');
        prefixKeywordSpan.className = 'turtle-prefix-keyword';
        prefixKeywordSpan.textContent = prefixDeclMatch[1].trim();
        fragment.appendChild(prefixKeywordSpan);
        
        // Add whitespace
        fragment.appendChild(document.createTextNode(' '));
        
        // Add prefix name
        let prefixSpan = document.createElement('span');
        prefixSpan.className = 'turtle-prefix-name';
        prefixSpan.textContent = prefixDeclMatch[2];
        fragment.appendChild(prefixSpan);
        
        // Add colon
        fragment.appendChild(document.createTextNode(':'));
        
        lastIndex = prefixDeclMatch.index + prefixDeclMatch[0].length;
    }
    
    // Handle remaining text with generic prefixed names
    if (lastIndex < text.length) {
        let remainingText = text.substring(lastIndex);
        fragment.appendChild(processGenericPrefixedNames(remainingText));
    }
    
    return fragment;
}

function processGenericPrefixedNames(text) {
    if (!text) return document.createTextNode('');
    
    let fragment = document.createDocumentFragment();
    
    // Handle prefixed names (namespace:localname) - Updated to support Unicode characters
    // Using word boundaries that work with Unicode characters, including ^^ for datatypes
    // Allow hyphens, underscores, and dots in prefix names (e.g., l111-2009)
    let prefixRegex = /(^|[\s\[\](),;.^])([\p{L}][\p{L}\p{N}\-_.]*):([^\s<>"{}|`\\;,\[\]()]+)/gu;
    let lastIndex = 0;
    let prefixMatch;
    
    while ((prefixMatch = prefixRegex.exec(text)) !== null) {
        // Add text before match (including any preceding characters)
        if (prefixMatch.index > lastIndex) {
            let beforeText = text.substring(lastIndex, prefixMatch.index);
            fragment.appendChild(processKeywords(beforeText));
        }
        
        // Add the delimiter/whitespace that was captured in group 1
        fragment.appendChild(document.createTextNode(prefixMatch[1]));
        
        // Add prefix part (group 2)
        let prefixSpan = document.createElement('span');
        prefixSpan.className = 'turtle-prefix-name';
        prefixSpan.textContent = prefixMatch[2];
        fragment.appendChild(prefixSpan);
        
        // Add colon
        fragment.appendChild(document.createTextNode(':'));
        
        // Add local name part (group 3)
        let localSpan = document.createElement('span');
        localSpan.className = 'turtle-local-name';
        localSpan.textContent = prefixMatch[3];
        fragment.appendChild(localSpan);
        
        lastIndex = prefixMatch.index + prefixMatch[0].length;
    }
    
    // Add remaining text
    if (lastIndex < text.length) {
        let remainingText = text.substring(lastIndex);
        fragment.appendChild(processKeywords(remainingText));
    }
    
    return fragment;
}

function processKeywords(text) {
    if (!text) return document.createTextNode('');
    
    let fragment = document.createDocumentFragment();
    
    // Handle language tags - Updated to support Unicode characters
    let langRegex = /@([\p{L}][\p{L}\p{N}-]*)\b/gu;
    let lastIndex = 0;
    let match;
    
    while ((match = langRegex.exec(text)) !== null) {
        // Add text before language tag
        if (match.index > lastIndex) {
            let beforeText = text.substring(lastIndex, match.index);
            fragment.appendChild(processSimpleKeywords(beforeText));
        }
        
        // Add highlighted language tag
        let langSpan = document.createElement('span');
        langSpan.className = 'turtle-lang';
        langSpan.textContent = match[0];
        fragment.appendChild(langSpan);
        
        lastIndex = match.index + match[0].length;
    }
    
    // Process remaining text for simple keywords
    if (lastIndex < text.length) {
        let remainingText = text.substring(lastIndex);
        fragment.appendChild(processSimpleKeywords(remainingText));
    }
    
    return fragment;
}

function processSimpleKeywords(text) {
    if (!text) return document.createTextNode('');
    
    let fragment = document.createDocumentFragment();
    
    // Handle '@prefix', 'a', 'true', 'false' keywords
    // Use explicit boundaries that work with Unicode characters
    let keywordRegex = /(^|[\s\[\](),;.])(@prefix|a|true|false)(?=[\s\[\](),;.]|$)/g;
    let lastIndex = 0;
    let match;
    
    while ((match = keywordRegex.exec(text)) !== null) {
        // Add text before keyword (including any preceding characters)
        if (match.index > lastIndex) {
            let beforeText = text.substring(lastIndex, match.index);
            fragment.appendChild(document.createTextNode(beforeText));
        }
        
        // Add the delimiter/whitespace that was captured in group 1
        fragment.appendChild(document.createTextNode(match[1]));
        
        // Add highlighted keyword (group 2)
        let keywordSpan = document.createElement('span');
        // Use different styling for 'a' keyword vs other keywords
        if (match[2] === 'a') {
            keywordSpan.className = 'turtle-keyword-a';
        } else {
            keywordSpan.className = 'turtle-keyword';
        }
        keywordSpan.textContent = match[2];
        fragment.appendChild(keywordSpan);
        
        lastIndex = match.index + match[0].length;
    }
    
    // Add remaining text
    if (lastIndex < text.length) {
        let remainingText = text.substring(lastIndex);
        fragment.appendChild(document.createTextNode(remainingText));
    }
    
    return fragment;
}
