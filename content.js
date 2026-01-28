// Frame.ego - Positive Reinforcement Injector

const userConfig = {
  positiveMessages: [
    "No notes.",
    "Love the pacing here.",
    "This cut is buttery smooth.",
    "Approved.",
    "Colors look incredible.",
    "Exactly what we talked about.",
    "Ship it.",
    "The client is going to flip (in a good way).",
    "Audio mix is perfect.",
    "Can we lock this version?"
  ],
  defaultIdentity: {
    name: "Creative Director",
    avatarUrl: "https://ui-avatars.com/api/?name=Creative+Director&background=random"
  },
  ratio: 4 // 1 fake per 4 real
};

// Selectors provided by user
// Using partial match [class*="..."] to be more robust against minor hash changes if they occur,
// but sticking close to the provided structure.
const Selectors = {
  // Container is provided as XPath. We will handle this dynamically.
  containerXPath: '//*[@id="body-wrapper"]/div[6]/div/div/div[1]/div[2]/div/div/div[2]/div/div/div[3]/div[1]/div/div[2]',

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

    const container = getElementByXPath(Selectors.containerXPath);
    if (container) {
      console.info("Frame.ego: Comment container found. Starting injection sequence...");
      injected = true; // prevent double injection
      obs.disconnect(); // Stop observing once found

      // 2. Buffer wait to allow real comments to render so we can harvest them
      setTimeout(() => {
        executeInjection(container);
      }, 1500);
    }
  });

  observer.observe(document.body, {
    childList: true,
    subtree: true
  });
}

function getElementByXPath(path) {
  return document.evaluate(path, document, null, XPathResult.FIRST_ORDERED_NODE_TYPE, null).singleNodeValue;
}

function executeInjection(container) {
  // Count real comments first
  const realCommentCount = container.querySelectorAll(Selectors.avatarContainer).length;

  const identities = harvestIdentities(container);
  const commentsToInject = generateComments(identities, realCommentCount);
  renderAndAppend(container, commentsToInject);
}

function harvestIdentities(container) {
  const uniqueIdentities = new Map();

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
    }
  }

  const identityList = Array.from(uniqueIdentities.values());
  console.info(`Frame.ego: Harvested ${identityList.length} identities.`);

  if (identityList.length === 0) {
    return [userConfig.defaultIdentity];
  }
  return identityList;
}

function generateComments(identities, realCount) {
  // Ratio Logic: 1 fake for every 4 real.
  // Example: 20 real comments -> 5 fake.
  // Minimum 1 if there's at least 1 real comment, unless 0 real.
  let count = 0;
  if (realCount > 0) {
    count = Math.max(1, Math.floor(realCount / userConfig.ratio));
  } else {
    // If 0 real comments, maybe inject 1 just to be nice? Or 0?
    // "Big Bang" usually implies *some* activity. Let's output 1 or 2.
    count = 2;
  }

  console.info(`Frame.ego: Found ${realCount} real comments. Injecting ${count} fake ones (Ratio 1:${userConfig.ratio}).`);

  const comments = [];

  for (let i = 0; i < count; i++) {
    const msg = userConfig.positiveMessages[Math.floor(Math.random() * userConfig.positiveMessages.length)];
    const identity = identities[Math.floor(Math.random() * identities.length)];
    const time = ["00:15", "01:30", "02:45", "10:22", "00:05"][Math.floor(Math.random() * 5)];

    comments.push({
      identity,
      message: msg,
      timestamp: time
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
          .find(el => el.textContent.match(/^\d+[smhd]$/) || el.textContent.includes('ago'));
        if (possibleRelativeTime) {
          possibleRelativeTime.textContent = " • Just now";
          possibleRelativeTime.style.marginLeft = "4px";
          possibleRelativeTime.style.opacity = "0.7";
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
            <div style="display: flex; justify-content: space-between;">
                <div>
                    <span class="${Selectors.classes.userName}">${comment.identity.name}</span>
                    <span style="margin-left: 8px; font-size: 0.8em; color: #888;">Just now</span>
                </div>
                <div class="${Selectors.classes.timestampWrapper}" style="color: #9d50f0; font-weight: bold;">
                    ${comment.timestamp}
                </div>
            </div>
            <div class="${Selectors.classes.commentBodyWrapper}">
                ${comment.message}
            </div>
        </div>
      `;
    }

    commentEl.classList.add('frame-ego-injected');
    fragment.appendChild(commentEl);
  });

  container.appendChild(fragment);
  console.info(`Frame.ego: Successfully injected ${comments.length} comments.`);
}

// Start
runFrameEgo();
