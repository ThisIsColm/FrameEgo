// Frame.ego - Positive Reinforcement Injector

const userConfig = {
  mildMessages: [
    // Safe, affirming, totally normal notes
    "Looks good.",
    "Nice work.",
    "Good job on this.",
    "This is working well.",
    "Really nice cut.",
    "Love this.",
    "Feels solid to me.",
    "No issues on my end.",
    "Happy with this version.",
    "This plays nicely.",
    "Good pacing here.",
    "Everything tracks.",
    "This lands well.",
    "Thumbs up 👍",
    "Looks clean.",
    "Nice update.",
    "This flows.",
    "All good from my side.",
    "Feeling good about this.",
    "Ship it.",
    "No notes.",
    "Approved on my end.",
    "This feels right.",
    "Looks polished.",
    "Clean pass.",
    "Nice rhythm.",
    "This cut works.",
    "All set here.",
    "Good progress.",
    "Strong update.",
    "This is solid.",
    "Nice timing.",
    "No changes needed.",
    "I’m happy with this.",
    "Looks great to me.",
    "Really smooth.",
    "Well done.",
    "This is clean.",
    "Good flow overall.",
    "Nice choices.",
    "This version works for me.",
    "All good 👍",
    "Nothing blocking this.",
    "Comfortable with this.",
    "This plays well.",
    "Looks resolved.",
    "Good pass.",
    "Nice and clear.",
    "This holds up.",
    "Feeling good about this cut.",
    "No concerns here.",
    "Looks locked.",
    "Good to go.",
    "Works as-is.",
    "All clear from my side."
  ],

  spicyMessages: [
    // Confident, funny, elevated editor praise
    "I opened this expecting notes and now I’m just impressed.",
    "This cut solved problems I didn’t know we had.",
    "This edit understood the brief and then raised it.",
    "I don’t have feedback, I have admiration.",
    "This cut feels locked.",
    "I came with notes and left with peace.",
    "This timeline feels like it knows what it wants.",
    "This edit just earned our trust.",
    "I watched this twice on purpose.",
    "This is the version where everyone suddenly agrees.",
    "I am looking for notes and finding none.",
    "This edit is carrying the project on its back.",
    "I came here to nitpick and now I feel silly.",
    "This edit made the deadline feel worth it.",
    "This is what happens when someone actually knows what they’re doing.",
    "This cut is aggressively competent.",
    "If this isn’t final, nothing is.",
    "This edit made previous versions obsolete.",
    "I would defend this cut in a meeting.",
    "This passed the vibe check immediately.",
    "This feels like the right call.",
    "I support this version.",
    "This cut feels very intentional.",
    "No notes, just respect.",
    "This edit just lowered my blood pressure.",
    "This cut removed all my fake concerns.",
    "This is cleaner than expected (in a good way).",
    "This timeline feels calm and confident.",
    "This edit made me trust the process again.",
    "This version answers questions I didn’t ask.",
    "This cut is doing a lot of heavy lifting.",
    "I fear touching this would make it worse.",
    "This edit makes a strong case for itself.",
    "This feels extremely considered.",
    "This cut is quietly excellent.",
    "I don’t want to overthink this because it works.",
    "This edit feels correct.",
    "This version just makes sense.",
    "I have notes emotionally, not technically.",
    "This cut said ‘relax’ and I listened.",
    "This is the cleanest read so far.",
    "This edit has confidence.",
    "This cut feels resolved.",
    "This timeline knows where it’s going.",
    "This edit earned its runtime.",
    "This version is doing the job and then some.",
    "This cut feels dependable.",
    "This edit made decisions and stood by them.",
    "This feels like a grown-up edit.",
    "I would show this to stakeholders without flinching.",
    "This cut has good instincts.",
    "This edit is on our side.",
    "This version removed friction.",
    "This cut feels inevitable.",
    "This edit feels hard to argue with.",
    "This is the take I’d stand behind.",
    "This cut passed internal review (me).",
    "This edit has strong energy.",
    "This version feels deliberate."
  ],

  unhingedMessages: [
    // Absolutely feral, extremely out there, still edit notes
    "I am afraid to touch this timeline.",
    "This cut feels legally binding.",
    "That transition just rewired my brain.",
    "This edit chose violence against bad pacing.",
    "If we change this, it’s purely for sport.",
    "I tried to find something wrong and accidentally enjoyed myself.",
    "This cut has no business being this clean.",
    "I’m choosing to believe this was easy (it wasn’t).",
    "I would like to apologize to the previous version.",
    "This timeline feels protected by higher powers.",
    "I fear altering this would summon something.",
    "This edit solved it. Whatever ‘it’ was.",
    "This cut is quietly flexing.",
    "I opened Frame.io, blinked, and suddenly respected this deeply.",
    "This edit is why version numbers exist.",
    "That pacing? Criminally good.",
    "Color grade is cleaner than my browser history.",
    "That transition is illegal in at least 12 countries.",
    "Cancel the reshoot. This fixes everything.",
    "This cut feels illegal in a good way.",
    "My eyes have been blessed today.",
    "This timeline has main-character energy.",
    "I am no longer emotionally available for other versions.",
    "This edit told me to trust it and I complied.",
    "I regret having opinions after seeing this.",
    "This cut made previous feedback irrelevant.",
    "I fear suggesting changes would anger the timeline.",
    "This edit is operating at a level above me.",
    "This cut solved problems we haven’t discovered yet.",
    "I feel watched by this timeline.",
    "This edit is doing emotional damage (positive).",
    "This cut has lore.",
    "This version feels ordained.",
    "I am simply a witness to this edit.",
    "This cut has a scary amount of confidence.",
    "I would defend this timeline with my life.",
    "This edit just reset my standards.",
    "This cut is gaslighting me into thinking it was always this good.",
    "I don’t want to be responsible for touching this.",
    "This timeline feels sentient.",
    "This edit is extremely my taste and I don’t know why.",
    "This cut feels like it knows the deadline.",
    "I fear this version has already shipped itself.",
    "This edit bullied the previous cut off the timeline.",
    "This cut feels like it’s judging me.",
    "I would frame this edit and hang it.",
    "This timeline has plot armor.",
    "This edit made me forget why we were reviewing it.",
    "This cut solved creative anxiety.",
    "I am spiritually aligned with this version.",
    "This edit feels like a power move.",
    "This cut just won the argument.",
    "I feel unsafe suggesting changes.",
    "This timeline radiates authority.",
    "This edit has no notes energy.",
    "This cut made the brief nervous.",
    "I fear this edit is final even if it isn’t.",
    "This version just took control.",
    "This cut feels expensive.",
    "This edit made the client imaginary.",
    "This timeline has veto power.",
    "This cut closed the discussion.",
    "This edit dared me to disagree.",
    "This version feels untouchable.",
    "This cut achieved dominance.",
    "This edit has exceeded its permissions.",
    "This timeline is operating without supervision.",
    "This cut made me believe in editing again.",
    "Oscar? Emmy? Nobel Peace Prize? Schedule the ceremonies."
  ],

  defaultIdentity: {
    name: "Creative Director",
    avatarUrl: "https://ui-avatars.com/api/?name=Creative+Director&background=random"
  },
  extraIdentities: [
    { name: "Producer", avatarUrl: "https://ui-avatars.com/api/?name=Producer&background=random" },
    { name: "Director", avatarUrl: "https://ui-avatars.com/api/?name=Director&background=random" },
    { name: "Agency", avatarUrl: "https://ui-avatars.com/api/?name=Agency&background=random" },
    { name: "CEO", avatarUrl: "https://ui-avatars.com/api/?name=CEO&background=random" },
    { name: "Brand Team", avatarUrl: "https://ui-avatars.com/api/?name=Brand+Team&background=random" },
    { name: "Exec Producer", avatarUrl: "https://ui-avatars.com/api/?name=Exec+Producer&background=random" }
  ],
  // Ratio will be determined by settings
};

