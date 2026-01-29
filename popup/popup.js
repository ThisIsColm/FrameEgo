document.addEventListener('DOMContentLoaded', () => {
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

    // Load saved settings
    chrome.storage.sync.get({
        enabled: true,
        hypeLevel: "Spicy",
        commentFrequency: "Plenty"
    }, (items) => {
        // Update button state visually
        updateButtonUI(items.enabled);

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

    function updateButtonUI(enabled) {
        const boostBtn = document.getElementById('boostBtn');
        const statusBadge = document.getElementById('statusBadge');
        if (enabled) {
            boostBtn.textContent = 'DISABLE EGO';
            boostBtn.classList.add('deactivated');
            statusBadge.style.display = 'flex';
        } else {
            boostBtn.textContent = 'STROKE MY EGO';
            boostBtn.classList.remove('deactivated');
            statusBadge.style.display = 'none';
        }
    }

    // Listen for changes
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

    // Establish connection to background to detect popup closure
    chrome.runtime.connect({ name: "popup" });

    // Boost button - toggle enabled state
    const boostBtn = document.getElementById('boostBtn');
    boostBtn.addEventListener('click', () => {
        chrome.storage.sync.get({ enabled: true }, (items) => {
            const newState = !items.enabled;
            chrome.storage.sync.set({ enabled: newState }, () => {
                window.close(); // Closing triggers the refresh
            });
        });
    });
});
