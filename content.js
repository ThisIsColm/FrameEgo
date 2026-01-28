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

// Selectors provided by user
// Using partial match [class*="..."] to be more robust against minor hash changes if they occur,
// but sticking close to the provided structure.
const Selectors = {
  // Container logic is now handled dynamically in runFrameEgo.
  // We keep this object for general config.

  // Classes for harvesting and cloning
  avatarContainer: '[class*="CommentHeader__AvatarContainer"]',
  userName: '[class*="CommentHeader__UserName"]',
  commentBodyWrapper: '[class*="CommentTextContainer__Wrapper"]',
  timestampWrapper: '[class*="CommentTextContainer__TimestampWrapper"]',
  commentCard: '[class*="Comment__StyledComment"]', // Added this selector

  // Specific full class names for creating new elements (to ensure styles apply)
  // We use the exact classes provided by the user.
  classes: {
    avatarContainer: "CommentHeader__AvatarContainer-qf7yeb-0 beNsac",
    userName: "CommentHeader__UserName-qf7yeb-1 DCIhe",
    commentBodyWrapper: "CommentTextContainer__Wrapper-sc-10cr1gs-4 gUNTZt",
    timestampWrapper: "CommentTextContainer__TimestampWrapper-sc-10cr1gs-2 iHdyJh",
    // Inferring some structure based on typical React styled components found
    cardRoot: "frame-ego-comment"
  }
};

let injected = false;

