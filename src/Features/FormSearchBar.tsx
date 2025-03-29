import './styles/_new_block.scss';

export default class FormSearchBar extends HTMLElement {
    innerHTML = `
        <form>
            <div class="flex flex-col md:flex-row items-center justify-center gap-2 px-4">
                <div class="w-full md:w-auto">
                    <div class="relative">
                        <select class="w-full appearance-none rounded-lgd bg-white py-2 pr-10 pl-3 text-base text-gray-900 border border-gray-300 outline-none focus:border-indigo-500 focus:ring-1 focus:ring-indigo-500">
                            <option>Bộ lọc</option>
                            <option value="dang-bot">DẠNG BỘT</option>
                            <option value="dang-hat">DẠNG HẠT</option>
                        </select>
                        <svg class="absolute right-3 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-500 pointer-events-none" viewBox="0 0 16 16" fill="currentColor" aria-hidden="true">
                            <path fill-rule="evenodd" d="M4.22 6.22a.75.75 0 0 1 1.06 0L8 8.94l2.72-2.72a.75.75 0 1 1 1.06 1.06l-3.25 3.25a.75.75 0 0 1-1.06 0L4.22 7.28a.75.75 0 0 1 0-1.06Z" clip-rule="evenodd" />
                        </svg>
                    </div>
                </div>

                <div class="flex items-center w-full md:w-auto border border-gray-300 rounded-lgd overflow-hidden">
                    <input
                        type="text"
                        placeholder="Tìm kiếm sản phẩm"
                        class="px-4 py-2 w-full focus:outline-none"
                    />
                    <button class="p-2">
                        <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M7.33333 12.6667C10.2789 12.6667 12.6667 10.2789 12.6667 7.33333C12.6667 4.38781 10.2789 2 7.33333 2C4.38781 2 2 4.38781 2 7.33333C2 10.2789 4.38781 12.6667 7.33333 12.6667Z" stroke="#416675" stroke-width="1.2" stroke-linecap="round" stroke-linejoin="round"/>
                            <path d="M13.9996 14L11.0996 11.1" stroke="#416675" stroke-width="1.2" stroke-linecap="round" stroke-linejoin="round"/>
                        </svg>
                    </button>
                </div>

                <!-- Nút tìm kiếm -->
                <button class="w-full md:w-auto bg-orange-500 text-white px-4 py-2 rounded-lgd hover:bg-orange-600 transition">
                    Tìm kiếm
                </button>
            </div>
        </form>
    `;
}

customElements.define('form-search-bar-block', FormSearchBar);
