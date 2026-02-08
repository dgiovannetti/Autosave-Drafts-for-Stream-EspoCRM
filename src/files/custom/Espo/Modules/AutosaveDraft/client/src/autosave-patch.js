define('autosave-draft:autosave-patch', ['views/stream/panel', 'underscore'], function (StreamPanelView, _) {

    // 1. SETUP: Creazione funzione debounced
    const originalSetup = StreamPanelView.prototype.setup;
    StreamPanelView.prototype.setup = function () {
        if (originalSetup) {
            originalSetup.apply(this, arguments);
        }

        this.debouncedStoreControl = _.debounce(() => {
            if (this.isRemoved() || this.isDestructed) return;
            if (typeof this.storeControl === 'function') {
                this.storeControl();
            }
        }, 1500);
    };

    // 2. AFTER RENDER: Binding del listener
    const originalAfterRender = StreamPanelView.prototype.afterRender;
    StreamPanelView.prototype.afterRender = function () {
        if (originalAfterRender) {
            originalAfterRender.apply(this, arguments);
        }

        const $textarea = this.$el.find('textarea[data-name="post"]');
        if ($textarea.length) {
            $textarea.off('input.autosaveDraft');
            $textarea.on('input.autosaveDraft', () => {
                if (this.debouncedStoreControl) {
                    this.debouncedStoreControl();
                }
            });
        }
    };

    // 3. REMOVE: Cleanup per evitare memory leak e zombie callbacks
    const originalRemove = StreamPanelView.prototype.remove;
    StreamPanelView.prototype.remove = function () {
        if (this.$el) {
            this.$el.find('textarea[data-name="post"]').off('input.autosaveDraft');
        }
        if (this.debouncedStoreControl && typeof this.debouncedStoreControl.cancel === 'function') {
            this.debouncedStoreControl.cancel();
        }
        if (originalRemove) {
            return originalRemove.apply(this, arguments);
        }
    };
});