// ==========================================
// VERSION DETECTION & DUAL SELECTOR SYSTEM
// ==========================================

// V3 Selectors (existing Frame.io interface)
const SelectorsV3 = {
  avatarContainer: '[class*="CommentHeader__AvatarContainer"]',
  userName: '[class*="CommentHeader__UserName"]',
  commentBodyWrapper: '[class*="CommentTextContainer__Wrapper"]',
  timestampWrapper: '[class*="CommentTextContainer__TimestampWrapper"]',
  commentCard: '[class*="Comment__StyledComment"]',

  classes: {
    avatarContainer: "CommentHeader__AvatarContainer-qf7yeb-0 beNsac",
    userName: "CommentHeader__UserName-qf7yeb-1 DCIhe",
    commentBodyWrapper: "CommentTextContainer__Wrapper-sc-10cr1gs-4 gUNTZt",
    timestampWrapper: "CommentTextContainer__TimestampWrapper-sc-10cr1gs-2 iHdyJh",
    cardRoot: "frame-ego-comment"
  }
};

// V4 Selectors (redesigned Frame.io interface - Vapor design system)
// Extracted from actual V4 DOM provided by user
const SelectorsV4 = {
  // V4 uses data-testid attributes and Vapor styled-components
  avatarContainer: '[data-testid="avatar-container"]',
  userName: '.sc-d1fcb33f-0 .StyledText-vapor__sc-3ie3rc-0.jgHjfl',
  commentBodyWrapper: '.sc-d7664fd0-0', // Contains timestamp + message
  timestampWrapper: '[data-testid="comment-prefix-timestamp"]',
  commentCard: '.comment-cell[data-testid^="comment-cell-"]',

  // Additional V4-specific selectors
  relativeTime: '.sc-d1fcb33f-0 .StyledText-vapor__sc-3ie3rc-0.dEuzsu', // "5mo" style
  messageBody: '.sc-d7664fd0-1.herJYM .StyledText-vapor__sc-3ie3rc-0',
  completeButton: '[data-testid="comment-marked-as-complete"]',
  commentContainer: '[data-testid="comment-tab-container"]',
  commentList: '.sc-b4b8f871-0', // The grid role container

  classes: {
    avatarContainer: "StyledAvatarContainer-vapor__sc-hep5ij-1 kdMbj",
    userName: "StyledText-vapor__sc-3ie3rc-0 jgHjfl",
    commentBodyWrapper: "sc-d7664fd0-0 Wfsvx",
    timestampWrapper: "StyledText-vapor__sc-3ie3rc-0 hvWGTh sc-f79c1596-2 dZJDkS",
    relativeTime: "StyledText-vapor__sc-3ie3rc-0 dEuzsu",
    messageBody: "StyledText-vapor__sc-3ie3rc-0 gcSmcv",
    cardRoot: "frame-ego-comment-v4"
  }
};