function runFrameEgo() {
  console.info("Frame.ego: Initializing...");

  // Load settings first
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

    // 1. Observe for Comment Container
    const observer = new MutationObserver((mutations, obs) => {
      if (injected) return;

      // Robust Discovery
      const indicator = document.querySelector(Selectors.avatarContainer);
      if (indicator) {
        let candidate = indicator;
        let foundContainer = null;
        for (let i = 0; i < 10; i++) {
          if (!candidate.parentElement) break;
          candidate = candidate.parentElement;
          if (candidate.querySelector(Selectors.commentCard)) {
            foundContainer = candidate;
          }
        }
        if (!foundContainer && indicator) {
          foundContainer = indicator.parentElement?.parentElement?.parentElement?.parentElement;
        }

        if (foundContainer && foundContainer instanceof HTMLElement) {
          console.info("Frame.ego: Comment container found via robust search.");
          injected = true;
          obs.disconnect();
          setTimeout(() => {
            executeInjection(foundContainer, settings);
          }, 100);
        }
      }
    });

    observer.observe(document.body, { childList: true, subtree: true });
  });
}
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
  const foundTimestamps = []; // Harvest relative times e.g. "2d", "14m"

  // Find all existing avatars/names
  const avatars = container.querySelectorAll(Selectors.avatarContainer);
  const names = container.querySelectorAll(Selectors.userName);

  // Iterate and pair them up (assuming sequential order matches, which is typical)
  for (let i = 0; i < avatars.length; i++) {
    const avatarImg = avatars[i].querySelector('img');
    const nameEl = names[i];

    if (avatarImg && nameEl) {
      const src = avatarImg.src;
      const name = nameEl.textContent;

      // Use name as key to ensure uniqueness
      if (!uniqueIdentities.has(name)) {
        uniqueIdentities.set(name, { name, avatarUrl: src });
      }

      // Harvest Timestamp: Look for sibling of name that matches time format
      const header = nameEl.parentElement;
      if (header) {
        const timeEl = Array.from(header.querySelectorAll('span, div'))
          .find(el => el.textContent.trim().match(/^(\d+[smhdwy]|Just now)$/));
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
  if (freq === "Plenty") ratio = 3;
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

    const identity = identities[Math.floor(Math.random() * identities.length)];
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
  // CLONING STRATEGY CORRECTION:
  // Instead of cloning container.lastElementChild (which might be the entire list wrapper!),
  // we specifically look for a 'Comment__StyledComment' and clone its PARENT wrapper.

  let referenceNode = null;
  const innerCard = container.querySelector(Selectors.commentCard);

  if (innerCard) {
    referenceNode = innerCard.parentNode; // Usually the 'div' wrapper around the styled component
  }

  let useCloning = (referenceNode && referenceNode.querySelector(Selectors.userName));

  // If we found a node, verification involves checking if it has a username inside
  if (useCloning) {
    console.info("Frame.ego: Found valid comment template to clone.");
  } else {
    console.warn("Frame.ego: Could not find valid template. Fallback to manual.");
  }

  const fragment = document.createDocumentFragment();

  comments.forEach(comment => {
    let commentEl;

    if (useCloning) {
      commentEl = referenceNode.cloneNode(true); // Clone JUST the single comment wrapper


      // 1. Update Name
      const nameNode = commentEl.querySelector(Selectors.userName);
      if (nameNode) nameNode.textContent = comment.identity.name;

      // 2. Update Avatar (Initials instead of Image)
      const avatarContainer = commentEl.querySelector(Selectors.avatarContainer);
      if (avatarContainer) {
        // Clear children (remove img tag if it exists in the clone)
        avatarContainer.innerHTML = '';

        // Style as initial circle
        avatarContainer.innerText = comment.identity.name.charAt(0).toUpperCase();
        avatarContainer.style.display = 'flex';
        avatarContainer.style.alignItems = 'center';
        avatarContainer.style.justifyContent = 'center';
        // Pick a consistent random color based on char code sum
        const colors = ['#FF5733', '#3357FF', '#F333FF', '#33FFF5', '#F5FF33', '#FFA533', '#33FF57']; // Expanded palette
        let charSum = 0;
        for (let i = 0; i < comment.identity.name.length; i++) {
          charSum += comment.identity.name.charCodeAt(i);
        }
        const colorIndex = charSum % colors.length;
        avatarContainer.style.backgroundColor = colors[colorIndex];

        avatarContainer.style.color = '#FFFFFF';
        avatarContainer.style.fontFamily = 'sans-serif'; // Safe default
        avatarContainer.style.fontWeight = 'bold';
        avatarContainer.style.fontSize = '11px';
        avatarContainer.style.borderRadius = '50%';

        // Fix shape issues
        avatarContainer.style.width = '24px';
        avatarContainer.style.height = '24px';
        avatarContainer.style.minWidth = '24px'; // Prevent squishing
        avatarContainer.style.minHeight = '24px';
        avatarContainer.style.flexShrink = '0';
        avatarContainer.style.padding = '1px 0 0 0'; // Slight nudge down
        avatarContainer.style.lineHeight = '1';
        avatarContainer.style.boxSizing = 'border-box';
      }

      // 3. Update Checkbox -> Force Unchecked & Interactive
      const completeBtn = commentEl.querySelector('button[data-complete-comment-btn="true"]');
      if (completeBtn && checkboxTemplates.unchecked) {
        // Force visual state to unchecked
        completeBtn.innerHTML = checkboxTemplates.unchecked;

        // Make interactive (fake toggle)
        // We need simple behavior: click -> swap innerHTML to checked/unchecked
        completeBtn.style.cursor = "pointer";
        completeBtn.onclick = (e) => {
          e.stopPropagation(); // Stop bubbling
          e.preventDefault();

          // Check current state by looking for specific classes in innerHTML
          // or just toggle a flag on the element
          // SAFEGUARD for crash: check if dataset exists, although element existence check handles most cases.
          const isCurrentlyChecked = completeBtn.dataset && completeBtn.dataset.fakeChecked === "true";

          if (isCurrentlyChecked) {
            completeBtn.innerHTML = checkboxTemplates.unchecked;
            if (completeBtn.dataset) completeBtn.dataset.fakeChecked = "false";
          } else {
            // Only toggle if we have a checked template
            if (checkboxTemplates.checked) {
              completeBtn.innerHTML = checkboxTemplates.checked;
              if (completeBtn.dataset) completeBtn.dataset.fakeChecked = "true";
            }
          }
        };
      }

      // 4. Update Body Message & Timestamp
      // Refined Strategy: Respect the Sibling Structure [TimestampWrapper] + [TextWrapper] found in the HTML.

      const bodyWrapper = commentEl.querySelector(Selectors.commentBodyWrapper);

      if (bodyWrapper) {
        // A. Update Timestamp
        // The timestamp is deeply nested: Wrapper -> TimestampWrapper -> Timestamp
        // We look for the specific inner class "CommentTextContainer__Timestamp" first, or fallback to the wrapper
        const timestampInner = bodyWrapper.querySelector('[class*="CommentTextContainer__Timestamp-"]');
        const timestampWrapper = bodyWrapper.querySelector(Selectors.timestampWrapper);

        if (timestampInner) {
          timestampInner.textContent = comment.timestamp;
        } else if (timestampWrapper) {
          timestampWrapper.textContent = comment.timestamp;
        }

        // B. Update Message
        // The message is inside: Wrapper -> TextWrapper -> StyledSanitizedInnerHTML
        // We try to find the deepest container to maintain all font styles.
        const textWrapper = bodyWrapper.querySelector('[class*="CommentTextContainer__Text"]');
        const formattedInner = bodyWrapper.querySelector('[class*="FormattedComment__StyledSanitizedInnerHTML"]');

        if (formattedInner) {
          formattedInner.textContent = comment.message;
        } else if (textWrapper) {
          textWrapper.textContent = comment.message;
        } else {
          // Fallback if structure is different than expected (e.g. text node directly in wrapper)
          // We must be careful not to kill the timestamp if it's a sibling in the same wrapper

          // 1. Get the timestamp node (element) to preserve
          const tsNode = timestampWrapper || timestampInner;

          if (tsNode && bodyWrapper.contains(tsNode)) {
            // Remove everything EXCEPT the timestamp wrapper tree
            Array.from(bodyWrapper.childNodes).forEach(child => {
              if (!child.contains(tsNode) && child !== tsNode) {
                child.remove();
              }
            });
            // Create valid structure if missing
            const newTextSpan = document.createElement('span');
            newTextSpan.className = "CommentTextContainer__Text-sc-10cr1gs-3 cXKCxs"; // Attempt to use discovered class
            newTextSpan.textContent = comment.message;
            bodyWrapper.appendChild(newTextSpan);
          } else {
            bodyWrapper.textContent = comment.message;
          }
        }
      }

      // 5. Update Relative Time (e.g., "2d" -> "Just now")
      const header = nameNode ? nameNode.parentElement : null;
      if (header) {
        const possibleRelativeTime = Array.from(header.querySelectorAll('span, div'))
          .find(el => el.textContent.match(/^\d+[smhd]$/) || el.textContent.includes('ago') || el.textContent === 'Just now');
        if (possibleRelativeTime) {
          possibleRelativeTime.textContent = comment.relativeTime;
          // Apply exact styles requested by user
          possibleRelativeTime.style.fontFamily = "Avenir Next, Helvetica Neue, Helvetica, Arial, sans-serif";
          possibleRelativeTime.style.fontSize = "13px";
          possibleRelativeTime.style.lineHeight = "1.5";
          possibleRelativeTime.style.color = "rgb(125, 130, 156)";
          possibleRelativeTime.style.fontWeight = "bold";
          possibleRelativeTime.style.marginLeft = "5px";
          possibleRelativeTime.style.opacity = "1";
          possibleRelativeTime.style.webkitTextSizeAdjust = "100%";
          possibleRelativeTime.style.userSelect = "none";
          possibleRelativeTime.style.webkitTapHighlightColor = "transparent";
        }
      }

    } else {
      // Fallback: Construct blindly
      commentEl = document.createElement('div');
      commentEl.style.display = "flex";
      commentEl.style.padding = "10px";
      commentEl.className = "FrameEgo_FakeComment";

      commentEl.innerHTML = `
        <div class="${Selectors.classes.avatarContainer}">
            <img src="${comment.identity.avatarUrl}" style="width: 32px; height: 32px; border-radius: 50%;">
        </div>
        <div style="margin-left: 10px; flex: 1;">
            <div style="display: flex; align-items: baseline;">
                 <span class="${Selectors.classes.userName}" style="font-weight: bold; color: white;">${comment.identity.name}</span>
                 <span style="margin-left: 5px; font-size: 13px; color: rgb(125, 130, 156); font-weight: bold; font-family: Avenir Next, Helvetica Neue, Helvetica, Arial, sans-serif; line-height: 1.5; -webkit-text-size-adjust: 100%; user-select: none;">${comment.relativeTime}</span>
            </div>
            <div class="${Selectors.classes.commentBodyWrapper}" style="margin-top: 4px;">
                <span class="${Selectors.classes.timestampWrapper}" style="color: #5E96F6; font-weight: bold; margin-right: 6px; cursor: pointer;">${comment.timestamp}</span>
                <span style="color: #ddd;">${comment.message}</span>
            </div>
        </div>
      `;
    }

    commentEl.classList.add('frame-ego-injected');

    // MIXING LOGIC: Insert randomly among existing children

    // Determine the true list container.
    // If we have a referenceNode (a comment wrapper), its parent is likely the list.
    // If NOT, we fallback to the main container.
    const targetContainer = (referenceNode && referenceNode.parentNode) ? referenceNode.parentNode : container;

    const currentChildren = targetContainer.children;
    // We can pick any index from 0 to currentChildren.length.
    // If we pick currentChildren.length, it appends to the end.
    const randomIdx = Math.floor(Math.random() * (currentChildren.length + 1));
    const referenceChild = currentChildren[randomIdx] || null;

    targetContainer.insertBefore(commentEl, referenceChild);
  });

  console.info(`Frame.ego: Successfully injected ${comments.length} comments.`);
}

// Start
runFrameEgo();
