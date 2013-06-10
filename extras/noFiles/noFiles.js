(function () {
    var origSwitchTab = switchTab;

    switchTab = function (tab) {
        origSwitchTab("headings");
    };
})();