// Detect which version of Frame.io we're on
function detectFrameVersion() {
  // V3 indicator: styled-components with "CommentHeader__" prefix
  const v3Indicator = document.querySelector('[class*="CommentHeader__"]');

  // V4 indicator: Vapor design system and data-testid attributes
  const v4Indicator = document.querySelector('[data-testid="comment-tab-container"]') ||
    document.querySelector('.comment-cell[data-testid^="comment-cell-"]') ||
    document.querySelector('[class*="-vapor__sc-"]');

  // If we find V3 styled-components, it's V3
  if (v3Indicator) {
    console.info("Frame.ego: Detected Frame.io V3 interface");
    return 'v3';
  }

  // If we find V4 patterns but no V3, it's V4
  if (v4Indicator && !v3Indicator) {
    console.info("Frame.ego: Detected Frame.io V4 interface");
    return 'v4';
  }

  // Default to V3 for backward compatibility
  console.info("Frame.ego: Version unclear, defaulting to V3");
  return 'v3';
}

// Active selectors - will be set based on detected version
let Selectors = SelectorsV3;
let detectedVersion = 'v3';

let injected = false;
let activeObserver = null;

function runFrameEgo() {
  console.info("Frame.ego: Initializing...");

  chrome.storage.sync.get({
    enabled: true,
    hypeLevel: "Spicy",
    commentFrequency: "Plenty"
  }, (settings) => {
    if (!settings.enabled) {
      console.info("Frame.ego: Disabled via settings.");
      return;
    }

    console.info(`Frame.ego: Enabled. Settings: Hype=${settings.hypeLevel}, Freq=${settings.commentFrequency}`);

    // Disconnect any existing observer before starting a new one
    if (activeObserver) {
      activeObserver.disconnect();
      activeObserver = null;
    }

    // Observe for Comment Container
    activeObserver = new MutationObserver((mutations, obs) => {
      if (injected) {
        obs.disconnect();
        activeObserver = null;
        return;
      }

      // Always try to detect version first
      const newVersion = detectFrameVersion();
      if (newVersion !== detectedVersion) {
        detectedVersion = newVersion;
        Selectors = detectedVersion === 'v4' ? SelectorsV4 : SelectorsV3;
        console.info(`Frame.ego: Switched to ${detectedVersion.toUpperCase()} selectors`);
      }

      // Now query using the CURRENT (possibly updated) selectors
      let indicator = document.querySelector(Selectors.avatarContainer);

      // Additional fallback: if still nothing found, try V4 explicitly
      if (!indicator) {
        const v4Check = document.querySelector('[data-testid="avatar-container"]');
        if (v4Check) {
          detectedVersion = 'v4';
          Selectors = SelectorsV4;
          indicator = v4Check;
          console.info("Frame.ego: Force-switched to V4 (found avatar-container)");
        }
      }

      if (indicator) {
        // Find the comment container - different strategies for V3 vs V4
        let foundContainer = null;

        if (detectedVersion === 'v4') {
          // V4: Look for the comment-tab-container or scrollable list
          foundContainer = document.querySelector('[data-testid="comment-tab-container"]') ||
            document.querySelector('#comment-tab-container') ||
            document.querySelector('.sc-b15ab202-0');

          // If still not found, walk up from indicator
          if (!foundContainer) {
            let candidate = indicator;
            for (let i = 0; i < 15; i++) {
              if (!candidate.parentElement) break;
              candidate = candidate.parentElement;
              if (candidate.querySelector('.comment-cell') ||
                candidate.id === 'comment-tab-container' ||
                candidate.getAttribute('data-testid') === 'comment-tab-container') {
                foundContainer = candidate;
                break;
              }
            }
          }
        } else {
          // V3: Walk up to find container with comment cards
          let candidate = indicator;
          for (let i = 0; i < 10; i++) {
            if (!candidate.parentElement) break;
            candidate = candidate.parentElement;
            if (candidate.querySelector(Selectors.commentCard)) {
              foundContainer = candidate;
            }
          }
          if (!foundContainer) {
            foundContainer = indicator.parentElement?.parentElement?.parentElement?.parentElement;
          }
        }

        if (foundContainer && foundContainer instanceof HTMLElement) {
          console.info(`Frame.ego: Comment container found (${detectedVersion.toUpperCase()} mode)`);
          injected = true;
          obs.disconnect();
          activeObserver = null;
          setTimeout(() => {
            executeInjection(foundContainer, settings);
          }, 100);
        }
      }
    });

    activeObserver.observe(document.body, { childList: true, subtree: true });
  });
}

// Initial Run
runFrameEgo();

// Listen for SPA navigation signal
chrome.runtime.onMessage.addListener((message) => {
  if (message.type === 'REINIT_EGO') {
    console.info("Frame.ego: Navigation detected. Resetting injection state.");
    injected = false;
    runFrameEgo();
  }
});
const dataset = {}; // Store timer

// Stores valid HTML templates for the checkbox states
let checkboxTemplates = {
  checked: null,
  unchecked: null
};

