// Frame.ego - Positive Reinforcement Injector

const userConfig = {
  positiveMessages: [
    "I opened this expecting notes and now I’m just impressed.",
    "This edit just lowered my blood pressure.",
    "I regret having opinions after seeing this.",
    "This cut solved problems I didn’t know we had.",
    "I would defend this edit in court.",
    "This is the version where everyone suddenly agrees.",
    "If we change this, it’s purely for sport.",
    "This edit understood the brief and then raised it.",
    "I am looking for notes and finding none.",
    "This cut is doing emotional damage (the good kind).",
    "This edit is carrying the project on its back.",
    "I don’t have feedback, I have admiration.",
    "This is suspiciously good.",
    "This cut has no business being this clean.",
    "I came here to nitpick and now I feel silly.",
    "This edit made the deadline feel worth it.",
    "This is what happens when someone actually knows what they’re doing.",
    "I fear touching this timeline.",
    "This cut is locked spiritually.",
    "If this isn’t final, nothing is.",
    "This edit chose violence against bad pacing.",
    "I tried to find something wrong and got distracted watching it again.",
    "This cut is aggressively competent.",
    "This edit said ‘trust me’ and I listened.",
    "I would show this to other editors unprompted.",
    "This timeline feels legally sound.",
    "This edit is doing the most, quietly.",
    "I have run out of fake concerns.",
    "This cut deserves a slow nod of approval.",
    "This edit made previous versions obsolete.",
    "I’m afraid changing anything would anger it.",
    "This cut is built different.",
    "I came with notes and left with peace.",
    "This edit is why version numbers exist.",
    "I support this edit financially and emotionally.",
    "This cut has main-character pacing.",
    "This edit is extremely my taste and I don’t know why.",
    "I would like to apologize to the previous cut.",
    "This timeline feels like it knows what it wants.",
    "This edit just earned our trust.",
    "I’m choosing to believe this was easy (it wasn’t).",
    "This cut passed the vibe check immediately.",
    "I’m not brave enough to suggest changes.",
    "This edit solved it. Whatever ‘it’ was.",
    "This cut is quietly flexing.",
    "I watched this twice on purpose.",
    "This edit made me forget to give notes.",
    "This timeline feels protected.",
    "This cut feels illegal in a good way.",
    "I have nothing to add except respect."
  ],
  defaultIdentity: {
    name: "Creative Director",
    avatarUrl: "https://ui-avatars.com/api/?name=Creative+Director&background=random"
  },
  extraIdentities: [
    { name: "Producer", avatarUrl: "https://ui-avatars.com/api/?name=Producer&background=random" },
    { name: "Director", avatarUrl: "https://ui-avatars.com/api/?name=Director&background=random" },
    { name: "Agency", avatarUrl: "https://ui-avatars.com/api/?name=Agency&background=random" },
    { name: "Exec Producer", avatarUrl: "https://ui-avatars.com/api/?name=Exec+Producer&background=random" }
  ],
  ratio: 4 // 1 fake per 4 real
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

  // 1. Observe for Comment Container
  const observer = new MutationObserver((mutations, obs) => {
    if (injected) return;

    // Robust Discovery: Look for an avatar which implies comments exist
    const indicator = document.querySelector(Selectors.avatarContainer);

    if (indicator) {
      // Traverse up to find the container
      let candidate = indicator;
      let foundContainer = null;

      // Traverse up to 10 levels
      for (let i = 0; i < 10; i++) {
        if (!candidate.parentElement) break;
        candidate = candidate.parentElement;
        // Strategy: The container should contain multiple comment-like items.
        // Or we simply check if it contains our indicator and has no other 'list' parents.
        // Simplest helper: We found the avatar, we know the structure is Avatar->Header->Wrapper->List (roughly).
        // Let's pass the 4th parent blindly if we have to, BUT renderAndAppend has smart logic now.
        // So we can just pass the parentElement of the Comment Card to find it.

        if (candidate.querySelector(Selectors.commentCard)) {
          foundContainer = candidate;
          // Keep going up? No, the first one containing a card is likely the direct wrapper or list.
          // But actually, the list element itself contains cards as CHILDREN.
          // So if candidate HAS a card as a child, it is the list.
          // querySelector finds descendants, so allow it.
        }
      }

      // Fallback: If we didn't find via Card selector (maybe class name changed), use valid heuristic
      if (!foundContainer && indicator) {
        // Avatar -> Header (1) -> Wrapper (2) -> Item (3) -> List (4)
        foundContainer = indicator.parentElement?.parentElement?.parentElement?.parentElement;
      }

      // Safety check: ensure container is valid element
      if (foundContainer && foundContainer instanceof HTMLElement) {
        console.info("Frame.ego: Comment container found via robust search.");

        // Verify it has comments (it must, since we found indicator)
        injected = true;
        obs.disconnect();

        setTimeout(() => {
          executeInjection(foundContainer);
        }, 100);
      }
    }
  });

  // Attach observer to body
  observer.observe(document.body, {
    childList: true,
    subtree: true
  });
}
const dataset = {}; // Store timer

// Stores valid HTML templates for the checkbox states
let checkboxTemplates = {
  checked: null,
  unchecked: null
};

function executeInjection(container) {
  // Harvest components first
  harvestComponents(container);

  // Count real comments first
  const realCommentCount = container.querySelectorAll(Selectors.avatarContainer).length;

  const identities = harvestIdentities(container);
  const commentsToInject = generateComments(identities, realCommentCount);
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

function generateComments(data, realCount) {
  const { identities, timestamps } = data;

  // Ratio Logic: 1 fake for every 4 real.
  let count = 0;
  if (realCount > 0) {
    count = Math.max(1, Math.floor(realCount / userConfig.ratio));
  } else {
    count = 2;
  }

  console.info(`Frame.ego: Found ${realCount} real comments. Injecting ${count} fake ones (Ratio 1:${userConfig.ratio}).`);

  const comments = [];
  const fallbackTimes = ["2d", "4h", "12m", "1d"];

  for (let i = 0; i < count; i++) {
    const msg = userConfig.positiveMessages[Math.floor(Math.random() * userConfig.positiveMessages.length)];
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

      // 2. Update Avatar
      const avatarContainer = commentEl.querySelector(Selectors.avatarContainer);
      if (avatarContainer) {
        const img = avatarContainer.querySelector('img');
        if (img) {
          img.src = comment.identity.avatarUrl;
          img.alt = comment.identity.name;
        }
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
