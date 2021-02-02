export function upload(selector, options = {}) {

    const previewGrid = document.createElement('div');
    previewGrid.classList.add('preview__grid');
    const input = document.querySelector(selector);
    const open = document.createElement('button');
    open.classList.add('btn');
    open.textContent = 'Open images'; //Text in button

    if (options.multi) {
        input.setAttribute('multiple', true);
    }

    if (options.accept && Array.isArray(options.accept)) {
        input.setAttribute('accept', options.accept.join(','))
    }

    input.insertAdjacentElement('afterend', previewGrid);
    input.insertAdjacentElement('afterend', open);

    const triggerInput = () => input.click();

    const changeHundler = event => {
        if (!event.target.files.length) {
            return;
        }

        const files = Array.from(event.target.files);

        previewGrid.innerHTML = '';
        files.forEach(file => {
            if (!file.type.match('image')) {
                return;
            }

            const reader = new FileReader();

            reader.onload = ev => {
                const src = ev.target.result;
                previewGrid.insertAdjacentHTML('afterbegin',
                    `<div class="preview__img">
                        <img src="${src}" alt="${file.name}">
                    </div>
                    `);
            }
            reader.readAsDataURL(file);
        });
    }

    open.addEventListener('click', triggerInput);
    input.addEventListener('change', changeHundler);
}