function executeInjection(container, settings) {
  // Harvest components first
  harvestComponents(container);

  // Count real comments first
  const realCommentCount = container.querySelectorAll(Selectors.avatarContainer).length;

  const identities = harvestIdentities(container);
  const commentsToInject = generateComments(identities, realCommentCount, settings);
  renderAndAppend(container, commentsToInject);

  // Update the UI counter
  updateCommentCount(commentsToInject.length);
}

function updateCommentCount(addedCount) {
  // Primary Strategy: User provided XPath
  const xpath = '//*[@id="body-wrapper"]/div[6]/div/div/div[1]/div[2]/div/div/div[2]/div/div/div[2]/div/div[1]/button[1]';
  let countBtn = null;

  try {
    const result = document.evaluate(xpath, document, null, XPathResult.FIRST_ORDERED_NODE_TYPE, null);
    countBtn = result.singleNodeValue;
  } catch (e) {
    console.warn("Frame.ego: XPath evaluation failed", e);
  }

  // Fallback Strategy: Find button with text matching "X Comments"
  if (!countBtn) {
    const buttons = Array.from(document.querySelectorAll('button'));
    countBtn = buttons.find(b => /^\d+\s+Comments?$/i.test(b.textContent.trim()));
  }

  if (countBtn) {
    const currentText = countBtn.textContent.trim();
    const match = currentText.match(/^(\d+)/);
    if (match) {
      const currentCount = parseInt(match[1], 10);
      const newCount = currentCount + addedCount;
      // Preserve "Comment" vs "Comments" logic if needed, usually just "Comments"
      const suffix = newCount === 1 ? "Comment" : "Comments";
      countBtn.textContent = `${newCount} ${suffix}`;
      console.info(`Frame.ego: Updated count from ${currentCount} to ${newCount}`);
    }
  } else {
    console.warn("Frame.ego: Could not find comment count button to update.");
  }
}

function harvestComponents(container) {
  // Try to find examples of checked and unchecked buttons to clone the HTML from
  // This ensures perfect SVG matching.

  // User provided unchecked class: CommentHeader__UncheckedCompleteCommentWrapper-qf7yeb-7 kflSgD
  const uncheckedSelector = '[class*="CommentHeader__UncheckedCompleteCommentWrapper"]';
  const checkedSelector = '[class*="CommentHeader__CheckedCompleteCommentWrapper"]';

  const uncheckedEl = container.querySelector(uncheckedSelector);
  const checkedEl = container.querySelector(checkedSelector);

  if (uncheckedEl) {
    checkboxTemplates.unchecked = uncheckedEl.parentElement.innerHTML; // Get inner content of the button
    // Use the class from the element found in DOM to be safe, or fallback to user provided
    Selectors.classes.uncheckedWrapper = uncheckedEl.className;
  } else {
    // Fallback if no unchecked comments exist on page
    // We construct a best-guess SVG or just empty div with the class?
    // Usually it's a circle.
    const userClass = "CommentHeader__UncheckedCompleteCommentWrapper-qf7yeb-7 kflSgD";
    checkboxTemplates.unchecked = `<div aria-haspopup="dialog" aria-expanded="false" class="${userClass}"><svg width="16" height="16" viewBox="0 0 16 16" xmlns="http://www.w3.org/2000/svg"><circle cx="8" cy="8" r="7.5" fill="none" stroke="currentColor" stroke-opacity="0.5"></circle></svg></div>`;
  }

  if (checkedEl) {
    checkboxTemplates.checked = checkedEl.parentElement.innerHTML;
  }
}

function harvestIdentities(container) {
  const uniqueIdentities = new Map();
  const foundTimestamps = []; // Harvest relative times e.g. "2d", "14m", "5mo"
  const isV4 = detectedVersion === 'v4';

  // Find all existing avatars/names - V4 uses different selectors
  const avatars = container.querySelectorAll(Selectors.avatarContainer);

  // For V4, names are in a specific location
  let names;
  if (isV4) {
    // V4: Get names from the header spans
    names = container.querySelectorAll('.sc-d1fcb33f-0 .StyledText-vapor__sc-3ie3rc-0.jgHjfl');
  } else {
    names = container.querySelectorAll(Selectors.userName);
  }

  console.info(`Frame.ego: Found ${avatars.length} avatars and ${names.length} names to harvest`);

  // Iterate and pair them up
  for (let i = 0; i < avatars.length; i++) {
    let avatarSrc = null;
    const nameEl = names[i];

    if (isV4) {
      // V4: Avatar is SVG with nested <image> tag
      const svgImage = avatars[i].querySelector('image');
      if (svgImage) {
        avatarSrc = svgImage.getAttribute('href') || svgImage.getAttribute('xlink:href');
      }
    } else {
      // V3: Avatar uses <img> tag
      const avatarImg = avatars[i].querySelector('img');
      if (avatarImg) {
        avatarSrc = avatarImg.src;
      }
    }

    if (nameEl) {
      const name = nameEl.textContent.trim();

      // Use name as key to ensure uniqueness
      if (name && !uniqueIdentities.has(name)) {
        uniqueIdentities.set(name, {
          name,
          avatarUrl: avatarSrc || `https://ui-avatars.com/api/?name=${encodeURIComponent(name)}&background=random`
        });
      }

      // Harvest Timestamp: Look for sibling relative time (e.g., "5mo", "2d")
      const header = nameEl.closest('.sc-d1fcb33f-0') || nameEl.parentElement;
      if (header) {
        const timeEl = Array.from(header.querySelectorAll('span'))
          .find(el => el !== nameEl && el.textContent.trim().match(/^(\d+[smhdwy]o?|Just now)$/i));
        if (timeEl) {
          foundTimestamps.push(timeEl.textContent.trim());
        }
      }
    }
  }

  const identityList = Array.from(uniqueIdentities.values());

  // Mix in the extra identities
  identityList.push(...userConfig.extraIdentities);

  console.info(`Frame.ego: Harvested ${identityList.length} identities and ${foundTimestamps.length} timestamps.`);

  const finalList = identityList.length > 0 ? identityList : [userConfig.defaultIdentity];

  // Return object with both lists
  return { identities: finalList, timestamps: foundTimestamps };
}

