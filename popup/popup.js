document.addEventListener('DOMContentLoaded', () => {
    const enabledToggle = document.getElementById('enabledToggle');
    const hypeSlider = document.getElementById('hypeLevel');
    const freqSlider = document.getElementById('commentFrequency');
    const hypeLabelsContainer = document.getElementById('hypeLabels');
    const freqLabelsContainer = document.getElementById('freqLabels');

    function checkWarning() {
        const hVal = parseInt(hypeSlider.value, 10);
        const fVal = parseInt(freqSlider.value, 10);
        const warningBox = document.getElementById('warningBox');

        if (hVal === 2 && fVal === 2) {
            warningBox.style.display = 'block';
        } else {
            warningBox.style.display = 'none';
        }
    }

    // Mapping for discrete values
    const hypeLevels = ["Mild", "Spicy", "Unhinged"];
    const freqLevels = ["A Sprinkle", "Plenty", "Spam"];

    function updateLabels(container, selectedIndex, slider, levels, storageKey) {
        if (!container) return;
        const spans = container.querySelectorAll('span');
        spans.forEach((span, index) => {
            if (index === selectedIndex) {
                span.classList.add('selected-label');
            } else {
                span.classList.remove('selected-label');
            }

            // Make labels clickable
            if (!span.hasAttribute('data-click-listener')) {
                span.style.cursor = 'pointer';
                span.setAttribute('data-click-listener', 'true');
                span.addEventListener('click', () => {
                    slider.value = index;
                    updateLabels(container, index, slider, levels, storageKey);
                    const label = levels[index];
                    chrome.storage.sync.set({ [storageKey]: label });
                    checkWarning();
                });
            }
        });
    }

    // Track if toggle was ON when popup opened (for button text change)
    let wasInitiallyEnabled = false;

    // Load saved settings
    chrome.storage.sync.get({
        enabled: true,
        hypeLevel: "Spicy",
        commentFrequency: "Plenty"
    }, (items) => {
        enabledToggle.checked = items.enabled;
        wasInitiallyEnabled = items.enabled; // Track initial state

        // Convert string back to index for slider
        const hIndex = hypeLevels.indexOf(items.hypeLevel);
        const initialHype = hIndex !== -1 ? hIndex : 1;
        hypeSlider.value = initialHype;
        updateLabels(hypeLabelsContainer, initialHype, hypeSlider, hypeLevels, 'hypeLevel');

        const fIndex = freqLevels.indexOf(items.commentFrequency);
        const initialFreq = fIndex !== -1 ? fIndex : 1;
        freqSlider.value = initialFreq;
        updateLabels(freqLabelsContainer, initialFreq, freqSlider, freqLevels, 'commentFrequency');

        checkWarning();
    });

    // Listen for changes

    enabledToggle.addEventListener('change', () => {
        const isEnabled = enabledToggle.checked;
        chrome.storage.sync.set({ enabled: isEnabled });

        // If it was on and user turned it off, change button text
        const boostBtn = document.getElementById('boostBtn');
        if (wasInitiallyEnabled && !isEnabled) {
            boostBtn.textContent = 'DISABLE EGO';
        } else {
            boostBtn.textContent = 'STROKE MY EGO';
        }
    });

    hypeSlider.addEventListener('input', () => {
        const val = parseInt(hypeSlider.value, 10);
        updateLabels(hypeLabelsContainer, val, hypeSlider, hypeLevels, 'hypeLevel');
        const label = hypeLevels[val];
        chrome.storage.sync.set({ hypeLevel: label });
        checkWarning();
    });

    freqSlider.addEventListener('input', () => {
        const val = parseInt(freqSlider.value, 10);
        updateLabels(freqLabelsContainer, val, freqSlider, freqLevels, 'commentFrequency');
        const label = freqLevels[val];
        chrome.storage.sync.set({ commentFrequency: label });
        checkWarning();
    });

    // Boost/Disable button - behavior depends on current state
    const boostBtn = document.getElementById('boostBtn');
    boostBtn.addEventListener('click', () => {
        // Check what mode we're in based on button text
        if (boostBtn.textContent === 'DISABLE EGO') {
            // Already disabled, just refresh to remove comments
            // (toggle is already off, setting already saved)
        } else {
            // STROKE MY EGO - enable if off, then refresh
            if (!enabledToggle.checked) {
                enabledToggle.checked = true;
                chrome.storage.sync.set({ enabled: true });
            }
        }

        chrome.tabs.query({ active: true, currentWindow: true }, (tabs) => {
            if (tabs[0]) {
                chrome.tabs.reload(tabs[0].id);
                window.close(); // Close popup after refresh
            }
        });
    });
});
