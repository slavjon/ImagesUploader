//transform bites to KB function
function formatBytes(a, b = 2) {
    if (0 === a) return "0 Bytes";
    const c = 0 > b ? 0 : b,
        d = Math.floor(Math.log(a) / Math.log(1024));
    return parseFloat((a / Math.pow(1024, d)).toFixed(c)) + " " + ["Bytes", "KB", "MB", "GB", "TB", "PB", "EB", "ZB", "YB"][d]
}

// helper function for create new html elements
const element = (tag, classes = [], content) => {

    const node = document.createElement(tag);

    if (classes.length) {
        node.classList.add(...classes);
    }
    if (content) {
        node.textContent = content;
    }
    return node;
}

// for remove some errors
function noop() {};

export function upload(selector, options = {}) {

    let files = []; //all added files array

    const onUpload = options.onUpload ?? noop;
    const previewGrid = element('div', ['preview__grid']);
    const input = document.querySelector(selector);
    const open = element('button', ['btn'], 'Open images');
    const upload = element('button', ['btn', 'primary'], 'Download');
    upload.style.display = 'none';

    if (options.multi) {
        input.setAttribute('multiple', true);
    }

    if (options.accept && Array.isArray(options.accept)) {
        input.setAttribute('accept', options.accept.join(','))
    }

    input.insertAdjacentElement('afterend', previewGrid);
    input.insertAdjacentElement('afterend', upload);
    input.insertAdjacentElement('afterend', open);

    const triggerInput = () => input.click();

    const changeHundler = event => {
        if (!event.target.files.length) {
            return;
        }

        files = Array.from(event.target.files);

        previewGrid.innerHTML = '';
        upload.style.display = 'inline-block';

        files.forEach(file => {
            if (!file.type.match('image')) {
                return;
            }

            const reader = new FileReader();

            reader.onload = ev => {
                const src = ev.target.result;
                previewGrid.insertAdjacentHTML('afterbegin',
                    `<div class="preview__img">
                        <div class="preview__remove" data-name="${file.name}">&times;</div>
                        <img src="${src}" alt="${file.name}">
                        <div class="preview__panel">
                            <div class="name">${file.name}</div>
                            <div class="size">Size: ${formatBytes(file.size, 0)}</div>
                        </div>
                    </div>
                    `);
            }
            reader.readAsDataURL(file);
        });
    }
    const removeImgHandler = event => {
        if (!event.target.dataset.name) {
            return
        }
        const { name } = event.target.dataset;
        files = files.filter(file => file.name !== name);

        if (!files.length) {
            upload.style.display = 'none';
        }

        const removeBlock = previewGrid
            .querySelector(`[data-name="${name}"]`).closest('.preview__img');
            removeBlock.classList.add('removing-animation');
        setTimeout(() => removeBlock.remove(), 200);
    }

    const clearPreviewPanel = el => {
        el.style.bottom = '0';
        el.innerHTML = `<div class="preview__info-progress"></div>`;
    }

    const uploadHandler = () => {
        previewGrid.querySelectorAll('.preview__remove').forEach(e => e.remove());
        const previewInfo = previewGrid.querySelectorAll('.preview__panel');
        previewInfo.forEach(clearPreviewPanel);
        onUpload(files, previewInfo);
    }

    open.addEventListener('click', triggerInput);
    input.addEventListener('change', changeHundler);
    previewGrid.addEventListener('click', removeImgHandler);
    upload.addEventListener('click', uploadHandler);

}