function generateComments(data, realCount, settings) {
  const { identities, timestamps } = data;
  const hypeLevel = settings?.hypeLevel || "Spicy";
  const freq = settings?.commentFrequency || "Plenty";

  let ratio = 4; // Default 'Plenty' (roughly 1:3 or 1:4)
  if (freq === "A Sprinkle") ratio = 5;
  if (freq === "Plenty") ratio = 2;
  if (freq === "Spam") ratio = 0.33; // 3 fake per 1 real

  // Ratio Logic
  let count = 0;
  if (realCount > 0) {
    count = Math.floor(realCount / ratio);
    if (ratio < 1) count = Math.ceil(realCount * (1 / ratio));
    count = Math.max(1, count); // Ensure at least 1 if real > 0
  } else {
    count = 2; // Default if 0 real comments
  }

  console.info(`Frame.ego: Freq=${freq}, Ratio=${ratio}. Found ${realCount} real -> Injecting ${count} fake.`);

  // Select Message Bank
  let messageBank = userConfig.spicyMessages;
  if (hypeLevel === "Mild") messageBank = userConfig.mildMessages;
  if (hypeLevel === "Spicy") messageBank = userConfig.spicyMessages;
  if (hypeLevel === "Unhinged") messageBank = userConfig.unhingedMessages;

  const comments = [];
  const fallbackTimes = ["2d", "4h", "12m", "1d"];

  // Shuffle messages to pick unique ones
  const availableMessages = [...messageBank].sort(() => Math.random() - 0.5);

  for (let i = 0; i < count; i++) {
    // Pick unique message if available, else fallback to random
    const msg = availableMessages[i] || messageBank[Math.floor(Math.random() * messageBank.length)];

    // ONLY use fake identities - never real names
    const fakeIdentities = userConfig.extraIdentities.length > 0 ? userConfig.extraIdentities : [userConfig.defaultIdentity];
    const identity = fakeIdentities[Math.floor(Math.random() * fakeIdentities.length)];
    const time = ["00:15", "01:30", "02:45", "10:22", "00:05"][Math.floor(Math.random() * 5)];

    // Pick a relative time from harvested list, or fallback
    const pool = timestamps.length > 0 ? timestamps : fallbackTimes;
    const relTime = pool[Math.floor(Math.random() * pool.length)];

    comments.push({
      identity,
      message: msg,
      timestamp: time,
      relativeTime: relTime
    });
  }
  return comments;
}

