/**
 * Created by davem on 27/11/2016.
 */
describe('Learn JavaScript', function() {
    it('can show question view', function () {
        learnjavascript.showView('#question-1');
        expect($('.view-container .question-view').length).toEqual(1);
    });
});