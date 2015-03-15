import bean from 'bean';
import bonzo from 'bonzo';
import qwery from 'qwery';

export function bootstrap() {
    let $button = bonzo(qwery('.js-open-form')[0]),
        $form = bonzo(qwery('.js-form')[0]);

    bean.on($button[0], 'click', function () {
        $form.addClass('thank-you-message__form--displayed');
        $button.hide();
    });
}
