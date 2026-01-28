document.addEventListener('DOMContentLoaded', () => {
    const enabledToggle = document.getElementById('enabledToggle');
    const hypeSlider = document.getElementById('hypeLevel');
    const freqSlider = document.getElementById('commentFrequency');
    const hypeLabelsContainer = document.getElementById('hypeLabels');
    const freqLabelsContainer = document.getElementById('freqLabels');

    // Mapping for discrete values
    const hypeLevels = ["Mild", "Spicy", "Unhinged"];
    const freqLevels = ["A Sprinkle", "Plenty", "Spam"];

    function updateLabels(container, selectedIndex) {
        if (!container) return;
        const spans = container.querySelectorAll('span');
        spans.forEach((span, index) => {
            if (index === selectedIndex) {
                span.classList.add('selected-label');
            } else {
                span.classList.remove('selected-label');
            }
        });
    }

    // Load saved settings
    chrome.storage.sync.get({
        enabled: true,
        hypeLevel: "Spicy",
        commentFrequency: "Plenty"
    }, (items) => {
        enabledToggle.checked = items.enabled;

        // Convert string back to index for slider
        const hIndex = hypeLevels.indexOf(items.hypeLevel);
        const initialHype = hIndex !== -1 ? hIndex : 1;
        hypeSlider.value = initialHype;
        updateLabels(hypeLabelsContainer, initialHype);

        const fIndex = freqLevels.indexOf(items.commentFrequency);
        const initialFreq = fIndex !== -1 ? fIndex : 1;
        freqSlider.value = initialFreq;
        updateLabels(freqLabelsContainer, initialFreq);
    });

    // Listen for changes
    enabledToggle.addEventListener('change', () => {
        const isEnabled = enabledToggle.checked;
        chrome.storage.sync.set({ enabled: isEnabled });
    });

    hypeSlider.addEventListener('input', () => {
        const val = parseInt(hypeSlider.value, 10);
        updateLabels(hypeLabelsContainer, val);
        const label = hypeLevels[val];
        chrome.storage.sync.set({ hypeLevel: label });
    });

    freqSlider.addEventListener('input', () => {
        const val = parseInt(freqSlider.value, 10);
        updateLabels(freqLabelsContainer, val);
        const label = freqLevels[val];
        chrome.storage.sync.set({ commentFrequency: label });
    });
});
