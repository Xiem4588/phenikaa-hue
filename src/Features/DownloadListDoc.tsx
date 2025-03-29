export default class DownloadListDoc extends HTMLElement {
    connectedCallback() {
        this.innerHTML = `
            <div class="py-10 px-4 mb-20" data-container-width="bodytext">
                <div class="pb-4 mb-4">
                    <p class="flex justify-between items-center border-b pb-4 mb-4 text-gray-700">
                        Bảng thông số kỹ thuật (Technical Data Sheet).
                        <a href="/downloads/technical_data_sheet.pdf" class="text-gray-500 cursor-pointer" download>
                            <svg width="40" height="40" viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink">
                                <rect width="40" height="40" fill="url(#pattern0_28_1009)"/>
                                <defs>
                                <pattern id="pattern0_28_1009" patternContentUnits="objectBoundingBox" width="1" height="1">
                                <use xlink:href="#image0_28_1009" transform="scale(0.0111111)"/>
                                </pattern>
                                <image id="image0_28_1009" width="90" height="90" preserveAspectRatio="none" xlink:href="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAFoAAABaCAYAAAA4qEECAAAACXBIWXMAAAsTAAALEwEAmpwYAAACQklEQVR4nO3c0WoTQRSH8X8LZq34AH3Dqi9i6oUKVWivfAcvxBcQUV+jiRaK2hbt5cjAXMQwu91Nz5yQme+DvUnKNv3lZJedLJWIiIiI6P9mko4lLSUtJM3TY2TcXFJY2+JjZNwyA/0dZfsWGehzoH0OHc+Btm+WsONkczIkIiIi2vlmrHX4NGetw6clax0+LVjr8GnOWodPM9Y6iIiIyLV9vMt2IOmNpN9pO0mPkXGvMxcsL1G270cG+gJo+0LPRkDvZoGJBrqqAhMNdFUFJhroqgpMNNBVFZhooKsqMNFAV1XYcKL3W/9W5kDSmaQ/ki4lvZDUGUJ36VuYuP9bSe8kPVaDnWXQPgxgT4Hu0r7WfzZiN9WepJseuD7ssdB9yCFNdnOHkesBvBz2GOgh5JDe3PgmN9WrAZAc9l3QdyGH9AXvTmT5setGwKxiD0FP3dd92yv1ySh1T0U3AajveU/kR5JOJf1N26n1vSUl76noRkJt8pz1JL/N7D8OYNF7Kiz/V0Y3AmyTzRI59ivzO34a7n/UGd/ijv73hsgfJT00fo3FHTygLbFLIFcFbYFdCrk66Ptgl0SuEnoT7NLI1UJPwfZArhp6DLYXcvXQQ9ieyE1A57C9kZuBXsXeBnJT0EqX1JaX1VNqCnqbAe0U0E4B7RTQTgHtFNC1QPfd7MImXVlCfwZVfUP1yRL6GdDqg35ivcbwDWytI3+R9EDGHUr6CrZWkaNJkeK79zQdl1o8Qd6kv/2oxCQTERERERFpG/0DTgNO6Z33s3AAAAAASUVORK5CYII="/>
                                </defs>
                            </svg>
                        </a>
                    </p>
                    <p class="flex justify-between items-center border-b pb-4 mb-4 text-gray-700">
                        Bảng thông số kỹ thuật (Technical Data Sheet).
                        <a href="/downloads/technical_data_sheet_2.pdf" class="text-gray-500 cursor-pointer" download>
                            <svg width="40" height="40" viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink">
                                <rect width="40" height="40" fill="url(#pattern0_28_1009)"/>
                                <defs>
                                <pattern id="pattern0_28_1009" patternContentUnits="objectBoundingBox" width="1" height="1">
                                <use xlink:href="#image0_28_1009" transform="scale(0.0111111)"/>
                                </pattern>
                                <image id="image0_28_1009" width="90" height="90" preserveAspectRatio="none" xlink:href="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAFoAAABaCAYAAAA4qEECAAAACXBIWXMAAAsTAAALEwEAmpwYAAACQklEQVR4nO3c0WoTQRSH8X8LZq34AH3Dqi9i6oUKVWivfAcvxBcQUV+jiRaK2hbt5cjAXMQwu91Nz5yQme+DvUnKNv3lZJedLJWIiIiI6P9mko4lLSUtJM3TY2TcXFJY2+JjZNwyA/0dZfsWGehzoH0OHc+Btm+WsONkczIkIiIi2vlmrHX4NGetw6clax0+LVjr8GnOWodPM9Y6iIiIyLV9vMt2IOmNpN9pO0mPkXGvMxcsL1G270cG+gJo+0LPRkDvZoGJBrqqAhMNdFUFJhroqgpMNNBVFZhooKsqMNFAV1XYcKL3W/9W5kDSmaQ/ki4lvZDUGUJ36VuYuP9bSe8kPVaDnWXQPgxgT4Hu0r7WfzZiN9WepJseuD7ssdB9yCFNdnOHkesBvBz2GOgh5JDe3PgmN9WrAZAc9l3QdyGH9AXvTmT5setGwKxiD0FP3dd92yv1ySh1T0U3AajveU/kR5JOJf1N26n1vSUl76noRkJt8pz1JL/N7D8OYNF7Kiz/V0Y3AmyTzRI59ivzO34a7n/UGd/ijv73hsgfJT00fo3FHTygLbFLIFcFbYFdCrk66Ptgl0SuEnoT7NLI1UJPwfZArhp6DLYXcvXQQ9ieyE1A57C9kZuBXsXeBnJT0EqX1JaX1VNqCnqbAe0U0E4B7RTQTgHtFNC1QPfd7MImXVlCfwZVfUP1yRL6GdDqg35ivcbwDWytI3+R9EDGHUr6CrZWkaNJkeK79zQdl1o8Qd6kv/2oxCQTERERERFpG/0DTgNO6Z33s3AAAAAASUVORK5CYII="/>
                                </defs>
                            </svg>
                        </a>
                    </p>
                    <p class="flex justify-between items-center border-b pb-4 mb-4 text-gray-700">
                        Tài liệu an toàn hóa chất (Material Safety Data Sheet - MSDS).
                        <a href="/downloads/msds.pdf" class="text-gray-500 cursor-pointer" download>
                            <svg width="40" height="40" viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink">
                                <rect width="40" height="40" fill="url(#pattern0_28_1009)"/>
                                <defs>
                                <pattern id="pattern0_28_1009" patternContentUnits="objectBoundingBox" width="1" height="1">
                                <use xlink:href="#image0_28_1009" transform="scale(0.0111111)"/>
                                </pattern>
                                <image id="image0_28_1009" width="90" height="90" preserveAspectRatio="none" xlink:href="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAFoAAABaCAYAAAA4qEECAAAACXBIWXMAAAsTAAALEwEAmpwYAAACQklEQVR4nO3c0WoTQRSH8X8LZq34AH3Dqi9i6oUKVWivfAcvxBcQUV+jiRaK2hbt5cjAXMQwu91Nz5yQme+DvUnKNv3lZJedLJWIiIiI6P9mko4lLSUtJM3TY2TcXFJY2+JjZNwyA/0dZfsWGehzoH0OHc+Btm+WsONkczIkIiIi2vlmrHX4NGetw6clax0+LVjr8GnOWodPM9Y6iIiIyLV9vMt2IOmNpN9pO0mPkXGvMxcsL1G270cG+gJo+0LPRkDvZoGJBrqqAhMNdFUFJhroqgpMNNBVFZhooKsqMNFAV1XYcKL3W/9W5kDSmaQ/ki4lvZDUGUJ36VuYuP9bSe8kPVaDnWXQPgxgT4Hu0r7WfzZiN9WepJseuD7ssdB9yCFNdnOHkesBvBz2GOgh5JDe3PgmN9WrAZAc9l3QdyGH9AXvTmT5setGwKxiD0FP3dd92yv1ySh1T0U3AajveU/kR5JOJf1N26n1vSUl76noRkJt8pz1JL/N7D8OYNF7Kiz/V0Y3AmyTzRI59ivzO34a7n/UGd/ijv73hsgfJT00fo3FHTygLbFLIFcFbYFdCrk66Ptgl0SuEnoT7NLI1UJPwfZArhp6DLYXcvXQQ9ieyE1A57C9kZuBXsXeBnJT0EqX1JaX1VNqCnqbAe0U0E4B7RTQTgHtFNC1QPfd7MImXVlCfwZVfUP1yRL6GdDqg35ivcbwDWytI3+R9EDGHUr6CrZWkaNJkeK79zQdl1o8Qd6kv/2oxCQTERERERFpG/0DTgNO6Z33s3AAAAAASUVORK5CYII="/>
                                </defs>
                            </svg>
                        </a>
                    </p>
                </div>

                <div class="pb-4 mb-4">
                    <h2 class="text-lg font-bold text-gray-900 mb-5">Hướng dẫn xử lý và bảo quản</h2>
                    <p class="flex justify-between items-center border-b pb-4 mb-4 text-gray-700">
                        Phương pháp lưu trữ và bảo quản sản phẩm đúng cách.
                        <a href="/downloads/storage_guidelines.pdf" class="text-gray-500 cursor-pointer" download>
                            <svg width="40" height="40" viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink">
                                <rect width="40" height="40" fill="url(#pattern0_28_1009)"/>
                                <defs>
                                <pattern id="pattern0_28_1009" patternContentUnits="objectBoundingBox" width="1" height="1">
                                <use xlink:href="#image0_28_1009" transform="scale(0.0111111)"/>
                                </pattern>
                                <image id="image0_28_1009" width="90" height="90" preserveAspectRatio="none" xlink:href="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAFoAAABaCAYAAAA4qEECAAAACXBIWXMAAAsTAAALEwEAmpwYAAACQklEQVR4nO3c0WoTQRSH8X8LZq34AH3Dqi9i6oUKVWivfAcvxBcQUV+jiRaK2hbt5cjAXMQwu91Nz5yQme+DvUnKNv3lZJedLJWIiIiI6P9mko4lLSUtJM3TY2TcXFJY2+JjZNwyA/0dZfsWGehzoH0OHc+Btm+WsONkczIkIiIi2vlmrHX4NGetw6clax0+LVjr8GnOWodPM9Y6iIiIyLV9vMt2IOmNpN9pO0mPkXGvMxcsL1G270cG+gJo+0LPRkDvZoGJBrqqAhMNdFUFJhroqgpMNNBVFZhooKsqMNFAV1XYcKL3W/9W5kDSmaQ/ki4lvZDUGUJ36VuYuP9bSe8kPVaDnWXQPgxgT4Hu0r7WfzZiN9WepJseuD7ssdB9yCFNdnOHkesBvBz2GOgh5JDe3PgmN9WrAZAc9l3QdyGH9AXvTmT5setGwKxiD0FP3dd92yv1ySh1T0U3AajveU/kR5JOJf1N26n1vSUl76noRkJt8pz1JL/N7D8OYNF7Kiz/V0Y3AmyTzRI59ivzO34a7n/UGd/ijv73hsgfJT00fo3FHTygLbFLIFcFbYFdCrk66Ptgl0SuEnoT7NLI1UJPwfZArhp6DLYXcvXQQ9ieyE1A57C9kZuBXsXeBnJT0EqX1JaX1VNqCnqbAe0U0E4B7RTQTgHtFNC1QPfd7MImXVlCfwZVfUP1yRL6GdDqg35ivcbwDWytI3+R9EDGHUr6CrZWkaNJkeK79zQdl1o8Qd6kv/2oxCQTERERERFpG/0DTgNO6Z33s3AAAAAASUVORK5CYII="/>
                                </defs>
                            </svg>
                        </a>
                    </p>
                    <p class="flex justify-between items-center border-b pb-4 mb-4 text-gray-700">
                        Các quy trình xử lý chất thải đảm bảo an toàn và thân thiện với môi trường.
                        <a href="/downloads/waste_processing.pdf" class="text-gray-500 cursor-pointer" download>
                            <svg width="40" height="40" viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink">
                                <rect width="40" height="40" fill="url(#pattern0_28_1009)"/>
                                <defs>
                                <pattern id="pattern0_28_1009" patternContentUnits="objectBoundingBox" width="1" height="1">
                                <use xlink:href="#image0_28_1009" transform="scale(0.0111111)"/>
                                </pattern>
                                <image id="image0_28_1009" width="90" height="90" preserveAspectRatio="none" xlink:href="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAFoAAABaCAYAAAA4qEECAAAACXBIWXMAAAsTAAALEwEAmpwYAAACQklEQVR4nO3c0WoTQRSH8X8LZq34AH3Dqi9i6oUKVWivfAcvxBcQUV+jiRaK2hbt5cjAXMQwu91Nz5yQme+DvUnKNv3lZJedLJWIiIiI6P9mko4lLSUtJM3TY2TcXFJY2+JjZNwyA/0dZfsWGehzoH0OHc+Btm+WsONkczIkIiIi2vlmrHX4NGetw6clax0+LVjr8GnOWodPM9Y6iIiIyLV9vMt2IOmNpN9pO0mPkXGvMxcsL1G270cG+gJo+0LPRkDvZoGJBrqqAhMNdFUFJhroqgpMNNBVFZhooKsqMNFAV1XYcKL3W/9W5kDSmaQ/ki4lvZDUGUJ36VuYuP9bSe8kPVaDnWXQPgxgT4Hu0r7WfzZiN9WepJseuD7ssdB9yCFNdnOHkesBvBz2GOgh5JDe3PgmN9WrAZAc9l3QdyGH9AXvTmT5setGwKxiD0FP3dd92yv1ySh1T0U3AajveU/kR5JOJf1N26n1vSUl76noRkJt8pz1JL/N7D8OYNF7Kiz/V0Y3AmyTzRI59ivzO34a7n/UGd/ijv73hsgfJT00fo3FHTygLbFLIFcFbYFdCrk66Ptgl0SuEnoT7NLI1UJPwfZArhp6DLYXcvXQQ9ieyE1A57C9kZuBXsXeBnJT0EqX1JaX1VNqCnqbAe0U0E4B7RTQTgHtFNC1QPfd7MImXVlCfwZVfUP1yRL6GdDqg35ivcbwDWytI3+R9EDGHUr6CrZWkaNJkeK79zQdl1o8Qd6kv/2oxCQTERERERFpG/0DTgNO6Z33s3AAAAAASUVORK5CYII="/>
                                </defs>
                            </svg>
                        </a>
                    </p>
                </div>

                <div>
                    <h2 class="text-lg font-bold text-gray-900 mb-5">Tài liệu ứng dụng thực tế</h2>
                    <p class="flex justify-between items-center border-b pb-4 mb-4 text-gray-700">
                        Ví dụ ứng dụng sản phẩm trong ngành xây dựng, nội thất, ô tô, v.v
                        <a href="/downloads/application_examples.pdf" class="text-gray-500 cursor-pointer" download>
                            <svg width="40" height="40" viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink">
                                <rect width="40" height="40" fill="url(#pattern0_28_1009)"/>
                                <defs>
                                <pattern id="pattern0_28_1009" patternContentUnits="objectBoundingBox" width="1" height="1">
                                <use xlink:href="#image0_28_1009" transform="scale(0.0111111)"/>
                                </pattern>
                                <image id="image0_28_1009" width="90" height="90" preserveAspectRatio="none" xlink:href="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAFoAAABaCAYAAAA4qEECAAAACXBIWXMAAAsTAAALEwEAmpwYAAACQklEQVR4nO3c0WoTQRSH8X8LZq34AH3Dqi9i6oUKVWivfAcvxBcQUV+jiRaK2hbt5cjAXMQwu91Nz5yQme+DvUnKNv3lZJedLJWIiIiI6P9mko4lLSUtJM3TY2TcXFJY2+JjZNwyA/0dZfsWGehzoH0OHc+Btm+WsONkczIkIiIi2vlmrHX4NGetw6clax0+LVjr8GnOWodPM9Y6iIiIyLV9vMt2IOmNpN9pO0mPkXGvMxcsL1G270cG+gJo+0LPRkDvZoGJBrqqAhMNdFUFJhroqgpMNNBVFZhooKsqMNFAV1XYcKL3W/9W5kDSmaQ/ki4lvZDUGUJ36VuYuP9bSe8kPVaDnWXQPgxgT4Hu0r7WfzZiN9WepJseuD7ssdB9yCFNdnOHkesBvBz2GOgh5JDe3PgmN9WrAZAc9l3QdyGH9AXvTmT5setGwKxiD0FP3dd92yv1ySh1T0U3AajveU/kR5JOJf1N26n1vSUl76noRkJt8pz1JL/N7D8OYNF7Kiz/V0Y3AmyTzRI59ivzO34a7n/UGd/ijv73hsgfJT00fo3FHTygLbFLIFcFbYFdCrk66Ptgl0SuEnoT7NLI1UJPwfZArhp6DLYXcvXQQ9ieyE1A57C9kZuBXsXeBnJT0EqX1JaX1VNqCnqbAe0U0E4B7RTQTgHtFNC1QPfd7MImXVlCfwZVfUP1yRL6GdDqg35ivcbwDWytI3+R9EDGHUr6CrZWkaNJkeK79zQdl1o8Qd6kv/2oxCQTERERERFpG/0DTgNO6Z33s3AAAAAASUVORK5CYII="/>
                                </defs>
                            </svg>
                        </a>
                    </p>
                    <p class="flex justify-between items-center border-b pb-4 mb-4 text-gray-700">
                        Quy trình kết hợp với các vật liệu khác.
                        <a href="/downloads/material_combination.pdf" class="text-gray-500 cursor-pointer" download>
                            <svg width="40" height="40" viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink">
                                <rect width="40" height="40" fill="url(#pattern0_28_1009)"/>
                                <defs>
                                <pattern id="pattern0_28_1009" patternContentUnits="objectBoundingBox" width="1" height="1">
                                <use xlink:href="#image0_28_1009" transform="scale(0.0111111)"/>
                                </pattern>
                                <image id="image0_28_1009" width="90" height="90" preserveAspectRatio="none" xlink:href="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAFoAAABaCAYAAAA4qEECAAAACXBIWXMAAAsTAAALEwEAmpwYAAACQklEQVR4nO3c0WoTQRSH8X8LZq34AH3Dqi9i6oUKVWivfAcvxBcQUV+jiRaK2hbt5cjAXMQwu91Nz5yQme+DvUnKNv3lZJedLJWIiIiI6P9mko4lLSUtJM3TY2TcXFJY2+JjZNwyA/0dZfsWGehzoH0OHc+Btm+WsONkczIkIiIi2vlmrHX4NGetw6clax0+LVjr8GnOWodPM9Y6iIiIyLV9vMt2IOmNpN9pO0mPkXGvMxcsL1G270cG+gJo+0LPRkDvZoGJBrqqAhMNdFUFJhroqgpMNNBVFZhooKsqMNFAV1XYcKL3W/9W5kDSmaQ/ki4lvZDUGUJ36VuYuP9bSe8kPVaDnWXQPgxgT4Hu0r7WfzZiN9WepJseuD7ssdB9yCFNdnOHkesBvBz2GOgh5JDe3PgmN9WrAZAc9l3QdyGH9AXvTmT5setGwKxiD0FP3dd92yv1ySh1T0U3AajveU/kR5JOJf1N26n1vSUl76noRkJt8pz1JL/N7D8OYNF7Kiz/V0Y3AmyTzRI59ivzO34a7n/UGd/ijv73hsgfJT00fo3FHTygLbFLIFcFbYFdCrk66Ptgl0SuEnoT7NLI1UJPwfZArhp6DLYXcvXQQ9ieyE1A57C9kZuBXsXeBnJT0EqX1JaX1VNqCnqbAe0U0E4B7RTQTgHtFNC1QPfd7MImXVlCfwZVfUP1yRL6GdDqg35ivcbwDWytI3+R9EDGHUr6CrZWkaNJkeK79zQdl1o8Qd6kv/2oxCQTERERERFpG/0DTgNO6Z33s3AAAAAASUVORK5CYII="/>
                                </defs>
                            </svg>
                        </a>
                    </p>
                </div>
            </div>
        `;
    }
}

customElements.define('download-list-doc', DownloadListDoc);