function renderAndAppend(container, comments) {
  // Version-aware comment rendering
  const isV4 = detectedVersion === 'v4';

  let referenceNode = null;
  let referenceWrapper = null; // V4: the wrapper with transform
  const innerCard = container.querySelector(Selectors.commentCard);

  if (innerCard) {
    if (isV4) {
      // V4: Clone the PARENT wrapper (has transform: translate3d positioning)
      referenceNode = innerCard;
      referenceWrapper = innerCard.parentElement; // The sc-671f3bb0-3 wrapper
    } else {
      // V3: We need the parent of the styled comment
      referenceNode = innerCard.parentNode;
    }
  }

  // Verify we found a valid template
  const usernameSelector = isV4 ? SelectorsV4.userName : Selectors.userName;
  let useCloning = (referenceNode && referenceNode.querySelector(usernameSelector));

  if (useCloning) {
    console.info(`Frame.ego: Found valid ${isV4 ? 'V4' : 'V3'} comment template to clone.`);
  } else {
    console.warn("Frame.ego: Could not find valid template. Fallback to manual.");
  }

  comments.forEach(comment => {
    let commentEl;

    if (useCloning) {
      commentEl = referenceNode.cloneNode(true);

      if (isV4) {
        // ========== V4 RENDERING ==========

        // 1. Update Name
        const nameNode = commentEl.querySelector('.StyledText-vapor__sc-3ie3rc-0.jgHjfl');
        if (nameNode) {
          // Clear any nested spans and set the name
          nameNode.innerHTML = `<span><span class="">${comment.identity.name}</span></span>`;
        }

        // 2. Update Avatar (Initials instead of Image)
        const avatarContainer = commentEl.querySelector('[data-testid="avatar-container"]');
        if (avatarContainer) {
          // V4 avatar uses SVG - replace with initial circle
          avatarContainer.innerHTML = '';
          avatarContainer.style.display = 'flex';
          avatarContainer.style.alignItems = 'center';
          avatarContainer.style.justifyContent = 'center';

          const colors = ['#FF5733', '#3357FF', '#F333FF', '#33FFF5', '#F5FF33', '#FFA533', '#33FF57'];
          let charSum = 0;
          for (let i = 0; i < comment.identity.name.length; i++) {
            charSum += comment.identity.name.charCodeAt(i);
          }
          avatarContainer.style.backgroundColor = colors[charSum % colors.length];
          avatarContainer.style.color = '#FFFFFF';
          avatarContainer.style.fontWeight = 'bold';
          avatarContainer.style.fontSize = '11px';
          avatarContainer.style.borderRadius = '50%';
          avatarContainer.style.width = '24px';
          avatarContainer.style.height = '24px';
          avatarContainer.innerText = comment.identity.name.charAt(0).toUpperCase();
        }

        // 3. Update Relative Time (e.g., "5mo")
        const relTimeNode = commentEl.querySelector('.sc-d1fcb33f-0 .StyledText-vapor__sc-3ie3rc-0.dEuzsu');
        if (relTimeNode) relTimeNode.textContent = comment.relativeTime;

        // 4. Update Timecode Timestamp
        const timecodeNode = commentEl.querySelector('[data-testid="comment-prefix-timestamp"]');
        if (timecodeNode) timecodeNode.textContent = comment.timestamp;

        // 5. Update Message Body
        const messageNode = commentEl.querySelector('.sc-d7664fd0-1.herJYM .StyledText-vapor__sc-3ie3rc-0');
        if (messageNode) {
          messageNode.textContent = comment.message;
        } else {
          // Fallback: find the message wrapper and update
          const messageWrapper = commentEl.querySelector('.sc-d7664fd0-1.herJYM');
          if (messageWrapper) {
            messageWrapper.innerHTML = `<span class="StyledText-vapor__sc-3ie3rc-0 gcSmcv">${comment.message}</span>`;
          }
        }

        // 6. Update Complete Button (force unchecked state)
        const completeBtn = commentEl.querySelector('[data-testid="comment-marked-as-complete"]');
        if (completeBtn) {
          completeBtn.dataset.selected = 'false';
          // Make interactive
          completeBtn.onclick = (e) => {
            e.stopPropagation();
            e.preventDefault();
            const isChecked = completeBtn.dataset.selected === 'true';
            completeBtn.dataset.selected = isChecked ? 'false' : 'true';
          };
        }

        // 7. Update IDs to avoid duplicates
        const cellId = 'frame-ego-' + Math.random().toString(36).substr(2, 9);
        commentEl.id = cellId;
        commentEl.dataset.testid = `comment-cell-${cellId}`;

      } else {
        // ========== V3 RENDERING (existing logic) ==========

        // 1. Update Name
        const nameNode = commentEl.querySelector(Selectors.userName);
        if (nameNode) nameNode.textContent = comment.identity.name;

        // 2. Update Avatar
        const avatarContainer = commentEl.querySelector(Selectors.avatarContainer);
        if (avatarContainer) {
          avatarContainer.innerHTML = '';
          avatarContainer.innerText = comment.identity.name.charAt(0).toUpperCase();
          avatarContainer.style.display = 'flex';
          avatarContainer.style.alignItems = 'center';
          avatarContainer.style.justifyContent = 'center';
          const colors = ['#FF5733', '#3357FF', '#F333FF', '#33FFF5', '#F5FF33', '#FFA533', '#33FF57'];
          let charSum = 0;
          for (let i = 0; i < comment.identity.name.length; i++) {
            charSum += comment.identity.name.charCodeAt(i);
          }
          avatarContainer.style.backgroundColor = colors[charSum % colors.length];
          avatarContainer.style.color = '#FFFFFF';
          avatarContainer.style.fontFamily = 'sans-serif';
          avatarContainer.style.fontWeight = 'bold';
          avatarContainer.style.fontSize = '11px';
          avatarContainer.style.borderRadius = '50%';
          avatarContainer.style.width = '24px';
          avatarContainer.style.height = '24px';
          avatarContainer.style.minWidth = '24px';
          avatarContainer.style.minHeight = '24px';
          avatarContainer.style.flexShrink = '0';
          avatarContainer.style.padding = '1px 0 0 0';
          avatarContainer.style.lineHeight = '1';
          avatarContainer.style.boxSizing = 'border-box';
        }

        // 3. Update Checkbox
        const completeBtn = commentEl.querySelector('button[data-complete-comment-btn="true"]');
        if (completeBtn && checkboxTemplates.unchecked) {
          completeBtn.innerHTML = checkboxTemplates.unchecked;
          completeBtn.style.cursor = "pointer";
          completeBtn.onclick = (e) => {
            e.stopPropagation();
            e.preventDefault();
            const isCurrentlyChecked = completeBtn.dataset && completeBtn.dataset.fakeChecked === "true";
            if (isCurrentlyChecked) {
              completeBtn.innerHTML = checkboxTemplates.unchecked;
              if (completeBtn.dataset) completeBtn.dataset.fakeChecked = "false";
            } else if (checkboxTemplates.checked) {
              completeBtn.innerHTML = checkboxTemplates.checked;
              if (completeBtn.dataset) completeBtn.dataset.fakeChecked = "true";
            }
          };
        }

        // 4. Update Body Message & Timestamp
        const bodyWrapper = commentEl.querySelector(Selectors.commentBodyWrapper);
        if (bodyWrapper) {
          const timestampInner = bodyWrapper.querySelector('[class*="CommentTextContainer__Timestamp-"]');
          const timestampWrapper = bodyWrapper.querySelector(Selectors.timestampWrapper);
          if (timestampInner) timestampInner.textContent = comment.timestamp;
          else if (timestampWrapper) timestampWrapper.textContent = comment.timestamp;

          const textWrapper = bodyWrapper.querySelector('[class*="CommentTextContainer__Text"]');
          const formattedInner = bodyWrapper.querySelector('[class*="FormattedComment__StyledSanitizedInnerHTML"]');
          if (formattedInner) formattedInner.textContent = comment.message;
          else if (textWrapper) textWrapper.textContent = comment.message;
          else {
            const tsNode = timestampWrapper || timestampInner;
            if (tsNode && bodyWrapper.contains(tsNode)) {
              Array.from(bodyWrapper.childNodes).forEach(child => {
                if (!child.contains(tsNode) && child !== tsNode) child.remove();
              });
              const newTextSpan = document.createElement('span');
              newTextSpan.className = "CommentTextContainer__Text-sc-10cr1gs-3 cXKCxs";
              newTextSpan.textContent = comment.message;
              bodyWrapper.appendChild(newTextSpan);
            } else {
              bodyWrapper.textContent = comment.message;
            }
          }
        }

        // 5. Update Relative Time
        const header = nameNode ? nameNode.parentElement : null;
        if (header) {
          const possibleRelativeTime = Array.from(header.querySelectorAll('span, div'))
            .find(el => el.textContent.match(/^\d+[smhd]$/) || el.textContent.includes('ago') || el.textContent === 'Just now');
          if (possibleRelativeTime) {
            possibleRelativeTime.textContent = comment.relativeTime;
            possibleRelativeTime.style.fontFamily = "Avenir Next, Helvetica Neue, Helvetica, Arial, sans-serif";
            possibleRelativeTime.style.fontSize = "13px";
            possibleRelativeTime.style.lineHeight = "1.5";
            possibleRelativeTime.style.color = "rgb(125, 130, 156)";
            possibleRelativeTime.style.fontWeight = "bold";
            possibleRelativeTime.style.marginLeft = "5px";
          }
        }
      }

    } else {
      // Fallback: Construct manually (works for both versions)
      commentEl = document.createElement('div');
      commentEl.style.display = "flex";
      commentEl.style.padding = "10px";
      commentEl.className = isV4 ? "comment-cell frame-ego-injected" : "FrameEgo_FakeComment";

      const initial = comment.identity.name.charAt(0).toUpperCase();
      const colors = ['#FF5733', '#3357FF', '#F333FF', '#33FFF5', '#F5FF33', '#FFA533', '#33FF57'];
      let charSum = 0;
      for (let i = 0; i < comment.identity.name.length; i++) {
        charSum += comment.identity.name.charCodeAt(i);
      }
      const bgColor = colors[charSum % colors.length];

      commentEl.innerHTML = `
        <div style="width: 24px; height: 24px; border-radius: 50%; background-color: ${bgColor}; color: #fff; display: flex; align-items: center; justify-content: center; font-weight: bold; font-size: 11px; flex-shrink: 0;">
            ${initial}
        </div>
        <div style="margin-left: 10px; flex: 1;">
            <div style="display: flex; align-items: baseline;">
                 <span style="font-weight: bold; color: white;">${comment.identity.name}</span>
                 <span style="margin-left: 5px; font-size: 13px; color: rgb(125, 130, 156); font-weight: bold;">${comment.relativeTime}</span>
            </div>
            <div style="margin-top: 4px;">
                <span style="color: #5E96F6; font-weight: bold; margin-right: 6px; cursor: pointer;">${comment.timestamp}</span>
                <span style="color: #ddd;">${comment.message}</span>
            </div>
        </div>
      `;
    }

    commentEl.classList.add('frame-ego-injected');

    // Determine the target container for insertion
    let targetContainer;
    if (isV4) {
      // V4: Keep real comments intact, insert fake comments at random positions
      const virtualizedList = container.querySelector('.sc-671f3bb0-0') ||
        container.querySelector('[role="grid"]');

      if (virtualizedList && !virtualizedList.dataset.frameEgoMixed) {
        // First: Convert real comments from transform to normal flow (keep original elements!)
        const realWrappers = Array.from(virtualizedList.querySelectorAll('[style*="translate3d"]'));
        realWrappers.sort((a, b) => {
          const matchA = a.style.transform.match(/translate3d\([^,]+,\s*([0-9.]+)px/);
          const matchB = b.style.transform.match(/translate3d\([^,]+,\s*([0-9.]+)px/);
          return (matchA ? parseFloat(matchA[1]) : 0) - (matchB ? parseFloat(matchB[1]) : 0);
        });

        // Convert each REAL element to normal flow (no cloning - keeps event handlers!)
        // Don't add margin-top - let native CSS handle spacing
        realWrappers.forEach((wrapper, index) => {
          wrapper.style.position = 'relative';
          wrapper.style.transform = 'none';
          // Only first item needs no margin, rest handled by native CSS
        });
        virtualizedList.style.height = 'auto';

        // Create and insert fake comments at random positions
        comments.forEach(comment => {
          const fakeEl = referenceNode.cloneNode(true);

          // Update name
          const nameNode = fakeEl.querySelector('.StyledText-vapor__sc-3ie3rc-0.jgHjfl');
          if (nameNode) nameNode.innerHTML = `<span><span class="">${comment.identity.name}</span></span>`;

          // Update avatar
          const avatarContainer = fakeEl.querySelector('[data-testid="avatar-container"]');
          if (avatarContainer) {
            avatarContainer.innerHTML = '';
            avatarContainer.style.cssText = 'display:flex;align-items:center;justify-content:center;border-radius:50%;width:24px;height:24px;font-weight:bold;font-size:11px;color:#fff;';
            const colors = ['#FF5733', '#3357FF', '#F333FF', '#33FFF5', '#F5FF33', '#FFA533', '#33FF57'];
            let charSum = 0;
            for (let c of comment.identity.name) charSum += c.charCodeAt(0);
            avatarContainer.style.backgroundColor = colors[charSum % colors.length];
            avatarContainer.innerText = comment.identity.name.charAt(0).toUpperCase();
          }

          // Update timestamps
          const relTimeNode = fakeEl.querySelector('.sc-d1fcb33f-0 .StyledText-vapor__sc-3ie3rc-0.dEuzsu');
          if (relTimeNode) relTimeNode.textContent = comment.relativeTime;

          const timecodeNode = fakeEl.querySelector('[data-testid="comment-prefix-timestamp"]');
          if (timecodeNode) timecodeNode.textContent = comment.timestamp;

          // Update message
          const messageNode = fakeEl.querySelector('.sc-d7664fd0-1 .StyledText-vapor__sc-3ie3rc-0');
          if (messageNode) messageNode.textContent = comment.message;

          // Set checkmark to unchecked and make it clickable
          const completeBtn = fakeEl.querySelector('[data-testid="comment-marked-as-complete"]');
          if (completeBtn) {
            completeBtn.dataset.selected = 'false';
            completeBtn.style.cursor = 'pointer';

            // Set initial unchecked visual state
            const svg = completeBtn.querySelector('svg');
            if (svg) {
              svg.style.opacity = '0.3';
              svg.style.color = 'var(--colors-text-tertiary, #666)';
            }

            completeBtn.addEventListener('click', (e) => {
              e.stopPropagation();
              e.preventDefault();
              const isChecked = completeBtn.dataset.selected === 'true';
              completeBtn.dataset.selected = isChecked ? 'false' : 'true';
              // Toggle visual state
              const svgEl = completeBtn.querySelector('svg');
              if (svgEl) {
                svgEl.style.opacity = isChecked ? '0.3' : '1';
                svgEl.style.color = isChecked ? 'var(--colors-text-tertiary, #666)' : 'var(--colors-meta-opaque-green, #4CAF50)';
              }
            });
          }

          fakeEl.style.position = 'relative';
          fakeEl.style.transform = 'none';
          fakeEl.classList.add('frame-ego-injected');

          // Add hover effect to match real comments
          fakeEl.addEventListener('mouseenter', () => {
            fakeEl.style.backgroundColor = 'rgba(255, 255, 255, 0.05)';
          });
          fakeEl.addEventListener('mouseleave', () => {
            fakeEl.style.backgroundColor = '';
          });

          // Insert at random position
          const children = Array.from(virtualizedList.children);
          const randomIdx = Math.floor(Math.random() * (children.length + 1));
          const refChild = children[randomIdx] || null;
          virtualizedList.insertBefore(fakeEl, refChild);
        });

        virtualizedList.dataset.frameEgoMixed = 'true';
        console.info(`Frame.ego: Mixed ${realWrappers.length} real + ${comments.length} fake V4 comments`);

        // Watch for new comments AND style updates from virtualization
        const convertToNormalFlow = (element) => {
          if (element.nodeType === 1 && !element.classList.contains('frame-ego-injected')) {
            element.style.position = 'relative';
            element.style.transform = 'none';
          }
        };

        // Convert all current children
        Array.from(virtualizedList.children).forEach(convertToNormalFlow);

        const listObserver = new MutationObserver((mutations) => {
          mutations.forEach(mutation => {
            // Handle new nodes
            mutation.addedNodes.forEach(convertToNormalFlow);
            // Handle style attribute changes on existing nodes
            if (mutation.type === 'attributes' && mutation.attributeName === 'style') {
              convertToNormalFlow(mutation.target);
            }
          });
        });
        listObserver.observe(virtualizedList, {
          childList: true,
          attributes: true,
          attributeFilter: ['style'],
          subtree: true
        });

        return; // Exit early - all comments handled
      }
    } else {
      // V3: Use the parent of the reference node and random insertion
      targetContainer = (referenceNode && referenceNode.parentNode) ? referenceNode.parentNode : container;

      const currentChildren = targetContainer.children;
      const randomIdx = Math.floor(Math.random() * (currentChildren.length + 1));
      const referenceChild = currentChildren[randomIdx] || null;
      targetContainer.insertBefore(commentEl, referenceChild);
    }
  });

  console.info(`Frame.ego: Successfully injected ${comments.length} comments (${isV4 ? 'V4' : 'V3'} mode).`);
}

// Start
runFrameEgo();
