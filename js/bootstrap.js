import bean from 'bean';
import bonzo from 'bonzo';
import qwery from 'qwery';
import forEach from 'lodash-node/modern/collection/forEach'

const MAX_CHARS = 200;

function $(selector) {
    return bonzo(qwery(selector));
}

function addDisplayFormHandler() {
    let $button = $('.js-open-form'),
        $form = $('.js-form');

    bean.on($button[0], 'click', function () {
        $form.addClass('thank-you-message__form--displayed');
        $button.hide();
    });
}

function addRemainingCharactersHandler() {
    let $messageBox = $('.js-message-box'),
        $remainingChars = $('.js-remaining-chars');

    forEach(['keydown', 'keyup'], function (event) {
        bean.on($messageBox[0], event, function () {
            const charsUsed = $messageBox.val().length,
                  remaining = Math.max(0, MAX_CHARS - charsUsed);

            $remainingChars.text(remaining);
            $remainingChars.toggleClass('thank-you-message__characters-remaining--zero', remaining < 1);
        });
    });
}

export function bootstrap() {
    addDisplayFormHandler();
    addRemainingCharactersHandler();
}
