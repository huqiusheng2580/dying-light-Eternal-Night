// 获取所有图片元素
const images = document.querySelectorAll('ul li img');

// 创建模态框
const modal = document.createElement('div');
modal.classList.add('modal');

const modalContent = document.createElement('div');
modalContent.classList.add('modal-content');

const closeModal = document.createElement('span');
closeModal.classList.add('close');
closeModal.textContent = '×';

modalContent.appendChild(closeModal);
modal.appendChild(modalContent);
document.body.appendChild(modal);

// 为每张图片添加点击事件
images.forEach(img => {
    img.addEventListener('click', () => {
        modal.style.display = 'block';
        modalContent.innerHTML = ''; // 清空内容
        modalContent.appendChild(closeModal); // 重新添加关闭按钮
        const imgClone = img.cloneNode();
        imgClone.style.maxWidth = '90%'; /* 图片宽度占满模态框 */
        imgClone.style.maxHeight = '90%';
        imgClone.style.borderRadius = '10px'; /* 圆角效果 */
        modalContent.appendChild(imgClone);
    });
});

// 关闭模态框
closeModal.addEventListener('click', () => {
    modal.style.display = 'none';
});

// 点击模态框外部时关闭
window.addEventListener('click', (event) => {
    if (event.target === modal) {
        modal.style.display = 'none';
    }
});